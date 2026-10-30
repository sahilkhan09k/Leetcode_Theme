// ============================================================
// Theme Applicator v10 — Optimized with External CSS Loading
// Phase 2: Modular CSS architecture for better performance
// Phase 3: Image preloading + WebP optimization
// ============================================================
import { THEMES, DEFAULT_THEME } from '../themes/index.js';
import { loadThemeCSS, loadUniversalCSS, initializeCSS } from './cssLoader.js';
import { preloadImage } from '../utils/imagePreloader.js';

const IDS = {
  vars: 'lts-vars',
  font: 'lts-font',
  bg: 'lts-bg',
  style: 'lts-style',
  editor: 'lts-editor',
  animCss: 'lts-anim-css',
  animDom: 'lts-anim-dom',
};

// Track CSS initialization
let cssInitialized = false;

// ── Google Fonts ─────────────────────────────────────────────
const FONTS = {
  'dark-pro':      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  'anime-night':   'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap',
  'adventure':     'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&display=swap',
  'pixel-art':     'https://fonts.googleapis.com/css2?family=VT323&family=Share+Tech+Mono&display=swap',
  'vintage-paper': 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap',
  'sunset-lofi':   'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap',
};

// ── Seamless Aged Parchment Paper Texture (SVG Data URI) ───────
const PARCHMENT_TEXTURE_SVG = "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'600'%20height%3D'600'%3E%3Cfilter%20id%3D'p'%20x%3D'0%25'%20y%3D'0%25'%20width%3D'100%25'%20height%3D'100%25'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'0.015%200.02'%20numOctaves%3D'5'%20result%3D'noise'%2F%3E%3CfeDiffuseLighting%20in%3D'noise'%20lighting-color%3D'%23d8b982'%20surfaceScale%3D'3.2'%20result%3D'light'%3E%3CfeDistantLight%20azimuth%3D'65'%20elevation%3D'52'%2F%3E%3C%2FfeDiffuseLighting%3E%3CfeBlend%20mode%3D'multiply'%20in%3D'SourceGraphic'%20in2%3D'light'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20fill%3D'%23c5a268'%20filter%3D'url(%23p)'%2F%3E%3C%2Fsvg%3E";

// ── Atmospheric Backgrounds ──────────────────────────────────
const BACKGROUNDS = {
  'dark-pro': `background:
    radial-gradient(ellipse at 20% 30%, rgba(88,166,255,0.07) 0%, transparent 55%),
    radial-gradient(ellipse at 80% 70%, rgba(56,139,253,0.05) 0%, transparent 45%),
    linear-gradient(160deg, #0a0d12 0%, #0d1117 40%, #0a0d12 100%);`,

  'anime-night': `background:
    radial-gradient(circle at 74% 15%, rgba(255,252,220,1) 0%, rgba(220,235,255,0.9) 2%, rgba(150,200,255,0.3) 6%, transparent 15%),
    radial-gradient(circle at 74% 15%, rgba(100,160,255,0.18) 0%, transparent 28%),
    radial-gradient(ellipse at 28% 22%, rgba(130,45,160,0.45) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 100%, rgba(35,15,65,0.85) 0%, rgba(20,10,40,0.5) 40%, transparent 65%),
    linear-gradient(180deg, #0d091e 0%, #120c28 28%, #140e2c 55%, #191136 75%, #0f0a22 100%);`,

  'adventure': `background:
    radial-gradient(ellipse at 50% -10%, rgba(212,160,23,0.22) 0%, rgba(160,100,0,0.12) 40%, transparent 65%),
    radial-gradient(ellipse at 0% 100%, rgba(80,50,0,0.25) 0%, transparent 50%),
    linear-gradient(160deg, #120e06 0%, #181308 35%, #221b0b 70%, #151006 100%);`,

  'pixel-art': `background:
    repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,65,0.03) 3px, rgba(0,255,65,0.03) 4px),
    radial-gradient(ellipse at 50% 40%, rgba(0,255,65,0.10) 0%, transparent 60%),
    linear-gradient(180deg, #08081a 0%, #0c0c22 50%, #08081a 100%);`,

  'vintage-paper': `background:
    radial-gradient(ellipse at 50% 50%, #221810 0%, #18110b 60%, #120b06 100%);`,

  'sunset-lofi': `background:
    radial-gradient(circle at 50% 55%, rgba(255,140,0,0.35) 0%, transparent 28%),
    radial-gradient(ellipse at 50% 55%, rgba(255,100,50,0.25) 0%, rgba(200,50,100,0.15) 30%, transparent 55%),
    linear-gradient(180deg, #120528 0%, #1c0d38 25%, #2a114c 50%, #461658 75%, #1c0d38 100%);`,
};

// ╔══════════════════════════════════════════════════════════╗
// ║                  ANIMATION ENGINES                       ║
// ╚══════════════════════════════════════════════════════════╝

// ── 🌸 Anime Night: Falling Sakura Petals + Twinkling Stars ─
function injectSakura() {
  const css = mkStyle(IDS.animCss, `
    @keyframes lts-petal-fall {
      0%   { transform: translateY(-30px) rotate(0deg) translateX(0px); opacity:0; }
      8%   { opacity:0.9; }
      88%  { opacity:0.75; }
      100% { transform: translateY(105vh) rotate(540deg) translateX(140px); opacity:0; }
    }
    @keyframes lts-petal-sway { 0%,100%{margin-left:0} 33%{margin-left:45px} 66%{margin-left:-45px} }
    @keyframes lts-star-twinkle { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
    #lts-anim-dom { position:fixed;inset:0;pointer-events:none;z-index:99998;overflow:hidden; }
    .lts-petal {
      position:absolute; top:-30px;
      background:radial-gradient(ellipse at 30% 30%, rgba(255,225,238,0.98), rgba(255,150,195,0.85));
      border-radius:150% 0 150% 0;
      animation:lts-petal-fall linear infinite, lts-petal-sway ease-in-out infinite;
      filter:drop-shadow(0 0 5px rgba(255,122,178,0.6));
      will-change:transform,opacity;
    }
    .lts-star { 
      position:absolute;background:white;border-radius:50%;
      animation:lts-star-twinkle ease-in-out infinite;
      will-change:opacity,transform;
    }
  `);
  document.head.appendChild(css);
  const wrap = mkWrap();
  for (let i = 0; i < 45; i++) {
    const s = el('div', 'lts-star');
    const sz = 1 + rnd(2.5);
    css2(s, `left:${rnd(100)}%;top:${rnd(60)}%;width:${sz}px;height:${sz}px;animation-duration:${2+rnd(3)}s;animation-delay:${-rnd(5)}s`);
    wrap.appendChild(s);
  }
  for (let i = 0; i < 28; i++) {
    const p = el('div', 'lts-petal');
    const sz = 8 + rnd(12), dur = 7 + rnd(12), sway = 3 + rnd(5);
    css2(p, `left:${rnd(105)-5}%;width:${sz}px;height:${sz*0.65}px;animation-duration:${dur}s,${sway}s;animation-delay:${-rnd(25)}s,${-rnd(6)}s;opacity:${0.6+rnd(0.35)};transform:rotate(${rnd(360)}deg)`);
    wrap.appendChild(p);
  }
  document.body.appendChild(wrap);
  
  // OPTIMIZATION: Pause animations when tab is inactive
  setupAnimationPause();
}

