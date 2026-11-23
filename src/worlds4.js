// The install tutorial, in 3D. A USB stick with eyes does the whole job while you scroll:
// 1 download Endless OS, 2 turn the stick into a "reformatter" USB, 3 boot an Asus PC from it (F2, then F8),
// 4 Endless OS installs itself, 5 ten sticks hop across 100 PCs until the board reads 100/100.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { COLORS } from './screens.js';
import { lerp, smooth, clamp01, easeOutBack, PAL, toon, toonNew, part, rbox, outlineMat, makeLabel, makeConfetti, labels, sfx } from './kit.js';

const DISPLAY = '"Archivo Black", "Arial Black", Impact, sans-serif';
const BODY = '700 1em Archivo, "Helvetica Neue", Arial, sans-serif';
const ORANGE = COLORS.endless;
const DARK = '#262633';
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const dummy = new THREE.Object3D();

// ---------- flat drawings for the screens ----------
function rr(g, x, y, w, h, r) {
  g.beginPath();
  if (g.roundRect) g.roundRect(x, y, w, h, r);
  else g.rect(x, y, w, h);
}
function boxed(g, x, y, w, h, r, fill, lw = 6) {
  rr(g, x, y, w, h, r);
  g.fillStyle = fill;
  g.fill();
  if (lw) { g.lineWidth = lw; g.strokeStyle = '#000'; g.stroke(); }
}
function say(g, s, x, y, size, color = '#000', { body = false, align = 'left' } = {}) {
  g.font = body ? BODY.replace('1em', `${size}px`) : `${size}px ${DISPLAY}`;
  g.fillStyle = color;
  g.textAlign = align;
  g.textBaseline = 'middle';
  g.fillText(s, x, y);
}
// a canvas texture, painted again once the web fonts have loaded
function canvasTex(draw, w = 512, h = 320) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  let last = [];
  const paint = (...a) => {
    if (a.length) last = a;
    const g = c.getContext('2d');
    g.clearRect(0, 0, w, h);
    g.lineJoin = 'round';
    draw(g, w, h, ...last);
    tex.needsUpdate = true;
  };
  paint();
  labels.push({ userData: { redraw: () => paint() } });
  tex.userData.paint = paint;
  return tex;
}
// the progress track every screen shares (the 3D bar sits on it)
const TRACK = { x: 58, y: 222, w: 396, h: 34 };
function track(g) { boxed(g, TRACK.x, TRACK.y, TRACK.w, TRACK.h, 17, '#FFFFFF', 6); }

