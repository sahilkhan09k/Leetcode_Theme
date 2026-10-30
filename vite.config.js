import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync, mkdirSync, existsSync, readdirSync, cpSync } from 'fs';

// ── Custom plugin to copy static extension files ─────────────
function copyExtensionFiles() {
  return {
    name: 'copy-extension-files',
    closeBundle() {
      // Copy manifest
      copyFileSync('public/manifest.json', 'dist/manifest.json');

      // Copy content CSS (referenced in manifest content_scripts)
      const contentDir = 'dist/content';
      if (!existsSync(contentDir)) mkdirSync(contentDir, { recursive: true });
      if (existsSync('src/content/base.css')) {
        copyFileSync('src/content/base.css', 'dist/content/base.css');
      }
      if (existsSync('src/content/universal.css')) {
        copyFileSync('src/content/universal.css', 'dist/content/universal.css');
      }

      // Copy theme-specific CSS files
      const themesDir = 'dist/content/themes';
      if (!existsSync(themesDir)) mkdirSync(themesDir, { recursive: true });
      if (existsSync('src/content/themes')) {
        const themeFiles = readdirSync('src/content/themes').filter(f => f.endsWith('.css'));
        themeFiles.forEach(file => {
          copyFileSync(`src/content/themes/${file}`, `dist/content/themes/${file}`);
        });
      }

      // Copy icons if they exist
      const iconsDir = 'dist/icons';
      if (!existsSync(iconsDir)) mkdirSync(iconsDir, { recursive: true });
      try {
        ['16', '48', '128'].forEach(size => {
          const src = `public/icons/icon${size}.png`;
          if (existsSync(src)) copyFileSync(src, `dist/icons/icon${size}.png`);
        });
      } catch (e) {
        console.warn('Icons not found, skipping...');
      }

      // Copy images recursively
      if (existsSync('public/images')) {
        cpSync('public/images', 'dist/images', { recursive: true, force: true });
      }
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), copyExtensionFiles()],

  // Build multiple entry points for the extension
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Popup (React app)
        popup: resolve(__dirname, 'popup.html'),
        // Background service worker
        'background/service-worker': resolve(__dirname, 'src/background/service-worker.js'),
        // NOTE: content/index.js is built separately by esbuild (scripts/build-content.mjs)
        // This ensures it's a self-contained IIFE with no external chunk imports
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Minify for production
    minify: 'esbuild',
    // Source maps for debugging
    sourcemap: false,
    // Target modern browsers (Chrome 112+)
    target: 'chrome112',
  },

  // Dev server for popup development
  server: {
    port: 3000,
    open: '/popup.html',
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
