/**
 * Decorative Token Definitions
 *
 * The hidden love letters in the theme. Indent guides trace her voicebank
 * evolution (V2 → NT). SCM graph uses Project SEKAI unit colors. Chart colors
 * come from Magical Mirai concerts. These details are invisible unless you
 * look for them — which is exactly right. She's keeping you company.
 */

import { role } from './role';
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
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from '../palette';

export function createSymbolTokens(p: Primitives): SymbolTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    // Red-orange range (0-60deg) — widened spacing, ΔL for distinction
    property: role('Symbol property - vivid red', L.vibrantWarm, C.vivid, 0),
    typeParameter: role('Symbol type parameter - coral', L.primaryWarm, C.comfortable, 22),
    field: role('Symbol field - peach (ΔL+chroma from key)', L.secondary, C.comfortable, 40),
    // Orange-yellow range (60-120deg) — function at vibrant for key distinction
    function: role('Symbol function - vivid gold', L.primaryWarm, C.vivid, 75),
    package: role('Symbol package - lime-gold', L.primaryWarm, C.comfortable, 90),
    reference: role('Symbol reference - yellow-lime', L.primaryWarm, C.comfortable, 105),
    enumeratorMember: role('Symbol enum member - green', L.primary, C.comfortable, 120),
    // Green range (120-180deg)
    struct: role('Symbol struct - mint', L.primary, C.comfortable, 145),
    constructor: role('Symbol constructor - teal-mint', L.primary, C.comfortable, 162),
    folder: role('Symbol folder - teal', L.vibrant, C.vibrant, 178),
    // Cyan range (180-240deg) — widen array↔object gap via ΔL
    array: role('Symbol array - teal-cyan (ΔL from object)', L.vibrant, C.vibrant, 195),
    operator: role('Symbol operator - cyan', L.primary, C.comfortable, 212),
    number: role('Symbol number - sky-blue (ΔL from boolean)', L.vibrant, C.vibrant, 228),
    interface: role('Symbol interface - indigo', L.primary, C.comfortable, 265),
    // Blue-violet range (240-300deg) — boolean uses chroma gap from number
    boolean: role('Symbol boolean - blue', L.primary, C.comfortable, 248),
    namespace: role('Symbol namespace - lavender', L.primary, C.comfortable, 282),
    method: role('Symbol method - violet (ΔL from property)', L.secondary, C.comfortable, 298),
    enumerator: role('Symbol enumerator - orchid', L.primary, C.comfortable, 312),
    // Magenta-pink range (300-360deg) — constant shifted away from unit/color
    snippet: role('Symbol snippet - magenta', L.primary, C.comfortable, 325),
    string: role('Symbol string - lime-green', L.primary, C.comfortable, 115),
    constant: role('Symbol constant - warm rose (ΔL from unit)', L.secondary, C.comfortable, 350),
    // Special icons (vibrant)
    variable: role('Symbol variable - sky-blue (ΔL from object)', L.vibrant, C.vivid, 230),
    module: role('Symbol module - blue', L.primary, C.comfortable, 242),
  };
}

export function createBracketTokens(p: Primitives): BracketTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    bracket1: role('Warm opening — coral arpeggio begins', L.accent, C.comfortable, H.coral),
    bracket2: role('Cool contrast — violet deepens', L.accent, C.comfortable, H.violet),
    bracket3: role('Fresh step — lime, new growth', L.accent, C.comfortable, H.lime),
    bracket4: role('★ MIKU — teal at the heart of nesting', L.accent, C.comfortable, H.mikuTeal),
    bracket5: role('Deep continuation — blue, going further', L.accent, C.comfortable, H.blue),
    bracket6: role('Warm close — gold, the arpeggio resolves', L.accent, C.vibrant, H.gold),
  };
}

export function createSupportTokens(p: Primitives): SupportTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    function: role('Support function — concert gold, built-in action', L.vibrantWarm, C.vibrant, H.gold),
    class: role('Support class — negi lime, built-in structure', L.vibrant, C.vibrant, H.lime),
    type: role('Support type — violet duality, built-in architecture', L.primary + 0.008, C.comfortable, H.violet),
    constant: role('Support constant — gold, built-in truth', L.primaryWarm, C.comfortable, H.gold),
    variable: role('Support variable — cyan, built-in data', L.primary, C.comfortable, H.cyan),
  };
}

export function createMarkdownTokens(p: Primitives): MarkdownTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    codeBlock: role('Code in documents — bright cyan, her voice quoted', L.vibrant, C.vibrant, H.ice),
    quote: role('Block quotes — sky cyan, someone else\'s words', L.vibrant, C.vibrant, H.sky),
    docComment: role('Documentation — silver-cyan, the manual she\'d write', L.primary, C.comfortable, H.ice),
    alertImportant: role('Important — magenta, pay attention', L.vibrantWarm, C.vibrant, H.magenta),
    alertNote: role('Note — bright cyan, worth remembering', L.vibrant, C.vibrant, H.ice),
    alertTip: role('Tip — fresh mint, helpful', L.vibrant, C.vibrant, H.mint),
  };
}

export function createDebugTokens(p: Primitives): DebugTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    name: role('Debug name — soft rose, the variable\'s identity', L.primaryWarm, C.comfortable, H.rose),
    value: role('Debug value — lime green, what it holds', L.vibrant, C.vibrant, H.lime),
    string: role('Debug string — lime, the text within', L.primary, C.comfortable, H.lime + 5),
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
      leoNeed.unitColor,               // LEO/NEED — royal blue, rock band dreams
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

    // Diff editor
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
  };
}
