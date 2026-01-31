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
  character,
  themeColors,
  snowMiku,
  digitalStars,
  leoNeed,
  wonderlandsShowtime,
  vividBadSquad,
  nightcord,
} from '../palette';

// ============================================================================
// COLOR DEFINITIONS - All sourced from palette
// ============================================================================

const syntax = {
  // =========================================================================
  // KEYWORDS & CONTROL - Signature Miku Teal Family (170-185° hue)
  // All Lc 60+ for excellent readability
  // =========================================================================
  keyword: character.hair.highlight,       // #5DE4DB - Bright teal (Lc 74)
  keywordAlt: wonderlandsShowtime.hair.highlight, // #4DD0E1 - Lighter teal (Lc 70)
  storageModifier: themeColors.syntax.pastelTeal, // #78D0D8 - Pastel teal (Lc 68) - BOOSTED

  // =========================================================================
  // CALLABLE ENTITIES - Gold Family (40-55° hue)
  // Functions warmer/yellower, Classes cooler/grayer for distinction
  // =========================================================================
  function: themeColors.syntax.warmCream,  // #E8D0A0 - Warm cream (Lc 65)
  functionBuiltin: character.hair.highlight, // #5DE4DB - Bright teal (Lc 74)
  method: themeColors.syntax.pastelRose,   // #F0B8C8 - Rose pink (Lc 64) - METHODS ONLY
  magicMethod: themeColors.syntax.pastelRose, // #F0B8C8 - Python __dunder__ methods

  // =========================================================================
  // LITERALS - Green/Blue Family
  // Numbers distinct blue, Booleans distinct indigo
  // =========================================================================
  string: character.negi.stalk,            // #9CCC65 - Negi stalk green (Lc 68)
  stringTemplate: character.negi.white,    // #E8F5E9 - Lighter green (Lc 88)
  number: themeColors.syntax.softBlue,     // #A0D8FF - Soft blue (Lc 74)
  boolean: themeColors.syntax.pastelIndigo, // #A8B8E8 - Pastel indigo (Lc 62) - BOOSTED
  operator: nightcord.hair.highlight,      // #C0C0C0 - 25-ji silver (Lc 60)
  punctuation: character.skirt.accessory,  // #A1B3B6 - Wallet chain silver (Lc 53)

  // =========================================================================
  // TYPES & STRUCTURES - Blue/Purple Family (200-290° hue)
  // Each type category has distinct hue for easy differentiation
  // =========================================================================
  class: themeColors.syntax.warmGold,      // #D4C4B0 - Gray-gold (Lc 60)
  interface: themeColors.syntax.skyBlue,   // #80C8FF - Sky blue (Lc 68)
  type: character.hair.tip,                // #B2EBE7 - Soft teal (Lc 78)
  typeParameter: themeColors.syntax.pastelLavender, // #C8B8E8 - Lavender (Lc 62) - DISTINCT from keywords (ΔE 30+)
  enum: themeColors.syntax.pastelOrchid,   // #E0B8E8 - Soft orchid (Lc 66)
  struct: themeColors.syntax.paleBlue,     // #B8E0F8 - Pale blue (Lc 78) - DISTINCT from number
  namespace: themeColors.syntax.pastelLavender, // #C8B8E8 - Lavender (Lc 62) - DISTINCT from decorator

  // =========================================================================
  // VARIABLES & DATA - Neutral/Warm Family
  // Clear hierarchy: variable > property > parameter > constant
  // =========================================================================
  variable: snowMiku.y2010.outfit.shirt,   // #E8EEF2 - Snow white (Lc 86)
  parameter: character.skin.base,          // #FFE4D6 - Miku skin peachy (Lc 77)
  property: themeColors.syntax.pastelPeach, // #F8D0C0 - Soft peach (Lc 70) - DISTINCT from method
  constant: themeColors.syntax.pastelCoral, // #FFD8D0 - Pale coral (Lc 76)

  // =========================================================================
  // META - Purple Family (260-290° hue)
  // Decorators distinct from Namespaces
  // =========================================================================
  comment: themeColors.syntax.silverBright, // #B0C0C8 - Silver (Lc 60)
  commentDoc: themeColors.markdown.docComment, // #A8C8D0 - Cyan-tinted silver (Lc 62) - DISTINCT from comment
  decorator: themeColors.syntax.pastelViolet, // #D8A8E0 - Violet (Lc 60) - DISTINCT from namespace
  lifetime: themeColors.syntax.pastelSlate, // #B0C0E0 - Slate blue (Lc 64) - DISTINCT from boolean
  tag: character.hair.highlight,           // #5DE4DB - Bright teal (Lc 74)
  attribute: themeColors.syntax.pastelPeach, // #F8D0C0 - Soft peach (Lc 70) - DISTINCT from tag (ΔE 30+)

  // =========================================================================
  // HEADINGS & SPECIAL SECTIONS
  // =========================================================================
  heading: themeColors.syntax.coolAqua,    // #B0E0E0 - Soft aqua (Lc 72) - BOOSTED
  sqlKeyword: themeColors.syntax.coolLavender, // #C0D8F0 - Lavender (Lc 68) - BOOSTED

  // =========================================================================
  // MARKDOWN SPECIFIC - Distinct from code syntax
  // =========================================================================
  markupCode: themeColors.markdown.codeBlock, // #8AC060 - Slightly different from string
  markupQuote: themeColors.markdown.quote, // #A0B0B8 - Warmer than regular comment

  // =========================================================================
  // SPECIAL
  // =========================================================================
  regex: character.negi.bright,            // #69F0AE - Bright mint (Lc 82)
  escape: themeColors.syntax.pastelOrchid, // #E0B8E8 - Soft orchid (Lc 66)
  deprecated: character.skirt.accessory,   // #A1B3B6 - Wallet chain silver
  invalid: themeColors.ui.error,           // #FF9999 - Coral pink (Lc 61)
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
      foreground: syntax.keyword,
    },
  },
  {
    name: 'Storage Types',
    scope: ['storage.type', 'storage.type.function', 'storage.type.class'],
    settings: {
      foreground: syntax.class,  // #D4C4B0 - Gray-gold (ΔE 20+ from bright teal keywords)
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
  // OPERATORS - Orange distinction
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
      foreground: syntax.keyword,
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
  // FUNCTIONS - Warm gold
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
  // CLASSES & TYPES - Gold/Blue hierarchy
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
    scope: ['support.class', 'support.type'],
    settings: {
      foreground: syntax.class,
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
    name: 'Language Variables',
    scope: ['variable.language', 'variable.language.this', 'variable.language.self'],
    settings: {
      foreground: syntax.keywordAlt,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Support Variable',
    scope: ['support.variable', 'support.variable.property'],
    settings: {
      foreground: syntax.property,
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
      foreground: syntax.markupCode,  // #8AC060 - DISTINCT from string (#9CCC65)
    },
  },
  {
    name: 'Markdown Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: syntax.markupQuote,  // #A0B0B8 - DISTINCT from comment (#B0C0C8)
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markdown List',
    scope: ['markup.list', 'punctuation.definition.list.begin.markdown'],
    settings: {
      foreground: syntax.operator,
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
      foreground: syntax.keyword,
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
      foreground: syntax.keywordAlt,
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
      foreground: syntax.keyword,
    },
  },

  // ==========================================================================
  // PYTHON
  // ==========================================================================
  {
    name: 'Python Self',
    scope: ['variable.parameter.function.language.special.self.python'],
    settings: {
      foreground: syntax.keywordAlt,
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
      foreground: syntax.keyword,
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
      foreground: syntax.decorator,
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
      foreground: syntax.keyword,
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
      foreground: syntax.keyword,
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
    ],
    settings: {
      foreground: syntax.deprecated,
      fontStyle: 'strikethrough',
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.deprecated', 'invalid.illegal'],
    settings: {
      foreground: syntax.invalid,
    },
  },
];

export type TokenColors = typeof tokenColors;
