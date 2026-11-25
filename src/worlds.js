// The worlds inside the computer: one small 3D set per section, built from chunky toon shapes.
// Each world: { group, update(localTime, dt, reduce), onEnter? }. The stage scales them in and out.
import * as THREE from 'three';
import { COLORS } from './screens.js';
import { lerp, smooth, clamp01, easeOutBack, easeOutCubic, PAL, toon, toonNew, part, rbox, outlineMat, makeLabel, sfx } from './kit.js';
import { UI_W, UI_H, drawMint, drawZorin, drawEndless } from './osui.js';
import { addAbsurdWorlds } from './worlds2.js';
import { addGlobeWorld } from './worlds3.js';
import { addInstallWorld } from './worlds4.js';
import { addLinoWorlds } from './worlds5.js';

const dummy = new THREE.Object3D();

function canvasTex(draw, size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function extrude(points, depth = 0.1) {
  const s = new THREE.Shape();
  s.moveTo(points[0][0], points[0][1]);
  for (const [x, y] of points.slice(1)) s.lineTo(x, y);
  const geo = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false });
  geo.center();
  return geo;
}
const ARROW = [[-0.17, 0.5], [0.17, 0.5], [0.17, 0.02], [0.4, 0.02], [0, -0.48], [-0.4, 0.02], [-0.17, 0.02]];
const BOLT = [[-0.05, 0.55], [0.25, 0.55], [0.05, 0.12], [0.28, 0.12], [-0.12, -0.55], [0.0, -0.05], [-0.25, -0.05]];
const CURSOR = [[0, 0], [0, -0.62], [0.15, -0.48], [0.26, -0.72], [0.37, -0.67], [0.26, -0.43], [0.46, -0.43]];
const STAR = Array.from({ length: 10 }, (_, i) => {
  const a = Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 0.16 : 0.38;
  return [Math.cos(a) * r, Math.sin(a) * r];
});

// ---------- small props ----------
let badgeGeo, faceGeo;
const badgeTex = {};
function makeBadge(kind) {
  badgeGeo ||= new THREE.CylinderGeometry(0.27, 0.27, 0.08, 40).rotateX(Math.PI / 2);
  faceGeo ||= new THREE.CircleGeometry(0.27, 40);
  badgeTex[kind] ||= canvasTex((g) => {
    g.fillStyle = kind === 'check' ? PAL.yellow : PAL.red;
    g.beginPath(); g.arc(128, 128, 118, 0, Math.PI * 2); g.fill();
    g.lineWidth = 14; g.strokeStyle = PAL.ink; g.stroke();
    g.lineCap = 'round'; g.lineJoin = 'round'; g.lineWidth = 30;
    g.beginPath();
    if (kind === 'check') { g.moveTo(70, 134); g.lineTo(110, 174); g.lineTo(188, 86); }
    else { g.moveTo(86, 86); g.lineTo(170, 170); g.moveTo(170, 86); g.lineTo(86, 170); }
    g.stroke();
  });
  const b = new THREE.Group();
  b.add(new THREE.Mesh(badgeGeo, toon(kind === 'check' ? PAL.yellow : PAL.red)));
  b.add(new THREE.Mesh(badgeGeo, outlineMat(0.02)));
  const face = new THREE.Mesh(faceGeo, new THREE.MeshBasicMaterial({ map: badgeTex[kind], transparent: true, toneMapped: false }));
  face.position.z = 0.041;
  b.add(face);
  b.scale.setScalar(0.0001);
  return b;
}

function makeMagnifier(ring = PAL.white) {
  const g = new THREE.Group();
  g.add(part(new THREE.TorusGeometry(0.36, 0.085, 14, 48), toon(ring), 0.022));
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.36, 40), new THREE.MeshBasicMaterial({ color: '#CFF6FF', transparent: true, opacity: 0.4, depthWrite: false, toneMapped: false }));
  lens.renderOrder = 20;
  g.add(lens);
  const h = part(rbox(0.17, 0.62, 0.17, 0.07), toon(PAL.ink), 0.02);
  h.position.set(0.55, -0.55, 0);
  h.rotation.z = Math.PI / 4;
  g.add(h);
  return g;
}

function makeWifi(color = PAL.white) {
  const g = new THREE.Group();
  g.userData.arcs = [0.24, 0.44, 0.64].map((r) => {
    const a = part(new THREE.TorusGeometry(r, 0.06, 10, 32, Math.PI / 2), toon(color), 0.02);
    a.rotation.z = Math.PI / 4;
    g.add(a);
    return a;
  });
  g.add(part(new THREE.SphereGeometry(0.085, 18, 12), toon(color), 0.02));
  return g;
}

let dotGeo;
function makeWindow(w, h, bar = PAL.ink, accent = PAL.lilac) {
  dotGeo ||= new THREE.SphereGeometry(0.045, 12, 8);
  const g = new THREE.Group();
  g.add(part(rbox(w, h, 0.1, 0.05), toon(PAL.white)));
  const tb = part(rbox(w, 0.22, 0.13, 0.05), toon(bar), 0.025);
  tb.position.y = h / 2 - 0.11;
  g.add(tb);
  [PAL.red, PAL.yellow, COLORS.mint].forEach((c, i) => {
    const d = new THREE.Mesh(dotGeo, toon(c));
    d.position.set(w / 2 - 0.13 - i * 0.13, h / 2 - 0.11, 0.075);
    g.add(d);
  });
  const img = part(rbox(w * 0.3, h * 0.42, 0.04, 0.02), toon(accent), 0.015);
  img.position.set(-w * 0.27, -0.06, 0.06);
  g.add(img);
  for (let i = 0; i < 3; i++) {
    const l = new THREE.Mesh(rbox(w * 0.42, 0.065, 0.03, 0.02), toon(PAL.grey));
    l.position.set(w * 0.14, 0.1 - i * 0.15, 0.06);
    g.add(l);
  }
  return g;
}

