/**
 * Hatsune Miku Theme - Token Colors (Syntax Highlighting)
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * THE SEMANTIC SYNTAX PHILOSOPHY
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Every syntax color traces directly to Miku's character design, concert
 * aesthetics, or event palettes. No arbitrary colors - pure Miku passion.
 *
 * APCA CONTRAST STANDARD:
 * All tokens maintain Lc 60+ against #15191D editor background for readability.
 *
 * CHARACTER DESIGN → SYNTAX MAPPING:
 * ┌─────────────────────┬─────────────┬───────┬────────────────────────────────┐
 * │ Origin              │ Hex         │ Lc    │ Token Type                     │
 * ├─────────────────────┼─────────────┼───────┼────────────────────────────────┤
 * │ Hair Shine          │ #5DE4DB     │ ~70   │ Keywords - twin-tails direct   │
 * │ Hair Tip            │ #7FEDE5     │ ~75   │ Namespaces - bright organization│
 * │ Append Light        │ #A8EBE6     │ ~80   │ Doc Comments, Types - airy     │
 * │ Skin Blush          │ #FFB8C8     │ ~70   │ Properties - warm attributes   │
 * │ Negi Stalk          │ #9CCC65     │ ~64   │ Strings - literal truth        │
 * │ Negi Bright         │ #69F0AE     │ ~75   │ Numbers - precise data         │
 * └─────────────────────┴─────────────┴───────┴────────────────────────────────┘
 *
 * MIKU VOICES & VERSIONS:
 * ┌─────────────────────┬─────────────┬───────┬────────────────────────────────┐
 * │ Hologram Cyan       │ #4DD0E1     │ ~70   │ Functions - action projection  │
 * │ NT Modern           │ #3ED1C8     │ ~65   │ Makefile targets - modern exec │
 * │ Boosted Purple      │ #D4BBFF     │ ~65   │ Decorators, enums - meta-code  │
 * └─────────────────────┴─────────────┴───────┴────────────────────────────────┘
 *
 * MIKU EVENTS & CONCERTS:
 * ┌─────────────────────┬─────────────┬───────┬────────────────────────────────┐
 * │ Magical Mirai Gold  │ #FFD740     │ ~80   │ Classes, constants - celebrate │
 * │ Snow Miku Blue      │ #87CEEB     │ ~70   │ Interfaces - winter clarity    │
 * │ Racing Lime         │ #76FF03     │ ~85   │ Regex - speed patterns         │
 * │ Warm Orange         │ #FFAB40     │ ~70   │ Operators - velocity logic     │
 * └─────────────────────┴─────────────┴───────┴────────────────────────────────┘
 *
 * ICONIC PVs:
 * ┌─────────────────────┬─────────────┬───────┬────────────────────────────────┐
 * │ Melt (warm pink)    │ #FFB6C1     │ ~70   │ Template Strings - warmth      │
 * │ Senbonzakura        │ #FFB7C5     │ ~70   │ C# Attributes - cherry bloom   │
 * └─────────────────────┴─────────────┴───────┴────────────────────────────────┘
 *
 * COMMENTS - Snow Miku Muffler Grey (#B0C4DE, Lc ~65):
 * Comments use Snow Miku's scarf grey to distinguish from teal-tinted code.
 * They whisper from the past, not the current performance.
 *
 * For complete design documentation, see DESIGN_SYSTEM.md
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

  // Additional variants for richer syntax
  viralHits,
  derivativeCharacters,
  projectDiva,
  sakuraMiku,
  seasonalExpanded,
  projectSekai,
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
  // COMMENTS - Blue-tinted gray (distinct from teal-tinted variable)
  // ===========================================================================
  {
    name: 'Comments',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      fontStyle: 'italic',
      foreground: snowMiku.y2011.mufflerGrey, // #B0C4DE - Snow Miku's scarf (Lc ~65, distinct from teal)
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
    },
  },
  {
    name: 'Storage Types',
    scope: ['storage.type'],
    settings: {
      foreground: accents.orange, // #FFAB40 - Orange for declaration keywords (distinct from control keywords)
    },
  },
  {
    name: 'Storage Modifiers',
    scope: ['storage.modifier'],
    settings: {
      foreground: boosted.purple, // #D4BBFF - Boosted purple for modifiers (Lc ~65)
    },
  },
  {
    name: 'Operators',
    scope: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'],
    settings: {
      foreground: accents.orange, // #FFAB40 - Warm orange for operators (distinct from keywords)
    },
  },
  {
    name: 'Special Operators',
    scope: ['keyword.operator.new', 'keyword.operator.expression'],
    settings: {
      foreground: accents.orange, // #FFAB40 - Warm orange
    },
  },

  // ===========================================================================
  // FUNCTIONS - Hologram Cyan (Her Digital Holographic Projection)
  // ===========================================================================
  {
    name: 'User Functions',
    scope: ['entity.name.function', 'meta.function-call'],
    settings: {
      foreground: hologram.cyan, // #4DD0E1 - Holographic action projection
    },
  },
  {
    name: 'Library/Support Functions',
    scope: ['support.function', 'support.function.console'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB - Hair shine for built-ins (distinct from user function cyan)
    },
  },
  {
    name: 'Methods',
    scope: ['entity.name.function.member'],
    settings: {
      foreground: character.skin.blush, // #FFB8C8 - Skin blush for methods (distinct from parameter pink)
    },
  },

  // ===========================================================================
  // CLASSES & TYPES - Magical Mirai Gold (Structural Celebration)
  // ===========================================================================
  {
    name: 'User Classes',
    scope: ['entity.name.type.class', 'entity.name.class'],
    settings: {
      foreground: accents.amber, // #FFD740 - Structural declaration celebration
    },
  },

  {
    name: 'Structs',
    scope: ['entity.name.type.struct'],
    settings: {
      foreground: pinks.pale, // #FCE4EC - Soft pale pink for Structs
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
      foreground: snowMiku.y2011.winterBlue, // #87CEEB - Winter clarity (distinct from keyword teal)
    },
  },

  {
    name: 'Enums',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: boosted.purple, // #D4BBFF - Purple for enum type declarations
    },
  },
  {
    name: 'Types / Primitives',
    scope: ['entity.name.type', 'support.type.primitive'],
    settings: {
      foreground: pinks.pale, // #FCE4EC - Pale pink for types (distinct from cyan keywords)
    },
  },
  {
    name: 'Type Parameters',
    scope: ['entity.name.type.parameter'],
    settings: {
      foreground: boosted.purple, // #D4BBFF - Purple for generics (distinct from function gold)
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
      foreground: append.light, // #A8EBE6 - Lighter teal (distinct from function hologram cyan)
    },
  },
  {
    name: 'Constants',
    scope: ['variable.other.constant', 'constant.language'],
    settings: {
      foreground: magicalMirai.y2017.celebrationGold, // #FFD700 - World is Mine royalty
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
  // META & DECORATORS - Boosted Purple (Meta-programming stands apart)
  // ===========================================================================
  {
    name: 'Decorators / Attributes',
    scope: ['meta.decorator', 'entity.other.attribute-name'],
    settings: {
      foreground: boosted.purple, // #D4BBFF - Purple for decorators (distinct from property pink)
    },
  },
  {
    name: 'HTML/JSX Tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB - Hair Shine (Lc ~70)
    },
  },
  {
    name: 'HTML/JSX Attributes',
    scope: ['entity.other.attribute-name.html', 'entity.other.attribute-name.jsx'],
    settings: {
      foreground: character.hair.tip, // #7FEDE5 - Hair Tip (Lc ~75)
    },
  },

  // ===========================================================================
  // MARKDOWN - Digital Documentation
  // ===========================================================================
  {
    name: 'Markdown Headings',
    scope: ['markup.heading', 'entity.name.section.markdown'],
    settings: {
      foreground: pinks.blush, // #FFB8D4 - Blush pink for headings (Lc ~70)
    },
  },
  {
    name: 'Markdown Links',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: hologram.cyan, // #4DD0E1 - Hologram cyan for links
    },
  },
  {
    name: 'Markdown Code',
    scope: ['markup.inline.raw', 'markup.raw.block'],
    settings: {
      foreground: accents.amber, // #FFD740 - Gold for code blocks (distinct from strings)
    },
  },
  {
    name: 'Markdown Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: sakuraMiku.character.hairPink, // #FFB7C5 - Sakura pink (distinct from grey comments)
    },
  },

  // ===========================================================================
  // NAMESPACES - Boosted Purple (Organizational Structure)
  // ===========================================================================
  {
    name: 'Entity Name Namespace',
    scope: ['entity.name.type.namespace', 'entity.name.namespace', 'entity.name.type.module'],
    settings: {
      foreground: boosted.purple, // #D4BBFF - Boosted purple for namespaces (Lc ~65)
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
      foreground: iconicPVs.senbonzakura.sakuraPink, // #FFB7C5 - Senbonzakura
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
  // SQL - Database Queries (Heterochromia: Pink for structure, Teal for data)
  // ===========================================================================
  {
    name: 'SQL DML Keywords',
    scope: ['keyword.other.DML.sql', 'keyword.other.dml.sql'],
    settings: {
      foreground: pinks.sekai, // #FF77A0 - Pink for data manipulation (SELECT, INSERT, UPDATE, DELETE)
    },
  },
  {
    name: 'SQL DDL Keywords',
    scope: ['keyword.other.DDL.sql', 'keyword.other.ddl.sql', 'keyword.other.create.sql'],
    settings: {
      foreground: pinks.blush, // #FFB8D4 - Blush for schema definition (CREATE, ALTER, DROP)
    },
  },
  {
    name: 'SQL Clauses',
    scope: ['keyword.other.sql', 'keyword.other.order.sql', 'keyword.other.alias.sql'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB - Teal for clauses (WHERE, ORDER BY, GROUP BY)
    },
  },
  {
    name: 'SQL Functions',
    scope: ['support.function.sql', 'support.function.aggregate.sql'],
    settings: {
      foreground: hologram.cyan, // #4DD0E1 - Cyan for functions (COUNT, SUM, AVG)
    },
  },
  {
    name: 'SQL Tables',
    scope: ['entity.name.function.sql', 'constant.other.table-name.sql'],
    settings: {
      foreground: accents.amber, // #FFD740 - Gold for table names
    },
  },
  {
    name: 'SQL Columns',
    scope: ['constant.other.database-name.sql', 'constant.other.placeholder.sql'],
    settings: {
      foreground: foregrounds.primary, // Neutral for columns
    },
  },
  {
    name: 'SQL Operators',
    scope: ['keyword.operator.comparison.sql', 'keyword.operator.logical.sql'],
    settings: {
      foreground: accents.orange, // #FFAB40 - Orange for operators (AND, OR, =, <>)
    },
  },
  {
    name: 'SQL Types',
    scope: ['storage.type.sql', 'support.type.sql'],
    settings: {
      foreground: pinks.pale, // #FCE4EC - Pale pink for types (INT, VARCHAR, TEXT)
    },
  },

  // ===========================================================================
  // PHP - Web Backend (Heterochromia balance)
  // ===========================================================================
  {
    name: 'PHP Tags',
    scope: ['punctuation.section.embedded.php', 'keyword.other.phpdoc.php'],
    settings: {
      foreground: pinks.sekai, // #FF77A0 - Pink for PHP tags
    },
  },
  {
    name: 'PHP Variables',
    scope: ['variable.other.php', 'punctuation.definition.variable.php'],
    settings: {
      foreground: foregrounds.primary, // Neutral for variables
    },
  },
  {
    name: 'PHP Superglobals',
    scope: ['variable.language.php'],
    settings: {
      foreground: pinks.blush, // #FFB8D4 - Pink for $_GET, $_POST, etc.
    },
  },
  {
    name: 'PHP Functions',
    scope: ['support.function.php', 'support.function.construct.php'],
    settings: {
      foreground: hologram.cyan, // #4DD0E1 - Cyan for built-in functions
    },
  },
  {
    name: 'PHP Classes',
    scope: ['support.class.php', 'entity.other.inherited-class.php'],
    settings: {
      foreground: accents.amber, // #FFD740 - Gold for classes
    },
  },
  {
    name: 'PHP Constants',
    scope: ['support.constant.php', 'constant.language.php'],
    settings: {
      foreground: magicalMirai.y2017.celebrationGold, // #FFD700 - Gold for constants
    },
  },

  // ===========================================================================
  // RUBY - Elegant Syntax (Pink gem theme)
  // ===========================================================================
  {
    name: 'Ruby Symbols',
    scope: ['constant.other.symbol.ruby', 'punctuation.definition.symbol.ruby'],
    settings: {
      foreground: pinks.sekai, // #FF77A0 - Pink for :symbols (Ruby gems!)
    },
  },
  {
    name: 'Ruby Instance Variables',
    scope: ['variable.other.readwrite.instance.ruby'],
    settings: {
      foreground: pinks.blush, // #FFB8D4 - Blush for @instance_vars
    },
  },
  {
    name: 'Ruby Class Variables',
    scope: ['variable.other.readwrite.class.ruby'],
    settings: {
      foreground: character.headphones.cushion, // #E05096 - Deeper pink for @@class_vars
    },
  },
  {
    name: 'Ruby Global Variables',
    scope: ['variable.other.readwrite.global.ruby'],
    settings: {
      foreground: boosted.coral, // Coral for $global_vars (warning color - use sparingly)
    },
  },
  {
    name: 'Ruby Blocks',
    scope: ['keyword.control.ruby', 'keyword.control.def.ruby'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB - Teal for control flow
    },
  },
  {
    name: 'Ruby Special Methods',
    scope: ['keyword.other.special-method.ruby'],
    settings: {
      foreground: hologram.cyan, // #4DD0E1 - Cyan for special methods
    },
  },
  {
    name: 'Ruby Modules',
    scope: ['entity.name.type.module.ruby', 'support.class.ruby'],
    settings: {
      foreground: accents.amber, // #FFD740 - Gold for modules/classes
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
    },
  },
  {
    name: 'Makefile Conditional',
    scope: ['keyword.control.conditional.makefile', 'keyword.control.ifeq.makefile', 'keyword.control.ifdef.makefile'],
    settings: {
      foreground: teals.classic, // #39C5BB
    },
  },
  {
    name: 'Makefile Directive',
    scope: ['keyword.control.directive.makefile', 'keyword.control.include.makefile', 'keyword.control.define.makefile'],
    settings: {
      foreground: hologram.purple, // Purple for directives
    },
  },
  {
    name: 'Makefile Phony',
    scope: ['meta.special-target.makefile', 'constant.language.makefile'],
    settings: {
      foreground: accents.amber, // Amber for .PHONY and special targets
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
      foreground: boosted.purple, // #D4BBFF - Purple for enum type declarations
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
    },
  },
  {
    name: 'Keyword Namespace/Import',
    scope: ['keyword.namespace', 'keyword.import', 'keyword.export'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB
    },
  },
  {
    name: 'Keyword Type',
    scope: ['keyword.type', 'keyword.other.type'],
    settings: {
      foreground: character.hair.shine, // #5DE4DB
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

  // ===========================================================================
  // PYTHON - Viral Hits & Derivative Characters (Snake → Mesmerizer hypnosis)
  // ===========================================================================
  {
    name: 'Python Self',
    scope: ['variable.parameter.function.language.special.self.python'],
    settings: {
      foreground: viralHits.mesmerizer.mikuTeal, // #39C5BB - Hypnotic self
    },
  },
  {
    name: 'Python Magic Methods',
    scope: ['support.function.magic.python'],
    settings: {
      foreground: viralHits.mesmerizer.hypnosis, // #00FF00 - Spiral green magic
    },
  },
  {
    name: 'Python Decorators',
    scope: ['entity.name.function.decorator.python', 'meta.function.decorator.python'],
    settings: {
      foreground: viralHits.vampire.gothicLavender, // #9575CD - Vampire gothic
    },
  },
  {
    name: 'Python F-String Braces',
    scope: ['constant.character.format.placeholder.other.python'],
    settings: {
      foreground: viralHits.king.crownGold, // #FFD700 - Royal interpolation
    },
  },

  // ===========================================================================
  // GO - Racing Miku (Speed & Performance)
  // ===========================================================================
  {
    name: 'Go Package',
    scope: ['entity.name.package.go'],
    settings: {
      foreground: racingMiku.team.gsmTeal, // #00BFA5 - GSM racing teal
    },
  },
  {
    name: 'Go Imports',
    scope: ['entity.name.import.go'],
    settings: {
      foreground: racingMiku.y2018.holoBlue, // #448AFF - Holographic import
    },
  },
  {
    name: 'Go Channels',
    scope: ['keyword.operator.channel.go'],
    settings: {
      foreground: racingMiku.y2017.gradientPurple, // #AA00FF - Speed channel
    },
  },
  {
    name: 'Go Defer/Go Keywords',
    scope: ['keyword.control.go'],
    settings: {
      foreground: racingMiku.y2016.accentPink, // #FF4081 - Racing pink
    },
  },

  // ===========================================================================
  // RUST - Snow Miku (Memory Safety ❄️ Frozen References)
  // ===========================================================================
  {
    name: 'Rust Lifetime',
    scope: ['storage.modifier.lifetime.rust', 'entity.name.lifetime.rust'],
    settings: {
      foreground: snowMiku.y2019.royalGold, // #FFD700 - Snow Princess royal
    },
  },
  {
    name: 'Rust Unsafe',
    scope: ['keyword.other.unsafe.rust'],
    settings: {
      foreground: snowMiku.y2018.craneRed, // #D32F2F - Crane Priestess red (danger!)
    },
  },
  {
    name: 'Rust Traits',
    scope: ['entity.name.type.trait.rust'],
    settings: {
      foreground: snowMiku.y2020.featherGreen, // #69F0AE - Snow Parade feather
    },
  },
  {
    name: 'Rust Macros',
    scope: ['entity.name.function.macro.rust', 'meta.macro.rust'],
    settings: {
      foreground: snowMiku.y2021.lightLilac, // #E1BEE7 - Glowing Snow lilac
    },
  },

  // ===========================================================================
  // JSON - Hair Highlight & Skin (Structured Data as Miku's Form)
  // ===========================================================================
  {
    name: 'JSON Key Level 0',
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: character.hair.highlight, // #B2EBE7 - Hair highlight (Lc ~87)
    },
  },
  {
    name: 'JSON Punctuation',
    scope: ['punctuation.support.type.property-name.json', 'punctuation.definition.string.json'],
    settings: {
      foreground: character.skin.blush, // #FFB8C8 - Skin blush (Lc ~70)
    },
  },

  // ===========================================================================
  // YAML - Sakura Miku (Spring Config Blossoms)
  // ===========================================================================
  {
    name: 'YAML Key',
    scope: ['entity.name.tag.yaml'],
    settings: {
      foreground: sakuraMiku.character.hairPink, // #FFB7C5 - Cherry blossom
    },
  },
  {
    name: 'YAML Anchor',
    scope: ['entity.name.type.anchor.yaml', 'punctuation.definition.anchor.yaml'],
    settings: {
      foreground: sakuraMiku.environment.petalPink, // #FFDDE5 - Floating petal
    },
  },
  {
    name: 'YAML Alias',
    scope: ['variable.other.alias.yaml'],
    settings: {
      foreground: sakuraMiku.variants.fullBloom, // #FF8FB4 - Full bloom viewing
    },
  },
];

export type TokenColors = typeof tokenColors;
