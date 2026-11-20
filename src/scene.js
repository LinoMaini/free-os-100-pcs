// The 3D stage. Outside: a toon-shaded desktop computer covered in stickers, with 99 more PCs around it.
// Scrolling flies the camera into its screen; inside, each section has its own small world (see worlds.js).
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { COLORS, SCREEN_NAMES, drawScreen, drawRound } from './screens.js';
import { lerp, smooth, clamp01, easeOutBack, easeOutCubic, PAL, toon, toonNew, part, rbox, outlineMat, labels, makeLabel, makeConfetti, makeFloaters } from './kit.js';
import { buildWorlds } from './worlds.js';

const ENTRY = 2.6; // inside, the camera starts this many times farther away and flies in

export function createStage(canvas, scenes, sections, opts = {}) {
  const reduce = !!opts.reduceMotion;
  const onBg = opts.onBg || (() => {});
  const flash = opts.flash || null;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
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
  const crowdScr = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.88, 0.54).translate(0, 0.66, 0.047), new THREE.MeshBasicMaterial({ toneMapped: false }), crowdN);
  for (const m of [crowdBody, crowdLine, crowdScr]) m.frustumCulled = false;
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

  const outFloat = makeFloaters(scene, { colors: [PAL.pink, PAL.lilac, PAL.sky, COLORS.mint, COLORS.zorin, COLORS.endless, PAL.white], seed: 7 });
  const outConf = makeConfetti(rig, [0, 0.2, 0.6]);

  // ======================= inside =======================
  const inner = new THREE.Scene();
  addLights(inner);
  const inRig = new THREE.Group();
  inner.add(inRig);
  const worlds = buildWorlds();
  for (const w of Object.values(worlds)) { w.p = 0; w.t0 = 0; w.group.visible = false; inRig.add(w.group); }
  const inFloat = makeFloaters(inner, { colors: [PAL.yellow, PAL.white, PAL.pink, PAL.cyan, PAL.lilac, COLORS.mint, COLORS.zorin, COLORS.endless], seed: 3 });
  const inConf = makeConfetti(inRig, [0, 0.6, 0.8]);

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
  const rt = new THREE.WebGLRenderTarget(1024, 626, { samples: 4 });
  const rtCam = new THREE.PerspectiveCamera(30, 3.0 / 1.834, 0.05, 300);

  // ======================= layout and scroll =======================
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
    tunnelShow = -1;
    measure();
  }

  const cur = { ax: 0.7, ay: 0.5, az: -0.4, el: 0.1, zoom: 1, dive: 0, crowd: 0, lit: 0, px: 0, py: 0 };
  let pointerX = 0, pointerY = 0;
  if (!reduce && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', (e) => { pointerX = (e.clientX / W) * 2 - 1; pointerY = (e.clientY / H) * 2 - 1; }, { passive: true });
  }

  const tgBg = new THREE.Color(), bgC = new THREE.Color(PAL.yellow), innerC = new THREE.Color();
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
    tgBg.copy(a._bg).lerp(b._bg, e);
    if (a.inside && b.inside) innerC.copy(a._bg).lerp(b._bg, e);
    else innerC.copy(a.inside ? a._bg : b.inside ? b._bg : tgBg);
    return {
      a, b, e,
      ax: lerp(pick(a, 'ax'), pick(b, 'ax'), e),
      ay: lerp(pick(a, 'ay'), pick(b, 'ay'), e),
      az: lerp(a.az, b.az, e),
      el: lerp(a.el, b.el, e),
      zoom: lerp(pick(a, 'zoom'), pick(b, 'zoom'), e),
      dive: lerp(a.inside ? 1 : 0, b.inside ? 1 : 0, e),
      crowd: lerp(a.crowd || 0, b.crowd || 0, e),
      lit: lerp(a.lit || 0, b.lit || 0, e),
      mix: smooth(0.35, 0.65, t),
    };
  }

  const place = (cam, look, az, el, dist) => {
    cam.position.set(look.x + dist * Math.sin(az) * Math.cos(el), look.y + dist * Math.sin(el), look.z + dist * Math.cos(az) * Math.cos(el));
    cam.lookAt(look);
  };
  const LOOK_OUT = new THREE.Vector3(0, -0.35, 0.3), LOOK_IN = new THREE.Vector3(0, 0, 0);
  const look = new THREE.Vector3(), screenPos = new THREE.Vector3(), probe = new THREE.Vector3();

  let lastDominant = null, lastHex = '', lastFlash = -1, lastFlashHex = '', portalOn = false;
  let time = 0, lastT = performance.now();
  function frame(now = performance.now()) {
    const dt = Math.min((now - lastT) / 1000, 0.05);
    lastT = now;
    time += dt;
    const tg = target();
    const k = reduce ? 1 : 1 - Math.exp(-dt * 4.5);
    for (const key of ['ax', 'ay', 'az', 'el', 'zoom', 'dive', 'crowd', 'lit']) cur[key] = lerp(cur[key], tg[key], k);
    cur.px = lerp(cur.px, pointerX, 1 - Math.exp(-dt * 3));
    cur.py = lerp(cur.py, pointerY, 1 - Math.exp(-dt * 3));
    const dv = cur.dive;
    const insideNow = dv >= 0.5;

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
    lastDominant = dominant;

    // ---------- outside ----------
    if (!insideNow) {
      if (dv > 0.002) {
        if (!portalOn) { portalOn = true; scrA.material.map = rt.texture; scrA.material.needsUpdate = true; }
        scrB.material.opacity = 0;
      } else {
        if (portalOn) { portalOn = false; scrA.material.needsUpdate = true; }
        scrA.material.map = texs[tg.a.screen || 'hello'];
        scrB.material.map = texs[tg.b.screen || 'hello'];
        scrB.material.opacity = tg.a.screen === tg.b.screen ? 0 : tg.mix;
      }
      const blow = smooth(0.02, 0.42, dv);
      for (const key of Object.keys(stickers)) {
        const h = HOME[key], g = stickers[key];
        const bob = reduce ? 0 : Math.sin(time * 1.3 + key.length) * 0.06;
        g.position.set(h.p[0] * (1 + blow * 2.2), (h.p[1] + bob) * (1 + blow * 1.6), h.p[2] + blow * 2);
        g.rotation.set(0, reduce ? 0 : Math.sin(time * 0.8 + key.length) * 0.12, h.r + blow * h.r * 4);
      }
      pc.position.y = reduce ? 0 : Math.sin(time * 1.1) * 0.04 * (1 - blow);

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
          dummy.position.set(c.x, -1.93, c.z);
          dummy.rotation.set(0, c.ry, 0);
          dummy.scale.setScalar(Math.max(pop * bump, 0.0001));
          dummy.updateMatrix();
          crowdBody.setMatrixAt(i, dummy.matrix);
          crowdLine.setMatrixAt(i, dummy.matrix);
          crowdScr.setMatrixAt(i, dummy.matrix);
          crowdScr.setColorAt(i, lit ? (since < 0.15 && !reduce ? flashC : litC) : darkC);
        });
        crowdBody.instanceMatrix.needsUpdate = crowdLine.instanceMatrix.needsUpdate = crowdScr.instanceMatrix.needsUpdate = true;
        crowdScr.instanceColor.needsUpdate = true;
      }
      // keep the shapes out from behind the hero text (left half on a computer, top half on a phone)
      const heroW = (tg.a === scenes.top ? 1 - tg.e : 0) + (tg.b === scenes.top ? tg.e : 0);
      outFloat.update(reduce ? 0 : time, 1 - blow, heroW < 0.01 ? null : (p) => {
        probe.copy(p).project(camera);
        const sx = (probe.x + 1) / 2, sy = (1 - probe.y) / 2;
        const inText = mobile ? sy < 0.66 : sx < 0.58;
        return inText ? 1 - heroW : 1;
      });
      outConf.update(dt);
    }

    // ---------- inside ----------
    const wa = tg.a.inside || tg.b.inside, wb = tg.b.inside || tg.a.inside;
    for (const [name, w] of Object.entries(worlds)) {
      let tw = 0;
      if (wa && wa === wb) tw = wa === name ? 1 : 0;
      else tw = (wa === name ? 1 - smooth(0.05, 0.5, tg.e) : 0) + (wb === name ? smooth(0.5, 0.95, tg.e) : 0);
      const was = w.p;
      w.p = reduce ? tw : lerp(w.p, tw, 1 - Math.exp(-dt * 6));
      if (was < 0.02 && w.p >= 0.02) { w.t0 = time; w.onEnter?.(); }
      w.group.visible = w.p > 0.003 && dv > 0.002;
      if (w.group.visible) {
        w.group.scale.setScalar(Math.max(easeOutBack(clamp01(w.p)), 0.0001));
        w.group.position.y = (1 - w.p) * -0.9;
        w.group.rotation.y = (1 - w.p) * 0.8;
        w.update(time - w.t0, dt, reduce);
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
    rig.rotation.y = cur.px * 0.14 * (1 - smooth(0, 0.25, dv));
    rig.rotation.x = cur.py * 0.05 * (1 - smooth(0, 0.25, dv));
    inRig.rotation.y = cur.px * 0.12 * smooth(0.75, 1, dv);
    inRig.rotation.x = cur.py * 0.05 * smooth(0.75, 1, dv);
    if (!insideNow) {
      rig.updateMatrixWorld();
      screenPos.set(0, pc.position.y, 0.14);
      rig.localToWorld(screenPos);
      look.copy(LOOK_OUT).lerp(screenPos, smooth(0, 0.3, dv));
      const f = smooth(0.03, 0.5, dv);
      place(camera, look, az, el, lerp(D, 0.25, f * f));
    } else {
      place(camera, LOOK_IN, az, el, D * lerp(ENTRY, 1, easeOutCubic(smooth(0.5, 1, dv))));
    }
    camera.setViewOffset(W, H, (0.5 - ax) * W, (0.5 - ay) * H, W, H);

    if (insideNow) {
      renderer.render(inner, camera);
    } else {
      if (dv > 0.002) {
        place(rtCam, LOOK_IN, 0, 0, D * ENTRY);
        renderer.setRenderTarget(rt);
        renderer.setClearColor(innerC, 1);
        renderer.clear();
        renderer.render(inner, rtCam);
        renderer.setRenderTarget(null);
        renderer.setClearColor(0x000000, 0);
      }
      renderer.render(scene, camera);
    }
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
      for (const l of labels) l.userData.redraw?.();
      drawScreen('hello', texs.hello.image);
      texs.hello.needsUpdate = true;
    },
    setScores(weights, rows) { worlds.scores.setScores(weights, rows); },
    measure,
    stop() { cancelAnimationFrame(raf); },
  };
}
