import { character } from '../palette';

const teals = { classic: '#39C5BB', bright: '#5DE4DB', neon: '#00FFF0', stage: '#4DD0C8' };
const pinks = { sekai: '#E05096', blush: '#FFB8C8', soft: '#FF8EB8', hot: '#FF4081', pale: '#FFD4E5' };
const greys = { slate: '#37474F', steel: '#455A64', silver: '#90A4AE', platinum: '#CFD8DC' };
const foregrounds = { primary: '#E8F0F2', secondary: '#B0BEC5', comment: '#78909C', bright: '#FFFFFF' };
const accents = { amber: '#FFB74D', gold: '#FFD54F', orange: '#FF9800', coral: '#FF7043' };
const hologram = { cyan: '#00E5FF', purple: '#B388FF' };
const append = { light: '#B0E0DB', vivid: '#00BCD4' };
const boosted = { purple: '#B388FF', coral: '#FF7043', coralGlow: '#FF6B6B' };
const versions = { v2: '#39C5BB', v3: '#5DE4DB', v4x: '#00E5FF', nt: '#FFB74D', v6ai: '#B388FF' };
const iconicPVs = { worldIsMine: { crown: '#FFD700' }, melt: { blush: '#FFB8C8', warmPink: '#FF8EB8' }, senbonzakura: { sakuraPink: '#FFB7C5' } };
const racingMiku = { team: { gsmTeal: '#39C5BB' }, y2014: { limeAccent: '#AEEA00' }, y2016: { accentPink: '#FF4081' }, y2017: { highlightCyan: '#00E5FF', gradientPurple: '#B388FF' }, y2018: { holoBlue: '#40C4FF' } };
const viralHits = { mesmerizer: { mikuTeal: '#39C5BB', hypnosis: '#B388FF' }, vampire: { gothicLavender: '#CE93D8' }, king: { crownGold: '#FFD54F' } };
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
      foreground: greys.silver,
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
      foreground: append.light,
      fontStyle: 'italic',
    },
  },
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
      foreground: accents.orange,
    },
  },
  {
    name: 'Storage Modifiers',
    scope: ['storage.modifier'],
    settings: {
      foreground: boosted.purple,
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'],
    settings: {
      foreground: accents.orange,
    },
  },
  {
    name: 'Special Operators',
    scope: ['keyword.operator.new', 'keyword.operator.expression'],
    settings: {
      foreground: accents.orange,
    },
  },
  {
    name: 'User Functions',
    scope: ['entity.name.function', 'meta.function-call'],
    settings: {
      foreground: hologram.cyan,
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
  {
    name: 'User Classes',
    scope: ['entity.name.type.class', 'entity.name.class'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'Structs',
    scope: ['entity.name.type.struct'],
    settings: {
      foreground: pinks.pale,
    },
  },
  {
    name: 'Support/Library Classes',
    scope: ['support.class', 'support.type'],
    settings: {
      foreground: boosted.purple,
    },
  },
  {
    name: 'Interfaces',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Enums',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: boosted.purple,
    },
  },
  {
    name: 'Types / Primitives',
    scope: ['entity.name.type', 'support.type.primitive'],
    settings: {
      foreground: pinks.pale,
    },
  },
  {
    name: 'Type Parameters',
    scope: ['entity.name.type.parameter'],
    settings: {
      foreground: boosted.purple,
    },
  },
  {
    name: 'Variables',
    scope: ['variable', 'meta.definition.variable.name'],
    settings: {
      foreground: foregrounds.primary,
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
      foreground: append.light,
    },
  },
  {
    name: 'Constants',
    scope: ['variable.other.constant', 'constant.language'],
    settings: {
      foreground: accents.gold,
    },
  },
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
      foreground: iconicPVs.melt.warmPink,
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
      foreground: pinks.blush,
    },
  },
  {
    name: 'Regex',
    scope: ['string.regexp'],
    settings: {
      foreground: racingMiku.y2014.limeAccent,
    },
  },
  {
    name: 'Escape Sequences',
    scope: ['constant.character.escape'],
    settings: {
      foreground: boosted.purple,
    },
  },
  {
    name: 'Decorators / Attributes',
    scope: ['meta.decorator', 'entity.other.attribute-name'],
    settings: {
      foreground: boosted.purple,
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
      foreground: character.hair.tip,
    },
  },
  {
    name: 'Markdown Headings',
    scope: ['markup.heading', 'entity.name.section.markdown'],
    settings: {
      foreground: pinks.blush,
    },
  },
  {
    name: 'Markdown Links',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Markdown Code',
    scope: ['markup.inline.raw', 'markup.raw.block'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'Markdown Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: pinks.blush,
    },
  },
  {
    name: 'Entity Name Namespace',
    scope: ['entity.name.type.namespace', 'entity.name.namespace', 'entity.name.type.module'],
    settings: {
      foreground: boosted.purple,
    },
  },
  {
    name: 'Dockerfile Keyword',
    scope: ['keyword.other.special-method.dockerfile'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'C# LINQ Keywords',
    scope: ['keyword.query.linq.cs'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'C# Async Pattern',
    scope: ['keyword.other.await.cs', 'keyword.other.async.cs'],
    settings: {
      foreground: teals.neon,
    },
  },
  {
    name: 'C# Attribute',
    scope: ['meta.attribute.cs', 'entity.name.type.attribute.cs'],
    settings: {
      foreground: iconicPVs.senbonzakura.sakuraPink,
    },
  },
  {
    name: 'C# Namespace',
    scope: ['entity.name.type.namespace.cs'],
    settings: {
      foreground: character.hair.tip,
    },
  },
  {
    name: 'YAML Key',
    scope: ['entity.name.tag.yaml', 'support.type.property-name.yaml'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'YAML Anchor',
    scope: ['entity.name.type.anchor.yaml', 'punctuation.definition.anchor.yaml'],
    settings: {
      foreground: hologram.purple,
    },
  },
  {
    name: 'YAML Alias',
    scope: ['variable.other.alias.yaml', 'punctuation.definition.alias.yaml'],
    settings: {
      foreground: hologram.purple,
    },
  },
  {
    name: 'YAML Timestamp',
    scope: ['constant.other.timestamp.yaml'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'YAML Directive',
    scope: ['keyword.other.directive.yaml', 'punctuation.definition.directive.yaml'],
    settings: {
      foreground: hologram.purple,
    },
  },
  {
    name: 'SQL DML Keywords',
    scope: ['keyword.other.DML.sql', 'keyword.other.dml.sql'],
    settings: {
      foreground: pinks.sekai,
    },
  },
  {
    name: 'SQL DDL Keywords',
    scope: ['keyword.other.DDL.sql', 'keyword.other.ddl.sql', 'keyword.other.create.sql'],
    settings: {
      foreground: pinks.blush,
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
      foreground: hologram.cyan,
    },
  },
  {
    name: 'SQL Tables',
    scope: ['entity.name.function.sql', 'constant.other.table-name.sql'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'SQL Columns',
    scope: ['constant.other.database-name.sql', 'constant.other.placeholder.sql'],
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'SQL Operators',
    scope: ['keyword.operator.comparison.sql', 'keyword.operator.logical.sql'],
    settings: {
      foreground: accents.orange,
    },
  },
  {
    name: 'SQL Types',
    scope: ['storage.type.sql', 'support.type.sql'],
    settings: {
      foreground: pinks.pale,
    },
  },
  {
    name: 'PHP Tags',
    scope: ['punctuation.section.embedded.php', 'keyword.other.phpdoc.php'],
    settings: {
      foreground: pinks.sekai,
    },
  },
  {
    name: 'PHP Variables',
    scope: ['variable.other.php', 'punctuation.definition.variable.php'],
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'PHP Superglobals',
    scope: ['variable.language.php'],
    settings: {
      foreground: pinks.blush,
    },
  },
  {
    name: 'PHP Functions',
    scope: ['support.function.php', 'support.function.construct.php'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'PHP Classes',
    scope: ['support.class.php', 'entity.other.inherited-class.php'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'PHP Constants',
    scope: ['support.constant.php', 'constant.language.php'],
    settings: {
      foreground: accents.gold,
    },
  },
  {
    name: 'Ruby Symbols',
    scope: ['constant.other.symbol.ruby', 'punctuation.definition.symbol.ruby'],
    settings: {
      foreground: pinks.sekai,
    },
  },
  {
    name: 'Ruby Instance Variables',
    scope: ['variable.other.readwrite.instance.ruby'],
    settings: {
      foreground: pinks.blush,
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
      foreground: boosted.coral,
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
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Ruby Modules',
    scope: ['entity.name.type.module.ruby', 'support.class.ruby'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'Makefile Target',
    scope: ['entity.name.function.target.makefile'],
    settings: {
      foreground: versions.nt,
    },
  },
  {
    name: 'Makefile Prerequisite',
    scope: ['entity.name.function.prerequisite.makefile'],
    settings: {
      foreground: character.eyes.highlight,
    },
  },
  {
    name: 'Makefile Variable Definition',
    scope: ['variable.other.makefile'],
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'Makefile Variable Reference',
    scope: ['variable.language.makefile', 'string.interpolated.makefile'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Makefile Automatic Variable',
    scope: ['variable.language.automatic.makefile'],
    settings: {
      foreground: accents.gold,
    },
  },
  {
    name: 'Makefile Function',
    scope: ['support.function.makefile', 'meta.function-call.makefile'],
    settings: {
      foreground: pinks.blush,
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
      foreground: teals.classic,
    },
  },
  {
    name: 'Makefile Directive',
    scope: ['keyword.control.directive.makefile', 'keyword.control.include.makefile', 'keyword.control.define.makefile'],
    settings: {
      foreground: hologram.purple,
    },
  },
  {
    name: 'Makefile Phony',
    scope: ['meta.special-target.makefile', 'constant.language.makefile'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'Makefile Shell Command',
    scope: ['string.source.makefile', 'meta.recipe.makefile'],
    settings: {
      foreground: foregrounds.primary,
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
  {
    name: 'Meta Function Parameters',
    scope: [
      'meta.function.parameters',
      'meta.parameters',
      'meta.function-call.arguments',
    ],
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'Meta Class Body',
    scope: ['meta.class.body', 'meta.class.inheritance'],
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'Meta Interface/Namespace Body',
    scope: ['meta.interface.body', 'meta.namespace.body'],
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'Meta Object/Array Literals',
    scope: ['meta.object-literal', 'meta.array.literal', 'meta.objectliteral'],
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'Meta Imports/Exports',
    scope: ['meta.import', 'meta.export', 'meta.imports'],
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'Meta Function Return Type',
    scope: ['meta.return.type', 'meta.function.return-type'],
    settings: {
      foreground: append.light,
    },
  },
  {
    name: 'Entity Name Label',
    scope: ['entity.name.label', 'entity.name.statement.label'],
    settings: {
      foreground: pinks.blush,
    },
  },
  {
    name: 'Entity Name Constant',
    scope: ['entity.name.constant', 'entity.name.variable.constant'],
    settings: {
      foreground: accents.gold,
    },
  },
  {
    name: 'Entity Name Enum',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: boosted.purple,
    },
  },
  {
    name: 'Entity Name Interface',
    scope: ['entity.name.type.interface', 'entity.name.interface'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Entity Name Alias/Type Alias',
    scope: ['entity.name.type.alias', 'entity.name.type.type-alias'],
    settings: {
      foreground: append.light,
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
      foreground: character.hair.tip,
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
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Markup Link URL',
    scope: ['markup.underline.link.markdown', 'meta.link.inline.markdown'],
    settings: {
      foreground: hologram.cyan,
      fontStyle: 'underline',
    },
  },
  {
    name: 'Markup List Numbered',
    scope: ['markup.list.numbered', 'punctuation.definition.list.begin.markdown'],
    settings: {
      foreground: hologram.cyan,
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
      foreground: greys.platinum,
      fontStyle: 'strikethrough',
    },
  },
  {
    name: 'Python Self',
    scope: ['variable.parameter.function.language.special.self.python'],
    settings: {
      foreground: viralHits.mesmerizer.mikuTeal,
    },
  },
  {
    name: 'Python Magic Methods',
    scope: ['support.function.magic.python'],
    settings: {
      foreground: viralHits.mesmerizer.hypnosis,
    },
  },
  {
    name: 'Python Decorators',
    scope: ['entity.name.function.decorator.python', 'meta.function.decorator.python'],
    settings: {
      foreground: viralHits.vampire.gothicLavender,
    },
  },
  {
    name: 'Python F-String Braces',
    scope: ['constant.character.format.placeholder.other.python'],
    settings: {
      foreground: viralHits.king.crownGold,
    },
  },
  {
    name: 'Go Package',
    scope: ['entity.name.package.go'],
    settings: {
      foreground: racingMiku.team.gsmTeal,
    },
  },
  {
    name: 'Go Imports',
    scope: ['entity.name.import.go'],
    settings: {
      foreground: racingMiku.y2018.holoBlue,
    },
  },
  {
    name: 'Go Channels',
    scope: ['keyword.operator.channel.go'],
    settings: {
      foreground: racingMiku.y2017.gradientPurple,
    },
  },
  {
    name: 'Go Defer/Go Keywords',
    scope: ['keyword.control.go'],
    settings: {
      foreground: racingMiku.y2016.accentPink,
    },
  },
  {
    name: 'Rust Lifetime',
    scope: ['storage.modifier.lifetime.rust', 'entity.name.lifetime.rust'],
    settings: {
      foreground: accents.gold,
    },
  },
  {
    name: 'Rust Unsafe',
    scope: ['keyword.other.unsafe.rust'],
    settings: {
      foreground: pinks.hot,
    },
  },
  {
    name: 'Rust Traits',
    scope: ['entity.name.type.trait.rust'],
    settings: {
      foreground: character.negi.stalk,
    },
  },
  {
    name: 'Rust Macros',
    scope: ['entity.name.function.macro.rust', 'meta.macro.rust'],
    settings: {
      foreground: hologram.purple,
    },
  },
  {
    name: 'JSON Key Level 0',
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: character.hair.highlight,
    },
  },
  {
    name: 'JSON Punctuation',
    scope: ['punctuation.support.type.property-name.json', 'punctuation.definition.string.json'],
    settings: {
      foreground: character.skin.blush,
    },
  },
  {
    name: 'YAML Key',
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: pinks.blush,
    },
  },
  {
    name: 'YAML Anchor',
    scope: ['entity.name.type.anchor.yaml', 'punctuation.definition.anchor.yaml'],
    settings: {
      foreground: pinks.pale,
    },
  },
  {
    name: 'YAML Alias',
    scope: ['variable.other.alias.yaml'],
    settings: {
      foreground: pinks.soft,
    },
  },
  {
    name: 'Comment Block/Line',
    scope: ['comment.block', 'comment.line'],
    settings: {
      fontStyle: 'italic',
      foreground: greys.silver,
    },
  },
  {
    name: 'Constant Base',
    scope: ['constant', 'constant.character'],
    settings: {
      foreground: accents.gold,
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
      foreground: character.negi.bright,
    },
  },
  {
    name: 'Constant Other',
    scope: ['constant.other', 'constant.regexp', 'constant.rgb-value'],
    settings: {
      foreground: racingMiku.y2014.limeAccent,
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
    name: 'Entity Base',
    scope: ['entity', 'entity.other', 'entity.other.inherited-class'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.deprecated', 'invalid.illegal'],
    settings: {
      foreground: boosted.coralGlow,
      fontStyle: 'strikethrough',
    },
  },
  {
    name: 'Keyword Base',
    scope: ['keyword', 'keyword.other'],
    settings: {
      foreground: character.hair.highlight,
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
      foreground: accents.orange,
    },
  },
  {
    name: 'Markup Base',
    scope: ['markup', 'markup.other'],
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'Markup Changed',
    scope: ['markup.changed'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'Markup Deleted',
    scope: ['markup.deleted'],
    settings: {
      foreground: boosted.coralGlow,
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
    name: 'Markup List',
    scope: ['markup.list', 'markup.list.unnumbered'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Meta Base',
    scope: [
      'meta',
      'meta.block',
      'meta.cast',
      'meta.class',
      'meta.preprocessor',
      'meta.return-type',
      'meta.selector',
      'meta.tag',
      'meta.type',
      'meta.type.annotation',
    ],
    settings: {
      foreground: foregrounds.primary,
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
      foreground: character.negi.stalk,
    },
  },
  {
    name: 'Storage Base',
    scope: ['storage'],
    settings: {
      foreground: accents.orange,
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
      foreground: character.negi.stalk,
    },
  },
  {
    name: 'Support Base',
    scope: ['support', 'support.constant', 'support.other'],
    settings: {
      foreground: character.hair.highlight,
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
      foreground: foregrounds.primary,
    },
  },
];
export type TokenColors = typeof tokenColors;
