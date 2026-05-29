/**
 * Neovim Target
 *
 * Generates a Lua colorscheme for Neovim 0.10+.
 * Covers: legacy vim groups, TreeSitter captures, LSP semantic tokens,
 * diagnostics, diff, and popular plugins.
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
  reverse?: true;
  nocombine?: true;
  link?: string;
};

/**
 * Flatten an 8-digit hex (#RRGGBBAA) against an opaque base (#RRGGBB),
 * producing an opaque #RRGGBB. Neovim's nvim_set_hl rejects alpha hex.
 * If the input is already 6-digit, returns it unchanged.
 */
function flatten(color: string, base: string): string {
  if (color.length !== 9) return color;
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  const a = parseInt(color.slice(7, 9), 16) / 255;
  const br = parseInt(base.slice(1, 3), 16);
  const bg_ = parseInt(base.slice(3, 5), 16);
  const bb = parseInt(base.slice(5, 7), 16);
  const mix = (c: number, bc: number) => Math.round(c * a + bc * (1 - a));
  const toHex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase();
  return `#${toHex(mix(r, br))}${toHex(mix(g, bg_))}${toHex(mix(b, bb))}`;
}

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
  if (def.reverse) parts.push('reverse = true');
  if (def.nocombine) parts.push('nocombine = true');
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
  const voidBg = ui.backgroundVoid.hex;
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
    lCursor: { link: 'Cursor' },
    CursorIM: { fg: bg, bg: ui.accentPrimary.hex },
    TermCursor: { fg: bg, bg: ui.cursor.hex },
    TermCursorNC: { fg: bg, bg: ui.foregroundSubtle.hex },
    CursorLine: { bg: houseBg },
    CursorColumn: { bg: houseBg },
    CursorLineNr: { fg: ui.accentPrimary.hex, bold: true },
    CursorLineFold: { fg: ui.foregroundSubtle.hex, bg: houseBg },
    CursorLineSign: { bg: houseBg },
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
    TabLine: { fg: ui.foregroundMuted.hex, bg: voidBg },
    TabLineFill: { bg: voidBg },
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
    PmenuKind: { fg: ui.foregroundMuted.hex, bg: floatBg },
    PmenuKindSel: { fg: ui.foregroundMuted.hex, bg: selBg },
    PmenuExtra: { fg: ui.foregroundSubtle.hex, bg: floatBg },
    PmenuExtraSel: { fg: ui.foregroundSubtle.hex, bg: selBg },

    // Floating windows
    FloatBorder: { fg: ui.border.hex, bg: floatBg },
    FloatTitle: { fg: ui.accentPrimary.hex, bg: floatBg, bold: true },
    FloatFooter: { fg: ui.foregroundMuted.hex, bg: floatBg },

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
    SnippetTabstop: { bg: selBg },

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
    '@keyword.storage': { fg: syn.storage.hex },

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
    '@type.qualifier': { fg: syn.storageModifier.hex },

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
    '@markup.heading.1': { fg: t.markdown.heading.hex, bold: true },
    '@markup.heading.2': { fg: t.markdown.heading.hex, bold: true },
    '@markup.heading.3': { fg: t.markdown.heading.hex, bold: true },
    '@markup.heading.4': { fg: t.markdown.heading.hex, bold: true },
    '@markup.heading.5': { fg: t.markdown.heading.hex, bold: true },
    '@markup.heading.6': { fg: t.markdown.heading.hex, bold: true },
    '@markup.quote': { fg: t.markdown.quote.hex, italic: true },
    '@markup.math': { fg: syn.number.hex },
    '@markup.environment': { fg: syn.macro.hex },
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
    // readonly / defaultLibrary modifiers inherit their base token color (no override)
    '@lsp.typemod.function.defaultLibrary': { fg: t.support.function.hex },
    '@lsp.typemod.variable.defaultLibrary': { fg: syn.variableLanguage.hex, italic: true },

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
    DiagnosticUnnecessary: { fg: ui.foregroundSubtle.hex },
    DiagnosticDeprecated: { strikethrough: true },
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
    DiagnosticSignError: { fg: st.error.hex },
    DiagnosticSignWarn: { fg: st.warning.hex },
    DiagnosticSignInfo: { fg: st.info.hex },
    DiagnosticSignHint: { fg: ui.accentPrimary.hex },
    DiagnosticSignOk: { fg: st.success.hex },
    DiagnosticFloatingError: { fg: st.error.hex, bg: floatBg },
    DiagnosticFloatingWarn: { fg: st.warning.hex, bg: floatBg },
    DiagnosticFloatingInfo: { fg: st.info.hex, bg: floatBg },
    DiagnosticFloatingHint: { fg: ui.accentPrimary.hex, bg: floatBg },
    DiagnosticFloatingOk: { fg: st.success.hex, bg: floatBg },

    // =========================================================================
    // HEALTH
    // =========================================================================
    healthError: { fg: st.error.hex },
    healthWarning: { fg: st.warning.hex },
    healthSuccess: { fg: st.success.hex },

    // =========================================================================
    // PLUGINS — GitSigns
    // =========================================================================
    GitSignsAdd: { fg: git.added.hex },
    GitSignsChange: { fg: git.modified.hex },
    GitSignsDelete: { fg: git.deleted.hex },
    GitSignsAddNr: { fg: git.added.hex },
    GitSignsChangeNr: { fg: git.modified.hex },
    GitSignsDeleteNr: { fg: git.deleted.hex },
    GitSignsAddLn: { bg: withOpacity(git.added.hex, '15') },
    GitSignsChangeLn: { bg: withOpacity(git.modified.hex, '15') },
    GitSignsDeleteLn: { bg: withOpacity(git.deleted.hex, '15') },
    GitSignsAddInline: { bg: withOpacity(git.added.hex, '25') },
    GitSignsChangeInline: { bg: withOpacity(git.modified.hex, '25') },
    GitSignsDeleteInline: { bg: withOpacity(git.deleted.hex, '25') },
    GitSignsCurrentLineBlame: { fg: ui.foregroundSubtle.hex, italic: true },

    // =========================================================================
    // PLUGINS — Telescope
    // =========================================================================
    TelescopeNormal: { fg, bg: floatBg },
    TelescopeBorder: { fg: ui.border.hex, bg: floatBg },
    TelescopeTitle: { fg: ui.accentPrimary.hex, bold: true },
    TelescopeSelection: { bg: selBg },
    TelescopeSelectionCaret: { fg: ui.cursor.hex },
    TelescopeMatching: { fg: ui.accentPrimary.hex, bold: true },
    TelescopePromptPrefix: { fg: ui.accentPrimary.hex },
    TelescopePromptNormal: { fg, bg: floatBg },
    TelescopePromptBorder: { fg: ui.border.hex, bg: floatBg },
    TelescopePromptTitle: { fg: ui.accentPrimary.hex, bold: true },
    TelescopePreviewNormal: { fg, bg: floatBg },
    TelescopePreviewBorder: { fg: ui.border.hex, bg: floatBg },
    TelescopePreviewTitle: { fg: ui.accentPrimary.hex, bold: true },
    TelescopeResultsNormal: { fg, bg: floatBg },
    TelescopeResultsBorder: { fg: ui.border.hex, bg: floatBg },
    TelescopeResultsTitle: { fg: ui.accentPrimary.hex, bold: true },

    // =========================================================================
    // PLUGINS — nvim-cmp
    // =========================================================================
    CmpItemAbbr: { fg },
    CmpItemAbbrDeprecated: { fg: ui.foregroundSubtle.hex, strikethrough: true },
    CmpItemAbbrMatch: { fg: ui.accentPrimary.hex, bold: true },
    CmpItemAbbrMatchFuzzy: { fg: ui.accentPrimary.hex },
    CmpItemKind: { fg: ui.foregroundMuted.hex },
    CmpItemMenu: { fg: ui.foregroundSubtle.hex },
    CmpItemKindText: { fg: ui.foreground.hex },
    CmpItemKindMethod: { fg: syn.method.hex },
    CmpItemKindFunction: { fg: syn.function.hex },
    CmpItemKindConstructor: { fg: syn.class.hex },
    CmpItemKindField: { fg: syn.property.hex },
    CmpItemKindVariable: { fg: syn.variable.hex },
    CmpItemKindClass: { fg: syn.class.hex },
    CmpItemKindInterface: { fg: syn.interface.hex },
    CmpItemKindModule: { fg: syn.type.hex },
    CmpItemKindProperty: { fg: syn.property.hex },
    CmpItemKindUnit: { fg: syn.number.hex },
    CmpItemKindValue: { fg: syn.constant.hex },
    CmpItemKindEnum: { fg: syn.enum.hex },
    CmpItemKindKeyword: { fg: syn.keyword.hex },
    CmpItemKindSnippet: { fg: ui.accentPrimary.hex },
    CmpItemKindColor: { fg: ui.accentPrimary.hex },
    CmpItemKindFile: { fg: ui.foreground.hex },
    CmpItemKindReference: { fg: syn.constant.hex },
    CmpItemKindFolder: { fg: ui.accentPrimary.hex },
    CmpItemKindEnumMember: { fg: syn.enumMember.hex },
    CmpItemKindConstant: { fg: syn.constant.hex },
    CmpItemKindStruct: { fg: syn.struct.hex },
    CmpItemKindEvent: { fg: syn.keywordControl.hex },
    CmpItemKindOperator: { fg: syn.operator.hex },
    CmpItemKindTypeParameter: { fg: syn.typeParameter.hex },

    // =========================================================================
    // PLUGINS — indent-blankline
    // =========================================================================
    IblIndent: { fg: ui.foregroundSubtle.hex, nocombine: true },
    IblScope: { fg: ui.accentPrimary.hex, nocombine: true },
    IblWhitespace: { fg: ui.whitespace.hex, nocombine: true },
    IndentBlanklineChar: { fg: ui.foregroundSubtle.hex, nocombine: true },
    IndentBlanklineContextChar: { fg: ui.accentPrimary.hex, nocombine: true },

    // =========================================================================
    // PLUGINS — neo-tree / nvim-tree
    // =========================================================================
    NeoTreeNormal: { fg, bg: houseBg },
    NeoTreeNormalNC: { fg, bg: houseBg },
    NeoTreeDimText: { fg: ui.foregroundSubtle.hex },
    NeoTreeFileName: { fg },
    NeoTreeFileIcon: { fg: ui.foregroundMuted.hex },
    NeoTreeDirectoryName: { fg: ui.accentPrimary.hex },
    NeoTreeDirectoryIcon: { fg: ui.accentPrimary.hex },
    NeoTreeRootName: { fg: ui.accentPrimary.hex, bold: true },
    NeoTreeGitAdded: { fg: git.added.hex },
    NeoTreeGitModified: { fg: git.modified.hex },
    NeoTreeGitDeleted: { fg: git.deleted.hex },
    NeoTreeGitConflict: { fg: git.conflicting.hex },
    NeoTreeGitUntracked: { fg: git.untracked.hex },
    NeoTreeGitRenamed: { fg: git.renamed.hex },
    NeoTreeIndentMarker: { fg: ui.foregroundSubtle.hex },
    NeoTreeWinSeparator: { fg: ui.border.hex, bg: houseBg },
    NeoTreeCursorLine: { bg: selBg },
    NvimTreeNormal: { fg, bg: houseBg },
    NvimTreeNormalNC: { fg, bg: houseBg },
    NvimTreeRootFolder: { fg: ui.accentPrimary.hex, bold: true },
    NvimTreeFolderIcon: { fg: ui.accentPrimary.hex },
    NvimTreeFolderName: { fg: ui.accentPrimary.hex },
    NvimTreeOpenedFolderName: { fg: ui.accentPrimary.hex },
    NvimTreeEmptyFolderName: { fg: ui.foregroundMuted.hex },
    NvimTreeGitDirty: { fg: git.modified.hex },
    NvimTreeGitNew: { fg: git.added.hex },
    NvimTreeGitDeleted: { fg: git.deleted.hex },
    NvimTreeGitRenamed: { fg: git.renamed.hex },
    NvimTreeIndentMarker: { fg: ui.foregroundSubtle.hex },
    NvimTreeWinSeparator: { fg: ui.border.hex },
    NvimTreeCursorLine: { bg: selBg },
    NvimTreeSpecialFile: { fg: syn.macro.hex },

    // =========================================================================
    // PLUGINS — bufferline.nvim
    // =========================================================================
    BufferLineFill: { bg: voidBg },
    BufferLineBackground: { fg: ui.foregroundMuted.hex, bg: houseBg },
    BufferLineBuffer: { fg: ui.foregroundMuted.hex, bg: houseBg },
    BufferLineBufferSelected: { fg, bg, bold: true },
    BufferLineBufferVisible: { fg: ui.foregroundMuted.hex, bg: houseBg },
    BufferLineTab: { fg: ui.foregroundMuted.hex, bg: houseBg },
    BufferLineTabSelected: { fg, bg },
    BufferLineTabSeparator: { fg: voidBg, bg: houseBg },
    BufferLineTabSeparatorSelected: { fg: voidBg, bg },
    BufferLineSeparator: { fg: voidBg, bg: houseBg },
    BufferLineSeparatorSelected: { fg: voidBg, bg },
    BufferLineIndicatorSelected: { fg: ui.accentPrimary.hex },
    BufferLineModified: { fg: git.modified.hex },
    BufferLineModifiedSelected: { fg: git.modified.hex },
    BufferLineModifiedVisible: { fg: git.modified.hex },
    BufferLineError: { fg: st.error.hex },
    BufferLineErrorSelected: { fg: st.error.hex },
    BufferLineWarning: { fg: st.warning.hex },
    BufferLineWarningSelected: { fg: st.warning.hex },

    // =========================================================================
    // PLUGINS — which-key.nvim
    // =========================================================================
    WhichKey: { fg: ui.accentPrimary.hex },
    WhichKeyGroup: { fg: ui.accentSecondary.hex },
    WhichKeyDesc: { fg },
    WhichKeySeparator: { fg: ui.foregroundSubtle.hex },
    WhichKeyFloat: { bg: floatBg },
    WhichKeyBorder: { fg: ui.border.hex, bg: floatBg },
    WhichKeyValue: { fg: ui.foregroundMuted.hex },

    // =========================================================================
    // PLUGINS — trouble.nvim
    // =========================================================================
    TroubleNormal: { fg, bg: houseBg },
    TroubleNormalNC: { fg, bg: houseBg },
    TroubleCount: { fg: ui.accentPrimary.hex, bold: true },
    TroubleText: { fg },
    TroubleIndent: { fg: ui.foregroundSubtle.hex },
    TroubleLocation: { fg: ui.foregroundMuted.hex },
    TroubleFile: { fg: ui.accentPrimary.hex },
    TroubleFoldIcon: { fg: ui.foregroundMuted.hex },
    TroubleCode: { fg: ui.foregroundMuted.hex },

    // =========================================================================
    // PLUGINS — flash.nvim / leap.nvim
    // =========================================================================
    FlashLabel: { fg: bg, bg: ui.cursor.hex, bold: true },
    FlashMatch: { fg: ui.accentPrimary.hex },
    FlashCurrent: { fg: bg, bg: ui.accentPrimary.hex },
    FlashBackdrop: { fg: ui.foregroundSubtle.hex },
    LeapMatch: { fg: ui.accentPrimary.hex, bold: true },
    LeapLabelPrimary: { fg: bg, bg: ui.cursor.hex, bold: true },
    LeapLabelSecondary: { fg: bg, bg: ui.accentSecondary.hex },
    LeapBackdrop: { fg: ui.foregroundSubtle.hex },

    // =========================================================================
    // PLUGINS — lazy.nvim
    // =========================================================================
    LazyNormal: { fg, bg: floatBg },
    LazyButton: { fg, bg: houseBg },
    LazyButtonActive: { fg: bg, bg: ui.accentPrimary.hex, bold: true },
    LazyH1: { fg: bg, bg: ui.accentPrimary.hex, bold: true },
    LazyH2: { fg: ui.accentPrimary.hex, bold: true },
    LazyComment: { fg: ui.foregroundMuted.hex },
    LazyDimmed: { fg: ui.foregroundSubtle.hex },
    LazyProp: { fg: ui.accentPrimary.hex },
    LazyValue: { fg: syn.string.hex },
    LazyReasonPlugin: { fg: ui.accentPrimary.hex },
    LazyReasonEvent: { fg: syn.keywordControl.hex },
    LazyReasonStart: { fg: st.success.hex },
    LazyReasonCmd: { fg: syn.function.hex },
    LazyReasonFt: { fg: syn.type.hex },
    LazySpecial: { fg: ui.cursor.hex },
    LazyProgressDone: { fg: ui.accentPrimary.hex },
    LazyProgressTodo: { fg: ui.foregroundSubtle.hex },

    // =========================================================================
    // PLUGINS — mason.nvim
    // =========================================================================
    MasonNormal: { fg, bg: floatBg },
    MasonHeader: { fg: bg, bg: ui.accentPrimary.hex, bold: true },
    MasonHighlight: { fg: ui.accentPrimary.hex },
    MasonHighlightBlock: { fg: bg, bg: ui.accentPrimary.hex },
    MasonHighlightBlockBold: { fg: bg, bg: ui.accentPrimary.hex, bold: true },
    MasonMuted: { fg: ui.foregroundMuted.hex },
    MasonMutedBlock: { fg: ui.foregroundMuted.hex, bg: houseBg },

    // =========================================================================
    // PLUGINS — nvim-notify
    // =========================================================================
    NotifyERRORBorder: { fg: st.error.hex },
    NotifyERRORTitle: { fg: st.error.hex },
    NotifyERRORIcon: { fg: st.error.hex },
    NotifyWARNBorder: { fg: st.warning.hex },
    NotifyWARNTitle: { fg: st.warning.hex },
    NotifyWARNIcon: { fg: st.warning.hex },
    NotifyINFOBorder: { fg: st.info.hex },
    NotifyINFOTitle: { fg: st.info.hex },
    NotifyINFOIcon: { fg: st.info.hex },
    NotifyDEBUGBorder: { fg: ui.foregroundMuted.hex },
    NotifyDEBUGTitle: { fg: ui.foregroundMuted.hex },
    NotifyDEBUGIcon: { fg: ui.foregroundMuted.hex },
    NotifyTRACEBorder: { fg: ui.foregroundSubtle.hex },
    NotifyTRACETitle: { fg: ui.foregroundSubtle.hex },
    NotifyTRACEIcon: { fg: ui.foregroundSubtle.hex },
    NotifyBackground: { bg: floatBg },

    // =========================================================================
    // PLUGINS — noice.nvim
    // =========================================================================
    NoiceCmdline: { fg },
    NoiceCmdlinePopup: { fg, bg: floatBg },
    NoiceCmdlinePopupBorder: { fg: ui.border.hex },
    NoiceCmdlineIcon: { fg: ui.accentPrimary.hex },
    NoiceConfirm: { fg, bg: floatBg },
    NoiceConfirmBorder: { fg: ui.border.hex },
    NoiceMini: { fg, bg: floatBg },
    NoiceFormatProgressDone: { fg: bg, bg: ui.accentPrimary.hex },
    NoiceFormatProgressTodo: { fg, bg: houseBg },

    // =========================================================================
    // PLUGINS — dashboard-nvim / alpha-nvim
    // =========================================================================
    DashboardHeader: { fg: ui.accentPrimary.hex },
    DashboardFooter: { fg: ui.foregroundMuted.hex },
    DashboardCenter: { fg: ui.accentPrimary.hex },
    DashboardShortCut: { fg: ui.cursor.hex },
    DashboardIcon: { fg: ui.accentPrimary.hex },
    DashboardDesc: { fg },
    DashboardKey: { fg: ui.cursor.hex },
    AlphaHeader: { fg: ui.accentPrimary.hex },
    AlphaButtons: { fg: ui.accentPrimary.hex },
    AlphaFooter: { fg: ui.foregroundMuted.hex },
    AlphaShortcut: { fg: ui.cursor.hex },

    // =========================================================================
    // PLUGINS — vim-illuminate
    // =========================================================================
    IlluminatedWordText: { bg: withOpacity(ui.accentPrimary.hex, '15') },
    IlluminatedWordRead: { bg: withOpacity(ui.accentPrimary.hex, '25') },
    IlluminatedWordWrite: { bg: withOpacity(ui.accentPrimary.hex, '40') },

    // =========================================================================
    // PLUGINS — nvim-navic (breadcrumbs)
    // =========================================================================
    NavicText: { fg: ui.foregroundMuted.hex },
    NavicSeparator: { fg: ui.foregroundSubtle.hex },
    NavicIconsFile: { fg: ui.foreground.hex },
    NavicIconsModule: { fg: syn.type.hex },
    NavicIconsNamespace: { fg: syn.type.hex },
    NavicIconsPackage: { fg: syn.type.hex },
    NavicIconsClass: { fg: syn.class.hex },
    NavicIconsMethod: { fg: syn.method.hex },
    NavicIconsProperty: { fg: syn.property.hex },
    NavicIconsField: { fg: syn.property.hex },
    NavicIconsConstructor: { fg: syn.class.hex },
    NavicIconsEnum: { fg: syn.enum.hex },
    NavicIconsInterface: { fg: syn.interface.hex },
    NavicIconsFunction: { fg: syn.function.hex },
    NavicIconsVariable: { fg: syn.variable.hex },
    NavicIconsConstant: { fg: syn.constant.hex },
    NavicIconsString: { fg: syn.string.hex },
    NavicIconsNumber: { fg: syn.number.hex },
    NavicIconsBoolean: { fg: syn.boolean.hex },
    NavicIconsArray: { fg: syn.punctuation.hex },
    NavicIconsObject: { fg: syn.type.hex },
    NavicIconsKey: { fg: syn.property.hex },
    NavicIconsNull: { fg: syn.constant.hex },
    NavicIconsEnumMember: { fg: syn.enumMember.hex },
    NavicIconsStruct: { fg: syn.struct.hex },
    NavicIconsEvent: { fg: syn.keywordControl.hex },
    NavicIconsOperator: { fg: syn.operator.hex },
    NavicIconsTypeParameter: { fg: syn.typeParameter.hex },

    // =========================================================================
    // PLUGINS — mini.nvim
    // =========================================================================
    MiniStatuslineDevinfo: { fg: ui.foregroundMuted.hex, bg: houseBg },
    MiniStatuslineFileinfo: { fg: ui.foregroundMuted.hex, bg: houseBg },
    MiniStatuslineFilename: { fg, bg: houseBg },
    MiniStatuslineInactive: { fg: ui.foregroundMuted.hex, bg: houseBg },
    MiniStatuslineModeNormal: { fg: bg, bg: ui.accentPrimary.hex, bold: true },
    MiniStatuslineModeInsert: { fg: bg, bg: st.success.hex, bold: true },
    MiniStatuslineModeVisual: { fg: bg, bg: ui.cursor.hex, bold: true },
    MiniStatuslineModeReplace: { fg: bg, bg: st.error.hex, bold: true },
    MiniStatuslineModeCommand: { fg: bg, bg: st.warning.hex, bold: true },
    MiniStatuslineModeOther: { fg: bg, bg: ui.accentSecondary.hex, bold: true },
    MiniTablineCurrent: { fg, bg, bold: true },
    MiniTablineVisible: { fg: ui.foregroundMuted.hex, bg: houseBg },
    MiniTablineHidden: { fg: ui.foregroundSubtle.hex, bg: houseBg },
    MiniTablineModifiedCurrent: { fg: git.modified.hex, bg },
    MiniTablineModifiedVisible: { fg: git.modified.hex, bg: houseBg },
    MiniTablineModifiedHidden: { fg: git.modified.hex, bg: houseBg },
    MiniTablineFill: { bg: voidBg },
    MiniTablineTabpagesection: { fg: bg, bg: ui.accentPrimary.hex, bold: true },
    MiniCursorword: { bg: withOpacity(ui.accentPrimary.hex, '25') },
    MiniCursorwordCurrent: { bg: withOpacity(ui.accentPrimary.hex, '25') },
    MiniIndentscopeSymbol: { fg: ui.accentPrimary.hex },
    MiniJump: { fg: bg, bg: ui.cursor.hex },
    MiniJump2dSpot: { fg: ui.cursor.hex, bold: true },
    MiniSurround: { fg: bg, bg: ui.accentPrimary.hex },
    MiniTrailspace: { bg: st.error.hex },
    MiniDiffSignAdd: { fg: git.added.hex },
    MiniDiffSignChange: { fg: git.modified.hex },
    MiniDiffSignDelete: { fg: git.deleted.hex },
    MiniPickNormal: { fg, bg: floatBg },
    MiniPickBorder: { fg: ui.border.hex, bg: floatBg },
    MiniPickPrompt: { fg: ui.accentPrimary.hex },
    MiniPickMatchCurrent: { bg: selBg },
    MiniPickMatchMarked: { fg: ui.accentPrimary.hex, bold: true },
    MiniPickMatchRanges: { fg: ui.accentPrimary.hex },

    // =========================================================================
    // PLUGINS — gitsigns inline diff (word-level)
    // =========================================================================
    GitSignsAddPreview: { bg: withOpacity(git.added.hex, '25') },
    GitSignsDeletePreview: { bg: withOpacity(git.deleted.hex, '25') },

    // =========================================================================
    // PLUGINS — nvim-dap / nvim-dap-ui
    // =========================================================================
    DapBreakpoint: { fg: st.error.hex },
    DapBreakpointCondition: { fg: st.warning.hex },
    DapBreakpointRejected: { fg: ui.foregroundSubtle.hex },
    DapLogPoint: { fg: st.info.hex },
    DapStopped: { fg: st.warning.hex, bg: withOpacity(st.warning.hex, '15') },
    DapStoppedLine: { bg: withOpacity(st.warning.hex, '15') },
    DapUIScope: { fg: ui.accentPrimary.hex },
    DapUIType: { fg: syn.type.hex },
    DapUIValue: { fg: syn.constant.hex },
    DapUIVariable: { fg: syn.variable.hex },
    DapUIModifiedValue: { fg: st.warning.hex, bold: true },
    DapUIDecoration: { fg: ui.accentPrimary.hex },
    DapUIThread: { fg: st.success.hex },
    DapUIStoppedThread: { fg: st.warning.hex },
    DapUISource: { fg: syn.string.hex },
    DapUILineNumber: { fg: ui.foregroundSubtle.hex },
    DapUIFloatBorder: { fg: ui.border.hex },
    DapUIWatchesEmpty: { fg: ui.foregroundSubtle.hex },
    DapUIWatchesValue: { fg: st.success.hex },
    DapUIWatchesError: { fg: st.error.hex },
    DapUIBreakpointsPath: { fg: ui.accentPrimary.hex },
    DapUIBreakpointsInfo: { fg: st.info.hex },
    DapUIBreakpointsCurrentLine: { fg: st.success.hex, bold: true },
    DapUIBreakpointsDisabledLine: { fg: ui.foregroundSubtle.hex },
    DapUICurrentFrameName: { fg: st.success.hex, bold: true },
    DapUIPlayPause: { fg: st.success.hex },
    DapUIRestart: { fg: st.success.hex },
    DapUIStop: { fg: st.error.hex },
    DapUIStepOver: { fg: ui.accentPrimary.hex },
    DapUIStepInto: { fg: ui.accentPrimary.hex },
    DapUIStepBack: { fg: ui.accentPrimary.hex },
    DapUIStepOut: { fg: ui.accentPrimary.hex },

    // =========================================================================
    // PLUGINS — blink.cmp
    // =========================================================================
    BlinkCmpMenu: { fg, bg: floatBg },
    BlinkCmpMenuBorder: { fg: ui.border.hex, bg: floatBg },
    BlinkCmpMenuSelection: { bg: selBg },
    BlinkCmpLabel: { fg },
    BlinkCmpLabelDeprecated: { fg: ui.foregroundSubtle.hex, strikethrough: true },
    BlinkCmpLabelMatch: { fg: ui.accentPrimary.hex, bold: true },
    BlinkCmpKind: { fg: ui.foregroundMuted.hex },
    BlinkCmpKindText: { fg: ui.foreground.hex },
    BlinkCmpKindMethod: { fg: syn.method.hex },
    BlinkCmpKindFunction: { fg: syn.function.hex },
    BlinkCmpKindConstructor: { fg: syn.class.hex },
    BlinkCmpKindField: { fg: syn.property.hex },
    BlinkCmpKindVariable: { fg: syn.variable.hex },
    BlinkCmpKindClass: { fg: syn.class.hex },
    BlinkCmpKindInterface: { fg: syn.interface.hex },
    BlinkCmpKindModule: { fg: syn.type.hex },
    BlinkCmpKindProperty: { fg: syn.property.hex },
    BlinkCmpKindUnit: { fg: syn.number.hex },
    BlinkCmpKindValue: { fg: syn.constant.hex },
    BlinkCmpKindEnum: { fg: syn.enum.hex },
    BlinkCmpKindKeyword: { fg: syn.keyword.hex },
    BlinkCmpKindSnippet: { fg: ui.accentPrimary.hex },
    BlinkCmpKindColor: { fg: ui.accentPrimary.hex },
    BlinkCmpKindFile: { fg: ui.foreground.hex },
    BlinkCmpKindReference: { fg: syn.constant.hex },
    BlinkCmpKindFolder: { fg: ui.accentPrimary.hex },
    BlinkCmpKindEnumMember: { fg: syn.enumMember.hex },
    BlinkCmpKindConstant: { fg: syn.constant.hex },
    BlinkCmpKindStruct: { fg: syn.struct.hex },
    BlinkCmpKindEvent: { fg: syn.keywordControl.hex },
    BlinkCmpKindOperator: { fg: syn.operator.hex },
    BlinkCmpKindTypeParameter: { fg: syn.typeParameter.hex },
    BlinkCmpDoc: { fg, bg: floatBg },
    BlinkCmpDocBorder: { fg: ui.border.hex, bg: floatBg },
    BlinkCmpDocSeparator: { fg: ui.border.hex },
    BlinkCmpSignatureHelp: { fg, bg: floatBg },
    BlinkCmpSignatureHelpBorder: { fg: ui.border.hex, bg: floatBg },
    BlinkCmpSignatureHelpActiveParameter: { fg: ui.accentPrimary.hex, bold: true },
    BlinkCmpGhostText: { fg: ui.ghostText.hex },

    // =========================================================================
    // PLUGINS — fidget.nvim
    // =========================================================================
    FidgetTitle: { fg: ui.accentPrimary.hex, bold: true },
    FidgetTask: { fg: ui.foregroundMuted.hex },
  };

  // Neovim's nvim_set_hl rejects #RRGGBBAA — flatten any alpha values against
  // the surface the highlight actually sits on (float/popup surfaces vs. editor).
  const floatPrefixes = /^(Pmenu|Telescope|BlinkCmp|MiniPick|Float|Lazy|Mason|Noice|Notify|WhichKey|Trouble|Cmp|NeoTree|NvimTree)/;
  for (const name of Object.keys(groups)) {
    const def = groups[name];
    const base = floatPrefixes.test(name) ? floatBg : bg;
    if (def.fg) def.fg = flatten(def.fg, def.bg ? flatten(def.bg, base) : base);
    if (def.bg) def.bg = flatten(def.bg, base);
    if (def.sp) def.sp = flatten(def.sp, base);
  }

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
