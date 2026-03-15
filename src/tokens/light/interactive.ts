/**
 * Light Interactive State Token Definitions — Snow Miku 2026
 *
 * Four voices:
 *
 * STRUCTURE    -- cool chrome (Hz~235), solid Jz steps. Where am I?
 * ENGAGEMENT   -- tonic cyan (~210°), two registers:
 *                  TONIC = char.hair.base (tonic engagement wash)
 *                          — breath on warm glass, translucent and alive
 *                  ACCENT BRIGHT = accent dark (~215°), deep tonic for fills
 *                          — the ocean beneath the shimmer, readable buttons
 * SELECTION    -- ice at ~235° Hz, opacity tint. Persistent — selected, cursor line.
 * IDENTITY     -- coral-pink (~27° Hz, her necktie), solid border.
 *                  Focus — keyboard target.
 *
 * Five materials:
 *
 * Fabric       -- opacity tint over surface (lists, menus, trees)
 * Metal        -- solid register swap (primary buttons, badges)
 * Glass        -- static fill, border articulation (inputs, search)
 * Architecture -- tier assignment (tabs, activity bar)
 * Air          -- opacity tint, fill only (scrollbars, sliders)
 *
 * Borders use cool structure (tie.base/shadow at ~235° Hz).
 * Tonic (through opacity) gives translucent warmth on cream.
 * Accent bright fills use accent dark for Lc >= 60 white text.
 */

import { withOpacity } from '../role';
import { hex, parseHex } from '../jzczhz';
import type { InteractiveTokens, UITokens, ExtendedUITokens } from '../types';
import type { Primitives } from '../primitives';

// =============================================================================
// INTERACTIVE TOKEN CREATION
// =============================================================================

