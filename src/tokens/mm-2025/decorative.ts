/**
 * MM2025 Decorative Token Definitions
 *
 * Symbol icons, brackets, support, markdown and debug follow the score
 * seats with per-icon registers derived on the night ground; the
 * decorative slots carry the scene's love letters — tanzaku indent
 * guides in the festival's five colors, the 2025 palette in the charts,
 * and the denim Edge override that dresses the activity and status bars.
 */

import { role, hex, lighten, roleFromHex } from '../role';
import type {
  SymbolTokens,
  BracketTokens,
  SupportTokens,
  MarkdownTokens,
  DebugTokens,
  DecorativeTokens,
} from '../types';
import type { Primitives } from '../primitives';

// Palette imports — centralized here instead of in theme files
import {
  magicalMirai,
  digitalStars,
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
} from '../../palette';

const mm = magicalMirai.y2025;

export function createSymbolTokens(_p: Primitives): SymbolTokens {
  // 24 icons transposed to the MM2025 seats, aligned with their syntax
  // counterparts. All values gate-derived against the full symbol
  // discrimination pair list (ΔEz ≥ 15 per pair, actual rendered hexes).
  return {
    // === Warm coral-sand — property seat ===
    property: role('Symbol property — warm coral-sand, vivid', 0.200, 0.095, 45),
    field: role('Symbol field — warm sand, dark', 0.148, 0.050, 70),

    // === Iris cerulean — the gaze; the icon keeps the painted register ===
    function: role('Symbol function — the iris nearly as painted', 0.170, 0.098, 240),
    method: role('Symbol method — the gaze, pale register', 0.190, 0.052, 248),
    constructor: role('Symbol constructor — the gaze, deep', 0.140, 0.075, 250),

    // === Constellation mauve — the type family ===
    class: role('Symbol class — constellation, pale', 0.204, 0.048, 310),
    struct: role('Symbol struct — constellation, deep vivid', 0.168, 0.070, 300),
    enum: role('Symbol enum — candy edge of the constellation', 0.180, 0.066, 325),
    package: role('Symbol package — constellation, bass', 0.140, 0.050, 300),

    // === Star gold — the wish ===
    string: role('Symbol string — star gold, the written wish', 0.190, 0.065, 92),
    reference: role('Symbol reference — pale gold-green glint', 0.206, 0.030, 104),

    // === Spring green — the promise ===
    interface: role('Symbol interface — spring, an abstract promise', 0.212, 0.050, 158),

    // === River teal — the tonic, home ===
    folder: role('Symbol folder — the current; her home', 0.185, 0.075, 204),
    array: role('Symbol array — the current, deep', 0.150, 0.050, 204),

    // === Aurora — the variable seat ===
    variable: role('Symbol variable — aurora, vivid data', 0.180, 0.058, 272),

    // === Candy-magenta — fixed values ===
    constant: role('Symbol constant — candy, pale', 0.204, 0.042, 340),
    number: role('Symbol number — candy, vivid quantity', 0.190, 0.058, 345),
    boolean: role('Symbol boolean — palest violet-white', 0.215, 0.010, 280),
    enumMember: role('Symbol enum member — candy, deep', 0.160, 0.062, 340),

    // === Denim sky (257) — the frame's own cloth for containers ===
    typeParameter: role('Symbol type param — denim sky, pale', 0.205, 0.030, 257),
    module: role('Symbol module — denim sky, container', 0.178, 0.048, 257),
    namespace: role('Symbol namespace — denim sky, deep scope', 0.144, 0.038, 257),

    // === Ice — the glints ===
    operator: role('Symbol operator — ice, bright glint', 0.207, 0.022, 204),
    snippet: role('Symbol snippet — ice, quiet template', 0.163, 0.042, 211),
  };
}

export function createBracketTokens(_p: Primitives): BracketTokens {
  // Six tanzaku-bright levels, tonic first — the current opens the
  // phrase. Adjacent levels ≥ 60° apart (including the 6→1 wrap), and
  // a deep/bright Jz weave carries the adjacency under all three
  // dichromacies (gate-derived, ΔEz ≥ 12 under Brettel per pair).
  return {
    bracket1: role('The current opens — tonic teal, deep', 0.166, 0.074, 204),
    bracket2: role('Constellation — pale violet, bright', 0.207, 0.042, 308),
    bracket3: role('Star gold — a wish glints mid-nest, deep', 0.172, 0.068, 88),
    bracket4: role('Iris cerulean — the gaze, bright', 0.207, 0.045, 240),
    bracket5: role('Candy pink — the spark, deep', 0.174, 0.060, 325),
    bracket6: role('Spring green — the phrase resolves, bright', 0.204, 0.055, 150),
  };
}

