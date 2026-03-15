/**
 * Light Interactive State Token Definitions — Snow Miku 2026
 *
 * Four voices:
 *
 * STRUCTURE    -- cool chrome (Hz~235), solid Jz steps. Where am I?
 * ENGAGEMENT   -- tonic cyan (~210°), two registers:
 *                  WASH  = char.hair.base (tonic engagement wash)
 *                          — breath on warm glass, translucent and alive
 *                  SOLID = accent dark (~215°), deep tonic for fills
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
 * Wash (tonic through opacity) gives translucent warmth on cream.
 * Solid fills use accent dark for Lc >= 60 white text.
 */

import { withOpacity } from '../role';
import { hex } from '../jzczhz';
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
  // Wash: tonic engagement wash for opacity tints
  const wash = char.hair.base;
  // Solid: accent dark for fills and buttons
  const solid = ui.accentSecondary.hex;
  // Deeper: accent tertiary for active/pressed states
  const deeper = ui.accentTertiary.hex;

  // =========================================================================
  // STRUCTURE -- cool borders (Hz ~235°)
  // =========================================================================
  const borderLine = char.tie.base;
  const borderQuiet = char.tie.shadow;

  // =========================================================================
  // SELECTION -- ice at ~235° Hz
  // =========================================================================
  const frost = hex({ Jz: 0.128, Cz: 0.045, hz: 235 });

  // =========================================================================
  // IDENTITY -- coral-pink, focus / keyboard target (her necktie)
  // =========================================================================
  const spotlight = char.headphones.cushion;

  // =========================================================================
  // PRIMARY BUTTON -- coral-pink necktie, three states
  // =========================================================================
  const btnDefault = ui.buttonBackground.hex;
  const btnHover = hex({ Jz: 0.105, Cz: 0.080, hz: 27 });   // Darker pastel pink
  const btnActive = hex({ Jz: 0.095, Cz: 0.085, hz: 27 });  // Deepest pastel pink

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
        hover: withOpacity(wash, op.strong),
        active: withOpacity(wash, op.heavy),
        focus: withOpacity(wash, op.light),
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
        active: solid,
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
        default: withOpacity(wash, op.strong),
        hover: withOpacity(wash, op.heavy),
        active: withOpacity(wash, op.solid),
        focus: withOpacity(wash, op.heavy),
        disabled: withOpacity(wash, op.medium),
        selected: withOpacity(wash, op.heavy),
      },
      foreground: {
        default: foreground,
        hover: deeper,
        active: foreground,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: borderLine,
        hover: borderLine,
        active: solid,
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
        active: solid,
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
        hover: withOpacity(wash, op.strong),
        active: background,
        focus: p.special.transparent,
        disabled: backgroundHouse,
        selected: backgroundHouse,
      },
      foreground: {
        default: foregroundTertiary,
        hover: foreground,
        active: solid,
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
        hover: withOpacity(wash, op.strong),
        active: withOpacity(wash, op.heavy),
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
        hover: withOpacity(wash, op.strong),
        active: solid,
        focus: background,
        disabled: withOpacity(backgroundHouse, op.solid),
        selected: withOpacity(wash, op.heavy),
      },
      foreground: {
        default: foregroundMuted,
        hover: foreground,
        active: foreground,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: deeper,
      },
      border: {
        default: withOpacity(wash, op.heavy),
        hover: borderLine,
        active: deeper,
        focus: spotlight,
        disabled: borderQuiet,
        selected: solid,
      },
    },

    // =========================================================================
    // AIR -- scrollbars, minimap sliders, sashes
    // =========================================================================
    slider: {
      background: {
        rest: withOpacity(wash, op.strong),
        hover: withOpacity(wash, op.heavy),
        active: withOpacity(wash, op.solid),
      },
    },
  };
}
