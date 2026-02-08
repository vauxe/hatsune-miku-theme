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

    // ═══ THE LEADING TONE — F Mint (150°) ═══
    storage: role(
      'Leading tone — declarations yearning toward the tonic',
      L.primary, C.comfortable, H.mint
    ),
    storageModifier: role(
      'Headphone accent — modifiers in her pink',
      L.primaryWarm, C.comfortable, H.pink
    ),

    // ═══ DUALITY — A Violet (270°) ═══
    type: role(
      'Duality — abstract definition and concrete instance',
      L.primary + 0.008, C.comfortable, H.violet
    ),
    typeParameter: role(
      'Generic potential — a type waiting to become',
      L.muted, C.muted, H.violet
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

    // ═══ META-MAGIC — A# Magenta (300°) ═══
    macro: role(
      'Distant magic — code that transforms code',
      L.muted + 0.005, C.muted, H.magenta
    ),

    // ═══ CONCERT LIGHTS — D Gold (60°) ═══
    function: role(
      'Concert lights — the spotlight hits, the show begins',
      L.vibrantWarm + 0.003, C.vibrant, H.gold
    ),
    method: role(
      'Leading tone — methods flow toward the tonic',
      L.primary, C.comfortable, H.mint
    ),

    // ═══ GROWTH — D# Lime (90°) ═══
    class: role(
      'Growth — structure emerging, architecture rising',
      L.vibrant, C.vibrant, H.lime
    ),
    interface: role(
      'Contract — a shape without substance, magic waiting',
      L.primaryWarm, C.comfortable, H.magenta
    ),
    struct: role(
      'Growth — same family as class, structure in C',
      L.vibrant, C.vibrant, H.lime
    ),

    // ═══ FLOWING DATA — G Cyan (210°) ═══
    variable: role(
      'Her voice, shifting — data in motion, never the same twice',
      L.secondary, C.comfortable, H.cyan
    ),
    parameter: role(
      'The fifth — input flowing naturally to the tonic',
      L.primaryWarm, C.comfortable, H.coral
    ),
    property: role(
      'Warm coral — warmth reaching in from the world',
      L.vibrantWarm + 0.005, C.vibrant, H.coral
    ),

    // ═══ THE NEGI — E Green (120°) ═══
    string: role(
      'The negi — humble, fundamental, iconic through love',
      L.vibrant, C.vibrant, H.green
    ),
    stringTemplate: role(
      'The negi, templated — structured expression',
      L.primary, C.comfortable, H.green
    ),
    regex: role(
      'Pattern — growth-colored, matching structure in text',
      L.primary, C.comfortable, H.lime
    ),

    // ═══ THE DEEP — G# Blue (240°) ═══
    number: role(
      'Deep sea — constants of the universe, quietly immutable',
      L.muted, C.muted, H.blue
    ),
    boolean: role(
      'Binary truth — duality at its simplest, violet whisper',
      L.muted, C.muted, H.violet
    ),

    // ═══ CONSTANTS & MARKUP ═══
    constant: role(
      'Deep truth — immutable values, blue and certain',
      L.primary + 0.005, C.comfortable, H.blue
    ),
    tag: role(
      'Warm element — HTML/JSX structure, coral stage presence',
      L.vibrantWarm + 0.005, C.vibrant, H.coral
    ),
    attribute: role(
      'Stage lights — attributes in gold, modifying elements',
      L.primaryWarm, C.comfortable, H.gold
    ),

    // ═══ HER WHISPER — F# Teal at ppp ═══
    comment: role(
      'Her whisper — still teal, barely there, humming in the margins',
      L.muted - 0.010, C.gray, H.mikuTeal
    ),
    commentDoc: role(
      'Her soft voice — doc comments, a little more present',
      L.muted, C.muted, H.mikuTeal
    ),

    // ═══ HEADPHONE HARMONY — B Pink (330°) ═══
    operator: role(
      'Headphone harmony — pink accents connecting everything',
      L.primaryWarm, C.comfortable, H.pink
    ),
  };
}
