// The fun layer: synthesised sound and a beat, and the party modes (the button with the popper, or P):
// normal → party → chaos → kaleidoscope → normal. In normal mode nothing starts on its own: no wobbling page,
// no black hole, no glitches; clicks make cubes burst (mouse only), and the 3D desktops open on a click or a tap.
import { sfx } from './kit.js';
import { initViewer } from './viewer.js';
import { initAbsurd } from './absurd.js';

const MODES = [
  { name: 'Party’s over', hint: '' },
  { name: 'Party mode', hint: 'Hold the mouse for a black hole, R to rewind' },
  { name: 'Chaos mode', hint: 'Everything at once' },
  { name: 'Kaleidoscope', hint: 'Press P or the popper to stop' },
];

export function initCrazy(stage, { reduceMotion }) {
  const fine = window.matchMedia('(pointer: fine)').matches;
  let mode = 0; // 0 normal, 1 party, 2 chaos, 3 kaleidoscope
  const viewer = initViewer(stage, { reduceMotion });
  // the tour hands over to the next speaker: a desktop left open for a demo closes
  window.addEventListener('tour:handover', () => { if (viewer.isOpen) viewer.close(); });
  initAbsurd(stage, { reduceMotion, mode: () => mode });

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

  // a 124 bpm groove for the party modes
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

  // ---------- party modes: the popper button or P ----------
  const partyBtn = document.getElementById('partyBtn');
  const toast = document.getElementById('modeToast');
  let toastTimer = 0;
  const setMode = (m) => {
    mode = (m + MODES.length) % MODES.length;
    document.body.classList.toggle('party', mode >= 1);
    document.body.classList.toggle('chaos', mode >= 2);
    document.body.classList.toggle('absurd', mode === 3);
    stage?.setParty(mode >= 1);
    stage?.setChaos?.(mode >= 2);
    stage?.setKaleido?.(mode === 3);
    partyBtn?.setAttribute('aria-pressed', String(mode > 0));
    partyBtn?.setAttribute('aria-label', mode ? `${MODES[mode].name}: press for the next mode` : 'Party mode');
    if (partyBtn) partyBtn.dataset.mode = String(mode);
    if (mode) sfx.tada();
    syncBeat();
    if (toast) {
      toast.innerHTML = `<b>${MODES[mode].name}</b>${MODES[mode].hint ? `<span>${MODES[mode].hint}</span>` : ''}`;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 1900);
    }
  };
  partyBtn?.addEventListener('click', () => setMode(mode + 1));
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'p' && e.key !== 'P') return;
    if (e.metaKey || e.ctrlKey || e.altKey || e.target.closest?.('input,textarea,select,[contenteditable]') || document.documentElement.classList.contains('osv-lock')) return;
    setMode(mode + 1);
  });

  // ---------- a click (never a scroll gesture): open a 3D desktop, or cubes burst out of an empty spot ----------
  const SKIP = 'a,button,input,label,select,textarea,.card,.marquee,.nav,.foot,.tourbar,.hero-copy,.osv,#modeToast,.fleet';
  let downType = 'mouse';
  window.addEventListener('pointerdown', (e) => { downType = e.pointerType || 'mouse'; }, { passive: true });
  window.addEventListener('click', (e) => {
    if (!stage || viewer.isOpen || e.button !== 0) return;
    if (e.target.closest?.(SKIP)) return;
    const os = stage.pickOs?.(e.clientX, e.clientY);
    if (os) { viewer.open(os, stage.osScreenRect(os)); return; }
    if (reduceMotion) return;
    // on a touch screen a tap is for reading and scrolling: the cubes only come out in party mode
    if (downType !== 'mouse' && mode === 0) return;
    stage.burstAt(e.clientX, e.clientY, mode > 0);
    sfx.pop(240 + Math.random() * 420);
  });

  // ---------- the title: words pop in (CSS); in party mode the letters dance ----------
  const h1 = document.querySelector('.hero h1');
  if (h1 && !reduceMotion) {
    const text = h1.textContent.trim();
    const esc = (s) => s.replace(/[&<>]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch]));
    let j = 0;
    h1.setAttribute('aria-label', text);
    h1.innerHTML = text.split(/\s+/)
      .map((w, wi) => `<span class="w" aria-hidden="true" style="--i:${wi}">${[...w].map((ch) => `<span class="l" style="--j:${j++}">${esc(ch)}</span>`).join('')}</span>`)
      .join(' ');
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
  if (marquee && !reduceMotion) {
    const m2 = marquee.cloneNode(true);
    m2.classList.add('rev');
    m2.setAttribute('aria-hidden', 'true');
    marquee.after(m2);
  }

  // ---------- hovering a 3D desktop shows the hand cursor ----------
  let lastPick = 0;
  if (fine) {
    window.addEventListener('pointermove', (e) => {
      const nowMs = performance.now();
      if (!stage || nowMs - lastPick < 120) return;
      lastPick = nowMs;
      const os = viewer.isOpen || e.target.closest?.(SKIP) ? null : stage.pickOs?.(e.clientX, e.clientY);
      document.body.classList.toggle('os-hover', !!os);
      stage.hoverOs?.(os);
    }, { passive: true });
  }

  // ---------- the progress stick: the USB stick from the tutorial rides along the top as you scroll ----------
  const prog = document.getElementById('progress');
  if (prog) {
    const fill = prog.querySelector('.pg-fill'), stick = prog.querySelector('.pg-stick');
    let queued = false;
    const paint = () => {
      queued = false;
      if (prog.dataset.mode === 'timer') return; // during the tour the stick is the speakers' clock (main.js)
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      fill.style.transform = `scaleX(${p.toFixed(4)})`;
      stick.style.transform = `translateX(${(p * (prog.clientWidth - 42)).toFixed(1)}px)`;
    };
    const queue = () => { if (!queued) { queued = true; requestAnimationFrame(paint); } };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    paint();
  }
}
