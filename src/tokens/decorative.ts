/**
 * Decorative Token Definitions
 *
 * The hidden love letters in the theme. Indent guides trace her voicebank
 * evolution (V2 → NT). SCM graph uses Project SEKAI unit colors. Chart colors
 * come from Magical Mirai concerts. These details are invisible unless you
 * look for them — which is exactly right. She's keeping you company.
 */

import { role, roleFromHex, lighten, darken } from './role';
import { hex } from './jzczhz';
import type {
  SymbolTokens,
  BracketTokens,
  SupportTokens,
  MarkdownTokens,
  DebugTokens,
  DecorativeTokens,
} from './types';
import type { Primitives } from './primitives';

// Palette imports - centralized here instead of in theme files
import {
  mikuV2,
  mikuAppend,
  mikuV3,
  mikuV4X,
  mikuNT,
  character,
  magicalMirai,
  digitalStars,
  snowMiku,
  sakuraMiku,
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from '../palette';

export function createSymbolTokens(p: Primitives): SymbolTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // 24 icons on the 12-tone grid, aligned with syntax counterpart hues.
  // Same-hue pairs distinguished by tier (Jz) and dynamic (Cz), ΔEz ≥ 12.
  return {
    // ═══ C# Red (30°) — Perfect 5th ═══
    property: role('Symbol property — red, vivid warmth', L.sopranino, C.f, H.red),
    field: role('Symbol field — red, dark', L.alto, C.mp, H.red),

    // ═══ D Orange (60°) — Minor 6th ═══
    function: role('Symbol function — orange spotlight', L.sopranino, C.f, H.orange),

    // ═══ D Orange (60°) — Minor 6th ═══
    method: role('Symbol method — orange, callable action', L.soprano, C.p, H.orange),
    constructor: role('Symbol constructor — orange, vivid creation', L.soprano, C.f, H.orange),

    // ═══ D# Gold (90°) — Major 6th ═══
    class: role('Symbol class — gold, the score', L.soprano, C.mf, H.gold),
    struct: role('Symbol struct — gold architecture', L.soprano, C.f, H.gold),
    enum: role('Symbol enum — gold, mezzo set', L.mezzo, C.mf, H.gold),
    package: role('Symbol package — warm gold, alto', L.alto, C.mp, H.gold),

    // ═══ E Lime (120°) — Minor 7th ═══
    string: role('Symbol string — lime, literal truth', L.soprano, C.mf, H.lime),
    reference: role('Symbol reference — warm lime, sopranino', L.sopranino, C.mp, H.lime),

    // ═══ F Green (150°) — Major 7th ═══
    interface: role('Symbol interface — green, abstract contract', L.sopranino, C.mp, H.green),

    // ═══ F# Teal (180°) — Unison ★ ═══
    folder: role('Symbol folder — teal, her home', L.soprano, C.f, H.mikuTeal),
    array: role('Symbol array — bright teal', L.sopranino, C.mp, H.mikuTeal),

    // ═══ G Cyan (210°) — Minor 2nd ═══
    variable: role('Symbol variable — cyan, vivid data', L.soprano, C.f, H.cyan),

    // ═══ G# Azure (240°) — Major 2nd ═══
    constant: role('Symbol constant — azure, deep truth', L.mezzo, C.mp, H.azure),
    number: role('Symbol number — azure, vivid quantity', L.soprano, C.f, H.azure),
    boolean: role('Symbol boolean — azure, sopranino truth', L.sopranino, C.mp, H.azure),
    enumeratorMember: role('Symbol enum member — azure, alto', L.alto, C.mf, H.azure),

    // ═══ A Blue (270°) — Minor 3rd ═══
    typeParameter: role('Symbol type param — blue, standard', L.soprano, C.mp, H.blue),
    module: role('Symbol module — blue, sopranino container', L.sopranino, C.mp, H.blue),
    namespace: role('Symbol namespace — blue, mezzo scope', L.mezzo, C.mp, H.blue),

    // ═══ B Magenta (330°) — Perfect 4th ═══
    operator: role('Symbol operator — magenta, sopranino harmony', L.sopranino, C.mp, H.magenta),
    snippet: role('Symbol snippet — magenta, quiet template',
      p.polarity === 'light' ? L.soprano + 0.006 : L.soprano, C.p, H.magenta),
  };
}