const installer = (title, sub) => (g, W, H) => {
  g.fillStyle = '#D6E4FA';
  g.fillRect(0, 0, W, H);
  boxed(g, 22, 18, W - 44, H - 36, 14, '#FFFFFF', 6);
  g.fillStyle = '#ECECE6';
  rr(g, 25, 21, W - 50, 40, 11);
  g.fill();
  g.fillStyle = '#000';
  g.fillRect(25, 61, W - 50, 5);
  say(g, 'Endless OS Installer', 44, 42, 19, '#000', { body: true });
  boxed(g, 58, 92, 92, 92, 22, ORANGE, 6);
  say(g, 'e', 104, 134, 72, '#FFFFFF', { align: 'center' });
  say(g, title, 172, 120, 34);
  say(g, sub, 172, 160, 21, '#000', { body: true });
  track(g);
};
const bios = (dim) => (g, W, H) => {
  const gr = g.createLinearGradient(0, 0, 0, H);
  gr.addColorStop(0, '#1B47A8');
  gr.addColorStop(1, '#0B1F4D');
  g.fillStyle = gr;
  g.fillRect(0, 0, W, H);
  g.fillStyle = 'rgba(255,255,255,.14)';
  g.fillRect(0, 0, W, 50);
  say(g, 'BIOS', 22, 26, 26, '#FFFFFF');
  say(g, 'Setup utility', 104, 27, 18, '#BFD3FF', { body: true });
  [['CPU', '3.4 GHz'], ['Memory', '8 GB'], ['Storage', 'SSD 256 GB'], ['Boot order', 'Windows, USB']].forEach(([k, v], i) => {
    say(g, k, 30, 88 + i * 40, 20, '#BFD3FF', { body: true });
    say(g, v, 200, 88 + i * 40, 20, '#FFFFFF', { body: true });
  });
  boxed(g, W - 214, H - 62, 192, 44, 10, PAL.yellow, 5);
  say(g, 'F8  Boot Menu', W - 118, H - 39, 21, '#000', { align: 'center' });
  if (dim) { g.fillStyle = 'rgba(0,0,0,.45)'; g.fillRect(0, 0, W, H); }
};
const bootMenu = (g, W, H) => {
  bios(true)(g, W, H);
  boxed(g, 70, 34, W - 140, H - 68, 14, '#FFFFFF', 6);
  say(g, 'Boot Menu', W / 2, 74, 28, '#000', { align: 'center' });
  ['Windows Boot Manager', 'UEFI: USB Flash Disk', 'Enter Setup'].forEach((s, i) => {
    if (i === 1) boxed(g, 92, 108 + i * 50, W - 184, 42, 10, ORANGE, 5);
    say(g, s, W / 2, 130 + i * 50, 22, i === 1 ? '#FFFFFF' : '#000', { body: true, align: 'center' });
  });
};
const reformatting = (g, W, H) => {
  g.fillStyle = ORANGE;
  g.fillRect(0, 0, W, H);
  say(g, 'Endless OS', W / 2, 104, 54, '#FFFFFF', { align: 'center' });
  say(g, 'Reformatting this computer', W / 2, 162, 23, '#FFFFFF', { body: true, align: 'center' });
  track(g);
};
const homeScreen = (g, W, H) => {
  const gr = g.createLinearGradient(0, 0, W, H);
  gr.addColorStop(0, '#7CC8FF');
  gr.addColorStop(1, '#B7A3FF');
  g.fillStyle = gr;
  g.fillRect(0, 0, W, H);
  boxed(g, 136, 22, 240, 38, 19, '#FFFFFF', 5);
  const cols = [ORANGE, PAL.yellow, PAL.lime, PAL.pink, '#3D7BFF', PAL.aqua];
  for (let r = 0; r < 2; r++) for (let c = 0; c < 6; c++) boxed(g, 52 + c * 72, 90 + r * 88, 52, 52, 14, cols[(c + r * 3) % 6], 5);
  g.fillStyle = '#000';
  g.fillRect(0, H - 40, W, 40);
  boxed(g, 14, H - 32, 24, 24, 12, ORANGE, 0);
  say(g, '9:41', W - 18, H - 20, 18, '#FFFFFF', { body: true, align: 'right' });
};
const offScreen = (g, W, H) => {
  g.fillStyle = '#1E1E28';
  g.fillRect(0, 0, W, H);
  g.strokeStyle = 'rgba(255,255,255,.08)';
  g.lineWidth = 26;
  g.beginPath();
  g.moveTo(W * 0.55, -10);
  g.lineTo(W * 0.25, H + 10);
  g.stroke();
};
const powerOn = (g, W, H) => {
  g.fillStyle = '#000';
  g.fillRect(0, 0, W, H);
  say(g, 'Press F2 to enter Setup', 30, H - 40, 20, '#FFFFFF', { body: true });
};
function drawKey(g, W, H, label) {
  g.fillStyle = '#FFFFFF';
  g.fillRect(0, 0, W, H);
  if (label === 'power') {
    g.strokeStyle = '#000';
    g.lineWidth = 20;
    g.lineCap = 'round';
    g.beginPath();
    g.arc(W / 2, H / 2 + 8, 66, -Math.PI * 0.32, Math.PI * 1.32);
    g.stroke();
    g.beginPath();
    g.moveTo(W / 2, H / 2 - 74);
    g.lineTo(W / 2, H / 2 + 4);
    g.stroke();
    return;
  }
  say(g, label, W / 2, H / 2 + 6, label.length > 2 ? 64 : 112, '#000', { align: 'center' });
}
function drawBoard(g, W, H, n = 0) {
  boxed(g, 8, 8, W - 16, H - 16, 28, '#FFFFFF', 12);
  say(g, 'PCs ready', W / 2, 64, 42, '#000', { align: 'center' });
  say(g, `${n}/100`, W / 2, 164, 104, n >= 100 ? ORANGE : '#000', { align: 'center' });
}

// ---------- models ----------
function extrude(points, depth = 0.1) {
  const s = new THREE.Shape();
  s.moveTo(points[0][0], points[0][1]);
  for (const [x, y] of points.slice(1)) s.lineTo(x, y);
  const geo = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false });
  geo.center();
  return geo;
}
const ARROW = [[-0.17, 0.5], [0.17, 0.5], [0.17, 0.02], [0.4, 0.02], [0, -0.48], [-0.4, 0.02], [-0.17, 0.02]];

