/**
 * Light Syntax Token Definitions — Snow Miku 2026: Shiawase Patisserie
 *
 * The Score on Cream.
 *
 * Tonic at 210° cyan — her hair, the first color on every line.
 * On a warm cream canvas, tonic cyan sings with temperature contrast:
 * cool voice on warm ground, like her cyan cape against the cream dress.
 *
 * The 12-tone chromatic scale places hues at standard 30° intervals
 * from the tonic at G=210°. No tunings — the warm/cool spatial split
 * provides all the distinction the theme needs.
 *
 * Two-tier lightness: sopranino (0.079) for cool hues, soprano (0.100)
 * for warm hues. Spread 0.021. C.mp (0.120) clips to the gamut
 * boundary per hue, delivering peak sRGB chroma automatically.
 * Lc range 67–77 on cream. Compound-safe on all overlays.
 *
 * Each hue maps to a patisserie element:
 *   - Keywords: 210° tonic cyan (her hair — the first stroke on every line)
 *   - Variables: 270° blue (display case glass — data in motion)
 *   - Parameters: 60° orange (baked peach — warmth entering)
 *   - Functions: 90° gold (butter croissant — warm action)
 *   - Classes: 120° lime (pistachio cream — organized garnish)
 *   - Strings: 150° green (mint leaf — someone's truth)
 *   - Interfaces: 180° canonical teal (#39C5BB — one breath from home)
 *   - Constants: 240° azure (shopfront blue — deep truth)
 *   - Types: 300° violet (twilight through the shop window)
 *   - Macros: 330° magenta (raspberry macaron — transformation)
 *   - Operators: 0° rose (strawberry glaze — connecting rhythm)
 */

import { role } from '../role';
import type { SyntaxTokens } from '../types';
import type { Primitives } from '../primitives';

