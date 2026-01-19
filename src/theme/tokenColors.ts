/**
 * Hatsune Miku Theme - Token Colors (Syntax Highlighting)
 *
 * Pure Miku Immersion: Using existing palette colors for Lc 60+ readability
 *
 * Character Design:
 * - Hair Shine (#5DE4DB, Lc ~70) → Keywords, HTML Tags
 * - Hair Tip (#7FEDE5, Lc ~75) → Namespaces
 * - Append Light (#A8EBE6, Lc ~80) → Doc Comments, Types
 * - Skin Blush (#FFB8C8, Lc ~70) → Properties
 * - Negi Stalk (#9CCC65, Lc ~64) → Strings
 * - Negi Bright (#69F0AE, Lc ~75) → Numbers
 *
 * Miku Hologram & Stage:
 * - Hologram Cyan (#4DD0E1, Lc ~70) → Classes
 * - NT Modern (#3ED1C8, Lc ~65) → Functions
 *
 * Miku Events & Concerts:
 * - Magical Mirai Gold (#FFD700, Lc ~80) → Enums/Constants
 * - Miku Expo Cyan (#00E5CC, Lc ~70) → Operators
 * - Racing Lime (#76FF03, Lc ~85) → Regex
 *
 * Iconic PVs:
 * - Senbonzakura (#FFB7C5, Lc ~70) → Decorators
 * - Melt (#FFB6C1, Lc ~70) → Template Strings
 */

