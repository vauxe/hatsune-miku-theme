/**
 * Snow Miku 2024 UI, Status, and Git Token Definitions — Winter Delicacy
 *
 * The painting, laid out as a window. Every surface is a painted cloth:
 *
 *   Void  — apron at full light (the page behind her)
 *   Stage — #FEEDDC, the apron's lit face (editor, terminal)
 *   House — #F1DBCB, the hair bow's cream (sidebar, tabs)
 *   Edge  — #EAB59A, the haori lit (activity bar, status bar, headers)
 *   Float — #E8CFBF, the apron frill in shadow (menus, overlays)
 *
 * One warm cloth, folded four times, edged in apricot. Borders and
 * text are one pen — the artwork draws its lines in chocolate, and so
 * does the screen: the visible border is the ink at a lighter stroke.
 *
 * Voices (five families, one per garment role):
 *   INK+LINE  chocolate (the skirt, the linework) → text, borders
 *   IDENTITY  coral bows (~43°)                   → cursor, focus, badge
 *   SELECTION haori apricot (~57°)                → the cloth over the apron
 *   ACCENT    sage celadon (~180°–190°)           → links, engagement
 */

import { role, roleFromHex, parseHex } from '../role';
import type { UITokens, StatusTokens, GitTokens } from '../types';
import type { Primitives } from '../primitives';

export function createUITokens(p: Primitives): UITokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  return {
    // =========================================================================
    // TEXT HIERARCHY — chocolate ink on cream (Hz ~42°)
    // =========================================================================
    foreground: roleFromHex(
      'Chocolate ink — the skirt as painted; the artwork\'s own linework',
      p.special.foreground
    ),
    foregroundMuted: role(
      'Muted — russet linework voice, deep enough to read on the apricot Edge',
      0.070, 0.006, H.sky
    ),
    foregroundSubtle: role(
      'Subtle — distant, barely there',
      0.130, 0.003, H.sky
    ),

    // =========================================================================
    // BACKGROUND TIERS — apron cream inside milky-sage hair
    // =========================================================================
    background: roleFromHex(
      'Stage — the apron\'s lit face, editor canvas (as painted)',
      char.skirt.base
    ),
    backgroundFloat: roleFromHex(
      'Float — the apron frill in shadow, laid over things (as painted)',
      char.top.shadow
    ),
    backgroundHouse: roleFromHex(
      'House — the hair bow\'s cream; the apron\'s frilled hem (as painted)',
      char.armWarmers.base
    ),
    backgroundVoid: roleFromHex(
      'Void — apron at full light, the page behind her (brightest)',
      p.special.void
    ),

    // =========================================================================
    // ACCENTS — sage celadon, the theme voice
    // =========================================================================
    accentPrimary: roleFromHex(
      'Sage accent — the hair shadow as painted, the theme voice',
      char.hair.base
    ),
    accentSecondary: roleFromHex(
      'Celadon dark — active/links, deep sage',
      char.hair.shadow
    ),
    accentTertiary: roleFromHex(
      'Accent deep — pressed/shadow, chest-ribbon chocolate',
      p.special.nearWhite
    ),

    // =========================================================================
    // BORDERS — the linework: the ink's pen at a lighter stroke
    // =========================================================================
    border: roleFromHex(
      'Cocoa line border — the same pen as the ink, one stroke lighter',
      char.tie.base
    ),
    borderSubtle: roleFromHex(
      'Cloth-fold border — a crease in the cream, barely drawn',
      char.tie.shadow
    ),

    // =========================================================================
    // SELECTION — haori apricot, the cloth over the apron
    // =========================================================================
    selection: roleFromHex(
      'Haori selection — the apricot fold laid over the apron (as painted)',
      p.special.frost
    ),

    // =========================================================================
    // CURSOR — coral bow
    // =========================================================================
    cursor: (() => {
      const cushion = parseHex(char.headphones.cushion);
      // Deep vivid coral — caret, focus, and badge bed (cream badge text
      // needs WCAG 4.5, which sets this depth)
      return role(
        'Coral cursor — the bow at Hz≈43°, deepened to mark where you type',
        cushion.Jz - 0.033, cushion.Cz + 0.015, cushion.hz
      );
    })(),

    // =========================================================================
    // LINKS — celadon dark (tonic ~185° Hz)
    // =========================================================================
    link: role(
      'Celadon link — deep clickable sage (reads on persimmon Float)',
      0.063, 0.075, 185
    ),
    linkActive: role(
      'Celadon link pressed — slightly deeper',
      0.057, 0.075, 185
    ),

    // =========================================================================
    // EXTENDED UI — text tiers, hints, special states
    // =========================================================================
    nearWhite: roleFromHex(
      'Chest-ribbon chocolate — text on accent surfaces',
      p.special.nearWhite
    ),
    tertiary: role(
      'Tertiary text — chocolate fading (deep enough for idle icons on the apricot Edge)',
      0.096, 0.008, 45
    ),
    disabled: role(
      'Disabled — light chocolate, deep enough for ignored files on the sage House',
      0.090, 0.006, 45
    ),
    disabledSubtle: role(
      'Very subtle disabled — ghost level, sienna voice',
      0.135, 0.003, H.sky
    ),
    ghostText: role(
      'Ghost text — sienna chrome voice, faint suggestion',
      0.135, 0.003, H.sky
    ),
    placeholder: role(
      'Placeholder — mid chocolate (compound floor on Float inputs)',
      0.098, 0.006, 45
    ),
    whitespace: role(
      'Whitespace markers — sienna structure seen through',
      0.135, 0.003, H.sky
    ),
    ruler: role(
      'Rulers — sienna vertical thread',
      0.135, 0.003, H.sky
    ),
    terminalHint: role(
      'Terminal hints — celadon nudge',
      L.mezzo, 0.032, H.mikuTeal
    ),
    terminalGuide: role(
      'Terminal guide — celadon path',
      L.alto, 0.028, H.mikuTeal
    ),
    deprecated: role(
      'Violet 300° — twilight plum, the shape dissolving',
      L.sopranino, C.mp, H.lavender
    ),
    minimapOpacity: `${char.top.blouse}DD`,
    errorForeground: role(
      'Error — collar vermilion ~42°, vivid alarm on cream',
      L.soprano, C.f, H.perfect5th
    ),

    // =========================================================================
    // INTERACTIVE ANCHORS — sage buttons (her voice acts), coral badges
    // =========================================================================
    buttonBackground: role(
      'Deep sage button — her hair shadow deepened for cream text; the remote chip inherits it',
      0.080, 0.050, 188
    ),
    badgeBackground: role(
      'Coral badge — deepened from the bow for notification',
      0.105, 0.095, 44
    ),
    activeBorder: roleFromHex(
      'Coral active — the bow marks focus (as painted)',
      char.headphones.cushion
    ),
  };
}

