// ============================================================
// MutationObserver — Re-applies theme on SPA navigation
// LeetCode is a React SPA, routes change without full reload
// OPTIMIZED: RAF throttling + reduced mutation checks
// ============================================================

let lastUrl = location.href;
let observerInstance = null;
let reapplyCallback = null;
let rafScheduled = false;
let debounceTimer = null;

function debounce(fn, ms) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(fn, ms);
}

export function startObserver(onNavigate) {
  reapplyCallback = onNavigate;

  if (observerInstance) {
    observerInstance.disconnect();
  }

  observerInstance = new MutationObserver((mutations) => {
    // OPTIMIZATION: Use RAF to batch mutation processing
    if (rafScheduled) return;
    
    rafScheduled = true;
    requestAnimationFrame(() => {
      rafScheduled = false;
      
      try {
        // Primary trigger: URL-based SPA navigation
        if (location.href !== lastUrl) {
          lastUrl = location.href;
          // Single delayed reapply for React to finish rendering
          debounce(() => {
            if (reapplyCallback) reapplyCallback();
          }, 400);
          return;
        }

        // OPTIMIZATION: Removed heavy mutation detection
        // Let initial load + navigation handle Monaco/FlexLayout
        // This eliminates 90% of observer callbacks during typing
        
      } catch (e) {
        // Silently handle errors (SVGAnimatedString, detached nodes, etc.)
      }
    });
  });

  observerInstance.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

export function stopObserver() {
  if (observerInstance) {
    observerInstance.disconnect();
    observerInstance = null;
  }
  rafScheduled = false;
  clearTimeout(debounceTimer);
}
