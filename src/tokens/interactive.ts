/**
 * Interactive State Token Definitions — Her Presence
 *
 * Four voices:
 *
 * STRUCTURE  — skirt (hz≈249°), solid Jz steps. Where am I?
 * ENGAGEMENT — teal (#39C5BB), opacity tint. Transient — hover, active.
 * SELECTION  — frost (#81D4FA), opacity tint. Persistent — selected, cursor line.
 * IDENTITY   — magenta (#E05096), solid border. Focus — keyboard target.
 *
 * Five materials:
 *
 * Fabric       — opacity tint over surface (lists, menus, trees)
 * Metal        — solid register swap (primary buttons, badges)
 * Glass        — static fill, border articulation (inputs, search)
 * Architecture — tier assignment (tabs, activity bar)
 * Air          — opacity tint, fill only (scrollbars, sliders)
 *
 * Same vocabulary, different grammar.
 */

import { withOpacity } from './role';
import { opacity as op } from './primitives';
import type { InteractiveTokens, UITokens, ExtendedUITokens } from './types';
import type { Primitives } from './primitives';
import { snowMiku } from '../palette';

// =============================================================================
// INTERACTIVE TOKEN CREATION
// =============================================================================

export function createInteractiveTokens(
  p: Primitives,
  ui: UITokens & ExtendedUITokens,
): InteractiveTokens {
  const { character: char, opacity: op } = p;

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT — transient interaction (teal dark / sleeve amber light)
  // ═══════════════════════════════════════════════════════════════════════════
  const tonic = p.polarity === 'light' ? char.tie.base : char.hair.base;
  const roots = p.polarity === 'light' ? char.tie.shadow : char.hair.shadow;
  const tieShadow = char.tie.shadow;
  const accentBright = ui.accentSecondary.hex;

  // ═══════════════════════════════════════════════════════════════════════════
  // SELECTION — Snow Miku frost, persistent state
  // ═══════════════════════════════════════════════════════════════════════════
  const frost = snowMiku.y2025.accessories.crystal;

  // ═══════════════════════════════════════════════════════════════════════════
  // IDENTITY — cushion color, focus / keyboard target
  // ═══════════════════════════════════════════════════════════════════════════
  const spotlight = char.headphones.cushion;

  // UI-derived foregrounds and backgrounds
  const foreground = ui.foreground.hex;
  const foregroundTeal = p.polarity === 'light' ? roots : accentBright;
  const foregroundMuted = ui.foregroundMuted.hex;
  const foregroundTertiary = ui.tertiary.hex;
  const foregroundDisabled = ui.disabled.hex;
  const background = ui.background.hex;
  const backgroundHouse = ui.backgroundHouse.hex;

  return {
    // =========================================================================
    // FABRIC — lists, menus, trees, suggest, notebook cells
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
        active: tonic,
        focus: spotlight,
        disabled: p.special.transparent,
        selected: tieShadow,
      },
    },

    // =========================================================================
    // METAL (primary) — solid register swap
    // =========================================================================
    button: {
      background: {
        default: ui.buttonBackground.hex,
        hover: tonic,
        active: accentBright,
        focus: tonic,
        disabled: roots,
        selected: tonic,
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
        default: tieShadow,
        hover: tonic,
        active: accentBright,
        focus: spotlight,
        disabled: roots,
        selected: tonic,
      },
    },

    // =========================================================================
    // METAL (secondary) — tint bg + solid borders
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
        hover: accentBright,
        active: foreground,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: roots,
        hover: tieShadow,
        active: tonic,
        focus: spotlight,
        disabled: roots,
        selected: tieShadow,
      },
    },

    // =========================================================================
    // GLASS — static fill, border articulation
    // =========================================================================
    input: {
      background: {
        default: backgroundHouse,
        hover: backgroundHouse,
        active: backgroundHouse,
        focus: backgroundHouse,
        disabled: backgroundHouse,
        selected: backgroundHouse,
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
        default: roots,
        hover: tieShadow,
        active: tonic,
        focus: spotlight,
        disabled: roots,
        selected: tieShadow,
      },
    },

    // =========================================================================
    // ARCHITECTURE — tier assignment (solid tiers, not tints)
    // =========================================================================
    tab: {
      background: {
        default: backgroundHouse,
        hover: withOpacity(tonic, op.medium),
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
        selected: tieShadow,
      },
    },

    // =========================================================================
    // FABRIC (minimal) — toolbar icons, activity bar items
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
    // TOGGLE — checkboxes, radio buttons, input options
    // =========================================================================
    toggle: {
      background: {
        default: background,
        hover: withOpacity(tonic, op.strong),
        active: tonic,
        focus: background,
        disabled: withOpacity(backgroundHouse, op.solid),
        selected: p.polarity === 'light'
          ? withOpacity(tonic, op.heavy)
          : (ui.buttonBackground.hex),
      },
      foreground: {
        default: foregroundMuted,
        hover: foreground,
        active: p.polarity === 'light' ? foreground : char.top.blouse,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: accentBright,
      },
      border: {
        default: withOpacity(tonic, op.heavy),
        hover: tieShadow,
        active: accentBright,
        focus: spotlight,
        disabled: roots,
        selected: tonic,
      },
    },

    // =========================================================================
    // AIR — scrollbars, minimap sliders, sashes
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
