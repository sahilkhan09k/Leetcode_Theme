/**
 * Image Preloader - Phase 3 Optimization
 * Preloads active wallpaper in background for instant display
 */

const preloadedImages = new Map();
const preloadQueue = [];
let isPreloading = false;

/**
 * Preload an image URL
 * @param {string} url - Image URL to preload
 * @returns {Promise<HTMLImageElement>}
 */
export function preloadImage(url) {
  // Return cached image if already preloaded
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
    
    // Start loading
    img.src = url;
  });
}

/**
 * Preload multiple images with priority queue
 * @param {string[]} urls - Array of image URLs
 * @param {Object} options - Preload options
 * @returns {Promise<void>}
 */
export async function preloadImages(urls, options = {}) {
  const { priority = false, maxConcurrent = 3 } = options;
  
  if (priority) {
    // Priority load - immediate
    await Promise.all(urls.map(url => preloadImage(url)));
  } else {
    // Queue for background loading
    preloadQueue.push(...urls.filter(url => !preloadedImages.has(url)));
    processPreloadQueue(maxConcurrent);
  }
}

/**
 * Process preload queue in background
 * @param {number} maxConcurrent - Max concurrent downloads
 */
async function processPreloadQueue(maxConcurrent = 3) {
  if (isPreloading || preloadQueue.length === 0) return;
  
  isPreloading = true;
  
  while (preloadQueue.length > 0) {
    const batch = preloadQueue.splice(0, maxConcurrent);
    await Promise.allSettled(batch.map(url => preloadImage(url)));
  }
  
  isPreloading = false;
}

/**
 * Check if image is preloaded
 * @param {string} url - Image URL
 * @returns {boolean}
 */
export function isImagePreloaded(url) {
  return preloadedImages.has(url);
}

/**
 * Clear preloaded images cache
 * @param {string[]} urls - Optional specific URLs to clear
 */
export function clearPreloadCache(urls = null) {
  if (urls) {
    urls.forEach(url => preloadedImages.delete(url));
  } else {
    preloadedImages.clear();
  }
}

/**
 * Get preload cache statistics
 * @returns {Object}
 */
export function getPreloadStats() {
  return {
    cached: preloadedImages.size,
    queued: preloadQueue.length,
    isPreloading
  };
}
