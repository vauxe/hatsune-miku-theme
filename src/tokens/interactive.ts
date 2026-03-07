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
  // ENGAGEMENT — transient interaction
  // Dark: teal (her hair, the tonic). Light: warm honey (the sleeve lining).
  // ═══════════════════════════════════════════════════════════════════════════
  const tonic = p.polarity === 'light' ? char.tie.base : char.hair.base;

  // Solid registers — gradient from darkest to brightest
  const roots = p.polarity === 'light' ? char.tie.shadow : char.hair.shadow;
  const tieShadow = char.tie.shadow;         // polarity-aware via p.character
  const accentBright = p.polarity === 'light'
    ? (ui ? ui.accentSecondary.hex : char.headphones.cushion)  // Warm terracotta — ff
    : (ui ? ui.accentSecondary.hex : char.hair.highlight);     // Teal highlight — ff

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
  const foregroundFrost = p.polarity === 'light'
    ? foreground                                    // Dark foreground for selected items on snow
    : snowMiku.y2022.hair;                          // #B2EBF2 — selection voice (Snow Miku ocean blue)
  const foregroundTeal = p.polarity === 'light'
    ? roots                                         // #067C82 — dark teal for engagement highlight on snow
    : accentBright;                                 // Lightened hair highlight — engagement highlight (light teal)
  const foregroundMuted = ui ? ui.foregroundMuted.hex : '#8A9CA0';
  const foregroundDisabled = ui ? ui.disabled.hex : '#5A6A70';
  const backgroundVoid = ui ? ui.backgroundVoid.hex : '#0A1214';
  const background = ui ? ui.background.hex : char.skirt.base;
  const backgroundShelf = ui ? ui.backgroundShelf.hex : char.armWarmers.base;
  const backgroundFrame = ui ? ui.backgroundFrame.hex : char.headphones.frame;

  return {
    // =========================================================================
    // FABRIC — lists, menus, trees, suggest, notebook cells
    // =========================================================================
    list: {
      background: {
        default: p.special.transparent,
        hover: withOpacity(tonic, op.strong),       // 25% — engagement, transient
        active: withOpacity(tonic, op.heavy),        // 38% — engagement, marcato
        focus: p.special.transparent,                        // identity uses border only
        disabled: p.special.transparent,
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
        default: p.special.transparent,
        hover: p.special.transparent,                       // legato — fill only
        active: tonic,                              // marcato — solid teal
        focus: spotlight,                           // identity — solid magenta
        disabled: p.special.transparent,
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
        // Buttons have dark/colored backgrounds — blouse off-white for warmth
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
        default: backgroundShelf,
        hover: backgroundShelf,
        active: backgroundShelf,
        focus: backgroundShelf,
        disabled: backgroundFrame,
        selected: backgroundShelf,
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
        default: backgroundFrame,                    // inactive — Frame tier (recedes)
        hover: withOpacity(tonic, op.strong),        // 25% — engagement tint (transient OK)
        active: background,                         // shown tab — Canvas tier (merges with editor)
        focus: p.special.transparent,                       // identity uses border only
        disabled: backgroundFrame,                   // same as inactive
        selected: backgroundShelf,                   // unfocused active — Shelf tier
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
        default: backgroundShelf,
        hover: p.special.transparent,                       // legato
        active: tieShadow,                          // marcato
        focus: spotlight,                           // identity — magenta
        disabled: backgroundShelf,
        selected: tieShadow,                        // tenuto
      },
    },

    // =========================================================================
    // FABRIC (minimal) — toolbar icons, activity bar items
    // =========================================================================
    toolbar: {
      background: {
        default: p.special.transparent,
        hover: withOpacity(tonic, op.strong),        // 25%
        active: withOpacity(tonic, op.heavy),        // 38%
        focus: p.special.transparent,
        disabled: p.special.transparent,
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
        default: p.special.transparent,
        hover: p.special.transparent,                       // no border on icon hover
        active: p.special.transparent,
        focus: spotlight,                           // identity — magenta
        disabled: p.special.transparent,
        selected: p.special.transparent,
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
        disabled: withOpacity(backgroundShelf, '80'),
        selected: p.polarity === 'light'
          ? withOpacity(tonic, op.heavy)              // on — teal tint over cream, keeps dark fg readable
          : (ui ? ui.buttonBackground.hex : '#157570'), // on — solid dark teal (dark theme)
      },
      foreground: {
        default: foregroundMuted,                   // off — dim
        hover: foreground,                          // off + hover — brighter
        active: p.polarity === 'light' ? foreground : char.top.blouse, // on + hover — dark fg on tint (light), blouse white on solid (dark)
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
