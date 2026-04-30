/**
 * Zed Target
 *
 * Generates a JSON theme for the Zed editor.
 * Color format: #RRGGBBff (alpha byte required).
 */

import type { SemanticTokens } from '../tokens';
import { createWorkbenchColors } from '../theme/workbench';

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
  const workbench = createWorkbenchColors(t, polarity);
  const wb = (key: string, fallback: string): string => solid(workbench[key] ?? fallback);

  const bg = wb('editor.background', ui.background.hex);
  const fg = wb('editor.foreground', ui.foreground.hex);
  const houseBg = wb('sideBar.background', ui.backgroundHouse.hex);
  const panelBg = wb('panel.background', ui.background.hex);
  const floatBg = wb('editorWidget.background', ui.backgroundFloat.hex);
  const tabBarBg = wb('editorGroupHeader.tabsBackground', ui.backgroundHouse.hex);
  const accent = solid(ui.accentPrimary.hex);
  const focus = wb('focusBorder', polarity === 'light' ? ui.cursor.hex : ui.activeBorder.hex);
  const cursor = wb('editorCursor.foreground', ui.cursor.hex);
  const border = solid(ui.border.hex);
  const borderSubtle = solid(ui.borderSubtle.hex);
  const muted = wb('descriptionForeground', ui.foregroundMuted.hex);
  const subtle = wb('editorLineNumber.foreground', ui.foregroundSubtle.hex);
  const placeholder = wb('input.placeholderForeground', ui.placeholder.hex);
  const disabled = wb('disabledForeground', ui.disabled.hex);
  const linkHover = wb('textLink.activeForeground', ui.link.hex);
  const transparent = alpha(fg, '00');
  const activeLineBg = wb('editor.lineHighlightBackground', alpha(t.decorative.cursorLineFrost, '15'));
  const activeLineNumber = wb('editorLineNumber.activeForeground', ui.accentSecondary.hex);
  const bracketMatchBg = wb('editorBracketMatch.background', alpha(accent, '25'));
  const readHighlightBg = wb('editor.wordHighlightBackground', alpha(accent, '40'));
  const writeHighlightBg = wb('editor.wordHighlightStrongBackground', alpha(accent, '40'));
  const selectionBg = wb('editor.selectionBackground', alpha(t.decorative.cursorLineFrost, '40'));
  const findMatchBg = wb(
    'editor.findMatchBackground',
    alpha(polarity === 'light' ? t.decorative.findMatchOverlay : st.warning.hex, '40')
  );
  const findHighlightBg = wb('editor.findMatchHighlightBackground', alpha(ui.accentSecondary.hex, '40'));
  const elementBg = wb('input.background', ui.backgroundHouse.hex);
  const elementHover = wb('list.hoverBackground', alpha(accent, '40'));
  const elementActive = wb('list.focusBackground', alpha(accent, '15'));
  const elementSelected = wb('list.activeSelectionBackground', selectionBg);
  const dropTargetBg = wb('list.dropBackground', alpha(accent, '40'));
  const scrollbarThumb = wb('scrollbarSlider.background', alpha(accent, '40'));
  const scrollbarThumbHover = wb('scrollbarSlider.hoverBackground', alpha(accent, '60'));
  const scrollbarThumbActive = wb('scrollbarSlider.activeBackground', alpha(accent, '80'));
  const predictiveBg = wb('editorGhostText.background', alpha(ui.foregroundMuted.hex, '08'));
  const predictiveBorder = wb('editorGhostText.border', alpha(ui.accentTertiary.hex, '25'));
  const diffAdded = wb('diffEditor.insertedTextBackground', alpha(t.decorative.diffInserted, '40'));
  const diffDeleted = wb('diffEditor.removedTextBackground', alpha(t.decorative.diffRemoved, '40'));
  const accents = [
    accent,
    cursor,
    solid(st.success.hex),
    solid(st.warning.hex),
    solid(st.error.hex),
    solid(st.info.hex),
    solid(syn.macro.hex),
  ];

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
          accents,
          background: houseBg,
          'background.appearance': 'opaque',
          'elevated_surface.background': floatBg,
          'surface.background': houseBg,
          'panel.background': houseBg,
          'panel.focused_border': focus,
          'panel.indent_guide': subtle,
          'panel.indent_guide_active': muted,
          'panel.indent_guide_hover': muted,
          'editor.background': bg,
          'editor.foreground': fg,
          'editor.gutter.background': bg,
          'editor.subheader.background': houseBg,
          'editor.active_line.background': activeLineBg,
          'editor.highlighted_line.background': activeLineBg,
          'editor.line_number': subtle,
          'editor.active_line_number': activeLineNumber,
          'editor.hover_line_number': muted,
          'editor.invisible': subtle,
          'editor.wrap_guide': subtle,
          'editor.active_wrap_guide': muted,
          'editor.indent_guide': subtle,
          'editor.indent_guide_active': muted,
          'editor.document_highlight.bracket_background': bracketMatchBg,
          'editor.document_highlight.read_background': readHighlightBg,
          'editor.document_highlight.write_background': writeHighlightBg,
          'drop_target.background': dropTargetBg,

          // Status / Title / Tab / Toolbar bars
          'status_bar.background': houseBg,
          'title_bar.background': houseBg,
          'title_bar.inactive_background': houseBg,
          'tab_bar.background': tabBarBg,
          'tab.active_background': bg,
          'tab.inactive_background': houseBg,
          'toolbar.background': panelBg,
          'search.match_background': findHighlightBg,
          'search.active_match_background': findMatchBg,

          // =================================================================
          // TEXT
          // =================================================================
          text: fg,
          'text.accent': accent,
          'text.muted': muted,
          'text.placeholder': placeholder,
          'text.disabled': disabled,

          // =================================================================
          // ICONS
          // =================================================================
          icon: fg,
          'icon.accent': accent,
          'icon.muted': muted,
          'icon.placeholder': placeholder,
          'icon.disabled': disabled,

          // =================================================================
          // LINKS
          // =================================================================
          'link_text.hover': linkHover,

          // =================================================================
          // PREDICTIVE / GHOST TEXT
          // =================================================================
          predictive: wb('editorGhostText.foreground', ui.ghostText.hex),
          'predictive.background': predictiveBg,
          'predictive.border': predictiveBorder,
          unreachable: muted,
          'unreachable.background': alpha(muted, '15'),
          'unreachable.border': borderSubtle,
          hidden: subtle,
          'hidden.background': alpha(subtle, '15'),
          'hidden.border': borderSubtle,
          ignored: subtle,
          'ignored.background': alpha(subtle, '15'),
          'ignored.border': borderSubtle,

          // =================================================================
          // BORDERS
          // =================================================================
          border,
          'border.variant': borderSubtle,
          'border.focused': focus,
          'border.selected': accent,
          'border.transparent': alpha(border, '00'),
          'border.disabled': disabled,
          'pane.focused_border': focus,
          'pane_group.border': borderSubtle,

          // =================================================================
          // ELEMENTS
          // =================================================================
          'element.background': elementBg,
          'element.hover': elementHover,
          'element.active': elementActive,
          'element.selected': elementSelected,
          'element.disabled': alpha(fg, '08'),
          'ghost_element.background': alpha(fg, '00'),
          'ghost_element.hover': elementHover,
          'ghost_element.active': elementActive,
          'ghost_element.selected': elementSelected,
          'ghost_element.disabled': alpha(fg, '08'),

          // =================================================================
          // SCROLLBAR
          // =================================================================
          'scrollbar.thumb.background': scrollbarThumb,
          'scrollbar.thumb.hover_background': scrollbarThumbHover,
          'scrollbar.thumb.active_background': scrollbarThumbActive,
          'scrollbar.track.background': transparent,
          'scrollbar.thumb.border': transparent,
          'scrollbar.track.border': transparent,

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
          'version_control.added': solid(git.added.hex),
          'version_control.modified': solid(git.modified.hex),
          'version_control.deleted': solid(git.deleted.hex),
          'version_control.word_added': diffAdded,
          'version_control.word_deleted': diffDeleted,
          'version_control.conflict_marker.ours': alpha(solid(git.added.hex), '25'),
          'version_control.conflict_marker.theirs': alpha(solid(git.renamed.hex), '25'),

          // =================================================================
          // TERMINAL
          // =================================================================
          'terminal.background': bg,
          'terminal.ansi.background': bg,
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
            { cursor, background: cursor, selection: selectionBg },
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
            'constant.builtin': { color: solid(t.support.constant.hex) },
            constructor: { color: solid(syn.class.hex) },
            'diff.plus': { color: solid(t.markdown.inserted.hex) },
            'diff.minus': { color: solid(t.markdown.deleted.hex) },
            embedded: { color: solid(syn.stringTemplate.hex) },
            enum: { color: solid(syn.enum.hex) },
            function: { color: solid(syn.function.hex) },
            'function.builtin': { color: solid(t.support.function.hex) },
            'function.method': { color: solid(syn.method.hex) },
            'function.special.definition': { color: solid(syn.macro.hex) },
            hint: { color: solid(ui.terminalHint.hex) },
            keyword: { color: solid(syn.keyword.hex) },
            label: { color: solid(syn.keywordControl.hex) },
            number: { color: solid(syn.number.hex) },
            operator: { color: solid(syn.operator.hex) },
            predictive: { color: solid(ui.ghostText.hex), font_style: 'italic' },
            property: { color: solid(syn.property.hex) },
            primary: { color: fg },
            punctuation: { color: solid(syn.punctuation.hex) },
            'punctuation.bracket': { color: solid(syn.punctuation.hex) },
            'punctuation.delimiter': { color: solid(syn.punctuation.hex) },
            'punctuation.list_marker': { color: solid(syn.punctuation.hex) },
            'punctuation.markup': { color: solid(t.markdown.headingPunctuation.hex) },
            'punctuation.special': { color: solid(syn.punctuation.hex) },
            selector: { color: solid(syn.tag.hex) },
            'selector.pseudo': { color: solid(syn.macro.hex) },
            string: { color: solid(syn.string.hex) },
            'string.escape': { color: solid(syn.parameter.hex) },
            'string.regex': { color: solid(syn.regex.hex) },
            'string.special': { color: solid(syn.stringTemplate.hex) },
            'string.special.symbol': { color: solid(syn.constant.hex) },
            tag: { color: solid(syn.tag.hex) },
            'tag.doctype': { color: solid(syn.keywordControl.hex) },
            'text.literal': { color: solid(t.markdown.codeBlock.hex) },
            title: { color: solid(t.markdown.heading.hex), font_weight: 700 },
            type: { color: solid(syn.type.hex) },
            'type.builtin': { color: solid(t.support.type.hex) },
            'type.interface': { color: solid(syn.interface.hex) },
            variable: { color: solid(syn.variable.hex) },
            'variable.parameter': { color: solid(syn.parameter.hex) },
            'variable.special': { color: solid(syn.variableLanguage.hex), font_style: 'italic' },
            variant: { color: solid(syn.enumMember.hex) },
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
