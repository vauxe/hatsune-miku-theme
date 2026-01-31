/**
 * Hatsune Miku Theme - Token Colors (Syntax Highlighting)
 *
 * TextMate grammar-based syntax highlighting rules.
 * All tokens maintain Lc 60+ against #15191D editor background.
 */

import {
  character,
  mikuNT,
  mikuAppend,
  snowMiku,
  ghost,
  angel,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
  sakuraMiku,
  miku15thAnniversary,
  lawson50thMiku,
} from '../palette';

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
  // Comments
  {
    name: 'Comments',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      fontStyle: 'italic',
      foreground: mikuNT.hair.shadow,
    },
  },
  {
    name: 'Documentation Comments',
    scope: [
      'comment.block.documentation',
      'comment.line.documentation',
      'comment.block.javadoc',
    ],
    settings: {
      foreground: character.hair.tip,
      fontStyle: 'italic',
    },
  },

  // Keywords
  {
    name: 'Control Keywords',
    scope: ['keyword.control', 'keyword.control.flow', 'keyword.control.import'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'Storage Types',
    scope: ['storage.type'],
    settings: {
      foreground: wonderlandsShowtime.unitColor,
    },
  },
  {
    name: 'Storage Modifiers',
    scope: ['storage.modifier'],
    settings: {
      foreground: ghost.hair.base,
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'],
    settings: {
      foreground: wonderlandsShowtime.unitColor,
    },
  },
  {
    name: 'Special Operators',
    scope: ['keyword.operator.new', 'keyword.operator.expression'],
    settings: {
      foreground: wonderlandsShowtime.unitColor,
    },
  },

  // Functions
  {
    name: 'User Functions',
    scope: ['entity.name.function', 'meta.function-call'],
    settings: {
      foreground: wonderlandsShowtime.hair.highlight,
    },
  },
  {
    name: 'Library/Support Functions',
    scope: ['support.function', 'support.function.console'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'Methods',
    scope: ['entity.name.function.member'],
    settings: {
      foreground: character.skin.blush,
    },
  },

  // Classes & Types
  {
    name: 'User Classes',
    scope: ['entity.name.type.class', 'entity.name.class'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },
  {
    name: 'Structs',
    scope: ['entity.name.type.struct'],
    settings: {
      foreground: character.hair.tip,
    },
  },
  {
    name: 'Support/Library Classes',
    scope: ['support.class', 'support.type'],
    settings: {
      foreground: nightcord.unitColor,
    },
  },
  {
    name: 'Interfaces',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: angel.accessories.shoes,
    },
  },
  {
    name: 'Enums',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: nightcord.unitColor,
    },
  },
  {
    name: 'Types / Primitives',
    scope: ['entity.name.type', 'support.type.primitive'],
    settings: {
      foreground: character.hair.tip,
    },
  },
  {
    name: 'Type Parameters',
    scope: ['entity.name.type.parameter'],
    settings: {
      foreground: nightcord.unitColor,
    },
  },

  // Variables & Properties
  {
    name: 'Variables',
    scope: ['variable', 'meta.definition.variable.name'],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },
  {
    name: 'Properties / Fields',
    scope: ['variable.other.property', 'variable.other.object.property', 'variable.other.member'],
    settings: {
      foreground: character.skin.blush,
    },
  },
  {
    name: 'Parameters',
    scope: ['variable.parameter'],
    settings: {
      foreground: character.hair.tip,
    },
  },
  {
    name: 'Constants',
    scope: ['variable.other.constant', 'constant.language'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },

  // Data & Literals
  {
    name: 'Strings',
    scope: ['string', 'string.quoted.double', 'string.quoted.single'],
    settings: {
      foreground: character.negi.stalk,
    },
  },
  {
    name: 'Template Strings',
    scope: ['string.template'],
    settings: {
      foreground: leoNeed.hair.highlight,
    },
  },
  {
    name: 'Numbers',
    scope: ['constant.numeric'],
    settings: {
      foreground: character.negi.bright,
    },
  },
  {
    name: 'Booleans',
    scope: ['constant.language.boolean'],
    settings: {
      foreground: leoNeed.hair.highlight,
    },
  },
  {
    name: 'Regex',
    scope: ['string.regexp'],
    settings: {
      foreground: character.negi.bright,
    },
  },
  {
    name: 'Escape Sequences',
    scope: ['constant.character.escape'],
    settings: {
      foreground: ghost.hair.base,
    },
  },

  // Meta & Decorators
  {
    name: 'Decorators / Attributes',
    scope: ['meta.decorator', 'entity.other.attribute-name'],
    settings: {
      foreground: ghost.hair.base,
    },
  },
  {
    name: 'HTML/JSX Tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'HTML/JSX Attributes',
    scope: ['entity.other.attribute-name.html', 'entity.other.attribute-name.jsx'],
    settings: {
      foreground: character.hair.bright,
    },
  },

  // Markdown
  {
    name: 'Markdown Headings',
    scope: ['markup.heading', 'entity.name.section.markdown'],
    settings: {
      foreground: leoNeed.hair.highlight,
    },
  },
  {
    name: 'Markdown Links',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: wonderlandsShowtime.hair.highlight,
    },
  },
  {
    name: 'Markdown Code',
    scope: ['markup.inline.raw', 'markup.raw.block'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },
  {
    name: 'Markdown Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: sakuraMiku.hair.base,
    },
  },

  // Namespaces
  {
    name: 'Entity Name Namespace',
    scope: ['entity.name.type.namespace', 'entity.name.namespace', 'entity.name.type.module'],
    settings: {
      foreground: ghost.hair.base,
    },
  },

  // Dockerfile
  {
    name: 'Dockerfile Keyword',
    scope: ['keyword.other.special-method.dockerfile'],
    settings: {
      foreground: wonderlandsShowtime.hair.highlight,
    },
  },

  // C#
  {
    name: 'C# LINQ Keywords',
    scope: ['keyword.query.linq.cs'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'C# Async Pattern',
    scope: ['keyword.other.await.cs', 'keyword.other.async.cs'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'C# Attribute',
    scope: ['meta.attribute.cs', 'entity.name.type.attribute.cs'],
    settings: {
      foreground: sakuraMiku.hair.base,
    },
  },
  {
    name: 'C# Namespace',
    scope: ['entity.name.type.namespace.cs'],
    settings: {
      foreground: character.hair.bright,
    },
  },

  // YAML
  {
    name: 'YAML Key',
    scope: ['entity.name.tag.yaml', 'support.type.property-name.yaml'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'YAML Anchor',
    scope: ['entity.name.type.anchor.yaml', 'punctuation.definition.anchor.yaml'],
    settings: {
      foreground: ghost.hair.base,
    },
  },
  {
    name: 'YAML Alias',
    scope: ['variable.other.alias.yaml', 'punctuation.definition.alias.yaml'],
    settings: {
      foreground: ghost.hair.base,
    },
  },
  {
    name: 'YAML Timestamp',
    scope: ['constant.other.timestamp.yaml'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },
  {
    name: 'YAML Directive',
    scope: ['keyword.other.directive.yaml', 'punctuation.definition.directive.yaml'],
    settings: {
      foreground: ghost.hair.base,
    },
  },

  // SQL
  {
    name: 'SQL DML Keywords',
    scope: ['keyword.other.DML.sql', 'keyword.other.dml.sql'],
    settings: {
      foreground: leoNeed.hair.highlight,
    },
  },
  {
    name: 'SQL DDL Keywords',
    scope: ['keyword.other.DDL.sql', 'keyword.other.ddl.sql', 'keyword.other.create.sql'],
    settings: {
      foreground: character.skin.blush,
    },
  },
  {
    name: 'SQL Clauses',
    scope: ['keyword.other.sql', 'keyword.other.order.sql', 'keyword.other.alias.sql'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'SQL Functions',
    scope: ['support.function.sql', 'support.function.aggregate.sql'],
    settings: {
      foreground: wonderlandsShowtime.hair.highlight,
    },
  },
  {
    name: 'SQL Tables',
    scope: ['entity.name.function.sql', 'constant.other.table-name.sql'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },
  {
    name: 'SQL Columns',
    scope: ['constant.other.database-name.sql', 'constant.other.placeholder.sql'],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },
  {
    name: 'SQL Operators',
    scope: ['keyword.operator.comparison.sql', 'keyword.operator.logical.sql'],
    settings: {
      foreground: wonderlandsShowtime.unitColor,
    },
  },
  {
    name: 'SQL Types',
    scope: ['storage.type.sql', 'support.type.sql'],
    settings: {
      foreground: character.hair.tip,
    },
  },

  // PHP
  {
    name: 'PHP Tags',
    scope: ['punctuation.section.embedded.php', 'keyword.other.phpdoc.php'],
    settings: {
      foreground: leoNeed.hair.highlight,
    },
  },
  {
    name: 'PHP Variables',
    scope: ['variable.other.php', 'punctuation.definition.variable.php'],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },
  {
    name: 'PHP Superglobals',
    scope: ['variable.language.php'],
    settings: {
      foreground: character.skin.blush,
    },
  },
  {
    name: 'PHP Functions',
    scope: ['support.function.php', 'support.function.construct.php'],
    settings: {
      foreground: wonderlandsShowtime.hair.highlight,
    },
  },
  {
    name: 'PHP Classes',
    scope: ['support.class.php', 'entity.other.inherited-class.php'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },
  {
    name: 'PHP Constants',
    scope: ['support.constant.php', 'constant.language.php'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },

  // Ruby
  {
    name: 'Ruby Symbols',
    scope: ['constant.other.symbol.ruby', 'punctuation.definition.symbol.ruby'],
    settings: {
      foreground: leoNeed.hair.highlight,
    },
  },
  {
    name: 'Ruby Instance Variables',
    scope: ['variable.other.readwrite.instance.ruby'],
    settings: {
      foreground: character.skin.blush,
    },
  },
  {
    name: 'Ruby Class Variables',
    scope: ['variable.other.readwrite.class.ruby'],
    settings: {
      foreground: character.headphones.cushion,
    },
  },
  {
    name: 'Ruby Global Variables',
    scope: ['variable.other.readwrite.global.ruby'],
    settings: {
      foreground: miku15thAnniversary.hair.ribbons,
    },
  },
  {
    name: 'Ruby Blocks',
    scope: ['keyword.control.ruby', 'keyword.control.def.ruby'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'Ruby Special Methods',
    scope: ['keyword.other.special-method.ruby'],
    settings: {
      foreground: wonderlandsShowtime.hair.highlight,
    },
  },
  {
    name: 'Ruby Modules',
    scope: ['entity.name.type.module.ruby', 'support.class.ruby'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },

  // Makefile
  {
    name: 'Makefile Target',
    scope: ['entity.name.function.target.makefile'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Makefile Prerequisite',
    scope: ['entity.name.function.prerequisite.makefile'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'Makefile Variable Definition',
    scope: ['variable.other.makefile'],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },
  {
    name: 'Makefile Variable Reference',
    scope: ['variable.language.makefile', 'string.interpolated.makefile'],
    settings: {
      foreground: wonderlandsShowtime.hair.highlight,
    },
  },
  {
    name: 'Makefile Automatic Variable',
    scope: ['variable.language.automatic.makefile'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },
  {
    name: 'Makefile Function',
    scope: ['support.function.makefile', 'meta.function-call.makefile'],
    settings: {
      foreground: character.skin.blush,
    },
  },
  {
    name: 'Makefile Keyword',
    scope: ['keyword.control.makefile', 'keyword.other.makefile'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'Makefile Conditional',
    scope: ['keyword.control.conditional.makefile', 'keyword.control.ifeq.makefile', 'keyword.control.ifdef.makefile'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Makefile Directive',
    scope: ['keyword.control.directive.makefile', 'keyword.control.include.makefile', 'keyword.control.define.makefile'],
    settings: {
      foreground: ghost.hair.base,
    },
  },
  {
    name: 'Makefile Phony',
    scope: ['meta.special-target.makefile', 'constant.language.makefile'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },
  {
    name: 'Makefile Shell Command',
    scope: ['string.source.makefile', 'meta.recipe.makefile'],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },

  // String Variants
  {
    name: 'String Quoted Variants',
    scope: [
      'string.quoted.double',
      'string.quoted.single',
      'string.quoted.triple',
      'string.quoted.other',
      'string.interpolated',
    ],
    settings: {
      foreground: character.negi.stalk,
    },
  },
  {
    name: 'Shell Interpolated Strings',
    scope: ['string.interpolated.shell', 'string.interpolated.dollar.shell'],
    settings: {
      foreground: character.negi.stalk,
    },
  },

  // Meta Scopes
  {
    name: 'Meta Function Parameters',
    scope: [
      'meta.function.parameters',
      'meta.parameters',
      'meta.function-call.arguments',
    ],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },
  {
    name: 'Meta Class Body',
    scope: ['meta.class.body', 'meta.class.inheritance'],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },
  {
    name: 'Meta Interface/Namespace Body',
    scope: ['meta.interface.body', 'meta.namespace.body'],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },
  {
    name: 'Meta Object/Array Literals',
    scope: ['meta.object-literal', 'meta.array.literal', 'meta.objectliteral'],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },
  {
    name: 'Meta Imports/Exports',
    scope: ['meta.import', 'meta.export', 'meta.imports'],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },
  {
    name: 'Meta Function Return Type',
    scope: ['meta.return.type', 'meta.function.return-type'],
    settings: {
      foreground: character.hair.tip,
    },
  },

  // Entity Name Variants
  {
    name: 'Entity Name Label',
    scope: ['entity.name.label', 'entity.name.statement.label'],
    settings: {
      foreground: leoNeed.hair.highlight,
    },
  },
  {
    name: 'Entity Name Constant',
    scope: ['entity.name.constant', 'entity.name.variable.constant'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },
  {
    name: 'Entity Name Enum',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: nightcord.unitColor,
    },
  },
  {
    name: 'Entity Name Interface',
    scope: ['entity.name.type.interface', 'entity.name.interface'],
    settings: {
      foreground: angel.accessories.shoes,
    },
  },
  {
    name: 'Entity Name Alias/Type Alias',
    scope: ['entity.name.type.alias', 'entity.name.type.type-alias'],
    settings: {
      foreground: character.hair.tip,
    },
  },

  // Keyword Declaration Variants
  {
    name: 'Keyword Declaration',
    scope: [
      'keyword.declaration',
      'keyword.declaration.function',
      'keyword.declaration.class',
      'keyword.declaration.type',
    ],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'Keyword Namespace/Import',
    scope: ['keyword.namespace', 'keyword.import', 'keyword.export'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'Keyword Type',
    scope: ['keyword.type', 'keyword.other.type'],
    settings: {
      foreground: character.hair.highlight,
    },
  },

  // Support Variants
  {
    name: 'Support Variable',
    scope: ['support.variable', 'support.variable.property'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'Support Module',
    scope: ['support.module', 'support.module.node'],
    settings: {
      foreground: character.hair.bright,
    },
  },

  // Markup
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
      foreground: wonderlandsShowtime.hair.highlight,
    },
  },
  {
    name: 'Markup Link URL',
    scope: ['markup.underline.link.markdown', 'meta.link.inline.markdown'],
    settings: {
      foreground: lawson50thMiku.hair.highlight,
      fontStyle: 'underline',
    },
  },
  {
    name: 'Markup List Numbered',
    scope: ['markup.list.numbered', 'punctuation.definition.list.begin.markdown'],
    settings: {
      foreground: wonderlandsShowtime.hair.highlight,
    },
  },

  // Deprecated
  {
    name: 'Deprecated Entities',
    scope: [
      'entity.deprecated',
      'entity.name.deprecated',
      'entity.name.function.deprecated',
      'entity.name.type.deprecated',
    ],
    settings: {
      foreground: mikuNT.hair.shadow,
      fontStyle: 'strikethrough',
    },
  },

  // Python
  {
    name: 'Python Self',
    scope: ['variable.parameter.function.language.special.self.python'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Python Magic Methods',
    scope: ['support.function.magic.python'],
    settings: {
      foreground: character.negi.bright,
    },
  },
  {
    name: 'Python Decorators',
    scope: ['entity.name.function.decorator.python', 'meta.function.decorator.python'],
    settings: {
      foreground: ghost.hair.base,
    },
  },
  {
    name: 'Python F-String Braces',
    scope: ['constant.character.format.placeholder.other.python'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },

  // Go
  {
    name: 'Go Package',
    scope: ['entity.name.package.go'],
    settings: {
      foreground: moreMoreJump.unitColor,
    },
  },
  {
    name: 'Go Imports',
    scope: ['entity.name.import.go'],
    settings: {
      foreground: leoNeed.unitColor,
    },
  },
  {
    name: 'Go Channels',
    scope: ['keyword.operator.channel.go'],
    settings: {
      foreground: nightcord.unitColor,
    },
  },
  {
    name: 'Go Defer/Go Keywords',
    scope: ['keyword.control.go'],
    settings: {
      foreground: leoNeed.hair.highlight,
    },
  },

  // Rust
  {
    name: 'Rust Lifetime',
    scope: ['storage.modifier.lifetime.rust', 'entity.name.lifetime.rust'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars,
    },
  },
  {
    name: 'Rust Unsafe',
    scope: ['keyword.other.unsafe.rust'],
    settings: {
      foreground: character.marks.tattoo,
    },
  },
  {
    name: 'Rust Traits',
    scope: ['entity.name.type.trait.rust'],
    settings: {
      foreground: character.negi.bright,
    },
  },
  {
    name: 'Rust Macros',
    scope: ['entity.name.function.macro.rust', 'meta.macro.rust'],
    settings: {
      foreground: ghost.hair.base,
    },
  },

  // JSON
  {
    name: 'JSON Key Level 0',
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: character.hair.tip,
    },
  },
  {
    name: 'JSON Punctuation',
    scope: ['punctuation.support.type.property-name.json', 'punctuation.definition.string.json'],
    settings: {
      foreground: character.skin.blush,
    },
  },

  // YAML (language-specific overrides)
  {
    name: 'YAML Key',
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: sakuraMiku.hair.base,
    },
  },
  {
    name: 'YAML Anchor',
    scope: ['entity.name.type.anchor.yaml', 'punctuation.definition.anchor.yaml'],
    settings: {
      foreground: sakuraMiku.accessories.petals,
    },
  },
  {
    name: 'YAML Alias',
    scope: ['variable.other.alias.yaml'],
    settings: {
      foreground: leoNeed.hair.highlight,
    },
  },
];

export type TokenColors = typeof tokenColors;
