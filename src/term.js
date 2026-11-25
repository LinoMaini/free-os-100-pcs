// The sources at the bottom are a thin terminal: closed, only its three dots and our thanks show;
// a click opens it, types the command and shows every source.
export function initTerm({ reduceMotion = false } = {}) {
  const term = document.getElementById('sources');
  if (!term) return;
  term.addEventListener('toggle', () => {
    if (!term.open) return;
    term.classList.remove('typing');
    void term.offsetWidth;
    term.classList.add('typing');
    // the page grows downwards: bring the whole terminal into view once it has opened
    setTimeout(() => term.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'end' }), reduceMotion ? 0 : 480);
  });
}
