# Hatsune Miku Theme: Complete Design Specification

## The 12-Tone Chromatic Color System

*"A VS Code theme where color is music, and Miku is the composer."*

---

## I. Philosophy

### Why Music?

Hatsune Miku is not just a character—she is a **voice synthesizer**, a musical instrument. Her identity is inseparable from music. A theme bearing her name must embody musical principles, not just her color palette.

### Why 12-Tone Equal Temperament?

In Western music, the octave is divided into **12 equal semitones**. This system, formalized in the 18th century, enables:
- Transposition to any key without retuning
- Mathematical precision (each semitone = 2^(1/12) frequency ratio)
- Universal compatibility across instruments

Similarly, our color system divides the **360° hue wheel into 12 equal tones** (30° each), enabling:
- Theme variants through "transposition" (hue rotation)
- Mathematical precision in color relationships
- Universal compatibility across VS Code token types

### The Miku Tonic

In music, the **tonic** is the home note—the center of gravity. All other notes relate to it.

**Miku's tonic is F# (180° Teal).**

This is not arbitrary. F# is:
- The enharmonic of Gb, bridging sharp and flat worlds
- Associated with introspection and digital precision in synesthesia studies
- The actual key signature of several iconic Miku songs

Every color in this theme relates back to Miku's teal, just as every note in a composition relates to the tonic.

---

## II. The Three Dimensions of Musical Color

Color has three dimensions. Music has three fundamental properties. We map them precisely:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│    MUSIC                           COLOR                                    │
│    ═════                           ═════                                    │
│                                                                             │
│    Pitch (frequency)        →      Hue (angle)                             │
│    12 semitones                    12 × 30° = 360°                          │
│                                                                             │
│    Register (octave)        →      Lightness (Jz)                          │
│    Bass to soprano                 0.12 to 0.21                             │
│                                                                             │
│    Dynamics (volume)        →      Chroma (Cz)                             │
│    ppp to fff                      0.015 to 0.10                            │
│                                                                             │
│    Articulation             →      Font Style                              │
│    Legato, staccato, accent        Normal, bold, italic, underline          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## III. The 12-Tone Hue Scale

### 3.1 The Chromatic Scale

Each tone is exactly 30° apart, named after musical notes:

```
┌──────┬───────┬─────────────┬────────────────────────────────────────────────┐
│ Note │  Hue  │ Color Name  │ Character / Meaning                            │
├──────┼───────┼─────────────┼────────────────────────────────────────────────┤
│  C   │   0°  │ Red         │ Danger, stop, error — the tritone of Miku     │
│  C#  │  30°  │ Coral       │ Warmth, parameters — input from the world     │
│  D   │  60°  │ Gold        │ Energy, functions — action and transformation │
│  D#  │  90°  │ Lime        │ Growth, classes — structure and hierarchy     │
│  E   │ 120°  │ Green       │ Nature, strings — literal truth, data         │
│  F   │ 150°  │ Mint        │ Fresh, methods — the leading tone to Miku     │
├──────┼───────┼─────────────┼────────────────────────────────────────────────┤
│  F#  │ 180°  │ TEAL        │ ★ MIKU — keywords, the heart of code ★        │
├──────┼───────┼─────────────┼────────────────────────────────────────────────┤
│  G   │ 210°  │ Cyan        │ Flow, variables — data in motion              │
│  G#  │ 240°  │ Blue        │ Depth, numbers — constants of the universe    │
│  A   │ 270°  │ Violet      │ Royalty, types — the architecture of code     │
│  A#  │ 300°  │ Magenta     │ Magic, decorators — meta and transformation   │
│  B   │ 330°  │ Pink        │ Accent, operators — Miku's headphone color    │
└──────┴───────┴─────────────┴────────────────────────────────────────────────┘
```

### 3.2 The Circle of Fifths Relationships

In music, the **circle of fifths** shows harmonic relationships. Moving by fifths (7 semitones / 210°) creates natural progressions:

```
                           F# (Teal) ← TONIC
                          /          \
                     B (Pink)      C# (Coral)
                        /              \
                   E (Green)        G# (Blue)
                      /                  \
                 A (Violet)           D# (Lime)
                    \                    /
                     D (Gold) ←→ A# (Magenta)
                           \    /
                            G (Cyan)
                               |
                            C (Red) ← TRITONE (maximum tension)
```

**Key relationships:**
- F# → C# (fifth): Keyword → Parameter (natural flow)
- F# → B (fourth): Keyword → Operator (subdominant support)
- F# → C (tritone): Keyword → Error (maximum contrast)

---

## IV. The Octave-Lightness System

### 4.1 Four Octaves of Lightness

Just as a piano spans multiple octaves of the same note at different pitches, our colors span multiple **lightness levels** of the same hue:

```
┌─────────┬────────────┬───────────────┬──────────────────────────────────────┐
│ Octave  │ Jz Value   │ APCA Lc (est) │ Usage                                │
├─────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ O1      │ 0.12       │ ~55           │ Ghost text, disabled, indent guides  │
│         │            │               │ "Pianissimo whisper"                 │
├─────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ O2      │ 0.175      │ ~72           │ Comments, line numbers, secondary    │
│         │            │               │ "Soft background vocals"             │
├─────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ O3      │ 0.195      │ ~80           │ Primary syntax — DEFAULT             │
│         │            │               │ "Main melody"                        │
├─────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ O4      │ 0.215      │ ~88           │ Emphasis, errors, warnings           │
│         │            │               │ "Fortissimo climax"                  │
└─────────┴────────────┴───────────────┴──────────────────────────────────────┘
```

### 4.2 Octave Selection Rules