function makeTaskbar(w, color, start, icons) {
  const g = new THREE.Group();
  g.add(part(rbox(w, 0.3, 0.18, 0.06), toon(color)));
  const s = part(rbox(0.34, 0.22, 0.1, 0.05), toon(start), 0.02);
  s.position.set(-w / 2 + 0.26, 0, 0.1);
  g.add(s);
  icons.forEach((c, i) => {
    const ic = part(rbox(0.18, 0.18, 0.08, 0.04), toon(c), 0.015);
    ic.position.set(-w / 2 + 0.62 + i * 0.27, 0, 0.1);
    g.add(ic);
  });
  const tray = new THREE.Mesh(rbox(0.42, 0.1, 0.06, 0.03), toon(color === PAL.ink ? PAL.white : PAL.ink));
  tray.position.set(w / 2 - 0.32, 0, 0.1);
  g.add(tray);
  return g;
}

function makePeople(bodies, skins) {
  const n = bodies.length;
  const g = new THREE.Group();
  const bodyGeo = new THREE.CapsuleGeometry(0.1, 0.16, 6, 14);
  const headGeo = new THREE.SphereGeometry(0.095, 18, 12);
  const bm = new THREE.InstancedMesh(bodyGeo, toonNew(PAL.white), n);
  const bo = new THREE.InstancedMesh(bodyGeo, outlineMat(0.018), n);
  const hm = new THREE.InstancedMesh(headGeo, toonNew(PAL.white), n);
  const ho = new THREE.InstancedMesh(headGeo, outlineMat(0.018), n);
  for (let i = 0; i < n; i++) { bm.setColorAt(i, new THREE.Color(bodies[i])); hm.setColorAt(i, new THREE.Color(skins[i])); }
  for (const m of [bm, bo, hm, ho]) m.frustumCulled = false;
  g.add(bo, bm, ho, hm);
  return {
    g,
    update(t) {
      for (let i = 0; i < n; i++) {
        const jump = Math.max(0, Math.sin(t * 4 - i * 0.8)) * 0.16;
        dummy.rotation.set(0, 0, Math.sin(t * 2 + i) * 0.08);
        dummy.scale.setScalar(1);
        dummy.position.set(i * 0.26, jump, 0);
        dummy.updateMatrix();
        bm.setMatrixAt(i, dummy.matrix); bo.setMatrixAt(i, dummy.matrix);
        dummy.position.set(i * 0.26, jump + 0.29, 0);
        dummy.updateMatrix();
        hm.setMatrixAt(i, dummy.matrix); ho.setMatrixAt(i, dummy.matrix);
      }
      for (const m of [bm, bo, hm, ho]) m.instanceMatrix.needsUpdate = true;
    },
  };
}

function makeHourglass() {
  const g = new THREE.Group();
  const cap = rbox(0.74, 0.08, 0.74, 0.03);
  for (const y of [0.52, -0.52]) { const c = part(cap, toon(PAL.ink), 0.02); c.position.y = y; g.add(c); }
  const sandTop = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.03, 0.2, 24), toon(PAL.yellow));
  sandTop.position.y = 0.12;
  const sandBot = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.22, 24), toon(PAL.yellow));
  sandBot.position.y = -0.37;
  g.add(sandTop, sandBot);
  for (const [x, z] of [[0.3, 0.3], [-0.3, 0.3], [0.3, -0.3], [-0.3, -0.3]]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.0, 8), toon(PAL.ink));
    p.position.set(x, 0, z);
    g.add(p);
  }
  const glass = toonNew(PAL.white, { transparent: true, opacity: 0.5, depthWrite: false });
  const up = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.035, 0.48, 28, 1, true), glass);
  up.position.y = 0.24;
  const lo = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.28, 0.48, 28, 1, true), glass);
  lo.position.y = -0.24;
  up.renderOrder = lo.renderOrder = 20;
  g.add(up, lo);
  return g;
}

function makeBalloon(color, len) {
  const g = new THREE.Group();
  const ball = part(new THREE.SphereGeometry(0.2, 24, 18), toon(color), 0.02);
  ball.scale.set(1, 1.15, 1);
  const knot = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.07, 10), toon(color));
  knot.position.y = -0.25;
  const str = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, len, 6), toon(PAL.ink));
  str.position.y = -0.28 - len / 2;
  g.add(ball, knot, str);
  return g;
}

function makeBooks(colors) {
  const g = new THREE.Group();
  colors.forEach((c, i) => {
    const b = new THREE.Group();
    b.add(part(rbox(0.86, 0.17, 0.6, 0.03), toon(c), 0.02));
    const pages = new THREE.Mesh(rbox(0.78, 0.1, 0.02, 0.008), toon(PAL.white));
    pages.position.z = 0.305;
    b.add(pages);
    b.position.set(i % 2 ? 0.06 : -0.04, i * 0.19, 0);
    b.rotation.y = (i - 1) * 0.12;
    g.add(b);
  });
  return g;
}

function makeUsb() {
  const g = new THREE.Group();
  g.add(part(rbox(0.5, 0.2, 0.1, 0.04), toon(PAL.ink), 0.02));
  const plug = part(rbox(0.22, 0.15, 0.07, 0.015), toon('#CFCFCF'), 0.018);
  plug.position.x = 0.34;
  g.add(plug);
  return g;
}

function makeShield() {
  const s = new THREE.Shape();
  s.moveTo(-0.38, 0.4); s.lineTo(0.38, 0.4); s.lineTo(0.36, 0.02);
  s.quadraticCurveTo(0.3, -0.32, 0, -0.5); s.quadraticCurveTo(-0.3, -0.32, -0.36, 0.02); s.lineTo(-0.38, 0.4);
  const geo = new THREE.ExtrudeGeometry(s, { depth: 0.12, bevelEnabled: false, curveSegments: 10 });
  geo.center();
  const g = part(geo, toon(PAL.white), 0.022);
  const stripe = new THREE.Mesh(rbox(0.16, 0.7, 0.03, 0.01), toon(COLORS.endless));
  stripe.position.set(0, -0.03, 0.07);
  g.add(stripe);
  return g;
}

function makeCrown() {
  const g = new THREE.Group();
  g.add(part(new THREE.CylinderGeometry(0.32, 0.3, 0.2, 28), toon(PAL.yellow), 0.02));
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const sp = part(new THREE.ConeGeometry(0.09, 0.24, 12), toon(PAL.yellow), 0.018);
    sp.position.set(Math.cos(a) * 0.27, 0.21, Math.sin(a) * 0.27);
    g.add(sp);
    const gem = new THREE.Mesh(new THREE.SphereGeometry(0.04, 10, 8), toon(PAL.red));
    gem.position.set(Math.cos(a) * 0.31, 0.0, Math.sin(a) * 0.31);
    g.add(gem);
  }
  return g;
}

