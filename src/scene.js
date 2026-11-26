// The 3D stage. Outside: a toon-shaded desktop computer covered in stickers, with 99 more PCs around it.
// Scrolling flies the camera into its screen; inside, each section has its own small world (see worlds.js).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { COLORS, SCREEN_NAMES, drawScreen, drawRound } from './screens.js';
import { lerp, smooth, clamp01, easeOutBack, easeOutCubic, PAL, toon, toonNew, part, rbox, outlineMat, labels, makeLabel, makeConfetti, makeFloaters, sfx } from './kit.js';
import { buildWorlds } from './worlds.js';
import { perf, detectGpu, perfTick } from './perf.js';

const ENTRY = 2.6; // inside, the camera starts this many times farther away and flies in
const easeOutBounce = (x) => {
  const n = 7.5625, d = 2.75;
  if (x < 1 / d) return n * x * x;
  if (x < 2 / d) return n * (x -= 1.5 / d) * x + 0.75;
  if (x < 2.5 / d) return n * (x -= 2.25 / d) * x + 0.9375;
  return n * (x -= 2.625 / d) * x + 0.984375;
};
const srgb = new Map();
const setSrgb = (v, hex = PAL.yellow) => {
  let c = srgb.get(hex);
  if (!c) { const n = parseInt(hex.slice(1), 16); c = [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; srgb.set(hex, c); }
  v.set(c[0], c[1], c[2]);
};

// Full-screen background: the next section's colour spreads out of the 3D object in a circle,
// under slowly turning sunburst rays and halftone dots. Party mode turns it into a rainbow.
const BG_FRAG = `varying vec2 vUv;
uniform vec2 uRes, uCenter;
uniform vec3 uColA, uColB;
uniform float uWipe, uSpin, uParty, uTime, uBeat, uChaos, uLin;
vec3 hsv(float h){ vec3 p = abs(fract(h + vec3(0.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), 0.55); }
vec3 toLinear(vec3 c){ return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
void main(){
  vec2 p = vUv * uRes, d = p - uCenter * uRes;
  float r = length(d), R = length(uRes), a = atan(d.y, d.x);
  float star = r * (1.0 + 0.28 * cos(5.0 * (a + uTime * 0.6)));
  float edge = uWipe * R * 1.3;
  vec3 col = mix(uColA, uColB, 1.0 - smoothstep(edge - 1.5, edge + 1.5, star));
  float ring = (1.0 - smoothstep(2.0, 7.0, abs(star - edge))) * step(0.002, uWipe) * step(uWipe, 0.998);
  col = mix(col, hsv(fract(uTime * 0.22 + r / R * 0.7)), max(uParty, uChaos) * 0.85);
  float swirl = sin(r * 0.012 - uTime * 1.6) * (0.35 + uChaos * 0.6);
  float rays = step(0.5, fract(a / 6.2831853 * 18.0 + uSpin + swirl));
  col = mix(col, mix(col, vec3(1.0), 0.17 + uBeat * 0.1), rays * smoothstep(70.0, 280.0, r));
  vec2 g = mod(p, 18.0) - 9.0;
  float dr = (3.3 + uBeat * 2.4) * smoothstep(0.22, 0.9, r / R);
  col = mix(col, col * 0.84, 1.0 - smoothstep(dr - 0.7, dr + 0.7, length(g)));
  vec3 o = mix(col, vec3(0.0), ring * 0.9);
  gl_FragColor = vec4(uLin > 0.5 ? toLinear(o) : o, 1.0);
}`;

// Post-processing over the whole canvas: fisheye in the dive, click shockwaves, glitch slices,
// colour fringes, film grain and scanlines. Only used while something needs it (the dive, party modes):
// the rest of the time the 3D is drawn straight to the screen, which is much lighter.
const POST_FRAG = `uniform sampler2D tDiffuse;
uniform vec2 uRes;
uniform float uTime, uAberr, uBarrel, uGlitch, uGrain, uScan, uKaleido, uWarp, uVhs;
uniform vec3 uHole;
uniform vec4 uRipples[6];
varying vec2 vUv;
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
void main(){
  float asp = uRes.x / uRes.y;
  vec2 uv = vUv;
  // wormhole back to the top: the picture spins into a tunnel
  if (uWarp > 0.001) {
    vec2 d = (uv - 0.5) * vec2(asp, 1.0);
    float r = length(d);
    d = rot(uWarp * 4.0 / (r + 0.2)) * d * mix(1.0, 0.15 + r * 0.9, uWarp);
    uv = 0.5 + d / vec2(asp, 1.0);
  }
  // kaleidoscope mode
  if (uKaleido > 0.001) {
    vec2 d = (uv - 0.5) * vec2(asp, 1.0);
    float r = length(d), a = atan(d.y, d.x) + uTime * 0.3, seg = 6.2831853 / 8.0;
    a = abs(mod(a, seg) - seg * 0.5);
    uv = mix(uv, 0.5 + vec2(cos(a), sin(a)) * r / vec2(asp, 1.0), uKaleido);
  }
  // black hole: everything swirls into the pointer
  float hr = 9.0;
  if (uHole.z > 0.001) {
    vec2 d = (uv - uHole.xy) * vec2(asp, 1.0);
    hr = length(d);
    float pull = uHole.z * exp(-hr * 4.0);
    d = rot(pull * 7.0) * d * (1.0 + pull * 1.4);
    uv = uHole.xy + d / vec2(asp, 1.0);
  }
  // rewind: the tape wobbles
  if (uVhs > 0.001) {
    float line = floor(uv.y * 160.0);
    uv.x += (sin(uv.y * 30.0 + uTime * 40.0) * 0.004 + (hash(vec2(line, floor(uTime * 30.0))) - 0.5) * 0.012) * uVhs;
    uv.y = fract(uv.y + uVhs * 0.02 * sin(uTime * 3.0));
  }
  vec2 c = uv - 0.5;
  uv = 0.5 + c * (1.0 + uBarrel * dot(c, c) * 1.8) / (1.0 + uBarrel * 0.45);
  for (int i = 0; i < 6; i++) {
    vec4 rp = uRipples[i];
    float age = uTime - rp.z;
    if (rp.w > 0.0 && age > 0.0 && age < 1.4) {
      vec2 d = (uv - rp.xy) * vec2(asp, 1.0);
      float dist = length(d);
      float w = exp(-pow((dist - age * 0.9) * 16.0, 2.0)) * (1.0 - age / 1.4) * rp.w;
      uv -= (d / max(dist, 1e-4)) * w * 0.04 / vec2(asp, 1.0);
    }
  }
  if (uGlitch > 0.0) {
    float tick = floor(uTime * 18.0), band = floor(uv.y * 24.0);
    if (hash(vec2(band, tick)) < uGlitch * 0.35) uv.x += (hash(vec2(band * 1.7, tick + 3.1)) - 0.5) * 0.14 * uGlitch;
  }
  vec2 dir = (uv - 0.5) * uAberr * 2.0;
  vec3 col = vec3(texture2D(tDiffuse, uv + dir).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv - dir).b);
  col += (hash(vUv * uRes + fract(uTime * 7.0) * 113.0) - 0.5) * uGrain;
  col *= 1.0 - uScan * (0.5 + 0.5 * sin(vUv.y * uRes.y * 2.0));
  if (uVhs > 0.001) {
    float band = 1.0 - smoothstep(0.0, 0.035, abs(fract(vUv.y - uTime * 0.35) - 0.5));
    col = mix(col, vec3(dot(col, vec3(0.3, 0.59, 0.11))), 0.35 * uVhs);
    col += band * uVhs * hash(vUv * uRes + uTime) * 0.9;
  }
  if (uHole.z > 0.001) col *= smoothstep(0.0, 0.07 * uHole.z + 0.001, hr);
  col = mix(col, vec3(1.0), smoothstep(0.7, 1.0, uWarp));
  gl_FragColor = vec4(max(col, 0.0), 1.0);
  #include <colorspace_fragment>
}`;

export function createStage(canvas, scenes, sections, opts = {}) {
  const reduce = !!opts.reduceMotion;
  const onBg = opts.onBg || (() => {});
  const flash = opts.flash || null;
  const burstEl = opts.burst || null;
  // software graphics (or ?q=3) get no antialiasing; everything else gets the screen's own, which is cheap
  const soft = (() => {
    if (/[?&]q=3\b/.test(location.search)) return true;
    try {
      const c = document.createElement('canvas'), gl = c.getContext('webgl2') || c.getContext('webgl');
      if (!gl) return false;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const name = String(gl.getParameter(ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER) || '');
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /swiftshader|llvmpipe|softpipe|basic render|software/i.test(name);
    } catch (e) { return false; }
  })();
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !soft, alpha: true, powerPreference: 'high-performance' });
  detectGpu(renderer.getContext());
  // per quality level: pixel ratio cap, MSAA samples, size of the picture inside the monitor
  const Q = [{ pr: 1.5, ms: 4, portal: 1024 }, { pr: 1.25, ms: 2, portal: 1024 }, { pr: 1, ms: 0, portal: 768 }, { pr: 0.75, ms: 0, portal: 512 }];
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  for (const s of Object.values(scenes)) s._bg = new THREE.Color(s.bg || PAL.yellow);

  const addLights = (sc) => {
    sc.add(new THREE.AmbientLight(0xffffff, 1.1));
    const sun = new THREE.DirectionalLight(0xffffff, 1.9);
    sun.position.set(4, 6, 5);
    sc.add(sun);
  };
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 300);
  const dummy = new THREE.Object3D();

  const bgU = {
    uRes: { value: new THREE.Vector2(1, 1) }, uCenter: { value: new THREE.Vector2(0.5, 0.5) },
    uColA: { value: new THREE.Vector3(1, 0.88, 0.3) }, uColB: { value: new THREE.Vector3(1, 0.88, 0.3) },
    uWipe: { value: 0 }, uSpin: { value: 0 }, uParty: { value: 0 }, uTime: { value: 0 }, uBeat: { value: 0 }, uChaos: { value: 0 }, uLin: { value: 0 },
  };
  const bgScene = new THREE.Scene();
  const bgQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: bgU, fragmentShader: BG_FRAG, depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
  }));
  bgQuad.frustumCulled = false;
  bgScene.add(bgQuad);
  const bgCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const postU = {
    tDiffuse: { value: null }, uRes: { value: new THREE.Vector2(1, 1) }, uTime: { value: 0 },
    uAberr: { value: 0 }, uBarrel: { value: 0 }, uGlitch: { value: 0 }, uGrain: { value: 0 }, uScan: { value: 0 },
    uKaleido: { value: 0 }, uWarp: { value: 0 }, uVhs: { value: 0 }, uHole: { value: new THREE.Vector3(0.5, 0.5, 0) },
    uRipples: { value: Array.from({ length: 6 }, () => new THREE.Vector4(0, 0, -10, 0)) },
  };
  const postScene = new THREE.Scene();
  const postQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({
    uniforms: postU, fragmentShader: POST_FRAG, depthTest: false, depthWrite: false,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
  }));
  postQuad.frustumCulled = false;
  postScene.add(postQuad);
  const mainRT = new THREE.WebGLRenderTarget(1, 1, { samples: Q[perf.level].ms });
  postU.tDiffuse.value = mainRT.texture;
  const mainRT2 = new THREE.WebGLRenderTarget(1, 1, { samples: Q[perf.level].ms });
  let flipRT = false, drosteOn = true; // the screen-in-the-screen picture: party mode only
  const DROSTE = new Set(['hello', 'smile']);
  const dbs = new THREE.Vector2();
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

  // Click on an empty spot: a handful of chunky cubes explodes out of it.
  function makeBurstPool(parent) {
    const N = 96, geo = rbox(0.28, 0.28, 0.28, 0.06, 2);
    const m = new THREE.InstancedMesh(geo, toonNew(PAL.white), N);
    const o = new THREE.InstancedMesh(geo, outlineMat(0.025), N);
    m.frustumCulled = o.frustumCulled = false;
    parent.add(o, m);
    const cols = [PAL.yellow, PAL.pink, PAL.cyan, PAL.lilac, PAL.white, COLORS.mint, COLORS.zorin, COLORS.endless, PAL.red].map((c) => new THREE.Color(c));
    const st = Array.from({ length: N }, (_, i) => { m.setColorAt(i, cols[i % cols.length]); return { p: new THREE.Vector3(), v: new THREE.Vector3(), r: new THREE.Vector3(), life: 0, s: 1 }; });
    let next = 0, active = true;
    return {
      burst(at) {
        for (let k = 0; k < 26; k++) {
          const i = next;
          next = (next + 1) % N;
          const s = st[i];
          const a = Math.random() * Math.PI * 2, el = (Math.random() - 0.3) * 1.4, sp = 3 + Math.random() * 4.5;
          s.p.copy(at);
          s.v.set(Math.cos(a) * Math.cos(el) * sp, Math.sin(el) * sp + 2.5, Math.sin(a) * Math.cos(el) * sp);
          s.r.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
          s.life = 1.3 + Math.random() * 0.5;
          s.s = 0.6 + Math.random() * 0.9;
          m.setColorAt(i, cols[Math.floor(Math.random() * cols.length)]);
        }
        m.instanceColor.needsUpdate = true;
        active = true;
      },
      update(dt) {
        if (!active) return;
        let alive = false;
        for (let i = 0; i < N; i++) {
          const s = st[i];
          if (s.life > 0) {
            alive = true;
            s.life -= dt;
            s.v.y -= 9.5 * dt;
            s.v.multiplyScalar(1 - dt * 0.6);
            s.p.addScaledVector(s.v, dt);
            s.r.x += dt * 6; s.r.y += dt * 4;
            dummy.position.copy(s.p);
            dummy.rotation.set(s.r.x, s.r.y, s.r.z);
            dummy.scale.setScalar(Math.max(s.s * Math.min(1, s.life / 0.4), 0.0001));
          } else {
            dummy.position.set(0, -50, 0);
            dummy.scale.setScalar(0.0001);
          }
          dummy.updateMatrix();
          m.setMatrixAt(i, dummy.matrix);
          o.setMatrixAt(i, dummy.matrix);
        }
        m.instanceMatrix.needsUpdate = o.instanceMatrix.needsUpdate = true;
        active = alive;
      },
    };
  }

  // ======================= outside =======================
  const scene = new THREE.Scene();
  addLights(scene);
  const rig = new THREE.Group();
  scene.add(rig);

  const pc = new THREE.Group();
  rig.add(pc);
  const white = toon(COLORS.paper);
  pc.add(part(rbox(3.4, 2.2, 0.26, 0.12, 4), white));
  const rim = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 1.92), new THREE.MeshBasicMaterial({ color: 0x000000 }));
  rim.position.z = 0.131;
  pc.add(rim);
  const texs = {};
  for (const n of SCREEN_NAMES) {
    const t = new THREE.CanvasTexture(drawScreen(n));
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    texs[n] = t;
  }
  const scrGeo = new THREE.PlaneGeometry(3.0, 1.834);
  const scrA = new THREE.Mesh(scrGeo, new THREE.MeshBasicMaterial({ map: texs.hello, toneMapped: false }));
  const scrB = new THREE.Mesh(scrGeo, new THREE.MeshBasicMaterial({ map: texs.hello, toneMapped: false, transparent: true, opacity: 0, depthWrite: false }));
  scrA.position.z = 0.132;
  scrB.position.z = 0.133;
  pc.add(scrA, scrB);
  const neck = part(rbox(0.42, 0.74, 0.22, 0.06), white);
  neck.position.set(0, -1.42, -0.02);
  const base = part(rbox(1.6, 0.14, 0.9, 0.06), white);
  base.position.set(0, -1.85, 0);
  const kb = part(rbox(2.7, 0.14, 0.9, 0.06), white);
  kb.position.set(0, -1.85, 1.25);
  const mouse = part(rbox(0.36, 0.14, 0.56, 0.07), white);
  mouse.position.set(1.85, -1.85, 1.3);
  pc.add(neck, base, kb, mouse);
  const keys = new THREE.InstancedMesh(new THREE.BoxGeometry(0.15, 0.06, 0.15), toon(COLORS.grey), 56);
  for (let i = 0; i < 56; i++) {
    dummy.position.set(-1.17 + (i % 14) * 0.18, -1.76, 0.98 + Math.floor(i / 14) * 0.18);
    dummy.updateMatrix();
    keys.setMatrixAt(i, dummy.matrix);
  }
  pc.add(keys);
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(1, 48), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.16, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.scale.set(3.1, 1.6, 1);
  shadow.position.set(0.15, -1.935, 0.7);
  rig.add(shadow);

  // stickers around the computer
  const stickers = {
    mint: makeLabel('Linux Mint', COLORS.mint),
    zorin: makeLabel('Zorin OS Lite', COLORS.zorin),
    endless: makeLabel('Endless OS', COLORS.endless),
  };
  {
    const g = new THREE.Group();
    const geo = new THREE.CylinderGeometry(0.42, 0.42, 0.07, 48).rotateX(Math.PI / 2);
    g.add(new THREE.Mesh(geo, toon(COLORS.paper)));
    g.add(new THREE.Mesh(geo, outlineMat(0.022)));
    const tex = new THREE.CanvasTexture(drawRound('?', COLORS.paper, COLORS.ink));
    tex.colorSpace = THREE.SRGBColorSpace;
    const face = new THREE.Mesh(new THREE.CircleGeometry(0.42, 48), new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }));
    face.position.z = 0.036;
    g.add(face);
    g.userData.redraw = () => { drawRound('?', COLORS.paper, COLORS.ink, tex.image); tex.needsUpdate = true; };
    labels.push(g);
    stickers.q = g;
  }
  for (const s of Object.values(stickers)) rig.add(s);
  const HOME = {
    mint: { p: [-1.75, 1.22, 0.5], r: 0.18 },
    zorin: { p: [1.72, 0.95, 0.7], r: -0.14 },
    endless: { p: [-1.68, -0.5, 1.0], r: 0.1 },
    q: { p: [1.78, -0.42, 1.1], r: -0.2 },
  };

  // 99 more PCs: the rest of the donation
  const crowdN = 99;
  const miniGeo = mergeGeometries([
    rbox(1.0, 0.66, 0.09, 0.04).translate(0, 0.66, 0),
    rbox(0.12, 0.24, 0.07, 0.02).translate(0, 0.2, -0.01),
    rbox(0.46, 0.05, 0.28, 0.02).translate(0, 0.025, 0),
  ]);
  const crowdBody = new THREE.InstancedMesh(miniGeo, toon(COLORS.paper), crowdN);
  const crowdLine = new THREE.InstancedMesh(miniGeo, outlineMat(0.03), crowdN);
  const miniScrGeo = new THREE.PlaneGeometry(0.88, 0.54).translate(0, 0.66, 0.047);
  const crowdScr = new THREE.InstancedMesh(miniScrGeo, new THREE.MeshBasicMaterial({ toneMapped: false }), crowdN);
  for (const m of [crowdBody, crowdLine, crowdScr]) m.frustumCulled = false;
  for (let i = 0; i < crowdN; i++) crowdScr.setColorAt(i, new THREE.Color('#262626'));
  rig.add(crowdLine, crowdBody, crowdScr);
  const spots = [];
  for (let i = -5; i <= 5; i++) for (let j = -9; j <= 2; j++) {
    const x = i * 1.35, z = j * 1.35 + 0.4;
    if (Math.abs(x) < 2.4 && z > -1.8) continue;
    spots.push({ x, z, d: Math.hypot(x, z * 0.8) });
  }
  spots.sort((a, b) => a.d - b.d);
  const crowd = spots.slice(0, crowdN).map((s, i) => ({ ...s, ry: (((i * 37) % 11) / 11 - 0.5) * 0.3 }));
  const darkC = new THREE.Color('#262626'), litC = new THREE.Color(COLORS.endless), flashC = new THREE.Color(PAL.white), tmpC = new THREE.Color();
  let installT = 0;
  const waveCols = [COLORS.endless, PAL.yellow, PAL.pink, PAL.cyan, PAL.white, PAL.lime, PAL.lilac].map((c) => new THREE.Color(c));

  // a rain of small PCs behind the hero (and everywhere in party and chaos mode)
  const RN = 32;
  const rainBody = new THREE.InstancedMesh(miniGeo, toon(COLORS.paper), RN);
  const rainLine = new THREE.InstancedMesh(miniGeo, outlineMat(0.03), RN);
  const rainScr = new THREE.InstancedMesh(miniScrGeo, new THREE.MeshBasicMaterial({ toneMapped: false }), RN);
  for (const m of [rainBody, rainLine, rainScr]) m.frustumCulled = false;
  scene.add(rainLine, rainBody, rainScr);
  const rainCols = [COLORS.mint, COLORS.zorin, COLORS.endless, PAL.pink, PAL.yellow, PAL.cyan, PAL.lilac];
  const rain = Array.from({ length: RN }, (_, i) => {
    rainScr.setColorAt(i, new THREE.Color(rainCols[i % rainCols.length]));
    return { x: (((i * 0.618) % 1) - 0.5) * 18, z: -3 - ((i * 0.37) % 1) * 6, y: ((i * 0.73) % 1) * 13 - 6, sp: 1.4 + ((i * 0.29) % 1) * 1.8, r: i * 1.7, s: 0.5 + ((i * 0.41) % 1) * 0.5, k: 1 };
  });

  const outFloat = makeFloaters(scene, { colors: [PAL.pink, PAL.lilac, PAL.sky, COLORS.mint, COLORS.zorin, COLORS.endless, PAL.white], seed: 7 });
  const outConf = makeConfetti(rig, [0, 0.2, 0.6]);
  const outBurst = makeBurstPool(scene);

  // ======================= inside =======================
  const inner = new THREE.Scene();
  addLights(inner);
  const inRig = new THREE.Group();
  inner.add(inRig);
  const worlds = buildWorlds();
  for (const w of Object.values(worlds)) { w.p = 0; w.t0 = 0; w.group.visible = false; inRig.add(w.group); }
  const inFloat = makeFloaters(inner, { colors: [PAL.yellow, PAL.white, PAL.pink, PAL.cyan, PAL.lilac, COLORS.mint, COLORS.zorin, COLORS.endless], seed: 3 });
  const inConf = makeConfetti(inRig, [0, 0.6, 0.8]);
  const inBurst = makeBurstPool(inner);

  // the tunnel of coloured pixels the camera flies through on the way in
  const TN = 150;
  const tunnelGeo = rbox(0.3, 0.3, 0.3, 0.05, 2);
  const tunnel = new THREE.InstancedMesh(tunnelGeo, toonNew(PAL.white), TN);
  const tunnelLine = new THREE.InstancedMesh(tunnelGeo, outlineMat(0.03), TN);
  for (const m of [tunnel, tunnelLine]) m.frustumCulled = false;
  const tunnelG = new THREE.Group();
  tunnelG.add(tunnelLine, tunnel);
  inner.add(tunnelG);
  const tunnelCols = [PAL.yellow, PAL.pink, PAL.cyan, PAL.white, COLORS.mint, COLORS.zorin, COLORS.endless, PAL.lilac];
  const tPts = Array.from({ length: TN }, (_, i) => {
    tunnel.setColorAt(i, new THREE.Color(tunnelCols[i % tunnelCols.length]));
    const a = i * 2.399, r = 2.4 + ((i * 7) % 13) / 13 * 3.2;
    return { x: Math.cos(a) * r, y: Math.sin(a) * r, u: ((i * 53) % TN) / TN, s: 0.6 + ((i * 11) % 7) / 7 * 1.2, rot: i };
  });
  let tunnelShow = -1;
  function layTunnel(show) {
    for (let i = 0; i < TN; i++) {
      const p = tPts[i];
      dummy.position.set(p.x, p.y, baseDist * (0.55 + p.u * (ENTRY - 0.4)));
      dummy.rotation.set(p.rot, p.rot * 0.7, 0);
      dummy.scale.setScalar(Math.max(p.s * show, 0.0001));
      dummy.updateMatrix();
      tunnel.setMatrixAt(i, dummy.matrix);
      tunnelLine.setMatrixAt(i, dummy.matrix);
    }
    tunnel.instanceMatrix.needsUpdate = tunnelLine.instanceMatrix.needsUpdate = true;
  }

  // what the monitor shows while the camera dives into it
  const rt = new THREE.WebGLRenderTarget(Q[perf.level].portal, Math.round(Q[perf.level].portal * 0.611), { samples: Math.min(2, Q[perf.level].ms) });
  const rtCam = new THREE.PerspectiveCamera(30, 3.0 / 1.834, 0.05, 300);

  // ======================= layout and scroll =======================
  let W = 1, H = 1, mobile = false, baseDist = 14;
  let centers = [], rects = [], spans = [];
  const nav = document.querySelector('.nav');
  const worldSec = {};
  sections.forEach((el, k) => { const sc = scenes[el.dataset.scene]; if (sc && sc.inside) worldSec[sc.inside] = k; });
  function measure() {
    rects = sections.map((el) => {
      const r = el.getBoundingClientRect();
      return [r.top + window.scrollY, r.height];
    });
    centers = rects.map(([top, h]) => top + h / 2);
    // a tall section (a scrolly story) holds its scene for its whole length, not just at its centre
    spans = rects.map(([top, h]) => (h > H * 1.6 ? [top + H * 0.5, top + h - H * 0.5] : [top + h / 2, top + h / 2]));
  }
  // On a phone the hero's words fill the top of the screen: the computer and its stickers sit in the space below.
  const heroSec = document.getElementById('top'), heroCopy = document.querySelector('.hero-copy');
  const TOP0 = scenes.top ? { may: scenes.top.may, mzoom: scenes.top.mzoom } : null;
  let textLine = 0.66;
  function fitHero() {
    if (!TOP0 || !heroSec || !heroCopy) return;
    if (!mobile) { scenes.top.may = TOP0.may; scenes.top.mzoom = TOP0.mzoom; return; }
    // the words end where its last visible line ends (the box itself keeps empty room below for the 3D)
    let bottom = 0;
    for (const el of heroCopy.children) { const r = el.getBoundingClientRect(); if (r.height > 0) bottom = Math.max(bottom, r.bottom); }
    textLine = clamp01((bottom - heroSec.getBoundingClientRect().top) / H);
    const free = Math.max(0.14, 1 - textLine);
    scenes.top.may = Math.min(0.92, Math.max(TOP0.may, textLine + free * 0.55));
    scenes.top.mzoom = Math.min(2.8, Math.max(TOP0.mzoom, 4.2 / (0.536 * baseDist * free * 0.9)));
  }
  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    mobile = W < 820 || W / H < 0.9;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, Q[perf.level].pr));
    renderer.setSize(W, H, false);
    renderer.getDrawingBufferSize(dbs);
    mainRT.setSize(dbs.x, dbs.y);
    mainRT2.setSize(dbs.x, dbs.y);
    postU.uRes.value.set(W, H);
    camera.aspect = W / H;
    const tan = Math.tan((camera.fov * Math.PI) / 360) * 2;
    const fw = mobile ? 0.86 : 0.37, fh = mobile ? 0.36 : 0.62;
    baseDist = Math.max(4.6 / (fw * tan * camera.aspect), 4.6 / (fh * tan));
    camera.updateProjectionMatrix();
    tunnelShow = -1;
    measure();
    fitHero();
  }

  const cur = { ax: 0.7, ay: 0.5, az: -0.4, el: 0.1, zoom: 1, dive: 0, crowd: 0, lit: 0, px: 0, py: 0 };
  let pointerX = 0, pointerY = 0;
  let lastActive = performance.now(), skipFrame = false;
  const wake = () => { lastActive = performance.now(); };
  const WAKE_EVENTS = ['scroll', 'pointermove', 'pointerdown', 'keydown', 'wheel', 'touchstart', 'resize'];
  for (const ev of WAKE_EVENTS) window.addEventListener(ev, wake, { passive: true });
  const onPointer = (e) => { pointerX = (e.clientX / W) * 2 - 1; pointerY = (e.clientY / H) * 2 - 1; };
  if (!reduce && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', onPointer, { passive: true });
  }

  const tgBg = new THREE.Color(), bgC = new THREE.Color(scenes[sections[0]?.dataset.scene]?.bg || PAL.yellow), innerC = new THREE.Color();
  const _tg = {}; // reused every frame; target() is consumed synchronously so one object is safe
  function target() {
    const y = window.scrollY + H * 0.5;
    let i = 0;
    while (i < spans.length - 1 && spans[i + 1][0] <= y) i++;
    let t = 0;
    if (i < spans.length - 1 && y > spans[i][1]) t = (y - spans[i][1]) / (spans[i + 1][0] - spans[i][1]);
    const a = scenes[sections[i].dataset.scene];
    const b = scenes[sections[Math.min(i + 1, sections.length - 1)].dataset.scene];
    const e = smooth(0.2, 0.8, t);
    const pick = (o, k) => (mobile && o['m' + k] !== undefined ? o['m' + k] : o[k]);
    tgBg.copy(a._bg).lerp(b._bg, e);
    if (a.inside && b.inside) innerC.copy(a._bg).lerp(b._bg, e);
    else innerC.copy(a.inside ? a._bg : b.inside ? b._bg : tgBg);
    _tg.a = a; _tg.b = b; _tg.e = e;
    _tg.ax = lerp(pick(a, 'ax'), pick(b, 'ax'), e);
    _tg.ay = lerp(pick(a, 'ay'), pick(b, 'ay'), e);
    _tg.az = lerp(a.az, b.az, e);
    _tg.el = lerp(a.el, b.el, e);
    _tg.zoom = lerp(pick(a, 'zoom'), pick(b, 'zoom'), e);
    _tg.dive = lerp(a.inside ? 1 : 0, b.inside ? 1 : 0, e);
    _tg.crowd = lerp(a.crowd || 0, b.crowd || 0, e);
    _tg.lit = lerp(a.lit || 0, b.lit || 0, e);
    _tg.mix = smooth(0.35, 0.65, t);
    _tg.idx = i;
    return _tg;
  }

  const place = (cam, look, az, el, dist) => {
    cam.position.set(look.x + dist * Math.sin(az) * Math.cos(el), look.y + dist * Math.sin(el), look.z + dist * Math.cos(az) * Math.cos(el));
    cam.lookAt(look);
  };
  const LOOK_OUT = new THREE.Vector3(0, -0.35, 0.3), LOOK_IN = new THREE.Vector3(0, 0, 0);
  const look = new THREE.Vector3(), screenPos = new THREE.Vector3(), probe = new THREE.Vector3();

  let lastDominant = null, lastHex = '', lastFlash = -1, lastFlashHex = '', portalOn = false;
  let lastSY = window.scrollY, vel = 0, spin = 0, party = 0, partyOn = false, partyT = 0, introT = reduce ? 99 : 0, prevDv = 0, lastBurst = -1, lastInside = false;
  let chaos = 0, chaosOn = false, glitchT = 0, flipT = 1, ripIdx = 0, orbitA = 0, beatPulse = 0;
  let kaleido = 0, kaleidoOn = false, vhs = 0, vhsOn = 0, holeX = 0.5, holeY = 0.5, holeS = 0, holeOn = 0, warpT = -1, warpPeak = null, lastRipple = -99;
  const osBox = new THREE.Box3(), osV = new THREE.Vector3();
  const lastLook = new THREE.Vector3(), ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), plane = new THREE.Plane(), hitV = new THREE.Vector3(), dirV = new THREE.Vector3();
  let time = 0, lastT = performance.now();
  function frame(now = performance.now()) {
    if (paused) { lastT = now; raf = requestAnimationFrame(frame); return; }
    // nobody scrolling, pointing or typing for a while and nothing in flight: draw every other frame (30 fps),
    // which halves the work while the presenter talks; any input brings 60 fps back at once
    const calm = now - lastActive > 2500 && (reduce || (party < 0.01 && chaos < 0.01 && flipT >= 1 && warpT < 0 && holeS < 0.002 && glitchT <= 0 && time - lastRipple > 1.5 && Math.abs(cur.dive - Math.round(cur.dive)) < 0.002));
    if (calm && (skipFrame = !skipFrame)) { raf = requestAnimationFrame(frame); return; }
    const dtReal = (now - lastT) / 1000;
    const dt = Math.min(dtReal, 0.05);
    lastT = now;
    if (!calm) perfTick(dtReal);
    time += dt;
    const tg = target();
    const k = reduce ? 1 : 1 - Math.exp(-dt * 4.5);
    for (const key of ['ax', 'ay', 'az', 'el', 'zoom', 'dive', 'crowd', 'lit']) cur[key] = lerp(cur[key], tg[key], k);
    cur.px = lerp(cur.px, pointerX, 1 - Math.exp(-dt * 3));
    cur.py = lerp(cur.py, pointerY, 1 - Math.exp(-dt * 3));
    const dv = cur.dive;
    const insideNow = dv >= 0.5;
    const sy = window.scrollY;
    vel = lerp(vel, (sy - lastSY) / Math.max(dt, 0.001), 1 - Math.exp(-dt * 8));
    lastSY = sy;
    introT += dt;
    party = lerp(party, partyOn ? 1 : 0, 1 - Math.exp(-dt * 3));
    chaos = lerp(chaos, chaosOn ? 1 : 0, 1 - Math.exp(-dt * 3));
    if (!reduce) spin += dt * (0.025 + party * 0.6 + chaos * 1.2) + vel * 0.0006 * dt;
    const bp = sfx.beat();
    beatPulse = reduce ? 0 : Math.max(party, chaos) * Math.pow(1 - (bp >= 0 ? bp : (time * 2) % 1), 4);
    glitchT = Math.max(0, glitchT - dt);
    if (!reduce && chaos > 0.5 && Math.random() < dt * 1.2) glitchT = 0.25;
    if (!reduce && (prevDv - 0.5) * (dv - 0.5) < 0) sfx.whoosh();
    prevDv = dv;
    if (party > 0.5 && !reduce) { partyT += dt; if (partyT > 0.9) { partyT = 0; (insideNow ? inConf : outConf).burst(); } }
    if (burstEl) {
      const bs = reduce ? 0 : Math.round((dv < 0.5 ? smooth(0.26, 0.5, dv) : 1 - smooth(0.5, 0.62, dv)) * 200) / 200;
      if (bs !== lastBurst || bs > 0) {
        lastBurst = bs;
        burstEl.style.opacity = bs > 0 ? '1' : '0';
        burstEl.style.transform = `translate(-50%,-50%) scale(${(bs * 1.35).toFixed(3)}) rotate(${(dv * 540).toFixed(1)}deg)`;
      }
    }

    // page colour, and the flash that hides the jump through the glass
    bgC.lerp(tgBg, k);
    const hex = '#' + bgC.getHexString();
    if (hex !== lastHex) { lastHex = hex; onBg(hex); }
    if (flash) {
      const fo = Math.round((dv < 0.5 ? smooth(0.36, 0.5, dv) : 1 - smooth(0.5, 0.66, dv)) * 100) / 100;
      if (fo !== lastFlash) { lastFlash = fo; flash.style.opacity = String(fo); }
      const fh = '#' + innerC.getHexString();
      if (fo > 0 && fh !== lastFlashHex) { lastFlashHex = fh; flash.style.backgroundColor = fh; }
    }

    const dominant = tg.e < 0.5 ? tg.a : tg.b;
    if (dominant.confetti && lastDominant !== dominant && !reduce) (dominant.inside ? inConf : outConf).burst();
    if (lastDominant && lastDominant !== dominant && !reduce && chaos > 0.5) glitchT = 0.35;
    lastDominant = dominant;

    // ---------- outside ----------
    if (!insideNow) {
      if (dv > 0.002) {
        if (!portalOn) { portalOn = true; scrA.material.map = rt.texture; scrA.material.needsUpdate = true; }
        scrB.material.opacity = 0;
      } else {
        if (portalOn) { portalOn = false; scrA.material.needsUpdate = true; }
        const prevTex = (flipRT ? mainRT : mainRT2).texture;
        const useDro = drosteOn && party > 0.5 && perf.level < 2;
        scrA.material.map = useDro && DROSTE.has(tg.a.screen || 'hello') ? prevTex : texs[tg.a.screen || 'hello'];
        scrB.material.map = useDro && DROSTE.has(tg.b.screen || 'hello') ? prevTex : texs[tg.b.screen || 'hello'];
        scrB.material.opacity = tg.a.screen === tg.b.screen ? 0 : tg.mix;
      }
      const blow = smooth(0.02, 0.42, dv);
      const drop = reduce ? 0 : 1 - easeOutBounce(clamp01((introT - 0.2) / 1.1));
      Object.keys(stickers).forEach((key, n) => {
        const slap = reduce ? 1 : easeOutBack(clamp01((introT - 1.15 - n * 0.16) / 0.35));
        stickers[key].scale.setScalar(Math.max(slap, 0.0001));
      });
      orbitA += reduce ? 0 : dt * (0.35 + party * 0.5 + chaos * 1.6 + Math.min(1, Math.abs(vel) / 2500) * 1.2);
      Object.keys(stickers).forEach((key, n) => {
        const h = HOME[key], g = stickers[key];
        const bob = reduce ? 0 : Math.sin(time * 1.3 + key.length) * 0.06;
        const a = orbitA + (n * Math.PI) / 2;
        const ox = reduce ? h.p[0] : Math.cos(a) * (mobile ? 1.8 : 2.05), oy = reduce ? h.p[1] : Math.sin(a) * (mobile ? 0.8 : 1.4) + (mobile ? -0.1 : 0.15), oz = reduce ? h.p[2] : 0.95 + Math.sin(a * 2) * 0.3;
        g.position.set(ox * (1 + blow * 2.2), (oy + bob) * (1 + blow * 1.6), oz + blow * 2);
        g.rotation.set(0, reduce ? 0 : Math.sin(time * 0.8 + key.length) * 0.12, h.r + blow * h.r * 4 + (reduce ? 0 : Math.sin(a) * 0.15));
      });
      if (flipT < 1) flipT = Math.min(1, flipT + dt / 0.9);
      const fp = easeInOutCubic(flipT);
      pc.rotation.x = flipT < 1 ? -fp * Math.PI * 2 : 0;
      pc.rotation.z = reduce ? 0 : Math.sin(time * 3) * 0.15 * chaos;
      pc.position.y = (reduce ? 0 : Math.sin(time * 1.1) * 0.04 * (1 - blow)) + drop * 7 + Math.sin(fp * Math.PI) * 1.8;
      shadow.scale.set(3.1 * (1 - drop * 0.7), 1.6 * (1 - drop * 0.7), 1);

      // the other 99 PCs pop up in a ripple, then light up orange one after another
      const cv = cur.crowd;
      const show = cv > 0.01;
      crowdBody.visible = crowdLine.visible = crowdScr.visible = show;
      installT = cur.lit > 0.5 ? installT + dt : Math.max(0, installT - dt * 3);
      if (show) {
        crowd.forEach((c, i) => {
          const pop = reduce ? (cv > 0.5 ? 1 : 0) : easeOutBack(smooth(c.d * 0.045, c.d * 0.045 + 0.35, cv));
          const th = reduce ? 0 : 0.3 + c.d * 0.2;
          const since = installT - th;
          const lit = cur.lit > 0.5 && since > 0;
          const bump = lit && since < 0.3 ? 1 + Math.sin((since / 0.3) * Math.PI) * 0.18 : 1;
          const hop = reduce ? 0 : Math.max(0, Math.sin(time * 5 - c.d * 0.7)) * (lit ? 0.3 + chaos * 0.5 : chaos * 0.4);
          dummy.position.set(c.x, -1.93 + hop, c.z);
          dummy.rotation.set(0, c.ry + (reduce ? 0 : chaos * Math.sin(time * 4 + c.d) * 0.6), 0);
          dummy.scale.setScalar(Math.max(pop * bump, 0.0001));
          dummy.updateMatrix();
          crowdBody.setMatrixAt(i, dummy.matrix);
          crowdLine.setMatrixAt(i, dummy.matrix);
          crowdScr.setMatrixAt(i, dummy.matrix);
          const NW = waveCols.length;
          crowdScr.setColorAt(i, !lit ? darkC : since < 0.15 && !reduce ? flashC : since > 0.8 && !reduce ? waveCols[((Math.floor(time * 3 - c.d * 0.5) % NW) + NW) % NW] : litC);
        });
        crowdBody.instanceMatrix.needsUpdate = crowdLine.instanceMatrix.needsUpdate = crowdScr.instanceMatrix.needsUpdate = true;
        crowdScr.instanceColor.needsUpdate = true;
      }
      // keep the shapes out from behind the hero text (left half on a computer, top half on a phone)
      const heroW = (tg.a === scenes.top ? 1 - tg.e : 0) + (tg.b === scenes.top ? tg.e : 0);
      const inTextZone = (p) => {
        probe.copy(p).project(camera);
        const sx = (probe.x + 1) / 2, sy = (1 - probe.y) / 2;
        return mobile ? sy < textLine : sx < 0.58;
      };
      const rainShow = reduce ? 0 : clamp01(heroW + party + chaos) * (1 - blow);
      rainBody.visible = rainLine.visible = rainScr.visible = rainShow > 0.01;
      if (rainShow > 0.01) {
        rain.forEach((r, i) => {
          r.y -= dt * r.sp * (1 + chaos * 1.5);
          if (r.y < -6.5) r.y += 13;
          r.r += dt * (1 + chaos * 2);
          dummy.position.set(r.x, r.y, r.z);
          r.k = lerp(r.k, heroW > 0.01 && party + chaos < 0.5 && inTextZone(dummy.position) ? 1 - heroW : 1, 0.12);
          dummy.rotation.set(r.r, r.r * 0.7, r.r * 0.3);
          dummy.scale.setScalar(Math.max(r.s * rainShow * r.k, 0.0001));
          dummy.updateMatrix();
          rainBody.setMatrixAt(i, dummy.matrix);
          rainLine.setMatrixAt(i, dummy.matrix);
          rainScr.setMatrixAt(i, dummy.matrix);
        });
        rainBody.instanceMatrix.needsUpdate = rainLine.instanceMatrix.needsUpdate = rainScr.instanceMatrix.needsUpdate = true;
      }
      outFloat.update(reduce ? 0 : time, (1 - blow) * (reduce ? 1 : smooth(1.0, 2.2, introT)), heroW < 0.01 ? null : (p) => {
        probe.copy(p).project(camera);
        const sx = (probe.x + 1) / 2, sy = (1 - probe.y) / 2;
        const inText = mobile ? sy < textLine : sx < 0.58;
        return inText ? 1 - heroW : 1;
      });
      outConf.update(dt);
    }
    outBurst.update(dt);
    inBurst.update(dt);

    // ---------- inside ----------
    const wa = tg.a.inside || tg.b.inside, wb = tg.b.inside || tg.a.inside;
    for (const [name, w] of Object.entries(worlds)) {
      let tw = 0;
      if (wa && wa === wb) tw = wa === name ? 1 : 0;
      else tw = (wa === name ? 1 - smooth(0.05, 0.5, tg.e) : 0) + (wb === name ? smooth(0.5, 0.95, tg.e) : 0);
      const was = w.p;
      if ((wa || wb) && name !== wa && name !== wb) { w.p = 0; w.group.visible = false; continue; }
      w.p = reduce ? tw : lerp(w.p, tw, 1 - Math.exp(-dt * 6));
      if (was < 0.02 && w.p >= 0.02) { w.t0 = time; w.onEnter?.(); }
      w.group.visible = w.p > 0.003 && dv > 0.002;
      if (w.group.visible) {
        w.group.scale.setScalar(Math.max(easeOutBack(clamp01(w.p)), 0.0001));
        w.group.position.y = (1 - w.p) * -0.9;
        w.group.rotation.y = (1 - w.p) * 0.8;
        const k = worldSec[name];
        let raw = k === undefined || !rects[k] ? 0.5 : clamp01((window.scrollY + H * 0.5 - rects[k][0]) / rects[k][1]);
        if (name === 'install' && rects[k]) {
          // Play all five animation phases over the two cards' visible travel, matching the tour.
          const start = rects[k][0] - (nav?.offsetHeight || 0);
          const travel = Math.max(1, rects[k][1] - H * 1.2);
          raw = clamp01((window.scrollY - start) / travel);
        }
        w.sp = w.sp === undefined ? raw : lerp(w.sp, raw, 1 - Math.exp(-dt * 10));
        w.update(time - w.t0, dt, reduce, w.sp);
      }
    }
    if (dv > 0.002) {
      const ts = dv < 0.5 ? 1 : 1 - smooth(0.72, 0.92, dv);
      const q = Math.round(ts * 50) / 50;
      if (q !== tunnelShow) { tunnelShow = q; layTunnel(q); }
      tunnelG.visible = q > 0.01;
      tunnelG.rotation.z = reduce ? 0 : time * 0.25;
      inFloat.update(reduce ? 0 : time, smooth(0.5, 0.9, dv));
      inConf.update(dt);
    }

    // ---------- camera ----------
    // c pulls everything to the centre of the screen around the moment of the jump
    const c = dv <= 0.5 ? smooth(0, 0.3, dv) : 1 - smooth(0.62, 1, dv);
    const az = lerp(cur.az, 0, c), el = lerp(cur.el, 0, c);
    const ax = lerp(cur.ax, 0.5, c), ay = lerp(cur.ay, 0.5, c);
    const D = baseDist * cur.zoom;
    const kick = reduce ? 0 : Math.sin(Math.PI * clamp01(dv));
    camera.fov = 30 + 46 * kick * kick;
    let roll = reduce ? 0 : Math.PI * 2 * smooth(0.12, 0.88, dv);
    if (!reduce && tg.a.inside && tg.b.inside && tg.a !== tg.b) roll += Math.sin(Math.PI * tg.e) * 0.2 * (tg.idx % 2 ? -1 : 1);
    if (!reduce) roll += party * Math.sin(time * 3.1) * 0.14 + chaos * (time * 0.45 + Math.sin(time * 2.3) * 0.2);
    const sq = reduce ? 0 : Math.min(1, Math.abs(vel) / 2500);
    const beat = 1 + beatPulse * 0.09;
    rig.scale.set((1 - sq * 0.07) * beat, (1 + sq * 0.14) * beat, (1 - sq * 0.07) * beat);
    inRig.scale.copy(rig.scale);
    rig.rotation.y = cur.px * 0.14 * (1 - smooth(0, 0.25, dv));
    rig.rotation.x = cur.py * 0.05 * (1 - smooth(0, 0.25, dv));
    inRig.rotation.y = cur.px * 0.12 * smooth(0.75, 1, dv);
    inRig.rotation.x = cur.py * 0.05 * smooth(0.75, 1, dv);
    inRig.rotation.z = reduce ? 0 : Math.sin(time * 1.7) * 0.25 * chaos;
    if (!insideNow) {
      rig.updateMatrixWorld();
      screenPos.set(0, pc.position.y, 0.14);
      rig.localToWorld(screenPos);
      look.copy(LOOK_OUT).lerp(screenPos, smooth(0, 0.3, dv));
      const f = smooth(0.03, 0.5, dv);
      place(camera, look, az, el, lerp(D, 0.25, f * f));
      lastLook.copy(look);
    } else {
      place(camera, LOOK_IN, az, el, D * lerp(ENTRY, 1, easeOutCubic(smooth(0.5, 1, dv))));
      lastLook.copy(LOOK_IN);
    }
    camera.rotateZ(roll);
    lastInside = insideNow;
    camera.setViewOffset(W, H, (0.5 - ax) * W, (0.5 - ay) * H, W, H);

    bgU.uRes.value.set(W, H);
    bgU.uCenter.value.set(ax, 1 - ay);
    setSrgb(bgU.uColA.value, tg.a.bg);
    setSrgb(bgU.uColB.value, tg.b.bg);
    bgU.uWipe.value = tg.a === tg.b ? 0 : tg.e;
    bgU.uSpin.value = spin;
    bgU.uParty.value = party;
    bgU.uTime.value = reduce ? 0 : time;
    bgU.uBeat.value = beatPulse;
    bgU.uChaos.value = reduce ? 0 : chaos;
    const speed = Math.min(1, Math.abs(vel) / 2500);
    postU.uTime.value = time;
    const wild = Math.max(party, chaos);
    postU.uAberr.value = reduce ? 0 : kick * 0.016 + wild * (0.0015 + speed * 0.012) + beatPulse * 0.006 + chaos * 0.008;
    postU.uBarrel.value = reduce ? 0 : kick * 0.95 + chaos * (0.22 + Math.sin(time * 2.1) * 0.12);
    postU.uGlitch.value = reduce ? 0 : Math.min(1, glitchT / 0.3) * 0.9 + kick * 0.25 * wild;
    postU.uGrain.value = reduce ? 0 : 0.035 * wild;
    postU.uScan.value = reduce ? 0 : (0.08 + chaos * 0.14) * wild;
    kaleido = lerp(kaleido, kaleidoOn ? 1 : 0, 1 - Math.exp(-dt * 2.5));
    vhs = lerp(vhs, vhsOn, 1 - Math.exp(-dt * 10));
    holeS = lerp(holeS, holeOn, 1 - Math.exp(-dt * (holeOn ? 2.2 : 7)));
    postU.uKaleido.value = reduce ? 0 : kaleido;
    postU.uVhs.value = reduce ? 0 : vhs;
    postU.uHole.value.set(holeX, holeY, reduce ? 0 : holeS);
    if (vhs > 0.05) { postU.uGlitch.value = Math.max(postU.uGlitch.value, vhs * 0.7); postU.uAberr.value += vhs * 0.01; }
    if (warpT >= 0) {
      warpT += dt;
      const UP = 0.8, DOWN = 0.9;
      if (warpT >= UP && warpPeak) { const cb = warpPeak; warpPeak = null; cb(); introT = 0; }
      postU.uWarp.value = warpT < UP ? Math.pow(warpT / UP, 2) : 1 - smooth(0, 1, (warpT - UP) / DOWN);
      if (warpT > UP + DOWN) { warpT = -1; postU.uWarp.value = 0; }
    }

    renderer.autoClear = false;
    if (!insideNow && dv > 0.002) {
      place(rtCam, LOOK_IN, 0, 0, D * ENTRY);
      renderer.setRenderTarget(rt);
      renderer.setClearColor(innerC, 1);
      renderer.clear();
      renderer.render(inner, rtCam);
      renderer.setRenderTarget(null);
      renderer.setClearColor(0x000000, 0);
    }
    const droNow = drosteOn && party > 0.5 && perf.level < 2 && !insideNow;
    const needPost = !reduce && (kick > 0.01 || party > 0.01 || chaos > 0.01 || glitchT > 0 || kaleido > 0.002 || vhs > 0.002 || holeS > 0.002 || warpT >= 0 || time - lastRipple < 1.5);
    bgU.uLin.value = needPost ? 1 : 0;
    if (needPost) {
      const drawRT = flipRT ? mainRT2 : mainRT;
      postU.tDiffuse.value = drawRT.texture;
      renderer.setRenderTarget(drawRT);
      renderer.clear();
      renderer.render(bgScene, bgCam);
      renderer.clearDepth();
      renderer.render(insideNow ? inner : scene, camera);
      renderer.setRenderTarget(null);
      if (droNow) flipRT = !flipRT;
      renderer.clear();
      renderer.render(postScene, bgCam);
    } else {
      renderer.setRenderTarget(null);
      renderer.clear();
      renderer.render(bgScene, bgCam);
      renderer.clearDepth();
      renderer.render(insideNow ? inner : scene, camera);
    }
    raf = requestAnimationFrame(frame);
  }

  let raf = 0, paused = false;
  resize();
  window.addEventListener('resize', resize);

  // a slower computer gets fewer pixels and samples
  const offPerf = perf.on(() => {
    const q = Q[perf.level];
    if (mainRT.samples !== q.ms) { mainRT.dispose(); mainRT.samples = q.ms; mainRT2.dispose(); mainRT2.samples = q.ms; }
    const ps = Math.min(2, q.ms);
    if (rt.samples !== ps) { rt.dispose(); rt.samples = ps; }
    rt.setSize(q.portal, Math.round(q.portal * 0.611));
    resize();
  });

  // Build every shader and upload every texture now, while the page loads, instead of the first time
  // each world appears: on Windows the graphics driver compiles shaders slowly, and that shows as a hitch mid-scroll.
  (function prewarm() {
    const shown = [];
    for (const root of [scene, inner]) root.traverse((o) => { if (!o.visible) { o.visible = true; shown.push(o); } });
    const prev = renderer.getRenderTarget();
    for (const target of [null, mainRT]) {
      renderer.setRenderTarget(target);
      try {
        if (renderer.compileAsync && renderer.extensions.has('KHR_parallel_shader_compile')) {
          renderer.compileAsync(scene, camera).catch(() => {});
          renderer.compileAsync(inner, camera).catch(() => {});
        } else {
          renderer.compile(scene, camera);
          renderer.compile(inner, camera);
        }
      } catch (e) { /* drawing still compiles on demand */ }
    }
    renderer.setRenderTarget(prev);
    for (const o of shown) o.visible = false;
    const seen = new Set();
    for (const root of [scene, inner]) root.traverse((o) => {
      const mats = !o.material ? [] : Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) for (const key of ['map', 'gradientMap', 'alphaMap']) {
        const t = m[key];
        if (t && t.isTexture && !seen.has(t)) { seen.add(t); try { renderer.initTexture(t); } catch (e) { /* uploaded on first use */ } }
      }
    });
  })();
  window.addEventListener('load', measure);
  const ro = new ResizeObserver(measure);
  ro.observe(document.body);
  raf = requestAnimationFrame(frame);

  return {
    redrawText() {
      fitHero();
      for (const l of labels) l.userData.redraw?.();
      drawScreen('hello', texs.hello.image);
      texs.hello.needsUpdate = true;
    },
    setScores(weights, rows) { worlds.scores.setScores(weights, rows); },
    // cubes burst out of the clicked spot; with wave, the picture also ripples (party mode)
    burstAt(x, y, wave = false) {
      ndc.set((x / W) * 2 - 1, -(y / H) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      if (wave && !reduce) {
        postU.uRipples.value[ripIdx].set(x / W, 1 - y / H, time, 1);
        ripIdx = (ripIdx + 1) % 6;
        lastRipple = time;
      }
      if (!lastInside && flipT >= 1 && ray.intersectObject(pc, true).length) flipT = 0;
      camera.getWorldDirection(dirV);
      plane.setFromNormalAndCoplanarPoint(dirV.negate(), lastLook);
      if (ray.ray.intersectPlane(plane, hitV)) (lastInside ? inBurst : outBurst).burst(hitV);
    },
    setParty(on) { partyOn = !!on; },
    setChaos(on) { chaosOn = !!on; },
    // which desktop (if any) is under the pointer
    pickOs(x, y) {
      if (!lastInside) return null;
      ndc.set((x / W) * 2 - 1, -(y / H) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      for (const [name, w] of Object.entries(worlds)) {
        if (!w.pick || w.p < 0.5 || !w.group.visible) continue;
        if (ray.intersectObjects(w.pick, false).length) return name;
      }
      return null;
    },
    hoverOs(name) { for (const [n, w] of Object.entries(worlds)) if (w.pick) w.hover = n === name; },
    // where a desktop's screen sits on the page, for the zoom into the full-screen viewer
    osScreenRect(name) {
      const w = worlds[name];
      if (!w || !w.screen || !lastInside || w.p < 0.5 || !w.group.visible) return null;
      osBox.setFromObject(w.screen);
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (let i = 0; i < 8; i++) {
        osV.set(i & 1 ? osBox.max.x : osBox.min.x, i & 2 ? osBox.max.y : osBox.min.y, i & 4 ? osBox.max.z : osBox.min.z).project(camera);
        const px = ((osV.x + 1) / 2) * W, py = ((1 - osV.y) / 2) * H;
        x0 = Math.min(x0, px); x1 = Math.max(x1, px); y0 = Math.min(y0, py); y1 = Math.max(y1, py);
      }
      return { left: x0, top: y0, width: x1 - x0, height: y1 - y0 };
    },
    measure,
    setPaused(on) { paused = !!on; },
    setKaleido(on) { kaleidoOn = !!on; },
    setVhs(v) { vhsOn = v; },
    setHole(x, y, s) { holeX = x / W; holeY = 1 - y / H; holeOn = s; },
    setDroste(on) { drosteOn = !!on; },
    // the stickers on the computer slap on again (used when the presentation starts after the opening world)
    replayStickers() { if (!reduce) introT = 1.1; },
    // spin into a tunnel; at the deepest point the page jumps (cb) and the computer drops in again
    warp(cb) { if (warpT >= 0 || reduce) { if (reduce) cb(); return; } warpT = 0; warpPeak = cb; sfx.whoosh(); glitchT = 0.4; },
    stop() {
      cancelAnimationFrame(raf);
      for (const ev of WAKE_EVENTS) window.removeEventListener(ev, wake);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('load', measure);
      ro.disconnect();
      offPerf();
      mainRT.dispose(); mainRT2.dispose(); rt.dispose();
    },
  };
}
