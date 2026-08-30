/**
 * MM2025 UI, Status, and Git Token Definitions
 *
 * The painting's own elevation model: the sky is darkest at the zenith
 * and brightens toward the horizon. On screen the editor is the deepest
 * surface (the zenith), the frame floor sits one step lit (it reflects
 * the sky), veils float above, and the denim Edge is worn in narrow
 * strips. Every tier keeps the sky's hue discipline (~250–263°).
 *
 * Status is the identity's own signal set: site crimson, star gold,
 * iris cerulean, and the festival's bamboo.
 */

import { role, roleFromHex } from '../role';
import type { UITokens, StatusTokens, GitTokens } from '../types';
import type { Primitives } from '../primitives';

export function createUITokens(p: Primitives): UITokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  return {
    // --- Starlight ladder — text descends through the sky's own mists ---
    foreground: roleFromHex(
      'Starlight — the sock white with the horizon\'s lavender cast',
      p.special.foreground
    ),
    foregroundMuted: role(
      'Star-mist — the Milky Way lifted a breath for Float duty',
      0.178, 0.036, H.sky
    ),
    foregroundSubtle: role(
      'Star-mist, deeper — tertiary text, fainter light (never ash)',
      L.countertenor, C.pp, H.sky
    ),

    // --- The tiers — one night, five distances into it ---
    background: roleFromHex(
      'Stage — the deep sky at the site\'s working depth (zenith, 257°)',
      char.skirt.base
    ),
    backgroundFloat: role(
      'Float — tulle over the night: menus, hovers, the palette',
      0.064, 0.078, 259
    ),
    backgroundHouse: roleFromHex(
      'House — the water-mirror floor, one step lit (it reflects the sky)',
      char.armWarmers.base
    ),
    backgroundVoid: roleFromHex(
      'Void — the site\'s page night; the zenith between galaxies',
      p.special.void
    ),

    // --- The Current — cyan acts (site grammar) ---
    accentPrimary: roleFromHex('The Current — the site\'s own interactive cyan', char.hair.base),
    accentSecondary: role(
      'The Current, lifted — link register brightened for label duty',
      0.187, 0.062, H.minor2nd
    ),
    accentTertiary: roleFromHex('Ice — the hair tips, muted accent', char.hair.tip),

    // --- Hardware — the costume\'s silverwork draws the lines ---
    border: roleFromHex('Hardware — silver-periwinkle control borders (metal, not cloth)', char.tie.base),
    borderSubtle: role(
      'Star-mist seam — the Milky Way as divider, luminous not ink',
      0.100, C.pp, H.sky
    ),

    // --- The denim veil and the First Star ---
    selection: roleFromHex('Denim veil — the jacket thrown over the sky', p.special.frost),
    cursor: role(
      'The shooting star — the one saturated warm spark, moving',
      0.185, 0.072, H.mikuPink
    ),
    link: roleFromHex('The Current — links speak the river\'s voice', char.hair.highlight),
    linkActive: roleFromHex('The Current, fully lit — active links', char.hair.bright),

    // --- Extended tiers ---
    nearWhite: roleFromHex(
      'Flare core — the brightest starlight, emphasis ceiling',
      p.special.nearWhite
    ),
    tertiary: role(
      'Star-mist floor — quiet labels (lifted to read on the denim Edge)',
      0.163, 0.030, H.sky
    ),
    disabled: role(
      'Disabled — the mist at its floor, still on the sky\'s arc',
      0.163, 0.026, H.sky
    ),
    disabledSubtle: role(
      'Barely-there mist',
      0.105, 0.020, H.sky
    ),
    ghostText: role(
      'Ghost text — a suggestion drifting in the haze',
      L.alto - 0.005, 0.026, H.sky
    ),
    placeholder: role(
      'Placeholder — star-dust at the threshold (non-text Lc 30+)',
      L.countertenor, 0.022, H.sky
    ),
    whitespace: role(
      'Star-dust — rendered whitespace at the threshold of visibility',
      0.130, 0.018, H.sky
    ),
    ruler: role(
      'Star-mist seam — the column where the sky folds',
      0.128, 0.020, H.sky
    ),
    terminalHint: role(
      'The current\'s nudge in the terminal',
      L.alto, C.pp, H.minor2nd
    ),
    terminalGuide: role(
      'The current\'s guide path, subtle',
      L.countertenor + 0.005, 0.028, H.minor2nd
    ),
    deprecated: role(
      'Coral, dimmed — a faded alert, lifted to the primary floor',
      0.200, 0.040, H.perfect5th
    ),
    minimapOpacity: `${p.special.void}DD`,
    errorForeground: role(
      'Crimson-coral — error text bright enough for every veil',
      0.201, 0.068, 27
    ),
    buttonBackground: role(
      'Stage light — the action cyan as a solid (night ink text)',
      0.153, 0.070, H.minor2nd
    ),
    badgeBackground: role(
      'The First Star — badges are candy pinned on the chrome',
      0.150, 0.085, 330
    ),
    activeBorder: roleFromHex('The First Star — focus and active borders', char.headphones.cushion),
  };
}

export function createStatusTokens(p: Primitives): StatusTokens {
  const { hue: H } = p;

  // The identity's own signal set. CVD geometry: error(23)↔warning(92)
  // separated by hue + Jz stagger (deutan); info(240) and success(120)
  // sit 120° apart. Gates assert ΔEz ≥ 12 under Brettel.
  return {
    success: role('Bamboo — the branch the wishes hang on', 0.190, 0.062, H.minor7th),
    warning: role('Star gold — the glint, seated below error for the deutan gap', 0.180, 0.075, H.major6th),
    error: role('Site crimson — the identity\'s own alarm, lifted for chrome duty', 0.194, 0.080, 24),
    info: role('Iris cerulean — her gaze, calm', 0.184, 0.055, H.major2nd),
  };
}

export function createGitTokens(p: Primitives): GitTokens {
  const { hue: H } = p;

  // Six-hue wheel: 23 / 92 / 120 / 183 / 261 / 330 — the signal set plus
  // the festival green, mascot mint and site periwinkle. All values
  // gate-derived: Jz stagger carries the CVD geometry (protan
  // added↔modified, tritan modified↔deleted) and every label clears
  // Lc ≥ 60 on the House floor.
  const added = role('Bamboo — new wishes tied to the branch',
    0.196, 0.060, H.minor7th);
  const modified = role('Star gold — the change glints',
    0.180, 0.075, H.major6th);
  const deleted = role('Site crimson — silence where code once lived',
    0.194, 0.080, H.tritone);

  return {
    added,
    modified,
    deleted,
    // Gutter marks share the label pigments — already chromatic on night
    gutterAdded: added,
    gutterModified: modified,
    gutterDeleted: deleted,
    untracked: role('Mascot mint — unknown files drifting in',
      0.178, 0.048, H.mikuTeal),
    conflicting: role('Candy magenta — the spark demands resolution',
      0.170, 0.072, 330),
    renamed: role('Site periwinkle — same light, new name',
      0.176, 0.085, 261),
    stageModified: role('Star gold, faded — accepted change',
      0.174, 0.030, H.major6th),
    stageDeleted: role('Candy, faded — accepted loss',
      0.176, 0.032, 330),
    submodule: role('Silver chain — structure, external reference',
      0.178, 0.020, 262),
  };
}