```
TOKEN IMPORTANCE          →    OCTAVE
════════════════════════════════════════
Critical (errors)              O4
Primary (keywords, funcs)      O3
Secondary (comments)           O2
Tertiary (disabled)            O1
```

**Warm Hue Adjustment:**
Warm hues (Red 0°, Coral 30°, Gold 60°, Pink 330°) require +0.01 Jz to achieve equivalent perceived brightness due to the Helmholtz-Kohlrausch effect.

```
Octave 3 (cool hues):  Jz = 0.195
Octave 3 (warm hues):  Jz = 0.205
```

### 4.3 Compound Background Compliance

Primary syntax tokens must remain readable on overlay backgrounds (selection, find match, diff highlights). These overlays lighten the background by ~10-20%.

**Target APCA on compound backgrounds:**
```
Layer 0 (editor.background):  Lc 80+ → provides margin for overlays
Layer 1 (selection/hover):    Lc 75+ (after ~5 Lc reduction)
Layer 2 (find/diff):          Lc 70+ (after ~10 Lc reduction)
```

**Recommendation:** Primary syntax should target Lc 82-85 on editor to maintain Lc 75+ on all overlays.

---

## V. The Dynamics-Chroma System

### 5.1 Seven Dynamic Levels

Musical dynamics range from barely audible to overwhelming. Chroma serves the same purpose—visual "volume":

```
┌──────────┬────────────┬───────────────┬──────────────────────────────────────┐
│ Dynamic  │ Cz Value   │ Saturation %  │ Usage                                │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ ppp      │ 0.015      │ ~8%           │ Near-gray, punctuation, guides       │
│          │            │               │ "Barely there"                       │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ pp       │ 0.030      │ ~16%          │ Very muted, comments                 │
│          │            │               │ "Gentle whisper"                     │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ p        │ 0.045      │ ~24%          │ Muted, secondary text                │
│          │            │               │ "Soft voice"                         │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ mp       │ 0.060      │ ~32%          │ Comfortable — DEFAULT                │
│          │            │               │ "Conversational"                     │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ mf       │ 0.075      │ ~40%          │ Vibrant, important syntax            │
│          │            │               │ "Clear and present"                  │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ f        │ 0.090      │ ~48%          │ Vivid, strings, classes              │
│          │            │               │ "Bold statement"                     │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ ff       │ 0.105      │ ~56%          │ Maximum, errors only                 │
│          │            │               │ "Fortissimo climax"                  │
└──────────┴────────────┴───────────────┴──────────────────────────────────────┘
```

### 5.2 Dynamic Selection Rules

```
TOKEN EMPHASIS            →    DYNAMIC
════════════════════════════════════════
Errors, critical               ff
Classes, strings               f
Functions, important           mf
Keywords, types                mp
Comments, secondary            pp
Punctuation, guides            ppp
```

---

## VI. Semantic Token Assignments

### 6.1 Design Constraint: 12 Notes, 30+ Tokens

We have 12 hues but 30+ semantic roles. This is intentional—like an orchestra where multiple instruments play the same note at different octaves and dynamics.

**Rule: Same note is allowed IF distinguished by octave OR dynamic OR both.**

### 6.2 The Complete Token Map

Each token receives a **note (hue)**, **octave (lightness)**, and **dynamic (chroma)**:

```
┌────────────────────┬──────┬────────┬─────────┬─────────┬───────────────────┐
│ Token              │ Note │ Hue    │ Octave  │ Dynamic │ Musical Character │
├────────────────────┼──────┼────────┼─────────┼─────────┼───────────────────┤
│ KEYWORDS (Tonic Family)                                                    │
│  keyword           │ F#   │ 180°   │ O3      │ mp      │ The tonic melody  │
│  keywordControl    │ F#   │ 180°   │ O3      │ mp      │ Same voice        │
│  storage           │ F    │ 150°   │ O3      │ mp      │ Leading tone      │
│  storageModifier   │ B    │ 330°   │ O3w     │ mp      │ Subdominant       │
├────────────────────┼──────┼────────┼─────────┼─────────┼───────────────────┤
│ CALLABLES (Dominant Energy)                                                │
│  function          │ D    │ 60°    │ O3w     │ mf      │ Energetic motif   │
│  method            │ F    │ 150°   │ O3      │ mp      │ Supporting voice  │
│  decorator         │ A#   │ 300°   │ O3      │ mf      │ Magical ornament  │
│  macro             │ A#   │ 300°   │ O2      │ pp      │ Distant magic     │
├────────────────────┼──────┼────────┼─────────┼─────────┼───────────────────┤
│ TYPES (Royal Architecture)                                                 │
│  type              │ A    │ 270°   │ O3      │ mp      │ Royal foundation  │
│  typeParameter     │ A    │ 270°   │ O2      │ p       │ Generic whisper   │
│  class             │ D#   │ 90°    │ O3      │ f       │ Structural pillar │
│  struct            │ D#   │ 90°    │ O3      │ f       │ Same as class     │
│  interface         │ A#   │ 300°   │ O3w     │ mp      │ Abstract contract │
│  enum              │ G    │ 210°   │ O3      │ mf      │ Enumerated flow   │
│  enumMember        │ G    │ 210°   │ O2      │ p       │ Enum value        │
│  namespace         │ A    │ 270°   │ O2      │ p       │ Scope container   │
├────────────────────┼──────┼────────┼─────────┼─────────┼───────────────────┤
│ VARIABLES (Flowing Data)                                                   │
│  variable          │ G    │ 210°   │ O3      │ mp      │ Flowing melody    │
│  parameter         │ C#   │ 30°    │ O3w     │ mp      │ Incoming voice    │
│  property          │ C#   │ 30°    │ O3w     │ mf      │ Object attribute  │
│  constant          │ G#   │ 240°   │ O3      │ mf      │ Immutable tone    │
│  event             │ A#   │ 300°   │ O3      │ mp      │ Signal emission   │
├────────────────────┼──────┼────────┼─────────┼─────────┼───────────────────┤
│ LITERALS (Natural Truth)                                                   │
│  string            │ E    │ 120°   │ O3      │ f       │ Natural truth     │
│  stringTemplate    │ E    │ 120°   │ O3      │ mf      │ Template literal  │
│  stringEscape      │ E    │ 120°   │ O3w     │ mp      │ Escaped char      │
│  number            │ G#   │ 240°   │ O3      │ p       │ Numeric constant  │
│  boolean           │ A    │ 270°   │ O3      │ p       │ Binary value      │
│  regexp            │ D#   │ 90°    │ O3w     │ mf      │ Pattern matcher   │
├────────────────────┼──────┼────────┼─────────┼─────────┼───────────────────┤
│ MARKUP (Document Structure)                                                │
│  tag               │ C#   │ 30°    │ O3w     │ mf      │ Element marker    │
│  attribute         │ D    │ 60°    │ O3w     │ mp      │ Tag modifier      │
│  link              │ F#   │ 180°   │ O3      │ mf      │ Hyperlink (tonic) │
├────────────────────┼──────┼────────┼─────────┼─────────┼───────────────────┤
│ META (Background Voices)                                                   │
│  comment           │ G#   │ 240°   │ O2      │ pp      │ Margin notes      │
│  commentDoc        │ F#   │ 180°   │ O2      │ pp      │ Miku's whisper    │
│  punctuation       │ F#   │ 180°   │ O2      │ ppp     │ Silent structure  │
├────────────────────┼──────┼────────┼─────────┼─────────┼───────────────────┤
│ OPERATORS (Pink Accents)                                                   │
│  operator          │ B    │ 330°   │ O3w     │ mp      │ Pink accent       │
├────────────────────┼──────┼────────┼─────────┼─────────┼───────────────────┤
│ STATUS (Dramatic Signals)                                                  │
│  error             │ C    │ 0°     │ O4w     │ ff      │ TRITONE ALARM     │
│  warning           │ D    │ 60°    │ O4w     │ f       │ Caution gold      │
│  success           │ E    │ 120°   │ O3      │ f       │ Victory green     │
│  info              │ F#   │ 180°   │ O3      │ mf      │ Tonic info        │
└────────────────────┴──────┴────────┴─────────┴─────────┴───────────────────┘

O3w = Octave 3 with warm hue adjustment (+0.01 Jz)
O4w = Octave 4 with warm hue adjustment
```

