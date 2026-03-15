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

export function createTerminalTokens(_p: Primitives): TerminalTokens {
  return {
    // Normal — vivid ANSI colors on cream canvas
    black: role('Near-bg warm — chocolate brown, barely visible', 0.150, 0.014, 40),
    red: role('Rose 0° — vivid strawberry on cream', 0.095, 0.130, 0),
    green: role('Lime 120° — vivid pistachio green', 0.098, 0.120, 120),
    yellow: role('Orange 60° — vivid baked peach', 0.082, 0.120, 60),
    blue: role('Azure 240° — vivid shopfront blue', 0.082, 0.110, 240),
    magenta: role('Violet 300° — vivid raspberry', 0.088, 0.120, 300),
    cyan: role('Tonic 210° — vivid terminal voice', 0.090, 0.110, 210),
    white: role('Warm cream — readable dark text', 0.100, 0.030, 95),

    // Bright — slightly darker + richer (more contrast on light bg)
    brightBlack: role('Comment warm — quiet but readable', 0.108, 0.014, 40),
    brightRed: role('Deep rose 0° — richer alarm', 0.082, 0.130, 0),
    brightGreen: role('Deep lime 120° — richer pistachio', 0.092, 0.120, 120),
    brightYellow: role('Deep orange 60° — richer baked warmth', 0.078, 0.120, 60),
    brightBlue: role('Deep azure 240° — deeper blue', 0.072, 0.110, 240),
    brightMagenta: role('Deep violet 300° — twilight deepens', 0.078, 0.120, 300),
    brightCyan: role('Deep tonic 210° — conversational', 0.078, 0.110, 210),
    brightWhite: role('Primary text — chocolate ink', 0.056, 0.020, 40),
  };
}
