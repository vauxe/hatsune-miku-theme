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

import { role, roleFromHex } from '../role';
import type { UITokens, ExtendedUITokens, StatusTokens, GitTokens } from '../types';
import type { Primitives } from '../primitives';

export function createUITokens(p: Primitives): UITokens & ExtendedUITokens {
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
      'Muted chocolate — cool chrome voice, quiet accompaniment',
      0.118, 0.006, 235
    ),
    foregroundSubtle: role(
      'Subtle — distant, barely there, Lc ~48',
      0.135, 0.003, 235
    ),

    // =========================================================================
    // BACKGROUND TIERS — warm cream + cool blue
    // =========================================================================
    background: role(
      'Stage — warm cream, the editor canvas (her dress)',
      0.204, 0.012, 85
    ),
    backgroundFloat: role(
      'Float — deeper cool blue (menus, overlays, the awning)',
      0.186, 0.020, 235
    ),
    backgroundHouse: role(
      'House — cool blue, sidebar and chrome (the shopfront)',
      0.192, 0.016, 235
    ),
    backgroundVoid: role(
      'Void — warm ivory, the morning light (brightest)',
      0.210, 0.008, 85
    ),

    // =========================================================================
    // ACCENTS — tonic cyan, the theme voice
    // =========================================================================
    accentPrimary: role(
      'Tonic accent — her hair, the theme voice',
      0.128, 0.045, 210
    ),
    accentSecondary: role(
      'Accent dark — active/links, deep tonic',
      0.088, 0.070, 215
    ),
    accentTertiary: role(
      'Accent deep — pressed/shadow, dark chocolate',
      0.025, 0.015, 40
    ),

    // =========================================================================
    // BORDERS — cool structure (Hz 235°)
    // =========================================================================
    border: role(
      'Cool border — shopfront structure, holds form',
      0.128, 0.020, 235
    ),
    borderSubtle: role(
      'Subtle cool border — faint structural line',
      0.158, 0.012, 235
    ),

    // =========================================================================
    // SELECTION — ice at 235° Hz
    // =========================================================================
    selection: role(
      'Ice selection — cool blue, chosen text crystallizes',
      0.088, 0.070, 215
    ),

    // =========================================================================
    // CURSOR — coral-pink (her necktie)
    // =========================================================================
    cursor: role(
      'Pastel pink cursor — sampled necktie Hz≈27°, where she points you type',
      0.130, 0.070, 27
    ),

    // =========================================================================
    // LINKS — accent dark (tonic ~215° Hz)
    // =========================================================================
    link: role(
      'Tonic link — vivid clickable cyan',
      0.098, 0.090, 215
    ),
    linkActive: role(
      'Tonic link pressed — slightly deeper',
      0.088, 0.090, 215
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
      0.135, 0.003, 235
    ),
    ghostText: role(
      'Ghost text — cool chrome voice, faint suggestion, Lc ~48',
      0.135, 0.003, 235
    ),
    placeholder: role(
      'Placeholder — light chocolate, Lc ~50',
      0.133, 0.006, 40
    ),
    whitespace: role(
      'Whitespace markers — cool structure seen through, Lc ~48',
      0.135, 0.003, 235
    ),
    ruler: role(
      'Rulers — cool vertical thread, Lc ~48',
      0.135, 0.003, 235
    ),
    terminalHint: role(
      'Terminal hints — tonic nudge, Lc 50+',
      L.mezzo, 0.032, H.mikuTeal
    ),
    terminalGuide: role(
      'Terminal guide — tonic path, Lc 45+',
      L.alto, 0.028, H.mikuTeal
    ),
    operator: role(
      'Rose 0° — strawberry glaze, connecting everything',
      L.soprano, C.mp, H.rose
    ),
    deprecated: role(
      'Violet 300° — twilight, the shape dissolving',
      L.soprano, C.mp, H.lavender
    ),
    minimapOpacity: `${char.top.blouse}DD`,
    error: role(
      'Error — warm red 30°, vivid alarm on cream',
      L.soprano, C.f, H.red
    ),

    // =========================================================================
    // INTERACTIVE ANCHORS — accent dark buttons, cool badges
    // =========================================================================
    buttonBackground: role(
      'Necktie ribbon — sampled Hz≈27° pastel pink, darkened for contrast',
      0.115, 0.075, 27
    ),
    badgeBackground: role(
      'Necktie ribbon badge — sampled pastel pink, darker for notification',
      0.108, 0.078, 27
    ),
    activeBorder: roleFromHex(
      'Coral-pink active — necktie marks focus',
      char.headphones.cushion
    ),
  };
}

export function createStatusTokens(_p: Primitives): StatusTokens {
  // =========================================================================
  // STATUS — patisserie-derived, four-quadrant for CVD safety
  // =========================================================================
  // Success: mint 180° — canonical Miku approves
  // Warning: gingerbread 70° — golden-brown caution
  // Error: rose 0° — strawberry alarm
  // Info: tonic 210° — her voice, calm and informational
  return {
    success: role('Mint success — canonical Miku approves, fresh growth', 0.090, 0.110, 180),
    warning: role('Gingerbread warning — golden-brown caution (Cz 0.124 for findMatch)', 0.095, 0.124, 70),
    error: role('Red error — vivid strawberry alarm', 0.088, 0.120, 30),
    info: role('Tonic info — her voice, calm and steady', 0.090, 0.100, 210),
  };
}

export function createGitTokens(_p: Primitives): GitTokens {
  // =========================================================================
  // GIT — six-hue wheel, patisserie-derived
  // =========================================================================
  //   Added 180°     Mint — she welcomes new growth
  //   Modified 70°   Gingerbread — golden-brown change
  //   Deleted 300°   Violet — twilight departure (big shift from old rose)
  //   Untracked 210° Tonic — her hair, snowflakes drifting in
  //   Conflicting 0° Rose — demands resolution
  //   Renamed 270°   Blue — reorganized, same content
  return {
    added: role('Mint added — vivid growth on cream',
      0.090, 0.120, 180),
    modified: role('Gingerbread modified — warm golden change',
      0.095, 0.120, 70),
    deleted: role('Violet deleted — twilight departure',
      0.085, 0.120, 300),
    untracked: role('Tonic untracked — her hair, drifting in',
      0.088, 0.110, 210),
    conflicting: role('Rose conflicting — demands resolution',
      0.088, 0.120, 0),
    renamed: role('Blue renamed — reorganized, same content',
      0.080, 0.100, 270),
    stageModified: role('Muted tonic staged — accepted change, quieted',
      0.100, 0.065, 210),
    stageDeleted: role('Azure staged delete — cooled, accepted',
      0.088, 0.080, 235),
    submodule: role('Muted azure submodule — external reference, distant',
      0.095, 0.060, 235),
  };
}
