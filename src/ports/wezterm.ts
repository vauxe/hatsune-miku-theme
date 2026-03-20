/**
 * WezTerm Target
 *
 * Generates a Lua color scheme for WezTerm.
 */

import type { SemanticTokens } from '../tokens/types';

export function createWezTermTheme(t: SemanticTokens): string {
  const term = t.terminal;
  return `-- Hatsune Miku Theme — WezTerm
-- Generated — do not edit

return {
  foreground = "${t.ui.foreground.hex}",
  background = "${t.ui.background.hex}",
  cursor_fg = "${t.ui.background.hex}",
  cursor_bg = "${t.ui.cursor.hex}",
  cursor_border = "${t.ui.cursor.hex}",
  selection_fg = "${t.ui.foreground.hex}",
  selection_bg = "${t.ui.selection.hex}",

  ansi = {
    "${term.black.hex}",
    "${term.red.hex}",
    "${term.green.hex}",
    "${term.yellow.hex}",
    "${term.blue.hex}",
    "${term.magenta.hex}",
    "${term.cyan.hex}",
    "${term.white.hex}",
  },
  brights = {
    "${term.brightBlack.hex}",
    "${term.brightRed.hex}",
    "${term.brightGreen.hex}",
    "${term.brightYellow.hex}",
    "${term.brightBlue.hex}",
    "${term.brightMagenta.hex}",
    "${term.brightCyan.hex}",
    "${term.brightWhite.hex}",
  },
}
`;
}