### 6.3 Collision Resolution

When multiple tokens share a note, they MUST differ:

```
SAME-NOTE PAIRS (intentional, distinguished by octave/dynamic):
══════════════════════════════════════════════════════════════

G (210° Cyan):
  variable    (O3, mp)  vs  enum        (O3, mf)   ← Dynamic differs
  variable    (O3, mp)  vs  enumMember  (O2, p)    ← Octave + dynamic

G# (240° Blue):
  constant    (O3, mf)  vs  number      (O3, p)    ← Dynamic differs
  constant    (O3, mf)  vs  comment     (O2, pp)   ← Octave + dynamic

A (270° Violet):
  type        (O3, mp)  vs  typeParam   (O2, p)    ← Octave + dynamic
  type        (O3, mp)  vs  boolean     (O3, p)    ← Dynamic differs
  type        (O3, mp)  vs  namespace   (O2, p)    ← Octave + dynamic

A# (300° Magenta):
  decorator   (O3, mf)  vs  macro       (O2, pp)   ← Octave + dynamic
  interface   (O3w, mp) vs  event       (O3, mp)   ← Warm adjustment

C# (30° Coral):
  parameter   (O3w, mp) vs  property    (O3w, mf)  ← Dynamic differs
  parameter   (O3w, mp) vs  tag         (O3w, mf)  ← Dynamic differs

E (120° Green):
  string      (O3, f)   vs  stringTemp  (O3, mf)   ← Dynamic differs
  string      (O3, f)   vs  stringEsc   (O3w, mp)  ← Warm + dynamic

D# (90° Lime):
  class       (O3, f)   vs  regexp      (O3w, mf)  ← Warm + dynamic
```

### 6.4 Token Families (Chord Groups)

Tokens are grouped into **harmonic families** that share related hues:

```
TONIC FAMILY (I chord: F# - A# - C#)
═══════════════════════════════════
  Keywords (F# 180°)     - Root (the tonic)
  Decorators (A# 300°)   - Major 3rd (120° up)
  Parameters (C# 30°)    - Perfect 5th (210° up)

  These appear together constantly. They should harmonize.

DOMINANT FAMILY (V chord: C# - F - G#)
═══════════════════════════════════
  Parameters (C# 30°)    - Root
  Methods (F 150°)       - Major 3rd (enharmonic E#)
  Constants (G# 240°)    - Perfect 5th

  Creates gentle tension, resolves to tonic.

SUBDOMINANT FAMILY (IV chord: B - D# - F#)
═══════════════════════════════════
  Operators (B 330°)     - Root
  Classes (D# 90°)       - Major 3rd
  Keywords (F# 180°)     - Perfect 5th

  Softer tension, complementary.

RELATIVE MINOR FAMILY (vi chord: D# - F# - A#)
═══════════════════════════════════
  Classes (D# 90°)       - Root
  Keywords (F# 180°)     - Minor 3rd
  Interfaces (A# 300°)   - Perfect 5th

  Emotional depth, structural.

TRITONE PAIR (augmented fourth = 180°)
═══════════════════════════════════
  Keywords (F# 180°)  ↔  Errors (C 0°)

  Maximum dissonance. This is INTENTIONAL.
  Errors must CLASH with normal code.
```

