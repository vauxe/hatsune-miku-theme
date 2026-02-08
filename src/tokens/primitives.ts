/**
 * Design Token Primitives
 *
 * The foundation of everything. Raw values — lightness, chroma, hue —
 * that carry no semantic meaning yet. Like musical notes before a composer
 * arranges them. Like Miku's voice before a producer writes her a song.
 *
 * These primitives become keywords, variables, errors, and backgrounds
 * when the semantic layer gives them purpose.
 */

import { character as mikuCharacter } from '../palette/core';
import { LIGHTNESS as JZ_LIGHTNESS, CHROMA as JZ_CHROMA, HUE as JZ_HUE } from './jzczhz';

// =============================================================================
// LIGHTNESS PRIMITIVES
// =============================================================================
// Jz lightness values tuned for APCA contrast on dark backgrounds
// These can be inverted or adjusted for light theme variants

export const lightness = {
  // Primary syntax (target Lc 82+ for overlay survival on dark bg)
  primary: JZ_LIGHTNESS.primary,           // 0.192 - Cool hues with C1
  primaryWarm: JZ_LIGHTNESS.primaryWarm,   // 0.210 - Warm hues with C1
  vibrant: JZ_LIGHTNESS.vibrant,           // 0.188 - Cool hues with C2
  vibrantWarm: JZ_LIGHTNESS.vibrantWarm,   // 0.215 - Warm hues with C2
  vivid: JZ_LIGHTNESS.vivid,               // 0.180 - C3 (prevents halation)
  muted: JZ_LIGHTNESS.muted,               // 0.195 - CM (comments need light)

  // Secondary elements
  secondary: JZ_LIGHTNESS.secondary,       // 0.185 - Lc ~75+
  tertiary: JZ_LIGHTNESS.tertiary,         // 0.12 - Lc ~55 (ghost text)
  accent: JZ_LIGHTNESS.accent,             // 0.190 - Lc ~80+ (brackets)
} as const;

// =============================================================================
// CHROMA PRIMITIVES
// =============================================================================
// Raw Cz values - percentage scale: Cz * 525 ≈ percentage

export const chroma = {
  comfortable: JZ_CHROMA.comfortable,      // 0.060 - ~31% mp dynamic, extended reading
  vibrant: JZ_CHROMA.vibrant,              // 0.075 - ~39% mf dynamic, colorful accents
  vivid: JZ_CHROMA.vivid,                  // 0.090 - ~47% f dynamic, attention-grabbing
  muted: JZ_CHROMA.muted,                  // 0.045 - ~24% p dynamic, subtle comments
  gray: 0.015,                             // ~8% ppp, near-neutral
  none: 0,                                 // 0% achromatic
} as const;

// =============================================================================
// HUE PRIMITIVES - 12-TONE CHROMATIC SYSTEM
// =============================================================================
// Based on musical equal temperament: 12 hues at exactly 30° intervals
// F# (180°) = Miku's teal = The "tonic" of the theme
//
// Musical notes mapped to hue wheel:
//   C=0°  C#=30°  D=60°  D#=90°  E=120°  F=150°
//   F#=180° (MIKU)  G=210°  G#=240°  A=270°  A#=300°  B=330°

