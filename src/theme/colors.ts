/**
 * Shared Color Mapping
 *
 * Single source of truth for syntax color names used by both
 * tokenColors.ts (TextMate) and semanticTokens.ts (LSP).
 * Ensures TextMate and semantic highlighting always agree.
 *
 * All colors flow from the semantic token system - no hardcoded hex values.
 */

import type { SemanticTokens } from '../tokens';

// =============================================================================
// SYNTAX COLORS - Used by both tokenColors.ts and semanticTokens.ts
// =============================================================================

export function createSyntaxColors(t: SemanticTokens) {
  return {
    // Keywords - Miku signature teal
    keyword: t.syntax.keyword.hex,
    keywordControl: t.syntax.keywordControl.hex,
    keywordAlt: t.syntax.keywordAlt.hex,
    storage: t.syntax.storage.hex,
    storageModifier: t.syntax.storageModifier.hex,

    // Functions - Orange (Minor 6th)
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
    namespace: t.syntax.type.hex, // namespaces share blue (270°) with types
    supportClass: t.support.class.hex,
    supportType: t.support.type.hex,
    supportConstant: t.support.constant.hex,
    supportVariable: t.support.variable.hex,

    // Variables & Data
    variable: t.syntax.variable.hex,
    parameter: t.syntax.parameter.hex,
    property: t.syntax.property.hex,
    constant: t.syntax.constant.hex,
    variableLanguage: t.syntax.variableLanguage.hex,

    // Literals
    string: t.syntax.string.hex,
    stringTemplate: t.syntax.stringTemplate.hex,
    number: t.syntax.number.hex,
    boolean: t.syntax.boolean.hex,

    // Operators & Punctuation
    operator: t.syntax.operator.hex,
    punctuation: t.syntax.punctuation.hex,

    // Meta
    comment: t.syntax.comment.hex,
    commentDoc: t.syntax.commentDoc.hex,
    decorator: t.syntax.macro.hex, // decorators share violet (300°) with macros (both are meta-annotations)
    macro: t.syntax.macro.hex,
    lifetime: t.syntax.keywordAlt.hex, // Rust lifetimes use keyword alternate register
    tag: t.syntax.tag.hex,
    attribute: t.syntax.attribute.hex,

    // Headings & Special
    heading: t.markdown.heading.hex,
    sqlKeyword: t.syntax.keywordControl.hex,

    // Markdown
    markupCode: t.markdown.codeBlock.hex,
    markupQuote: t.markdown.quote.hex,
    linkUrl: t.markdown.linkUrl.hex,
    headingPunctuation: t.markdown.headingPunctuation.hex,

    // Regex & Escape
    regex: t.syntax.regex.hex,
    escape: t.syntax.parameter.hex, // escape sequences share red (20°) with parameters (both are inline substitutions)

    // Status
    deprecated: t.ui.deprecated.hex,
    invalid: t.ui.errorForeground.hex,
  } as const;
}

export function createMarkupColors(t: SemanticTokens) {
  return {
    inserted: t.markdown.inserted.hex,
    deleted: t.markdown.deleted.hex,
    changed: t.syntax.function.hex,
  } as const;
}