---

## VII. Voice Leading Rules

### 7.1 Adjacency Principles

When tokens appear next to each other in code, their colors should follow **voice leading** rules:

```
RULE 1: STEPWISE MOTION PREFERRED
═════════════════════════════════
Adjacent tokens should be within a perfect fourth (150°).

Good: keyword(180°) → variable(210°)     = 30° (minor 2nd) ✓
Good: function(60°) → parameter(30°)     = 30° (minor 2nd) ✓
Bad:  keyword(180°) → error(0°)          = 180° (tritone)  ✗
      (But this is intentional for errors!)

RULE 2: CONTRARY MOTION FOR EMPHASIS
════════════════════════════════════
When hues are similar, differentiate by lightness.

type(270°, O3) vs variable(210°, O3)
  Hue difference: 60° - acceptable
  But if too similar in practice, adjust octaves:
  type(270°, O3+) vs variable(210°, O3-)

RULE 3: COMMON TONE RETENTION
═════════════════════════════
Related tokens should share a common hue dimension.

Keyword group:    F#(180°), F(150°), B(330°)
Variable group:   G(210°), G#(240°), C#(30°)
Overlap at:       The tritone axis connects them

RULE 4: LEAP THEN STEP
══════════════════════
After a large interval, return with a small one.

error(0°) → ... → keyword(180°) → variable(210°)
Big leap from error, then step from keyword.
This creates "resolution" after tension.
```

### 7.2 The Adjacency Matrix

Common code patterns and their color relationships:

```
CODE PATTERN                    MUSICAL INTERVAL
═══════════════════════════════════════════════════════════════
const foo                       keyword(180°) → variable(210°)
                                Minor 2nd (30°) - smooth ✓

function bar()                  keyword(180°) → function(60°)
                                Major 3rd (120°) - harmonious ✓

class MyClass                   keyword(180°) → class(90°)
                                Minor 3rd (90°) - consonant ✓

let x: number                   keyword(180°) → variable(210°) → type(270°)
                                Ascending scale - natural flow ✓

if (error)                      keyword(180°) → error(0°)
                                Tritone (180°) - INTENTIONAL CLASH ✓

// comment                      keyword(180°) → comment(240°)
                                Major 3rd (60°) but muted - recedes ✓
```

---

## VIII. The Bracket Arpeggio

### 8.1 Rainbow Brackets as Chord Arpeggios

Brackets should follow a **chromatic descent** pattern, creating visual depth as nesting increases:

```
BRACKET PROGRESSION: Chromatic descent toward tonic
═══════════════════════════════════════════════════

Bracket 1 (outermost): C# (30° Coral)   - V  (dominant)
Bracket 2:             A  (270° Violet) - ♭III (parallel minor)
Bracket 3:             D# (90° Lime)    - vi (submediant)
Bracket 4:             F# (180° Teal)   - I  (★ TONIC - Miku! ★)
Bracket 5:             G  (210° Cyan)   - ♭II (Neapolitan)
Bracket 6 (innermost): D  (60° Gold)    - ♭VI (parallel minor)

DESIGN RATIONALE:
- Level 4 is TONIC because 3-4 levels is most common depth
- Outer brackets (1-3) are warm/bright for visibility
- Inner brackets (5-6) continue the descent
- Creates "arrival home" at the most-used nesting level
```

### 8.2 Bracket Color Values

```
┌─────────┬──────┬────────┬─────────┬─────────┬────────────────────┐
│ Bracket │ Note │ Hue    │ Octave  │ Dynamic │ Hex (approx)       │
├─────────┼──────┼────────┼─────────┼─────────┼────────────────────┤
│ 1       │ C#   │ 30°    │ O3w     │ mp      │ Warm coral         │
│ 2       │ A    │ 270°   │ O3      │ mp      │ Cool violet        │
│ 3       │ D#   │ 90°    │ O3      │ mp      │ Fresh lime         │
│ 4       │ F#   │ 180°   │ O3      │ mp      │ MIKU TEAL          │
│ 5       │ G    │ 210°   │ O3      │ mp      │ Flow cyan          │
│ 6       │ D    │ 60°    │ O3w     │ mp      │ Energy gold        │
└─────────┴──────┴────────┴─────────┴─────────┴────────────────────┘
```

---

## IX. Terminal ANSI Colors

### 9.1 The ANSI Orchestra

Terminal colors are **different instruments** in our orchestra. They need distinct **timbres** (chroma levels) even when using similar hues:

```
┌──────────────┬──────┬────────┬─────────┬─────────┬──────────────────┐
│ ANSI Color   │ Note │ Hue    │ Octave  │ Dynamic │ Character        │
├──────────────┼──────┼────────┼─────────┼─────────┼──────────────────┤
│ Black        │ -    │ -      │ O1      │ ppp     │ Near-background  │
│ Red          │ C    │ 0°     │ O3w     │ f       │ Alert, danger    │
│ Green        │ E    │ 120°   │ O3      │ f       │ Success, go      │
│ Yellow       │ D    │ 60°    │ O3w     │ f       │ Warning, caution │
│ Blue         │ G#   │ 240°   │ O3      │ mp      │ Info, calm       │
│ Magenta      │ A#   │ 300°   │ O3      │ mf      │ Special, magic   │
│ Cyan         │ F#   │ 180°   │ O3      │ mf      │ Miku, highlight  │
│ White        │ -    │ -      │ O2      │ pp      │ Muted foreground │
├──────────────┼──────┼────────┼─────────┼─────────┼──────────────────┤
│ Bright Black │ -    │ -      │ O2      │ ppp     │ Comments, gray   │
│ Bright Red   │ C    │ 0°     │ O3w     │ mp      │ Softer alert     │
│ Bright Green │ E    │ 120°   │ O3      │ mp      │ Softer success   │
│ Bright Yellow│ D    │ 60°    │ O3w     │ mp      │ Softer warning   │
│ Bright Blue  │ G#   │ 240°   │ O3      │ mp      │ Standard info    │
│ Bright Mag.  │ A#   │ 300°   │ O3      │ mp      │ Standard magic   │
│ Bright Cyan  │ F#   │ 180°   │ O3      │ mp      │ Standard Miku    │
│ Bright White │ -    │ -      │ O3      │ ppp     │ Primary text     │
└──────────────┴──────┴────────┴─────────┴─────────┴──────────────────┘
```

