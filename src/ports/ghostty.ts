/**
 * Ghostty Target
 *
 * Generates Ghostty terminal color config.
 */

import type { SemanticTokens } from '../tokens/types';
import { selectionSurface } from './shared';

export function createGhosttyTheme(t: SemanticTokens): string {
  const term = t.terminal;
  const ansi = [
    term.black, term.red, term.green, term.yellow,
    term.blue, term.magenta, term.cyan, term.white,
    term.brightBlack, term.brightRed, term.brightGreen, term.brightYellow,
    term.brightBlue, term.brightMagenta, term.brightCyan, term.brightWhite,
  ];
  const palette = ansi.map((c, i) => `palette = ${i}=${c.hex}`).join('\n');

  return `# Hatsune Miku Theme — Ghostty
# Generated — do not edit

background = ${t.ui.background.hex}
foreground = ${t.ui.foreground.hex}
cursor-color = ${t.ui.cursor.hex}
cursor-text = ${t.ui.background.hex}
selection-background = ${selectionSurface(t)}
selection-foreground = ${t.ui.foreground.hex}

search-foreground = ${t.ui.background.hex}
search-background = ${t.ui.accentSecondary.hex}
search-selected-foreground = ${t.ui.background.hex}
search-selected-background = ${t.status.warning.hex}

split-divider-color = ${t.ui.border.hex}
unfocused-split-fill = ${t.ui.backgroundVoid.hex}

window-titlebar-background = ${t.ui.backgroundHouse.hex}
window-titlebar-foreground = ${t.ui.foreground.hex}

${palette}
`;
}
