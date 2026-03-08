/**
 * Terminal ANSI Color Token Definitions
 *
 * When you run your code and see output in the terminal,
 * that's her voice reading your work back to you.
 * The producer writes; Miku sings. The programmer runs; the terminal speaks.
 */

import { role, roleFromHex } from './role';
import { parseHex } from './jzczhz';
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
  // DARK TERMINAL — CVD-safe Jz ladder + Cz tiers
  // ═══════════════════════════════════════════════════════════════════════════
  // Jz ladder (mezzo→soprano→treble→sopranino) creates lightness separation
  // that survives all CVD types. Cz tiers (mf/f vivid, mp standard, p soft)
  // add saturation contrast. Hue shifted: green uses 150° (blue-axis) not
  // lime 120°, and blue uses 270° not azure 240°, for CVD-safe separation.
  //
  // Normal:  blue+red(mezzo) < green(soprano) < magenta+cyan(treble) < yellow(sopranino)
  // Bright:  bBlue(mezzo) < bRed(soprano) < bGreen(treble) < bMag+bCyan+bYel(sopranino)
  return {
    black: role('Near-background — skirt dark blue on the stage floor', L.countertenor, C.ppp, parseHex(p.character.skirt.base).hz),
    red: role('Alert — rose, above mezzo for Lc≥60 on warm hue', L.mezzo + 0.008, C.mf, H.rose),
    green: role('Success — green 150° (blue-axis for deutan safety), soprano/f', L.soprano, C.f, H.green),
    yellow: role('Caution — amber glow, sopranino/p (bright + soft)', L.sopranino, C.p, H.orange),
    blue: role('Info — blue 270°, mezzo/mp', L.mezzo, C.mp, H.blue),
    magenta: role('Special — magenta, treble/p (soft, high register)', L.treble, C.p, H.magenta),
    cyan: role('Her voice — Miku teal, treble/mp', L.treble, C.mp, H.mikuTeal),
    white: role('Muted foreground — warm off-white, low chroma', L.soprano, C.pp, H.peach),
    brightBlack: role('Comment gray — below soprano, dark gray', L.alto, C.ppp, H.cyan),
    brightRed: role('Bright alert — rose, above soprano for Lc≥60 on warm hue', L.soprano + 0.005, C.f, H.rose),
    brightGreen: role('Bright success — green 150°, treble/f', L.treble, C.f, H.green),
    brightYellow: role('Bright warning — vivid amber, sopranino/mp', L.sopranino, C.mp, H.orange),
    brightBlue: role('Bright info — blue 270°, mezzo/mf (vivid not lighter)', L.mezzo, C.mf, H.blue),
    brightMagenta: role('Bright magic — magenta, sopranino/p', L.sopranino, C.p, H.magenta),
    brightCyan: role('Bright Miku — vivid teal, sopranino/mf', L.sopranino, C.mf, H.mikuTeal),
    brightWhite: role('Primary text — icy white, low chroma', L.soprano, C.p, H.cyan),
  };
}
