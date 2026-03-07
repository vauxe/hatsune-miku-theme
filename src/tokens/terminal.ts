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

  // ═══════════════════════════════════════════════════════════════════════════
  // LIGHT TERMINAL — Cream canvas ANSI palette
  // Terminal green uses teal (~180°, blue axis) for CVD safety.
  // "black" = near-bg, "white" = readable text (inverted for light terminal)
  // ═══════════════════════════════════════════════════════════════════════════
  if (p.polarity === 'light') {
    return {
      black: role('Near-bg warm — barely visible on cream', 0.150, 0.020, 50),
      red: role('Terracotta alert — vivid on cream', 0.075, 0.110, 20),
      green: role('Teal green — CVD-safe blue-axis', 0.080, 0.090, 180),
      yellow: role('Amber caution — warm glow', 0.075, 0.090, 75),
      blue: role('Blue truth — deep and steady', 0.065, 0.075, 260),
      magenta: role('Magenta rhythm — cool pop', 0.068, 0.085, 345),
      cyan: role('Teal voice — her terminal presence', 0.072, 0.085, 200),
      white: role('Warm readable text — off-white becomes dark', 0.090, 0.050, 50),
      brightBlack: role('Comment gray — quiet but readable', 0.110, 0.018, 55),
      brightRed: role('Softer terracotta — less urgent', 0.068, 0.085, 20),
      brightGreen: role('Softer teal — quieter success', 0.072, 0.070, 180),
      brightYellow: role('Softer amber — gentle warning', 0.068, 0.075, 75),
      brightBlue: role('Standard blue — calm info', 0.060, 0.070, 260),
      brightMagenta: role('Rose-violet — meta, special', 0.065, 0.075, 325),
      brightCyan: role('Standard teal — conversational Miku', 0.065, 0.070, 200),
      brightWhite: role('Primary text — chocolate ink', 0.063, 0.025, 50),
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // DARK TERMINAL — Standard Miku (unchanged)
  // ═══════════════════════════════════════════════════════════════════════════
  return {
    black: role('Near-background — visible dark on the stage floor', L.countertenor, C.ppp, H.sky),
    red: role('Alert — tritone rose, danger in the output', L.soprano, C.f, H.rose),
    green: role('Success — lime, it worked', L.soprano, C.mf, H.lime),
    yellow: role('Caution — orange glow, pay attention', L.soprano, C.mf, H.orange),
    blue: role('Info — azure, calm and steady', L.soprano, C.mp, H.azure),
    magenta: role('Special — blue timbre, distinct from rose', L.soprano, C.mf, H.blue),
    cyan: role('Her voice — Miku teal in the terminal', L.soprano, C.mf, H.mikuTeal),
    white: role('Muted foreground — warm off-white', L.soprano, C.p, H.peach),
    brightBlack: role('Comment gray — the quiet background', L.soprano, 0.020, H.cyan),
    brightRed: role('Softer alert — rose, less urgent', L.soprano, C.mp, H.rose),
    brightGreen: role('Softer success — quieter lime', L.soprano, C.mp, H.lime),
    brightYellow: role('Softer warning — warm orange, gentle', L.soprano, C.mp, H.orange),
    brightBlue: role('Standard info — azure at rest', L.soprano, C.mp, H.azure),
    brightMagenta: role('Standard magic — violet, meta', L.soprano, C.mp, H.violet),
    brightCyan: role('Standard Miku — her voice, conversational', L.soprano, C.mp, H.mikuTeal),
    brightWhite: role('Primary text — icy white, her spotlight', L.soprano, 0.030, H.cyan),
  };
}
