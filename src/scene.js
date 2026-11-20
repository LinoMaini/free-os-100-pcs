// The 3D stage: a toon-shaded desktop computer covered in stickers, driven by scroll.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { COLORS, SCREEN_NAMES, drawScreen, drawLabel, drawRound } from './screens.js';

const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

function outlineMat(t) {
  return new THREE.ShaderMaterial({
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
}

export function createStage(canvas, scenes, sections, opts = {}) {
  const reduce = !!opts.reduceMotion;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 200);
  scene.add(new THREE.AmbientLight(0xffffff, 1.1));
  const sun = new THREE.DirectionalLight(0xffffff, 1.9);
  sun.position.set(4, 6, 5);
  scene.add(sun);

  const grad = new THREE.DataTexture(new Uint8Array([110, 190, 255]), 3, 1, THREE.RedFormat);
  grad.minFilter = grad.magFilter = THREE.NearestFilter;
  grad.needsUpdate = true;
  const toon = (hex) => new THREE.MeshToonMaterial({ color: hex, gradientMap: grad });
  const OUT = outlineMat(0.035);

  const part = (geo, mat, t) => {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(geo, mat));
    g.add(new THREE.Mesh(geo, t ? outlineMat(t) : OUT));
    return g;
  };

  const rig = new THREE.Group();
  scene.add(rig);

  // ---------- computer ----------
  const pc = new THREE.Group();
  rig.add(pc);
  const white = toon(COLORS.paper);
  pc.add(part(new RoundedBoxGeometry(3.4, 2.2, 0.26, 4, 0.12), white));
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

  const neck = part(new RoundedBoxGeometry(0.42, 0.74, 0.22, 3, 0.06), white);
  neck.position.set(0, -1.42, -0.02);
  const base = part(new RoundedBoxGeometry(1.6, 0.14, 0.9, 3, 0.06), white);
  base.position.set(0, -1.85, 0);
  const kb = part(new RoundedBoxGeometry(2.7, 0.14, 0.9, 3, 0.06), white);
  kb.position.set(0, -1.85, 1.25);
  const mouse = part(new RoundedBoxGeometry(0.36, 0.14, 0.56, 3, 0.07), white);
  mouse.position.set(1.85, -1.85, 1.3);
  pc.add(neck, base, kb, mouse);

  const keys = new THREE.InstancedMesh(new THREE.BoxGeometry(0.15, 0.06, 0.15), toon(COLORS.grey), 56);
  const dummy = new THREE.Object3D();
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

  // ---------- stickers ----------
  const stickers = {};
  const labelSticker = (key, text, fill, color) => {
    const g = new THREE.Group();
    const w = 1.9, h = 0.62;
    const geo = new RoundedBoxGeometry(w, h, 0.07, 2, 0.04);
    g.add(new THREE.Mesh(geo, toon(fill)));
    g.add(new THREE.Mesh(geo, outlineMat(0.022)));
    const tex = new THREE.CanvasTexture(drawLabel(text, fill, color));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const face = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }));
    face.position.z = 0.036;
    g.add(face);
    g.userData.redraw = () => { drawLabel(text, fill, color, tex.image); tex.needsUpdate = true; };
    stickers[key] = g;
    rig.add(g);
  };
  labelSticker('mint', 'Linux Mint', COLORS.mint, COLORS.ink);
  labelSticker('zorin', 'Zorin OS Lite', COLORS.zorin, COLORS.ink);
  labelSticker('endless', 'Endless OS', COLORS.endless, COLORS.ink);
  {
    const g = new THREE.Group();
    const geo = new THREE.CylinderGeometry(0.42, 0.42, 0.07, 48);
    geo.rotateX(Math.PI / 2);
    g.add(new THREE.Mesh(geo, toon(COLORS.paper)));
    g.add(new THREE.Mesh(geo, outlineMat(0.022)));
    const tex = new THREE.CanvasTexture(drawRound('?', COLORS.paper, COLORS.ink));
    tex.colorSpace = THREE.SRGBColorSpace;
    const face = new THREE.Mesh(new THREE.CircleGeometry(0.42, 48), new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }));
    face.position.z = 0.036;
    g.add(face);
    g.userData.redraw = () => { drawRound('?', COLORS.paper, COLORS.ink, tex.image); tex.needsUpdate = true; };
    stickers.q = g;
    rig.add(g);
  }

  // Resting spots around the computer, and the spot where the sticker of the system under discussion lands.
  const HOME = {
    mint: { p: [-1.75, 1.22, 0.5], r: 0.18, s: 1 },
    zorin: { p: [1.72, 0.95, 0.7], r: -0.14, s: 1 },
    endless: { p: [-1.68, -0.5, 1.0], r: 0.1, s: 1 },
    q: { p: [1.78, -0.42, 1.1], r: -0.2, s: 1 },
  };
  const LAND = { p: [0.85, -0.78, 0.42], r: -0.08, s: 1.05 };
  const PICK = { p: [0.0, 0.05, 0.75], r: -0.05, s: 1.6 };
  const stickerTarget = (key, focus) => {
    if (focus === 'pick') return key === 'endless' ? PICK : { ...HOME[key], s: key === 'q' ? 0.001 : 0.75 };
    if (focus === key) return LAND;
    if (focus && key === 'q') return { ...HOME.q, s: 0.001 };
    if (focus) return { ...HOME[key], s: 0.85 };
    return HOME[key];
  };
  const sState = {};
  for (const k of Object.keys(stickers)) {
    const h = HOME[k];
    sState[k] = { p: new THREE.Vector3(...h.p), r: h.r, s: h.s };
  }

  // ---------- funnel: about 100 systems in, 3 out ----------
  const funnel = new THREE.Group();
  rig.add(funnel);
  const N = 100;
  const cubeGeo = new RoundedBoxGeometry(0.2, 0.2, 0.2, 2, 0.04);
  const cubes = new THREE.InstancedMesh(cubeGeo, toon(COLORS.paper), N);
  const cubeLines = new THREE.InstancedMesh(cubeGeo, outlineMat(0.02), N);
  funnel.add(cubeLines, cubes);
  const gatesY = [1.5, 0.7, -0.1, -0.9];
  const gatesR = [1.55, 1.25, 0.98, 0.74];
  gatesY.forEach((y, i) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(gatesR[i], 0.06, 10, 64), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = y;
    funnel.add(ring);
  });
  const fate = new Array(N);
  const order = [...Array(N).keys()].sort((a, b) => ((a * 37) % 101) - ((b * 37) % 101));
  order.forEach((idx, k) => { fate[idx] = k < 3 ? 4 : k < 8 ? 3 : k < 20 ? 2 : k < 45 ? 1 : 0; });
  const survivors = order.slice(0, 3);
  const survivorColor = [COLORS.mint, COLORS.zorin, COLORS.endless].map((c) => new THREE.Color(c));
  const whiteC = new THREE.Color(COLORS.paper);
  const start = [...Array(N).keys()].map((i) => ({
    x: ((i % 10) - 4.5) * 0.27,
    z: (Math.floor(i / 10) - 4.5) * 0.27,
    y: 2.4 + ((i * 53) % 17) / 17 * 0.8,
  }));
  for (let i = 0; i < N; i++) cubes.setColorAt(i, whiteC);
  const LOOP = 6.5;
  const radiusAt = (y) => (y >= gatesY[0] ? gatesR[0] : y <= gatesY[3] ? gatesR[3] : lerp(gatesR[3], gatesR[0], (y - gatesY[3]) / (gatesY[0] - gatesY[3])));
  function updateFunnel(time) {
    const t = time % LOOP;
    for (let i = 0; i < N; i++) {
      const s0 = start[i];
      const f = fate[i];
      const y = s0.y - Math.max(0, t - 0.3) * 1.45;
      const stopY = f < 4 ? gatesY[f] : -1.45;
      let px, py, pz, sc = 1;
      const k = radiusAt(Math.max(y, stopY)) / gatesR[0];
      px = s0.x * k; pz = s0.z * k; py = Math.max(y, stopY);
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
        cubes.setColorAt(i, y < gatesY[3] ? survivorColor[slot] : whiteC);
      }
      if (t > LOOP - 0.5) sc *= (LOOP - t) / 0.5;
      dummy.position.set(px, py, pz);
      dummy.rotation.set(0, (i * 0.7 + t * 0.5) % 6.28, 0);
      dummy.scale.setScalar(Math.max(sc, 0.0001));
      dummy.updateMatrix();
      cubes.setMatrixAt(i, dummy.matrix);
      cubeLines.setMatrixAt(i, dummy.matrix);
    }
    cubes.instanceMatrix.needsUpdate = true;
    cubeLines.instanceMatrix.needsUpdate = true;
    cubes.instanceColor.needsUpdate = true;
  }

  // ---------- confetti for the verdict ----------
  const CN = 90;
  const conf = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.14, 0.09), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, toneMapped: false }), CN);
  const confCols = [COLORS.mint, COLORS.zorin, COLORS.endless, COLORS.paper, '#000000'].map((c) => new THREE.Color(c));
  const cp = [], cv = [], cr = [];
  for (let i = 0; i < CN; i++) { conf.setColorAt(i, confCols[i % 5]); cp.push(new THREE.Vector3()); cv.push(new THREE.Vector3()); cr.push(new THREE.Vector3()); }
  conf.visible = false;
  rig.add(conf);
  let confT = 99;
  const burst = () => {
    if (reduce) return;
    confT = 0;
    conf.visible = true;
    for (let i = 0; i < CN; i++) {
      cp[i].set((Math.random() - 0.5) * 1.2, 0.2, 0.6);
      cv[i].set((Math.random() - 0.5) * 5, 2.5 + Math.random() * 3.5, 0.6 + Math.random() * 2.2);
      cr[i].set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
    }
  };
  function updateConfetti(dt) {
    if (!conf.visible) return;
    confT += dt;
    for (let i = 0; i < CN; i++) {
      cv[i].y -= 7 * dt;
      cp[i].addScaledVector(cv[i], dt);
      cr[i].x += dt * 5; cr[i].y += dt * 4;
      dummy.position.copy(cp[i]);
      dummy.rotation.set(cr[i].x, cr[i].y, cr[i].z);
      dummy.scale.setScalar(confT > 2.4 ? Math.max(0.0001, 1 - (confT - 2.4) / 0.4) : 1);
      dummy.updateMatrix();
      conf.setMatrixAt(i, dummy.matrix);
    }
    conf.instanceMatrix.needsUpdate = true;
    if (confT > 2.8) conf.visible = false;
  }

  // ---------- layout and scroll ----------
  let W = 1, H = 1, mobile = false, baseDist = 14;
  let centers = [];
  function measure() {
    centers = sections.map((el) => {
      const r = el.getBoundingClientRect();
      return r.top + window.scrollY + r.height / 2;
    });
  }
  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    mobile = W < 820 || W / H < 0.9;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    const tan = Math.tan((camera.fov * Math.PI) / 360) * 2;
    const fw = mobile ? 0.86 : 0.37, fh = mobile ? 0.36 : 0.62;
    baseDist = Math.max(4.6 / (fw * tan * camera.aspect), 4.6 / (fh * tan));
    camera.updateProjectionMatrix();
    measure();
  }

  const cur = { ax: 0.7, ay: 0.5, az: -0.4, el: 0.1, zoom: 1, funnel: 0, px: 0, py: 0 };
  let pointerX = 0, pointerY = 0;
  if (!reduce && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', (e) => { pointerX = (e.clientX / W) * 2 - 1; pointerY = (e.clientY / H) * 2 - 1; }, { passive: true });
  }

  let lastDominant = null;
  function target() {
    const y = window.scrollY + H * 0.5;
    let i = 0;
    while (i < centers.length - 1 && centers[i + 1] <= y) i++;
    let t = 0;
    if (i < centers.length - 1 && y > centers[i]) t = (y - centers[i]) / (centers[i + 1] - centers[i]);
    const a = scenes[sections[i].dataset.scene];
    const b = scenes[sections[Math.min(i + 1, sections.length - 1)].dataset.scene];
    const e = smooth(0.2, 0.8, t);
    const pick = (o, k) => (mobile && o['m' + k] !== undefined ? o['m' + k] : o[k]);
    return {
      a, b, e,
      ax: lerp(pick(a, 'ax'), pick(b, 'ax'), e),
      ay: lerp(pick(a, 'ay'), pick(b, 'ay'), e),
      az: lerp(a.az, b.az, e),
      el: lerp(a.el, b.el, e),
      zoom: lerp(pick(a, 'zoom'), pick(b, 'zoom'), e),
      funnel: lerp(a.funnel || 0, b.funnel || 0, e),
      mix: smooth(0.35, 0.65, t),
    };
  }

  let time = 0, lastT = performance.now();
  function frame(now = performance.now()) {
    const dt = Math.min((now - lastT) / 1000, 0.05);
    lastT = now;
    time += dt;
    const tg = target();
    const k = reduce ? 1 : 1 - Math.exp(-dt * 4.5);
    for (const key of ['ax', 'ay', 'az', 'el', 'zoom', 'funnel']) cur[key] = lerp(cur[key], tg[key], k);
    cur.px = lerp(cur.px, pointerX, 1 - Math.exp(-dt * 3));
    cur.py = lerp(cur.py, pointerY, 1 - Math.exp(-dt * 3));

    // screen cross-fade between the two nearest sections
    scrA.material.map = texs[tg.a.screen];
    scrB.material.map = texs[tg.b.screen];
    scrB.material.opacity = tg.a.screen === tg.b.screen ? 0 : tg.mix;

    // stickers
    const dominant = tg.e < 0.5 ? tg.a : tg.b;
    for (const key of Object.keys(stickers)) {
      const ta = stickerTarget(key, tg.a.focus), tb = stickerTarget(key, tg.b.focus);
      const st = sState[key];
      const kk = reduce ? 1 : 1 - Math.exp(-dt * 5);
      st.p.x = lerp(st.p.x, lerp(ta.p[0], tb.p[0], tg.e), kk);
      st.p.y = lerp(st.p.y, lerp(ta.p[1], tb.p[1], tg.e), kk);
      st.p.z = lerp(st.p.z, lerp(ta.p[2], tb.p[2], tg.e), kk);
      st.r = lerp(st.r, lerp(ta.r, tb.r, tg.e), kk);
      st.s = lerp(st.s, lerp(ta.s, tb.s, tg.e), kk);
      const g = stickers[key];
      const bob = reduce ? 0 : Math.sin(time * 1.3 + key.length) * 0.06;
      g.position.set(st.p.x, st.p.y + bob, st.p.z);
      g.rotation.set(0, reduce ? 0 : Math.sin(time * 0.8 + key.length) * 0.12, st.r);
      g.scale.setScalar(Math.max(st.s * (1 - cur.funnel), 0.0001));
      g.visible = g.scale.x > 0.01;
    }
    if (dominant.confetti && lastDominant !== dominant) burst();
    lastDominant = dominant;

    // computer vs funnel
    const pcS = 1 - cur.funnel;
    pc.scale.setScalar(Math.max(pcS, 0.0001));
    pc.visible = pcS > 0.01;
    shadow.visible = pc.visible;
    pc.position.y = reduce ? 0 : Math.sin(time * 1.1) * 0.04;
    funnel.scale.setScalar(Math.max(cur.funnel, 0.0001));
    funnel.visible = cur.funnel > 0.01;
    if (funnel.visible) updateFunnel(reduce ? 4.2 : time);
    updateConfetti(dt);

    // camera on an orbit around the computer, then shifted so the computer sits beside the text
    rig.rotation.y = cur.px * 0.14;
    rig.rotation.x = cur.py * 0.05;
    const d = baseDist * cur.zoom;
    const look = new THREE.Vector3(0, -0.35, 0.3);
    camera.position.set(
      look.x + d * Math.sin(cur.az) * Math.cos(cur.el),
      look.y + d * Math.sin(cur.el),
      look.z + d * Math.cos(cur.az) * Math.cos(cur.el),
    );
    camera.lookAt(look);
    camera.setViewOffset(W, H, (0.5 - cur.ax) * W, (0.5 - cur.ay) * H, W, H);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }

  let raf = 0;
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('load', measure);
  const ro = new ResizeObserver(measure);
  ro.observe(document.body);
  raf = requestAnimationFrame(frame);

  return {
    redrawText() {
      for (const s of Object.values(stickers)) s.userData.redraw?.();
      drawScreen('hello', texs.hello.image);
      texs.hello.needsUpdate = true;
    },
    measure,
    stop() { cancelAnimationFrame(raf); },
  };
}
