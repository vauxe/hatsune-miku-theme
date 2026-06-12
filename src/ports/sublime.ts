/**
 * Sublime Text Target
 *
 * Generates a .sublime-color-scheme (JSON format).
 */

import { withOpacity, type SemanticTokens } from '../tokens';
import { createSyntaxColors, createMarkupColors } from '../theme/colors';

interface Rule {
  name: string;
  scope: string;
  foreground?: string;
  font_style?: string;
}

export function createSublimeTheme(t: SemanticTokens, name: string): object {
  const syn = createSyntaxColors(t);
  const mk = createMarkupColors(t);
  const ui = t.ui;
  const st = t.status;
  const git = t.git;

  // Sublime supports alpha — use the actual VS Code wash recipe.
  const selBg = withOpacity(t.decorative.cursorLineFrost, '40');

  const rules: Rule[] = [
    // Comments
    { name: 'Comment', scope: 'comment, punctuation.definition.comment', foreground: syn.comment, font_style: 'italic' },
    { name: 'Documentation Comment', scope: 'comment.block.documentation, comment.line.documentation', foreground: syn.commentDoc, font_style: 'italic' },

    // Keywords
    { name: 'Keyword', scope: 'keyword', foreground: syn.keyword },
    { name: 'Control Keyword', scope: 'keyword.control', foreground: syn.keywordControl },
    { name: 'Operator', scope: 'keyword.operator, punctuation.accessor', foreground: syn.operator },
    { name: 'Storage', scope: 'storage.type', foreground: syn.storage },
    { name: 'Storage Modifier', scope: 'storage.modifier', foreground: syn.storageModifier },

    // Functions
    { name: 'Function', scope: 'entity.name.function, meta.function-call', foreground: syn.function },
    { name: 'Built-in Function', scope: 'support.function', foreground: syn.functionBuiltin },
    { name: 'Method', scope: 'entity.name.function.member, meta.method-call', foreground: syn.method },

    // Classes & Types
    { name: 'Class', scope: 'entity.name.class, entity.other.inherited-class', foreground: syn.class },
    { name: 'Type', scope: 'entity.name.type, support.type', foreground: syn.type },
    { name: 'Interface', scope: 'entity.name.interface', foreground: syn.interface },
    { name: 'Struct', scope: 'entity.name.struct', foreground: syn.struct },
    { name: 'Enum', scope: 'entity.name.enum', foreground: syn.enum },
    { name: 'Enum Member', scope: 'variable.other.enummember, constant.other.enum', foreground: syn.enumMember },
    { name: 'Type Parameter', scope: 'entity.name.type.parameter', foreground: syn.typeParameter },
    { name: 'Namespace', scope: 'entity.name.namespace, entity.name.module', foreground: syn.namespace },
    { name: 'Support Class', scope: 'support.class', foreground: syn.supportClass },

    // Variables & Data
    { name: 'Variable', scope: 'variable, variable.other.readwrite', foreground: syn.variable },
    { name: 'Parameter', scope: 'variable.parameter', foreground: syn.parameter },
    { name: 'Property', scope: 'variable.other.property, variable.other.member', foreground: syn.property },
    { name: 'Constant', scope: 'variable.other.constant, support.constant', foreground: syn.constant },
    { name: 'Language Variable', scope: 'variable.language', foreground: syn.variableLanguage, font_style: 'italic' },

    // Literals
    { name: 'String', scope: 'string', foreground: syn.string },
    { name: 'Template String', scope: 'string.interpolated, string.template', foreground: syn.stringTemplate },
    { name: 'Number', scope: 'constant.numeric', foreground: syn.number },
    { name: 'Boolean', scope: 'constant.language.boolean, constant.language.true, constant.language.false', foreground: syn.boolean },
    { name: 'Regex', scope: 'string.regexp', foreground: syn.regex },
    { name: 'Escape', scope: 'constant.character.escape', foreground: syn.escape },

    // Punctuation
    { name: 'Punctuation', scope: 'punctuation.separator, punctuation.terminator, punctuation.section, punctuation.definition.block, punctuation.definition.parameters, punctuation.definition.group', foreground: syn.punctuation },

    // Tags (HTML/JSX)
    { name: 'Tag', scope: 'entity.name.tag', foreground: syn.tag },
    { name: 'Attribute', scope: 'entity.other.attribute-name', foreground: syn.attribute },
    { name: 'Tag Punctuation', scope: 'punctuation.definition.tag', foreground: syn.punctuation },

    // Meta
    { name: 'Decorator', scope: 'meta.annotation, punctuation.definition.annotation', foreground: syn.decorator },
    { name: 'Macro', scope: 'entity.name.function.macro, support.function.macro', foreground: syn.macro },

    // Markup
    { name: 'Heading', scope: 'markup.heading, entity.name.section', foreground: syn.heading, font_style: 'bold' },
    { name: 'Bold', scope: 'markup.bold', font_style: 'bold' },
    { name: 'Italic', scope: 'markup.italic', font_style: 'italic' },
    { name: 'Code', scope: 'markup.raw, markup.inline.raw', foreground: syn.markupCode },
    { name: 'Quote', scope: 'markup.quote', foreground: syn.markupQuote, font_style: 'italic' },
    { name: 'Link', scope: 'markup.underline.link', foreground: syn.linkUrl },
    { name: 'Inserted', scope: 'markup.inserted', foreground: mk.inserted },
    { name: 'Deleted', scope: 'markup.deleted', foreground: mk.deleted },
    { name: 'Changed', scope: 'markup.changed', foreground: mk.changed },

    // Invalid & Deprecated
    { name: 'Deprecated', scope: 'invalid.deprecated', foreground: syn.deprecated, font_style: 'italic' },
    { name: 'Invalid', scope: 'invalid.illegal', foreground: syn.invalid },
  ];

  return {
    name,
    author: 'vauxe',
    variables: {},
    globals: {
      // Editor surface
      background: ui.background.hex,
      foreground: ui.foreground.hex,
      invisibles: ui.whitespace.hex,
      caret: ui.cursor.hex,
      block_caret: withOpacity(ui.cursor.hex, '40'),
      line_highlight: ui.backgroundHouse.hex,

      // Selection
      selection: selBg,
      selection_foreground: ui.foreground.hex,
      selection_border: withOpacity(ui.accentPrimary.hex, '40'),
      selection_border_width: '1',
      inactive_selection: withOpacity(t.decorative.cursorLineFrost, '25'),
      inactive_selection_foreground: ui.foregroundMuted.hex,
      selection_corner_style: 'round',

      // Find
      find_highlight: withOpacity(syn.function, '60'),
      find_highlight_foreground: ui.background.hex,
      scroll_highlight: withOpacity(ui.accentPrimary.hex, '60'),
      scroll_selected_highlight: withOpacity(ui.cursor.hex, '80'),
      highlight: withOpacity(ui.accentPrimary.hex, '40'),

      // Gutter
      gutter: ui.background.hex,
      gutter_foreground: ui.foregroundSubtle.hex,
      gutter_foreground_highlight: ui.accentPrimary.hex,
      line_diff_added: git.added.hex,
      line_diff_modified: git.modified.hex,
      line_diff_deleted: git.deleted.hex,

      // Minimap
      minimap_border: ui.border.hex,

      // Brackets
      brackets_foreground: ui.cursor.hex,
      brackets_options: 'underline',
      bracket_contents_foreground: ui.cursor.hex,
      bracket_contents_options: 'underline',
      tags_foreground: ui.cursor.hex,
      tags_options: 'stippled_underline',

      // Indent guides
      guide: ui.foregroundSubtle.hex,
      active_guide: ui.accentPrimary.hex,
      stack_guide: ui.foregroundMuted.hex,

      // Misc
      misspelling: st.error.hex,
      fold_marker: ui.foregroundSubtle.hex,
      accent: ui.accentPrimary.hex,
      shadow: withOpacity('#000000', '40'),
      shadow_width: '4',

      // Popups
      popup_css: '',
      phantom_css: '',
      sheet_css: '',
    },
    rules,
  };
}
