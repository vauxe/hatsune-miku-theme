/**
 * Light Terminal ANSI Color Token Definitions — Snow Miku 2026
 *
 * Warm cream canvas ANSI palette — soprano for normal, treble for bright.
 * Tonic at 210° cyan, hues derived from the patisserie palette.
 * mp target dynamic for the ensemble.
 *
 * "black" = near-bg warm (light), "white" = readable dark text.
 *
 * Bright variants are DARKER (lower Jz) and richer — on a light
 * background, "bright" means more contrast = darker + more chroma.
 */

import { role } from '../role';
import type { TerminalTokens } from '../types';
import type { Primitives } from '../primitives';

export function createTerminalTokens(p: Primitives): TerminalTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    // Normal — vivid ANSI colors on cream canvas
    black: role('Near-bg warm — chocolate brown, barely visible', L.countertenor - 0.005, 0.014, 40),
    red: role('Rose 0° — vivid strawberry on cream', L.soprano, C.mp + 0.010, H.tritone),
    green: role('Lime 120° — vivid pistachio green', L.treble + 0.003, C.mp, H.minor7th),
    yellow: role('Orange 60° — vivid baked peach', L.sopranino, C.mp, H.minor6th),
    blue: role('Azure 240° — vivid shopfront blue', L.sopranino + 0.002, 0.110, H.minor2nd),
    magenta: role('Violet 300° — vivid raspberry, lifted for deutan DJz vs blue', L.sopranino + 0.029, C.mp, H.minor3rd),
    cyan: role('Tonic 210° — vivid terminal voice', L.sopranino + 0.010, 0.110, H.mikuTeal),
    white: role('Warm cream — readable dark text', L.treble + 0.005, C.pp, 95),

    // Bright — slightly darker + richer (more contrast on light bg)
    brightBlack: role('Comment warm — quiet but readable', L.soprano - 0.002, 0.014, 40),
    brightRed: role('Deep rose 0° — richer alarm', L.sopranino + 0.002, C.mp + 0.010, H.tritone),
    brightGreen: role('Deep lime 120° — richer pistachio', L.treble - 0.003, C.mp, H.minor7th),
    brightYellow: role('Deep orange 60° — richer baked warmth', L.sopranino - 0.002, C.mp, H.minor6th),
    brightBlue: role('Deep azure 240° — deeper blue', L.sopranino - 0.008, 0.110, H.minor2nd),
    brightMagenta: role('Deep violet 300° — twilight deepens', L.sopranino - 0.002, C.mp, H.minor3rd),
    brightCyan: role('Deep tonic 210° — conversational', L.sopranino - 0.002, 0.110, H.mikuTeal),
    brightWhite: role('Primary text — chocolate ink', 0.056, 0.020, 40),
  };
}
