import { character } from '../palette';

interface TokenColorRule {
  name: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    fontStyle?: string;
  };
}
export const tokenColors: TokenColorRule[] = [
  {
    name: 'Comments',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      fontStyle: 'italic',
      foreground: character.hair.base,
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
      foreground: character.hair.base,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Control Keywords',
    scope: ['keyword.control', 'keyword.control.flow', 'keyword.control.import'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Storage Types',
    scope: ['storage.type'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Storage Modifiers',
    scope: ['storage.modifier'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Special Operators',
    scope: ['keyword.operator.new', 'keyword.operator.expression'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'User Functions',
    scope: ['entity.name.function', 'meta.function-call'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Library/Support Functions',
    scope: ['support.function', 'support.function.console'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Methods',
    scope: ['entity.name.function.member', 'entity.name.method'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'User Classes',
    scope: ['entity.name.type.class', 'entity.name.class'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Structs',
    scope: ['entity.name.type.struct'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Support/Library Classes',
    scope: ['support.class', 'support.type'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Interfaces',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Enums',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Types / Primitives',
    scope: ['entity.name.type', 'support.type.primitive'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Type Parameters',
    scope: ['entity.name.type.parameter'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Variables',
    scope: ['variable', 'meta.definition.variable.name'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Properties / Fields',
    scope: ['variable.other.property', 'variable.other.object.property', 'variable.other.member'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Parameters',
    scope: ['variable.parameter'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Constants',
    scope: ['variable.other.constant', 'constant.language'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Strings',
    scope: ['string', 'string.quoted.double', 'string.quoted.single'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Template Strings',
    scope: ['string.template'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Numbers',
    scope: ['constant.numeric'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Booleans',
    scope: ['constant.language.boolean'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Regex',
    scope: ['string.regexp'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Escape Sequences',
    scope: ['constant.character.escape'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Decorators / Attributes',
    scope: ['meta.decorator', 'entity.other.attribute-name'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'HTML/JSX Tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'HTML/JSX Attributes',
    scope: ['entity.other.attribute-name.html', 'entity.other.attribute-name.jsx'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Markdown Headings',
    scope: ['markup.heading', 'entity.name.section.markdown'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Markdown Links',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Markdown Code',
    scope: ['markup.inline.raw', 'markup.raw.block', 'markup.raw'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Markdown Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Entity Name Namespace',
    scope: ['entity.name.type.namespace', 'entity.name.namespace', 'entity.name.type.module'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Dockerfile Keyword',
    scope: ['keyword.other.special-method.dockerfile'],
    settings: {
      foreground: character.hair.base,
    },
  },
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
      foreground: character.hair.base,
    },
  },
  {
    name: 'C# Attribute',
    scope: ['meta.attribute.cs', 'entity.name.type.attribute.cs'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'C# Namespace',
    scope: ['entity.name.type.namespace.cs'],
    settings: {
      foreground: character.hair.base,
    },
  },
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
      foreground: character.hair.base,
    },
  },
  {
    name: 'YAML Alias',
    scope: ['variable.other.alias.yaml', 'punctuation.definition.alias.yaml'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'YAML Timestamp',
    scope: ['constant.other.timestamp.yaml'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'YAML Directive',
    scope: ['keyword.other.directive.yaml', 'punctuation.definition.directive.yaml'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'SQL DML Keywords',
    scope: ['keyword.other.DML.sql', 'keyword.other.dml.sql'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'SQL DDL Keywords',
    scope: ['keyword.other.DDL.sql', 'keyword.other.ddl.sql', 'keyword.other.create.sql'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'SQL Clauses',
    scope: ['keyword.other.sql', 'keyword.other.order.sql', 'keyword.other.alias.sql'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'SQL Functions',
    scope: ['support.function.sql', 'support.function.aggregate.sql'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'SQL Tables',
    scope: ['entity.name.function.sql', 'constant.other.table-name.sql'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'SQL Columns',
    scope: ['constant.other.database-name.sql', 'constant.other.placeholder.sql'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'SQL Operators',
    scope: ['keyword.operator.comparison.sql', 'keyword.operator.logical.sql'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'SQL Types',
    scope: ['storage.type.sql', 'support.type.sql'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'PHP Tags',
    scope: ['punctuation.section.embedded.php', 'keyword.other.phpdoc.php'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'PHP Variables',
    scope: ['variable.other.php', 'punctuation.definition.variable.php'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'PHP Superglobals',
    scope: ['variable.language.php'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'PHP Functions',
    scope: ['support.function.php', 'support.function.construct.php'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'PHP Classes',
    scope: ['support.class.php', 'entity.other.inherited-class.php'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'PHP Constants',
    scope: ['support.constant.php', 'constant.language.php'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Ruby Symbols',
    scope: ['constant.other.symbol.ruby', 'punctuation.definition.symbol.ruby'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Ruby Instance Variables',
    scope: ['variable.other.readwrite.instance.ruby'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Ruby Class Variables',
    scope: ['variable.other.readwrite.class.ruby'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Ruby Global Variables',
    scope: ['variable.other.readwrite.global.ruby'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Ruby Blocks',
    scope: ['keyword.control.ruby', 'keyword.control.def.ruby'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Ruby Special Methods',
    scope: ['keyword.other.special-method.ruby'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Ruby Modules',
    scope: ['entity.name.type.module.ruby', 'support.class.ruby'],
    settings: {
      foreground: character.hair.base,
    },
  },
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
      foreground: character.hair.base,
    },
  },
  {
    name: 'Makefile Variable Definition',
    scope: ['variable.other.makefile'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Makefile Variable Reference',
    scope: ['variable.language.makefile', 'string.interpolated.makefile'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Makefile Automatic Variable',
    scope: ['variable.language.automatic.makefile'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Makefile Function',
    scope: ['support.function.makefile', 'meta.function-call.makefile'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Makefile Keyword',
    scope: ['keyword.control.makefile', 'keyword.other.makefile'],
    settings: {
      foreground: character.hair.base,
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
      foreground: character.hair.base,
    },
  },
  {
    name: 'Makefile Phony',
    scope: ['meta.special-target.makefile', 'constant.language.makefile'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Makefile Shell Command',
    scope: ['string.source.makefile', 'meta.recipe.makefile'],
    settings: {
      foreground: character.hair.base,
    },
  },
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
      foreground: character.hair.base,
    },
  },
  {
    name: 'Shell Interpolated Strings',
    scope: ['string.interpolated.shell', 'string.interpolated.dollar.shell'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Meta Function Parameters',
    scope: [
      'meta.function.parameters',
      'meta.parameters',
      'meta.function-call.arguments',
    ],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Meta Class Body',
    scope: ['meta.class.body', 'meta.class.inheritance'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Meta Interface/Namespace Body',
    scope: ['meta.interface.body', 'meta.namespace.body'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Meta Object/Array Literals',
    scope: ['meta.object-literal', 'meta.array.literal', 'meta.objectliteral'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Meta Imports/Exports',
    scope: ['meta.import', 'meta.export', 'meta.imports'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Meta Function Return Type',
    scope: ['meta.return.type', 'meta.function.return-type'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Entity Name Label',
    scope: ['entity.name.label', 'entity.name.statement.label'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Entity Name Constant',
    scope: ['entity.name.constant', 'entity.name.variable.constant'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Entity Name Enum',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Entity Name Interface',
    scope: ['entity.name.type.interface', 'entity.name.interface'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Entity Name Alias/Type Alias',
    scope: ['entity.name.type.alias', 'entity.name.type.type-alias'],
    settings: {
      foreground: character.hair.base,
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
      foreground: character.hair.base,
    },
  },
  {
    name: 'Keyword Namespace/Import',
    scope: ['keyword.namespace', 'keyword.import', 'keyword.export'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Keyword Type',
    scope: ['keyword.type', 'keyword.other.type'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Support Variable',
    scope: ['support.variable', 'support.variable.property'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Support Module',
    scope: ['support.module', 'support.module.node'],
    settings: {
      foreground: character.hair.base,
    },
  },
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
      foreground: character.hair.base,
    },
  },
  {
    name: 'Markup Link URL',
    scope: ['markup.underline.link.markdown', 'meta.link.inline.markdown'],
    settings: {
      foreground: character.hair.base,
      fontStyle: 'underline',
    },
  },
  {
    name: 'Markup List Numbered',
    scope: ['markup.list.numbered', 'punctuation.definition.list.begin.markdown'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Deprecated Entities',
    scope: [
      'entity.deprecated',
      'entity.name.deprecated',
      'entity.name.function.deprecated',
      'entity.name.type.deprecated',
    ],
    settings: {
      foreground: character.hair.base,
      fontStyle: 'strikethrough',
    },
  },
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
      foreground: character.hair.base,
    },
  },
  {
    name: 'Python Decorators',
    scope: ['entity.name.function.decorator.python', 'meta.function.decorator.python'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Python F-String Braces',
    scope: ['constant.character.format.placeholder.other.python'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Go Package',
    scope: ['entity.name.package.go'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Go Imports',
    scope: ['entity.name.import.go'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Go Channels',
    scope: ['keyword.operator.channel.go'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Go Defer/Go Keywords',
    scope: ['keyword.control.go'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Rust Lifetime',
    scope: ['storage.modifier.lifetime.rust', 'entity.name.lifetime.rust'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Rust Unsafe',
    scope: ['keyword.other.unsafe.rust'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Rust Traits',
    scope: ['entity.name.type.trait.rust'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Rust Macros',
    scope: ['entity.name.function.macro.rust', 'meta.macro.rust'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'JSON Key Level 0',
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'JSON Punctuation',
    scope: ['punctuation.support.type.property-name.json', 'punctuation.definition.string.json'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'YAML Key',
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'YAML Anchor',
    scope: ['entity.name.type.anchor.yaml', 'punctuation.definition.anchor.yaml'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'YAML Alias',
    scope: ['variable.other.alias.yaml'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Comment Block/Line',
    scope: ['comment.block', 'comment.line'],
    settings: {
      fontStyle: 'italic',
      foreground: character.hair.base,
    },
  },
  {
    name: 'Constant Base',
    scope: ['constant', 'constant.character'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Constant Numeric Variants',
    scope: [
      'constant.numeric.integer',
      'constant.numeric.float',
      'constant.numeric.hex',
      'constant.numeric.octal',
    ],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Constant Other',
    scope: ['constant.other', 'constant.regexp', 'constant.rgb-value'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Emphasis',
    scope: ['emphasis', 'markup.italic'],
    settings: {
      fontStyle: 'italic',
    },
  },
  {
    name: 'Strong',
    scope: ['strong', 'markup.bold'],
    settings: {
      fontStyle: 'bold',
    },
  },
  {
    name: 'Entity Base',
    scope: ['entity', 'entity.name', 'entity.name.section', 'entity.name.selector', 'entity.other', 'entity.other.inherited-class'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.deprecated', 'invalid.illegal'],
    settings: {
      foreground: character.hair.base,
      fontStyle: 'strikethrough',
    },
  },
  {
    name: 'Keyword Base',
    scope: ['keyword', 'keyword.other'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Keyword Operator Variants',
    scope: [
      'keyword.operator',
      'keyword.operator.arithmetic',
      'keyword.operator.assignment',
      'keyword.operator.logical',
    ],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Markup Base',
    scope: ['markup', 'markup.other'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Markup Changed',
    scope: ['markup.changed'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Markup Deleted',
    scope: ['markup.deleted'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Markup Inserted',
    scope: ['markup.inserted'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Markup List',
    scope: ['markup.list', 'markup.list.unnumbered'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Meta Base',
    scope: [
      'meta',
      'meta.block',
      'meta.cast',
      'meta.class',
      'meta.function',
      'meta.preprocessor',
      'meta.return-type',
      'meta.selector',
      'meta.tag',
      'meta.type',
      'meta.type.annotation',
    ],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Punctuation String Delimiters',
    scope: [
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end',
      'punctuation.separator.continuation',
    ],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Storage Base',
    scope: ['storage'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'String Variants',
    scope: [
      'string.other',
      'string.quoted',
      'string.quoted.other',
      'string.quoted.triple',
      'string.unquoted',
    ],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Support Base',
    scope: ['support', 'support.constant', 'support.other', 'support.type.property-name'],
    settings: {
      foreground: character.hair.base,
    },
  },
  {
    name: 'Variable Variants',
    scope: [
      'variable.language',
      'variable.name',
      'variable.other',
      'variable.other.readwrite',
    ],
    settings: {
      foreground: character.hair.base,
    },
  },
];
export type TokenColors = typeof tokenColors;
