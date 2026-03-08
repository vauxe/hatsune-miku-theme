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
// LIGHTNESS PRIMITIVES (10 Registers — Vocal Classification)
// =============================================================================
// 10 registers from contrabass to sopranino, ΔJz = 0.015 steps.
// Soprano sits at the tonic's gamut peak.

export const lightness = {
  contrabass: JZ_LIGHTNESS.contrabass,         // 0.080 - −7 steps
  bass: JZ_LIGHTNESS.bass,                     // 0.095 - −6
  baritone: JZ_LIGHTNESS.baritone,             // 0.110 - −5
  tenor: JZ_LIGHTNESS.tenor,                   // 0.125 - −4
  countertenor: JZ_LIGHTNESS.countertenor,     // 0.140 - −3 ghost/structure
  alto: JZ_LIGHTNESS.alto,                     // 0.155 - −2 whisper/signal
  mezzo: JZ_LIGHTNESS.mezzo,                   // 0.170 - −1
  soprano: JZ_LIGHTNESS.soprano,               // 0.185 -  0 ★ ensemble
  treble: JZ_LIGHTNESS.treble,                 // 0.200 - +1
  sopranino: JZ_LIGHTNESS.sopranino,           // 0.215 - +2
} as const;

// =============================================================================
// CHROMA PRIMITIVES (9 Dynamics — Italian Dynamic Markings)
// =============================================================================
// 9 dynamics from niente to fff, ΔCz = 0.015 steps.
// Tonic ceiling at mf.

export const chroma = {
  niente: JZ_CHROMA.niente,               // 0.000 - silence
  ppp: JZ_CHROMA.ppp,                     // 0.015 - breath
  pp: JZ_CHROMA.pp,                       // 0.030 - sotto voce
  p: JZ_CHROMA.p,                         // 0.045 - quiet
  mp: JZ_CHROMA.mp,                       // 0.060 - ★ the melody
  mf: JZ_CHROMA.mf,                       // 0.075 - emphasis (tonic ceiling)
  f: JZ_CHROMA.f,                         // 0.090 - signal
  ff: JZ_CHROMA.ff,                       // 0.105 - alarm
  fff: JZ_CHROMA.fff,                     // 0.120 - extreme
} as const;

// =============================================================================
// HUE PRIMITIVES - 12-TONE CHROMATIC SYSTEM
// =============================================================================
// Based on musical equal temperament: 12 hues at 30° nominal intervals.
// F# (180°) = Miku's teal = The "tonic" of the theme
//
// Intonation tuning: red is tuned −10° to widen the red↔orange interval
// for function↔parameter and tag↔attribute distinction. Other hues stay
// at nominal positions — the cool triplet (teal→cyan→azure→blue = 90°)
// is geometrically overconstrained and cannot be tuned without compression.
//
// Nominal:  C=0°  C#=30°  D=60°  D#=90°  E=120°  F=150°
//           F#=180° (MIKU)  G=210°  G#=240°  A=270°  A#=300°  B=330°

