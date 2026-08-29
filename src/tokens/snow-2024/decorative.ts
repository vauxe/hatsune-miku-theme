/**
 * Snow Miku 2024 Decorative Token Definitions — Winter Delicacy
 *
 * The hidden love letters in the theme. Indent guides trace six
 * pastry-case stripes, her hair first — celadon, violet, magenta,
 * matcha, turmeric, blue — each a flavor in the gochisou.
 *
 * Hue positions use the 2024 grid: 180° tonic (home), 210° interface,
 * 300° violet, 330° magenta, 150° matcha, 90° turmeric, 270° blue.
 * Standard 30° interval system, the dark theme's structure voiced light.
 *
 * Brackets follow design section 4: D(60°), A#(300°), D#(90°),
 * F#(180° ★ tonic), C(0°), A(270°). Dynamic: mp.
 *
 * SCM graph uses Project SEKAI unit colors. Chart colors come from
 * Magical Mirai concerts. Like the fork pinned in her bangs, these
 * details reward those who look closely.
 */

import { role, roleFromHex, darken, hex } from '../role';
import type {
  SymbolTokens,
  BracketTokens,
  SupportTokens,
  MarkdownTokens,
  DebugTokens,
  DecorativeTokens,
} from '../types';
import type { Primitives } from '../primitives';

// Palette imports - centralized here instead of in theme files
import {
  magicalMirai,
  digitalStars,
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from '../../palette';

export function createSymbolTokens(p: Primitives): SymbolTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // 24 icons on the 12-tone grid. Gochisou tier: mp ensemble, f emphasis.
  // Same-hue pairs distinguished by tier (Jz) and dynamic (Cz), DEz >= 12.
  return {
    // === D Apricot (60°) -- Minor 6th -- egg-yolk brooch ===
    property: role('Symbol property -- apricot 60°, vivid warmth', L.sopranino, C.ff, H.minor6th),
    field: role('Symbol field -- apricot 60°, deeper register', L.alto, C.mp, H.minor6th),

    // === D# Turmeric (90°) -- Major 6th -- curry gold ===
    function: role('Symbol function -- turmeric 90°, curry glow', L.sopranino, C.ff, H.major6th),
    method: role('Symbol method -- turmeric 90°, mezzo/mp for DEz≥15 from function', L.mezzo, C.mp, H.major6th),
    constructor: role('Symbol constructor -- turmeric 90°, alto+0.010 for DEz≥15 from method', L.alto + 0.010, C.f, H.major6th),

    // === E Wasabi (120°) -- Minor 7th -- the pot's parsley ===
    class: role('Symbol class -- wasabi 120°, parsley (sopranino for DEz)', L.sopranino, C.f, H.minor7th),
    struct: role('Symbol struct -- wasabi 120°, mezzo/ff for DEz≥15 from class', L.mezzo, C.ff, H.minor7th),
    enum: role('Symbol enum -- wasabi 120°, alto+0.010 for DEz≥15 from struct', L.alto + 0.010, C.f, H.minor7th),
    package: role('Symbol package -- wasabi 120°, alto+0.010', L.alto + 0.010, C.f, H.minor7th),

    // === F Matcha (150°) -- Major 7th -- green tea over rice ===
    string: role('Symbol string -- matcha 150°, literal truth', L.soprano, C.f, H.major7th),
    reference: role('Symbol reference -- matcha 150°, sopranino link', L.sopranino, C.mp, H.major7th),

    // === G Winter Blue (210°) -- interface ===
    interface: role('Symbol interface -- winter blue 210°, cool promise', L.sopranino, C.mp, H.minor2nd),

    // === F# Tonic (180°) -- Unison -- her hair ===
    folder: role('Symbol folder -- celadon 180°, her home', L.soprano, C.ff, H.mikuTeal),
    array: role('Symbol array -- celadon 180°, soprano for Lc>=45', L.soprano, C.mp, H.mikuTeal),

    // === A Blue (270°) -- Minor 3rd ===
    variable: role('Symbol variable -- blue 270°, vivid data', L.soprano, C.ff, H.minor3rd),

    // === G# Azure (240°) -- Major 2nd ===
    constant: role('Symbol constant -- azure 240° (mezzo, f for gap)', L.mezzo, C.f, H.major2nd),
    number: role('Symbol number -- azure 240°, treble+ff for DEz', L.treble, C.ff, H.major2nd),
    boolean: role('Symbol boolean -- azure 240°, alto+0.010 for DEz≥15', L.alto + 0.010, C.mp, H.major2nd),
    enumMember: role('Symbol enum member -- azure 240°, alto+0.010', L.alto + 0.010, C.f, H.major2nd),

    // === A# Violet (300°) -- Major 3rd ===
    typeParameter: role('Symbol type param -- violet 300°', L.soprano, C.mp, H.major3rd),
    module: role('Symbol module -- violet 300°, sopranino+f for gap', L.sopranino, C.f, H.major3rd),
    namespace: role('Symbol namespace -- violet 300°, alto for DEz', L.alto, C.mp, H.major3rd),

    // === C Rose (0°) -- Tritone ===
    operator: role('Symbol operator -- rose 0°, sopranino', L.sopranino, C.mp, H.tritone),
    snippet: role('Symbol snippet -- rose 0°, quiet template', L.soprano + 0.006, C.mp, H.tritone),
  };
}

