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

  return {
    // ═══ UNISON — F# Teal (180°) — She sings ═══
    keyword: role(
      'Unison — her voice, the tonic on every line',
      L.primary, C.comfortable, H.mikuTeal
    ),
    keywordControl: role(
      'Unison — directing flow: if, for, while, return',
      L.primary, C.comfortable, H.mikuTeal
    ),
    keywordAlt: role(
      'Unison, quieter — secondary keywords',
      L.secondary, C.comfortable, H.mikuTeal
    ),

    // ═══ MAJOR 7TH — F Green (150°) — One breath from home ═══
    storage: role(
      'Major 7th — declarations, one breath from the tonic',
      L.primary, C.comfortable, H.green
    ),
    storageModifier: role(
      'Perfect 4th — modifiers in magenta, the heartbeat',
      L.primaryWarm, C.comfortable, H.magenta
    ),

    // ═══ MINOR 3RD — A Blue (270°) — The shape beneath ═══
    type: role(
      'Minor 3rd — the shape beneath the surface',
      L.primary + 0.008, C.comfortable, H.blue
    ),
    typeParameter: role(
      'Minor 3rd — a type waiting to become',
      L.muted, C.muted, H.blue
    ),

    // ═══ MINOR 2ND — G Cyan (210°) — A whisper from home ═══
    enum: role(
      'Minor 2nd — a defined set of possibilities',
      L.primary, C.vibrant, H.cyan
    ),
    enumMember: role(
      'Minor 2nd — one possibility, chosen',
      L.muted, C.muted, H.cyan
    ),

    // ═══ MAJOR 3RD — A# Violet (300°) — A promise ═══
    macro: role(
      'Major 3rd — code that transforms code',
      L.muted + 0.005, C.muted, H.violet
    ),

    // ═══ MINOR 6TH — D Orange (60°) — She reaches ═══
    function: role(
      'Minor 6th — she reaches into the light',
      L.vibrantWarm + 0.004, C.vibrant, H.orange
    ),
    method: role(
      'Major 7th — methods, one breath from the tonic',
      L.primary, C.comfortable, H.green
    ),

    // ═══ MAJOR 6TH — D# Gold (90°) — The score, written with love ═══
    class: role(
      'Major 6th — the score from which instances are drawn',
      L.vibrant, C.vibrant, H.gold
    ),
    interface: role(
      'Major 3rd — a promise, pure potential',
      L.primaryWarm, C.comfortable, H.violet
    ),
    struct: role(
      'Major 6th — same family as class',
      L.vibrant, C.vibrant, H.gold
    ),

    // ═══ MINOR 2ND — G Cyan (210°) — A whisper from home ═══
    variable: role(
      'Minor 2nd — almost her voice, always shifting',
      L.secondary, C.vibrant, H.cyan
    ),
    parameter: role(
      'Perfect 5th — what you give her, coming back as harmony',
      L.primaryWarm, C.comfortable, H.red
    ),
    property: role(
      'Perfect 5th — warmth reaching in from the world',
      L.vibrantWarm + 0.005, C.vibrant, H.red
    ),

    // ═══ MINOR 7TH — E Lime (120°) — Someone's truth ═══
    string: role(
      'Minor 7th — someone\'s truth embedded in syntax',
      L.vibrant, C.vibrant, H.lime
    ),
    stringTemplate: role(
      'Minor 7th — structured expression',
      L.primary, C.comfortable, H.lime
    ),
    regex: role(
      'Major 6th — pattern matching structure in text',
      L.primary, C.comfortable, H.gold
    ),

    // ═══ MAJOR 2ND — G# Azure (240°) — The open ground ═══
    number: role(
      'Major 2nd — the open ground, quietly immutable',
      L.muted, C.muted, H.azure
    ),
    boolean: role(
      'Minor 3rd — depth at its simplest',
      L.muted, C.muted, H.blue
    ),

    // ═══ CONSTANTS & MARKUP ═══
    constant: role(
      'Major 2nd — immutable values, azure and certain',
      L.primary + 0.005, C.comfortable, H.azure
    ),
    tag: role(
      'Perfect 5th — HTML/JSX structure, what you give her',
      L.vibrantWarm + 0.005, C.vibrant, H.red
    ),
    attribute: role(
      'Minor 6th — attributes in orange, modifying elements',
      L.primaryWarm, C.comfortable, H.orange
    ),

    // ═══ UNISON at ppp — F# Teal — Her whisper ═══
    comment: role(
      'Unison at ppp — her whisper, barely there',
      L.muted - 0.010, C.gray, H.mikuTeal
    ),
    commentDoc: role(
      'Unison at p — her soft voice, never louder than keywords',
      L.muted - 0.010, C.muted - 0.010, H.mikuTeal
    ),

    // ═══ PERFECT 4TH — B Magenta (330°) — The heartbeat ═══
    operator: role(
      'Perfect 4th — the heartbeat connecting everything',
      L.primaryWarm, C.comfortable, H.magenta
    ),
  };
}