export function createSupportTokens(p: Primitives): SupportTokens {
  const { hue: H } = p;

  // Built-ins are the mascot — the little companion on her pouch: help
  // that travels with her, fresh mint beside the tonic teal. Every
  // register clears the primary Lc ≥ 75 floor on the Stage night.
  return {
    function: role('Support function — mascot mint, vivid help', 0.184, 0.075, H.mikuTeal),
    class: role('Support class — mascot mint, bright', 0.200, 0.060, H.mikuTeal),
    type: role('Support type — mascot mint, mid', 0.191, 0.048, H.mikuTeal),
    constant: role('Support constant — mascot mint, quiet', 0.184, 0.045, H.mikuTeal),
    variable: role('Support variable — mascot mint, lit', 0.207, 0.065, H.mikuTeal),
  };
}

export function createMarkdownTokens(p: Primitives): MarkdownTokens {
  const { hue: H } = p;

  return {
    heading: role('Heading — spring green, the fresh line', 0.190, 0.062, H.major7th),
    codeBlock: role('Code in documents — ice, her voice quoted', 0.185, 0.070, H.ice),
    quote: role('Block quotes — star-mist, someone else\'s words', 0.186, 0.055, H.sky),
    linkUrl: role('Link URL — aurora, the address beneath', 0.196, 0.050, 268),
    headingPunctuation: role('Heading punctuation — spring, structural', 0.190, 0.048, H.major7th),
    alertImportant: role('Important — constellation, pale and high', 0.211, 0.035, 300),
    alertNote: role('Note — iris cerulean, worth remembering', 0.201, 0.070, 243),
    alertTip: role('Tip — bamboo, helpful', 0.188, 0.064, H.minor7th),
    alertWarning: role('Warning — star gold, caution ahead', 0.196, 0.068, H.major6th),
    alertCaution: role('Caution — crimson-coral, danger', 0.184, 0.082, 27),
    inserted: role('Markup inserted — bamboo, a wish added', 0.186, 0.062, H.minor7th),
    deleted: role('Markup deleted — crimson, departure', 0.190, 0.078, 25),
  };
}

export function createDebugTokens(p: Primitives): DebugTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // The watch view lives on the House floor — expression tokens run one
  // register brighter than editor syntax where the floor asks it.
  return {
    name: role('Debug name — candy, the variable\'s identity', L.soprano + 0.014, C.mp, H.perfect4th),
    value: role('Debug value — star gold, what it holds', L.soprano, C.mf, H.major6th),
    string: role('Debug string — star gold, treble register', L.treble, C.mp, H.major6th),
    number: role('Debug number — iris cerulean, quantity', L.soprano + 0.004, C.mf, H.major2nd),
    boolean: role('Debug boolean — iris cerulean, binary truth', L.soprano + 0.004, C.mp, H.major2nd),
    error: role('Debug error — site crimson, something broke', L.soprano + 0.018, C.mf, H.tritone),
    type: role('Debug type — constellation, the shape beneath', L.soprano + 0.012, C.mp, H.major3rd),
  };
}

/**
 * Create decorative tokens from palette colors.
 * Centralizes all direct palette references for thematic elements.
 */