export function createBracketTokens(p: Primitives): BracketTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // Bracket arpeggio — warm/cool alternation, CVD-safe, tonic at level 4
  // D(60°), A#(300°), D#(90°), F#(180°), C(0°), A(270°). Dynamic: mp
  // Level 6 uses blue 270° for deuteranopia safety (vs bracket1 60°)
  return {
    bracket1: role('Apricot 60° -- warm arpeggio begins (egg yolk)', L.sopranino, C.mp, H.minor6th),
    bracket2: role('Violet 300° -- cool deepens (twilight plum)', L.sopranino, C.mp, H.major3rd),
    bracket3: role('Turmeric 90° -- spring step (curry gold), lifted for tritan DJz vs bracket2', L.sopranino + 0.013, C.mp, H.major6th),
    bracket4: role('Celadon 180° -- her hair at the heart ★ tonic ★', L.sopranino, C.mp, H.mikuTeal),
    bracket5: role('Rose 0° -- heartbeat, deepened for deutan DJz vs bracket4', L.sopranino - 0.011, C.mp, H.tritone),
    bracket6: role('Blue 270° -- arpeggio resolves (winter window)', L.sopranino, C.mp, H.minor3rd),
  };
}

export function createSupportTokens(p: Primitives): SupportTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    function: role('Support function -- turmeric 90°, built-in action', L.sopranino, C.f, H.major6th),
    class: role('Support class -- wasabi 120°, built-in architecture', L.sopranino, C.f, H.minor7th),
    type: role('Support type -- violet 300°, built-in architecture', L.sopranino, C.mp, H.major3rd),
    constant: role('Support constant -- azure 240°, deep truth', L.sopranino, C.mp, H.major2nd),
    variable: role('Support variable -- blue 270°, built-in data', L.sopranino, C.mp, H.minor3rd),
  };
}

export function createMarkdownTokens(p: Primitives): MarkdownTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    heading: role('Heading -- turmeric 90°, sopranino ensemble', L.sopranino, C.f, H.major6th),
    codeBlock: role('Code in documents -- sienna chrome voice 58°', L.sopranino, C.f, H.ice),
    quote: role('Block quotes -- sienna chrome voice 58°', L.sopranino, C.mp, H.sky),
    linkUrl: role('Link URL -- violet 300°, the address beneath', L.sopranino, C.mp, H.major3rd),
    headingPunctuation: role('Heading punctuation -- turmeric 90°, structural', L.sopranino, C.mp, H.major6th),
    alertImportant: role('Important -- magenta 330°, pay attention', L.sopranino, C.f, H.perfect4th),
    alertNote: role('Note -- azure 240°, informational (sienna 58° reads blood-red at this depth)', L.sopranino, C.f, H.major2nd),
    alertTip: role('Tip -- matcha 150°, helpful and fresh', L.sopranino, C.f, H.major7th),
    alertWarning: role('Warning -- turmeric 90°, golden caution', L.sopranino, C.f, H.major6th),
    alertCaution: role('Caution -- rose 0°, danger', L.sopranino, C.f, H.tritone),
    inserted: role('Markup inserted -- matcha 150°', L.sopranino, C.mp, H.major7th),
    deleted: role('Markup deleted -- rose 0°, departure', L.sopranino, C.f, H.tritone),
  };
}

export function createDebugTokens(p: Primitives): DebugTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // Below the sopranino register: watch-view labels must also read on
  // chrome surfaces, not just the cream Stage. Per-hue offsets are
  // gate-tuned (Lc≥55 on chrome).
  return {
    name: role('Debug name -- rose 0°, identity', L.sopranino - 0.0085, C.mp, H.tritone),
    value: role('Debug value -- wasabi 120°, the treasure', L.sopranino - 0.0165, C.f, H.minor7th),
    string: role('Debug string -- matcha 150°, the text within', L.sopranino - 0.0225, C.mp, H.major7th),
    number: role('Debug number -- azure 240°, quantity', L.sopranino - 0.0105, C.f, H.major2nd),
    boolean: role('Debug boolean -- azure 240°, truth', L.sopranino - 0.0125, C.mp, H.major2nd),
    error: role('Debug error -- rose 0°, something broke', L.sopranino - 0.0135, C.f, H.tritone),
    type: role('Debug type -- violet 300°, the shape beneath', L.sopranino - 0.0045, C.mp, H.major3rd),
  };
}

/**
 * Create decorative tokens from palette colors.
 * Centralizes all direct palette references for thematic elements.
 */
