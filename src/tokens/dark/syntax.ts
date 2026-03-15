/**
 * Dark Syntax Token Definitions
 *
 * Twelve tones, each an interval from Miku's tonic (F# = 180 teal).
 * The role description names the interval and its feeling.
 */

import { role } from '../role';
import type { SyntaxTokens } from '../types';
import type { Primitives } from '../primitives';

export function createSyntaxTokens(p: Primitives): SyntaxTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // ===================================================================
  // DARK THEME -- The Score
  // All ensemble tokens: soprano/mp. Hue alone carries semantic meaning.
  // ===================================================================
  return {
    // === UNISON -- F# Teal (180) -- Her voice ===
    keyword: role(
      'Unison -- her voice, the tonic on every line',
      L.soprano, C.mp, H.mikuTeal
    ),
    keywordControl: role(
      'Unison -- directing flow: if, for, while, return',
      L.soprano, C.mp, H.mikuTeal
    ),
    keywordAlt: role(
      'Unison -- secondary keywords',
      L.soprano, C.mp, H.mikuTeal
    ),
    storage: role(
      'Unison -- declarations share the tonic',
      L.soprano, C.mp, H.mikuTeal
    ),
    storageModifier: role(
      'Unison -- modifiers share the tonic',
      L.soprano, C.mp, H.mikuTeal
    ),

    // === MINOR 2ND -- G Cyan (210) -- Almost her, shifting ===
    // Tuned +1 dynamic (mp->mf) for distinction: cyan sits between teal (180)
    // and azure (240) -- 30 gaps need chroma contrast to clear DEz thresholds.
    variable: role(
      'Minor 2nd/mf -- almost her voice, always shifting (louder for distinction)',
      L.soprano, C.mf, H.minor2nd
    ),

    // === PERFECT 5TH -- C# Red (30) -- What you give her ===
    parameter: role(
      'Perfect 5th -- what you give her, coming back as harmony',
      L.soprano, C.mp, H.perfect5th
    ),
    property: role(
      'Perfect 5th -- warmth reaching in from the world',
      L.soprano, C.mp, H.perfect5th
    ),

    // === MINOR 6TH -- D Orange (60) -- She reaches ===
    function: role(
      'Minor 6th -- she reaches into the light',
      L.soprano, C.mp, H.minor6th
    ),
    method: role(
      'Minor 6th -- callable code, same voice as function',
      L.soprano, C.mp, H.minor6th
    ),
    tag: role(
      'Minor 6th/p -- element invocation, structural (quieter callable)',
      L.soprano, C.p, H.minor6th
    ),
    attribute: role(
      'Perfect 5th -- HTML attributes, element properties',
      L.soprano, C.mp, H.perfect5th
    ),

    // === MAJOR 6TH -- D# Gold (90) -- Written with love ===
    class: role(
      'Major 6th -- the score from which instances are drawn',
      L.soprano, C.mp, H.major6th
    ),
    struct: role(
      'Major 6th -- same family as class',
      L.soprano, C.mp, H.major6th
    ),
    enum: role(
      'Major 6th/mf -- a defined set of possibilities (brighter than class)',
      L.soprano, C.mf, H.major6th
    ),

    // === MAJOR 7TH -- F Green (150) -- One breath from home ===
    interface: role(
      'Major 7th -- a promise straining toward implementation',
      L.soprano, C.mp, H.major7th
    ),

    // === MINOR 7TH -- E Lime (120) -- Someone's truth ===
    string: role(
      'Minor 7th -- someone\'s truth embedded in syntax',
      L.soprano, C.mp, H.minor7th
    ),
    stringTemplate: role(
      'Minor 7th -- structured expression',
      L.soprano, C.mp, H.minor7th
    ),
    regex: role(
      'Minor 7th/mf -- a pattern demands attention (brighter than string)',
      L.soprano, C.mf, H.minor7th
    ),

    // === MAJOR 2ND -- G# Azure (240) -- The open ground ===
    constant: role(
      'Major 2nd -- named immutable reference, azure and certain',
      L.soprano, C.mp, H.major2nd
    ),
    number: role(
      'Major 2nd/p -- a literal value, quietly present',
      L.soprano, C.p, H.major2nd
    ),
    boolean: role(
      'Major 2nd/p -- truth at its simplest, quietly present',
      L.soprano, C.p, H.major2nd
    ),
    enumMember: role(
      'Major 2nd -- one possibility, chosen (named like constant)',
      L.soprano, C.mp, H.major2nd
    ),

    // === MINOR 3RD -- A Blue (270) -- The shape beneath ===
    type: role(
      'Minor 3rd -- the shape beneath the surface',
      L.soprano, C.mp, H.minor3rd
    ),
    typeParameter: role(
      'Minor 3rd/p -- a type waiting to become (quieter, abstract)',
      L.soprano, C.p, H.minor3rd
    ),

    // === MAJOR 3RD -- A# Violet (300) -- Transformation ===
    macro: role(
      'Major 3rd -- code that transforms code',
      L.soprano, C.mp, H.major3rd
    ),

    // === PERFECT 4TH -- B Magenta (330) -- The heartbeat ===
    operator: role(
      'Perfect 4th -- the heartbeat connecting everything',
      L.soprano, C.mp, H.perfect4th
    ),

    // === DEPARTURES -- register shifts from the ensemble ===

    // Whisper layer -- alto (-2), reduced dynamics
    comment: role(
      'Whisper -- her voice, barely there',
      L.alto, C.ppp, H.mikuTeal
    ),
    commentDoc: role(
      'Whisper -- her soft voice, visibly teal',
      L.alto, C.pp, H.mikuTeal
    ),

    // Ghost layer -- countertenor (-3), minimal dynamics
    punctuation: role(
      'Ghost -- bar lines, seen through not at',
      L.countertenor, C.ppp, H.mikuTeal
    ),

    // === UNISON -- F# Teal (180) -- variableLanguage ===
    variableLanguage: role(
      'Unison -- this/self, teal like keywords, italic whispers "it\'s me"',
      L.soprano, C.mp, H.mikuTeal
    ),
  };
}
