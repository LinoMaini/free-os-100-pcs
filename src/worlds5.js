// Lino's two immersive worlds, in the same chunky toon style as the rest of the deck.
//  - osdesk: what an operating system is. A dark machine wakes up: the power button clicks,
//    the screen lights, and the desktop assembles itself (taskbar, window, icons, a clicking
//    cursor) while cogs turn behind it — the software bringing the metal to life.
//  - freegift: why free and open. A big padlock springs open, a wave of "free" lights up a wall
//    of PCs, a €0 tag floats up and a USB stick hops across carrying the update to every machine.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { COLORS } from './screens.js';
import { lerp, smooth, clamp01, easeOutBack, PAL, toon, toonNew, part, rbox, outlineMat, makeLabel, makeFloaters, sfx } from './kit.js';

// a pointer arrow, extruded flat
const CURSOR = [[0, 0], [0, -0.62], [0.15, -0.48], [0.26, -0.72], [0.37, -0.67], [0.26, -0.43], [0.46, -0.43]];
function extrude(points, depth = 0.08) {
  const s = new THREE.Shape();
  s.moveTo(points[0][0], points[0][1]);
  for (const [x, y] of points.slice(1)) s.lineTo(x, y);
  const geo = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false });
  geo.center();
  return geo;
}

// a chunky cog: a disk with a ring of teeth and a pale hub, merged into one outlined part
function gear(color, r, teeth) {
  const parts = [new THREE.CylinderGeometry(r, r, 0.2, Math.max(24, teeth * 3)).rotateX(Math.PI / 2)];
  const tw = r * 0.42, th = r * 0.34;
  for (let i = 0; i < teeth; i++) {
    parts.push(rbox(tw, th, 0.2, 0.03).translate(0, r + th * 0.32, 0).rotateZ((i / teeth) * Math.PI * 2));
  }
  // RoundedBoxGeometry is non-indexed and CylinderGeometry is indexed, so flatten both before merging
  const g = part(mergeGeometries(parts.map((p) => (p.index ? p.toNonIndexed() : p))), toon(color), 0.02);
  const hub = part(new THREE.CylinderGeometry(r * 0.32, r * 0.32, 0.22, 24).rotateX(Math.PI / 2), toon(PAL.white), 0.015);
  g.add(hub);
  return g;
}

// a little desktop window: title bar, three dots, an image block and text lines
function windowProp(w, h, accent) {
  const g = new THREE.Group();
  g.add(part(rbox(w, h, 0.08, 0.05), toon(PAL.white), 0.02));
  const bar = part(rbox(w, 0.2, 0.1, 0.04), toon(PAL.ink), 0.02);
  bar.position.y = h / 2 - 0.1;
  g.add(bar);
  [PAL.red, PAL.yellow, COLORS.mint].forEach((c, i) => {
    const d = new THREE.Mesh(new THREE.CircleGeometry(0.04, 18), toon(c));
    d.position.set(-w / 2 + 0.16 + i * 0.15, h / 2 - 0.1, 0.06);
    g.add(d);
  });
  const img = part(rbox(w * 0.42, h * 0.42, 0.04, 0.02), toon(accent), 0.015);
  img.position.set(-w * 0.22, -0.05, 0.05);
  g.add(img);
  for (let i = 0; i < 3; i++) {
    const l = new THREE.Mesh(rbox(w * 0.34, 0.06, 0.03, 0.02), toon(PAL.grey));
    l.position.set(w * 0.16, 0.09 - i * 0.15, 0.05);
    g.add(l);
  }
  return g;
}

// a taskbar strip with a start tile and a row of app squares
function taskbarProp(w, iconColors) {
  const g = new THREE.Group();
  g.add(part(rbox(w, 0.26, 0.12, 0.05), toon(PAL.ink), 0.015));
  const start = part(rbox(0.3, 0.19, 0.08, 0.04), toon(COLORS.mint), 0.015);
  start.position.set(-w / 2 + 0.24, 0, 0.08);
  g.add(start);
  iconColors.forEach((c, i) => {
    const ic = part(rbox(0.16, 0.16, 0.07, 0.03), toon(c), 0.012);
    ic.position.set(-w / 2 + 0.58 + i * 0.26, 0, 0.08);
    g.add(ic);
  });
  return g;
}

