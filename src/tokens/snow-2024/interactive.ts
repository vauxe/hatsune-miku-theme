/**
 * Snow Miku 2024 Interactive State Token Definitions — Winter Delicacy
 *
 * Four voices:
 *
 * STRUCTURE    -- cocoa line (Hz~42°), the ink's pen at a lighter stroke. Where am I?
 * ENGAGEMENT   -- sage tonic, two registers:
 *                  TONIC = char.hair.base (the hair shadow as painted)
 *                          — her hair over the apron, translucent and alive
 *                  ACCENT BRIGHT = celadon dark (~185°), deep sage for fills
 *                          — the shadowed hair, readable buttons
 * SELECTION    -- haori apricot (~57° Hz), opacity tint. Persistent —
 *                  selected, cursor line. Warm where engagement is cool;
 *                  the two tints separate by temperature.
 * IDENTITY     -- coral bow (~43° Hz), solid border.
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
 * Borders use the cocoa line (tie.base/shadow, ~42° Hz) — the same
 * pen as the ink, one stroke lighter. Buttons speak in her voice and
 * darken into the hair's roots (the dark flagship's own move), warm
 * cream text riding them; the coral bows keep the pure attention
 * roles (cursor, focus, badge).
 */

import { withOpacity, hex, parseHex } from '../role';
import type { InteractiveTokens, UITokens } from '../types';
import type { Primitives } from '../primitives';

// =============================================================================
// INTERACTIVE TOKEN CREATION
// =============================================================================

export function createInteractiveTokens(
  p: Primitives,
  ui: UITokens,
): InteractiveTokens {
  const { character: char, opacity: op } = p;

  // =========================================================================
  // ENGAGEMENT -- sage tonic, two registers
  // =========================================================================
  // Tonic: engagement wash for opacity tints (same name as dark for consistency)
  const tonic = char.hair.base;
  // Accent bright: celadon dark for solid fills and buttons
  const accentBright = ui.accentSecondary.hex;
  // Accent deep: accent tertiary for active/pressed states
  const accentDeep = ui.accentTertiary.hex;

  // =========================================================================
  // STRUCTURE -- cocoa line borders (Hz ~42°)
  // =========================================================================
  const borderLine = char.tie.base;
  const borderQuiet = char.tie.shadow;

  // =========================================================================
  // SELECTION -- haori apricot (~57° Hz)
  // =========================================================================
  const frost = p.special.frost;

  // =========================================================================
  // IDENTITY -- coral bow, focus / keyboard target
  // =========================================================================
  const spotlight = char.headphones.cushion;

  // =========================================================================
  // PRIMARY BUTTON -- sage family, darkening into the hair's roots
  // =========================================================================
  const btn = parseHex(ui.buttonBackground.hex);
  const btnDefault = ui.buttonBackground.hex;
  const btnHover = hex({ Jz: btn.Jz - 0.012, Cz: btn.Cz + 0.005, hz: btn.hz });   // Deeper sage on hover
  const btnActive = hex({ Jz: btn.Jz - 0.022, Cz: btn.Cz + 0.010, hz: btn.hz });  // Root depth on press

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
    // METAL (secondary) -- solid hair-gradient fills; quiet when disabled
    // =========================================================================
    buttonSecondary: {
      background: {
        default: char.hair.bright,
        hover: char.hair.highlight,
        active: char.hair.base,
        focus: char.hair.bright,
        disabled: borderQuiet,
        selected: char.hair.highlight,
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
