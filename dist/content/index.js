var _ts = (() => {
  // src/themes/index.js
  var THEMES = {
    "dark-pro": {
      id: "dark-pro",
      name: "Dark Pro",
      tagline: "Clean. Focused. Elite.",
      emoji: "\u{1F311}",
      category: "minimal",
      isPremium: false,
      accentColor: "#58a6ff",
      previewGradient: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
      glowColor: "rgba(88, 166, 255, 0.4)",
      variables: {
        "--ts-bg-primary": "#0d1117",
        "--ts-bg-secondary": "#161b22",
        "--ts-bg-tertiary": "#21262d",
        "--ts-bg-hover": "#30363d",
        "--ts-accent": "#58a6ff",
        "--ts-accent-2": "#79c0ff",
        "--ts-accent-glow": "rgba(88, 166, 255, 0.35)",
        "--ts-selection": "rgba(88, 166, 255, 0.4)",
        "--ts-text-primary": "#e6edf3",
        "--ts-text-secondary": "#8b949e",
        "--ts-text-muted": "#484f58",
        "--ts-border": "rgba(48, 54, 61, 0.8)",
        "--ts-border-accent": "rgba(88, 166, 255, 0.4)",
        "--ts-success": "#3fb950",
        "--ts-warning": "#d29922",
        "--ts-error": "#f85149",
        "--ts-font": "'Inter', 'SF Pro Display', system-ui, sans-serif",
        "--ts-font-mono": "'JetBrains Mono', 'Fira Code', monospace",
        "--ts-radius": "8px",
        "--ts-bg-image": "none",
        "--ts-bg-overlay": "none"
      },
      editorTheme: {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "6e7681", fontStyle: "italic" },
          { token: "keyword", foreground: "ff7b72" },
          { token: "string", foreground: "a5d6ff" },
          { token: "number", foreground: "79c0ff" },
          { token: "type", foreground: "ffa657" },
          { token: "function", foreground: "d2a8ff" }
        ],
        colors: {
          "editor.background": "#0d1117",
          "editor.foreground": "#e6edf3",
          "editorLineNumber.foreground": "#484f58",
          "editorCursor.foreground": "#58a6ff",
          "editor.selectionBackground": "#264f78",
          "editor.inactiveSelectionBackground": "#264f7880",
          "editor.selectionHighlightBackground": "#264f7860",
          "editor.lineHighlightBackground": "#161b22",
          "editorWidget.background": "#161b22",
          "editorSuggestWidget.background": "#161b22"
        }
      }
    },
    "anime-night": {
      id: "anime-night",
      name: "Anime Night",
      tagline: "Sakura blooms at midnight.",
      emoji: "\u{1F338}",
      category: "anime",
      isPremium: false,
      accentColor: "#ff7ab2",
      previewGradient: "linear-gradient(135deg, #140e2c 0%, #1b133a 50%, #261b4e 100%)",
      glowColor: "rgba(255, 122, 178, 0.5)",
      variables: {
        "--ts-bg-primary": "#140e2c",
        "--ts-bg-secondary": "#1b133a",
        "--ts-bg-tertiary": "#261b4e",
        "--ts-bg-hover": "#35256e",
        "--ts-accent": "#ff7ab2",
        "--ts-accent-2": "#b026ff",
        "--ts-accent-glow": "rgba(255, 122, 178, 0.4)",
        "--ts-selection": "rgba(176, 38, 255, 0.45)",
        "--ts-text-primary": "#f5f0ff",
        "--ts-text-secondary": "#b3a7d4",
        "--ts-text-muted": "#6f638f",
        "--ts-border": "rgba(176, 38, 255, 0.28)",
        "--ts-border-accent": "rgba(255, 122, 178, 0.55)",
        "--ts-success": "#a8ff8e",
        "--ts-warning": "#ffd580",
        "--ts-error": "#ff6b8a",
        "--ts-font": "'Nunito', 'Quicksand', system-ui, sans-serif",
        "--ts-font-mono": "'Fira Code', monospace",
        "--ts-radius": "10px",
        "--ts-bg-image": "none",
        "--ts-bg-overlay": "none"
      },
      editorTheme: {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "9b91b3", fontStyle: "italic" },
          { token: "keyword", foreground: "ff7ab2", fontStyle: "bold" },
          { token: "string", foreground: "a8ff8e" },
          { token: "number", foreground: "00f0ff" },
          { token: "type", foreground: "ffd580" },
          { token: "function", foreground: "b026ff" }
        ],
        colors: {
          "editor.background": "#140e2c",
          "editor.foreground": "#f5f0ff",
          "editorLineNumber.foreground": "#6f638f",
          "editorCursor.foreground": "#ff7ab2",
          "editor.selectionBackground": "#6e2da8",
          "editor.inactiveSelectionBackground": "#6e2da880",
          "editor.selectionHighlightBackground": "#6e2da860",
          "editor.lineHighlightBackground": "#1b133a",
          "editorWidget.background": "#1b133a"
        }
      }
    },
    "adventure": {
      id: "adventure",
      name: "Adventure",
      tagline: "Code like a legend.",
      emoji: "\u2694\uFE0F",
      category: "epic",
      isPremium: false,
      accentColor: "#d4a017",
      previewGradient: "linear-gradient(135deg, #181308 0%, #221b0b 50%, #302710 100%)",
      glowColor: "rgba(212, 160, 23, 0.5)",
      variables: {
        "--ts-bg-primary": "#181308",
        "--ts-bg-secondary": "#221b0b",
        "--ts-bg-tertiary": "#302710",
        "--ts-bg-hover": "#423616",
        "--ts-accent": "#d4a017",
        "--ts-accent-2": "#f3c846",
        "--ts-accent-glow": "rgba(212, 160, 23, 0.45)",
        "--ts-selection": "rgba(212, 160, 23, 0.45)",
        "--ts-text-primary": "#f5e6c8",
        "--ts-text-secondary": "#b39c6d",
        "--ts-text-muted": "#695733",
        "--ts-border": "rgba(212, 160, 23, 0.25)",
        "--ts-border-accent": "rgba(212, 160, 23, 0.55)",
        "--ts-success": "#7aff8e",
        "--ts-warning": "#d4a017",
        "--ts-error": "#ff5c5c",
        "--ts-font": "'Cinzel', 'Georgia', serif",
        "--ts-font-mono": "'Courier Prime', 'Courier New', monospace",
        "--ts-radius": "6px",
        "--ts-bg-image": "none",
        "--ts-bg-overlay": "none"
      },
      editorTheme: {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "7a6a3a", fontStyle: "italic" },
          { token: "keyword", foreground: "d4a017", fontStyle: "bold" },
          { token: "string", foreground: "a8d89e" },
          { token: "number", foreground: "e8c547" },
          { token: "type", foreground: "f5a623" },
          { token: "function", foreground: "c8e0a8" }
        ],
        colors: {
          "editor.background": "#181308",
          "editor.foreground": "#f5e6c8",
          "editorLineNumber.foreground": "#695733",
          "editorCursor.foreground": "#d4a017",
          "editor.selectionBackground": "#6b520a",
          "editor.inactiveSelectionBackground": "#6b520a80",
          "editor.selectionHighlightBackground": "#6b520a60",
          "editor.lineHighlightBackground": "#221b0b",
          "editorWidget.background": "#221b0b"
        }
      }
    },
    "pixel-art": {
      id: "pixel-art",
      name: "Pixel Art",
      tagline: "Retro vibes. Modern code.",
      emoji: "\u{1F47E}",
      category: "retro",
      isPremium: false,
      accentColor: "#00ff41",
      previewGradient: "linear-gradient(135deg, #0c0c22 0%, #141434 50%, #1e1e4a 100%)",
      glowColor: "rgba(0, 255, 65, 0.4)",
      variables: {
        "--ts-bg-primary": "#0c0c22",
        "--ts-bg-secondary": "#141434",
        "--ts-bg-tertiary": "#1e1e4a",
        "--ts-bg-hover": "#2b2b64",
        "--ts-accent": "#00ff41",
        "--ts-accent-2": "#ffff00",
        "--ts-accent-glow": "rgba(0, 255, 65, 0.4)",
        "--ts-selection": "rgba(0, 255, 65, 0.35)",
        "--ts-text-primary": "#00ff41",
        "--ts-text-secondary": "#00cc33",
        "--ts-text-muted": "#007722",
        "--ts-border": "rgba(0, 255, 65, 0.25)",
        "--ts-border-accent": "rgba(0, 255, 65, 0.65)",
        "--ts-success": "#00ff41",
        "--ts-warning": "#ffff00",
        "--ts-error": "#ff2222",
        "--ts-font": "'VT323', 'Share Tech Mono', monospace",
        "--ts-font-mono": "'Share Tech Mono', 'Courier New', monospace",
        "--ts-radius": "0px",
        "--ts-bg-image": "none",
        "--ts-bg-overlay": "none"
      },
      editorTheme: {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "007722", fontStyle: "italic" },
          { token: "keyword", foreground: "ffff00", fontStyle: "bold" },
          { token: "string", foreground: "00ff41" },
          { token: "number", foreground: "ff6600" },
          { token: "type", foreground: "00ffff" },
          { token: "function", foreground: "ff00ff" }
        ],
        colors: {
          "editor.background": "#0c0c22",
          "editor.foreground": "#00ff41",
          "editorLineNumber.foreground": "#007722",
          "editorCursor.foreground": "#00ff41",
          "editor.selectionBackground": "#005530",
          "editor.inactiveSelectionBackground": "#00553080",
          "editor.selectionHighlightBackground": "#00553060",
          "editor.lineHighlightBackground": "#141434",
          "editorWidget.background": "#141434"
        }
      }
    },
    "vintage-paper": {
      id: "vintage-paper",
      name: "Vintage Paper",
      tagline: "Ancient Grimoire. Archival Ink.",
      emoji: "\u{1F4DC}",
      category: "warm",
      isPremium: false,
      accentColor: "#d4a359",
      previewGradient: "linear-gradient(135deg, #18110b 0%, #c4a066 50%, #18110b 100%)",
      glowColor: "rgba(212, 163, 89, 0.35)",
      variables: {
        "--ts-bg-primary": "#18110b",
        "--ts-bg-secondary": "#221810",
        "--ts-bg-tertiary": "#2d2015",
        "--ts-bg-hover": "#3a2b1c",
        "--ts-accent": "#d4a359",
        "--ts-accent-2": "#c44333",
        "--ts-accent-glow": "rgba(212, 163, 89, 0.35)",
        "--ts-selection": "rgba(212, 163, 89, 0.38)",
        "--ts-text-primary": "#f5ecd7",
        "--ts-text-secondary": "#cbb590",
        "--ts-text-muted": "#948063",
        "--ts-border": "rgba(212, 163, 89, 0.22)",
        "--ts-border-accent": "rgba(212, 163, 89, 0.50)",
        "--ts-success": "#4ea84b",
        "--ts-warning": "#e5a038",
        "--ts-error": "#c44333",
        "--ts-font": "'Lora', 'EB Garamond', Georgia, serif",
        "--ts-font-mono": "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
        "--ts-radius": "6px",
        "--ts-bg-image": "none",
        "--ts-bg-overlay": "none"
      },
      editorTheme: {
        base: "vs",
        inherit: true,
        rules: [
          { token: "comment", foreground: "755837", fontStyle: "italic" },
          { token: "keyword", foreground: "8b261e", fontStyle: "bold" },
          { token: "keyword.type", foreground: "6a359c", fontStyle: "bold" },
          { token: "type", foreground: "6a359c", fontStyle: "bold" },
          { token: "type.identifier", foreground: "6a359c", fontStyle: "bold" },
          { token: "class", foreground: "6a359c", fontStyle: "bold" },
          { token: "string", foreground: "236928" },
          { token: "number", foreground: "00695c" },
          { token: "function", foreground: "1a56a6" },
          { token: "identifier", foreground: "1a56a6" },
          { token: "variable", foreground: "1a56a6" },
          { token: "variable.parameter", foreground: "1a56a6" },
          { token: "delimiter", foreground: "24180d" },
          { token: "operator", foreground: "24180d" }
        ],
        colors: {
          "editor.background": "#c5a268",
          "editor.foreground": "#1a56a6",
          "editorLineNumber.foreground": "#755837",
          "editorCursor.foreground": "#8b261e",
          "editor.selectionBackground": "#dfb668",
          "editor.inactiveSelectionBackground": "#dfb66890",
          "editor.selectionHighlightBackground": "#dfb66870",
          "editor.lineHighlightBackground": "#b8935740",
          "editorWidget.background": "#ba965c",
          "editorBracketMatch.background": "#8b261e15",
          "editorBracketMatch.border": "#8b261e"
        }
      }
    },
    "sunset-lofi": {
      id: "sunset-lofi",
      name: "Sunset Lofi",
      tagline: "Code to the golden hour.",
      emoji: "\u{1F305}",
      category: "warm",
      isPremium: false,
      accentColor: "#ff8c42",
      previewGradient: "linear-gradient(135deg, #1c0d38 0%, #26124a 50%, #341963 100%)",
      glowColor: "rgba(255, 140, 66, 0.45)",
      variables: {
        "--ts-bg-primary": "#1c0d38",
        "--ts-bg-secondary": "#26124a",
        "--ts-bg-tertiary": "#341963",
        "--ts-bg-hover": "#462285",
        "--ts-accent": "#ff8c42",
        "--ts-accent-2": "#ffcc70",
        "--ts-accent-glow": "rgba(255, 140, 66, 0.4)",
        "--ts-selection": "rgba(255, 140, 66, 0.45)",
        "--ts-text-primary": "#ffeedd",
        "--ts-text-secondary": "#cca38f",
        "--ts-text-muted": "#825848",
        "--ts-border": "rgba(255, 140, 66, 0.25)",
        "--ts-border-accent": "rgba(255, 140, 66, 0.55)",
        "--ts-success": "#a8ff78",
        "--ts-warning": "#ffcc70",
        "--ts-error": "#ff6b6b",
        "--ts-font": "'Outfit', 'Poppins', sans-serif",
        "--ts-font-mono": "'Fira Code', monospace",
        "--ts-radius": "10px",
        "--ts-bg-image": "none",
        "--ts-bg-overlay": "none"
      },
      editorTheme: {
        base: "vs-dark",
        inherit: true,
        rules: [
          { token: "comment", foreground: "825848", fontStyle: "italic" },
          { token: "keyword", foreground: "ff8c42", fontStyle: "bold" },
          { token: "string", foreground: "a8ff78" },
          { token: "number", foreground: "ffcc70" },
          { token: "type", foreground: "ff6b9d" },
          { token: "function", foreground: "c680ff" }
        ],
        colors: {
          "editor.background": "#1c0d38",
          "editor.foreground": "#ffeedd",
          "editorLineNumber.foreground": "#825848",
          "editorCursor.foreground": "#ff8c42",
          "editor.selectionBackground": "#7a3512",
          "editor.inactiveSelectionBackground": "#7a351280",
          "editor.selectionHighlightBackground": "#7a351260",
          "editor.lineHighlightBackground": "#26124a",
          "editorWidget.background": "#26124a"
        }
      }
    }
  };
  var DEFAULT_THEME = "dark-pro";

  // src/content/cssLoader.js
  var THEME_CSS_MAP = {
    "dark-pro": "dark-pro.css",
    "anime-night": "anime-night.css",
    "adventure": "adventure.css",
    "pixel-art": "pixel-art.css",
    "vintage-paper": "vintage-paper.css",
    "sunset-lofi": "sunset-lofi.css"
  };
  var CSS_IDS = {
    base: "lts-base-css",
    theme: "lts-theme-css",
    universal: "lts-universal-css"
  };
  function loadStylesheet(href, id) {
    return new Promise((resolve, reject) => {
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = href;
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to load ${href}`));
      document.head.appendChild(link);
    });
  }
  async function loadThemeCSS(themeId) {
    const filename = THEME_CSS_MAP[themeId];
    if (!filename) return;
    try {
      const url = chrome.runtime.getURL(`content/themes/${filename}`);
      await loadStylesheet(url, CSS_IDS.theme);
    } catch (error) {
    }
  }
  async function loadUniversalCSS() {
    try {
      const url = chrome.runtime.getURL("content/universal.css");
      await loadStylesheet(url, CSS_IDS.universal);
    } catch (error) {
    }
  }
  async function loadBaseCSS() {
    try {
      const url = chrome.runtime.getURL("content/base.css");
      await loadStylesheet(url, CSS_IDS.base);
    } catch (error) {
    }
  }
  async function initializeCSS() {
    await Promise.all([
      loadBaseCSS(),
      loadUniversalCSS()
    ]);
  }

  // src/utils/imagePreloader.js
  var preloadedImages = /* @__PURE__ */ new Map();
  function preloadImage(url) {
    if (preloadedImages.has(url)) {
      return Promise.resolve(preloadedImages.get(url));
    }
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        preloadedImages.set(url, img);
        resolve(img);
      };
      img.onerror = () => {
        reject(new Error(`Failed to preload image: ${url}`));
      };
      img.src = url;
    });
  }

  // src/content/themeApplicator.js
  var IDS = {
    vars: "lts-vars",
    font: "lts-font",
    bg: "lts-bg",
    style: "lts-style",
    editor: "lts-editor",
    animCss: "lts-anim-css",
    animDom: "lts-anim-dom"
  };
  var cssInitialized = false;
  var FONTS = {
    "dark-pro": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    "anime-night": "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap",
    "adventure": "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&display=swap",
    "pixel-art": "https://fonts.googleapis.com/css2?family=VT323&family=Share+Tech+Mono&display=swap",
    "vintage-paper": "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap",
    "sunset-lofi": "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap"
  };
  var BACKGROUNDS = {
    "dark-pro": `background:
    radial-gradient(ellipse at 20% 30%, rgba(88,166,255,0.07) 0%, transparent 55%),
    radial-gradient(ellipse at 80% 70%, rgba(56,139,253,0.05) 0%, transparent 45%),
    linear-gradient(160deg, #0a0d12 0%, #0d1117 40%, #0a0d12 100%);`,
    "anime-night": `background:
    radial-gradient(circle at 74% 15%, rgba(255,252,220,1) 0%, rgba(220,235,255,0.9) 2%, rgba(150,200,255,0.3) 6%, transparent 15%),
    radial-gradient(circle at 74% 15%, rgba(100,160,255,0.18) 0%, transparent 28%),
    radial-gradient(ellipse at 28% 22%, rgba(130,45,160,0.45) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 100%, rgba(35,15,65,0.85) 0%, rgba(20,10,40,0.5) 40%, transparent 65%),
    linear-gradient(180deg, #0d091e 0%, #120c28 28%, #140e2c 55%, #191136 75%, #0f0a22 100%);`,
    "adventure": `background:
    radial-gradient(ellipse at 50% -10%, rgba(212,160,23,0.22) 0%, rgba(160,100,0,0.12) 40%, transparent 65%),
    radial-gradient(ellipse at 0% 100%, rgba(80,50,0,0.25) 0%, transparent 50%),
    linear-gradient(160deg, #120e06 0%, #181308 35%, #221b0b 70%, #151006 100%);`,
    "pixel-art": `background:
    repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,65,0.03) 3px, rgba(0,255,65,0.03) 4px),
    radial-gradient(ellipse at 50% 40%, rgba(0,255,65,0.10) 0%, transparent 60%),
    linear-gradient(180deg, #08081a 0%, #0c0c22 50%, #08081a 100%);`,
    "vintage-paper": `background:
    radial-gradient(ellipse at 50% 50%, #221810 0%, #18110b 60%, #120b06 100%);`,
    "sunset-lofi": `background:
    radial-gradient(circle at 50% 55%, rgba(255,140,0,0.35) 0%, transparent 28%),
    radial-gradient(ellipse at 50% 55%, rgba(255,100,50,0.25) 0%, rgba(200,50,100,0.15) 30%, transparent 55%),
    linear-gradient(180deg, #120528 0%, #1c0d38 25%, #2a114c 50%, #461658 75%, #1c0d38 100%);`
  };
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
      const s = el("div", "lts-star");
      const sz = 1 + rnd(2.5);
      css2(s, `left:${rnd(100)}%;top:${rnd(60)}%;width:${sz}px;height:${sz}px;animation-duration:${2 + rnd(3)}s;animation-delay:${-rnd(5)}s`);
      wrap.appendChild(s);
    }
    for (let i = 0; i < 28; i++) {
      const p = el("div", "lts-petal");
      const sz = 8 + rnd(12), dur = 7 + rnd(12), sway = 3 + rnd(5);
      css2(p, `left:${rnd(105) - 5}%;width:${sz}px;height:${sz * 0.65}px;animation-duration:${dur}s,${sway}s;animation-delay:${-rnd(25)}s,${-rnd(6)}s;opacity:${0.6 + rnd(0.35)};transform:rotate(${rnd(360)}deg)`);
      wrap.appendChild(p);
    }
    document.body.appendChild(wrap);
    setupAnimationPause();
  }
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
    const colors = ["rgba(255,220,80,0.9)", "rgba(255,180,50,0.9)", "rgba(255,140,60,0.8)"];
    for (let i = 0; i < 22; i++) {
      const f = el("div", "lts-firefly");
      const sz = 2 + rnd(4), c = colors[i % colors.length];
      css2(f, `left:${rnd(100)}%;top:${40 + rnd(50)}%;width:${sz}px;height:${sz}px;background:${c};box-shadow:0 0 ${sz * 2}px ${c};animation-duration:${5 + rnd(8)}s,${1 + rnd(3)}s;animation-delay:${-rnd(10)}s,${-rnd(3)}s`);
      wrap.appendChild(f);
    }
    document.body.appendChild(wrap);
    setupAnimationPause();
  }
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
    const invaderSvg = (col, sz) => `<svg viewBox="0 0 11 8" width="${sz}" height="${sz * 0.73}" fill="${col}" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="0" width="1" height="1"/><rect x="8" y="0" width="1" height="1"/>
    <rect x="3" y="1" width="1" height="1"/><rect x="7" y="1" width="1" height="1"/>
    <rect x="2" y="2" width="7" height="1"/>
    <rect x="1" y="3" width="2" height="1"/><rect x="4" y="3" width="3" height="1"/><rect x="8" y="3" width="2" height="1"/>
    <rect x="0" y="4" width="11" height="1"/>
    <rect x="0" y="5" width="1" height="1"/><rect x="2" y="5" width="7" height="1"/><rect x="10" y="5" width="1" height="1"/>
    <rect x="0" y="6" width="1" height="1"/><rect x="2" y="6" width="1" height="1"/><rect x="8" y="6" width="1" height="1"/><rect x="10" y="6" width="1" height="1"/>
    <rect x="3" y="7" width="2" height="1"/><rect x="6" y="7" width="2" height="1"/>
  </svg>`;
    const pixelColors = ["#00ff41", "#ffff00", "#00ffff"];
    for (let i = 0; i < 10; i++) {
      const s = el("div", "lts-pixel-sprite");
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
      const d = el("div", "lts-dust");
      const sz = 2 + rnd(3.5);
      css2(d, `left:${rnd(100)}%;width:${sz}px;height:${sz}px;animation-duration:${14 + rnd(16)}s;animation-delay:${-rnd(20)}s`);
      wrap.appendChild(d);
    }
    document.body.appendChild(wrap);
  }
  function removeAnimation() {
    document.getElementById(IDS.animCss)?.remove();
    document.getElementById(IDS.animDom)?.remove();
  }
  function injectAnimation(themeId) {
    removeAnimation();
    switch (themeId) {
      case "anime-night":
        injectSakura();
        break;
      case "pixel-art":
        injectPixelArtScene();
        break;
      case "vintage-paper":
        injectVintageScene();
        break;
      case "sunset-lofi":
        injectSunsetFireflies();
        break;
    }
  }
  function injectFont(themeId) {
    document.getElementById(IDS.font)?.remove();
    const url = FONTS[themeId];
    if (!url) return;
    const l = document.createElement("link");
    l.id = IDS.font;
    l.rel = "stylesheet";
    l.href = url;
    document.head.appendChild(l);
  }
  function injectVariables(theme, settings = {}) {
    let e = document.getElementById(IDS.vars);
    if (!e) {
      e = document.createElement("style");
      e.id = IDS.vars;
      document.head.appendChild(e);
    }
    const isLight = theme.id === "vintage-paper";
    const hasWallpaper = Boolean(settings?.wallpaperUrl || settings?.activeWallpaper);
    const themeVars = { ...theme.variables };
    if (hasWallpaper) {
      themeVars["--ts-bg-primary"] = "transparent";
      themeVars["--ts-bg-secondary"] = "rgba(10, 8, 20, 0.3)";
      themeVars["--ts-bg-tertiary"] = "rgba(10, 8, 20, 0.3)";
      themeVars["--ts-bg-hover"] = "rgba(255, 255, 255, 0.08)";
    }
    e.textContent = `
    :root, html, body, html.dark, body.dark, html.light, body.light, html[data-lts], body[data-lts] {
${Object.entries(themeVars).map(([k, v]) => `      ${k}: ${v};`).join("\n")}

      /* LeetCode Native Variable System Overrides \u2014 Both Numeric & Single-Digit */
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
      --sd-background-gray: ${isLight ? "45 35% 85%" : "260 50% 12%"} !important;
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
    if (!e) {
      e = document.createElement("style");
      e.id = IDS.bg;
      document.head.appendChild(e);
    }
    const bg = BACKGROUNDS[theme.id] || BACKGROUNDS["dark-pro"];
    let wallpaperUrl = settings?.wallpaperUrl || settings?.activeWallpaper;
    if (wallpaperUrl && !wallpaperUrl.startsWith("http") && !wallpaperUrl.startsWith("chrome-extension:") && !wallpaperUrl.startsWith("data:")) {
      if (typeof chrome !== "undefined" && chrome.runtime?.getURL) {
        wallpaperUrl = chrome.runtime.getURL(wallpaperUrl);
      }
    }
    const scrim = settings?.wallpaperScrim !== void 0 ? settings.wallpaperScrim : 0.65;
    const hasWallpaper = Boolean(wallpaperUrl);
    if (hasWallpaper && wallpaperUrl) {
      preloadImage(wallpaperUrl).catch((err) => {
        console.warn("[LTS] Wallpaper preload failed:", err);
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
    const hasWallpaper = Boolean(settings?.wallpaperUrl || settings?.activeWallpaper);
    if (hasWallpaper) {
      document.documentElement.classList.remove("lts-no-wallpaper");
      document.documentElement.classList.add("lts-has-wallpaper");
    } else {
      document.documentElement.classList.remove("lts-has-wallpaper");
      document.documentElement.classList.add("lts-no-wallpaper");
    }
    loadThemeCSS(theme.id);
  }
  var _pendingTheme = null;
  function injectEditorTheme(theme) {
    document.getElementById(IDS.editor)?.remove();
    _pendingTheme = theme;
    _sendToBackground(theme);
  }
  function _buildThemeData(theme) {
    const et = theme.editorTheme;
    return {
      id: "lts-" + theme.id,
      base: et.base,
      inherit: et.inherit,
      rules: et.rules || [],
      colors: et.colors || {}
    };
  }
  function _sendToBackground(theme) {
    if (typeof chrome === "undefined" || !chrome.runtime?.sendMessage) return;
    try {
      chrome.runtime.sendMessage({
        type: "INJECT_MONACO_THEME",
        themeData: _buildThemeData(theme)
      });
    } catch (e) {
    }
  }
  function reapplyMonacoTheme() {
    if (_pendingTheme) _sendToBackground(_pendingTheme);
  }
  var WALLPAPER_EDITOR_THEME = {
    id: "wallpaper",
    editorTheme: {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "8b949e", fontStyle: "italic" },
        { token: "keyword", foreground: "ff7b72", fontStyle: "bold" },
        { token: "string", foreground: "a5d6ff" },
        { token: "number", foreground: "79c0ff" },
        { token: "type", foreground: "ffa657" },
        { token: "function", foreground: "d2a8ff" }
      ],
      colors: {
        "editor.background": "#00000000",
        "editorGutter.background": "#00000000",
        "editor.foreground": "#f0f6fc",
        "editorLineNumber.foreground": "#8b949e",
        "editorCursor.foreground": "#58a6ff",
        "editor.selectionBackground": "#388bfd40",
        "editor.inactiveSelectionBackground": "#388bfd25",
        "editor.selectionHighlightBackground": "#388bfd25",
        "editor.lineHighlightBackground": "#ffffff08"
      }
    }
  };
  function rnd(n) {
    return Math.random() * n;
  }
  function el(tag, cls) {
    const e = document.createElement(tag);
    e.className = cls;
    return e;
  }
  function css2(e, s) {
    e.style.cssText += ";" + s;
  }
  function mkStyle(id, content) {
    document.getElementById(id)?.remove();
    const s = document.createElement("style");
    s.id = id;
    s.textContent = content;
    return s;
  }
  function mkWrap() {
    document.getElementById(IDS.animDom)?.remove();
    const w = document.createElement("div");
    w.id = IDS.animDom;
    return w;
  }
  var animationPauseSetup = false;
  function setupAnimationPause() {
    if (animationPauseSetup) return;
    animationPauseSetup = true;
    document.addEventListener("visibilitychange", () => {
      const animDom = document.getElementById(IDS.animDom);
      if (!animDom) return;
      if (document.hidden) {
        animDom.style.display = "none";
      } else {
        animDom.style.display = "block";
      }
    });
  }
  async function applyTheme(themeId, settings = {}) {
    if (!cssInitialized) {
      await initializeCSS();
      cssInitialized = true;
    }
    const validThemeId = THEMES[themeId] ? themeId : DEFAULT_THEME;
    const theme = THEMES[validThemeId];
    let meta = document.getElementById("lts-active-theme");
    if (!meta) {
      meta = document.createElement("meta");
      meta.id = "lts-active-theme";
      (document.head || document.documentElement).appendChild(meta);
    }
    meta.setAttribute("data-theme-id", validThemeId);
    window.dispatchEvent(new CustomEvent("lts-theme-change", { detail: { themeId: validThemeId } }));
    injectFont(validThemeId);
    injectVariables(theme, settings);
    injectBackground(theme, settings);
    injectThemeStyles(theme, settings);
    injectEditorTheme(theme);
    injectAnimation(validThemeId);
    document.documentElement.setAttribute("data-lts", validThemeId);
  }
  function removeTheme() {
    Object.values(IDS).forEach((id) => document.getElementById(id)?.remove());
    document.documentElement.removeAttribute("data-lts");
  }
  function applyWallpaperTheme(wallpaperUrl, scrim = 0.65) {
    removeTheme();
    let resolvedUrl = wallpaperUrl;
    if (resolvedUrl && !resolvedUrl.startsWith("http") && !resolvedUrl.startsWith("chrome-extension:") && !resolvedUrl.startsWith("data:")) {
      if (typeof chrome !== "undefined" && chrome.runtime?.getURL) {
        resolvedUrl = chrome.runtime.getURL(resolvedUrl);
      }
    }
    let meta = document.getElementById("lts-active-theme");
    if (!meta) {
      meta = document.createElement("meta");
      meta.id = "lts-active-theme";
      (document.head || document.documentElement).appendChild(meta);
    }
    meta.setAttribute("data-theme-id", "wallpaper");
    window.dispatchEvent(new CustomEvent("lts-theme-change", { detail: { themeId: "wallpaper" } }));
    _pendingTheme = WALLPAPER_EDITOR_THEME;
    _sendToBackground(WALLPAPER_EDITOR_THEME);
    setTimeout(() => _sendToBackground(WALLPAPER_EDITOR_THEME), 600);
    setTimeout(() => _sendToBackground(WALLPAPER_EDITOR_THEME), 1500);
    setTimeout(() => _sendToBackground(WALLPAPER_EDITOR_THEME), 3e3);
    const CARD_COLOR = "rgba(10, 8, 20, 0.3)";
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

      /* Page-level tokens \u2192 transparent so wallpaper shows */
      --layer-bg: transparent !important;
      --layer-bg-gray: transparent !important;
      --layer-bg-pure: transparent !important;
      --dark-layer-bg: transparent !important;
      --sd-background: transparent !important;
      --sd-background-gray: transparent !important;

      /* Card & panel tokens \u2192 transparent with borders */
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
    const bgEl = mkStyle(IDS.bg, `
    /* \u2550\u2550\u2550 WALLPAPER ON HTML \u2550\u2550\u2550 */
    html {
      background: url("${resolvedUrl}") center center / cover no-repeat fixed !important;
      background-attachment: fixed !important;
      min-height: 100vh !important;
      color-scheme: dark !important;
    }

    /* \u2550\u2550\u2550 PAGE WRAPPERS & CONTEST PAGE \u2192 TRANSPARENT \u2550\u2550\u2550 */
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

    /* \u2550\u2550\u2550 FLEXLAYOUT LAYOUT WRAPPERS \u2550\u2550\u2550 */
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

    /* \u2550\u2550\u2550 PROBLEM DESCRIPTION \u2014 Light dark transparent bg \u2550\u2550\u2550 */
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

    /* \u2550\u2550\u2550 MONACO CODE EDITOR \u2014 Light dark transparent bg \u2550\u2550\u2550 */
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

    /* \u2550\u2550\u2550 ALL BOXES / CARDS ACROSS LEETCODE (Profile, Stats, Contests, etc.) \u2550\u2550\u2550 */
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

    /* \u2550\u2550\u2550 PROFILE PAGE \u2014 Section containers that hold stats/badges/heatmap \u2550\u2550\u2550 */
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

    /* Profile page section containers \u2014 target by common semantic patterns */
    .lc-lg\\:max-w-\\[calc\\(100\\%-315px\\)\\] > div,
    .flex.w-full.flex-col > section,
    div[class*="space-y-"] > div:not(button):not(a):not([role="tablist"]):not(nav),
    div[class*="profile"] > div:not(button):not(a),
    div[class*="Profile"] > div:not(button):not(a) {
      border-radius: 12px !important;
    }

    /* \u2550\u2550\u2550 TESTCASE / CONSOLE / RESULT PANELS \u2550\u2550\u2550 */
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

    /* \u2550\u2550\u2550 TAB STRIP (above editor / description) \u2550\u2550\u2550 */
    .flexlayout__tabset_tabbar_outer,
    .flexlayout__tabset_tabbar_outer_top {
      background: transparent !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border-bottom: 2px solid rgba(0, 0, 0, 0.4) !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4) !important;
    }

    /* \u2550\u2550\u2550 NAVBAR & BUTTONS (Fixes split half-black/half-grey "Problem" button) \u2550\u2550\u2550 */
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

    /* The "Problems" title button in the problem-page top bar \u2014 glass pill */
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

    /* \u2550\u2550\u2550 PROFILE TABS (Fixes stuck Recent AC / List highlight) \u2550\u2550\u2550 */
    /* ALL tab buttons/links \u2192 transparent by default */
    [role="tab"],
    [role="tablist"] button, [role="tablist"] a,
    div[role="tablist"] button, div[role="tablist"] a,
    [class*="tablist"] button, [class*="tablist"] a {
      background: transparent !important;
      background-color: transparent !important;
      border-bottom: 2px solid transparent !important;
      box-shadow: none !important;
    }

    /* ACTIVE tab \u2192 glass highlight */
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

    /* \u2550\u2550\u2550 TEXT VISIBILITY ACROSS ALL LEETCODE PAGES \u2550\u2550\u2550 */
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

    /* \u2550\u2550\u2550 LINKS \u2014 ensure links stay bright, with hover effects \u2550\u2550\u2550 */
    a:not(nav a):not(header a) {
      color: #58a6ff;
    }
    a:hover:not(nav a):not(header a) {
      color: #79c0ff;
    }

    /* \u2550\u2550\u2550 SCROLLBAR STYLING \u2014 premium dark glass \u2550\u2550\u2550 */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
    }

    /* \u2550\u2550\u2550 DROPDOWN MENUS \u2014 prevent white/opaque menus \u2550\u2550\u2550 */
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

    /* \u2550\u2550\u2550 TOOLTIPS \u2550\u2550\u2550 */
    [class*="tooltip"], [class*="Tooltip"], [role="tooltip"] {
      background: rgba(12, 10, 26, 0.92) !important;
      color: #f0f6fc !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border: 1px solid rgba(255,255,255,0.10) !important;
    }

    /* \u2550\u2550\u2550 TABLE/LIST ROWS \u2014 alternating, readable \u2550\u2550\u2550 */
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
    _forceWallpaperInline(resolvedUrl, scrim);
    document.documentElement.setAttribute("data-lts", "anime-wallpaper");
  }
  function _forceWallpaperInline(resolvedUrl, scrim) {
    const TRANSPARENT = "transparent";
    const LIGHT_GLASS = "transparent";
    const CARD_GLASS = "transparent";
    const clearSelectors = [
      "#__next",
      "#root",
      "#base_content",
      "#app",
      "#contest-app",
      "body > div",
      "#__next > div",
      "#root > div",
      '[class*="h-screen"]',
      '[class*="min-h-screen"]',
      ".flexlayout__layout",
      ".flexlayout__tabset",
      ".flexlayout__tabset_content",
      ".flexlayout__tab",
      ".flexlayout__tabset_tabbar_outer",
      ".flexlayout__tabset_header",
      ".flexlayout__tabset_header_inner",
      "#qd-content",
      "#main-content",
      "main",
      'div[class*="contest"]',
      'div[class*="Contest"]',
      '[class*="contest-hero"]',
      '[class*="ContestHero"]',
      '[class*="bg-gradient"]',
      '[class*="dark:bg-gradient"]',
      '[class*="bg-paper"]',
      '[class*="bg-base"]'
    ];
    function clearWrappers() {
      clearSelectors.forEach((sel) => {
        try {
          document.querySelectorAll(sel).forEach((el2) => {
            el2.style.setProperty("background", TRANSPARENT, "important");
            el2.style.setProperty("background-color", TRANSPARENT, "important");
            el2.style.setProperty("background-image", "none", "important");
          });
        } catch (_) {
        }
      });
      try {
        let el2 = document.body;
        for (let i = 0; i < 6; i++) {
          if (!el2) break;
          el2.style.setProperty("background", TRANSPARENT, "important");
          el2.style.setProperty("background-color", TRANSPARENT, "important");
          el2.style.setProperty("background-image", "none", "important");
          const child = el2.querySelector(":scope > div, :scope > main, :scope > section");
          el2 = child;
        }
      } catch (_) {
      }
      try {
        document.querySelectorAll('[style*="background-image"], [style*="background: linear"], [style*="background: radial"]').forEach((el2) => {
          if (el2.tagName === "IMG" || el2.tagName === "CANVAS") return;
          if (el2.closest(".monaco-editor, #editor")) return;
          el2.style.setProperty("background-image", "none", "important");
          el2.style.setProperty("background", TRANSPARENT, "important");
        });
      } catch (_) {
      }
    }
    function styleMonaco() {
      try {
        document.querySelectorAll('#editor, #code-editor, div[class*="editor-container"]').forEach((el2) => {
          el2.style.setProperty("background", "rgba(10, 8, 20, 0.3)", "important");
          el2.style.setProperty("background-color", "rgba(10, 8, 20, 0.3)", "important");
          el2.style.setProperty("backdrop-filter", "none", "important");
          el2.style.setProperty("-webkit-backdrop-filter", "none", "important");
        });
        document.querySelectorAll(
          ".monaco-editor-background, .monaco-editor .overflow-guard, .monaco-editor .lines-content, .monaco-editor .view-lines, .monaco-editor .margin, .monaco-editor .view-overlays"
        ).forEach((el2) => {
          el2.style.setProperty("background", TRANSPARENT, "important");
          el2.style.setProperty("background-color", TRANSPARENT, "important");
        });
      } catch (_) {
      }
    }
    function styleCards() {
      const cardSelectors = [
        '[class*="bg-layer-1"]',
        '[class*="dark:bg-layer-1"]',
        '[class*="bg-card"]',
        '[class*="bg-sd-card"]',
        '[class*="bg-fill-2"]',
        '[class*="bg-fill-3"]',
        '[class*="dark:bg-fill-2"]',
        '[class*="dark:bg-fill-3"]',
        '[class*="dark:bg-dark-fill-2"]',
        '[class*="dark:bg-dark-fill-3"]',
        '[class*="bg-fill-4"]',
        '[class*="dark:bg-dark-fill-4"]'
      ];
      cardSelectors.forEach((sel) => {
        try {
          document.querySelectorAll(sel).forEach((el2) => {
            if (el2.tagName === "BUTTON" || el2.tagName === "A" || el2.getAttribute("role") === "tab") return;
            if (el2.closest('nav, header, [role="tablist"], .flexlayout__tabset_tabbar_outer')) return;
            el2.style.setProperty("background", "rgba(10, 8, 20, 0.3)", "important");
            el2.style.setProperty("background-color", "rgba(10, 8, 20, 0.3)", "important");
            el2.style.setProperty("backdrop-filter", "none", "important");
            el2.style.setProperty("-webkit-backdrop-filter", "none", "important");
            el2.style.setProperty("border", "2px solid rgba(0, 0, 0, 0.4)", "important");
            el2.style.setProperty("border-radius", "12px", "important");
            el2.style.setProperty("box-shadow", "0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)", "important");
          });
        } catch (_) {
        }
      });
      try {
        document.querySelectorAll('div[class*="rounded-lg"]').forEach((el2) => {
          if (el2.tagName === "BUTTON" || el2.tagName === "A" || el2.getAttribute("role") === "tab") return;
          if (el2.closest('nav, header, [role="tablist"], .flexlayout__tabset_tabbar_outer')) return;
          if (el2.offsetWidth < 100 || el2.offsetHeight < 40) return;
          el2.style.setProperty("background", "rgba(10, 8, 20, 0.3)", "important");
          el2.style.setProperty("background-color", "rgba(10, 8, 20, 0.3)", "important");
          el2.style.setProperty("backdrop-filter", "none", "important");
          el2.style.setProperty("-webkit-backdrop-filter", "none", "important");
          el2.style.setProperty("border", "2px solid rgba(0, 0, 0, 0.4)", "important");
          el2.style.setProperty("border-radius", "12px", "important");
          el2.style.setProperty("box-shadow", "0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)", "important");
        });
      } catch (_) {
      }
      try {
        document.querySelectorAll(
          'div[data-track-load="description_content"], div[data-track-load="qd-content"]'
        ).forEach((el2) => {
          el2.style.setProperty("background", "rgba(10, 8, 20, 0.3)", "important");
          el2.style.setProperty("background-color", "rgba(10, 8, 20, 0.3)", "important");
          el2.style.setProperty("backdrop-filter", "none", "important");
          el2.style.setProperty("-webkit-backdrop-filter", "none", "important");
          el2.style.setProperty("border", "2px solid rgba(0, 0, 0, 0.4)", "important");
          el2.style.setProperty("border-radius", "12px", "important");
          el2.style.setProperty("box-shadow", "0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)", "important");
        });
      } catch (_) {
      }
    }
    function applyAll() {
      clearWrappers();
      styleMonaco();
      styleCards();
    }
    applyAll();
    setTimeout(applyAll, 300);
    setTimeout(applyAll, 1e3);
    setTimeout(applyAll, 2500);
    let monacoTick = 0;
    const monacoInterval = setInterval(() => {
      styleMonaco();
      monacoTick++;
      if (monacoTick >= 10) clearInterval(monacoInterval);
    }, 500);
  }

  // src/content/observer.js
  var lastUrl = location.href;
  var observerInstance = null;
  var reapplyCallback = null;
  var rafScheduled = false;
  var debounceTimer = null;
  function debounce(fn, ms) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(fn, ms);
  }
  function startObserver(onNavigate) {
    reapplyCallback = onNavigate;
    if (observerInstance) {
      observerInstance.disconnect();
    }
    observerInstance = new MutationObserver((mutations) => {
      if (rafScheduled) return;
      rafScheduled = true;
      requestAnimationFrame(() => {
        rafScheduled = false;
        try {
          if (location.href !== lastUrl) {
            lastUrl = location.href;
            debounce(() => {
              if (reapplyCallback) reapplyCallback();
            }, 400);
            return;
          }
        } catch (e) {
        }
      });
    });
    observerInstance.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }

  // src/content/index.js
  var STORAGE_KEY = "activeTheme";
  var currentThemeId = "dark-pro";
  var currentSettings = { backgroundEnabled: true, animationsEnabled: true };
  function applyMonacoWithRetry(maxRetries = 2, delay = 300) {
    if (typeof reapplyMonacoTheme !== "function") return;
    const attempt = () => {
      reapplyMonacoTheme();
    };
    attempt();
    if (maxRetries > 0 && typeof window !== "undefined" && !window.monaco) {
      setTimeout(() => applyMonacoWithRetry(maxRetries - 1, delay * 1.5), delay);
    }
  }
  if (typeof window !== "undefined") {
    window.LeetCodeThemeStudio = { applyTheme, removeTheme, applyWallpaperTheme };
    window.addEventListener("message", async (event) => {
      if (event.data?.type === "LTS_APPLY_THEME") {
        currentThemeId = event.data.themeId;
        await applyTheme(event.data.themeId, event.data.settings || {});
      }
    });
  }
  async function init() {
    if (typeof chrome !== "undefined" && chrome.storage?.sync) {
      chrome.storage.sync.get([STORAGE_KEY, "settings", "activeWallpaper", "activeWallpaperResolved", "wallpaperScrim"], async (result) => {
        currentThemeId = result.activeTheme || "dark-pro";
        currentSettings = result.settings || { backgroundEnabled: true, animationsEnabled: true };
        const wp = result.activeWallpaperResolved || result.activeWallpaper;
        if (wp) {
          currentSettings.wallpaperUrl = wp;
          currentSettings.wallpaperScrim = result.wallpaperScrim !== void 0 ? result.wallpaperScrim : 0.65;
        }
        await applyTheme(currentThemeId, currentSettings);
        startObserver(async () => {
          await applyTheme(currentThemeId, currentSettings);
          applyMonacoWithRetry(1, 500);
        });
      });
    } else {
      const stored = typeof localStorage !== "undefined" && localStorage.getItem(STORAGE_KEY) || "dark-pro";
      currentThemeId = stored;
      await applyTheme(stored, currentSettings);
      startObserver(async () => {
        await applyTheme(currentThemeId, currentSettings);
        applyMonacoWithRetry(1, 500);
      });
    }
  }
  if (typeof chrome !== "undefined" && chrome.runtime?.onMessage) {
    chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      (async () => {
        if (message.type === "APPLY_THEME") {
          currentThemeId = message.themeId;
          currentSettings = { ...currentSettings, ...message.settings || {} };
          if (message.clearWallpaper) {
            delete currentSettings.wallpaperUrl;
            delete currentSettings.wallpaperScrim;
          }
          removeTheme();
          await applyTheme(message.themeId, currentSettings);
          applyMonacoWithRetry(2);
          sendResponse({ success: true });
        }
        if (message.type === "APPLY_WALLPAPER") {
          currentSettings.wallpaperUrl = message.wallpaperUrl;
          currentSettings.wallpaperScrim = message.wallpaperScrim;
          applyWallpaperTheme(message.wallpaperUrl, message.wallpaperScrim);
          applyMonacoWithRetry(2);
          sendResponse({ success: true });
        }
        if (message.type === "UPDATE_SETTINGS") {
          currentSettings = { ...currentSettings, ...message.settings || {} };
          if (currentSettings.wallpaperUrl) {
            applyWallpaperTheme(currentSettings.wallpaperUrl, currentSettings.wallpaperScrim);
          } else {
            await applyTheme(currentThemeId, currentSettings);
          }
          applyMonacoWithRetry(1);
          sendResponse({ success: true });
        }
        if (message.type === "REMOVE_WALLPAPER") {
          delete currentSettings.wallpaperUrl;
          delete currentSettings.wallpaperScrim;
          removeTheme();
          await applyTheme(currentThemeId, currentSettings);
          setTimeout(reapplyMonacoTheme, 100);
          sendResponse({ success: true });
        }
        if (message.type === "REMOVE_THEME") {
          removeTheme();
          sendResponse({ success: true });
        }
      })();
      return true;
    });
  }
  init();
})();
