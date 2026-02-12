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
  vibrantWarm: 0.215, // For vibrant chroma (C2) warm hues (red/pink)
  primary: 0.192,     // For comfortable chroma (C1) cool hues
  primaryWarm: 0.210, // For comfortable chroma (C1) warm hues (coral/peach/pink)
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

  // C  (0°)   - Rose    : Errors, critical (tritone = max tension from Miku)
  // C# (30°)  - Red     : Tags, parameters (warm accent)
  // D  (60°)  - Orange  : Functions (relative minor - energetic)
  // D# (90°)  - Gold    : Regexp, escapes (chromatic passing)
  // E  (120°) - Lime    : Strings, success (submediant)
  // F  (150°) - Green   : Methods, storage (leading tone)
  // F# (180°) - Teal    : ★ MIKU TONIC ★ Keywords, info
  // G  (210°) - Cyan    : Variables (dominant - neutral)
  // G# (240°) - Azure   : Numbers (flat 6)
  // A  (270°) - Blue    : Types, classes (relative major)
  // A# (300°) - Violet  : Interfaces, decorators (mediant)
  // B  (330°) - Magenta : Operators (subdominant - accent)

  // Core Miku identity (chromatic positions)
  mikuTeal: 180,      // F# - THE TONIC - signature teal
  mikuPink: 330,      // B  - Subdominant - headphone accent

  // Syntax hues (chromatic scale)
  rose: 0,            // C  - Errors, tritone
  red: 30,            // C# - Tags, warm accent
  orange: 60,         // D  - Functions
  gold: 90,           // D# - Regexp, escapes
  lime: 120,          // E  - Strings
  green: 150,         // F  - Methods, storage
  // mikuTeal: 180    // F# - (defined above)
  sky: 210,           // G  - Variables
  ice: 210,           // G  - Enums (same as sky)
  azure: 240,         // G# - Numbers
  blue: 270,          // A  - Types
  violet: 300,        // A# - Interfaces, decorators
  magenta: 330,       // B  - Operators

  // Semantic aliases
  peach: 30,          // = C# (Red)
  amber: 60,          // = D (Orange)
  periwinkle: 240,    // = G# (Azure)
  lavender: 270,      // = A (Blue)
  orchid: 270,        // = A (Blue)

  // Git status
  gitRose: 0,         // C  - Deleted (tritone)
  gitBlue: 270,       // A  - Conflict (blue)
} as const;
