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
import { hex, parseHex } from '../jzczhz';
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
  character,
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
    property: role('Symbol property -- orange 60°, vivid warmth', L.sopranino, C.ff, H.orange),
    field: role('Symbol field -- orange 60°, deeper register', L.alto, C.mp, H.orange),

    // === D# Gold (90°) -- Major 6th -- butter croissant ===
    function: role('Symbol function -- gold 90°, croissant glow', L.sopranino, C.ff, H.gold),
    method: role('Symbol method -- gold 90°, soprano/mp for distinction', L.soprano, C.mp, H.gold),
    constructor: role('Symbol constructor -- gold 90°, mezzo for light theme visibility', L.mezzo, C.f, H.gold),

    // === E Lime (120°) -- Minor 7th -- pistachio cream ===
    class: role('Symbol class -- lime 120°, pistachio (sopranino for DEz)', L.sopranino, C.f, H.lime),
    struct: role('Symbol struct -- lime 120°, soprano for light visibility', L.soprano, C.ff, H.lime),
    enum: role('Symbol enum -- lime 120°, mezzo for DEz gap from struct', L.mezzo, C.f, H.lime),
    package: role('Symbol package -- lime 120°, mezzo for Lc>=45', L.mezzo, C.f, H.lime),

    // === F Green (150°) -- Major 7th -- mint leaf ===
    string: role('Symbol string -- green 150°, literal truth', L.soprano, C.f, H.green),
    reference: role('Symbol reference -- green 150°, sopranino link', L.sopranino, C.mp, H.green),

    // === Canonical Teal (180°) -- interface ===
    interface: role('Symbol interface -- teal 180°, canonical promise', L.sopranino, C.mp, 180),

    // === G Tonic (210°) -- Unison -- her hair ===
    folder: role('Symbol folder -- tonic 210°, her home', L.soprano, C.ff, H.mikuTeal),
    array: role('Symbol array -- tonic 210°, soprano for Lc>=45', L.soprano, C.mp, H.mikuTeal),

    // === G# Azure (240°) -- Minor 2nd ===
    variable: role('Symbol variable -- azure 240°, vivid data', L.soprano, C.ff, H.cyan),

    // === A Blue (270°) -- Major 2nd ===
    constant: role('Symbol constant -- blue 270° (mezzo, f for gap)', L.mezzo, C.f, H.azure),
    number: role('Symbol number -- blue 270°, treble+ff for DEz', L.treble, C.ff, H.azure),
    boolean: role('Symbol boolean -- blue 270°, countertenor for DEz', L.countertenor, C.mp, H.azure),
    enumeratorMember: role('Symbol enum member -- blue 270°, countertenor', L.countertenor, C.f, H.azure),

    // === A# Violet (300°) -- Minor 3rd ===
    typeParameter: role('Symbol type param -- violet 300°', L.soprano, C.mp, H.blue),
    module: role('Symbol module -- violet 300°, sopranino+f for gap', L.sopranino, C.f, H.blue),
    namespace: role('Symbol namespace -- violet 300°, alto for DEz', L.alto, C.mp, H.blue),

    // === C Rose (0°) -- Tritone ===
    operator: role('Symbol operator -- rose 0°, sopranino', L.sopranino, C.mp, H.rose),
    snippet: role('Symbol snippet -- rose 0°, quiet template', L.soprano + 0.006, C.mp, H.rose),
  };
}

export function createBracketTokens(p: Primitives): BracketTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // Bracket arpeggio — per design section 4
  // D(60°), A#(300°), D#(90°), G(210°), C(0°), F(150°). Dynamic: mp
  return {
    bracket1: role('Orange 60° -- warm arpeggio begins (baked peach)', L.soprano, C.mp, H.orange),
    bracket2: role('Violet 300° -- cool deepens (twilight)', L.soprano, C.mp, H.blue),
    bracket3: role('Gold 90° -- spring step (butter croissant)', L.soprano, C.mp, H.gold),
    bracket4: role('Tonic 210° -- her hair at the heart', L.soprano, C.mp, H.mikuTeal),
    bracket5: role('Rose 0° -- strawberry heartbeat', L.soprano, C.mp, H.rose),
    bracket6: role('Green 150° -- arpeggio resolves (mint leaf)', L.soprano, C.mp, H.green),
  };
}

export function createSupportTokens(p: Primitives): SupportTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    function: role('Support function -- gold 90°, built-in action', L.soprano, C.f, H.gold),
    class: role('Support class -- lime 120°, treble for Lc>=60', L.treble, C.f, H.lime),
    type: role('Support type -- violet 300°, built-in architecture', L.soprano, C.mp, H.blue),
    constant: role('Support constant -- cyan 240°, treble for Lc>=60', L.treble, C.mp, H.cyan),
    variable: role('Support variable -- azure 270°, built-in data', L.soprano, C.mp, H.azure),
  };
}

