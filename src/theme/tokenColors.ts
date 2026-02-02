/**
 * Hatsune Miku Theme - Token Colors (Syntax Highlighting)
 *
 * TextMate grammar-based syntax highlighting rules.
 * Design Philosophy: "Digital Diva" - Clear distinction, eye comfort, Miku essence.
 *
 * Color System (against #15191D background):
 * ===========================================
 * All colors sourced from the Miku palette - no hardcoded values.
 * Colors validated for APCA Lc 60+ against editor background.
 */

import {
  themeColors,
  character,
} from '../palette';

// ============================================================================
// COLOR DEFINITIONS - All sourced from palette
// ============================================================================

const syntax = {
  // =========================================================================
  // KEYWORDS - Signature Miku Teal
  // =========================================================================
  keyword: themeColors.syntax.keyword,          // #70F0D0 - Mint-teal (signature)
  keywordAlt: themeColors.syntax.keywordAlt,    // #50D8C8 - Darker teal
  keywordControl: themeColors.syntax.keywordControl, // #60E8D8 - Cool teal
  storage: themeColors.syntax.storage,          // #90E8B0 - Mint-green (DISTINCT from keyword)
  storageModifier: themeColors.syntax.storageModifier, // #E0B8F8 - Light violet
  variableLanguage: themeColors.ui.variableLanguage, // #88F0F8 - Bright aqua

  // =========================================================================
  // FUNCTIONS - Gold (Magical Mirai Wand)
  // =========================================================================
  function: themeColors.syntax.function,        // #F0D070 - Warm gold
  functionBuiltin: themeColors.syntax.supportFunction, // #88E8C0 - Mint (DISTINCT from function)
  method: themeColors.syntax.method,            // #78E8C0 - Fresh mint (DISTINCT from keyword)
  magicMethod: themeColors.syntax.method,       // Same as method

  // =========================================================================
  // LITERALS
  // =========================================================================
  string: themeColors.syntax.string,            // #B4DC78 - Negi yellow-green
  stringTemplate: themeColors.syntax.stringTemplate, // #A0E8A0 - Light mint-green
  number: themeColors.syntax.number,            // #90D8F8 - Bright sky blue (DISTINCT from variable)
  boolean: themeColors.syntax.boolean,          // #F0D0F8 - Light orchid
  operator: themeColors.ui.operator,            // #FFC0E0 - Pink/Magenta
  punctuation: themeColors.syntax.bracket5,     // Sky cyan

  // =========================================================================
  // CLASSES - Negi lime / Pink for interfaces (DISTINCT from keywords)
  // =========================================================================
  class: themeColors.syntax.class,              // #C8E888 - Negi-lime
  interface: themeColors.syntax.interface,      // #FFC8E8 - Bright Miku pink (DISTINCT from class)
  type: themeColors.syntax.type,                // #E8C8F8 - Bright orchid (DISTINCT from parameter)
  typeParameter: themeColors.syntax.typeParameter, // #F0D0F8 - Light violet
  enum: themeColors.syntax.enum,                // #80E8F0 - Ice-cyan (DISTINCT from class)
  struct: themeColors.syntax.struct,            // #70E8D8 - Teal-green (DISTINCT from keyword)
  namespace: themeColors.syntax.supportType,    // #C8D0F8 - Light periwinkle (DISTINCT from type)

  // =========================================================================
  // VARIABLES & DATA
  // =========================================================================
  variable: themeColors.syntax.variable,        // #78E0F8 - Sky cyan
  parameter: themeColors.syntax.parameter,      // #FFC8A0 - Warm peach (brighter)
  property: themeColors.syntax.property,        // #F0D090 - Warm tan (DISTINCT from parameter)
  constant: themeColors.syntax.constant,        // #F0D898 - Warm gold (DISTINCT from parameter)

  // =========================================================================
  // META
  // =========================================================================
  comment: themeColors.syntax.comment,          // #E0D0F8 - Lavender-gray
  commentDoc: themeColors.syntax.commentDoc,    // #A8E0D8 - Teal doc-comments
  decorator: themeColors.syntax.enum,           // #80E8F0 - Ice-cyan (for decorators)
  macro: themeColors.syntax.macro,              // #B8D0F8 - Light blue (DISTINCT from variable)
  lifetime: themeColors.syntax.keywordAlt,      // #50D8C8 - Dark teal (Rust lifetimes)
  tag: themeColors.syntax.tag,                  // #FFC0C8 - Salmon-pink (HTML/JSX tags)
  attribute: themeColors.syntax.attribute,      // #E8D078 - Yellow-amber

  // =========================================================================
  // HEADINGS & SPECIAL
  // =========================================================================
  heading: themeColors.syntax.function,         // #F0D070 - Gold for headings
  sqlKeyword: themeColors.syntax.keywordControl,// #60E8D8 - Cool teal

  // =========================================================================
  // MARKDOWN
  // =========================================================================
  markupCode: themeColors.markdown.codeBlock,
  markupQuote: themeColors.markdown.quote,

  // =========================================================================
  // SPECIAL
  // =========================================================================
  regex: themeColors.syntax.regex,              // #F0C870 - Warm amber
  escape: themeColors.syntax.parameter,         // #FFC0A0 - Peach (string escapes)
  deprecated: themeColors.ui.deprecated,
  invalid: themeColors.ui.error,
};

