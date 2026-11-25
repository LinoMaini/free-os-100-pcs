// What the presentation (the host) and the audience's phones share: room codes, topics, messages, the install plan.
import { DEFAULT_BROKERS } from './mq.js';

// the names of the tour stops, as the site shows them; phones only ever show these, never text from the network
export const STOPS = {
  world: 'The mission',
  top: 'Their first computer',
  os: 'What an operating system is',
  free: 'Why free and open',
  teardown: 'Inside the computer',
  challenge: 'Who we’re choosing for',
  method: 'About 100 in, 3 out',
  mint: 'Linux Mint, the familiar one',
  zorin: 'Zorin OS Lite, the light one',
  endless: 'Endless OS, the offline one',
  scores: 'How they score',
  energy: 'Energy',
  access: 'Accessibility',
  pick: 'Our pick',
  install: 'How to install it',
  plan: 'From box to classroom',
  end: 'Questions?',
  bonus: 'Fun fact: the heaviest system',
};

export const MAX_PCS = 100;
const ABC = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // no 0/O, 1/I/L: easy to read off a projector
export const newCode = () => [...crypto.getRandomValues(new Uint8Array(6))].map((v) => ABC[v % ABC.length]).join('');
export const okCode = (s) => typeof s === 'string' && new RegExp(`^[${ABC}]{6}$`).test(s);
export const okId = (s) => typeof s === 'string' && /^[a-z0-9]{6,16}$/.test(s);
export const topics = (code) => ({ host: `wrg/v1/${code}/h`, phones: `wrg/v1/${code}/p` });

const td = new TextDecoder();
export function readMsg(bytes) {
  if (!bytes || !bytes.length || bytes.length > 6000) return null;
  try { const m = JSON.parse(td.decode(bytes)); return m && m.v === 1 && okId(m.id) && Number.isFinite(m.q) ? m : null; } catch (e) { return null; }
}

// sequence numbers keep growing across reloads, so a receiver can drop copies and stale messages
let last = 0;
export const seq = () => (last = Math.max(last + 1, Date.now() * 1000));

// brokers can be swapped with ?mq=ws://localhost:9001/mqtt (comma-separated), for testing.
// Only honoured on localhost: otherwise a shared link like ?mq=wss://evil/mqtt would end up in the
// QR code and silently route every phone's traffic through an attacker's broker.
export function brokers(params = new URLSearchParams(location.search)) {
  const mq = params.get('mq');
  if (!mq) return DEFAULT_BROKERS;
  const local = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (!local) return DEFAULT_BROKERS;
  const list = mq.split(',').map((s) => s.trim()).filter((s) => /^wss?:\/\//.test(s));
  return list.length ? list : DEFAULT_BROKERS;
}

// The install plan: ten USB sticks, so phones install ten at a time, in rounds, like the 100 PCs.
// Host and phones compute the same progress from the same numbers, so nobody has to report it.
const hash = (s) => { let h = 2166136261; for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619); return (h >>> 0) / 4294967295; };
export function installPlan(count, now = Date.now()) {
  const rounds = Math.max(1, Math.ceil(count / 10));
  const dur = rounds <= 1 ? 9000 : Math.max(5000, Math.min(9000, Math.round(36000 / rounds)));
  return { t0: now + 1500, per: 10, dur };
}
// 0 before this PC's round, then up to 1; null if there's no install going on
export function installProgress(ins, index, id, now) {
  if (!ins || index < 0) return null;
  const round = Math.floor(index / ins.per);
  const start = ins.t0 + round * ins.dur;
  const len = ins.dur * (0.72 + 0.28 * hash(id)); // sticks aren't all equally fast
  return Math.max(0, Math.min(1, (now - start) / len));
}
