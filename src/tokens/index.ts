/**
 * Design Token System
 *
 * A three-layer architecture for theme color management:
 *
 * Layer 1: Primitives (primitives.ts)
 *   Raw values: lightness levels, chroma levels, hue angles, character hex colors
 *   No semantic meaning - just building blocks
 *
 * Layer 2: Semantic Tokens (semantic.ts)
 *   Meaningful roles: syntax.keyword, ui.background, status.error
 *   Maps primitives to purposes
 *
 * Layer 3: Variants (variants.ts)
 *   Theme variations: dark, light, sakura, highContrast
 *   Transforms semantic tokens by swapping/adjusting primitives
 *
 * Usage:
 * ```typescript
 * import { semanticTokens, generateVariantTokens } from './tokens';
 *
 * // Use default dark theme tokens
 * const keywordColor = semanticTokens.syntax.keyword.hex;
 *
 * // Generate light theme tokens
 * const lightTokens = generateVariantTokens('light');
 * const lightKeyword = lightTokens.syntax.keyword.hex;
 * ```
 */

// Layer 1: Primitives
export {
  primitives,
  lightness,
  chroma,
  hue,
  character,
  special,
  opacity,
  type Primitives,
  type Lightness,
  type Chroma,
  type Hue,
  type Character,
  type Special,
  type Opacity,
  type OpacityScale,
} from './primitives';

// Layer 2: Semantic Tokens
export {
  semanticTokens,
  createSemanticTokens,
  getHex,
  getSyntaxColors,
  getUIColors,
  getStatusColors,
  getGitColors,
  getTerminalColors,
  getSymbolColors,
  getBracketColors,
  getSupportColors,
  getMarkdownColors,
  getDebugColors,
  // Derive functions
  withOpacity,
  lighten,
  darken,
  desaturate,
  // Types
  type SemanticTokens,
  type SemanticRole,
  type SyntaxTokens,
  type UITokens,
  type StatusTokens,
  type GitTokens,
  type TerminalTokens,
  type SymbolTokens,
  type BracketTokens,
  type SupportTokens,
  type MarkdownTokens,
  type DebugTokens,
  type ExtendedUITokens,
  type StateTokens,
  type InteractiveToken,
  type InteractiveTokens,
} from './semantic';

// =============================================================================
// THEME COLORS BRIDGE
// =============================================================================
// This creates a `themeColors` object that matches the old palette/core.ts structure
// but uses semantic tokens as the source. This allows theme files to continue using
// `themeColors.syntax.keyword` while the actual source is the semantic tokens system.

import {
  semanticTokens,
  getSyntaxColors,
  getUIColors,
  getStatusColors,
  getGitColors,
  getTerminalColors,
  getSymbolColors,
  getBracketColors,
  getSupportColors,
  getMarkdownColors,
  getDebugColors,
} from './semantic';

/**
 * Bridge object matching the old themeColors structure from palette/core.ts
 * Theme files can import this instead of the old themeColors.
 */
