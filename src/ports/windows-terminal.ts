/**
 * Windows Terminal Target
 *
 * Generates a JSON color scheme for Windows Terminal.
 */

import type { SemanticTokens } from '../tokens/types';
import { selectionSurface } from './shared';

export function createWindowsTerminalTheme(t: SemanticTokens, name: string): object {
  const term = t.terminal;
  return {
    name,
    foreground: t.ui.foreground.hex,
    background: t.ui.background.hex,
    cursorColor: t.ui.cursor.hex,
    selectionBackground: selectionSurface(t),
    black: term.black.hex,
    red: term.red.hex,
    green: term.green.hex,
    yellow: term.yellow.hex,
    blue: term.blue.hex,
    purple: term.magenta.hex,
    cyan: term.cyan.hex,
    white: term.white.hex,
    brightBlack: term.brightBlack.hex,
    brightRed: term.brightRed.hex,
    brightGreen: term.brightGreen.hex,
    brightYellow: term.brightYellow.hex,
    brightBlue: term.brightBlue.hex,
    brightPurple: term.brightMagenta.hex,
    brightCyan: term.brightCyan.hex,
    brightWhite: term.brightWhite.hex,
  };
}