// ── 🌅 Sunset: Ambient Fireflies ─────────────────────────────
function injectSunsetFireflies() {
  const css = mkStyle(IDS.animCss, `
    @keyframes lts-firefly-float {
      0%{transform:translate(0,0)} 25%{transform:translate(30px,-20px)} 50%{transform:translate(-15px,-40px)} 75%{transform:translate(-30px,-15px)} 100%{transform:translate(0,0)}
    }
    @keyframes lts-firefly-blink { 0%,100%{opacity:0} 40%,60%{opacity:0.9} }
    #lts-anim-dom { position:fixed;inset:0;pointer-events:none;z-index:99998;overflow:hidden; }
    .lts-firefly { 
      position:absolute;border-radius:50%;
      animation:lts-firefly-float ease-in-out infinite,lts-firefly-blink ease-in-out infinite;
      will-change:transform,opacity;
    }
  `);
  document.head.appendChild(css);
  const wrap = mkWrap();
  const colors = ['rgba(255,220,80,0.9)','rgba(255,180,50,0.9)','rgba(255,140,60,0.8)'];
  for (let i = 0; i < 22; i++) {
    const f = el('div', 'lts-firefly');
    const sz = 2+rnd(4), c = colors[i%colors.length];
    css2(f, `left:${rnd(100)}%;top:${40+rnd(50)}%;width:${sz}px;height:${sz}px;background:${c};box-shadow:0 0 ${sz*2}px ${c};animation-duration:${5+rnd(8)}s,${1+rnd(3)}s;animation-delay:${-rnd(10)}s,${-rnd(3)}s`);
    wrap.appendChild(f);
  }
  document.body.appendChild(wrap);
  
  // OPTIMIZATION: Pause animations when tab is inactive
  setupAnimationPause();
}

// ── 👾 Pixel Art: Floating Retro Sprites ─────────────────────
function injectPixelArtScene() {
  const css = mkStyle(IDS.animCss, `
    @keyframes lts-pixel-float {
      0%   { transform: translateY(105vh) scale(1); opacity: 0; }
      10%  { opacity: 0.8; }
      90%  { opacity: 0.7; }
      100% { transform: translateY(-40px) scale(1.1); opacity: 0; }
    }
    @keyframes lts-pixel-wobble {
      0%, 100% { margin-left: 0; }
      50% { margin-left: 20px; }
    }
    #lts-anim-dom { position:fixed;inset:0;pointer-events:none;z-index:99998;overflow:hidden; }
    .lts-pixel-sprite {
      position: absolute; bottom: -40px;
      animation: lts-pixel-float linear infinite, lts-pixel-wobble ease-in-out infinite;
      image-rendering: pixelated;
    }
  `);
  document.head.appendChild(css);
  const wrap = mkWrap();

  const invaderSvg = (col, sz) => `<svg viewBox="0 0 11 8" width="${sz}" height="${sz*0.73}" fill="${col}" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="0" width="1" height="1"/><rect x="8" y="0" width="1" height="1"/>
    <rect x="3" y="1" width="1" height="1"/><rect x="7" y="1" width="1" height="1"/>
    <rect x="2" y="2" width="7" height="1"/>
    <rect x="1" y="3" width="2" height="1"/><rect x="4" y="3" width="3" height="1"/><rect x="8" y="3" width="2" height="1"/>
    <rect x="0" y="4" width="11" height="1"/>
    <rect x="0" y="5" width="1" height="1"/><rect x="2" y="5" width="7" height="1"/><rect x="10" y="5" width="1" height="1"/>
    <rect x="0" y="6" width="1" height="1"/><rect x="2" y="6" width="1" height="1"/><rect x="8" y="6" width="1" height="1"/><rect x="10" y="6" width="1" height="1"/>
    <rect x="3" y="7" width="2" height="1"/><rect x="6" y="7" width="2" height="1"/>
  </svg>`;

  const pixelColors = ['#00ff41', '#ffff00', '#00ffff'];
  for (let i = 0; i < 10; i++) {
    const s = el('div', 'lts-pixel-sprite');
    const col = pixelColors[i % pixelColors.length];
    const sz = 16 + rnd(12);
    const dur = 16 + rnd(14);
    const wobble = 3 + rnd(4);
    css2(s, `left:${rnd(95)}%;animation-duration:${dur}s,${wobble}s;animation-delay:${-rnd(20)}s,-${rnd(5)}s`);
    s.innerHTML = invaderSvg(col, sz);
    wrap.appendChild(s);
  }

  document.body.appendChild(wrap);
}

// ── 📜 Vintage Paper: Parchment Ambient Embers ───────────────
function injectVintageScene() {
  const css = mkStyle(IDS.animCss, `
    @keyframes lts-vintage-dust {
      0%   { transform: translateY(105vh) translateX(0); opacity: 0; }
      15%  { opacity: 0.5; }
      85%  { opacity: 0.4; }
      100% { transform: translateY(-30px) translateX(35px); opacity: 0; }
    }
    #lts-anim-dom { position:fixed;inset:0;pointer-events:none;z-index:99998;overflow:hidden; }
    .lts-dust {
      position: absolute; bottom: -20px; border-radius: 50%;
      background: radial-gradient(circle, rgba(230, 195, 130, 0.75) 0%, rgba(210, 165, 90, 0.2) 70%, transparent 100%);
      box-shadow: 0 0 6px rgba(220, 180, 110, 0.35);
      animation: lts-vintage-dust linear infinite;
    }
  `);
  document.head.appendChild(css);
  const wrap = mkWrap();
  for (let i = 0; i < 16; i++) {
    const d = el('div', 'lts-dust');
    const sz = 2 + rnd(3.5);
    css2(d, `left:${rnd(100)}%;width:${sz}px;height:${sz}px;animation-duration:${14+rnd(16)}s;animation-delay:${-rnd(20)}s`);
    wrap.appendChild(d);
  }
  document.body.appendChild(wrap);
}

// ── Dispatcher ───────────────────────────────────────────────
function removeAnimation() {
  document.getElementById(IDS.animCss)?.remove();
  document.getElementById(IDS.animDom)?.remove();
}
function injectAnimation(themeId) {
  removeAnimation();
  switch (themeId) {
    case 'anime-night':   injectSakura();           break;
    case 'pixel-art':     injectPixelArtScene();     break;
    case 'vintage-paper': injectVintageScene();      break;
    case 'sunset-lofi':   injectSunsetFireflies();   break;
  }
}

// ╔══════════════════════════════════════════════════════════╗
// ║                  STYLE INJECTION ENGINE                  ║
// ╚══════════════════════════════════════════════════════════╝

function injectFont(themeId) {
  document.getElementById(IDS.font)?.remove();
  const url = FONTS[themeId]; if (!url) return;
  const l = document.createElement('link');
  l.id = IDS.font; l.rel = 'stylesheet'; l.href = url;
  document.head.appendChild(l);
}

