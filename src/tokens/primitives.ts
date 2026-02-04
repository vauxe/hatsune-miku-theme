/**
 * Design Token Primitives
 *
 * Layer 1: Raw values that define the design system foundation.
 * These are the building blocks - no semantic meaning, just values.
 *
 * Primitives include:
 * - Lightness levels (Jz values for APCA contrast)
 * - Chroma levels (visual weight/saturation)
 * - Hue angles (color identity)
 * - Character-derived hex colors (canonical palette)
 */

import { character as mikuCharacter } from '../palette/core';
import { LIGHTNESS as JZ_LIGHTNESS, CHROMA as JZ_CHROMA, HUE as JZ_HUE } from '../palette/jzczhz';

// =============================================================================
// LIGHTNESS PRIMITIVES
// =============================================================================
// Jz lightness values tuned for APCA contrast on dark backgrounds
// These can be inverted or adjusted for light theme variants

export const lightness = {
  // Primary syntax (target Lc 75-85 on dark bg)
  primary: JZ_LIGHTNESS.primary,           // 0.190 - Cool hues with C1
  primaryWarm: JZ_LIGHTNESS.primaryWarm,   // 0.200 - Warm hues with C1
  vibrant: JZ_LIGHTNESS.vibrant,           // 0.185 - Cool hues with C2
  vibrantWarm: JZ_LIGHTNESS.vibrantWarm,   // 0.207 - Warm hues with C2
  vivid: JZ_LIGHTNESS.vivid,               // 0.175 - C3 (prevents halation)
  muted: JZ_LIGHTNESS.muted,               // 0.195 - CM (comments need light)

  // Secondary elements
  secondary: JZ_LIGHTNESS.secondary,       // 0.185 - Lc ~75+
  tertiary: JZ_LIGHTNESS.tertiary,         // 0.12 - Lc ~55 (ghost text)
  accent: JZ_LIGHTNESS.accent,             // 0.185 - Lc ~78+ (brackets)
} as const;

// =============================================================================
// CHROMA PRIMITIVES
// =============================================================================
// Raw Cz values - percentage scale: Cz * 525 ≈ percentage

export const chroma = {
  comfortable: JZ_CHROMA.comfortable,      // 0.055 - ~29% for extended reading
  vibrant: JZ_CHROMA.vibrant,              // 0.070 - ~37% colorful accents
  vivid: JZ_CHROMA.vivid,                  // 0.085 - ~45% attention-grabbing
  muted: JZ_CHROMA.muted,                  // 0.040 - ~21% subtle comments
  gray: 0.015,                             // ~8% near-neutral
  none: 0,                                 // 0% achromatic
} as const;

// =============================================================================
// HUE PRIMITIVES
// =============================================================================
// JzCzhz hue angles (0-360°) - distributed for 30°+ separation

export const hue = {
  // Core brand identity
  mikuTeal: JZ_HUE.mikuTeal,      // 178° - Signature
  mikuPink: JZ_HUE.mikuPink,      // 340° - Accent

  // Syntax spectrum (evenly distributed)
  coral: JZ_HUE.coral,            // 15°  - Tags, hot
  red: JZ_HUE.red,                // 20°  - Terminal red
  peach: JZ_HUE.peach,            // 40°  - Parameters
  amber: JZ_HUE.amber,            // 70°  - Constants
  gold: JZ_HUE.gold,              // 88°  - Functions
  lime: JZ_HUE.lime,              // 120° - Classes
  mint: JZ_HUE.mint,              // 145° - Strings
  ice: JZ_HUE.ice,                // 195° - Enums
  sky: JZ_HUE.sky,                // 210° - Variables
  periwinkle: JZ_HUE.periwinkle,  // 250° - Macros
  lavender: JZ_HUE.lavender,      // 275° - Comments
  orchid: JZ_HUE.orchid,          // 290° - Types
  magenta: JZ_HUE.magenta,        // 320° - Terminal
  rose: JZ_HUE.rose,              // 330° - Interfaces

  // Git status
  gitRed: JZ_HUE.gitRed,          // 10°  - Deleted
  gitViolet: JZ_HUE.gitViolet,    // 265° - Conflict
} as const;

// =============================================================================
// CHARACTER PRIMITIVES
// =============================================================================
// Canonical hex colors from Miku's character design
// These are the "source of truth" for brand colors

