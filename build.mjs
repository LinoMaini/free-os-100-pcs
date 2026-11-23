// Builds js/app.js (three.js + site code in one file) and dist/standalone.html (everything inlined, opens offline).
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
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

// every build stamps the page's links with the files' fingerprints, so a browser never mixes a new page with
// an old cached script or style sheet (GitHub Pages lets browsers keep files for 10 minutes)
const stamp = (f) => createHash('sha1').update(readFileSync(f)).digest('hex').slice(0, 10);
const page = readFileSync('index.html', 'utf8')
  .replace(/href="css\/style\.css(\?v=\w+)?"/, `href="css/style.css?v=${stamp('css/style.css')}"`)
  .replace(/src="js\/app\.js(\?v=\w+)?"/, `src="js/app.js?v=${stamp('js/app.js')}"`);
writeFileSync('index.html', page);
const html = page.replace(/<link rel="preload"[^>]*>\n?/g, '');
// fonts go inside the file too, so the offline copy looks the same from a USB stick
const css = readFileSync('css/style.css', 'utf8')
  .replace(/url\(\.\.\/fonts\/([\w.-]+\.woff2)\)/g, (_, f) => `url(data:font/woff2;base64,${readFileSync('fonts/' + f).toString('base64')})`);
const js = readFileSync('js/app.js', 'utf8').replace(/<\/script/gi, '<\\/script');
const standalone = html
  .replace(/<link rel="stylesheet" href="css\/style\.css[^"]*">/, () => `<style>\n${css}\n</style>`)
  .replace(/<script src="js\/app\.js[^"]*" defer><\/script>/, () => `<script>\n${js}\n</script>`);
mkdirSync('dist', { recursive: true });
writeFileSync('dist/standalone.html', standalone);
console.log('built js/app.js and dist/standalone.html');