### 9.2 CVD-Safe Terminal Design

For colorblind users, ANSI colors must be distinguishable by **lightness** as well as hue:

```
CRITICAL PAIRS (must differ by lightness):
══════════════════════════════════════════

Red (O3w) vs Green (O3)
  Problem: Indistinguishable to protanopes/deuteranopes
  Solution: Red at O4w (+0.02 Jz), Green at O3
  ΔL = 0.02 → adds ~5 Lc distinction

Red vs Yellow
  Problem: Similar under tritanopia
  Solution: Yellow at O3w, Red at O4w
  Plus different chroma: Yellow(f), Red(ff)
```

---

## X. Git Decoration Colors

### 10.1 The Git Narrative

Git status tells a **story**. Colors should reflect the narrative:

```
┌──────────────┬──────┬────────┬─────────┬─────────┬──────────────────┐
│ Git Status   │ Note │ Hue    │ Octave  │ Dynamic │ Narrative        │
├──────────────┼──────┼────────┼─────────┼─────────┼──────────────────┤
│ Added        │ E    │ 120°   │ O3      │ f       │ New life, growth │
│ Modified     │ D    │ 60°    │ O3w     │ mf      │ Change, energy   │
│ Deleted      │ C    │ 0°     │ O4w     │ f       │ Loss, removal    │
│ Untracked    │ G    │ 210°   │ O3      │ mf      │ Unknown, flow    │
│ Renamed      │ A    │ 270°   │ O3      │ mp      │ Transformation   │
│ Conflicting  │ A#   │ 300°   │ O4      │ f       │ Tension, magic   │
├──────────────┼──────┼────────┼─────────┼─────────┼──────────────────┤
│ Stage Mod.   │ G    │ 210°   │ O3      │ mp      │ Prepared change  │
│ Stage Del.   │ A    │ 270°   │ O3      │ mp      │ Prepared removal │
│ Submodule    │ G#   │ 240°   │ O3      │ mp      │ External ref     │
└──────────────┴──────┴────────┴─────────┴─────────┴──────────────────┘
```

### 10.2 CVD-Safe Git Design

```
CRITICAL: Added (Green) vs Modified (Gold) vs Deleted (Red)
═══════════════════════════════════════════════════════════

Normal vision: 120° vs 60° vs 0° = clear hue distinction

Protanopia/Deuteranopia (red-green blindness):
  Green and Red appear similar (both yellowish)
  Solution: Deleted uses O4w (brighter), Added uses O3
  ΔL creates distinction even without hue

Tritanopia (blue-yellow blindness):
  Gold and Blue appear similar
  Solution: Modified(Gold) at O3w, Untracked(Cyan) at O3
  Plus different chroma levels
```

---

## XI. Symbol Icon Colors

### 11.1 The Symbol Orchestra

VS Code symbol icons need distinct colors for quick visual parsing in autocomplete and outline views:

```
┌──────────────────┬──────┬────────┬─────────┬─────────┬──────────────────┐
│ Symbol Type      │ Note │ Hue    │ Octave  │ Dynamic │ Matches Token    │
├──────────────────┼──────┼────────┼─────────┼─────────┼──────────────────┤
│ Class            │ D#   │ 90°    │ O3      │ f       │ class            │
│ Struct           │ D#   │ 90°    │ O3      │ f       │ struct           │
│ Interface        │ A#   │ 300°   │ O3w     │ mp      │ interface        │
│ Enum             │ G    │ 210°   │ O3      │ mf      │ enum             │
│ EnumMember       │ G    │ 210°   │ O2      │ p       │ enumMember       │
│ Function         │ D    │ 60°    │ O3w     │ mf      │ function         │
│ Method           │ F    │ 150°   │ O3      │ mp      │ method           │
│ Constructor      │ D    │ 60°    │ O3w     │ mf      │ function         │
│ Variable         │ G    │ 210°   │ O3      │ mp      │ variable         │
│ Constant         │ G#   │ 240°   │ O3      │ mf      │ constant         │
│ Property         │ C#   │ 30°    │ O3w     │ mf      │ property         │
│ Field            │ C#   │ 30°    │ O3w     │ mp      │ parameter        │
│ TypeParameter    │ A    │ 270°   │ O2      │ p       │ typeParameter    │
│ Module           │ A    │ 270°   │ O3      │ mp      │ type             │
│ Namespace        │ A    │ 270°   │ O2      │ p       │ namespace        │
│ Package          │ A    │ 270°   │ O3      │ mp      │ type             │
│ String           │ E    │ 120°   │ O3      │ f       │ string           │
│ Number           │ G#   │ 240°   │ O3      │ p       │ number           │
│ Boolean          │ A    │ 270°   │ O3      │ p       │ boolean          │
│ Array            │ G    │ 210°   │ O3      │ mp      │ variable         │
│ Object           │ G    │ 210°   │ O3      │ mp      │ variable         │
│ Key              │ F#   │ 180°   │ O3      │ mp      │ keyword          │
│ Keyword          │ F#   │ 180°   │ O3      │ mp      │ keyword          │
│ Operator         │ B    │ 330°   │ O3w     │ mp      │ operator         │
│ Reference        │ G    │ 210°   │ O2      │ p       │ (dim variable)   │
│ Snippet          │ F#   │ 180°   │ O2      │ pp      │ (dim tonic)      │
│ Folder           │ D    │ 60°    │ O3w     │ mp      │ (warm accent)    │
│ File             │ G    │ 210°   │ O3      │ mp      │ (neutral)        │
│ Event            │ A#   │ 300°   │ O3      │ mp      │ event            │
└──────────────────┴──────┴────────┴─────────┴─────────┴──────────────────┘
```

