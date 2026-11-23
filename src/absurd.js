// The toys of the party modes (nothing here runs in normal mode):
//   hold the mouse on an empty spot  a black hole sucks the page into the pointer; let go and it all springs back
//   hold R  rewind the page like a VHS tape
//   press → or PageDown at the very end  a wormhole throws you back to the top
import { sfx } from './kit.js';

const PAL = ['#FF9ECF', '#7CC8FF', '#C8EE5A', '#B7A3FF', '#FF8F8F', '#FFE14D', '#2FBF71', '#3D7BFF', '#FF7A1A'];
const BODY_SEL = '.hero h1 .l, .hero .lead, .hero .actions .btn, .hero .byline, .card, .logo, .links a, #soundBtn, #motionBtn, #tourBtn, .marquee';
const EMPTY_SKIP = 'a,button,input,label,select,textarea,.card,.marquee,.nav,.foot,.tourbar,.hero-copy,.osv,.fleet';

export function initAbsurd(stage, { reduceMotion, mode = () => 0 }) {
  if (reduceMotion) return { get busy() { return false; } };
  const html = document.documentElement;
  let px = innerWidth / 2, py = innerHeight / 2;
  window.addEventListener('pointermove', (e) => { px = e.clientX; py = e.clientY; }, { passive: true });

  const visibleBodies = () => {
    const vw = innerWidth, vh = innerHeight;
    const els = [...document.querySelectorAll(BODY_SEL)].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 2 && r.height > 2 && r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw && getComputedStyle(el).visibility !== 'hidden';
    });
    const set = new Set(els);
    return els.filter((el) => { for (let p = el.parentElement; p; p = p.parentElement) if (set.has(p)) return false; return true; })
      .map((el) => {
        const r = el.getBoundingClientRect();
        return { el, hx: r.left + r.width / 2, hy: r.top + r.height / 2, x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height,
          vx: 0, vy: 0, a: 0, va: 0, s: 1, m: Math.max(200, r.width * r.height), big: r.width * r.height > 20000 };
      });
  };
  const paint = (b) => {
    b.el.style.translate = `${(b.x - b.hx).toFixed(1)}px ${(b.y - b.hy).toFixed(1)}px`;
    b.el.style.rotate = `${b.a.toFixed(1)}deg`;
    b.el.style.scale = b.s === 1 ? '' : b.s.toFixed(3);
  };
  const unpaint = (b) => { b.el.style.translate = b.el.style.rotate = b.el.style.scale = ''; b.el.classList.remove('flying'); };
  const flyingNow = () => html.classList.toggle('flying', hole.on);

  // ======================= black hole =======================
  const hole = { on: false, armed: 0, t: 0, backT: 0, x: 0, y: 0, bodies: [], back: false };
  window.addEventListener('pointerdown', (e) => {
    if (mode() < 1 || e.pointerType !== 'mouse' || e.button !== 0 || hole.on || html.classList.contains('osv-lock')) return;
    if (e.target.closest?.(EMPTY_SKIP)) return;
    const x = e.clientX, y = e.clientY;
    clearTimeout(hole.armed);
    hole.armed = setTimeout(() => {
      hole.on = true;
      hole.back = false;
      hole.t = 0;
      hole.x = x; hole.y = y;
      hole.bodies = visibleBodies();
      hole.bodies.forEach((b) => { b.el.classList.add('flying'); b.d = Math.hypot(b.hx - x, b.hy - y); b.spin = Math.random() < 0.5 ? -1 : 1; });
      flyingNow();
      stage?.setHole?.(x, y, 1);
      sfx.whoosh();
      run();
    }, 420);
  });
  window.addEventListener('pointermove', () => {
    if (hole.on && !hole.back) { hole.x = px; hole.y = py; stage?.setHole?.(px, py, 1); }
  }, { passive: true });
  const releaseHole = () => {
    clearTimeout(hole.armed);
    if (!hole.on || hole.back) return;
    hole.back = true;
    hole.backT = performance.now();
    stage?.setHole?.(hole.x, hole.y, 0);
    stage?.burstAt?.(hole.x, hole.y, true);
    sfx.tada();
    for (const b of hole.bodies) { b.vx = (Math.random() - 0.5) * 900; b.vy = (Math.random() - 0.5) * 900; b.va = b.spin * 900; }
  };
  window.addEventListener('pointerup', releaseHole);
  window.addEventListener('pointercancel', releaseHole);
  window.addEventListener('blur', releaseHole);

  function stepHole(dt) {
    if (!hole.back) {
      hole.t += dt;
      const s = Math.min(1, hole.t / 1.6);
      for (const b of hole.bodies) {
        const near = Math.max(0, 1 - b.d / (Math.hypot(innerWidth, innerHeight) * 0.9));
        const k = Math.min(1, s * (0.35 + near * 1.2));
        const e = k * k * (3 - 2 * k);
        // spiral in: the pull grows, the angle around the hole winds up
        const ang = e * b.spin * (2.5 + near * 4);
        const ox = b.hx - hole.x, oy = b.hy - hole.y;
        const c = Math.cos(ang), sn = Math.sin(ang), shrink = 1 - e * 0.94;
        b.x = hole.x + (ox * c - oy * sn) * shrink;
        b.y = hole.y + (ox * sn + oy * c) * shrink;
        b.a = e * b.spin * 540;
        b.s = Math.max(0.04, 1 - e * 0.96);
        paint(b);
      }
      return;
    }
    const late = performance.now() - hole.backT > 2200;
    let done = late;
    for (const b of hole.bodies) {
      b.vx += ((b.hx - b.x) * 90 - b.vx * 9) * dt;
      b.vy += ((b.hy - b.y) * 90 - b.vy * 9) * dt;
      b.va += ((0 - b.a) * 90 - b.va * 9) * dt;
      b.x += b.vx * dt; b.y += b.vy * dt; b.a += b.va * dt;
      b.s += (1 - b.s) * Math.min(1, 9 * dt);
      if (!late && (Math.abs(b.x - b.hx) + Math.abs(b.y - b.hy) > 0.6 || Math.abs(b.a) > 0.5 || Math.abs(b.vx) + Math.abs(b.vy) > 5 || Math.abs(1 - b.s) > 0.004)) done = false;
      paint(b);
    }
    if (done) { hole.bodies.forEach(unpaint); hole.bodies = []; hole.on = hole.back = false; flyingNow(); }
  }

  // ======================= R: rewind =======================
  const vhs = { on: false, v: 0 };
  window.addEventListener('keydown', (e) => {
    if ((e.key === 'r' || e.key === 'R') && mode() >= 1 && !e.metaKey && !e.ctrlKey && !e.altKey && !e.target.closest?.('input,textarea,select,[contenteditable]') && !html.classList.contains('osv-lock')) {
      if (!vhs.on) { vhs.on = true; vhs.v = 0; stage?.setVhs?.(1); sfx.whoosh(); html.style.scrollBehavior = 'auto'; run(); }
      e.preventDefault();
    }
  });
  window.addEventListener('keyup', (e) => {
    if ((e.key === 'r' || e.key === 'R') && vhs.on) { vhs.on = false; stage?.setVhs?.(0); html.style.scrollBehavior = ''; }
  });

  // ======================= the end loops back to the top (party modes, keyboard only) =======================
  const atBottom = () => window.scrollY + innerHeight >= document.documentElement.scrollHeight - 3;
  const loopBack = () => stage?.warp?.(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
  window.addEventListener('keydown', (e) => {
    if (mode() >= 1 && (e.key === 'PageDown' || e.key === 'ArrowRight') && atBottom() && !html.classList.contains('osv-lock') && !e.target.closest?.('input,textarea,select,[contenteditable]')) {
      e.preventDefault(); // the section-stepping keys would otherwise pull the page back to the last stop
      loopBack();
    }
  });

  // ======================= one loop, running only while a toy is on =======================
  let last = performance.now(), running = false;
  function run() { if (!running) { running = true; last = performance.now(); requestAnimationFrame(loop); } }
  function loop(now) {
    const dt = Math.min(0.1, Math.max(0.001, (now - last) / 1000));
    last = now;
    const n = Math.min(6, Math.ceil(dt / 0.017)), h = dt / n;
    for (let k = 0; k < n; k++) if (hole.on) stepHole(h);
    if (vhs.on) {
      vhs.v = Math.min(2400, vhs.v + dt * 3600);
      if (window.scrollY > 0) window.scrollBy(0, -vhs.v * dt);
    }
    if (hole.on || vhs.on) requestAnimationFrame(loop);
    else running = false;
  }
  return { get busy() { return hole.on; } };
}
