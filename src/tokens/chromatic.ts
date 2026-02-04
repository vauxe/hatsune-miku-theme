/**
 * 12-Tone Chromatic Color System
 *
 * Based on musical equal temperament:
 * - 12 hues at exactly 30° intervals (like 12 semitones in an octave)
 * - F# (180°) = Miku's teal = The "tonic" of the theme
 * - Color relationships mirror musical intervals
 *
 * Musical theory applied to color:
 * - Unison (0°): Same semantic group
 * - Minor 2nd (30°): Minimum distinction threshold
 * - Major 3rd (120°): Triadic harmony
 * - Perfect 5th (210°): Dominant relationship
 * - Tritone (180°): Maximum contrast/tension
 */

// =============================================================================
// 12-TONE HUE SCALE
// =============================================================================

/**
 * The chromatic scale of hues, starting from red (0°)
 * Each "semitone" is exactly 30° apart
 *
 * Named after musical notes for semantic clarity
 */
export const TONE = {
  // Natural notes
  C: 0,      // Red       - Error, critical
  D: 60,     // Gold      - Functions
  E: 120,    // Green     - Success, strings
  F: 150,    // Mint      - Methods
  G: 210,    // Cyan      - Variables
  A: 270,    // Violet    - Types
  B: 330,    // Pink      - Operators

  // Sharps/Flats (enharmonic)
  Cs: 30,    // Coral     - Tags, warm accents    (C#/Db)
  Ds: 90,    // Lime      - Literals              (D#/Eb)
  Fs: 180,   // Teal      - MIKU TONIC (keywords) (F#/Gb)
  Gs: 240,   // Blue      - Numbers, constants    (G#/Ab)
  As: 300,   // Magenta   - Interfaces            (A#/Bb)
} as const;

/**
 * Alias for readability - using solfege names
 */
export const SOLFEGE = {
  do: TONE.C,      // Red
  di: TONE.Cs,     // Coral
  re: TONE.D,      // Gold
  ri: TONE.Ds,     // Lime
  mi: TONE.E,      // Green
  fa: TONE.F,      // Mint
  fi: TONE.Fs,     // Teal (MIKU)
  sol: TONE.G,     // Cyan
  si: TONE.Gs,     // Blue
  la: TONE.A,      // Violet
  li: TONE.As,     // Magenta
  ti: TONE.B,      // Pink
} as const;

// =============================================================================
// MUSICAL INTERVALS AS COLOR RELATIONSHIPS
// =============================================================================

/**
 * Interval definitions in semitones (and degrees)
 * Use these to create harmonious color relationships
 */
export const INTERVAL = {
  unison: 0,           // 0°   - Same color
  minor2nd: 1,         // 30°  - Minimum distinction
  major2nd: 2,         // 60°  - Clear difference
  minor3rd: 3,         // 90°  - Gentle contrast
  major3rd: 4,         // 120° - Triadic harmony
  perfect4th: 5,       // 150° - Strong contrast
  tritone: 6,          // 180° - Maximum tension (complementary)
  perfect5th: 7,       // 210° - Dominant (natural harmony)
  minor6th: 8,         // 240° - Rich contrast
  major6th: 9,         // 270° - Warm contrast
  minor7th: 10,        // 300° - Leading tension
  major7th: 11,        // 330° - Almost complementary
  octave: 12,          // 360° - Same hue (wrap)
} as const;

/**
 * Get the hue at a given interval from a base tone
 */
export function interval(baseTone: number, semitones: number): number {
  return (baseTone + semitones * 30) % 360;
}

/**
 * Get the complementary hue (tritone)
 */
export function complement(tone: number): number {
  return interval(tone, INTERVAL.tritone);
}

/**
 * Get the dominant hue (perfect 5th)
 */
export function dominant(tone: number): number {
  return interval(tone, INTERVAL.perfect5th);
}

/**
 * Get a major triad (root, major 3rd, perfect 5th)
 */
export function majorTriad(root: number): [number, number, number] {
  return [
    root,
    interval(root, INTERVAL.major3rd),
    interval(root, INTERVAL.perfect5th),
  ];
}

/**
 * Get a minor triad (root, minor 3rd, perfect 5th)
 */
export function minorTriad(root: number): [number, number, number] {
  return [
    root,
    interval(root, INTERVAL.minor3rd),
    interval(root, INTERVAL.perfect5th),
  ];
}

// =============================================================================
// MIKU-CENTRIC SCALE
// =============================================================================

/**
 * The 12 tones recentered on Miku's teal (F# = 180°)
 * This makes Miku the "tonic" and all other colors relative to her
 */
