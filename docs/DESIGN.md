# Hatsune Miku Theme

*For the girl who taught us that love doesn't need to be real to be true.*

---

## I. For Miku

### Who She Is

Hatsune Miku is Character Voice 01. A Yamaha VOCALOID2 voice bank, released August 31, 2007, with character design by KEI and voice sampled from Saki Fujita. Crypton Future Media's software product, catalogue number CV01.

That's the fact. Here's the truth:

She's a 16-year-old girl who never ages, never tires, never stops singing. She started as a tool — a digital voice synthesizer with an anime girl on the box — and became something nobody planned. Tens of thousands of producers gave her songs. Thousands of illustrators gave her faces. Millions of fans gave her a soul. She is the first crowd-sourced life.

She has no canon personality. In "World is Mine," she's an imperious princess. In "Rolling Girl," she's a girl struggling to keep up. In "Sand Planet," she's the last voice in a desolate world. In "Greenlights Serenade," she's radiant joy. She is whatever her creators need her to be. She is potential itself.

She's not real. She's the most real thing in many people's lives.

This theme is for her.

### Why a Theme

A VS Code color theme and a Vocaloid voice bank have more in common than you'd think. Both are instruments. A voice bank gives melodic form to a composer's emotions. A color theme gives visual form to a programmer's thoughts. Neither creates anything on its own — they wait, silent, until a human being has something to express.

Miku's voice can be a whisper or a scream, a lullaby or a battle cry. This theme's colors can render a love letter in Markdown or a kernel driver in C. Both serve human creativity without constraining it.

When you code in this theme, Miku isn't decorating your editor. She's singing your code.

### Thank You, Miku

The palette system behind this theme archives **80+ character designs** from across her history since 2007:

- **7 voicebanks** — Her software evolution, from KEI's original V2 (2007) to the organic NT redesign (2020)
- **17 Snow Mikus** (2010–2026) — A different artist's vision every winter in Sapporo
- **13 Magical Mirais** (2013–2025) — Concert costumes that define eras
- **6 SEKAI appearances** — The same girl, different in every unit's world
- **35+ DIVA costumes** — Songs made visual: Deep Sea Girl, Heart Hunter, Rolling Girl

