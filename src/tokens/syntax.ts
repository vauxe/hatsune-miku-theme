/**
 * Syntax Token Definitions
 *
 * Her voice in your code. Every token connects to something in Miku's world:
 * her teal hair, her concert lights, her negi, her headphone accents.
 * Where the connection is genuine, the role description says why.
 * Where it serves readability, that's stated honestly.
 */

import { role } from './role';
import type { SyntaxTokens } from './types';
import type { Primitives } from './primitives';

export function createSyntaxTokens(p: Primitives): SyntaxTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    // ═══ HER VOICE — F# Teal (180°) ═══
    keyword: role(
      'Her voice — every keyword speaks in Miku\'s teal',
      L.primary, C.comfortable, H.mikuTeal
    ),
    keywordControl: role(
      'Her voice, directing flow — if, for, while, return',
      L.primary, C.comfortable, H.mikuTeal
    ),
    keywordAlt: role(
      'Her voice, quieter — secondary keywords',
      L.secondary, C.comfortable, H.mikuTeal
    ),

    // ═══ THE LEADING TONE — F Green (150°) ═══
    storage: role(
      'Leading tone — declarations yearning toward the tonic',
      L.primary, C.comfortable, H.green
    ),
    storageModifier: role(
      'Supporting harmony — modifiers in magenta',
      L.primaryWarm, C.comfortable, H.magenta
    ),

    // ═══ THE DEEP — A Blue (270°) ═══
    type: role(
      'Depth — abstract definition and concrete instance',
      L.primary + 0.008, C.comfortable, H.blue
    ),
    typeParameter: role(
      'Generic potential — a type waiting to become',
      L.muted, C.muted, H.blue
    ),

    // ═══ HER VOICE, SHIFTING — G Cyan (210°) ═══
    enum: role(
      'Enumerated voice — a defined set of possibilities',
      L.primary, C.vibrant, H.cyan
    ),
    enumMember: role(
      'One possibility, chosen — enum value at a whisper',
      L.muted, C.muted, H.cyan
    ),

    // ═══ DUALITY — A# Violet (300°) ═══
    macro: role(
      'Distant magic — code that transforms code',
      L.muted + 0.005, C.muted, H.violet
    ),

    // ═══ WARM STAGE GLOW — D Orange (60°) ═══
    function: role(
      'Stage glow — the spotlight hits, the show begins',
      L.vibrantWarm + 0.004, C.vibrant, H.orange
    ),
    method: role(
      'Leading tone — methods flow toward the tonic',
      L.primary, C.comfortable, H.green
    ),

    // ═══ CONCERT LIGHTS — D# Gold (90°) ═══
    class: role(
      'Concert lights — structure emerging, architecture rising',
      L.vibrant, C.vibrant, H.gold
    ),
    interface: role(
      'Contract — a shape without substance, magic waiting',
      L.primaryWarm, C.comfortable, H.violet
    ),
    struct: role(
      'Concert lights — same family as class, structure in C',
      L.vibrant, C.vibrant, H.gold
    ),

    // ═══ FLOWING DATA — G Cyan (210°) ═══
    variable: role(
      'Her voice, shifting — data in motion, never the same twice',
      L.secondary, C.vibrant, H.cyan
    ),
    parameter: role(
      'The fifth — input flowing naturally to the tonic',
      L.primaryWarm, C.comfortable, H.red
    ),
    property: role(
      'Warm red — warmth reaching in from the world',
      L.vibrantWarm + 0.005, C.vibrant, H.red
    ),

    // ═══ GROWTH — E Lime (120°) ═══
    string: role(
      'Growth — literal truth, humble and fundamental',
      L.vibrant, C.vibrant, H.lime
    ),
    stringTemplate: role(
      'Growth, templated — structured expression',
      L.primary, C.comfortable, H.lime
    ),
    regex: role(
      'Pattern — gold-colored, matching structure in text',
      L.primary, C.comfortable, H.gold
    ),

    // ═══ OPEN SKY — G# Azure (240°) ═══
    number: role(
      'Open sky — constants of the universe, quietly immutable',
      L.muted, C.muted, H.azure
    ),
    boolean: role(
      'Binary truth — depth at its simplest, blue whisper',
      L.muted, C.muted, H.blue
    ),

    // ═══ CONSTANTS & MARKUP ═══
    constant: role(
      'Deep truth — immutable values, azure and certain',
      L.primary + 0.005, C.comfortable, H.azure
    ),
    tag: role(
      'Warm element — HTML/JSX structure, red stage presence',
      L.vibrantWarm + 0.005, C.vibrant, H.red
    ),
    attribute: role(
      'Stage glow — attributes in orange, modifying elements',
      L.primaryWarm, C.comfortable, H.orange
    ),

    // ═══ HER WHISPER — F# Teal at ppp ═══
    comment: role(
      'Her whisper — still teal, barely there, humming in the margins',
      L.muted - 0.010, C.gray, H.mikuTeal
    ),
    commentDoc: role(
      'Her soft voice — doc comments, present but never louder than keywords',
      L.muted - 0.010, C.muted - 0.010, H.mikuTeal
    ),

    // ═══ SUPPORTING HARMONY — B Magenta (330°) ═══
    operator: role(
      'Supporting harmony — magenta accents connecting everything',
      L.primaryWarm, C.comfortable, H.magenta
    ),
  };
}
