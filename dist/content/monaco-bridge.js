// ============================================================
// monaco-bridge.js  — runs in MAIN world (page JS context)
// Injected as a content script at document_idle on problem pages.
// Has direct access to window.monaco (no isolation barrier).
// Reads active theme from chrome.storage.sync and applies it.
// ============================================================

(function () {
  // All theme editorTheme data — duplicated here so this file is self-contained
  var EDITOR_THEMES = {
    'wallpaper': {
      base: 'vs-dark', inherit: true,
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
    },
    'dark-pro': {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'comment',  foreground: '6e7681', fontStyle: 'italic' },
        { token: 'keyword',  foreground: 'ff7b72' },
        { token: 'string',   foreground: 'a5d6ff' },
        { token: 'number',   foreground: '79c0ff' },
        { token: 'type',     foreground: 'ffa657' },
        { token: 'function', foreground: 'd2a8ff' },
      ],
      colors: {
        'editor.background':            '#0d1117',
        'editor.foreground':            '#e6edf3',
        'editorLineNumber.foreground':  '#484f58',
        'editorCursor.foreground':      '#58a6ff',
        'editor.selectionBackground':   '#264f78',
        'editor.inactiveSelectionBackground': '#264f7880',
        'editor.selectionHighlightBackground': '#264f7860',
        'editor.lineHighlightBackground': '#161b22',
      }
    },
    'anime-night': {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'comment',  foreground: '9b91b3', fontStyle: 'italic' },
        { token: 'keyword',  foreground: 'ff7ab2', fontStyle: 'bold' },
        { token: 'string',   foreground: 'a8ff8e' },
        { token: 'number',   foreground: '00f0ff' },
        { token: 'type',     foreground: 'ffd580' },
        { token: 'function', foreground: 'b026ff' },
      ],
      colors: {
        'editor.background':            '#140e2c',
        'editor.foreground':            '#f5f0ff',
        'editorLineNumber.foreground':  '#6f638f',
        'editorCursor.foreground':      '#ff7ab2',
        'editor.selectionBackground':   '#6e2da8',
        'editor.inactiveSelectionBackground': '#6e2da880',
        'editor.selectionHighlightBackground': '#6e2da860',
        'editor.lineHighlightBackground': '#1b133a',
      }
    },
    'adventure': {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'comment',  foreground: '7a6a3a', fontStyle: 'italic' },
        { token: 'keyword',  foreground: 'd4a017', fontStyle: 'bold' },
        { token: 'string',   foreground: 'a8d89e' },
        { token: 'number',   foreground: 'e8c547' },
        { token: 'type',     foreground: 'f5a623' },
        { token: 'function', foreground: 'c8e0a8' },
      ],
      colors: {
        'editor.background':            '#181308',
        'editor.foreground':            '#f5e6c8',
        'editorLineNumber.foreground':  '#695733',
        'editorCursor.foreground':      '#d4a017',
        'editor.selectionBackground':   '#6b520a',
        'editor.inactiveSelectionBackground': '#6b520a80',
        'editor.selectionHighlightBackground': '#6b520a60',
        'editor.lineHighlightBackground': '#221b0b',
      }
    },
    'pixel-art': {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'comment',  foreground: '007722', fontStyle: 'italic' },
        { token: 'keyword',  foreground: 'ffff00', fontStyle: 'bold' },
        { token: 'string',   foreground: '00ff41' },
        { token: 'number',   foreground: 'ff6600' },
        { token: 'type',     foreground: '00ffff' },
        { token: 'function', foreground: 'ff00ff' },
      ],
      colors: {
        'editor.background':            '#0c0c22',
        'editor.foreground':            '#00ff41',
        'editorLineNumber.foreground':  '#007722',
        'editorCursor.foreground':      '#00ff41',
        'editor.selectionBackground':   '#005530',
        'editor.inactiveSelectionBackground': '#00553080',
        'editor.selectionHighlightBackground': '#00553060',
        'editor.lineHighlightBackground': '#141434',
      }
    },
    'vintage-paper': {
      base: 'vs', inherit: true,
      rules: [
        { token: 'comment', foreground: '755837', fontStyle: 'italic' },
        { token: 'keyword', foreground: '8b261e', fontStyle: 'bold' },
        { token: 'keyword.type', foreground: '6a359c', fontStyle: 'bold' },
        { token: 'type', foreground: '6a359c', fontStyle: 'bold' },
        { token: 'type.identifier', foreground: '6a359c', fontStyle: 'bold' },
        { token: 'class', foreground: '6a359c', fontStyle: 'bold' },
        { token: 'string', foreground: '236928' },
        { token: 'number', foreground: '00695c' },
        { token: 'function', foreground: '1a56a6' },
        { token: 'identifier', foreground: '1a56a6' },
        { token: 'variable', foreground: '1a56a6' },
        { token: 'variable.parameter', foreground: '1a56a6' },
        { token: 'delimiter', foreground: '24180d' },
        { token: 'operator', foreground: '24180d' },
      ],
      colors: {
        'editor.background':            '#c5a268',
        'editor.foreground':            '#1a56a6',
        'editorLineNumber.foreground':  '#755837',
        'editorCursor.foreground':      '#8b261e',
        'editor.selectionBackground':   '#dfb668',
        'editor.inactiveSelectionBackground': '#dfb66890',
        'editor.selectionHighlightBackground': '#dfb66870',
        'editor.lineHighlightBackground': '#b8935740',
        'editorWidget.background':      '#ba965c',
        'editorBracketMatch.background':'#8b261e15',
        'editorBracketMatch.border':    '#8b261e',
      }
    },
    'sunset-lofi': {
      base: 'vs-dark', inherit: true,
      rules: [
        { token: 'comment',  foreground: '825848', fontStyle: 'italic' },
        { token: 'keyword',  foreground: 'ff8c42', fontStyle: 'bold' },
        { token: 'string',   foreground: 'a8ff78' },
        { token: 'number',   foreground: 'ffcc70' },
        { token: 'type',     foreground: 'ff6b9d' },
        { token: 'function', foreground: 'c680ff' },
      ],
      colors: {
        'editor.background':            '#1c0d38',
        'editor.foreground':            '#ffeedd',
        'editorLineNumber.foreground':  '#825848',
        'editorCursor.foreground':      '#ff8c42',
        'editor.selectionBackground':   '#7a3512',
        'editor.inactiveSelectionBackground': '#7a351280',
        'editor.selectionHighlightBackground': '#7a351260',
        'editor.lineHighlightBackground': '#26124a',
      }
    },
  };

  function applyMonacoTheme(themeId) {
    var et = EDITOR_THEMES[themeId];
    if (!et) et = EDITOR_THEMES['dark-pro'];
    if (!window.monaco || !window.monaco.editor) return false;
    try {
      window.monaco.editor.defineTheme('lts-' + themeId, et);
      window.monaco.editor.setTheme('lts-' + themeId);

      // Guard against LeetCode resetting the theme
      if (!window.__lts_guard__) {
        window.__lts_guard__ = true;
        var orig = window.monaco.editor.setTheme.bind(window.monaco.editor);
        window.monaco.editor.setTheme = function (id) {
          if (typeof id === 'string' && id.indexOf('lts-') === 0) {
            orig(id);
          } else {
            // Let LeetCode's call go through, then immediately re-apply ours
            orig(id);
            var saved = window.__lts_active_theme__;
            if (saved) {
              setTimeout(function () {
                var et2 = EDITOR_THEMES[saved];
                if (et2 && window.monaco) {
                  try {
                    window.monaco.editor.defineTheme('lts-' + saved, et2);
                    orig('lts-' + saved);
                  } catch (e) {}
                }
              }, 0);
            }
          }
        };
      }
      window.__lts_active_theme__ = themeId;
    } catch (e) { return false; }
    return true;
  }

  function start(themeId) {
    if (applyMonacoTheme(themeId)) return;
    var t = setInterval(function () {
      if (applyMonacoTheme(themeId)) clearInterval(t);
    }, 100);
    setTimeout(function () { clearInterval(t); }, 30000);
  }

  // Read active theme — isolated world content script writes it to a meta tag
  // since chrome.storage is not available in MAIN world
  function getThemeFromMeta() {
    var meta = document.getElementById('lts-active-theme');
    return (meta && meta.getAttribute('data-theme-id')) || 'dark-pro';
  }

  // Wait briefly for the meta tag to be written by the isolated content script
  function init() {
    var themeId = getThemeFromMeta();
    start(themeId);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Small delay to let the isolated content script write the meta tag first
    setTimeout(init, 50);
  }

  // Also listen for theme changes from the popup via custom DOM event
  // (chrome.runtime is not available in MAIN world)
  window.addEventListener('lts-theme-change', function (e) {
    if (e.detail && e.detail.themeId) {
      start(e.detail.themeId);
    }
  });
})();