export function createDecorativeTokens(p: Primitives): DecorativeTokens {
  return {
    // Indent guides — six pastry-case stripes, her hair first (design §8)
    indentGuides: [
      hex({ Jz: 0.142, Cz: 0.046, hz: 180 }),   // Celadon — her hair
      hex({ Jz: 0.138, Cz: 0.048, hz: 300 }),   // Violet — twilight plum
      hex({ Jz: 0.148, Cz: 0.042, hz: 330 }),   // Magenta — azuki
      hex({ Jz: 0.132, Cz: 0.046, hz: 150 }),   // Matcha
      hex({ Jz: 0.152, Cz: 0.048, hz: 90 }),    // Turmeric — the curry
      hex({ Jz: 0.140, Cz: 0.044, hz: 270 }),   // Blue — winter window
    ],

    // SCM graph -- Project SEKAI units, five visions of who she could be
    scmGraph: [
      darken(roleFromHex('Virtual Singer darkened', virtualSinger.imageColor), 0.06),
      leoNeed.unitColor,                // LEO/NEED — royal blue, already dark enough
      darken(roleFromHex('MORE MORE JUMP! darkened', moreMoreJump.unitColor), 0.16),  // deep enough for the sage House
      vividBadSquad.unitColor,          // VIVID BAD SQUAD — vivid pink, already dark enough
      darken(roleFromHex('Wonderlands darkened', wonderlandsShowtime.unitColor), 0.13),  // deep enough for the sage House
    ],

    // Charts -- Magical Mirai concert memories, darkened for peach canvas
    charts: {
      red: magicalMirai.y2014.accessories.ribbonWire,    // 2014 -- hot pink ribbons
      blue: magicalMirai.y2013.outfit.dress,             // 2013 -- royal blue dress
      yellow: darken(roleFromHex('Concert gold darkened', magicalMirai.y2013.accessories.wandGold), 0.07),
      orange: darken(roleFromHex('Stage orange darkened', wonderlandsShowtime.unitColor), 0.04),
      green: darken(roleFromHex('Emerald orb darkened', magicalMirai.y2013.accessories.wandOrb), 0.06),
      purple: nightcord.unitColor,                        // Nightcord -- 25:00
    },

    // Diff editor — gochisou-derived tints for peach canvas
    diffInserted: hex({ Jz: 0.120, Cz: 0.130, hz: 150 }),   // Matcha — line light, text stronger
    diffRemoved: hex({ Jz: 0.135, Cz: 0.120, hz: 40 }),     // Salmon-pink — the cuff stripe, light enough for the compound floor
    diffMoveBorder: digitalStars.y2021_mg.outfit.gradient,
    diffMoveActiveBorder: digitalStars.y2021_mg.outfit.gradient,

    // Terminal/SCM icons — remote things speak her voice (no flagship
    // pink on this sepia canvas)
    commitIcon: digitalStars.y2021.outfit.gradient,
    commentGlyph: wonderlandsShowtime.hair.highlight,
    multiCursorSecondary: p.character.hair.base,      // Matches the word-highlight wash it marks on the ruler
    pullRequestIcon: hex({ Jz: 0.080, Cz: 0.050, hz: 188 }),
    scmRemoteRef: hex({ Jz: 0.080, Cz: 0.050, hz: 188 }),

    // Character palette utility colors — cream and chocolate
    blouseWhite: p.character.top.blouse,
    darkForeground: p.character.eyes.pupil,
    inlayParameter: hex({ Jz: 0.092, Cz: 0.018, hz: 270 }),   // Blue — data name echoed faintly
    statusItemForeground: p.character.headphones.frame,
    markupInserted: hex({ Jz: 0.068, Cz: 0.088, hz: 150 }),   // Matcha
    tattooMark: p.character.marks.tattoo,
    sekaiHair: virtualSinger.hair.base,

    // Character reference colors
    walletChain: p.character.skirt.accessory,
    tieShadow: p.character.tie.shadow,
    negiStalk: p.character.negi.stalk,
    skinBlush: p.character.skin.blush,
    skinBase: p.character.skin.base,

    // Selection pigment — the haori apricot, the cloth laid over the apron
    cursorLineFrost: p.special.frost,                          // Haori AS PAINTED — selection, cursor line, chosen rows
    findMatchOverlay: hex({ Jz: 0.125, Cz: 0.090, hz: 90 }),  // Turmeric — its own overlay pigment, golden against the apricot selection
    findHighlightPigment: hex({ Jz: 0.128, Cz: 0.045, hz: 185 }),  // Light celadon veil — accentSecondary runs too dark for a syntax overlay here

    // Boots — terminal lives inside the warm peach space
    bootsBase: p.character.boots.base,
    armWarmersBase: p.character.armWarmers.base,
    topMain: p.character.top.main,
    topShadow: p.character.top.shadow,

    // Status bar state colors — Winter Delicacy costume elements
    eyeIris: hex({ Jz: 0.102, Cz: 0.075, hz: 44 }),  // Salmon base — debug status bar (adapter lightens it; ink Lc≥55)

    // Star icon — turmeric gold, deep enough to read on the sage House
    starIcon: hex({ Jz: 0.110, Cz: 0.115, hz: 85 }),
  };
}