// the hero: an orange USB stick with googly eyes; local +x is the plug
const STICK = { body: rbox(0.62, 0.28, 0.14, 0.06), plug: rbox(0.24, 0.17, 0.09, 0.015), eye: new THREE.SphereGeometry(0.062, 16, 12), pupil: new THREE.SphereGeometry(0.034, 12, 10) };
const EYES = [[-0.17, 0.03], [0.0, 0.03]];
function makeStick() {
  const g = new THREE.Group();
  const bodyMat = toonNew(ORANGE, { emissive: new THREE.Color('#FFB020'), emissiveIntensity: 0 });
  g.add(part(STICK.body, bodyMat, 0.02));
  const plug = part(STICK.plug, toon('#CFCFD6'), 0.018);
  plug.position.x = 0.42;
  g.add(plug);
  const pupils = EYES.map(([x, y]) => {
    const e = part(STICK.eye, toon(PAL.white), 0.012);
    e.position.set(x, y, 0.075);
    const p = new THREE.Mesh(STICK.pupil, new THREE.MeshBasicMaterial({ color: '#000' }));
    p.position.z = 0.04;
    e.add(p);
    g.add(e);
    return p;
  });
  g.userData = { bodyMat, pupils };
  return g;
}
// many sticks at once: 7 instanced meshes instead of 10 draw calls per stick
function makeStickSwarm(n) {
  const mk = (geo, mat, count) => { const m = new THREE.InstancedMesh(geo, mat, count); m.frustumCulled = false; return m; };
  const M = {
    bodyL: mk(STICK.body, outlineMat(0.02), n), body: mk(STICK.body, toon(ORANGE), n),
    plugL: mk(STICK.plug, outlineMat(0.018), n), plug: mk(STICK.plug, toon('#CFCFD6'), n),
    eyeL: mk(STICK.eye, outlineMat(0.012), n * 2), eye: mk(STICK.eye, toon(PAL.white), n * 2),
    pup: mk(STICK.pupil, new THREE.MeshBasicMaterial({ color: '#000' }), n * 2),
  };
  const group = new THREE.Group();
  Object.values(M).forEach((m) => group.add(m));
  const plugOff = new THREE.Matrix4().makeTranslation(0.42, 0, 0);
  const eyeOff = EYES.map(([x, y]) => new THREE.Matrix4().makeTranslation(x, y, 0.075));
  const pupOff = EYES.map(([x, y]) => new THREE.Matrix4().makeTranslation(x, y + 0.012, 0.115));
  const tmp = new THREE.Matrix4();
  return {
    group,
    set(i, m) {
      M.body.setMatrixAt(i, m);
      M.bodyL.setMatrixAt(i, m);
      tmp.multiplyMatrices(m, plugOff);
      M.plug.setMatrixAt(i, tmp);
      M.plugL.setMatrixAt(i, tmp);
      for (let k = 0; k < 2; k++) {
        tmp.multiplyMatrices(m, eyeOff[k]);
        M.eye.setMatrixAt(i * 2 + k, tmp);
        M.eyeL.setMatrixAt(i * 2 + k, tmp);
        tmp.multiplyMatrices(m, pupOff[k]);
        M.pup.setMatrixAt(i * 2 + k, tmp);
      }
    },
    commit() { Object.values(M).forEach((m) => { m.instanceMatrix.needsUpdate = true; }); },
  };
}

// a progress bar lying on a screen plane of size sw × sh, over the drawn track
function makeBar(sw, sh, color = ORANGE) {
  const x0 = ((TRACK.x + 9) / 512 - 0.5) * sw, len = ((TRACK.w - 18) / 512) * sw;
  const y = (0.5 - (TRACK.y + TRACK.h / 2) / 320) * sh, bh = ((TRACK.h - 16) / 320) * sh;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1, bh).translate(0.5, 0, 0), new THREE.MeshBasicMaterial({ color, toneMapped: false }));
  m.position.set(x0, y, 0.004);
  m.userData.set = (p) => { m.scale.x = Math.max(0.0001, len * p); m.visible = p > 0.003; };
  return m;
}

function makeKey(label, w = 0.66) {
  const g = new THREE.Group();
  const base = part(rbox(w + 0.1, 0.76, 0.16, 0.06), toon('#2C2C38'), 0.02);
  base.position.z = -0.1;
  const capMat = toonNew(PAL.white);
  const cap = part(rbox(w, 0.62, 0.22, 0.08), capMat, 0.022);
  const face = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.12, 0.5), new THREE.MeshBasicMaterial({ map: canvasTex((gg, W, H) => drawKey(gg, W, H, label), 256, Math.round(256 * 0.5 / (w - 0.12))), toneMapped: false }));
  face.position.z = 0.112;
  cap.add(face);
  g.add(base, cap);
  g.userData = { cap, capMat };
  return g;
}

