/**
 * foot Target
 *
 * Generates foot terminal color config (INI format, no # prefix).
 */

import type { SemanticTokens } from '../tokens/types';

function strip(hex: string): string {
  return hex.replace('#', '').toLowerCase();
}

export function createFootTheme(t: SemanticTokens): string {
  const term = t.terminal;
  return `# Hatsune Miku Theme — foot
# Generated — do not edit

[colors]
foreground=${strip(t.ui.foreground.hex)}
background=${strip(t.ui.background.hex)}
cursor=${strip(t.ui.background.hex)} ${strip(t.ui.cursor.hex)}
selection-foreground=${strip(t.ui.foreground.hex)}
selection-background=${strip(t.ui.selection.hex)}

regular0=${strip(term.black.hex)}
regular1=${strip(term.red.hex)}
regular2=${strip(term.green.hex)}
regular3=${strip(term.yellow.hex)}
regular4=${strip(term.blue.hex)}
regular5=${strip(term.magenta.hex)}
regular6=${strip(term.cyan.hex)}
regular7=${strip(term.white.hex)}

bright0=${strip(term.brightBlack.hex)}
bright1=${strip(term.brightRed.hex)}
bright2=${strip(term.brightGreen.hex)}
bright3=${strip(term.brightYellow.hex)}
bright4=${strip(term.brightBlue.hex)}
bright5=${strip(term.brightMagenta.hex)}
bright6=${strip(term.brightCyan.hex)}
bright7=${strip(term.brightWhite.hex)}
`;
}
