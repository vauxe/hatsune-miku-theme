/**
 * Hatsune Miku Theme - Palette Index
 *
 * Central export for all color palettes
 * Comprehensive collection of official Hatsune Miku design colors
 */

// Core palette exports
export * from './core';

// Variant palette exports
export * from './variants';

// Re-export everything as a unified palette object for convenience
import * as core from './core';
import * as variants from './variants';

export const palette = {
  // ==========================================================================
  // CORE - Miku Character Design (KEI 2007)
  // ==========================================================================
  character: core.character,

  // ==========================================================================
  // VOICEBANK VERSIONS - Software Release Designs
  // ==========================================================================
  mikuVersions: variants.mikuVersions, // V2, Append, V3, V4X, V4 Chinese, NT

  // ==========================================================================
  // ANNUAL EVENT SERIES
  // ==========================================================================
  snowMiku: variants.snowMiku,         // Sapporo Snow Festival (2010-2025)
  racingMiku: variants.racingMiku,     // Good Smile Racing (2008-2025)
  thaiRacingMiku: variants.thaiRacingMiku, // Thai/Tanned variant (2013-2023)
  magicalMirai: variants.magicalMirai, // Concert Series (2013-2025)
  mikuExpo: variants.mikuExpo,         // World Tour (2014-2026)
  mikuSymphony: variants.mikuSymphony, // Orchestra Concert Series (2017-present)
  mikuWithYou: variants.mikuWithYou,   // China Tour (2017-2021)
  digitalStars: variants.digitalStars, // Club Event Series (2020-2023)
  anniversaries: variants.anniversaries, // Milestone Celebrations (5th, 10th, 15th, 16th)
  mikuDay: variants.mikuDay,           // March 9th (39) Celebration

  // ==========================================================================
  // GAMES & MEDIA
  // ==========================================================================
  projectSekai: variants.projectSekai, // Project SEKAI - Miku in SEKAI worlds
  projectDiva: variants.projectDiva,   // Iconic modules/costumes from Project DIVA
  gameCrossovers: variants.gameCrossovers, // Persona 4 DAN, 7th Dragon, Ninjala

  // ==========================================================================
  // ICONIC PV/SONG DESIGNS
  // ==========================================================================
  iconicPVs: variants.iconicPVs,       // Tell Your World, Ghost Rule, Sand Planet, etc.

  // ==========================================================================
  // SPECIAL VARIANTS
  // ==========================================================================
  sakuraMiku: variants.sakuraMiku,     // Cherry Blossom version (桜ミク)
  collaborations: variants.collaborations, // Brand partnerships (LV, Toyota, Google, OPPO, etc.)

  // ==========================================================================
  // CONVENIENCE STORE & FOOD COLLABORATIONS
  // ==========================================================================
  convenienceStores: variants.convenienceStores, // Lawson, FamilyMart, Domino's

  // ==========================================================================
  // CULTURAL EVENTS & APPEARANCES
  // ==========================================================================
  culturalEvents: variants.culturalEvents, // Coachella, Letterman, Lady Gaga, LV Opera

  // ==========================================================================
  // TRANSPORTATION COLLABORATIONS
  // ==========================================================================
  transportation: variants.transportation, // Snow Miku Streetcar, JR Yamanote, Sapporo Station
} as const;

export type Palette = typeof palette;
