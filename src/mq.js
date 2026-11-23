// A tiny MQTT 3.1.1 client over WebSocket (QoS 0 only), talking to several free public brokers at once.
// A school network may block some of them; whichever ones get through carry the messages, and the receiver
// drops the copies (every message carries its sender and a sequence number).
const te = new TextEncoder();
const td = new TextDecoder();

export const DEFAULT_BROKERS = [
  'wss://public:public@public.cloud.shiftr.io', // port 443, like any website: gets through most school firewalls
  'wss://broker.emqx.io:8084/mqtt',
  'wss://test.mosquitto.org:8081/mqtt',
  'wss://broker.hivemq.com:8884/mqtt',
];

const str = (s) => { const b = te.encode(s); return [b.length >> 8, b.length & 255, ...b]; };
function packet(type, flags, body) {
  const head = [(type << 4) | flags];
  let x = body.length;
  do { let d = x % 128; x = Math.floor(x / 128); if (x > 0) d |= 128; head.push(d); } while (x > 0);
  const out = new Uint8Array(head.length + body.length);
  out.set(head);
  out.set(body, head.length);
  return out;
}
const rid = (n) => { const a = 'abcdefghijklmnopqrstuvwxyz0123456789'; let s = ''; const r = crypto.getRandomValues(new Uint8Array(n)); for (const v of r) s += a[v % 36]; return s; };

function parseSpec(s) {
  // credentials in the address ("wss://user:pass@host/path") go in the MQTT login, not in the WebSocket URL
  const u = new URL(s);
  const spec = { url: '', user: decodeURIComponent(u.username), pass: decodeURIComponent(u.password) };
  u.username = ''; u.password = '';
  spec.url = u.href;
  return spec;
}

function link(spec, bus) {
  let ws = null, buf = new Uint8Array(0), retry = 0, timer = 0, ping = 0, lastRx = 0, pid = 1, closed = false;
  const me = { alive: false, url: spec.url };

  function connectPacket() {
    let flags = 0x02; // clean session
    const body = [...str('MQTT'), 4, 0, 0, 60, ...str('wrg' + rid(12))];
    if (spec.user) { flags |= 0x80; body.push(...str(spec.user)); }
    if (spec.pass) { flags |= 0x40; body.push(...str(spec.pass)); }
    body[7] = flags;
    return packet(1, 0, body);
  }
  function send(bytes) { if (ws && ws.readyState === 1) { try { ws.send(bytes); } catch (e) { /* closing */ } } }
  function subscribe(topic) {
    pid = (pid % 65535) + 1;
    send(packet(8, 2, [pid >> 8, pid & 255, ...str(topic), 0]));
  }
  function down() {
    clearInterval(ping);
    if (me.alive) { me.alive = false; bus.changed(); }
    if (ws) { ws.onopen = ws.onmessage = ws.onclose = ws.onerror = null; try { ws.close(); } catch (e) { /* already closed */ } ws = null; }
    buf = new Uint8Array(0);
    if (!closed) {
      clearTimeout(timer);
      const wait = Math.min(15000, 1000 * 2 ** retry) * (0.7 + Math.random() * 0.6);
      retry = Math.min(retry + 1, 6);
      timer = setTimeout(open, wait);
    }
  }
  function handle(type, flags, body) {
    if (type === 2) { // CONNACK
      if (body[1] !== 0) { closed = true; down(); return; } // refused: don't keep knocking
      me.alive = true; retry = 0;
      bus.topics.forEach(subscribe);
      bus.retained.forEach((bytes, topic) => send(packet(3, 1, [...str(topic), ...bytes])));
      clearInterval(ping);
      ping = setInterval(() => {
        if (Date.now() - lastRx > 65000) { down(); return; }
        send(Uint8Array.of(0xc0, 0));
      }, 20000);
      bus.changed();
    } else if (type === 3) { // PUBLISH
      const tl = (body[0] << 8) | body[1];
      const topic = td.decode(body.subarray(2, 2 + tl));
      let p = 2 + tl;
      if ((flags >> 1) & 3) p += 2;
      bus.deliver(topic, body.subarray(p));
    }
  }
  function feed(chunk) {
    const b = new Uint8Array(buf.length + chunk.length);
    b.set(buf); b.set(chunk, buf.length); buf = b;
    for (;;) {
      if (buf.length < 2) return;
      let len = 0, mul = 1, i = 1, byte;
      do {
        if (i >= buf.length) return;
        byte = buf[i++];
        len += (byte & 127) * mul;
        mul *= 128;
      } while ((byte & 128) && i < 5);
      if (buf.length < i + len) return;
      const type = buf[0] >> 4, flags = buf[0] & 15, body = buf.slice(i, i + len);
      buf = buf.slice(i + len);
      handle(type, flags, body);
    }
  }
  function open() {
    clearTimeout(timer);
    if (closed || ws) return;
    try { ws = new WebSocket(spec.url, ['mqtt']); } catch (e) { ws = null; down(); return; }
    ws.binaryType = 'arraybuffer';
    ws.onopen = () => { lastRx = Date.now(); send(connectPacket()); };
    ws.onmessage = (ev) => { lastRx = Date.now(); if (ev.data instanceof ArrayBuffer) feed(new Uint8Array(ev.data)); };
    ws.onclose = ws.onerror = () => down();
  }

  me.publish = (topic, bytes, retain) => { if (me.alive) send(packet(3, retain ? 1 : 0, [...str(topic), ...bytes])); };
  me.subscribe = (topic) => { if (me.alive) subscribe(topic); };
  me.kick = () => { if (!ws && !closed) { retry = 0; open(); } };
  me.close = () => { closed = true; if (me.alive) send(Uint8Array.of(0xe0, 0)); clearTimeout(timer); down(); };
  open();
  return me;
}

// createBus({ brokers, onMessage(topic, bytes), onStatus(upCount, total) })
export function createBus({ brokers = DEFAULT_BROKERS, onMessage = () => {}, onStatus = () => {} } = {}) {
  const bus = {
    topics: new Set(),
    retained: new Map(), // topic -> last retained payload, re-sent to a broker when it (re)connects
    changed: () => onStatus(links.filter((l) => l.alive).length, links.length),
    deliver: (topic, bytes) => { try { onMessage(topic, bytes); } catch (e) { console.warn(e); } },
  };
  const links = brokers.map((b) => { try { return link(parseSpec(b), bus); } catch (e) { return null; } }).filter(Boolean);
  const kick = () => links.forEach((l) => l.kick());
  const onVis = () => { if (document.visibilityState === 'visible') kick(); };
  window.addEventListener('online', kick);
  document.addEventListener('visibilitychange', onVis);
  return {
    subscribe(topic) { bus.topics.add(topic); links.forEach((l) => l.subscribe(topic)); },
    publish(topic, obj, retain = false) {
      const bytes = obj == null ? new Uint8Array(0) : te.encode(JSON.stringify(obj));
      if (retain) bus.retained.set(topic, bytes);
      links.forEach((l) => l.publish(topic, bytes, retain));
    },
    up: () => links.filter((l) => l.alive).length,
    total: () => links.length,
    kick,
    close() {
      window.removeEventListener('online', kick);
      document.removeEventListener('visibilitychange', onVis);
      links.forEach((l) => l.close());
    },
  };
}

export const randomId = rid;
