// Shared building blocks: toon materials, black outlines, rounded boxes, OS labels, confetti and floating shapes.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { COLORS, drawLabel } from './screens.js';

export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp01 = (x) => Math.min(1, Math.max(0, x));
export const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const easeOutCubic = (t) => 1 - (1 - t) ** 3;
export const easeOutBack = (t) => { const u = t - 1; return 1 + 2.7 * u * u * u + 1.7 * u * u; };

// Sound effects; main.js fills these in when the visitor turns sound on.
export const sfx = { pop() {}, whoosh() {}, tada() {}, beat() { return -1; } };

export const PAL = {
  yellow: '#FFE14D', pink: '#FF9ECF', lilac: '#B7A3FF', sky: '#7CC8FF', peach: '#FFB07A',
  lime: '#C8EE5A', aqua: '#6EE2D0', coral: '#FF8F8F', red: '#FF4D4D', cyan: '#5CE1E6',
  white: '#FFFFFF', ink: '#000000', grey: '#D9D9D9',
};

const outlines = new Map();
export function outlineMat(t = 0.035) {
  if (outlines.has(t)) return outlines.get(t);
  const m = new THREE.ShaderMaterial({
    uniforms: { uT: { value: t } },
    vertexShader: `uniform float uT;
      void main(){
        vec4 p = vec4(position + normal * uT, 1.0);
        #ifdef USE_INSTANCING
        p = instanceMatrix * p;
        #endif
        gl_Position = projectionMatrix * modelViewMatrix * p;
      }`,
    fragmentShader: 'void main(){ gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); }',
    side: THREE.BackSide,
  });
  outlines.set(t, m);
  return m;
}

const grad = new THREE.DataTexture(new Uint8Array([110, 190, 255]), 3, 1, THREE.RedFormat);
grad.minFilter = grad.magFilter = THREE.NearestFilter;
grad.needsUpdate = true;
const toons = new Map();
// Shared material per colour: never change its colour, use toonNew() for that.
export const toon = (hex) => {
  if (!toons.has(hex)) toons.set(hex, new THREE.MeshToonMaterial({ color: hex, gradientMap: grad }));
  return toons.get(hex);
};
export const toonNew = (hex, extra = {}) => new THREE.MeshToonMaterial({ color: hex, gradientMap: grad, ...extra });

export const part = (geo, mat, t = 0.035) => {
  const g = new THREE.Group();
  g.add(new THREE.Mesh(geo, mat));
  g.add(new THREE.Mesh(geo, outlineMat(t)));
  return g;
};
export const rbox = (w, h, d, r = 0.06, seg = 3) => new RoundedBoxGeometry(w, h, d, seg, Math.min(r, Math.min(w, h, d) / 2 - 0.002));

// OS name stickers; redrawn once the web fonts have loaded.
export const labels = [];
export function makeLabel(text, fill, color = COLORS.ink) {
  const g = new THREE.Group();
  const w = 1.9, h = 0.62;
  const geo = rbox(w, h, 0.07, 0.04, 2);
  g.add(new THREE.Mesh(geo, toon(fill)));
  g.add(new THREE.Mesh(geo, outlineMat(0.022)));
  const tex = new THREE.CanvasTexture(drawLabel(text, fill, color));
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const face = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }));
  face.position.z = 0.036;
  g.add(face);
  g.userData.redraw = () => { drawLabel(text, fill, color, tex.image); tex.needsUpdate = true; };
  labels.push(g);
  return g;
}

const dummy = new THREE.Object3D();

