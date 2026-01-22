/**
 * Hatsune Miku Theme - Palette Index
 *
 * Central export for all color palettes
 * Comprehensive collection of official Hatsune Miku design colors
 */

// Core palette exports
export * from './core';

// Event palettes
export * from './events/snowMiku';
export * from './events/racingMiku';
export * from './events/concerts';

// Game palettes
export * from './games';

// Special variants
export * from './special';

// Collaborations
export * from './collaborations';

// Re-export everything as a unified palette object for convenience
import { character } from './core';
import { snowMiku } from './events/snowMiku';
import { racingMiku, thaiRacingMiku } from './events/racingMiku';
import {
  magicalMirai,
  mikuExpo,
  mikuSymphony,
  mikuWithYou,
  digitalStars,
  anniversaries,
  mikuDay,
} from './events/concerts';
import { projectSekai, projectDiva, gameCrossovers } from './games';
import { sakuraMiku, mikuVersions, iconicPVs } from './special';
import {
  collaborations,
  convenienceStores,
  culturalEvents,
  transportation,
} from './collaborations';

export const palette = {
  // ==========================================================================
  // CORE - Miku Character Design (KEI 2007)
  // ==========================================================================
  character,

  // ==========================================================================
  // VOICEBANK VERSIONS - Software Release Designs
  // ==========================================================================
  mikuVersions, // V2, Append, V3, V4X, V4 Chinese, NT

  // ==========================================================================
  // ANNUAL EVENT SERIES
  // ==========================================================================
  snowMiku,         // Sapporo Snow Festival (2010-2025)
  racingMiku,       // Good Smile Racing (2008-2025)
  thaiRacingMiku,   // Thai/Tanned variant (2013-2023)
  magicalMirai,     // Concert Series (2013-2025)
  mikuExpo,         // World Tour (2014-2026)
  mikuSymphony,     // Orchestra Concert Series (2017-present)
  mikuWithYou,      // China Tour (2017-2021)
  digitalStars,     // Club Event Series (2020-2023)
  anniversaries,    // Milestone Celebrations (5th, 10th, 15th, 16th)
  mikuDay,          // March 9th (39) Celebration

  // ==========================================================================
  // GAMES & MEDIA
  // ==========================================================================
  projectSekai,     // Project SEKAI - Miku in SEKAI worlds
  projectDiva,      // Iconic modules/costumes from Project DIVA
  gameCrossovers,   // Persona 4 DAN, 7th Dragon, Ninjala

  // ==========================================================================
  // ICONIC PV/SONG DESIGNS
  // ==========================================================================
  iconicPVs,        // Tell Your World, Ghost Rule, Sand Planet, etc.

  // ==========================================================================
  // SPECIAL VARIANTS
  // ==========================================================================
  sakuraMiku,       // Cherry Blossom version

  // ==========================================================================
  // BRAND COLLABORATIONS
  // ==========================================================================
  collaborations,   // Brand partnerships (LV, Toyota, Google, OPPO, etc.)

  // ==========================================================================
  // CONVENIENCE STORE & FOOD COLLABORATIONS
  // ==========================================================================
  convenienceStores, // Lawson, FamilyMart, Domino's

  // ==========================================================================
  // CULTURAL EVENTS & APPEARANCES
  // ==========================================================================
  culturalEvents,   // Coachella, Letterman, Lady Gaga, LV Opera

  // ==========================================================================
  // TRANSPORTATION COLLABORATIONS
  // ==========================================================================
  transportation,   // Snow Miku Streetcar, JR Yamanote, Sapporo Station
} as const;

export type Palette = typeof palette;