export function createMarkdownTokens(p: Primitives): MarkdownTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    heading: role('Heading -- gold 90°, darkened for bold compensation', L.soprano - 0.004, C.f, H.gold),
    codeBlock: role('Code in documents -- azure 235°, treble for Lc>=60', L.treble, C.f, H.ice),
    quote: role('Block quotes -- azure 235°, treble for Lc>=60', L.treble, C.mp, H.sky),
    linkUrl: role('Link URL -- violet 300°, the address beneath', L.soprano, C.mp, H.blue),
    headingPunctuation: role('Heading punctuation -- gold 90°, structural', L.soprano, C.mp, H.gold),
    alertImportant: role('Important -- magenta 330°, pay attention', L.soprano, C.f, H.violet),
    alertNote: role('Note -- azure 235°, worth remembering', L.soprano, C.f, H.ice),
    alertTip: role('Tip -- green 150°, helpful and fresh', L.soprano, C.f, H.green),
    alertWarning: role('Warning -- gold 90°, golden caution', L.soprano, C.f, H.gold),
    alertCaution: role('Caution -- rose 0°, danger', L.soprano, C.f, H.rose),
    inserted: role('Markup inserted -- green 150°, sopranino for Lc>=60', L.sopranino, C.mp, H.green),
    deleted: role('Markup deleted -- rose 0°, departure', L.soprano, C.f, H.rose),
  };
}

export function createDebugTokens(p: Primitives): DebugTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    name: role('Debug name -- rose 0°, identity', L.treble, C.mp, H.rose),
    value: role('Debug value -- lime 120°, the treasure', L.treble, C.f, H.lime),
    string: role('Debug string -- green 150°, the text within', L.treble, C.mp, H.green),
    number: role('Debug number -- cyan 240°, quantity', L.treble, C.f, H.cyan),
    boolean: role('Debug boolean -- cyan 240°, truth', L.treble, C.mp, H.cyan),
    error: role('Debug error -- rose 0°, something broke', L.treble, C.f, H.rose),
    type: role('Debug type -- violet 300°, the shape beneath', L.treble, C.mp, H.blue),
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

    // Charts -- Magical Mirai concert memories
    charts: {
      red: magicalMirai.y2014.accessories.ribbonWire,    // 2014 -- hot pink ribbons
      blue: magicalMirai.y2013.outfit.dress,             // 2013 -- royal blue dress, the first
      yellow: magicalMirai.y2013.accessories.wandGold,   // Concert gold -- the wand she held
      orange: wonderlandsShowtime.unitColor,              // Stage orange -- showtime energy
      green: magicalMirai.y2013.accessories.wandOrb,     // 2013 -- emerald orb, magical
      purple: nightcord.unitColor,                        // Nightcord -- 25:00, the quiet hours
    },

    // Diff editor — patisserie-derived tints for cream canvas
    diffInserted: hex({ Jz: 0.120, Cz: 0.130, hz: 180 }),   // Mint — canonical Miku green (vivid for ΔE≥15)
    diffRemoved: hex({ Jz: 0.120, Cz: 0.130, hz: 27 }),     // Pastel pink — sampled necktie departure (vivid for ΔE≥15)
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
    statusItemForeground: character.headphones.frame,
    markupInserted: hex({ Jz: 0.068, Cz: 0.088, hz: 180 }),   // Mint — canonical Miku
    tattooMark: character.marks.tattoo,
    sekaiHair: virtualSinger.hair.base,

    // Character reference colors
    walletChain: p.character.skirt.accessory,
    tieShadow: p.character.tie.shadow,
    negiStalk: character.negi.stalk,
    skinBlush: character.skin.blush,
    skinBase: character.skin.base,

    // Cursor line frost — ice at ~235° Hz
    cursorLineFrost: hex({ Jz: 0.128, Cz: 0.070, hz: 235 }),   // Ice — cool shopfront

    // Boots — terminal lives inside the warm cream space
    bootsBase: p.character.boots.base,
    armWarmersBase: p.character.armWarmers.base,
    topMain: p.character.top.main,
    topShadow: p.character.top.shadow,

    // Status bar state colors — Snow Miku 2026 costume elements
    eyeIris: p.character.eyes.iris,               // Her gaze — debug status
    cape: hex({ Jz: 0.100, Cz: 0.060, hz: 220 }), // Cyan-blue cape — remote status
  };
}
