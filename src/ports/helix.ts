/**
 * Helix Target
 *
 * Generates a TOML theme for the Helix editor.
 */

import { withOpacity, type SemanticTokens } from '../tokens';
import { flattenEmbeddedAlpha, selectionSurface } from './shared';

type Style = string | { fg?: string; bg?: string; modifiers?: string[]; underline?: { color: string; style: string } };

function fmt(s: Style): string {
  if (typeof s === 'string') return `"${s}"`;
  const parts: string[] = [];
  if (s.fg) parts.push(`fg = "${s.fg}"`);
  if (s.bg) parts.push(`bg = "${s.bg}"`);
  if (s.underline) parts.push(`underline = { color = "${s.underline.color}", style = "${s.underline.style}" }`);
  if (s.modifiers?.length) parts.push(`modifiers = [${s.modifiers.map(m => `"${m}"`).join(', ')}]`);
  return `{ ${parts.join(', ')} }`;
}

export function createHelixTheme(t: SemanticTokens): string {
  const syn = t.syntax;
  const ui = t.ui;
  const st = t.status;
  const git = t.git;

  // Helix runs in terminals — no alpha; use the composited surface.
  const selBg = selectionSurface(t);
  const houseBg = ui.backgroundHouse.hex;
  const floatBg = ui.backgroundFloat.hex;
  const voidBg = ui.backgroundVoid.hex;
  const bg = ui.background.hex;
  const fg = ui.foreground.hex;
  const cursorlineSecondaryBg = flattenEmbeddedAlpha(withOpacity(houseBg, 'CC'), bg);
  const highlightBg = flattenEmbeddedAlpha(withOpacity(ui.accentPrimary.hex, '25'), bg);

  const entries: Record<string, Style> = {
    // =========================================================================
    // SYNTAX
    // =========================================================================
    'attribute': syn.macro.hex,
    'type': syn.type.hex,
    'type.builtin': syn.type.hex,
    'type.parameter': syn.typeParameter.hex,
    'type.enum': syn.enum.hex,
    'type.enum.variant': syn.enumMember.hex,
    'constructor': syn.class.hex,
    'constant': syn.constant.hex,
    'constant.builtin': syn.constant.hex,
    'constant.builtin.boolean': syn.boolean.hex,
    'constant.character': syn.string.hex,
    'constant.character.escape': syn.parameter.hex,
    'constant.numeric': syn.number.hex,
    'constant.numeric.integer': syn.number.hex,
    'constant.numeric.float': syn.number.hex,
    'string': syn.string.hex,
    'string.regexp': syn.regex.hex,
    'string.special': syn.stringTemplate.hex,
    'string.special.url': { fg: ui.link.hex, modifiers: ['underlined'] },
    'string.special.symbol': syn.constant.hex,
    'string.special.path': syn.string.hex,
    'comment': { fg: syn.comment.hex, modifiers: ['italic'] },
    'comment.line': { fg: syn.comment.hex, modifiers: ['italic'] },
    'comment.line.documentation': { fg: syn.commentDoc.hex, modifiers: ['italic'] },
    'comment.block': { fg: syn.comment.hex, modifiers: ['italic'] },
    'comment.block.documentation': { fg: syn.commentDoc.hex, modifiers: ['italic'] },
    'variable': syn.variable.hex,
    'variable.builtin': { fg: syn.variableLanguage.hex, modifiers: ['italic'] },
    'variable.parameter': syn.parameter.hex,
    'variable.other': syn.variable.hex,
    'variable.other.member': syn.property.hex,
    'label': syn.keywordControl.hex,
    'punctuation': syn.punctuation.hex,
    'punctuation.delimiter': syn.punctuation.hex,
    'punctuation.bracket': syn.punctuation.hex,
    'punctuation.special': syn.punctuation.hex,
    'keyword': syn.keyword.hex,
    'keyword.control': syn.keywordControl.hex,
    'keyword.control.conditional': syn.keywordControl.hex,
    'keyword.control.repeat': syn.keywordControl.hex,
    'keyword.control.import': syn.keyword.hex,
    'keyword.control.return': syn.keywordControl.hex,
    'keyword.control.exception': syn.keywordControl.hex,
    'keyword.operator': syn.operator.hex,
    'keyword.directive': syn.macro.hex,
    'keyword.function': syn.keyword.hex,
    'keyword.storage': syn.storage.hex,
    'keyword.storage.type': syn.storage.hex,
    'keyword.storage.modifier': syn.storageModifier.hex,
    'operator': syn.operator.hex,
    'function': syn.function.hex,
    'function.builtin': t.support.function.hex,
    'function.method': syn.method.hex,
    'function.macro': syn.macro.hex,
    'function.special': syn.macro.hex,
    'tag': syn.tag.hex,
    'tag.builtin': syn.tag.hex,
    'namespace': syn.type.hex,
    'special': syn.parameter.hex,

    // =========================================================================
    // MARKUP
    // =========================================================================
    'markup.heading': { fg: t.markdown.heading.hex, modifiers: ['bold'] },
    'markup.heading.1': { fg: t.markdown.heading.hex, modifiers: ['bold'] },
    'markup.heading.2': { fg: t.markdown.heading.hex, modifiers: ['bold'] },
    'markup.heading.3': { fg: t.markdown.heading.hex, modifiers: ['bold'] },
    'markup.heading.4': { fg: t.markdown.heading.hex, modifiers: ['bold'] },
    'markup.heading.5': { fg: t.markdown.heading.hex, modifiers: ['bold'] },
    'markup.heading.6': { fg: t.markdown.heading.hex, modifiers: ['bold'] },
    'markup.heading.marker': { fg: t.markdown.headingPunctuation.hex },
    'markup.heading.completion': { fg: t.markdown.heading.hex },
    'markup.normal.completion': { fg },
    'markup.bold': { modifiers: ['bold'] },
    'markup.italic': { modifiers: ['italic'] },
    'markup.strikethrough': { modifiers: ['crossed_out'] },
    'markup.link.url': { fg: t.markdown.linkUrl.hex, modifiers: ['underlined'] },
    'markup.link.text': { fg: ui.link.hex },
    'markup.link.label': { fg: ui.link.hex },
    'markup.quote': { fg: t.markdown.quote.hex, modifiers: ['italic'] },
    'markup.raw': { fg: t.markdown.codeBlock.hex },
    'markup.raw.inline': { fg: t.markdown.codeBlock.hex },
    'markup.raw.block': { fg: t.markdown.codeBlock.hex },
    'markup.list': { fg: syn.punctuation.hex },
    'markup.list.numbered': { fg: syn.punctuation.hex },
    'markup.list.unnumbered': { fg: syn.punctuation.hex },
    'markup.list.checked': { fg: st.success.hex },
    'markup.list.unchecked': { fg: ui.foregroundMuted.hex },

    // =========================================================================
    // DIFF
    // =========================================================================
    'diff.plus': { fg: git.added.hex },
    'diff.plus.gutter': { fg: git.added.hex },
    'diff.minus': { fg: git.deleted.hex },
    'diff.minus.gutter': { fg: git.deleted.hex },
    'diff.delta': { fg: git.modified.hex },
    'diff.delta.moved': { fg: git.renamed.hex },

    // =========================================================================
    // DIAGNOSTICS
    // =========================================================================
    'warning': { fg: st.warning.hex },
    'error': { fg: st.error.hex },
    'info': { fg: st.info.hex },
    'hint': { fg: ui.accentPrimary.hex },
    'diagnostic': { modifiers: ['underlined'] },
    'diagnostic.warning': { underline: { color: st.warning.hex, style: 'curl' } },
    'diagnostic.error': { underline: { color: st.error.hex, style: 'curl' } },
    'diagnostic.info': { underline: { color: st.info.hex, style: 'curl' } },
    'diagnostic.hint': { underline: { color: ui.accentPrimary.hex, style: 'curl' } },
    'diagnostic.unnecessary': { fg: ui.foregroundSubtle.hex },
    'diagnostic.deprecated': { modifiers: ['crossed_out'] },

    // =========================================================================
    // UI — EDITOR
    // =========================================================================
    'ui.background': { bg: bg },
    'ui.background.separator': { fg: ui.border.hex },
    'ui.text': { fg: fg },
    'ui.text.focus': { fg: ui.accentPrimary.hex },
    'ui.text.inactive': { fg: ui.foregroundMuted.hex },
    'ui.text.info': { fg: st.info.hex },
    'ui.text.directory': { fg: ui.accentPrimary.hex },

    // UI — Cursor
    'ui.cursor': { fg: bg, bg: ui.cursor.hex },
    'ui.cursor.match': { fg: ui.cursor.hex, modifiers: ['bold'] },
    'ui.cursor.primary': { fg: bg, bg: ui.cursor.hex },
    'ui.cursor.primary.normal': { fg: bg, bg: ui.cursor.hex },
    'ui.cursor.primary.insert': { fg: bg, bg: ui.accentPrimary.hex },
    'ui.cursor.primary.select': { fg: bg, bg: ui.accentSecondary.hex },
    'ui.cursor.secondary': { fg: bg, bg: ui.foregroundMuted.hex },
    'ui.cursor.secondary.normal': { fg: bg, bg: ui.foregroundMuted.hex },
    'ui.cursor.secondary.insert': { fg: bg, bg: ui.foregroundSubtle.hex },
    'ui.cursor.secondary.select': { fg: bg, bg: ui.foregroundSubtle.hex },

    // UI — Gutter / line numbers
    'ui.linenr': { fg: ui.foregroundSubtle.hex },
    'ui.linenr.selected': { fg: ui.accentPrimary.hex, modifiers: ['bold'] },
    'ui.gutter': { bg: bg },
    'ui.gutter.selected': { bg: houseBg },

    // UI — Cursorline
    'ui.cursorline.primary': { bg: houseBg },
    'ui.cursorline.secondary': { bg: cursorlineSecondaryBg },

    // UI — Selection / highlights
    'ui.selection': { bg: selBg },
    'ui.selection.primary': { bg: selBg },
    'ui.highlight': { bg: highlightBg },

    // UI — Statusline
    'ui.statusline': { fg: fg, bg: houseBg },
    'ui.statusline.inactive': { fg: ui.foregroundMuted.hex, bg: houseBg },
    'ui.statusline.normal': { fg: bg, bg: ui.accentPrimary.hex, modifiers: ['bold'] },
    'ui.statusline.insert': { fg: bg, bg: st.success.hex, modifiers: ['bold'] },
    'ui.statusline.select': { fg: bg, bg: ui.cursor.hex, modifiers: ['bold'] },
    'ui.statusline.separator': { fg: ui.border.hex },

    // UI — Bufferline (tabs)
    'ui.bufferline': { fg: ui.foregroundMuted.hex, bg: voidBg },
    'ui.bufferline.active': { fg, bg, modifiers: ['bold'] },
    'ui.bufferline.background': { bg: voidBg },

    // UI — Popups / menus
    'ui.popup': { fg, bg: floatBg },
    'ui.popup.info': { fg, bg: floatBg },
    'ui.menu': { fg, bg: floatBg },
    'ui.menu.selected': { fg, bg: selBg },
    'ui.menu.scroll': { fg: ui.accentPrimary.hex },
    'ui.help': { fg, bg: floatBg },

    // UI — Picker
    'ui.picker': { fg, bg: floatBg },
    'ui.picker.header': { fg: ui.foregroundMuted.hex, modifiers: ['bold'] },
    'ui.picker.header.column': { fg: ui.foregroundMuted.hex },
    'ui.picker.header.column.active': { fg: ui.accentPrimary.hex, modifiers: ['bold'] },

    // UI — Windows / borders
    'ui.window': { fg: ui.border.hex },

    // UI — Virtual / decorations
    'ui.virtual': { fg: ui.foregroundSubtle.hex },
    'ui.virtual.ruler': { bg: houseBg },
    'ui.virtual.whitespace': { fg: ui.whitespace.hex },
    'ui.virtual.indent-guide': { fg: ui.foregroundSubtle.hex },
    'ui.virtual.indent-guide.active': { fg: ui.foregroundMuted.hex },
    'ui.virtual.inlay-hint': { fg: ui.foregroundSubtle.hex, modifiers: ['italic'] },
    'ui.virtual.inlay-hint.parameter': { fg: ui.foregroundSubtle.hex, modifiers: ['italic'] },
    'ui.virtual.inlay-hint.type': { fg: ui.foregroundSubtle.hex, modifiers: ['italic'] },
    'ui.virtual.wrap': { fg: ui.foregroundSubtle.hex },
    'ui.virtual.jump-label': { fg: bg, bg: ui.cursor.hex, modifiers: ['bold'] },

    // UI — Debug
    'ui.debug.breakpoint': { fg: st.error.hex },
    'ui.debug.active': { fg: st.warning.hex },
    'ui.debug.active.gutter': { fg: st.warning.hex },
  };

  const lines = Object.entries(entries)
    .map(([key, val]) => `"${key}" = ${fmt(val)}`)
    .join('\n');

  return `# Hatsune Miku Theme — Helix
# Generated — do not edit

${lines}
`;
}
