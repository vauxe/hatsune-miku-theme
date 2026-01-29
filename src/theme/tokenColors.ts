/**
 * Token Colors - Syntax Highlighting for Code
 *
 * Design Philosophy: "Digital Diva Ergonomics"
 * - 10 Core semantic categories with maximally distinguishable colors
 * - SEKAI units provide primary palette (designed to be complementary)
 * - All colors imported from palette - no hardcoded hex values
 */

// Core character design
import { character } from '../palette/core';

// Voicebank variants
import { mikuNT } from '../palette/voicebanks';

// Project SEKAI units - primary token colors
import {
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from '../palette/games/projectSekai';

// Project DIVA modules - accent and special tokens
import {
  angel,
  ghost,
  miCrystal,
  factoryTyrant,
  regret,
  ichiNoSakuraBlossom,
  conductorNightingale,
  celebration,
  catchTheWave,
  outAndAbout,
} from '../palette/games/projectDiva';

// Snow Miku - seasonal colors for language-specific tokens
import { snowMiku } from '../palette/events/snowMiku';

// Derivatives
import {
  sakuraMiku as sakuraMikuDerivative,
  miku15thAnniversary,
  lawson50thMiku,
} from '../palette/derivatives';

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
  // COMMENTS - Nightcord (25-ji, subdued gray)
  // ==========================================================================
  {
    name: 'Comments',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      fontStyle: 'italic',
      foreground: mikuNT.hair.shadow, // #5C5A60
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
      foreground: mikuNT.hair.shadow,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Comment Block/Line',
    scope: ['comment.block', 'comment.line'],
    settings: {
      fontStyle: 'italic',
      foreground: mikuNT.hair.shadow,
    },
  },

  // ==========================================================================
  // KEYWORDS - Character Hair (THE Miku color - teal)
  // ==========================================================================
  {
    name: 'Keywords',
    scope: ['keyword', 'keyword.other'],
    settings: {
      foreground: character.hair.base, // #39C5BB
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
    name: 'Storage Base',
    scope: ['storage'],
    settings: {
      foreground: character.hair.base,
    },
  },

  // ==========================================================================
  // FUNCTIONS - Leo/need (Royal Blue)
  // ==========================================================================
  {
    name: 'User Functions',
    scope: ['entity.name.function', 'meta.function-call'],
    settings: {
      foreground: leoNeed.unitColor, // #4455DD
    },
  },
  {
    name: 'Library/Support Functions',
    scope: ['support.function', 'support.function.console'],
    settings: {
      foreground: leoNeed.unitColor,
    },
  },

  // ==========================================================================
  // METHODS - Wonderlands×Showtime (Pop Orange)
  // ==========================================================================
  {
    name: 'Methods',
    scope: ['entity.name.function.member', 'entity.name.method'],
    settings: {
      foreground: wonderlandsShowtime.unitColor, // #FF9900
    },
  },

  // ==========================================================================
  // CLASSES - Vivid BAD SQUAD (Vivid Pink)
  // ==========================================================================
  {
    name: 'User Classes',
    scope: ['entity.name.type.class', 'entity.name.class'],
    settings: {
      foreground: vividBadSquad.unitColor, // #EE1166
    },
  },
  {
    name: 'Structs',
    scope: ['entity.name.type.struct'],
    settings: {
      foreground: vividBadSquad.unitColor,
    },
  },
  {
    name: 'Support/Library Classes',
    scope: ['support.class', 'support.type'],
    settings: {
      foreground: vividBadSquad.unitColor,
    },
  },

  // ==========================================================================
  // TYPES/INTERFACES - Angel (Light Blue)
  // ==========================================================================
  {
    name: 'Interfaces',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: angel.accessories.shoes, // #87CEEB
    },
  },
  {
    name: 'Types / Primitives',
    scope: ['entity.name.type', 'support.type.primitive'],
    settings: {
      foreground: angel.accessories.shoes,
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
      foreground: angel.accessories.shoes,
    },
  },

  // ==========================================================================
  // TYPE PARAMETERS - Ribbon Girl (Pale Amaranth)
  // ==========================================================================
  {
    name: 'Type Parameters',
    scope: ['entity.name.type.parameter'],
    settings: {
      foreground: snowMiku.y2022.eyes, // #F06292 (Coral Pink)
    },
  },

  // ==========================================================================
  // ENUMS - Nightcord (Dark Purple)
  // ==========================================================================
  {
    name: 'Enums',
    scope: ['entity.name.type.enum', 'entity.name.enum'],
    settings: {
      foreground: nightcord.unitColor, // #884499
    },
  },

  // ==========================================================================
  // VARIABLES - MORE MORE JUMP! (Bright Green)
  // ==========================================================================
  {
    name: 'Variables',
    scope: ['variable', 'meta.definition.variable.name'],
    settings: {
      foreground: moreMoreJump.unitColor, // #88DD44
    },
  },
  {
    name: 'Properties / Fields',
    scope: ['variable.other.property', 'variable.other.object.property', 'variable.other.member'],
    settings: {
      foreground: moreMoreJump.unitColor,
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
      foreground: moreMoreJump.unitColor,
    },
  },

  // ==========================================================================
  // PARAMETERS - Leo/need Hair Highlight (Vibrant Pink)
  // ==========================================================================
  {
    name: 'Parameters',
    scope: ['variable.parameter'],
    settings: {
      foreground: leoNeed.hair.highlight, // #FF80AB
    },
  },

  // ==========================================================================
  // CONSTANTS - Character Marks (Miku Red "01" Tattoo)
  // ==========================================================================
  {
    name: 'Constants',
    scope: ['variable.other.constant', 'constant.language'],
    settings: {
      foreground: character.marks.tattoo, // #E60033
    },
  },
  {
    name: 'Entity Name Constant',
    scope: ['entity.name.constant', 'entity.name.variable.constant'],
    settings: {
      foreground: character.marks.tattoo,
    },
  },
  {
    name: 'Constant Base',
    scope: ['constant', 'constant.character'],
    settings: {
      foreground: character.marks.tattoo,
    },
  },
  {
    name: 'Constant Other',
    scope: ['constant.other', 'constant.regexp', 'constant.rgb-value'],
    settings: {
      foreground: character.marks.tattoo,
    },
  },

  // ==========================================================================
  // STRINGS - Sakura Miku (Cherry Blossom Pink)
  // ==========================================================================
  {
    name: 'Strings',
    scope: ['string', 'string.quoted.double', 'string.quoted.single'],
    settings: {
      foreground: sakuraMikuDerivative.hair.base, // #FFB7C5
    },
  },
  {
    name: 'Template Strings',
    scope: ['string.template'],
    settings: {
      foreground: sakuraMikuDerivative.hair.base,
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
      foreground: sakuraMikuDerivative.hair.base,
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
      foreground: sakuraMikuDerivative.hair.base,
    },
  },

  // ==========================================================================
  // NUMBERS - Snow Miku 2017 Constellation (Gold)
  // ==========================================================================
  {
    name: 'Numbers',
    scope: ['constant.numeric'],
    settings: {
      foreground: snowMiku.y2017.outfit.constellation, // #FFF59D
    },
  },
  {
    name: 'Booleans',
    scope: ['constant.language.boolean'],
    settings: {
      foreground: snowMiku.y2017.outfit.constellation,
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
      foreground: snowMiku.y2017.outfit.constellation,
    },
  },

  // ==========================================================================
  // OPERATORS - Factory Tyrant (Silver Cogwheels)
  // ==========================================================================
  {
    name: 'Operators',
    scope: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'],
    settings: {
      foreground: factoryTyrant.accessories.cogwheels, // #C0C0C0
    },
  },
  {
    name: 'Special Operators',
    scope: ['keyword.operator.new', 'keyword.operator.expression'],
    settings: {
      foreground: factoryTyrant.accessories.cogwheels,
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
      foreground: factoryTyrant.accessories.cogwheels,
    },
  },

  // ==========================================================================
  // PUNCTUATION - Character Skirt Accessory (Muted Silver)
  // ==========================================================================
  {
    name: 'Punctuation String Delimiters',
    scope: [
      'punctuation.definition.string.begin',
      'punctuation.definition.string.end',
      'punctuation.separator.continuation',
    ],
    settings: {
      foreground: character.skirt.accessory, // #A1B3B6
    },
  },

  // ==========================================================================
  // REGEX - Ghost (Purple)
  // ==========================================================================
  {
    name: 'Regex',
    scope: ['string.regexp'],
    settings: {
      foreground: ghost.hair.base, // #9370DB
    },
  },

  // ==========================================================================
  // ESCAPE SEQUENCES - Sakura Miku Eyes (Darker Pink)
  // ==========================================================================
  {
    name: 'Escape Sequences',
    scope: ['constant.character.escape'],
    settings: {
      foreground: sakuraMikuDerivative.eyes.iris, // #F58F98
    },
  },

  // ==========================================================================
  // DECORATORS - Character Headphones Cushion (Magenta)
  // ==========================================================================
  {
    name: 'Decorators / Attributes',
    scope: ['meta.decorator', 'entity.other.attribute-name'],
    settings: {
      foreground: character.headphones.cushion, // #E05096
    },
  },

  // ==========================================================================
  // MACROS - MiCrystal (Crystal Cyan)
  // ==========================================================================
  {
    name: 'Macros',
    scope: ['entity.name.function.macro', 'meta.macro'],
    settings: {
      foreground: miCrystal.outfit.topFrills, // #E0FFFF
    },
  },

  // ==========================================================================
  // HTML/JSX
  // ==========================================================================
  {
    name: 'HTML/JSX Tags',
    scope: ['entity.name.tag'],
    settings: {
      foreground: snowMiku.y2026.hair, // #70D6D1
    },
  },
  {
    name: 'HTML/JSX Attributes',
    scope: ['entity.other.attribute-name.html', 'entity.other.attribute-name.jsx'],
    settings: {
      foreground: wonderlandsShowtime.unitColor, // #FF9900
    },
  },

  // ==========================================================================
  // MARKDOWN & DOCUMENTATION
  // ==========================================================================
  {
    name: 'Markdown Headings',
    scope: ['markup.heading', 'entity.name.section.markdown'],
    settings: {
      foreground: snowMiku.y2017.hair, // #82B1FF
    },
  },
  {
    name: 'Markdown Links',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: lawson50thMiku.hair.highlight, // #31A7F1
    },
  },
  {
    name: 'Markup Link Label',
    scope: ['markup.link.label', 'string.other.link.title.markdown'],
    settings: {
      foreground: lawson50thMiku.hair.highlight,
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
    name: 'Markdown Code',
    scope: ['markup.inline.raw', 'markup.raw.block', 'markup.raw'],
    settings: {
      foreground: moreMoreJump.unitColor, // #88DD44 (green for code)
    },
  },
  {
    name: 'Markdown Quote',
    scope: ['markup.quote'],
    settings: {
      foreground: mikuNT.hair.base, // #89CDC6
      fontStyle: 'italic',
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
    name: 'Markup List',
    scope: ['markup.list', 'markup.list.unnumbered'],
    settings: {
      foreground: snowMiku.y2010.hair, // #E0EEF5
    },
  },
  {
    name: 'Markup List Numbered',
    scope: ['markup.list.numbered', 'punctuation.definition.list.begin.markdown'],
    settings: {
      foreground: snowMiku.y2010.hair,
    },
  },
  {
    name: 'Markup Changed',
    scope: ['markup.changed'],
    settings: {
      foreground: snowMiku.y2017.accessories.stars, // #FFD700
    },
  },
  {
    name: 'Markup Deleted',
    scope: ['markup.deleted'],
    settings: {
      foreground: character.marks.tattoo, // #E60033
    },
  },
  {
    name: 'Markup Inserted',
    scope: ['markup.inserted'],
    settings: {
      foreground: character.negi.bright, // #69F0AE
    },
  },
  {
    name: 'Emphasis',
    scope: ['emphasis', 'markup.italic'],
    settings: {
      foreground: snowMiku.y2019.outfit.shimmer, // #E0F7FA
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

  // ==========================================================================
  // NAMESPACES & MODULES
  // ==========================================================================
  {
    name: 'Entity Name Namespace',
    scope: ['entity.name.type.namespace', 'entity.name.namespace', 'entity.name.type.module'],
    settings: {
      foreground: character.hair.highlight, // #5DE4DB
    },
  },
  {
    name: 'Support Module',
    scope: ['support.module', 'support.module.node'],
    settings: {
      foreground: character.hair.highlight,
    },
  },

  // ==========================================================================
  // LABELS
  // ==========================================================================
  {
    name: 'Entity Name Label',
    scope: ['entity.name.label', 'entity.name.statement.label'],
    settings: {
      foreground: wonderlandsShowtime.unitColor, // #FF9900
    },
  },

  // ==========================================================================
  // SUPPORT VARIABLES
  // ==========================================================================
  {
    name: 'Support Variable',
    scope: ['support.variable', 'support.variable.property'],
    settings: {
      foreground: moreMoreJump.unitColor,
    },
  },
  {
    name: 'Support Base',
    scope: ['support', 'support.constant', 'support.other', 'support.type.property-name'],
    settings: {
      foreground: angel.accessories.shoes,
    },
  },

  // ==========================================================================
  // INVALID / DEPRECATED
  // ==========================================================================
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.deprecated', 'invalid.illegal'],
    settings: {
      foreground: character.marks.tattoo,
      fontStyle: 'strikethrough',
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
      foreground: character.marks.tattoo,
      fontStyle: 'strikethrough',
    },
  },

  // ==========================================================================
  // ENTITY BASE
  // ==========================================================================
  {
    name: 'Entity Base',
    scope: ['entity', 'entity.name', 'entity.name.section', 'entity.name.selector', 'entity.other', 'entity.other.inherited-class'],
    settings: {
      foreground: vividBadSquad.unitColor,
    },
  },

  // ==========================================================================
  // META (default foreground for structural elements)
  // ==========================================================================
  {
    name: 'Meta Function Parameters',
    scope: [
      'meta.function.parameters',
      'meta.parameters',
      'meta.function-call.arguments',
    ],
    settings: {
      foreground: leoNeed.hair.highlight, // #FF80AB
    },
  },
  {
    name: 'Meta Class Body',
    scope: ['meta.class.body', 'meta.class.inheritance'],
    settings: {
      foreground: snowMiku.y2010.hair, // #E0EEF5
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
      foreground: character.hair.base,
    },
  },
  {
    name: 'Meta Function Return Type',
    scope: ['meta.return.type', 'meta.function.return-type'],
    settings: {
      foreground: angel.accessories.shoes,
    },
  },
  {
    name: 'Markup Base',
    scope: ['markup', 'markup.other'],
    settings: {
      foreground: snowMiku.y2010.hair,
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
      foreground: snowMiku.y2010.hair,
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: PYTHON
  // ==========================================================================
  {
    name: 'Python Self',
    scope: ['variable.parameter.function.language.special.self.python'],
    settings: {
      foreground: conductorNightingale.hair.base, // #556B2F (olive/brown)
    },
  },
  {
    name: 'Python Magic Methods',
    scope: ['support.function.magic.python'],
    settings: {
      foreground: leoNeed.unitColor,
    },
  },
  {
    name: 'Python Decorators',
    scope: ['entity.name.function.decorator.python', 'meta.function.decorator.python'],
    settings: {
      foreground: character.headphones.cushion, // #E05096
    },
  },
  {
    name: 'Python F-String Braces',
    scope: ['constant.character.format.placeholder.other.python'],
    settings: {
      foreground: wonderlandsShowtime.unitColor,
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: GO
  // ==========================================================================
  {
    name: 'Go Package',
    scope: ['entity.name.package.go'],
    settings: {
      foreground: ichiNoSakuraBlossom.hair.base, // #006400 (dark green)
    },
  },
  {
    name: 'Go Imports',
    scope: ['entity.name.import.go'],
    settings: {
      foreground: ichiNoSakuraBlossom.hair.base,
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

  // ==========================================================================
  // LANGUAGE-SPECIFIC: RUST
  // ==========================================================================
  {
    name: 'Rust Lifetime',
    scope: ['storage.modifier.lifetime.rust', 'entity.name.lifetime.rust'],
    settings: {
      foreground: regret.hair.base, // #AFEEEE (pale turquoise)
    },
  },
  {
    name: 'Rust Unsafe',
    scope: ['keyword.other.unsafe.rust'],
    settings: {
      foreground: character.marks.tattoo, // Red for danger
    },
  },
  {
    name: 'Rust Traits',
    scope: ['entity.name.type.trait.rust'],
    settings: {
      foreground: angel.accessories.shoes, // #87CEEB
    },
  },
  {
    name: 'Rust Macros',
    scope: ['entity.name.function.macro.rust', 'meta.macro.rust'],
    settings: {
      foreground: miCrystal.outfit.topFrills, // #E0FFFF
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: RUBY
  // ==========================================================================
  {
    name: 'Ruby Symbols',
    scope: ['constant.other.symbol.ruby', 'punctuation.definition.symbol.ruby'],
    settings: {
      foreground: snowMiku.y2013.outfit.lining, // #CC2838
    },
  },
  {
    name: 'Ruby Instance Variables',
    scope: ['variable.other.readwrite.instance.ruby'],
    settings: {
      foreground: moreMoreJump.unitColor,
    },
  },
  {
    name: 'Ruby Class Variables',
    scope: ['variable.other.readwrite.class.ruby'],
    settings: {
      foreground: moreMoreJump.unitColor,
    },
  },
  {
    name: 'Ruby Global Variables',
    scope: ['variable.other.readwrite.global.ruby'],
    settings: {
      foreground: character.marks.tattoo, // Red for globals
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
      foreground: leoNeed.unitColor,
    },
  },
  {
    name: 'Ruby Modules',
    scope: ['entity.name.type.module.ruby', 'support.class.ruby'],
    settings: {
      foreground: vividBadSquad.unitColor,
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: SQL
  // ==========================================================================
  {
    name: 'SQL DML Keywords',
    scope: ['keyword.other.DML.sql', 'keyword.other.dml.sql'],
    settings: {
      foreground: snowMiku.y2012.outfit.skirt, // #1B4D8E (deep royal blue)
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
      foreground: leoNeed.unitColor,
    },
  },
  {
    name: 'SQL Tables',
    scope: ['entity.name.function.sql', 'constant.other.table-name.sql'],
    settings: {
      foreground: vividBadSquad.unitColor,
    },
  },
  {
    name: 'SQL Columns',
    scope: ['constant.other.database-name.sql', 'constant.other.placeholder.sql'],
    settings: {
      foreground: moreMoreJump.unitColor,
    },
  },
  {
    name: 'SQL Operators',
    scope: ['keyword.operator.comparison.sql', 'keyword.operator.logical.sql'],
    settings: {
      foreground: factoryTyrant.accessories.cogwheels,
    },
  },
  {
    name: 'SQL Types',
    scope: ['storage.type.sql', 'support.type.sql'],
    settings: {
      foreground: angel.accessories.shoes,
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: YAML
  // ==========================================================================
  {
    name: 'YAML Key',
    scope: ['entity.name.tag.yaml', 'support.type.property-name.yaml'],
    settings: {
      foreground: snowMiku.y2024.hair, // #609E9F
    },
  },
  {
    name: 'YAML Anchor',
    scope: ['entity.name.type.anchor.yaml', 'punctuation.definition.anchor.yaml'],
    settings: {
      foreground: character.marks.tattoo,
    },
  },
  {
    name: 'YAML Alias',
    scope: ['variable.other.alias.yaml', 'punctuation.definition.alias.yaml'],
    settings: {
      foreground: ghost.hair.base, // #9370DB
    },
  },
  {
    name: 'YAML Timestamp',
    scope: ['constant.other.timestamp.yaml'],
    settings: {
      foreground: snowMiku.y2017.outfit.constellation, // Gold
    },
  },
  {
    name: 'YAML Directive',
    scope: ['keyword.other.directive.yaml', 'punctuation.definition.directive.yaml'],
    settings: {
      foreground: character.hair.base,
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: JSON
  // ==========================================================================
  {
    name: 'JSON Key Level 0',
    scope: ['support.type.property-name.json'],
    settings: {
      foreground: snowMiku.y2016.hair, // #5BD3DA
    },
  },
  {
    name: 'JSON Punctuation',
    scope: ['punctuation.support.type.property-name.json', 'punctuation.definition.string.json'],
    settings: {
      foreground: character.skirt.accessory,
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: CSS/SCSS
  // ==========================================================================
  {
    name: 'CSS Selectors',
    scope: ['entity.name.tag.css', 'entity.other.attribute-name.class.css', 'entity.other.attribute-name.id.css'],
    settings: {
      foreground: snowMiku.y2025.hair, // #5C6BC0
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: PHP
  // ==========================================================================
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
      foreground: moreMoreJump.unitColor,
    },
  },
  {
    name: 'PHP Superglobals',
    scope: ['variable.language.php'],
    settings: {
      foreground: character.marks.tattoo,
    },
  },
  {
    name: 'PHP Functions',
    scope: ['support.function.php', 'support.function.construct.php'],
    settings: {
      foreground: leoNeed.unitColor,
    },
  },
  {
    name: 'PHP Classes',
    scope: ['support.class.php', 'entity.other.inherited-class.php'],
    settings: {
      foreground: vividBadSquad.unitColor,
    },
  },
  {
    name: 'PHP Constants',
    scope: ['support.constant.php', 'constant.language.php'],
    settings: {
      foreground: character.marks.tattoo,
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: C#
  // ==========================================================================
  {
    name: 'C# LINQ Keywords',
    scope: ['keyword.query.linq.cs'],
    settings: {
      foreground: character.hair.highlight,
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
      foreground: character.headphones.cushion,
    },
  },
  {
    name: 'C# Namespace',
    scope: ['entity.name.type.namespace.cs'],
    settings: {
      foreground: character.hair.highlight,
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: DOCKERFILE
  // ==========================================================================
  {
    name: 'Dockerfile Keyword',
    scope: ['keyword.other.special-method.dockerfile'],
    settings: {
      foreground: character.hair.base,
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: MAKEFILE
  // ==========================================================================
  {
    name: 'Makefile Target',
    scope: ['entity.name.function.target.makefile'],
    settings: {
      foreground: leoNeed.unitColor,
    },
  },
  {
    name: 'Makefile Prerequisite',
    scope: ['entity.name.function.prerequisite.makefile'],
    settings: {
      foreground: moreMoreJump.unitColor,
    },
  },
  {
    name: 'Makefile Variable Definition',
    scope: ['variable.other.makefile'],
    settings: {
      foreground: moreMoreJump.unitColor,
    },
  },
  {
    name: 'Makefile Variable Reference',
    scope: ['variable.language.makefile', 'string.interpolated.makefile'],
    settings: {
      foreground: moreMoreJump.unitColor,
    },
  },
  {
    name: 'Makefile Automatic Variable',
    scope: ['variable.language.automatic.makefile'],
    settings: {
      foreground: character.marks.tattoo,
    },
  },
  {
    name: 'Makefile Function',
    scope: ['support.function.makefile', 'meta.function-call.makefile'],
    settings: {
      foreground: leoNeed.unitColor,
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
      foreground: character.marks.tattoo,
    },
  },
  {
    name: 'Makefile Shell Command',
    scope: ['string.source.makefile', 'meta.recipe.makefile'],
    settings: {
      foreground: sakuraMikuDerivative.hair.base,
    },
  },

  // ==========================================================================
  // LANGUAGE-SPECIFIC: SHELL
  // ==========================================================================
  {
    name: 'Shell Interpolated Strings',
    scope: ['string.interpolated.shell', 'string.interpolated.dollar.shell'],
    settings: {
      foreground: sakuraMikuDerivative.hair.base,
    },
  },
];

export type TokenColors = typeof tokenColors;