function makeBattery(color, level) {
  const g = new THREE.Group();
  const cellGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.25, 28);
  const cells = [];
  for (let i = 0; i < 5; i++) {
    const c = part(cellGeo, toon(i < level ? color : PAL.white), 0.022);
    c.position.y = -0.62 + i * 0.31;
    g.add(c);
    cells.push(c);
  }
  const cap = part(new THREE.CylinderGeometry(0.15, 0.15, 0.14, 20), toon(PAL.ink), 0.02);
  cap.position.y = 0.87;
  g.add(cap);
  g.userData.cells = cells;
  return g;
}

function makeRam() {
  const g = new THREE.Group();
  g.add(part(rbox(2.4, 0.6, 0.06, 0.02), toon('#138A4A'), 0.02));
  for (let i = 0; i < 4; i++) {
    const ch = part(rbox(0.42, 0.3, 0.07, 0.02), toon(PAL.ink), 0.015);
    ch.position.set(-0.84 + i * 0.56, 0.06, 0.05);
    g.add(ch);
  }
  const gold = new THREE.Mesh(rbox(2.2, 0.1, 0.07, 0.01), toon('#F2B632'));
  gold.position.set(0, -0.24, 0.01);
  g.add(gold);
  return g;
}

function makeSpeaker() {
  const g = new THREE.Group();
  const body = part(rbox(0.36, 0.5, 0.36, 0.06), toon(PAL.pink));
  body.position.x = -0.22;
  const cone = part(new THREE.CylinderGeometry(0.42, 0.15, 0.4, 28).rotateZ(-Math.PI / 2), toon(PAL.pink), 0.022);
  cone.position.x = 0.16;
  g.add(body, cone);
  g.userData.waves = [0.62, 0.86].map((r) => {
    const w = part(new THREE.TorusGeometry(r, 0.055, 10, 28, Math.PI / 2), toon(PAL.white), 0.02);
    w.rotation.z = -Math.PI / 4;
    w.position.x = -0.05;
    g.add(w);
    return w;
  });
  return g;
}

function makeKeyboard() {
  const g = new THREE.Group();
  g.add(part(rbox(1.25, 0.12, 0.62, 0.05), toon(PAL.white)));
  const keys = new THREE.InstancedMesh(rbox(0.11, 0.07, 0.11, 0.02), toon(PAL.ink), 27);
  let k = 0;
  for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) {
    dummy.position.set(-0.52 + c * 0.13, 0.08, -0.17 + r * 0.17);
    dummy.rotation.set(0, 0, 0);
    dummy.scale.setScalar(1);
    dummy.updateMatrix();
    keys.setMatrixAt(k++, dummy.matrix);
  }
  g.add(keys);
  return g;
}

function makeGlobe() {
  const g = new THREE.Group();
  const spin = new THREE.Group();
  spin.add(part(new THREE.SphereGeometry(0.44, 32, 22), toon(COLORS.zorin), 0.025));
  const ringGeo = new THREE.TorusGeometry(0.447, 0.022, 8, 56);
  const eq = new THREE.Mesh(ringGeo, toon(PAL.ink));
  eq.rotation.x = Math.PI / 2;
  const m1 = new THREE.Mesh(ringGeo, toon(PAL.ink));
  const m2 = new THREE.Mesh(ringGeo, toon(PAL.ink));
  m2.rotation.y = Math.PI / 2;
  spin.add(eq, m1, m2);
  for (const [a, b, s] of [[0.4, 0.3, 0.16], [2.2, -0.2, 0.2], [3.9, 0.5, 0.13], [5.1, -0.35, 0.15]]) {
    const blob = new THREE.Mesh(new THREE.SphereGeometry(s, 14, 10), toon(COLORS.mint));
    blob.position.setFromSphericalCoords(0.36, Math.PI / 2 - b, a);
    spin.add(blob);
  }
  g.add(spin);
  g.userData.spin = spin;
  return g;
}

function makeTrophy() {
  const g = new THREE.Group();
  const pts = [[0, 0], [0.3, 0], [0.3, 0.09], [0.12, 0.13], [0.07, 0.32], [0.11, 0.4], [0.31, 0.52], [0.39, 0.98], [0.35, 1.0], [0.3, 0.6], [0, 0.56]]
    .map(([x, y]) => new THREE.Vector2(x, y));
  g.add(part(new THREE.LatheGeometry(pts, 40), toon(PAL.yellow), 0.025));
  for (const sgn of [1, -1]) {
    const h = part(new THREE.TorusGeometry(0.17, 0.045, 10, 24, Math.PI), toon(PAL.yellow), 0.02);
    h.rotation.z = -sgn * Math.PI / 2;
    h.position.set(sgn * 0.36, 0.72, 0);
    g.add(h);
  }
  return g;
}

// The magnifier visits each spot in turn; a tick or a cross pops up as it arrives.
function analysis(root, spots) {
  const mag = makeMagnifier();
  root.add(mag);
  const badges = spots.map((s) => { const b = makeBadge(s.kind); b.position.set(...s.at); root.add(b); return b; });
  const P = spots.map((s) => new THREE.Vector3(s.at[0], s.at[1], s.at[2] + 0.3));
  const R = P[0].clone().add(new THREE.Vector3(0.9, -0.9, 0.4));
  const LEAD = 0.9, STEP = 1.3, n = spots.length;
  const last = LEAD + (n - 1) * STEP, cycle = last + 3.6;
  const tmp = new THREE.Vector3();
  let prevT = -1;
  return (lt, reduce) => {
    const t = reduce ? last + 0.7 : lt % cycle;
    if (!reduce) spots.forEach((_, i) => { const a = LEAD + i * STEP + 0.12; if (prevT < a && t >= a) sfx.pop(640 + i * 110); });
    prevT = t;
    if (t < LEAD) tmp.copy(R).lerp(P[0], smooth(0.05, LEAD, t));
    else if (t < last) {
      const k = Math.floor((t - LEAD) / STEP);
      tmp.copy(P[k]).lerp(P[k + 1], smooth(0.45, 1, (t - LEAD - k * STEP) / STEP));
    } else tmp.copy(P[n - 1]);
    mag.position.copy(tmp);
    mag.position.y += Math.sin(lt * 3) * 0.03;
    mag.rotation.z = Math.sin(lt * 1.7) * 0.18;
    const ms = reduce ? 0.0001 : smooth(0, 0.35, t) * (1 - smooth(last + 0.9, last + 1.4, t));
    mag.scale.setScalar(Math.max(ms, 0.0001));
    mag.visible = ms > 0.01;
    const fade = 1 - smooth(cycle - 0.45, cycle, t);
    badges.forEach((b, i) => {
      const a = LEAD + i * STEP + 0.12;
      const q = clamp01((t - a) / 0.38);
      const s = easeOutBack(q) * fade;
      b.scale.setScalar(Math.max(s, 0.0001));
      b.rotation.y = (1 - q) * 2.5;
      b.visible = s > 0.01;
    });
  };
}

