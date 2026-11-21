// Drawings of the three desktops, one canvas per layer, so the 3D stage can assemble them and take them apart.
// Layouts follow each system's default desktop; icons are generic drawings, no product logos.
export const UI_W = 1280, UI_H = 800;
const SANS = '"Helvetica Neue", Helvetica, Arial, "DejaVu Sans", sans-serif';

const mk = (w, h) => {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
};
function rr(g, x, y, w, h, r) {
  const q = Math.min(r, w / 2, h / 2);
  g.beginPath();
  g.moveTo(x + q, y);
  g.arcTo(x + w, y, x + w, y + h, q);
  g.arcTo(x + w, y + h, x, y + h, q);
  g.arcTo(x, y + h, x, y, q);
  g.arcTo(x, y, x + w, y, q);
  g.closePath();
}
function txt(g, s, x, y, size, color, weight = 400, align = 'left') {
  g.font = `${weight} ${size}px ${SANS}`;
  g.fillStyle = color;
  g.textAlign = align;
  g.textBaseline = 'middle';
  g.fillText(s, x, y);
}
function label(g, s, x, y, size = 15) {
  g.save();
  g.shadowColor = 'rgba(0,0,0,.75)';
  g.shadowBlur = 5;
  g.shadowOffsetY = 1;
  txt(g, s, x, y, size, '#fff', 600, 'center');
  g.restore();
}
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => Math.round(amt < 0 ? v * (1 + amt) : v + (255 - v) * amt);
  return `rgb(${f((n >> 16) & 255)},${f((n >> 8) & 255)},${f(n & 255)})`;
}
function stroke(g, color, w) {
  g.strokeStyle = color;
  g.lineWidth = w;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.stroke();
}

