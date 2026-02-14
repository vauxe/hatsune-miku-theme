/**
 * Decorative Token Definitions
 *
 * The hidden love letters in the theme. Indent guides trace her voicebank
 * evolution (V2 → NT). SCM graph uses Project SEKAI unit colors. Chart colors
 * come from Magical Mirai concerts. These details are invisible unless you
 * look for them — which is exactly right. She's keeping you company.
 */

import { role, roleFromHex, lighten } from './role';
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

  // 23 icons on the 12-tone grid, aligned with syntax counterpart hues.
  // Same-hue pairs distinguished by tier (Jz) and dynamic (Cz), ΔEz ≥ 12.
  return {
    // ═══ C# Red (30°) — Perfect 5th ═══
    property: role('Symbol property — red, vivid warmth', L.vibrantWarm, C.vivid, H.red),
    field: role('Symbol field — red, dark', L.secondary - 0.030, C.comfortable, H.red),

    // ═══ D Orange (60°) — Minor 6th ═══
    function: role('Symbol function — orange spotlight', L.primaryWarm, C.vivid, H.orange),

    // ═══ D# Gold (90°) — Major 6th ═══
    struct: role('Symbol struct — gold architecture', L.vibrant, C.vibrant, H.gold),
    package: role('Symbol package — warm gold', L.primaryWarm, C.comfortable, H.gold),

    // ═══ E Lime (120°) — Minor 7th ═══
    string: role('Symbol string — lime, literal truth', L.vibrant, C.vibrant, H.lime),
    reference: role('Symbol reference — warm lime', L.primaryWarm, C.comfortable, H.lime),

    // ═══ F Green (150°) — Major 7th ═══
    method: role('Symbol method — green, quiet flow', L.primary, C.muted, H.green),
    constructor: role('Symbol constructor — green, vivid creation', L.vibrant, C.vivid, H.green),

    // ═══ F# Teal (180°) — Unison ★ ═══
    folder: role('Symbol folder — teal, her home', L.vibrant, C.vivid, H.mikuTeal),
    array: role('Symbol array — bright teal', L.vibrant + 0.042, C.comfortable, H.mikuTeal),

    // ═══ G Cyan (210°) — Minor 2nd ═══
    variable: role('Symbol variable — cyan, vivid data', L.vibrant, C.vivid, H.cyan),
    enumeratorMember: role('Symbol enum member — cyan, one possibility', L.secondary, C.muted, H.cyan),
    enumerator: role('Symbol enumerator — cyan, warm set', L.primaryWarm, C.comfortable, H.cyan),

    // ═══ G# Azure (240°) — Major 2nd ═══
    constant: role('Symbol constant — azure, deep truth', L.secondary - 0.020, C.comfortable, H.azure),
    number: role('Symbol number — azure, vivid quantity', L.vibrant, C.vivid, H.azure),
    module: role('Symbol module — azure, warm container', L.primaryWarm, C.comfortable, H.azure),

    // ═══ A Blue (270°) — Minor 3rd ═══
    typeParameter: role('Symbol type param — blue, standard', L.primary, C.comfortable, H.blue),
    boolean: role('Symbol boolean — blue, quiet truth', L.primary, C.muted, H.blue),

    // ═══ A# Violet (300°) — Major 3rd ═══
    interface: role('Symbol interface — violet, warm contract', L.vibrantWarm, C.comfortable, H.violet),
    namespace: role('Symbol namespace — violet, quiet scope', L.primary, C.muted, H.violet),

    // ═══ B Magenta (330°) — Perfect 4th ═══
    operator: role('Symbol operator — magenta, warm harmony', L.vibrantWarm, C.comfortable, H.magenta),
    snippet: role('Symbol snippet — magenta, quiet template', L.primary, C.muted, H.magenta),
  };
}

export function createBracketTokens(p: Primitives): BracketTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    bracket1: role('Warm opening — red arpeggio begins', L.accent, C.comfortable, H.red),
    bracket2: role('Cool contrast — blue deepens', L.accent, C.comfortable, H.blue),
    bracket3: role('Major 6th — gold, warm step', L.accent, C.comfortable, H.gold),
    bracket4: role('★ MIKU — teal at the heart of nesting', L.accent, C.comfortable, H.mikuTeal),
    bracket5: role('Deep continuation — azure, going further', L.accent, C.comfortable, H.azure),
    bracket6: role('Warm close — orange, the arpeggio resolves', L.accent, C.vibrant, H.orange),
  };
}

