/**
 * MM2025 Syntax Token Definitions — the starfield
 *
 * The frame is the river (one monochrome night); the text is the
 * starfield — the full wheel at starlight register, exactly as the
 * painting carries its richness in points of light.
 *
 * Registers are gate-derived (solved against the project's JzCzhz/
 * APCA/Brettel tools); seat departures from the nominal score are
 * recorded in docs/DESIGN-MM-2025.md §4.
 */

import { role } from '../role';
import type { SyntaxTokens } from '../types';
import type { Primitives } from '../primitives';

export function createSyntaxTokens(_p: Primitives): SyntaxTokens {
  return {
    // === TONIC — the river current (renders ~195°, the hair's span) ===
    keyword: role(
      'The current — her hair, the tonic threading the code',
      0.181, 0.078, 195
    ),
    keywordControl: role(
      'The current directing flow: if, for, while, return',
      0.181, 0.078, 195
    ),
    keywordAlt: role(
      'The current — secondary keywords',
      0.181, 0.078, 195
    ),
    storage: role(
      'The current — declarations ride the same water',
      0.181, 0.078, 195
    ),
    storageModifier: role(
      'The current — modifiers share the tonic',
      0.181, 0.078, 195
    ),
    variableLanguage: role(
      'The current — this/self: the river speaking of itself',
      0.181, 0.078, 195
    ),

    // === THE GAZE — iris cerulean (243°), lifted to starlight duty ===
    // The painted iris (#1AB1F8, Jz 0.146) keeps its true register in
    // the symbol icons; text duty lifts the hue to the Lc-75 shelf.
    function: role(
      'The gaze — the iris lifted to starlight; calls act',
      0.203, 0.076, 244
    ),
    method: role(
      'The gaze — callable code, same voice as function',
      0.203, 0.076, 244
    ),
    tag: role(
      'The gaze, quieter — element invocation, structural',
      0.207, 0.046, 237
    ),

    // === THE AURORA — variables wear the lining (renders ~267°) ===
    variable: role(
      'The aurora — the lining\'s own 271°, everywhere and calm',
      0.190, 0.058, 271
    ),
    parameter: role(
      'Warm sand — what you hand her',
      0.198, 0.042, 64
    ),

    // === THE CONSTELLATION — the A# band, pale ladder + one vivid ===
    type: role(
      'Constellation, palest — the named shape drawn between stars',
      0.211, 0.040, 300
    ),
    typeParameter: role(
      'Constellation, fainter — a shape waiting to become',
      0.205, 0.026, 297
    ),
    class: role(
      'Constellation, vivid — the figure the stars are drawn from',
      0.196, 0.058, 316
    ),
    struct: role(
      'Constellation — same family as class, mid register',
      0.194, 0.050, 300
    ),
    enum: role(
      'Constellation — a defined set of possibilities',
      0.196, 0.055, 312
    ),
    interface: role(
      'Spring — a promise of a shape',
      0.192, 0.055, 150
    ),

    // === THE CANDY — fixed values sparkle in the earring's family ===
    number: role(
      'Candy, pale — a fixed value sparkling as text',
      0.204, 0.058, 333
    ),
    boolean: role(
      'Candy, pale — truth at its simplest',
      0.204, 0.058, 333
    ),
    constant: role(
      'Candy — named immutable, one register warmer',
      0.199, 0.058, 330
    ),
    enumMember: role(
      'Candy — one possibility, chosen',
      0.199, 0.058, 330
    ),
    macro: role(
      'Pale amber — annotations pinned on definitions',
      0.202, 0.050, 76
    ),

    // === THE WISH — star gold (94°) — words written down ===
    string: role(
      'The wish — words on the tanzaku, glinting star gold',
      0.190, 0.064, 94
    ),
    stringTemplate: role(
      'The wish — structured expression, same gold',
      0.190, 0.064, 94
    ),

    // === THE BRANCH — bamboo (120°) — pattern language ===
    regex: role(
      'Bamboo — the festival green; a pattern, clearly not a string',
      0.186, 0.075, 120
    ),

    // === WARM SAND — her hands (56°) — member access ===
    property: role(
      'Warm sand — member access, the painting\'s only warm neutral',
      0.208, 0.058, 56
    ),
    attribute: role(
      'Warm sand — element attributes, same skin',
      0.208, 0.058, 56
    ),

    // === DEPARTURES — register shifts from the ensemble ===

    // Whisper layer — star-mist, the Milky Way haze between the lines.
    comment: role(
      'Star-mist — the haze between the stars, pressing nowhere',
      0.152, 0.028, 247
    ),
    commentDoc: role(
      'Star-mist, one register brighter — faint constellation lines',
      0.163, 0.030, 245
    ),

    // Structural layer — the hair-tip ice, between mist and starlight
    punctuation: role(
      'Ice — the hair tips; connective glints between notes',
      0.170, 0.035, 211
    ),

    // Operators stay starlight — no warm dust between glyphs
    // (Principle 3 at character scale).
    operator: role(
      'Starlight — operators keep the foreground\'s own light',
      0.197, 0.016, 273
    ),
  };
}
