/**
 * Neovim Target
 *
 * Generates a Lua colorscheme for Neovim 0.10+.
 * Covers: legacy vim groups, TreeSitter captures, LSP semantic tokens,
 * diagnostics, diff, and common plugins (GitSigns, Telescope).
 */

import { withOpacity, type SemanticTokens } from '../tokens';

type HlDef = {
  fg?: string;
  bg?: string;
  sp?: string;
  bold?: true;
  italic?: true;
  underline?: true;
  undercurl?: true;
  strikethrough?: true;
  link?: string;
};

function luaVal(def: HlDef): string {
  const parts: string[] = [];
  if (def.link) return `{ link = "${def.link}" }`;
  if (def.fg) parts.push(`fg = "${def.fg}"`);
  if (def.bg) parts.push(`bg = "${def.bg}"`);
  if (def.sp) parts.push(`sp = "${def.sp}"`);
  if (def.bold) parts.push('bold = true');
  if (def.italic) parts.push('italic = true');
  if (def.underline) parts.push('underline = true');
  if (def.undercurl) parts.push('undercurl = true');
  if (def.strikethrough) parts.push('strikethrough = true');
  return `{ ${parts.join(', ')} }`;
}

export function createNeovimTheme(t: SemanticTokens, polarity: 'dark' | 'light'): string {
  const syn = t.syntax;
  const ui = t.ui;
  const st = t.status;
  const git = t.git;
  const term = t.terminal;

  const selBg = withOpacity(ui.selection.hex, '40');
  const floatBg = ui.backgroundFloat.hex;
  const houseBg = ui.backgroundHouse.hex;
  const bg = ui.background.hex;
  const fg = ui.foreground.hex;

  const groups: Record<string, HlDef> = {
    // =========================================================================
    // EDITOR UI
    // =========================================================================
    Normal: { fg, bg },
    NormalFloat: { fg, bg: floatBg },
    NormalNC: { fg, bg },
    Cursor: { fg: bg, bg: ui.cursor.hex },
    CursorLine: { bg: houseBg },
    CursorColumn: { bg: houseBg },
    CursorLineNr: { fg: ui.accentPrimary.hex, bold: true },
    ColorColumn: { bg: houseBg },
    LineNr: { fg: ui.foregroundSubtle.hex },
    LineNrAbove: { link: 'LineNr' },
    LineNrBelow: { link: 'LineNr' },
    SignColumn: { fg: ui.foregroundSubtle.hex, bg },
    FoldColumn: { fg: ui.foregroundSubtle.hex, bg },
    Folded: { fg: ui.foregroundMuted.hex, bg: houseBg },
    VertSplit: { fg: ui.border.hex },
    WinSeparator: { fg: ui.border.hex },
    StatusLine: { fg, bg: houseBg },
    StatusLineNC: { fg: ui.foregroundMuted.hex, bg: houseBg },
    TabLine: { fg: ui.foregroundMuted.hex, bg: houseBg },
    TabLineFill: { bg: houseBg },
    TabLineSel: { fg, bg, bold: true },
    WinBar: { fg, bg: houseBg },
    WinBarNC: { fg: ui.foregroundMuted.hex, bg: houseBg },

    // Popup menu
    Pmenu: { fg, bg: floatBg },
    PmenuSel: { fg, bg: selBg },
    PmenuSbar: { bg: houseBg },
    PmenuThumb: { bg: ui.accentPrimary.hex },
    PmenuMatch: { fg: ui.accentPrimary.hex },
    PmenuMatchSel: { fg: ui.accentPrimary.hex, bg: selBg },

    // Floating windows
    FloatBorder: { fg: ui.border.hex, bg: floatBg },
    FloatTitle: { fg: ui.accentPrimary.hex, bg: floatBg, bold: true },

    // Search
    Search: { fg: bg, bg: syn.function.hex },
    IncSearch: { fg: bg, bg: ui.accentPrimary.hex },
    CurSearch: { fg: bg, bg: ui.cursor.hex },
    Substitute: { fg: bg, bg: st.warning.hex },

    // Selection
    Visual: { bg: selBg },
    VisualNOS: { bg: selBg },

    // Matching
    MatchParen: { fg: ui.cursor.hex, bold: true },

    // Diff
    DiffAdd: { bg: withOpacity(git.added.hex, '25') },
    DiffChange: { bg: withOpacity(git.modified.hex, '25') },
    DiffDelete: { bg: withOpacity(git.deleted.hex, '25') },
    DiffText: { bg: withOpacity(git.modified.hex, '40') },
    Added: { fg: git.added.hex },
    Changed: { fg: git.modified.hex },
    Removed: { fg: git.deleted.hex },

    // Messages
    ErrorMsg: { fg: st.error.hex },
    WarningMsg: { fg: st.warning.hex },
    MoreMsg: { fg: ui.accentPrimary.hex },
    Question: { fg: ui.accentPrimary.hex },
    ModeMsg: { fg: ui.foregroundMuted.hex, bold: true },
    MsgArea: { fg },

    // Misc UI
    Directory: { fg: ui.accentPrimary.hex },
    Title: { fg: ui.accentPrimary.hex, bold: true },
    NonText: { fg: ui.foregroundSubtle.hex },
    EndOfBuffer: { fg: ui.foregroundSubtle.hex },
    Whitespace: { fg: ui.whitespace.hex },
    SpecialKey: { fg: ui.foregroundSubtle.hex },
    Conceal: { fg: ui.foregroundMuted.hex },
    WildMenu: { fg: bg, bg: ui.accentPrimary.hex },
    QuickFixLine: { bg: selBg },

    // Spell
    SpellBad: { undercurl: true, sp: st.error.hex },
    SpellCap: { undercurl: true, sp: st.warning.hex },
    SpellRare: { undercurl: true, sp: st.info.hex },
    SpellLocal: { undercurl: true, sp: st.info.hex },

    // =========================================================================
    // LEGACY VIM SYNTAX GROUPS
    // =========================================================================
    Comment: { fg: syn.comment.hex, italic: true },
    Constant: { fg: syn.constant.hex },
    String: { fg: syn.string.hex },
    Character: { fg: syn.string.hex },
    Number: { fg: syn.number.hex },
    Boolean: { fg: syn.boolean.hex },
    Float: { fg: syn.number.hex },
    Identifier: { fg: syn.variable.hex },
    Function: { fg: syn.function.hex },
    Statement: { fg: syn.keyword.hex },
    Conditional: { fg: syn.keywordControl.hex },
    Repeat: { fg: syn.keywordControl.hex },
    Label: { fg: syn.keywordControl.hex },
    Operator: { fg: syn.operator.hex },
    Keyword: { fg: syn.keyword.hex },
    Exception: { fg: syn.keywordControl.hex },
    PreProc: { fg: syn.macro.hex },
    Include: { fg: syn.keyword.hex },
    Define: { fg: syn.macro.hex },
    Macro: { fg: syn.macro.hex },
    PreCondit: { fg: syn.macro.hex },
    Type: { fg: syn.type.hex },
    StorageClass: { fg: syn.storage.hex },
    Structure: { fg: syn.struct.hex },
    Typedef: { fg: syn.type.hex },
    Special: { fg: syn.parameter.hex },
    SpecialChar: { fg: syn.parameter.hex },
    Tag: { fg: syn.tag.hex },
    Delimiter: { fg: syn.punctuation.hex },
    SpecialComment: { fg: syn.commentDoc.hex, italic: true },
    Debug: { fg: st.warning.hex },
    Underlined: { fg: ui.link.hex, underline: true },
    Error: { fg: st.error.hex },
    Todo: { fg: ui.accentPrimary.hex, bold: true },

    // =========================================================================
    // TREESITTER
    // =========================================================================

    // Keywords
    '@keyword': { fg: syn.keyword.hex },
    '@keyword.coroutine': { fg: syn.keywordControl.hex },
    '@keyword.function': { fg: syn.keyword.hex },
    '@keyword.operator': { fg: syn.operator.hex },
    '@keyword.import': { fg: syn.keyword.hex },
    '@keyword.type': { fg: syn.keyword.hex },
    '@keyword.modifier': { fg: syn.storageModifier.hex },
    '@keyword.repeat': { fg: syn.keywordControl.hex },
    '@keyword.return': { fg: syn.keywordControl.hex },
    '@keyword.debug': { fg: syn.keywordControl.hex },
    '@keyword.exception': { fg: syn.keywordControl.hex },
    '@keyword.conditional': { fg: syn.keywordControl.hex },
    '@keyword.conditional.ternary': { fg: syn.operator.hex },
    '@keyword.directive': { fg: syn.macro.hex },
    '@keyword.directive.define': { fg: syn.macro.hex },

    // Variables
    '@variable': { fg: syn.variable.hex },
    '@variable.builtin': { fg: syn.variableLanguage.hex, italic: true },
    '@variable.parameter': { fg: syn.parameter.hex },
    '@variable.parameter.builtin': { fg: syn.parameter.hex, italic: true },
    '@variable.member': { fg: syn.property.hex },

    // Constants
    '@constant': { fg: syn.constant.hex },
    '@constant.builtin': { fg: syn.constant.hex },
    '@constant.macro': { fg: syn.macro.hex },

    // Modules
    '@module': { fg: syn.type.hex },
    '@module.builtin': { fg: syn.type.hex, italic: true },

    // Labels
    '@label': { fg: syn.keywordControl.hex },

    // Strings
    '@string': { fg: syn.string.hex },
    '@string.documentation': { fg: syn.commentDoc.hex },
    '@string.regexp': { fg: syn.regex.hex },
    '@string.escape': { fg: syn.parameter.hex },
    '@string.special': { fg: syn.stringTemplate.hex },
    '@string.special.symbol': { fg: syn.constant.hex },
    '@string.special.url': { fg: ui.link.hex, underline: true },
    '@string.special.path': { fg: syn.string.hex },

    // Characters
    '@character': { fg: syn.string.hex },
    '@character.special': { fg: syn.parameter.hex },

    // Numbers / Booleans
    '@number': { fg: syn.number.hex },
    '@number.float': { fg: syn.number.hex },
    '@boolean': { fg: syn.boolean.hex },

    // Types
    '@type': { fg: syn.type.hex },
    '@type.builtin': { fg: syn.type.hex },
    '@type.definition': { fg: syn.typeParameter.hex },

    // Attributes
    '@attribute': { fg: syn.macro.hex },
    '@attribute.builtin': { fg: syn.macro.hex },

    // Properties
    '@property': { fg: syn.property.hex },

    // Functions
    '@function': { fg: syn.function.hex },
    '@function.builtin': { fg: t.support.function.hex },
    '@function.call': { fg: syn.function.hex },
    '@function.macro': { fg: syn.macro.hex },
    '@function.method': { fg: syn.method.hex },
    '@function.method.call': { fg: syn.method.hex },

    // Constructors
    '@constructor': { fg: syn.class.hex },

    // Operators
    '@operator': { fg: syn.operator.hex },

    // Punctuation
    '@punctuation.delimiter': { fg: syn.punctuation.hex },
    '@punctuation.bracket': { fg: syn.punctuation.hex },
    '@punctuation.special': { fg: syn.punctuation.hex },

    // Comments
    '@comment': { fg: syn.comment.hex, italic: true },
    '@comment.documentation': { fg: syn.commentDoc.hex, italic: true },
    '@comment.error': { fg: st.error.hex },
    '@comment.warning': { fg: st.warning.hex },
    '@comment.todo': { fg: ui.accentPrimary.hex, bold: true },
    '@comment.note': { fg: st.info.hex },

    // Markup
    '@markup.strong': { bold: true },
    '@markup.italic': { italic: true },
    '@markup.strikethrough': { strikethrough: true },
    '@markup.underline': { underline: true },
    '@markup.heading': { fg: t.markdown.heading.hex, bold: true },
    '@markup.quote': { fg: t.markdown.quote.hex, italic: true },
    '@markup.math': { fg: syn.number.hex },
    '@markup.link': { fg: ui.link.hex },
    '@markup.link.label': { fg: ui.link.hex },
    '@markup.link.url': { fg: t.markdown.linkUrl.hex, underline: true },
    '@markup.raw': { fg: t.markdown.codeBlock.hex },
    '@markup.raw.block': { fg: t.markdown.codeBlock.hex },
    '@markup.list': { fg: syn.punctuation.hex },
    '@markup.list.checked': { fg: st.success.hex },
    '@markup.list.unchecked': { fg: ui.foregroundMuted.hex },

    // Diff
    '@diff.plus': { fg: git.added.hex },
    '@diff.minus': { fg: git.deleted.hex },
    '@diff.delta': { fg: git.modified.hex },

    // Tags (HTML/JSX)
    '@tag': { fg: syn.tag.hex },
    '@tag.builtin': { fg: syn.tag.hex },
    '@tag.attribute': { fg: syn.attribute.hex },
    '@tag.delimiter': { fg: syn.punctuation.hex },

    // =========================================================================
    // LSP SEMANTIC TOKENS
    // =========================================================================
    '@lsp.type.namespace': { fg: syn.type.hex },
    '@lsp.type.type': { fg: syn.type.hex },
    '@lsp.type.class': { fg: syn.class.hex },
    '@lsp.type.enum': { fg: syn.enum.hex },
    '@lsp.type.interface': { fg: syn.interface.hex },
    '@lsp.type.struct': { fg: syn.struct.hex },
    '@lsp.type.typeParameter': { fg: syn.typeParameter.hex },
    '@lsp.type.parameter': { fg: syn.parameter.hex },
    '@lsp.type.variable': { fg: syn.variable.hex },
    '@lsp.type.property': { fg: syn.property.hex },
    '@lsp.type.enumMember': { fg: syn.enumMember.hex },
    '@lsp.type.function': { fg: syn.function.hex },
    '@lsp.type.method': { fg: syn.method.hex },
    '@lsp.type.macro': { fg: syn.macro.hex },
    '@lsp.type.keyword': { fg: syn.keyword.hex },
    '@lsp.type.modifier': { fg: syn.storageModifier.hex },
    '@lsp.type.comment': { fg: syn.comment.hex, italic: true },
    '@lsp.type.string': { fg: syn.string.hex },
    '@lsp.type.number': { fg: syn.number.hex },
    '@lsp.type.regexp': { fg: syn.regex.hex },
    '@lsp.type.operator': { fg: syn.operator.hex },
    '@lsp.type.decorator': { fg: syn.macro.hex },
    '@lsp.mod.deprecated': { strikethrough: true },

    // LSP references
    LspReferenceText: { bg: withOpacity(ui.accentPrimary.hex, '25') },
    LspReferenceRead: { bg: withOpacity(ui.accentPrimary.hex, '25') },
    LspReferenceWrite: { bg: withOpacity(ui.accentPrimary.hex, '40') },
    LspInlayHint: { fg: ui.foregroundSubtle.hex, italic: true },
    LspCodeLens: { fg: ui.foregroundSubtle.hex },
    LspSignatureActiveParameter: { fg: ui.accentPrimary.hex, bold: true },

    // =========================================================================
    // DIAGNOSTICS
    // =========================================================================
    DiagnosticError: { fg: st.error.hex },
    DiagnosticWarn: { fg: st.warning.hex },
    DiagnosticInfo: { fg: st.info.hex },
    DiagnosticHint: { fg: ui.accentPrimary.hex },
    DiagnosticOk: { fg: st.success.hex },
    DiagnosticVirtualTextError: { fg: st.error.hex, bg: withOpacity(st.error.hex, '15') },
    DiagnosticVirtualTextWarn: { fg: st.warning.hex, bg: withOpacity(st.warning.hex, '15') },
    DiagnosticVirtualTextInfo: { fg: st.info.hex, bg: withOpacity(st.info.hex, '15') },
    DiagnosticVirtualTextHint: { fg: ui.accentPrimary.hex, bg: withOpacity(ui.accentPrimary.hex, '15') },
    DiagnosticVirtualTextOk: { fg: st.success.hex, bg: withOpacity(st.success.hex, '15') },
    DiagnosticUnderlineError: { undercurl: true, sp: st.error.hex },
    DiagnosticUnderlineWarn: { undercurl: true, sp: st.warning.hex },
    DiagnosticUnderlineInfo: { undercurl: true, sp: st.info.hex },
    DiagnosticUnderlineHint: { undercurl: true, sp: ui.accentPrimary.hex },
    DiagnosticUnderlineOk: { undercurl: true, sp: st.success.hex },
    DiagnosticDeprecated: { strikethrough: true },

    // =========================================================================
    // PLUGINS
    // =========================================================================

    // GitSigns
    GitSignsAdd: { fg: git.added.hex },
    GitSignsChange: { fg: git.modified.hex },
    GitSignsDelete: { fg: git.deleted.hex },

    // Telescope
    TelescopeNormal: { fg, bg: floatBg },
    TelescopeBorder: { fg: ui.border.hex, bg: floatBg },
    TelescopeTitle: { fg: ui.accentPrimary.hex, bold: true },
    TelescopeSelection: { bg: selBg },
    TelescopeSelectionCaret: { fg: ui.cursor.hex },
    TelescopeMatching: { fg: ui.accentPrimary.hex, bold: true },
    TelescopePromptPrefix: { fg: ui.accentPrimary.hex },
  };

  // Build Lua output
  const hlLines = Object.entries(groups)
    .map(([name, def]) => `  ["${name}"] = ${luaVal(def)},`)
    .join('\n');

  const termColors = [
    term.black, term.red, term.green, term.yellow,
    term.blue, term.magenta, term.cyan, term.white,
    term.brightBlack, term.brightRed, term.brightGreen, term.brightYellow,
    term.brightBlue, term.brightMagenta, term.brightCyan, term.brightWhite,
  ].map((c, i) => `vim.g.terminal_color_${i} = "${c.hex}"`).join('\n');

  return `-- Hatsune Miku Theme — Neovim
-- Generated — do not edit

if vim.g.colors_name then
  vim.cmd("hi clear")
end

vim.o.termguicolors = true
vim.o.background = "${polarity}"
vim.g.colors_name = "hatsune-miku-${polarity}"

local groups = {
${hlLines}
}

for group, hl in pairs(groups) do
  vim.api.nvim_set_hl(0, group, hl)
end

-- Terminal ANSI colors
${termColors}
`;
}
