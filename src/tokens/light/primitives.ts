/**
 * Light Theme Primitives — Snow Miku 2026: Shiawase Patisserie
 *
 * "The pastry shop on the corner of winter, warm inside."
 *
 * Color-extracted from the Snow Miku 2026 design — costume by cold_air,
 * visual by booota. The Shiawase Patisserie concept: a warm cream
 * bakery interior (the dress) framed by cool blue shopfront walls.
 * She steps out in cream dress and cyan cape, twin tails of tonic
 * cyan, chocolate beret and boots, coral-pink necktie at her collar.
 *
 * Three color registers define the theme:
 *   1. Warm cream — the canvas (the dress, the pastry case, golden light)
 *   2. Tonic cyan — the voice (syntax, accents, her hair)
 *   3. Chocolate ink — the foreground (dark warmth, handwritten menus)
 *
 * The fundamental spatial split: WARM canvas for content (editor),
 * COOL chrome for structure (sidebar, tabs). You read in the bakery;
 * the shopfront frames your view. Coral-pink identity (her necktie)
 * marks cursor and focus — where she points, you type.
 */

import { character as mikuCharacter } from '../../palette/core';
import { hex } from '../role';
import {
  opacity,
  type Primitives,
  type LightnessValues,
  type HueValues,
  type ChromaValues,
  type CharacterColors,
  type SpecialColors,
} from '../primitives';

// =============================================================================
// LIGHTNESS DERIVATION
// =============================================================================

/**
 * Light theme lightness values — Snow Miku 2026
 *
 * Inverted scale: lower Jz = darker text = more prominent on cream.
 * The syntax ensemble is two-tier (see syntax.ts): sopranino carries
 * the 120°–240° arc, soprano the remaining hues. The other registers
 * serve departures, UI text, and icons. hex() clips each voice to the
 * sRGB boundary, so peak usable chroma per hue falls out automatically.
 */
export const lightLightness: LightnessValues = {
  sopranino: 0.079,    // +4  ensemble, cool arc (120°–240°) — compound-safe
  treble: 0.093,       // +3  reserve tier — no ensemble tokens
  soprano: 0.100,      // +2  ensemble, warm arc + 270°/300°/330°
  mezzo: 0.107,        // +1  punctuation, commentDoc
  alto: 0.130,         //  0  comments — departure register
  countertenor: 0.148, // -1  soft syntax, ghost
  tenor: 0.165,        // -2
  baritone: 0.180,     // -3
  bass: 0.192,         // -4
  contrabass: 0.200,   // -5  barely visible on cream
};

// =============================================================================
// HUE GRID — Derived from Snow Miku 2026
// =============================================================================

/**
 * Light hue layout — tonic at G=210° (tonic cyan).
 *
 * Standard 30° intervals from the tonic. No tunings — the warm/cool
 * spatial split provides all the distinction the theme needs.
 *
 *   210° Tonic cyan  — her hair, the first color on every line
 *   240° Azure       — cool shopfront trim, flowing beside the tonic
 *   270° Blue        — the deep display case glass
 *   300° Violet      — twilight through the shop window
 *   330° Magenta     — raspberry macaron accent
 *     0° Rose        — strawberry glaze, connecting rhythm
 *    30° Red         — warm jam, the alarm on cream
 *    60° Orange      — baked peach, her skin warmth
 *    90° Gold        — butter croissant, the golden star
 *   120° Lime        — pistachio cream, organized garnish
 *   150° Green       — mint leaf, one breath from home
 *   180° (unnamed)   — canonical Miku teal, used for interface
 *
 * Field names are chromatic positions (C through B), not perceived
 * colors. Descriptions in syntax.ts name the actual perceived hue.
 */