// ---------- glyphs, drawn in a box of size s centred on (x, y) ----------
const G = {
  folder(g, x, y, s, c = '#7EBA4A') {
    const w = s, h = s * 0.78, l = x - w / 2, t = y - h / 2;
    g.fillStyle = shade(c, -0.22);
    rr(g, l, t, w * 0.46, h * 0.3, s * 0.07); g.fill();
    rr(g, l, t + h * 0.1, w, h * 0.9, s * 0.08); g.fill();
    g.fillStyle = c;
    rr(g, l, t + h * 0.24, w, h * 0.76, s * 0.08); g.fill();
    g.fillStyle = 'rgba(255,255,255,.18)';
    g.fillRect(l + s * 0.06, t + h * 0.3, w - s * 0.12, s * 0.04);
  },
  globe(g, x, y, s, c = '#2E86FF') {
    const r = s * 0.46;
    const gr = g.createLinearGradient(x, y - r, x, y + r);
    gr.addColorStop(0, shade(c, 0.25)); gr.addColorStop(1, shade(c, -0.25));
    g.fillStyle = gr;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.ellipse(x, y, r * 0.45, r, 0, 0, Math.PI * 2);
    g.moveTo(x - r, y); g.lineTo(x + r, y);
    g.moveTo(x - r * 0.86, y - r * 0.5); g.lineTo(x + r * 0.86, y - r * 0.5);
    g.moveTo(x - r * 0.86, y + r * 0.5); g.lineTo(x + r * 0.86, y + r * 0.5);
    stroke(g, 'rgba(255,255,255,.85)', Math.max(1.2, s * 0.045));
  },
  terminal(g, x, y, s) {
    const w = s * 0.92, h = s * 0.78;
    g.fillStyle = '#2b2b2b'; rr(g, x - w / 2, y - h / 2, w, h, s * 0.1); g.fill();
    g.fillStyle = '#4a4a4a'; rr(g, x - w / 2, y - h / 2, w, h * 0.2, s * 0.1); g.fill();
    txt(g, '>_', x - w * 0.32, y + h * 0.1, s * 0.34, '#7CFC8A', 700);
  },
  gear(g, x, y, s, c = '#8a96a3') {
    const r = s * 0.3;
    g.fillStyle = c;
    for (let i = 0; i < 8; i++) {
      g.save(); g.translate(x, y); g.rotate((i * Math.PI) / 4);
      g.fillRect(-s * 0.07, -r - s * 0.13, s * 0.14, s * 0.2); g.restore();
    }
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#fff'; g.beginPath(); g.arc(x, y, r * 0.42, 0, Math.PI * 2); g.fill();
  },
  doc(g, x, y, s, c = '#3D7BFF') {
    const w = s * 0.7, h = s * 0.9, l = x - w / 2, t = y - h / 2, f = s * 0.2;
    g.fillStyle = '#fff';
    g.beginPath(); g.moveTo(l, t); g.lineTo(l + w - f, t); g.lineTo(l + w, t + f); g.lineTo(l + w, t + h); g.lineTo(l, t + h); g.closePath(); g.fill();
    stroke(g, 'rgba(0,0,0,.25)', 1.5);
    g.fillStyle = c;
    for (let i = 0; i < 4; i++) g.fillRect(l + w * 0.15, t + h * (0.32 + i * 0.15), w * (i === 3 ? 0.45 : 0.7), Math.max(2, s * 0.045));
  },
  picture(g, x, y, s) {
    const w = s * 0.9, h = s * 0.72, l = x - w / 2, t = y - h / 2;
    g.fillStyle = '#6EC6FF'; rr(g, l, t, w, h, s * 0.08); g.fill();
    g.fillStyle = '#FFE14D'; g.beginPath(); g.arc(l + w * 0.72, t + h * 0.3, s * 0.1, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#3BAA5C';
    g.beginPath(); g.moveTo(l, t + h); g.lineTo(l + w * 0.35, t + h * 0.4); g.lineTo(l + w * 0.6, t + h * 0.75); g.lineTo(l + w * 0.75, t + h * 0.55); g.lineTo(l + w, t + h); g.closePath(); g.fill();
  },
  music(g, x, y, s, c = '#FF7A1A') {
    g.fillStyle = c; rr(g, x - s * 0.45, y - s * 0.45, s * 0.9, s * 0.9, s * 0.2); g.fill();
    g.fillStyle = '#fff';
    g.beginPath(); g.ellipse(x - s * 0.12, y + s * 0.18, s * 0.11, s * 0.08, -0.4, 0, Math.PI * 2); g.fill();
    g.fillRect(x - s * 0.03, y - s * 0.25, s * 0.06, s * 0.44);
    g.fillRect(x - s * 0.03, y - s * 0.25, s * 0.2, s * 0.07);
  },
  film(g, x, y, s, c = '#8E5CF7') {
    g.fillStyle = c; rr(g, x - s * 0.45, y - s * 0.45, s * 0.9, s * 0.9, s * 0.2); g.fill();
    g.fillStyle = '#fff';
    g.beginPath(); g.moveTo(x - s * 0.12, y - s * 0.2); g.lineTo(x + s * 0.22, y); g.lineTo(x - s * 0.12, y + s * 0.2); g.closePath(); g.fill();
  },
  trash(g, x, y, s) {
    g.fillStyle = '#c9ced6';
    g.beginPath(); g.moveTo(x - s * 0.3, y - s * 0.22); g.lineTo(x + s * 0.3, y - s * 0.22); g.lineTo(x + s * 0.24, y + s * 0.42); g.lineTo(x - s * 0.24, y + s * 0.42); g.closePath(); g.fill();
    g.fillStyle = '#9aa3ad'; rr(g, x - s * 0.36, y - s * 0.34, s * 0.72, s * 0.1, s * 0.03); g.fill();
    g.fillRect(x - s * 0.08, y - s * 0.42, s * 0.16, s * 0.08);
    g.fillStyle = 'rgba(0,0,0,.18)';
    for (const dx of [-0.12, 0, 0.12]) g.fillRect(x + dx * s - s * 0.02, y - s * 0.12, s * 0.04, s * 0.44);
  },
  monitor(g, x, y, s) {
    g.fillStyle = '#2b3440'; rr(g, x - s * 0.46, y - s * 0.38, s * 0.92, s * 0.6, s * 0.06); g.fill();
    const gr = g.createLinearGradient(x, y - s * 0.34, x, y + s * 0.18);
    gr.addColorStop(0, '#5CC8FF'); gr.addColorStop(1, '#2E6BFF');
    g.fillStyle = gr; g.fillRect(x - s * 0.41, y - s * 0.33, s * 0.82, s * 0.5);
    g.fillStyle = '#2b3440'; g.fillRect(x - s * 0.06, y + s * 0.22, s * 0.12, s * 0.12);
    rr(g, x - s * 0.22, y + s * 0.32, s * 0.44, s * 0.07, s * 0.03); g.fill();
  },
  bag(g, x, y, s, c = '#FF7A1A') {
    g.fillStyle = c;
    rr(g, x - s * 0.36, y - s * 0.18, s * 0.72, s * 0.6, s * 0.08); g.fill();
    g.beginPath(); g.arc(x, y - s * 0.18, s * 0.17, Math.PI, 0); stroke(g, c, s * 0.07);
    g.fillStyle = '#fff'; g.beginPath(); g.arc(x, y + s * 0.1, s * 0.09, 0, Math.PI * 2); g.fill();
  },
  book(g, x, y, s) {
    g.fillStyle = '#fff';
    g.beginPath(); g.moveTo(x, y - s * 0.22); g.quadraticCurveTo(x - s * 0.2, y - s * 0.32, x - s * 0.4, y - s * 0.26); g.lineTo(x - s * 0.4, y + s * 0.3); g.quadraticCurveTo(x - s * 0.2, y + s * 0.24, x, y + s * 0.34); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(x, y - s * 0.22); g.quadraticCurveTo(x + s * 0.2, y - s * 0.32, x + s * 0.4, y - s * 0.26); g.lineTo(x + s * 0.4, y + s * 0.3); g.quadraticCurveTo(x + s * 0.2, y + s * 0.24, x, y + s * 0.34); g.closePath(); g.fill();
    g.fillStyle = 'rgba(0,0,0,.2)';
    for (let i = 0; i < 3; i++) { g.fillRect(x - s * 0.32, y - s * 0.1 + i * s * 0.12, s * 0.24, s * 0.03); g.fillRect(x + s * 0.08, y - s * 0.1 + i * s * 0.12, s * 0.24, s * 0.03); }
  },
  keyboard(g, x, y, s) {
    g.fillStyle = '#fff'; rr(g, x - s * 0.42, y - s * 0.22, s * 0.84, s * 0.44, s * 0.06); g.fill();
    g.fillStyle = '#5b6470';
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) g.fillRect(x - s * 0.36 + c * s * 0.12, y - s * 0.16 + r * s * 0.12, s * 0.09, s * 0.08);
  },
  pin(g, x, y, s) {
    g.fillStyle = '#FF4D4D';
    g.beginPath(); g.arc(x, y - s * 0.1, s * 0.24, Math.PI * 0.9, Math.PI * 2.1); g.lineTo(x, y + s * 0.38); g.closePath(); g.fill();
    g.fillStyle = '#fff'; g.beginPath(); g.arc(x, y - s * 0.1, s * 0.09, 0, Math.PI * 2); g.fill();
  },
  weather(g, x, y, s) {
    g.fillStyle = '#FFE14D'; g.beginPath(); g.arc(x + s * 0.12, y - s * 0.1, s * 0.2, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#fff';
    g.beginPath(); g.arc(x - s * 0.12, y + s * 0.12, s * 0.16, 0, Math.PI * 2); g.arc(x + s * 0.06, y + s * 0.06, s * 0.19, 0, Math.PI * 2); g.arc(x + s * 0.24, y + s * 0.16, s * 0.13, 0, Math.PI * 2); g.fill();
    g.fillRect(x - s * 0.12, y + s * 0.14, s * 0.36, s * 0.14);
  },
  gamepad(g, x, y, s) {
    g.fillStyle = '#fff'; rr(g, x - s * 0.4, y - s * 0.18, s * 0.8, s * 0.38, s * 0.18); g.fill();
    g.fillStyle = '#5b6470'; g.fillRect(x - s * 0.28, y - s * 0.03, s * 0.16, s * 0.05); g.fillRect(x - s * 0.225, y - s * 0.085, s * 0.05, s * 0.16);
    g.fillStyle = '#FF4D4D'; g.beginPath(); g.arc(x + s * 0.18, y - s * 0.04, s * 0.045, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#3D7BFF'; g.beginPath(); g.arc(x + s * 0.27, y + s * 0.04, s * 0.045, 0, Math.PI * 2); g.fill();
  },
  cap(g, x, y, s) {
    g.fillStyle = '#fff';
    g.beginPath(); g.moveTo(x - s * 0.42, y - s * 0.06); g.lineTo(x, y - s * 0.26); g.lineTo(x + s * 0.42, y - s * 0.06); g.lineTo(x, y + s * 0.14); g.closePath(); g.fill();
    g.beginPath(); g.moveTo(x - s * 0.24, y + s * 0.02); g.lineTo(x - s * 0.24, y + s * 0.22); g.quadraticCurveTo(x, y + s * 0.36, x + s * 0.24, y + s * 0.22); g.lineTo(x + s * 0.24, y + s * 0.02); g.lineTo(x, y + s * 0.14); g.closePath(); g.fill();
  },
  calc(g, x, y, s) {
    g.fillStyle = '#5b6470'; rr(g, x - s * 0.32, y - s * 0.42, s * 0.64, s * 0.84, s * 0.08); g.fill();
    g.fillStyle = '#C8EE5A'; g.fillRect(x - s * 0.24, y - s * 0.34, s * 0.48, s * 0.18);
    g.fillStyle = '#fff';
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) g.fillRect(x - s * 0.24 + c * s * 0.17, y - s * 0.08 + r * s * 0.15, s * 0.12, s * 0.1);
  },
  wifi(g, x, y, s, c = '#ddd') {
    for (const r of [0.18, 0.32, 0.46]) { g.beginPath(); g.arc(x, y + s * 0.3, r * s, Math.PI * 1.25, Math.PI * 1.75); stroke(g, c, s * 0.09); }
    g.fillStyle = c; g.beginPath(); g.arc(x, y + s * 0.3, s * 0.06, 0, Math.PI * 2); g.fill();
  },
  speaker(g, x, y, s, c = '#ddd') {
    g.fillStyle = c;
    g.beginPath(); g.moveTo(x - s * 0.36, y - s * 0.12); g.lineTo(x - s * 0.18, y - s * 0.12); g.lineTo(x + s * 0.04, y - s * 0.32); g.lineTo(x + s * 0.04, y + s * 0.32); g.lineTo(x - s * 0.18, y + s * 0.12); g.lineTo(x - s * 0.36, y + s * 0.12); g.closePath(); g.fill();
    g.beginPath(); g.arc(x + s * 0.06, y, s * 0.2, -0.9, 0.9); stroke(g, c, s * 0.08);
    g.beginPath(); g.arc(x + s * 0.06, y, s * 0.36, -0.9, 0.9); stroke(g, c, s * 0.08);
  },
  battery(g, x, y, s, c = '#ddd') {
    g.strokeStyle = c; g.lineWidth = s * 0.08; rr(g, x - s * 0.4, y - s * 0.2, s * 0.72, s * 0.4, s * 0.06); g.stroke();
    g.fillStyle = c; g.fillRect(x + s * 0.34, y - s * 0.08, s * 0.08, s * 0.16); g.fillRect(x - s * 0.32, y - s * 0.12, s * 0.42, s * 0.24);
  },
  search(g, x, y, s, c = '#999') {
    g.beginPath(); g.arc(x - s * 0.08, y - s * 0.08, s * 0.28, 0, Math.PI * 2); stroke(g, c, s * 0.12);
    g.beginPath(); g.moveTo(x + s * 0.13, y + s * 0.13); g.lineTo(x + s * 0.38, y + s * 0.38); stroke(g, c, s * 0.14);
  },
  power(g, x, y, s, c = '#ccc') {
    g.beginPath(); g.arc(x, y + s * 0.04, s * 0.3, -Math.PI * 0.32, Math.PI * 1.32); stroke(g, c, s * 0.1);
    g.beginPath(); g.moveTo(x, y - s * 0.36); g.lineTo(x, y - s * 0.02); stroke(g, c, s * 0.1);
  },
  lock(g, x, y, s, c = '#ccc') {
    g.fillStyle = c; rr(g, x - s * 0.28, y - s * 0.04, s * 0.56, s * 0.42, s * 0.06); g.fill();
    g.beginPath(); g.arc(x, y - s * 0.06, s * 0.18, Math.PI, 0); stroke(g, c, s * 0.09);
  },
  grid(g, x, y, s, c = '#fff') {
    g.fillStyle = c;
    for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) { g.beginPath(); g.arc(x - s * 0.3 + k * s * 0.3, y - s * 0.3 + r * s * 0.3, s * 0.09, 0, Math.PI * 2); g.fill(); }
  },
  home(g, x, y, s, c = '#666') {
    g.fillStyle = c;
    g.beginPath(); g.moveTo(x, y - s * 0.4); g.lineTo(x + s * 0.42, y - s * 0.02); g.lineTo(x + s * 0.3, y - s * 0.02); g.lineTo(x + s * 0.3, y + s * 0.38); g.lineTo(x - s * 0.3, y + s * 0.38); g.lineTo(x - s * 0.3, y - s * 0.02); g.lineTo(x - s * 0.42, y - s * 0.02); g.closePath(); g.fill();
  },
  arrow(g, x, y, s, c = '#666', dir = -1) {
    g.beginPath(); g.moveTo(x - dir * s * 0.12, y - s * 0.22); g.lineTo(x + dir * s * 0.12, y); g.lineTo(x - dir * s * 0.12, y + s * 0.22); stroke(g, c, s * 0.12);
  },
  ring(g, x, y, s, c = '#fff') {
    g.beginPath(); g.arc(x, y, s * 0.32, 0, Math.PI * 2); stroke(g, c, s * 0.12);
    g.fillStyle = c; g.beginPath(); g.arc(x, y, s * 0.1, 0, Math.PI * 2); g.fill();
  },
};

