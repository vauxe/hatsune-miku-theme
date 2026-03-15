/**
 * Dark Decorative Token Definitions
 *
 * The hidden love letters in the theme. Indent guides trace her voicebank
 * evolution (V2 -> NT). SCM graph uses Project SEKAI unit colors. Chart colors
 * come from Magical Mirai concerts. These details are invisible unless you
 * look for them -- which is exactly right. She's keeping you company.
 */

import { role, roleFromHex, lighten } from '../role';
import { hex, parseHex } from '../role';
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
  snowMiku,
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from '../../palette';

export function createSymbolTokens(p: Primitives): SymbolTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // 24 icons on the 12-tone grid, aligned with syntax counterpart hues.
  // Same-hue pairs distinguished by tier (Jz) and dynamic (Cz), DEz >= 12.
  return {
    // === C# Red (30) -- Perfect 5th ===
    property: role('Symbol property -- red, vivid warmth', L.sopranino, C.f, H.perfect5th),
    field: role('Symbol field -- red, dark', L.alto, C.mp, H.perfect5th),

    // === D Orange (60) -- Minor 6th ===
    function: role('Symbol function -- orange spotlight', L.sopranino, C.f, H.minor6th),

    // === D Orange (60) -- Minor 6th ===
    // method dropped to mezzo for DEz >= 15 vs function(sopranino) and property(sopranino)
    method: role('Symbol method -- orange, callable action', L.mezzo, C.p, H.minor6th),
    constructor: role('Symbol constructor -- orange, mezzo for DEz gap vs function/method', L.mezzo, C.f, H.minor6th),

    // === D# Gold (90) -- Major 6th ===
    // 4 icons on one hue need 2+ register gaps for DEz >= 15 between all pairs
    class: role('Symbol class -- gold, the score', L.treble, C.mf, H.major6th),
    struct: role('Symbol struct -- gold architecture', L.mezzo, C.f, H.major6th),
    enum: role('Symbol enum -- gold, countertenor set', L.countertenor, C.mf, H.major6th),
    package: role('Symbol package -- warm gold, bass', L.bass, C.mp, H.major6th),

    // === E Lime (120) -- Minor 7th ===
    string: role('Symbol string -- lime, literal truth', L.soprano, C.mf, H.minor7th),
    reference: role('Symbol reference -- warm lime, sopranino', L.sopranino, C.mp, H.minor7th),

    // === F Green (150) -- Major 7th ===
    interface: role('Symbol interface -- green, abstract contract', L.sopranino, C.mp, H.major7th),

    // === F# Teal (180) -- Unison ===
    folder: role('Symbol folder -- teal, her home', L.soprano, C.f, H.mikuTeal),
    // countertenor for 3 Jz gap from variable(soprano) -> DEz >= 15
    array: role('Symbol array -- teal, countertenor', L.countertenor, C.mp, H.mikuTeal),

    // === G Cyan (210) -- Minor 2nd ===
    variable: role('Symbol variable -- cyan, vivid data', L.soprano, C.f, H.minor2nd),

    // === G# Azure (240) -- Major 2nd ===
    constant: role('Symbol constant -- azure, deep truth', L.mezzo, C.mp, H.major2nd),
    number: role('Symbol number -- azure, vivid quantity', L.soprano, C.f, H.major2nd),
    boolean: role('Symbol boolean -- azure, sopranino truth', L.sopranino, C.mp, H.major2nd),
    // countertenor for 2 Jz gap from constant(mezzo) -> DEz >= 15
    enumMember: role('Symbol enum member -- azure, countertenor', L.countertenor, C.mf, H.major2nd),

    // === A Blue (270) -- Minor 3rd ===
    typeParameter: role('Symbol type param -- blue, standard', L.soprano, C.mp, H.minor3rd),
    module: role('Symbol module -- blue, sopranino container', L.sopranino, C.mp, H.minor3rd),
    namespace: role('Symbol namespace -- blue, mezzo scope', L.mezzo, C.mp, H.minor3rd),

    // === B Magenta (330) -- Perfect 4th ===
    operator: role('Symbol operator -- magenta, sopranino harmony', L.sopranino, C.mp, H.perfect4th),
    snippet: role('Symbol snippet -- magenta, quiet template', L.soprano, C.p, H.perfect4th),
  };
}

