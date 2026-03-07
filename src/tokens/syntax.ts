/**
 * Syntax Token Definitions
 *
 * Twelve tones, each an interval from Miku's tonic (F# = 180° teal).
 * The role description names the interval and its feeling.
 * See docs/DESIGN.md Section 4 "The Twelve Tones" for the full mapping.
 */

import { role } from './role';
import type { SyntaxTokens } from './types';
import type { Primitives } from './primitives';

export function createSyntaxTokens(p: Primitives): SyntaxTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // ═══════════════════════════════════════════════════════════════════════════
  // LIGHT THEME — Snow Miku 2024 Pâtisserie
  //
  // Per-token scientifically-optimized JzCzhz values. Each hue placed to
  // maximize minimum ΔEz across critical adjacency pairs on warm cream canvas.
  // Cool hues (180–325°) POP via simultaneous contrast — structural landmarks.
  // Warm hues (20–155°) FLOW with the canvas — data you read.
  // Variables near-achromatic (Cz 0.030) — maximum chroma contrast with all.
  // ═══════════════════════════════════════════════════════════════════════════
  if (p.polarity === 'light') {
    return {
      // ═══════════════════════════════════════════════════════════════════
      // COLOR-FIRST STRATEGY — vivid, clearly distinguishable colors
      //
      // Jz 0.090 opens sRGB gamut wide for maximum chromaticity.
      // Teal (200°) and sage (160°) are gamut-limited but pop via
      // simultaneous contrast on the warm cream canvas.
      // Rich-gamut hues (violet, red, amber) pushed to their natural max.
      //
      // Primary tier:  Jz 0.090  (Lc ~71-82) — most tokens
      // Ink tier:      Jz 0.080  (Lc ~83)    — variables (darker, achromatic)
      // Quiet tier:    Jz 0.100  (Lc ~74)    — numbers, booleans, type params
      // Comment tier:  Jz 0.115  (Lc ~67)    — comments
      // ═══════════════════════════════════════════════════════════════════

      // STRUCTURE — Teal 200° (gamut-limited but pops as cool on warm canvas)
      keyword: role('Teal keyword — cool anchor on warm canvas', 0.090, 0.080, 200),
      keywordControl: role('Teal control — if, for, while, return', 0.090, 0.080, 200),
      keywordAlt: role('Teal secondary — slightly quieter', 0.093, 0.070, 200),
      storage: role('Teal storage — same structural family', 0.090, 0.080, 200),
      storageModifier: role('Magenta modifier — vivid connective', 0.090, 0.110, 345),

      // TYPE SYSTEM — Violet 305° / Rose-Violet 320° (full gamut, very vivid)
      type: role('Violet type — vivid landmark', 0.090, 0.120, 305),
      typeParameter: role('Quiet violet type param', 0.100, 0.080, 305),
      enum: role('Blue-cyan enum — identity', 0.090, 0.100, 235),
      enumMember: role('Quiet blue-cyan enum member', 0.100, 0.065, 235),
      macro: role('Quiet rose-violet macro', 0.100, 0.070, 320),

      // ACTION — Amber 80° (rich gamut at Jz 0.090)
      function: role('Amber function — warm action', 0.090, 0.100, 80),
      method: role('Amber method — same family as function', 0.093, 0.090, 80),

      // NAMED — Yellow-Green 125° (rich gamut)
      class: role('Yellow-green class — max separation from type', 0.090, 0.100, 125),
      interface: role('Rose-violet interface — type family shifted', 0.090, 0.110, 320),
      struct: role('Yellow-green struct — same as class', 0.090, 0.100, 125),

      // DATA — darker for ink-like reading
      variable: role('Warm ink variable — near-achromatic, flows as text', 0.080, 0.035, 50),
      parameter: role('Red parameter — vivid input', 0.090, 0.120, 25),
      property: role('Red-brown property — reaching in', 0.093, 0.110, 25),

      // LITERAL — Sage 160° / Blue 260°
      string: role('Sage string — organic green', 0.090, 0.090, 160),
      stringTemplate: role('Sage template — muted structural', 0.093, 0.070, 160),
      regex: role('Yellow-green regex — pattern', 0.093, 0.090, 125),
      number: role('Quiet blue number — immutable', 0.100, 0.075, 260),
      boolean: role('Quiet blue boolean — binary truth', 0.100, 0.065, 260),
      constant: role('Blue constant — vivid immutable', 0.090, 0.100, 260),
      tag: role('Red tag — HTML/JSX structure', 0.090, 0.120, 25),
      attribute: role('Amber attribute — modifying elements', 0.093, 0.090, 80),

      // META — Lavender 280° / Teal 200°
      comment: role('Lavender-gray comment — whisper', 0.115, 0.035, 280),
      commentDoc: role('Teal doc comment — subtle voice', 0.113, 0.030, 200),
      punctuation: role('Ghost warm punctuation — bar lines', 0.145, 0.012, 55),

      // CONNECTIVE — Magenta 345° (vivid heartbeat)
      operator: role('Magenta operator — vivid heartbeat', 0.090, 0.110, 345),
    };
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // DARK THEME — The Score (DESIGN.md Ch6)
  // All ensemble tokens: soprano/mp. Hue alone carries semantic meaning.
  // ═══════════════════════════════════════════════════════════════════════════
  return {
    // ═══ UNISON — F# Teal (180°) — Her voice ═══
    keyword: role(
      'Unison — her voice, the tonic on every line',
      L.soprano, C.mp, H.mikuTeal
    ),
    keywordControl: role(
      'Unison — directing flow: if, for, while, return',
      L.soprano, C.mp, H.mikuTeal
    ),
    keywordAlt: role(
      'Unison — secondary keywords',
      L.soprano, C.mp, H.mikuTeal
    ),
    storage: role(
      'Unison — declarations share the tonic',
      L.soprano, C.mp, H.mikuTeal
    ),
    storageModifier: role(
      'Unison — modifiers share the tonic',
      L.soprano, C.mp, H.mikuTeal
    ),

    // ═══ MINOR 2ND — G Cyan (210°) — Almost her, shifting ═══
    variable: role(
      'Minor 2nd — almost her voice, always shifting',
      L.soprano, C.mp, H.cyan
    ),

    // ═══ PERFECT 5TH — C# Red (30°) — What you give her ═══
    parameter: role(
      'Perfect 5th — what you give her, coming back as harmony',
      L.soprano, C.mp, H.red
    ),
    property: role(
      'Perfect 5th — warmth reaching in from the world',
      L.soprano, C.mp, H.red
    ),

    // ═══ MINOR 6TH — D Orange (60°) — She reaches ═══
    function: role(
      'Minor 6th — she reaches into the light',
      L.soprano, C.mp, H.orange
    ),
    attribute: role(
      'Perfect 5th — HTML attributes, element properties',
      L.soprano, C.mp, H.red
    ),

    // ═══ MAJOR 6TH — D# Gold (90°) — Written with love ═══
    class: role(
      'Major 6th — the score from which instances are drawn',
      L.soprano, C.mp, H.gold
    ),
    struct: role(
      'Major 6th — same family as class',
      L.soprano, C.mp, H.gold
    ),
    interface: role(
      'Major 6th — a promise, pure potential',
      L.soprano, C.mp, H.gold
    ),
    enum: role(
      'Major 6th — a defined set of possibilities',
      L.soprano, C.mp, H.gold
    ),

    // ═══ MINOR 7TH — E Lime (120°) — Someone's truth ═══
    string: role(
      'Minor 7th — someone\'s truth embedded in syntax',
      L.soprano, C.mp, H.lime
    ),
    stringTemplate: role(
      'Minor 7th — structured expression',
      L.soprano, C.mp, H.lime
    ),
    regex: role(
      'Minor 7th — pattern matching structure in text',
      L.soprano, C.mp, H.lime
    ),

    // ═══ MAJOR 7TH — F Green (150°) — One breath from home ═══
    method: role(
      'Major 7th — methods, one breath from home',
      L.soprano, C.mp, H.green
    ),

    // ═══ MAJOR 2ND — G# Azure (240°) — The open ground ═══
    constant: role(
      'Major 2nd — immutable values, azure and certain',
      L.soprano, C.mp, H.azure
    ),
    number: role(
      'Major 2nd — the open ground, quietly immutable',
      L.soprano, C.mp, H.azure
    ),
    boolean: role(
      'Major 2nd — truth at its simplest',
      L.soprano, C.mp, H.azure
    ),
    enumMember: role(
      'Major 2nd — one possibility, chosen',
      L.soprano, C.mp, H.azure
    ),

    // ═══ MINOR 3RD — A Blue (270°) — The shape beneath ═══
    type: role(
      'Minor 3rd — the shape beneath the surface',
      L.soprano, C.mp, H.blue
    ),
    typeParameter: role(
      'Minor 3rd — a type waiting to become',
      L.soprano, C.mp, H.blue
    ),

    // ═══ MAJOR 3RD — A# Violet (300°) — Transformation ═══
    macro: role(
      'Major 3rd — code that transforms code',
      L.soprano, C.mp, H.violet
    ),

    // ═══ PERFECT 5TH — C# Red (30°) — Markup tags ═══
    tag: role(
      'Perfect 5th — HTML/JSX tags, structural markup',
      L.soprano, C.mp, H.red
    ),

    // ═══ PERFECT 4TH — B Magenta (330°) — The heartbeat ═══
    operator: role(
      'Perfect 4th — the heartbeat connecting everything',
      L.soprano, C.mp, H.magenta
    ),

    // ═══ DEPARTURES — register shifts from the ensemble ═══

    // Whisper layer — alto (−2), reduced dynamics
    comment: role(
      'Whisper — her voice, barely there',
      L.alto, C.ppp, H.mikuTeal
    ),
    commentDoc: role(
      'Whisper — her soft voice, visibly teal',
      L.alto, C.pp, H.mikuTeal
    ),

    // Ghost layer — countertenor (−3), minimal dynamics
    punctuation: role(
      'Ghost — bar lines, seen through not at',
      L.countertenor, C.ppp, H.mikuTeal
    ),
  };
}
