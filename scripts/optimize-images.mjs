/**
 * Image Optimization Script - Phase 3
 * Converts PNG wallpapers to WebP format for 40-60% size reduction
 */

import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

const WALLPAPER_DIRS = [
  'public/images/anime/one-piece',
  'public/images/anime/bleach'
];

const WEBP_QUALITY = 85; // Balance between quality and size

async function convertToWebP(sourcePath, targetPath) {
  try {
    const image = sharp(sourcePath);
    const metadata = await image.metadata();
    
    await image
      .webp({ quality: WEBP_QUALITY, effort: 6 })
      .toFile(targetPath);
    
    return { success: true, metadata };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function optimizeDirectory(dirPath) {
  const fullPath = join(PROJECT_ROOT, dirPath);
  
  if (!existsSync(fullPath)) {
    console.log(`⚠️  Directory not found: ${dirPath}`);
    return;
  }
  
  console.log(`\n📁 Processing: ${dirPath}`);
  console.log('─'.repeat(60));
  
  const files = await readdir(fullPath);
  const pngFiles = files.filter(f => f.endsWith('.png'));
  
  let totalSaved = 0;
  let converted = 0;
  
  for (const file of pngFiles) {
    const sourcePath = join(fullPath, file);
    const targetFile = file.replace('.png', '.webp');
    const targetPath = join(fullPath, targetFile);
    
    // Skip if WebP already exists
    if (existsSync(targetPath)) {
      console.log(`⏭️  ${file} → ${targetFile} (already exists)`);
      continue;
    }
    
    const sourceStats = await readFile(sourcePath);
    const sourceSizeKB = (sourceStats.length / 1024).toFixed(2);
    
    console.log(`🔄 Converting ${file} (${sourceSizeKB} KB)...`);
    
    const result = await convertToWebP(sourcePath, targetPath);
    
    if (result.success) {
      const targetStats = await readFile(targetPath);
      const targetSizeKB = (targetStats.length / 1024).toFixed(2);
      const savedKB = sourceStats.length - targetStats.length;
      const savedPercent = ((savedKB / sourceStats.length) * 100).toFixed(1);
      
      console.log(`   ✅ → ${targetFile} (${targetSizeKB} KB) | Saved: ${savedPercent}%`);
      
      totalSaved += savedKB;
      converted++;
    } else {
      console.log(`   ❌ Failed: ${result.error}`);
    }
  }
  
  if (converted > 0) {
    const totalSavedMB = (totalSaved / (1024 * 1024)).toFixed(2);
    console.log(`\n✅ Converted ${converted} images | Total saved: ${totalSavedMB} MB`);
  } else {
    console.log(`\n✅ All images already optimized`);
  }
}

async function main() {
  console.log('\n🎨 LeetCode Theme Studio - Image Optimizer');
  console.log('='.repeat(60));
  console.log('Converting PNG wallpapers to WebP format...\n');
  
  // Check if sharp is installed
  try {
    await import('sharp');
  } catch (error) {
    console.error('❌ Sharp is not installed!');
    console.error('Run: npm install --save-dev sharp');
    process.exit(1);
  }
  
  let totalStartSize = 0;
  let totalEndSize = 0;
  
  for (const dir of WALLPAPER_DIRS) {
    await optimizeDirectory(dir);
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ Image optimization complete!\n');
  console.log('📝 Next steps:');
  console.log('   1. Update theme config to reference .webp files');
  console.log('   2. Test extension with new image format');
  console.log('   3. Optionally delete .png files after testing\n');
}

main().catch(console.error);
