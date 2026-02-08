/**
 * Interactive State Token Definitions — Her Presence
 *
 * Each state draws from a different corner of Miku's world.
 * Not the same teal at different volumes — three distinct hue families:
 *
 *   default  — transparent: the quiet stage (her teal world already there)
 *   hover    — warm (#FF9900): stage lights warming, Wonderlands welcomes you
 *   active   — teal (#39C5BB): contact, touching her world
 *   focus    — magenta (#E05096): the spotlight, she sees you
 *   selected — magenta: held gaze, sustained presence
 *   disabled — desaturated: tacet, not this movement
 */

import { withOpacity } from './role';
import type { InteractiveTokens, StateTokens, UITokens, ExtendedUITokens } from './types';
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
    hoverColor?: string;
    activeColor?: string;
    focusColor?: string;
    selectedColor?: string;
    selectedOpacity?: string;
  } = {}
): StateTokens {
  const {
    defaultOpacity = op.medium,
    hoverOpacity = op.strong,
    activeOpacity = op.heavy,
    focusOpacity = op.solid,
    hoverColor,
    activeColor,
    focusColor,
    selectedColor,
    selectedOpacity,
  } = options;

  return {
    default: withOpacity(baseColor, defaultOpacity),
    hover: withOpacity(hoverColor ?? baseColor, hoverOpacity),
    active: withOpacity(activeColor ?? baseColor, activeOpacity),
    focus: withOpacity(focusColor ?? baseColor, focusOpacity),
    disabled: withOpacity(baseColor, op.light),
    // Selected follows focus by default — "held gaze" shares the spotlight's hue
    selected: withOpacity(selectedColor ?? focusColor ?? activeColor ?? baseColor, selectedOpacity ?? focusOpacity),
  };
}

// =============================================================================
// INTERACTIVE TOKEN CREATION
// =============================================================================

export function createInteractiveTokens(
  p: Primitives,
  ui?: UITokens & ExtendedUITokens,
  overrides?: { hoverAccent?: string }
): InteractiveTokens {
  const { character: char, opacity: op } = p;

  // "Her Presence" — three hue families from her world
  const warmApproach = overrides?.hoverAccent ?? char.tie.shadow;  // #FF9900 (Wonderlands) or fallback
  const tonic = char.hair.base;              // #39C5BB — the teal home
  const roots = char.hair.shadow;            // #1A8A82 — teal deepened
  const spotlight = char.hairTies.outline;   // #E05096 — the magenta spotlight
  const accentBright = char.hair.highlight;  // #5DE4DB — the bright overtone

  const foreground = ui ? ui.foreground.hex : '#C0D8E0';
  const foregroundMuted = ui ? ui.foregroundMuted.hex : '#8A9CA0';
  const foregroundDisabled = ui ? ui.disabled.hex : '#5A6A70';
  const background = ui ? ui.background.hex : char.skirt.base;
  const backgroundElevated = ui ? ui.backgroundElevated.hex : char.armWarmers.base;
  const backgroundSurface = ui ? ui.backgroundSurface.hex : char.headphones.frame;

  return {
    // List items (approaching the setlist — warm stage lights welcome you)
    list: {
      background: {
        default: 'transparent',                        // the quiet stage
        hover: withOpacity(warmApproach, op.light),    // stage lights warming (warm orange glow)
        active: withOpacity(tonic, op.medium),         // teal contact — needs medium to read against teal-tinted bg
        focus: withOpacity(spotlight, op.medium),       // magenta spotlight — she sees you
        disabled: 'transparent',                       // tacet — dampened string
        selected: withOpacity(spotlight, op.medium),   // held gaze — sustained presence
      },
      foreground: createForegroundStateTokens(
        foreground,
        accentBright,       // hover: bright overtone
        foreground,
        spotlight,          // focus: the magenta spotlight
        foregroundDisabled,
        foreground
      ),
      border: createBorderStateTokens(tonic, op, {
        hoverColor: warmApproach,
        activeColor: roots,
        focusColor: spotlight,
      }),
    },

    // Primary buttons (piano key — brightness crescendo)
    // rest (Jz=0.096) → hover/tonic (0.153) → active/accentBright (0.177)
    // This IS p → f → ff in brightness — keep current progression
    button: {
      background: {
        default: ui ? ui.buttonBackground.hex : '#157570',  // p — key at rest
        hover: tonic,                                        // f — the home note rings
        active: accentBright,                                // ff — bright overtone
        focus: tonic,                                        // forte — tonic sustain
        disabled: withOpacity(tonic, op.medium),             // tacet — dampened
        selected: tonic,                                     // fermata — held
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
        default: withOpacity(accentBright, op.heavy),   // overtone border
        hover: accentBright,                             // full overtone
        active: accentBright,                            // bright contact
        focus: spotlight,                                // the magenta solo
        disabled: withOpacity(tonic, op.light),          // dampened
        selected: accentBright,                          // sustained overtone
      },
    },

    // Secondary buttons (stage monitor — warm approach, teal contact)
    buttonSecondary: {
      background: {
        default: withOpacity(tonic, op.medium),           // monitor idle
        hover: withOpacity(warmApproach, op.strong),       // warm crescendo
        active: withOpacity(roots, op.heavy),              // teal forte
        focus: withOpacity(tonic, op.strong),              // tonic sustain
        disabled: withOpacity(tonic, op.light),            // tacet
        selected: withOpacity(roots, op.strong),             // settled — deeper teal, she chose this one
      },
      foreground: createForegroundStateTokens(
        foreground,
        accentBright,
        foreground,
        spotlight,
        foregroundDisabled,
        foreground
      ),
      border: createBorderStateTokens(tonic, op, {
        hoverColor: warmApproach,
        activeColor: roots,
        focusColor: spotlight,
      }),
    },

    // Input fields (microphone — border dynamics only, bg stays still)
    input: {
      background: {
        default: backgroundElevated,                         // the mic stand
        hover: backgroundElevated,                           // doesn't move
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
        default: withOpacity(tonic, op.medium),              // mic at rest
        hover: withOpacity(warmApproach, op.strong),          // warming up
        active: withOpacity(roots, op.heavy),                 // mic live
        focus: accentBright,                                  // full signal
        disabled: withOpacity(tonic, op.light),               // mic off
        selected: withOpacity(roots, op.strong),               // selected — teal contact, you're here
      },
    },

    // Tabs (songs in the setlist — warm approach, teal contact, magenta spotlight)
    tab: {
      background: {
        default: background,                                   // song at rest
        hover: withOpacity(warmApproach, op.light),            // considering a song (warm glow)
        active: withOpacity(tonic, op.subtle),                 // pressing play (teal contact)
        focus: withOpacity(spotlight, op.light),               // highlighted (magenta spotlight)
        disabled: background,                                  // unavailable
        selected: withOpacity(spotlight, op.subtle),            // now playing — faint magenta, she's watching
      },
      foreground: createForegroundStateTokens(
        foregroundMuted,
        accentBright,       // hover: bright overtone
        foreground,
        spotlight,          // focus: the magenta spotlight
        foregroundDisabled,
        foreground
      ),
      border: {
        default: backgroundElevated,                           // resting border
        hover: withOpacity(warmApproach, op.medium),           // warm approach
        active: withOpacity(roots, op.medium),                 // teal contact
        focus: spotlight,                                      // the magenta spotlight
        disabled: backgroundElevated,
        selected: spotlight,                                   // sustained spotlight
      },
    },
  };
}
