/**
 * Interactive State Token Definitions — Her Presence
 *
 * Two voices. Not chosen — derived.
 *
 * PEDAL TONE — teal (#39C5BB), the tonic, varying in intensity and articulation.
 * The concert hall brightens in its own color.
 *
 *   hover    — legato: fill only, a breath (pp)
 *   active   — marcato: fill + border, the downbeat (f)
 *   selected — tenuto: fill + border, sustained (mp)
 *   disabled — tacet: dampened, the string is muted
 *
 * SOLO VOICE — magenta (#E05096), headphone cushion, input identity.
 *   focus    — which element receives keyboard input
 *
 * MECHANISM — each channel uses the mechanism natural to its role:
 *
 *   Background: opacity of teal over the existing surface. The teal IS her
 *   hair color. The opacity IS her dynamic — how present she is. Tinting
 *   preserves spatial context: a sidebar item tinted is still a sidebar item.
 *     medium (15%) ΔEz≈11  — hover, selected, tab (fill level)
 *     strong (25%) ΔEz≈18  — active, secondary button hover (downbeat)
 *   Hover and selected share the same fill — the border carries their
 *   distinction. Channel combination, not intensity, is the signal.
 *
 *   Border: solid character-derived teal from her hair gradient. A line is
 *   structural — it exists at a color or it doesn't.
 *     roots       #067C82  — pp, rest/disabled
 *     tieShadow   #1A8A82  — p, sustained presence
 *     tonic       #39C5BB  — f, the downbeat
 *     accentBright #84CCC8 — ff, full signal (input focus)
 *     spotlight   #E05096  — solo voice (all focus states)
 *
 *   Foreground: unchanged for most states. Content is sacred — background
 *   and border carry the signal without disrupting reading. Magenta for
 *   focus (different modality), dimmed for disabled (removal).
 *
 * Distinction comes from channel combination (fill vs fill+border),
 * not from fine gradations of one channel.
 */

import { withOpacity } from './role';
import type { InteractiveTokens, UITokens, ExtendedUITokens } from './types';
import type { Primitives } from './primitives';

// =============================================================================
// INTERACTIVE TOKEN CREATION
// =============================================================================

