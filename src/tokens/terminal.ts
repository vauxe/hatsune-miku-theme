/**
 * Terminal ANSI Color Token Definitions
 *
 * Defines the 16-color ANSI palette for terminal output.
 * All colors optimized for APCA Lc 75+ on dark backgrounds.
 */

import { role, roleFromHex } from './role';
import type { TerminalTokens } from './types';
import type { Primitives } from './primitives';

export function createTerminalTokens(p: Primitives): TerminalTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    black: roleFromHex('Terminal black - darker than text', '#15191D'),
    red: role('Terminal red - warm coral', L.vibrantWarm, C.vibrant, H.red),
    green: role('Terminal green - mint', L.vibrant, C.vibrant, H.mint),
    yellow: role('Terminal yellow - gold', L.vibrant, C.vibrant, H.gold),
    blue: role('Terminal blue - periwinkle', L.primary, C.comfortable, H.periwinkle),
    magenta: role('Terminal magenta', L.vibrantWarm, C.vibrant, H.magenta),
    cyan: role('Terminal cyan - Miku teal', L.vibrant, C.vibrant, H.mikuTeal),
    white: role('Terminal white - warm off-white', L.muted, C.muted, H.peach),
    brightBlack: role('Terminal bright black - gray', L.tertiary + 0.03, 0.020, H.sky),
    brightRed: role('Terminal bright red - light coral', L.primaryWarm, C.comfortable, H.red),
    brightGreen: role('Terminal bright green - mint', L.primary, C.comfortable, H.mint),
    brightYellow: role('Terminal bright yellow - warm amber', L.primaryWarm, C.comfortable, H.amber),
    brightBlue: role('Terminal bright blue - light blue', L.primary, C.comfortable, H.sky),
    brightMagenta: role('Terminal bright magenta - light rose', L.primaryWarm, C.comfortable, H.rose),
    brightCyan: role('Terminal bright cyan', L.primary, C.comfortable, H.mikuTeal),
    brightWhite: role('Terminal bright white - icy', L.primary, 0.030, H.ice),
  };
}
