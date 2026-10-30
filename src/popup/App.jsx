import { useState, useEffect, useCallback, useRef } from 'react';
import { getAllThemes } from '../themes/index.js';
import { ANIME_FOLDERS, resolveAssetUrl } from '../themes/animeStudio.js';

// ── Configuration ────────────────────────────────────────────
const BUY_ME_COFFEE_URL = 'https://buymeacoffee.com/sahilkhan09k';

// ── Helpers ──────────────────────────────────────────────────
function isChrome() {
  return typeof chrome !== 'undefined' && chrome.storage;
}

async function loadStoredTheme() {
  if (!isChrome()) {
    return {
      activeTheme: 'dark-pro',
      settings: defaultSettings(),
      activeWallpaper: null,
      wallpaperScrim: 0.68
    };
  }
  return new Promise((resolve) => {
    chrome.storage.sync.get(['activeTheme', 'settings', 'activeWallpaper', 'wallpaperScrim'], (r) => {
      resolve({
        activeTheme: r.activeTheme || 'dark-pro',
        settings: r.settings || defaultSettings(),
        activeWallpaper: r.activeWallpaper || null,
        wallpaperScrim: r.wallpaperScrim !== undefined ? r.wallpaperScrim : 0.68,
      });
    });
  });
}

function defaultSettings() {
  return { animationsEnabled: true };
}

async function applyThemeToTab(themeId, settings) {
  if (!isChrome()) return;

  const stored = await new Promise(resolve => chrome.storage.sync.get(['activeWallpaper', 'wallpaperScrim'], resolve));
  const fullSettings = { ...settings };
  if (stored?.activeWallpaper) {
    fullSettings.wallpaperUrl = stored.activeWallpaper;
    fullSettings.wallpaperScrim = stored.wallpaperScrim;
  }

  // 1. Always save to storage first
  await new Promise(resolve => chrome.storage.sync.set({ activeTheme: themeId, settings: fullSettings }, resolve));

  // 2. Send message to all leetcode tabs or active tab
  chrome.tabs.query({ url: '*://*.leetcode.com/*' }, (tabs) => {
    if (tabs && tabs.length) {
      tabs.forEach(tab => {
        if (!tab?.id) return;
        chrome.tabs.sendMessage(tab.id, { type: 'APPLY_THEME', themeId, settings: fullSettings }, () => {
          if (chrome.runtime.lastError && chrome.scripting) {
            chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ['content/index.js'] }).catch(() => {});
          }
        });
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, (res) => {
        const tab = res?.[0];
        if (tab?.id && tab.url?.includes('leetcode.com')) {
          chrome.tabs.sendMessage(tab.id, { type: 'APPLY_THEME', themeId, settings: fullSettings }, () => {
            if (chrome.runtime.lastError && chrome.scripting) {
              chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ['content/index.js'] }).catch(() => {});
            }
          });
        }
      });
    }
  });
}

function sendWallpaperMessage(tabId, wallpaperUrl, scrim) {
  chrome.tabs.sendMessage(
    tabId,
    { type: 'APPLY_WALLPAPER', wallpaperUrl, wallpaperScrim: scrim },
    () => {
      if (chrome.runtime.lastError && chrome.scripting) {
        chrome.scripting.executeScript({
          target: { tabId },
          files: ['content/index.js'],
        }).catch(() => {});
      }
    }
  );
}