export const lightHue: HueValues = {
  tritone: 0,            // C  Tritone         (perceived: strawberry rose)
  perfect5th: 30,        // C# Perfect 5th     (perceived: warm jam)
  minor6th: 60,          // D  Minor 6th       (perceived: baked peach)
  major6th: 90,          // D# Major 6th       (perceived: butter croissant)
  minor7th: 120,         // E  Minor 7th       (perceived: pistachio cream)
  major7th: 150,         // F  Major 7th       (perceived: mint leaf)
  mikuTeal: 210,         // G  Unison          (perceived: tonic cyan — her hair)
  minor2nd: 240,         // G# Minor 2nd       (perceived: azure shopfront)
  major2nd: 270,         // A  Major 2nd       (perceived: deep blue glass)
  minor3rd: 300,         // A# Minor 3rd       (perceived: violet twilight)
  major3rd: 330,         // B  Major 3rd       (perceived: raspberry macaron)
  perfect4th: 0,         // C  Perfect 4th     (perceived: strawberry rose — wraps to 0)

  // Semantic aliases
  mikuPink: 27,          // Pastel pink — necktie accent (sampled from visual)
  peach: 60,             // = D (Minor 6th position) — baked warmth
  amber: 60,             // = D (Minor 6th position) — golden crust
  sky: 235,              // Cool shopfront blue (between G# and A)
  ice: 235,              // Cool shopfront blue
  periwinkle: 235,       // Cool shopfront blue
  lavender: 300,         // = A# (Minor 3rd position) — twilight
  orchid: 300,           // = A# (Minor 3rd position) — twilight
};

// =============================================================================
// CHROMA SCALE — Patisserie Dynamics
// =============================================================================

/**
 * Light chroma scale — gamut-max ensemble.
 *
 * mp at 0.120 exceeds sRGB gamut max for most hues at soprano Jz.
 * The hex() function clips to the gamut boundary, automatically
 * delivering the most vivid color each hue can produce. Lower
 * dynamics (ppp, pp) remain gentle for comments and punctuation.
 */
export const lightChroma: ChromaValues = {
  niente: 0,             // silence — achromatic
  ppp: 0.015,            // breath — barely tinted
  pp: 0.030,             // sotto voce — visible tint
  p: 0.060,              // quiet — present but restrained
  mp: 0.120,             // melody — gamut-max ensemble
  mf: 0.135,             // emphasis — above gamut for most hues
  f: 0.150,              // signal — clips to absolute max
  ff: 0.165,             // alarm — wide-gamut hues only
  fff: 0.180,            // extreme — only blue (270°) delivers
};

// =============================================================================
// CHARACTER PALETTE — Snow Miku 2026: Shiawase Patisserie
// =============================================================================

/**
 * Snow Miku 2026 character colors — extracted from the design.
 *
 * Hair: Tonic cyan twin tails, the same beloved 210° family.
 *
 * Outfit: Cream dress with cyan-blue cape, chocolate suspender straps.
 *   The dress is the editor canvas — warm, inviting, readable.
 *   The shopfront walls are the structural chrome — cool, framing.
 *
 * Identity: Coral-pink necktie — the cursor and focus ring.
 *   Where she wears the necktie, you type.
 *
 * Background hierarchy (warm/cool split, step 0.008 Jz):
 *   - Void:    Warm ivory  (Jz 0.218, Cz 0.008, Hz 85°) — the morning light
 *   - Editor:  Warm cream  (Jz 0.210, Cz 0.012, Hz 85°) — the dress
 *   - Sidebar: Cool blue   (Jz 0.202, Cz 0.016, Hz 235°) — the shopfront
 *   - Float:   Deeper cool (Jz 0.194, Cz 0.020, Hz 235°) — the awning
 *   - Terminal: Warm cream — matches editor for reading comfort
 *   - Foreground: Chocolate ink (Jz 0.038, Cz 0.018, Hz 40°) — handwritten menus
 */