---

## XII. Debug Expression Colors

### 12.1 Debug State Visualization

Debug expressions need special treatment to show evaluation state:

```
┌──────────────────┬──────┬────────┬─────────┬─────────┬──────────────────┐
│ Debug State      │ Note │ Hue    │ Octave  │ Dynamic │ Character        │
├──────────────────┼──────┼────────┼─────────┼─────────┼──────────────────┤
│ Changed value    │ D    │ 60°    │ O3w     │ mf      │ Attention-gold   │
│ Error value      │ C    │ 0°     │ O4w     │ f       │ Error-red        │
│ Watched value    │ F#   │ 180°   │ O3      │ mf      │ Tonic-highlight  │
│ Stale value      │ G    │ 210°   │ O2      │ pp      │ Dim-fade         │
│ Exception        │ C    │ 0°     │ O4w     │ ff      │ Critical-red     │
│ Breakpoint       │ C    │ 0°     │ O3w     │ f       │ Standard-red     │
│ Breakpoint (dis) │ C    │ 0°     │ O2      │ pp      │ Muted-red        │
│ Logpoint         │ G#   │ 240°   │ O3      │ mp      │ Info-blue        │
│ Call stack frame │ D    │ 60°    │ O3w     │ mp      │ Active-gold      │
└──────────────────┴──────┴────────┴─────────┴─────────┴──────────────────┘
```

---

## XIII. UI Element Colors

### 13.1 Background Hierarchy

UI backgrounds follow the **Miku character outfit** - dark grays with teal accents:

```
┌────────────────────┬─────────────────┬──────────────────────────────────┐
│ UI Element         │ Source          │ Character Reference              │
├────────────────────┼─────────────────┼──────────────────────────────────┤
│ Editor background  │ skirt.base      │ #15191D - Main canvas            │
│ Sidebar background │ top.shadow      │ #263238 - Secondary panels       │
│ Title bar          │ headphones.frame│ #1A1F24 - Top-level containers   │
│ Activity bar       │ armWarmers.base │ #111417 - Deepest background     │
│ Status bar         │ top.main        │ #37474F - Footer bar             │
│ Panel background   │ top.shadow      │ #263238 - Bottom panels          │
│ Dropdown           │ top.main        │ #37474F - Floating elements      │
│ Input background   │ skirt.base      │ #15191D - Text fields            │
│ Void (deep black)  │ special.void    │ #0A0D10 - Absolute background    │
└────────────────────┴─────────────────┴──────────────────────────────────┘
```

### 13.2 Interactive States

Interactive elements follow a consistent state pattern:

```
STATE PATTERN (using teal accent as example):
═════════════════════════════════════════════

default   → Base color                    (hair.base #39C5BB)
hover     → Slightly lighter or overlay   (+8% opacity)
active    → More prominent                (+15% opacity)
focus     → Magenta accent ring           (hairTies.outline #E05096)
disabled  → Desaturated, lower lightness  (O2, pp)
selected  → Background highlight          (+25% opacity)

Applied to list items, buttons, tabs, etc.
```

### 13.3 Border Hierarchy

```
┌─────────────────────┬──────────┬────────────────────────────────────────┐
│ Border Type         │ Opacity  │ Usage                                  │
├─────────────────────┼──────────┼────────────────────────────────────────┤
│ Subtle border       │ 08 (3%)  │ Separator lines, faint divisions       │
│ Standard border     │ 15 (8%)  │ Panel edges, input borders             │
│ Focus border        │ 40 (25%) │ Active focus rings                     │
│ Strong border       │ 60 (38%) │ Selected tabs, important divisions     │
│ Accent border       │ FF (100%)│ Active tab indicator, brand elements   │
└─────────────────────┴──────────┴────────────────────────────────────────┘
```

---

## XIV. Markdown Styling

### 14.1 Document Structure Colors

Markdown elements follow the musical hierarchy for document structure:

```
┌──────────────────┬──────┬────────┬─────────┬─────────┬──────────────────┐
│ Markdown Element │ Note │ Hue    │ Octave  │ Dynamic │ Character        │
├──────────────────┼──────┼────────┼─────────┼─────────┼──────────────────┤
│ Heading 1        │ F#   │ 180°   │ O4      │ mf      │ Tonic forte      │
│ Heading 2        │ F#   │ 180°   │ O3      │ mp      │ Tonic standard   │
│ Heading 3-6      │ F#   │ 180°   │ O3      │ p       │ Tonic piano      │
│ Bold             │ -    │ -      │ O3      │ -       │ Foreground       │
│ Italic           │ -    │ -      │ O3      │ -       │ Foreground       │
│ Link             │ F#   │ 180°   │ O3      │ mf      │ Tonic clickable  │
│ Link (visited)   │ A    │ 270°   │ O3      │ p       │ Violet subdued   │
│ Code inline      │ D    │ 60°    │ O3w     │ mp      │ Gold code        │
│ Code block       │ D    │ 60°    │ O3w     │ mp      │ Gold code        │
│ Quote            │ G#   │ 240°   │ O2      │ pp      │ Blue muted       │
│ List marker      │ B    │ 330°   │ O3w     │ mp      │ Pink accent      │
│ HR / separator   │ F#   │ 180°   │ O1      │ ppp     │ Tonic whisper    │
│ Table border     │ F#   │ 180°   │ O2      │ ppp     │ Tonic structure  │
└──────────────────┴──────┴────────┴─────────┴─────────┴──────────────────┘
```