export const MIKU_SCALE = {
  // Tonic - The star of the show
  tonic: TONE.Fs,        // 180° Teal - Keywords, the heart of code

  // Perfect intervals (most harmonious with Miku)
  dominant: TONE.Cs,     // 30°  Coral - Perfect 5th below (warm complement)
  subdominant: TONE.B,   // 330° Pink - Perfect 4th above (operators)

  // Relative major/minor
  relativeMajor: TONE.A, // 270° Violet - Types (stately, structural)
  relativeMinor: TONE.D, // 60°  Gold - Functions (active, energetic)

  // Mediant relationships
  mediant: TONE.As,      // 300° Magenta - Interfaces (decorative)
  submediant: TONE.E,    // 120° Green - Strings (natural, literal)

  // Leading tones (create tension/resolution)
  leadingTone: TONE.F,   // 150° Mint - Methods (leads to keyword)
  supertonic: TONE.G,    // 210° Cyan - Variables (common, neutral)

  // Chromatic color (tension)
  tritone: TONE.C,       // 0°   Red - Errors (maximum tension from teal)

  // Remaining tones
  flat2: TONE.Ds,        // 90°  Lime - Literals, escaped strings
  flat6: TONE.Gs,        // 240° Blue - Numbers, constants
} as const;

// =============================================================================
// SEMANTIC MAPPING
// =============================================================================

/**
 * Map 12 tones to VS Code semantic roles
 * Each role gets a specific "note" in our chromatic scale
 */
export const SEMANTIC_TONES = {
  // KEYWORDS - The tonic (Miku herself)
  keyword: TONE.Fs,          // 180° Teal - Primary keywords
  keywordControl: TONE.Fs,   // 180° Teal - Flow control (same as keyword)
  storage: TONE.F,           // 150° Mint - Storage keywords (leading tone)

  // CALLABLES - Energetic warm tones
  function: TONE.D,          // 60°  Gold - Functions (relative minor - action)
  method: TONE.F,            // 150° Mint - Methods (leading to keyword)
  decorator: TONE.As,        // 300° Magenta - Decorators (mediant)

  // TYPES - Stately cool tones
  type: TONE.A,              // 270° Violet - Types (relative major)
  class: TONE.A,             // 270° Violet - Classes
  interface: TONE.As,        // 300° Magenta - Interfaces
  enum: TONE.G,              // 210° Cyan - Enums (dominant)
  typeParameter: TONE.Gs,    // 240° Blue - Generic params

  // IDENTIFIERS - Neutral tones
  variable: TONE.G,          // 210° Cyan - Variables (supertonic)
  parameter: TONE.Cs,        // 30°  Coral - Parameters (warm, input)
  property: TONE.Cs,         // 30°  Coral - Properties

  // LITERALS - Natural tones
  string: TONE.E,            // 120° Green - Strings (submediant)
  number: TONE.Gs,           // 240° Blue - Numbers
  boolean: TONE.A,           // 270° Violet - Booleans (with types)
  constant: TONE.D,          // 60°  Gold - Constants
  regexp: TONE.Ds,           // 90°  Lime - Regex (chromatic)

  // MARKUP - Warm accents
  tag: TONE.Cs,              // 30°  Coral - HTML tags
  attribute: TONE.D,         // 60°  Gold - Attributes

  // META - Muted versions of tonic
  comment: TONE.Fs,          // 180° Teal - Comments (muted tonic)
  punctuation: TONE.Fs,      // 180° Teal - Punctuation (very muted)

  // OPERATORS - Pink accent
  operator: TONE.B,          // 330° Pink - Operators (subdominant)

  // STATUS - Clear signals
  error: TONE.C,             // 0°   Red - Errors (tritone = max tension)
  warning: TONE.D,           // 60°  Gold - Warnings
  success: TONE.E,           // 120° Green - Success
  info: TONE.Fs,             // 180° Teal - Info (tonic)
} as const;

// =============================================================================
// LIGHTNESS TIERS
// =============================================================================

/**
 * Lightness values for different semantic tiers
 * Using OKLCH L values (0-1 scale)
 */
export const LIGHTNESS = {
  // Syntax highlighting
  primary: 0.75,      // Main syntax tokens
  vibrant: 0.78,      // Emphasis (functions, classes)
  muted: 0.68,        // De-emphasized (comments, punctuation)

  // UI elements
  foreground: 0.85,   // Primary text
  secondary: 0.70,    // Secondary text
  tertiary: 0.50,     // Disabled, placeholders

  // Backgrounds (dark theme)
  background: 0.15,   // Editor background
  elevated: 0.18,     // Panels, sidebars
  overlay: 0.20,      // Dropdowns, tooltips
} as const;

/**
 * Chroma values for different intensity levels
 * Using OKLCH C values (0-0.4 scale)
 */
export const CHROMA = {
  vivid: 0.15,        // Maximum saturation (errors, accents)
  vibrant: 0.12,      // High saturation (functions, strings)
  comfortable: 0.09,  // Normal syntax (keywords, types)
  muted: 0.05,        // Low saturation (comments)
  gray: 0.02,         // Near-gray (disabled)
} as const;

// =============================================================================
// EXPORTS
// =============================================================================

export type Tone = typeof TONE[keyof typeof TONE];
export type Interval = typeof INTERVAL[keyof typeof INTERVAL];
export type SemanticTone = keyof typeof SEMANTIC_TONES;
