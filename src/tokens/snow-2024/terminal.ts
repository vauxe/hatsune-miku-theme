/**
 * Snow Miku 2024 Terminal ANSI Color Token Definitions — Winter Delicacy
 *
 * Peach cream canvas ANSI palette — per-color registers, tuned individually.
 * Tonic at 180° celadon, hues derived from the gochisou palette.
 * mp target dynamic for the ensemble.
 *
 * "black" = near-bg warm (light), "white" = readable dark text.
 *
 * Bright variants are DARKER (lower Jz) and richer — on a light
 * background, "bright" means more contrast = darker + more chroma.
 * The magenta-above-blue depth stagger carries over: under deutan
 * the pair separates by depth, not hue.
 */

import { role } from '../role';
import type { TerminalTokens } from '../types';
import type { Primitives } from '../primitives';

export function createTerminalTokens(p: Primitives): TerminalTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    // Normal — vivid ANSI inks on peach canvas
    black: role('Near-bg warm — chocolate brown, barely visible', L.countertenor - 0.005, 0.014, 45),
    red: role('Rose 0° — vivid alarm on peach', L.soprano, C.mp + 0.010, H.tritone),
    green: role('Wasabi 120° — vivid parsley green', L.treble + 0.003, C.mp, H.minor7th),
    yellow: role('Turmeric gold 90° — apricot 60° loses its yellow at this depth', L.sopranino, C.mp, H.major6th),
    blue: role('Azure 240° — vivid cool truth', L.sopranino + 0.002, 0.110, H.major2nd),
    magenta: role('Violet 300° — vivid plum, lifted for deutan DJz vs blue', L.sopranino + 0.029, C.mp, H.major3rd),
    cyan: role('Steam sage 190° — the hair-shadow hue (sampled 192°), 10° bluer than tonic for protan blue residual vs white', L.sopranino + 0.010, 0.110, 190),
    white: role('Toasted cream — golden ivory, warmed and lifted for CVD DEz vs cyan', 0.108, 0.045, 92),

    // Bright — slightly darker + richer (more contrast on light bg)
    brightBlack: role('Comment warm — quiet but readable', L.soprano - 0.002, 0.014, 45),
    brightRed: role('Deep rose 0° — richer alarm', L.sopranino + 0.002, C.mp + 0.010, H.tritone),
    brightGreen: role('Deep wasabi 120° — richer parsley', L.treble - 0.003, C.mp, H.minor7th),
    brightYellow: role('Deep turmeric 90° — richer gold', L.sopranino - 0.002, C.mp, H.major6th),
    brightBlue: role('Deep azure 240° — deeper truth', L.sopranino - 0.008, 0.110, H.major2nd),
    brightMagenta: role('Deep violet 300° — twilight deepens', L.sopranino - 0.002, C.mp, H.major3rd),
    brightCyan: role('Deep steam sage 190° — conversational', L.sopranino - 0.002, 0.110, 190),
    brightWhite: role('Primary text — chocolate ink', 0.056, 0.020, 45),
  };
}
