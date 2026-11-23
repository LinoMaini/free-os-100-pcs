// The world at the start of the page: a globe in the site's toon style.
// While you scroll, 100 tiny PCs take off from Asus in Taipei and fly to places in Africa,
// where pins blink between online and offline (Wi-Fi and power come and go); then the camera
// zooms into one of those places, a school pops up, and the page leaves through the computer's screen.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { feature } from 'topojson-client';
import land110 from 'world-atlas/land-110m.json';
import { smooth, clamp01, easeOutBack, PAL, toon, toonNew, part, rbox, outlineMat, makeLabel, sfx } from './kit.js';

const R = 1.6, DEG = Math.PI / 180;
// three.js sphere UVs put longitude -180 at -X, -90 at +Z, 0 at +X and +90 at -Z
const ll = (lat, lon, r = R) => {
  const phi = (lon + 180) * DEG, th = (90 - lat) * DEG;
  return new THREE.Vector3(-r * Math.cos(phi) * Math.sin(th), r * Math.cos(th), r * Math.sin(phi) * Math.sin(th));
};
// the globe turn (yaw around Y, then pitch around X) that brings a point to face the camera
const facing = (v) => {
  const yaw = Math.atan2(-v.x, v.z);
  const z1 = -v.x * Math.sin(yaw) + v.z * Math.cos(yaw);
  return { yaw, pitch: Math.atan2(v.y, z1) };
};
const angLerp = (a, b, t) => { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return a + d * t; };
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const dummy = new THREE.Object3D();
const UP = new THREE.Vector3(0, 1, 0);