export function createSupportTokens(p: Primitives): SupportTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    function: role('Support function — orange glow, built-in action', L.vibrantWarm, C.vibrant, H.orange),
    class: role('Support class — gold, built-in structure', L.vibrant, C.vibrant, H.gold),
    type: role('Support type — blue depth, built-in architecture', L.primary + 0.008, C.comfortable, H.blue),
    constant: role('Support constant — orange, built-in truth', L.primaryWarm, C.comfortable, H.orange),
    variable: role('Support variable — cyan, built-in data', L.primary, C.comfortable, H.cyan),
  };
}

export function createMarkdownTokens(p: Primitives): MarkdownTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    codeBlock: role('Code in documents — bright cyan, her voice quoted', L.vibrant, C.vibrant, H.ice),
    quote: role('Block quotes — sky cyan, someone else\'s words', L.vibrant, C.vibrant, H.sky),
    docComment: role('Documentation — silver-cyan, the manual she\'d write', L.primary, C.comfortable, H.ice),
    alertImportant: role('Important — violet, pay attention', L.vibrantWarm, C.vibrant, H.violet),
    alertNote: role('Note — bright cyan, worth remembering', L.vibrant, C.vibrant, H.ice),
    alertTip: role('Tip — fresh green, helpful', L.vibrant, C.vibrant, H.green),
  };
}

export function createDebugTokens(p: Primitives): DebugTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    name: role('Debug name — soft magenta, the variable\'s identity', L.primaryWarm, C.comfortable, H.magenta),
    value: role('Debug value — gold, what it holds', L.vibrant, C.vibrant, H.gold),
    string: role('Debug string — gold, the text within', L.primary, C.comfortable, H.gold),
  };
}

/**
 * Create decorative tokens from palette colors.
 * Centralizes all direct palette references for thematic elements.
 */
export function createDecorativeTokens(): DecorativeTokens {
  return {
    // Indent guides — her voicebank evolution, 2007 to present
    // Each level of indentation is a chapter of her life
    indentGuides: [
      mikuV2.hair.base,        // V2 (2007) — KEI's original, where it all began
      mikuAppend.hair.base,    // Append (2010) — the dark era, vivid turquoise
      mikuV3.hair.base,        // V3 (2013) — iXima's refinement, canonical
      mikuV4X.hair.base,       // V4X (2016) — polished, variants possible
      mikuNT.hair.base,        // NT (2020) — organic redesign, soft turquoise
      character.hair.base,     // Present — #39C5BB, the Miku we know
    ],

    // SCM graph — Project SEKAI units, five visions of who she could be
    scmGraph: [
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
    diffInserted: moreMoreJump.unitColor,         // MORE MORE JUMP! bright green — idol energy, new code
    diffRemoved: sakuraMiku.hair.base, // Vivid sakura — cherry blossom hue at 2.2× chroma, lovely departure
    diffMoveBorder: digitalStars.y2021_mg.outfit.gradient,
    diffMoveActiveBorder: digitalStars.y2021_mg.outfit.gradient,

    // Terminal/SCM icons
    commitIcon: digitalStars.y2021.outfit.gradient,
    commentGlyph: wonderlandsShowtime.hair.highlight,
    multiCursorSecondary: leoNeed.hair.highlight,
    pullRequestIcon: leoNeed.hair.highlight,
    scmRemoteRef: leoNeed.hair.highlight,

    // Character palette utility colors
    darkForeground: character.eyes.pupil,
    inlayParameter: character.skin.shadow,
    statusItemForeground: character.headphones.frame,
    markupInserted: character.negi.bright,
    tattooMark: character.marks.tattoo,
    sekaiHair: virtualSinger.hair.base,

    // Character reference colors — her accessories and skin entering the UI
    // These appear in moments of interaction: scrolling, navigating, highlighting
    walletChain: character.skirt.accessory,
    tieShadow: character.tie.shadow,
    negiStalk: character.negi.stalk,
    skinBlush: character.skin.blush,
    skinBase: character.skin.base,

    // Snow Miku — icy cursor line frost
    cursorLineFrost: snowMiku.y2025.accessories.crystal, // 2025 Sparkling Snow ice prism #81D4FA

    // Boots — terminal lives inside her thigh-highs
    bootsBase: character.boots.base, // #14181D — deep near-black with blue tint
  };
}