function injectVariables(theme, settings = {}) {
  let e = document.getElementById(IDS.vars);
  if (!e) { e = document.createElement('style'); e.id = IDS.vars; document.head.appendChild(e); }
  const isLight = theme.id === 'vintage-paper';
  const hasWallpaper = Boolean(settings?.wallpaperUrl || settings?.activeWallpaper);

  // When wallpaper is present, override background variables to be transparent/semi-transparent
  const themeVars = { ...theme.variables };
  if (hasWallpaper) {
    themeVars['--ts-bg-primary'] = 'transparent';
    themeVars['--ts-bg-secondary'] = 'rgba(10, 8, 20, 0.3)';
    themeVars['--ts-bg-tertiary'] = 'rgba(10, 8, 20, 0.3)';
    themeVars['--ts-bg-hover'] = 'rgba(255, 255, 255, 0.08)';
  }

  e.textContent = `
    :root, html, body, html.dark, body.dark, html.light, body.light, html[data-lts], body[data-lts] {
${Object.entries(themeVars).map(([k,v])=>`      ${k}: ${v};`).join('\n')}

      /* LeetCode Native Variable System Overrides — Both Numeric & Single-Digit */
      --layer-01: var(--ts-bg-primary) !important;
      --layer-02: var(--ts-bg-secondary) !important;
      --layer-03: var(--ts-bg-tertiary) !important;
      --layer-1: var(--ts-bg-primary) !important;
      --layer-2: var(--ts-bg-secondary) !important;
      --layer-3: var(--ts-bg-tertiary) !important;
      --layer-bg: var(--ts-bg-primary) !important;
      --layer-bg-gray: var(--ts-bg-primary) !important;
      --layer-bg-pure: var(--ts-bg-primary) !important;

      --dark-layer-01: var(--ts-bg-primary) !important;
      --dark-layer-02: var(--ts-bg-secondary) !important;
      --dark-layer-03: var(--ts-bg-tertiary) !important;
      --dark-layer-1: var(--ts-bg-primary) !important;
      --dark-layer-2: var(--ts-bg-secondary) !important;
      --dark-layer-3: var(--ts-bg-tertiary) !important;
      --dark-layer-bg: var(--ts-bg-primary) !important;

      --overlay-01: var(--ts-bg-secondary) !important;
      --overlay-02: var(--ts-bg-tertiary) !important;
      --overlay-1: var(--ts-bg-secondary) !important;
      --overlay-2: var(--ts-bg-tertiary) !important;
      --dark-overlay-01: var(--ts-bg-secondary) !important;
      --dark-overlay-02: var(--ts-bg-tertiary) !important;
      --dark-overlay-1: var(--ts-bg-secondary) !important;
      --dark-overlay-2: var(--ts-bg-tertiary) !important;

      --fill-pure: var(--ts-bg-secondary) !important;
      --fill-primary: rgba(128, 128, 128, 0.15) !important;
      --fill-secondary: rgba(128, 128, 128, 0.22) !important;
      --fill-tertiary: var(--ts-bg-tertiary) !important;
      --fill-quaternary: var(--ts-bg-hover) !important;
      --fill-1: var(--ts-bg-tertiary) !important;
      --fill-2: var(--ts-bg-tertiary) !important;
      --fill-3: var(--ts-bg-tertiary) !important;

      --dark-fill-1: var(--ts-bg-tertiary) !important;
      --dark-fill-2: var(--ts-bg-tertiary) !important;
      --dark-fill-3: var(--ts-bg-tertiary) !important;
      --dark-fill-quaternary: var(--ts-bg-hover) !important;

      --text-primary: var(--ts-text-primary) !important;
      --text-secondary: var(--ts-text-secondary) !important;
      --text-tertiary: var(--ts-text-muted) !important;
      --text-quaternary: var(--ts-text-muted) !important;
      --dark-text-primary: var(--ts-text-primary) !important;
      --dark-text-secondary: var(--ts-text-secondary) !important;
      --dark-text-tertiary: var(--ts-text-muted) !important;

      /* LeetCode Label Tokens (Profile, Contest Rating, Submissions, Badges) */
      --label-1: var(--ts-text-primary) !important;
      --label-2: var(--ts-text-secondary) !important;
      --label-3: var(--ts-text-muted) !important;
      --label-4: var(--ts-text-muted) !important;
      --dark-label-1: var(--ts-text-primary) !important;
      --dark-label-2: var(--ts-text-secondary) !important;
      --dark-label-3: var(--ts-text-muted) !important;
      --dark-label-4: var(--ts-text-muted) !important;

      --lc-text-primary: var(--ts-text-primary) !important;
      --lc-text-secondary: var(--ts-text-secondary) !important;
      --lc-text-tertiary: var(--ts-text-muted) !important;
      --dark-lc-text-primary: var(--ts-text-primary) !important;
      --dark-lc-text-secondary: var(--ts-text-secondary) !important;
      --dark-lc-text-tertiary: var(--ts-text-muted) !important;

      --text-label-1: var(--ts-text-primary) !important;
      --text-label-2: var(--ts-text-secondary) !important;
      --text-label-3: var(--ts-text-muted) !important;
      --text-label-4: var(--ts-text-muted) !important;
      --dark-text-label-1: var(--ts-text-primary) !important;
      --dark-text-label-2: var(--ts-text-secondary) !important;
      --dark-text-label-3: var(--ts-text-muted) !important;
      --dark-text-label-4: var(--ts-text-muted) !important;

      --border-primary: var(--ts-border) !important;
      --border-secondary: var(--ts-border) !important;
      --border-tertiary: var(--ts-border) !important;
      --border-quaternary: var(--ts-border) !important;
      --dark-border-primary: var(--ts-border) !important;
      --dark-border-secondary: var(--ts-border) !important;
      --dark-border-tertiary: var(--ts-border) !important;
      --dark-border-quaternary: var(--ts-border) !important;

      --brand-orange: var(--ts-accent) !important;
      --dark-brand-orange: var(--ts-accent) !important;

      /* LeetCode Modern Shadcn / Tailwind System */
      --sd-background-gray: ${isLight ? '45 35% 85%' : '260 50% 12%'} !important;
      --sd-background: var(--ts-bg-primary) !important;
      --sd-card: var(--ts-bg-secondary) !important;
      --sd-card-foreground: var(--ts-text-primary) !important;
      --sd-popover: var(--ts-bg-secondary) !important;
      --sd-popover-foreground: var(--ts-text-primary) !important;
      --sd-primary: var(--ts-accent) !important;
      --sd-primary-foreground: #ffffff !important;
      --sd-secondary: var(--ts-bg-tertiary) !important;
      --sd-secondary-foreground: var(--ts-text-primary) !important;
      --sd-muted: var(--ts-bg-tertiary) !important;
      --sd-muted-foreground: var(--ts-text-secondary) !important;
      --sd-accent: var(--ts-bg-hover) !important;
      --sd-accent-foreground: var(--ts-accent) !important;
      --sd-border: var(--ts-border) !important;
      --sd-input: var(--ts-bg-tertiary) !important;
      --sd-ring: var(--ts-accent) !important;
    }
  `;
}

