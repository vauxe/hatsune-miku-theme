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
 * Standard lightness tiers for theme design
 * Based on APCA contrast requirements on dark background (Jz ≈ 0.02)
 *
 * Note: APCA perceived lightness varies with BOTH chroma AND hue:
 * - High chroma (C2, C3) + cool hues → higher APCA contrast (risk halation)
 * - High chroma (C2, C3) + warm hues → lower APCA contrast (need more Jz)
 * - Low chroma (CM) always needs higher Jz for sufficient contrast
 */
export const LIGHTNESS = {
  // Chroma-aware primary tiers (all target Lc 82+ for overlay survival)
  // Warm hues (red, coral, pink: 330°-70°) need +0.015 Jz vs cool hues
  vivid: 0.180,       // For vivid chroma (C3) cool hues - prevents halation
  vibrant: 0.188,     // For vibrant chroma (C2) cool hues - balanced
  vibrantWarm: 0.218, // For vibrant chroma (C2) warm hues (red/pink) — +0.003 for overlay survival
  primary: 0.192,     // For comfortable chroma (C1) cool hues
  primaryWarm: 0.213, // For comfortable chroma (C1) warm hues — +0.003 for overlay survival
  muted: 0.195,       // For muted chroma (CM) - comments need extra light

  // Standard tiers
  secondary: 0.185,   // Secondary elements (Lc ~75+)
  tertiary: 0.12,     // Tertiary/dim elements (Lc ~55) - ghost text
  accent: 0.190,      // Accent elements (Lc ~80+) - brackets, highlights
} as const;

/**
 * Standard chroma tiers for visual comfort
 * Percentage scale: raw Cz * 525 ≈ percentage
 */
export const CHROMA = {
  comfortable: 0.060, // ~31% - mp dynamic, easy on eyes for hours
  vibrant: 0.075,     // ~39% - mf dynamic, colorful but sustainable
  vivid: 0.090,       // ~47% - f dynamic, attention-grabbing
  muted: 0.045,       // ~24% - p dynamic, subtle, for comments
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

  // F# (180°) - Teal    : Keywords, comments, info         ★ Unison
  // G  (210°) - Cyan    : Variables, enums                   Minor 2nd
  // G# (240°) - Azure   : Numbers, constants                 Major 2nd
  // A  (270°) - Blue    : Types, booleans                    Minor 3rd
  // A# (300°) - Violet  : Interfaces, decorators, macros     Major 3rd
  // B  (330°) - Magenta : Operators, storage modifiers       Perfect 4th
  // C  (0°)   - Rose    : Errors, deleted                    Tritone
  // C# (30°)  - Red     : Parameters, properties, tags       Perfect 5th
  // D  (60°)  - Orange  : Functions, attributes, warnings    Minor 6th
  // D# (90°)  - Gold    : Classes, structs, regex            Major 6th
  // E  (120°) - Lime    : Strings, success                   Minor 7th
  // F  (150°) - Green   : Methods, storage                   Major 7th

  // Core Miku identity (chromatic positions)
  mikuTeal: 180,      // F# - Unison — keywords, comments, info
  mikuPink: 330,      // B  - Perfect 4th — headphone accent

  // Syntax hues (chromatic scale, ascending from tonic)
  rose: 0,            // C  - Tritone — errors, deleted
  red: 30,            // C# - Perfect 5th — parameters, properties, tags
  orange: 60,         // D  - Minor 6th — functions, attributes, warnings
  gold: 90,           // D# - Major 6th — classes, structs, regex
  lime: 120,          // E  - Minor 7th — strings, success
  green: 150,         // F  - Major 7th — methods, storage
  // mikuTeal: 180    // F# - (defined above)
  sky: 210,           // G  - Minor 2nd — variables
  ice: 210,           // G  - Minor 2nd — enums (same as sky)
  azure: 240,         // G# - Major 2nd — numbers, constants
  blue: 270,          // A  - Minor 3rd — types, booleans
  violet: 300,        // A# - Major 3rd — interfaces, decorators, macros
  magenta: 330,       // B  - Perfect 4th — operators, storage modifiers

  // Semantic aliases
  peach: 30,          // = C# (Red)
  amber: 60,          // = D (Orange)
  periwinkle: 240,    // = G# (Azure)
  lavender: 270,      // = A (Blue)
  orchid: 270,        // = A (Blue)

  // Git status
  gitRose: 0,         // C  - Tritone — deleted
  gitBlue: 270,       // A  - Minor 3rd — conflict
} as const;
