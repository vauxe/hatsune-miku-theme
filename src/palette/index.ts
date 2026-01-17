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
  projectDiva: variants.projectDiva,
  collaborations: variants.collaborations,
  mikuNT: variants.mikuNT,
  sakuraMiku: variants.sakuraMiku,
  vocaloidFamily: variants.vocaloidFamily,
  // NEW: Project SEKAI Complete
  projectSekai: variants.projectSekai,
  // NEW: Derivative Characters (Hachune, Zatsune, Gray Miku, Mikudayo)
  derivativeCharacters: variants.derivativeCharacters,
  // NEW: Iconic Music Video Palettes
  iconicPVs: variants.iconicPVs,
  // NEW: 39's Day / Miku Day Celebration
  mikuDay: variants.mikuDay,
  // NEW: Miku Symphony Orchestra
  mikuSymphony: variants.mikuSymphony,
  // NEW: Piapro Studio DAW
  piapro: variants.piapro,
  // NEW: Crypton Future Media Brand
  crypton: variants.crypton,
  // NEW: Project DIVA Expanded
  projectDivaExpanded: variants.projectDivaExpanded,
  // NEW: Snow Miku 2025 - Crystal Snow
  snowMiku2025: variants.snowMiku2025,
  // NEW: Racing Miku 2024
  racingMiku2024: variants.racingMiku2024,
  // NEW: Expanded Seasonal Variants
  seasonalExpanded: variants.seasonalExpanded,
  // NEW: Module Costumes Expanded
  modulesExpanded: variants.modulesExpanded,
} as const;

export type Palette = typeof palette;
