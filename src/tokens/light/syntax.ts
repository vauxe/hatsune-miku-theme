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
 * Ensemble rule: vivid color, per-hue gamut optimization.
 * Each hue gets its optimal Jz for maximum chroma in sRGB.
 * Three tiers: lead (darker, keywords/variable), ensemble (sweet
 * spot for vivid color), and soft (lighter, less common tokens).
 *
 * Each hue maps to a patisserie element:
 *   - Keywords: 210° tonic cyan (her hair — the first stroke on every line)
 *   - Variables: 270° azure (display case glass — data in motion)
 *   - Parameters: 60° orange (baked peach — warmth entering)
 *   - Functions: 90° gold (butter croissant — warm action)
 *   - Classes: 120° lime (pistachio cream — organized garnish)
 *   - Strings: 150° green (mint leaf — someone's truth)
 *   - Interfaces: 180° canonical teal (#39C5BB — one breath from home)
 *   - Constants: 240° cyan (azure shopfront — deep truth)
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
  // PER-HUE REGISTER ASSIGNMENT — each hue at its sRGB peak-chroma Jz.
  // mp at Cz 0.120 clips to per-hue gamut max automatically.
  // Cool hues peak dark (sopranino/treble), warm hues peak light (alto).
  // ===================================================================
  return {
    // === TONIC (210°) — Her Hair — sopranino Lc=67 ===
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

    // === BLUE (270°) — Display Case Glass — peak ~0.091 → sopranino ===
    variable: role(
      'Blue 270° — display case glass, data in motion',
      L.sopranino, C.mp, H.azure
    ),

    // === ORANGE (60°) — Baked Peach — soprano Lc=65 ===
    parameter: role(
      'Orange 60° — baked peach, warmth entering from outside',
      L.soprano, C.mp, H.orange
    ),
    property: role(
      'Orange 60° — the world reaching in with warm hands',
      L.soprano, C.mp, H.orange
    ),

    // === GOLD (90°) — Butter Croissant — soprano Lc=61 ===
    function: role(
      'Gold 90° — butter croissant, warm action from the oven',
      L.soprano, C.mp, H.gold
    ),
    method: role(
      'Gold 90° — callable warmth, same voice as function',
      L.soprano, C.mp, H.gold
    ),
    tag: role(
      'Gold 90° — element invocation, structural',
      L.soprano, C.mp, H.gold
    ),
    attribute: role(
      'Orange 60° — HTML attributes, element properties',
      L.soprano, C.mp, H.orange
    ),

    // === LIME (120°) — Pistachio Cream — treble Lc=65 ===
    class: role(
      'Lime 120° — pistachio cream, organized garnish',
      L.treble, C.mp, H.lime
    ),
    struct: role(
      'Lime 120° — same family as class, same organized energy',
      L.treble, C.mp, H.lime
    ),
    enum: role(
      'Lime 120° — a defined set, one step darker',
      L.treble, C.mp, H.lime
    ),

    // === CANONICAL TEAL (180°) — One Breath From Home — Lc 45 needs Jz ≤0.087 → sopranino ===
    interface: role(
      'Canonical teal 180° — one breath from tonic',
      L.sopranino, C.mp, INTERFACE_HUE
    ),

    // === GREEN (150°) — Mint Leaf — sopranino Lc=67 ===
    string: role(
      'Green 150° — mint leaf, someone\'s truth fresh from the garden',
      L.sopranino, C.mp, H.green
    ),
    stringTemplate: role(
      'Green 150° — structured expression, same cool voice',
      L.sopranino, C.mp, H.green
    ),
    regex: role(
      'Green 150° — a pattern demands attention, darker',
      L.sopranino, C.mp, H.green
    ),

    // === AZURE (240°) — Shopfront Blue — peak ~0.097 → treble ===
    constant: role(
      'Azure 240° — shopfront blue, named and immutable',
      L.treble, C.mp, H.cyan
    ),
    number: role(
      'Azure 240° — a literal value, darker for weight',
      L.sopranino, C.mp, H.cyan
    ),
    boolean: role(
      'Azure 240° — truth at its simplest, darker for weight',
      L.sopranino, C.mp, H.cyan
    ),
    enumMember: role(
      'Azure 240° — one possibility, chosen from the set',
      L.treble, C.mp, H.cyan
    ),

    // === VIOLET (300°) — Twilight Through the Window — peak ~0.109 → soprano ===
    type: role(
      'Violet 300° — twilight through the shop window, the shape beneath',
      L.soprano, C.mp, H.blue
    ),
    typeParameter: role(
      'Violet 300° — a type waiting to become, one step lighter',
      L.mezzo, C.mp, H.blue
    ),

    // === MAGENTA (330°) — Raspberry Macaron — Lc 45 needs Jz ≤0.131 → mezzo ===
    macro: role(
      'Magenta 330° — raspberry macaron, code changing code',
      L.mezzo, C.mp, H.violet
    ),

    // === ROSE (0°) — Strawberry Glaze — peak ~0.121 → mezzo ===
    operator: role(
      'Rose 0° — strawberry glaze, connecting rhythm',
      L.mezzo, C.mp, H.rose
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