// a round power button with the power glyph on its face
function powerButton() {
  const g = new THREE.Group();
  g.add(part(new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32).rotateX(Math.PI / 2), toon(PAL.white), 0.02));
  const ring = part(new THREE.TorusGeometry(0.22, 0.055, 12, 28, Math.PI * 1.55), toonNew(COLORS.mint), 0.015);
  ring.rotation.z = Math.PI / 2 + Math.PI * 0.225;
  ring.position.z = 0.12;
  const stem = new THREE.Mesh(rbox(0.07, 0.26, 0.07, 0.02), toonNew(COLORS.mint));
  stem.position.set(0, 0.08, 0.13);
  g.add(ring, stem);
  return g;
}

// an open padlock: body with a keyhole, and a shackle on a pivot so it can spring open
function padlock() {
  const g = new THREE.Group();
  g.add(part(rbox(1.3, 1.15, 0.52, 0.16), toon(PAL.yellow), 0.02));
  const kh = new THREE.Mesh(new THREE.CircleGeometry(0.15, 22), toon(PAL.ink));
  kh.position.set(0, 0.08, 0.27);
  const kb = new THREE.Mesh(rbox(0.11, 0.3, 0.02, 0.02), toon(PAL.ink));
  kb.position.set(0, -0.14, 0.27);
  g.add(kh, kb);
  // the shackle hangs from a pivot at the top of the right leg, so opening swings the left leg clear
  const pivot = new THREE.Group();
  pivot.position.set(0.34, 0.58, 0);
  const steel = '#C6C6D0';
  const bend = part(new THREE.TorusGeometry(0.34, 0.11, 12, 26, Math.PI), toon(steel), 0.02);
  bend.position.set(-0.34, 0, 0);
  const legR = part(new THREE.CylinderGeometry(0.11, 0.11, 0.5, 18), toon(steel), 0.018);
  legR.position.set(0, -0.25, 0);
  const legL = part(new THREE.CylinderGeometry(0.11, 0.11, 0.5, 18), toon(steel), 0.018);
  legL.position.set(-0.68, -0.25, 0);
  pivot.add(bend, legR, legL);
  g.add(pivot);
  g.userData.pivot = pivot;
  return g;
}

// a tiny monitor on a stand, its screen dark until it is "freed"
function miniPc(onColor) {
  const g = new THREE.Group();
  g.add(part(rbox(0.52, 0.38, 0.07, 0.04), toon(PAL.ink), 0.012));
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.28), new THREE.MeshBasicMaterial({ color: '#2B2B3A', toneMapped: false }));
  scr.position.z = 0.045;
  g.add(scr);
  const neck = part(rbox(0.1, 0.1, 0.06, 0.02), toon(PAL.ink));
  neck.position.y = -0.24;
  const base = part(rbox(0.3, 0.05, 0.14, 0.02), toon(PAL.white));
  base.position.y = -0.3;
  g.add(neck, base);
  g.userData.scr = scr;
  g.userData.off = new THREE.Color('#2B2B3A');
  g.userData.on = new THREE.Color(onColor);
  return g;
}

// a toon USB stick
function usbStick() {
  const g = new THREE.Group();
  g.add(part(rbox(0.5, 0.22, 0.12, 0.05), toon(COLORS.endless), 0.02));
  const plug = part(rbox(0.22, 0.16, 0.08, 0.02), toon('#CFCFCF'), 0.018);
  plug.position.x = 0.35;
  g.add(plug);
  return g;
}

// a soft round halo, like the globe's glow
function halo(color, r) {
  return new THREE.Mesh(new THREE.CircleGeometry(r, 48), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, depthWrite: false, toneMapped: false }));
}

