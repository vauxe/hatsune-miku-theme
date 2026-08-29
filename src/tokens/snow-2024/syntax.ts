/**
 * Snow Miku 2024 Syntax Token Definitions — Winter Delicacy
 *
 * The Score on Peach.
 *
 * Tonic at 180° sage celadon — her hair, come home. Against a uniformly
 * warm room the tonic is the only cool voice: ~120° of hue separation
 * from the peach canvas. In the artwork her hair is the coolest object
 * in the frame; in the editor, keywords are.
 *
 * The 12-tone chromatic scale places hues at standard 30° intervals
 * from the tonic at F#=180° — the dark theme's grid, voiced light.
 * Cool syntax hues stay available for data tokens: syntax is the
 * plated food, allowed vivid (和洋折衷 — restrained base, vivid garnish).
 *
 * Two-tier lightness carries over from the light grammar: sopranino
 * (0.079) for the 120°–240° arc, soprano (0.100) for the rest.
 * C.mp (0.120) clips to the gamut boundary per hue, delivering peak
 * sRGB chroma automatically.
 *
 * Each hue maps to a gochisou element:
 *   - Keywords: 180° celadon (her hair — the coolest thing in the room)
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

  // ===================================================================
  // TWO-TIER ENSEMBLE — uniform mp dynamic, natural gamut variation
  //
  //   sopranino 0.079 — 120° 150° 180° 210° 240° — the cool arc
  //   soprano   0.100 — 0° 60° 90° 270° 300° 330° — the warm arc + blue/violet/magenta
  //
  // All ensemble tokens at mp (0.120).
  // Departures (comment, punctuation) keep their own registers.
  //
  // The tonic family sits a hair below sopranino: the celadon
  // findMatchHighlight tint is same-hue, and the dip holds the
  // compound floor there (2026 precedent — interface at sopranino−0.001
  // for the same reason).
  // ===================================================================

  const tonicJz = L.sopranino - 0.0085;

  return {
    // === TONIC (180°) — Her Hair — sopranino−0.002/mp ===
    keyword: role(
      'Celadon 180° — her hair on every line, the only cool thing in the room',
      tonicJz, C.mp, H.mikuTeal
    ),
    keywordControl: role(
      'Celadon 180° — directing flow: if, for, while, return',
      tonicJz, C.mp, H.mikuTeal
    ),
    keywordAlt: role(
      'Celadon 180° — secondary keywords, same voice',
      tonicJz, C.mp, H.mikuTeal
    ),
    storage: role(
      'Celadon 180° — declarations share the tonic',
      tonicJz, C.mp, H.mikuTeal
    ),
    storageModifier: role(
      'Celadon 180° — modifiers share the tonic',
      tonicJz, C.mp, H.mikuTeal
    ),

    // === BLUE (270°) — The Winter Window — soprano/mp ===
    variable: role(
      'Blue 270° — the winter window, data in motion, near-complementary to cream (deepened a step: chat file labels read on the sage House)',
      L.soprano - 0.012, C.mp, H.minor3rd
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

    // === VIOLET (300°) — Twilight Plum — soprano/mp, typeParam soprano/p ===
    type: role(
      'Violet 300° — twilight plum, the shape beneath',
      L.soprano, C.mp, H.major3rd
    ),
    typeParameter: role(
      'Violet 300° — a type waiting to become, muted for distinction from type',
      L.soprano, C.p, H.major3rd
    ),

    // === MAGENTA (330°) — Azuki — soprano/mp ===
    macro: role(
      'Magenta 330° — azuki, code changing code',
      L.soprano, C.mp, H.perfect4th
    ),

    // === ROSE (0°) — Connecting Rhythm — soprano/mp ===
    operator: role(
      'Rose 0° — connecting rhythm between the notes',
      L.soprano, C.mp, H.tritone
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
      'Celadon 180° — tonic like keywords, italic "it\'s me"',
      tonicJz, C.mp, H.mikuTeal
    ),
  };
}