// window buttons: minimise, maximise, close
function winButtons(g, right, y, color, closeBg) {
  g.beginPath(); g.moveTo(right - 76, y); g.lineTo(right - 64, y); stroke(g, color, 2);
  g.strokeStyle = color; g.lineWidth = 2; g.strokeRect(right - 46, y - 6, 12, 12);
  if (closeBg) { g.fillStyle = closeBg; g.beginPath(); g.arc(right - 14, y, 11, 0, Math.PI * 2); g.fill(); }
  g.beginPath(); g.moveTo(right - 19, y - 5); g.lineTo(right - 9, y + 5); g.moveTo(right - 9, y - 5); g.lineTo(right - 19, y + 5); stroke(g, closeBg ? '#fff' : color, 2);
}

export function drawCursor() {
  const [c, g] = mk(40, 56);
  g.beginPath();
  const pts = [[3, 3], [3, 44], [13, 34], [20, 50], [27, 47], [20, 31], [34, 31]];
  g.moveTo(pts[0][0], pts[0][1]);
  for (const [x, y] of pts.slice(1)) g.lineTo(x, y);
  g.closePath();
  g.fillStyle = '#fff'; g.fill();
  stroke(g, '#000', 2.5);
  return c;
}

function highlight(w, h, color, r = 6) {
  const [c, g] = mk(w, h);
  rr(g, 1, 1, w - 2, h - 2, r);
  g.fillStyle = color; g.fill();
  return c;
}

