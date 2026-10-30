// scripts/build-content.mjs
// Builds the content script as a self-contained IIFE bundle
// (Vite splits it into chunks by default, which Chrome can't load in content scripts)

import { build } from 'esbuild';
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const outDir = 'dist/content';
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

console.log('📦 Building content script bundle...');

await build({
  entryPoints: ['src/content/index.js'],
  bundle: true,          // ← inline ALL imports (themes, observer, etc.)
  format: 'iife',        // ← self-contained, no import() calls
  globalName: '_ts',     // required for IIFE format
  outfile: 'dist/content/index.js',
  target: 'chrome112',
  minify: false,
  sourcemap: false,
  // Silence "use of eval" warnings from Monaco script injection
  logLevel: 'warning',
});

// Also copy base.css and monaco-bridge.js
if (existsSync('src/content/base.css')) {
  copyFileSync('src/content/base.css', 'dist/content/base.css');
}
if (existsSync('src/content/monaco-bridge.js')) {
  copyFileSync('src/content/monaco-bridge.js', 'dist/content/monaco-bridge.js');
}

console.log('✅ Content script bundled → dist/content/index.js');