export function createSyntaxTokens(p: Primitives): SyntaxTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // ===================================================================
  // TWO-TIER ENSEMBLE — uniform mp dynamic, natural gamut variation
  //
  // Two Jz tiers, one dynamic. hex() clips to the sRGB gamut
  // boundary per hue — the most vivid color each hue can produce
  // at its assigned register, automatically.
  //
  //   sopranino 0.079 — 120° 150° 180° 210° 240° — Lc 74–77
  //   soprano   0.100 — 0° 60° 90° 270° 300° 330° — Lc 67–76
  //
  // All ensemble tokens at mp (0.120).
  // Departures (comment, punctuation) keep their own registers.
  // ===================================================================

  return {
    // === TONIC (210°) — Her Hair — sopranino/mp, Lc ~76 ===
    keyword: role(
      'Tonic cyan 210° — her hair on every line, the first color you see',
      L.sopranino, C.mp, H.mikuTeal
    ),
    keywordControl: role(
      'Tonic cyan 210° — directing flow: if, for, while, return',
      L.sopranino, C.mp, H.mikuTeal
    ),
    keywordAlt: role(
      'Tonic cyan 210° — secondary keywords, same voice',
      L.sopranino, C.mp, H.mikuTeal
    ),
    storage: role(
      'Tonic cyan 210° — declarations share the tonic',
      L.sopranino, C.mp, H.mikuTeal
    ),
    storageModifier: role(
      'Tonic cyan 210° — modifiers share the tonic',
      L.sopranino, C.mp, H.mikuTeal
    ),

    // === BLUE (270°) — Display Case Glass — soprano/mp, Lc ~76 ===
    variable: role(
      'Blue 270° — display case glass, data in motion',
      L.soprano, C.mp, H.major2nd
    ),

    // === ORANGE (60°) — Baked Peach — soprano/mp, Lc ~70 ===
    parameter: role(
      'Orange 60° — baked peach, warmth entering from outside',
      L.soprano, C.mp, H.minor6th
    ),
    property: role(
      'Orange 60° — the world reaching in with warm hands',
      L.soprano, C.mp, H.minor6th
    ),

    // === GOLD (90°) — Butter Croissant — soprano/mp, Lc ~67 ===
    function: role(
      'Gold 90° — butter croissant, warm action from the oven',
      L.soprano, C.mp, H.major6th
    ),
    method: role(
      'Gold 90° — callable warmth, same voice as function',
      L.soprano, C.mp, H.major6th
    ),
    tag: role(
      'Gold 90° — element invocation, structural',
      L.soprano, C.mp, H.major6th
    ),
    attribute: role(
      'Orange 60° — HTML attributes, element properties',
      L.soprano, C.mp, H.minor6th
    ),

    // === LIME (120°) — Pistachio Cream — sopranino/mp, Lc ~75 ===
    class: role(
      'Lime 120° — pistachio cream, organized garnish',
      L.sopranino, C.mp, H.minor7th
    ),
    struct: role(
      'Lime 120° — same family as class, same organized energy',
      L.sopranino, C.mp, H.minor7th
    ),
    enum: role(
      'Lime 120° — a defined set, same voice',
      L.sopranino, C.mp, H.minor7th
    ),

    // === CANONICAL TEAL (180°) — One Breath From Home — sopranino/mp, Lc ~75 ===
    interface: role(
      'Canonical teal 180° — one breath from tonic',
      L.sopranino, C.mp, 180
    ),

    // === GREEN (150°) — Mint Leaf — sopranino/mp, Lc ~74 ===
    string: role(
      'Green 150° — mint leaf, someone\'s truth fresh from the garden',
      L.sopranino, C.mp, H.major7th
    ),
    stringTemplate: role(
      'Green 150° — structured expression, same cool voice',
      L.sopranino, C.mp, H.major7th
    ),
    regex: role(
      'Green 150° — a pattern demands attention',
      L.sopranino, C.mp, H.major7th
    ),

    // === AZURE (240°) — Shopfront Blue — sopranino/mp, Lc ~77 ===
    constant: role(
      'Azure 240° — shopfront blue, named and immutable',
      L.sopranino, C.mp, H.minor2nd
    ),
    number: role(
      'Azure 240° — a literal value',
      L.sopranino, C.mp, H.minor2nd
    ),
    boolean: role(
      'Azure 240° — truth at its simplest',
      L.sopranino, C.mp, H.minor2nd
    ),
    enumMember: role(
      'Azure 240° — one possibility, chosen from the set',
      L.sopranino, C.mp, H.minor2nd
    ),

    // === VIOLET (300°) — Twilight — soprano/mp, typeParam soprano/p for distinction ===
    type: role(
      'Violet 300° — twilight through the shop window, the shape beneath',
      L.soprano, C.mp, H.minor3rd
    ),
    typeParameter: role(
      'Violet 300° — a type waiting to become, muted for distinction from type',
      L.soprano, C.p, H.minor3rd
    ),

    // === MAGENTA (330°) — Raspberry Macaron — soprano/mp, Lc ~73 ===
    macro: role(
      'Magenta 330° — raspberry macaron, code changing code',
      L.soprano, C.mp, H.major3rd
    ),

    // === ROSE (0°) — Strawberry Glaze — soprano/mp, Lc ~72 ===
    operator: role(
      'Rose 0° — strawberry glaze, connecting rhythm',
      L.soprano, C.mp, H.tritone
    ),

    // === DEPARTURES — comments and punctuation ===

    comment: role(
      'Tonic whisper 210° — her voice between the lines',
      L.alto - 0.010, C.pp + 0.005, H.mikuTeal
    ),
    commentDoc: role(
      'Tonic soft 210° — her voice, visibly cyan',
      L.mezzo, C.pp + 0.005, H.mikuTeal
    ),

    punctuation: role(
      'Tonic structure 210° — connective tissue, the rhythm between notes',
      L.mezzo, C.p, H.mikuTeal
    ),

    // === TONIC — variableLanguage ===
    variableLanguage: role(
      'Tonic cyan 210° — tonic like keywords, italic "it\'s me"',
      L.sopranino, C.mp, H.mikuTeal
    ),
  };
}