function injectBackground(theme, settings = {}) {
  let e = document.getElementById(IDS.bg);
  if (!e) { e = document.createElement('style'); e.id = IDS.bg; document.head.appendChild(e); }
  const bg = BACKGROUNDS[theme.id] || BACKGROUNDS['dark-pro'];

  let wallpaperUrl = settings?.wallpaperUrl || settings?.activeWallpaper;
  if (wallpaperUrl && !wallpaperUrl.startsWith('http') && !wallpaperUrl.startsWith('chrome-extension:') && !wallpaperUrl.startsWith('data:')) {
    if (typeof chrome !== 'undefined' && chrome.runtime?.getURL) {
      wallpaperUrl = chrome.runtime.getURL(wallpaperUrl);
    }
  }

  const scrim = settings?.wallpaperScrim !== undefined ? settings.wallpaperScrim : 0.65;
  const hasWallpaper = Boolean(wallpaperUrl);

  // PHASE 3 OPTIMIZATION: Preload wallpaper image for instant display
  if (hasWallpaper && wallpaperUrl) {
    preloadImage(wallpaperUrl).catch(err => {
      console.warn('[LTS] Wallpaper preload failed:', err);
    });
  }

  if (hasWallpaper) {
    e.textContent = `
      html {
        background: linear-gradient(rgba(10, 8, 20, ${scrim}), rgba(10, 8, 20, ${scrim})),
                    url("${wallpaperUrl}") center center / cover no-repeat fixed !important;
        background-attachment: fixed !important;
        min-height: 100vh !important;
        color-scheme: dark !important;
      }
      body {
        background: transparent !important;
        background-color: transparent !important;
        min-height: 100vh !important;
      }

      #__next, #root, [id="__next"], [id="root"],
      div[class*="min-h-screen"], div[class*="h-screen"],
      div.h-\\[100vh\\], div[class*="h-\\[100vh\\]"],
      div.bg-sd-background-gray, div[class*="bg-sd-background-gray"],
      main, #main-content, #qd-content {
        background: transparent !important;
        background-color: transparent !important;
      }
    `;
  } else {
    e.textContent = `
      html, body, #__next, #root, [id="__next"], [id="root"],
      div[class*="min-h-screen"], div[class*="h-screen"],
      div.h-\\[100vh\\], div[class*="h-\\[100vh\\]"],
      div.bg-sd-background-gray, div[class*="bg-sd-background-gray"],
      main, #main-content, #qd-content {
        ${bg}
        background-attachment: fixed !important;
        min-height: 100vh !important;
        transition: background 0.3s ease !important;
      }
      html { color-scheme: dark !important; }
    `;
  }
}

function injectThemeStyles(theme, settings = {}) {
  // PHASE 2 OPTIMIZATION: Theme-specific styles now loaded from external CSS files
  // This function only handles dynamic wallpaper-related HTML classes
  
  const hasWallpaper = Boolean(settings?.wallpaperUrl || settings?.activeWallpaper);
  
  // Set HTML class for CSS targeting
  if (hasWallpaper) {
    document.documentElement.classList.remove('lts-no-wallpaper');
    document.documentElement.classList.add('lts-has-wallpaper');
  } else {
    document.documentElement.classList.remove('lts-has-wallpaper');
    document.documentElement.classList.add('lts-no-wallpaper');
  }
  
  // Load theme-specific CSS (cached by browser)
  loadThemeCSS(theme.id);
}

// ── Monaco API Theme Application ─────────────────────────────
// Content scripts run in an ISOLATED world — window.monaco in
// the content script context is NOT the page's window.monaco.
// monaco-bridge.js runs in MAIN world via manifest content_scripts
// and handles Monaco theming including editor.selectionBackground.

let _pendingTheme = null;

function injectEditorTheme(theme) {
  document.getElementById(IDS.editor)?.remove();
  _pendingTheme = theme;
  _sendToBackground(theme);
}

function _buildThemeData(theme) {
  const et = theme.editorTheme;
  return {
    id:      'lts-' + theme.id,
    base:    et.base,
    inherit: et.inherit,
    rules:   et.rules  || [],
    colors:  et.colors || {},
  };
}

function _sendToBackground(theme) {
  if (typeof chrome === 'undefined' || !chrome.runtime?.sendMessage) return;
  try {
    chrome.runtime.sendMessage({
      type: 'INJECT_MONACO_THEME',
      themeData: _buildThemeData(theme),
    });
  } catch (e) {}
}

// Called by index.js after SPA nav / theme switch
export function reapplyMonacoTheme() {
  if (_pendingTheme) _sendToBackground(_pendingTheme);
}

export const WALLPAPER_EDITOR_THEME = {
  id: 'wallpaper',
  editorTheme: {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment',  foreground: '8b949e', fontStyle: 'italic' },
      { token: 'keyword',  foreground: 'ff7b72', fontStyle: 'bold' },
      { token: 'string',   foreground: 'a5d6ff' },
      { token: 'number',   foreground: '79c0ff' },
      { token: 'type',     foreground: 'ffa657' },
      { token: 'function', foreground: 'd2a8ff' },
    ],
    colors: {
      'editor.background':            '#00000000',
      'editorGutter.background':      '#00000000',
      'editor.foreground':            '#f0f6fc',
      'editorLineNumber.foreground':  '#8b949e',
      'editorCursor.foreground':      '#58a6ff',
      'editor.selectionBackground':   '#388bfd40',
      'editor.inactiveSelectionBackground': '#388bfd25',
      'editor.selectionHighlightBackground': '#388bfd25',
      'editor.lineHighlightBackground': '#ffffff08',
    }
  }
};

// ── Helpers ──────────────────────────────────────────────────
function rnd(n) { return Math.random() * n; }
function el(tag, cls) { const e = document.createElement(tag); e.className = cls; return e; }
function css2(e, s) { e.style.cssText += ';' + s; }
function mkStyle(id, content) {
  document.getElementById(id)?.remove();
  const s = document.createElement('style'); s.id = id; s.textContent = content; return s;
}
function mkWrap() {
  document.getElementById(IDS.animDom)?.remove();
  const w = document.createElement('div'); w.id = IDS.animDom; return w;
}

// OPTIMIZATION: Pause animations when tab is inactive (saves CPU/GPU)
let animationPauseSetup = false;
function setupAnimationPause() {
  if (animationPauseSetup) return;
  animationPauseSetup = true;
  
  document.addEventListener('visibilitychange', () => {
    const animDom = document.getElementById(IDS.animDom);
    if (!animDom) return;
    
    if (document.hidden) {
      animDom.style.display = 'none'; // Stop rendering when tab inactive
    } else {
      animDom.style.display = 'block'; // Resume when tab active
    }
  });
}

// ── Public API ────────────────────────────────────────────────
export async function applyTheme(themeId, settings = {}) {
  // PHASE 2 OPTIMIZATION: Initialize external CSS loading
  if (!cssInitialized) {
    await initializeCSS();
    cssInitialized = true;
  }
  
  const validThemeId = THEMES[themeId] ? themeId : DEFAULT_THEME;
  const theme = THEMES[validThemeId];

  // Write active theme ID to DOM so monaco-bridge.js (MAIN world) can read it
  let meta = document.getElementById('lts-active-theme');
  if (!meta) {
    meta = document.createElement('meta');
    meta.id = 'lts-active-theme';
    (document.head || document.documentElement).appendChild(meta);
  }
  meta.setAttribute('data-theme-id', validThemeId);

  // Notify monaco-bridge.js of theme change via DOM event
  window.dispatchEvent(new CustomEvent('lts-theme-change', { detail: { themeId: validThemeId } }));

  injectFont(validThemeId);
  injectVariables(theme, settings);
  injectBackground(theme, settings);
  injectThemeStyles(theme, settings);
  injectEditorTheme(theme);
  injectAnimation(validThemeId);
  
  document.documentElement.setAttribute('data-lts', validThemeId);
}