function landTexture() {
  const W = 2048, H = 1024;
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#5CC8F0';
  g.fillRect(0, 0, W, H);
  g.strokeStyle = 'rgba(255,255,255,.25)';
  g.lineWidth = 2;
  for (let lon = -180; lon <= 180; lon += 30) { const x = ((lon + 180) / 360) * W; g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
  for (let lat = -60; lat <= 60; lat += 30) { const y = ((90 - lat) / 180) * H; g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
  const px = (lon) => ((lon + 180) / 360) * W, py = (lat) => ((90 - lat) / 180) * H;
  const path = new Path2D();
  const ring = (pts0) => {
    // keep rings that cross the date line in one piece, then draw them on both sides of the map
    let prev = pts0[0][0], off = 0;
    const pts = pts0.map(([lon, lat]) => { if (lon - prev > 180) off -= 360; else if (prev - lon > 180) off += 360; prev = lon; return [lon + off, lat]; });
    for (const shift of [-360, 0, 360]) {
      pts.forEach(([lon, lat], i) => (i ? path.lineTo(px(lon + shift), py(lat)) : path.moveTo(px(lon + shift), py(lat))));
      path.closePath();
    }
  };
  const geo = feature(land110, land110.objects.land);
  for (const f of geo.features || [geo]) {
    const gm = f.geometry;
    if (!gm) continue;
    const polys = gm.type === 'Polygon' ? [gm.coordinates] : gm.coordinates;
    for (const poly of polys) poly.forEach(ring);
  }
  g.fillStyle = '#C8EE5A';
  g.fill(path, 'evenodd');
  g.strokeStyle = '#000';
  g.lineWidth = 3.5;
  g.lineJoin = 'round';
  g.stroke(path);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function iconTex(kind, on) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  g.strokeStyle = '#000';
  g.lineWidth = 7;
  g.beginPath(); g.arc(64, 64, 56, 0, Math.PI * 2); g.fill(); g.stroke();
  if (kind === 'wifi') {
    g.strokeStyle = on ? '#2FBF71' : '#B9B9C3';
    g.lineCap = 'round';
    g.lineWidth = 10;
    [38, 26, 14].forEach((r) => { g.beginPath(); g.arc(64, 84, r, Math.PI * 1.22, Math.PI * 1.78); g.stroke(); });
    g.fillStyle = on ? '#2FBF71' : '#B9B9C3';
    g.beginPath(); g.arc(64, 84, 6, 0, Math.PI * 2); g.fill();
  } else {
    g.fillStyle = on ? '#FFE14D' : '#B9B9C3';
    g.beginPath();
    [[70, 22], [40, 70], [60, 70], [52, 106], [88, 54], [68, 54], [78, 22]].forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
    g.closePath(); g.fill(); g.lineWidth = 5; g.stroke();
  }
  if (!on) { g.strokeStyle = '#FF4D4D'; g.lineWidth = 11; g.lineCap = 'round'; g.beginPath(); g.moveTo(34, 34); g.lineTo(94, 94); g.stroke(); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function addGlobeWorld(W) {
  const group = new THREE.Group();
  const spin = new THREE.Group();
  spin.rotation.order = 'XYZ';
  group.add(spin);

  // the globe, its glow and the stars behind it
  spin.add(part(new THREE.SphereGeometry(R, 96, 64), toonNew('#ffffff', { map: landTexture() }), 0.03));
  const glow = new THREE.Mesh(new THREE.SphereGeometry(R * 1.1, 48, 32), new THREE.MeshBasicMaterial({ color: '#7CC8FF', transparent: true, opacity: 0.16, side: THREE.BackSide, depthWrite: false }));
  spin.add(glow);
  const starPos = new Float32Array(420 * 3);
  for (let i = 0; i < 420; i++) {
    const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, r = 9 + Math.random() * 5;
    const s = Math.sqrt(1 - u * u);
    starPos.set([Math.cos(a) * s * r, u * r, Math.sin(a) * s * r - 4], i * 3);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#FFFFFF', size: 0.05, sizeAttenuation: true, transparent: true, opacity: 0.9, depthWrite: false }));
  group.add(stars);

  // clouds drifting above the globe
  const cloudGeo = mergeGeometries([
    new THREE.SphereGeometry(0.07, 14, 10),
    new THREE.SphereGeometry(0.055, 14, 10).translate(0.07, -0.01, 0),
    new THREE.SphereGeometry(0.05, 14, 10).translate(-0.065, -0.015, 0.01),
  ]);
  const clouds = new THREE.Group();
  spin.add(clouds);
  [[48, -30], [15, 60], [-20, -70], [35, 150], [-5, 10], [-35, 120], [60, 95], [5, -150]].forEach(([lat, lon], i) => {
    const cl = part(cloudGeo, toon(PAL.white), 0.012);
    const p = ll(lat, lon, R + 0.16);
    cl.position.copy(p);
    cl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), p.clone().normalize());
    cl.scale.setScalar(1 + (i % 3) * 0.35);
    clouds.add(cl);
  });

  // 100 tiny PCs: from Asus in Taipei to four places in Africa
  const FROM = { lat: 25.03, lon: 121.56 };
  const PINS = [{ lat: 12.4, lon: -1.5 }, { lat: 4.6, lon: 18.6 }, { lat: 9.1, lon: 40.5 }, { lat: -13.5, lon: 34.0 }];
  const HOME = 3; // the place the camera zooms into
  const AFRICA = { lat: 2, lon: 20 };
  const miniGeo = mergeGeometries([
    rbox(1.0, 0.66, 0.09, 0.04).translate(0, 0.66, 0),
    rbox(0.12, 0.24, 0.07, 0.02).translate(0, 0.2, -0.01),
    rbox(0.46, 0.05, 0.28, 0.02).translate(0, 0.025, 0),
  ]);
  const N = 100;
  const body = new THREE.InstancedMesh(miniGeo, toon(PAL.white), N);
  const line = new THREE.InstancedMesh(miniGeo, outlineMat(0.05), N);
  const scr = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.88, 0.54).translate(0, 0.66, 0.047), new THREE.MeshBasicMaterial({ toneMapped: false }), N);
  const scrCols = [PAL.yellow, PAL.pink, PAL.cyan, PAL.lime, PAL.lilac, '#FF7A1A'].map((c) => new THREE.Color(c));
  for (const m of [body, line, scr]) m.frustumCulled = false;
  const pcs = Array.from({ length: N }, (_, i) => {
    const dest = i === 0 ? HOME : i % 4;
    const jit = (k, s) => ((((i * 9301 + k * 49297) % 233280) / 233280) - 0.5) * s;
    scr.setColorAt(i, scrCols[i % scrCols.length]);
    return {
      a: ll(FROM.lat + jit(1, 4), FROM.lon + jit(2, 5), 1).normalize(),
      b: ll(PINS[dest].lat + jit(3, dest === HOME ? 0.6 : 3.4), PINS[dest].lon + jit(4, dest === HOME ? 0.6 : 3.4), 1).normalize(),
      home: dest === HOME,
      delay: (i % 25) / 25 * 0.35 + jit(5, 0.06),
      lift: 0.42 + jit(6, 0.24),
      yaw: jit(7, 6),
    };
  });
  spin.add(line, body, scr);
  const qa = new THREE.Quaternion(), qb = new THREE.Quaternion(), qUp = new THREE.Quaternion(), v = new THREE.Vector3();

  // the pins, each with a Wi-Fi and a power sign that keep dropping out
  const wifiOn = iconTex('wifi', true), wifiOff = iconTex('wifi', false), powOn = iconTex('power', true), powOff = iconTex('power', false);
  // ---- storms over the pins: each lightning strike takes the power (and the Wi-Fi) down ----
  const stormGeo = cloudGeo;
  const boltShape = new THREE.Shape([[0.02, 0.09], [-0.03, 0.0], [0.0, 0.0], [-0.025, -0.09], [0.04, 0.015], [0.01, 0.015], [0.035, 0.09]].map(([x, y]) => new THREE.Vector2(x, y)));
  const boltGeo = new THREE.ExtrudeGeometry(boltShape, { depth: 0.012, bevelEnabled: false }).center();

  const pins = PINS.map((p, k) => {
    const g = new THREE.Group();
    const n = ll(p.lat, p.lon, 1).normalize();
    g.position.copy(n).multiplyScalar(R);
    g.quaternion.setFromUnitVectors(UP, n);
    const stick = part(new THREE.ConeGeometry(0.03, 0.14, 14).rotateX(Math.PI).translate(0, 0.07, 0), toon(PAL.coral), 0.008);
    const head = part(new THREE.SphereGeometry(0.04, 16, 12).translate(0, 0.15, 0), toon(PAL.coral), 0.008);
    const wifi = new THREE.Sprite(new THREE.SpriteMaterial({ map: wifiOn, depthWrite: false }));
    const pow = new THREE.Sprite(new THREE.SpriteMaterial({ map: powOn, depthWrite: false }));
    wifi.position.set(-0.06, 0.27, 0);
    pow.position.set(0.07, 0.25, 0);
    const storm = part(cloudGeo, toon('#5B5F73'), 0.008);
    storm.position.set(0, 0.44, 0);
    storm.scale.setScalar(1.3);
    const zap = new THREE.Mesh(boltGeo, new THREE.MeshBasicMaterial({ color: '#FFE14D', toneMapped: false }));
    zap.position.set(0.01, 0.34, 0.02);
    zap.scale.setScalar(1.1);
    g.add(stick, head, wifi, pow, storm, zap);
    spin.add(g);
    return { g, wifi, pow, storm, zap, phase: k * 1.7 };
  });

  // the school at the place we zoom into
  const school = new THREE.Group();
  const homeN = ll(PINS[HOME].lat, PINS[HOME].lon, 1).normalize();
  // a frame on the map at the school: up is the ground's normal, +Z points south (down on screen once centred)
  const south = new THREE.Vector3(0, -1, 0).addScaledVector(homeN, homeN.y).normalize();
  const east = new THREE.Vector3().crossVectors(homeN, south).normalize();
  const qFrame = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(east, homeN, south));
  const qTilt = new THREE.Quaternion(), XAX = new THREE.Vector3(1, 0, 0);
  const CLASS = 24;
  const classBody = new THREE.InstancedMesh(miniGeo, toon(PAL.white), CLASS);
  const classLine = new THREE.InstancedMesh(miniGeo, outlineMat(0.05), CLASS);
  const classScr = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.88, 0.54).translate(0, 0.66, 0.047), new THREE.MeshBasicMaterial({ toneMapped: false }), CLASS);
  for (const m of [classBody, classLine, classScr]) m.frustumCulled = false;
  for (let i = 0; i < CLASS; i++) classScr.setColorAt(i, scrCols[i % scrCols.length]);
  {
    school.position.copy(homeN).multiplyScalar(R);
    const S = new THREE.Group();
    S.add(classLine, classBody, classScr);
    S.add(part(new THREE.CylinderGeometry(0.16, 0.16, 0.012, 40).translate(0, 0.006, 0), toon('#2FBF71'), 0.006));
    const house = part(rbox(0.13, 0.07, 0.08, 0.008).translate(0, 0.047, 0), toon(PAL.white), 0.006);
    const roofShape = new THREE.Shape([new THREE.Vector2(-0.078, 0), new THREE.Vector2(0.078, 0), new THREE.Vector2(0, 0.05)]);
    const roof = part(new THREE.ExtrudeGeometry(roofShape, { depth: 0.09, bevelEnabled: false }).translate(0, 0.082, -0.045), toon(PAL.coral), 0.006);
    const door = new THREE.Mesh(new THREE.PlaneGeometry(0.022, 0.04), new THREE.MeshBasicMaterial({ color: '#3A2A1A' }));
    door.position.set(0, 0.032, 0.0405);
    const panel = part(rbox(0.05, 0.004, 0.03, 0.001).translate(0.025, 0.106, 0.015), toon('#3D7BFF'), 0.004);
    panel.rotation.z = -0.55;
    const pole = part(rbox(0.004, 0.11, 0.004, 0.001).translate(-0.1, 0.055, 0.05), toon(PAL.ink), 0.002);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 0.025), new THREE.MeshBasicMaterial({ color: PAL.yellow, side: THREE.DoubleSide }));
    flag.position.set(-0.078, 0.098, 0.05);
    S.add(house, roof, door, panel, pole, flag);
    [[0.11, -0.05], [0.095, 0.07], [-0.12, -0.06]].forEach(([x, z], i) => {
      S.add(part(new THREE.CylinderGeometry(0.006, 0.006, 0.03, 8).translate(x, 0.015, z), toon('#8B5A2B'), 0.003));
      S.add(part(new THREE.SphereGeometry(0.026 + i * 0.004, 14, 10).translate(x, 0.045, z), toon('#2E9E55'), 0.004));
    });
    school.add(S);
    school.userData.flag = flag;
  }
  spin.add(school);

  const fromF = facing(ll(FROM.lat, FROM.lon, 1)), afF = facing(ll(AFRICA.lat, AFRICA.lon, 1)), homeF = facing(ll(PINS[HOME].lat, PINS[HOME].lon, 1));

  // ---- the box: the 100 PCs leave Taipei inside one cardboard box that takes off like a rocket and bursts ----
  const fromN = ll(FROM.lat, FROM.lon, 1).normalize();
  const BURST_ALT = R + 0.9;
  const rocket = new THREE.Group();
  const box = new THREE.Group();
  const flaps = [];
  {
    const card = toon('#C8914B'), tape = toon('#F2D59B');
    const sides = [[0, 0.11, 0, 0.22, 0.02, 0.22], [0, -0.11, 0, 0.22, 0.02, 0.22], [0.11, 0, 0, 0.02, 0.22, 0.22], [-0.11, 0, 0, 0.02, 0.22, 0.22], [0, 0, 0.11, 0.22, 0.22, 0.02], [0, 0, -0.11, 0.22, 0.22, 0.02]];
    sides.forEach(([x, y, z, w, h, d], i) => {
      const f = part(rbox(w, h, d, 0.008), card, 0.008);
      f.position.set(x, y, z);
      box.add(f);
      flaps.push({ o: f, home: f.position.clone(), dir: new THREE.Vector3(x, y, z).normalize(), spin: new THREE.Vector3(i + 1, i * 2 - 3, 3 - i) });
    });
    const t1 = part(rbox(0.05, 0.226, 0.226, 0.004), tape, 0.004);
    box.add(t1);
    flaps.push({ o: t1, home: new THREE.Vector3(), dir: new THREE.Vector3(0.3, 1, 0.2).normalize(), spin: new THREE.Vector3(4, 1, 2) });
    const lab = makeLabel('100 PCs', PAL.white);
    lab.scale.setScalar(0.09);
    lab.position.set(0, 0, 0.125);
    box.add(lab);
    flaps.push({ o: lab, home: lab.position.clone(), dir: new THREE.Vector3(0, 0.4, 1).normalize(), spin: new THREE.Vector3(1, 3, 6) });
  }
  rocket.add(box);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.22, 16).rotateX(Math.PI).translate(0, -0.22, 0), new THREE.MeshBasicMaterial({ color: '#FFB020', toneMapped: false }));
  const flameIn = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.14, 12).rotateX(Math.PI).translate(0, -0.19, 0), new THREE.MeshBasicMaterial({ color: '#FFF3B0', toneMapped: false }));
  rocket.add(flame, flameIn);
  rocket.scale.setScalar(1.5);
  spin.add(rocket);
  const SMOKE = 14;
  const smoke = Array.from({ length: SMOKE }, (_, i) => {
    const m = part(new THREE.SphereGeometry(0.075, 12, 10), toon('#F4F1FF'), 0.008);
    spin.add(m);
    return { m, k: i / SMOKE };
  });
  const CONF = 60;
  const confetti = new THREE.InstancedMesh(new THREE.BoxGeometry(0.03, 0.012, 0.004), new THREE.MeshBasicMaterial({ toneMapped: false }), CONF);
  confetti.frustumCulled = false;
  const confCols = [PAL.yellow, PAL.pink, PAL.cyan, PAL.lime, PAL.lilac, PAL.coral].map((c) => new THREE.Color(c));
  const confSeed = Array.from({ length: CONF }, (_, i) => {
    confetti.setColorAt(i, confCols[i % confCols.length]);
    const a = i * 2.399, b = Math.acos(1 - 2 * ((i + 0.5) / CONF));
    return { d: new THREE.Vector3(Math.sin(b) * Math.cos(a), Math.cos(b), Math.sin(b) * Math.sin(a)), s: 0.5 + ((i * 0.37) % 1) };
  });
  spin.add(confetti);
  let burstDone = false;

  // ---- a satellite going round, its signal beam stuttering ----
  const sat = new THREE.Group();
  {
    sat.add(part(rbox(0.12, 0.08, 0.08, 0.01), toon(PAL.white), 0.008));
    [-1, 1].forEach((sd) => {
      const pnl = part(rbox(0.16, 0.005, 0.07, 0.003), toon('#3D7BFF'), 0.005);
      pnl.position.x = sd * 0.15;
      sat.add(pnl);
    });
    const dish = part(new THREE.SphereGeometry(0.035, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI), toon(PAL.yellow), 0.006);
    dish.position.y = -0.055;
    sat.add(dish);
  }
  const beam = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.75, 24, 1, true).translate(0, -0.42, 0), new THREE.MeshBasicMaterial({ color: '#5CE1E6', transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide }));
  sat.add(beam);
  const satPivot = new THREE.Group();
  satPivot.rotation.z = 0.5;
  satPivot.add(sat);
  group.add(satPivot);

  // ---- the Moon, slowly going round in the back ----
  const moon = part(new THREE.SphereGeometry(0.32, 32, 24), toon('#D9D9E3'), 0.012);
  [[0.1, 0.12, 0.27], [-0.14, -0.05, 0.26], [0.05, -0.17, 0.25]].forEach(([x, y, z], i) => {
    const c = new THREE.Mesh(new THREE.CircleGeometry(0.05 + i * 0.012, 18), new THREE.MeshBasicMaterial({ color: '#B4B4C6' }));
    c.position.set(x, y, z);
    c.lookAt(x * 4, y * 4, z * 4);
    moon.add(c);
  });
  group.add(moon);

  // ---- a light-speed start, and big clouds to break through on the way down ----
  const WARP = 180;
  const warpPos = new Float32Array(WARP * 6);
  const warpSeed = Array.from({ length: WARP }, (_, i) => ({ a: i * 2.399, r: 0.6 + ((i * 0.618) % 1) * 7, z: -6 + ((i * 0.37) % 1) * 12 }));
  const warpGeo = new THREE.BufferGeometry();
  warpGeo.setAttribute('position', new THREE.BufferAttribute(warpPos, 3));
  const warp = new THREE.LineSegments(warpGeo, new THREE.LineBasicMaterial({ color: '#FFFFFF', transparent: true, opacity: 0.85, depthWrite: false }));
  warp.frustumCulled = false;
  group.add(warp);
  const bigClouds = Array.from({ length: 9 }, (_, i) => {
    const c = part(cloudGeo, toon(PAL.white), 0.004);
    const a = (i / 9) * Math.PI * 2 + 0.4;
    group.add(c);
    return { c, a, r0: 0.6 + (i % 3) * 0.35, s: 9 + (i % 4) * 3 };
  });

  W.globe = {
    group,
    update(t, dt, reduce, sp = 0) {
      // the section starts already a bit in: map the visible part of it to 0…1
      const q = reduce ? 0.62 : clamp01((sp - 0.13) / 0.65);
      const fly = smooth(0.15, 0.55, q), zoomK = ease(smooth(0.7, 1.0, q));
      const launch = reduce ? 1 : smooth(0.03, 0.15, q); // the box climbs, then bursts at 1
      const pop = reduce ? 1 : easeOutBack(clamp01((t - 0.35) / 0.9));

      // turn the globe: Taipei, then follow the PCs to Africa, then centre the school
      const toAf = ease(smooth(0.16, 0.55, q));
      let yaw = angLerp(fromF.yaw, afF.yaw, toAf), pitch = fromF.pitch + (afF.pitch - fromF.pitch) * toAf;
      yaw = angLerp(yaw, homeF.yaw, zoomK);
      pitch += (homeF.pitch - pitch) * zoomK;
      const idle = reduce ? 0 : (1 - zoomK) * (Math.sin(t * 0.25) * 0.06 + (1 - smooth(0.14, 0.34, q)) * 0.75);
      spin.rotation.set(pitch * (0.55 + 0.45 * zoomK), yaw + idle, 0);
      const Z = Math.exp(zoomK * Math.log(9));
      spin.scale.setScalar(Z * (reduce ? 1 : pop));
      spin.position.z = -R * (Z - 1);
      clouds.rotation.y = reduce ? 0 : t * 0.02;

      // light-speed arrival: star streaks shrink to dots and the globe pops in (first second and a half)
      const wk = reduce ? 1 : clamp01(t / 1.5);
      warp.visible = wk < 1;
      if (warp.visible) {
        const len = (1 - wk) ** 2 * 9;
        warpSeed.forEach((w, i) => {
          const x = Math.cos(w.a) * w.r, y = Math.sin(w.a) * w.r;
          warpPos.set([x, y, w.z, x * 1.02, y * 1.02, w.z + len], i * 6);
        });
        warpGeo.attributes.position.needsUpdate = true;
        warp.material.opacity = 0.9 * (1 - wk);
      }

      // the box: on the ground, climbing on a flame, then bursting into confetti and 100 PCs
      const climb = smooth(0, 0.92, launch) ** 1.6;
      const boom = clamp01((launch - 0.92) / 0.08);
      const alt0 = R + 0.13 + climb * (BURST_ALT - R - 0.13);
      rocket.position.copy(fromN).multiplyScalar(alt0);
      rocket.quaternion.setFromUnitVectors(UP, fromN);
      rocket.rotateY(reduce ? 0 : t * 2 * climb);
      rocket.visible = !reduce && q < 0.4 && Z < 2;
      const shake = launch > 0 && launch < 0.92 && !reduce ? Math.sin(t * 60) * 0.01 : 0;
      box.position.x = shake;
      flame.visible = flameIn.visible = launch > 0.01 && boom === 0;
      flame.scale.set(1, 0.7 + Math.sin(t * 40) * 0.3, 1);
      flameIn.scale.set(1, 0.7 + Math.cos(t * 50) * 0.3, 1);
      flaps.forEach((f) => {
        f.o.position.copy(f.home).addScaledVector(f.dir, boom * 0.9);
        f.o.rotation.set(f.spin.x * boom, f.spin.y * boom, f.spin.z * boom);
        f.o.visible = boom < 0.98;
      });
      smoke.forEach((sm) => {
        const u = (sm.k + t * 0.9) % 1;
        const a = R + 0.1 + climb * (BURST_ALT - R - 0.13) * (1 - u);
        sm.m.position.copy(fromN).multiplyScalar(a).addScaledVector(fromN.clone().cross(UP).normalize(), Math.sin(u * 9 + sm.k * 20) * 0.04 * u);
        sm.m.scale.setScalar((0.5 + u * 2.2) * (1 - u));
        sm.m.visible = !reduce && launch > 0.02 && launch < 1 && q < 0.3;
      });
      if (!reduce && boom > 0 && !burstDone) { burstDone = true; sfx.tada(); }
      if (boom === 0) burstDone = false;
      confetti.visible = boom > 0 && q < 0.45;
      if (confetti.visible) {
        const cu = clamp01((q - 0.145) / 0.25);
        const centre = fromN.clone().multiplyScalar(BURST_ALT);
        confSeed.forEach((c, i) => {
          dummy.position.copy(centre).addScaledVector(c.d, cu * 0.8 * c.s);
          dummy.position.addScaledVector(fromN, -cu * cu * 0.5);
          dummy.rotation.set(t * 6 + i, t * 4 + i * 0.5, 0);
          dummy.scale.setScalar(Math.max(0.0001, 1 - cu));
          dummy.updateMatrix();
          confetti.setMatrixAt(i, dummy.matrix);
        });
        confetti.instanceMatrix.needsUpdate = true;
      }

      // satellite and Moon
      satPivot.rotation.y = reduce ? 1 : t * 0.45;
      sat.position.set(R + 0.85, 0, 0);
      sat.rotation.z = Math.PI / 2;
      beam.visible = !reduce && Math.sin(t * 3.1) > -0.3 && Math.sin(t * 7.7) > -0.6 && Z < 2;
      satPivot.visible = Z < 2.5;
      moon.position.set(Math.cos(t * 0.12) * 3.4, 0.9 + Math.sin(t * 0.12) * 0.4, -2.2 + Math.sin(t * 0.12) * 2.6);
      moon.visible = Z < 2;

      // breaking through the clouds on the way down to the school
      const cdive = smooth(0.2, 0.75, zoomK);
      bigClouds.forEach((bc, i) => {
        const r = bc.r0 + cdive * 6;
        bc.c.position.set(Math.cos(bc.a) * r, Math.sin(bc.a) * r * 0.75, 2 + cdive * 6 + (i % 3) * 0.4);
        bc.c.scale.setScalar(bc.s * (0.6 + cdive));
        bc.c.visible = !reduce && cdive > 0.01 && cdive < 0.99;
      });
      clouds.visible = Z < 4;
      glow.visible = Z < 3;
      stars.rotation.y = reduce ? 0 : t * 0.005;

      // the PCs: sitting in Taipei, flying in an arc, then landing around the pins
      for (let i = 0; i < N; i++) {
        const p = pcs[i];
        const f = reduce ? 1 : clamp01((fly - p.delay) / 0.62);
        const e = ease(f);
        qa.setFromUnitVectors(UP, p.a);
        qb.setFromUnitVectors(UP, p.b);
        qUp.slerpQuaternions(qa, qb, e);
        v.copy(UP).applyQuaternion(qUp);
        const alt = BURST_ALT + (R + 0.012 - BURST_ALT) * e + Math.sin(f * Math.PI) * p.lift * 0.6;
        dummy.position.copy(v).multiplyScalar(alt);
        dummy.quaternion.copy(qUp);
        dummy.rotateY(p.yaw + (f > 0 && f < 1 ? Math.sin(t * 8 + i) * 0.3 : 0));
        const gone = (p.home && f >= 1 && zoomK > 0.35) || (!reduce && launch < 1);
        dummy.scale.setScalar(gone ? 0.0001 : (f > 0 && f < 1 ? 0.1 : 0.075) / Math.pow(Z, 0.35));
        dummy.updateMatrix();
        body.setMatrixAt(i, dummy.matrix);
        line.setMatrixAt(i, dummy.matrix);
        scr.setMatrixAt(i, dummy.matrix);
      }
      body.instanceMatrix.needsUpdate = line.instanceMatrix.needsUpdate = scr.instanceMatrix.needsUpdate = true;

      // pins pop up when the PCs arrive; their signals keep dropping out
      const pinK = reduce ? 1 : easeOutBack(smooth(0.42, 0.56, q));
      pins.forEach((pn, k) => {
        pn.g.scale.setScalar((Math.max(0.0001, pinK) * 1.8) / Math.pow(Z, 0.85));
        const wOn = reduce ? false : Math.sin(t * 2.6 + pn.phase) > 0.35;
        const pOn = reduce ? true : Math.sin(t * 1.9 + pn.phase * 1.3) > -0.2;
        pn.wifi.material.map = wOn && pOn ? wifiOn : wifiOff;
        pn.pow.material.map = pOn ? powOn : powOff;
        pn.zap.visible = !reduce && !pOn && Math.sin(t * 40 + k) > 0;
        pn.storm.position.x = Math.sin(t * 0.8 + k) * 0.03;
        pn.wifi.scale.setScalar(0.13);
        pn.pow.scale.setScalar(0.11);
        pn.g.visible = pinK > 0.01 && !(k === HOME && zoomK > 0.75);
      });

      // the school pops up from the map like a page of a pop-up book, then its classroom fills with PCs
      const skRaw = reduce ? 1 : smooth(0.8, 0.95, q);
      const sk = reduce ? 1 : easeOutBack(skRaw);
      school.visible = skRaw > 0.001;
      school.scale.setScalar(Math.max(0.0001, sk) * 0.9);
      school.quaternion.copy(qFrame).multiply(qTilt.setFromAxisAngle(XAX, -1.0 * Math.min(1, sk)));
      school.userData.flag.rotation.y = reduce ? 0 : Math.sin(t * 5) * 0.4;
      for (let i = 0; i < CLASS; i++) {
        const row = Math.floor(i / 8), col = i % 8;
        const k = reduce ? 1 : easeOutBack(smooth(0.86 + i * 0.004, 0.9 + i * 0.004, q));
        dummy.position.set(-0.098 + col * 0.028, 0.012, 0.07 + row * 0.026);
        dummy.quaternion.identity();
        dummy.scale.setScalar(Math.max(0.0001, k) * 0.021);
        dummy.updateMatrix();
        classBody.setMatrixAt(i, dummy.matrix);
        classLine.setMatrixAt(i, dummy.matrix);
        classScr.setMatrixAt(i, dummy.matrix);
      }
      classBody.instanceMatrix.needsUpdate = classLine.instanceMatrix.needsUpdate = classScr.instanceMatrix.needsUpdate = true;
    },
  };
}
