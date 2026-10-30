/**
 * CSS Loader Module - Phase 2 Optimization
 * Replaces inline CSS injection with external stylesheet loading
 * Benefits: Browser caching, reduced main thread blocking, modular code
 */

const THEME_CSS_MAP = {
  'dark-pro': 'dark-pro.css',
  'anime-night': 'anime-night.css',
  'adventure': 'adventure.css',
  'pixel-art': 'pixel-art.css',
  'vintage-paper': 'vintage-paper.css',
  'sunset-lofi': 'sunset-lofi.css',
};

const CSS_IDS = {
  base: 'lts-base-css',
  theme: 'lts-theme-css',
  universal: 'lts-universal-css',
};

/**
 * Load external CSS file via <link> tag
 * @param {string} href - URL or chrome-extension:// path
 * @param {string} id - Element ID for tracking
 * @returns {Promise<void>}
 */
function loadStylesheet(href, id) {
  return new Promise((resolve, reject) => {
    // Remove existing stylesheet with same ID
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }

    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = href;
    
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load ${href}`));
    
    document.head.appendChild(link);
  });
}

/**
 * Load theme-specific CSS
 * @param {string} themeId - Theme identifier
 */
export async function loadThemeCSS(themeId) {
  const filename = THEME_CSS_MAP[themeId];
  if (!filename) return;

  try {
    const url = chrome.runtime.getURL(`content/themes/${filename}`);
    await loadStylesheet(url, CSS_IDS.theme);
  } catch (error) {
    // Silent fail - theme CSS loading error
  }
}

/**
 * Load universal CSS (common selectors, layout patterns)
 */
export async function loadUniversalCSS() {
  try {
    const url = chrome.runtime.getURL('content/universal.css');
    await loadStylesheet(url, CSS_IDS.universal);
  } catch (error) {
    // Silent fail - universal CSS loading error
  }
}

/**
 * Load base CSS (if not already loaded by manifest)
 */
export async function loadBaseCSS() {
  try {
    const url = chrome.runtime.getURL('content/base.css');
    await loadStylesheet(url, CSS_IDS.base);
  } catch (error) {
    // Silent fail - base CSS loading error
  }
}

/**
 * Remove all loaded theme CSS
 */
export function unloadThemeCSS() {
  document.getElementById(CSS_IDS.theme)?.remove();
}

/**
 * Initialize CSS loading system
 */
export async function initializeCSS() {
  await Promise.all([
    loadBaseCSS(),
    loadUniversalCSS(),
  ]);
}
