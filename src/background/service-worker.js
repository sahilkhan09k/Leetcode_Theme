// ============================================================
// Background Service Worker (Manifest V3)
// Handles install events and acts as message relay
// ============================================================

// On first install, set the default theme
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.storage.sync.set({
      activeTheme: 'dark-pro',
      settings: {
        backgroundEnabled: true,
        animationsEnabled: true,
        customOpacity: 0.85,
      }
    });
  }
});

// ── Inject Monaco theme into the PAGE's JS context ───────────
// Content scripts run in an isolated world and cannot access
// window.monaco. chrome.scripting.executeScript with world:"MAIN"
// runs directly in the page context where Monaco lives.
function injectMonacoTheme(tabId, themeData) {
  chrome.scripting.executeScript({
    target: { tabId },
    world: 'MAIN',   // ← page context, not isolated world
    func: function (data) {
      window.__lts_current_theme_data__ = data;
      function defineAndSet() {
        if (!window.monaco || !window.monaco.editor) return false;
        var cur = window.__lts_current_theme_data__ || data;
        try {
          window.monaco.editor.defineTheme(cur.id, {
            base:    cur.base,
            inherit: cur.inherit,
            rules:   cur.rules  || [],
            colors:  cur.colors || {},
          });
          window.monaco.editor.setTheme(cur.id);

          // Guard: intercept future setTheme calls so LeetCode
          // can't reset our theme when the editor re-mounts.
          if (!window.__lts_guard__) {
            window.__lts_guard__ = true;
            var orig = window.monaco.editor.setTheme.bind(window.monaco.editor);
            window.monaco.editor.setTheme = function (id) {
              orig(id);
              if (typeof id === 'string' && id.indexOf('lts-') !== 0) {
                var c = window.__lts_current_theme_data__;
                if (c) {
                  try {
                    window.monaco.editor.defineTheme(c.id, {
                      base: c.base, inherit: c.inherit,
                      rules: c.rules || [], colors: c.colors || {},
                    });
                    orig(c.id);
                  } catch (e) {}
                }
              }
            };
          }
        } catch (e) { return false; }
        return true;
      }

      if (defineAndSet()) return;
      // Monaco not ready yet — poll
      var t = setInterval(function () {
        if (defineAndSet()) clearInterval(t);
      }, 50);
      setTimeout(function () { clearInterval(t); }, 20000);
    },
    args: [themeData],
  }).catch(() => {});
}

// Relay messages from popup to content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'APPLY_THEME_TO_TAB') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (chrome.runtime.lastError || !tabs?.[0]?.id) {
        sendResponse({ success: false });
        return;
      }
      const tabId = tabs[0].id;
      chrome.tabs.sendMessage(tabId, {
        type: 'APPLY_THEME',
        themeId: message.themeId,
        settings: message.settings,
      }, (response) => {
        if (chrome.runtime.lastError) {
          sendResponse({ success: false, error: chrome.runtime.lastError.message });
          return;
        }
        sendResponse(response || { success: true });
      });
    });
    return true; // async
  }

  // Content script asks background to inject Monaco theme into page context
  if (message.type === 'INJECT_MONACO_THEME') {
    // sender.tab.id is always set when a content script sends this message
    if (sender?.tab?.id) {
      injectMonacoTheme(sender.tab.id, message.themeData);
    }
    sendResponse({ success: true });
    return true;
  }
});