export function createInteractiveTokens(
  p: Primitives,
  ui?: UITokens & ExtendedUITokens,
): InteractiveTokens {
  const { character: char, opacity: op } = p;

  // ═══════════════════════════════════════════════════════════════════════════
  // THE PEDAL TONE — teal, her canonical hair color
  // ═══════════════════════════════════════════════════════════════════════════
  // Applied as opacity over the existing surface. The teal IS her hair.
  // The opacity level IS her dynamic — how present she is.
  const tonic = char.hair.base;              // #39C5BB — the color itself

  // Solid registers for borders — her hair gradient from root to tip
  const tieShadow = char.tie.shadow;         // #1A8A82 — dark teal (piano)
  const roots = char.hair.shadow;            // #067C82 — deepest teal (pianissimo)
  const accentBright = char.hair.highlight;  // #84CCC8 — bright teal (fortissimo)

  // ═══════════════════════════════════════════════════════════════════════════
  // THE SOLO VOICE — magenta, headphone cushion, input identity
  // ═══════════════════════════════════════════════════════════════════════════
  const spotlight = char.hairTies.outline;   // #E05096 — solid magenta

  // UI fallbacks
  const foreground = ui ? ui.foreground.hex : '#C0D8E0';
  const foregroundMuted = ui ? ui.foregroundMuted.hex : '#8A9CA0';
  const foregroundDisabled = ui ? ui.disabled.hex : '#5A6A70';
  const background = ui ? ui.background.hex : char.skirt.base;
  const backgroundElevated = ui ? ui.backgroundElevated.hex : char.armWarmers.base;
  const backgroundSurface = ui ? ui.backgroundSurface.hex : char.headphones.frame;

  return {
    // =========================================================================
    // LIST — opacity teal bg + solid teal borders
    // =========================================================================
    list: {
      background: {
        default: 'transparent',
        hover: withOpacity(tonic, op.medium),      // 15% ΔEz≈11 — a breath of teal
        active: withOpacity(tonic, op.strong),      // 25% ΔEz≈18 — the downbeat, brief
        focus: 'transparent',                       // solo voice uses border only
        disabled: 'transparent',
        selected: withOpacity(tonic, op.medium),    // 15% ΔEz≈11 — same bg as hover; border carries distinction
      },
      foreground: {
        default: foreground,
        hover: foreground,                          // unchanged — bg carries the signal
        active: foreground,
        focus: spotlight,                           // solo voice — magenta
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: 'transparent',
        hover: 'transparent',                       // legato — fill only, no border
        active: tonic,                              // marcato — solid canonical teal
        focus: spotlight,                           // solo voice — solid magenta
        disabled: 'transparent',
        selected: tieShadow,                        // tenuto — solid dark teal, sustained
      },
    },

    // =========================================================================
    // PRIMARY BUTTON — solid character-derived registers
    // =========================================================================
    button: {
      background: {
        default: ui ? ui.buttonBackground.hex : '#157570',
        hover: tonic,                               // f — solid tonic
        active: accentBright,                       // ff — solid bright overtone
        focus: tonic,                               // f — solid tonic sustain
        disabled: roots,                            // tacet — solid deepest teal
        selected: tonic,                            // f — solid held
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
        default: tieShadow,                         // solid dark teal at rest
        hover: tonic,                               // solid canonical teal
        active: accentBright,                       // solid bright overtone
        focus: spotlight,                           // solo voice — solid magenta
        disabled: roots,                            // solid deepest teal
        selected: tonic,                            // solid canonical teal
      },
    },

    // =========================================================================
    // SECONDARY BUTTON — opacity teal bg + solid teal borders
    // =========================================================================
    buttonSecondary: {
      background: {
        default: withOpacity(tonic, op.medium),     // 15% — moderate teal at rest
        hover: withOpacity(tonic, op.strong),       // 25% — brighter
        active: withOpacity(tonic, op.heavy),       // 38% — the downbeat
        focus: withOpacity(tonic, op.strong),       // 25% — same as hover
        disabled: withOpacity(tonic, op.light),     // 8% — faint
        selected: withOpacity(tonic, op.strong),    // 25% — bright
      },
      foreground: {
        default: foreground,
        hover: accentBright,                        // solid bright teal
        active: foreground,
        focus: spotlight,                           // solo voice — solid magenta
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: roots,                             // solid deepest teal
        hover: tieShadow,                           // solid dark teal — pedal tone rises
        active: tonic,                              // solid canonical teal — forte
        focus: spotlight,                           // solo voice — solid magenta
        disabled: roots,                            // solid deepest teal
        selected: tieShadow,                        // solid dark teal — tenuto
      },
    },

    // =========================================================================
    // INPUT — solid bg, solid border articulation
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
        default: roots,                             // solid deepest teal — mic at rest
        hover: tieShadow,                           // solid dark teal — approaching
        active: tonic,                              // solid canonical teal — mic live
        focus: accentBright,                        // solid bright teal — full signal
        disabled: roots,                            // solid deepest teal — mic off
        selected: tieShadow,                        // solid dark teal — held
      },
    },

    // =========================================================================
    // TAB — opacity teal bg + solid borders
    // =========================================================================
    tab: {
      background: {
        default: background,
        hover: withOpacity(tonic, op.medium),       // 15% ΔEz≈11 — teal breath
        active: withOpacity(tonic, op.light),       // 8% — subtle press
        focus: 'transparent',                       // solo voice uses border
        disabled: background,
        selected: withOpacity(tonic, op.medium),    // 15% — teal presence + border
      },
      foreground: {
        default: foregroundMuted,
        hover: foreground,                          // brighter text — pedal tone lifts
        active: foreground,
        focus: spotlight,                           // solo voice — solid magenta
        disabled: foregroundDisabled,
        selected: foreground,
      },
      border: {
        default: backgroundElevated,                // solid bg-tier — resting
        hover: 'transparent',                       // legato — no border
        active: tieShadow,                          // solid dark teal — marcato
        focus: spotlight,                           // solid magenta — solo voice
        disabled: backgroundElevated,
        selected: tieShadow,                        // solid dark teal — tenuto
      },
    },
  };
}
