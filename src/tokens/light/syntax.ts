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
 * Ensemble rule: sopranino/mp for all primary syntax tokens.
 * One lightness register, one dynamic — hue alone carries meaning.
 * mp at Cz 0.120 clips to per-hue sRGB gamut max automatically,
 * delivering the most vivid color each hue can produce at sopranino Jz.
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

  // Interface hue: 180° canonical teal — no named field in HueValues
  const INTERFACE_HUE = 180;

  // ===================================================================
  // ENSEMBLE: sopranino/mp for all primary tokens.
  // One Jz (0.080), one Cz (0.120 → gamut-clipped per hue).
  // Hue alone carries semantic meaning.
  // ===================================================================
  return {
    // === TONIC (210°) — Her Hair ===
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

    // === BLUE (270°) — Display Case Glass ===
    variable: role(
      'Blue 270° — display case glass, data in motion',
      L.sopranino, C.mp, H.major2nd
    ),

    // === ORANGE (60°) — Baked Peach ===
    parameter: role(
      'Orange 60° — baked peach, warmth entering from outside',
      L.sopranino, C.mp, H.minor6th
    ),
    property: role(
      'Orange 60° — the world reaching in with warm hands',
      L.sopranino, C.mp, H.minor6th
    ),

    // === GOLD (90°) — Butter Croissant ===
    function: role(
      'Gold 90° — butter croissant, warm action from the oven',
      L.sopranino, C.mp, H.major6th
    ),
    method: role(
      'Gold 90° — callable warmth, same voice as function',
      L.sopranino, C.mp, H.major6th
    ),
    tag: role(
      'Gold 90° — element invocation, structural',
      L.sopranino, C.mp, H.major6th
    ),
    attribute: role(
      'Orange 60° — HTML attributes, element properties',
      L.sopranino, C.mp, H.minor6th
    ),

    // === LIME (120°) — Pistachio Cream ===
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

    // === CANONICAL TEAL (180°) — One Breath From Home ===
    interface: role(
      'Canonical teal 180° — one breath from tonic',
      L.sopranino, C.mp, INTERFACE_HUE
    ),

    // === GREEN (150°) — Mint Leaf ===
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

    // === AZURE (240°) — Shopfront Blue ===
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

    // === VIOLET (300°) — Twilight Through the Window ===
    type: role(
      'Violet 300° — twilight through the shop window, the shape beneath',
      L.sopranino, C.mp, H.minor3rd
    ),
    typeParameter: role(
      'Violet 300° — a type waiting to become, one step lighter',
      L.treble, C.mp, H.minor3rd
    ),

    // === MAGENTA (330°) — Raspberry Macaron ===
    macro: role(
      'Magenta 330° — raspberry macaron, code changing code',
      L.sopranino, C.mp, H.major3rd
    ),

    // === ROSE (0°) — Strawberry Glaze ===
    operator: role(
      'Rose 0° — strawberry glaze, connecting rhythm',
      L.sopranino, C.mp, H.tritone
    ),

    // === DEPARTURES — comments and punctuation ===

    comment: role(
      'Tonic whisper 210° — her voice fading into cream, Lc ~46',
      L.alto - 0.005, C.pp, H.mikuTeal
    ),
    commentDoc: role(
      'Tonic soft 210° — her voice, visibly cyan, Lc ~49',
      L.mezzo + 0.005, C.pp, H.mikuTeal
    ),

    punctuation: role(
      'Tonic ghost 210° — bar lines, seen through not at, Lc ~47',
      L.alto - 0.005, C.ppp, H.mikuTeal
    ),

    // === TONIC — variableLanguage ===
    variableLanguage: role(
      'Tonic cyan 210° — tonic like keywords, italic "it\'s me"',
      L.sopranino, C.mp, H.mikuTeal
    ),
  };
}
