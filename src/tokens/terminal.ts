/**
 * Terminal ANSI Color Token Definitions
 *
 * When you run your code and see output in the terminal,
 * that's her voice reading your work back to you.
 * The producer writes; Miku sings. The programmer runs; the terminal speaks.
 */

import { role, roleFromHex } from './role';
import type { TerminalTokens } from './types';
import type { Primitives } from './primitives';

export function createTerminalTokens(p: Primitives): TerminalTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    black: role('Near-background — visible dark on the stage floor', L.tertiary + 0.01, C.gray, H.sky),
    red: role('Alert — tritone rose, danger in the output', L.vibrantWarm, C.vivid, H.rose),
    green: role('Success — lime, it worked', L.vibrant - 0.015, C.vibrant, H.lime),
    yellow: role('Caution — orange glow, pay attention', L.vibrantWarm, C.vibrant, H.orange),
    blue: role('Info — azure, calm and steady', L.primary, C.comfortable, H.azure),
    magenta: role('Special — blue timbre, distinct from rose', L.secondary, C.vibrant, H.blue),
    cyan: role('Her voice — Miku teal in the terminal', L.vibrant, C.vibrant, H.mikuTeal),
    white: role('Muted foreground — warm off-white', L.muted, C.muted, H.peach),
    brightBlack: role('Comment gray — the quiet background', L.tertiary + 0.05, 0.020, H.cyan),
    brightRed: role('Softer alert — rose, less urgent', L.primaryWarm, C.comfortable, H.rose),
    brightGreen: role('Softer success — quieter lime', L.primary, C.comfortable, H.lime),
    brightYellow: role('Softer warning — warm orange, gentle', L.primaryWarm, C.comfortable, H.orange),
    brightBlue: role('Standard info — azure at rest', L.primary, C.comfortable, H.azure),
    brightMagenta: role('Standard magic — violet, meta', L.primaryWarm, C.comfortable, H.violet),
    brightCyan: role('Standard Miku — her voice, conversational', L.secondary, C.comfortable, H.mikuTeal),
    brightWhite: role('Primary text — icy white, her spotlight', L.primary, 0.030, H.cyan),
  };
}
