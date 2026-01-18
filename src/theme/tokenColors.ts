/**
 * Hatsune Miku Theme - Token Colors (Syntax Highlighting)
 *
 * "Extreme Spectrum" Strategy:
 * Utilizing the full history of Miku colors (Sekai, Racing, Snow, Mirai)
 * to create a rich, distinguishable, and aesthetic "Sheet Music" for code.
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
  projectSekai,
  racingMiku,
  snowMiku,
  magicalMirai,
  mikuExpo,
  mikuNT,
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
  // COMMENTS - The Whisper
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
  // KEYWORDS - The Structure (Teals & Cyans)
  //Bindings the code together like Miku's outfit
  // ===========================================================================
  {
    name: 'Control Keywords',
    scope: ['keyword.control', 'keyword.control.flow', 'keyword.control.import'],
    settings: {
      foreground: teals.classic, // #39C5BB - Main Miku Color for Control
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
  // FUNCTIONS - The Voice
  // ===========================================================================
  {
    name: 'User Functions',
    scope: ['entity.name.function', 'meta.function-call'],
    settings: {
      foreground: teals.neon, // #5DE4DB - Neon Teal for Functions (Active)
    },
  },
  {
    name: 'Library/Support Functions',
    scope: ['support.function', 'support.function.console'],
    settings: {
      foreground: hologram.purple, // #B388FF - Glitch Purple for system calls (Lc 60+)
    },
  },
  {
    name: 'Methods',
    scope: ['entity.name.function.member'],
    settings: {
      foreground: teals.tint, // #B2EBE7 - Pale Teal for Methods
    },
  },

  // ===========================================================================
  // CLASSES & TYPES - The Stage
  // ===========================================================================
  {
    name: 'User Classes',
    scope: ['entity.name.type.class', 'entity.name.class'],
    settings: {
      foreground: snowMiku.y2011.winterBlue, // #87CEEB - Sky Blue for Class
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
      foreground: hologram.purple, // #B388FF - High contrast for Library Types
    },
  },
  {
    name: 'Interfaces',
    scope: ['entity.name.type.interface'],
    settings: {
      foreground: cyans.ice, // #84FFFF - High brightness Cyan for Interfaces
      fontStyle: 'italic',
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
      foreground: projectSekai.leoneedMembers.ichika, // #33AAEE
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
  // VARIABLES & PROPERTIES - The Costume
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
      foreground: snowMiku.y2011.mittens, // #ADD8E6 - Mitten Blue for Properties
    },
  },
  {
    name: 'Parameters',
    scope: ['variable.parameter'],
    settings: {
      foreground: pinks.soft, // #FF80AB - Soft Pink for Parameters
      fontStyle: 'italic',
    },
  },
  {
    name: 'Constants',
    scope: ['variable.other.constant', 'constant.language'],
    settings: {
      foreground: pinks.soft, // #FF80AB - Soft Pink for Constants (Lc 60+)
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // DATA & LITERALS - The Music
  // ===========================================================================
  {
    name: 'Strings',
    scope: ['string', 'string.quoted.double', 'string.quoted.single'],
    settings: {
      foreground: semantic.success, // #9CCC65 - Negi Green
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
      foreground: accents.orange, // #FFAB40 - Bright Orange (Lc 60+)
    },
  },
  {
    name: 'Booleans',
    scope: ['constant.language.boolean'],
    settings: {
      foreground: magicalMirai.y2014.vibrantPink, // #FF4081 - Vibrant Pink for True/False
      fontStyle: 'bold',
    },
  },
  {
    name: 'Regex',
    scope: ['string.regexp'],
    settings: {
      foreground: semantic.error, // #FF5370 - Distinct error/regex
    },
  },
  {
    name: 'Escape Sequences',
    scope: ['constant.character.escape'],
    settings: {
      foreground: hologram.purple, // #B388FF - Glitch Purple
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
      foreground: teals.classic, // #39C5BB - Classic Miku for Tags
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
      foreground: mikuExpo.y2026.neonPink, // #FF1493 - Neon Pink Headings
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
  // HASKELL - Vivid Bad Squad (Street/Cyber)
  // ===========================================================================
  {
    name: 'Haskell Type',
    scope: ['entity.name.type.haskell', 'storage.type.haskell'],
    settings: {
      foreground: pinks.hot, // #FF4081
    },
  },
  {
    name: 'Haskell Type Variable',
    scope: 'entity.name.type.type-variable.haskell',
    settings: {
      foreground: projectSekai.vividBadSquadMembers.an, // #00BBDD
    },
  },

  // ===========================================================================
  // DART - Sky & Cloud
  // ===========================================================================
  {
    name: 'Dart Annotation',
    scope: 'meta.declaration.annotation.dart',
    settings: {
      foreground: mikuExpo.y2026.skyBlue,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // TOML / INI - NightCord
  // ===========================================================================
  {
    name: 'TOML Key',
    scope: ['keyword.key.toml', 'support.type.property-name.toml'],
    settings: {
      foreground: projectSekai.nightcordMembers.kanade, // #BB66CC
    },
  },
  {
    name: 'TOML Table',
    scope: ['entity.other.attribute-name.table.toml', 'support.type.property-name.table.toml'],
    settings: {
      foreground: projectSekai.nightcordMembers.kanade, // #BB66CC
    },
  },
  {
    name: 'INI Section Header',
    scope: ['entity.name.section.group-title.ini', 'punctuation.definition.entity.ini'],
    settings: {
      foreground: hologram.purple, // #B388FF
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
  // GRAPHQL - Magical Mirai
  // ===========================================================================
  {
    name: 'GraphQL Type',
    scope: ['support.type.graphql', 'entity.name.type.graphql'],
    settings: {
      foreground: magicalMirai.y2025.resonanceCyan,
    },
  },
  {
    name: 'GraphQL Field',
    scope: ['variable.graphql'],
    settings: {
      foreground: magicalMirai.y2025.harmonyPink,
    },
  },
  {
    name: 'GraphQL Directive',
    scope: ['entity.name.function.directive.graphql'],
    settings: {
      foreground: magicalMirai.y2025.connectionPurple,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // LUA - Moon
  // ===========================================================================
  {
    name: 'Lua Self',
    scope: ['variable.language.self.lua'],
    settings: {
      foreground: mikuNT.ui.ntCyan,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // ZIG - Energy
  // ===========================================================================
  {
    name: 'Zig Builtin',
    scope: ['variable.other.member.zig', 'support.function.zig'],
    settings: {
      foreground: racingMiku.y2019.neonCyan,
    },
  },

  // ===========================================================================
  // TERRAFORM - Earth
  // ===========================================================================
  {
    name: 'Terraform Resource Type',
    scope: ['entity.name.type.terraform', 'entity.name.label.terraform'],
    settings: {
      foreground: semantic.success, // Nature Green
    },
  },

  // ===========================================================================
  // PROTOBUF - Structure
  // ===========================================================================
  {
    name: 'Protobuf Message',
    scope: ['entity.name.class.message.protobuf'],
    settings: {
      foreground: projectSekai.units.moreMoreJump, // Mint Green
    },
  },
  {
    name: 'Protobuf Field',
    scope: ['entity.name.variable.field.protobuf'],
    settings: {
      foreground: projectSekai.moreMoreJumpMembers.minori, // Soft Orange
    },
  },

  // ===========================================================================
  // LATEX - Academic
  // ===========================================================================
  {
    name: 'LaTeX Command',
    scope: ['support.function.latex', 'support.function.general.tex', 'keyword.control.tex'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'LaTeX Section',
    scope: ['entity.name.section.latex', 'support.function.section.latex'],
    settings: {
      foreground: pinks.hot,
      fontStyle: 'bold',
    },
  },
  {
    name: 'LaTeX Environment',
    scope: ['variable.parameter.function.latex', 'entity.name.function.environment.latex'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'LaTeX Math',
    scope: ['support.class.math.latex', 'string.other.math.latex', 'constant.other.math.latex'],
    settings: {
      foreground: cyans.electric,
    },
  },
  {
    name: 'LaTeX Reference',
    scope: ['constant.other.reference.citation.latex', 'constant.other.reference.label.latex'],
    settings: {
      foreground: hologram.purple,
    },
  },

  // ===========================================================================
  // R - Statistics
  // ===========================================================================
  {
    name: 'R Function',
    scope: ['entity.name.function.r', 'support.function.r'],
    settings: {
      foreground: versionMapping.functions,
    },
  },
  {
    name: 'R Variable Assignment',
    scope: ['keyword.operator.assignment.r', 'keyword.other.r'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'R Parameter',
    scope: ['variable.parameter.r'],
    settings: {
      foreground: pinks.soft,
      fontStyle: 'italic',
    },
  },
  {
    name: 'R Package Namespace',
    scope: ['entity.namespace.r', 'entity.name.namespace.r'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'R Special Variable',
    scope: ['variable.language.r'],
    settings: {
      foreground: hologram.cyan,
    },
  },

  // ===========================================================================
  // VUE - Leo/need
  // ===========================================================================
  {
    name: 'Vue Directive',
    scope: [
      'entity.other.attribute-name.directive.vue',
      'keyword.control.conditional.vue',
      'keyword.control.loop.vue',
    ],
    settings: {
      foreground: projectSekai.leoneedMembers.ichika,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Vue Component Tag',
    scope: ['entity.name.tag.component.vue', 'support.class.component.vue'],
    settings: {
      foreground: projectSekai.leoneedMembers.ichika,
    },
  },
  {
    name: 'Vue Interpolation',
    scope: ['punctuation.definition.block.tag.vue', 'meta.interpolation.vue'],
    settings: {
      foreground: projectSekai.leoneedMembers.saki,
    },
  },

  // ===========================================================================
  // SVELTE - Wonderlands
  // ===========================================================================
  {
    name: 'Svelte Directive',
    scope: [
      'entity.other.attribute-name.directive.svelte',
      'keyword.control.svelte',
      'keyword.control.conditional.svelte',
      'keyword.control.loop.svelte',
    ],
    settings: {
      foreground: projectSekai.wonderlandsShowtimeMembers.emu, // Pink
      fontStyle: 'bold',
    },
  },
  {
    name: 'Svelte Component Tag',
    scope: ['support.class.component.svelte', 'entity.name.tag.svelte'],
    settings: {
      foreground: projectSekai.wonderlandsShowtimeMembers.nene, // Green
    },
  },
  {
    name: 'Svelte Block',
    scope: [
      'punctuation.definition.block.begin.svelte',
      'punctuation.definition.block.end.svelte',
    ],
    settings: {
      foreground: projectSekai.wonderlandsShowtimeMembers.tsukasa, // Orange
    },
  },

  // ===========================================================================
  // ASTRO - Space
  // ===========================================================================
  {
    name: 'Astro Component',
    scope: ['support.class.component.astro', 'entity.name.tag.astro'],
    settings: {
      foreground: mikuExpo.y2025.asiaCyan,
    },
  },
  {
    name: 'Astro Frontmatter',
    scope: ['punctuation.definition.block.astro'],
    settings: {
      foreground: hologram.purple,
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
  // SWIFT - Apple
  // ===========================================================================
  {
    name: 'Swift Attribute',
    scope: ['meta.attribute.swift', 'storage.modifier.attribute.swift'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Swift Type',
    scope: ['support.type.swift', 'entity.name.type.swift'],
    settings: {
      foreground: projectSekai.units.moreMoreJump,
    },
  },
  {
    name: 'Swift Self',
    scope: ['variable.language.swift'],
    settings: {
      foreground: pinks.soft,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // SCALA
  // ===========================================================================
  {
    name: 'Scala Type',
    scope: ['entity.name.class.scala', 'entity.name.type.scala'],
    settings: {
      foreground: snowMiku.y2011.winterBlue, // #87CEEB - Sky Blue for Class
    },
  },
  {
    name: 'Scala Annotation',
    scope: ['meta.annotation.scala'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Scala Symbol',
    scope: ['constant.other.symbol.scala'],
    settings: {
      foreground: hologram.purple,
    },
  },

  // ===========================================================================
  // POWERSHELL
  // ===========================================================================
  {
    name: 'PowerShell Cmdlet',
    scope: ['support.function.powershell', 'entity.name.function.powershell'],
    settings: {
      foreground: mikuNT.ui.ntCyan,
    },
  },
  {
    name: 'PowerShell Variable',
    scope: ['variable.other.readwrite.powershell', 'punctuation.definition.variable.powershell'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'PowerShell Operator',
    scope: ['keyword.operator.comparison.powershell', 'keyword.operator.logical.powershell'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'PowerShell Attribute',
    scope: ['support.function.attribute.powershell', 'entity.other.attribute.powershell'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },
  {
    name: 'PowerShell Type',
    scope: ['storage.type.powershell'],
    settings: {
      foreground: snowMiku.y2011.winterBlue, // #87CEEB - Sky Blue for Class
    },
  },

  // ===========================================================================
  // OBJECTIVE-C
  // ===========================================================================
  {
    name: 'Objective-C Method',
    scope: ['entity.name.function.objc', 'meta.function-call.objc'],
    settings: {
      foreground: versionMapping.functions,
    },
  },
  {
    name: 'Objective-C Property',
    scope: ['meta.property-with-attributes.objc', 'keyword.other.property.attribute.objc'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Objective-C Protocol',
    scope: ['entity.name.type.protocol.objc', 'meta.protocol-list.objc'],
    settings: {
      foreground: snowMiku.y2021.glowCyan,
    },
  },
  {
    name: 'Objective-C Category',
    scope: ['entity.name.type.category.objc'],
    settings: {
      foreground: snowMiku.y2011.winterBlue, // #87CEEB - Sky Blue for Class
    },
  },

  // ===========================================================================
  // CLOJURE
  // ===========================================================================
  {
    name: 'Clojure Keyword',
    scope: ['constant.keyword.clojure'],
    settings: {
      foreground: hologram.purple,
    },
  },
  {
    name: 'Clojure Symbol',
    scope: ['meta.symbol.clojure'],
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'Clojure Function Definition',
    scope: ['entity.name.function.clojure'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Clojure Macro',
    scope: ['entity.name.function.macro.clojure'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Clojure Namespace',
    scope: ['entity.name.namespace.clojure'],
    settings: {
      foreground: teals.classic,
    },
  },

  // ===========================================================================
  // F#
  // ===========================================================================
  {
    name: 'F# Keyword',
    scope: ['keyword.fsharp', 'keyword.other.fsharp'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'F# Function',
    scope: ['entity.name.function.fsharp'],
    settings: {
      foreground: versionMapping.functions,
    },
  },
  {
    name: 'F# Type',
    scope: ['entity.name.type.fsharp', 'support.type.fsharp'],
    settings: {
      foreground: versionMapping.types,
    },
  },
  {
    name: 'F# Module',
    scope: ['entity.name.section.fsharp'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'F# Computation Expression',
    scope: ['keyword.other.computation-expression.fsharp'],
    settings: {
      foreground: hologram.purple,
    },
  },
  {
    name: 'F# Attribute',
    scope: ['support.function.attribute.fsharp'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // HANDLEBARS / EJS / PUG
  // ===========================================================================
  {
    name: 'Handlebars Expression',
    scope: ['meta.tag.template.expression.handlebars', 'support.constant.handlebars'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'Handlebars Helper',
    scope: ['entity.name.function.handlebars', 'support.function.builtin.handlebars'],
    settings: {
      foreground: versionMapping.functions,
    },
  },
  {
    name: 'Handlebars Variable',
    scope: ['variable.parameter.handlebars'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Handlebars Block',
    scope: ['keyword.control.handlebars', 'keyword.other.handlebars'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'EJS Delimiter',
    scope: ['punctuation.section.embedded.ejs', 'entity.tag.tagbraces.ejs'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'EJS Control',
    scope: ['keyword.control.ejs'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Pug Tag',
    scope: ['entity.name.tag.pug', 'entity.name.tag.jade'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Pug Class',
    scope: ['entity.other.attribute-name.class.pug', 'entity.other.attribute-name.class.jade'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'Pug ID',
    scope: ['entity.other.attribute-name.id.pug', 'entity.other.attribute-name.id.jade'],
    settings: {
      foreground: pinks.accessory,
    },
  },
  {
    name: 'Pug Interpolation',
    scope: ['meta.embedded.line.pug', 'meta.embedded.line.jade'],
    settings: {
      foreground: hologram.cyan,
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
  // ADDITIONAL STRING VARIANTS
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
      foreground: semantic.success,
    },
  },
  {
    name: 'Shell Interpolated Strings',
    scope: ['string.interpolated.shell', 'string.interpolated.dollar.shell'],
    settings: {
      foreground: semantic.success,
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
      foreground: versionMapping.types,
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
      foreground: versionMapping.types,
    },
  },
  {
    name: 'Entity Name Interface',
    scope: ['entity.name.type.interface', 'entity.name.interface'],
    settings: {
      foreground: versionMapping.types,
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
      foreground: versionMapping.types,
    },
  },

  // ===========================================================================
  // KEYWORD DECLARATION VARIANTS
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
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Keyword Namespace/Import',
    scope: ['keyword.namespace', 'keyword.import', 'keyword.export'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Keyword Type',
    scope: ['keyword.type', 'keyword.other.type'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // SUPPORT VARIANTS
  // ===========================================================================
  {
    name: 'Support Variable',
    scope: ['support.variable', 'support.variable.property'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'Support Module',
    scope: ['support.module', 'support.module.node'],
    settings: {
      foreground: teals.classic,
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