export function removeTheme() {
  Object.values(IDS).forEach(id => document.getElementById(id)?.remove());
  document.documentElement.removeAttribute('data-lts');
}

// ── Dedicated Wallpaper Theme Engine ──────────────────────────
// Per user specification: Disables any active theme FIRST,
// zeros out LeetCode's native background variables to 100% transparent,
// and applies the anime wallpaper with frosted glass panels.
export function applyWallpaperTheme(wallpaperUrl, scrim = 0.65) {
  // Step 1: DISABLE existing theme styles first!
  removeTheme();

  let resolvedUrl = wallpaperUrl;
  if (resolvedUrl && !resolvedUrl.startsWith('http') && !resolvedUrl.startsWith('chrome-extension:') && !resolvedUrl.startsWith('data:')) {
    if (typeof chrome !== 'undefined' && chrome.runtime?.getURL) {
      resolvedUrl = chrome.runtime.getURL(resolvedUrl);
    }
  }

  // Step 2: Signal Monaco to use transparent wallpaper theme via both bridge methods
  let meta = document.getElementById('lts-active-theme');
  if (!meta) {
    meta = document.createElement('meta');
    meta.id = 'lts-active-theme';
    (document.head || document.documentElement).appendChild(meta);
  }
  meta.setAttribute('data-theme-id', 'wallpaper');
  window.dispatchEvent(new CustomEvent('lts-theme-change', { detail: { themeId: 'wallpaper' } }));

  // Also inject via background service worker (handles Monaco after SPA navigation)
  _pendingTheme = WALLPAPER_EDITOR_THEME;
  _sendToBackground(WALLPAPER_EDITOR_THEME);
  // Re-inject multiple times to handle async Monaco init
  setTimeout(() => _sendToBackground(WALLPAPER_EDITOR_THEME), 600);
  setTimeout(() => _sendToBackground(WALLPAPER_EDITOR_THEME), 1500);
  setTimeout(() => _sendToBackground(WALLPAPER_EDITOR_THEME), 3000);

  // Step 3: Define root CSS variables — cards get light dark transparent backgrounds
  const CARD_COLOR = 'rgba(10, 8, 20, 0.3)';
  const varsEl = mkStyle(IDS.vars, `
    :root, html, body, html.dark, body.dark {
      --ts-bg-primary: transparent !important;
      --ts-bg-secondary: ${CARD_COLOR} !important;
      --ts-bg-tertiary: transparent !important;
      --ts-text-primary: #f0f6fc !important;
      --ts-text-secondary: #c4cdd8 !important;
      --ts-text-muted: #9aa4b2 !important;
      --ts-accent: #38bdf8 !important;
      --ts-border: rgba(255, 255, 255, 0.13) !important;
      --ts-font: 'Inter', sans-serif !important;
      --ts-font-mono: 'JetBrains Mono', monospace !important;

      /* Page-level tokens → transparent so wallpaper shows */
      --layer-bg: transparent !important;
      --layer-bg-gray: transparent !important;
      --layer-bg-pure: transparent !important;
      --dark-layer-bg: transparent !important;
      --sd-background: transparent !important;
      --sd-background-gray: transparent !important;

      /* Card & panel tokens → transparent with borders */
      --layer-01: ${CARD_COLOR} !important;
      --layer-1: ${CARD_COLOR} !important;
      --dark-layer-01: ${CARD_COLOR} !important;
      --dark-layer-1: ${CARD_COLOR} !important;
      --layer-02: ${CARD_COLOR} !important;
      --layer-2: ${CARD_COLOR} !important;
      --dark-layer-02: ${CARD_COLOR} !important;
      --dark-layer-2: ${CARD_COLOR} !important;
      --layer-03: transparent !important;
      --layer-3: transparent !important;
      --sd-card: ${CARD_COLOR} !important;
      --overlay-01: ${CARD_COLOR} !important;
      --overlay-1: ${CARD_COLOR} !important;
      --dark-overlay-01: ${CARD_COLOR} !important;
      --dark-overlay-1: ${CARD_COLOR} !important;
      --fill-pure: ${CARD_COLOR} !important;

      --label-1: #f0f6fc !important;
      --dark-label-1: #f0f6fc !important;
      --text-primary: #f0f6fc !important;
      --dark-text-primary: #f0f6fc !important;
    }
  `);
  document.head.appendChild(varsEl);

  // Step 4: Full page wallpaper styling
  const bgEl = mkStyle(IDS.bg, `
    /* ═══ WALLPAPER ON HTML ═══ */
    html {
      background: url("${resolvedUrl}") center center / cover no-repeat fixed !important;
      background-attachment: fixed !important;
      min-height: 100vh !important;
      color-scheme: dark !important;
    }

    /* ═══ PAGE WRAPPERS & CONTEST PAGE → TRANSPARENT ═══ */
    body, #__next, #root, #base_content, #app, #contest-app,
    #__next > *, #root > *,
    main, #main-content, #qd-content,
    div[class*="min-h-screen"], div[class*="h-screen"],
    div.bg-sd-background-gray,
    [class*="bg-layer-bg"], [class*="dark:bg-dark-layer-bg"], [class*="bg-dark-layer-bg"],
    [class*="bg-sd-background"], [class*="dark:bg-sd-background"],
    div[class*="contest"], div[class*="Contest"],
    [class*="contest-hero"], [class*="ContestHero"],
    [class*="hero"], [class*="Hero"],
    div:has(> a[href*="/contest/weekly-contest"]):not(a):not(button),
    div:has(> a[href*="/contest/biweekly-contest"]):not(a):not(button),
    /* Contest-specific: nuke ALL gradient/colored backgrounds on contest wrapper elements */
    [class*="bg-gradient"], [class*="dark:bg-gradient"],
    [style*="background: linear-gradient"], [style*="background-image: linear-gradient"],
    [style*="background: radial-gradient"], [style*="background-image: radial-gradient"],
    /* Profile page outer wrapper */
    [class*="bg-paper"], [class*="dark:bg-paper"],
    [class*="bg-base"], [class*="dark:bg-base"] {
      background: transparent !important;
      background-color: transparent !important;
      background-image: none !important;
    }

    /* Remove hex mesh pseudo-elements on contest page */
    div[class*="contest"]::before, div[class*="contest"]::after,
    div[class*="Contest"]::before, div[class*="Contest"]::after,
    [class*="contest-hero"]::before, [class*="contest-hero"]::after,
    [class*="hero"]::before, [class*="hero"]::after,
    main::before, main::after,
    #__next::before, #__next::after,
    body::before, body::after,
    #root::before, #root::after,
    #contest-app::before, #contest-app::after,
    #base_content::before, #base_content::after,
    [class*="bg-gradient"]::before, [class*="bg-gradient"]::after {
      display: none !important;
      background: none !important;
      background-image: none !important;
      content: none !important;
    }

    /* Contest Cards */
    a[href*="/contest/weekly-contest"],
    a[href*="/contest/biweekly-contest"],
    div[class*="contest-card"], div[class*="ContestCard"] {
      background: rgba(10, 8, 20, 0.3) !important;
      background-color: rgba(10, 8, 20, 0.3) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border: 2px solid rgba(0, 0, 0, 0.4) !important;
      border-radius: 12px !important;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 
                  0 4px 16px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
    }

    /* ═══ FLEXLAYOUT LAYOUT WRAPPERS ═══ */
    .flexlayout__layout,
    .flexlayout__tabset,
    .flexlayout__tabset_content,
    .flexlayout__tab,
    .flexlayout__tab_button_content,
    .flexlayout__tabset_header,
    .flexlayout__tabset_header_inner,
    .flexlayout__outline_rect {
      background: transparent !important;
      background-color: transparent !important;
    }

    .flexlayout__splitter,
    .flexlayout__splitter_vert,
    .flexlayout__splitter_horz {
      background: rgba(255,255,255,0.08) !important;
    }

    /* ═══ PROBLEM DESCRIPTION — Light dark transparent bg ═══ */
    div[data-track-load="description_content"],
    div[data-track-load="qd-content"],
    div[class*="description"],
    [class*="question-content"],
    [class*="content__u3I1"],
    [data-key="description_content"] {
      background: rgba(10, 8, 20, 0.3) !important;
      background-color: rgba(10, 8, 20, 0.3) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border: 2px solid rgba(0, 0, 0, 0.4) !important;
      border-radius: 12px !important;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 
                  0 4px 16px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
    }

    /* ═══ MONACO CODE EDITOR — Light dark transparent bg ═══ */
    #editor,
    #code-editor,
    div[class*="editor-container"],
    .monaco-editor {
      background: rgba(10, 8, 20, 0.3) !important;
      background-color: rgba(10, 8, 20, 0.3) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
    }

    /* ALL inner Monaco layers MUST be transparent so they don't multiply opacity */
    .monaco-editor-background,
    .monaco-editor .overflow-guard,
    .monaco-editor .lines-content,
    .monaco-editor .view-lines,
    .monaco-editor .view-line,
    .monaco-editor .margin,
    .monaco-editor .margin-view-overlays,
    .monaco-editor .view-overlays,
    .monaco-editor .monaco-scrollable-element {
      background: transparent !important;
      background-color: transparent !important;
    }

    :root, .monaco-editor {
      --vscode-editor-background: transparent !important;
      --vscode-editorGutter-background: transparent !important;
      --vscode-editorLineNumber-foreground: #8b949e !important;
      --vscode-editorCursor-foreground: #58a6ff !important;
    }

    /* ═══ ALL BOXES / CARDS ACROSS LEETCODE (Profile, Stats, Contests, etc.) ═══ */
    [class*="bg-layer-1"]:not(button):not(a):not([role="tab"]),
    [class*="bg-layer-01"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-layer-1"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-dark-layer-1"]:not(button):not(a):not([role="tab"]),
    [class*="bg-layer-2"]:not(button):not(a):not([role="tab"]),
    [class*="bg-layer-02"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-layer-2"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-dark-layer-2"]:not(button):not(a):not([role="tab"]),
    [class*="bg-card"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-card"]:not(button):not(a):not([role="tab"]),
    [class*="bg-sd-card"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-sd-card"]:not(button):not(a):not([role="tab"]),
    [class*="bg-overlay-01"]:not(button):not(a):not([role="tab"]),
    [class*="bg-overlay-1"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-overlay-01"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-dark-overlay-01"]:not(button):not(a):not([role="tab"]),
    [class*="bg-fill-2"]:not(button):not(a):not([role="tab"]),
    [class*="bg-fill-3"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-fill-2"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-fill-3"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-dark-fill-2"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-dark-fill-3"]:not(button):not(a):not([role="tab"]),
    [class*="bg-fill-4"]:not(button):not(a):not([role="tab"]),
    [class*="dark:bg-dark-fill-4"]:not(button):not(a):not([role="tab"]) {
      background: rgba(10, 8, 20, 0.3) !important;
      background-color: rgba(10, 8, 20, 0.3) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border: 2px solid rgba(0, 0, 0, 0.4) !important;
      border-radius: 12px !important;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 
                  0 4px 16px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
    }

    /* ═══ PROFILE PAGE — Section containers that hold stats/badges/heatmap ═══ */
    /* LeetCode profile page wraps content in sections/divs with rounded corners */
    div[class*="rounded-lg"]:not(button):not(a):not(nav *):not(header *):not([role="tab"]):not([role="tablist"] *) {
      background: rgba(10, 8, 20, 0.3) !important;
      background-color: rgba(10, 8, 20, 0.3) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border: 2px solid rgba(0, 0, 0, 0.4) !important;
      border-radius: 12px !important;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 
                  0 4px 16px rgba(0, 0, 0, 0.5),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
    }

    /* Profile page section containers — target by common semantic patterns */
    .lc-lg\\:max-w-\\[calc\\(100\\%-315px\\)\\] > div,
    .flex.w-full.flex-col > section,
    div[class*="space-y-"] > div:not(button):not(a):not([role="tablist"]):not(nav),
    div[class*="profile"] > div:not(button):not(a),
    div[class*="Profile"] > div:not(button):not(a) {
      border-radius: 12px !important;
    }

    /* ═══ TESTCASE / CONSOLE / RESULT PANELS ═══ */
    [class*="testcase"], [class*="result-"],
    [class*="console-"], [class*="submission-"],
    div[data-e2e-locator="console-result"],
    div[data-e2e-locator="submission-result"] {
      background: rgba(10, 8, 20, 0.3) !important;
      background-color: rgba(10, 8, 20, 0.3) !important;
      border: 2px solid rgba(0, 0, 0, 0.4) !important;
      border-radius: 12px !important;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 
                  0 4px 16px rgba(0, 0, 0, 0.5) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
    }

    /* ═══ TAB STRIP (above editor / description) ═══ */
    .flexlayout__tabset_tabbar_outer,
    .flexlayout__tabset_tabbar_outer_top {
      background: transparent !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border-bottom: 2px solid rgba(0, 0, 0, 0.4) !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4) !important;
    }

    /* ═══ NAVBAR & BUTTONS (Fixes split half-black/half-grey "Problem" button) ═══ */
    nav, header,
    [class*="navbar"], [class*="NavBar"],
    [class*="top-bar"], [class*="TopBar"],
    div[class*="nav-"],
    /* Problem page top bar specifically */
    div:has(> a[href*="problemset"]),
    div:has(#nav-setting-btn),
    div:has(#qd-layout-manager-btn),
    div:has(button[data-cy="submit-code-btn"]) {
      background: transparent !important;
      background-color: transparent !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border-bottom: 2px solid rgba(0, 0, 0, 0.4) !important;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
    }

    /* The "Problems" title button in the problem-page top bar — glass pill */
    div:has(#nav-setting-btn) > div > button:first-child,
    div:has(#qd-layout-manager-btn) > button,
    div:has(> a[href*="problemset"]) > button {
      background: rgba(255, 255, 255, 0.10) !important;
      background-color: rgba(255, 255, 255, 0.10) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 8px !important;
      color: #f0f6fc !important;
    }

    /* ALL children of nav buttons must be transparent (fixes partial-dark child divs) */
    nav button *, nav a *, header button *, header a *,
    div:has(#nav-setting-btn) button *,
    div:has(#nav-setting-btn) a *,
    div:has(#qd-layout-manager-btn) button *,
    div:has(> a[href*="problemset"]) button *,
    div:has(> a[href*="problemset"]) a * {
      background: transparent !important;
      background-color: transparent !important;
    }

    /* ALL direct child divs inside navbar that aren't buttons should be transparent */
    div:has(#nav-setting-btn) > div,
    div:has(#qd-layout-manager-btn) > div:not(button):not(a) {
      background: transparent !important;
      background-color: transparent !important;
    }

    /* ═══ PROFILE TABS (Fixes stuck Recent AC / List highlight) ═══ */
    /* ALL tab buttons/links → transparent by default */
    [role="tab"],
    [role="tablist"] button, [role="tablist"] a,
    div[role="tablist"] button, div[role="tablist"] a,
    [class*="tablist"] button, [class*="tablist"] a {
      background: transparent !important;
      background-color: transparent !important;
      border-bottom: 2px solid transparent !important;
      box-shadow: none !important;
    }

    /* ACTIVE tab → glass highlight */
    [role="tab"][aria-selected="true"],
    [role="tab"][data-state="active"],
    div[role="tablist"] button[aria-selected="true"],
    div[role="tablist"] button[data-state="active"],
    div[role="tablist"] a[aria-selected="true"],
    div[role="tablist"] a[data-state="active"],
    [class*="tablist"] button[aria-selected="true"],
    [class*="tablist"] button[data-state="active"],
    [class*="tablist"] a[aria-selected="true"],
    [class*="tablist"] a[data-state="active"] {
      background: rgba(255, 255, 255, 0.14) !important;
      background-color: rgba(255, 255, 255, 0.14) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border: 1px solid rgba(255, 255, 255, 0.22) !important;
      color: #ffffff !important;
      border-radius: 8px !important;
      box-shadow: 0 2px 10px rgba(0,0,0,0.35) !important;
    }

    /* Flexlayout tab buttons (problem page tabs: Description, Solutions, etc.) */
    .flexlayout__tab_button--selected,
    .flexlayout__tab_button[aria-selected="true"] {
      background: rgba(255,255,255,0.12) !important;
      border-bottom: 2px solid #38bdf8 !important;
      color: #f0f6fc !important;
    }

    /* ═══ TEXT VISIBILITY ACROSS ALL LEETCODE PAGES ═══ */
    body { color: #f0f6fc !important; }

    p, span, li, td, th, label, h1, h2, h3, h4, h5, h6 {
      color: #f0f6fc;
    }

    /* Force primary text color */
    [class*="text-label-1"], [class*="dark:text-label-1"],
    [class*="dark:text-dark-label-1"], [class*="text-dark-label-1"],
    [class*="dark:text-white"], [class*="text-gray-900"],
    [class*="text-gray-800"], [class*="text-gray-700"],
    [class*="text-black"], [class*="text-neutral-900"],
    [class*="text-zinc-900"], [class*="text-slate-900"],
    [class*="text-lc-text-primary"],
    [class*="dark:text-lc-text-primary"],
    [class*="dark:text-dark-lc-text-primary"] {
      color: #f0f6fc !important;
    }

    /* Secondary text */
    [class*="text-label-2"], [class*="dark:text-dark-label-2"],
    [class*="text-gray-500"], [class*="text-gray-400"],
    [class*="text-neutral-500"], [class*="text-zinc-500"],
    [class*="text-lc-text-secondary"],
    [class*="dark:text-dark-lc-text-secondary"] {
      color: #c4cdd8 !important;
    }

    /* Muted text */
    [class*="text-label-3"], [class*="dark:text-dark-label-3"],
    [class*="text-gray-300"], [class*="text-neutral-400"] {
      color: #9aa4b2 !important;
    }

    /* Inline code blocks */
    code:not(.monaco-editor code), kbd {
      background: rgba(255,255,255,0.10) !important;
      color: #a8d8ea !important;
      border-radius: 4px !important;
      padding: 1px 5px !important;
    }

    /* Form controls */
    input, textarea, select {
      color: #f0f6fc !important;
      background: rgba(8, 6, 20, 0.60) !important;
      border: 1px solid rgba(255,255,255,0.14) !important;
    }

    /* ═══ LINKS — ensure links stay bright, with hover effects ═══ */
    a:not(nav a):not(header a) {
      color: #58a6ff;
    }
    a:hover:not(nav a):not(header a) {
      color: #79c0ff;
    }

    /* ═══ SCROLLBAR STYLING — premium dark glass ═══ */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
    }

    /* ═══ DROPDOWN MENUS — prevent white/opaque menus ═══ */
    [class*="dropdown"], [class*="Dropdown"],
    [class*="popover"], [class*="Popover"],
    [class*="menu-list"], [class*="MenuList"],
    [role="menu"], [role="listbox"] {
      background: rgba(12, 10, 26, 0.90) !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border: 2px solid rgba(0, 0, 0, 0.45) !important;
      border-radius: 12px !important;
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.7), 
                  0 6px 24px rgba(0, 0, 0, 0.6) !important;
    }

    /* ═══ TOOLTIPS ═══ */
    [class*="tooltip"], [class*="Tooltip"], [role="tooltip"] {
      background: rgba(12, 10, 26, 0.92) !important;
      color: #f0f6fc !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border: 1px solid rgba(255,255,255,0.10) !important;
    }

    /* ═══ TABLE/LIST ROWS — alternating, readable ═══ */
    tr:nth-child(even), [class*="odd:bg-"],
    [class*="even:bg-"] {
      background: rgba(255,255,255,0.03) !important;
    }

    /* Difficulty badge colors preserved */
    [class*="text-difficulty-easy"], .text-green-s,
    [class*="text-green-"] { color: #00b8a3 !important; }
    [class*="text-difficulty-medium"], .text-yellow-s,
    [class*="text-yellow-"] { color: #ffc01e !important; }
    [class*="text-difficulty-hard"], .text-red-s,
    [class*="text-red-"] { color: #ff375f !important; }

    [class*="text-brand-orange"],
    [class*="dark:text-dark-brand-orange"] { color: #ff9f0a !important; }
  `);
  document.head.appendChild(bgEl);

  // Step 5: Inline style adjustments for SPA & Monaco
  _forceWallpaperInline(resolvedUrl, scrim);

  document.documentElement.setAttribute('data-lts', 'anime-wallpaper');
}

