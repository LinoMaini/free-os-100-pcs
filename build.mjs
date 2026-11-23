// Builds js/app.js (three.js + site code in one file) and dist/standalone.html (everything inlined, opens offline).
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'js/app.js',
  legalComments: 'eof',
});
// the page for the audience's phones (no three.js in it, it has to load fast on a phone)
await build({
  entryPoints: ['src/join.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'js/join.js',
  legalComments: 'eof',
});

// every build stamps the page's links with the files' fingerprints, so a browser never mixes a new page with
// an old cached script or style sheet (GitHub Pages lets browsers keep files for 10 minutes)
const stamp = (f) => createHash('sha1').update(readFileSync(f)).digest('hex').slice(0, 10);
const page = readFileSync('index.html', 'utf8')
  .replace(/href="css\/style\.css(\?v=\w+)?"/, `href="css/style.css?v=${stamp('css/style.css')}"`)
  .replace(/src="js\/app\.js(\?v=\w+)?"/, `src="js/app.js?v=${stamp('js/app.js')}"`);
writeFileSync('index.html', page);
const joinPage = readFileSync('join/index.html', 'utf8')
  .replace(/src="\.\.\/js\/join\.js(\?v=\w+)?"/, `src="../js/join.js?v=${stamp('js/join.js')}"`);
writeFileSync('join/index.html', joinPage);

// the service worker keeps these on the device, so the site works without internet after the first visit
const list = (dir, ext) => readdirSync(dir).filter((f) => f.endsWith(ext)).sort().map((f) => `${dir}/${f}`);
const assets = ['./', `css/style.css?v=${stamp('css/style.css')}`, `js/app.js?v=${stamp('js/app.js')}`, ...list('fonts', '.woff2'),
  'manifest.webmanifest', ...list('icons', '.png'), 'join/', `js/join.js?v=${stamp('js/join.js')}`];
const sw = readFileSync('src/sw.template.js', 'utf8');
const version = createHash('sha1').update(JSON.stringify(assets)).update(page).update(joinPage).update(sw)
  .update(readFileSync('manifest.webmanifest')).update(list('icons', '.png').map((f) => stamp(f)).join()).digest('hex').slice(0, 10);
writeFileSync('sw.js', sw.replace('__VERSION__', version).replace('__ASSETS__', JSON.stringify(assets)));
const html = page.replace(/<link rel="(preload|manifest|apple-touch-icon)"[^>]*>\n?/g, '');
// fonts go inside the file too, so the offline copy looks the same from a USB stick
const css = readFileSync('css/style.css', 'utf8')
  .replace(/url\(\.\.\/fonts\/([\w.-]+\.woff2)\)/g, (_, f) => `url(data:font/woff2;base64,${readFileSync('fonts/' + f).toString('base64')})`);
const js = readFileSync('js/app.js', 'utf8').replace(/<\/script/gi, '<\\/script');
const standalone = html
  .replace(/<link rel="stylesheet" href="css\/style\.css[^"]*">/, () => `<style>\n${css}\n</style>`)
  .replace(/<script src="js\/app\.js[^"]*" defer><\/script>/, () => `<script>\n${js}\n</script>`);
mkdirSync('dist', { recursive: true });
writeFileSync('dist/standalone.html', standalone);
console.log(`built js/app.js, js/join.js, sw.js (${version}) and dist/standalone.html`);