### 14.2 Heading Hierarchy

Headings descend in lightness like a melodic phrase descending in pitch:

```
H1: Jz 0.215 (O4) - The opening statement
H2: Jz 0.195 (O3) - Main themes
H3: Jz 0.185      - Subthemes
H4+: Jz 0.175     - Details (approaching comment level)
```

---

## XV. Theme Variants as Key Signatures

### 15.1 Modulation Theory

In music, changing **key signature** transforms the entire piece while preserving relationships. Our variants work the same way:

```
┌─────────────────┬─────────────┬──────────────────────────────────────┐
│ Variant         │ Key         │ Transformation                       │
├─────────────────┼─────────────┼──────────────────────────────────────┤
│ Dark (default)  │ F# minor    │ Base key - cool, contemplative       │
│                 │             │ Tonic: Teal (180°)                   │
│                 │             │ Background: Dark (#15191D)           │
├─────────────────┼─────────────┼──────────────────────────────────────┤
│ Light           │ F# major    │ Same tonic, brighter mode            │
│                 │             │ Tonic: Teal (180°) - unchanged       │
│                 │             │ Octaves: Inverted (O4→O1 for text)   │
│                 │             │ Background: Light (#FAFCFD)          │
├─────────────────┼─────────────┼──────────────────────────────────────┤
│ Sakura          │ B major     │ Transposition: +150° (tritone + 5th) │
│                 │             │ New tonic: Pink (330°)               │
│                 │             │ All hues rotate accordingly          │
│                 │             │ Character: Cherry blossom warmth     │
├─────────────────┼─────────────┼──────────────────────────────────────┤
│ High Contrast   │ F# Lydian   │ Same tonic, raised 4th               │
│                 │             │ Chroma: +25% across all tokens       │
│                 │             │ Octave spread: Increased             │
│                 │             │ For accessibility needs              │
├─────────────────┼─────────────┼──────────────────────────────────────┤
│ Snow Miku       │ G major     │ Transposition: +30° (minor 2nd)      │
│                 │             │ New tonic: Cyan (210°)               │
│                 │             │ Character: Winter, ice, snow         │
│                 │             │ Reduced chroma (frozen, quiet)       │
└─────────────────┴─────────────┴──────────────────────────────────────┘
```

### 15.2 Transposition Rules

When transposing to a new key (e.g., Sakura):

```
SAKURA TRANSPOSITION (+150°):
═════════════════════════════

Original → Transposed
F# (180° Teal)    → B  (330° Pink)     [NEW TONIC]
G  (210° Cyan)    → C# (30°  Coral)
G# (240° Blue)    → D  (60°  Gold)
A  (270° Violet)  → D# (90°  Lime)
A# (300° Magenta) → E  (120° Green)
B  (330° Pink)    → F  (150° Mint)
C  (0°   Red)     → F# (180° Teal)     [Error becomes calm!]
C# (30°  Coral)   → G  (210° Cyan)
D  (60°  Gold)    → G# (240° Blue)
D# (90°  Lime)    → A  (270° Violet)
E  (120° Green)   → A# (300° Magenta)
F  (150° Mint)    → B  (330° Pink)

Note: The tritone relationship is preserved!
In Sakura: Error(F# 180° Teal) is tritone from Tonic(B 330° Pink)
```

---

## XVI. Accessibility Integration

### 16.1 The "Concert Hall Acoustics" Principle

A concert hall must sound good from every seat. Similarly, our colors must work on every background:

```
BACKGROUND LAYERS (like hall acoustics):
════════════════════════════════════════

Layer 0: Editor background (direct sound)
         Syntax must achieve Lc 75+ here

Layer 1: Selection, highlights (+10% lighter)
         Syntax must achieve Lc 70+ here

Layer 2: Find match, diff (+20% lighter)
         Syntax must achieve Lc 65+ here

Layer 3: Merge conflicts (+25% lighter)
         Syntax must achieve Lc 60+ here

DESIGN PRINCIPLE:
  Design all syntax at Lc 82-85 on Layer 0
  This ensures Lc 75+ even on Layer 2 overlays
```

### 16.2 APCA Contrast Requirements

```
┌─────────────────────┬────────────┬────────────────────────────────────┐
│ Element Type        │ Min Lc     │ Musical Equivalent                 │
├─────────────────────┼────────────┼────────────────────────────────────┤
│ Body text (syntax)  │ 75         │ Main melody - clearly audible      │
│ Large text (heads)  │ 60         │ Bass line - foundation             │
│ UI components       │ 60         │ Accompaniment - supportive         │
│ Placeholder/ghost   │ 45         │ Distant reverb - barely there      │
│ Decorative          │ 30         │ Room tone - felt not heard         │
├─────────────────────┼────────────┼────────────────────────────────────┤
│ Maximum (halation)  │ 90         │ Clipping threshold - don't exceed  │
└─────────────────────┴────────────┴────────────────────────────────────┘
```

### 16.3 CVD Design Principles

```
COLOR VISION DEFICIENCY RULES:
══════════════════════════════

1. NEVER rely on red-green distinction alone
   Always pair with lightness difference (ΔL ≥ 0.02)

2. NEVER rely on blue-yellow distinction alone
   Always pair with chroma difference (ΔC ≥ 0.02)

3. Critical pairs must have ΔE ≥ 12 under ALL simulations:
   - Protanopia (red-blind)
   - Deuteranopia (green-blind)
   - Tritanopia (blue-blind)

4. Use "parallel octaves" as fallback
   If hue fails → lightness must succeed
```

