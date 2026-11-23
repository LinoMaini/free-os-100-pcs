// The 1000x layer: synthesised sound and a beat, click bursts, P to cycle normal → party → chaos,
// magnetic jelly letters in the title, a page that wobbles with the scroll, a sticker trail behind the pointer,
// a second marquee, cards that flip in and tilt toward the pointer, and a cursor blob.
import { sfx } from './kit.js';
import { initViewer } from './viewer.js';
import { perf } from './perf.js';
import { initAbsurd } from './absurd.js';

const PAL = ['#FF9ECF', '#7CC8FF', '#C8EE5A', '#B7A3FF', '#FF8F8F', '#FFFFFF', '#2FBF71', '#3D7BFF', '#FF7A1A'];

export function initCrazy(stage, { reduceMotion }) {
  const fine = window.matchMedia('(pointer: fine)').matches;
  let mode = 0; // 0 normal, 1 party, 2 chaos, 3 absurd (chaos + kaleidoscope)
  const viewer = initViewer(stage, { reduceMotion });
  initAbsurd(stage, { reduceMotion });

  // ---------- sound: off until the visitor turns it on ----------
  const audio = { ctx: null, on: false, noise: null, out: null };
  const ac = () => {
    if (!audio.ctx) {
      const c = (audio.ctx = new (window.AudioContext || window.webkitAudioContext)());
      audio.out = c.createGain();
      audio.out.gain.value = 0.8;
      audio.out.connect(c.destination);
      audio.noise = c.createBuffer(1, c.sampleRate, c.sampleRate);
      const d = audio.noise.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    return audio.ctx;
  };
  const env = (g, t, attack, peak, dur) => {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  };
  const tone = (type, f0, f1, t, dur, peak) => {
    const c = ac(), o = c.createOscillator(), g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1) o.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.6);
    env(g, t, 0.004, peak, dur);
    o.connect(g).connect(audio.out);
    o.start(t);
    o.stop(t + dur + 0.05);
  };
  const noise = (t, dur, peak, type, freq, q = 1) => {
    const c = ac(), s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = audio.noise;
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    env(g, t, 0.003, peak, dur);
    s.connect(f).connect(g).connect(audio.out);
    s.start(t, Math.random() * 0.5);
    s.stop(t + dur + 0.05);
    return f;
  };
  sfx.pop = (f = 520) => { if (audio.on) tone('triangle', f * 1.8, f, ac().currentTime, 0.16, 0.22); };
  sfx.whoosh = () => {
    if (!audio.on) return;
    const t = ac().currentTime, f = noise(t, 0.7, 0.35, 'bandpass', 300, 1.2);
    f.frequency.setValueAtTime(300, t);
    f.frequency.exponentialRampToValueAtTime(3200, t + 0.5);
  };
  sfx.tada = () => {
    if (!audio.on) return;
    const t = ac().currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((fr, i) => tone('square', fr, 0, t + i * 0.07, 0.5, 0.07));
  };
  const scratch = () => {
    const t = ac().currentTime, f = noise(t, 0.18, 0.3, 'bandpass', 900, 4);
    f.frequency.setValueAtTime(400, t);
    f.frequency.linearRampToValueAtTime(2400, t + 0.06);
    f.frequency.linearRampToValueAtTime(500, t + 0.16);
  };

  // a 124 bpm groove for party and chaos mode
  const BPM = 124, STEP = 60 / BPM / 4;
  const SCALE = [0, 3, 5, 7, 10, 12, 15, 17];
  const BASS = [0, 0, 3, 0, 5, 3, 2, 1, 0, 0, 3, 0, 6, 5, 3, 2];
  const beat = { on: false, next: 0, step: 0, start: 0, timer: 0 };
  const playStep = (s, t) => {
    if (s % 4 === 0) tone('sine', 150, 42, t, 0.28, 0.9);
    if (s % 8 === 4) { noise(t, 0.16, 0.32, 'bandpass', 1800, 0.8); tone('triangle', 200, 120, t, 0.1, 0.15); }
    if (s % 2 === 1) noise(t, 0.05, s % 4 === 3 ? 0.08 : 0.045, 'highpass', 7000);
    if (s % 2 === 0) tone('sawtooth', 55 * 2 ** (SCALE[BASS[(s / 2) % 16]] / 12), 0, t, 0.17, mode >= 2 ? 0.12 : 0.08);
    if (mode >= 2 && s % 4 === 2) tone('square', 440 * 2 ** (SCALE[(s * 3) % 8] / 12), 0, t, 0.09, 0.04);
  };
  const schedule = () => {
    const c = ac();
    while (beat.next < c.currentTime + 0.12) {
      playStep(beat.step, beat.next);
      beat.next += STEP;
      beat.step = (beat.step + 1) % 32;
    }
  };
  const syncBeat = () => {
    const want = audio.on && mode > 0;
    if (want && !beat.on) {
      const c = ac();
      beat.on = true;
      beat.step = 0;
      beat.start = beat.next = c.currentTime + 0.06;
      beat.timer = setInterval(schedule, 25);
    }
    if (!want && beat.on) { beat.on = false; clearInterval(beat.timer); }
  };
  sfx.beat = () => (beat.on ? ((audio.ctx.currentTime - beat.start) * BPM / 60) % 1 : -1);

  const soundBtn = document.getElementById('soundBtn');
  soundBtn?.addEventListener('click', () => {
    audio.on = !audio.on;
    soundBtn.setAttribute('aria-pressed', String(audio.on));
    if (audio.on) { ac().resume(); sfx.pop(720); }
    syncBeat();
  });

  // ---------- P cycles normal → party → chaos → normal ----------
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'p' && e.key !== 'P') return;
    if (e.metaKey || e.ctrlKey || e.altKey || e.target.closest?.('input,textarea,select')) return;
    mode = (mode + 1) % 4;
    document.body.classList.toggle('party', mode >= 1);
    document.body.classList.toggle('chaos', mode >= 2);
    document.body.classList.toggle('absurd', mode === 3);
    stage?.setParty(mode >= 1);
    stage?.setChaos?.(mode >= 2);
    stage?.setKaleido?.(mode === 3);
    if (mode) sfx.tada();
    syncBeat();
  });

  // ---------- click an empty spot: cubes explode out of it, with a shockwave ----------
  window.addEventListener('pointerdown', (e) => {
    if (!stage || e.button !== 0 || viewer.isOpen) return;
    if (e.target.closest?.('a,button,input,label,select,textarea,.card,.marquee,.nav,.foot,.tourbar,.hero-copy,.osv')) return;
    const os = stage.pickOs?.(e.clientX, e.clientY);
    if (os) { viewer.open(os, stage.osScreenRect(os)); return; }
    if (reduceMotion) return;
    stage.burstAt(e.clientX, e.clientY);
    sfx.pop(240 + Math.random() * 420);
  });

  // ---------- the title: words pop in, then every letter is a jelly magnet ----------
  const h1 = document.querySelector('.hero h1');
  let letters = [];
  if (h1 && !reduceMotion) {
    const text = h1.textContent.trim();
    const esc = (s) => s.replace(/[&<>]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch]));
    h1.setAttribute('aria-label', text);
    h1.innerHTML = text.split(/\s+/)
      .map((w, wi) => `<span class="w" aria-hidden="true" style="--i:${wi}">${[...w].map((ch) => `<span class="l">${esc(ch)}</span>`).join('')}</span>`)
      .join(' ');
    letters = [...h1.querySelectorAll('.l')].map((el, i) => ({ el, i, bx: 0, by: 0, x: 0, y: 0, r: 0, s: 1, vx: 0, vy: 0, vr: 0, vs: 0, col: '' }));
    const measureLetters = () => {
      for (const L of letters) {
        const keep = L.el.style.transform;
        L.el.style.transform = 'none';
        const r = L.el.getBoundingClientRect();
        L.bx = r.left + r.width / 2 + window.scrollX;
        L.by = r.top + r.height / 2 + window.scrollY;
        L.el.style.transform = keep;
      }
    };
    setTimeout(measureLetters, 1700);
    window.addEventListener('resize', measureLetters);
    document.fonts?.ready.then(() => setTimeout(measureLetters, 120));
    h1.addEventListener('pointerdown', () => {
      for (const L of letters) {
        L.vx += (Math.random() - 0.5) * 1400;
        L.vy += -300 - Math.random() * 900;
        L.vr += (Math.random() - 0.5) * 1500;
      }
      sfx.pop(300);
    });
  }

  // ---------- cards flip onto the page as they arrive, then tilt toward the pointer ----------
  const cards = [...document.querySelectorAll('.card')];
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }, { threshold: 0.12 });
  cards.forEach((c) => io.observe(c));
  if (fine && !reduceMotion) {
    cards.forEach((card) => {
      if (card.querySelector('input')) return;
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(1100px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  // ---------- a second marquee running the other way ----------
  const marquee = document.querySelector('.marquee');
  const marquees = marquee ? [marquee] : [];
  if (marquee && !reduceMotion) {
    const m2 = marquee.cloneNode(true);
    m2.classList.add('rev');
    marquee.after(m2);
    marquees.push(m2);
  }

  // ---------- a trail of little stickers behind the pointer ----------
  let tctx = null, parts = [], lastPx = -99, lastPy = -99, drawn = false;
  if (false) { // the sticker trail is switched off in this copy
    const trail = document.createElement('canvas');
    trail.id = 'trail';
    trail.setAttribute('aria-hidden', 'true');
    document.body.appendChild(trail);
    tctx = trail.getContext('2d');
    const size = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      trail.width = window.innerWidth * d;
      trail.height = window.innerHeight * d;
      tctx.setTransform(d, 0, 0, d, 0, 0);
    };
    size();
    window.addEventListener('resize', size);
  }
  const star = (g, s) => {
    g.moveTo(0, -s);
    for (let k = 1; k < 10; k++) { const a = -Math.PI / 2 + (k * Math.PI) / 5, r = k % 2 ? s * 0.45 : s; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
    g.closePath();
  };

  // ---------- pointer tracking: blob, letters, trail ----------
  const blob = document.getElementById('blob');
  const useBlob = fine && !reduceMotion && blob;
  let bx = -100, by = -100, tx = -9999, ty = -9999, bs = 1, big = false;
  let lastPick = 0;
  window.addEventListener('pointermove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    const nowMs = performance.now();
    if (stage && nowMs - lastPick > 90) {
      lastPick = nowMs;
      const os = viewer.isOpen || e.target.closest?.('a,button,input,label,.card,.marquee,.nav,.foot,.tourbar,.hero-copy,.osv') ? null : stage.pickOs?.(tx, ty);
      document.body.classList.toggle('os-hover', !!os);
      stage.hoverOs?.(os);
    }
    big = !!e.target.closest?.('a,button,input,label,.tag,.chip');
    if (tctx && perf.level < 3 && Math.hypot(tx - lastPx, ty - lastPy) > 7) {
      lastPx = tx;
      lastPy = ty;
      for (let k = 0; k < (mode >= 2 ? 3 : 1); k++) {
        parts.push({ x: tx, y: ty, vx: (Math.random() - 0.5) * 140, vy: (Math.random() - 0.5) * 140 - 50, r: Math.random() * 6, vr: (Math.random() - 0.5) * 8,
          s: 6 + Math.random() * 9, life: 0.75, kind: Math.floor(Math.random() * 3), c: PAL[Math.floor(Math.random() * PAL.length)] });
      }
      if (parts.length > 260) parts.splice(0, parts.length - 260);
    }
  }, { passive: true });

  // ---------- one loop for everything that follows the pointer or the scroll ----------
  const secs = [...document.querySelectorAll('[data-scene]')];
  let lastY = window.scrollY, v = 0, last = performance.now(), skew = 0, skewV = 0, lastSkew = '', lastScratch = 0, lastRate = 0;
  const loop = (now) => {
    const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
    last = now;
    const t = now / 1000;
    v += ((window.scrollY - lastY) / dt - v) * 0.15;
    lastY = window.scrollY;
    if (!reduceMotion) {
      if (now - lastRate > 100) {
        lastRate = now;
        const rate = 1 + Math.min(5, Math.abs(v) / 400) + (mode >= 2 ? 2 : 0);
        marquees.forEach((m, k) => m.getAnimations?.({ subtree: true }).forEach((a) => { a.playbackRate = rate * (k ? 1.3 : 1); }));
      }
      // the whole page wobbles like jelly with the scroll speed (not on slow graphics, where it costs too much)
      const target = perf.level >= 2 ? 0 : Math.max(-9, Math.min(9, v * 0.0028)) + (mode >= 2 ? Math.sin(t * 7) * 2.5 : 0);
      skewV += ((target - skew) * 90 - skewV * 11) * dt;
      skew += skewV * dt;
      const sv = Math.abs(skew) < 0.02 ? '' : `skewY(${skew.toFixed(2)}deg)`;
      if (sv !== lastSkew) { lastSkew = sv; for (const s of secs) s.style.transform = sv; }
      if (audio.on && Math.abs(v) > 2600 && now - lastScratch > 300) { lastScratch = now; scratch(); }
    }
    if (letters.length && window.scrollY < window.innerHeight * 1.3) {
      for (const L of letters) {
        const dx = L.bx - window.scrollX - tx, dy = L.by - window.scrollY - ty, dist = Math.hypot(dx, dy) || 1;
        const f = Math.max(0, 1 - dist / 170);
        const gx = (dx / dist) * f * 42;
        const gy = (dy / dist) * f * 42 + Math.sin(t * 3 + L.i * 0.55) * (mode >= 2 ? 12 : 4);
        const gr = f * Math.sign(dx) * 28 + Math.sin(t * 2 + L.i) * (mode >= 2 ? 12 : 2);
        const gs = 1 + f * 0.4;
        L.vx += ((gx - L.x) * 160 - L.vx * 13) * dt; L.x += L.vx * dt;
        L.vy += ((gy - L.y) * 160 - L.vy * 13) * dt; L.y += L.vy * dt;
        L.vr += ((gr - L.r) * 160 - L.vr * 13) * dt; L.r += L.vr * dt;
        L.vs += ((gs - L.s) * 160 - L.vs * 13) * dt; L.s += L.vs * dt;
        L.el.style.transform = `translate(${L.x.toFixed(1)}px,${L.y.toFixed(1)}px) rotate(${L.r.toFixed(1)}deg) scale(${L.s.toFixed(3)})`;
        const col = f > 0.25 || mode >= 2 ? PAL[(L.i + (mode >= 2 ? Math.floor(t * 7) : 0)) % PAL.length] : '';
        if (col !== L.col) { L.col = col; L.el.style.color = col; L.el.classList.toggle('lit', !!col); }
      }
    }
    if (tctx && (parts.length || drawn)) {
      tctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of parts) {
        p.life -= dt;
        p.vy += 260 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.r += p.vr * dt;
        const s = p.s * (0.4 + 0.6 * Math.max(0, p.life / 0.75));
        tctx.save();
        tctx.translate(p.x, p.y);
        tctx.rotate(p.r);
        tctx.beginPath();
        if (p.kind === 0) tctx.arc(0, 0, s, 0, Math.PI * 2);
        else if (p.kind === 1) tctx.rect(-s, -s, s * 2, s * 2);
        else star(tctx, s * 1.3);
        tctx.fillStyle = p.c;
        tctx.lineWidth = 2;
        tctx.strokeStyle = '#000';
        tctx.fill();
        tctx.stroke();
        tctx.restore();
      }
      parts = parts.filter((p) => p.life > 0);
      drawn = parts.length > 0;
    }
    if (useBlob) {
      bx += (tx - bx) * 0.22;
      by += (ty - by) * 0.22;
      bs += ((big ? 2.2 : 1) - bs) * 0.2;
      blob.style.transform = `translate(${bx.toFixed(1)}px,${by.toFixed(1)}px) translate(-50%,-50%) scale(${bs.toFixed(3)})`;
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}