export function addLinoWorlds(W) {
  // ---------- os: the machine wakes up ----------
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    group.add(root);

    const glow = halo(PAL.sky, 2.7);
    glow.position.z = -1.6;
    root.add(glow);

    const floaters = makeFloaters(root, { count: 20, colors: [PAL.sky, PAL.lilac, PAL.pink, COLORS.mint], seed: 7, spread: [6.5, 4.2, 3], back: -2.4 });

    // the three cogs turning behind the screen
    const cogs = [gear(PAL.lilac, 0.62, 10), gear(PAL.sky, 0.46, 9), gear(PAL.pink, 0.36, 8)];
    cogs[0].position.set(-1.95, 1.25, -1.0);
    cogs[1].position.set(-1.35, 1.72, -0.9);
    cogs[2].position.set(1.95, -1.35, -0.9);
    cogs.forEach((c) => root.add(c));

    // the monitor
    const monitor = new THREE.Group();
    root.add(monitor);
    monitor.add(part(rbox(3.2, 2.1, 0.22, 0.12), toon(PAL.ink), 0.02));
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(2.86, 1.76), new THREE.MeshBasicMaterial({ color: '#0E1230', toneMapped: false }));
    screen.position.z = 0.12;
    monitor.add(screen);
    const wall = new THREE.Mesh(rbox(2.86, 1.76, 0.02, 0.06), toonNew(PAL.sky));
    wall.position.z = 0.125;
    monitor.add(wall);
    const neck = part(rbox(0.32, 0.5, 0.2, 0.06), toon(PAL.ink));
    neck.position.set(0, -1.38, 0);
    const foot = part(rbox(1.15, 0.16, 0.5, 0.06), toon(PAL.white));
    foot.position.set(0, -1.64, 0.1);
    monitor.add(neck, foot);

    // the desktop, built just in front of the screen
    const desk = new THREE.Group();
    desk.position.z = 0.14;
    monitor.add(desk);
    const taskbar = taskbarProp(2.7, [COLORS.zorin, COLORS.endless, PAL.yellow, PAL.pink]);
    taskbar.position.set(0, -0.74, 0);
    desk.add(taskbar);
    const win = windowProp(1.5, 1.02, PAL.lilac);
    win.position.set(0.12, 0.12, 0.03);
    desk.add(win);
    const icons = [COLORS.mint, PAL.pink, PAL.yellow, PAL.sky].map((c, i) => {
      const ic = part(rbox(0.3, 0.3, 0.08, 0.06), toon(c), 0.018);
      ic.position.set(-1.14, 0.56 - i * 0.42, 0.03);
      desk.add(ic);
      return ic;
    });
    const cursor = part(extrude(CURSOR, 0.05), toon(PAL.white), 0.018);
    cursor.scale.setScalar(0.62);
    desk.add(cursor);

    // the power button, out in front
    const power = powerButton();
    power.position.set(0, -2.02, 0.55);
    power.scale.setScalar(0.52);
    root.add(power);

    const dark = new THREE.Color('#0E1230');
    const sky = new THREE.Color(PAL.sky);
    const deskItems = [taskbar, win, ...icons];
    const LOOP = 7.2;
    W.osdesk = {
      group,
      update(t, dt, reduce) {
        const lt = reduce ? 3.4 : t % LOOP;
        floaters.update(reduce ? 0 : t, 0.9);
        cogs.forEach((c, i) => { c.rotation.z = (reduce ? 0 : t) * (0.5 - i * 0.12) * (i % 2 ? -1 : 1); });

        // power button: pulse while asleep, click on at lt ~ 0.9
        const asleep = 1 - smooth(0.85, 1.05, lt);
        power.scale.setScalar(0.52 * (1 - 0.22 * asleep * (reduce ? 0 : Math.max(0, Math.sin(lt * 4)))));
        power.position.y = -2.02 + (reduce ? 0 : asleep * Math.sin(lt * 2) * 0.03);

        // the screen lights up
        const on = smooth(1.0, 1.5, lt) * (1 - smooth(LOOP - 0.5, LOOP, lt));
        screen.material.color.copy(dark).lerp(sky, reduce ? 1 : on);
        wall.visible = (reduce ? 1 : on) > 0.02;
        wall.scale.setScalar(Math.max(reduce ? 1 : on, 0.0001));

        // the desktop assembles, piece by piece
        deskItems.forEach((el, i) => {
          const s = reduce ? 1 : easeOutBack(smooth(1.5 + i * 0.22, 2.0 + i * 0.22, lt)) * (1 - smooth(LOOP - 0.45, LOOP, lt));
          el.scale.setScalar(Math.max(s, 0.0001));
          el.visible = s > 0.01;
        });
        win.position.y = 0.12 + (reduce ? 0 : Math.sin(lt * 1.6) * 0.02);

        // the cursor glides over to the window and clicks
        const show = reduce ? 1 : smooth(2.6, 3.0, lt) * (1 - smooth(LOOP - 0.45, LOOP, lt));
        cursor.visible = show > 0.01;
        const path = reduce ? 1 : smooth(3.0, 4.2, lt);
        cursor.position.set(lerp(0.9, 0.2, path), lerp(-0.7, 0.2, path), 0.05);
        const click = reduce ? 0 : Math.max(0, Math.sin((lt - 4.2) * 7)) * smooth(4.2, 4.35, lt) * (1 - smooth(4.9, 5.1, lt));
        cursor.scale.setScalar(0.62 * (1 - click * 0.2) * show);
      },
    };
  }

  // ---------- free: the padlock opens and every PC lights up ----------
  {
    const group = new THREE.Group();
    const root = new THREE.Group();
    group.add(root);

    const glow = halo(PAL.lime, 2.9);
    glow.position.z = -1.7;
    root.add(glow);
    const floaters = makeFloaters(root, { count: 20, colors: [PAL.lime, PAL.yellow, COLORS.mint, PAL.sky], seed: 13, spread: [6.8, 4.3, 3], back: -2.5 });

    // a wall of PCs behind the lock, all waiting to be freed
    const COLS = 6, ROWS = 3, GX = 0.92, GY = 0.86;
    const minis = [];
    const miniCols = [COLORS.mint, COLORS.zorin, COLORS.endless, PAL.yellow, PAL.sky, PAL.pink];
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      const m = miniPc(miniCols[(r * COLS + c) % miniCols.length]);
      const x = (c - (COLS - 1) / 2) * GX;
      const y = (r - (ROWS - 1) / 2) * GY + 0.25;
      m.position.set(x, y, -1.15);
      m.userData.d = Math.hypot(x, y * 0.8); // distance from centre, for the wave
      root.add(m);
      minis.push(m);
    }
    const maxD = Math.max(...minis.map((m) => m.userData.d));

    // the lock, up front and centre
    const lock = padlock();
    lock.position.set(0, -0.1, 0.4);
    lock.scale.setScalar(1.15);
    root.add(lock);
    const pivot = lock.userData.pivot;

    // the price tag and the little FREE sticker
    const tag = makeLabel('€0', PAL.yellow);
    tag.scale.setScalar(0.55);
    tag.position.set(0, 1.5, 0.5);
    root.add(tag);
    const freeTag = makeLabel('FREE', PAL.lime);
    freeTag.scale.setScalar(0.34);
    freeTag.position.set(1.85, 0.55, 0.4);
    freeTag.rotation.z = -0.12;
    root.add(freeTag);

    // a USB stick that hops along carrying the update
    const usb = usbStick();
    usb.position.set(-2.1, -1.1, 0.5);
    usb.scale.setScalar(0.7);
    root.add(usb);

    const LOOP = 7.2;
    W.freegift = {
      group,
      update(t, dt, reduce) {
        const lt = reduce ? 4.0 : t % LOOP;
        floaters.update(reduce ? 0 : t, 0.9);

        // the lock springs open
        const open = reduce ? 1 : easeOutBack(smooth(0.6, 1.15, lt)) * (1 - smooth(LOOP - 0.5, LOOP, lt));
        pivot.position.y = 0.58 + open * 0.42;
        pivot.rotation.z = open * 0.95;
        if (!reduce && lt > 0.6 && lt < 0.72) sfx.pop(560);
        lock.rotation.z = reduce ? 0 : Math.sin(t * 1.3) * 0.04;
        lock.position.y = -0.1 + (reduce ? 0 : Math.sin(t * 1.6) * 0.03);

        // a wave of "free" sweeps the wall of PCs after the lock opens
        const wave = reduce ? maxD + 1 : (lt - 1.1) * 2.6;
        minis.forEach((m) => {
          const k = clamp01(wave - m.userData.d);
          m.userData.scr.material.color.copy(m.userData.off).lerp(m.userData.on, k);
          const pop = reduce ? 1 : 0.9 + easeOutBack(k) * 0.1;
          m.scale.setScalar(pop);
          m.userData.scr.position.z = 0.045 + (reduce ? 0 : k * 0.02);
        });

        // the €0 tag pops up when the lock opens and floats
        const tagS = reduce ? 1 : easeOutBack(smooth(1.0, 1.5, lt)) * (1 - smooth(LOOP - 0.4, LOOP, lt));
        tag.scale.setScalar(Math.max(0.55 * tagS, 0.0001));
        tag.visible = tagS > 0.01;
        tag.position.y = 1.5 + (reduce ? 0 : Math.sin(t * 1.5) * 0.06);
        tag.rotation.z = reduce ? 0 : Math.sin(t * 1.1) * 0.05;
        const freeS = reduce ? 1 : easeOutBack(smooth(1.4, 1.9, lt)) * (1 - smooth(LOOP - 0.4, LOOP, lt));
        freeTag.scale.setScalar(Math.max(0.34 * freeS, 0.0001));
        freeTag.visible = freeS > 0.01;
        freeTag.position.y = 0.55 + (reduce ? 0 : Math.sin(t * 1.8 + 1) * 0.05);

        // the USB stick hops across the front, carrying the update
        const hop = reduce ? 0.5 : (smooth(1.6, 4.6, lt));
        usb.position.x = lerp(-2.1, 2.1, hop);
        usb.position.y = -1.1 + (reduce ? 0 : Math.abs(Math.sin(hop * Math.PI * 4)) * 0.3);
        usb.rotation.z = reduce ? 0 : Math.sin(t * 6) * 0.15;
        usb.visible = hop > 0.01 && hop < 0.99;
      },
    };
  }
}
