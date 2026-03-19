/**
 * Alacritty Target
 *
 * Generates alacritty.toml color config.
 */

import type { SemanticTokens } from '../tokens/types';

export function createAlacrittyTheme(t: SemanticTokens): string {
  const term = t.terminal;
  return `# Hatsune Miku Theme — Alacritty
# Generated — do not edit

[colors.primary]
background = "${t.ui.background.hex}"
foreground = "${t.ui.foreground.hex}"

[colors.cursor]
cursor = "${t.ui.cursor.hex}"
text = "${t.ui.background.hex}"

[colors.selection]
background = "${t.ui.selection.hex}"
text = "${t.ui.foreground.hex}"

[colors.normal]
black   = "${term.black.hex}"
red     = "${term.red.hex}"
green   = "${term.green.hex}"
yellow  = "${term.yellow.hex}"
blue    = "${term.blue.hex}"
magenta = "${term.magenta.hex}"
cyan    = "${term.cyan.hex}"
white   = "${term.white.hex}"

[colors.bright]
black   = "${term.brightBlack.hex}"
red     = "${term.brightRed.hex}"
green   = "${term.brightGreen.hex}"
yellow  = "${term.brightYellow.hex}"
blue    = "${term.brightBlue.hex}"
magenta = "${term.brightMagenta.hex}"
cyan    = "${term.brightCyan.hex}"
white   = "${term.brightWhite.hex}"
`;
}
