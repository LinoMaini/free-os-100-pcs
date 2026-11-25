// Two extra worlds.
//   teardown   the computer opens, its parts pop in and fly apart, and the camera zooms through the chip,
//              into the code it runs, into one letter of that code and down to a single bit (a transistor).
//              The zoom is "powers of ten": each level is its own group, scaled up around the point the next
//              level grows out of, and swapped for the next level when the two are the same size on screen.
//   mainframe  the bonus system: four IBM Z frames drop in one after another, money and power pour in.
import * as THREE from 'three';
import { smooth, clamp01, easeOutBack, PAL, toon, toonNew, part, rbox, outlineMat, makeLabel, sfx } from './kit.js';

const dummy = new THREE.Object3D();
const _coolerOff = new THREE.Vector3(); // reused each frame so the teardown loop allocates nothing
const MONO = 'ui-monospace, "Cascadia Mono", Consolas, Menlo, "DejaVu Sans Mono", monospace';
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const canvas = (w, h, draw) => { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); return c; };
const texOf = (c) => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; };
const basic = (map, extra = {}) => new THREE.MeshBasicMaterial({ map, toneMapped: false, ...extra });
const hide = (o, on) => { o.visible = on; };
const setS = (o, s) => o.scale.setScalar(Math.max(s, 0.0001));

function fan(r, blade = PAL.white, ring = '#3A3A44') {
  const g = new THREE.Group();
  const rim = part(new THREE.TorusGeometry(r, r * 0.12, 10, 40), toon(ring), 0.015);
  g.add(rim);
  const rot = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const b = part(rbox(r * 0.95, r * 0.34, 0.03, 0.01, 1), toon(blade), 0.012);
    b.position.x = r * 0.45;
    const arm = new THREE.Group();
    arm.rotation.z = (i * Math.PI * 2) / 5;
    b.rotation.x = 0.35;
    arm.add(b);
    rot.add(arm);
  }
  rot.add(part(new THREE.CylinderGeometry(r * 0.25, r * 0.25, 0.06, 20).rotateX(Math.PI / 2), toon(ring), 0.012));
  g.add(rot);
  g.userData.rot = rot;
  return g;
}

