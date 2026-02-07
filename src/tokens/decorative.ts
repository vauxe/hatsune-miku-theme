/**
 * Decorative Token Definitions
 *
 * Includes symbol icons, bracket colors, support tokens, markdown, debug,
 * and palette-derived decorative colors (indent guides, SCM graph, charts).
 *
 * The decorative tokens centralize all direct palette references that were
 * previously scattered in workbench.ts, keeping theme files palette-free.
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
    // Red-orange range (0-60deg)
    property: role('Symbol property - pure red', L.vibrantWarm, C.vibrant, 0),
    typeParameter: role('Symbol type parameter - coral', L.primaryWarm, C.comfortable, 20),
    field: role('Symbol field - peach', L.primaryWarm, C.comfortable, 40),
    // Orange-yellow range (60-120deg)
    function: role('Symbol function - amber', L.primaryWarm, C.comfortable, 60),
    package: role('Symbol package - gold', L.primaryWarm, C.comfortable, 80),
    reference: role('Symbol reference - yellow-lime', L.primaryWarm, C.comfortable, 100),
    enumeratorMember: role('Symbol enum member - lime', L.primary, C.comfortable, 120),
    // Green range (120-180deg)
    struct: role('Symbol struct - mint', L.primary, C.comfortable, 145),
    constructor: role('Symbol constructor - teal-mint', L.primary, C.comfortable, 158),
    folder: role('Symbol folder - teal', L.vibrant, C.vibrant, 172),
    // Cyan range (180-240deg)
    array: role('Symbol array - Miku teal', L.primary, C.comfortable, H.mikuTeal),
    operator: role('Symbol operator - cyan', L.primary, C.comfortable, 205),
    number: role('Symbol number - sky', L.primary, C.comfortable, 220),
    interface: role('Symbol interface - indigo', L.primary, C.comfortable, 265),
    // Blue-violet range (240-300deg)
    boolean: role('Symbol boolean - indigo', L.primary, C.comfortable, 260),
    namespace: role('Symbol namespace - lavender', L.primary, C.comfortable, 275),
    method: role('Symbol method - violet', L.primary, C.comfortable, 290),
    enumerator: role('Symbol enumerator - orchid', L.primary, C.comfortable, 305),
    // Magenta-pink range (300-360deg)
    snippet: role('Symbol snippet - magenta', L.primary, C.comfortable, 310),
    string: role('Symbol string - lime-green', L.primary, C.comfortable, 115),
    constant: role('Symbol constant - rose', L.primaryWarm, C.comfortable, 340),
    // Special icons (vibrant)
    variable: role('Symbol variable - sky-blue', L.vibrant, C.vibrant, 228),
    module: role('Symbol module - blue', L.primary, C.comfortable, 240),
  };
}

export function createBracketTokens(p: Primitives): BracketTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    bracket1: role('Bracket 1 - peach', L.accent, C.comfortable, H.peach),
    bracket2: role('Bracket 2 - lavender', L.accent, C.comfortable, H.lavender),
    bracket3: role('Bracket 3 - lime', L.accent, C.comfortable, H.lime),
    bracket4: role('Bracket 4 - teal', L.accent, C.comfortable, H.mikuTeal),
    bracket5: role('Bracket 5 - sky', L.accent, C.comfortable, H.sky),
    bracket6: role('Bracket 6 - gold', L.accent, C.comfortable, H.gold),
  };
}

export function createSupportTokens(p: Primitives): SupportTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    function: role('Support function - vibrant gold', L.vibrant, C.vibrant, H.gold),
    class: role('Support class - negi lime', L.vibrant, C.vibrant, H.lime),
    type: role('Support type - orchid', L.primary, C.comfortable, H.orchid),
    constant: role('Support constant - amber', L.primaryWarm, C.comfortable, H.amber),
    variable: role('Support variable - sky', L.primary, C.comfortable, H.sky),
  };
}

export function createMarkdownTokens(p: Primitives): MarkdownTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    codeBlock: role('Markdown code - bright cyan', L.vibrant, C.vibrant, H.ice),
    quote: role('Block quotes - sky cyan', L.vibrant, C.vibrant, H.sky),
    docComment: role('Doc comments - silver-cyan', L.primary, C.comfortable, H.ice),
    alertImportant: role('Alert important - magenta', L.vibrantWarm, C.vibrant, H.magenta),
    alertNote: role('Alert note - bright cyan', L.vibrant, C.vibrant, H.ice),
    alertTip: role('Alert tip - bright mint', L.vibrant, C.vibrant, H.mint),
  };
}

export function createDebugTokens(p: Primitives): DebugTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    name: role('Debug name - soft rose', L.primaryWarm, C.comfortable, H.rose),
    value: role('Debug value - lime green', L.vibrant, C.vibrant, H.lime),
    string: role('Debug string - lime', L.primary, C.comfortable, H.lime + 5),
  };
}

/**
 * Create decorative tokens from palette colors.
 * Centralizes all direct palette references for thematic elements.
 */
export function createDecorativeTokens(): DecorativeTokens {
  return {
    // Indent guides - Miku's voicebank evolution (2007-present)
    indentGuides: [
      mikuV2.hair.base,        // V2 (2007) - Original
      mikuAppend.hair.base,    // Append (2010) - Dark era
      mikuV3.hair.base,        // V3 (2013) - Refined
      mikuV4X.hair.base,       // V4X (2016) - Variants
      mikuNT.hair.base,        // NT (2020) - Organic
      character.hair.base,     // Present - Canonical
    ],

    // SCM graph - Project SEKAI unit colors
    scmGraph: [
      virtualSinger.imageColor,        // Virtual Singer - main branch
      leoNeed.unitColor,               // LEO/NEED - royal blue
      moreMoreJump.unitColor,          // MORE MORE JUMP! - bright green
      vividBadSquad.unitColor,         // VIVID BAD SQUAD - vivid pink
      wonderlandsShowtime.unitColor,   // Wonderlands x Showtime - orange
    ],

    // Charts - Magical Mirai concert evolution
    charts: {
      red: magicalMirai.y2014.accessories.ribbonWire,    // 2014 hot pink
      blue: magicalMirai.y2013.outfit.dress,             // 2013 royal blue
      yellow: magicalMirai.y2013.accessories.wandGold,   // Concert gold
      orange: wonderlandsShowtime.unitColor,              // Stage orange
      green: magicalMirai.y2013.accessories.wandOrb,     // 2013 emerald
      purple: nightcord.unitColor,                        // Nightcord purple
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
