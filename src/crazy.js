// The extra-crazy layer: synthesised sound, click bursts, party mode (P), words that pop in,
// cards that slap onto the page and tilt toward the pointer, a trailing cursor blob and a marquee that speeds up with the scroll.
import { sfx } from './kit.js';

export function initCrazy(stage, { reduceMotion }) {
  const fine = window.matchMedia('(pointer: fine)').matches;

  // ---------- sound: off until the visitor turns it on ----------
  const audio = { ctx: null, on: false, noise: null };
  const ac = () => {
    if (!audio.ctx) {
      audio.ctx = new (window.AudioContext || window.webkitAudioContext)();
      const len = audio.ctx.sampleRate;
      audio.noise = audio.ctx.createBuffer(1, len, len);
      const d = audio.noise.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    }
    return audio.ctx;
  };
  const env = (g, t, attack, peak, dur) => {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  };
  sfx.pop = (f = 520) => {
    if (!audio.on) return;
    const c = ac(), t = c.currentTime, o = c.createOscillator(), g = c.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(f * 1.8, t);
    o.frequency.exponentialRampToValueAtTime(f, t + 0.09);
    env(g, t, 0.005, 0.22, 0.16);
    o.connect(g).connect(c.destination);
    o.start(t);
    o.stop(t + 0.2);
  };
  sfx.whoosh = () => {
    if (!audio.on) return;
    const c = ac(), t = c.currentTime, s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = audio.noise;
    f.type = 'bandpass';
    f.Q.value = 1.2;
    f.frequency.setValueAtTime(300, t);
    f.frequency.exponentialRampToValueAtTime(3200, t + 0.5);
    env(g, t, 0.08, 0.35, 0.7);
    s.connect(f).connect(g).connect(c.destination);
    s.start(t);
    s.stop(t + 0.75);
  };
  sfx.tada = () => {
    if (!audio.on) return;
    const c = ac(), t = c.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((fr, i) => {
      const o = c.createOscillator(), g = c.createGain();
      o.type = 'square';
      o.frequency.value = fr;
      env(g, t + i * 0.07, 0.01, 0.07, 0.5 + i * 0.05);
      o.connect(g).connect(c.destination);
      o.start(t + i * 0.07);
      o.stop(t + 0.9);
    });
  };
  const soundBtn = document.getElementById('soundBtn');
  soundBtn?.addEventListener('click', () => {
    audio.on = !audio.on;
    soundBtn.setAttribute('aria-pressed', String(audio.on));
    if (audio.on) { ac().resume(); sfx.pop(720); }
  });

  // ---------- click an empty spot: cubes explode out of it ----------
  window.addEventListener('pointerdown', (e) => {
    if (!stage || reduceMotion || e.button !== 0) return;
    if (e.target.closest?.('a,button,input,label,select,textarea,.card,.marquee,.nav,.foot,.tourbar,.hero-copy')) return;
    stage.burstAt(e.clientX, e.clientY);
    sfx.pop(240 + Math.random() * 420);
  });

  // ---------- party mode: press P ----------
  let party = false;
  window.addEventListener('keydown', (e) => {
    if (e.key !== 'p' && e.key !== 'P') return;
    if (e.metaKey || e.ctrlKey || e.altKey || e.target.closest?.('input,textarea,select')) return;
    party = !party;
    document.body.classList.toggle('party', party);
    stage?.setParty(party);
    if (party) sfx.tada();
  });

  // ---------- the hero title pops in word by word ----------
  const h1 = document.querySelector('.hero h1');
  if (h1 && !reduceMotion) {
    const esc = (s) => s.replace(/[&<>]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[ch]));
    h1.innerHTML = h1.textContent.trim().split(/\s+/).map((w, i) => `<span class="w" style="--i:${i}">${esc(w)}</span>`).join(' ');
  }

  // ---------- cards slap onto the page as they arrive, then tilt toward the pointer ----------
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

  // ---------- a blob trails the pointer; the marquee speeds up with the scroll ----------
  const blob = document.getElementById('blob');
  const useBlob = fine && !reduceMotion && blob;
  let bx = -100, by = -100, tx = -100, ty = -100, bs = 1, big = false;
  if (useBlob) {
    window.addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; big = !!e.target.closest?.('a,button,input,label,.tag,.chip'); }, { passive: true });
  }
  const marquee = document.querySelector('.marquee');
  let lastY = window.scrollY, v = 0, last = performance.now();
  const loop = (now) => {
    const dt = Math.max(0.001, (now - last) / 1000);
    last = now;
    v += ((window.scrollY - lastY) / dt - v) * 0.15;
    lastY = window.scrollY;
    if (marquee && !reduceMotion) {
      const rate = 1 + Math.min(5, Math.abs(v) / 400);
      marquee.getAnimations?.({ subtree: true }).forEach((a) => { a.playbackRate = rate; });
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
