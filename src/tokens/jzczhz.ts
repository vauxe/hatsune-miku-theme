/**
 * JzCzhz Color Design Utilities
 *
 * Design colors in perceptual space (JzCzhz) for consistent:
 * - Lightness (Jz) → consistent APCA contrast
 * - Chroma (Cz) → consistent visual weight
 * - Hue (hz) → precise color identity
 *
 * Reference: Safdar, Hardeberg, Luo 2017 - "Perceptually uniform color space for image signals"
 */

// =============================================================================
// Types
// =============================================================================

export interface JzCzhz {
  Jz: number; // Lightness: 0-0.22 for sRGB (white ≈ 0.22)
  Cz: number; // Chroma: 0-0.19 for sRGB (pure blue ≈ 0.19)
  hz: number; // Hue: 0-360 degrees
}

// =============================================================================
// JzCzhz to Hex Conversion (via colorjs.io)
// =============================================================================

import Color from 'colorjs.io';

/**
 * Convert JzCzhz to sRGB hex color
 *
 * Uses colorjs.io for JzCzhz → sRGB conversion. Out-of-gamut values are
 * clamped (not perceptually mapped) because the design system deliberately
 * pushes warm hues above the sRGB gamut boundary for sufficient APCA contrast.
 *
 * @example
 * hex({ Jz: 0.18, Cz: 0.06, hz: 178 }) // Design new color
 */
export function hex(jch: JzCzhz): string {
  const color = new Color('jzczhz', [jch.Jz, jch.Cz, jch.hz]);
  const srgb = color.to('srgb') as Color & { toGamut(opts: { method: string }): Color };
  return srgb.toGamut({ method: 'clip' }).toString({ format: 'hex' }).toUpperCase();
}

/**
 * Parse a hex color string into JzCzhz coordinates
 */
export function parseHex(hexColor: string): JzCzhz {
  const color = new Color(hexColor);
  const [Jz, Cz, hz] = color.to('jzczhz').coords;
  return { Jz: Jz ?? 0, Cz: Cz ?? 0, hz: hz ?? 0 };
}

// =============================================================================
// Design Presets
// =============================================================================

/**
 * Registers — Lightness (vocal classification)
 *
 * 10 registers from contrabass to sopranino, each ΔJz = 0.015 apart.
 * Soprano sits at the tonic's gamut peak (teal 180°, Jz ≈ 0.188).
 * One Jz per register, regardless of hue temperature or chroma dynamic.
 * Warm hues produce less sRGB luminance at equal Jz — the theme accepts
 * this trade-off for uniform lightness.
 */
export const LIGHTNESS = {
  contrabass: 0.080,   // −7 steps from soprano
  bass: 0.095,         // −6
  baritone: 0.110,     // −5
  tenor: 0.125,        // −4
  countertenor: 0.140, // −3  ghost/structure
  alto: 0.155,         // −2  whisper/signal
  mezzo: 0.170,        // −1
  soprano: 0.185,      //  0  ★ tonic peak — the ensemble register
  treble: 0.200,       // +1
  sopranino: 0.215,    // +2
} as const;

/**
 * Dynamics — Chroma (how loud)
 *
 * 9 dynamics from silence to extreme, using standard Italian dynamic markings.
 * Each step is ΔCz = 0.015. The tonic (teal 180°) can play niente through mf.
 * f and above exceed the tonic; only wider-gamut hues deliver them cleanly.
 */
export const CHROMA = {
  niente: 0,           // silence — achromatic
  ppp: 0.015,          // breath — barely perceptible tint
  pp: 0.030,           // sotto voce — color visible, not assertive
  p: 0.045,            // quiet — present but restrained
  mp: 0.060,           // ★ THE MELODY — the ensemble dynamic
  mf: 0.075,           // emphasis — tonic ceiling
  f: 0.090,            // signal — tonic clips here
  ff: 0.105,           // alarm — only wide-gamut hues deliver
  fff: 0.120,          // extreme — only wide-gamut hues deliver
} as const;

/**
 * 12-TONE CHROMATIC HUE SYSTEM
 *
 * Based on musical equal temperament:
 * - 12 hues at exactly 30° intervals (like 12 semitones in an octave)
 * - F# (180°) = Miku's teal = The "tonic" of the theme
 *
 * Musical mapping:
 *   C=0° C#=30° D=60° D#=90° E=120° F=150° F#=180° G=210° G#=240° A=270° A#=300° B=330°
 *
 * This ensures perfect 30° separation between all colors,
 * creating natural visual harmony like musical intervals.
 */
export const HUE = {
  // ═══════════════════════════════════════════════════════════════════════════
  // THE 12 CHROMATIC TONES
  // ═══════════════════════════════════════════════════════════════════════════

  // F# (180°) - Teal    : Keywords, storage, variableLanguage  ★ Unison
  // G  (210°) - Cyan    : Variables                             Minor 2nd
  // G# (240°) - Azure   : Constants, numbers, booleans, enMbr  Major 2nd
  // A  (270°) - Blue    : Types, typeParameters                 Minor 3rd
  // A# (300°) - Violet  : Decorators, macros                    Major 3rd
  // B  (330°) - Magenta : Operators                             Perfect 4th
  // C  (0°)   - Rose    : Errors                                Tritone
  // C# (30°)  - Red     : Parameters, properties                Perfect 5th
  // D  (60°)  - Orange  : Functions, methods, tags              Minor 6th
  // D# (90°)  - Gold    : Classes, structs, enums               Major 6th
  // E  (120°) - Lime    : Strings, stringTemplates, regex       Minor 7th
  // F  (150°) - Green   : Interfaces, traits                    Major 7th

  // Core Miku identity (chromatic positions)
  mikuTeal: 180,      // F# - Unison — keywords, storage, variableLanguage
  mikuPink: 330,      // B  - Perfect 4th — headphone accent

  // Syntax hues (chromatic scale, ascending from tonic)
  rose: 0,            // C  - Tritone — errors, deleted
  red: 30,            // C# - Perfect 5th — parameters, properties
  orange: 60,         // D  - Minor 6th — functions, methods, tags
  gold: 90,           // D# - Major 6th — classes, structs, enums
  lime: 120,          // E  - Minor 7th — strings, stringTemplates, regex
  green: 150,         // F  - Major 7th — interfaces, traits
  // mikuTeal: 180    // F# - (defined above)
  sky: 210,           // G  - Minor 2nd — variables
  ice: 210,           // G  - Minor 2nd — (alias for markdown/UI cyan)
  azure: 240,         // G# - Major 2nd — constants, numbers, booleans, enumMembers
  blue: 270,          // A  - Minor 3rd — types, typeParameters
  violet: 300,        // A# - Major 3rd — decorators, macros
  magenta: 330,       // B  - Perfect 4th — operators

  // Semantic aliases
  peach: 30,          // = C# (Red)
  amber: 60,          // = D (Orange)
  periwinkle: 240,    // = G# (Azure)
  lavender: 270,      // = A (Blue)
  orchid: 270,        // = A (Blue)

} as const;
