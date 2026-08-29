/**
 * Light UI, Status, and Git Token Definitions — Snow Miku 2026
 *
 * The Patisserie — you are inside it with her.
 *
 * Backgrounds split warm and cool, crossing hue boundaries:
 *   Void  — warm ivory (Hz 85°, brightest, the morning light)
 *   Stage — warm cream (Hz 85°, the editor canvas, her dress)
 *   House — cool blue (Hz 235°, sidebar/tabs, the shopfront glass)
 *   Float — deeper cool (Hz 235°, menus/overlays, the awning shadow)
 *
 * This warm/cool spatial split IS the theme identity. Content lives
 * in the warm bakery; structure frames it in cool shopfront blue.
 *
 * Two color temperatures, two roles:
 *   WARM (cream/chocolate) → canvas, text, content
 *   COOL (tonic/azure)     → accents, links, buttons, chrome
 *
 * Cursor and focus ring are coral-pink — her necktie.
 * Where she wears the necktie, you type.
 */

import { role, roleFromHex, parseHex } from '../role';
import type { UITokens, StatusTokens, GitTokens } from '../types';
import type { Primitives } from '../primitives';

export function createUITokens(p: Primitives): UITokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  // =========================================================================
  // BACKGROUND TIERS — warm/cool spatial split
  // =========================================================================
  // No derivation from a single anchor — tiers cross hue boundaries.
  // Warm cream for content, cool blue for structure.

  return {
    // =========================================================================
    // TEXT HIERARCHY — chocolate ink on cream (Hz ~40°)
    // =========================================================================
    foreground: roleFromHex(
      'Chocolate ink — warm dark brown, handwritten menu, Lc ~82',
      p.special.foreground
    ),
    foregroundMuted: role(
      'Muted — cool chrome voice, quiet accompaniment, Lc ~60',
      0.098, 0.006, H.sky
    ),
    foregroundSubtle: role(
      'Subtle — distant, barely there, Lc ~48',
      0.130, 0.003, H.sky
    ),

    // =========================================================================
    // BACKGROUND TIERS — warm cream + cool blue
    // =========================================================================
    background: roleFromHex(
      'Stage — warm cream, the editor canvas (her dress)',
      char.skirt.base
    ),
    backgroundFloat: roleFromHex(
      'Float — deeper cool blue (menus, overlays, the awning)',
      char.top.shadow
    ),
    backgroundHouse: roleFromHex(
      'House — cool blue, sidebar and chrome (the shopfront)',
      char.top.main
    ),
    backgroundVoid: roleFromHex(
      'Void — warm ivory, the morning light (brightest)',
      p.special.void
    ),

    // =========================================================================
    // ACCENTS — tonic cyan, the theme voice
    // =========================================================================
    accentPrimary: roleFromHex(
      'Tonic accent — her hair, the theme voice',
      char.hair.base
    ),
    accentSecondary: roleFromHex(
      'Accent dark — active/links, deep tonic',
      char.hair.shadow
    ),
    accentTertiary: roleFromHex(
      'Accent deep — pressed/shadow, dark chocolate',
      p.special.nearWhite
    ),

    // =========================================================================
    // BORDERS — cool structure (Hz 235°)
    // =========================================================================
    border: roleFromHex(
      'Cool border — shopfront structure, holds form',
      char.tie.base
    ),
    borderSubtle: roleFromHex(
      'Subtle cool border — faint structural line',
      char.tie.shadow
    ),

    // =========================================================================
    // SELECTION — ice at 235° Hz
    // =========================================================================
    selection: roleFromHex(
      'Ice selection — cool blue at ~235° Hz, chosen text crystallizes',
      p.special.frost
    ),

    // =========================================================================
    // CURSOR — coral-pink (her necktie)
    // =========================================================================
    cursor: (() => {
      const cushion = parseHex(char.headphones.cushion);
      // Chroma carries the caret floor (Lc >= 45) — vivid, a touch darker
      return role(
        'Candy pink cursor — sampled necktie Hz≈27°, where she points you type',
        cushion.Jz - 0.007, cushion.Cz + 0.035, cushion.hz
      );
    })(),

    // =========================================================================
    // LINKS — accent dark (tonic ~215° Hz)
    // =========================================================================
    link: role(
      'Tonic link — vivid clickable cyan',
      0.076, 0.090, 215
    ),
    linkActive: role(
      'Tonic link pressed — slightly deeper',
      0.068, 0.090, 215
    ),

    // =========================================================================
    // EXTENDED UI — text tiers, hints, special states
    // =========================================================================
    nearWhite: roleFromHex(
      'Deep chocolate — text on accent surfaces (Lc >= 90)',
      p.special.nearWhite
    ),
    tertiary: role(
      'Tertiary text — chocolate fading, Lc ~45',
      0.108, 0.008, 40
    ),
    disabled: role(
      'Disabled — light chocolate, Lc ~32',
      0.133, 0.005, 40
    ),
    disabledSubtle: role(
      'Very subtle disabled — ghost level, Lc ~48',
      0.135, 0.003, H.sky
    ),
    ghostText: role(
      'Ghost text — cool chrome voice, faint suggestion, Lc ~48',
      0.135, 0.003, H.sky
    ),
    placeholder: role(
      'Placeholder — light chocolate, Lc ~50',
      0.133, 0.006, 40
    ),
    whitespace: role(
      'Whitespace markers — cool structure seen through, Lc ~48',
      0.135, 0.003, H.sky
    ),
    ruler: role(
      'Rulers — cool vertical thread, Lc ~48',
      0.135, 0.003, H.sky
    ),
    terminalHint: role(
      'Terminal hints — tonic nudge, Lc 50+',
      L.mezzo, 0.032, H.mikuTeal
    ),
    terminalGuide: role(
      'Terminal guide — tonic path, Lc 45+',
      L.alto, 0.028, H.mikuTeal
    ),
    deprecated: role(
      'Violet 300° — twilight, the shape dissolving',
      L.sopranino, C.mp, H.lavender
    ),
    minimapOpacity: `${char.top.blouse}DD`,
    errorForeground: role(
      'Error — warm red 30°, vivid alarm on cream',
      L.soprano, C.f, H.perfect5th
    ),

    // =========================================================================
    // INTERACTIVE ANCHORS — accent dark buttons, cool badges
    // =========================================================================
    buttonBackground: (() => {
      const cushion = parseHex(char.headphones.cushion);
      return role(
        'Pastel pink button — matches badge/cursor for visual unity',
        cushion.Jz, cushion.Cz + 0.010, cushion.hz
      );
    })(),
    badgeBackground: (() => {
      const cushion = parseHex(char.headphones.cushion);
      return role(
        'Necktie ribbon badge — darkened from pastel pink for notification',
        cushion.Jz - 0.040, cushion.Cz + 0.015, cushion.hz
      );
    })(),
    activeBorder: roleFromHex(
      'Coral-pink active — necktie marks focus',
      char.headphones.cushion
    ),
  };
}

