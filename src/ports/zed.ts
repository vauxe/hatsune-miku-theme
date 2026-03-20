/**
 * Zed Target
 *
 * Generates a JSON theme for the Zed editor.
 * Color format: #RRGGBBff (alpha byte required).
 */

import { withOpacity, type SemanticTokens } from '../tokens';

function solid(hex: string): string {
  return hex.length === 7 ? `${hex}ff` : hex;
}

function alpha(hex: string, a: string): string {
  return `${hex.slice(0, 7)}${a}`;
}

export function createZedTheme(t: SemanticTokens, polarity: 'dark' | 'light', name: string): object {
  const syn = t.syntax;
  const ui = t.ui;
  const st = t.status;
  const git = t.git;
  const term = t.terminal;

  const bg = solid(ui.background.hex);
  const fg = solid(ui.foreground.hex);
  const houseBg = solid(ui.backgroundHouse.hex);
  const floatBg = solid(ui.backgroundFloat.hex);
  const voidBg = solid(ui.backgroundVoid.hex);
  const accent = solid(ui.accentPrimary.hex);
  const border = solid(ui.border.hex);
  const borderSubtle = solid(ui.borderSubtle.hex);
  const muted = solid(ui.foregroundMuted.hex);
  const subtle = solid(ui.foregroundSubtle.hex);

  return {
    $schema: 'https://zed.dev/schema/themes/v0.2.0.json',
    name,
    author: 'vauxe',
    themes: [
      {
        name,
        appearance: polarity,
        style: {
          // =================================================================
          // BACKGROUNDS
          // =================================================================
          background: houseBg,
          'elevated_surface.background': floatBg,
          'surface.background': houseBg,
          'panel.background': houseBg,
          'panel.focused_border': accent,
          'editor.background': bg,
          'editor.foreground': fg,
          'editor.gutter.background': bg,
          'editor.subheader.background': houseBg,
          'editor.active_line.background': houseBg,
          'editor.highlighted_line.background': alpha(accent, '15'),
          'editor.line_number': subtle,
          'editor.active_line_number': accent,
          'editor.invisible': subtle,
          'editor.wrap_guide': subtle,
          'editor.active_wrap_guide': muted,
          'editor.indent_guide': subtle,
          'editor.indent_guide_active': muted,
          'editor.document_highlight.read_background': alpha(accent, '25'),
          'editor.document_highlight.write_background': alpha(accent, '40'),
          'drop_target.background': alpha(accent, '25'),

          // Status / Title / Tab / Toolbar bars
          'status_bar.background': houseBg,
          'title_bar.background': houseBg,
          'title_bar.inactive_background': houseBg,
          'tab_bar.background': voidBg,
          'tab.active_background': bg,
          'tab.inactive_background': houseBg,
          'toolbar.background': bg,
          'search.match_background': alpha(solid(syn.function.hex), '40'),

          // =================================================================
          // TEXT
          // =================================================================
          text: fg,
          'text.accent': accent,
          'text.muted': muted,
          'text.placeholder': subtle,
          'text.disabled': subtle,

          // =================================================================
          // ICONS
          // =================================================================
          icon: fg,
          'icon.accent': accent,
          'icon.muted': muted,
          'icon.disabled': subtle,

          // =================================================================
          // LINKS
          // =================================================================
          'link_text.hover': solid(ui.link.hex),

          // =================================================================
          // PREDICTIVE / GHOST TEXT
          // =================================================================
          predictive: solid(ui.ghostText.hex),
          unreachable: muted,
          hidden: subtle,
          ignored: subtle,

          // =================================================================
          // BORDERS
          // =================================================================
          border,
          'border.variant': borderSubtle,
          'border.focused': accent,
          'border.selected': accent,
          'border.transparent': alpha(border, '00'),
          'border.disabled': subtle,
          'pane.focused_border': accent,

          // =================================================================
          // ELEMENTS
          // =================================================================
          'element.background': alpha(accent, '08'),
          'element.hover': alpha(accent, '15'),
          'element.active': alpha(accent, '25'),
          'element.selected': alpha(accent, '25'),
          'element.disabled': alpha(fg, '08'),
          'ghost_element.background': alpha(fg, '00'),
          'ghost_element.hover': alpha(accent, '15'),
          'ghost_element.active': alpha(accent, '25'),
          'ghost_element.selected': alpha(accent, '25'),
          'ghost_element.disabled': alpha(fg, '08'),

          // =================================================================
          // SCROLLBAR
          // =================================================================
          'scrollbar.thumb.background': alpha(accent, '25'),
          'scrollbar.thumb.hover_background': alpha(accent, '40'),
          'scrollbar.track.background': alpha(fg, '00'),
          'scrollbar.thumb.border': alpha(fg, '00'),
          'scrollbar.track.border': alpha(fg, '00'),

          // =================================================================
          // STATUS COLORS
          // =================================================================
          error: solid(st.error.hex),
          'error.background': alpha(solid(st.error.hex), '15'),
          'error.border': solid(st.error.hex),
          warning: solid(st.warning.hex),
          'warning.background': alpha(solid(st.warning.hex), '15'),
          'warning.border': solid(st.warning.hex),
          success: solid(st.success.hex),
          'success.background': alpha(solid(st.success.hex), '15'),
          'success.border': solid(st.success.hex),
          info: solid(st.info.hex),
          'info.background': alpha(solid(st.info.hex), '15'),
          'info.border': solid(st.info.hex),
          hint: accent,
          'hint.background': alpha(accent, '15'),
          'hint.border': accent,

          // =================================================================
          // VERSION CONTROL
          // =================================================================
          created: solid(git.added.hex),
          'created.background': alpha(solid(git.added.hex), '15'),
          'created.border': solid(git.added.hex),
          modified: solid(git.modified.hex),
          'modified.background': alpha(solid(git.modified.hex), '15'),
          'modified.border': solid(git.modified.hex),
          deleted: solid(git.deleted.hex),
          'deleted.background': alpha(solid(git.deleted.hex), '15'),
          'deleted.border': solid(git.deleted.hex),
          conflict: solid(git.conflicting.hex),
          'conflict.background': alpha(solid(git.conflicting.hex), '15'),
          'conflict.border': solid(git.conflicting.hex),
          renamed: solid(git.renamed.hex),
          'renamed.background': alpha(solid(git.renamed.hex), '15'),
          'renamed.border': solid(git.renamed.hex),

          // =================================================================
          // TERMINAL
          // =================================================================
          'terminal.background': bg,
          'terminal.foreground': fg,
          'terminal.bright_foreground': solid(term.brightWhite.hex),
          'terminal.dim_foreground': muted,
          'terminal.ansi.black': solid(term.black.hex),
          'terminal.ansi.red': solid(term.red.hex),
          'terminal.ansi.green': solid(term.green.hex),
          'terminal.ansi.yellow': solid(term.yellow.hex),
          'terminal.ansi.blue': solid(term.blue.hex),
          'terminal.ansi.magenta': solid(term.magenta.hex),
          'terminal.ansi.cyan': solid(term.cyan.hex),
          'terminal.ansi.white': solid(term.white.hex),
          'terminal.ansi.bright_black': solid(term.brightBlack.hex),
          'terminal.ansi.bright_red': solid(term.brightRed.hex),
          'terminal.ansi.bright_green': solid(term.brightGreen.hex),
          'terminal.ansi.bright_yellow': solid(term.brightYellow.hex),
          'terminal.ansi.bright_blue': solid(term.brightBlue.hex),
          'terminal.ansi.bright_magenta': solid(term.brightMagenta.hex),
          'terminal.ansi.bright_cyan': solid(term.brightCyan.hex),
          'terminal.ansi.bright_white': solid(term.brightWhite.hex),
          'terminal.ansi.dim_black': alpha(solid(term.black.hex), '80'),
          'terminal.ansi.dim_red': alpha(solid(term.red.hex), '80'),
          'terminal.ansi.dim_green': alpha(solid(term.green.hex), '80'),
          'terminal.ansi.dim_yellow': alpha(solid(term.yellow.hex), '80'),
          'terminal.ansi.dim_blue': alpha(solid(term.blue.hex), '80'),
          'terminal.ansi.dim_magenta': alpha(solid(term.magenta.hex), '80'),
          'terminal.ansi.dim_cyan': alpha(solid(term.cyan.hex), '80'),
          'terminal.ansi.dim_white': alpha(solid(term.white.hex), '80'),

          // =================================================================
          // PLAYERS (collaboration cursors)
          // =================================================================
          players: [
            { cursor: solid(ui.cursor.hex), background: accent, selection: alpha(accent, '40') },
            { cursor: solid(st.success.hex), background: solid(st.success.hex), selection: alpha(solid(st.success.hex), '40') },
            { cursor: solid(st.warning.hex), background: solid(st.warning.hex), selection: alpha(solid(st.warning.hex), '40') },
            { cursor: solid(st.error.hex), background: solid(st.error.hex), selection: alpha(solid(st.error.hex), '40') },
            { cursor: solid(st.info.hex), background: solid(st.info.hex), selection: alpha(solid(st.info.hex), '40') },
            { cursor: solid(ui.accentSecondary.hex), background: solid(ui.accentSecondary.hex), selection: alpha(solid(ui.accentSecondary.hex), '40') },
            { cursor: solid(ui.accentTertiary.hex), background: solid(ui.accentTertiary.hex), selection: alpha(solid(ui.accentTertiary.hex), '40') },
            { cursor: solid(syn.macro.hex), background: solid(syn.macro.hex), selection: alpha(solid(syn.macro.hex), '40') },
          ],

          // =================================================================
          // SYNTAX
          // =================================================================
          syntax: {
            attribute: { color: solid(syn.macro.hex) },
            boolean: { color: solid(syn.boolean.hex) },
            comment: { color: solid(syn.comment.hex), font_style: 'italic' },
            'comment.doc': { color: solid(syn.commentDoc.hex), font_style: 'italic' },
            constant: { color: solid(syn.constant.hex) },
            constructor: { color: solid(syn.class.hex) },
            embedded: { color: solid(syn.stringTemplate.hex) },
            enum: { color: solid(syn.enum.hex) },
            function: { color: solid(syn.function.hex) },
            'function.method': { color: solid(syn.method.hex) },
            'function.special.definition': { color: solid(syn.macro.hex) },
            keyword: { color: solid(syn.keyword.hex) },
            label: { color: solid(syn.keywordControl.hex) },
            number: { color: solid(syn.number.hex) },
            operator: { color: solid(syn.operator.hex) },
            property: { color: solid(syn.property.hex) },
            punctuation: { color: solid(syn.punctuation.hex) },
            'punctuation.bracket': { color: solid(syn.punctuation.hex) },
            'punctuation.delimiter': { color: solid(syn.punctuation.hex) },
            'punctuation.list_marker': { color: solid(syn.punctuation.hex) },
            'punctuation.special': { color: solid(syn.punctuation.hex) },
            string: { color: solid(syn.string.hex) },
            'string.escape': { color: solid(syn.parameter.hex) },
            'string.regex': { color: solid(syn.regex.hex) },
            'string.special': { color: solid(syn.stringTemplate.hex) },
            'string.special.symbol': { color: solid(syn.constant.hex) },
            tag: { color: solid(syn.tag.hex) },
            'text.literal': { color: solid(t.markdown.codeBlock.hex) },
            title: { color: solid(t.markdown.heading.hex), font_weight: 700 },
            type: { color: solid(syn.type.hex) },
            'type.interface': { color: solid(syn.interface.hex) },
            variable: { color: solid(syn.variable.hex) },
            'variable.parameter': { color: solid(syn.parameter.hex) },
            'variable.special': { color: solid(syn.variableLanguage.hex), font_style: 'italic' },
            preproc: { color: solid(syn.macro.hex) },
            link_text: { color: solid(ui.link.hex) },
            link_uri: { color: solid(t.markdown.linkUrl.hex) },
            namespace: { color: solid(syn.type.hex) },
            emphasis: { font_style: 'italic' },
            'emphasis.strong': { font_weight: 700 },
          },
        },
      },
    ],
  };
}
