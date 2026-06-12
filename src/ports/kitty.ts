/**
 * kitty Target
 *
 * Generates kitty terminal color config.
 */

import type { SemanticTokens } from '../tokens/types';
import { selectionSurface } from './shared';

export function createKittyTheme(t: SemanticTokens): string {
  const term = t.terminal;
  return `# Hatsune Miku Theme — kitty
# Generated — do not edit

foreground ${t.ui.foreground.hex}
background ${t.ui.background.hex}
cursor     ${t.ui.cursor.hex}
cursor_text_color ${t.ui.background.hex}
selection_foreground ${t.ui.foreground.hex}
selection_background ${selectionSurface(t)}
url_color ${t.ui.link.hex}

# Window borders
active_border_color ${t.ui.accentPrimary.hex}
inactive_border_color ${t.ui.border.hex}
bell_border_color ${t.status.warning.hex}
visual_bell_color none

# Tab bar
active_tab_foreground ${t.ui.foreground.hex}
active_tab_background ${t.ui.background.hex}
inactive_tab_foreground ${t.ui.foregroundMuted.hex}
inactive_tab_background ${t.ui.backgroundHouse.hex}
tab_bar_background ${t.ui.backgroundVoid.hex}
tab_bar_margin_color none

# Search marks
mark1_foreground ${t.ui.background.hex}
mark1_background ${t.ui.accentSecondary.hex}
mark2_foreground ${t.ui.background.hex}
mark2_background ${t.status.warning.hex}
mark3_foreground ${t.ui.background.hex}
mark3_background ${t.status.info.hex}

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