export const character = {
  // Hair - signature twin tails
  hair: {
    base: mikuCharacter.hair.base,           // #39C5BB - Primary teal
    shadow: mikuCharacter.hair.shadow,       // #1A8A82 - Dark roots
    highlight: mikuCharacter.hair.highlight, // #5DE4DB - Light shine
    bright: mikuCharacter.hair.bright,       // #7FEDE5 - Brightest
    tip: mikuCharacter.hair.tip,             // #B2EBE7 - Lightest tips
  },

  // Eyes - matching teal
  eyes: {
    iris: mikuCharacter.eyes.iris,           // #39C5BB
    highlight: mikuCharacter.eyes.highlight, // #5DE4DB
    pupil: mikuCharacter.eyes.pupil,         // #0D1114
  },

  // Headphones - signature accessory
  headphones: {
    frame: mikuCharacter.headphones.frame,   // #1A1F24 - Dark grey
    cushion: mikuCharacter.headphones.cushion, // #E05096 - Magenta-pink
    display: mikuCharacter.headphones.display, // #39C5BB - Teal "01"
  },

  // Hair ties - magenta accent
  hairTies: {
    base: mikuCharacter.hairTies.base,       // #111417 - Black body
    outline: mikuCharacter.hairTies.outline, // #E05096 - Magenta border
  },

  // Outfit
  top: {
    main: mikuCharacter.top.main,            // #37474F
    shadow: mikuCharacter.top.shadow,        // #263238
    trim: mikuCharacter.top.trim,            // #39C5BB
  },
  skirt: {
    base: mikuCharacter.skirt.base,          // #15191D
    trim: mikuCharacter.skirt.trim,          // #39C5BB
    accessory: mikuCharacter.skirt.accessory, // #A1B3B6 - Chain
  },
  armWarmers: {
    base: mikuCharacter.armWarmers.base,     // #111417
    pattern: mikuCharacter.armWarmers.pattern, // #39C5BB
  },
  boots: {
    base: mikuCharacter.boots.base,          // #111417
    accent: mikuCharacter.boots.accent,      // #39C5BB
  },

  // Accent colors
  tie: {
    base: mikuCharacter.tie.base,            // #39C5BB
    shadow: mikuCharacter.tie.shadow,        // #2D9E97
  },
  negi: {
    stalk: mikuCharacter.negi.stalk,         // #9CCC65
    bright: mikuCharacter.negi.bright,       // #69F0AE
    white: mikuCharacter.negi.white,         // #E8F5E9
  },
} as const;

// =============================================================================
// OPACITY SCALE
// =============================================================================
// Standardized alpha values for consistent transparency across the theme
// Usage: `${color}${opacity.medium}` → '#39C5BB25'

export const opacity = {
  // Subtle - barely visible, hover hints
  subtle: '08',        // 3% - faint hover backgrounds

  // Light - visible but unobtrusive
  light: '15',         // 8% - selection backgrounds, inactive states

  // Medium - clearly visible overlays
  medium: '25',        // 15% - active states, light borders

  // Strong - prominent overlays
  strong: '40',        // 25% - strong selections, visible borders

  // Heavy - dominant overlays
  heavy: '60',         // 38% - modal overlays, strong borders

  // Solid - near-opaque
  solid: '80',         // 50% - semi-transparent panels

  // Dense - mostly opaque
  dense: 'CC',         // 80% - tooltip backgrounds

  // Opaque - fully visible
  opaque: 'FF',        // 100% - solid colors
} as const;

// =============================================================================
// SPECIAL PRIMITIVES
// =============================================================================
// Colors that don't fit the JzCzhz model (edge cases)

export const special = {
  void: '#0A0D10',       // Deepest black (near-zero luminance)
  pureWhite: '#FFFFFF',  // Maximum contrast white
  nearWhite: '#F8F8F8',  // Soft white (Lc ~97)
  transparent: '#00000000',
} as const;

// =============================================================================
// TYPE EXPORTS
// =============================================================================

// Use flexible types for variant support (not literal types from `as const`)
export interface LightnessValues {
  primary: number;
  primaryWarm: number;
  vibrant: number;
  vibrantWarm: number;
  vivid: number;
  muted: number;
  secondary: number;
  tertiary: number;
  accent: number;
}

export interface ChromaValues {
  comfortable: number;
  vibrant: number;
  vivid: number;
  muted: number;
  gray: number;
  none: number;
}

export interface HueValues {
  mikuTeal: number;
  mikuPink: number;
  coral: number;
  red: number;
  peach: number;
  amber: number;
  gold: number;
  lime: number;
  mint: number;
  ice: number;
  sky: number;
  periwinkle: number;
  lavender: number;
  orchid: number;
  magenta: number;
  rose: number;
  gitRed: number;
  gitViolet: number;
}

export interface ColorPair {
  base: string;
  shadow?: string;
  highlight?: string;
  bright?: string;
  tip?: string;
  trim?: string;
  pattern?: string;
  accent?: string;
  accessory?: string;
  main?: string;
}

export interface CharacterColors {
  hair: { base: string; shadow: string; highlight: string; bright: string; tip: string };
  eyes: { iris: string; highlight: string; pupil: string };
  headphones: { frame: string; cushion: string; display: string };
  hairTies: { base: string; outline: string };
  top: { main: string; shadow: string; trim: string };
  skirt: { base: string; trim: string; accessory: string };
  armWarmers: { base: string; pattern: string };
  boots: { base: string; accent: string };
  tie: { base: string; shadow: string };
  negi: { stalk: string; bright: string; white: string };
}

export interface SpecialColors {
  void: string;
  pureWhite: string;
  nearWhite: string;
  transparent: string;
}

export interface OpacityScale {
  subtle: string;
  light: string;
  medium: string;
  strong: string;
  heavy: string;
  solid: string;
  dense: string;
  opaque: string;
}

// Readonly literal types for the default exports
export type Lightness = typeof lightness;
export type Chroma = typeof chroma;
export type Hue = typeof hue;
export type Character = typeof character;
export type Special = typeof special;
export type Opacity = typeof opacity;

// Flexible interface for variants
export interface Primitives {
  lightness: LightnessValues;
  chroma: ChromaValues;
  hue: HueValues;
  character: CharacterColors;
  special: SpecialColors;
  opacity: OpacityScale;
}

export const primitives: Primitives = {
  lightness,
  chroma,
  hue,
  character,
  special,
  opacity,
};