export function addInstallWorld(W) {
  const group = new THREE.Group();
  const cam = new THREE.Group(); // moved and scaled like a camera dolly
  group.add(cam);

  // ===== station 1–2: the laptop that downloads Endless OS and writes the stick =====
  const deskA = new THREE.Group();
  cam.add(deskA);
  const lap = new THREE.Group();
  lap.position.set(0, -0.95, 0);
  deskA.add(lap);
  const lapBase = part(rbox(2.3, 0.1, 1.5, 0.05), toon('#E6E6EE'), 0.025);
  lapBase.position.y = 0.05;
  const keysPad = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 0.62), new THREE.MeshBasicMaterial({ color: '#2B2B36' }));
  keysPad.rotation.x = -Math.PI / 2;
  keysPad.position.set(0, 0.102, -0.05);
  const pad = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.32), new THREE.MeshBasicMaterial({ color: '#C9C9D3' }));
  pad.rotation.x = -Math.PI / 2;
  pad.position.set(0, 0.102, 0.5);
  const lid = new THREE.Group();
  lid.position.set(0, 0.1, -0.72);
  lid.rotation.x = -0.2;
  const lidBody = part(rbox(2.3, 1.45, 0.07, 0.05), toon('#E6E6EE'), 0.025);
  lidBody.position.y = 0.725;
  const TEX = {
    down: canvasTex(installer('Downloading', 'Endless OS, Full edition')),
    write: canvasTex(installer('Reformatter', 'Writing the USB stick')),
    off: canvasTex(offScreen),
    post: canvasTex(powerOn),
    bios: canvasTex(bios(false)),
    boot: canvasTex(bootMenu),
    reformat: canvasTex(reformatting),
    home: canvasTex(homeScreen),
  };
  const lapScreen = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.31), new THREE.MeshBasicMaterial({ map: TEX.down, toneMapped: false }));
  lapScreen.position.set(0, 0.725, 0.037);
  const lapBar = makeBar(2.1, 1.31);
  lapScreen.add(lapBar);
  lid.add(lidBody, lapScreen);
  const lapPort = part(rbox(0.05, 0.06, 0.22, 0.01), toon('#333340'), 0.01);
  lapPort.position.set(1.16, 0.05, 0.25);
  lap.add(lapBase, keysPad, pad, lid, lapPort);

  // the download cloud with its arrow
  const cloudGeo = mergeGeometries([
    new THREE.SphereGeometry(0.55, 24, 16),
    new THREE.SphereGeometry(0.42, 24, 16).translate(0.62, -0.12, 0),
    new THREE.SphereGeometry(0.38, 24, 16).translate(-0.6, -0.14, 0.05),
    new THREE.SphereGeometry(0.3, 20, 14).translate(0.22, 0.34, 0.05),
  ]);
  const cloud = part(cloudGeo, toon(PAL.white), 0.03);
  cloud.position.set(-0.15, 1.95, -0.7);
  const arrow = part(extrude(ARROW, 0.16), toon(ORANGE), 0.022);
  arrow.position.set(-0.15, 1.15, -0.5);
  arrow.scale.setScalar(0.75);
  const osLabel = makeLabel('Endless OS', ORANGE, PAL.white);
  osLabel.scale.setScalar(0.42);
  osLabel.position.set(-0.15, 2.0, -0.12);
  osLabel.rotation.z = -0.08;
  deskA.add(cloud, arrow, osLabel);

  // data falling from the cloud into the laptop, then bits flowing into the stick
  const BITS = 40;
  const bits = new THREE.InstancedMesh(rbox(0.13, 0.13, 0.13, 0.025), toonNew(PAL.white), BITS);
  const bitCols = [ORANGE, PAL.yellow, PAL.white, PAL.cyan, PAL.pink].map((c) => new THREE.Color(c));
  for (let i = 0; i < BITS; i++) bits.setColorAt(i, bitCols[i % bitCols.length]);
  bits.frustumCulled = false;
  deskA.add(bits);
  const bitSeed = Array.from({ length: BITS }, (_, i) => ({ ph: (i * 0.618) % 1, a: i * 2.399, r: 0.15 + ((i * 0.37) % 1) * 0.35 }));

  // a clock in fast-forward: making the reformatter can take hours
  const clock = new THREE.Group();
  clock.position.set(1.45, 1.25, 0.1);
  const clockFace = part(new THREE.CylinderGeometry(0.5, 0.5, 0.1, 40).rotateX(Math.PI / 2), toon(PAL.white), 0.025);
  clock.add(clockFace);
  clock.add(new THREE.Mesh(mergeGeometries(Array.from({ length: 12 }, (_, k) => {
    const a = (k / 12) * Math.PI * 2;
    return new THREE.BoxGeometry(0.035, k % 3 ? 0.06 : 0.1, 0.01).rotateZ(-a).translate(Math.sin(a) * 0.4, Math.cos(a) * 0.4, 0.056);
  })), new THREE.MeshBasicMaterial({ color: '#000' })));
  const handH = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.24, 0.01).translate(0, 0.1, 0), new THREE.MeshBasicMaterial({ color: '#000' }));
  const handM = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.36, 0.01).translate(0, 0.16, 0), new THREE.MeshBasicMaterial({ color: ORANGE }));
  handH.position.z = handM.position.z = 0.062;
  clock.add(handH, handM);
  deskA.add(clock);
  const fmtLabel = makeLabel('Reformatter', PAL.yellow);
  fmtLabel.scale.setScalar(0.3);
  cam.add(fmtLabel);

  // ===== station 3–4: an Asus desktop PC =====
  const deskB = new THREE.Group();
  deskB.position.set(7, -1.0, 0);
  cam.add(deskB);
  const mon = part(rbox(2.3, 1.5, 0.12, 0.06), toon(PAL.white), 0.03);
  mon.position.set(0, 1.42, 0);
  const monScreen = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.31), new THREE.MeshBasicMaterial({ map: TEX.off, toneMapped: false }));
  monScreen.position.set(0, 1.42, 0.062);
  const monBar = makeBar(2.1, 1.31);
  monScreen.add(monBar);
  const neck = part(rbox(0.2, 0.62, 0.1, 0.03), toon(PAL.white), 0.025);
  neck.position.set(0, 0.36, -0.06);
  const foot = part(rbox(0.9, 0.08, 0.5, 0.04), toon(PAL.white), 0.025);
  foot.position.y = 0.04;
  const tower = part(rbox(0.75, 1.75, 1.3, 0.06), toon('#2C2C38'), 0.03);
  tower.position.set(1.8, 0.875, -0.15);
  const powerMat = new THREE.MeshBasicMaterial({ color: '#5A5A66', toneMapped: false });
  const powerBtn = new THREE.Mesh(new THREE.CircleGeometry(0.1, 28), powerMat);
  powerBtn.position.set(1.8, 1.42, 0.505);
  const vents = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.5), new THREE.MeshBasicMaterial({ color: '#1A1A22' }));
  vents.position.set(1.8, 0.62, 0.503);
  const towerPort = part(rbox(0.22, 0.04, 0.1, 0.01), toon('#111118'), 0.008);
  towerPort.position.set(1.8, 1.76, 0.25);
  const kbd = part(rbox(1.8, 0.08, 0.62, 0.04), toon(PAL.white), 0.02);
  kbd.position.set(-0.1, 0.04, 0.95);
  const kbdKeys = new THREE.InstancedMesh(rbox(0.13, 0.06, 0.13, 0.02), toon('#2C2C38'), 36);
  for (let r = 0, k = 0; r < 3; r++) for (let c = 0; c < 12; c++, k++) {
    dummy.position.set(-0.83 + c * 0.152 - 0.1, 0.1, 0.77 + r * 0.17);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    kbdKeys.setMatrixAt(k, dummy.matrix);
  }
  deskB.add(mon, monScreen, neck, foot, tower, powerBtn, vents, towerPort, kbd, kbdKeys);
  // the keys to press, floating over the PC
  const KEYS = [['power', 0.66], ['F2', 0.66], ['F8', 0.66], ['Enter', 1.0]].map(([label, w], i) => {
    const k = makeKey(label, w);
    k.position.set(-1.15 + i * 0.86 + (i === 3 ? 0.17 : 0), 3.05, 0.6);
    deskB.add(k);
    return k;
  });

  // ===== station 5: 100 PCs, ten sticks =====
  const gridRoot = new THREE.Group();
  gridRoot.position.set(16.2, -0.9, 0);
  cam.add(gridRoot);
  const grid = new THREE.Group();
  grid.rotation.x = 0.72;
  gridRoot.add(grid);
  const miniGeo = mergeGeometries([
    rbox(1.0, 0.66, 0.09, 0.04).translate(0, 0.66, 0),
    rbox(0.12, 0.24, 0.07, 0.02).translate(0, 0.2, -0.01),
    rbox(0.46, 0.05, 0.28, 0.02).translate(0, 0.025, 0),
  ]);
  const NPC = 100, GAP = 1.18, PCS = 0.82;
  const gLine = new THREE.InstancedMesh(miniGeo, outlineMat(0.035), NPC);
  const gBody = new THREE.InstancedMesh(miniGeo, toon(PAL.white), NPC);
  const gScr = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.88, 0.54).translate(0, 0.66, 0.047), new THREE.MeshBasicMaterial({ toneMapped: false }), NPC);
  for (const m of [gLine, gBody, gScr]) { m.frustumCulled = false; grid.add(m); }
  const floor = part(rbox(GAP * 10 + 0.6, 0.12, GAP * 10 + 0.6, 0.06), toon('#FFFFFF'), 0.03);
  floor.position.y = -0.07;
  grid.add(floor);
  const pcPos = (r, c) => [(c - 4.5) * GAP, 0, (r - 4.5) * GAP];
  const cDark = new THREE.Color(DARK), cOn = new THREE.Color(ORANGE), cFlash = new THREE.Color(PAL.yellow), cTmp = new THREE.Color();
  const swarm = makeStickSwarm(10);
  grid.add(swarm.group);
  const mS = new THREE.Matrix4(), qS = new THREE.Quaternion(), vS = new THREE.Vector3(), sS = new THREE.Vector3();
  const zAxis = new THREE.Vector3(0, 0, 1);
  // the stick sits on the right side of each little monitor, plug pointing in
  const SOFF = [0.4 * PCS + 0.4, 0.66 * PCS, 0.05];
  const board = new THREE.Group();
  board.position.set(16.2, 4.75, 0.2);
  const boardTex = canvasTex(drawBoard, 512, 256);
  const boardPlate = part(rbox(3.0, 1.5, 0.14, 0.08), toon(PAL.white), 0.03);
  const boardFace = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 1.45), new THREE.MeshBasicMaterial({ map: boardTex, transparent: true, toneMapped: false }));
  boardFace.position.z = 0.075;
  board.add(boardPlate, boardFace);
  cam.add(board);
  let shown = -1;

  const hero = makeStick();
  cam.add(hero);
  const conf = makeConfetti(cam, [16.2, 4.2, 1.2]);
  const conf2 = makeConfetti(cam, [7, 1.6, 1.0]);

  // ===== where the "camera" looks, per part of the section =====
  // x, y = the point at the centre; s = zoom
  const F = {
    a: [0.5, 0.8, 1.42],
    b: [0.5, 0.3, 1.5],
    c: [7.35, 0.72, 1.3],
    d: [7.5, 0.3, 1.45],
    e: [16.0, 0.95, 0.4],
  };
  const KF = [[0, F.a], [0.8, F.a], [1.12, F.b], [1.8, F.b], [2.2, F.c], [2.86, F.c], [3.1, F.d], [3.78, F.d], [4.14, F.e], [5, F.e]];
  const frame = (u) => {
    for (let i = 1; i < KF.length; i++) {
      if (u <= KF[i][0]) {
        const [u0, a] = KF[i - 1], [u1, b] = KF[i];
        const k = ease(clamp01((u - u0) / (u1 - u0)));
        return [lerp(a[0], b[0], k), lerp(a[1], b[1], k), lerp(a[2], b[2], k), a === b ? 0 : Math.sin(Math.PI * k)];
      }
    }
    return [...F.e, 0];
  };

  // the stick's path: waiting by the laptop, plugged in, flying to the PC, then on top of the board
  const HS = 1.3; // the hero is a bit bigger than life
  const P_WAIT = new THREE.Vector3(2.0, -0.95 + 0.14 * HS + 0.02, 0.5);
  const P_LAP = new THREE.Vector3(1.185 + (0.54 - 0.12) * HS, -0.9, 0.25);
  const P_TOWER = new THREE.Vector3(7 + 1.8, -1.0 + 1.78 + (0.54 - 0.13) * HS, 0.25);
  const P_BOARD = new THREE.Vector3(16.2 - 0.6, 4.75 + 0.75 + 0.14 * HS, 0.25);
  const arc = (a, b, k, h, out) => out.lerpVectors(a, b, k).setY(lerp(a.y, b.y, k) + Math.sin(Math.PI * k) * h);
  const hv = new THREE.Vector3(), look = new THREE.Vector3();
  let lastU = 0, fired = { done1: false, done100: false, keys: [false, false, false, false] };

  W.install = {
    group,
    update(t, dt, reduce, sp = 0) {
      const u = reduce ? Math.min(4.95, Math.max(0.05, sp * 5)) : clamp01(sp) * 5;
      const fwd = u >= lastU;
      lastU = u;
      const wob = reduce ? 0 : 1;

      // camera dolly
      const [fx, fy, fs, pan] = frame(u);
      cam.scale.setScalar(fs);
      cam.position.set(-fx * fs, -fy * fs, 0);
      cam.rotation.z = reduce ? 0 : pan * 0.1 * (u < 2.5 ? 1 : -1);

      deskA.visible = u < 2.35;
      deskB.visible = u > 1.6 && u < 4.35;
      gridRoot.visible = board.visible = u > 3.55;

      // ---- 1: download ----
      const p1 = smooth(0.28, 0.9, u);
      const p2 = smooth(1.25, 1.8, u);
      lapScreen.material.map = u < 1.12 ? TEX.down : TEX.write;
      lapBar.userData.set(u < 1.12 ? p1 : p2);
      cloud.position.y = 1.95 + Math.sin(t * 1.3) * 0.05 * wob;
      cloud.scale.setScalar(1 - smooth(0.85, 1.1, u) * 0.999);
      osLabel.scale.setScalar(0.42 * (1 - smooth(0.85, 1.05, u) * 0.999));
      arrow.position.y = 1.15 - (wob ? Math.abs(Math.sin(t * 4)) * 0.12 : 0);
      arrow.scale.set(0.75, 0.75 * (1 + (wob ? Math.sin(t * 8) * 0.08 : 0)), 0.75);
      arrow.visible = u < 0.92;

      // bits: cloud → laptop while downloading, laptop → stick while writing
      const downOn = u > 0.2 && u < 0.92, writeOn = u > 1.22 && u < 1.82;
      bits.visible = downOn || writeOn;
      if (bits.visible) {
        for (let i = 0; i < BITS; i++) {
          const b = bitSeed[i];
          const s = (b.ph + t * (downOn ? 0.55 : 0.8)) % 1;
          if (downOn) {
            const r = b.r * (1 - s);
            dummy.position.set(-0.15 + Math.cos(b.a + t) * r, lerp(1.0, -0.05, s), lerp(-0.45, -0.55, s) + Math.sin(b.a + t) * r * 0.5);
          } else {
            // from the screen to the port on the right
            dummy.position.set(lerp(0.2, 1.5, s), -0.25 + Math.sin(s * Math.PI) * 0.55 + Math.sin(b.a) * 0.06, lerp(-0.5, 0.25, s));
          }
          dummy.rotation.set(t * 3 + i, t * 2 + i * 0.5, 0);
          dummy.scale.setScalar(Math.max(0.0001, Math.sin(s * Math.PI) * 1.1));
          dummy.updateMatrix();
          bits.setMatrixAt(i, dummy.matrix);
        }
        bits.instanceMatrix.needsUpdate = true;
      }
      const clockK = smooth(1.15, 1.3, u) * (1 - smooth(1.8, 1.95, u));
      clock.visible = clockK > 0.001;
      clock.scale.setScalar(Math.max(0.0001, easeOutBack(clockK)));
      handM.rotation.z = -(reduce ? 1 : t * 9 + p2 * 30);
      handH.rotation.z = handM.rotation.z / 12;

      // ---- the hero's path ----
      let rotZ = 0, glow = 0, squash = 1;
      if (u < 0.95) {
        hv.copy(P_WAIT);
        hv.y += wob ? Math.abs(Math.sin(t * 3.2)) * 0.18 : 0;
        squash = wob ? 1 + Math.sin(t * 6.4) * 0.06 : 1;
        look.set(-0.6, 0.6, 0);
      } else if (u < 1.2) {
        const k = ease(smooth(0.95, 1.2, u));
        arc(P_WAIT, P_LAP, k, 0.9, hv);
        rotZ = Math.PI * k;
        look.set(0, 0, 1);
      } else if (u < 1.86) {
        hv.copy(P_LAP);
        rotZ = Math.PI;
        glow = writeOn ? 0.45 + (wob ? Math.sin(t * 9) * 0.25 : 0) : 0.15;
        look.set(0, -0.6, 1);
      } else if (u < 2.2) {
        const k = ease(smooth(1.86, 2.2, u));
        arc(P_LAP, P_TOWER, k, 2.2, hv);
        rotZ = lerp(Math.PI, -Math.PI / 2 - Math.PI * 2, k);
        look.set(1, 0, 1);
      } else if (u < 3.72) {
        hv.copy(P_TOWER);
        rotZ = -Math.PI / 2;
        const press = fired.keys.some((x) => x) && wob ? Math.max(0, Math.sin(t * 10)) * 0.02 : 0;
        hv.y += press;
        glow = u > 2.86 && u < 3.66 ? 0.3 + (wob ? Math.sin(t * 7) * 0.2 : 0) : 0;
        look.set(-1, 0.2, 1);
      } else if (u < 4.15) {
        const k = ease(smooth(3.72, 4.15, u));
        arc(P_TOWER, P_BOARD, k, 1.6, hv);
        rotZ = lerp(-Math.PI / 2, Math.PI * 2, k);
        look.set(1, 1, 1);
      } else {
        hv.copy(P_BOARD);
        hv.y += wob ? Math.abs(Math.sin(t * 5)) * 0.2 : 0;
        squash = wob ? 1 + Math.sin(t * 10) * 0.08 : 1;
        rotZ = wob ? Math.sin(t * 5) * 0.2 : 0;
        look.set(0, -1, 1);
      }
      hero.position.copy(hv);
      hero.rotation.set(0, 0, rotZ);
      hero.scale.set(HS / squash, HS * squash, HS);
      hero.userData.bodyMat.emissiveIntensity = glow;
      hero.userData.pupils.forEach((p) => p.position.set(look.x * 0.02, look.y * 0.02, 0.04));
      // the "reformatter" badge pops up over the finished stick
      const fk = smooth(1.78, 1.88, u) * (1 - smooth(2.05, 2.2, u));
      fmtLabel.visible = fk > 0.001;
      fmtLabel.scale.setScalar(0.3 * Math.max(0.0001, easeOutBack(fk)));
      fmtLabel.position.set(hv.x, hv.y + 0.45, hv.z + 0.1);

      // ---- 3: boot from the stick: power + F2, then F8, then Enter ----
      const f = u - 2;
      const keyIn = [smooth(0.2, 0.3, f), smooth(0.22, 0.32, f), smooth(0.5, 0.58, f), smooth(0.7, 0.78, f)];
      const keyDown = [smooth(0.38, 0.42, f) * (1 - smooth(0.46, 0.5, f)), smooth(0.32, 0.36, f) * (1 - smooth(0.5, 0.54, f)), smooth(0.6, 0.63, f) * (1 - smooth(0.66, 0.7, f)), smooth(0.82, 0.85, f) * (1 - smooth(0.88, 0.92, f))];
      const keyOut = smooth(0.95, 1.05, f);
      KEYS.forEach((k, i) => {
        const s = Math.max(0.0001, easeOutBack(keyIn[i]) * (1 - keyOut));
        k.visible = s > 0.001;
        k.scale.setScalar(s);
        k.userData.cap.position.z = -0.12 * keyDown[i];
        k.userData.capMat.color.set(keyDown[i] > 0.5 ? PAL.yellow : PAL.white);
        k.rotation.z = wob ? Math.sin(t * 2 + i) * 0.04 : 0;
        const down = keyDown[i] > 0.5;
        if (down && !fired.keys[i] && fwd && !reduce) sfx.pop(500 + i * 120);
        fired.keys[i] = down;
      });
      const on = f > 0.4;
      powerMat.color.set(on ? '#5CFF8A' : '#5A5A66');
      let scr = TEX.off;
      if (f > 0.4) scr = TEX.post;
      if (f > 0.47) scr = TEX.bios;
      if (f > 0.64) scr = TEX.boot;
      if (f > 0.88) scr = TEX.reformat;
      // ---- 4: it installs itself ----
      const g4 = u - 3;
      const p4 = smooth(0.0, 0.62, g4);
      if (g4 > 0.66) scr = TEX.home;
      monScreen.material.map = scr;
      monBar.userData.set(scr === TEX.reformat ? p4 : 0);
      const done1 = g4 > 0.66;
      if (done1 && !fired.done1 && fwd && !reduce) { conf2.burst(); sfx.tada(); }
      fired.done1 = done1;

      // ---- 5: ten sticks, 100 PCs ----
      if (gridRoot.visible) {
        const P = clamp01((u - 4.12) / 0.5);
        let count = 0;
        for (let r = 0; r < 10; r++) {
          const pr = clamp01((P - r * 0.022) / (1 - 9 * 0.022));
          const col = pr * 11 - 1;
          const i = Math.floor(col), fr = col - i;
          const doneHere = Math.min(10, Math.max(0, i + (fr >= 0.6 ? 1 : 0)));
          count += doneHere;
          for (let c = 0; c < 10; c++) {
            const k = r * 10 + c;
            const [x, , z] = pcPos(r, c);
            let bounce = 1;
            if (c < doneHere) {
              const since = c === doneHere - 1 && i < 10 ? (i === c ? fr - 0.6 : fr + 0.4) : 1;
              bounce = 1 + Math.max(0, 1 - since * 3) * 0.18 * wob;
              cTmp.copy(cOn).lerp(cFlash, Math.max(0, 1 - since * 4));
            } else if (c === i && fr < 0.6) {
              cTmp.copy(cDark).lerp(cOn, (fr / 0.6) * (wob ? 0.6 + Math.sin(t * 20) * 0.2 : 0.6));
            } else cTmp.copy(cDark);
            gScr.setColorAt(k, cTmp);
            dummy.position.set(x, 0, z);
            dummy.rotation.set(0, 0, 0);
            dummy.scale.set(PCS, PCS * bounce, PCS);
            dummy.updateMatrix();
            gBody.setMatrixAt(k, dummy.matrix);
            gLine.setMatrixAt(k, dummy.matrix);
            gScr.setMatrixAt(k, dummy.matrix);
          }
          // this row's stick
          const [x0, , z0] = pcPos(r, Math.max(-1, Math.min(10, i)));
          let sx = x0 + SOFF[0], sy = SOFF[1], rz = Math.PI, sq = 1;
          if (i < 0 && fr < 0.6) { sy += wob ? Math.abs(Math.sin(t * 4 + r)) * 0.25 : 0; rz = 0; }
          else if (i >= 10) { sy += wob ? Math.abs(Math.sin(t * 6 + r)) * 0.35 : 0; rz = wob ? Math.sin(t * 6 + r) * 0.3 : 0; }
          else if (fr >= 0.6) {
            const h = (fr - 0.6) / 0.4;
            sx += GAP * h;
            sy += Math.sin(Math.PI * h) * 0.9;
            rz = (i < 0 ? 0 : Math.PI) + Math.PI * 2 * h;
            sq = 1 + Math.sin(Math.PI * h) * 0.15;
          }
          vS.set(sx, sy, z0 + SOFF[2]);
          qS.setFromAxisAngle(zAxis, rz);
          sS.set(PCS / sq, PCS * sq, PCS);
          mS.compose(vS, qS, sS);
          swarm.set(r, mS);
        }
        gBody.instanceMatrix.needsUpdate = gLine.instanceMatrix.needsUpdate = gScr.instanceMatrix.needsUpdate = true;
        gScr.instanceColor.needsUpdate = true;
        swarm.commit();
        if (count !== shown) { shown = count; boardTex.userData.paint(count); }
        board.rotation.z = wob ? Math.sin(t * 1.5) * 0.03 : 0;
        const done100 = count >= 100;
        if (done100 && !fired.done100 && fwd && !reduce) { conf.burst(); sfx.tada(); }
        fired.done100 = done100;
      }
      conf.update(dt);
      conf2.update(dt);
    },
  };
}