export const hue = {
  // ═══════════════════════════════════════════════════════════════════════════
  // THE 12 CHROMATIC TONES (exactly 30° apart)
  // ═══════════════════════════════════════════════════════════════════════════

  // C  - Red (0°) - The Tritone — maximum dissonance from Miku
  red: 0,              // Errors, danger, her "01" tattoo mark

  // C# - Coral (30°) - The Fifth — warmth flowing in
  coral: 30,           // Parameters, tags, concert warmth

  // D  - Gold (60°) - Concert Lights — where the action begins
  gold: 60,            // Functions, the spotlight hitting the stage

  // D# - Lime (90°) - Growth — structure emerging
  lime: 90,            // Classes, the bright accent of her negi's stem

  // E  - Green (120°) - The Negi — humble, fundamental, iconic
  green: 120,          // Strings, literal truth, Ievan Polkka

  // F  - Mint (150°) - The Leading Tone — yearning toward teal
  mint: 150,           // Methods, storage, the note before home

  // F# - Teal (180°) - ★ MIKU ★ — her voice, the tonic, #39C5BB
  mikuTeal: 180,       // Keywords, the heart of code

  // G  - Cyan (210°) - Her Voice, Shifting — the same, never the same
  cyan: 210,           // Variables, data in motion

  // G# - Blue (240°) - The Deep — Deep Sea Girl, constancy
  blue: 240,           // Numbers, constants of the universe

  // A  - Violet (270°) - Duality — definition and instance
  violet: 270,         // Types, Nightcord's heterochromia

  // A# - Magenta (300°) - Meta-Magic — code that transforms code
  magenta: 300,        // Interfaces, decorators

  // B  - Pink (330°) - Headphone Harmony — supporting, connecting
  pink: 330,           // Operators, her headphone cushion accent

  // ═══════════════════════════════════════════════════════════════════════════
  // SEMANTIC ALIASES (for backward compatibility)
  // ═══════════════════════════════════════════════════════════════════════════

  // Core brand
  mikuPink: 330,       // = B (Pink) - Headphone/accent color

  // Syntax aliases (map to nearest chromatic tone)
  peach: 30,           // = C# (Coral)
  amber: 60,           // = D (Gold)
  sky: 210,            // = G (Cyan)
  ice: 210,            // = G (Cyan) - for enums
  periwinkle: 240,     // = G# (Blue)
  lavender: 270,       // = A (Violet)
  orchid: 270,         // = A (Violet)
  rose: 330,           // = B (Pink)

  // Git status (using chromatic tones)
  gitRed: 0,           // = C (Red)
  gitViolet: 270,      // = A (Violet)
} as const;

// =============================================================================
// CHARACTER PRIMITIVES
// =============================================================================
// Canonical hex colors from Miku's character design by KEI (V3/V4X standard).
// Every UI background, every accent, every border traces back to her.
// You code inside her world.

export const character = {
  // Hair — the twin tails that defined a generation
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

  // Headphones — the interface between her and the music
  headphones: {
    frame: mikuCharacter.headphones.frame,   // #1A1F24 — dark grey frame
    cushion: mikuCharacter.headphones.cushion, // #E05096 — the pink that became the cursor
    display: mikuCharacter.headphones.display, // #39C5BB — "01" glowing on the side
  },

  // Hair ties — cube-shaped, magenta accent
  hairTies: {
    base: mikuCharacter.hairTies.base,       // #111417 - Black body
    outline: mikuCharacter.hairTies.outline, // #E05096 - Magenta border
  },

  // Outfit — grey sleeveless top, black pleated skirt, thigh-high boots
  top: {
    main: mikuCharacter.top.main,            // #37474F
    shadow: mikuCharacter.top.shadow,        // #263238
    trim: mikuCharacter.top.trim,            // #39C5BB
  },
  skirt: {
    base: mikuCharacter.skirt.base,          // #15191D — the editor canvas
    trim: mikuCharacter.skirt.trim,          // #39C5BB — teal trim
    accessory: mikuCharacter.skirt.accessory, // #A1B3B6 — wallet chain, silver
  },
  armWarmers: {
    base: mikuCharacter.armWarmers.base,     // #111417
    pattern: mikuCharacter.armWarmers.pattern, // #39C5BB
  },
  boots: {
    base: mikuCharacter.boots.base,          // #111417
    accent: mikuCharacter.boots.accent,      // #39C5BB
  },

  // Accent — her teal necktie and the negi
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
  // 12-tone chromatic scale
  red: number;        // C  (0°)
  coral: number;      // C# (30°)
  gold: number;       // D  (60°)
  lime: number;       // D# (90°)
  green: number;      // E  (120°)
  mint: number;       // F  (150°)
  mikuTeal: number;   // F# (180°) - TONIC
  cyan: number;       // G  (210°)
  blue: number;       // G# (240°)
  violet: number;     // A  (270°)
  magenta: number;    // A# (300°)
  pink: number;       // B  (330°)

  // Semantic aliases
  mikuPink: number;
  peach: number;
  amber: number;
  sky: number;
  ice: number;
  periwinkle: number;
  lavender: number;
  orchid: number;
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
