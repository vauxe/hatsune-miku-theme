/**
 * Interactive State Token Definitions
 *
 * Defines state-based color tokens for interactive UI components
 * (list, button, input, tab) with full hover/active/focus/disabled/selected states.
 */

import { withOpacity } from './role';
import type { InteractiveTokens, StateTokens } from './types';
import type { Primitives, OpacityScale } from './primitives';

// =============================================================================
// STATE TOKEN FACTORIES
// =============================================================================

function createForegroundStateTokens(
  defaultColor: string,
  hoverColor: string,
  activeColor: string,
  focusColor: string,
  disabledColor: string,
  selectedColor: string
): StateTokens {
  return {
    default: defaultColor,
    hover: hoverColor,
    active: activeColor,
    focus: focusColor,
    disabled: disabledColor,
    selected: selectedColor,
  };
}

function createBorderStateTokens(
  baseColor: string,
  op: OpacityScale,
  options: {
    defaultOpacity?: string;
    hoverOpacity?: string;
    activeOpacity?: string;
    focusOpacity?: string;
  } = {}
): StateTokens {
  const {
    defaultOpacity = op.medium,
    hoverOpacity = op.strong,
    activeOpacity = op.heavy,
    focusOpacity = op.solid,
  } = options;

  return {
    default: withOpacity(baseColor, defaultOpacity),
    hover: withOpacity(baseColor, hoverOpacity),
    active: withOpacity(baseColor, activeOpacity),
    focus: withOpacity(baseColor, focusOpacity),
    disabled: withOpacity(baseColor, op.light),
    selected: withOpacity(baseColor, activeOpacity),
  };
}

// =============================================================================
// INTERACTIVE TOKEN CREATION
// =============================================================================

export function createInteractiveTokens(p: Primitives): InteractiveTokens {
  const { character: char, opacity: op } = p;

  const accent = char.hair.base;
  const accentBright = char.hair.highlight;
  const focus = char.hairTies.outline;
  const foreground = '#C0D8E0';
  const foregroundMuted = '#8A9CA0';
  const foregroundDisabled = '#5A6A70';
  const background = char.skirt.base;
  const backgroundElevated = char.armWarmers.base;
  const backgroundSurface = char.headphones.frame;

  return {
    // List items (sidebar, dropdowns, file explorer)
    list: {
      background: {
        default: 'transparent',
        hover: withOpacity(accent, op.subtle),
        active: withOpacity(accent, op.light),
        focus: withOpacity(accent, op.medium),
        disabled: 'transparent',
        selected: withOpacity(focus, op.medium),
      },
      foreground: createForegroundStateTokens(
        foreground,
        accentBright,
        foreground,
        focus,
        foregroundDisabled,
        foreground
      ),
      border: createBorderStateTokens(accent, op),
    },

    // Primary buttons
    button: {
      background: {
        default: '#157570',
        hover: accent,
        active: accentBright,
        focus: accent,
        disabled: withOpacity(accent, op.medium),
        selected: accent,
      },
      foreground: createForegroundStateTokens(
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        '#FFFFFF',
        foregroundMuted,
        '#FFFFFF'
      ),
      border: {
        default: withOpacity(accentBright, op.heavy),
        hover: accentBright,
        active: accentBright,
        focus: focus,
        disabled: withOpacity(accent, op.light),
        selected: accentBright,
      },
    },

    // Secondary buttons
    buttonSecondary: {
      background: {
        default: withOpacity(accent, op.medium),
        hover: withOpacity(accent, op.strong),
        active: withOpacity(accent, op.heavy),
        focus: withOpacity(accent, op.strong),
        disabled: withOpacity(accent, op.light),
        selected: withOpacity(accent, op.strong),
      },
      foreground: createForegroundStateTokens(
        foreground,
        accentBright,
        foreground,
        focus,
        foregroundDisabled,
        foreground
      ),
      border: createBorderStateTokens(accent, op),
    },

    // Input fields
    input: {
      background: {
        default: backgroundElevated,
        hover: backgroundElevated,
        active: backgroundElevated,
        focus: backgroundElevated,
        disabled: withOpacity(backgroundSurface, op.heavy),
        selected: backgroundElevated,
      },
      foreground: createForegroundStateTokens(
        foreground,
        foreground,
        foreground,
        foreground,
        foregroundDisabled,
        foreground
      ),
      border: {
        default: withOpacity(accent, op.medium),
        hover: withOpacity(accent, op.strong),
        active: withOpacity(accent, op.heavy),
        focus: accentBright,
        disabled: withOpacity(accent, op.light),
        selected: withOpacity(accent, op.strong),
      },
    },

    // Tabs
    tab: {
      background: {
        default: background,
        hover: withOpacity(accent, op.light),
        active: withOpacity(accent, op.subtle),
        focus: withOpacity(accent, op.light),
        disabled: background,
        selected: withOpacity(accent, op.subtle),
      },
      foreground: createForegroundStateTokens(
        foregroundMuted,
        accentBright,
        foreground,
        focus,
        foregroundDisabled,
        foreground
      ),
      border: {
        default: backgroundElevated,
        hover: withOpacity(accent, op.medium),
        active: withOpacity(accent, op.medium),
        focus: focus,
        disabled: backgroundElevated,
        selected: focus,
      },
    },
  };
}
