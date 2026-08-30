/**
 * Magical Mirai 2025 Primitives — 星河一天 (Starry River in the Sky)
 *
 * Color-derived from the Magical Mirai 2025 main visual — art and
 * costume design by Tiv. Every working surface is a painted or
 * official-site value:
 *
 *   Void   #000821 — the site's page night; the zenith between galaxies
 *   Stage  #021C49 — the deep sky at working depth (site indigo, 257°)
 *   House  #153163 — the water-mirror stage floor, one step lit
 *   Edge   denim   — the amp and thigh-high cloth, deepened to duty
 *   Float  nebula  — tulle veils over the night
 *
 * Recognition is the river: every large surface lives on the painting's
 * single hue arc (~250–263°), separated by depth alone. All polychrome
 * belongs to points of light — the syntax starfield, the pins, the one
 * warm spark (the earring). Pink looks, cyan acts.
 */

import { character as mikuCharacter } from '../../palette/core';
import { magicalMirai } from '../../palette';
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

// The verified main-visual + official-site samples — every painted
// surface below references this archive, never a duplicated literal.
const mm = magicalMirai.y2025;

// =============================================================================
// LIGHTNESS — the starfield registers
// =============================================================================

/**
 * MM2025 lightness values — the flagship's dark ladder, kept: text is
 * starlight (high Jz) on a night that never brightens to meet it.
 * Soprano is the ensemble register; corrections lift glyphs, never walls.
 */
export const mm2025Lightness: LightnessValues = {
  contrabass: 0.080,         // −7 steps
  bass: 0.095,               // −6
  baritone: 0.110,           // −5
  tenor: 0.125,              // −4
  countertenor: 0.140,       // −3 ghost/structure
  alto: 0.155,               // −2 whisper — comments (star-mist)
  mezzo: 0.170,              // −1 punctuation (ice)
  soprano: 0.185,            //  0 ★ ensemble — the starfield
  treble: 0.200,             // +1
  sopranino: 0.215,          // +2
};

// =============================================================================
// HUE GRID — the river and its sparks
// =============================================================================

/**
 * MM2025 hue layout — tonic at G (210°), rendered at the hair's sampled
 * ~204° (the site's own interactive cyan). The frame is monochrome
 * (250–263°); these seats belong to the text, the starfield.
 *
 *   204° River teal   — her hair / site cyan, THE TONIC (G seat)
 *   240° Iris cerulean — the eyes; functions, the gaze
 *   272° Aurora       — lining + horizon; variables, nearest starlight
 *   290° Constellation — the star-trail mauve; types
 *   325° Candy pink   — the earring at text register; numbers
 *    23° Crimson      — site alarm (C seat, sampled hue kept)
 *    34° Coral        — site alert; deprecated, dimmed
 *    64° Warm sand    — her skin; properties
 *    92° Star gold    — the written wish; strings, warning
 *   120° Bamboo       — the branch the wishes hang on; regex, success
 *   150° Spring       — markup headings, sparse
 *   183° Mascot mint  — the companion on her pouch; support/builtins
 *
 * Field names are chromatic positions (C through B), not perceived
 * colors. Descriptions in syntax.ts name the actual perceived hue.
 */
export const mm2025Hue: HueValues = {
  tritone: 23,           // C  Tritone         (perceived: site crimson — sampled hue kept)
  perfect5th: 34,        // C# Perfect 5th     (perceived: site coral)
  minor6th: 64,          // D  Minor 6th       (perceived: warm sand — her skin)
  major6th: 92,          // D# Major 6th       (perceived: star gold)
  minor7th: 120,         // E  Minor 7th       (perceived: bamboo leaf)
  major7th: 150,         // F  Major 7th       (perceived: spring green)
  mikuTeal: 183,         // F# Unison          (perceived: mascot mint)
  minor2nd: 204,         // G  Minor 2nd       (perceived: river teal — her hair, TONIC)
  major2nd: 240,         // G# Major 2nd       (perceived: iris cerulean)
  minor3rd: 272,         // A  Minor 3rd       (perceived: aurora lavender)
  major3rd: 290,         // A# Major 3rd       (perceived: constellation mauve)
  perfect4th: 325,       // B  Perfect 4th     (perceived: candy pink — the earring)

  // Semantic aliases
  mikuPink: 325,         // The First Star — earring pink, attention only
  peach: 64,             // = D (Minor 6th position) — warm sand
  amber: 92,             // = D# (Major 6th position) — star gold
  sky: 249,              // Star-mist — the Milky Way haze (comments, muted, seams)
  ice: 211,              // Hair-tip ice — punctuation, between mist and starlight
  periwinkle: 255,       // Denim / silver hardware — the frame's cloth and metal
  lavender: 272,         // = A (Minor 3rd position) — aurora
  orchid: 290,           // = A# (Major 3rd position) — constellation
};