export const lightCharacter: CharacterColors = {
  // Tonic cyan hair — her identity across every Snow Miku design
  hair: {
    base: hex({ Jz: 0.128, Cz: 0.045, hz: 210 }),  // Tonic engagement wash
    shadow: hex({ Jz: 0.088, Cz: 0.070, hz: 215 }), // Accent dark — links, buttons
    highlight: '#78C6F0',  // Pale sky shimmer — decorative catch-light
    tip: '#8070B8',        // Lavender gradient
    bright: '#9CD4F4',     // Icy highlight
  },
  // Eyes — warm-toned for the patisserie design
  eyes: { iris: '#4E56B4', highlight: '#7CAAE4', pupil: '#1A1410' },
  // Necktie mapped to cushion slot — coral-pink identity voice
  headphones: {
    frame: '#CAD4EA',       // Silver-white headband
    cushion: hex({ Jz: 0.155, Cz: 0.055, hz: lightHue.mikuPink }),  // Pastel pink — necktie hz 27 (sampled #FDC2C4)
    display: hex({ Jz: 0.118, Cz: 0.045, hz: 210 }), // Tonic cyan ornament
  },
  hairTies: {
    base: mikuCharacter.hairTies.base,
    outline: hex({ Jz: 0.155, Cz: 0.055, hz: 20 }),  // Pastel pink — matches necktie
  },
  // Structural chrome — shopfront walls (not the cape)
  top: {
    main: hex({ Jz: 0.202, Cz: 0.016, hz: 235 }),     // Cool blue — activity bar
    shadow: hex({ Jz: 0.194, Cz: 0.020, hz: 235 }),    // Deeper cool — status bar
    trim: hex({ Jz: 0.118, Cz: 0.045, hz: 210 }),      // Tonic cyan trim
    blouse: '#FFF5E0',                                    // Cream — text on accent buttons
  },
  // Editor canvas — warm cream dress
  skirt: {
    base: hex({ Jz: 0.210, Cz: 0.012, hz: 85 }),      // Warm cream — editor canvas
    trim: hex({ Jz: 0.118, Cz: 0.045, hz: 210 }),      // Tonic cyan
    accessory: hex({ Jz: 0.108, Cz: 0.016, hz: 235 }), // Cool blue chain
  },
  // Sidebar — shopfront wall glass
  armWarmers: {
    base: hex({ Jz: 0.202, Cz: 0.016, hz: 235 }),     // Cool blue — sidebar
    pattern: '#78C6F0',
  },
  // Terminal — warm cream, same as editor for reading comfort
  boots: {
    base: hex({ Jz: 0.210, Cz: 0.012, hz: 85 }),      // Warm cream — terminal bg
    accent: hex({ Jz: 0.118, Cz: 0.045, hz: 210 }),    // Tonic cyan
  },
  // Tie — cool structure, shopfront borders
  tie: {
    base: hex({ Jz: 0.118, Cz: 0.020, hz: 235 }),     // Cool border
    shadow: hex({ Jz: 0.158, Cz: 0.012, hz: 235 }),    // Subtle cool border
  },
  negi: {
    stalk: mikuCharacter.negi.stalk,
    bright: mikuCharacter.negi.bright,
    white: mikuCharacter.negi.white,
  },
  skin: {
    base: mikuCharacter.skin.base,
    shadow: mikuCharacter.skin.shadow,
    blush: mikuCharacter.skin.blush,
  },
  marks: {
    tattoo: mikuCharacter.marks.tattoo,
  },
};

// =============================================================================
// SPECIAL COLORS
// =============================================================================

const lightSpecial: SpecialColors = {
  void: hex({ Jz: 0.218, Cz: 0.008, hz: 85 }),       // Warm ivory — empty space
  foreground: hex({ Jz: 0.075, Cz: 0.065, hz: 48 }),  // Vivid chocolate ink — boots brown, Lc ~85 on cream
  nearWhite: hex({ Jz: 0.025, Cz: 0.015, hz: 40 }),   // Deep chocolate — text on accents
  transparent: '#00000000',
  frost: hex({ Jz: 0.118, Cz: 0.045, hz: 235 }),     // Ice — cool shopfront selection
};

// =============================================================================
// PRIMITIVES FACTORY
// =============================================================================

/**
 * Create primitives for light theme — Snow Miku 2026
 *
 * Foreground uses chocolate ink (Hz 40°) — warm, readable, handwritten.
 * At Cz 0.018, it reads as a warm dark brown — visible personality
 * without competing with syntax colors. Background splits warm (Hz 85°,
 * editor) and cool (Hz 235°, chrome) — the bakery and shopfront.
 */
export function createLightPrimitives(): Primitives {
  return {
    polarity: 'light' as const,
    lightness: lightLightness,
    chroma: lightChroma,
    hue: lightHue,
    character: lightCharacter,
    special: lightSpecial,
    opacity,
  };
}
