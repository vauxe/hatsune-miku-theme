/**
 * Hatsune Miku Theme - Palette Index
 *
 * Central export for all color palettes
 */

// Core palette exports
export * from './core';

// Variant palette exports
export * from './variants';

// Re-export everything as a unified palette object for convenience
import * as core from './core';
import * as variants from './variants';

export const palette = {
  // Core identity
  ...core,
  // Special variants - Existing
  snowMiku: variants.snowMiku,
  racingMiku: variants.racingMiku,
  magicalMirai: variants.magicalMirai,
  mikuExpo: variants.mikuExpo,
  // NEW: Project SEKAI Complete
  projectSekai: variants.projectSekai,
  mikuSymphony: variants.mikuSymphony,
} as const;

export type Palette = typeof palette;