// A burst of paper confetti in the OS colours.
export function makeConfetti(parent, origin = [0, 0.2, 0.6]) {
  const CN = 120;
  const conf = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.15, 0.09), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, toneMapped: false }), CN);
  const cols = [COLORS.mint, COLORS.zorin, COLORS.endless, PAL.white, PAL.ink, PAL.yellow, PAL.pink].map((c) => new THREE.Color(c));
  const cp = [], cv = [], cr = [];
  for (let i = 0; i < CN; i++) { conf.setColorAt(i, cols[i % cols.length]); cp.push(new THREE.Vector3()); cv.push(new THREE.Vector3()); cr.push(new THREE.Vector3()); }
  conf.visible = false;
  conf.frustumCulled = false;
  parent.add(conf);
  let t = 99;
  return {
    burst() {
      t = 0;
      conf.visible = true;
      for (let i = 0; i < CN; i++) {
        cp[i].set(origin[0] + (Math.random() - 0.5) * 1.2, origin[1], origin[2]);
        cv[i].set((Math.random() - 0.5) * 6, 2.5 + Math.random() * 4, 0.4 + Math.random() * 2.4);
        cr[i].set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
      }
    },
    update(dt) {
      if (!conf.visible) return;
      t += dt;
      for (let i = 0; i < CN; i++) {
        cv[i].y -= 7 * dt;
        cp[i].addScaledVector(cv[i], dt);
        cr[i].x += dt * 5; cr[i].y += dt * 4;
        dummy.position.copy(cp[i]);
        dummy.rotation.set(cr[i].x, cr[i].y, cr[i].z);
        dummy.scale.setScalar(t > 2.4 ? Math.max(0.0001, 1 - (t - 2.4) / 0.4) : 1);
        dummy.updateMatrix();
        conf.setMatrixAt(i, dummy.matrix);
      }
      conf.instanceMatrix.needsUpdate = true;
      if (t > 2.8) conf.visible = false;
    },
  };
}

// Chunky shapes drifting slowly behind the action: colour and depth.
export function makeFloaters(parent, { count = 32, colors, seed = 1, spread = [8, 5, 4], back = -2.5 } = {}) {
  let s = seed;
  const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const geos = [rbox(0.34, 0.34, 0.34, 0.07), new THREE.SphereGeometry(0.2, 20, 14), new THREE.TorusGeometry(0.18, 0.075, 10, 26), new THREE.ConeGeometry(0.21, 0.38, 20)];
  const per = Math.ceil(count / geos.length);
  const sets = geos.map((geo) => {
    const m = new THREE.InstancedMesh(geo, toonNew(PAL.white), per);
    const o = new THREE.InstancedMesh(geo, outlineMat(0.025), per);
    m.frustumCulled = o.frustumCulled = false;
    parent.add(o, m);
    const items = [];
    for (let i = 0; i < per; i++) {
      let x, y;
      do { x = (rnd() - 0.5) * 2 * spread[0]; y = (rnd() - 0.5) * 2 * spread[1]; } while (Math.abs(x) < 2.8 && Math.abs(y) < 2.3);
      items.push({ x, y, z: back - rnd() * spread[2], ph: rnd() * 6.28, sp: 0.4 + rnd() * 0.8, sc: 0.7 + rnd() * 0.8 });
      m.setColorAt(i, new THREE.Color(colors[Math.floor(rnd() * colors.length)]));
    }
    return { m, o, items };
  });
  return {
    update(time, show = 1, mask = null) {
      for (const { m, o, items } of sets) {
        items.forEach((it, i) => {
          dummy.position.set(it.x + Math.sin(time * 0.3 * it.sp + it.ph) * 0.3, it.y + Math.sin(time * 0.6 * it.sp + it.ph) * 0.35, it.z);
          dummy.rotation.set(time * 0.5 * it.sp + it.ph, time * 0.7 * it.sp, it.ph);
          it.k = lerp(it.k ?? 1, mask ? mask(dummy.position) : 1, 0.12);
          dummy.scale.setScalar(Math.max(it.sc * show * it.k, 0.0001));
          dummy.updateMatrix();
          m.setMatrixAt(i, dummy.matrix);
          o.setMatrixAt(i, dummy.matrix);
        });
        m.instanceMatrix.needsUpdate = true;
        o.instanceMatrix.needsUpdate = true;
        m.visible = o.visible = show > 0.01;
      }
    },
  };
}
