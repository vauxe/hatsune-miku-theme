/**
 * Light Terminal ANSI Color Token Definitions
 *
 * Cream canvas ANSI palette.
 * Terminal green uses teal (~180, blue axis) for CVD safety.
 * "black" = near-bg, "white" = readable text (inverted for light terminal)
 */

import { role } from '../role';
import type { TerminalTokens } from '../types';
import type { Primitives } from '../primitives';

export function createTerminalTokens(_p: Primitives): TerminalTokens {
  return {
    black: role('Near-bg warm -- barely visible on cream', 0.150, 0.020, 50),
    red: role('Terracotta alert -- vivid on cream', 0.075, 0.110, 20),
    green: role('Teal green -- CVD-safe blue-axis', 0.080, 0.090, 180),
    yellow: role('Amber caution -- warm glow', 0.075, 0.090, 75),
    blue: role('Blue truth -- deep and steady', 0.065, 0.075, 260),
    magenta: role('Magenta rhythm -- cool pop', 0.068, 0.085, 345),
    cyan: role('Teal voice -- her terminal presence', 0.072, 0.085, 200),
    white: role('Warm readable text -- off-white becomes dark', 0.090, 0.050, 50),
    brightBlack: role('Comment gray -- quiet but readable', 0.110, 0.018, 55),
    brightRed: role('Softer terracotta -- less urgent', 0.068, 0.085, 20),
    brightGreen: role('Softer teal -- quieter success', 0.072, 0.070, 180),
    brightYellow: role('Softer amber -- gentle warning', 0.068, 0.075, 75),
    brightBlue: role('Standard blue -- calm info', 0.060, 0.070, 260),
    brightMagenta: role('Rose-violet -- meta, special', 0.065, 0.075, 325),
    brightCyan: role('Standard teal -- conversational Miku', 0.065, 0.070, 200),
    brightWhite: role('Primary text -- chocolate ink', 0.063, 0.025, 50),
  };
}
