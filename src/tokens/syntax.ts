/**
 * Syntax Token Definitions
 *
 * Defines all syntax highlighting color roles using JzCzhz perceptual values.
 * Each token maps to a specific lightness/chroma/hue combination from primitives.
 */

import { role } from './role';
import type { SyntaxTokens } from './types';
import type { Primitives } from './primitives';

export function createSyntaxTokens(p: Primitives): SyntaxTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    // KEYWORDS - Miku signature teal
    keyword: role(
      'Primary keyword - Digital Diva signature',
      L.primary, C.comfortable, H.mikuTeal
    ),
    keywordControl: role(
      'Flow control keywords - slightly cooler',
      L.primary, C.comfortable, H.mikuTeal + 5
    ),
    keywordAlt: role(
      'Alternative keyword - dimmer variant',
      L.secondary, C.comfortable, H.mikuTeal
    ),

    // STORAGE / TYPES
    storage: role(
      'Storage keywords - fresh mint',
      L.primary, C.comfortable, H.mint
    ),
    storageModifier: role(
      'Storage modifiers - rose accent',
      L.primaryWarm, C.comfortable, H.rose
    ),
    type: role(
      'Type annotations - orchid',
      L.primary + 0.015, C.comfortable, H.orchid
    ),
    typeParameter: role(
      'Generic type parameters - muted sky',
      L.muted, C.muted, H.sky
    ),
    enum: role(
      'Enum names - ice cyan',
      L.primary, C.comfortable, H.ice
    ),
    enumMember: role(
      'Enum values - light rose',
      L.muted, C.muted, H.rose + 15
    ),
    macro: role(
      'Macros - muted periwinkle',
      L.muted, C.muted, H.periwinkle
    ),

    // FUNCTIONS - Gold (Magical Mirai wand)
    function: role(
      'Functions - vibrant gold',
      L.vibrant + 0.01, C.vibrant, H.gold
    ),
    method: role(
      'Methods - distinct from keyword',
      L.primary, C.comfortable, H.mint + 5
    ),

    // CLASSES - Negi lime / Pink accent
    class: role(
      'Classes - negi lime',
      L.vibrant - 0.01, C.vibrant, H.lime
    ),
    interface: role(
      'Interfaces - Miku pink',
      L.primaryWarm, C.comfortable, H.mikuPink
    ),
    struct: role(
      'Structs - same as class',
      L.vibrant, C.vibrant, H.lime
    ),

    // VARIABLES - Blue (shifted for keyword distinction)
    variable: role(
      'Variables - blue',
      L.primary - 0.01, C.comfortable, H.blue
    ),
    parameter: role(
      'Parameters - warm peach',
      L.primaryWarm, C.comfortable, H.peach
    ),
    property: role(
      'Properties - coral',
      L.primaryWarm, C.comfortable, H.coral
    ),

    // STRINGS - Mint green
    string: role(
      'Strings - vibrant mint',
      L.vibrant, C.vibrant, H.mint
    ),
    stringTemplate: role(
      'Template strings - shifted mint',
      L.primary, C.comfortable, H.mint + 10
    ),
    regex: role(
      'Regex patterns - warm',
      L.primaryWarm, C.comfortable, H.peach + 5
    ),

    // NUMBERS & LITERALS
    number: role(
      'Numbers - muted cyan',
      L.muted, C.muted, H.cyan
    ),
    boolean: role(
      'Booleans - muted orchid',
      L.muted, C.muted, H.orchid + 5
    ),

    // CONSTANTS / TAGS
    constant: role(
      'Constants - amber',
      L.primaryWarm, C.comfortable, H.amber
    ),
    tag: role(
      'HTML/JSX tags - coral',
      L.primaryWarm, C.comfortable, H.coral
    ),
    attribute: role(
      'Attributes - amber variant',
      L.primaryWarm, C.comfortable, H.amber - 5
    ),

    // COMMENTS
    comment: role(
      'Comments - gray-green',
      L.muted - 0.015, C.gray, H.lime
    ),
    commentDoc: role(
      'Doc comments - muted teal',
      L.muted, C.muted, H.mikuTeal
    ),

    // OPERATORS
    operator: role(
      'Operators - pink/magenta',
      L.primaryWarm, C.comfortable, H.mikuPink
    ),
  };
}