// =============================================================================
// CHROMA — restrained starlight dynamics
// =============================================================================

/**
 * MM2025 chroma scale — the flagship's dark dynamics, kept: starlight is
 * high lightness at restrained chroma ("the light is simply there").
 * The vivid end (mf/f) is reserved for the gaze (functions), the alarm
 * and the spark.
 */
export const mm2025Chroma: ChromaValues = {
  niente: 0,             // silence — achromatic
  ppp: 0.015,            // breath — the lavender cast of plain text
  pp: 0.030,             // sotto voce — variables' aurora tint
  p: 0.045,              // quiet
  mp: 0.060,             // ★ the melody — ensemble
  mf: 0.075,             // emphasis — the gaze, the wish
  f: 0.090,              // signal
  ff: 0.105,             // alarm
  fff: 0.120,            // extreme
};

// =============================================================================
// CHARACTER PALETTE — Magical Mirai 2025: 星河一天
// =============================================================================

/**
 * MM2025 character colors — sampled from the main visual (hues verified
 * against the artwork in two passes; see docs/DESIGN-MM-2025.md §2).
 * Where a painted or site value fits its screen role it is used as
 * painted; readability corrections tune the light, never the walls.
 *
 * Sky: the Stage — the editor opens into the deepest night.
 * Floor: the House — the water-mirror you stand on, one step lit.
 * Denim: the Edge — activity bar and status bar wear the amp's cloth.
 * Hair: the Current — cyan acts (links, buttons, the remote chip).
 * Earring: the First Star — pink looks (cursor, focus, badges, find).
 */
