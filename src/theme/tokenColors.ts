/**
 * Hatsune Miku Theme - Token Colors (Syntax Highlighting)
 *
 * Character-Semantic Mapping Strategy:
 * - Eyes → Keywords (iris #39C5BB), Functions (bright #5DE4DB)
 * - Class → Snow Miku Winter Blue (#87CEEB) - Distinct hue for token distinction
 * - Methods → Soft pink (#FF80AB) - Distinct from parameter pink
 * - Negi → Strings (stalk #9CCC65), Numbers (bright #69F0AE)
 * - Skin → Properties (blush #FFB8C8)
 * - Headphones → Errors (cushion #E05096)
 */

import {
  teals,
  pinks,
  cyans,
  greys,
  foregrounds,
  accents,
  semantic,
  hologram,
  versionMapping,
  character,
  append,
  boosted,
  racingMiku,
  snowMiku,
  magicalMirai,
  mikuExpo,
  projectDiva,
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
  // COMMENTS - Outfit highlight (background detail)
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
      foreground: greys.platinum, // #B0BEC5 - High Contrast Doc Comments
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // KEYWORDS - Eyes iris = Soul/identity of code
  // ===========================================================================
  {
    name: 'Control Keywords',
    scope: ['keyword.control', 'keyword.control.flow', 'keyword.control.import'],
    settings: {
      foreground: character.eyes.iris, // #39C5BB - Identity
      fontStyle: 'bold',
    },
  },
  {
    name: 'Storage Types',
    scope: ['storage.type', 'storage.modifier'],
    settings: {
      foreground: mikuExpo.y2026.skyBlue, // #87CEEB - Sky Blue for Definitions
      fontStyle: 'bold',
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'],
    settings: {
      foreground: racingMiku.y2019.neonCyan, // #00FFFF - Electric Cyan for Math/Logic
    },
  },
  {
    name: 'Special Operators',
    scope: ['keyword.operator.new', 'keyword.operator.expression'],
    settings: {
      foreground: magicalMirai.y2025.resonanceCyan, // #00E5FF
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // FUNCTIONS - Eyes bright = Active expression
  // ===========================================================================
  {
    name: 'User Functions',
    scope: ['entity.name.function', 'meta.function-call'],
    settings: {
      foreground: character.eyes.bright, // #5DE4DB - Active expression
    },
  },
  {
    name: 'Library/Support Functions',
    scope: ['support.function', 'support.function.console'],
    settings: {
      foreground: boosted.purple, // Boosted purple for Lc 65+
    },
  },
  {
    name: 'Methods',
    scope: ['entity.name.function.member'],
    settings: {
      foreground: pinks.soft, // #FF80AB - Soft pink (distinct from parameter #FFB8D4)
    },
  },

  // ===========================================================================
  // CLASSES & TYPES - Hair = Structure & Flow
  // ===========================================================================
  {
    name: 'User Classes',
    scope: ['entity.name.type.class', 'entity.name.class'],
    settings: {
      foreground: snowMiku.y2011.winterBlue, // #87CEEB - Snow Miku sky blue (distinct from teal)
      fontStyle: 'bold',
    },
  },

  {
    name: 'Structs',
    scope: ['entity.name.type.struct'],
    settings: {
      foreground: pinks.blush, // #FFB8D4 - Blush Pink for Structs
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
      foreground: snowMiku.y2021.glowCyan, // #00E5FF - Matches semantic token
      fontStyle: 'bold',
    },
  },

  {
    name: 'Enums',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: magicalMirai.y2017.celebrationGold, // #FFD700 - Gold for Enums
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
      foreground: accents.gold, // #FFCA28 - Gold for Generics/Type Parameters
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
      foreground: pinks.blush, // #FFB8D4 - Matches semantic token
      fontStyle: 'italic',
    },
  },
  {
    name: 'Constants',
    scope: ['variable.other.constant', 'constant.language'],
    settings: {
      foreground: pinks.blush, // #FFB8D4 - Matches semantic token
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
      foreground: character.negi.stalk, // #9CCC65 - Negi Green
    },
  },
  {
    name: 'Template Strings',
    scope: ['string.template'],
    settings: {
      foreground: racingMiku.y2014.limeAccent, // #76FF03 - Lime for Template Literals
    },
  },
  {
    name: 'Numbers',
    scope: ['constant.numeric'],
    settings: {
      foreground: character.negi.bright, // #69F0AE - Bright data
    },
  },
  {
    name: 'Booleans',
    scope: ['constant.language.boolean'],
    settings: {
      foreground: boosted.pink, // Boosted light pink for Lc 60+
      fontStyle: 'bold',
    },
  },
  {
    name: 'Regex',
    scope: ['string.regexp'],
    settings: {
      foreground: boosted.coral, // Boosted coral for Lc 60+
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
  // META & DECORATORS - The Accessories
  // ===========================================================================
  {
    name: 'Decorators / Attributes',
    scope: ['meta.decorator', 'entity.other.attribute-name'],
    settings: {
      foreground: snowMiku.y2011.winterBlue, // #87CEEB - Sky Blue for Decorators
      fontStyle: 'italic',
    },
  },
  {
    name: 'HTML/JSX Tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: character.eyes.iris, // #39C5BB - Identity
      fontStyle: 'bold',
    },
  },
  {
    name: 'HTML/JSX Attributes',
    scope: ['entity.other.attribute-name.html', 'entity.other.attribute-name.jsx'],
    settings: {
      foreground: projectDiva.space.cosmosBlue, // #304FFE - Cosmos Blue for Attributes
    },
  },

  // ===========================================================================
  // MARKDOWN - Digital Documentation
  // ===========================================================================
  {
    name: 'Markdown Headings',
    scope: ['markup.heading', 'entity.name.section.markdown'],
    settings: {
      foreground: boosted.pink, // Boosted pink for Lc 60+
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Links',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: mikuExpo.y2025.asiaCyan, // #00E5CC - Cyan Links
    },
  },
  {
    name: 'Markdown Code',
    scope: ['markup.inline.raw', 'markup.raw.block'],
    settings: {
      foreground: semantic.success, // Negi Green
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
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },
  {
    name: 'C# Namespace',
    scope: ['entity.name.type.namespace.cs'],
    settings: {
      foreground: snowMiku.y2011.winterBlue, // #87CEEB - Sky Blue for Class
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
      foreground: character.eyes.iris, // #39C5BB - Identity
      fontStyle: 'bold',
    },
  },
  {
    name: 'TOML Array of Tables',
    scope: ['entity.name.section.array.toml', 'support.type.property-name.array.toml'],
    settings: {
      foreground: pinks.sekai, // #FF6B9D - Sekai Pink for Array Tables
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
      foreground: racingMiku.y2014.limeAccent, // #76FF03 - Lime for Literal Strings
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
      foreground: boosted.pink, // Boosted pink for booleans
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
      foreground: character.eyes.bright, // #5DE4DB - Active expression (targets are actions)
      fontStyle: 'bold',
    },
  },
  {
    name: 'Makefile Prerequisite',
    scope: ['entity.name.function.prerequisite.makefile'],
    settings: {
      foreground: pinks.soft, // #FF80AB - Dependencies in soft pink
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
      foreground: accents.gold, // #FFCA28 - Gold for automatic vars ($@, $<, etc.)
      fontStyle: 'bold',
    },
  },
  {
    name: 'Makefile Function',
    scope: ['support.function.makefile', 'meta.function-call.makefile'],
    settings: {
      foreground: boosted.purple, // Boosted purple for functions
    },
  },
  {
    name: 'Makefile Keyword',
    scope: ['keyword.control.makefile', 'keyword.other.makefile'],
    settings: {
      foreground: character.eyes.iris, // #39C5BB - Identity
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
      'string.template',
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
      foreground: accents.amber,
    },
  },
  {
    name: 'Entity Name Constant',
    scope: ['entity.name.constant', 'entity.name.variable.constant'],
    settings: {
      foreground: pinks.accessory,
    },
  },
  {
    name: 'Entity Name Enum',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: accents.gold, // #FFCA28 - Gold for Enums
    },
  },
  {
    name: 'Entity Name Interface',
    scope: ['entity.name.type.interface', 'entity.name.interface'],
    settings: {
      foreground: snowMiku.y2021.glowCyan, // #00E5FF - Matches semantic token
    },
  },
  {
    name: 'Entity Name Namespace',
    scope: ['entity.name.type.namespace', 'entity.name.namespace'],
    settings: {
      foreground: accents.blue,
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
  // KEYWORD DECLARATION VARIANTS - Eyes iris = Identity
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
      foreground: character.eyes.iris, // #39C5BB
      fontStyle: 'bold',
    },
  },
  {
    name: 'Keyword Namespace/Import',
    scope: ['keyword.namespace', 'keyword.import', 'keyword.export'],
    settings: {
      foreground: character.eyes.iris,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Keyword Type',
    scope: ['keyword.type', 'keyword.other.type'],
    settings: {
      foreground: character.eyes.iris,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // SUPPORT VARIANTS - Eyes iris = Identity
  // ===========================================================================
  {
    name: 'Support Variable',
    scope: ['support.variable', 'support.variable.property'],
    settings: {
      foreground: character.eyes.iris,
    },
  },
  {
    name: 'Support Module',
    scope: ['support.module', 'support.module.node'],
    settings: {
      foreground: character.eyes.iris,
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