export function createDecorativeTokens(p: Primitives): DecorativeTokens {
  return {
    // Indent guides — tanzaku: vertical wish-papers hanging through the
    // code in the festival's five traditional colors (五色の短冊) plus
    // the denim, at whisper opacity on the night.
    indentGuides: [
      hex({ Jz: 0.122, Cz: 0.032, hz: 204 }),  // 青 — blue-green, the hair current
      hex({ Jz: 0.122, Cz: 0.032, hz: 345 }),  // 赤 — the site's pink, muted
      hex({ Jz: 0.122, Cz: 0.032, hz: 92 }),   // 黄 — star gold
      hex({ Jz: 0.132, Cz: 0.008, hz: 273 }),  // 白 — starlight, faint
      hex({ Jz: 0.122, Cz: 0.032, hz: 290 }),  // 紫 — constellation mauve
      hex({ Jz: 0.122, Cz: 0.036, hz: 255 }),  // the sixth strip is denim
    ],

    // SCM graph — Project SEKAI units, five visions of who she could be
    // (a cross-theme love letter, kept from the flagship)
    scmGraph: [
      virtualSinger.imageColor,
      lighten(roleFromHex('LEO/NEED brightened', leoNeed.unitColor), 0.08),
      moreMoreJump.unitColor,
      lighten(roleFromHex('VIVID BAD SQUAD brightened for the night floor', vividBadSquad.unitColor), 0.06),
      wonderlandsShowtime.unitColor,
    ],

    // Charts — this event's own identity set, from the verified archive
    charts: {
      red: mm.site.pink,             // Site pink — the identity's deep register
      blue: mm.site.periwinkle,      // Site periwinkle
      yellow: mm.site.starYellow,    // Star sparkle
      orange: mm.site.notice,        // Site notice orange
      green: hex({ Jz: 0.170, Cz: 0.065, hz: 120 }),  // Bamboo — the festival green
      purple: mm.stage.starTrail,    // The shooting-star trail
    },

    // Diff editor — background-optimized tints (independent of git fg):
    // inserted bamboo 120, removed site crimson 23 — line light, text
    // stronger, per the overlay table.
    diffInserted: hex({ Jz: 0.185, Cz: 0.060, hz: 120 }),
    diffRemoved: hex({ Jz: 0.168, Cz: 0.085, hz: 23 }),
    diffMoveBorder: digitalStars.y2021_mg.outfit.gradient,
    diffMoveActiveBorder: digitalStars.y2021_mg.outfit.gradient,

    // Terminal/SCM icons — franchise slots kept from the flagship
    commitIcon: digitalStars.y2021.outfit.gradient,
    commentGlyph: wonderlandsShowtime.hair.highlight,
    multiCursorSecondary: leoNeed.hair.highlight,
    pullRequestIcon: leoNeed.hair.highlight,
    scmRemoteRef: leoNeed.hair.highlight,

    // Character palette utility colors
    // Light duty: the workbench pours this on the DARKENED status
    // chips (error/warning/offline) — starlight, not the button ink.
    blouseWhite: p.special.nearWhite,
    darkForeground: p.character.eyes.pupil,  // Night ink — text on badges and the remote chip
    inlayParameter: p.character.skin.shadow, // Warm sand — inlay hints
    statusItemForeground: p.character.headphones.frame,
    markupInserted: p.character.negi.bright,
    tattooMark: p.character.marks.tattoo,

    // Badge duty — the First Star: badges are candy pinned on the
    // chrome (slot named for the SEKAI hair; repainted per theme).
    sekaiHair: hex({ Jz: 0.150, Cz: 0.085, hz: 330 }),

    walletChain: p.character.skirt.accessory,
    tieShadow: p.character.tie.shadow,
    negiStalk: p.character.negi.stalk,
    skinBlush: p.character.skin.blush,
    skinBase: p.character.skin.base,

    // The denim veil — cursor line and selection share the jacket
    // (whisper opacity for the line, strong for the selection)
    cursorLineFrost: p.special.frost,
    // Find is attention: the current match is the meteor landing (the
    // First Star pigment rides the adapter override); other matches are
    // its afterglow — pale pink mist.
    findMatchOverlay: hex({ Jz: 0.150, Cz: 0.085, hz: 325 }),
    findHighlightPigment: hex({ Jz: 0.168, Cz: 0.055, hz: 325 }),

    // Surfaces
    bootsBase: p.character.boots.base,
    armWarmersBase: p.character.armWarmers.base,
    topMain: p.character.top.main,
    topShadow: p.character.top.shadow,
    eyeIris: p.character.eyes.iris,

    // Star icon — star gold, the glint (no text contrast needed)
    starIcon: hex({ Jz: p.lightness.soprano, Cz: p.chroma.mf, hz: 92 }),

    // The denim Edge — activity bar and status bar wear the amp's
    // cloth; section headers wear the skirt's galaxy hem band. Debug
    // wears star gold under night ink; find-current is the First Star.
    chromeOverride: {
      activityBar: p.character.top.main,
      statusBar: p.character.top.shadow,
      sectionHeader: hex({ Jz: 0.078, Cz: 0.070, hz: 262 }),  // Galaxy hem band, deepened to duty
      statusDebugBg: hex({ Jz: 0.172, Cz: 0.066, hz: 92 }),   // Star gold — instruments live
      statusDebugFg: p.character.top.blouse,                   // Night ink on gold
      findMatchPigment: hex({ Jz: 0.180, Cz: 0.080, hz: 325 }), // The meteor landing
    },
  };
}
