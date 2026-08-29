/**
 * Snow Miku 2024 Primitives — Winter Delicacy (冬のごちそう)
 *
 * Color-derived from the Snow Miku 2024 design — costume by shiro,
 * main visual by 裕 (Yuu). Every working surface is a painted value:
 *
 *   Stage  #FEEDDC — the apron's lit face
 *   House  #F1DBCB — the hair bow's cream; the apron's frilled hem
 *   Edge   #EAB59A — the haori, lit: activity bar, status bar, headers
 *   Float  #E8CFBF — the apron frill in shadow, laid over things
 *   Ink    #532B24 — the chocolate skirt; the artwork's own linework
 *
 * Recognition is the chord: a cream apron-page edged in haori apricot,
 * drawn in chocolate, tied with coral bows. Her hair never paints a
 * wall — the sage is a voice (keywords, comments, hovers, links,
 * buttons), the one cool thread through warm cloth.
 */

import { character as mikuCharacter } from '../../palette/core';
import { snowMiku } from '../../palette';
import { hex } from '../role';

// The verified main-visual samples — every painted surface below
// references this archive, never a duplicated literal.
const sm = snowMiku.y2024;
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
 * Snow Miku 2024 lightness values.
 *
 * Inverted scale: lower Jz = darker text = more prominent on cream.
 * The two-tier ensemble discipline carries over from the light grammar
 * (sopranino for the cool 120°–240° arc, soprano for the rest); the
 * apron Stage sits at Jz 0.210, slightly above the 2026 cream, so the
 * contrast math re-derives with a little headroom.
 */
export const snow2024Lightness: LightnessValues = {
  sopranino: 0.0765,   // +4  ensemble, cool arc (120°–240°) — compound-safe
  treble: 0.093,       // +3  reserve tier — no ensemble tokens
  soprano: 0.094,      // +2  ensemble, warm arc + 270°/300°/330°
  mezzo: 0.107,        // +1  punctuation, commentDoc
  alto: 0.130,         //  0  comments — departure register
  countertenor: 0.148, // -1  soft syntax, ghost
  tenor: 0.165,        // -2
  baritone: 0.180,     // -3
  bass: 0.192,         // -4
  contrabass: 0.200,   // -5  barely visible on cream
};

// =============================================================================
// HUE GRID — Derived from Snow Miku 2024
// =============================================================================

/**
 * 2024 hue layout — the tonic comes home to F# = 180° (sage celadon).
 *
 * The grid is the dark theme's structure transposed to light: standard
 * 30° intervals with the tonic at 180°. Two seats move relative to the
 * 2026 grammar (tonic 210°→180°, interface 180°→210°); the warning/find
 * family lifts 70°→90° because 2026's gingerbread seat would vanish
 * into this warm cream canvas. Error keeps its C# seat but renders at
 * the kimono collar's sampled ~42° (design §3, Principle 6).
 *
 *   180° Celadon    — her hair's cool axis, the tonic
 *   210° Winter blue — interface, the window's cool promise
 *   240° Azure      — deep truth on cream
 *   270° Blue       — the winter window, widest cool gamut
 *   300° Violet     — twilight plum
 *   330° Magenta    — azuki
 *     0° Rose       — connecting rhythm
 *    42° Vermilion  — the collar (C# seat, sampled hue kept)
 *    60° Apricot    — the egg-yolk brooch, the haori
 *    90° Turmeric   — the curry itself, golden
 *   120° Wasabi     — the pot's parsley, truest green she wears
 *   150° Matcha     — green tea over rice
 *
 * Field names are chromatic positions (C through B), not perceived
 * colors. Descriptions in syntax.ts name the actual perceived hue.
 */
export const snow2024Hue: HueValues = {
  tritone: 0,            // C  Tritone         (perceived: rose)
  perfect5th: 42,        // C# Perfect 5th     (perceived: collar vermilion — sampled hue kept)
  minor6th: 60,          // D  Minor 6th       (perceived: apricot egg brooch)
  major6th: 90,          // D# Major 6th       (perceived: turmeric curry gold)
  minor7th: 120,         // E  Minor 7th       (perceived: wasabi parsley)
  major7th: 150,         // F  Major 7th       (perceived: matcha)
  mikuTeal: 180,         // F# Unison          (perceived: sage celadon — her hair, TONIC)
  minor2nd: 210,         // G  Minor 2nd       (perceived: winter-window blue — interface)
  major2nd: 240,         // G# Major 2nd       (perceived: azure)
  minor3rd: 270,         // A  Minor 3rd       (perceived: winter blue — variable)
  major3rd: 300,         // A# Major 3rd       (perceived: twilight plum)
  perfect4th: 330,       // B  Perfect 4th     (perceived: azuki magenta)

  // Semantic aliases
  mikuPink: 44,          // Coral-bow salmon — identity (sampled #E67663)
  peach: 60,             // = D (Minor 6th position) — apricot warmth
  amber: 60,             // = D (Minor 6th position) — egg yolk
  sky: 58,               // Linework voice — warm russet-grey for muted text
  ice: 58,               // Linework voice
  periwinkle: 58,        // Linework voice
  lavender: 300,         // = A# (Major 3rd position) — twilight plum
  orchid: 300,           // = A# (Major 3rd position) — twilight plum
};

// =============================================================================
// CHROMA SCALE — Gochisou Dynamics
// =============================================================================

/**
 * 2024 chroma scale — gamut-max ensemble, carried from the light grammar.
 *
 * mp at 0.120 exceeds sRGB gamut max for most hues at soprano Jz.
 * The hex() function clips to the gamut boundary, automatically
 * delivering the most vivid color each hue can produce — the 和洋折衷
 * rule: surfaces stay milky like the painting, the plated food
 * (syntax) arrives at full voice.
 */
