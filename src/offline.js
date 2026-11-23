// Like Endless OS, the site keeps working without internet: after the first visit a service worker keeps a copy
// of everything on the device. If the Wi-Fi drops during the presentation, nothing stops; a sticker says so.
export function initOffline() {
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    const register = () => navigator.serviceWorker.register('sw.js').catch(() => {});
    if (document.readyState === 'complete') register();
    else window.addEventListener('load', register, { once: true });
  }
  const chip = document.getElementById('netChip');
  if (!chip) return;
  const set = () => {
    const off = navigator.onLine === false;
    if (off && chip.hidden) { chip.classList.remove('pop'); void chip.offsetWidth; chip.classList.add('pop'); }
    chip.hidden = !off;
    document.documentElement.classList.toggle('is-offline', off);
  };
  window.addEventListener('online', set);
  window.addEventListener('offline', set);
  set();
}
