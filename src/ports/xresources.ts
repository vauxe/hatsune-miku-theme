/**
 * Xresources Target
 *
 * Generates .Xresources color definitions for xterm, urxvt, etc.
 */

import type { SemanticTokens } from '../tokens/types';
import { selectionSurface } from './shared';

export function createXresourcesTheme(t: SemanticTokens): string {
  const term = t.terminal;
  const ansi = [
    term.black, term.red, term.green, term.yellow,
    term.blue, term.magenta, term.cyan, term.white,
    term.brightBlack, term.brightRed, term.brightGreen, term.brightYellow,
    term.brightBlue, term.brightMagenta, term.brightCyan, term.brightWhite,
  ];
  const colors = ansi.map((c, i) => `*color${i}: ${c.hex}`).join('\n');

  return `! Hatsune Miku Theme — Xresources
! Generated — do not edit

*background: ${t.ui.background.hex}
*foreground: ${t.ui.foreground.hex}
*cursorColor: ${t.ui.cursor.hex}
*highlightColor: ${selectionSurface(t)}
*highlightTextColor: ${t.ui.foreground.hex}

! Bold / Underline / Italic
*colorBD: ${t.ui.nearWhite.hex}
*colorUL: ${t.ui.link.hex}
*colorIT: ${t.ui.accentTertiary.hex}

! Border
*borderColor: ${t.ui.border.hex}

! Pointer
*pointerColor: ${t.ui.cursor.hex}
*pointerColor2: ${t.ui.background.hex}

${colors}
`;
}