---

## XVII. The Complete Color Calculation

### 17.1 The Formula

Every color in the theme is calculated from three inputs:

```
COLOR = jzczhz_to_hex(
  Jz = OCTAVE[octave] + WARM_ADJUSTMENT[hue],
  Cz = DYNAMIC[dynamic],
  hz = NOTE[note]
)
```

### 17.2 Reference Tables

```
OCTAVE TABLE:
─────────────
O1 = 0.120
O2 = 0.175
O3 = 0.195
O4 = 0.215

WARM ADJUSTMENT (add to Jz for hues 315°-45° and 60°-90°):
──────────────────────────────────────────────────────────
Red (0°):    +0.015
Coral (30°): +0.010
Gold (60°):  +0.010
Lime (90°):  +0.005
Pink (330°): +0.010

DYNAMIC TABLE:
──────────────
ppp = 0.015
pp  = 0.030
p   = 0.045
mp  = 0.060
mf  = 0.075
f   = 0.090
ff  = 0.105

NOTE TABLE:
───────────
C  = 0°
C# = 30°
D  = 60°
D# = 90°
E  = 120°
F  = 150°
F# = 180°
G  = 210°
G# = 240°
A  = 270°
A# = 300°
B  = 330°

INTERVAL TABLE:
───────────────
1 semitone  =  30° = Minor 2nd      (m2)
2 semitones =  60° = Major 2nd      (M2)
3 semitones =  90° = Minor 3rd      (m3)
4 semitones = 120° = Major 3rd      (M3)
5 semitones = 150° = Perfect 4th    (P4)
6 semitones = 180° = Tritone        (TT) ← Maximum tension
7 semitones = 210° = Perfect 5th    (P5)
8 semitones = 240° = Minor 6th      (m6)
9 semitones = 270° = Major 6th      (M6)
10 semitones = 300° = Minor 7th     (m7)
11 semitones = 330° = Major 7th     (M7)
12 semitones = 360° = Octave        (P8) = 0°
```

### 17.3 Example Calculations

```
KEYWORD (F#, O3, mp):
  Jz = 0.195 + 0 (cool hue) = 0.195
  Cz = 0.060
  hz = 180°
  → Miku teal at comfortable saturation

ERROR (C, O4, ff):
  Jz = 0.215 + 0.015 (warm) = 0.230
  Cz = 0.105
  hz = 0°
  → Bright vivid red

COMMENT (D#, O2, pp):
  Jz = 0.175 + 0.005 (warm) = 0.180
  Cz = 0.030
  hz = 90°
  → Muted gray-lime
```

---

## XVIII. Verification Checklist

### 18.1 The Perfect Theme Checklist

```
□ MUSICAL COHERENCE
  □ All hues are exactly 30° apart (12-tone)
  □ F# (180° Teal) is the tonic center
  □ Tritone (C, 0° Red) reserved for errors
  □ Chord families are harmonious
  □ Voice leading rules followed

□ ACCESSIBILITY
  □ All syntax achieves Lc ≥ 82 on editor (allows 75 on overlays)
  □ All UI achieves Lc ≥ 60
  □ No color exceeds Lc 90 (halation)
  □ CVD-safe: all critical pairs have ΔL backup
  □ APCA used (not WCAG 2.x contrast ratio)

□ DISTINCTION
  □ Adjacent tokens: ΔE ≥ 15
  □ Critical pairs: ΔE ≥ 18
  □ Cross-group pairs: ΔE ≥ 12
  □ Brackets follow chord progression
  □ Terminal colors have distinct timbres

□ CONSISTENCY
  □ Same semantic role = same note across languages
  □ Octave used consistently for importance
  □ Dynamic used consistently for emphasis
  □ Warm hue adjustment applied correctly

□ VARIANTS
  □ Dark theme: F# minor, complete
  □ Light theme: F# major, inverted correctly
  □ Sakura: B major, transposed correctly
  □ High contrast: F# Lydian, boosted correctly

□ THEMATIC
  □ Miku's teal is prominent but not overwhelming
  □ Pink accent (headphones) used for operators
  □ Character palette integrated into UI backgrounds
  □ Musical metaphor is consistent throughout
```

---

## XIX. Implementation Notes

### 19.1 File Structure

```
src/tokens/
├── chromatic.ts      # The 12-tone scale definition
├── octaves.ts        # Lightness levels (O1-O4)
├── dynamics.ts       # Chroma levels (ppp-ff)
├── notes.ts          # Hue assignments (C-B)
├── tokens.ts         # Semantic token definitions
├── calculator.ts     # Color calculation functions
└── variants.ts       # Theme variant generators

src/validation/
├── contrast.ts       # APCA contrast checking
├── distinction.ts    # Delta E calculation
├── cvd.ts           # Color blindness simulation
└── harmony.ts       # Musical interval validation
```

### 19.2 Key Principles

1. **Single Source of Truth**: All colors derive from the three tables (octave, dynamic, note)
2. **No Magic Numbers**: Every color value is calculated, not hardcoded
3. **Validation First**: Run all checks before generating theme
4. **Musical Metaphor**: Code comments use musical terminology

---

## XX. Conclusion

This design treats color as music—a complete system with pitch, register, dynamics, and harmony. Miku is not just a color palette; she is the composer, and the theme is her symphony.

The 12-tone equal temperament ensures mathematical precision. The octave-lightness mapping provides visual hierarchy. The dynamics-chroma system controls emphasis. And the harmonic families create visual cohesion.

A perfect Miku theme is one where every color has a reason, every relationship has meaning, and the whole is greater than the sum of its parts—just like music.

---

*"The song she sings is written in color."*
