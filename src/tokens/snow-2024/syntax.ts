/**
 * Snow Miku 2024 Syntax Token Definitions — Winter Delicacy
 *
 * Warm cream and chocolate carry the frame; frequent keywords bring
 * back the hair's muted blue-green counterweight. Cool data colors
 * remain distinct without pushing every hue to the sRGB boundary.
 *
 * The light grammar keeps its register ladder. Keyword, variable,
 * type, macro and operator use quieter chroma than the food colors;
 * the exact rendered values and contrast live in SCORE-SNOW-2024.
 *
 * Each hue maps to a gochisou element:
 *   - Keywords: hair-shadow celadon (the cool counterweight)
 *   - Variables: 270° blue (the winter window — widest cool gamut)
 *   - Parameters: 60° apricot (the egg-yolk brooch on the apron)
 *   - Functions: 90° turmeric (curry gold — the pot itself)
 *   - Classes: 120° wasabi (the pot's parsley — truest green she wears)
 *   - Strings: 150° matcha (green tea over rice)
 *   - Interfaces: 210° winter blue (the vacated seat, cool promise)
 *   - Constants: 240° azure (deep truth on peach)
 *   - Types: 300° violet (twilight plum)
 *   - Macros: 330° magenta (azuki — transformation)
 *   - Operators: 0° rose (connecting rhythm)
 */

import { role } from '../role';
import type { SyntaxTokens } from '../types';
import type { Primitives } from '../primitives';

export function createSyntaxTokens(p: Primitives): SyntaxTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // Keep the celadon inside sRGB so clipping cannot turn it into grass
  // green. Its depth preserves contrast on the editor and overlay surfaces.
  const tonicJz = L.sopranino + 0.0035;

  return {
    // === TONIC — Her Hair — muted hair-shadow register ===
    keyword: role(
      'Hair-shadow celadon — her hair on every line, the cool counterweight to the warm cloth',
      tonicJz, 0.035, 190
    ),
    keywordControl: role(
      'Hair-shadow celadon — directing flow: if, for, while, return',
      tonicJz, 0.035, 190
    ),
    keywordAlt: role(
      'Hair-shadow celadon — secondary keywords, same voice',
      tonicJz, 0.035, 190
    ),
    storage: role(
      'Hair-shadow celadon — declarations share the tonic',
      tonicJz, 0.035, 190
    ),
    storageModifier: role(
      'Hair-shadow celadon — modifiers share the tonic',
      tonicJz, 0.035, 190
    ),

    // === BLUE (270°) — The Winter Window — muted data ===
    variable: role(
      'Muted blue — data on cream, deep enough for chat file labels on House',
      L.soprano - 0.012, 0.065, H.minor3rd
    ),

    // === APRICOT (60°) — Egg-Yolk Brooch — soprano/mp ===
    parameter: role(
      'Apricot 60° — the egg-yolk brooch on the peach apron, register does the work',
      L.soprano, C.mp, H.minor6th
    ),
    property: role(
      'Apricot 60° — the world reaching in with warm hands',
      L.soprano, C.mp, H.minor6th
    ),

    // === TURMERIC (90°) — Curry Gold — soprano/mp ===
    function: role(
      'Turmeric 90° — curry gold, the pot itself, warm handwriting on the apron',
      L.soprano, C.mp, H.major6th
    ),
    method: role(
      'Turmeric 90° — callable warmth, same voice as function',
      L.soprano, C.mp, H.major6th
    ),
    tag: role(
      'Turmeric 90° — element invocation, structural',
      L.soprano, C.mp, H.major6th
    ),
    attribute: role(
      'Apricot 60° — HTML attributes, element properties',
      L.soprano, C.mp, H.minor6th
    ),

    // === WASABI (120°) — The Pot's Parsley — sopranino/mp ===
    class: role(
      'Wasabi 120° — the pot\'s parsley, truest green she wears (sampled 118°)',
      L.sopranino, C.mp, H.minor7th
    ),
    struct: role(
      'Wasabi 120° — same family as class, same organized energy',
      L.sopranino, C.mp, H.minor7th
    ),
    enum: role(
      'Wasabi 120° — a defined set, same voice',
      L.sopranino, C.mp, H.minor7th
    ),

    // === WINTER BLUE (210°) — The Vacated Seat — sopranino/mp ===
    interface: role(
      'Winter blue 210° — the seat the tonic vacated, a cool promise',
      L.sopranino, C.mp, H.minor2nd
    ),

    // === MATCHA (150°) — Green Tea Over Rice — sopranino/mp ===
    string: role(
      'Matcha 150° — green tea over rice, someone\'s truth (a step deeper: separates from the tonic keyword by lightness)',
      L.sopranino - 0.008, C.mp, H.major7th
    ),
    stringTemplate: role(
      'Matcha 150° — structured expression, same cool voice',
      L.sopranino, C.mp, H.major7th
    ),
    regex: role(
      'Matcha 150° — a pattern demands attention',
      L.sopranino, C.mp, H.major7th
    ),

    // === AZURE (240°) — Deep Truth — sopranino/mp ===
    constant: role(
      'Azure 240° — named and immutable, cool on peach',
      L.sopranino, C.mp, H.major2nd
    ),
    number: role(
      'Azure 240° — a literal value',
      L.sopranino, C.mp, H.major2nd
    ),
    boolean: role(
      'Azure 240° — truth at its simplest',
      L.sopranino, C.mp, H.major2nd
    ),
    enumMember: role(
      'Azure 240° — one possibility, chosen from the set',
      L.sopranino, C.mp, H.major2nd
    ),

    // === VIOLET (300°) — Twilight Plum — restrained inks ===
    type: role(
      'Violet 300° — twilight plum, the shape beneath',
      L.soprano, 0.075, H.major3rd
    ),
    typeParameter: role(
      'Violet 300° — a type waiting to become, muted for distinction from type',
      L.soprano, 0.035, H.major3rd
    ),

    // === MAGENTA (330°) — Azuki — muted ink ===
    macro: role(
      'Magenta 330° — azuki, code changing code',
      L.soprano, 0.055, H.perfect4th
    ),

    // === ROSE (0°) — Connecting Rhythm — dusty ink ===
    operator: role(
      'Rose 0° — connecting rhythm between the notes',
      L.soprano, 0.035, H.tritone
    ),

    // === DEPARTURES — comments and punctuation ===

    comment: role(
      'Celadon whisper 180° — steam between the lines',
      L.alto - 0.010, C.pp + 0.005, H.mikuTeal
    ),
    commentDoc: role(
      'Celadon soft 180° — slightly deeper steam',
      L.mezzo, C.pp + 0.005, H.mikuTeal
    ),

    punctuation: role(
      'Celadon structure 180° — connective tissue, one step above comments',
      L.mezzo - 0.004, C.p, H.mikuTeal
    ),

    // === TONIC — variableLanguage ===
    variableLanguage: role(
      'Hair-shadow celadon — tonic like keywords, italic "it\'s me"',
      tonicJz, 0.035, 190
    ),
  };
}