export function createBracketTokens(p: Primitives): BracketTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    bracket1: role('Warm opening — red arpeggio begins', L.soprano, C.mp, H.red),
    bracket2: role('Cool contrast — blue deepens', L.soprano, C.mp, H.blue),
    bracket3: role('Major 6th — gold, warm step', L.soprano, C.mp, H.gold),
    bracket4: role('★ MIKU — teal at the heart of nesting', L.soprano, C.mp, H.mikuTeal),
    bracket5: role('Cool continuation — magenta, going further', L.soprano, C.mp, H.magenta),
    bracket6: role('Warm close — lime, the arpeggio resolves', L.soprano, C.mp, H.lime),
  };
}

export function createSupportTokens(p: Primitives): SupportTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    function: role('Support function — orange glow, built-in action', L.soprano, C.mf, H.orange),
    class: role('Support class — gold, built-in structure', L.soprano, C.mf, H.gold),
    type: role('Support type — blue depth, built-in architecture', L.soprano, C.mp, H.blue),
    constant: role('Support constant — azure, built-in truth', L.soprano, C.mp, H.azure),
    variable: role('Support variable — cyan, built-in data', L.soprano, C.mp, H.cyan),
  };
}

export function createMarkdownTokens(p: Primitives): MarkdownTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    heading: role('Heading — orange spotlight, darkened for bold compensation', L.soprano - 0.004, C.mf, H.orange),
    codeBlock: role('Code in documents — bright cyan, her voice quoted', L.soprano, C.mf, H.ice),
    quote: role('Block quotes — sky cyan, someone else\'s words', L.soprano, C.mp, H.sky),
    linkUrl: role('Link URL — blue, the address beneath', L.soprano, C.mp, H.blue),
    headingPunctuation: role('Heading punctuation — orange, structural marker', L.soprano, C.mp, H.orange),
    alertImportant: role('Important — violet, pay attention', L.soprano, C.mf, H.violet),
    alertNote: role('Note — bright cyan, worth remembering', L.soprano, C.mf, H.ice),
    alertTip: role('Tip — fresh green, helpful', L.soprano, C.mf, H.green),
    alertWarning: role('Warning — orange, caution ahead', L.soprano, C.mf, H.orange),
    alertCaution: role('Caution — rose, danger', L.soprano, C.mf, H.rose),
    inserted: role('Markup inserted — lime, someone\'s truth added', L.soprano, C.mp, H.lime),
    deleted: role('Markup deleted — rose, departure', L.soprano, C.mf, H.rose),
  };
}

export function createDebugTokens(p: Primitives): DebugTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    name: role('Debug name — soft magenta, the variable\'s identity', L.soprano, C.mp, H.magenta),
    value: role('Debug value — gold, what it holds', L.soprano, C.mf, H.gold),
    string: role('Debug string — lime, the text within', L.soprano, C.mp, H.lime),
    number: role('Debug number — azure, numeric quantity', L.soprano, C.mf, H.azure),
    boolean: role('Debug boolean — azure, binary truth', L.soprano, C.mp, H.azure),
    error: role('Debug error — rose, something went wrong', L.soprano, C.mf, H.rose),
    type: role('Debug type — blue, the shape beneath', L.soprano, C.mp, H.blue),
  };
}

/**
 * Create decorative tokens from palette colors.
 * Centralizes all direct palette references for thematic elements.
 */