export function createInteractiveTokens(
  p: Primitives,
  ui: UITokens & ExtendedUITokens,
): InteractiveTokens {
  const { character: char, opacity: op } = p;

  // =========================================================================
  // ENGAGEMENT -- tonic cyan, two registers
  // =========================================================================
  // Tonic: engagement wash for opacity tints (same name as dark for consistency)
  const tonic = char.hair.base;
  // Accent bright: accent dark for solid fills and buttons
  const accentBright = ui.accentSecondary.hex;
  // Accent deep: accent tertiary for active/pressed states
  const accentDeep = ui.accentTertiary.hex;

  // =========================================================================
  // STRUCTURE -- cool borders (Hz ~235°)
  // =========================================================================
  const borderLine = char.tie.base;
  const borderQuiet = char.tie.shadow;

  // =========================================================================
  // SELECTION -- ice at ~235° Hz
  // =========================================================================
  const frost = p.special.frost;

  // =========================================================================
  // IDENTITY -- coral-pink, focus / keyboard target (her necktie)
  // =========================================================================
  const spotlight = char.headphones.cushion;

  // =========================================================================
  // PRIMARY BUTTON -- coral-pink necktie, three states
  // =========================================================================
  const cushion = parseHex(char.headphones.cushion);
  const btnDefault = ui.buttonBackground.hex;
  const btnHover = hex({ Jz: cushion.Jz + 0.025, Cz: cushion.Cz + 0.010, hz: cushion.hz });   // Darker pastel pink
  const btnActive = hex({ Jz: cushion.Jz + 0.015, Cz: cushion.Cz + 0.015, hz: cushion.hz });  // Deepest pastel pink

  // UI-derived foregrounds and backgrounds
  const foreground = ui.foreground.hex;
  const foregroundMuted = ui.foregroundMuted.hex;
  const foregroundTertiary = ui.tertiary.hex;
  const foregroundDisabled = ui.disabled.hex;
  const background = ui.background.hex;
  const backgroundHouse = ui.backgroundHouse.hex;

  return {
    // =========================================================================
    // FABRIC -- lists, menus, trees, suggest, notebook cells
    // =========================================================================
    list: {
      background: {
        default: p.special.transparent,
        hover: withOpacity(tonic, op.strong),
        active: withOpacity(tonic, op.heavy),
        focus: withOpacity(tonic, op.light),
        disabled: p.special.transparent,
        selected: withOpacity(frost, op.strong),
      },
      foreground: {
        default: foreground,
        hover: foreground,
        active: foreground,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: p.special.transparent,
        hover: p.special.transparent,
        active: accentBright,
        focus: spotlight,
        disabled: p.special.transparent,
        selected: borderLine,
      },
    },

    // =========================================================================
    // METAL (primary) -- solid register swap, prominent buttons
    // =========================================================================
    button: {
      background: {
        default: btnDefault,
        hover: btnHover,
        active: btnActive,
        focus: btnDefault,
        disabled: borderQuiet,
        selected: btnHover,
      },
      foreground: {
        default: char.top.blouse,
        hover: char.top.blouse,
        active: char.top.blouse,
        focus: char.top.blouse,
        disabled: foregroundMuted,
        selected: char.top.blouse,
      },
      border: {
        default: btnDefault,
        hover: btnHover,
        active: btnActive,
        focus: spotlight,
        disabled: borderQuiet,
        selected: btnHover,
      },
    },

    // =========================================================================
    // METAL (secondary) -- wash bg + cool borders
    // =========================================================================
    buttonSecondary: {
      background: {
        default: withOpacity(tonic, op.strong),
        hover: withOpacity(tonic, op.heavy),
        active: withOpacity(tonic, op.solid),
        focus: withOpacity(tonic, op.heavy),
        disabled: withOpacity(tonic, op.medium),
        selected: withOpacity(tonic, op.heavy),
      },
      foreground: {
        default: foreground,
        hover: accentDeep,
        active: foreground,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: borderLine,
        hover: borderLine,
        active: accentBright,
        focus: spotlight,
        disabled: borderQuiet,
        selected: borderLine,
      },
    },

    // =========================================================================
    // GLASS -- static fill, border articulation (inputs, search boxes)
    // =========================================================================
    input: {
      background: {
        default: background,
        hover: background,
        active: background,
        focus: background,
        disabled: background,
        selected: background,
      },
      foreground: {
        default: foreground,
        hover: foreground,
        active: foreground,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: borderQuiet,
        hover: borderLine,
        active: accentBright,
        focus: spotlight,
        disabled: borderQuiet,
        selected: borderLine,
      },
    },

    // =========================================================================
    // ARCHITECTURE -- tier assignment (tabs, solid tiers, not tints)
    // =========================================================================
    tab: {
      background: {
        default: backgroundHouse,
        hover: withOpacity(tonic, op.strong),
        active: background,
        focus: p.special.transparent,
        disabled: backgroundHouse,
        selected: backgroundHouse,
      },
      foreground: {
        default: foregroundTertiary,
        hover: foreground,
        active: accentBright,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: backgroundHouse,
        hover: p.special.transparent,
        active: spotlight,
        focus: spotlight,
        disabled: backgroundHouse,
        selected: borderLine,
      },
    },

    // =========================================================================
    // FABRIC (minimal) -- toolbar icons, activity bar items
    // =========================================================================
    toolbar: {
      background: {
        default: p.special.transparent,
        hover: withOpacity(tonic, op.strong),
        active: withOpacity(tonic, op.heavy),
        focus: p.special.transparent,
        disabled: p.special.transparent,
        selected: withOpacity(frost, op.strong),
      },
      foreground: {
        default: foregroundMuted,
        hover: foreground,
        active: foreground,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: p.special.transparent,
        hover: p.special.transparent,
        active: p.special.transparent,
        focus: spotlight,
        disabled: p.special.transparent,
        selected: p.special.transparent,
      },
    },

    // =========================================================================
    // TOGGLE -- checkboxes, radio buttons, input options
    // =========================================================================
    toggle: {
      background: {
        default: background,
        hover: withOpacity(tonic, op.strong),
        active: accentBright,
        focus: background,
        disabled: withOpacity(backgroundHouse, op.solid),
        selected: withOpacity(tonic, op.heavy),
      },
      foreground: {
        default: foregroundMuted,
        hover: foreground,
        active: foreground,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: accentDeep,
      },
      border: {
        default: withOpacity(tonic, op.heavy),
        hover: borderLine,
        active: accentDeep,
        focus: spotlight,
        disabled: borderQuiet,
        selected: accentBright,
      },
    },

    // =========================================================================
    // AIR -- scrollbars, minimap sliders, sashes
    // =========================================================================
    slider: {
      background: {
        rest: withOpacity(tonic, op.strong),
        hover: withOpacity(tonic, op.heavy),
        active: withOpacity(tonic, op.solid),
      },
    },
  };
}
