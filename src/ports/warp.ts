/**
 * Warp Target
 *
 * Generates a YAML color theme for Warp terminal.
 */

import type { SemanticTokens } from '../tokens/types';

export function createWarpTheme(t: SemanticTokens, polarity: 'dark' | 'light'): string {
  const term = t.terminal;
  const details = polarity === 'dark' ? 'darker' : 'lighter';

  return `# Hatsune Miku Theme — Warp
# Generated — do not edit

accent: "${t.ui.accentPrimary.hex}"
background: "${t.ui.background.hex}"
foreground: "${t.ui.foreground.hex}"
cursor: "${t.ui.cursor.hex}"
details: ${details}
terminal_colors:
  normal:
    black: "${term.black.hex}"
    red: "${term.red.hex}"
    green: "${term.green.hex}"
    yellow: "${term.yellow.hex}"
    blue: "${term.blue.hex}"
    magenta: "${term.magenta.hex}"
    cyan: "${term.cyan.hex}"
    white: "${term.white.hex}"
  bright:
    black: "${term.brightBlack.hex}"
    red: "${term.brightRed.hex}"
    green: "${term.brightGreen.hex}"
    yellow: "${term.brightYellow.hex}"
    blue: "${term.brightBlue.hex}"
    magenta: "${term.brightMagenta.hex}"
    cyan: "${term.brightCyan.hex}"
    white: "${term.brightWhite.hex}"
`;
}