export function createDecorativeTokens(p: Primitives): DecorativeTokens {
  return {
    // Indent guides — her voicebank evolution, 2007 to present
    // Each level of indentation is a chapter of her life
    indentGuides: p.polarity === 'light' ? [
      hex({ Jz: 0.120, Cz: 0.040, hz: 55 }),   // Cinnamon
      hex({ Jz: 0.130, Cz: 0.045, hz: 65 }),   // Caramel
      hex({ Jz: 0.140, Cz: 0.035, hz: 75 }),   // Honey
      hex({ Jz: 0.110, Cz: 0.050, hz: 45 }),   // Cocoa
      hex({ Jz: 0.150, Cz: 0.030, hz: 85 }),   // Butter
      hex({ Jz: 0.125, Cz: 0.042, hz: 60 }),   // Toffee
    ] : [
      mikuV2.hair.base,        // V2 (2007) — KEI's original, where it all began
      mikuAppend.hair.base,    // Append (2010) — the dark era, vivid turquoise
      mikuV3.hair.base,        // V3 (2013) — iXima's refinement, canonical
      mikuV4X.hair.base,       // V4X (2016) — polished, variants possible
      mikuNT.hair.base,        // NT (2020) — organic redesign, soft turquoise
      character.hair.base,     // Present — #39C5BB, the Miku we know
    ],

    // SCM graph — Project SEKAI units, five visions of who she could be
    scmGraph: p.polarity === 'light' ? [
      darken(roleFromHex('Virtual Singer darkened', virtualSinger.imageColor), 0.06),
      leoNeed.unitColor,                // LEO/NEED — royal blue, already dark enough for snow
      darken(roleFromHex('MORE MORE JUMP! darkened', moreMoreJump.unitColor), 0.08),
      vividBadSquad.unitColor,          // VIVID BAD SQUAD — vivid pink, already dark enough
      darken(roleFromHex('Wonderlands darkened', wonderlandsShowtime.unitColor), 0.04),
    ] : [
      virtualSinger.imageColor,        // Virtual Singer — the default Miku
      lighten(roleFromHex('LEO/NEED brightened', leoNeed.unitColor), 0.08),  // LEO/NEED — royal blue, brightened for dark bg
      moreMoreJump.unitColor,          // MORE MORE JUMP! — bright green, idol energy
      vividBadSquad.unitColor,         // VIVID BAD SQUAD — vivid pink, street soul
      wonderlandsShowtime.unitColor,   // Wonderlands x Showtime — orange, circus wonder
    ],

    // Charts — Magical Mirai concert memories
    charts: {
      red: magicalMirai.y2014.accessories.ribbonWire,    // 2014 — hot pink ribbons
      blue: magicalMirai.y2013.outfit.dress,             // 2013 — royal blue dress, the first
      yellow: magicalMirai.y2013.accessories.wandGold,   // Concert gold — the wand she held
      orange: wonderlandsShowtime.unitColor,              // Stage orange — showtime energy
      green: magicalMirai.y2013.accessories.wandOrb,     // 2013 — emerald orb, magical
      purple: nightcord.unitColor,                        // Nightcord — 25:00, the quiet hours
    },

    // Diff editor — cute character colors
    diffInserted: p.polarity === 'light'
      ? hex({ Jz: 0.120, Cz: 0.110, hz: 150 })   // Warm matcha — vivid sage green, bright enough for light overlay
      : moreMoreJump.unitColor,                    // MORE MORE JUMP! bright green — idol energy, new code
    diffRemoved: p.polarity === 'light'
      ? hex({ Jz: 0.120, Cz: 0.110, hz: 15 })    // Warm rose — vivid terracotta pink, distinct from matcha
      : sakuraMiku.hair.base,                      // Vivid sakura — cherry blossom hue, lovely departure
    diffMoveBorder: digitalStars.y2021_mg.outfit.gradient,
    diffMoveActiveBorder: digitalStars.y2021_mg.outfit.gradient,

    // Terminal/SCM icons
    commitIcon: digitalStars.y2021.outfit.gradient,
    commentGlyph: wonderlandsShowtime.hair.highlight,
    multiCursorSecondary: leoNeed.hair.highlight,
    pullRequestIcon: leoNeed.hair.highlight,
    scmRemoteRef: leoNeed.hair.highlight,

    // Character palette utility colors
    blouseWhite: character.top.blouse,  // #FCF8F0 — bright text on colored buttons/badges
    darkForeground: character.eyes.pupil,
    inlayParameter: p.polarity === 'light'
      ? hex({ Jz: 0.095, Cz: 0.020, hz: 50 })  // Warm gray — visible on snow
      : character.skin.shadow,
    statusItemForeground: character.headphones.frame,
    markupInserted: p.polarity === 'light'
      ? hex({ Jz: 0.075, Cz: 0.080, hz: 150 })  // Dark green — readable on snow
      : character.negi.bright,
    tattooMark: character.marks.tattoo,
    sekaiHair: virtualSinger.hair.base,

    // Character reference colors — her accessories and skin entering the UI
    // These appear in moments of interaction: scrolling, navigating, highlighting
    walletChain: p.character.skirt.accessory, // Variant-aware — warm gray on cream, cool gray on dark
    tieShadow: p.character.tie.shadow,
    negiStalk: character.negi.stalk,
    skinBlush: character.skin.blush,
    skinBase: character.skin.base,

    // Snow Miku — icy cursor line frost
    cursorLineFrost: p.polarity === 'light'
      ? hex({ Jz: 0.130, Cz: 0.060, hz: 220 }) // Darker ice blue for visibility on snow
      : snowMiku.y2025.accessories.crystal, // 2025 Sparkling Snow ice prism #81D4FA

    // Boots — terminal lives inside her thigh-highs
    bootsBase: p.character.boots.base, // dark=#14181D, light=sunlit snow
    armWarmersBase: p.character.armWarmers.base, // dark=#1A222B, light=snow shade
    topMain: p.character.top.main, // dark=#151B22, light=ice (activity bar)
    topShadow: p.character.top.shadow, // dark=#11171E, light=deep ice (status bar)
  };
}
