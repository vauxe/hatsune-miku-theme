/**
 * Hatsune Miku Theme - Token Colors (Syntax Highlighting)
 *
 * TextMate token rules for syntax highlighting
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
  // COMMENTS
  // ===========================================================================
  {
    name: 'Comments (Silent - Background Layer)',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: {
      fontStyle: 'italic',
      foreground: '#6E9090',
    },
  },
  {
    name: 'Documentation Comments (Slightly Brighter)',
    scope: [
      'comment.block.documentation',
      'comment.line.documentation',
      'comment.block.javadoc',
      'storage.type.class.jsdoc',
      'entity.name.type.instance.jsdoc',
      'variable.other.jsdoc',
    ],
    settings: {
      fontStyle: '',
      foreground: '#7A9A9A',
    },
  },

  // ===========================================================================
  // KEYWORDS
  // ===========================================================================
  {
    name: 'Keywords (Identity - Miku Teal Bold)',
    scope: [
      'keyword',
      'storage.type',
      'storage.modifier',
      'keyword.control',
      'keyword.operator.new',
      'keyword.operator.expression',
      'keyword.operator.logical',
      'keyword.operator.sizeof',
      'keyword.operator.instanceof',
      'keyword.operator.typeof',
    ],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // OPERATORS & PUNCTUATION
  // ===========================================================================
  {
    name: 'Operators & Punctuation (Structure - Ghost Layer)',
    scope: [
      'keyword.operator',
      'punctuation',
      'meta.brace',
      'meta.delimiter',
      'meta.group.braces',
    ],
    settings: {
      foreground: `${teals.classic}70`,
      fontStyle: '',
    },
  },
  {
    name: 'Arithmetic Operators (Slightly More Visible)',
    scope: [
      'keyword.operator.arithmetic',
      'keyword.operator.assignment',
      'keyword.operator.comparison',
      'keyword.operator.relational',
    ],
    settings: {
      foreground: `${teals.classic}75`,
      fontStyle: '',
    },
  },

  // ===========================================================================
  // FUNCTIONS
  // ===========================================================================
  {
    name: 'Functions & Methods (Voice - Saturated Cyan)',
    scope: ['entity.name.function', 'support.function'],
    settings: {
      foreground: versionMapping.functions,
    },
  },

  // ===========================================================================
  // VARIABLES
  // ===========================================================================
  {
    name: 'Variables (Data - Miku Tinted)',
    scope: 'variable',
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'Function Parameters (Rhythm - Tinted Italic)',
    scope: 'variable.parameter',
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Member Properties/Fields (Interface - Miku Tinted Light)',
    scope: ['variable.other.property', 'variable.other.object.property'],
    settings: {
      foreground: '#85ADA5',
    },
  },

  // ===========================================================================
  // TYPES & CLASSES
  // ===========================================================================
  {
    name: 'Types, Classes, Interfaces (Structure - Ice Teal Bold)',
    scope: [
      'entity.name.type',
      'support.type',
      'support.class',
      'entity.other.inherited-class',
      'entity.name.class',
    ],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Type Parameters/Generics (Structure - Ice Teal Italic)',
    scope: 'entity.name.type.parameter',
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // CONSTANTS & NUMBERS
  // ===========================================================================
  {
    name: 'Constants, Numbers, Booleans (Rhythm - Pink)',
    scope: [
      'constant.numeric',
      'constant.language',
      'support.constant',
      'constant.character',
    ],
    settings: {
      foreground: character.headphones.cushion,
    },
  },
  {
    name: 'Named Constants (Pink Bold)',
    scope: 'constant.other.caps',
    settings: {
      foreground: character.headphones.cushion,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // STRINGS
  // ===========================================================================
  {
    name: 'Strings (Content - Negi Green)',
    scope: 'string',
    settings: {
      foreground: semantic.success,
    },
  },
  {
    name: 'String Escape Sequences (Accent - Pink)',
    scope: 'constant.character.escape',
    settings: {
      foreground: character.headphones.cushion,
    },
  },
  {
    name: 'Template String Expressions (Soft Pink)',
    scope: ['meta.template.expression', 'punctuation.definition.template-expression'],
    settings: {
      foreground: `${pinks.soft}90`,
    },
  },

  // ===========================================================================
  // DECORATORS & ANNOTATIONS
  // ===========================================================================
  {
    name: 'Decorators / Annotations (Meta - Amber Italic)',
    scope: ['meta.decorator', 'entity.name.function.decorator', 'punctuation.decorator'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // REGEX
  // ===========================================================================
  {
    name: 'RegEx (Feature - Hologram Purple)',
    scope: ['string.regexp'],
    settings: {
      foreground: hologram.purple,
    },
  },
  {
    name: 'RegEx Groups (Feature - Pink)',
    scope: [
      'punctuation.definition.group.regexp',
      'keyword.operator.or.regexp',
      'keyword.operator.quantifier.regexp',
    ],
    settings: {
      foreground: character.headphones.cushion,
    },
  },

  // ===========================================================================
  // INVALID & DEPRECATED
  // ===========================================================================
  {
    name: 'Invalid / Errors (Feature - Error Coral Underline)',
    scope: 'invalid',
    settings: {
      foreground: semantic.error,
      fontStyle: 'underline',
    },
  },
  {
    name: 'Deprecated (Warning - Amber Strikethrough)',
    scope: 'invalid.deprecated',
    settings: {
      foreground: semantic.warning,
      fontStyle: 'strikethrough',
    },
  },

  // ===========================================================================
  // JSON / YAML
  // ===========================================================================
  {
    name: 'JSON/YAML Keys (Structure - Neon Teal)',
    scope: ['support.type.property-name.json', 'entity.name.tag.yaml'],
    settings: {
      foreground: teals.neon,
    },
  },

  // ===========================================================================
  // HTML / XML
  // ===========================================================================
  {
    name: 'HTML/XML Tags (Structure - Teal Bold)',
    scope: 'entity.name.tag',
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'HTML/XML Attributes (Details - Cyan Italic)',
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: hologram.cyan,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // SELF / THIS
  // ===========================================================================
  {
    name: 'Self/This Keywords (Special - Pink Italic)',
    scope: ['variable.language.self', 'variable.language.this'],
    settings: {
      foreground: character.headphones.cushion,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // PYTHON
  // ===========================================================================
  {
    name: 'Python Magic Methods (Special - Saturated Cyan Bold)',
    scope: 'support.function.magic.python',
    settings: {
      foreground: versionMapping.functions,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // MARKDOWN
  // ===========================================================================
  {
    name: 'Markdown H1 (Headline - Pink Bold)',
    scope: [
      'markup.heading.1',
      'heading.1.markdown entity.name.section.markdown',
      'markup.heading.setext.1',
    ],
    settings: {
      foreground: character.headphones.cushion,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown H2 (Subheadline - Cyan Bold)',
    scope: [
      'markup.heading.2',
      'heading.2.markdown entity.name.section.markdown',
      'markup.heading.setext.2',
    ],
    settings: {
      foreground: hologram.cyan,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown H3 (Section - Amber)',
    scope: ['markup.heading.3', 'heading.3.markdown entity.name.section.markdown'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown H4 (Subsection - Teal)',
    scope: ['markup.heading.4', 'heading.4.markdown entity.name.section.markdown'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown H5 (Minor - Negi Green)',
    scope: ['markup.heading.5', 'heading.5.markdown entity.name.section.markdown'],
    settings: {
      foreground: semantic.success,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown H6 (Smallest - Secondary)',
    scope: ['markup.heading.6', 'heading.6.markdown entity.name.section.markdown'],
    settings: {
      foreground: greys.silver,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Heading Fallback',
    scope: ['markup.heading', 'entity.name.section'],
    settings: {
      foreground: character.headphones.cushion,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Links (Link - Cyan)',
    scope: ['markup.underline.link', 'string.other.link'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Markdown Code (Content - Negi Green)',
    scope: ['markup.inline.raw', 'markup.raw.block', 'markup.fenced_code.block'],
    settings: {
      foreground: semantic.success,
    },
  },
  {
    name: 'Markdown Bold (Emphasis - Amber Bold)',
    scope: ['markup.bold'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Markdown Italic (Emphasis - Cyan Italic)',
    scope: ['markup.italic'],
    settings: {
      foreground: hologram.cyan,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markdown Quote (Blockquote - Muted Italic)',
    scope: ['markup.quote'],
    settings: {
      foreground: greys.slate,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Markdown List (Structure - Teal)',
    scope: ['markup.list', 'punctuation.definition.list'],
    settings: {
      foreground: teals.classic,
    },
  },

  // ===========================================================================
  // CSS
  // ===========================================================================
  {
    name: 'CSS Classes (Structure - Teal)',
    scope: 'entity.other.attribute-name.class',
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'CSS IDs (Rhythm - Pink Bold)',
    scope: 'entity.other.attribute-name.id',
    settings: {
      foreground: character.headphones.cushion,
      fontStyle: 'bold',
    },
  },
  {
    name: 'CSS Properties (Structure - Teal)',
    scope: 'support.type.property-name.css',
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'CSS Values (Data - Miku Tinted)',
    scope: 'support.constant.property-value',
    settings: {
      foreground: foregrounds.primary,
    },
  },
  {
    name: 'CSS Units (Rhythm - Pink)',
    scope: 'keyword.other.unit',
    settings: {
      foreground: character.headphones.cushion,
    },
  },
  {
    name: 'CSS Pseudo (Cyan Italic)',
    scope: 'entity.other.attribute-name.pseudo',
    settings: {
      foreground: hologram.cyan,
      fontStyle: 'italic',
    },
  },
  {
    name: 'CSS/SCSS Variables (Cyan)',
    scope: ['variable.scss', 'variable.css'],
    settings: {
      foreground: hologram.cyan,
    },
  },

  // ===========================================================================
  // RUST
  // ===========================================================================
  {
    name: 'Rust Lifetime (Pink Italic)',
    scope: ['entity.name.type.lifetime.rust', 'punctuation.definition.lifetime.rust'],
    settings: {
      foreground: character.headphones.cushion,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Rust Macro (Amber Bold)',
    scope: ['entity.name.function.macro.rust', 'support.macro.rust'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Rust Attribute (Amber Italic)',
    scope: ['meta.attribute.rust'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // GO
  // ===========================================================================
  {
    name: 'Go Package (Teal)',
    scope: ['entity.name.package.go'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'Go Receiver (Pink Italic)',
    scope: ['variable.other.receiver.go'],
    settings: {
      foreground: character.headphones.cushion,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // C / C++
  // ===========================================================================
  {
    name: 'C Preprocessor (Pink)',
    scope: [
      'meta.preprocessor',
      'keyword.control.directive',
      'punctuation.definition.directive',
      'keyword.control.import',
    ],
    settings: {
      foreground: character.headphones.cushion,
    },
  },
  {
    name: 'C Macro Definition (Amber Bold)',
    scope: ['entity.name.function.preprocessor', 'entity.name.function.macro'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // SHELL
  // ===========================================================================
  {
    name: 'Shell Variable (Cyan)',
    scope: [
      'variable.other.normal.shell',
      'variable.other.positional.shell',
      'variable.other.special.shell',
      'variable.other.loop.shell',
      'variable.other.readwrite.shell',
    ],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Shell Variable Sigil (Cyan)',
    scope: ['punctuation.definition.variable.shell'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Shell Command Substitution (Teal)',
    scope: [
      'punctuation.definition.evaluation.backticks.shell',
      'punctuation.section.evaluation.begin.shell',
      'punctuation.section.evaluation.end.shell',
    ],
    settings: {
      foreground: teals.classic,
    },
  },

  // ===========================================================================
  // JSX / TSX
  // ===========================================================================
  {
    name: 'JSX Component Tag (Ice Teal Bold)',
    scope: 'support.class.component',
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'JSX Text (Miku Tinted)',
    scope: 'meta.jsx.children',
    settings: {
      foreground: foregrounds.primary,
    },
  },

  // ===========================================================================
  // TYPESCRIPT
  // ===========================================================================
  {
    name: 'TypeScript Type Annotation (Ice Teal)',
    scope: ['meta.type.annotation', 'keyword.operator.type.annotation'],
    settings: {
      foreground: versionMapping.types,
    },
  },
  {
    name: 'TypeScript Type Assertion (Ice Teal Italic)',
    scope: ['keyword.operator.type.annotation.ts', 'keyword.operator.type.annotation.tsx'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // SQL
  // ===========================================================================
  {
    name: 'SQL Keyword (Teal Bold)',
    scope: [
      'keyword.other.DML.sql',
      'keyword.other.DDL.sql',
      'keyword.other.sql',
      'keyword.other.data-integrity.sql',
    ],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'SQL Function (Saturated Cyan)',
    scope: [
      'support.function.sql',
      'support.function.aggregate.sql',
      'support.function.scalar.sql',
    ],
    settings: {
      foreground: versionMapping.functions,
    },
  },

  // ===========================================================================
  // PHP
  // ===========================================================================
  {
    name: 'PHP Variable (Cyan)',
    scope: 'variable.other.php',
    settings: {
      foreground: hologram.cyan,
    },
  },

  // ===========================================================================
  // RUBY / ELIXIR
  // ===========================================================================
  {
    name: 'Ruby/Elixir Symbols & Atoms (Pink)',
    scope: [
      'constant.other.symbol.ruby',
      'constant.other.symbol.elixir',
      'constant.other.keyword.elixir',
    ],
    settings: {
      foreground: character.headphones.cushion,
    },
  },
  {
    name: 'Ruby Instance/Block Variables (Cyan)',
    scope: ['variable.other.block.ruby', 'variable.other.readwrite.instance.ruby'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'Elixir Module (Ice Teal Bold)',
    scope: 'entity.name.type.module.elixir',
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Elixir Sigil (Cyan)',
    scope: 'string.quoted.other.sigil.elixir',
    settings: {
      foreground: hologram.cyan,
    },
  },

  // ===========================================================================
  // JAVA / KOTLIN
  // ===========================================================================
  {
    name: 'Java/Kotlin Annotation (Amber Italic)',
    scope: 'storage.type.annotation',
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Kotlin Annotation',
    scope: ['entity.name.type.annotation.kotlin', 'punctuation.definition.annotation.kotlin'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Kotlin Type Parameter',
    scope: ['entity.name.type.type-parameter.kotlin'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Kotlin Companion/Object',
    scope: ['keyword.other.kotlin'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // HASKELL
  // ===========================================================================
  {
    name: 'Haskell Type (Ice Teal Bold)',
    scope: ['entity.name.type.haskell', 'storage.type.haskell'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Haskell Type Variable (Ice Teal Italic)',
    scope: 'entity.name.type.type-variable.haskell',
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // DART
  // ===========================================================================
  {
    name: 'Dart Annotation (Amber Italic)',
    scope: 'meta.declaration.annotation.dart',
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // TOML / INI
  // ===========================================================================
  {
    name: 'TOML Key (Teal)',
    scope: ['keyword.key.toml', 'support.type.property-name.toml'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'TOML Table (Ice Teal Bold)',
    scope: ['entity.other.attribute-name.table.toml', 'support.type.property-name.table.toml'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'INI Section Header (Ice Teal Bold)',
    scope: ['entity.name.section.group-title.ini', 'punctuation.definition.entity.ini'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // DOCKERFILE
  // ===========================================================================
  {
    name: 'Dockerfile Keyword (Teal Bold)',
    scope: ['keyword.other.special-method.dockerfile'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // GRAPHQL
  // ===========================================================================
  {
    name: 'GraphQL Type (Ice Teal Bold)',
    scope: ['support.type.graphql', 'entity.name.type.graphql'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'GraphQL Field (Cyan)',
    scope: ['variable.graphql'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'GraphQL Directive (Amber Italic)',
    scope: ['entity.name.function.directive.graphql'],
    settings: {
      foreground: accents.amber,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // LUA
  // ===========================================================================
  {
    name: 'Lua Self (Pink Italic)',
    scope: ['variable.language.self.lua'],
    settings: {
      foreground: character.headphones.cushion,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // ZIG
  // ===========================================================================
  {
    name: 'Zig Builtin (Saturated Cyan Bold)',
    scope: ['variable.other.member.zig', 'support.function.zig'],
    settings: {
      foreground: versionMapping.functions,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // TERRAFORM
  // ===========================================================================
  {
    name: 'Terraform Resource Type (Ice Teal Bold)',
    scope: ['entity.name.type.terraform', 'entity.name.label.terraform'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // PROTOBUF
  // ===========================================================================
  {
    name: 'Protobuf Message (Ice Teal Bold)',
    scope: ['entity.name.class.message.protobuf'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Protobuf Field (Cyan)',
    scope: ['entity.name.variable.field.protobuf'],
    settings: {
      foreground: hologram.cyan,
    },
  },

  // ===========================================================================
  // LATEX
  // ===========================================================================
  {
    name: 'LaTeX Command (Teal Bold)',
    scope: ['support.function.latex', 'support.function.general.tex', 'keyword.control.tex'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'LaTeX Section (Pink Bold)',
    scope: ['entity.name.section.latex', 'support.function.section.latex'],
    settings: {
      foreground: character.headphones.cushion,
      fontStyle: 'bold',
    },
  },
  {
    name: 'LaTeX Environment (Amber)',
    scope: ['variable.parameter.function.latex', 'entity.name.function.environment.latex'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'LaTeX Math (Cyan)',
    scope: ['support.class.math.latex', 'string.other.math.latex', 'constant.other.math.latex'],
    settings: {
      foreground: hologram.cyan,
    },
  },
  {
    name: 'LaTeX Reference (Pink)',
    scope: ['constant.other.reference.citation.latex', 'constant.other.reference.label.latex'],
    settings: {
      foreground: character.headphones.cushion,
    },
  },

  // ===========================================================================
  // R
  // ===========================================================================
  {
    name: 'R Function (Saturated Cyan)',
    scope: ['entity.name.function.r', 'support.function.r'],
    settings: {
      foreground: versionMapping.functions,
    },
  },
  {
    name: 'R Variable Assignment (Teal)',
    scope: ['keyword.operator.assignment.r', 'keyword.other.r'],
    settings: {
      foreground: teals.classic,
    },
  },
  {
    name: 'R Parameter (Tint Italic)',
    scope: ['variable.parameter.r'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'italic',
    },
  },
  {
    name: 'R Package Namespace (Amber)',
    scope: ['entity.namespace.r', 'entity.name.namespace.r'],
    settings: {
      foreground: accents.amber,
    },
  },
  {
    name: 'R Special Variable (Pink Italic)',
    scope: ['variable.language.r'],
    settings: {
      foreground: character.headphones.cushion,
      fontStyle: 'italic',
    },
  },

  // ===========================================================================
  // VUE
  // ===========================================================================
  {
    name: 'Vue Directive (Teal Bold)',
    scope: [
      'entity.other.attribute-name.directive.vue',
      'keyword.control.conditional.vue',
      'keyword.control.loop.vue',
    ],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Vue Component Tag (Ice Teal Bold)',
    scope: ['entity.name.tag.component.vue', 'support.class.component.vue'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Vue Interpolation (Cyan)',
    scope: ['punctuation.definition.block.tag.vue', 'meta.interpolation.vue'],
    settings: {
      foreground: hologram.cyan,
    },
  },

  // ===========================================================================
  // SVELTE
  // ===========================================================================
  {
    name: 'Svelte Directive (Teal Bold)',
    scope: [
      'entity.other.attribute-name.directive.svelte',
      'keyword.control.svelte',
      'keyword.control.conditional.svelte',
      'keyword.control.loop.svelte',
    ],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Svelte Component Tag (Ice Teal Bold)',
    scope: ['support.class.component.svelte', 'entity.name.tag.svelte'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Svelte Block (Teal)',
    scope: [
      'punctuation.definition.block.begin.svelte',
      'punctuation.definition.block.end.svelte',
    ],
    settings: {
      foreground: teals.classic,
    },
  },

  // ===========================================================================
  // ASTRO
  // ===========================================================================
  {
    name: 'Astro Component (Ice Teal Bold)',
    scope: ['support.class.component.astro', 'entity.name.tag.astro'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Astro Frontmatter (Teal)',
    scope: ['punctuation.definition.block.astro'],
    settings: {
      foreground: teals.classic,
    },
  },

  // ===========================================================================
  // C#
  // ===========================================================================
  {
    name: 'C# LINQ Keywords',
    scope: ['keyword.query.linq.cs'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold italic',
    },
  },
  {
    name: 'C# Async Pattern',
    scope: ['keyword.other.await.cs', 'keyword.other.async.cs'],
    settings: {
      foreground: teals.classic,
      fontStyle: 'bold italic',
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
      foreground: teals.classic,
    },
  },

  // ===========================================================================
  // SWIFT
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
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },
  {
    name: 'Swift Self',
    scope: ['variable.language.swift'],
    settings: {
      foreground: character.headphones.cushion,
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
      foreground: versionMapping.types,
      fontStyle: 'bold',
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
      foreground: character.headphones.cushion,
    },
  },

  // ===========================================================================
  // POWERSHELL
  // ===========================================================================
  {
    name: 'PowerShell Cmdlet',
    scope: ['support.function.powershell', 'entity.name.function.powershell'],
    settings: {
      foreground: versionMapping.functions,
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
      foreground: versionMapping.types,
      fontStyle: 'bold',
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
      foreground: versionMapping.types,
      fontStyle: 'italic',
    },
  },
  {
    name: 'Objective-C Category',
    scope: ['entity.name.type.category.objc'],
    settings: {
      foreground: versionMapping.types,
      fontStyle: 'bold',
    },
  },

  // ===========================================================================
  // CLOJURE
  // ===========================================================================
  {
    name: 'Clojure Keyword',
    scope: ['constant.keyword.clojure'],
    settings: {
      foreground: character.headphones.cushion,
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
      foreground: versionMapping.functions,
      fontStyle: 'bold',
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
      fontStyle: 'bold',
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
      fontStyle: 'italic',
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
      foreground: character.headphones.cushion,
    },
  },
  {
    name: 'EJS Delimiter',
    scope: ['punctuation.section.embedded.ejs', 'entity.tag.tagbraces.ejs'],
    settings: {
      foreground: pinks.sekai,
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
      foreground: character.headphones.cushion,
      fontStyle: 'bold',
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
      foreground: teals.neon,
    },
  },
  {
    name: 'YAML Anchor',
    scope: ['entity.name.type.anchor.yaml', 'punctuation.definition.anchor.yaml'],
    settings: {
      foreground: character.headphones.cushion,
    },
  },
  {
    name: 'YAML Alias',
    scope: ['variable.other.alias.yaml', 'punctuation.definition.alias.yaml'],
    settings: {
      foreground: pinks.soft,
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
];

export type TokenColors = typeof tokenColors;
