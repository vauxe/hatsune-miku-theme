/**
 * Light Decorative Token Definitions — Snow Miku 2026
 *
 * The hidden love letters in the theme. Indent guides trace a
 * patisserie color palette — tonic cyan, violet, magenta, green,
 * gold, azure — each a flavor in the display case.
 *
 * Hue positions use the new grid: 210° tonic, 300° violet, 330°
 * magenta, 150° green, 90° gold, 270° azure. These match the
 * standard 30° interval system.
 *
 * Brackets follow design section 4: D(60°), A#(300°), D#(90°),
 * G(210°), C(0°), F(150°). Dynamic: mp (was mf).
 *
 * SCM graph uses Project SEKAI unit colors. Chart colors come from
 * Magical Mirai concerts. Like the tiny decorations on a pastry,
 * these details reward those who look closely.
 */

import { role, roleFromHex, darken } from '../role';
import { hex } from '../role';
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

  // 24 icons on the 12-tone grid. Patisserie tier: mp ensemble, f emphasis.
  // Same-hue pairs distinguished by tier (Jz) and dynamic (Cz), DEz >= 12.
  return {
    // === D Orange (60°) -- Minor 6th -- baked peach ===
    property: role('Symbol property -- orange 60°, vivid warmth', L.sopranino, C.ff, H.minor6th),
    field: role('Symbol field -- orange 60°, deeper register', L.alto, C.mp, H.minor6th),

    // === D# Gold (90°) -- Major 6th -- butter croissant ===
    function: role('Symbol function -- gold 90°, croissant glow', L.sopranino, C.ff, H.major6th),
    method: role('Symbol method -- gold 90°, mezzo/mp for DEz≥15 from function', L.mezzo, C.mp, H.major6th),
    constructor: role('Symbol constructor -- gold 90°, alto+0.010 for DEz≥15 from method', L.alto + 0.010, C.f, H.major6th),

    // === E Lime (120°) -- Minor 7th -- pistachio cream ===
    class: role('Symbol class -- lime 120°, pistachio (sopranino for DEz)', L.sopranino, C.f, H.minor7th),
    struct: role('Symbol struct -- lime 120°, mezzo/ff for DEz≥15 from class', L.mezzo, C.ff, H.minor7th),
    enum: role('Symbol enum -- lime 120°, alto+0.010 for DEz≥15 from struct', L.alto + 0.010, C.f, H.minor7th),
    package: role('Symbol package -- lime 120°, alto+0.010', L.alto + 0.010, C.f, H.minor7th),

    // === F Green (150°) -- Major 7th -- mint leaf ===
    string: role('Symbol string -- green 150°, literal truth', L.soprano, C.f, H.major7th),
    reference: role('Symbol reference -- green 150°, sopranino link', L.sopranino, C.mp, H.major7th),

    // === Canonical Teal (180°) -- interface ===
    interface: role('Symbol interface -- teal 180°, canonical promise', L.sopranino, C.mp, 180),

    // === G Tonic (210°) -- Unison -- her hair ===
    folder: role('Symbol folder -- tonic 210°, her home', L.soprano, C.ff, H.mikuTeal),
    array: role('Symbol array -- tonic 210°, soprano for Lc>=45', L.soprano, C.mp, H.mikuTeal),

    // === A Blue (270°) -- Major 2nd ===
    variable: role('Symbol variable -- blue 270°, vivid data', L.soprano, C.ff, H.major2nd),

    // === G# Azure (240°) -- Minor 2nd ===
    constant: role('Symbol constant -- azure 240° (mezzo, f for gap)', L.mezzo, C.f, H.minor2nd),
    number: role('Symbol number -- azure 240°, treble+ff for DEz', L.treble, C.ff, H.minor2nd),
    boolean: role('Symbol boolean -- azure 240°, alto+0.010 for DEz≥15', L.alto + 0.010, C.mp, H.minor2nd),
    enumMember: role('Symbol enum member -- azure 240°, alto+0.010', L.alto + 0.010, C.f, H.minor2nd),

    // === A# Violet (300°) -- Minor 3rd ===
    typeParameter: role('Symbol type param -- violet 300°', L.soprano, C.mp, H.minor3rd),
    module: role('Symbol module -- violet 300°, sopranino+f for gap', L.sopranino, C.f, H.minor3rd),
    namespace: role('Symbol namespace -- violet 300°, alto for DEz', L.alto, C.mp, H.minor3rd),

    // === C Rose (0°) -- Tritone ===
    operator: role('Symbol operator -- rose 0°, sopranino', L.sopranino, C.mp, H.tritone),
    snippet: role('Symbol snippet -- rose 0°, quiet template', L.soprano + 0.006, C.mp, H.tritone),
  };
}