export function createStatusTokens(p: Primitives): StatusTokens {
  const { hue: H } = p;

  // =========================================================================
  // STATUS — patisserie-derived, four-quadrant for CVD safety
  // =========================================================================
  // Success: mint 180° — canonical Miku approves
  // Warning: gingerbread 70° — golden-brown caution (off-grid for CVD)
  // Error: rose 30° — strawberry alarm
  // Info: tonic 210° — her voice, calm and informational
  // Jz/Cz are per-hue gamut-optimized — hardcoded, not from L/C registers.
  return {
    success: role('Mint success — canonical Miku approves, fresh growth', 0.090, 0.115, 180),
    warning: role('Gingerbread warning — golden-brown caution', 0.105, 0.140, 70),
    error: role('Red error — deep strawberry alarm (depth carries the deutan gap from warning)', 0.080, 0.140, H.perfect5th),
    info: role('Tonic info — her voice, calm and steady', 0.095, 0.110, H.mikuTeal),
  };
}

export function createGitTokens(p: Primitives): GitTokens {
  const { hue: H } = p;

  // =========================================================================
  // GIT — six-hue wheel, patisserie-derived
  // =========================================================================
  //   Added 180°     Mint — she welcomes new growth
  //   Modified 70°   Gingerbread — golden-brown change (off-grid for CVD)
  //   Deleted 300°   Violet — twilight departure
  //   Untracked 210° Tonic — her hair, snowflakes drifting in
  //   Conflicting 0° Rose — demands resolution
  //   Renamed 270°   Blue — reorganized, same content
  // Jz/Cz are per-hue gamut-optimized — hardcoded, not from L/C registers.
  const added = role('Mint added — vivid growth on cream',
    0.076, 0.120, 180);
  const modified = role('Gingerbread modified — warm golden change',
    0.095, 0.120, 70);
  const deleted = role('Violet deleted — twilight departure',
    0.085, 0.120, H.minor3rd);

  return {
    added,
    modified,
    deleted,
    // Gutter marks share the label pigments — already chromatic on cream
    gutterAdded: added,
    gutterModified: modified,
    gutterDeleted: deleted,
    untracked: role('Tonic untracked — her hair, drifting in',
      0.088, 0.110, H.mikuTeal),
    conflicting: role('Rose conflicting — demands resolution',
      0.088, 0.120, H.tritone),
    renamed: role('Blue renamed — reorganized, same content',
      0.080, 0.100, H.major2nd),
    stageModified: role('Muted tonic staged — accepted change, quieted',
      0.078, 0.065, H.mikuTeal),
    stageDeleted: role('Azure staged delete — cooled, accepted',
      0.072, 0.080, H.sky),
    submodule: role('Muted azure submodule — external reference, distant',
      0.080, 0.060, H.sky),
  };
}