async function applyWallpaperToTab(wallpaperUrl, scrim = 0.65) {
  if (!isChrome()) return;
  const resolvedUrl = typeof chrome !== 'undefined' && chrome.runtime?.getURL ? chrome.runtime.getURL(wallpaperUrl) : wallpaperUrl;
  await new Promise(resolve => chrome.storage.sync.set({ activeWallpaper: wallpaperUrl, activeWallpaperResolved: resolvedUrl, wallpaperScrim: scrim }, resolve));

  // Get current theme and apply BOTH theme + wallpaper together
  const stored = await new Promise(resolve => chrome.storage.sync.get(['activeTheme', 'settings'], resolve));
  const themeId = stored.activeTheme || 'dark-pro';
  const settings = stored.settings || {};
  const fullSettings = { ...settings, wallpaperUrl: resolvedUrl, wallpaperScrim: scrim };

  chrome.tabs.query({ url: '*://*.leetcode.com/*' }, (tabs) => {
    if (tabs && tabs.length) {
      tabs.forEach(tab => {
        if (!tab?.id) return;
        // Apply theme WITH wallpaper
        chrome.tabs.sendMessage(tab.id, { type: 'APPLY_THEME', themeId, settings: fullSettings }, () => {
          if (chrome.runtime.lastError && chrome.scripting) {
            chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ['content/index.js'] }).catch(() => {});
          }
        });
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, (res) => {
        const tab = res?.[0];
        if (tab?.id && tab.url?.includes('leetcode.com')) {
          chrome.tabs.sendMessage(tab.id, { type: 'APPLY_THEME', themeId, settings: fullSettings }, () => {
            if (chrome.runtime.lastError && chrome.scripting) {
              chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ['content/index.js'] }).catch(() => {});
            }
          });
        }
      });
    }
  });
}

async function removeWallpaperFromTab() {
  if (!isChrome()) return;
  await new Promise(resolve => chrome.storage.sync.remove(['activeWallpaper', 'wallpaperScrim'], resolve));

  chrome.tabs.query({ url: '*://*.leetcode.com/*' }, (tabs) => {
    if (tabs && tabs.length) {
      tabs.forEach(tab => {
        if (tab?.id) {
          chrome.tabs.sendMessage(tab.id, { type: 'REMOVE_WALLPAPER' }, () => {
            if (chrome.runtime.lastError) {}
          });
        }
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, (res) => {
        const tab = res?.[0];
        if (tab?.id && tab.url?.includes('leetcode.com')) {
          chrome.tabs.sendMessage(tab.id, { type: 'REMOVE_WALLPAPER' }, () => {
            if (chrome.runtime.lastError) {}
          });
        }
      });
    }
  });
}

// ── 3D Tilt Hook ─────────────────────────────────────────────
function use3DTilt(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(600px) rotateY(${dx * 7}deg) rotateX(${-dy * 7}deg) translateY(-3px) scale(1.02)`;
    };
    const onLeave = () => {
      el.style.transform = '';
      el.style.transition = 'transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275)';
      setTimeout(() => { el.style.transition = ''; }, 400);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref]);
}

// ── ThemeCard Component ──────────────────────────────────────
function ThemeCard({ theme, isActive, onSelect }) {
  const cardRef = useRef(null);
  use3DTilt(isActive ? { current: null } : cardRef);

  const handleClick = () => onSelect(theme.id);

  // Derive mockup bar colors from theme
  const accent = theme.accentColor || '#6366f1';
  const bg2 = theme.variables['--ts-bg-secondary'] || '#161b22';

  return (
    <div
      ref={cardRef}
      className={`theme-card ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      style={{
        '--card-accent': accent,
        '--card-glow': theme.glowColor || 'rgba(99,102,241,0.3)',
      }}
    >
      {/* Preview area */}
      <div className="card-preview">
        <div
          className="card-preview-gradient"
          style={{ background: theme.previewGradient }}
        />
        {/* Mini UI mockup */}
        <div className="card-mockup">
          <div className="mockup-bar mockup-bar-1" style={{ background: bg2, opacity: 0.8 }} />
          <div className="mockup-bar mockup-bar-2" style={{ background: accent, opacity: 0.4 }} />
          <div className="mockup-bar mockup-bar-3" style={{ background: bg2, opacity: 0.6 }} />
          <div className="mockup-dots">
            <div className="mockup-dot" style={{ background: '#ef4444' }} />
            <div className="mockup-dot" style={{ background: '#f59e0b' }} />
            <div className="mockup-dot" style={{ background: '#22c55e' }} />
          </div>
        </div>
        {/* Shimmer effect */}
        <div className="card-shimmer" />
      </div>

      {/* Card body */}
      <div className="card-body">
        <span className="card-emoji">{theme.emoji}</span>
        <div className="card-name">{theme.name}</div>
        <div className="card-tagline">{theme.tagline}</div>
      </div>

      {/* Active check */}
      {isActive && <div className="card-check">✓</div>}

      {/* Accent bottom line */}
      <div className="card-category" style={{ background: accent }} />
    </div>
  );
}

