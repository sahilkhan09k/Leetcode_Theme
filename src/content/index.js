// ============================================================
// Content Script — Entry Point
// Injected into every leetcode.com page
// ============================================================

import { applyTheme, removeTheme, applyWallpaperTheme, reapplyMonacoTheme } from './themeApplicator.js';
import { startObserver } from './observer.js';

const STORAGE_KEY = 'activeTheme';
let currentThemeId = 'dark-pro';
let currentSettings = { backgroundEnabled: true, animationsEnabled: true };

// ── Smart Monaco Retry (Optimized) ──────────────────────────
function applyMonacoWithRetry(maxRetries = 2, delay = 300) {
  if (typeof reapplyMonacoTheme !== 'function') return;
  
  const attempt = () => {
    reapplyMonacoTheme();
  };
  
  // Immediate first attempt
  attempt();
  
  // Only retry if Monaco might not be loaded yet
  if (maxRetries > 0 && typeof window !== 'undefined' && !window.monaco) {
    setTimeout(() => applyMonacoWithRetry(maxRetries - 1, delay * 1.5), delay);
  }
}

// ── Expose for direct window/test access ────────────────────
if (typeof window !== 'undefined') {
  window.LeetCodeThemeStudio = { applyTheme, removeTheme, applyWallpaperTheme };
  window.addEventListener('message', async (event) => {
    if (event.data?.type === 'LTS_APPLY_THEME') {
      currentThemeId = event.data.themeId;
      await applyTheme(event.data.themeId, event.data.settings || {});
    }
  });
}

// ── Init ────────────────────────────────────────────────────
async function init() {
  if (typeof chrome !== 'undefined' && chrome.storage?.sync) {
    chrome.storage.sync.get([STORAGE_KEY, 'settings', 'activeWallpaper', 'activeWallpaperResolved', 'wallpaperScrim'], async (result) => {
      currentThemeId = result.activeTheme || 'dark-pro';
      currentSettings = result.settings || { backgroundEnabled: true, animationsEnabled: true };
      const wp = result.activeWallpaperResolved || result.activeWallpaper;
      if (wp) {
        currentSettings.wallpaperUrl = wp;
        currentSettings.wallpaperScrim = result.wallpaperScrim !== undefined ? result.wallpaperScrim : 0.65;
      }
      // applyTheme handles both theme colors AND wallpaper
      await applyTheme(currentThemeId, currentSettings);
      
      startObserver(async () => {
        // Re-apply theme (with wallpaper if present)
        await applyTheme(currentThemeId, currentSettings);
        applyMonacoWithRetry(1, 500);
      });
    });
  } else {
    const stored = (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) || 'dark-pro';
    currentThemeId = stored;
    await applyTheme(stored, currentSettings);
    startObserver(async () => {
      await applyTheme(currentThemeId, currentSettings);
      applyMonacoWithRetry(1, 500);
    });
  }
}

// ── Message listener (from popup) ──────────────────────────
if (typeof chrome !== 'undefined' && chrome.runtime?.onMessage) {
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    (async () => {
      if (message.type === 'APPLY_THEME') {
        currentThemeId = message.themeId;
        currentSettings = { ...currentSettings, ...(message.settings || {}) };
        
        if (message.clearWallpaper) {
          delete currentSettings.wallpaperUrl;
          delete currentSettings.wallpaperScrim;
        }
        
        removeTheme();
        
        // applyTheme handles both theme colors AND wallpaper if present in settings
        await applyTheme(message.themeId, currentSettings);
        
        // OPTIMIZED: Single smart Monaco retry instead of 3-7 redundant calls
        applyMonacoWithRetry(2);
        
        sendResponse({ success: true });
      }
      if (message.type === 'APPLY_WALLPAPER') {
        currentSettings.wallpaperUrl = message.wallpaperUrl;
        currentSettings.wallpaperScrim = message.wallpaperScrim;
        // Applies transparent layers and wallpaper
        applyWallpaperTheme(message.wallpaperUrl, message.wallpaperScrim);
        // OPTIMIZED: Single smart retry instead of 4 calls
        applyMonacoWithRetry(2);
        sendResponse({ success: true });
      }
      if (message.type === 'UPDATE_SETTINGS') {
        currentSettings = { ...currentSettings, ...(message.settings || {}) };
        if (currentSettings.wallpaperUrl) {
          applyWallpaperTheme(currentSettings.wallpaperUrl, currentSettings.wallpaperScrim);
        } else {
          await applyTheme(currentThemeId, currentSettings);
        }
        applyMonacoWithRetry(1);
        sendResponse({ success: true });
      }
      if (message.type === 'REMOVE_WALLPAPER') {
        delete currentSettings.wallpaperUrl;
        delete currentSettings.wallpaperScrim;
        removeTheme();
        await applyTheme(currentThemeId, currentSettings);
        setTimeout(reapplyMonacoTheme, 100);
        sendResponse({ success: true });
      }
      if (message.type === 'REMOVE_THEME') {
        removeTheme();
        sendResponse({ success: true });
      }
    })();
    return true;
  });
}

// Start everything
init();