export const snow2024Chroma: ChromaValues = {
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
// CHARACTER PALETTE — Snow Miku 2024: Winter Delicacy
// =============================================================================

/**
 * Snow Miku 2024 character colors — sampled from the main visual
 * (hues verified against the artwork; see docs/DESIGN-SNOW-2024.md §2).
 * Where a painted value fits its screen role it is used as painted;
 * readability corrections darken the ink, never the walls.
 *
 * Apron: warm cream, the largest cloth — the canvas and its trims.
 * Haori: apricot — the window's edges and the selection veil.
 * Hair: sage, a voice only — accents, washes, buttons; never a surface.
 * Bows: coral — attention (cursor, focus, badge).
 * Skirt: chocolate — the ink, and the pen the borders are drawn with.
 */
export const snow2024Character: CharacterColors = {
  // Her hair — milky sage. The deep painted shadow carries the
  // engagement washes; the idealized 180°–185° family carries text-duty
  // accents (links, active) where the wash needs ink-grade depth.
  hair: {
    base: hex({ Jz: 0.118, Cz: 0.023, hz: 192 }),      // Hair shadow, half a breath deeper than painted (sm.hair.shadow) — engagement wash + label duty (Lc≥45 on House)
    shadow: hex({ Jz: 0.052, Cz: 0.038, hz: 185 }),    // Celadon dark — chrome text duty (Lc≥55 on the cream House and the apricot edge)
    highlight: hex({ Jz: 0.170, Cz: 0.016, hz: 182 }), // Pale sage shimmer — secondary-button hover
    tip: sm.hair.coil,                                  // Braid-coil pale — the braids' soft ends
    bright: hex({ Jz: 0.175, Cz: 0.014, hz: 182 }),    // Steam-lit sage — secondary-button rest (ink Lc≥55)
  },
  // Eyes — the same voice, watching
  eyes: sm.eyes,
  // Coral bow mapped to cushion slot — attention voice, AS PAINTED
  headphones: {
    frame: sm.mascot.body,                              // Yukine warm white
    cushion: sm.accessories.bow,                        // Coral bow as painted — focus, cursor base
    display: hex({ Jz: 0.118, Cz: 0.045, hz: 180 }),   // Celadon ornament
  },
  hairTies: {
    base: mikuCharacter.hairTies.base,
    outline: hex({ Jz: 0.145, Cz: 0.070, hz: 44 }),    // Coral — matches the bows
  },
  // Chrome cloth — the haori edges the window the way it edges the apron
  top: {
    main: sm.outfit.haori,                              // Haori, lit AS PAINTED — activity bar, status bar, section headers
    shadow: sm.outfit.apronShadow,                      // Apron frill in shadow AS PAINTED — Float source (menus, overlays)
    trim: hex({ Jz: 0.118, Cz: 0.045, hz: 180 }),      // Celadon trim
    blouse: '#FFF3E0',                                  // Warm cream — text on accent buttons
  },
  // THE STAGE — the apron's lit face, largest cloth in the painting
  skirt: {
    base: sm.outfit.apron,                              // Editor canvas AS PAINTED
    trim: hex({ Jz: 0.118, Cz: 0.045, hz: 180 }),      // Celadon
    accessory: hex({ Jz: 0.108, Cz: 0.016, hz: 58 }),  // Russet chain — breadcrumb duty
  },
  // Sidebar cloth — the apron's own trim; her hair stays out of the walls
  armWarmers: {
    base: sm.accessories.hairBow,                       // Hair-bow cream AS PAINTED — sidebar, tabs
    pattern: sm.hair.mint,
  },
  // Terminal — the apron continues; you read at the same table
  boots: {
    base: sm.outfit.apron,                              // Terminal bg — apron cream
    accent: hex({ Jz: 0.118, Cz: 0.045, hz: 180 }),    // Celadon
  },
  // Tie — the borders are the linework: the same pen as the ink,
  // at a lighter stroke. One line family, not a fourth warm color.
  tie: {
    base: hex({ Jz: 0.103, Cz: 0.026, hz: 42 }),       // Cocoa line — visible borders, the ink's pen at a lighter stroke
    shadow: hex({ Jz: 0.168, Cz: 0.018, hz: 58 }),     // Cloth fold — quiet borders, a crease in the cream
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

const snow2024Special: SpecialColors = {
  void: hex({ Jz: 0.213, Cz: 0.014, hz: 68 }),        // Apron at full light — the page behind her
  foreground: sm.outfit.skirt,                         // Chocolate skirt AS PAINTED — the ink is the linework
  nearWhite: hex({ Jz: 0.025, Cz: 0.015, hz: 42 }),   // Chest-ribbon deep — text on accents
  transparent: '#00000000',
  frost: sm.outfit.haoriMid,                           // Haori apricot AS PAINTED — selection veils, the cloth over the apron
};

// =============================================================================
// PRIMITIVES FACTORY
// =============================================================================

/**
 * Create primitives for Snow Miku 2024 — Winter Delicacy.
 *
 * Cream Stage inside a milky-sage House, chocolate ink, checker-russet
 * borders, coral-bow identity, haori-apricot selection. The Stage/House
 * seam is a temperature seam — warm apron against cool hair — exactly
 * the painting's own strongest edge.
 */
export function createSnow2024Primitives(): Primitives {
  return {
    polarity: 'light' as const,
    lightness: snow2024Lightness,
    chroma: snow2024Chroma,
    hue: snow2024Hue,
    character: snow2024Character,
    special: snow2024Special,
    opacity,
  };
}