export function buildWorlds() {
  const W = {};

  // ---------- about 100 systems in, 3 out ----------
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    root.position.y = -0.1;
    group.add(root);
    const N = 100;
    const cubeGeo = rbox(0.2, 0.2, 0.2, 0.04, 2);
    const cubes = new THREE.InstancedMesh(cubeGeo, toonNew(PAL.white), N);
    const lines = new THREE.InstancedMesh(cubeGeo, outlineMat(0.02), N);
    cubes.frustumCulled = lines.frustumCulled = false;
    root.add(lines, cubes);
    const gatesY = [1.5, 0.7, -0.1, -0.9], gatesR = [1.55, 1.25, 0.98, 0.74];
    gatesY.forEach((y, i) => {
      const ring = part(new THREE.TorusGeometry(gatesR[i], 0.07, 12, 64), toon([PAL.yellow, PAL.pink, PAL.cyan, PAL.white][i]), 0.02);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y;
      root.add(ring);
    });
    const fate = new Array(N);
    const order = [...Array(N).keys()].sort((a, b) => ((a * 37) % 101) - ((b * 37) % 101));
    order.forEach((idx, k) => { fate[idx] = k < 3 ? 4 : k < 8 ? 3 : k < 20 ? 2 : k < 45 ? 1 : 0; });
    const survivors = order.slice(0, 3);
    const survivorColor = [COLORS.mint, COLORS.zorin, COLORS.endless].map((c) => new THREE.Color(c));
    const whiteC = new THREE.Color(PAL.white);
    const start = [...Array(N).keys()].map((i) => ({ x: ((i % 10) - 4.5) * 0.27, z: (Math.floor(i / 10) - 4.5) * 0.27, y: 2.4 + (((i * 53) % 17) / 17) * 0.8 }));
    for (let i = 0; i < N; i++) cubes.setColorAt(i, whiteC);
    cubes.instanceColor.needsUpdate = true; // upload the base white once at build
    const survColored = survivors.map(() => false); // whether each survivor currently shows its OS colour
    const LOOP = 6.5;
    const radiusAt = (y) => (y >= gatesY[0] ? gatesR[0] : y <= gatesY[3] ? gatesR[3] : lerp(gatesR[3], gatesR[0], (y - gatesY[3]) / (gatesY[0] - gatesY[3])));
    W.funnel = {
      group,
      update(lt, dt, reduce) {
        const t = reduce ? 4.2 : lt % LOOP;
        let colorDirty = false;
        for (let i = 0; i < N; i++) {
          const s0 = start[i], f = fate[i];
          const y = s0.y - Math.max(0, t - 0.3) * 1.45;
          const stopY = f < 4 ? gatesY[f] : -1.45;
          const k = radiusAt(Math.max(y, stopY)) / gatesR[0];
          let px = s0.x * k, pz = s0.z * k, py = Math.max(y, stopY), sc = 1;
          if (f < 4 && y < stopY) {
            const out = Math.min(1, (stopY - y) / 0.5);
            px *= 1 + out * 0.9; pz *= 1 + out * 0.9;
            sc = 1 - out;
          }
          if (f === 4) {
            const slot = survivors.indexOf(i);
            const arrive = smooth(-1.2, -1.45, y);
            px = lerp(px, (slot - 1) * 0.55, arrive);
            pz = lerp(pz, 0.2, arrive);
            sc = 1 + arrive * 0.6;
            const colored = y < gatesY[3];
            if (survColored[slot] !== colored) { survColored[slot] = colored; cubes.setColorAt(i, colored ? survivorColor[slot] : whiteC); colorDirty = true; }
          }
          if (t > LOOP - 0.5) sc *= (LOOP - t) / 0.5;
          dummy.position.set(px, py, pz);
          dummy.rotation.set(0, (i * 0.7 + t * 0.5) % 6.28, 0);
          dummy.scale.setScalar(Math.max(sc, 0.0001));
          dummy.updateMatrix();
          cubes.setMatrixAt(i, dummy.matrix);
          lines.setMatrixAt(i, dummy.matrix);
        }
        cubes.instanceMatrix.needsUpdate = lines.instanceMatrix.needsUpdate = true;
        if (colorDirty) cubes.instanceColor.needsUpdate = true;
      },
    };
  }

  // ---------- the three desktops, drawn layer by layer ----------
  // Scrolling through a section plays its desktop: windows and menus open, the pointer clicks,
  // and the layers come apart in depth as the section arrives and leaves.
  const SW = 3.84, SH = 2.4, PX = SW / UI_W;
  const loc = (x, y) => [(x / UI_W - 0.5) * SW, (0.5 - y / UI_H) * SH];
  const bump = (p, c, w) => Math.max(0, 1 - Math.abs(p - c) / w);
  function uiLayer(parent, canvas, x, y, w, h, order, z, depth, { opaque = false, anchor = 'center' } = {}) {
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: !opaque, depthWrite: opaque, toneMapped: false });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w * PX, h * PX), mat);
    mesh.renderOrder = order;
    const pivot = new THREE.Group();
    const [cx, cy] = loc(x + w / 2, y + h / 2);
    if (anchor === 'bottom') { pivot.position.set(cx, cy - (h * PX) / 2, z); mesh.position.y = (h * PX) / 2; }
    else if (anchor === 'tip') { const [tx, ty] = loc(x, y); pivot.position.set(tx, ty, z); mesh.position.set((w * PX) / 2, -(h * PX) / 2, 0); }
    else pivot.position.set(cx, cy, z);
    pivot.add(mesh);
    parent.add(pivot);
    return { pivot, mesh, mat, base: pivot.position.clone(), z, depth };
  }
  function screenFrame() {
    const bezel = part(rbox(SW + 0.18, SH + 0.18, 0.12, 0.08), toon(PAL.ink), 0.022);
    bezel.position.z = -0.07;
    return bezel;
  }
  function pathAt(keys, p) {
    if (p <= keys[0][0]) return [keys[0][1], keys[0][2]];
    for (let i = 0; i < keys.length - 1; i++) {
      const [p0, x0, y0] = keys[i], [p1, x1, y1] = keys[i + 1];
      if (p <= p1) { const k = smooth(p0, p1, p); return [lerp(x0, x1, k), lerp(y0, y1, k)]; }
    }
    const l = keys[keys.length - 1];
    return [l[1], l[2]];
  }
  const explodeAt = (p, reduce) => (reduce ? 0 : 1 - smooth(0.18, 0.36, p) + smooth(0.72, 0.9, p));
  const setDepth = (l, ex) => { l.pivot.position.z = l.z + ex * l.depth; };
  function placeCursor(cur, keys, p, t, clicks, reduce) {
    const [x, y] = pathAt(keys, p);
    const [lx, ly] = loc(x + (reduce ? 0 : Math.sin(t * 1.7) * 3), y + (reduce ? 0 : Math.cos(t * 1.3) * 2));
    cur.pivot.position.x = lx;
    cur.pivot.position.y = ly;
    let s = 1;
    for (const c of clicks) s -= 0.25 * bump(p, c, 0.012);
    cur.pivot.scale.setScalar(s);
  }

  // ---------- Linux Mint (Cinnamon): open Files from the panel, then the menu ----------
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    group.add(root);
    const D = drawMint();
    const scr = new THREE.Group();
    scr.position.y = 0.08;
    scr.add(screenFrame());
    root.add(scr);
    const wall = uiLayer(scr, D.wall, 0, 0, 1280, 800, 1, 0, 0, { opaque: true });
    const panel = uiLayer(scr, D.panel, 0, 756, 1280, 44, 2, 0.01, 0.45);
    const task = uiLayer(scr, D.taskBtn, 172, 760, 170, 36, 3, 0.015, 0.47);
    const win = uiLayer(scr, D.win, 330, 110, 780, 480, 4, 0.02, 0.72);
    const menu = uiLayer(scr, D.menu, 0, 276, 560, 480, 5, 0.03, 0.95, { anchor: 'bottom' });
    const hi = uiLayer(scr, D.menuHi, 276, 382, 272, 32, 6, 0.035, 0);
    menu.pivot.attach(hi.pivot);
    const cur = uiLayer(scr, D.cursor, 1100, 600, 40, 56, 9, 0.06, 1.25, { anchor: 'tip' });
    const wifi = makeWifi();
    wifi.position.set(1.55, 1.68, 0.45);
    wifi.scale.setScalar(0.72);
    const people = makePeople([PAL.yellow, PAL.pink, COLORS.zorin, PAL.white, PAL.lilac], ['#F1C7A1', '#8D5A3B', '#D9A27A', '#5C3A24', '#F3D5B5']);
    people.g.position.set(0.8, -1.62, 0.9);
    root.add(wifi, people.g);
    const [mx, my] = loc(90, 690), [wx, wy] = loc(990, 150);
    const scan = analysis(root, [
      { kind: 'check', at: [mx, my + 0.08, 1.0] },
      { kind: 'check', at: [wx, wy + 0.08, 1.0] },
      { kind: 'check', at: [1.32, -1.12, 1.3] },
      { kind: 'cross', at: [1.55, 2.12, 0.9] },
    ]);
    const KEYS = [[0.28, 1150, 640], [0.33, 66, 778], [0.4, 66, 778], [0.44, 24, 778], [0.48, 400, 398], [0.54, 400, 398], [0.58, 720, 132], [0.6, 720, 132], [0.7, 840, 162], [0.82, 1000, 420]];
    W.mint = {
      group,
      pick: [wall.mesh],
      screen: scr,
      hover: false,
      update(t, dt, reduce, p = 0.5) {
        scr.scale.setScalar(lerp(scr.scale.x, this.hover ? 1.05 : 1, 0.2));
        const ex = explodeAt(p, reduce);
        const wnd = smooth(0.335, 0.41, p);
        const mnu = smooth(0.44, 0.48, p) * (1 - smooth(0.55, 0.6, p));
        const hov = smooth(0.475, 0.49, p) * (1 - smooth(0.54, 0.56, p));
        const drag = smooth(0.6, 0.7, p);
        [wall, panel, task, win, menu, cur].forEach((l) => setDepth(l, ex));
        win.pivot.position.x = win.base.x + drag * 120 * PX;
        win.pivot.position.y = win.base.y - drag * 30 * PX - (1 - wnd) * 0.4;
        win.pivot.scale.setScalar(Math.max(lerp(0.5, 1, easeOutBack(wnd)), 0.0001));
        win.mat.opacity = wnd;
        win.pivot.visible = wnd > 0.01;
        task.mat.opacity = wnd;
        menu.pivot.scale.set(1, Math.max(easeOutBack(mnu), 0.0001), 1);
        menu.mat.opacity = Math.min(1, mnu * 1.6);
        menu.pivot.visible = mnu > 0.01;
        hi.mat.opacity = hov;
        placeCursor(cur, KEYS, p, t, [0.335, 0.44, 0.6], reduce);
        wifi.userData.arcs.forEach((a, i) => { a.visible = reduce || (t * 2) % 4 > i; });
        people.update(reduce ? 0 : t);
        scan(t, reduce);
      },
    };
  }

  // ---------- Zorin OS Lite (Xfce): the menu, then Files; the whole screen floats on balloons ----------
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    root.position.y = -0.2;
    group.add(root);
    const D = drawZorin();
    const light = new THREE.Group();
    root.add(light);
    const scr = new THREE.Group();
    scr.add(screenFrame());
    light.add(scr);
    const wall = uiLayer(scr, D.wall, 0, 0, 1280, 800, 1, 0, 0, { opaque: true });
    const panel = uiLayer(scr, D.panel, 0, 754, 1280, 46, 2, 0.01, 0.45);
    const task = uiLayer(scr, D.taskBtn, 176, 759, 170, 36, 3, 0.015, 0.47);
    const win = uiLayer(scr, D.win, 440, 96, 760, 470, 4, 0.02, 0.72);
    const menu = uiLayer(scr, D.menu, 8, 222, 620, 520, 5, 0.03, 0.95, { anchor: 'bottom' });
    const hi = uiLayer(scr, D.menuHi, 26, 344, 340, 40, 6, 0.035, 0);
    menu.pivot.attach(hi.pivot);
    const cur = uiLayer(scr, D.cursor, 1100, 600, 40, 56, 9, 0.06, 1.25, { anchor: 'tip' });
    [[-1.2, 1.8, PAL.yellow], [0.1, 1.98, PAL.pink], [1.25, 1.78, PAL.white]].forEach(([x, y, c]) => {
      const bl = makeBalloon(c, y - 0.28 - 1.3);
      bl.position.set(x, y, 0);
      light.add(bl);
    });
    const hour = makeHourglass();
    hour.position.set(-1.62, -1.62, 0.6);
    hour.scale.setScalar(0.55);
    const wifi = makeWifi();
    wifi.position.set(1.62, -1.72, 0.45);
    wifi.scale.setScalar(0.62);
    root.add(hour, wifi);
    const [mx, my] = loc(160, 600);
    const scan = analysis(root, [
      { kind: 'check', at: [0.1, 2.32, 0.9] },
      { kind: 'check', at: [mx, my, 1.0] },
      { kind: 'cross', at: [-1.62, -1.08, 1.0] },
      { kind: 'cross', at: [1.62, -1.16, 0.95] },
    ]);
    const KEYS = [[0.28, 1150, 640], [0.36, 26, 777], [0.4, 26, 777], [0.46, 200, 364], [0.54, 200, 364], [0.62, 760, 300], [0.82, 1000, 420]];
    W.zorin = {
      group,
      pick: [wall.mesh],
      screen: scr,
      hover: false,
      update(t, dt, reduce, p = 0.5) {
        const m = reduce ? 0 : 1;
        light.position.y = (Math.sin(t * 1.3) * 0.08 + 0.03) * m;
        light.rotation.z = Math.sin(t * 0.9) * 0.025 * m;
        scr.scale.setScalar(lerp(scr.scale.x, this.hover ? 1.05 : 1, 0.2));
        const ex = explodeAt(p, reduce);
        const mnu = smooth(0.37, 0.43, p) * (1 - smooth(0.55, 0.6, p));
        const hov = smooth(0.45, 0.47, p) * (1 - smooth(0.55, 0.57, p));
        const wnd = smooth(0.555, 0.63, p);
        [wall, panel, task, win, menu, cur].forEach((l) => setDepth(l, ex));
        win.pivot.position.y = win.base.y - (1 - wnd) * 0.4;
        win.pivot.scale.setScalar(Math.max(lerp(0.5, 1, easeOutBack(wnd)), 0.0001));
        win.mat.opacity = wnd;
        win.pivot.visible = wnd > 0.01;
        task.mat.opacity = wnd;
        menu.pivot.scale.set(1, Math.max(easeOutBack(mnu), 0.0001), 1);
        menu.mat.opacity = Math.min(1, mnu * 1.6);
        menu.pivot.visible = mnu > 0.01;
        hi.mat.opacity = hov;
        placeCursor(cur, KEYS, p, t, [0.37, 0.555], reduce);
        const fl = Math.floor(t / 3);
        hour.rotation.z = reduce ? 0 : Math.PI * (fl + smooth(2.4, 3.0, t - fl * 3));
        wifi.userData.arcs.forEach((a, i) => { a.visible = reduce || (t * 2) % 4 > i; });
        scan(t, reduce);
      },
    };
  }

  // ---------- Endless OS: the phone-like home screen, then the offline encyclopedia ----------
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    group.add(root);
    const D = drawEndless();
    const scr = new THREE.Group();
    scr.position.y = 0.05;
    scr.add(screenFrame());
    root.add(scr);
    const wall = uiLayer(scr, D.wall, 0, 0, 1280, 800, 1, 0, 0, { opaque: true });
    const search = uiLayer(scr, D.search, 340, 50, 600, 56, 3, 0.012, 0.5);
    const iconHi = uiLayer(scr, D.iconHi, 140, 200, 150, 160, 2, 0.008, 0.55);
    const icons = D.icons.map((cv, i) => uiLayer(scr, cv, 140 + (i % 6) * 170, 200 + Math.floor(i / 6) * 200, 150, 160, 3, 0.012, 0.5 + (i % 6) * 0.06));
    const panel = uiLayer(scr, D.panel, 0, 752, 1280, 48, 4, 0.01, 0.4);
    const win = uiLayer(scr, D.win, 100, 64, 1080, 640, 6, 0.03, 0.85);
    const cur = uiLayer(scr, D.cursor, 1100, 600, 40, 56, 9, 0.06, 1.25, { anchor: 'tip' });
    const wifi = makeWifi();
    const slash = part(rbox(1.0, 0.1, 0.08, 0.04), toon(PAL.red), 0.02);
    slash.position.set(0, 0.32, 0.12);
    slash.rotation.z = -Math.PI / 4;
    wifi.add(slash);
    wifi.position.set(1.7, 1.62, 0.4);
    wifi.scale.setScalar(0.62);
    const arrow = part(extrude(ARROW, 0.14), toon(PAL.white), 0.022);
    arrow.position.set(-1.75, 1.7, 0.45);
    arrow.scale.setScalar(0.58);
    const shield = makeShield();
    shield.position.set(-1.7, -1.68, 0.6);
    shield.scale.setScalar(0.6);
    const books = makeBooks([PAL.red, COLORS.zorin, PAL.yellow]);
    books.position.set(1.45, -1.9, 0.45);
    books.scale.setScalar(0.75);
    const usb = makeUsb();
    usb.position.set(0.35, -1.72, 0.7);
    root.add(wifi, arrow, shield, books, usb);
    const [gx, gy] = loc(215, 210);
    const scan = analysis(root, [
      { kind: 'check', at: [gx, gy, 1.0] },
      { kind: 'check', at: [1.7, 2.12, 0.85] },
      { kind: 'check', at: [1.45, -1.3, 1.0] },
      { kind: 'check', at: [-1.7, -1.18, 1.0] },
      { kind: 'cross', at: [-1.75, 2.16, 0.9] },
    ]);
    const KEYS = [[0.28, 1150, 640], [0.42, 700, 430], [0.47, 225, 268], [0.55, 225, 268], [0.62, 520, 320], [0.82, 900, 400]];
    const [icx, icy] = loc(215, 280);
    W.endless = {
      group,
      pick: [wall.mesh],
      screen: scr,
      hover: false,
      update(t, dt, reduce, p = 0.5) {
        scr.scale.setScalar(lerp(scr.scale.x, this.hover ? 1.05 : 1, 0.2));
        const ex = explodeAt(p, reduce);
        [wall, search, iconHi, panel, win, cur, ...icons].forEach((l) => setDepth(l, ex));
        const srch = smooth(0.24, 0.32, p);
        search.pivot.position.y = search.base.y + (1 - srch) * 0.4;
        search.mat.opacity = srch;
        const hov = smooth(0.46, 0.48, p) * (1 - smooth(0.55, 0.57, p));
        icons.forEach((l, i) => {
          const k = smooth(0.26 + i * 0.012, 0.31 + i * 0.012, p);
          const s = easeOutBack(k) * (i === 0 ? 1 + hov * 0.12 : 1);
          l.pivot.scale.setScalar(Math.max(s, 0.0001));
          l.mat.opacity = Math.min(1, k * 2);
        });
        iconHi.mat.opacity = hov;
        iconHi.pivot.scale.copy(icons[0].pivot.scale);
        const wnd = smooth(0.555, 0.64, p);
        const e = easeOutCubic(wnd);
        win.pivot.position.x = lerp(icx, win.base.x, e);
        win.pivot.position.y = lerp(icy, win.base.y, e);
        win.pivot.scale.setScalar(Math.max(lerp(0.12, 1, e), 0.0001));
        win.mat.opacity = Math.min(1, wnd * 2);
        win.pivot.visible = wnd > 0.01;
        placeCursor(cur, KEYS, p, t, [0.555], reduce);
        const m = reduce ? 0 : 1;
        usb.rotation.y = t * 1.2 * m;
        arrow.position.y = 1.7 - Math.abs(Math.sin(t * 2.2)) * 0.1 * m;
        books.rotation.y = Math.sin(t * 0.8) * 0.15 * m;
        scan(t, reduce);
      },
    };
  }

  // ---------- scores: one tower per system, one block per criterion ----------
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    root.position.y = -0.05;
    group.add(root);
    const floor = part(rbox(4.4, 0.16, 1.6, 0.06), toon(PAL.white));
    floor.position.y = -1.45;
    root.add(floor);
    const OSC = [COLORS.mint, COLORS.zorin, COLORS.endless];
    const NAMES = ['Linux Mint', 'Zorin OS Lite', 'Endless OS'];
    const segGeo = rbox(0.8, 1, 0.8, 0.05, 2);
    const towers = OSC.map((col, i) => {
      const x = (i - 1) * 1.38;
      const light = '#' + new THREE.Color(col).lerp(new THREE.Color(PAL.white), 0.45).getHexString();
      const segs = Array.from({ length: 5 }, (_, j) => {
        const s = part(segGeo, toon(j % 2 ? light : col), 0.025);
        s.position.x = x;
        root.add(s);
        return s;
      });
      const lab = makeLabel(NAMES[i], col);
      lab.scale.setScalar(0.52);
      lab.position.set(x, -1.45, 0.86);
      root.add(lab);
      return { x, segs, cur: [0, 0, 0, 0, 0], tgt: [0, 0, 0, 0, 0], top: 0 };
    });
    const crown = makeCrown();
    root.add(crown);
    let crownX = 0, leader = 2;
    W.scores = {
      group,
      setScores(weights, rows) {
        const maxP = 5 * weights.reduce((a, b) => a + b, 0) || 1;
        const totals = towers.map((tw, i) => {
          rows.forEach((row, j) => { tw.tgt[j] = ((row[i] * weights[j]) / maxP) * 2.9; });
          return rows.reduce((s, row, j) => s + row[i] * weights[j], 0);
        });
        leader = totals.indexOf(Math.max(...totals));
      },
      onEnter() { towers.forEach((tw) => tw.cur.fill(0)); },
      update(t, dt, reduce) {
        const k = reduce ? 1 : 1 - Math.exp(-dt * 5);
        towers.forEach((tw, i) => {
          let y = -1.37;
          const grow = reduce ? 1 : smooth(0.1 + i * 0.12, 0.9 + i * 0.12, t);
          tw.segs.forEach((s, j) => {
            tw.cur[j] = lerp(tw.cur[j], tw.tgt[j] * grow, k);
            const h = tw.cur[j];
            s.visible = h > 0.004;
            s.scale.set(1, Math.max(h, 0.0001), 1);
            s.position.y = y + h / 2;
            if (s.visible) y += h + 0.025;
          });
          tw.top = y;
        });
        crownX = lerp(crownX, towers[leader].x, k);
        crown.position.set(crownX, towers[leader].top + 0.3 + (reduce ? 0 : Math.sin(t * 2.4) * 0.06), 0);
        crown.rotation.y = reduce ? 0 : t * 0.8;
        crown.scale.setScalar(Math.max(reduce ? 1 : easeOutBack(smooth(1.0, 1.4, t)), 0.0001));
      },
    };
  }

  // ---------- energy: batteries and a 2 GB memory stick ----------
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    root.position.y = -0.1;
    group.add(root);
    const OSC = [COLORS.mint, COLORS.zorin, COLORS.endless];
    const NAMES = ['Linux Mint', 'Zorin OS Lite', 'Endless OS'];
    const LEVEL = [3, 5, 2];
    const bats = OSC.map((c, i) => {
      const b = makeBattery(c, LEVEL[i]);
      b.position.set((i - 1) * 1.3, 0.35, 0);
      const lab = makeLabel(NAMES[i], c);
      lab.scale.setScalar(0.44);
      lab.position.set((i - 1) * 1.3, 1.55, 0.2);
      const bolt = part(extrude(BOLT, 0.1), toon(PAL.yellow), 0.02);
      bolt.position.set((i - 1) * 1.3 + 0.45, 0.75, 0.45);
      bolt.scale.setScalar(0.55);
      root.add(b, lab, bolt);
      return { b, bolt, level: LEVEL[i] };
    });
    const ram = makeRam();
    ram.position.set(0, -1.12, 0.75);
    root.add(ram);
    W.energy = {
      group,
      update(t, dt, reduce) {
        bats.forEach(({ b, bolt, level }, i) => {
          b.userData.cells.forEach((c, j) => {
            let s = reduce ? 1 : easeOutBack(smooth(0.1 + j * 0.12 + i * 0.08, 0.4 + j * 0.12 + i * 0.08, t));
            if (!reduce && j === level - 1) s *= 1 + Math.max(0, Math.sin(t * 5)) * 0.06;
            c.scale.setScalar(Math.max(s, 0.0001));
          });
          bolt.rotation.z = reduce ? 0 : Math.sin(t * 9 + i * 2) * 0.12;
          bolt.scale.setScalar(0.55 * (reduce ? 1 : 1 + Math.max(0, Math.sin(t * 7 + i * 1.7)) * 0.18));
        });
        ram.rotation.y = reduce ? 0 : Math.sin(t * 0.8) * 0.35;
        ram.position.y = -1.12 + (reduce ? 0 : Math.sin(t * 1.4) * 0.05);
      },
    };
  }

  // ---------- accessibility: four tools on display stands ----------
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    root.position.y = 0.12;
    group.add(root);
    const items = [
      [makeMagnifier(PAL.yellow), -1.0, 0.72],
      [makeSpeaker(), 1.0, 0.72],
      [makeKeyboard(), -1.0, -0.88],
      [makeGlobe(), 1.0, -0.82],
    ];
    items[0][0].scale.setScalar(1.05);
    items[2][0].rotation.x = 0.85;
    const stands = items.map(([obj, x, y]) => {
      const st = part(new THREE.CylinderGeometry(0.62, 0.66, 0.16, 36), toon(PAL.white), 0.025);
      st.position.set(x, y - 0.68, 0.1);
      obj.position.set(x, y, 0.3);
      root.add(st, obj);
      return st;
    });
    W.access = {
      group,
      update(t, dt, reduce) {
        items.forEach(([obj, x, y], i) => {
          const pop = reduce ? 1 : easeOutBack(smooth(0.1 + i * 0.15, 0.5 + i * 0.15, t));
          obj.position.y = y + (reduce ? 0 : Math.sin(t * 2 - i * 0.9) * 0.08);
          const base = i === 0 ? 1.05 : 1;
          obj.scale.setScalar(Math.max(base * pop, 0.0001));
          stands[i].scale.setScalar(Math.max(pop, 0.0001));
        });
        if (!reduce) {
          items[0][0].rotation.z = Math.sin(t * 1.5) * 0.2;
          items[1][0].userData.waves.forEach((w, j) => { w.visible = (t * 2.5) % 3 > j + 0.5; });
          items[2][0].rotation.y = Math.sin(t * 0.9) * 0.25;
          items[3][0].userData.spin.rotation.y = t * 0.9;
        }
      },
    };
  }

  // ---------- our pick: the podium ----------
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    root.position.y = 0.05;
    group.add(root);
    const blocks = [
      { col: COLORS.mint, name: 'Linux Mint', x: -1.38, h: 1.0, delay: 0.3 },
      { col: COLORS.endless, name: 'Endless OS', x: 0, h: 1.5, delay: 0.55 },
      { col: COLORS.zorin, name: 'Zorin OS Lite', x: 1.38, h: 0.62, delay: 0.1 },
    ].map((b) => {
      const g = new THREE.Group();
      g.add(part(rbox(1.3, b.h, 0.95, 0.07), toon(b.col)));
      const lab = makeLabel(b.name, b.col);
      lab.scale.setScalar(0.6);
      lab.position.z = 0.5;
      g.add(lab);
      root.add(g);
      return { ...b, g, y: -1.6 + b.h / 2 };
    });
    const trophy = makeTrophy();
    root.add(trophy);
    const stars = [0, 1, 2, 3].map((i) => {
      const s = part(extrude(STAR, 0.1), toon(i % 2 ? PAL.white : PAL.yellow), 0.02);
      s.scale.setScalar(0.7);
      root.add(s);
      return s;
    });
    let prevPick = -1;
    W.pick = {
      group,
      update(t, dt, reduce) {
        if (!reduce && prevPick < 1.0 && t >= 1.0) sfx.tada();
        prevPick = t;
        blocks.forEach((b) => {
          const rise = reduce ? 1 : easeOutBack(smooth(b.delay, b.delay + 0.5, t));
          b.g.position.set(b.x, b.y - (1 - rise) * 1.6, 0);
          b.g.scale.setScalar(Math.max(Math.min(1, rise + 0.2), 0.0001));
        });
        const drop = reduce ? 1 : easeOutBack(smooth(1.0, 1.5, t));
        trophy.position.set(0, -0.1 + (1 - drop) * 2.2 + (reduce ? 0 : Math.sin(t * 2) * 0.04), 0);
        trophy.rotation.y = reduce ? 0 : t * 0.9;
        trophy.scale.setScalar(Math.max(drop * 0.95, 0.0001));
        stars.forEach((s, i) => {
          const a = (reduce ? 0 : t * 0.7) + (i * Math.PI) / 2;
          s.position.set(Math.cos(a) * 1.85, 1.15 + Math.sin(a * 2) * 0.2, Math.sin(a) * 0.9 + 0.2);
          s.rotation.set(0, reduce ? 0 : t * 2 + i, 0);
          s.scale.setScalar(Math.max(0.7 * (reduce ? 1 : smooth(1.2, 1.6, t)), 0.0001));
        });
      },
    };
  }

  addAbsurdWorlds(W);
  addGlobeWorld(W);
  addInstallWorld(W);
  addLinoWorlds(W);
  return W;
}
