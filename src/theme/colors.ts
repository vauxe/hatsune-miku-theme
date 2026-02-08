/**
 * Shared Color Mapping
 *
 * Single source of truth for syntax color names used by both
 * tokenColors.ts (TextMate) and semanticTokens.ts (LSP).
 * Ensures TextMate and semantic highlighting always agree.
 *
 * All colors flow from the semantic token system - no hardcoded hex values.
 */

import { semanticTokens as t, darken } from '../tokens';

// =============================================================================
// SYNTAX COLORS - Used by both tokenColors.ts and semanticTokens.ts
// =============================================================================

export const syntax = {
  // Keywords - Miku signature teal
  keyword: t.syntax.keyword.hex,
  keywordControl: t.syntax.keywordControl.hex,
  keywordAlt: t.syntax.keywordAlt.hex,
  storage: t.syntax.storage.hex,
  storageModifier: t.syntax.storageModifier.hex,

  // Functions - Gold
  function: t.syntax.function.hex,
  functionBuiltin: t.support.function.hex,
  method: t.syntax.method.hex,
  magicMethod: t.syntax.method.hex,

  // Classes & Types
  class: t.syntax.class.hex,
  interface: t.syntax.interface.hex,
  type: t.syntax.type.hex,
  typeParameter: t.syntax.typeParameter.hex,
  enum: t.syntax.enum.hex,
  enumMember: t.syntax.enumMember.hex,
  struct: t.syntax.struct.hex,
  namespace: t.syntax.type.hex,
  supportClass: t.support.class.hex,
  supportType: t.support.type.hex,
  supportConstant: t.support.constant.hex,
  supportVariable: t.support.variable.hex,

  // Variables & Data
  variable: t.syntax.variable.hex,
  parameter: t.syntax.parameter.hex,
  property: t.syntax.property.hex,
  constant: t.syntax.constant.hex,
  variableLanguage: t.ui.variableLanguage.hex,

  // Literals
  string: t.syntax.string.hex,
  stringTemplate: t.syntax.stringTemplate.hex,
  number: t.syntax.number.hex,
  boolean: t.syntax.boolean.hex,

  // Operators & Punctuation
  operator: t.ui.operator.hex,
  punctuation: t.bracket.bracket5.hex,

  // Meta
  comment: t.syntax.comment.hex,
  commentDoc: t.syntax.commentDoc.hex,
  decorator: t.syntax.macro.hex,
  macro: t.syntax.macro.hex,
  lifetime: t.syntax.keywordAlt.hex,
  tag: t.syntax.tag.hex,
  attribute: t.syntax.attribute.hex,

  // Headings & Special
  heading: darken(t.syntax.function, 0.010),  // Bold compensation — dimmed to match non-bold perceived brightness
  sqlKeyword: t.syntax.keywordControl.hex,

  // Markdown
  markupCode: t.markdown.codeBlock.hex,
  markupQuote: t.markdown.quote.hex,

  // Regex & Escape
  regex: t.syntax.regex.hex,
  escape: t.syntax.parameter.hex,

  // Status
  deprecated: t.ui.deprecated.hex,
  invalid: t.ui.error.hex,
} as const;

// =============================================================================
// MARKUP COLORS - For markup inserted/deleted/changed
// =============================================================================

export const markup = {
  inserted: t.decorative.markupInserted,
  deleted: t.ui.error.hex,
  changed: t.syntax.function.hex,
} as const;
