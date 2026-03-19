/**
 * kitty Target
 *
 * Generates kitty terminal color config.
 */

import type { SemanticTokens } from '../tokens/types';

export function createKittyTheme(t: SemanticTokens): string {
  const term = t.terminal;
  return `# Hatsune Miku Theme — kitty
# Generated — do not edit

foreground ${t.ui.foreground.hex}
background ${t.ui.background.hex}
cursor     ${t.ui.cursor.hex}
cursor_text_color ${t.ui.background.hex}
selection_foreground ${t.ui.foreground.hex}
selection_background ${t.ui.selection.hex}

# Normal
color0  ${term.black.hex}
color1  ${term.red.hex}
color2  ${term.green.hex}
color3  ${term.yellow.hex}
color4  ${term.blue.hex}
color5  ${term.magenta.hex}
color6  ${term.cyan.hex}
color7  ${term.white.hex}

# Bright
color8  ${term.brightBlack.hex}
color9  ${term.brightRed.hex}
color10 ${term.brightGreen.hex}
color11 ${term.brightYellow.hex}
color12 ${term.brightBlue.hex}
color13 ${term.brightMagenta.hex}
color14 ${term.brightCyan.hex}
color15 ${term.brightWhite.hex}
`;
}