export const themeColors = {
  syntax: {
    // JzCzhz-designed syntax colors (from semantic tokens)
    keyword: semanticTokens.syntax.keyword.hex,
    keywordControl: semanticTokens.syntax.keywordControl.hex,
    keywordAlt: semanticTokens.syntax.keywordAlt.hex,
    storage: semanticTokens.syntax.storage.hex,
    storageModifier: semanticTokens.syntax.storageModifier.hex,
    type: semanticTokens.syntax.type.hex,
    typeParameter: semanticTokens.syntax.typeParameter.hex,
    enum: semanticTokens.syntax.enum.hex,
    enumMember: semanticTokens.syntax.enumMember.hex,
    macro: semanticTokens.syntax.macro.hex,
    function: semanticTokens.syntax.function.hex,
    method: semanticTokens.syntax.method.hex,
    class: semanticTokens.syntax.class.hex,
    interface: semanticTokens.syntax.interface.hex,
    struct: semanticTokens.syntax.struct.hex,
    variable: semanticTokens.syntax.variable.hex,
    parameter: semanticTokens.syntax.parameter.hex,
    property: semanticTokens.syntax.property.hex,
    string: semanticTokens.syntax.string.hex,
    stringTemplate: semanticTokens.syntax.stringTemplate.hex,
    regex: semanticTokens.syntax.regex.hex,
    number: semanticTokens.syntax.number.hex,
    boolean: semanticTokens.syntax.boolean.hex,
    constant: semanticTokens.syntax.constant.hex,
    tag: semanticTokens.syntax.tag.hex,
    attribute: semanticTokens.syntax.attribute.hex,
    comment: semanticTokens.syntax.comment.hex,
    commentDoc: semanticTokens.syntax.commentDoc.hex,
    // Support colors (built-in/library)
    supportFunction: semanticTokens.support.function.hex,
    supportClass: semanticTokens.support.class.hex,
    supportType: semanticTokens.support.type.hex,
    supportConstant: semanticTokens.support.constant.hex,
    supportVariable: semanticTokens.support.variable.hex,
    // Brackets
    bracket1: semanticTokens.bracket.bracket1.hex,
    bracket2: semanticTokens.bracket.bracket2.hex,
    bracket3: semanticTokens.bracket.bracket3.hex,
    bracket4: semanticTokens.bracket.bracket4.hex,
    bracket5: semanticTokens.bracket.bracket5.hex,
    bracket6: semanticTokens.bracket.bracket6.hex,
    // Legacy aliases (for backward compatibility)
    pastelMint: semanticTokens.syntax.keyword.hex,
    pastelTeal: semanticTokens.syntax.keywordControl.hex,
    keywordAltLegacy: semanticTokens.syntax.keywordAlt.hex,
    warmCream: semanticTokens.syntax.function.hex,
    warmGold: semanticTokens.syntax.function.hex,
    classGold: semanticTokens.syntax.class.hex,
    pastelPeach: semanticTokens.syntax.parameter.hex,
    pastelCoral: semanticTokens.syntax.tag.hex,
    skyBlue: semanticTokens.syntax.variable.hex,
    coolCyan: semanticTokens.syntax.enum.hex,
    paleBlue: semanticTokens.syntax.number.hex,
    pastelIndigo: semanticTokens.syntax.typeParameter.hex,
    softBlue: semanticTokens.syntax.enum.hex,
    pastelOrchid: semanticTokens.syntax.enumMember.hex,
    pastelOrchidLight: semanticTokens.syntax.storageModifier.hex,
    pastelLavender: semanticTokens.syntax.type.hex,
    pastelRose: semanticTokens.syntax.interface.hex,
    pastelViolet: semanticTokens.syntax.typeParameter.hex,
    pastelSlate: semanticTokens.syntax.macro.hex,
    silverMist: semanticTokens.syntax.commentDoc.hex,
    silverBright: semanticTokens.ui.foregroundMuted.hex,
    coolAqua: semanticTokens.syntax.variable.hex,
    coolLavender: semanticTokens.syntax.boolean.hex,
    warmTan: semanticTokens.syntax.property.hex,
    softPurple: semanticTokens.syntax.enumMember.hex,
    bracketPink: semanticTokens.syntax.storageModifier.hex,
    bracketMint: semanticTokens.syntax.string.hex,
  },
  ui: {
    void: semanticTokens.ui.void.hex,
    pureWhite: semanticTokens.ui.pureWhite.hex,
    nearWhite: semanticTokens.ui.nearWhite.hex,
    tertiary: semanticTokens.ui.tertiary.hex,
    disabled: semanticTokens.ui.disabled.hex,
    disabledSubtle: semanticTokens.ui.disabledSubtle.hex,
    ghostText: semanticTokens.ui.ghostText.hex,
    placeholder: semanticTokens.ui.placeholder.hex,
    whitespace: semanticTokens.ui.whitespace.hex,
    ruler: semanticTokens.ui.ruler.hex,
    terminalHint: semanticTokens.ui.terminalHint.hex,
    terminalGuide: semanticTokens.ui.terminalGuide.hex,
    operator: semanticTokens.ui.operator.hex,
    linkActive: semanticTokens.ui.linkActive.hex,
    deprecated: semanticTokens.ui.deprecated.hex,
    variableLanguage: semanticTokens.ui.variableLanguage.hex,
    minimapOpacity: semanticTokens.ui.minimapOpacity,
    error: semanticTokens.ui.error.hex,
  },
  semantic: {
    success: semanticTokens.status.success.hex,
    warning: semanticTokens.status.warning.hex,
    error: semanticTokens.status.error.hex,
    info: semanticTokens.status.info.hex,
  },
  terminal: {
    black: semanticTokens.terminal.black.hex,
    red: semanticTokens.terminal.red.hex,
    green: semanticTokens.terminal.green.hex,
    yellow: semanticTokens.terminal.yellow.hex,
    blue: semanticTokens.terminal.blue.hex,
    magenta: semanticTokens.terminal.magenta.hex,
    cyan: semanticTokens.terminal.cyan.hex,
    white: semanticTokens.terminal.white.hex,
    brightBlack: semanticTokens.terminal.brightBlack.hex,
    brightRed: semanticTokens.terminal.brightRed.hex,
    brightGreen: semanticTokens.terminal.brightGreen.hex,
    brightYellow: semanticTokens.terminal.brightYellow.hex,
    brightBlue: semanticTokens.terminal.brightBlue.hex,
    brightMagenta: semanticTokens.terminal.brightMagenta.hex,
    brightCyan: semanticTokens.terminal.brightCyan.hex,
    brightWhite: semanticTokens.terminal.brightWhite.hex,
  },
  git: {
    added: semanticTokens.git.added.hex,
    modified: semanticTokens.git.modified.hex,
    deleted: semanticTokens.git.deleted.hex,
    untracked: semanticTokens.git.untracked.hex,
    conflicting: semanticTokens.git.conflicting.hex,
    renamed: semanticTokens.git.renamed.hex,
    stageModified: semanticTokens.git.stageModified.hex,
    stageDeleted: semanticTokens.git.stageDeleted.hex,
    submodule: semanticTokens.git.submodule.hex,
  },
  symbol: {
    array: semanticTokens.symbol.array.hex,
    boolean: semanticTokens.symbol.boolean.hex,
    constant: semanticTokens.symbol.constant.hex,
    constructor: semanticTokens.symbol.constructor.hex,
    enumerator: semanticTokens.symbol.enumerator.hex,
    enumeratorMember: semanticTokens.symbol.enumeratorMember.hex,
    field: semanticTokens.symbol.field.hex,
    folder: semanticTokens.symbol.folder.hex,
    function: semanticTokens.symbol.function.hex,
    interface: semanticTokens.symbol.interface.hex,
    method: semanticTokens.symbol.method.hex,
    module: semanticTokens.symbol.module.hex,
    namespace: semanticTokens.symbol.namespace.hex,
    number: semanticTokens.symbol.number.hex,
    operator: semanticTokens.symbol.operator.hex,
    package: semanticTokens.symbol.package.hex,
    property: semanticTokens.symbol.property.hex,
    reference: semanticTokens.symbol.reference.hex,
    snippet: semanticTokens.symbol.snippet.hex,
    string: semanticTokens.symbol.string.hex,
    struct: semanticTokens.symbol.struct.hex,
    typeParameter: semanticTokens.symbol.typeParameter.hex,
    variable: semanticTokens.symbol.variable.hex,
  },
  debug: {
    name: semanticTokens.debug.name.hex,
    value: semanticTokens.debug.value.hex,
    string: semanticTokens.debug.string.hex,
  },
  markdown: {
    codeBlock: semanticTokens.markdown.codeBlock.hex,
    quote: semanticTokens.markdown.quote.hex,
    docComment: semanticTokens.markdown.docComment.hex,
    alertImportant: semanticTokens.markdown.alertImportant.hex,
    alertNote: semanticTokens.markdown.alertNote.hex,
    alertTip: semanticTokens.markdown.alertTip.hex,
  },
} as const;

// Layer 3: Variants
export {
  variants,
  generateVariantTokens,
  generateAllVariants,
  createDarkPrimitives,
  createLightPrimitives,
  createSakuraPrimitives,
  createHighContrastPrimitives,
  adjustLightness,
  shiftHue,
  scaleChroma,
  lightLightness,
  lightCharacter,
  sakuraHue,
  sakuraCharacter,
  highContrastLightness,
  highContrastChroma,
  type ThemeVariant,
  type VariantConfig,
} from './variants';