export const hue = {
  // ═══════════════════════════════════════════════════════════════════════════
  // THE 12 CHROMATIC TONES
  // ═══════════════════════════════════════════════════════════════════════════

  // F# - Teal (180°) - Unison — she sings
  mikuTeal: 180,       // Keywords, comments, info

  // G  - Cyan (210°) - Minor 2nd — almost her, shifting
  cyan: 210,           // Variables

  // G# - Azure (240°) - Major 2nd — the open ground
  azure: 240,          // Constants, numbers, booleans, enumMembers

  // A  - Blue (270°) - Minor 3rd — the shape beneath
  blue: 270,           // Types, typeParameters

  // A# - Violet (300°) - Major 3rd — transformation
  violet: 300,         // Decorators, macros

  // B  - Magenta (330°) - Perfect 4th — the heartbeat
  magenta: 330,        // Operators

  // C  - Rose (0°) - Tritone — she stumbles
  rose: 0,             // Errors, deleted

  // C# - Red (20°) - Perfect 5th — what you give her
  // Tuned −10° from 30°: widens red↔orange to 40° for function↔parameter distinction
  red: 20,             // Parameters, properties

  // D  - Orange (60°) - Minor 6th — she reaches
  orange: 60,          // Functions, methods, tags

  // D# - Gold (90°) - Major 6th — written with love
  gold: 90,            // Classes, structs, enums

  // E  - Lime (120°) - Minor 7th — someone's truth
  lime: 120,           // Strings, stringTemplates, regex

  // F  - Green (150°) - Major 7th — one breath from home
  green: 150,          // Interfaces, traits

  // ═══════════════════════════════════════════════════════════════════════════
  // SEMANTIC ALIASES
  // ═══════════════════════════════════════════════════════════════════════════

  // Core brand
  mikuPink: 330,       // = B (Magenta) - Perfect 4th — headphone accent

  // Syntax aliases (map to nearest chromatic tone)
  peach: 20,           // = C# (Red, tuned)
  amber: 60,           // = D (Orange)
  sky: 210,            // = G (Cyan)
  ice: 210,            // = G (Cyan) - for enums
  periwinkle: 240,     // = G# (Azure)
  lavender: 270,       // = A (Blue)
  orchid: 270,         // = A (Blue)

  // Git status (using chromatic tones)
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
    base: mikuCharacter.hair.base,
    shadow: mikuCharacter.hair.shadow,
    highlight: mikuCharacter.hair.highlight,
    bright: mikuCharacter.hair.bright,
    tip: mikuCharacter.hair.tip,
  },

  // Eyes - matching teal
  eyes: {
    iris: mikuCharacter.eyes.iris,
    highlight: mikuCharacter.eyes.highlight,
    pupil: mikuCharacter.eyes.pupil,
  },

  // Headphones — the interface between her and the music
  headphones: {
    frame: mikuCharacter.headphones.frame,
    cushion: mikuCharacter.headphones.cushion,
    display: mikuCharacter.headphones.display,
  },

  // Hair ties — cube-shaped, magenta accent
  hairTies: {
    base: mikuCharacter.hairTies.base,
    outline: mikuCharacter.hairTies.outline,
  },

  // Outfit — medium grey vest over white blouse, dark pleated skirt, thigh-high boots
  top: {
    main: mikuCharacter.top.main,
    shadow: mikuCharacter.top.shadow,
    trim: mikuCharacter.top.trim,
    blouse: mikuCharacter.top.blouse,     // Off-white shirt — bright text on colored surfaces
  },
  skirt: {
    base: mikuCharacter.skirt.base,
    trim: mikuCharacter.skirt.trim,
    accessory: mikuCharacter.skirt.accessory,
  },
  armWarmers: {
    base: mikuCharacter.armWarmers.base,
    pattern: mikuCharacter.armWarmers.pattern,
  },
  boots: {
    base: mikuCharacter.boots.base,
    accent: mikuCharacter.boots.accent,
  },

  // Accent — her teal necktie and the negi
  tie: {
    base: mikuCharacter.tie.base,
    shadow: mikuCharacter.tie.shadow,
  },
  negi: {
    stalk: mikuCharacter.negi.stalk,
    bright: mikuCharacter.negi.bright,
    white: mikuCharacter.negi.white,
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
  foreground: '#DEE8F2', // Primary text — vest silver, Lc ~90 (anti-bloom)
  nearWhite: '#EAF6E8',  // Negi white — softest green light (matches char.negi.white)
  transparent: '#00000000',
} as const;

// =============================================================================
// TYPE EXPORTS
// =============================================================================

// Use flexible types for variant support (not literal types from `as const`)
export interface LightnessValues {
  contrabass: number;
  bass: number;
  baritone: number;
  tenor: number;
  countertenor: number;
  alto: number;
  mezzo: number;
  soprano: number;
  treble: number;
  sopranino: number;
}

export interface ChromaValues {
  niente: number;
  ppp: number;
  pp: number;
  p: number;
  mp: number;
  mf: number;
  f: number;
  ff: number;
  fff: number;
}

export interface HueValues {
  // 12-tone chromatic scale (JzCzhz hue angles)
  rose: number;       // C  (0°)
  red: number;        // C# (30°)
  orange: number;     // D  (60°)
  gold: number;       // D# (90°)
  lime: number;       // E  (120°)
  green: number;      // F  (150°)
  mikuTeal: number;   // F# (180°) - TONIC
  cyan: number;       // G  (210°)
  azure: number;      // G# (240°)
  blue: number;       // A  (270°)
  violet: number;     // A# (300°)
  magenta: number;    // B  (330°)

  // Semantic aliases
  mikuPink: number;
  peach: number;
  amber: number;
  sky: number;
  ice: number;
  periwinkle: number;
  lavender: number;
  orchid: number;
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
  top: { main: string; shadow: string; trim: string; blouse: string };
  skirt: { base: string; trim: string; accessory: string };
  armWarmers: { base: string; pattern: string };
  boots: { base: string; accent: string };
  tie: { base: string; shadow: string };
  negi: { stalk: string; bright: string; white: string };
}

export interface SpecialColors {
  void: string;
  foreground: string;
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
  polarity: 'dark' | 'light';
  lightness: LightnessValues;
  chroma: ChromaValues;
  hue: HueValues;
  character: CharacterColors;
  special: SpecialColors;
  opacity: OpacityScale;
}

export const primitives: Primitives = {
  polarity: 'dark',
  lightness,
  chroma,
  hue,
  character,
  special,
  opacity,
};