// Helper type for token color rules
interface TokenColorRule {
  name: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}

export const tokenColors: TokenColorRule[] = [
  // ==========================================================================
  // COMMENTS - Visible but subdued
  // ==========================================================================
  {
    name: 'Comments',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      fontStyle: 'italic',
      foreground: syntax.comment,
    },
  },
  {
    name: 'Documentation Comments',
    scope: [
      'comment.block.documentation',
      'comment.line.documentation',
      'comment.block.javadoc',
      'storage.type.class.jsdoc',
    ],
    settings: {
      foreground: syntax.commentDoc,
      fontStyle: 'italic',
    },
  },

  // ==========================================================================
  // KEYWORDS - Bright teal prominence
  // ==========================================================================
  {
    name: 'Control Keywords',
    scope: [
      'keyword.control',
      'keyword.control.flow',
      'keyword.control.import',
      'keyword.control.export',
      'keyword.control.from',
      'keyword.control.conditional',
      'keyword.control.loop',
    ],
    settings: {
      foreground: syntax.keywordControl,
    },
  },
  {
    name: 'Storage Types',
    scope: ['storage.type', 'storage.type.function', 'storage.type.class'],
    settings: {
      foreground: syntax.storage, // Mint-green (DISTINCT from keyword teal)
    },
  },
  {
    name: 'Storage Modifiers',
    scope: ['storage.modifier', 'storage.modifier.async', 'storage.modifier.static'],
    settings: {
      foreground: syntax.storageModifier,
    },
  },
  {
    name: 'Keyword Declaration',
    scope: [
      'keyword.declaration',
      'keyword.declaration.function',
      'keyword.declaration.class',
      'keyword.declaration.type',
    ],
    settings: {
      foreground: syntax.keyword,
    },
  },
  {
    name: 'Keyword Other',
    scope: ['keyword.other', 'keyword.other.unit'],
    settings: {
      foreground: syntax.keywordAlt,
    },
  },

  // ==========================================================================
  // OPERATORS - Magenta/Pink distinction
  // ==========================================================================
  {
    name: 'Operators',
    scope: [
      'keyword.operator',
      'keyword.operator.arithmetic',
      'keyword.operator.comparison',
      'keyword.operator.logical',
      'keyword.operator.assignment',
      'keyword.operator.ternary',
    ],
    settings: {
      foreground: syntax.operator,
    },
  },
  {
    name: 'Special Operators',
    scope: [
      'keyword.operator.new',
      'keyword.operator.expression',
      'keyword.operator.spread',
      'keyword.operator.rest',
    ],
    settings: {
      foreground: syntax.keywordControl,
    },
  },
  {
    name: 'Punctuation',
    scope: ['punctuation.separator', 'punctuation.terminator', 'punctuation.accessor'],
    settings: {
      foreground: syntax.punctuation,
    },
  },

  // ==========================================================================
  // FUNCTIONS - Gold
  // ==========================================================================
  {
    name: 'User Functions',
    scope: [
      'entity.name.function',
      'meta.function-call',
      'meta.function-call.generic',
    ],
    settings: {
      foreground: syntax.function,
    },
  },
  {
    name: 'Library/Support Functions',
    scope: [
      'support.function',
      'support.function.console',
      'support.function.builtin',
    ],
    settings: {
      foreground: syntax.functionBuiltin,
    },
  },
  {
    name: 'Methods',
    scope: [
      'entity.name.function.member',
      'meta.method.declaration',
      'meta.function.method',
    ],
    settings: {
      foreground: syntax.method,
    },
  },
  {
    name: 'Function Call Arguments',
    scope: ['meta.function-call.arguments', 'meta.function.arguments'],
    settings: {
      foreground: syntax.variable,
    },
  },

  // ==========================================================================
  // CLASSES & TYPES - Pink/Blue hierarchy
  // ==========================================================================
  {
    name: 'User Classes',
    scope: ['entity.name.type.class', 'entity.name.class'],
    settings: {
      foreground: syntax.class,
    },
  },
  {
    name: 'Structs',
    scope: ['entity.name.type.struct'],
    settings: {
      foreground: syntax.struct,
    },
  },
  {
    name: 'Support/Library Classes',
    scope: ['support.class'],
    settings: {
      foreground: themeColors.syntax.supportClass, // #C8B8F8 - Soft violet (DISTINCT from user class)
    },
  },
  {
    name: 'Support/Built-in Types',
    scope: ['support.type'],
    settings: {
      foreground: themeColors.syntax.supportType, // #A8C8F8 - Sky blue (DISTINCT from type)
    },
  },
  {
    name: 'Interfaces',
    scope: ['entity.name.type.interface', 'entity.name.interface'],
    settings: {
      foreground: syntax.interface,
    },
  },
  {
    name: 'Enums',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: syntax.enum,
    },
  },
  {
    name: 'Types / Primitives',
    scope: ['entity.name.type', 'support.type.primitive', 'support.type.builtin'],
    settings: {
      foreground: syntax.type,
    },
  },
  {
    name: 'Type Parameters',
    scope: ['entity.name.type.parameter'],
    settings: {
      foreground: syntax.typeParameter,
    },
  },
  {
    name: 'Type Alias',
    scope: ['entity.name.type.alias', 'entity.name.type.type-alias'],
    settings: {
      foreground: syntax.type,
    },
  },

  // ==========================================================================
  // NAMESPACES & MODULES
  // ==========================================================================
  {
    name: 'Namespaces',
    scope: [
      'entity.name.type.namespace',
      'entity.name.namespace',
      'entity.name.type.module',
    ],
    settings: {
      foreground: syntax.namespace,
    },
  },
  {
    name: 'Support Module',
    scope: ['support.module', 'support.module.node'],
    settings: {
      foreground: syntax.namespace,
    },
  },

  // ==========================================================================
  // VARIABLES & PROPERTIES
  // ==========================================================================
  {
    name: 'Variables',
    scope: ['variable', 'meta.definition.variable.name'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    name: 'Properties / Fields',
    scope: [
      'variable.other.property',
      'variable.other.object.property',
      'variable.other.member',
      'meta.object-literal.key',
    ],
    settings: {
      foreground: syntax.property,
    },
  },
  {
    name: 'Parameters',
    scope: ['variable.parameter', 'variable.parameter.function'],
    settings: {
      foreground: syntax.parameter,
    },
  },
  {
    name: 'Constants',
    scope: ['variable.other.constant', 'constant.language'],
    settings: {
      foreground: syntax.constant,
    },
  },
  {
    name: 'Support Constants',
    scope: ['support.constant', 'constant.other'],
    settings: {
      foreground: themeColors.syntax.supportConstant, // #C8D8A8 - Sage green (DISTINCT from constant)
    },
  },
  {
    name: 'Language Variables',
    scope: ['variable.language', 'variable.language.this', 'variable.language.self'],
    settings: {
      foreground: syntax.variableLanguage,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Support Variable',
    scope: ['support.variable', 'support.variable.property'],
    settings: {
      foreground: themeColors.syntax.supportVariable, // #90E8E8 - Aqua (DISTINCT from variable)
    },
  },

  // ==========================================================================
  // STRINGS - Negi green
  // ==========================================================================
  {
    name: 'Strings',
    scope: [
      'string',
      'string.quoted.double',
      'string.quoted.single',
      'string.quoted.triple',
      'string.quoted.other',
    ],
    settings: {
      foreground: syntax.string,
    },
  },
  {
    name: 'Template Strings',
    scope: ['string.template', 'string.interpolated'],
    settings: {
      foreground: syntax.stringTemplate,
    },
  },
  {
    name: 'String Punctuation',
    scope: [
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end',
    ],
    settings: {
      foreground: syntax.string,
    },
  },
  {
    name: 'Template Expression',
    scope: ['punctuation.definition.template-expression', 'meta.template.expression'],
    settings: {
      foreground: syntax.operator,
    },
  },

  // ==========================================================================
  // NUMBERS & BOOLEANS
  // ==========================================================================
  {
    name: 'Numbers',
    scope: [
      'constant.numeric',
      'constant.numeric.integer',
      'constant.numeric.float',
      'constant.numeric.hex',
      'constant.numeric.octal',
      'constant.numeric.binary',
    ],
    settings: {
      foreground: syntax.number,
    },
  },
  {
    name: 'Booleans',
    scope: ['constant.language.boolean', 'constant.language.true', 'constant.language.false'],
    settings: {
      foreground: syntax.boolean,
    },
  },
  {
    name: 'Null/Undefined',
    scope: ['constant.language.null', 'constant.language.undefined'],
    settings: {
      foreground: syntax.keywordAlt,
    },
  },

  // ==========================================================================
  // REGEX & ESCAPE
  // ==========================================================================
  {
    name: 'Regex',
    scope: ['string.regexp', 'constant.regexp'],
    settings: {
      foreground: syntax.regex,
    },
  },
  {
    name: 'Escape Sequences',
    scope: ['constant.character.escape'],
    settings: {
      foreground: syntax.escape,
    },
  },

  // ==========================================================================
  // DECORATORS & ATTRIBUTES
  // ==========================================================================
  {
    name: 'Decorators / Attributes',
    scope: [
      'meta.decorator',
      'entity.name.function.decorator',
      'punctuation.decorator',
    ],
    settings: {
      foreground: syntax.decorator,
    },
  },
  {
    name: 'Attribute Names',
    scope: ['entity.other.attribute-name'],
    settings: {
      foreground: syntax.attribute,
    },
  },

  // ==========================================================================
  // HTML/JSX/XML
  // ==========================================================================
  {
    name: 'HTML/JSX Tags',
    scope: ['entity.name.tag', 'punctuation.definition.tag'],
    settings: {
      foreground: syntax.tag,
    },
  },
  {
    name: 'HTML/JSX Attributes',
    scope: ['entity.other.attribute-name.html', 'entity.other.attribute-name.jsx'],
    settings: {
      foreground: syntax.attribute,
    },
  },
  {
    name: 'JSX Expression',
    scope: ['punctuation.section.embedded.jsx'],
    settings: {
      foreground: syntax.operator,
    },
  },

  // ==========================================================================
  // MARKDOWN
  // ==========================================================================
  {
    name: 'Markdown Headings',
    scope: ['markup.heading', 'entity.name.section.markdown'],
    settings: {
      foreground: syntax.heading,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Bold',
    scope: ['markup.bold'],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Italic',
    scope: ['markup.italic'],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'Emphasis',
    scope: ['emphasis'],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'Strong',
    scope: ['strong'],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Links',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: syntax.interface,
    },
  },
  {
    name: 'Markdown Code',
    scope: ['markup.inline.raw', 'markup.raw.block', 'fenced_code.block.language'],
    settings: {
      foreground: syntax.markupCode,
    },
  },
  {
    name: 'Markdown Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: syntax.markupQuote,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markdown List',
    scope: ['markup.list', 'punctuation.definition.list.begin.markdown'],
    settings: {
      // Must meet primary chroma threshold (Cz ≥ 8)
      foreground: syntax.method,
    },
  },

  // ==========================================================================
  // JSON
  // ==========================================================================
  {
    name: 'JSON Keys',
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: syntax.property,
    },
  },
  {
    name: 'JSON Values',
    scope: ['string.quoted.double.json'],
    settings: {
      foreground: syntax.string,
    },
  },
  {
    name: 'JSON Punctuation',
    scope: ['punctuation.support.type.property-name.json', 'punctuation.definition.string.json'],
    settings: {
      foreground: syntax.punctuation,
    },
  },

  // ==========================================================================
  // YAML
  // ==========================================================================
  {
    name: 'YAML Key',
    scope: ['entity.name.tag.yaml', 'support.type.property-name.yaml'],
    settings: {
      foreground: syntax.property,
    },
  },
  {
    name: 'YAML Anchor',
    scope: ['entity.name.type.anchor.yaml', 'punctuation.definition.anchor.yaml'],
    settings: {
      foreground: syntax.decorator,
    },
  },
  {
    name: 'YAML Alias',
    scope: ['variable.other.alias.yaml', 'punctuation.definition.alias.yaml'],
    settings: {
      foreground: syntax.decorator,
    },
  },
  {
    name: 'YAML Timestamp',
    scope: ['constant.other.timestamp.yaml'],
    settings: {
      foreground: syntax.number,
    },
  },
  {
    name: 'YAML Directive',
    scope: ['keyword.other.directive.yaml', 'punctuation.definition.directive.yaml'],
    settings: {
      foreground: syntax.keyword,
    },
  },

  // ==========================================================================
  // SQL
  // ==========================================================================
  {
    name: 'SQL DML Keywords',
    scope: ['keyword.other.DML.sql', 'keyword.other.dml.sql'],
    settings: {
      foreground: syntax.keywordControl,
    },
  },
  {
    name: 'SQL DDL Keywords',
    scope: ['keyword.other.DDL.sql', 'keyword.other.ddl.sql', 'keyword.other.create.sql'],
    settings: {
      foreground: syntax.method,
    },
  },
  {
    name: 'SQL Clauses',
    scope: ['keyword.other.sql', 'keyword.other.order.sql', 'keyword.other.alias.sql'],
    settings: {
      foreground: syntax.keyword,
    },
  },
  {
    name: 'SQL Functions',
    scope: ['support.function.sql', 'support.function.aggregate.sql'],
    settings: {
      foreground: syntax.function,
    },
  },
  {
    name: 'SQL Tables',
    scope: ['entity.name.function.sql', 'constant.other.table-name.sql'],
    settings: {
      foreground: syntax.class,
    },
  },
  {
    name: 'SQL Types',
    scope: ['storage.type.sql', 'support.type.sql'],
    settings: {
      foreground: syntax.type,
    },
  },

  // ==========================================================================
  // CSS/SCSS/LESS
  // ==========================================================================
  {
    name: 'CSS Selectors',
    scope: ['entity.name.tag.css', 'entity.other.attribute-name.class.css'],
    settings: {
      foreground: syntax.tag,
    },
  },
  {
    name: 'CSS Properties',
    scope: ['support.type.property-name.css', 'meta.property-name.css'],
    settings: {
      foreground: syntax.property,
    },
  },
  {
    name: 'CSS Values',
    scope: ['support.constant.property-value.css', 'meta.property-value.css'],
    settings: {
      foreground: syntax.string,
    },
  },
  {
    name: 'CSS Units',
    scope: ['keyword.other.unit.css'],
    settings: {
      foreground: syntax.number,
    },
  },
  {
    name: 'CSS Color Values',
    scope: ['constant.rgb-value', 'constant.other.color', 'support.constant.color'],
    settings: {
      foreground: syntax.regex, // Warm amber (DISTINCT from number)
    },
  },
  {
    name: 'SCSS Variables',
    scope: ['variable.scss', 'variable.sass'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    name: 'CSS ID Selector',
    scope: ['entity.other.attribute-name.id.css'],
    settings: {
      foreground: syntax.heading,
    },
  },

  // ==========================================================================
  // PHP
  // ==========================================================================
  {
    name: 'PHP Tags',
    scope: ['punctuation.section.embedded.php', 'keyword.other.phpdoc.php'],
    settings: {
      foreground: syntax.keyword,
    },
  },
  {
    name: 'PHP Variables',
    scope: ['variable.other.php', 'punctuation.definition.variable.php'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    name: 'PHP Superglobals',
    scope: ['variable.language.php'],
    settings: {
      foreground: syntax.variableLanguage,
      fontStyle: 'italic',
    },
  },
  {
    name: 'PHP Functions',
    scope: ['support.function.php', 'support.function.construct.php'],
    settings: {
      foreground: syntax.function,
    },
  },
  {
    name: 'PHP Classes',
    scope: ['support.class.php', 'entity.other.inherited-class.php'],
    settings: {
      foreground: syntax.class,
    },
  },

  // ==========================================================================
  // RUBY
  // ==========================================================================
  {
    name: 'Ruby Symbols',
    scope: ['constant.other.symbol.ruby', 'punctuation.definition.symbol.ruby'],
    settings: {
      foreground: syntax.constant,
    },
  },
  {
    name: 'Ruby Instance Variables',
    scope: ['variable.other.readwrite.instance.ruby'],
    settings: {
      foreground: syntax.property,
    },
  },
  {
    name: 'Ruby Class Variables',
    scope: ['variable.other.readwrite.class.ruby'],
    settings: {
      foreground: syntax.class,
    },
  },
  {
    name: 'Ruby Global Variables',
    scope: ['variable.other.readwrite.global.ruby'],
    settings: {
      foreground: syntax.constant,
    },
  },
  {
    name: 'Ruby Blocks',
    scope: ['keyword.control.ruby', 'keyword.control.def.ruby'],
    settings: {
      foreground: syntax.keywordControl,
    },
  },

  // ==========================================================================
  // PYTHON
  // ==========================================================================
  {
    name: 'Python Self',
    scope: ['variable.parameter.function.language.special.self.python'],
    settings: {
      foreground: syntax.variableLanguage,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Python Magic Methods',
    scope: ['support.function.magic.python'],
    settings: {
      foreground: syntax.magicMethod,
    },
  },
  {
    name: 'Python Decorators',
    scope: ['entity.name.function.decorator.python', 'meta.function.decorator.python'],
    settings: {
      foreground: syntax.decorator,
    },
  },
  {
    name: 'Python F-String Braces',
    scope: ['constant.character.format.placeholder.other.python'],
    settings: {
      foreground: syntax.operator,
    },
  },

  // ==========================================================================
  // GO
  // ==========================================================================
  {
    name: 'Go Package',
    scope: ['entity.name.package.go'],
    settings: {
      foreground: syntax.namespace,
    },
  },
  {
    name: 'Go Imports',
    scope: ['entity.name.import.go'],
    settings: {
      foreground: syntax.string,
    },
  },
  {
    name: 'Go Channels',
    scope: ['keyword.operator.channel.go'],
    settings: {
      foreground: syntax.operator,
    },
  },
  {
    name: 'Go Control',
    scope: ['keyword.control.go'],
    settings: {
      foreground: syntax.keywordControl,
    },
  },

  // ==========================================================================
  // RUST
  // ==========================================================================
  {
    name: 'Rust Lifetime',
    scope: ['storage.modifier.lifetime.rust', 'entity.name.lifetime.rust'],
    settings: {
      foreground: syntax.lifetime,
    },
  },
  {
    name: 'Rust Unsafe',
    scope: ['keyword.other.unsafe.rust'],
    settings: {
      foreground: syntax.invalid,
    },
  },
  {
    name: 'Rust Traits',
    scope: ['entity.name.type.trait.rust'],
    settings: {
      foreground: syntax.interface,
    },
  },
  {
    name: 'Rust Macros',
    scope: ['entity.name.function.macro.rust', 'meta.macro.rust'],
    settings: {
      foreground: syntax.macro,
    },
  },

  // ==========================================================================
  // C#
  // ==========================================================================
  {
    name: 'C# LINQ Keywords',
    scope: ['keyword.query.linq.cs'],
    settings: {
      foreground: syntax.keyword,
    },
  },
  {
    name: 'C# Async Pattern',
    scope: ['keyword.other.await.cs', 'keyword.other.async.cs'],
    settings: {
      foreground: syntax.keywordControl,
    },
  },
  {
    name: 'C# Attribute',
    scope: ['meta.attribute.cs', 'entity.name.type.attribute.cs'],
    settings: {
      foreground: syntax.decorator,
    },
  },
  {
    name: 'C# Namespace',
    scope: ['entity.name.type.namespace.cs'],
    settings: {
      foreground: syntax.namespace,
    },
  },

  // ==========================================================================
  // JAVA
  // ==========================================================================
  {
    name: 'Java Annotations',
    scope: ['storage.type.annotation.java', 'punctuation.definition.annotation.java'],
    settings: {
      foreground: syntax.decorator,
    },
  },
  {
    name: 'Java Package',
    scope: ['storage.modifier.package.java'],
    settings: {
      foreground: syntax.keyword,
    },
  },
  {
    name: 'Java Import',
    scope: ['storage.modifier.import.java'],
    settings: {
      foreground: syntax.keyword,
    },
  },

  // ==========================================================================
  // MAKEFILE
  // ==========================================================================
  {
    name: 'Makefile Target',
    scope: ['entity.name.function.target.makefile'],
    settings: {
      foreground: syntax.heading,
    },
  },
  {
    name: 'Makefile Prerequisite',
    scope: ['entity.name.function.prerequisite.makefile'],
    settings: {
      foreground: syntax.function,
    },
  },
  {
    name: 'Makefile Variable',
    scope: ['variable.other.makefile', 'variable.language.makefile'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    name: 'Makefile Function',
    scope: ['support.function.makefile', 'meta.function-call.makefile'],
    settings: {
      foreground: syntax.function,
    },
  },

  // ==========================================================================
  // DOCKERFILE
  // ==========================================================================
  {
    name: 'Dockerfile Keyword',
    scope: ['keyword.other.special-method.dockerfile'],
    settings: {
      foreground: syntax.keyword,
    },
  },
  {
    name: 'Dockerfile Instructions',
    scope: ['keyword.control.dockerfile'],
    settings: {
      foreground: syntax.keywordControl,
    },
  },

  // ==========================================================================
  // SHELL
  // ==========================================================================
  {
    name: 'Shell Variables',
    scope: ['variable.other.normal.shell', 'variable.other.special.shell'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    name: 'Shell Interpolated',
    scope: ['string.interpolated.shell', 'string.interpolated.dollar.shell'],
    settings: {
      foreground: syntax.stringTemplate,
    },
  },
  {
    name: 'Shell Commands',
    scope: ['support.function.builtin.shell'],
    settings: {
      foreground: syntax.functionBuiltin,
    },
  },

  // ==========================================================================
  // META SCOPES
  // ==========================================================================
  {
    name: 'Preprocessor',
    scope: ['meta.preprocessor', 'meta.preprocessor.macro', 'entity.name.function.preprocessor'],
    settings: {
      foreground: syntax.keyword,
    },
  },
  {
    name: 'Meta Function Parameters',
    scope: ['meta.function.parameters', 'meta.parameters', 'meta.function-call.arguments'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    name: 'Meta Class Body',
    scope: ['meta.class.body', 'meta.class.inheritance'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    name: 'Meta Interface/Namespace Body',
    scope: ['meta.interface.body', 'meta.namespace.body'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    name: 'Meta Object/Array Literals',
    scope: ['meta.object-literal', 'meta.array.literal', 'meta.objectliteral'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    name: 'Meta Imports/Exports',
    scope: ['meta.import', 'meta.export', 'meta.imports'],
    settings: {
      foreground: syntax.variable,
    },
  },
  {
    name: 'Meta Function Return Type',
    scope: ['meta.return.type', 'meta.function.return-type'],
    settings: {
      foreground: syntax.type,
    },
  },

  // ==========================================================================
  // ENTITY LABELS
  // ==========================================================================
  {
    name: 'Entity Name Label',
    scope: ['entity.name.label', 'entity.name.statement.label'],
    settings: {
      foreground: syntax.decorator,
    },
  },
  {
    name: 'Entity Name Constant',
    scope: ['entity.name.constant', 'entity.name.variable.constant'],
    settings: {
      foreground: syntax.constant,
    },
  },

  // ==========================================================================
  // MARKUP EXTENDED
  // ==========================================================================
  {
    name: 'Markup Underline',
    scope: ['markup.underline'],
    settings: {
      fontStyle: 'underline',
    },
  },
  {
    name: 'Markup Link Label',
    scope: ['markup.link.label', 'string.other.link.title.markdown'],
    settings: {
      foreground: syntax.string,
    },
  },
  {
    name: 'Markup Link URL',
    scope: ['markup.underline.link.markdown', 'meta.link.inline.markdown'],
    settings: {
      foreground: syntax.interface,
      fontStyle: 'underline',
    },
  },
  {
    name: 'Markup Inserted',
    scope: ['markup.inserted'],
    settings: {
      foreground: character.negi.bright,
    },
  },
  {
    name: 'Markup Deleted',
    scope: ['markup.deleted'],
    settings: {
      foreground: themeColors.ui.error,
    },
  },
  {
    name: 'Markup Changed',
    scope: ['markup.changed'],
    settings: {
      foreground: syntax.heading,  // #A8D8D8 - Soft aqua (low-fatigue)
    },
  },

  // ==========================================================================
  // DEPRECATED & INVALID
  // ==========================================================================
  {
    name: 'Deprecated Entities',
    scope: [
      'entity.deprecated',
      'entity.name.deprecated',
      'entity.name.function.deprecated',
      'entity.name.type.deprecated',
      'invalid.deprecated',  // Moved here for deprecated-specific color
    ],
    settings: {
      foreground: syntax.deprecated,
      fontStyle: 'strikethrough',
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],  // Removed invalid.deprecated
    settings: {
      foreground: syntax.invalid,
    },
  },
];

export type TokenColors = typeof tokenColors;
