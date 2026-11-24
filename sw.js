// Keeps a copy of the whole site on the device, so it opens and works without internet.
// build.mjs fills in the file list and the version; a new version replaces the old copy.
const CACHE = 'wrg-ee6f57fc85';
const ASSETS = ["./","css/style.css?v=82500fcd71","js/app.js?v=e279bf7779","fonts/archivo-black-latin-400-normal.woff2","fonts/archivo-latin-400-normal.woff2","fonts/archivo-latin-500-normal.woff2","fonts/archivo-latin-700-normal.woff2","manifest.webmanifest","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","join/","js/join.js?v=0470fcecb1"];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('wrg-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// pages: the network first (so a new version shows up), the copy if there's no network or it's too slow
const pageKey = (url) => { const u = new URL(url); u.search = ''; u.hash = ''; u.pathname = u.pathname.replace(/index\.html$/, ''); return u.href; };
async function page(req) {
  const cache = await caches.open(CACHE);
  try {
    let timer;
    const res = await Promise.race([fetch(req), new Promise((_, no) => { timer = setTimeout(() => no(new Error('slow')), 4000); })]);
    clearTimeout(timer); // fetch won the race: drop the timer so its promise never rejects unhandled
    if (!res.ok) throw new Error('http ' + res.status); // a 4xx/5xx (e.g. a brief CDN outage) means serve the cached copy, not the error
    cache.put(pageKey(req.url), res.clone());
    return res;
  } catch (e) {
    return (await cache.match(pageKey(req.url))) || (await cache.match(new URL('./', self.registration.scope).href)) || Response.error();
  }
}
// files: the copy first (their names change with every version), the network for anything new
async function file(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res.ok && res.type === 'basic') cache.put(req, res.clone());
    return res;
  } catch (e) {
    return (await cache.match(req, { ignoreSearch: true })) || Response.error();
  }
}
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(req.mode === 'navigate' ? page(req) : file(req));
});