// ---------- the code inside the chip ----------
const CODE = [
  '#include <kernel.h>',
  '',
  'int main(void) {',
  '    power_on();',
  '    check_memory(2 * GB);',
  '    mount("/", OFFLINE);',
  '    load_kernel("linux");',
  '    start_desktop("Endless OS");',
  '    while (1) {',
  '        learn();',
  '    }',
  '}',
];
const FOCUS_LINE = 7, FOCUS_PREFIX = '    start_desktop("';
const KEYWORDS = /^(#include|int|void|while|return)$/;
function drawCode() {
  const S = 1024, FS = 38, LH = 62, X0 = 92, Y0 = 170;
  let glyph = null;
  const c = canvas(S, S, (g) => {
    g.fillStyle = '#15132B';
    g.fillRect(0, 0, S, S);
    g.fillStyle = '#26234A';
    g.fillRect(0, 0, S, 86);
    ['#FF4D4D', '#FFE14D', '#2FBF71'].forEach((col, i) => { g.fillStyle = col; g.beginPath(); g.arc(46 + i * 40, 43, 13, 0, Math.PI * 2); g.fill(); });
    g.font = `600 30px ${MONO}`;
    g.fillStyle = '#B7A3FF';
    g.fillText('kernel.c', 200, 54);
    g.font = `500 ${FS}px ${MONO}`;
    g.textBaseline = 'alphabetic';
    CODE.forEach((line, i) => {
      const y = Y0 + i * LH;
      if (i === FOCUS_LINE) { g.fillStyle = 'rgba(255,225,77,.12)'; g.fillRect(70, y - FS, S - 110, LH); }
      g.fillStyle = '#5B5880';
      g.textAlign = 'right';
      g.fillText(String(i + 1), 58, y);
      g.textAlign = 'left';
      let x = X0;
      const tokens = line.match(/"[^"]*"|#include|<[^>]*>|[A-Za-z_]\w*|\d+|\s+|./g) || [];
      tokens.forEach((tok, k) => {
        let col = '#F4F1FF';
        if (KEYWORDS.test(tok)) col = '#FF9ECF';
        else if (tok[0] === '"' || tok[0] === '<') col = '#FFE14D';
        else if (/^\d/.test(tok)) col = '#C8EE5A';
        else if (/^[A-Za-z_]/.test(tok) && tokens[k + 1] === '(') col = '#5CE1E6';
        else if (/^[A-Z_]+$/.test(tok)) col = '#FFB07A';
        if (i === FOCUS_LINE && tok === '"Endless OS"') {
          // the E is drawn on its own plane so it can turn into bits
          g.fillStyle = col;
          g.fillText('"', x, y);
          const qx = x + g.measureText('"').width, ew = g.measureText('E').width;
          glyph = { x: qx, y, w: ew };
          g.fillText('ndless OS"', qx + ew, y);
          x += g.measureText(tok).width;
          return;
        }
        g.fillStyle = col;
        g.fillText(tok, x, y);
        x += g.measureText(tok).width;
      });
    });
    // a blinking-cursor block at the end of the focus line is drawn in 3D instead
  });
  return { c, glyph, S, FS };
}

export function addAbsurdWorlds(W) {
  // ======================= teardown: open the computer and zoom down to a bit =======================
  {
    const group = new THREE.Group();
    const lz = (z) => Math.log(Math.max(z, 1e-6));
    const win = (Z, a, b) => smooth(lz(a), lz(b), lz(Z));

    // ---- level 1: the tower ----
    const L1 = new THREE.Group(), L1in = new THREE.Group();
    L1.add(L1in);
    group.add(L1);
    const caseMat = toon(PAL.white);
    const pieces = []; // parts that fly apart: { o, dir, spin, pop }
    const add1 = (o, x, y, z, pop = -1) => { o.position.set(x, y, z); L1in.add(o); const p = { o, home: o.position.clone(), dir: new THREE.Vector3(), spin: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(4), pop }; pieces.push(p); return p; };
    add1(part(rbox(2.3, 2.6, 0.08, 0.04), caseMat, 0.03), 0, 0, -0.46);
    add1(part(rbox(2.3, 0.08, 1.0, 0.03), caseMat, 0.03), 0, 1.27, 0);
    add1(part(rbox(2.3, 0.08, 1.0, 0.03), caseMat, 0.03), 0, -1.27, 0);
    add1(part(rbox(0.08, 2.6, 1.0, 0.03), caseMat, 0.03), -1.13, 0, 0);
    add1(part(rbox(0.08, 2.6, 1.0, 0.03), caseMat, 0.03), 1.13, 0, 0);
    [-0.9, 0.9].forEach((x) => [-0.35, 0.35].forEach((z) => add1(part(rbox(0.22, 0.1, 0.22, 0.03), toon(PAL.ink), 0.01), x, -1.36, z)));
    // rainbow light strip along the top
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 0.07), basic(texOf(canvas(256, 8, (g) => {
      const gr = g.createLinearGradient(0, 0, 256, 0);
      ['#FF4D4D', '#FFB07A', '#FFE14D', '#C8EE5A', '#5CE1E6', '#7CC8FF', '#B7A3FF', '#FF9ECF'].forEach((c, i, a) => gr.addColorStop(i / (a.length - 1), c));
      g.fillStyle = gr; g.fillRect(0, 0, 256, 8);
    }))));
    add1(strip, 0, 1.18, -0.2);
    // motherboard with gold traces
    const board = new THREE.Mesh(rbox(2.0, 2.3, 0.05, 0.02), toonNew('#138A4A'));
    const traces = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 2.3), basic(texOf(canvas(512, 590, (g, w, h) => {
      g.strokeStyle = '#F2B632'; g.lineWidth = 3; g.globalAlpha = 0.8;
      for (let i = 0; i < 36; i++) {
        const x = (i * 97) % w, y = (i * 173) % h;
        g.beginPath(); g.moveTo(x, y); g.lineTo(x + 60 * ((i % 3) - 1), y); g.lineTo(x + 60 * ((i % 3) - 1), y + 90); g.stroke();
        g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.fill();
      }
    })), { transparent: true }));
    traces.position.z = 0.03;
    const boardG = new THREE.Group();
    boardG.add(board, traces);
    const boardP = add1(boardG, 0, 0, -0.4);
    // CPU chip (level 2 takes over from it), cooler with a fan
    const F1 = new THREE.Vector3(-0.2, 0.55, -0.355);
    const chip = part(rbox(0.42, 0.42, 0.04, 0.012), toon('#C9CED6'), 0.012);
    chip.position.copy(F1);
    L1in.add(chip);
    const cooler = new THREE.Group();
    cooler.add(part(rbox(0.62, 0.62, 0.3, 0.05), toon('#9AA3AD'), 0.02));
    const cFan = fan(0.25);
    cFan.position.z = 0.16;
    cooler.add(cFan);
    const coolerP = add1(cooler, F1.x, F1.y, -0.18, 0);
    // four RGB memory sticks
    [PAL.pink, PAL.cyan, PAL.lime, PAL.lilac].forEach((c, i) => add1(part(rbox(0.07, 1.0, 0.28, 0.02), toon(c), 0.012), 0.42 + i * 0.13, 0.42, -0.24, 1 + i));
    // graphics card with two fans
    const gpu = new THREE.Group();
    gpu.add(part(rbox(1.5, 0.3, 0.45, 0.04), toon('#2B2B33'), 0.02));
    [-0.38, 0.38].forEach((x) => { const f = fan(0.12, PAL.yellow); f.position.set(x, 0, 0.235); gpu.add(f); });
    add1(gpu, -0.15, -0.35, -0.12, 5);
    add1(part(rbox(0.5, 0.12, 0.03, 0.01), toon('#0E6B3A'), 0.01), 0.42, -0.75, -0.36, 6); // SSD
    add1(part(rbox(0.9, 0.5, 0.75, 0.05), toon('#3A3A44'), 0.02), 0.55, -0.96, 0.0, 7); // power supply
    // two cables
    [[PAL.coral, [0.4, -0.7, 0.1], [0.1, -0.2, 0.25], [0.3, 0.1, -0.1]], [PAL.yellow, [0.75, -0.7, 0.05], [0.95, 0.0, 0.15], [0.7, 0.85, -0.25]]].forEach(([c, a, m, b], i) => {
      const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(...a), new THREE.Vector3(...m), new THREE.Vector3(...b)]);
      add1(part(new THREE.TubeGeometry(curve, 24, 0.035, 8), toon(c), 0.012), 0, 0, 0, 8 + i);
    });
    // the side panel: swings open on its back edge, then flies off
    const panelPivot = new THREE.Group();
    panelPivot.position.set(1.15, 0, 0.53);
    const panel = new THREE.Group();
    panel.add(part(rbox(2.3, 2.6, 0.06, 0.04), caseMat, 0.03));
    const qTex = texOf(canvas(256, 256, (g) => {
      g.fillStyle = PAL.yellow; g.beginPath(); g.arc(128, 128, 118, 0, Math.PI * 2); g.fill();
      g.lineWidth = 12; g.strokeStyle = '#000'; g.stroke();
      g.fillStyle = '#000'; g.font = `900 170px "Archivo Black", "Arial Black", sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('?', 128, 140);
    }));
    const qFace = new THREE.Mesh(new THREE.CircleGeometry(0.42, 40), basic(qTex, { transparent: true }));
    qFace.position.set(0, 0.15, 0.04);
    panel.add(qFace);
    for (let i = 0; i < 6; i++) { const v = new THREE.Mesh(rbox(1.2, 0.05, 0.02, 0.01), toon(PAL.ink)); v.position.set(0, -0.55 - i * 0.11, 0.035); panel.add(v); }
    panel.position.x = -1.15;
    panelPivot.add(panel);
    L1in.add(panelPivot);
    const cpuLab = makeLabel('CPU', PAL.yellow);
    cpuLab.position.set(0.28, 1.0, 0.2);
    L1in.add(cpuLab);
    pieces.forEach((p) => {
      p.dir.copy(p.home).sub(F1);
      p.dir.z = -0.35; // out to the sides and a little back, never into the camera
      p.dir.normalize();
    });

    // ---- level 2: the CPU package and its die ----
    const S2 = 10;
    const L2 = new THREE.Group(), L2in = new THREE.Group();
    L2.add(L2in);
    group.add(L2);
    const DIE_W = 2.6, DIE_H = 2.0, PXU = 400;
    const coreAt = (col, row) => [-0.93 + col * 0.62, row ? -0.62 : 0.62];
    const F2 = new THREE.Vector3(0.31, 0.62, 0.15);
    const dieTex = texOf(canvas(DIE_W * PXU, DIE_H * PXU, (g, w, h) => {
      g.fillStyle = '#2A1B4A'; g.fillRect(0, 0, w, h);
      const toPx = (x, y) => [(x + DIE_W / 2) * PXU, (DIE_H / 2 - y) * PXU];
      // cache in the middle band
      g.fillStyle = '#5B6B9A'; const [cx0, cy0] = toPx(-1.25, 0.3); g.fillRect(cx0, cy0, 2.5 * PXU, 0.6 * PXU);
      g.strokeStyle = '#8FA2D6'; g.lineWidth = 2;
      for (let x = cx0; x < cx0 + 2.5 * PXU; x += 14) { g.beginPath(); g.moveTo(x, cy0); g.lineTo(x, cy0 + 0.6 * PXU); g.stroke(); }
      for (let y = cy0; y < cy0 + 0.6 * PXU; y += 14) { g.beginPath(); g.moveTo(cx0, y); g.lineTo(cx0 + 2.5 * PXU, y); g.stroke(); }
      const cols = [PAL.pink, PAL.cyan, PAL.lime, PAL.lilac, PAL.coral, PAL.peach, PAL.sky, PAL.aqua];
      for (let row = 0; row < 2; row++) for (let col = 0; col < 4; col++) {
        const [x, y] = coreAt(col, row);
        const [px, py] = toPx(x - 0.275, y + 0.275);
        if (row === 0 && col === 2) { g.fillStyle = '#0D0820'; g.fillRect(px, py, 0.55 * PXU, 0.55 * PXU); continue; }
        g.fillStyle = cols[row * 4 + col]; g.fillRect(px, py, 0.55 * PXU, 0.55 * PXU);
        g.fillStyle = 'rgba(0,0,0,.22)';
        for (let k = 0; k < 5; k++) g.fillRect(px + 14, py + 18 + k * 40, 0.55 * PXU - 28, 16);
      }
      g.strokeStyle = '#F2B632'; g.lineWidth = 5;
      for (let k = 0; k < 9; k++) { const x = 30 + k * 125; g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.globalAlpha = 0.35; g.stroke(); g.globalAlpha = 1; }
    }));
    const substrate = part(rbox(4.8, 4.8, 0.2, 0.06), toon('#0E6B3A'), 0.03);
    const die = new THREE.Mesh(new THREE.PlaneGeometry(DIE_W, DIE_H), basic(dieTex));
    die.position.z = 0.11;
    const caps = new THREE.Group();
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const cp = part(rbox(0.22, 0.12, 0.1, 0.02), toon(i % 2 ? '#F2B632' : PAL.ink), 0.01);
      cp.position.set(Math.cos(a) * 1.95, Math.sin(a) * 1.95, 0.15);
      cp.rotation.z = a;
      caps.add(cp);
    }
    const core = part(rbox(0.55, 0.55, 0.06, 0.015), toon(PAL.yellow), 0.012);
    core.position.copy(F2).setZ(0.14);
    const lid = part(rbox(4.2, 4.2, 0.35, 0.12), toon('#C9CED6'), 0.03);
    lid.position.z = 0.3;
    L2in.add(substrate, die, caps, core, lid);

    // ---- level 3: the code the core runs ----
    const PANEL = 4.6;
    const S3 = (S2 * PANEL) / 0.55;
    const L3 = new THREE.Group(), L3in = new THREE.Group();
    L3.add(L3in);
    group.add(L3);
    const code = drawCode();
    const codeMat = basic(texOf(code.c), { transparent: true, opacity: 0, depthWrite: false });
    const codePanel = new THREE.Mesh(new THREE.PlaneGeometry(PANEL, PANEL), codeMat);
    codePanel.renderOrder = 2;
    L3in.add(codePanel);
    const u3 = PANEL / code.S;
    const gw = code.glyph.w * u3, gh = code.FS * 1.25 * u3;
    const F3 = new THREE.Vector3((code.glyph.x + code.glyph.w / 2) * u3 - PANEL / 2, PANEL / 2 - (code.glyph.y - code.FS * 0.36) * u3, 0);
    const ECH = 160, ECW = Math.max(32, Math.round((ECH * gw) / gh));
    const eMat = basic(texOf(canvas(ECW, ECH, (g) => {
      g.font = `700 ${Math.round(ECH / 1.25)}px ${MONO}`;
      g.fillStyle = '#FF7A1A'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText('E', ECW / 2, ECH * 0.53);
    })), { transparent: true, depthWrite: false });
    const eGlyph = new THREE.Mesh(new THREE.PlaneGeometry(gw, gh), eMat);
    eGlyph.position.copy(F3);
    eGlyph.renderOrder = 3;
    L3in.add(eGlyph);

    // ---- level 4: the letter E is the byte 01000101 ----
    const BITS = '01000101', BW = 0.48, BSP = 0.56;
    const S4 = (S3 * BITS.length * BSP) / gw;
    const L4 = new THREE.Group(), L4in = new THREE.Group();
    L4.add(L4in);
    group.add(L4);
    const digitTex = (d) => texOf(canvas(128, 160, (g) => {
      g.font = `700 120px ${MONO}`; g.fillStyle = d === '1' ? '#000' : '#FFFFFF'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(d, 64, 86);
    }));
    const T0 = digitTex('0'), T1 = digitTex('1');
    const bits = [...BITS].map((d, i) => {
      const on = d === '1';
      const b = new THREE.Group();
      const h = on ? 0.9 : 0.45;
      const body = part(rbox(BW, h, 0.4, 0.06), toon(on ? PAL.yellow : '#2A2A36'), 0.02);
      body.position.y = h / 2 - 0.45;
      const face = new THREE.Mesh(new THREE.PlaneGeometry(BW * 0.8, BW), basic(on ? T1 : T0, { transparent: true }));
      face.position.set(0, h / 2 - 0.45, 0.21);
      b.add(body, face);
      b.position.x = (i - (BITS.length - 1) / 2) * BSP;
      L4in.add(b);
      return { b, on, home: b.position.clone(), dir: new THREE.Vector3((i - 3.5) * 0.4, (i % 2 ? 1 : -1) * 0.6, 1).normalize() };
    });
    const FOCUS_BIT = 1;
    const F4 = new THREE.Vector3(bits[FOCUS_BIT].home.x, 0, 0);
    const byteLab = makeLabel('E = 01000101', PAL.white);
    byteLab.scale.setScalar(1.1);
    byteLab.position.set(0, 0.85, 0.1);
    L4in.add(byteLab);

    // ---- level 5: one bit is one transistor, switched on ----
    const S5 = (S4 * 4.0) / BW;
    const A4 = (2 * S3) / gw;     // the E is 2 units wide on screen: the bits take over
    const A5 = (2.2 * S4) / BW;   // the bit is 2.2 units wide: the transistor takes over
    const ZEND = S5 * 1.4;
    const L5 = new THREE.Group(), L5in = new THREE.Group();
    L5.add(L5in);
    group.add(L5);
    // the transistor reads as a little podium: source (left) and drain (right) are the two side steps,
    // the gate the raised middle, and current runs through the channel between them once it's ON.
    // Width stays 4.0 so the zoom hands off cleanly from the bit (see S5); heights/depth are trimmed and the
    // whole set is lifted so it sits centred on the camera's look point (0,0,0) instead of dropping off-frame.
    const DEP = 1.5;                 // one shallow depth for every block: far less crowded than the old 1.6–2.0
    const SLAB_Y = -0.55, SIDE_Y = -0.07, GATE_Y = 0.42;
    const slab = part(rbox(4.0, 0.6, DEP + 0.2, 0.08), toon('#B8BEC8'), 0.03);
    slab.position.set(0, SLAB_Y, 0);
    L5in.add(slab);
    const src = part(rbox(1.15, 0.34, DEP, 0.07), toon(PAL.coral), 0.02); src.position.set(-1.32, SIDE_Y, 0);
    const drn = part(rbox(1.15, 0.34, DEP, 0.07), toon(PAL.sky), 0.02); drn.position.set(1.32, SIDE_Y, 0);
    const oxide = part(rbox(1.3, 0.08, DEP, 0.02), toon(PAL.lime), 0.015); oxide.position.set(0, 0.1, 0);
    const gate = part(rbox(1.05, 0.5, DEP, 0.07), toon(PAL.yellow), 0.02); gate.position.set(0, GATE_Y, 0);
    L5in.add(src, drn, oxide, gate);
    const onLab = makeLabel('1 = ON', PAL.lime);
    onLab.position.set(0, 1.0, 0.3);
    L5in.add(onLab);
    // the current: two tidy lanes of electrons gliding through the channel, not a scattered cloud
    const EN = 18;
    const electrons = new THREE.InstancedMesh(new THREE.SphereGeometry(0.075, 14, 12), basic(null, { color: '#2BE8FF' }), EN);
    electrons.frustumCulled = false;
    const eSeed = Array.from({ length: EN }, (_, i) => ({ u: i / EN, lane: i % 2 ? 1 : -1 }));
    L5in.add(electrons);

    // ---- a rain of 0s and 1s for the deepest levels (not scaled with the levels) ----
    const RN = 70;
    const rainMat0 = basic(T0, { transparent: true, depthWrite: false, color: '#B7A3FF' });
    const rainMat1 = basic(T1, { transparent: true, depthWrite: false, color: '#FFE14D' });
    const rain0 = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.32, 0.4), rainMat0, RN);
    const rain1 = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.32, 0.4), rainMat1, RN);
    rain0.frustumCulled = rain1.frustumCulled = false;
    const drops = Array.from({ length: RN * 2 }, (_, i) => ({ a: i * 2.399, r: 2.2 + ((i * 0.618) % 1) * 5, z: -30 + ((i * 0.37) % 1) * 38, sp: 9 + ((i * 0.29) % 1) * 9 }));
    group.add(rain0, rain1);

    const lastLevel = { n: 0 };
    const off = new THREE.Vector3();
    W.teardown = {
      group,
      onEnter() { lastLevel.n = 0; },
      update(t, dt, reduce, sp = 0) {
        const q = reduce ? 0.3 : clamp01((sp - 0.1) / 0.85); // dive runs across sp 0.1 -> 0.95, so almost the whole section scrubs (no frozen tail)
        const zu = ease(smooth(0.27, 0.97, q));
        const Z = Math.exp(zu * Math.log(ZEND));
        const lvl = Z < 4 ? 1 : Z < 60 ? 2 : Z < A4 ? 3 : Z < A5 ? 4 : 5;
        if (lvl > lastLevel.n && lastLevel.n) sfx.pop(260 + lvl * 140);
        lastLevel.n = lvl;
        // the caption on the page: the parts, the chip, the code, the bits
        const cap = Math.min(4, lvl);
        if (cap !== lastLevel.cap) { lastLevel.cap = cap; document.documentElement.dataset.td = String(cap); }

        // level 1
        const open = smooth(0.03, 0.13, q), fly = smooth(0.12, 0.2, q);
        panelPivot.rotation.y = -open * 1.9 - fly * 1.5;
        panelPivot.position.set(1.15 + fly * 4, fly * 3, 0.53 + fly * 2);
        panelPivot.rotation.x = fly * 2;
        panelPivot.visible = fly < 0.99;
        const lift = smooth(0.2, 0.27, q);
        const p1 = win(Z, 1.05, 2.6), e1 = win(Z, 2.2, 14), eb = win(Z, 12, 150);
        for (const p of pieces) {
          let s = 1;
          if (p.pop >= 0 && p !== coolerP) s = easeOutBack(smooth(0.08 + p.pop * 0.014, 0.14 + p.pop * 0.014, q));
          const ex = p === boardP ? 0 : e1;
          p.o.position.copy(p.home).addScaledVector(p.dir, ex * 3.2);
          if (p === coolerP) p.o.position.add(_coolerOff.set(0.4 * lift, 1.6 * lift, 2.4 * lift));
          p.o.rotation.set(p.spin.x * ex + (p === coolerP ? lift * 1.4 : 0), p.spin.y * ex, p.spin.z * ex);
          if (p === boardP) { p.o.position.z = p.home.z - eb * 2; s = 1 - eb * 0.3; }
          setS(p.o, s);
          p.o.visible = (p === boardP ? eb : ex) < 0.985 && !(p === coolerP && lift > 0.99);
        }
        cFan.userData.rot.rotation.z += reduce ? 0 : dt * (4 + open * 18);
        chip.visible = Z < 4.2;
        setS(cpuLab, 0.32 * easeOutBack(smooth(0.22, 0.27, q)) * (1 - e1));
        cpuLab.visible = e1 < 0.98;
        off.set(0, 0, 0).lerp(F1, p1);
        L1in.position.copy(off).negate();
        L1.rotation.y = -0.35 * (1 - p1);
        setS(L1, Z);
        L1.visible = Z < 160;

        // level 2
        const v2 = Z >= 3.9 && Z < 420;
        L2.visible = v2;
        if (v2) {
          const p2 = win(Z, 6, 40), lidT = win(Z, 5, 15), e2 = win(Z, 90, 420);
          lid.position.set(lidT * 3, lidT * 2, 0.3 + lidT * 9);
          lid.rotation.set(lidT * 2.4, lidT * 1.2, 0);
          lid.visible = lidT < 0.98;
          core.visible = Z < 95;
          substrate.position.z = -e2 * 3; die.position.z = 0.11 - e2 * 3; caps.position.z = -e2 * 3;
          caps.rotation.z = e2 * 2;
          off.set(0, 0, 0).lerp(F2, p2);
          L2in.position.copy(off).negate();
          setS(L2, Z / S2);
        }

        // level 3
        const v3 = Z >= 38 && Z < A4 * 8;
        L3.visible = v3;
        if (v3) {
          codeMat.opacity = win(Z, 40, 80);
          // while the core is still there the code is drawn over it; later it sits just behind the bits
          const over = Z < 100;
          codeMat.depthTest = eMat.depthTest = !over;
          codePanel.position.z = over ? 0 : -0.02;
          eGlyph.position.z = codePanel.position.z + 0.002;
          const p3 = win(Z, 85, 700);
          off.set(0, 0, 0).lerp(F3, p3);
          L3in.position.copy(off).negate();
          eMat.opacity = codeMat.opacity * (1 - win(Z, A4, A4 * 1.7));
          setS(eGlyph, 1 + (reduce ? 0 : Math.max(0, Math.sin(t * 6)) * 0.25 * win(Z, 300, 900)));
          setS(L3, Z / S3);
        }

        // level 4
        const v4 = Z >= A4 * 0.9;
        L4.visible = v4;
        if (v4) {
          const p4 = win(Z, A4 * 2, A4 * 7), e4 = win(Z, A5, A5 * 2.2);
          bits.forEach((b, i) => {
            const pop = easeOutBack(win(Z, A4 * 0.9 * (1 + i * 0.08), A4 * 1.6 * (1 + i * 0.08)));
            const away = i === FOCUS_BIT ? 0 : e4;
            b.b.position.copy(b.home).addScaledVector(b.dir, away * 6);
            b.b.rotation.set(away * 3, away * (i - 3.5), 0);
            setS(b.b, pop);
            b.b.visible = away < 0.98 && !(i === FOCUS_BIT && Z > A5 * 1.45);
          });
          setS(byteLab, 1.1 * easeOutBack(win(Z, A4 * 1.5, A4 * 2.6)));
          byteLab.position.y = 0.85 + e4 * 4;
          byteLab.visible = e4 < 0.9;
          off.set(0, 0, 0).lerp(F4, p4);
          L4in.position.copy(off).negate();
          setS(L4, Z / S4);
        }

        // level 5 — build the transistor one part at a time as we arrive, then switch it ON
        const v5 = Z >= A5;
        L5.visible = v5;
        if (v5) {
          const slabK = reduce ? 1 : easeOutBack(win(Z, A5 * 0.95, A5 * 1.22));
          const sideK = reduce ? 1 : easeOutBack(win(Z, A5 * 1.12, A5 * 1.5));
          const oxK = reduce ? 1 : win(Z, A5 * 1.3, A5 * 1.7);
          const gateK = reduce ? 1 : easeOutBack(win(Z, A5 * 1.45, A5 * 1.95));
          const onK = reduce ? 1 : win(Z, ZEND * 0.66, ZEND * 0.9); // the gate goes ON last
          setS(slab, slabK);                                         // the body lies down first
          src.position.y = drn.position.y = SIDE_Y - (1 - sideK) * 0.5; // source and drain rise out of it
          setS(src, sideK); setS(drn, sideK);
          setS(oxide, oxK);
          gate.position.y = GATE_Y + (1 - gateK) * 0.9 + (reduce ? 0 : onK * Math.sin(t * 7) * 0.02); // gate drops on, then hums
          setS(gate, gateK);
          setS(onLab, 0.8 * (reduce ? 1 : easeOutBack(win(Z, ZEND * 0.68, ZEND * 0.9))));
          // current: two lanes, full-size across the channel, fading only at the mouths, flowing once ON
          for (let i = 0; i < EN; i++) {
            const e = eSeed[i];
            const u = reduce ? e.u : (e.u + t * 0.22) % 1;
            const flow = onK * Math.min(1, Math.sin(u * Math.PI) * 5);
            dummy.position.set(-1.02 + u * 2.04, 0.12 + e.lane * 0.045 + (reduce ? 0 : Math.sin(t * 6 + i * 1.7) * 0.012), 0.78 + e.lane * 0.025);
            dummy.scale.setScalar(Math.max(flow, 0.0001));
            dummy.updateMatrix();
            electrons.setMatrixAt(i, dummy.matrix);
          }
          electrons.instanceMatrix.needsUpdate = true;
          electrons.visible = onK > 0.01;
          setS(L5, Z / S5);
        }

        // rain of bits
        const rk = reduce ? 0 : win(Z, A4 * 1.2, A4 * 5);
        rain0.visible = rain1.visible = rk > 0.01;
        if (rk > 0.01) {
          drops.forEach((d, i) => {
            d.z += dt * d.sp * (0.6 + rk);
            if (d.z > 9) d.z -= 40;
            dummy.position.set(Math.cos(d.a) * d.r, Math.sin(d.a) * d.r * 0.7, d.z);
            dummy.rotation.set(0, 0, 0);
            dummy.scale.setScalar(rk);
            dummy.updateMatrix();
            (i % 2 ? rain1 : rain0).setMatrixAt(i >> 1, dummy.matrix);
          });
          rain0.instanceMatrix.needsUpdate = rain1.instanceMatrix.needsUpdate = true;
        }
      },
    };
  }

  // ======================= mainframe: the heaviest operating system =======================
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    root.position.y = -1.0;
    group.add(root);
    const FX = [-0.99, -0.33, 0.33, 0.99];
    const frameMat = toon('#24242C');
    const LEDN = 4 * 18;
    const leds = new THREE.InstancedMesh(rbox(0.07, 0.05, 0.03, 0.01, 1), new THREE.MeshBasicMaterial({ toneMapped: false }), LEDN);
    leds.frustumCulled = false;
    for (let i = 0; i < LEDN; i++) leds.setColorAt(i, new THREE.Color('#3A3A44'));
    const ledCols = ['#2FBF71', '#FFE14D', '#5CE1E6', '#FF7A1A'].map((c) => new THREE.Color(c));
    const off = new THREE.Color('#3A3A44');
    const frames = FX.map((x, i) => {
      const f = new THREE.Group();
      f.add(part(rbox(0.62, 2.1, 0.8, 0.05), frameMat, 0.025));
      const bar = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 1.7), basic(null, { color: '#3D7BFF' }));
      bar.position.set(0.2, 0.05, 0.405);
      f.add(bar);
      f.position.set(x, 1.05, 0);
      root.add(f);
      return f;
    });
    root.add(leds);
    const weight = makeLabel('2,558 kg', PAL.white);
    weight.position.set(0, 1.35, 0.5);
    root.add(weight);
    const bolt = part(new THREE.ExtrudeGeometry(new THREE.Shape([[-0.05, 0.55], [0.25, 0.55], [0.05, 0.12], [0.28, 0.12], [-0.12, -0.55], [0.0, -0.05], [-0.25, -0.05]].map(([x, y]) => new THREE.Vector2(x, y))), { depth: 0.1, bevelEnabled: false }).center(), toon(PAL.yellow), 0.02);
    bolt.position.set(-1.55, 1.55, 0.3);
    root.add(bolt);
    // one of our little PCs, for scale
    const mini = new THREE.Group();
    mini.add(part(rbox(0.5, 0.34, 0.05, 0.03), toon(PAL.white), 0.015));
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.26), basic(null, { color: '#FF7A1A' }));
    scr.position.z = 0.03;
    mini.add(scr);
    const st = part(rbox(0.08, 0.16, 0.05, 0.02), toon(PAL.white), 0.012); st.position.y = -0.24;
    const ft = part(rbox(0.3, 0.04, 0.16, 0.02), toon(PAL.white), 0.012); ft.position.y = -0.33;
    mini.add(st, ft);
    mini.position.set(1.72, 0.36, 0.45);
    mini.rotation.y = -0.4;
    root.add(mini);
    // coins pouring in
    const CN = 26;
    const coins = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.13, 0.13, 0.04, 24).rotateX(Math.PI / 2), toon('#F2B632'), CN);
    const coinLines = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.13, 0.13, 0.04, 24).rotateX(Math.PI / 2), outlineMat(0.015), CN);
    coins.frustumCulled = coinLines.frustumCulled = false;
    root.add(coinLines, coins);
    const coinSeed = Array.from({ length: CN }, (_, i) => ({ x: (((i * 0.618) % 1) - 0.5) * 3.2, z: 0.2 + ((i * 0.37) % 1) * 0.8, d: (i * 0.173) % 1, r: i }));
    const dust = Array.from({ length: 4 }, (_, i) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.06, 8, 30), toon(PAL.white));
      ring.rotation.x = Math.PI / 2;
      ring.position.set(FX[i], -0.02, 0.1);
      root.add(ring);
      return ring;
    });
    const landed = [false, false, false, false];
    const DROP = (i) => 0.25 + i * 0.32;
    const bounce = (x) => {
      const n = 7.5625, d = 2.75;
      if (x < 1 / d) return n * x * x;
      if (x < 2 / d) return n * (x -= 1.5 / d) * x + 0.75;
      if (x < 2.5 / d) return n * (x -= 2.25 / d) * x + 0.9375;
      return n * (x -= 2.625 / d) * x + 0.984375;
    };
    W.mainframe = {
      group,
      onEnter() { landed.fill(false); },
      update(t, dt, reduce) {
        let jolt = 0;
        frames.forEach((f, i) => {
          const k = reduce ? 1 : clamp01((t - DROP(i)) / 0.75);
          f.position.y = 1.05 + (1 - bounce(k)) * 6;
          f.rotation.z = reduce ? 0 : (1 - k) * (i % 2 ? 0.2 : -0.2);
          if (!reduce && k >= 0.36 && !landed[i]) { landed[i] = true; sfx.pop(70 + i * 12); }
          const since = t - DROP(i) - 0.27;
          jolt += since > 0 && since < 0.4 ? Math.sin(since * 40) * (0.4 - since) * 0.12 : 0;
          const dk = reduce ? 1 : clamp01(since / 0.7);
          dust[i].visible = !reduce && dk > 0 && dk < 1;
          dust[i].scale.setScalar(0.4 + dk * 2.2);
          dust[i].position.y = -0.02 + dk * 0.15;
        });
        root.position.y = -1.0 + jolt;
        for (let i = 0; i < LEDN; i++) {
          const fi = Math.floor(i / 18), j = i % 18;
          dummy.position.set(FX[fi] - 0.17 + (j % 3) * 0.11, 0.35 + Math.floor(j / 3) * 0.13 + frames[fi].position.y - 1.05 + 0.25, 0.42);
          dummy.rotation.set(0, 0, 0);
          dummy.scale.setScalar(1);
          dummy.updateMatrix();
          leds.setMatrixAt(i, dummy.matrix);
          const on = reduce ? (i % 3 !== 0) : Math.sin(t * (3 + (i % 5)) + i * 1.7) > 0.1;
          leds.setColorAt(i, on ? ledCols[i % 4] : off);
        }
        leds.instanceMatrix.needsUpdate = true;
        if (leds.instanceColor) leds.instanceColor.needsUpdate = true;
        const wk = reduce ? 1 : easeOutBack(clamp01((t - 1.75) / 0.4));
        setS(weight, 0.62 * wk);
        weight.rotation.z = -0.08;
        setS(bolt, 0.75 * (reduce ? 1 : easeOutBack(clamp01((t - 2.1) / 0.4)) * (1 + Math.max(0, Math.sin(t * 7)) * 0.18)));
        bolt.rotation.z = reduce ? 0 : Math.sin(t * 9) * 0.12;
        const coinsOn = reduce ? 0 : clamp01((t - 2.4) / 0.5);
        coins.visible = coinLines.visible = coinsOn > 0;
        if (coinsOn > 0) {
          coinSeed.forEach((c, i) => {
            const u = (c.d + (t - 2.4) * 0.35) % 1;
            dummy.position.set(c.x, 3.2 - u * 4.6, c.z);
            dummy.rotation.set(t * 3 + c.r, t * 2 + c.r * 0.5, 0);
            dummy.scale.setScalar(coinsOn * (u < 0.92 ? 1 : (1 - u) / 0.08));
            dummy.updateMatrix();
            coins.setMatrixAt(i, dummy.matrix);
            coinLines.setMatrixAt(i, dummy.matrix);
          });
          coins.instanceMatrix.needsUpdate = coinLines.instanceMatrix.needsUpdate = true;
        }
        mini.position.y = 0.36 + (reduce ? 0 : Math.max(0, Math.sin(t * 4)) * 0.04 + jolt * 2);
      },
    };
  }
}