export function createBracketTokens(p: Primitives): BracketTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    bracket1: role('Warm opening -- red arpeggio begins', L.soprano, C.mp, H.perfect5th),
    bracket2: role('Cool contrast -- blue deepens', L.soprano, C.mp, H.minor3rd),
    bracket3: role('Major 6th -- gold, warm step', L.soprano, C.mp, H.major6th),
    bracket4: role('MIKU -- teal at the heart of nesting', L.soprano, C.mp, H.mikuTeal),
    bracket5: role('Cool continuation -- magenta, going further', L.soprano, C.mp, H.perfect4th),
    bracket6: role('Warm close -- lime, the arpeggio resolves', L.soprano, C.mp, H.minor7th),
  };
}

export function createSupportTokens(p: Primitives): SupportTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    function: role('Support function -- orange glow, built-in action', L.soprano, C.mf, H.minor6th),
    class: role('Support class -- gold, built-in structure', L.soprano, C.mf, H.major6th),
    type: role('Support type -- blue depth, built-in architecture', L.soprano, C.mp, H.minor3rd),
    constant: role('Support constant -- azure, built-in truth', L.soprano, C.mp, H.major2nd),
    variable: role('Support variable -- cyan, built-in data', L.soprano, C.mp, H.minor2nd),
  };
}

export function createMarkdownTokens(p: Primitives): MarkdownTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    heading: role('Heading -- orange spotlight, darkened for bold compensation', L.soprano - 0.004, C.mf, H.minor6th),
    codeBlock: role('Code in documents -- bright cyan, her voice quoted', L.soprano, C.mf, H.ice),
    quote: role('Block quotes -- sky cyan, someone else\'s words', L.soprano, C.mp, H.sky),
    linkUrl: role('Link URL -- blue, the address beneath', L.soprano, C.mp, H.minor3rd),
    headingPunctuation: role('Heading punctuation -- orange, structural marker', L.soprano, C.mp, H.minor6th),
    alertImportant: role('Important -- violet, pay attention', L.soprano, C.mf, H.major3rd),
    alertNote: role('Note -- bright cyan, worth remembering', L.soprano, C.mf, H.ice),
    alertTip: role('Tip -- fresh green, helpful', L.soprano, C.mf, H.major7th),
    alertWarning: role('Warning -- orange, caution ahead', L.soprano, C.mf, H.minor6th),
    alertCaution: role('Caution -- rose, danger', L.soprano, C.mf, H.tritone),
    inserted: role('Markup inserted -- lime, someone\'s truth added', L.soprano, C.mp, H.minor7th),
    deleted: role('Markup deleted -- rose, departure', L.soprano, C.mf, H.tritone),
  };
}

export function createDebugTokens(p: Primitives): DebugTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    name: role('Debug name -- soft magenta, the variable\'s identity', L.soprano, C.mp, H.perfect4th),
    value: role('Debug value -- gold, what it holds', L.soprano, C.mf, H.major6th),
    string: role('Debug string -- lime, the text within', L.soprano, C.mp, H.minor7th),
    number: role('Debug number -- azure, numeric quantity', L.soprano, C.mf, H.major2nd),
    boolean: role('Debug boolean -- azure, binary truth', L.soprano, C.mp, H.major2nd),
    error: role('Debug error -- rose, something went wrong', L.soprano, C.mf, H.tritone),
    type: role('Debug type -- blue, the shape beneath', L.soprano, C.mp, H.minor3rd),
  };
}

/**
 * Create decorative tokens from palette colors.
 * Centralizes all direct palette references for thematic elements.
 */
