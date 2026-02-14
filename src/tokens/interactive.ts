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
import type { InteractiveTokens, UITokens, ExtendedUITokens } from './types';
import type { Primitives } from './primitives';
import { snowMiku } from '../palette';

// =============================================================================
// INTERACTIVE TOKEN CREATION
// =============================================================================

export function createInteractiveTokens(
  p: Primitives,
  ui?: UITokens & ExtendedUITokens,
): InteractiveTokens {
  const { character: char, opacity: op } = p;

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGAGEMENT — teal, transient interaction
  // ═══════════════════════════════════════════════════════════════════════════
  const tonic = char.hair.base;              // #39C5BB

  // Solid registers — hair gradient from root to tip
  const roots = char.hair.shadow;            // #067C82 — pp
  const tieShadow = char.tie.shadow;         // #1A8A82 — p
  const accentBright = ui ? ui.accentSecondary.hex : char.hair.highlight;  // Lightened hair highlight — ff

  // ═══════════════════════════════════════════════════════════════════════════
  // SELECTION — Snow Miku frost, persistent state
  // ═══════════════════════════════════════════════════════════════════════════
  const frost = snowMiku.y2025.accessories.crystal; // #81D4FA — ~220° in JzCzhz

  // ═══════════════════════════════════════════════════════════════════════════
  // IDENTITY — magenta, focus / keyboard target
  // ═══════════════════════════════════════════════════════════════════════════
  const spotlight = char.hairTies.outline;   // #E05096

  // UI fallbacks
  const foreground = ui ? ui.foreground.hex : '#C0D8E0';
  // Colored foregrounds — voices speak as text
  const foregroundFrost = snowMiku.y2022.hair;    // #B2EBF2 — selection voice (Snow Miku ocean blue)
  const foregroundTeal = accentBright;            // Lightened hair highlight — engagement highlight (light teal)
  const foregroundMuted = ui ? ui.foregroundMuted.hex : '#8A9CA0';
  const foregroundDisabled = ui ? ui.disabled.hex : '#5A6A70';
  const backgroundVoid = ui ? ui.void.hex : '#0A1214';
  const background = ui ? ui.background.hex : char.skirt.base;
  const backgroundElevated = ui ? ui.backgroundElevated.hex : char.armWarmers.base;
  const backgroundSurface = ui ? ui.backgroundSurface.hex : char.headphones.frame;

  return {
    // =========================================================================
    // FABRIC — lists, menus, trees, suggest, notebook cells
    // =========================================================================
    list: {
      background: {
        default: '#00000000',
        hover: withOpacity(tonic, op.strong),       // 25% — engagement, transient
        active: withOpacity(tonic, op.heavy),        // 38% — engagement, marcato
        focus: '#00000000',                        // identity uses border only
        disabled: '#00000000',
        selected: withOpacity(frost, op.strong),     // 25% — selection, persistent
      },
      foreground: {
        default: foreground,
        hover: foreground,
        active: foregroundTeal,                      // engagement highlight on press
        focus: foreground,                           // identity is border-only
        disabled: foregroundDisabled,
        selected: foregroundFrost,                   // selection voice as text
      },
      border: {
        default: '#00000000',
        hover: '#00000000',                       // legato — fill only
        active: tonic,                              // marcato — solid teal
        focus: spotlight,                           // identity — solid magenta
        disabled: '#00000000',
        selected: tieShadow,                        // tenuto — solid dark teal
      },
    },

    // =========================================================================
    // METAL (primary) — solid register swap
    // =========================================================================
    button: {
      background: {
        default: ui ? ui.buttonBackground.hex : '#157570',
        hover: tonic,                               // f
        active: accentBright,                       // ff
        focus: tonic,
        disabled: roots,                            // tacet
        selected: tonic,
      },
      foreground: {
        default: '#FFFFFF',
        hover: '#FFFFFF',
        active: '#FFFFFF',
        focus: '#FFFFFF',
        disabled: foregroundMuted,
        selected: '#FFFFFF',
      },
      border: {
        default: tieShadow,
        hover: tonic,
        active: accentBright,
        focus: spotlight,                           // identity — magenta
        disabled: roots,
        selected: tonic,
      },
    },

    // =========================================================================
    // METAL (secondary) — tint bg + solid borders
    // =========================================================================
    buttonSecondary: {
      background: {
        default: withOpacity(tonic, op.strong),      // 25%
        hover: withOpacity(tonic, op.heavy),         // 38%
        active: withOpacity(tonic, op.solid),        // 50%
        focus: withOpacity(tonic, op.heavy),
        disabled: withOpacity(tonic, op.medium),     // 15%
        selected: withOpacity(tonic, op.heavy),
      },
      foreground: {
        default: foreground,
        hover: accentBright,
        active: foreground,
        focus: foreground,                           // content is sacred — identity is border-only
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: roots,
        hover: tieShadow,
        active: tonic,
        focus: spotlight,                           // identity — magenta
        disabled: roots,
        selected: tieShadow,
      },
    },

    // =========================================================================
    // GLASS — static fill, border articulation
    // =========================================================================
    input: {
      background: {
        default: backgroundElevated,
        hover: backgroundElevated,
        active: backgroundElevated,
        focus: backgroundElevated,
        disabled: backgroundSurface,
        selected: backgroundElevated,
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
        focus: accentBright,                        // full signal
        disabled: roots,
        selected: tieShadow,
      },
    },

    // =========================================================================
    // ARCHITECTURE — tier assignment (solid tiers, not tints)
    // =========================================================================
    tab: {
      background: {
        default: backgroundVoid,                    // inactive — void tier (recedes)
        hover: withOpacity(tonic, op.strong),        // 25% — engagement tint (transient OK)
        active: background,                         // shown tab — base tier (merges with editor)
        focus: '#00000000',                       // identity uses border only
        disabled: backgroundVoid,                   // same as inactive
        selected: backgroundSurface,                // unfocused active — surface tier
      },
      foreground: {
        default: foregroundMuted,
        hover: foreground,
        active: foreground,
        focus: foreground,                           // content is sacred — identity is border-only
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: backgroundElevated,
        hover: '#00000000',                       // legato
        active: tieShadow,                          // marcato
        focus: spotlight,                           // identity — magenta
        disabled: backgroundElevated,
        selected: tieShadow,                        // tenuto
      },
    },

    // =========================================================================
    // FABRIC (minimal) — toolbar icons, activity bar items
    // =========================================================================
    toolbar: {
      background: {
        default: '#00000000',
        hover: withOpacity(tonic, op.strong),        // 25%
        active: withOpacity(tonic, op.heavy),        // 38%
        focus: '#00000000',
        disabled: '#00000000',
        selected: withOpacity(frost, op.strong),     // 25% — toggled/selected
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
        default: '#00000000',
        hover: '#00000000',                       // no border on icon hover
        active: '#00000000',
        focus: spotlight,                           // identity — magenta
        disabled: '#00000000',
        selected: '#00000000',
      },
    },

    // =========================================================================
    // TOGGLE — checkboxes, radio buttons, input options
    // =========================================================================
    toggle: {
      background: {
        default: background,                        // off
        hover: withOpacity(tonic, op.strong),        // off + hover
        active: tonic,                              // on + hover
        focus: background,
        disabled: withOpacity(backgroundSurface, '80'),
        selected: ui ? ui.buttonBackground.hex : '#157570', // on
      },
      foreground: {
        default: foregroundMuted,                   // off — dim
        hover: foreground,                          // off + hover — brighter
        active: '#FFFFFF',                          // on + hover
        focus: foreground,
        disabled: foregroundDisabled,
        selected: accentBright,                     // on — bright teal checkmark
      },
      border: {
        default: withOpacity(tonic, op.heavy),      // off — teal tint border
        hover: tieShadow,                           // off + hover
        active: accentBright,                       // on + hover
        focus: spotlight,                           // identity — magenta
        disabled: roots,
        selected: tonic,                            // on
      },
    },

    // =========================================================================
    // AIR — scrollbars, minimap sliders, sashes
    // =========================================================================
    slider: {
      background: {
        rest: withOpacity(tonic, op.strong),         // 25%
        hover: withOpacity(tonic, op.heavy),         // 38%
        active: withOpacity(tonic, op.solid),        // 50%
      },
    },
  };
}