// ======================= Linux Mint (Cinnamon) =======================
const MINT = '#35A854', MINT_FOLDER = '#7EBA4A';
export function drawMint() {
  const L = {};
  let [c, g] = mk(UI_W, UI_H);
  const gr = g.createLinearGradient(0, 0, UI_W, UI_H);
  gr.addColorStop(0, '#0c2925'); gr.addColorStop(0.55, '#1d5a44'); gr.addColorStop(1, '#64b06f');
  g.fillStyle = gr; g.fillRect(0, 0, UI_W, UI_H);
  for (const [x, y, r, a] of [[990, 170, 280, 0.18], [1160, 560, 210, 0.12], [320, 660, 320, 0.08], [720, 380, 150, 0.1]]) {
    const rg = g.createRadialGradient(x, y, 0, x, y, r);
    rg.addColorStop(0, `rgba(190,255,205,${a})`); rg.addColorStop(1, 'rgba(190,255,205,0)');
    g.fillStyle = rg; g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  g.strokeStyle = 'rgba(255,255,255,.035)'; g.lineWidth = 2;
  for (let i = -800; i < 1280; i += 26) { g.beginPath(); g.moveTo(i, 800); g.lineTo(i + 800, 0); g.stroke(); }
  [['monitor', 'Computer'], ['folder', 'Home'], ['trash', 'Trash']].forEach(([k, s], i) => {
    const y = 64 + i * 118;
    G[k](g, 70, y, 62, k === 'folder' ? MINT_FOLDER : undefined);
    label(g, s, 70, y + 48);
  });
  L.wall = c;

  [c, g] = mk(UI_W, 44);
  g.fillStyle = '#2d2d2d'; g.fillRect(0, 0, UI_W, 44);
  g.fillStyle = '#454545'; g.fillRect(0, 0, UI_W, 1);
  g.fillStyle = MINT; rr(g, 8, 6, 32, 32, 6); g.fill();
  G.grid(g, 24, 22, 17, '#fff');
  G.folder(g, 66, 22, 26, MINT_FOLDER);
  G.globe(g, 102, 22, 26);
  G.terminal(g, 138, 22, 26);
  g.fillStyle = '#4a4a4a'; g.fillRect(158, 10, 1, 24);
  G.wifi(g, 1106, 20, 22, '#ddd');
  G.speaker(g, 1140, 22, 20, '#ddd');
  G.battery(g, 1176, 22, 24, '#ddd');
  txt(g, '10:24', 1240, 22, 15, '#eee', 500, 'center');
  L.panel = c;

  [c, g] = mk(170, 36);
  rr(g, 0, 0, 170, 36, 4); g.fillStyle = '#4a4a4a'; g.fill();
  g.fillStyle = MINT; g.fillRect(8, 33, 154, 3);
  G.folder(g, 24, 17, 20, MINT_FOLDER);
  txt(g, 'Home', 44, 18, 14, '#eee', 500);
  L.taskBtn = c;

  [c, g] = mk(560, 480);
  rr(g, 0, 0, 560, 480, 8); g.fillStyle = '#353535'; g.fill();
  g.save(); rr(g, 0, 0, 560, 480, 8); g.clip();
  g.fillStyle = '#2a2a2a'; g.fillRect(0, 0, 64, 480);
  G.globe(g, 32, 40, 30); G.folder(g, 32, 94, 30, MINT_FOLDER); G.terminal(g, 32, 148, 30); G.gear(g, 32, 202, 30, '#9aa6b2');
  G.lock(g, 32, 362, 24); G.arrow(g, 32, 410, 24, '#ccc', 1); G.power(g, 32, 452, 24);
  g.restore();
  rr(g, 80, 16, 464, 36, 6); g.fillStyle = '#262626'; g.fill();
  G.search(g, 102, 34, 18, '#9a9a9a');
  ['All Applications', 'Accessories', 'Administration', 'Education', 'Graphics', 'Internet', 'Office', 'Sound & Video', 'System Tools', 'Preferences'].forEach((s, i) => {
    const y = 84 + i * 38;
    if (i === 0) { rr(g, 76, y - 16, 178, 32, 5); g.fillStyle = '#4a4a4a'; g.fill(); }
    g.fillStyle = ['#9aa6b2', '#FFB74D', '#EF5350', '#AB47BC', '#29B6F6', '#42A5F5', '#66BB6A', '#FF7043', '#78909C', '#BDBDBD'][i];
    g.beginPath(); g.arc(94, y, 7, 0, Math.PI * 2); g.fill();
    txt(g, s, 110, y, 14, '#e6e6e6');
  });
  g.fillStyle = '#444'; g.fillRect(262, 72, 1, 390);
  [['calc', 'Calculator'], ['folder', 'Files'], ['doc', 'Text Editor'], ['picture', 'Image Viewer'], ['music', 'Music'], ['film', 'Videos'], ['globe', 'Web Browser'], ['bag', 'Software Manager'], ['terminal', 'Terminal'], ['gear', 'System Settings']].forEach(([k, s], i) => {
    const y = 84 + i * 38;
    G[k](g, 290, y, 24, k === 'folder' ? MINT_FOLDER : k === 'bag' ? MINT : undefined);
    txt(g, s, 312, y, 14, '#f0f0f0');
  });
  L.menu = c;
  L.menuHi = highlight(272, 32, 'rgba(53,168,84,.55)', 5);

  [c, g] = mk(780, 480);
  rr(g, 0, 0, 780, 480, 8); g.fillStyle = '#fafafa'; g.fill();
  g.save(); rr(g, 0, 0, 780, 480, 8); g.clip();
  g.fillStyle = '#e2e2e2'; g.fillRect(0, 0, 780, 44);
  txt(g, 'Home', 390, 22, 15, '#333', 700, 'center');
  winButtons(g, 770, 22, '#555');
  g.fillStyle = '#efefef'; g.fillRect(0, 44, 780, 44);
  G.arrow(g, 24, 66, 22, '#777', -1); G.arrow(g, 52, 66, 22, '#bbb', 1);
  rr(g, 84, 54, 110, 24, 12); g.fillStyle = MINT; g.fill();
  txt(g, 'Home', 139, 66, 13, '#fff', 600, 'center');
  G.search(g, 752, 66, 18, '#777');
  g.fillStyle = '#f3f3f3'; g.fillRect(0, 88, 180, 392);
  g.fillStyle = '#dcdcdc'; g.fillRect(180, 88, 1, 392);
  txt(g, 'My Computer', 16, 108, 12, '#888', 700);
  ['Home', 'Desktop', 'Documents', 'Music', 'Pictures', 'Videos', 'Downloads', 'Trash'].forEach((s, i) => {
    const y = 136 + i * 34;
    if (i === 0) { g.fillStyle = MINT; g.fillRect(0, y - 15, 180, 30); }
    if (i === 0) G.home(g, 26, y, 18, '#fff'); else if (i === 7) G.trash(g, 26, y, 20); else G.folder(g, 26, y, 18, MINT_FOLDER);
    txt(g, s, 46, y, 14, i === 0 ? '#fff' : '#333', i === 0 ? 600 : 400);
  });
  ['Desktop', 'Documents', 'Downloads', 'Music', 'Pictures', 'Public', 'Templates', 'Videos'].forEach((s, i) => {
    const x = 262 + (i % 4) * 130, y = 166 + Math.floor(i / 4) * 140;
    G.folder(g, x, y, 74, MINT_FOLDER);
    txt(g, s, x, y + 56, 13, '#333', 400, 'center');
  });
  g.fillStyle = '#efefef'; g.fillRect(181, 452, 600, 28);
  txt(g, '8 items', 480, 466, 12, '#777', 400, 'center');
  g.restore();
  rr(g, 1, 1, 778, 478, 8); stroke(g, 'rgba(0,0,0,.28)', 2);
  L.win = c;
  L.cursor = drawCursor();
  return L;
}

// ======================= Zorin OS Lite (Xfce) =======================
const ZBLUE = '#2F6DF6', Z_FOLDER = '#4C8DFF';
export function drawZorin() {
  const L = {};
  let [c, g] = mk(UI_W, UI_H);
  const gr = g.createLinearGradient(0, 0, UI_W * 0.6, UI_H);
  gr.addColorStop(0, '#0a1a5c'); gr.addColorStop(0.5, '#1f56d8'); gr.addColorStop(1, '#79b6ff');
  g.fillStyle = gr; g.fillRect(0, 0, UI_W, UI_H);
  for (let k = 0; k < 7; k++) {
    g.beginPath();
    for (let x = 0; x <= UI_W; x += 16) {
      const y = 250 + k * 70 + Math.sin(x / 210 + k * 0.9) * 60 + Math.sin(x / 90 + k) * 12;
      if (x === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.lineTo(UI_W, UI_H); g.lineTo(0, UI_H); g.closePath();
    g.fillStyle = `rgba(255,255,255,${0.035 + k * 0.006})`; g.fill();
  }
  [['folder', 'Home'], ['trash', 'Trash']].forEach(([k, s], i) => {
    const y = 64 + i * 118;
    G[k](g, 70, y, 62, k === 'folder' ? Z_FOLDER : undefined);
    label(g, s, 70, y + 48);
  });
  L.wall = c;

  [c, g] = mk(UI_W, 46);
  g.fillStyle = '#16181d'; g.fillRect(0, 0, UI_W, 46);
  g.fillStyle = ZBLUE; rr(g, 10, 7, 32, 32, 8); g.fill();
  G.grid(g, 26, 23, 17, '#fff');
  G.folder(g, 70, 23, 26, Z_FOLDER);
  G.globe(g, 106, 23, 26);
  G.bag(g, 142, 24, 26, ZBLUE);
  G.wifi(g, 1108, 21, 22, '#cfd6e4');
  G.speaker(g, 1142, 23, 20, '#cfd6e4');
  G.battery(g, 1178, 23, 24, '#cfd6e4');
  txt(g, '10:24', 1240, 23, 15, '#eef2fa', 500, 'center');
  L.panel = c;

  [c, g] = mk(170, 36);
  rr(g, 0, 0, 170, 36, 6); g.fillStyle = '#2a2e37'; g.fill();
  g.fillStyle = ZBLUE; g.fillRect(10, 32, 150, 4);
  G.folder(g, 24, 17, 20, Z_FOLDER);
  txt(g, 'Home', 44, 18, 14, '#eef2fa', 500);
  L.taskBtn = c;

  [c, g] = mk(620, 520);
  rr(g, 0, 0, 620, 520, 14); g.fillStyle = '#fdfdfd'; g.fill();
  rr(g, 18, 18, 584, 42, 21); g.fillStyle = '#eef1f6'; g.fill();
  G.search(g, 44, 39, 18, '#8a93a3');
  txt(g, 'Search…', 64, 39, 15, '#8a93a3');
  [['globe', 'Web Browser'], ['folder', 'Files'], ['doc', 'Writer'], ['bag', 'Software'], ['gear', 'Settings'], ['terminal', 'Terminal'], ['calc', 'Calculator'], ['picture', 'Photos']].forEach(([k, s], i) => {
    const y = 96 + i * 46;
    G[k](g, 46, y, 28, k === 'folder' ? Z_FOLDER : k === 'bag' ? ZBLUE : undefined);
    txt(g, s, 74, y, 15, '#1d2330');
  });
  g.fillStyle = '#e4e8ef'; g.fillRect(372, 80, 1, 370);
  ['Home', 'Documents', 'Downloads', 'Pictures', 'Music', 'Videos'].forEach((s, i) => {
    const y = 100 + i * 44;
    if (i === 0) G.home(g, 400, y, 20, ZBLUE); else G.folder(g, 400, y, 20, Z_FOLDER);
    txt(g, s, 422, y, 15, '#1d2330');
  });
  g.fillStyle = '#e4e8ef'; g.fillRect(18, 462, 584, 1);
  g.fillStyle = '#c9d6f5'; g.beginPath(); g.arc(46, 492, 16, 0, Math.PI * 2); g.fill();
  g.fillStyle = ZBLUE; g.beginPath(); g.arc(46, 487, 6, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.arc(46, 503, 10, Math.PI, 0); g.fill();
  G.lock(g, 540, 492, 22, '#6b7487'); G.power(g, 580, 492, 22, '#6b7487');
  rr(g, 1, 1, 618, 518, 14); stroke(g, 'rgba(0,0,0,.18)', 2);
  L.menu = c;
  L.menuHi = highlight(340, 40, 'rgba(47,109,246,.22)', 8);

  [c, g] = mk(760, 470);
  rr(g, 0, 0, 760, 470, 10); g.fillStyle = '#ffffff'; g.fill();
  g.save(); rr(g, 0, 0, 760, 470, 10); g.clip();
  g.fillStyle = '#f2f4f8'; g.fillRect(0, 0, 760, 92);
  txt(g, 'Home', 380, 22, 15, '#1d2330', 700, 'center');
  winButtons(g, 750, 22, '#5b6475', ZBLUE);
  G.arrow(g, 26, 66, 22, '#5b6475', -1); G.arrow(g, 54, 66, 22, '#b9c0cc', 1);
  rr(g, 86, 52, 560, 28, 14); g.fillStyle = '#ffffff'; g.fill(); stroke(g, '#d9dee8', 1.5);
  G.home(g, 106, 66, 16, ZBLUE); txt(g, 'Home', 122, 66, 13, '#1d2330', 600);
  g.fillStyle = '#e4e8ef'; g.fillRect(0, 92, 760, 1);
  g.fillStyle = '#f7f8fb'; g.fillRect(0, 93, 176, 377);
  txt(g, 'Places', 16, 114, 12, '#8a93a3', 700);
  ['Home', 'Desktop', 'Documents', 'Downloads', 'Music', 'Pictures', 'Videos', 'Trash'].forEach((s, i) => {
    const y = 142 + i * 34;
    if (i === 0) { rr(g, 6, y - 15, 164, 30, 8); g.fillStyle = 'rgba(47,109,246,.14)'; g.fill(); }
    if (i === 0) G.home(g, 28, y, 18, ZBLUE); else if (i === 7) G.trash(g, 28, y, 20); else G.folder(g, 28, y, 18, Z_FOLDER);
    txt(g, s, 48, y, 14, '#1d2330', i === 0 ? 600 : 400);
  });
  ['Desktop', 'Documents', 'Downloads', 'Music', 'Pictures', 'Public', 'Templates', 'Videos'].forEach((s, i) => {
    const x = 256 + (i % 4) * 128, y = 170 + Math.floor(i / 4) * 140;
    G.folder(g, x, y, 72, Z_FOLDER);
    txt(g, s, x, y + 56, 13, '#1d2330', 400, 'center');
  });
  g.restore();
  rr(g, 1, 1, 758, 468, 10); stroke(g, 'rgba(0,0,0,.2)', 2);
  L.win = c;
  L.cursor = drawCursor();
  return L;
}

// ======================= Endless OS =======================
export const ENDLESS_APPS = [
  ['book', 'Encyclopedia', ['#FF8A3D', '#E8452C']], ['globe', 'Browser', ['#4FA3FF', '#2462E8']], ['folder', 'Files', ['#FFC94D', '#F29A1F']],
  ['doc', 'Writer', ['#5BC0EB', '#2C7BE5']], ['picture', 'Photos', ['#7CE38B', '#2FA65A']], ['film', 'Videos', ['#B98CFF', '#7340E0']],
  ['keyboard', 'Typing', ['#FF9ECF', '#E05297']], ['pin', 'Maps', ['#8CE0C9', '#2FA38A']], ['weather', 'Weather', ['#7CC8FF', '#3D8BFF']],
  ['gamepad', 'Games', ['#FF8F8F', '#E04B4B']], ['cap', 'Learn', ['#FFD36E', '#E0A21F']], ['bag', 'App Center', ['#C8EE5A', '#7DB51E']],
];
export function drawEndless() {
  const L = {};
  let [c, g] = mk(UI_W, UI_H);
  const sky = g.createLinearGradient(0, 0, 0, UI_H);
  sky.addColorStop(0, '#5a3fd1'); sky.addColorStop(0.45, '#ff6f91'); sky.addColorStop(0.75, '#ffb36b'); sky.addColorStop(1, '#ffd98a');
  g.fillStyle = sky; g.fillRect(0, 0, UI_W, UI_H);
  g.fillStyle = 'rgba(255,240,180,.9)'; g.beginPath(); g.arc(880, 470, 110, 0, Math.PI * 2); g.fill();
  [['#7b4fc9', 470, 120], ['#5b33a8', 540, 90], ['#3d2183', 610, 70], ['#2a145e', 690, 50]].forEach(([col, base, amp], k) => {
    g.beginPath(); g.moveTo(0, UI_H);
    for (let x = 0; x <= UI_W; x += 20) g.lineTo(x, base - Math.abs(Math.sin(x / (170 + k * 40) + k * 1.3)) * amp - Math.sin(x / 53 + k) * 8);
    g.lineTo(UI_W, UI_H); g.closePath(); g.fillStyle = col; g.fill();
  });
  L.wall = c;

  [c, g] = mk(600, 56);
  rr(g, 2, 2, 596, 52, 26); g.fillStyle = 'rgba(255,255,255,.94)'; g.fill();
  G.search(g, 36, 28, 22, '#7a7f8c');
  txt(g, 'Search', 62, 28, 18, '#8a8f9c');
  L.search = c;

  L.icons = ENDLESS_APPS.map(([k, s, cols]) => {
    const [ic, ig] = mk(150, 160);
    const tg = ig.createLinearGradient(23, 6, 127, 110);
    tg.addColorStop(0, cols[0]); tg.addColorStop(1, cols[1]);
    ig.save(); ig.shadowColor = 'rgba(0,0,0,.35)'; ig.shadowBlur = 10; ig.shadowOffsetY = 4;
    rr(ig, 23, 6, 104, 104, 26); ig.fillStyle = tg; ig.fill(); ig.restore();
    G[k](ig, 75, 58, 62, k === 'folder' ? '#fff3c4' : k === 'bag' ? '#ffffff' : undefined);
    label(ig, s, 75, 136, 16);
    return ic;
  });
  L.iconHi = highlight(150, 160, 'rgba(255,255,255,.28)', 22);

  [c, g] = mk(UI_W, 48);
  g.fillStyle = 'rgba(20,20,26,.92)'; g.fillRect(0, 0, UI_W, 48);
  G.ring(g, 30, 24, 30, '#fff');
  G.globe(g, 78, 24, 28); G.folder(g, 116, 24, 28, '#FFC94D');
  G.wifi(g, 1108, 22, 22, '#e6e6ee'); G.speaker(g, 1142, 24, 20, '#e6e6ee'); G.battery(g, 1178, 24, 24, '#e6e6ee');
  txt(g, '10:24', 1240, 24, 15, '#f2f2f7', 500, 'center');
  L.panel = c;

  [c, g] = mk(1080, 640);
  rr(g, 0, 0, 1080, 640, 12); g.fillStyle = '#ffffff'; g.fill();
  g.save(); rr(g, 0, 0, 1080, 640, 12); g.clip();
  g.fillStyle = '#f4f4f6'; g.fillRect(0, 0, 1080, 54);
  G.arrow(g, 30, 27, 24, '#5b6070', -1);
  txt(g, 'Encyclopedia', 540, 27, 17, '#22252e', 700, 'center');
  winButtons(g, 1068, 27, '#5b6070');
  rr(g, 60, 84, 420, 30, 6); g.fillStyle = '#22252e'; g.fill();
  const sp = g.createLinearGradient(60, 136, 680, 436);
  sp.addColorStop(0, '#0b1240'); sp.addColorStop(1, '#2a1d6b');
  g.fillStyle = sp; rr(g, 60, 136, 620, 300, 10); g.fill();
  g.fillStyle = '#FFD36E'; g.beginPath(); g.arc(120, 286, 70, 0, Math.PI * 2); g.fill();
  [[230, 10, '#c9c9c9'], [300, 14, '#f0b56e'], [380, 16, '#5aa9ff'], [460, 12, '#ff7b5c'], [560, 30, '#e8c29a'], [640, 24, '#f2dca0']].forEach(([x, r, col]) => {
    g.beginPath(); g.arc(120, 286, x - 120, -0.35, 0.35); stroke(g, 'rgba(255,255,255,.18)', 1.5);
    g.fillStyle = col; g.beginPath(); g.arc(x, 286 + Math.sin(x) * 30, r, 0, Math.PI * 2); g.fill();
  });
  for (let i = 0; i < 7; i++) { g.fillStyle = '#d5d8e0'; g.fillRect(60, 466 + i * 22, i === 6 ? 380 : 620, 9); }
  g.fillStyle = '#f4f4f6'; g.fillRect(720, 84, 320, 520);
  for (let i = 0; i < 4; i++) {
    const y = 100 + i * 124;
    g.fillStyle = ['#FFB36B', '#7CC8FF', '#C8EE5A', '#FF9ECF'][i]; rr(g, 736, y, 96, 96, 8); g.fill();
    g.fillStyle = '#c9ccd6'; g.fillRect(848, y + 18, 170, 10); g.fillRect(848, y + 42, 140, 8); g.fillRect(848, y + 62, 110, 8);
  }
  g.restore();
  rr(g, 1, 1, 1078, 638, 12); stroke(g, 'rgba(0,0,0,.22)', 2);
  L.win = c;
  L.cursor = drawCursor();
  return L;
}