export function createDecorativeTokens(p: Primitives): DecorativeTokens {
  return {
    // Indent guides -- her voicebank evolution, 2007 to present
    // Each level of indentation is a chapter of her life
    indentGuides: (() => {
      // Structure voice: skirt hue, ppp chroma, Jz stepping through voicebank evolution
      // 6 consecutive registers -- contrabass through alto
      const { lightness: L, chroma: C } = p;
      const skirtHz = parseHex(p.character.skirt.base).hz;
      return [
        hex({ Jz: L.contrabass,    Cz: C.ppp, hz: skirtHz }),  // V2 (2007) -- dimmest
        hex({ Jz: L.bass,          Cz: C.ppp, hz: skirtHz }),  // Append (2010)
        hex({ Jz: L.baritone,      Cz: C.ppp, hz: skirtHz }),  // V3 (2013)
        hex({ Jz: L.tenor,         Cz: C.ppp, hz: skirtHz }),  // V4X (2016)
        hex({ Jz: L.countertenor,  Cz: C.ppp, hz: skirtHz }),  // NT (2020)
        hex({ Jz: L.alto,          Cz: C.ppp, hz: skirtHz }),  // Present -- brightest
      ];
    })(),

    // SCM graph -- Project SEKAI units, five visions of who she could be
    scmGraph: [
      virtualSinger.imageColor,        // Virtual Singer -- the default Miku
      lighten(roleFromHex('LEO/NEED brightened', leoNeed.unitColor), 0.08),  // LEO/NEED -- royal blue, brightened for dark bg
      moreMoreJump.unitColor,          // MORE MORE JUMP! -- bright green, idol energy
      vividBadSquad.unitColor,         // VIVID BAD SQUAD -- vivid pink, street soul
      wonderlandsShowtime.unitColor,   // Wonderlands x Showtime -- orange, circus wonder
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

    // Diff editor -- background-optimized tints (independent of git foreground)
    // Inserted: negi green 150 -- same hue as git.added
    // Removed: warm rose 10 -- reads as intuitive red-ish "removed",
    //   blends to ~346 on dark bg (near-complementary to inserted ~179)
    diffInserted: hex({ Jz: 0.190, Cz: 0.065, hz: 150 }),
    diffRemoved: hex({ Jz: 0.174, Cz: 0.080, hz: 10 }),
    diffMoveBorder: digitalStars.y2021_mg.outfit.gradient,
    diffMoveActiveBorder: digitalStars.y2021_mg.outfit.gradient,

    // Terminal/SCM icons
    commitIcon: digitalStars.y2021.outfit.gradient,
    commentGlyph: wonderlandsShowtime.hair.highlight,
    multiCursorSecondary: leoNeed.hair.highlight,
    pullRequestIcon: leoNeed.hair.highlight,
    scmRemoteRef: leoNeed.hair.highlight,

    // Character palette utility colors — variant-aware where CharacterColors has the field
    blouseWhite: p.character.top.blouse,
    darkForeground: p.character.eyes.pupil,
    inlayParameter: p.character.skin.shadow,
    statusItemForeground: p.character.headphones.frame,
    markupInserted: p.character.negi.bright,
    tattooMark: p.character.marks.tattoo,
    sekaiHair: virtualSinger.hair.base,

    // Character reference colors -- her accessories and skin entering the UI
    // These appear in moments of interaction: scrolling, navigating, highlighting
    walletChain: p.character.skirt.accessory,
    tieShadow: p.character.tie.shadow,
    negiStalk: p.character.negi.stalk,
    skinBlush: p.character.skin.blush,
    skinBase: p.character.skin.base,

    // Snow Miku -- icy cursor line frost
    cursorLineFrost: snowMiku.y2025.accessories.crystal, // 2025 Sparkling Snow ice prism #81D4FA

    // Boots -- terminal lives inside her thigh-highs
    bootsBase: p.character.boots.base,
    armWarmersBase: p.character.armWarmers.base,
    topMain: p.character.top.main,
    topShadow: p.character.top.shadow,

    // Status bar state colors — not used in dark theme, passthrough
    eyeIris: p.character.eyes.iris,
    cape: p.character.hair.shadow,  // Dark theme uses hair shadow for remote
  };
}