export function createBracketTokens(p: Primitives): BracketTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // Bracket arpeggio — warm/cool alternation, CVD-safe
  // D(60°), A#(300°), D#(90°), G(210°), C(0°), A(270°). Dynamic: mp
  // Level 6 uses blue 270° instead of green 150° for deuteranopia safety (vs bracket1 60°)
  return {
    bracket1: role('Orange 60° -- warm arpeggio begins (baked peach)', L.sopranino, C.mp, H.minor6th),
    bracket2: role('Violet 300° -- cool deepens (twilight)', L.sopranino, C.mp, H.minor3rd),
    bracket3: role('Gold 90° -- spring step (butter croissant)', L.sopranino, C.mp, H.major6th),
    bracket4: role('Tonic 210° -- her hair at the heart', L.sopranino, C.mp, H.mikuTeal),
    bracket5: role('Rose 0° -- strawberry heartbeat', L.sopranino, C.mp, H.tritone),
    bracket6: role('Blue 270° -- arpeggio resolves (display case)', L.sopranino, C.mp, H.major2nd),
  };
}

export function createSupportTokens(p: Primitives): SupportTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    function: role('Support function -- gold 90°, built-in action', L.sopranino, C.f, H.major6th),
    class: role('Support class -- lime 120°, built-in architecture', L.sopranino, C.f, H.minor7th),
    type: role('Support type -- violet 300°, built-in architecture', L.sopranino, C.mp, H.minor3rd),
    constant: role('Support constant -- azure 240°, deep truth', L.sopranino, C.mp, H.minor2nd),
    variable: role('Support variable -- blue 270°, built-in data', L.sopranino, C.mp, H.major2nd),
  };
}

export function createMarkdownTokens(p: Primitives): MarkdownTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    heading: role('Heading -- gold 90°, sopranino ensemble', L.sopranino, C.f, H.major6th),
    codeBlock: role('Code in documents -- azure 235°', L.sopranino, C.f, H.ice),
    quote: role('Block quotes -- azure 235°', L.sopranino, C.mp, H.sky),
    linkUrl: role('Link URL -- violet 300°, the address beneath', L.sopranino, C.mp, H.minor3rd),
    headingPunctuation: role('Heading punctuation -- gold 90°, structural', L.sopranino, C.mp, H.major6th),
    alertImportant: role('Important -- magenta 330°, pay attention', L.sopranino, C.f, H.major3rd),
    alertNote: role('Note -- azure 235°, worth remembering', L.sopranino, C.f, H.ice),
    alertTip: role('Tip -- green 150°, helpful and fresh', L.sopranino, C.f, H.major7th),
    alertWarning: role('Warning -- gold 90°, golden caution', L.sopranino, C.f, H.major6th),
    alertCaution: role('Caution -- rose 0°, danger', L.sopranino, C.f, H.tritone),
    inserted: role('Markup inserted -- green 150°', L.sopranino, C.mp, H.major7th),
    deleted: role('Markup deleted -- rose 0°, departure', L.sopranino, C.f, H.tritone),
  };
}

export function createDebugTokens(p: Primitives): DebugTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    name: role('Debug name -- rose 0°, identity', L.sopranino, C.mp, H.tritone),
    value: role('Debug value -- lime 120°, the treasure', L.sopranino, C.f, H.minor7th),
    string: role('Debug string -- green 150°, the text within', L.sopranino - 0.006, C.mp, H.major7th),
    number: role('Debug number -- cyan 240°, quantity', L.sopranino, C.f, H.minor2nd),
    boolean: role('Debug boolean -- cyan 240°, truth', L.sopranino, C.mp, H.minor2nd),
    error: role('Debug error -- rose 0°, something broke', L.sopranino, C.f, H.tritone),
    type: role('Debug type -- violet 300°, the shape beneath', L.sopranino, C.mp, H.minor3rd),
  };
}

/**
 * Create decorative tokens from palette colors.
 * Centralizes all direct palette references for thematic elements.
 */
