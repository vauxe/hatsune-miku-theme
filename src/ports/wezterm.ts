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
  scrollbar_thumb = "${t.ui.foregroundSubtle.hex}",
  split = "${t.ui.border.hex}",

  compose_cursor = "${t.status.warning.hex}",
  visual_bell = "${t.status.warning.hex}",

  copy_mode_active_highlight_fg = "${t.ui.background.hex}",
  copy_mode_active_highlight_bg = "${t.ui.accentSecondary.hex}",
  copy_mode_inactive_highlight_fg = "${t.ui.foreground.hex}",
  copy_mode_inactive_highlight_bg = "${t.ui.selection.hex}",

  quick_select_label_fg = "${t.ui.background.hex}",
  quick_select_label_bg = "${t.ui.accentPrimary.hex}",
  quick_select_match_fg = "${t.ui.background.hex}",
  quick_select_match_bg = "${t.ui.accentSecondary.hex}",

  input_selector_label_fg = "${t.ui.background.hex}",
  input_selector_label_bg = "${t.ui.accentPrimary.hex}",
  launcher_label_fg = "${t.ui.background.hex}",
  launcher_label_bg = "${t.ui.accentPrimary.hex}",

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

  tab_bar = {
    background = "${t.ui.backgroundVoid.hex}",
    inactive_tab_edge = "${t.ui.border.hex}",
    active_tab = {
      bg_color = "${t.ui.background.hex}",
      fg_color = "${t.ui.foreground.hex}",
    },
    inactive_tab = {
      bg_color = "${t.ui.backgroundHouse.hex}",
      fg_color = "${t.ui.foregroundMuted.hex}",
    },
    inactive_tab_hover = {
      bg_color = "${t.ui.backgroundFloat.hex}",
      fg_color = "${t.ui.foreground.hex}",
    },
    new_tab = {
      bg_color = "${t.ui.backgroundHouse.hex}",
      fg_color = "${t.ui.foregroundMuted.hex}",
    },
    new_tab_hover = {
      bg_color = "${t.ui.backgroundFloat.hex}",
      fg_color = "${t.ui.foreground.hex}",
    },
  },
}
`;
}
