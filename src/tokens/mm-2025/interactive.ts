/**
 * MM2025 Interactive State Token Definitions — the night answers touch
 *
 * Four voices (docs/DESIGN-MM-2025.md §7):
 *
 * STRUCTURE  — silver hardware (~258°), solid border. Where am I?
 * ENGAGEMENT — star-mist (~249°), opacity tint. Transient — the floor
 *              ripples where you touch it.
 * SELECTION  — denim veil (#4984E8), opacity tint. Persistent — the
 *              jacket thrown over the sky.
 * IDENTITY   — the First Star (~325°), solid border. Focus.
 *
 * The three tint voices separate by material, not temperature: mist is
 * airy (low chroma, lifted), denim is cloth (chromatic cobalt), and the
 * First Star is the only warm thing that can surround a control.
 *
 * Five materials: Fabric (mist tints over rows), Metal (cyan action
 * solids with night ink), Glass (Stage-fill inputs cut through the
 * floor), Architecture (tabs open windows into the sky), Air (mist
 * scrollbars — a drift of haze, denser while held).
 */

import { withOpacity } from '../role';
import type { InteractiveTokens, UITokens } from '../types';
import type { Primitives } from '../primitives';

export function createInteractiveTokens(
  p: Primitives,
  ui: UITokens,
): InteractiveTokens {
  const { character: char, opacity: op } = p;

  // ENGAGEMENT — star-mist: the water floor answers touch
  const mist = ui.foregroundMuted.hex;
  // The Current — cyan action solids
  const current = char.hair.base;
  const currentBright = ui.accentSecondary.hex;
  const currentShadow = char.hair.shadow;
  // SELECTION — the denim veil, persistent
  const denim = p.special.frost;
  // STRUCTURE — silver hardware borders
  const hardware = char.tie.base;
  const hardwareQuiet = char.tie.shadow;
  const hardwareLit = char.hairTies.outline;
  // IDENTITY — the First Star
  const spotlight = char.headphones.cushion;
  // Night ink on bright action chips
  const nightInk = char.top.blouse;

  const foreground = ui.foreground.hex;
  const foregroundMuted = ui.foregroundMuted.hex;
  const foregroundTertiary = ui.tertiary.hex;
  const foregroundDisabled = ui.disabled.hex;
  const background = ui.background.hex;
  const backgroundHouse = ui.backgroundHouse.hex;

  return {
    // =========================================================================
    // FABRIC — lists, menus, trees: transparent at rest, mist ripple on
    // hover, denim veil selected, the First Star only as a focus border
    // =========================================================================
    list: {
      background: {
        default: p.special.transparent,
        hover: withOpacity(mist, op.medium),
        active: withOpacity(mist, op.strong),
        focus: withOpacity(mist, op.light),
        disabled: p.special.transparent,
        selected: withOpacity(denim, op.strong),
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
        active: hardware,
        focus: spotlight,
        disabled: p.special.transparent,
        selected: hardwareQuiet,
      },
    },

    // =========================================================================
    // METAL (primary) — stage light: the action cyan as a solid,
    // deepening toward the pressed register; night ink for text
    // =========================================================================
    button: {
      background: {
        default: ui.buttonBackground.hex,
        hover: current,
        active: currentBright,
        focus: current,
        disabled: currentShadow,
        selected: current,
      },
      foreground: {
        default: nightInk,
        hover: nightInk,
        active: nightInk,
        focus: nightInk,
        disabled: foregroundMuted,
        selected: nightInk,
      },
      border: {
        default: hardwareQuiet,
        hover: current,
        active: currentBright,
        focus: spotlight,
        disabled: currentShadow,
        selected: current,
      },
    },

    // =========================================================================
    // METAL (secondary) — denim cloth: tint fill + hardware borders
    // =========================================================================
    buttonSecondary: {
      background: {
        default: withOpacity(denim, op.strong),
        hover: withOpacity(denim, op.heavy),
        active: withOpacity(denim, op.solid),
        focus: withOpacity(denim, op.heavy),
        disabled: withOpacity(denim, op.medium),
        selected: withOpacity(denim, op.heavy),
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
        default: hardware,
        hover: hardwareLit,
        active: current,
        focus: spotlight,
        disabled: hardwareQuiet,
        selected: hardwareLit,
      },
    },

    // =========================================================================
    // GLASS — inputs drop to Stage: a cut through the floor back into
    // the sky. Hardware borders; the First Star takes focus.
    // =========================================================================
    input: {
      background: {
        default: background,
        hover: background,
        active: background,
        focus: background,
        disabled: backgroundHouse,
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
        default: hardware,
        hover: hardwareLit,
        active: current,
        focus: spotlight,
        disabled: hardwareQuiet,
        selected: hardwareLit,
      },
    },

    // =========================================================================
    // ARCHITECTURE — the active tab drops to Stage: a window opened
    // into the night. Inactive tabs recede into the House floor.
    // =========================================================================
    tab: {
      background: {
        default: backgroundHouse,
        hover: withOpacity(mist, op.medium),
        active: background,
        focus: p.special.transparent,
        disabled: backgroundHouse,
        selected: backgroundHouse,
      },
      foreground: {
        default: foregroundTertiary,
        hover: foreground,
        active: currentBright,
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
        selected: hardwareQuiet,
      },
    },

    // =========================================================================
    // FABRIC (minimal) — toolbar icons, activity bar items
    // =========================================================================
    toolbar: {
      background: {
        default: p.special.transparent,
        hover: withOpacity(mist, op.medium),
        active: withOpacity(mist, op.strong),
        focus: p.special.transparent,
        disabled: p.special.transparent,
        selected: withOpacity(denim, op.strong),
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
    // TOGGLE — checked states answer in the Current
    // =========================================================================
    toggle: {
      background: {
        default: background,
        hover: withOpacity(mist, op.strong),
        active: current,
        focus: background,
        disabled: withOpacity(backgroundHouse, op.solid),
        selected: ui.buttonBackground.hex,
      },
      foreground: {
        default: foregroundMuted,
        hover: foreground,
        active: nightInk,
        focus: foreground,
        disabled: foregroundDisabled,
        selected: currentBright,
      },
      border: {
        default: withOpacity(mist, op.heavy),
        hover: hardwareLit,
        active: currentBright,
        focus: spotlight,
        disabled: hardwareQuiet,
        selected: current,
      },
    },

    // =========================================================================
    // AIR — scrollbars ride star-mist: a drift of haze, denser while held
    // =========================================================================
    slider: {
      background: {
        rest: withOpacity(mist, op.strong),
        hover: withOpacity(mist, op.heavy),
        active: withOpacity(mist, op.solid),
      },
    },
  };
}