export const mm2025Character: CharacterColors = {
  // Her hair — the river's voice, UI-grade at the site's own cyan.
  // The base is the site accent as published; shadow carries pressed
  // and disabled duties; highlight/bright are the link registers.
  hair: {
    base: mm.site.cyan,                                 // #17DDDD AS PUBLISHED — the Current: accents, engagement-adjacent chrome
    shadow: hex({ Jz: 0.115, Cz: 0.055, hz: 204 }),    // The current in shadow — pressed/disabled solids
    highlight: hex({ Jz: 0.172, Cz: 0.062, hz: 204 }), // Link register
    tip: mm.hair.ice,                                   // #76D4DB ice tips — tertiary/muted accent
    bright: hex({ Jz: 0.190, Cz: 0.060, hz: 204 }),    // Active link — the current, fully lit
  },
  // Eyes — the gaze; the iris is the brightest saturated point on her
  eyes: {
    iris: mm.eyes.iris,                                 // #1AB1F8 AS PAINTED — function family source, debug light
    highlight: mm.eyes.highlight,
    pupil: hex({ Jz: 0.020, Cz: 0.040, hz: 257 }),     // Night ink — dark text on bright chips (badge, remote)
  },
  // The First Star mapped to the cushion slot — attention voice.
  // Solid pink for focus borders and active states; the cursor lifts it.
  headphones: {
    frame: mm.stage.flare,                              // Flare starlight — text on the deep error/warning chips
    cushion: hex({ Jz: 0.166, Cz: 0.078, hz: 325 }),   // The earring made border-grade — focus, active borders
    display: hex({ Jz: 0.150, Cz: 0.060, hz: 204 }),   // Cyan ornament
  },
  hairTies: {
    base: mikuCharacter.hairTies.base,
    outline: mm.accessories.hairpin,                    // #5494F6 periwinkle star pin — hardware, lit (hover borders)
  },
  // Chrome cloth — the denim Edge: the amp at the floor's edge hums
  // status; the activity bar wears the same worn cloth.
  top: {
    main: hex({ Jz: 0.076, Cz: 0.084, hz: 254 }),      // Amp denim deepened to duty — activity bar
    shadow: hex({ Jz: 0.066, Cz: 0.086, hz: 255 }),    // Status bar denim — one fold deeper
    trim: hex({ Jz: 0.150, Cz: 0.065, hz: 204 }),      // Cyan trim
    blouse: hex({ Jz: 0.020, Cz: 0.040, hz: 257 }),    // Night ink — text on cyan buttons and bright chips
  },
  // THE STAGE — the deep sky at the site's working depth
  skirt: {
    base: mm.site.indigo,                               // #021C49 AS PUBLISHED — editor: the zenith, 257° kept
    trim: hex({ Jz: 0.150, Cz: 0.065, hz: 204 }),      // Cyan
    accessory: hex({ Jz: 0.140, Cz: 0.020, hz: 262 }), // Silver chain — breadcrumb duty
  },
  // Sidebar cloth — the water-mirror floor, one step lighter than the
  // sky because it reflects it. You stand on the frame.
  armWarmers: {
    base: mm.stage.floorDeep,                           // #153163 AS PAINTED — sidebar, tabs, panels
    pattern: mm.accessories.mascot,                     // #75F1D7 mint
  },
  // Terminal — the same night sky; you run code under the stars
  boots: {
    base: mm.site.indigo,                               // Terminal bg — the Stage night
    accent: hex({ Jz: 0.150, Cz: 0.065, hz: 204 }),    // Cyan
  },
  // Tie — the silver hardware: control borders are the costume's
  // buckles and chains, metal against the cloth. Not a new hue family.
  tie: {
    base: hex({ Jz: 0.110, Cz: 0.050, hz: 258 }),      // Hardware silver-periwinkle — visible control borders
    shadow: hex({ Jz: 0.088, Cz: 0.045, hz: 258 }),    // Hardware in shadow — quiet borders
  },
  negi: {
    stalk: hex({ Jz: 0.140, Cz: 0.048, hz: 120 }),     // Bamboo — tree structure lines (the wish-branch)
    bright: hex({ Jz: 0.175, Cz: 0.058, hz: 120 }),    // Bamboo lit — markup inserted
    white: mm.stage.flare,                              // #F6F2F9 flare core — brightest starlight
  },
  skin: {
    base: mm.skin.cheek,                                // #FCECDE AS PAINTED — warm sand (toast tint source)
    shadow: hex({ Jz: 0.168, Cz: 0.042, hz: 64 }),     // Sand readable on night — inlay hints
    blush: hex({ Jz: 0.170, Cz: 0.045, hz: 345 }),     // Pale site pink
  },
  marks: {
    tattoo: hex({ Jz: 0.196, Cz: 0.085, hz: 12 }),     // Site crimson made mark-grade — bright above the unverified breakpoint
  },
};

// =============================================================================
// SPECIAL COLORS
// =============================================================================

const mm2025Special: SpecialColors = {
  void: mm.site.night,                                  // #000821 AS PUBLISHED — the zenith between galaxies
  foreground: mm.outfit.sock,                           // #DCDDEF AS PAINTED — starlight with the lavender cast
  nearWhite: mm.stage.flare,                            // #F6F2F9 — the flare core, emphasis ceiling
  transparent: '#00000000',
  frost: mm.outfit.jacket,                              // #4984E8 AS PAINTED — the denim veil: selection, cursor line
};

// =============================================================================
// PRIMITIVES FACTORY
// =============================================================================

/**
 * Create primitives for Magical Mirai 2025 — 星河一天.
 *
 * The deepest editor on a lit floor (the painting's own elevation:
 * zenith darkest, horizon brightest), denim edges, star-mist seams,
 * a pink shooting-star cursor and the site's cyan for everything that
 * acts. One night, five distances into it.
 */
export function createMm2025Primitives(): Primitives {
  return {
    polarity: 'dark' as const,
    lightness: mm2025Lightness,
    chroma: mm2025Chroma,
    hue: mm2025Hue,
    character: mm2025Character,
    special: mm2025Special,
    opacity,
  };
}