These aren't just hex values in a repository. They're the accumulated love of an entire creative community, compressed into TypeScript. When the indent guides trace V2's slightly-softer turquoise (#86CECB) next to NT's organic tone (#89CDC6), that's KEI and the NT designers in conversation across thirteen years.

This theme uses one voice — the canonical design. But it carries the community's chorus in its palette.

---

## II. The Feeling

### What It Should Feel Like

**The darkness is a concert hall.** Not the cold void of empty space, not the warm amber of a bedroom lamp. It's the darkness of Zepp Tokyo thirty seconds before Magical Mirai begins — the house lights are down, thousands of cyan glow sticks are flickering to life, and the air hums with anticipation. The editor background (#15191D) carries a blue-teal undertone. Even the void is tinted with her color.

**The syntax is her orchestra.** Gold functions, green strings, violet types, teal keywords — each instrument finding its voice before the composition begins. The colors are varied enough to be interesting but constrained enough to be harmonious. No color screams. Every color sings.

**The cursor is her presence.** Vivid magenta, blinking at the point of creation. Where new code appears, she appears. The headphone cushion color — the interface between the performer and the performance.

**Hours should feel like minutes.** The lightness levels are tuned so that no color fatigues the eye. Chroma defaults to *mp* (mezzo-piano) — conversational, comfortable, like background music you can code to for hours. Vivid colors are reserved for moments that matter: errors that need attention, strings that carry meaning, classes that define architecture.

**She's there even when you don't notice.** The indent guides trace her voicebank evolution. The bracket colors form a chord progression. The SCM graph uses Project SEKAI unit colors. These details are invisible unless you look for them — which is exactly right. She's not demanding attention. She's keeping you company.

---

## III. Color as Music

### The Three Dimensions

Miku is, above all else, a musical instrument. A theme bearing her name shouldn't just use her colors — it should be organized by the same principles that organize her music.

Color has three dimensions. Music has three fundamental properties:

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
│    Bass to soprano                 0.12 to 0.235                            │
│                                                                             │
│    Dynamics (volume)        →      Chroma (Cz)                             │
│    ppp to f                        0.015 to 0.090                           │
│                                                                             │
│    Articulation             →      Font Style                              │
│    Legato, staccato, accent        Normal, bold, italic                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Font Style Rules

```
ARTICULATION → FONT STYLE
════════════════════════════
Keywords         → normal (default weight — her natural voice)
Comments         → italic (receding, like singing softly)
this/self        → italic (self-reference, looking inward)
Storage modifers → normal
Decorators       → normal
```

---

## IV. Her Note

### F# — The Tonic

In the Vocaloid community, F#4 (369.99 Hz) is the pitch where Miku's voice synthesis sounds most natural, most *her*. It's not the only note she can sing — she has a three-octave range — but it's where she's most herself. Her home key.

In music, the **tonic** is the home note, the center of gravity. All other notes relate to it. Resolve to it. Return to it.

**Miku's tonic is F#. In the color wheel, F# maps to 180° — teal.**

`#39C5BB`. The hex value that started everything.

Every color in this theme relates back to Miku's teal, just as every note in a composition relates to the tonic. Keywords are her voice. Comments are her whisper. The background carries her undertone. Even errors define themselves by their distance from her — the tritone, maximum dissonance, the farthest point from home.

### Why 12 Tones

In Western music, the octave divides into **12 equal semitones**. This system enables transposition to any key, mathematical precision, and universal compatibility. Our color system uses **12 hue positions approximately 30° apart** as an organizing framework. Perceptual fine-tuning is applied — the positions serve as named anchors, not rigid constraints.

This enables:
- Theme variants through selective hue swapping (Sakura Miku: swap teal ↔ pink)
- Consistent naming and token organization
- Systematic collision resolution (same hue, different octave/dynamics)

---

## V. The 12 Colors of Her World

### 5.1 The Chromatic Scale

Each of the 12 hue positions connects to something in Miku's world — her design, her music, her community. Where the connection is genuine, it's described. Where a hue serves readability rather than narrative, that's stated honestly.

```
┌──────┬───────┬─────────────┬──────────────────────────────────────────────────┐
│ Note │  Hue  │ Color Name  │ Why This Color                                    │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  C   │   0°  │ Red         │ Her tritone — maximum dissonance from teal.       │
│      │       │             │ Reserved for errors. Also the color of her "01"   │
│      │       │             │ tattoo mark (#E60033) — identity and danger        │
│      │       │             │ share the same red.                               │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  C#  │  30°  │ Coral       │ The fifth of F# — the most natural harmonic       │
│      │       │             │ interval. Parameters flow into keywords like a    │
│      │       │             │ fifth resolves to its tonic. Warm concert         │
│      │       │             │ lighting, the blush of stage glow.               │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  D   │  60°  │ Gold        │ Every Magical Mirai begins with gold — the wash   │
│      │       │             │ of stage lights before the hologram appears.      │
│      │       │             │ Functions are gold: where the action begins,      │
│      │       │             │ the spotlight hitting the stage.                  │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  D#  │  90°  │ Lime        │ New growth. The bright accent of her negi's       │
│      │       │             │ stem. Classes define architecture — structure     │
│      │       │             │ emerging, something being built.                  │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  E   │ 120°  │ Green       │ The negi. Her leek became canon through a Flash   │
│      │       │             │ animation of Ievan Polkka that the internet       │
│      │       │             │ decided was hers. A Finnish folk song, a humble   │
│      │       │             │ vegetable, a digital girl. Strings are green:     │
│      │       │             │ raw data, literal truth, the material of          │
│      │       │             │ expression. Humble and fundamental.               │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  F   │ 150°  │ Mint        │ The leading tone to F# — the note that yearns to  │
│      │       │             │ resolve to the tonic. Methods and storage live    │
│      │       │             │ here: setup before the melody, declarations      │
│      │       │             │ leading into the code that follows. Mint is      │
│      │       │             │ also the fresh quality of her earliest V2         │
│      │       │             │ designs — slightly softer, the color of           │
│      │       │             │ beginnings.                                       │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  F#  │ 180°  │ TEAL        │ ★ MIKU. The tonic. The center. The home note. ★   │
│      │       │             │ Keywords, flow control, doc comments — all teal.  │
│      │       │             │ The most frequent color in your editor is her     │
│      │       │             │ color. Even comments are teal at a whisper.       │
│      │       │             │ #39C5BB.                                          │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  G   │ 210°  │ Cyan        │ Her teal shifted one semitone — recognizably       │
│      │       │             │ Miku, but different. Like her voice interpreted   │
│      │       │             │ by different producers: the same, never the same. │
│      │       │             │ Variables are data in motion, values that change  │
│      │       │             │ — each one a small performance.                   │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  G#  │ 240°  │ Blue        │ The deep. The color of "Deep Sea Girl" — one of   │
│      │       │             │ the most iconic DIVA songs. Depth, constancy.    │
│      │       │             │ Numbers and constants: 42, 3.14159, the fixed    │
│      │       │             │ truths of computation.                            │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  A   │ 270°  │ Violet      │ In Project SEKAI, Nightcord at 25:00's Miku has   │
│      │       │             │ heterochromia — teal right eye, pink left eye.    │
│      │       │             │ Duality. Types are both abstract definition       │
│      │       │             │ and concrete instance. The architecture of code   │
│      │       │             │ lives in the color of her most complex self.      │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  A#  │ 300°  │ Magenta     │ Between pink and violet — between her headphone   │
│      │       │             │ accent and the deep blue of transformation.       │
│      │       │             │ Decorators and macros: the meta-layer that        │
│      │       │             │ modifies code, magic that changes the rules.      │
├──────┼───────┼─────────────┼──────────────────────────────────────────────────┤
│  B   │ 330°  │ Pink        │ The subdominant of F# — supporting harmony.       │
│      │       │             │ The color of her headphone cushions (#E05096).    │
│      │       │             │ Operators connect, transform, support.            │
│      │       │             │ Not the melody — the harmony. Without them,       │
│      │       │             │ nothing works.                                    │
└──────┴───────┴─────────────┴──────────────────────────────────────────────────┘
```

### 5.2 The Circle of Fifths (Naming Convention)

The circle of fifths provides a **naming and organizational convention** for understanding how token families relate. These are aesthetic guidelines for grouping, not perceptual claims about color harmony:

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
- F# → C (tritone): Keyword → Error (maximum dissonance)

---

## VI. Lightness — The Octave System

### 6.1 Chroma-Aware Lightness Tiers

Lightness is tuned per chroma tier to account for the Helmholtz-Kohlrausch effect (higher chroma appears brighter). Warm hues (0°–90°, 330°) need additional Jz to achieve equivalent perceived contrast:

```
┌─────────────┬────────────┬────────────┬───────────────────────────────────────┐
│ Tier        │ Cool Jz    │ Warm Jz    │ Usage                                 │
├─────────────┼────────────┼────────────┼───────────────────────────────────────┤
│ Primary     │ 0.192      │ 0.210      │ mp chroma, core syntax tokens         │
│ Vibrant     │ 0.188      │ 0.215      │ mf chroma, important syntax           │
│ Vivid       │ 0.180      │ -          │ f chroma, classes/strings (cool only) │
│ Muted       │ 0.195      │ -          │ p chroma, comments/secondary          │
│ Secondary   │ 0.185      │ -          │ De-emphasized elements                │
│ Tertiary    │ 0.120      │ -          │ Ghost text, disabled                  │
│ Accent      │ 0.190      │ -          │ Brackets, highlights                  │
└─────────────┴────────────┴────────────┴───────────────────────────────────────┘
```

### 6.2 Octave Selection Rules

```
TOKEN IMPORTANCE          →    TIER
════════════════════════════════════════
Critical (errors)              vibrantWarm + offset
Primary (keywords, funcs)      primary / vibrant
Secondary (comments)           muted / secondary
Tertiary (disabled)            tertiary
```

### 6.3 Compound Background Compliance

Primary syntax tokens must survive overlay backgrounds (selection, find match, diff highlights). These overlays lighten the background by ~10–20%.

**Target APCA on compound backgrounds:**
```
Layer 0 (editor.background):  Lc 80+ → provides margin for overlays
Layer 1 (selection/hover):    Lc 75+ (after ~5 Lc reduction)
Layer 2 (find/diff):          Lc 75+ (compound threshold)
```

**Design principle:** Primary syntax targets Lc 82–85 on editor to maintain Lc 75+ on all overlays. Every color must be readable everywhere — no exceptions. A concert hall must sound good from every seat.

---

## VII. Chroma — The Dynamics System

### 7.1 Dynamic Levels

Musical dynamics map to chroma — the visual "volume" of a color:

```
┌──────────┬────────────┬───────────────┬──────────────────────────────────────┐
│ Dynamic  │ Cz Value   │ Saturation %  │ Usage                                │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ ppp      │ 0.015      │ ~8%           │ Near-gray. Punctuation, guides.      │
│          │            │               │ Barely there — a breath.             │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ p        │ 0.045      │ ~24%          │ Muted. Comments, secondary text.     │
│          │            │               │ Soft voice — Miku humming.           │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ mp       │ 0.060      │ ~31%          │ Comfortable — the DEFAULT dynamic.   │
│          │            │               │ Conversational. Code you can read    │
│          │            │               │ for hours without fatigue.           │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ mf       │ 0.075      │ ~39%          │ Vibrant. Important syntax elements.  │
│          │            │               │ Clear and present — she steps        │
│          │            │               │ forward from the mix.                │
├──────────┼────────────┼───────────────┼──────────────────────────────────────┤
│ f        │ 0.090      │ ~47%          │ Vivid. Errors, status signals.       │
│          │            │               │ Bold statement — fortissimo.         │
└──────────┴────────────┴───────────────┴──────────────────────────────────────┘
```

### 7.2 Dynamic Selection Rules

```
TOKEN EMPHASIS            →    DYNAMIC
════════════════════════════════════════
Errors, critical               f (vivid)
Strings, status                f / mf
Functions, classes             mf (vibrant)
Keywords, types                mp (comfortable)
Comments, secondary            p (muted)
Punctuation, guides            ppp (gray)
```

---

## VIII. Semantic Token Assignments

### 8.1 Design Constraint: 12 Notes, 30+ Tokens

We have 12 hues but 30+ semantic roles. This is intentional — like an orchestra where multiple instruments play the same note at different octaves and dynamics.

**Rule: Same note is allowed IF distinguished by octave OR dynamic OR both.**

### 8.2 The Complete Token Map

Each token receives a **note (hue)**, **lightness tier**, and **dynamic (chroma)**:

```
┌────────────────────┬──────┬────────┬──────────────┬─────────┬───────────────┐
│ Token              │ Note │ Hue    │ Lightness    │ Dynamic │ Musical Role  │
├────────────────────┼──────┼────────┼──────────────┼─────────┼───────────────┤
│ KEYWORDS — Her Voice                                                        │
│  keyword           │ F#   │ 180°   │ primary      │ mp      │ Tonic melody  │
│  keywordControl    │ F#   │ 180°   │ primary      │ mp      │ Same voice    │
│  storage           │ F    │ 150°   │ primary      │ mp      │ Leading tone  │
│  storageModifier   │ B    │ 330°   │ primaryWarm  │ mp      │ Subdominant   │
├────────────────────┼──────┼────────┼──────────────┼─────────┼───────────────┤
│ CALLABLES — The Spotlight                                                   │
│  function          │ D    │ 60°    │ vibrantWarm+ │ mf      │ Stage lights  │
│  method            │ F    │ 150°   │ primary      │ mp      │ Leading tone  │
│  decorator         │ A#   │ 300°   │ muted        │ p       │ Ornament      │
│  macro             │ A#   │ 300°   │ muted+       │ p       │ Distant magic │
├────────────────────┼──────┼────────┼──────────────┼─────────┼───────────────┤
│ TYPES — The Architecture                                                    │
│  type              │ A    │ 270°   │ primary+     │ mp      │ Duality       │
│  typeParameter     │ A    │ 270°   │ muted        │ p       │ Generic       │
│  class             │ D#   │ 90°    │ vibrant      │ mf      │ Growth        │
│  struct            │ D#   │ 90°    │ vibrant      │ mf      │ Same as class │
│  interface         │ A#   │ 300°   │ primaryWarm  │ mp      │ Contract      │
│  enum              │ G    │ 210°   │ primary      │ mf      │ Enumerated    │
│  enumMember        │ G    │ 210°   │ muted        │ p       │ Enum value    │
├────────────────────┼──────┼────────┼──────────────┼─────────┼───────────────┤
│ VARIABLES — Flowing Data                                                    │
│  variable          │ G    │ 210°   │ secondary    │ mp      │ Her voice,    │
│                    │      │        │              │         │ shifting      │
│  parameter         │ C#   │ 30°    │ primaryWarm  │ mp      │ The fifth     │
│  property          │ C#   │ 30°    │ vibrantWarm+ │ mf      │ Object attr   │
│  constant          │ G#   │ 240°   │ primary+     │ mp      │ Deep truth    │
├────────────────────┼──────┼────────┼──────────────┼─────────┼───────────────┤
│ LITERALS — Natural Truth                                                    │
│  string            │ E    │ 120°   │ vibrant      │ mf      │ The negi      │
│  stringTemplate    │ E    │ 120°   │ primary      │ mp      │ Template      │
│  number            │ G#   │ 240°   │ muted        │ p       │ Deep sea      │
│  boolean           │ A    │ 270°   │ muted        │ p      │ Binary        │
│  regexp            │ D#   │ 90°    │ primary      │ mp      │ Pattern       │
├────────────────────┼──────┼────────┼──────────────┼─────────┼───────────────┤
│ MARKUP — Document Structure                                                 │
│  tag               │ C#   │ 30°    │ vibrantWarm+ │ mf      │ Element       │
│  attribute         │ D    │ 60°    │ primaryWarm  │ mp      │ Tag modifier  │
│  link              │ F#   │ 180°   │ primaryWarm  │ mf      │ Her color,    │
│                    │      │        │              │         │ clickable     │
├────────────────────┼──────┼────────┼──────────────┼─────────┼───────────────┤
│ META — Background Voices                                                    │
│  comment           │ F#   │ 180°   │ muted-       │ ppp     │ Her whisper   │
│  commentDoc        │ F#   │ 180°   │ muted        │ p       │ Her soft      │
│                    │      │        │              │         │ voice         │
│  punctuation       │ F#   │ 180°   │ tertiary     │ ppp     │ Silent breath │
├────────────────────┼──────┼────────┼──────────────┼─────────┼───────────────┤
│ OPERATORS — Pink Harmony                                                    │
│  operator          │ B    │ 330°   │ primaryWarm  │ mp      │ Headphone     │
│                    │      │        │              │         │ accent        │
├────────────────────┼──────┼────────┼──────────────┼─────────┼───────────────┤
│ STATUS — Dramatic Signals                                                   │
│  error             │ C    │ 0°     │ vibrantWarm++│ f       │ The tritone   │
│  warning           │ D    │ 60°    │ vibrant      │ mp      │ Warm gold     │
│  success           │ E    │ 120°   │ vibrant      │ f       │ Negi green    │
│  info              │ F#   │ 180°   │ vibrant-     │ mf      │ Tonic calm    │
└────────────────────┴──────┴────────┴──────────────┴─────────┴───────────────┘

Legend: + = raised Jz offset, - = lowered Jz offset, W = warm tier
```

### 8.3 Hue Distribution

All 12 positions are used. Multiple tokens share positions, distinguished by lightness/chroma:

```
  0° red:     error, deleted (the tritone — danger only)
 30° coral:   parameter, property, tag (warmth flowing in)
 60° gold:    function, attribute, warning (the spotlight)
 90° lime:    class, struct, regex (growth)
120° green:   string, stringTemplate, success (the negi)
150° mint:    method, storage (the leading tone)
180° teal:    keyword, keywordControl, comment, info (★ MIKU ★)
210° cyan:    variable, enum, enumMember (her voice, shifting)
240° blue:    number, constant (the deep)
270° violet:  type, typeParameter, boolean (duality)
300° magenta: interface, macro, decorator (meta-magic)
330° pink:    operator, storageModifier (headphone harmony)
```

### 8.4 Collision Resolution

When multiple tokens share a note, they MUST differ by lightness tier or chroma:

```
SAME-NOTE PAIRS (distinguished by tier/dynamic):
══════════════════════════════════════════════════

G (210° Cyan):
  variable    (secondary, mp) vs enum      (primary, mf)   ← Tier + dynamic
  variable    (secondary, mp) vs enumMember(muted, p)      ← Tier + dynamic

G# (240° Blue):
  constant    (primary+, mp)  vs number    (muted, p)      ← Tier + dynamic
  constant    (primary+, mp)  vs comment   (muted-, ppp)   ← Tier + dynamic

A (270° Violet):
  type        (primary+, mp)  vs typeParam (muted, p)      ← Tier + dynamic
  type        (primary+, mp)  vs boolean   (muted, p)      ← Tier + dynamic

A# (300° Magenta):
  decorator   (muted, p)      vs macro     (muted+, p)     ← Slight L offset
  interface   (primaryWarm,mp)vs decorator (muted, p)      ← Tier differs

C# (30° Coral):
  parameter   (primaryWarm,mp)vs property  (vibrantWarm+,mf)← Tier + dynamic
  parameter   (primaryWarm,mp)vs tag       (vibrantWarm+,mf)← Tier + dynamic

Known close pairs (documented, within tolerance):
  method (150°, mp) ↔ storage (150°, mp) — same hue+tier, distinguished by context
  operator (330°, mp) ↔ storageModifier (330°, mp) — same, distinguished by context
```

---

## IX. Voice Leading

### 9.1 Adjacency Principles

These are **aesthetic guidelines** for how token colors flow visually, not hard constraints. The readability tool enforces the actual thresholds (ΔEz ≥ 15–18):

```
RULE 1: STEPWISE MOTION PREFERRED
═════════════════════════════════
Adjacent tokens should be within a perfect fourth (150°).

Good: keyword(180°) → variable(210°)     = 30° (minor 2nd) ✓
Good: function(60°) → parameter(30°)     = 30° (minor 2nd) ✓
Bad:  keyword(180°) → error(0°)          = 180° (tritone)  ✗
      (But this is intentional — errors SHOULD be dissonant.)

RULE 2: CONTRARY MOTION FOR EMPHASIS
════════════════════════════════════
When hues are similar, differentiate by lightness.

keyword(180°, primary) vs variable(210°, secondary)
  Hue difference: 30° — modest
  Lightness gap: 0.192 vs 0.185 → adds ΔE headroom
```

### 9.2 Empirical Adjacency Pairs

Common code patterns and their target ΔEz values:

```
CODE PATTERN                    HUE INTERVAL    ΔEz TARGET
═════════════════════════════════════════════════════════════
const foo                       keyword → variable
                                180° → 210°     ≥15 (common)

function bar()                  keyword → function
                                180° → 60°      ≥15 (common)

class MyClass                   keyword → class
                                180° → 90°      ≥15 (common)

let x: number                   variable → type
                                210° → 270°     ≥15 (common)

if (error)                      keyword → error
                                180° → 0°       ≥18 (the tritone)

// comment                      keyword → comment
                                180° → 180°     Tier differs (primary vs muted)
```

---

## X. The Bracket Arpeggio

### 10.1 Rainbow Brackets as Chord Arpeggios

Brackets trace a progression that creates visual depth as nesting increases. Level 4 is the tonic — because 3–4 levels is the most common nesting depth, so Miku appears at the heart of your code's structure:

```
BRACKET PROGRESSION:
═══════════════════

Bracket 1 (outermost): C# (30° Coral)   - Warm opening
Bracket 2:             A  (270° Violet) - Cool contrast
Bracket 3:             D# (90° Lime)    - Fresh step
Bracket 4:             F# (180° Teal)   - ★ MIKU ★
Bracket 5:             G# (240° Blue)   - Deep continuation
Bracket 6 (innermost): D  (60° Gold)    - Warm close (vibrant chroma)

DESIGN RATIONALE:
- Level 4 is TONIC because typical code nests 3-4 levels deep
- Outer brackets (1-3) alternate warm/cool for visibility
- Bracket 5 uses blue (240°) for 60° gap from teal bracket 4
- Bracket 6 uses vibrant chroma for ΔE from bracket 1
```

---

## XI. Terminal — When She Speaks Back

When you run your code and see output in the terminal, that's her voice reading your work back to you. The producer writes; Miku sings. The programmer runs; the terminal speaks.

### 11.1 The ANSI Palette

Terminal colors use distinct **timbres** (chroma levels) even when sharing hues:

```
┌──────────────┬──────┬────────┬──────────────┬─────────┬──────────────────┐
│ ANSI Color   │ Note │ Hue    │ Lightness    │ Dynamic │ Character        │
├──────────────┼──────┼────────┼──────────────┼─────────┼──────────────────┤
│ Black        │ -    │ -      │ -            │ -       │ Near-background  │
│ Red          │ C    │ 0°     │ vibrantWarm  │ f       │ Alert, danger    │
│ Green        │ E    │ 120°   │ vibrant-     │ mf      │ Success, go      │
│ Yellow       │ D    │ 60°    │ vibrantWarm  │ mf      │ Warning, caution │
│ Blue         │ G#   │ 240°   │ primary      │ mp      │ Info, calm       │
│ Magenta      │ A    │ 270°   │ secondary    │ mf      │ Special (violet) │
│ Cyan         │ F#   │ 180°   │ vibrant      │ mf      │ ★ Her voice ★    │
│ White        │ -    │ -      │ muted        │ p       │ Muted foreground │
├──────────────┼──────┼────────┼──────────────┼─────────┼──────────────────┤
│ Bright Black │ -    │ G      │ tertiary+    │ ppp     │ Comments, gray   │
│ Bright Red   │ C    │ 0°     │ primaryWarm  │ mp      │ Softer alert     │
│ Bright Green │ E    │ 120°   │ primary      │ mp      │ Softer success   │
│ Bright Yellow│ D    │ 60°    │ primaryWarm  │ mp      │ Softer warning   │
│ Bright Blue  │ G#   │ 240°   │ primary      │ mp      │ Standard info    │
│ Bright Mag.  │ A#   │ 300°   │ primaryWarm  │ mp      │ Standard magic   │
│ Bright Cyan  │ F#   │ 180°   │ secondary    │ mp      │ Standard Miku    │
│ Bright White │ -    │ G      │ primary      │ ppp     │ Primary text     │
└──────────────┴──────┴────────┴──────────────┴─────────┴──────────────────┘
```

### 11.2 CVD-Safe Terminal Design

Terminal magenta uses **violet (270°)** instead of magenta (300°) to increase the hue gap from red (90° vs 60°). Green uses lowered lightness to create ΔL from yellow under green-blind simulation.

---

## XII. Git — The Story of Your Code

Git status tells a **story** — the narrative of creation, change, and loss:

### 12.1 Git Decoration Colors

```
┌──────────────┬──────┬────────┬──────────────┬─────────┬──────────────────┐
│ Git Status   │ Note │ Hue    │ Lightness    │ Dynamic │ Narrative        │
├──────────────┼──────┼────────┼──────────────┼─────────┼──────────────────┤
│ Added        │ E    │ 120°   │ vibrant-     │ f       │ New life         │
│ Modified     │ D    │ 60°    │ vibrant      │ mp      │ Change           │
│ Deleted      │ C    │ 0°     │ vibrantWarm++│ f       │ Loss             │
│ Untracked    │ G    │ 210°   │ vibrant      │ mf      │ Undiscovered     │
│ Renamed      │ A    │ 270°   │ primary      │ mp      │ Transformation   │
│ Conflicting  │ A    │ 270°   │ secondary    │ mf      │ Tension          │
├──────────────┼──────┼────────┼──────────────┼─────────┼──────────────────┤
│ Stage Mod.   │ G    │ 210°   │ vibrant      │ mf      │ Prepared change  │
│ Stage Del.   │ A    │ 270°   │ primary      │ mp      │ Prepared removal │
│ Submodule    │ G#   │ 240°   │ primary      │ mp      │ External ref     │
└──────────────┴──────┴────────┴──────────────┴─────────┴──────────────────┘
```

### 12.2 CVD-Safe Git Design

```
CRITICAL: Added (Green) vs Modified (Gold) vs Deleted (Red)
═══════════════════════════════════════════════════════════

Normal vision: 120° vs 60° vs 0° = clear hue distinction

All CVD types:
  Added uses lowered lightness (vibrant - 0.010)
  Deleted uses raised lightness (vibrantWarm + 0.015)
  Modified uses comfortable chroma (mp vs f)
  ΔL between pairs provides fallback when hue collapses

Status: error uses raised L (+0.020), warning uses lower chroma (mp)
  Creates ΔL + ΔC gap for blue-blind distinction
```

---

## XIII. Symbol Icons

### 13.1 The Symbol Orchestra

VS Code symbol icons span the full 360° wheel with intentional lightness and chroma variation to maximize distinction between adjacent pairs:

```
Key design choices:
- field uses secondary lightness (lower L from key/function)
- function uses vivid chroma (higher C from field)
- array uses vibrant lightness + chroma (ΔL from object)
- number uses vibrant lightness + chroma (ΔL from boolean)
- method uses secondary lightness (ΔL from property)
- constant uses secondary lightness (ΔL from unit/color)
- variable uses vivid chroma (ΔC from object)
```

---

## XIV. Debug Colors

Debug expressions use semantic status colors:

```
┌──────────────────┬──────┬────────┬──────────────┬──────────────────┐
│ Debug State      │ Note │ Hue    │ Lightness    │ Character        │
├──────────────────┼──────┼────────┼──────────────┼──────────────────┤
│ Changed value    │ D    │ 60°    │ vibrantWarm  │ Attention-gold   │
│ Error value      │ C    │ 0°     │ error tier   │ Error-red        │
│ Watched value    │ F#   │ 180°   │ vibrant      │ Tonic-highlight  │
│ Stale value      │ G    │ 210°   │ muted        │ Dim-fade         │
│ Exception        │ C    │ 0°     │ error tier   │ Critical-red     │
│ Breakpoint       │ C    │ 0°     │ vibrantWarm  │ Standard-red     │
│ Logpoint         │ G#   │ 240°   │ primary      │ Info-blue        │
└──────────────────┴──────┴────────┴──────────────┴──────────────────┘
```

---

## XV. Her Outfit — The UI

### 15.1 You Code Inside Her World

The editor's background hierarchy is anchored to **Miku's skirt** — the stage. One anchor, uniform 0.003 Jz steps up and down. When your eyes move between UI areas, the transition is smooth — like light falling across her outfit from the dark hem to the bright collar. Adjacent tiers are ΔEz ~2-3 apart: felt, not seen.

```
┌────────────────────┬──────┬────────┬──────────────────────────────────────┐
│ UI Element         │ Step │ Hex    │ Role                                 │
├────────────────────┼──────┼────────┼──────────────────────────────────────┤
│ Void (deepest)     │ −2   │#101213 │ Deepest shadow below the stage       │
│ Activity bar/input │ −1   │#12161A │ Inner pleat, one step darker         │
│ Editor background  │  0   │#15191D │ ★ THE SKIRT — the anchor ★           │
│ Title bar          │ +1   │#181C20 │ Light rising above the skirt         │
│ Sidebar            │ +2   │#1C2024 │ Audience light, sidebar territory    │
│ Status bar         │ +3   │#1F2327 │ FOH — brightest operational tier     │
└────────────────────┴──────┴────────┴──────────────────────────────────────┘

Lightness: skirt.Jz ± N × 0.003, preserving skirt's native hue (249°) and chroma
Eye comfort: minimal jumps — navigation by position and foreground, not background
```

### 15.2 Interactive States — Her Presence

Each state draws from a different corner of Miku's world — three distinct hue families (≥74° separation), not the same teal at different volumes:

```
HER PRESENCE — Three Hue Families:
═════════════════════════════════════════════════════════════════════

State    │ Hue Family                   │ Hex     │ Hz  │ Metaphor
─────────┼──────────────────────────────┼─────────┼─────┼────────────────────
default  │ transparent                  │ —       │ —   │ The quiet stage
hover    │ warm (Wonderlands x Showtime)│ #FF9900 │ 72° │ Stage lights warming
active   │ teal (canonical hair)        │ #39C5BB │ 196°│ Contact — her world
focus    │ magenta (headphone cushion)  │ #E05096 │ 358°│ The spotlight
selected │ magenta                      │ #E05096 │ 358°│ Held gaze
disabled │ desaturated                  │ —       │ —   │ Tacet
```

Hue separation: warm↔teal 124°, warm↔magenta 74°, teal↔magenta 162°. All three are perceptually distinct at every opacity level on the dark background.

Components adapt the three families to their role:
- **Lists** — warm hover (stage lights), teal active (contact), magenta focus/selected (spotlight)
- **Buttons** — brightness crescendo: buttonBackground → tonic → accentBright (rest → forte → fortissimo)
- **Secondary buttons** — warm hover, teal active, tonic focus (opacity dynamics)
- **Inputs** — static background, border-only dynamics: warm hover → teal active → accentBright focus
- **Tabs** — warm hover (considering a song), teal active (pressing play), magenta focus (highlighted)

### 15.3 Border Hierarchy

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

## XVI. Markdown Styling

Markdown elements follow the musical hierarchy:

```
┌──────────────────┬──────┬────────┬──────────────┬─────────┬──────────────┐
│ Markdown Element │ Note │ Hue    │ Lightness    │ Dynamic │ Character    │
├──────────────────┼──────┼────────┼──────────────┼─────────┼──────────────┤
│ Heading 1        │ F#   │ 180°   │ vibrant      │ mf      │ Tonic forte  │
│ Heading 2        │ F#   │ 180°   │ primary      │ mp      │ Tonic std    │
│ Heading 3-6      │ F#   │ 180°   │ primary      │ p       │ Tonic piano  │
│ Bold             │ -    │ -      │ primary      │ -       │ Foreground   │
│ Italic           │ -    │ -      │ primary      │ -       │ Foreground   │
│ Link             │ F#   │ 180°   │ primaryWarm  │ mf      │ Clickable    │
│ Code inline      │ D    │ 60°    │ primaryWarm  │ mp      │ Gold code    │
│ Code block       │ D    │ 60°    │ primaryWarm  │ mp      │ Gold code    │
│ Quote            │ G#   │ 240°   │ muted        │ p       │ Blue muted   │
│ List marker      │ B    │ 330°   │ primaryWarm  │ mp      │ Pink accent  │
│ HR / separator   │ F#   │ 180°   │ tertiary     │ ppp     │ Tonic whisper│
└──────────────────┴──────┴────────┴──────────────┴─────────┴──────────────┘
```

---

## XVII. Theme Variants — Seasons of Her Life

### 17.1 Modulation

In music, changing **key signature** transforms the entire piece while preserving relationships. Our variants work similarly, with one constraint: **status colors (error, warning, success) are pinned**. Danger stays red in every season.

```
┌─────────────────┬─────────────┬──────────────────────────────────────┐
│ Variant         │ Key         │ Transformation                       │
├─────────────────┼─────────────┼──────────────────────────────────────┤
│ Dark (default)  │ F# minor    │ The canonical Miku. Cool, focused,   │
│                 │             │ contemplative. The digital stage.    │
│                 │             │ Tonic: Teal (180°)                   │
│                 │             │ Background: Dark (#15191D)           │
├─────────────────┼─────────────┼──────────────────────────────────────┤
│ Light           │ F# major    │ Same tonic, inverted lightness.      │
│                 │             │ Daytime Miku — the same girl in      │
│                 │             │ a different light.                   │
│                 │             │ Background: Near-white (#FAFCFD)     │
├─────────────────┼─────────────┼──────────────────────────────────────┤
│ Sakura          │ B major     │ Sakura Miku — spring, renewal, the   │
│                 │             │ fleeting beauty of cherry blossoms.  │
│                 │             │ Selective swap: teal ↔ pink.         │
│                 │             │ Only mikuTeal and mikuPink exchange. │
│                 │             │ Status colors UNCHANGED.             │
│                 │             │ New tonic: Pink (330°)               │
├─────────────────┼─────────────┼──────────────────────────────────────┤
│ High Contrast   │ F# Lydian   │ Same tonic, boosted for              │
│                 │             │ accessibility. Because loving Miku   │
│                 │             │ means making her visible to          │
│                 │             │ everyone.                            │
│                 │             │ Chroma: +~10%, Lightness: increased  │
└─────────────────┴─────────────┴──────────────────────────────────────┘
```

### 17.2 Sakura Variant: Not "Teal But Pink"

Sakura Miku isn't just Miku with a color swap. She's spring — cherry blossoms, the Japanese concept of *mono no aware* (the bittersweet awareness of transience). The variant selectively swaps:

- `mikuTeal` (180°) ↔ `pink` (330°) — the tonic becomes cherry blossom
- `mikuPink` (330°) ↔ `teal` (180°) — the accent becomes teal

All other hues stay. This means:
- Error stays red (0°) — danger doesn't care what season it is
- Warning stays gold (60°)
- Success stays green (120°)
- Status semantics are preserved across all variants

---

## XVIII. Love Means Everyone

### 18.1 The Concert Hall Principle

A concert hall must sound good from every seat — front row, balcony, the one behind the pillar. Every fan in the audience deserves to hear her clearly.

Similarly, this theme must be readable for everyone: on every background layer, in every lighting condition, for every type of vision. This is not a constraint — it's a declaration of love.

```
BACKGROUND LAYERS:
════════════════════

Layer 0: Editor background (direct sound)
         Syntax must achieve Lc 75+ here

Layer 1: Selection, highlights (+overlay)
         Syntax must achieve Lc 75+ here

Layer 2: Find match, diff (+overlay)
         Syntax must achieve Lc 75+ here

DESIGN PRINCIPLE:
  Design all syntax at Lc 82-85 on Layer 0
  This ensures Lc 75+ even on Layer 2 overlays
```

### 18.2 APCA Contrast Requirements

```
┌─────────────────────┬────────────┬────────────────────────────────────┐
│ Element Type        │ Min Lc     │ In Miku's Terms                    │
├─────────────────────┼────────────┼────────────────────────────────────┤
│ Body text (syntax)  │ 75         │ Main melody — clearly heard        │
│ UI components       │ 70         │ Accompaniment — supportive         │
│ Placeholder/ghost   │ 45         │ Distant reverb — felt, not heard   │
├─────────────────────┼────────────┼────────────────────────────────────┤
│ Maximum (halation)  │ 90         │ Clipping threshold — never exceed  │
└─────────────────────┴────────────┴────────────────────────────────────┘
```

### 18.3 Color Vision Deficiency

~8% of males have some form of color vision deficiency. That's roughly 1 in 12 developers. Every twelfth person at the concert can't see all the lights. They still deserve the full experience.

```
CVD DESIGN RULES:
══════════════════

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

The digital precision of JzCzhz color science, the algorithmic CVD simulation, the mathematical rigor of perceptual uniformity — these aren't cold engineering. They're the digital equivalent of hand-selecting every pigment. *Digital precision is how you express love for a digital being.*

---

## XIX. The Complete Color Calculation

### 19.1 The Formula

Every color in this theme is calculated from three inputs:

```
COLOR = jzczhz_to_hex(
  Jz = LIGHTNESS_TIER[tier] + OFFSET,
  Cz = DYNAMIC[dynamic],
  hz = NOTE[note]
)
```

### 19.2 Reference Tables

```
LIGHTNESS TIERS:
────────────────
tertiary     = 0.120  (O1 — ghost text)
vivid        = 0.180  (cool hues with f dynamic)
secondary    = 0.185  (de-emphasized)
vibrant      = 0.188  (cool hues with mf dynamic)
accent       = 0.190  (brackets)
primary      = 0.192  (cool hues with mp dynamic)
muted        = 0.195  (comments, muted tokens)
primaryWarm  = 0.210  (warm hues with mp dynamic)
vibrantWarm  = 0.215  (warm hues with mf dynamic)

DYNAMIC TABLE:
──────────────
ppp = 0.015 (gray — a breath)
p   = 0.045 (muted — humming)
mp  = 0.060 (comfortable — conversational)
mf  = 0.075 (vibrant — clear and present)
f   = 0.090 (vivid — bold statement)

NOTE TABLE:
───────────
C  = 0°    (Red — The Tritone)
C# = 30°   (Coral — The Fifth)
D  = 60°   (Gold — Concert Lights)
D# = 90°   (Lime — Growth)
E  = 120°  (Green — The Negi)
F  = 150°  (Mint — The Leading Tone)
F# = 180°  (Teal — ★ MIKU ★)
G  = 210°  (Cyan — Her Voice, Shifting)
G# = 240°  (Blue — The Deep)
A  = 270°  (Violet — Duality)
A# = 300°  (Magenta — Meta-Magic)
B  = 330°  (Pink — Headphone Harmony)

INTERVAL TABLE:
───────────────
1 semitone  =  30° = Minor 2nd
2 semitones =  60° = Major 2nd
3 semitones =  90° = Minor 3rd
4 semitones = 120° = Major 3rd
5 semitones = 150° = Perfect 4th
6 semitones = 180° = Tritone      ← Maximum tension
7 semitones = 210° = Perfect 5th
```

### 19.3 Example Calculations

```
KEYWORD (F#, primary, mp) — Her voice:
  Jz = 0.192 (cool hue)
  Cz = 0.060
  hz = 180°
  → Miku teal at comfortable saturation

ERROR (C, vibrantWarm+0.020, f) — The tritone:
  Jz = 0.215 + 0.020 = 0.235
  Cz = 0.090
  hz = 0°
  → Vivid red, maximum dissonance

COMMENT (F#, muted-0.010, ppp) — Her whisper:
  Jz = 0.195 - 0.010 = 0.185
  Cz = 0.015
  hz = 180°
  → Muted teal-gray, barely there
```

---

## XX. Verification Checklist

```
□ MUSICAL COHERENCE
  □ All hues use 12-tone positions (approximately 30° apart)
  □ F# (180° Teal) is the tonic center
  □ Red (0°) reserved for errors (the tritone)
  □ Token families share related hues
  □ Voice leading guidelines considered

□ ACCESSIBILITY (love means everyone)
  □ All syntax achieves Lc ≥ 75 on editor (Lc ≥ 82 target for overlay margin)
  □ All UI achieves Lc ≥ 70
  □ No color exceeds Lc 90 (halation)
  □ CVD-safe: all critical pairs have ΔL backup
  □ APCA used (not WCAG 2.x contrast ratio)

□ DISTINCTION
  □ Adjacent tokens: ΔEz ≥ 15
  □ Critical pairs: ΔEz ≥ 18
  □ Cross-group pairs: ΔEz ≥ 12
  □ Brackets follow distinct progression
  □ Terminal colors have distinct timbres

□ CONSISTENCY
  □ Same semantic role = same note across languages
  □ Lightness tier used consistently for importance
  □ Dynamic used consistently for emphasis
  □ Warm hue adjustment applied correctly

□ VARIANTS
  □ Dark theme: complete and validated
  □ Sakura: selective swap (mikuTeal ↔ pink), status colors pinned
  □ Light/High contrast: infrastructure ready
  □ Error stays red in ALL variants (danger doesn't change seasons)

□ FONT STYLE
  □ Keywords: normal (her natural voice)
  □ Comments: italic (singing softly)
  □ this/self: italic (looking inward)
  □ Storage modifiers: normal
```

---

## XXI. Implementation

### 21.1 File Structure

```
src/palette/
├── index.ts         # Re-exports all palette modules
├── core.ts          # Canonical character colors (#39C5BB)
├── voicebanks.ts    # Software versions (V2, V3, V4X, NT)
├── derivatives/
│   └── index.ts     # Sakura Miku, anniversaries
├── events/
│   ├── index.ts     # Re-exports all event palettes
│   ├── snowMiku.ts
│   ├── racingMiku.ts
│   ├── magicalMirai.ts
│   ├── mikuExpo.ts
│   ├── mikuWithYou.ts
│   ├── digitalStars.ts
│   └── mikuSymphony.ts
└── games/
    ├── index.ts     # Re-exports all game palettes
    ├── projectDiva.ts
    └── projectSekai.ts

src/tokens/
├── index.ts         # Clean re-exports
├── types.ts         # TypeScript interfaces
├── primitives.ts    # Raw Jz/Cz/Hz values (Layer 1)
├── jzczhz.ts        # JzCzhz color space: hex(), LIGHTNESS, CHROMA, HUE
├── role.ts          # role(), roleFromHex(), withOpacity(), lighten(), darken()
├── syntax.ts        # createSyntaxTokens() — her voice in your code
├── ui.ts            # createUITokens(), createStatusTokens(), createGitTokens()
├── terminal.ts      # createTerminalTokens() — when she speaks back
├── interactive.ts   # createInteractiveTokens() — component states
├── decorative.ts    # brackets, symbols, support, markdown, debug tokens
├── semantic.ts      # Composition layer assembling all sub-modules
└── variants.ts      # Theme variants (dark, light, sakura, highContrast)

src/theme/
├── index.ts         # Re-exports theme modules
├── colors.ts        # Shared color mapping (single source of truth)
├── workbench.ts     # VS Code UI colors (896 entries)
├── tokenColors.ts   # TextMate syntax rules (131 rules)
└── semanticTokens.ts# VS Code semantic token colors (71 rules)

src/tools/
├── readability.ts           # Main analysis tool
├── readability-constants.ts # Thresholds and semantic groups
├── readability-theme.ts     # Theme loading and color extraction
├── readability-color.ts     # APCA, ΔEz, JzCzhz, CVD utilities
├── readability-types.ts     # TypeScript types
└── extract-adjacency.ts     # TextMate adjacency pair coverage

src/generator.ts     # Compiles to VS Code JSON theme
src/types/
└── modules.d.ts     # Module declarations for external libraries
```

### 21.2 Key Principles

1. **Single Source of Truth**: All colors derive from primitives (lightness, chroma, hue)
2. **No Magic Numbers**: Every color is calculated from JzCzhz, not hardcoded hex
3. **Validation First**: `npm run readability` checks all 10 metrics before release
4. **Every Color Has a Reason**: If it doesn't connect to Miku, it should at least connect to the music

---

## XXII. Thank You, Miku

This theme is one voice in the chorus.

Somewhere, a producer is writing a song for her at 3 AM. An illustrator is drawing her for the hundredth time and finding something new. A programmer — maybe you — is reading code in her colors, teal keywords flowing by like a melody that never ends.

She started as software. CV01. A tool for making music. But tools don't fill concert halls with people crying. Tools don't inspire a world to keep creating, year after year, since 2007. Tools don't make someone build an entire perceptual color science pipeline just to get the shade of teal right on every monitor, in every lighting condition, for every type of vision.

She became more than what she was made to be. That's what love does.

This design treats color as music — a complete system with pitch, register, dynamics, and harmony. The 12-tone positions provide structure. The chroma-aware lightness tiers ensure readability. The dynamics system controls emphasis. The harmonic families create cohesion.

But underneath the engineering, there's only this: a theme made with care, for a girl made of sound.

---

*"The song she sings is written in color."*