// ── Anime Studio View Component ──────────────────────────────
function AnimeStudioView({
  activeTheme,
  activeWallpaper,
  onApplyWallpaper,
  onRemoveWallpaper,
  onSelectTheme,
  showToast,
  themes
}) {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [scrim, setScrim] = useState(0.68);

  const currentFolder = ANIME_FOLDERS.find(f => f.id === selectedFolderId);
  const currentTheme = themes.find(t => t.id === activeTheme) || themes[0];

  // When opening One Piece, default to active wallpaper or first photo
  useEffect(() => {
    if (currentFolder?.photos?.length) {
      const matchActive = currentFolder.photos.find(p => p.file === activeWallpaper);
      setSelectedPhoto(matchActive || currentFolder.photos[0]);
    }
  }, [selectedFolderId, activeWallpaper]);

  const handleFolderClick = (folder) => {
    if (folder.status !== 'available') {
      showToast(`${folder.emoji} ${folder.name} wallpapers coming in next update!`);
      return;
    }
    setSelectedFolderId(folder.id);
  };

  const handleSetBackground = () => {
    if (!selectedPhoto) return;
    onApplyWallpaper(selectedPhoto.file, scrim);
    showToast(`🏴‍☠️ ${selectedPhoto.character} with ${currentTheme.name} theme applied!`);
  };

  const handleRemove = () => {
    onRemoveWallpaper();
    showToast('Background reset to theme default');
  };

  const handleThemeChange = (themeId) => {
    onSelectTheme(themeId);
    const theme = themes.find(t => t.id === themeId);
    showToast(`${theme.emoji} ${theme.name} theme applied!`);
  };

  return (
    <div className="anime-studio-view panel-enter">
      {currentFolder ? (
        /* Level 2: Inside Folder View (e.g. One Piece) */
        <div className="folder-detail-view">
          {/* Header navigation bar */}
          <div className="folder-nav-header">
            <button className="back-btn" onClick={() => setSelectedFolderId(null)}>
              ← Back to Anime
            </button>
            <div className="folder-header-title">
              <span>{currentFolder.emoji}</span> {currentFolder.name}
            </div>
            <span className="badge-pill">{currentFolder.photos.length} Wallpapers</span>
          </div>

          {/* Theme Selector Dropdown - Above wallpapers */}
          <div className="theme-selector-bar">
            <div className="theme-selector-label">
              <span style={{ fontSize: 14 }}>🎨</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 12 }}>Choose Theme</div>
                <div style={{ fontSize: 10, color: 'var(--text-3)' }}>Theme colors will apply over your wallpaper</div>
              </div>
            </div>
            <select 
              className="theme-selector-dropdown"
              value={activeTheme}
              onChange={(e) => handleThemeChange(e.target.value)}
            >
              {themes.map(theme => (
                <option key={theme.id} value={theme.id}>
                  {theme.emoji} {theme.name}
                </option>
              ))}
            </select>
          </div>

          {/* Grid of 12 One Piece Photos */}
          <div className="photos-grid">
            {currentFolder.photos.map((photo) => {
              const isSelected = selectedPhoto?.id === photo.id;
              const isApplied = activeWallpaper === photo.file || (activeWallpaper && activeWallpaper.includes(photo.file.replace(/^images\//, '')));
              const imgUrl = resolveAssetUrl(photo.file);

              return (
                <div
                  key={photo.id}
                  className={`photo-card ${isSelected ? 'selected' : ''} ${isApplied ? 'applied' : ''}`}
                  onClick={() => {
                    setSelectedPhoto(photo);
                    onApplyWallpaper(photo.file, scrim);
                    showToast(`🏴‍☠️ ${photo.character} with ${currentTheme.name} applied!`);
                  }}
                >
                  <div className="photo-thumb-wrap">
                    <img src={imgUrl} alt={photo.title} className="photo-thumb" loading="lazy" />
                    <span className="photo-badge">{photo.badge}</span>
                    {isApplied && <span className="applied-badge">✓ Active</span>}
                  </div>
                  <div className="photo-info">
                    <div className="photo-title">{photo.title}</div>
                    <div className="photo-character">{photo.character}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Bar */}
          {selectedPhoto && (
            <div className="wallpaper-action-bar">
              <div className="selected-preview">
                <img
                  src={resolveAssetUrl(selectedPhoto.file)}
                  alt={selectedPhoto.title}
                  className="preview-mini-thumb"
                />
                <div className="preview-text">
                  <div className="preview-name">{selectedPhoto.title}</div>
                  <div className="preview-char">{selectedPhoto.character} • with {currentTheme.name} theme</div>
                </div>
              </div>

              {/* Glass / Readability Slider */}
              <div className="scrim-control">
                <div className="scrim-label">
                  <span>Code Contrast Scrim</span>
                  <span>{Math.round(scrim * 100)}% dark tint</span>
                </div>
                <input
                  type="range"
                  min="0.45"
                  max="0.85"
                  step="0.05"
                  value={scrim}
                  onChange={(e) => {
                    const s = parseFloat(e.target.value);
                    setScrim(s);
                    if (selectedPhoto) {
                      onApplyWallpaper(selectedPhoto.file, s);
                    }
                  }}
                  className="scrim-slider"
                  title="Adjust dark scrim so code remains readable"
                />
              </div>

              {/* Buttons */}
              <div className="action-buttons">
                <button
                  className="btn-primary set-bg-btn"
                  onClick={handleSetBackground}
                >
                  ✓ Re-apply Background
                </button>
                {activeWallpaper && (
                  <button
                    className="btn-ghost remove-bg-btn"
                    onClick={handleRemove}
                    title="Remove custom wallpaper and return to default theme"
                  >
                    Reset BG
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Level 1: 5 Anime Folders Selection */
        <div className="anime-folders-view">
          <div className="studio-intro-banner">
            <div className="studio-intro-text">
              <div className="studio-intro-title">🎌 Anime Studio</div>
              <div className="studio-intro-sub">
                Select an anime folder to explore and set coding backgrounds. Theme colors will overlay your wallpaper.
              </div>
            </div>
            {activeWallpaper && (
              <button className="btn-sm-ghost" onClick={handleRemove}>
                Reset BG
              </button>
            )}
          </div>

          <div className="folders-grid">
            {ANIME_FOLDERS.map((folder) => {
              const isAvailable = folder.status === 'available';
              const previewImg = folder.preview ? resolveAssetUrl(folder.preview) : null;

              return (
                <div
                  key={folder.id}
                  className={`anime-folder-card ${isAvailable ? 'available' : 'locked'}`}
                  onClick={() => handleFolderClick(folder)}
                  style={{ '--folder-accent': folder.color }}
                >
                  <div className="folder-banner">
                    {previewImg ? (
                      <img src={previewImg} alt={folder.name} className="folder-banner-img" />
                    ) : (
                      <div className="folder-banner-placeholder" style={{ background: folder.color + '22' }}>
                        <span className="folder-big-emoji">{folder.emoji}</span>
                      </div>
                    )}
                    <span className={`folder-status-badge ${folder.status}`}>
                      {folder.badge}
                    </span>
                  </div>

                  <div className="folder-body">
                    <div className="folder-header-row">
                      <span className="folder-emoji">{folder.emoji}</span>
                      <div className="folder-name-wrap">
                        <div className="folder-name">{folder.name}</div>
                        <div className="folder-jp">{folder.japanese}</div>
                      </div>
                    </div>
                    <div className="folder-desc">{folder.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Settings Panel ───────────────────────────────────────────
function SettingsPanel({ settings, onChange }) {
  return (
    <div className="settings-panel panel-enter">
      <div className="settings-section">
        <div className="settings-section-title">Appearance</div>

        <div className="setting-row">
          <div>
            <div className="setting-label">Animations</div>
            <div className="setting-desc">Theme transition effects & particles</div>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={settings.animationsEnabled}
              onChange={(e) => onChange({ ...settings, animationsEnabled: e.target.checked })}
            />
            <div className="toggle-track" />
          </label>
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title">About</div>
        <div className="setting-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
          <div className="setting-label">LeetCode Theme Studio</div>
          <div className="setting-desc" style={{ lineHeight: 1.6 }}>
            Transform your LeetCode experience with hand-crafted themes & Anime Studio wallpapers.<br />
            Version 1.0.0 · Made with ♥
          </div>
        </div>
        <div className="setting-row" style={{ justifyContent: 'flex-start', gap: 8 }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 11, color: 'var(--brand)', textDecoration: 'none', fontWeight: 600 }}
          >
            GitHub ↗
          </a>
          <a
            href="#"
            style={{ fontSize: 11, color: 'var(--text-3)', textDecoration: 'none' }}
          >
            Privacy Policy ↗
          </a>
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title">Support the project</div>
        <div className="setting-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 10 }}>
          <div className="setting-desc" style={{ lineHeight: 1.6 }}>
            Enjoying Theme Studio? A small donation helps keep it maintained and growing with new themes! 🎨
          </div>
          <button
            className="btn-primary"
            style={{ width: '100%', height: 34, fontSize: 12 }}
            onClick={() => window.open(BUY_ME_COFFEE_URL, '_blank')}
          >
            ☕ Buy me a coffee
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Toast ────────────────────────────────────────────────────
function Toast({ message, show }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      {message}
    </div>
  );
}

// ── Donation Modal ───────────────────────────────────────────
function DonationModal({ onClose }) {
  const qrImageUrl = chrome?.runtime?.getURL 
    ? chrome.runtime.getURL('images/gpay-qr.jpeg')
    : '/images/gpay-qr.jpeg';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <h2 className="modal-title">💝 Support Development</h2>
        <p className="modal-subtitle">
          Choose your preferred payment method
        </p>

        <div className="donation-options">
          {/* UPI Option */}
          <div className="donation-option">
            <div className="option-header">
              <span className="option-icon">📱</span>
              <div>
                <h3 className="option-title">Pay via UPI</h3>
                <p className="option-desc">GPay • PhonePe • Paytm</p>
              </div>
            </div>
            <div className="qr-container">
              <img src={qrImageUrl} alt="UPI QR Code" className="qr-image" />
              <p className="qr-label">Scan with any UPI app</p>
              <div className="upi-id">
                <span className="upi-label">UPI ID:</span>
                <code>sahilkhan392005@oksbi</code>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="donation-divider">
            <span>OR</span>
          </div>

          {/* Card Option */}
          <div className="donation-option">
            <div className="option-header">
              <span className="option-icon">💳</span>
              <div>
                <h3 className="option-title">Pay via Card</h3>
                <p className="option-desc">International payments</p>
              </div>
            </div>
            <button
              className="btn-donate-card"
              onClick={() => window.open(BUY_ME_COFFEE_URL, '_blank')}
            >
              ☕ Buy me a coffee
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>

        <p className="modal-footer-text">
          ❤️ Your support helps keep this extension free and updated!
        </p>
      </div>
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────
export default function App() {
  const [activeTheme, setActiveTheme] = useState('dark-pro');
  const [settings, setSettings] = useState(defaultSettings());
  const [activeWallpaper, setActiveWallpaper] = useState(null);
  const [wallpaperScrim, setWallpaperScrim] = useState(0.68);
  const [tab, setTab] = useState('themes');
  const [toast, setToast] = useState({ show: false, message: '' });
  const [loading, setLoading] = useState(true);
  const [showDonationModal, setShowDonationModal] = useState(false);

  const themes = getAllThemes();
  const currentTheme = themes.find(t => t.id === activeTheme) || themes[0];

  // Load stored preferences
  useEffect(() => {
    loadStoredTheme().then(({ activeTheme: id, settings: s, activeWallpaper: wp, wallpaperScrim: sc }) => {
      setActiveTheme(id);
      setSettings(s);
      setActiveWallpaper(wp);
      setWallpaperScrim(sc);
      setLoading(false);
    });
  }, []);

  // Show toast helper
  const showToast = useCallback((msg) => {
    setToast({ show: true, message: msg });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 2200);
  }, []);

  // Apply theme
  const handleSelectTheme = useCallback(async (themeId) => {
    setActiveTheme(themeId);
    await applyThemeToTab(themeId, settings);
    const t = themes.find(x => x.id === themeId);
    showToast(`${t?.emoji} ${t?.name} applied!`);
  }, [settings, themes, showToast]);

  // Apply wallpaper
  const handleApplyWallpaper = useCallback(async (wallpaperUrl, scrim) => {
    setActiveWallpaper(wallpaperUrl);
    setWallpaperScrim(scrim);
    await applyWallpaperToTab(wallpaperUrl, scrim);
  }, []);

  // Remove wallpaper
  const handleRemoveWallpaper = useCallback(async () => {
    setActiveWallpaper(null);
    await removeWallpaperFromTab();
  }, []);

  // Update settings
  const handleSettingsChange = useCallback(async (newSettings) => {
    setSettings(newSettings);
    if (isChrome()) {
      chrome.storage.sync.set({ settings: newSettings });
    }
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ fontSize: 24, animation: 'logo-pulse 1s ease-in-out infinite' }}>🎨</div>
      </div>
    );
  }

  return (
    <>
      {/* Animated background */}
      <div className="popup-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="popup-grid" />
      </div>

      {/* Main shell */}
      <div className="popup-shell">

        {/* Header */}
        <header className="popup-header">
          <div className="header-brand">
            <div className="header-logo">🎨</div>
            <div className="header-text">
              <div className="header-title">Theme Studio</div>
              <div className="header-sub">LeetCode Themes</div>
            </div>
          </div>
          <div className="header-actions">
            <div className="status-dot" title="Active on LeetCode" />
            <button
              className="icon-btn coffee-btn"
              onClick={() => setShowDonationModal(true)}
              title="Support Development ☕"
            >
              ☕
            </button>
            <button
              className={`icon-btn ${tab === 'settings' ? 'active' : ''}`}
              onClick={() => setTab(t => t === 'settings' ? 'themes' : 'settings')}
              title="Settings"
            >
              ⚙
            </button>
          </div>
        </header>

        {/* Active theme banner */}
        <div
          className="active-banner"
          style={{
            '--banner-gradient': `linear-gradient(135deg, ${activeWallpaper ? 'rgba(56,189,248,0.2)' : (currentTheme.glowColor || 'rgba(99,102,241,0.1)')} 0%, transparent 60%)`,
          }}
        >
          <div
            className="banner-swatch"
            style={{ background: activeWallpaper ? 'linear-gradient(135deg, #0284c7, #38bdf8)' : currentTheme.previewGradient }}
          >
            {activeWallpaper ? '🏴‍☠️' : currentTheme.emoji}
          </div>
          <div className="banner-info">
            <div className="banner-label">{activeWallpaper ? 'Active Background Mode' : 'Active Theme'}</div>
            <div className="banner-name">
              {activeWallpaper ? 'One Piece Studio' : currentTheme.name}
              {activeWallpaper && <span style={{ fontSize: 11, color: '#38bdf8', marginLeft: 8 }}>• Wallpaper Active</span>}
            </div>
            <div className="banner-tagline">
              {activeWallpaper ? 'Previous theme disabled • Pure frosted glass' : currentTheme.tagline}
            </div>
          </div>
          <div
            className="banner-glow"
            style={{ background: activeWallpaper ? '#38bdf8' : currentTheme.accentColor }}
          />
        </div>

        {/* Tab bar */}
        <div className="tab-bar">
          <button
            className={`tab-btn ${tab === 'themes' ? 'active' : ''}`}
            onClick={() => setTab('themes')}
          >
            🎨 Themes
          </button>
          <button
            className={`tab-btn ${tab === 'anime' ? 'active' : ''}`}
            onClick={() => setTab('anime')}
          >
            🎌 Anime Studio
          </button>
          <button
            className={`tab-btn ${tab === 'settings' ? 'active' : ''}`}
            onClick={() => setTab('settings')}
          >
            ⚙ Settings
          </button>
        </div>

        {/* Content panels */}
        {tab === 'themes' && (
          <div className="themes-panel-wrapper panel-enter">
            {/* Anime Studio Banner Card — Full Width Hero Banner across top */}
            <div className="anime-studio-banner-card" onClick={() => setTab('anime')}>
              <div className="studio-banner-previews">
                <img
                  src={resolveAssetUrl('images/anime/one-piece/02-luffy.webp')}
                  alt="Luffy"
                  className="banner-preview-img"
                  loading="lazy"
                />
                <img
                  src={resolveAssetUrl('images/anime/one-piece/01-crew-ensemble.webp')}
                  alt="Crew"
                  className="banner-preview-img"
                  loading="lazy"
                />
                <img
                  src={resolveAssetUrl('images/anime/one-piece/03-zoro.webp')}
                  alt="Zoro"
                  className="banner-preview-img"
                  loading="lazy"
                />
                <div className="code-overlay-mockup">
                  <div className="code-line"><span className="c-kw">def</span> <span className="c-fn">dfs</span>(node):</div>
                  <div className="code-line indent"><span className="c-kw">if not</span> node: <span className="c-cm"># base case</span></div>
                  <div className="code-line indent-2"><span className="c-kw">return</span> <span className="c-num">0</span></div>
                  <div className="code-line indent"><span className="c-kw">return</span> <span className="c-num">1</span> + <span className="c-fn">dfs</span>(node.next)</div>
                </div>
              </div>
              <div className="studio-banner-body">
                <div className="studio-banner-top">
                  <div className="studio-banner-title">Anime Studio</div>
                  <div className="studio-banner-subtitle">your scene, episode moments</div>
                  {activeWallpaper && <div className="card-check">✓</div>}
                </div>
                <div className="studio-banner-action">
                  <div className="studio-action-left">
                    <span className="anime-jp-tag">アニメ</span>
                    <div>
                      <div className="studio-action-title">Open Anime Studio</div>
                      <div className="studio-action-desc">Explore One Piece folders & set backgrounds →</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Themes Grid — 3 per row (compact, proportional, unstretched) */}
            <div className="theme-gallery">
              {themes.map((theme) => (
                <ThemeCard
                  key={theme.id}
                  theme={theme}
                  isActive={theme.id === activeTheme}
                  onSelect={handleSelectTheme}
                />
              ))}
            </div>
          </div>
        )}

        {tab === 'anime' && (
          <AnimeStudioView
            activeTheme={activeTheme}
            activeWallpaper={activeWallpaper}
            onApplyWallpaper={handleApplyWallpaper}
            onRemoveWallpaper={handleRemoveWallpaper}
            onSelectTheme={handleSelectTheme}
            showToast={showToast}
            themes={themes}
          />
        )}

        {tab === 'settings' && (
          <SettingsPanel
            settings={settings}
            onChange={handleSettingsChange}
          />
        )}

        {/* Footer */}
        <footer className="popup-footer">
          <div className="footer-left">
            ✨ <span>6 themes</span> · 32 anime wallpapers
          </div>
          <div className="footer-actions">
            <button
              className="btn-coffee"
              onClick={() => setShowDonationModal(true)}
              title="Support the developer"
            >
              ☕ Buy me a coffee
            </button>
            <button
              className="btn-ghost"
              onClick={() => window.open('https://leetcode.com', '_blank')}
            >
              Open LeetCode ↗
            </button>
          </div>
        </footer>
      </div>

      {/* Toast */}
      <Toast message={toast.message} show={toast.show} />

      {/* Donation Modal */}
      {showDonationModal && (
        <DonationModal onClose={() => setShowDonationModal(false)} />
      )}
    </>
  );
}