import {
  teals,
  pinks,
  cyans,
  greys,
  foregrounds,
  accents,
  hologram,
  character,
  append,
  boosted,
  versions,
  snowMiku,
  magicalMirai,
  mikuExpo,
  iconicPVs,
  racingMiku,
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
  // ===========================================================================
  // COMMENTS - Platinum (Quiet Guidance)
  // ===========================================================================
  {
    name: 'Comments',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      fontStyle: 'italic',
      foreground: greys.platinum, // #B0BEC5 - High Contrast for Comments (Lc 60+)
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
      foreground: append.light, // #B2EBE7 - Hair Highlight (Lc ~80)
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // KEYWORDS - Hair Shine = Twin-tails Catching Stage Lights
  // #39C5BB reserved for UI elements only
  // ===========================================================================
  {
    name: 'Control Keywords',
    scope: ['keyword.control', 'keyword.control.flow', 'keyword.control.import'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB - Hair Shine (Lc ~70)
      fontStyle: 'bold',
    },
  },
  {
    name: 'Storage Types',
    scope: ['storage.type', 'storage.modifier'],
    settings: {
      foreground: cyans.hologram, // #4DD0E1 - Hologram Cyan for Definitions
      fontStyle: 'bold',
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'],
    settings: {
      foreground: mikuExpo.y2025.asiaCyan, // #00E5CC - Racing velocity
    },
  },
  {
    name: 'Special Operators',
    scope: ['keyword.operator.new', 'keyword.operator.expression'],
    settings: {
      foreground: mikuExpo.y2025.asiaCyan, // #00E5CC - Racing holographic
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // FUNCTIONS - NT Modern Voice (2020)
  // ===========================================================================
  {
    name: 'User Functions',
    scope: ['entity.name.function', 'meta.function-call'],
    settings: {
      foreground: versions.nt, // #3ED1C8 - NT Modern voice
    },
  },
  {
    name: 'Library/Support Functions',
    scope: ['support.function', 'support.function.console'],
    settings: {
      foreground: pinks.blush, // #FFB8C8 - Skin Blush (Lc ~70)
    },
  },
  {
    name: 'Methods',
    scope: ['entity.name.function.member'],
    settings: {
      foreground: character.eyes.bright, // #5DE4DB - Hair shine (active expression)
    },
  },

  // ===========================================================================
  // CLASSES & TYPES - Hair Tie Bright (Bound Structure)
  // ===========================================================================
  {
    name: 'User Classes',
    scope: ['entity.name.type.class', 'entity.name.class'],
    settings: {
      foreground: hologram.cyan, // #FF99C0 - Hair Tie Bright (Lc ~60+)
      fontStyle: 'bold',
    },
  },

  {
    name: 'Structs',
    scope: ['entity.name.type.struct'],
    settings: {
      foreground: pinks.pale, // #FCE4EC - Soft pale pink for Structs
      fontStyle: 'bold',
    },
  },
  {
    name: 'Support/Library Classes',
    scope: ['support.class', 'support.type'],
    settings: {
      foreground: boosted.purple, // Boosted purple for Lc 65+
    },
  },
  {
    name: 'Interfaces',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: snowMiku.y2011.winterBlue, // #87CEEB - Snow Miku sky
      fontStyle: 'bold',
    },
  },

  {
    name: 'Enums',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: magicalMirai.y2017.celebrationGold, // #FFD700 - Magical Mirai celebration
    },
  },
  {
    name: 'Types / Primitives',
    scope: ['entity.name.type', 'support.type.primitive'],
    settings: {
      foreground: append.light, // #A8EBE6 - Append Light for types (Lc 80+)
    },
  },
  {
    name: 'Type Parameters',
    scope: ['entity.name.type.parameter'],
    settings: {
      foreground: accents.gold, // #FFCA28 - Miku concert gold for Generics
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // VARIABLES & PROPERTIES - Skin = Neutral/Natural
  // ===========================================================================
  {
    name: 'Variables',
    scope: ['variable', 'meta.definition.variable.name'],
    settings: {
      foreground: foregrounds.primary, // #C8DCD9 - Neutral Base
    },
  },
  {
    name: 'Properties / Fields',
    scope: ['variable.other.property', 'variable.other.object.property', 'variable.other.member'],
    settings: {
      foreground: character.skin.blush, // #FFB8C8 - Warm attributes
    },
  },
  {
    name: 'Parameters',
    scope: ['variable.parameter'],
    settings: {
      foreground: pinks.blush, // #FFB8D4 - Hair ties bound
      fontStyle: 'italic',
    },
  },
  {
    name: 'Constants',
    scope: ['variable.other.constant', 'constant.language'],
    settings: {
      foreground: magicalMirai.y2017.celebrationGold, // #FFD700 - World is Mine royalty
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // DATA & LITERALS - Negi = Miku's signature prop
  // ===========================================================================
  {
    name: 'Strings',
    scope: ['string', 'string.quoted.double', 'string.quoted.single'],
    settings: {
      foreground: character.negi.stalk, // #9CCC65 - Negi Green truth
    },
  },
  {
    name: 'Template Strings',
    scope: ['string.template'],
    settings: {
      foreground: iconicPVs.melt.warmPink, // #FFB6C1 - Melt warm interpolation
    },
  },
  {
    name: 'Numbers',
    scope: ['constant.numeric'],
    settings: {
      foreground: character.negi.bright, // #69F0AE - Bright data clarity
    },
  },
  {
    name: 'Booleans',
    scope: ['constant.language.boolean'],
    settings: {
      foreground: pinks.blush, // Boosted light pink for Lc 60+
      fontStyle: 'bold',
    },
  },
  {
    name: 'Regex',
    scope: ['string.regexp'],
    settings: {
      foreground: racingMiku.y2014.limeAccent, // #76FF03 - Ghost Rule neon
    },
  },
  {
    name: 'Escape Sequences',
    scope: ['constant.character.escape'],
    settings: {
      foreground: boosted.purple, // Boosted purple for Lc 65+
    },
  },

  // ===========================================================================
  // META & DECORATORS - Senbonzakura Cherry
  // ===========================================================================
  {
    name: 'Decorators / Attributes',
    scope: ['meta.decorator', 'entity.other.attribute-name'],
    settings: {
      foreground: iconicPVs.senbonzakura.sakuraPink, // #FFB7C5 - Senbonzakura cherry
      fontStyle: 'italic',
    },
  },
  {
    name: 'HTML/JSX Tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB - Hair Shine (Lc ~70)
      fontStyle: 'bold',
    },
  },
  {
    name: 'HTML/JSX Attributes',
    scope: ['entity.other.attribute-name.html', 'entity.other.attribute-name.jsx'],
    settings: {
      foreground: character.hair.tip, // #7FEDE5 - Hair Tip (Lc ~75)
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // MARKDOWN - Digital Documentation
  // ===========================================================================
  {
    name: 'Markdown Headings',
    scope: ['markup.heading', 'entity.name.section.markdown'],
    settings: {
      foreground: iconicPVs.senbonzakura.sakuraPink, // #FFB7C5 - Senbonzakura cherry title
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Links',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: mikuExpo.y2025.asiaCyan, // #00E5CC - Racing connection
    },
  },
  {
    name: 'Markdown Code',
    scope: ['markup.inline.raw', 'markup.raw.block'],
    settings: {
      foreground: character.negi.stalk, // #9CCC65 - Negi code block
    },
  },
  {
    name: 'Markdown Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: greys.platinum,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // NAMESPACES - Hair Tip (Structure Flow)
  // ===========================================================================
  {
    name: 'Entity Name Namespace',
    scope: ['entity.name.type.namespace', 'entity.name.namespace', 'entity.name.type.module'],
    settings: {
      foreground: character.hair.tip, // #7FEDE5 - Hair Tip (Lc ~75)
    },
  },

  // ===========================================================================
  // DOCKERFILE - Industrial
  // ===========================================================================
  {
    name: 'Dockerfile Keyword',
    scope: ['keyword.other.special-method.dockerfile'],
    settings: {
      foreground: hologram.cyan,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // C# - Sharp
  // ===========================================================================
  {
    name: 'C# LINQ Keywords',
    scope: ['keyword.query.linq.cs'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'C# Async Pattern',
    scope: ['keyword.other.await.cs', 'keyword.other.async.cs'],
    settings: {
      foreground: teals.neon,
      fontStyle: 'bold',
    },
  },
  {
    name: 'C# Attribute',
    scope: ['meta.attribute.cs', 'entity.name.type.attribute.cs'],
    settings: {
      foreground: iconicPVs.senbonzakura.sakuraPink, // #FFB7C5 - Senbonzakura
      fontStyle: 'italic',
    },
  },
  {
    name: 'C# Namespace',
    scope: ['entity.name.type.namespace.cs'],
    settings: {
      foreground: character.hair.tip, // #7FEDE5 - Hair Tip (Lc ~75)
    },
  },

  // ===========================================================================
  // YAML EXTRAS
  // ===========================================================================
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

  // ===========================================================================
  // TOML - Configuration Files (Cargo.toml, pyproject.toml)
  // ===========================================================================
  {
    name: 'TOML Table Header',
    scope: ['entity.name.section.toml', 'support.type.property-name.table.toml'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB - Hair Shine (Lc ~70)
      fontStyle: 'bold',
    },
  },
  {
    name: 'TOML Array of Tables',
    scope: ['entity.name.section.array.toml', 'support.type.property-name.array.toml'],
    settings: {
      foreground: hologram.cyan, // #FF99C0 - Hair Tie Bright
      fontStyle: 'bold',
    },
  },
  {
    name: 'TOML Key',
    scope: ['variable.key.toml', 'support.type.property-name.toml'],
    settings: {
      foreground: teals.classic, // #39C5BB
    },
  },
  {
    name: 'TOML String',
    scope: ['string.quoted.single.basic.toml', 'string.quoted.double.basic.toml', 'string.quoted.triple.basic.toml'],
    settings: {
      foreground: character.negi.stalk, // #9CCC65 - Negi Green
    },
  },
  {
    name: 'TOML Literal String',
    scope: ['string.quoted.single.literal.toml', 'string.quoted.triple.literal.toml'],
    settings: {
      foreground: racingMiku.y2014.limeAccent, // #76FF03 - Ghost Rule neon
    },
  },
  {
    name: 'TOML Datetime',
    scope: ['constant.other.datetime.toml', 'constant.other.date.toml', 'constant.other.time.toml'],
    settings: {
      foreground: accents.amber, // #FFAB40 - Amber for Datetime
    },
  },
  {
    name: 'TOML Boolean',
    scope: ['constant.language.boolean.toml'],
    settings: {
      foreground: pinks.blush, // Boosted pink for booleans
      fontStyle: 'bold',
    },
  },
  {
    name: 'TOML Number',
    scope: ['constant.numeric.toml', 'constant.numeric.integer.toml', 'constant.numeric.float.toml'],
    settings: {
      foreground: character.negi.bright, // #69F0AE - Bright Green for Numbers
    },
  },
  {
    name: 'TOML Special Numbers',
    scope: ['constant.language.infinity.toml', 'constant.language.nan.toml'],
    settings: {
      foreground: hologram.purple, // Special values in purple
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // MAKEFILE - Build Automation
  // ===========================================================================
  {
    name: 'Makefile Target',
    scope: ['entity.name.function.target.makefile'],
    settings: {
      foreground: versions.nt, // #3ED1C8 - NT Modern (targets are actions)
      fontStyle: 'bold',
    },
  },
  {
    name: 'Makefile Prerequisite',
    scope: ['entity.name.function.prerequisite.makefile'],
    settings: {
      foreground: character.eyes.bright, // #5DE4DB - Hair shine dependencies
    },
  },
  {
    name: 'Makefile Variable Definition',
    scope: ['variable.other.makefile'],
    settings: {
      foreground: foregrounds.primary, // #C8DCD9 - Variables
    },
  },
  {
    name: 'Makefile Variable Reference',
    scope: ['variable.language.makefile', 'string.interpolated.makefile'],
    settings: {
      foreground: hologram.cyan, // #4DD0E1 - Variable references
    },
  },
  {
    name: 'Makefile Automatic Variable',
    scope: ['variable.language.automatic.makefile'],
    settings: {
      foreground: magicalMirai.y2017.celebrationGold, // #FFD700 - Gold for automatic vars
      fontStyle: 'bold',
    },
  },
  {
    name: 'Makefile Function',
    scope: ['support.function.makefile', 'meta.function-call.makefile'],
    settings: {
      foreground: pinks.blush, // #FFB8C8 - Skin Blush (Lc ~70)
    },
  },
  {
    name: 'Makefile Keyword',
    scope: ['keyword.control.makefile', 'keyword.other.makefile'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB - Hair Shine (Lc ~70)
      fontStyle: 'bold',
    },
  },
  {
    name: 'Makefile Conditional',
    scope: ['keyword.control.conditional.makefile', 'keyword.control.ifeq.makefile', 'keyword.control.ifdef.makefile'],
    settings: {
      foreground: teals.classic, // #39C5BB
      fontStyle: 'bold',
    },
  },
  {
    name: 'Makefile Directive',
    scope: ['keyword.control.directive.makefile', 'keyword.control.include.makefile', 'keyword.control.define.makefile'],
    settings: {
      foreground: hologram.purple, // Purple for directives
      fontStyle: 'bold',
    },
  },
  {
    name: 'Makefile Phony',
    scope: ['meta.special-target.makefile', 'constant.language.makefile'],
    settings: {
      foreground: accents.amber, // Amber for .PHONY and special targets
      fontStyle: 'italic',
    },
  },
  {
    name: 'Makefile Shell Command',
    scope: ['string.source.makefile', 'meta.recipe.makefile'],
    settings: {
      foreground: foregrounds.primary, // Shell commands in neutral
    },
  },

  // ===========================================================================
  // ADDITIONAL STRING VARIANTS - Negi colors
  // ===========================================================================
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
      foreground: character.negi.stalk, // #9CCC65
    },
  },
  {
    name: 'Shell Interpolated Strings',
    scope: ['string.interpolated.shell', 'string.interpolated.dollar.shell'],
    settings: {
      foreground: character.negi.stalk,
    },
  },

  // ===========================================================================
  // META SCOPES
  // ===========================================================================
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
      foreground: append.light, // #A8EBE6 - Append Light for types
    },
  },

  // ===========================================================================
  // ENTITY NAME VARIANTS
  // ===========================================================================
  {
    name: 'Entity Name Label',
    scope: ['entity.name.label', 'entity.name.statement.label'],
    settings: {
      foreground: pinks.blush, // #FFB0C4 - Boosted Pink (Lc ~65)
    },
  },
  {
    name: 'Entity Name Constant',
    scope: ['entity.name.constant', 'entity.name.variable.constant'],
    settings: {
      foreground: magicalMirai.y2017.celebrationGold, // #FFD700 - World is Mine
    },
  },
  {
    name: 'Entity Name Enum',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: magicalMirai.y2017.celebrationGold, // #FFD700 - Magical Mirai
    },
  },
  {
    name: 'Entity Name Interface',
    scope: ['entity.name.type.interface', 'entity.name.interface'],
    settings: {
      foreground: snowMiku.y2011.winterBlue, // #87CEEB - Snow Miku sky
    },
  },
  {
    name: 'Entity Name Alias/Type Alias',
    scope: ['entity.name.type.alias', 'entity.name.type.type-alias'],
    settings: {
      foreground: append.light, // #A8EBE6 - Append Light for types
    },
  },

  // ===========================================================================
  // KEYWORD DECLARATION VARIANTS - Hair Shine
  // ===========================================================================
  {
    name: 'Keyword Declaration',
    scope: [
      'keyword.declaration',
      'keyword.declaration.function',
      'keyword.declaration.class',
      'keyword.declaration.type',
    ],
    settings: {
      foreground: character.hair.shine, // #5DE4DB - Hair Shine (Lc ~70)
      fontStyle: 'bold',
    },
  },
  {
    name: 'Keyword Namespace/Import',
    scope: ['keyword.namespace', 'keyword.import', 'keyword.export'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB
      fontStyle: 'bold',
    },
  },
  {
    name: 'Keyword Type',
    scope: ['keyword.type', 'keyword.other.type'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // SUPPORT VARIANTS - Miku Character Colors
  // ===========================================================================
  {
    name: 'Support Variable',
    scope: ['support.variable', 'support.variable.property'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB - Hair Shine (Lc ~70)
    },
  },
  {
    name: 'Support Module',
    scope: ['support.module', 'support.module.node'],
    settings: {
      foreground: character.hair.tip, // #7FEDE5 - Hair Tip (Lc ~75)
    },
  },

  // ===========================================================================
  // MARKUP ADDITIONAL
  // ===========================================================================
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
      foreground: mikuExpo.y2025.asiaCyan, // #00E5CC - Racing connection
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

  // ===========================================================================
  // DEPRECATED STYLING
  // ===========================================================================
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
];

export type TokenColors = typeof tokenColors;
