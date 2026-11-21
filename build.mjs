// Builds js/app.js (three.js + site code in one file) and dist/standalone.html (everything inlined, opens offline).
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  outfile: 'js/app.js',
  legalComments: 'eof',
});

const html = readFileSync('index.html', 'utf8').replace(/<link rel="preload"[^>]*>\n?/g, '');
// fonts go inside the file too, so the offline copy looks the same from a USB stick
const css = readFileSync('css/style.css', 'utf8')
  .replace(/url\(\.\.\/fonts\/([\w.-]+\.woff2)\)/g, (_, f) => `url(data:font/woff2;base64,${readFileSync('fonts/' + f).toString('base64')})`);
const js = readFileSync('js/app.js', 'utf8').replace(/<\/script/gi, '<\\/script');
const standalone = html
  .replace('<link rel="stylesheet" href="css/style.css">', () => `<style>\n${css}\n</style>`)
  .replace('<script src="js/app.js" defer></script>', () => `<script>\n${js}\n</script>`);
mkdirSync('dist', { recursive: true });
writeFileSync('dist/standalone.html', standalone);
console.log('built js/app.js and dist/standalone.html');
