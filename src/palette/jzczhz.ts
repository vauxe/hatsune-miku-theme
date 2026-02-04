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
// Constants
// =============================================================================

const JZ_B = 1.15;
const JZ_G = 0.66;
const JZ_C1 = 3424 / 4096;
const JZ_C2 = 2413 / 128;
const JZ_C3 = 2392 / 128;
const JZ_N = 2610 / 16384;
const JZ_P = 1.7 * 2523 / 32;
const JZ_D = -0.56;
const JZ_D0 = 1.6295499532821566e-11;
const SDR_WHITE = 203;

// =============================================================================
// PQ Transfer Functions
// =============================================================================

function pqEOTF(x: number): number {
  if (x <= 0) return 0;
  const xP = Math.pow(x, 1 / JZ_P);
  const num = Math.max(0, xP - JZ_C1);
  const den = JZ_C2 - JZ_C3 * xP;
  return 10000 * Math.pow(num / den, 1 / JZ_N);
}

// =============================================================================
// JzCzhz to Hex Conversion
// =============================================================================

/**
 * Convert JzCzhz to sRGB hex color
 *
 * @example
 * jch('#70F0D0') // Analyze existing color
 * hex({ Jz: 0.18, Cz: 0.06, hz: 178 }) // Design new color
 */
export function hex(jch: JzCzhz): string {
  const { Jz, Cz, hz } = jch;

  // JzCzhz to Jzazbz (polar to rectangular)
  const hRad = hz * Math.PI / 180;
  const az = Cz * Math.cos(hRad);
  const bz = Cz * Math.sin(hRad);

  // Jz to Iz
  const Iz = (Jz + JZ_D0) / (1 + JZ_D - JZ_D * (Jz + JZ_D0));

  // Izazbz to LMS'
  const Lp = Iz + 0.1386050432715393 * az + 0.05804731615611886 * bz;
  const Mp = Iz - 0.1386050432715393 * az - 0.05804731615611886 * bz;
  const Sp = Iz - 0.09601924202631895 * az - 0.8118918960560388 * bz;

  // LMS' to LMS (inverse PQ)
  const L = pqEOTF(Lp);
  const M = pqEOTF(Mp);
  const S = pqEOTF(Sp);

  // LMS to X'Y'Z'
  const Xp = 1.9242264357876067 * L - 1.0047923125953657 * M + 0.037651404030618 * S;
  const Yp = 0.35031676209499907 * L + 0.7264811939316552 * M - 0.06538442294808501 * S;
  const Z = -0.09098281098284752 * L - 0.3127282905230739 * M + 1.5227665613052603 * S;

  // X'Y'Z' to XYZ
  const X = (Xp + (JZ_B - 1) * Z) / JZ_B;
  const Y = (Yp + (JZ_G - 1) * X) / JZ_G;

  // XYZ to linear RGB
  const x = X / SDR_WHITE;
  const y = Y / SDR_WHITE;
  const z = Z / SDR_WHITE;

  let r = 3.2404541621141054 * x - 1.5371385940306089 * y - 0.49853140955601579 * z;
  let g = -0.96926603050518312 * x + 1.8760108454466942 * y + 0.041556017530349834 * z;
  let b = 0.055643430959114726 * x - 0.20397695888897652 * y + 1.0572251882231791 * z;

  // Linear RGB to sRGB (gamma encode + clamp)
  const gamma = (c: number) => {
    c = Math.max(0, Math.min(1, c));
    return c > 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c;
  };

  r = gamma(r);
  g = gamma(g);
  b = gamma(b);

  // RGB to hex
  const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
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
  // Chroma-aware primary tiers (all target Lc 75-85)
  // Warm hues (red, coral, pink: 330°-70°) need +0.01 Jz vs cool hues
  vivid: 0.175,       // For vivid chroma (C3) cool hues - prevents halation
  vibrant: 0.185,     // For vibrant chroma (C2) cool hues - balanced
  vibrantWarm: 0.207, // For vibrant chroma (C2) warm hues (red/pink)
  primary: 0.190,     // For comfortable chroma (C1) cool hues
  primaryWarm: 0.200, // For comfortable chroma (C1) warm hues (coral/peach/pink)
  muted: 0.195,       // For muted chroma (CM) - comments need extra light

  // Standard tiers
  secondary: 0.185,   // Secondary elements (Lc ~75+)
  tertiary: 0.12,     // Tertiary/dim elements (Lc ~55) - ghost text
  accent: 0.185,      // Accent elements (Lc ~78+) - brackets, highlights
} as const;

/**
 * Standard chroma tiers for visual comfort
 * Percentage scale: raw Cz * 525 ≈ percentage
 */
export const CHROMA = {
  comfortable: 0.055, // ~29% - easy on eyes for hours
  vibrant: 0.070,     // ~37% - colorful but sustainable
  vivid: 0.085,       // ~45% - attention-grabbing
  muted: 0.040,       // ~21% - subtle, for comments
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

  // C  (0°)   - Red     : Errors, critical (tritone = max tension from Miku)
  // C# (30°)  - Coral   : Tags, parameters (warm accent)
  // D  (60°)  - Gold    : Functions (relative minor - energetic)
  // D# (90°)  - Lime    : Regexp, escapes (chromatic passing)
  // E  (120°) - Green   : Strings, success (submediant)
  // F  (150°) - Mint    : Methods, storage (leading tone)
  // F# (180°) - Teal    : ★ MIKU TONIC ★ Keywords, info
  // G  (210°) - Cyan    : Variables (dominant - neutral)
  // G# (240°) - Blue    : Numbers (flat 6)
  // A  (270°) - Violet  : Types, classes (relative major)
  // A# (300°) - Magenta : Interfaces, decorators (mediant)
  // B  (330°) - Pink    : Operators (subdominant - accent)

  // Core Miku identity (chromatic positions)
  mikuTeal: 180,      // F# - THE TONIC - signature teal
  mikuPink: 330,      // B  - Subdominant - headphone accent

  // Syntax hues (chromatic scale)
  red: 0,             // C  - Terminal red, errors
  coral: 30,          // C# - Tags, warm accent
  gold: 60,           // D  - Functions
  lime: 90,           // D# - Regexp, escapes
  green: 120,         // E  - Strings (alias)
  mint: 150,          // F  - Methods, storage
  // mikuTeal: 180    // F# - (defined above)
  sky: 210,           // G  - Variables
  ice: 210,           // G  - Enums (same as sky)
  periwinkle: 240,    // G# - Macros
  lavender: 270,      // A  - Comments (muted violet)
  orchid: 270,        // A  - Types (same as violet)
  magenta: 300,       // A# - Terminal magenta
  rose: 330,          // B  - Interfaces (same as pink)

  // Semantic aliases
  peach: 30,          // = C# (Coral)
  amber: 60,          // = D (Gold)

  // Git status
  gitRed: 0,          // C  - Deleted (pure red)
  gitViolet: 270,     // A  - Conflict (violet)
} as const;
