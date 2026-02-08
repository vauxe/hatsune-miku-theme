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
    black: roleFromHex('Near-background — the stage floor', '#15191D'),
    red: role('Alert — tritone red, danger in the output', L.vibrantWarm, C.vivid, H.red),
    green: role('Success — negi green, it worked', L.vibrant - 0.015, C.vibrant, H.green),
    yellow: role('Caution — concert gold, pay attention', L.vibrantWarm, C.vibrant, H.gold),
    blue: role('Info — deep blue, calm and steady', L.primary, C.comfortable, H.blue),
    magenta: role('Special — violet timbre, distinct from red', L.secondary, C.vibrant, H.violet),
    cyan: role('Her voice — Miku teal in the terminal', L.vibrant, C.vibrant, H.mikuTeal),
    white: role('Muted foreground — warm off-white', L.muted, C.muted, H.peach),
    brightBlack: role('Comment gray — the quiet background', L.tertiary + 0.03, 0.020, H.cyan),
    brightRed: role('Softer alert — coral, less urgent', L.primaryWarm, C.comfortable, H.red),
    brightGreen: role('Softer success — quieter negi', L.primary, C.comfortable, H.green),
    brightYellow: role('Softer warning — warm gold, gentle', L.primaryWarm, C.comfortable, H.gold),
    brightBlue: role('Standard info — blue at rest', L.primary, C.comfortable, H.blue),
    brightMagenta: role('Standard magic — magenta, meta', L.primaryWarm, C.comfortable, H.magenta),
    brightCyan: role('Standard Miku — her voice, conversational', L.secondary, C.comfortable, H.mikuTeal),
    brightWhite: role('Primary text — icy white, her spotlight', L.primary, 0.030, H.cyan),
  };
}