export function createDecorativeTokens(p: Primitives): DecorativeTokens {
  return {
    // Indent guides — patisserie flavor palette, new grid hues
    indentGuides: [
      hex({ Jz: 0.142, Cz: 0.046, hz: 210 }),   // Tonic cyan — her hair
      hex({ Jz: 0.138, Cz: 0.048, hz: 300 }),   // Violet — twilight
      hex({ Jz: 0.148, Cz: 0.042, hz: 330 }),   // Magenta — raspberry macaron
      hex({ Jz: 0.132, Cz: 0.046, hz: 150 }),   // Green — mint leaf
      hex({ Jz: 0.152, Cz: 0.048, hz: 90 }),    // Gold — butter croissant
      hex({ Jz: 0.140, Cz: 0.044, hz: 270 }),   // Azure — display case
    ],

    // SCM graph -- Project SEKAI units, five visions of who she could be
    scmGraph: [
      darken(roleFromHex('Virtual Singer darkened', virtualSinger.imageColor), 0.06),
      leoNeed.unitColor,                // LEO/NEED — royal blue, already dark enough
      darken(roleFromHex('MORE MORE JUMP! darkened', moreMoreJump.unitColor), 0.04),
      vividBadSquad.unitColor,          // VIVID BAD SQUAD — vivid pink, already dark enough
      darken(roleFromHex('Wonderlands darkened', wonderlandsShowtime.unitColor), 0.04),
    ],

    // Charts -- Magical Mirai concert memories, darkened for cream canvas
    charts: {
      red: magicalMirai.y2014.accessories.ribbonWire,    // 2014 -- hot pink ribbons (Lc ~62, ok)
      blue: magicalMirai.y2013.outfit.dress,             // 2013 -- royal blue dress (Lc ~74, ok)
      yellow: darken(roleFromHex('Concert gold darkened', magicalMirai.y2013.accessories.wandGold), 0.07),   // Lc ~60
      orange: darken(roleFromHex('Stage orange darkened', wonderlandsShowtime.unitColor), 0.04),              // Lc ~61
      green: darken(roleFromHex('Emerald orb darkened', magicalMirai.y2013.accessories.wandOrb), 0.06),      // Lc ~62
      purple: nightcord.unitColor,                        // Nightcord -- 25:00 (Lc ~76, ok)
    },

    // Diff editor — patisserie-derived tints for cream canvas
    diffInserted: hex({ Jz: 0.120, Cz: 0.130, hz: 180 }),   // Mint — canonical Miku green (vivid for ΔE≥15)
    diffRemoved: hex({ Jz: 0.125, Cz: 0.130, hz: 27 }),     // Pastel pink — tuned for ΔE≥15 at medium opacity
    diffMoveBorder: digitalStars.y2021_mg.outfit.gradient,
    diffMoveActiveBorder: digitalStars.y2021_mg.outfit.gradient,

    // Terminal/SCM icons
    commitIcon: digitalStars.y2021.outfit.gradient,
    commentGlyph: wonderlandsShowtime.hair.highlight,
    multiCursorSecondary: leoNeed.hair.highlight,
    pullRequestIcon: leoNeed.hair.highlight,
    scmRemoteRef: leoNeed.hair.highlight,

    // Character palette utility colors — cream and chocolate
    blouseWhite: p.character.top.blouse,
    darkForeground: p.character.eyes.pupil,
    inlayParameter: hex({ Jz: 0.092, Cz: 0.018, hz: 270 }),   // Azure — display case
    statusItemForeground: p.character.headphones.frame,
    markupInserted: hex({ Jz: 0.068, Cz: 0.088, hz: 180 }),   // Mint — canonical Miku
    tattooMark: p.character.marks.tattoo,
    sekaiHair: virtualSinger.hair.base,

    // Character reference colors
    walletChain: p.character.skirt.accessory,
    tieShadow: p.character.tie.shadow,
    negiStalk: p.character.negi.stalk,
    skinBlush: p.character.skin.blush,
    skinBase: p.character.skin.base,

    // Cursor line frost — ice at ~235° Hz
    cursorLineFrost: hex({ Jz: 0.128, Cz: 0.070, hz: 235 }),   // Ice — cool shopfront
    findMatchOverlay: hex({ Jz: 0.125, Cz: 0.090, hz: 70 }),  // Gingerbread cookie — overlay tint (Cz tuned for ΔE≥12)

    // Boots — terminal lives inside the warm cream space
    bootsBase: p.character.boots.base,
    armWarmersBase: p.character.armWarmers.base,
    topMain: p.character.top.main,
    topShadow: p.character.top.shadow,

    // Status bar state colors — Snow Miku 2026 costume elements
    eyeIris: p.character.eyes.iris,               // Her gaze — debug status
    cape: hex({ Jz: 0.100, Cz: 0.060, hz: 220 }), // Cyan-blue cape — remote status

    // Star icon — butter croissant gold, bright for icon visibility (no text contrast)
    starIcon: hex({ Jz: 0.150, Cz: 0.115, hz: 80 }),
  };
}