export function createStatusTokens(p: Primitives): StatusTokens {
  const { hue: H } = p;

  // =========================================================================
  // STATUS — gochisou-derived, CVD separation by depth where hues share warmth
  // =========================================================================
  // Success: matcha 150° — one seat above the sampled greens (deutan
  //          distance from turmeric warning)
  // Warning: turmeric 90° — the curry, golden caution
  // Error: collar vermilion ~42° — sampled hue kept; depth carries the
  //        deutan gap from warning and the split from salmon identity
  // Info: celadon 180° — her voice, calm
  // Jz/Cz are per-hue gamut-optimized — hardcoded, not from L/C registers.
  return {
    success: role('Matcha success — green tea over rice, fresh growth', 0.090, 0.115, 150),
    warning: role('Turmeric warning — the curry, dulled and deepened to read on the sage House', 0.071, 0.055, 90),
    error: role('Vermilion error — the collar, deepened (depth carries the deutan gap from warning)', 0.037, 0.135, H.perfect5th),
    info: role('Celadon info — her voice, calm and steady', 0.091, 0.110, H.mikuTeal),
  };
}

export function createGitTokens(p: Primitives): GitTokens {
  const { hue: H } = p;

  // =========================================================================
  // GIT — six-hue wheel, gochisou-derived
  // =========================================================================
  //   Added 150°     Matcha — she welcomes new growth
  //   Modified 90°   Turmeric — golden change (the curry)
  //   Deleted 300°   Violet — twilight departure
  //   Untracked 180° Celadon — her hair, steam drifting in
  //   Conflicting 0° Rose — demands resolution
  //   Renamed 270°   Blue — reorganized, same content
  // Jz/Cz are per-hue gamut-optimized — hardcoded, not from L/C registers.
  return {
    added: role('Matcha added — deep growth on cream (depth carries the protan gap from modified)',
      0.024, 0.130, 150),
    modified: role('Turmeric modified — warm golden change, deepened for the sage House',
      0.070, 0.085, 90),
    deleted: role('Violet deleted — twilight departure (deepened for tritan DJz vs modified)',
      0.050, 0.120, H.major3rd),
    untracked: role('Celadon untracked — her hair, drifting in (deepened for the sage House)',
      0.055, 0.085, H.mikuTeal),
    conflicting: role('Rose conflicting — demands resolution',
      0.058, 0.110, H.tritone),
    renamed: role('Blue renamed — reorganized, same content',
      0.072, 0.095, H.minor3rd),
    stageModified: role('Muted celadon staged — accepted change, quieted',
      0.062, 0.055, H.mikuTeal),
    stageDeleted: role('Winter-blue staged delete — cooled, accepted',
      0.061, 0.070, H.minor2nd),
    submodule: role('Muted winter-blue submodule — external reference, distant',
      0.064, 0.055, H.minor2nd),
    // Gutter marks are non-text: the label wheel above runs ink-dark for
    // the chrome, so the gutter keeps its own chromatic register
    gutterAdded: role('Matcha gutter mark — green means added, visibly',
      0.110, 0.120, 150),
    gutterModified: role('Turmeric gutter mark — gold means changed',
      0.115, 0.100, 90),
    gutterDeleted: role('Violet gutter mark — twilight means gone',
      0.115, 0.100, H.major3rd),
  };
}