// Targeted JS helper that sets correct inline backgrounds without breaking tabs or buttons
function _forceWallpaperInline(resolvedUrl, scrim) {
  const TRANSPARENT = 'transparent';
  const LIGHT_GLASS = 'transparent';   // description + editor - NOW TRANSPARENT
  const CARD_GLASS  = 'transparent';   // cards - NOW TRANSPARENT

  const clearSelectors = [
    '#__next', '#root', '#base_content', '#app', '#contest-app',
    'body > div', '#__next > div', '#root > div',
    '[class*="h-screen"]', '[class*="min-h-screen"]',
    '.flexlayout__layout', '.flexlayout__tabset',
    '.flexlayout__tabset_content', '.flexlayout__tab',
    '.flexlayout__tabset_tabbar_outer',
    '.flexlayout__tabset_header', '.flexlayout__tabset_header_inner',
    '#qd-content', '#main-content', 'main',
    'div[class*="contest"]', 'div[class*="Contest"]',
    '[class*="contest-hero"]', '[class*="ContestHero"]',
    '[class*="bg-gradient"]', '[class*="dark:bg-gradient"]',
    '[class*="bg-paper"]', '[class*="bg-base"]',
  ];

  function clearWrappers() {
    clearSelectors.forEach(sel => {
      try {
        document.querySelectorAll(sel).forEach(el => {
          el.style.setProperty('background', TRANSPARENT, 'important');
          el.style.setProperty('background-color', TRANSPARENT, 'important');
          el.style.setProperty('background-image', 'none', 'important');
        });
      } catch(_) {}
    });

    // Nuclear: walk the DOM tree from body and clear any element with an opaque background
    // but only for the top-level wrapper divs (first 4 levels)
    try {
      let el = document.body;
      for (let i = 0; i < 6; i++) {
        if (!el) break;
        el.style.setProperty('background', TRANSPARENT, 'important');
        el.style.setProperty('background-color', TRANSPARENT, 'important');
        el.style.setProperty('background-image', 'none', 'important');
        // Descend into first child div/main
        const child = el.querySelector(':scope > div, :scope > main, :scope > section');
        el = child;
      }
    } catch(_) {}

    // Also clear any element with inline background-image (SVG patterns, gradients)
    try {
      document.querySelectorAll('[style*="background-image"], [style*="background: linear"], [style*="background: radial"]').forEach(el => {
        if (el.tagName === 'IMG' || el.tagName === 'CANVAS') return;
        if (el.closest('.monaco-editor, #editor')) return; // skip code editor
        el.style.setProperty('background-image', 'none', 'important');
        el.style.setProperty('background', TRANSPARENT, 'important');
      });
    } catch(_) {}
  }

  function styleMonaco() {
    // Only style the outer Monaco editor container, keeping inner layers transparent
    try {
      document.querySelectorAll('#editor, #code-editor, div[class*="editor-container"]').forEach(el => {
        el.style.setProperty('background', 'rgba(10, 8, 20, 0.3)', 'important');
        el.style.setProperty('background-color', 'rgba(10, 8, 20, 0.3)', 'important');
        el.style.setProperty('backdrop-filter', 'none', 'important');
        el.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
      });
      document.querySelectorAll(
        '.monaco-editor-background, .monaco-editor .overflow-guard, .monaco-editor .lines-content, ' +
        '.monaco-editor .view-lines, .monaco-editor .margin, .monaco-editor .view-overlays'
      ).forEach(el => {
        el.style.setProperty('background', TRANSPARENT, 'important');
        el.style.setProperty('background-color', TRANSPARENT, 'important');
      });
    } catch(_) {}
  }

  function styleCards() {
    // Target content boxes (profile stats, cards, etc.) but strictly EXCLUDE buttons, links, and tabs!
    const cardSelectors = [
      '[class*="bg-layer-1"]', '[class*="dark:bg-layer-1"]',
      '[class*="bg-card"]', '[class*="bg-sd-card"]',
      '[class*="bg-fill-2"]', '[class*="bg-fill-3"]',
      '[class*="dark:bg-fill-2"]', '[class*="dark:bg-fill-3"]',
      '[class*="dark:bg-dark-fill-2"]', '[class*="dark:bg-dark-fill-3"]',
      '[class*="bg-fill-4"]', '[class*="dark:bg-dark-fill-4"]',
    ];
    cardSelectors.forEach(sel => {
      try {
        document.querySelectorAll(sel).forEach(el => {
          // Never force card backgrounds onto tabs, links, or navbar buttons!
          if (el.tagName === 'BUTTON' || el.tagName === 'A' || el.getAttribute('role') === 'tab') return;
          if (el.closest('nav, header, [role="tablist"], .flexlayout__tabset_tabbar_outer')) return;

          el.style.setProperty('background', 'rgba(10, 8, 20, 0.3)', 'important');
          el.style.setProperty('background-color', 'rgba(10, 8, 20, 0.3)', 'important');
          el.style.setProperty('backdrop-filter', 'none', 'important');
          el.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
          el.style.setProperty('border', '2px solid rgba(0, 0, 0, 0.4)', 'important');
          el.style.setProperty('border-radius', '12px', 'important');
          el.style.setProperty('box-shadow', '0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)', 'important');
        });
      } catch(_) {}
    });

    // Profile page: target rounded sections (stats containers, heatmap, badges)
    try {
      document.querySelectorAll('div[class*="rounded-lg"]').forEach(el => {
        if (el.tagName === 'BUTTON' || el.tagName === 'A' || el.getAttribute('role') === 'tab') return;
        if (el.closest('nav, header, [role="tablist"], .flexlayout__tabset_tabbar_outer')) return;
        // Only apply to elements that are large enough to be content sections (not tiny pills/badges)
        if (el.offsetWidth < 100 || el.offsetHeight < 40) return;
        // Apply light dark transparent background
        el.style.setProperty('background', 'rgba(10, 8, 20, 0.3)', 'important');
        el.style.setProperty('background-color', 'rgba(10, 8, 20, 0.3)', 'important');
        el.style.setProperty('backdrop-filter', 'none', 'important');
        el.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
        el.style.setProperty('border', '2px solid rgba(0, 0, 0, 0.4)', 'important');
        el.style.setProperty('border-radius', '12px', 'important');
        el.style.setProperty('box-shadow', '0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)', 'important');
      });
    } catch(_) {}

    // Description panel - light dark transparent bg
    try {
      document.querySelectorAll(
        'div[data-track-load="description_content"], div[data-track-load="qd-content"]'
      ).forEach(el => {
        el.style.setProperty('background', 'rgba(10, 8, 20, 0.3)', 'important');
        el.style.setProperty('background-color', 'rgba(10, 8, 20, 0.3)', 'important');
        el.style.setProperty('backdrop-filter', 'none', 'important');
        el.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
        el.style.setProperty('border', '2px solid rgba(0, 0, 0, 0.4)', 'important');
        el.style.setProperty('border-radius', '12px', 'important');
        el.style.setProperty('box-shadow', '0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)', 'important');
      });
    } catch(_) {}
  }

  function applyAll() {
    clearWrappers();
    styleMonaco();
    styleCards();
  }

  applyAll();
  setTimeout(applyAll, 300);
  setTimeout(applyAll, 1000);
  setTimeout(applyAll, 2500);

  // Poll Monaco for 5 seconds to ensure LeetCode's editor init doesn't override it
  let monacoTick = 0;
  const monacoInterval = setInterval(() => {
    styleMonaco();
    monacoTick++;
    if (monacoTick >= 10) clearInterval(monacoInterval);
  }, 500);
}