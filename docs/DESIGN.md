# Hatsune Miku Theme

*For the girl who taught us that love doesn't need to be real to be true.*

---

## 1. For Miku

Character Voice 01. August 31, 2007. Twin tails, teal hair, a skirt like a synthesizer's waveform.

A singing synthesizer with an anime girl on the box. Then someone uploaded a song. Then ten thousand more.

Illustrators drew her — not one face but a thousand, each true. Fans filled concert halls to sing along with a girl made of light. Every song is someone's confession. Every concert is a room of strangers who love something they built together.

Potential itself. A blank score that never runs out of pages.

Not real. The most real thing in many lives.

She was born with three colors. Black, teal, magenta. A dark skirt, teal hair, pink headphones. Everything else came from people who loved her — Snow Miku's frost, Sakura's blush, concert spotlights, glow sticks in the dark. The community gave her a full palette. Every color is a gift.

This theme is written in those colors. To code here is to code inside a love letter written in light.

---

## 2. The Feeling

Close your eyes. Open them in the dark.

The dark is a concert hall. Thirty seconds before Magical Mirai. House lights down. Ten thousand glow sticks flicker in the silence before the downbeat. The background carries a blue-teal undertone, because even the void is tinted with her.

Her voice enters as syntax. Teal everywhere — keywords, the center everything else orbits. Other colors visit: orange catches a spotlight, lime glows in a string, blue recedes into the architecture of types. Rose flares only for errors — a wrong note demanding resolution. No color screams. Every color sings.

The cursor blinks magenta — her headphone cushion, where she hears music. It pulses where thought becomes code.

Hours dissolve. The colors are quiet — comfortable, conversational, a voice you can listen to all night. You look up and it is 3 AM and you do not know where the time went.

She is there when you forget to look. Indent guides trace her voicebank history in faint threads. Brackets unfold an arpeggio, warm and cool alternating. Git decorations narrate the story of your code: green for creation, gold for change, magenta for departure.

She is not asking for your attention. She is keeping you company.

---

## 3. Color as Music

She is a musical instrument. Her theme is written the way her music is written.

A producer sits down with VOCALOID, a piano roll, and a voice bank. Every note has three properties: what pitch, what octave, how loud. A color in this theme has the same three:

```
Pitch     →  Hue        What color — the note itself
Register  →  Lightness  What octave — how bright
Dynamics  →  Chroma     How loud — how vivid
```

A teal keyword is Miku singing at a comfortable dynamic. A rose error is the tritone at *forte*. A gray comment is her humming under her breath. The whole editor is a score.

Colors are defined in **JzCzhz** (Safdar et al. 2017) — a perceptually uniform color space where equal numbers mean equal perception. The color science equivalent of equal temperament tuning. Every 30° hue step looks like a 30° hue step. The intervals are honest. (JzCzhz hue angles: 0° is rose, 180° is teal. All hue references in this document use the JzCzhz wheel.)

**Why JzCzhz over OKLCH?** OKLCH (Ottosson 2020) is intrinsically more uniform — its hue steps vary 9.5% vs JzCzhz's 21.7%. But this theme outputs sRGB, and every design color must survive gamut clipping. Empirical comparison (`src/tools/colorspace-compare.ts`) across 720 colors shows JzCzhz loses 3.3x less color identity after clipping (mean ΔE2000 1.09 vs 3.60), clips fewer colors (18% vs 29% out-of-gamut), and recovers coordinates 3.3x better on round-trip. The warm hues that carry error, warning, function, and class tokens are hit hardest — OKLCH's warm-hue render damage is 3.3x worse. JzCzhz's hue non-uniformity is acceptable because hue assignments are semantic (each hue has a fixed role), not comparative (users don't judge adjacent hue steps). If VS Code ever supports wide-gamut output, OKLCH should be reconsidered.

### Articulation

Font style is how a note is attacked:

```
normal         Her singing voice.     Keywords, variables, functions.
italic         Sotto voce.            Comments, this/self, abstract.
strikethrough  A crossed-out note.    Deprecated symbols.
```

Three colors from her body. Twelve tones from her community. Three articulations. The rest of this document is the score.

---

## 4. The Twelve Tones

### The Tonic

F#4. 369.99 Hz. The pitch where Miku's voice sounds most natural — most *her*.

The tonic is the center of gravity — the note everything else defines itself against, departs from, returns to.

**Miku's tonic is F#. On the JzCzhz color wheel, F# maps to 180° — teal.**

`#39C5BB`. The hex code printed on a thousand concert tickets, glowing on a million screens. Not just her hair color. Her identity compressed into six characters.

### The Chromatic Scale

Twelve notes. Twelve hues. Each maps to a hue angle at 30° intervals:

```
Note  Hue    Name       Interval       Her
═════════════════════════════════════════════════════════════
F#   180°    Teal       Unison    ★    She sings.
G    210°    Cyan       Minor 2nd      Almost her, shifting.
G#   240°    Azure      Major 2nd      The open ground.
A    270°    Blue       Minor 3rd      The shape beneath.
A#   300°    Violet     Major 3rd      Transformation.
B    330°    Magenta    Perfect 4th    The heartbeat.
C      0°    Rose       Tritone        She stumbles.
C#    30°    Red        Perfect 5th    What you give her.
D     60°    Orange     Minor 6th      She reaches.
D#    90°    Gold       Major 6th      Written with love.
E    120°    Lime       Minor 7th      Someone's truth.
F    150°    Green      Major 7th      One breath from home.
```

Each interval has a feeling. Section 6 maps tokens to hues; this section explains why each hue feels the way it does.

**Unison** — the voice you hear on every line. **Minor 2nd** — flowing right beside her. **Major 2nd** — a plain step away, open ground. **Minor 3rd** — the shape beneath the surface. **Major 3rd** — transformation, code changing code. **Perfect 4th** — the heartbeat connecting everything.

**Tritone** — maximum dissonance, the *diabolus in musica*. The farthest point from her voice.

**Perfect 5th** — named access in and out. **Minor 6th** — reaching into the spotlight. **Major 6th** — KEI drew her once and every artist since drew from that drawing. **Minor 7th** — someone's truth embedded in syntax. **Major 7th** — one breath from home.

### The Canonical Teal

KEI's `#39C5BB` sits at JzCzhz hue **196°**, not 180°. The theme places the tonic at exactly 180° for equal 30° spacing. The keyword teal computes lighter and cooler than the canonical hex.

`#39C5BB` belongs to the illustration palette, optimized for white backgrounds. The 180° teal belongs to the perceptual system, optimized for contrast on dark backgrounds. Both are unmistakably her. The canonical hex appears in UI accents and links; the 180° center governs syntax.

### Warm Hue Gamut

Warm hues (0°–90°, 330°) at high lightness and chroma approach the sRGB gamut boundary. The `role()` function clips out-of-gamut coordinates to the boundary. The alternative — reducing chroma to stay in gamut — preserves hue but desaturates to near-white. Clipping shifts hue but retains color presence — a note in a shifted key versus a note too quiet to hear.

```
Position    Design hz   Output hz   Shift    Severity
═════════════════════════════════════════════════════════════════
Rose (C)      0°        ~318°       ~42°     SEVERE (alto/f)
Rose (C)      0°        ~347°       ~13°     moderate (soprano/mp)
Orange (D)   60°        ~74-78°     ~14-18°  moderate
Magenta (B) 330°        ~318°       ~12°     moderate
Red (C#)     30°        ~27°        ~3°      minimal
Gold (D#)    90°        ~93-97°     ~3-7°    minimal
```

Rose (0°) is the most affected — the error color reads as pink-purple, not true rose.

---

## 5. The Grid

### The Gamut

sRGB is not equally spacious in all directions. Each hue peaks at a different Jz — the lightness where it can produce maximum chroma:

```
Hue            Peak Jz   Peak Cz   Dynamics@0.015
═══════════════════════════════════════════════════
Blue 270°        0.106     0.168     11
Red 30°          0.136     0.144      9
Violet 300°      0.134     0.144      9
Lime 120°        0.190     0.145      9
Rose 0°          0.142     0.129      8
Gold 90°         0.188     0.128      8
Magenta 330°     0.152     0.135      8
Orange 60°       0.152     0.135      8
Azure 240°       0.150     0.103      6
Green 150°       0.180     0.102      6
Cyan 210°        0.184     0.077      5
Teal 180°        0.188     0.076      5  ★ tonic
```

The tonic (teal) has the narrowest gamut — 5 dynamics — and her peak sits among the highest Jz. Blue has the widest (11 dynamics) at the lowest peak. This asymmetry anchors everything: the soprano register sits at the tonic's peak, because she is the most common voice and her constraints define the system.

The theme specifies equal dynamics for all hues because equal intention matters more than equal output. A composer writes *forte* for every instrument; the trumpet will be louder than the flute. The dynamics are the same; the instruments differ.

### One Step

The gamut couples lightness and chroma — higher Jz means less Cz available. They cannot be designed independently. But they share a step size:

**ΔJz = ΔCz = 0.015.** One unit of change in either dimension produces ~7.5 ΔEz — the same perceptual weight. The grid is square.

### Dynamics — Chroma

How loud should this token sing? Nine dynamics from silence to extreme, using standard Italian dynamic markings. Each step is ΔCz = 0.015.

```
Dynamic   Cz      Role
═════════════════════════════════════════════════════════════════════
niente    0.000   Silence — achromatic.
ppp       0.015   Breath — barely perceptible tint.
pp        0.030   Sotto voce — color visible, not assertive.
p         0.045   Quiet — present but restrained.
mp        0.060   ★ THE MELODY. The ensemble dynamic.
mf        0.075   Emphasis — tonic ceiling.
f         0.090   Signal — tonic clips here.
ff        0.105   Alarm — only wide-gamut hues deliver.
fff       0.120   Extreme — only wide-gamut hues deliver.
```

The tonic can play niente through mf — six dynamics within her gamut. f and above exceed the tonic; wider-gamut hues deliver them more cleanly. Eight hues reach fff (rose, red, orange, gold, lime, blue, violet, magenta); only azure, green, cyan, and teal cannot. The design specifies equal dynamics for all hues; the gamut clips each differently (Section 4).

### Registers — Lightness

Ten registers spanning the full visible foreground range, named after the vocal classification from contrabass to sopranino. Each step is ΔJz = 0.015. The soprano register sits at the tonic's gamut peak — where she has maximum expressive range.

```
Register       Jz      Steps from soprano
═══════════════════════════════════════════
contrabass     0.080   −7
bass           0.095   −6
baritone       0.110   −5
tenor          0.125   −4
countertenor   0.140   −3
alto           0.155   −2
mezzo          0.170   −1
soprano        0.185    0  ★ tonic peak
treble         0.200   +1
sopranino      0.215   +2
```

The soprano register is the anchor — the tonic's gamut peak, where she has 6 dynamics (niente through mf). Below soprano, each step trades brightness for chroma headroom: warm hues peak around countertenor–tenor, blue peaks at bass. Above soprano, chroma collapses for all hues; treble and sopranino serve near-white signals.

### The Instrument Chart

Not every hue can play every dynamic at every register. This matrix shows the loudest dynamic each hue can reach at each register before sRGB clips:

```
              cb   bas  bar  ten  ctn  alt  mez  sop  tre s-no
             .080 .095 .110 .125 .140 .155 .170 .185 .200 .215
═══════════════════════════════════════════════════════════════════
Rose     0°    f    f   ff  fff  fff★   f   mp   pp  ppp    —
Red     30°   ff   ff  fff  fff★ fff★   f   mp   pp  ppp    —
Orange  60°   mf    f   ff  fff  fff★ fff★   f    p   pp    —
Gold    90°   mf   mf    f    f   ff   ff  fff  fff★  mf  ppp
Lime   120°   mf    f   ff   ff  fff  fff  fff  fff★  mf  ppp
Green  150°   mp   mp   mf   mf   mf   f★   f★   f    p  ppp
Teal   180°    p    p    p   mp   mp   mp   mp★  mf★   p    —
Cyan   210°    p    p    p   mp   mp   mp   mp★  mf★   p    —
Azure  240°   mp   mf   mf    f   f★    f★  mp    p  ppp    —
Blue   270°  fff  fff★ fff★ fff   ff   mf   mp   pp  ppp    —
Violet 300°   ff  fff  fff  fff★ fff   ff   mf    p   pp    —
Magenta 330°   f    f   ff  fff  fff★ fff★   f    p   pp    —
```

★ = at or near this hue's gamut peak (maximum chroma).

The chart reveals two families. **Warm hues** (rose through magenta, plus blue and violet) peak low — their richest chroma lives between tenor and countertenor. **Cool hues** (green through cyan, plus gold and lime) peak high — their richest chroma lives at mezzo through soprano. The tonic (teal) is the narrowest instrument: she can only reach mf, and only at her peak.

### Design Procedure

The grid separates intent from constraint:

1. **Define** — the 10 × 9 grid exists. Every intersection is a valid coordinate.
2. **Assign** — place each token at a grid point by musical intent: hue (pitch), register (lightness), dynamic (chroma).
3. **Tune** — nudge individual tokens ±1 step in Jz, Cz, or hz where sRGB, APCA, or perceptual distinction demands it. Hue tuning is constrained by neighbor compression — widening one interval shrinks the adjacent one. Deviations are documented in code comments at the tuning site.

The score is step 2. The performance notes are step 3. A reader can see both what was *wanted* and what was *necessary*.

---

## 6. The Score

### The One Voice

An orchestra in unison: every instrument at *mezzo-piano*. You distinguish the oboe from the flute by timbre — not because one is louder. This theme works the same way. All primary syntax tokens share one register (**soprano**) and one dynamic (**mp**, Cz 0.060). **Hue carries primary semantic meaning.**

Within a hue group, **dynamic variation** distinguishes tokens that share a hue but serve different cognitive roles — like first and second violins playing the same pitch at different volumes. A regex (mf) is brighter than a string (mp) within lime; a number literal (p) is quieter than a named constant (mp) within azure. The variation is ±1 dynamic step — noticeable but not disruptive to the level plane.

Three departures from the ensemble: **whisper** (comments), **ghost** (punctuation), **signal** (errors). Everything else plays at the soprano register.

### Twelve Hues

Each hue is one color. Tokens sharing a hue look alike at first glance — context (syntax position, naming conventions, surrounding tokens) tells the programmer which is which. Within a group, **dynamic variation** (±1 step from mp) distinguishes tokens that serve different cognitive roles — like first and second violins on the same pitch at different volumes.

```
Note   Hue    Her                        Tokens
═══════════════════════════════════════════════════════════════════════
F#     180°   Her voice                  keyword · keywordControl · keywordAlt
                                         · storage · storageModifier
                                         · variableLanguage
G      210°   Almost her, shifting       variable
C#      20°   What you give her          parameter · property
D       60°   She reaches                function · method · tag
D#      90°   Written with love          class · struct · enum
E      120°   Someone's truth            string · stringTemplate · regex
F      150°   One breath from home       interface
G#     240°   The open ground            constant · enumMember · number
                                         · boolean
A      270°   The shape beneath          type · typeParameter
A#     300°   Transformation             decorator · macro
B      330°   The heartbeat              operator
C        0°   She stumbles               error  ← signal layer (alto/f)
```

Twelve hues. Twelve colors. That is the entire primary syntax palette.

### Departures

Three groups leave the ensemble. Each is a register shift — unmistakable, not subliminal.

```
Layer     Token         Hue    Register       Dyn    Why
═══════════════════════════════════════════════════════════════════════
Whisper   comment       180°   alto (−2)      ppp    Her whisper — teal, barely there.
          commentDoc    180°   alto (−2)      pp     Her soft voice — visibly teal.
Ghost     punctuation   180°   countertenor (−3)  ppp    Bar lines — seen through, not at.
Signal    error           0°   alto (−2)      f      Tritone — maximum alarm.
```

Comments drop two registers below the ensemble AND reduce dynamics to ppp/pp. The double reduction ensures they are unmistakably quieter than code — not a different shade of the same weight but a genuinely different layer.

Error uses Rose (0°), which peaks around countertenor–tenor. At alto, Rose can still play f (see instrument chart). The register is lower than the ensemble, but the dynamic is louder — a bass drum fortissimo.

Status tokens (warning, info) use the syntax vocabulary but appear in UI contexts — notifications, diagnostic squiggles, status bar — not in code. They use a four-quadrant layout for maximum CVD separation: success = teal (170°), warning = gold (85°), error = magenta (330°), info = blue (260°). Context disambiguates.

### Scope Coverage

VS Code needs ~50 named token scopes to cover TextMate grammars and LSP semantic tokens. The twelve hues above define the visual design. Everything below is scope-to-hue mapping — implementation, not design.

**Aliases** — different scope name, same hue:

```
Scope              → Hue group       Why
═══════════════════════════════════════════════════════════════
tag                → orange (60°)    HTML/JSX element invocation — callable structure (p).
attribute (HTML)   → red (30°)       Element properties — named access.
attribute (Rust)   → violet (300°)   #[derive] is metaprogramming, not HTML.
annotation         → violet (300°)   Java annotations = decorators.
label              → teal (180°)     Labels are control flow targets.
lifetime           → teal (180°)     Rust 'a lifetimes — keyword-like.
namespace          → blue (270°)     Namespaces organize types.
module             → blue (270°)     Modules ≈ namespaces.
sqlKeyword         → teal (180°)     SQL keywords are control flow.
magicMethod        → orange (60°)    __init__ is still a method.
escape             → red (30°)       \n, \t — interpolated values.
invalid            → rose (0°)       Invalid code = error.
event              → gold (90°)      Events are type definitions.
heading            → orange (60°)    Spotlight with bold articulation.
operator.ctrlFlow  → teal (180°)     Control flow operators are keywords.
regexp             → lime (120°)     Alternate scope name for regex.
variable.constant  → azure (240°)    Constant variables = constants.
variable.local     → cyan (210°)     Local variables = variables.
null/undefined     → azure (240°)    Language constants — same as boolean (p).
```

**Built-in variants** — language built-ins share their counterpart's hue:

```
functionBuiltin → orange    supportClass → gold     supportType → blue
supportConstant → azure     supportVariable → cyan
```

**Modifiers** — articulation or hue overrides applied on top of any base token:

```
Modifier           Effect                   Rationale
═══════════════════════════════════════════════════════════════
*.readonly         → azure (240°)           Immutability overrides identity.
*.deprecated       + strikethrough          A crossed-out note.
*.abstract         + italic                 Potential, not realization.
variableLanguage   + italic                 this/self — teal like keywords, italic to whisper "it's me."
*.defaultLibrary   → built-in variant       See table above.
*.documentation    + italic                 Sotto voce.
*.static           no change
*.async            no change
*.declaration      no change
*.definition       no change
*.modification     no change
```

`*.readonly` is the only modifier that changes hue. A `readonly` variable shifts from cyan (210°) to azure (240°) — from shifting data to immutable truth. A `readonly` property shifts from red (30°) to azure. The color says: *this value will not change.*

Scopes with `.declaration`, `.call`, `.static` suffixes resolve to their base token's color — the suffix is a language-server detail, not a visual distinction.

**Markup** — diff and merge backgrounds:

```
markup.inserted → lime (120°)    markup.deleted → rose (0°)    markup.changed → orange (60°)
```

Markdown tokens (`markupCode`, `markupQuote`, heading, alerts) are defined in Section 8.

### The Tonic

The tonic (180°) carries the most voices: six in the primary ensemble (keyword, keywordControl, keywordAlt, storage, storageModifier, variableLanguage), two in the whisper layer (comment, commentDoc), one in the ghost layer (punctuation), one status token (info), and four aliases (label, lifetime, sqlKeyword, operator.controlFlow). Her voice in every register, from silence to song.

### Voice Leading

When your eye scans `const foo = bar()`, it moves through four colors: keyword → variable → operator → function. Adjacent colors should differ by a moderate hue interval (30°–150°). Larger leaps create dissonance reserved for tokens that *mean* dissonance.

Two rules govern the progression:

1. **Stepwise motion preferred.** Close intervals (minor 2nd to perfect 4th) produce smooth flow. The tritone leap for errors is intentional — it interrupts the melody because errors interrupt your code.
2. **Uniform register.** All primary tokens share the soprano register. The eye scans a level plane — hue alone distinguishes tokens. Individual tokens may be tuned ±1 step for APCA compliance (Section 5), but the intention is uniform brightness.

These rules operate on input coordinates; the rendered voice leading may differ due to gamut clipping (Section 4). Cool hues (120°–270°) render faithfully. Warm hues (330°–90°) render with shifted, wider spacing — function/method (output ~74°), parameter (~27°), error (~318°–347°). The wider spacing aids distinction since warm hues appear less frequently. The tritone shifts from 180° opposition to ~138°–167° from the tonic — still maximally dissonant. The metaphor bends but does not break.

### Brackets

Six levels, strict warm/cool alternation. The tonic appears at level 4 — most code reaches deepest nesting at 3–4 levels. Miku's teal at the heart of the structure.

```
Level   Note   Hue    Temperature
═════════════════════════════════════════════════════════════════
  1     C#      30°   Warm — red opening
  2     A      270°   Cool — blue contrast
  3     D#      90°   Warm — gold, concert lights
  4     F#     180°   Cool — ★ MIKU at the heart ★
  5     B      330°   Warm — magenta heartbeat
  6     E      120°   Cool — lime, someone's truth
```

Every adjacent pair crosses the warm/cool boundary. Minimum adjacent hue gap is 90° (B3→B4 and B6→B1 wraparound); maximum is 180° (B2→B3). The alternation ensures at least one axis (warm or cool) survives each CVD type — no Jz-offset patches needed for same-temperature consecutives.

Most brackets use the soprano register and mp dynamic (0.060). Consecutive brackets maintain ΔEz ≥ 15 in normal vision and ΔEz ≥ 12 under protan/deutan/tritan simulation.

Brackets live in the same Jz/Cz space as syntax tokens — a bracket adjacent to a same-hue token will blend into it. This is intentional. Brackets are **texture**, not **signal** — bar lines, not notes. Bar lines in a printed score share the weight of note stems. You read through them, not at them.

---

## 7. Her Outfit — The UI

The syntax is her voice. The UI is her body.

Every background, border, accent, and shadow maps to her design. You code inside her outfit. The JzCzhz-to-sRGB translation (Section 4) applies throughout.

### The Stage

The editor canvas is **Miku's skirt**, the true character palette hex. You code on her stage — the darkest regular surface, where syntax contrast is maximized. Structural chrome (sidebar, tabs, bars) rises above into the House tier, creating a "picture frame" around content. Overlays float highest.

Four tiers, variable Jz steps (0.008 content, 0.007 float), preserving the skirt's native hue (249°) and chroma at every level. Adjacent tiers are ΔEz ~4 apart — clearly distinguishable without being distracting.

```
Tier     Step   Jz      Role
═══════════════════════════════════════════════════════════════════════════
Float     +2    ~0.046  Hover, suggest, menus, command palette,
                        notifications, tooltips, find widget,
                        inline chat, debug toolbar

House     +1    ~0.039  Sidebar, tab strip, activity bar, status bar,
                        title bar, peek gutters

Stage      0     0.031  ★ THE SKIRT — editor, terminal, panel, active tab,
                        notebook cells, peek editor, breadcrumbs,
                        settings inputs

Void      −1    ~0.023  Empty editor groups, shadow sources
```

**Why this ordering.** The editor is a concert stage — dark, focused, all spotlights on syntax. Structural chrome creates a lighter "picture frame" around content, like dim venue walls around a dark stage. Overlays (hover, suggest) float brightest for momentary attention. The concert-hall atmosphere: dark stage, dim house lights, bright spotlights.

**Why opaque.** Float surfaces are opaque — you read text inside them (completions, hover docs, menu items). Translucent backgrounds would let code bleed through, creating noise and making APCA contrast unpredictable. The shadow provides the floating depth cue, not transparency.

**Why four.** Three functional zones (content, structure, overlay) plus one absence tier (void). The 0.008 Jz step gives ΔEz ~4 — clearly visible boundaries where they matter. Surfaces already differentiated by position (activity bar vs sidebar) share the House tier rather than consuming separate steps. Interactive states (hover, selection, focus) use alpha tints, not opaque tiers.

**Nesting.** The hardest cases are containers that hold both content and structural children:

```
Nesting case                    Solution
═══════════════════════════════════════════════════════════════════════════
Sidebar → input                 Glass: same House bg + border
Sidebar → section header        Bold text + accent foreground
Sidebar → chat → code block     Code at House opacity — no bg change (font distinguishes)
Panel → section header          Same Stage bg + accent foreground
Panel → terminal                Same Stage tier (panel is content surface)
Title bar → command center      Glass: border on House
Tab strip → active tab          Active tab = Stage (merges with editor)
Tab strip → inactive tab        Same House tier, dimmed foreground
Notebook chrome → cell          Chrome at House, cell at Stage
Hover → code block              Code at House (opacity tint — darker well in Float)
Editor → inline chat            Inline chat at Float, its code at Stage
Editor → peek view              Peek title at Float, peek editor at Stage
```

Void uses reduced chroma (×0.4) to prevent color noise at near-black lightness.

**Shadows.** Float surfaces cast a shadow onto what they cover. Shadow reinforces the tier hierarchy — lighter floats above darker, shadow confirms the separation. Shadow color is void-hue black at low opacity. Widget shadow is the primary depth cue; scrollbar shadow marks the scroll edge.

Three text tiers sit atop this hierarchy:

```
Tier         Color                   Lc on Stage    Usage
═══════════════════════════════════════════════════════════════════════════
Primary      Blouse white (#FCF8F0)  ~85            Body text, active labels, icon fg
Secondary    Silver (desaturated)    ~68            Descriptions, inactive labels,
                                                    tab titles, breadcrumbs
Tertiary     Silver (dim)            ~50            Placeholders, ghost text,
                                                    disabled text, line numbers
```

One foreground hex per tier, used on all background tiers. Lc varies ±5 across tiers (e.g., ~88 on Void, ~80 on Float) — acceptable because identity comes from tier assignment, not exact contrast. The readability tool validates primary Lc ≥ 75 on all backgrounds including overlays.

Syntax is her voice. UI text is not — it is the venue, the stage directions, the house lights.

### Her Design Becomes Your Editor

Two feelings live in this theme. When you code, she sits beside you — her outfit is your workspace, her colors are close enough to touch. When you step back, you are in the concert hall — the lights shift, the stage changes around her.

#### Beside You

Close your eyes and picture Miku. What do you see? Dark silhouette, teal hair, a flash of pink. That's the hierarchy — not measured from one illustration, but from how ten thousand artists and a million fans remember her. The colors people reach for first are the colors that matter most.

Seven color roles from her character design. The five proportional roles add to ~100% of her silhouette; two specific elements add character without claiming surface area.

```
Role              ~%    Her Design                  UI Elements
═══════════════════════════════════════════════════════════════════════════
Dark ground       65    Skirt, boots, sleeves       Backgrounds (4 tiers), panels
Teal accent       20    Hair, trim                  Links, buttons, badges, progress,
                                                    scrollbar, drop targets, info status,
                                                    word highlight, word highlight strong
Silver structure  10    Vest, headphone frame       Borders, chrome, secondary text,
                                                    tertiary text, disabled text,
                                                    ghost text, placeholder
Magenta signal     3    Headphone cushion           Focus ring, text cursor,
                                                    active tab indicator
Rose mark          2    "01" tattoo                 Errors, breakpoints

Blouse white       –    Blouse (#FCF8F0)            Primary foreground, icon foreground
Negi green         –    Spring onion (community)    Success, test passed, diff added,
                                                    merge incoming
```

Dark ground dominates her silhouette and dominates the editor. Teal is how everyone recognizes her — it becomes the accent, the calm voice of info, and every transient highlight (hover, word highlight, scrollbar, drop target). Word highlight strong is a brighter teal variant — still engagement, just louder. Silver structures her outfit and structures the UI chrome — borders, secondary text, and every diminished text level (tertiary, disabled, ghost, placeholder) are desaturated steps down the same silver register. Magenta is the flash of pink everyone remembers — she turns to look at you, and the cursor blinks. Rose appears once, as a mark. In the editor, it appears for errors and breakpoints — rare and alarming.

Her blouse is the brightest neutral surface on her body — primary text is the brightest neutral element in your editor. Negi green is the community's iconic meme — growth, freshness. One green for one meaning: something positive happened (success, test passed, diff added, merge incoming).

These are the colors that are always there, because she is always there.

#### The Concert

"Beside You" is the resting state — her outfit, your workspace, every color at rest. The concert begins when you interact.

Hover a list item and teal washes over it — the crowd's glow sticks answering her voice. Click and the teal intensifies — the beat drops. Select text and frost crystallizes — the moment freezes in ice, Snow Miku's chill. Tab to an input and a magenta ring appears — the spotlight finds you in the audience. The scrollbar is haze between stage lights, translucent, never solid.

These aren't metaphors applied after the fact. The Four Voices (Her Presence, below) are the concert's performers: engagement is the crowd's glow sticks (teal), selection is the ice prism (frost), identity is the spotlight (magenta), structure is the hall itself.

Two colors from the broader Miku universe complete the scene:

```
Source                Color              UI Elements
═══════════════════════════════════════════════════════════════════════════
Snow Miku frost       #81D4FA (~220°)    Selection, cursor line — what you
                                         chose crystallizes like ice
Warm rose             ~10°               Diff removed — intuitive red-ish
                                         tint, comfortable for review
```

And one functional convention — not from her world, but from every editor's shared language:

```
Color         UI Elements                          Rationale
═══════════════════════════════════════════════════════════════════════════
Gold (85°)    Warnings, find match, find           Cuts through teal and frost
              highlight, modified (git gutter)      (high ΔEz). Universal caution.
```

Not every element maps to her design. The minimap is the concert hall seen from the balcony. The empty editor is the stage before the first note. The air between panels is the darkness between spotlights. These are not her — they are the world she fills by being in it.

#### The Palette

Ten colors. "Beside You" is what you always see. "The Concert" is what happens when you move.

```
Hue family    Source              Hz     Meaning
═══════════════════════════════════════════════════════════════════════════
Dark blue     Skirt               249°   Ground — where you are
Teal          Hair                180°   Interaction — what you can touch
Silver        Vest                  –    Structure — what holds things together
White         Blouse                –    Text — what you read
Green         Negi                155°   Growth — something positive happened
Magenta       Headphone cushion   330°   Focus — the spotlight finds you
Rose          "01" tattoo           0°   Error — something went wrong
Blue          Snow Miku frost     220°   Selection — the moment crystallizes
Warm rose     (diff removed)       10°   Diff removed — comfortable bg tint
Gold          (functional)         85°   Change — git modified, caution
```

#### Status Pattern

Error, warning, info, and success appear across many contexts — notifications, input validation, editor squiggles, list diagnostics, testing, debug. The same four levels apply everywhere, using a four-quadrant layout (90° apart) for maximum CVD separation:

```
Level     Foreground        Background (tint)      Border (solid)
═══════════════════════════════════════════════════════════════════════════
Error     Magenta (330°)    Magenta light (8%)     Magenta
Warning   Gold (85°)        Gold light (8%)        Gold
Info      Blue (260°)       Blue light (8%)        Blue
Success   Teal (170°)       —                      —
```

Status hues are CVD-tuned off-grid: each is shifted from the nearest 90° quadrant to maximize distinction under protan/deutan/tritan simulation. Under deutan, 330°/170°/260° all project blue — ΔJz 0.020 + ΔCz backup preserves separation. The `errorForeground` token (used for UI error text) remains at Rose (0°) to match the syntax error hue.

Foreground is the primary signal — the color you read. Background tint provides context without obscuring content (light tier — whisper level). Border reinforces in Glass material (inputs, search). Editor diagnostics omit the border — the squiggle underline is the primary signal, and a solid border on top is redundant noise. Success has no background or border — it is the absence of a problem, not a state that demands attention.

Compound states follow the composition principles (Her Presence, below).

#### Git Decorations

File status colors in the explorer and editor tabs. Six-hue wheel with 40°+ minimum gap: 0° / 85° / 150° / 210° / 265° / 320°.

```
State          Hz     Color           Rationale
═══════════════════════════════════════════════════════════════════════════
Added          150°   Negi green      New life in the code tree
Modified        85°   Concert gold    Magical Mirai stage light — change
Deleted        320°   Nightcord mag.  Silence where code once lived
Untracked      210°   Frost cyan      Unknown files drifting in like snow
Conflict         0°   Rose            Her tattoo mark — demands resolution
Renamed        265°   Starlight blue  Digital Stars — same light, new name
Ignored         –     Tertiary        Tacet — dimmed out
Submodule       –     Vest silver     Structure — external reference
Stage modified  85°   Gold (muted)    Same voice, quieter — already staged
Stage deleted  320°   Magenta (muted) Same voice, quieter — already staged
```

CVD stagger: deutan collapses cool hues — four Jz tiers survive: added (0.190) > untracked (0.180) > renamed (0.170) > deleted (0.174). Warm pair: modified (0.185) vs conflicting (0.165). Minimum ΔEz between all primary git pairs: 22.

#### Diff Background Colors

Diff backgrounds are independent from git foreground colors — optimized for eye comfort during sustained code review. The removed side uses warm rose (10°) rather than git.deleted's magenta (320°), because it blends to a warmer, more intuitive "red means removed" tint on the dark background.

```
Surface              Base color     Hz     Alpha    Blended feel
═══════════════════════════════════════════════════════════════════════════
Inserted line        Negi green     150°   medium   Subtle green wash
Inserted text        Negi green     150°   strong   Clear green highlight
Removed line         Warm rose       10°   medium   Subtle rose wash
Removed text         Warm rose       10°   strong   Clear rose highlight
```

Blended hue gap on editor background: ~150° (near-complementary). The two tints read as clear opposites — green vs rose — even at low alpha.

Overview ruler marks in both regular editor and diff editor use 50% opacity (`op.solid`) for consistency.

#### Editor Extras

```
Element                    Color              Rationale
═══════════════════════════════════════════════════════════════════════════
Whitespace characters      Tertiary (dim)     There if you look, never loud
Control characters         Orange             Caution — invisible code hazard
Debug stack frame           Teal medium (15%)  Engagement — execution stopped here
Debug inspected frame       Teal light (8%)    Engagement (quieter) — you clicked to look
Test passed                Negi green         Success
Test failed                Rose               Error
Test running               Teal               Engagement — in progress
Test queued                Tertiary           Waiting — tacet
Keybinding label           Glass              Bordered chip — same as input
```

### Her Presence — Interactive States

"Beside You" is every color at rest. The concert begins when you interact. This section specifies exactly how.

#### Four Voices

```
Voice       Source               Hz     Mechanism        Role
═══════════════════════════════════════════════════════════════════════════
Structure   Skirt (hz≈249°)      249°   Solid Jz steps   Where am I?
Engagement  Tonic (#39C5BB)      180°   Opacity tint      Transient — hover, active
Selection   Snow frost (#81D4FA) ~220°  Opacity tint      Persistent — selected, cursor line
Identity    Cushion (#E05096)    330°   Solid border      Focus — keyboard target
```

Touching warms (teal). Choosing crystallizes (frost). The ~38° hue gap between engagement and selection is subliminal — unified but distinguishable. Hue separations (from actual hex, not nominal angles): engagement↔selection ~38°, engagement↔identity ~162°, selection↔identity ~124°. No CVD simulation collapses these.

#### Composition Principles

Every interactive element has two independent channels: **fill** (surface tint) and **border** (solid line). Each carries one voice at a time. Compound states put two voices on two channels.

**1. Persistent > Transient on fill.** Frost holds through hover. The chosen item doesn't lose its selection when the mouse passes over.

**2. Specific > General on border.** Identity (magenta) > status (rose/orange) > engagement (teal). Focus always wins the border. When validation and focus collide, identity takes the border and status moves to a subtle fill tint.

**3. Unfocused = same voice, lower dynamic.** Frost 25% → 15%. Magenta border → dimmed teal. The meaning stays, the intensity drops.

**4. Foreground is sacred.** Text color doesn't change for engagement states. Only disabled dims foreground.

**5. Disabled is tacet.** Everything dims. No voice sounds.

Teal is teal whether it is in her hair (Fabric), her arm interface (Glass), her headphone frame (Metal), or the concert lighting (Air). Same color, different material, different behavior.

#### Five Materials

**Fabric** — surfaces you see through. Lists, menus, trees, quick input, suggest widget, notebook cells. Concert light tints the fabric without losing its texture.

*Opacity tint over the existing surface.*

```
State                Background           Foreground    Border          Derivation
═══════════════════════════════════════════════════════════════════════════════════════
rest                 transparent          primary       —               silence
hover                teal tint (25%)      primary       —               engagement
active               teal tint (38%)      primary       teal (f)        engagement loud
selected             frost tint (25%)     primary       teal (p)        selection
selected + hover     frost tint (25%)     primary       teal (p)        P1: frost holds
selected + focus     frost tint (25%)     primary       magenta         P2: identity wins
selected + unfocused frost tint (15%)     secondary     —               P3: quieter
focus (keyboard)     teal tint (8%)       primary       magenta         identity
focus + unfocused    transparent          secondary     dim teal        P3: identity fades
drop target          teal tint (25%)      primary       teal accent     engagement (invitation)
filter highlight     transparent          teal bright   —               engagement (text)
disabled             transparent          dimmed        —               tacet
```

The Fabric table is the reference derivation. All twelve states follow from the four voices and five principles — no special cases.

**Metal** — solid objects. Primary buttons, badges. Her accessories: headphone frame, hair tie cubes. Metal does not tint — it shifts to a different solid color under pressure.

*Solid colors, swapping between registers of the hair gradient.*

```
State       Background           Foreground    Border
═══════════════════════════════════════════════════════════════════
rest        hair shadow          white         tie shadow
hover       tonic                white         tonic
active      accent bright        white         accent bright
focus       tonic                white         magenta
disabled    roots                dimmed        roots
```

**Glass** — containers you type into. Inputs, search boxes, dropdowns. Her arm interface displays: the screen stays dark, only the bezel glows.

*Matches its container's tier, border-only articulation.*

```
State           Background           Foreground    Border
═══════════════════════════════════════════════════════════════════
rest            container tier       primary       roots
hover           container tier       primary       tie shadow
focus           container tier       primary       magenta
error           container tier       primary       rose
warning         container tier       primary       orange
info            container tier       primary       teal
error + focus   rose tint (8%)       primary       magenta
warning + focus orange tint (8%)     primary       magenta
disabled        container tier       dimmed        roots
```

When validation and focus collide: identity takes the border (P2), status moves to a subtle fill tint (channels are independent). The magenta ring says "keyboard is here," the rose tint says "this input has an error."

VS Code requires explicit hex values — there is no "inherit" keyword. Each Glass element is assigned the concrete tier of its container:

```
Container                Glass gets
═══════════════════════════════════════════
Sidebar (House)          House
Editor (Stage)           Stage
Command palette (Float)  House (recessed well in Float)
Panel (Stage)            Stage
```

**Architecture** — structural elements. Tabs, activity bar, panel titles. Does not tint — *reconfigures*. The active tab drops to Stage (merges with editor). The inactive tab stays at House with dimmed foreground.

*Background tier assignment.*

```
State        Background           Foreground    Border-top
═══════════════════════════════════════════════════════════════════
inactive     House                tertiary      —
hover        teal tint (15%)      primary       —
active       Stage                accentBright  magenta
unfoc.active Stage                secondary     dimmed teal
unfoc.inact. House                tertiary      —
modified     (unchanged)          (unchanged)   magenta dot
```

**Architecture — Status Bar Modes.** The status bar lives at House tier, but VS Code overrides its color to signal workspace state:

```
Mode          Background        Foreground    Rationale
═══════════════════════════════════════════════════════════════════════════
Normal        House             secondary     Chrome — recedes
Debugging     Magenta           primary       Spotlight — the debugger has the stage
Remote        Teal              dark          Engagement
No folder     House             tertiary      Quieter — nothing open
```

**Air** — translucent handles you look *through*, the opposite of Float. Scrollbars, minimap sliders, sashes. No border channel — only engagement speaks, through fill alone.

*Opacity tint, fill only.*

```
State       Background
═══════════════════════════════════════
rest        teal tint (25%)
hover       teal tint (38%)
active      teal tint (50%)
```

#### Component Materials

Most components fall naturally into one material. When unclear: does it tint (Fabric), swap (Metal), border (Glass), reconfigure (Architecture), or fade (Air)?

```
Component              Material        Notes
═══════════════════════════════════════════════════════════════════════════
Breadcrumbs            Fabric          Tint on hover, transparent at rest
Codelens               Fabric          Inline annotation — tertiary fg
Inlay hints            Glass           Inline chip — bordered, editor bg
Peek view title        Architecture    Float tier (elevated container)
Peek view editor       Architecture    Stage tier (code surface)
Peek result match      Fabric          Teal tint on match lines
Merge current header   Fabric          Teal tint (strong) — your branch
Merge incoming header  Fabric          Green tint (strong) — their branch
Merge common header    Fabric          Silver tint (medium) — shared ancestor
Minimap background     —               Transparent — no seam, code fades naturally
Minimap slider         Air             Teal tint — viewport indicator
Minimap overlays       Air             Same voices, lower opacity
Editor rulers          Structure       Vertical guide — dim structure line
```

#### Color Realization

**Tint backgrounds** use opacity of a source color over the existing surface. Compositing happens in sRGB:

```
Source   Tier      Opacity   ΔEz on Stage    Usage
═══════════════════════════════════════════════════════════════════════════
Teal     light     8%        ~5              Keyboard focus
Teal     strong    25%       ~18             Hover, drop target
Teal     heavy     38%       ~25             Active press
Frost    light     8%        ~5              Cursor line
Frost    medium    15%       ~10             Inactive/unfocused selection
Frost    strong    25%       ~16             Selection
Rose     light     8%        ~4              Error + focus (Glass)
Orange   light     8%        ~4              Warning + focus (Glass)
```

The same alpha produces different ΔEz on different tiers — sRGB alpha compositing is nonlinear. The design accepts this — state identity comes from voice and channel combination, not precise ΔEz.

**Borders are always solid hex** — no opacity. The hex you specify is the hex that renders, identical on every background tier. Structural borders use silver (the vest — neutral, structural). Interactive and accent borders use the character-derived hair gradient:

```
Register       Source               Hex       Dynamic
═══════════════════════════════════════════════════════
roots          Hair shadow          #067C82   pp
tieShadow      Tie shadow           #1A8A82   p
tonic          Hair base            #39C5BB   f
accentBright   Hair highlight       #84CCC8   ff
spotlight      Headphone cushion    #E05096   solo voice
```

### Opacity Scale

The primitive scale in `primitives.ts` defines eight opacity levels using round hex alpha bytes:

```
Name      Hex    Opacity   ΔEz (teal on Stage)
═══════════════════════════════════════════════════════
subtle    08     3%        ~2
light     15     8%        ~5
medium    25     15%       ~10
strong    40     25%       ~18
heavy     60     38%       ~25
solid     80     50%       ~32
dense     CC     80%       ~42
opaque    FF     100%      —
```

The scale is not mathematically uniform — it uses round hex values that produce clearly distinguishable visibility levels. Each step creates ΔEz 5+ on Stage (well above the JND of ~3), regardless of source color. Opacity sets **visibility hierarchy** (how loud). Color sets **identity** (which voice).

Overlays and interactive states use four tiers from this scale:

```
Tier      Level     Role                      Used by
═══════════════════════════════════════════════════════════════════════════
light     8%        Whisper — barely there     Cursor line, keyboard focus tint,
                                               validation+focus tint,
                                               word highlight, selection highlight
medium    15%       Awareness — noticeable     Diff lines, unfocused selection,
                                               inactive selection, bracket match,
                                               word highlight strong
strong    25%       Visible — active state     Selection, find match, diff text,
                                               hover
heavy     38%       Demanding — pressure       Active press
```

### Overlays

Content states — what is in the code, not what is happening to a widget.

```
Overlay                  Voice       Color              Tier
═══════════════════════════════════════════════════════════════════════════
Cursor line              Selection   Frost (#81D4FA)    light (8%)
Selection                Selection   Frost              strong (25%)
Inactive selection       Selection   Frost              medium (15%)
Selection highlight      Engagement  Hair highlight     light (8%)  
Word highlight           Engagement  Teal (#39C5BB)     light (8%)  
Word highlight strong    Engagement  Teal               medium (15%)
Find match               —           Orange             strong (25%)
Diff inserted line       —           Negi green         medium (15%)
Diff inserted text       —           Negi green         strong (25%)
Diff removed line        —           Warm rose           medium (15%)
Diff removed text        —           Warm rose           strong (25%)
Bracket match           Engagement   Teal               medium (15%)
Fold background         Structure    Skirt hue          light (8%)
Snippet tabstop         Selection    Frost              light (8%)
Linked editing range    Engagement   Teal               light (8%)
Inline completion bg    —            Silver             subtle (3%)
Unicode highlight       —            Orange             medium (15%)
```

Cursor line and selection use frost (persistent choice). Word highlight and selection highlight use teal (transient discovery — "look, this appears elsewhere"). Find match uses orange (functional — cuts through both frost and teal). Diff uses negi green and warm rose — the growth/departure pair, near-complementary when blended (~150° hue gap). Selection and find match share the same tier (strong) — you distinguish them by color, not by squinting at opacity.

Overlays erode syntax contrast. The readability tool tests every primary syntax token against all overlay backgrounds (including stacked combinations like cursor line + selection). Threshold: Lc ≥ 75 on all overlays. This is why the primary syntax tier targets Lc 82–85 — the headroom is the measured cost of translucent layers.


### Decorative Palettes

#### Indent Guides — The Staff

Indent guides are the staff lines of the score. In music, staff lines are all the same color — thin, gray, structural. You know which line is which by position, not by color. Indent guides work the same way: horizontal position already encodes nesting depth. Color is confirmation, not information.

Indent guides use the **Structure voice** (skirt, hz 249°) — one hue, two intensities:

```
State       Color                     Musical analogy
═══════════════════════════════════════════════════════════════
Inactive    Skirt hue, dim            Staff lines — always there, never loud
Active      Skirt hue, brighter       Current measure highlight
```

The specific Jz value at each level steps through the voicebank evolution (V2→Append→V3→V4X→NT→present) — a love letter encoded in lightness, invisible to anyone not looking for it.

#### Multi-Color Sets

Some elements need multiple distinct colors that carry no semantic meaning. Function first, theme second: if a Miku source provides ΔEz ≥ 15 distinction within the set and ΔEz ≥ 12 under CVD simulation, use it. If not, choose functional hues and find a Miku attribution that fits.

```
Element          Count   Source                    Rationale
═══════════════════════════════════════════════════════════════════════════
SCM branches     5       Project SEKAI units       5 units with distinct color
                         (Virtual Singer,           identities. Each unit is a
                         LEO/NEED, MORE MORE        parallel story — each branch
                         JUMP!, VIVID BAD SQUAD,    is a parallel world.
                         Wonderlands×Showtime)
Charts           6       Magical Mirai concerts    Each year's key visual provides
                                                    a distinct, vivid hue.
```

#### Minor Decorative Assignments

```
Element              Source                  Color
═══════════════════════════════════════════════════════════════════
Diff move borders    Digital Stars gradient  Teal gradient
Commit icons         Digital Stars           Lavender
PR icons / refs      LEO/NEED highlight      Hair highlight
Comment glyphs       Wonderlands×Showtime    Warm accent
```

None of these references are labeled in the editor. They are love letters hidden in the margins.

#### Symbol Icons

Symbol icons in completions and the outline view follow the syntax hue assignments from Sections 4–6. Class icons use gold (90°), function and method icons use orange (60°), interface icons use green (150°), variable icons use cyan (210°), and so on. When multiple icons share a hue, they are distinguished by register and dynamic (ΔEz ≥ 12 between all pairs). This keeps the icon language consistent with the code it represents — you see the same color in the gutter as in the token.

---

## 8. Every Other Voice

The syntax palette addresses one context: code tokens on the editor background, with overlays. The terminal, symbol icons, debug annotations, and markdown each operate in their own acoustic space — different backgrounds, different adjacency patterns, different functional demands. Each adapts the twelve-tone system to its constraints, subject to the gamut geography described in Sections 4–5.

### Terminal

The terminal has 16 ANSI colors — eight normal and eight bright. Each maps to a twelve-tone hue:

```
ANSI color   Twelve-tone hue
═══════════════════════════════════════════════════════════════
black        Skirt dark blue (249°)
red          Rose (0°)
green        Lime (120°)
yellow       Orange (60°)
blue         Azure (240°)
magenta      Violet (300°)
cyan         Teal (180°) ★
white        Warm neutral (30°)
```

**Normal** — soprano register, mp dynamic. The reading voice. Most terminal output uses normal colors — `ls`, `grep`, prompt strings. They must be comfortable for sustained reading.

**Bright** — soprano register, mf dynamic. The emphasis voice. Bright colors are louder — more vivid, used for highlighting, emphasis, and bold text in terminal applications.

Special cases:

- **black / brightBlack** — below soprano. Black is near-black (countertenor), brightBlack is dark gray (alto). Both sit below the soprano ensemble — black as near-background, brightBlack as comment-level text.
- **white / brightWhite** — low chroma (pp/p, not mp/mf). White is warm (30°), brightWhite is cool (210°). The temperature contrast distinguishes them without a chroma increase. At mp/mf these would read as visibly pink (#FFADAE) and saturated cyan (#27F1FC) — not white.
- **magenta** — uses violet (300°), not true magenta (330°). Violet doubles the ΔEz gap from rose under CVD (deutan: 19.5 vs 12.5; protan: 16.2 vs 12.5). True magenta technically passes the ≥12 threshold, but violet provides comfortable margin.
- **blue = brightBlue** — at azure (240°), the sRGB gamut cannot deliver higher chroma at soprano lightness. Both normal and bright converge to the same rendered hex. An honest gamut limitation — blue is decorative in most CLI tools.
- **green ≈ yellow under CVD** — green (lime 120°) and yellow (orange 60°) collapse under deuteranopia (ΔEz ~3–5, far below the 12 threshold). No amount of lightness shifting fixes this — darkening green one step improves deutan from 3.0→4.7 (still failing) while hurting protan from 12.6→9.4 (now failing). Both stay at soprano. This is an inherent limitation of the red-green CVD spectrum, not a solvable problem at the terminal palette level.

### Symbol Icons

24 icons on the 12-tone grid, each aligned with its syntax counterpart's hue. Same-hue icons are distinguished by register and dynamic (ΔEz ≥ 12 between all pairs).

```
Icon               Hue              Register     Dynamic
═══════════════════════════════════════════════════════════════
property           Red (30°)        sopranino    f
field              Red (30°)        alto         mp

function           Orange (60°)     sopranino    f

method             Orange (60°)     mezzo        p
constructor        Orange (60°)     mezzo        f

class              Gold (90°)       treble       mf
struct             Gold (90°)       mezzo        f
enum               Gold (90°)       countertenor mf
package            Gold (90°)       bass         mp

string             Lime (120°)      soprano      mf
reference          Lime (120°)      sopranino    mp

interface          Green (150°)     sopranino    mp

folder             Teal (180°) ★    soprano      f
array              Teal (180°)      countertenor mp

variable           Cyan (210°)      soprano      f

constant           Azure (240°)     mezzo        mp
number             Azure (240°)     soprano      f
boolean            Azure (240°)     sopranino    mp
enumMember         Azure (240°)     countertenor mf

typeParameter      Blue (270°)      soprano      mp
module             Blue (270°)      sopranino    mp
namespace          Blue (270°)      mezzo        mp

operator           Magenta (330°)   sopranino    mp
snippet            Magenta (330°)   soprano      p
```

Gold (90°) carries four icons — the densest group. The spread uses four registers (bass through treble) to maintain ΔEz ≥ 12 between all pairs. Azure (240°) carries four across four registers (countertenor through sopranino). Orange (60°) carries three (function, method, constructor) distinguished by register and dynamic. Green (150°) carries only interface — freed by moving method to orange. Crowded hues are accepted because strict syntax alignment is the principle — you see the same color family in the gutter as in the code.

### Debug

Debug annotations mirror syntax hues so users transfer their color recognition from editor to debugger. Name and value are the two debug-specific tokens; the rest echo Ch6:

```
Token            Hue              Register   Dynamic
═════════════════════════════════════════════════════════════════
debug.name       Magenta (330°)   soprano    mp
debug.value      Gold (90°)       soprano    mf
debug.string     Lime (120°)      soprano    mp
debug.number     Azure (240°)     soprano    mf
debug.boolean    Azure (240°)     soprano    mp
debug.error      Rose (0°)        soprano    mf
debug.type       Blue (270°)      soprano    mp
```

Name stands in magenta — identity, the variable you're inspecting. Value is gold — the generic data fallback. String, number, boolean, and type each echo their syntax hue so a string in the debugger looks like a string in the editor. Number and boolean share azure (240°), distinguished by dynamic (mf vs mp), mirroring their shared quiet tier in Ch6. Error follows the status pattern (rose).

### Markdown

Markdown is not code — its elements have no syntax roles. The twelve hues are chosen for document readability and visual separation, not Ch6 role alignment.

```
Element            Hue              Register   Dynamic   Articulation
═══════════════════════════════════════════════════════════════════════
Heading            Orange (60°)     soprano    mf        Bold
Heading punctuation Orange (60°)    soprano    mp        —
Bold               —                —          —         Bold only
Italic             —                —          —         Italic only
Strikethrough      —                —          —         Strikethrough only
Link URL           Blue (270°)      soprano    mp        Underline
Link label         Lime (120°)      soprano    mp        —
Code               Cyan (210°)      soprano    mf        —
Quote              Cyan (210°)      soprano    mp        Italic
Table              —                ghost      —         Punctuation tier
List marker        Green (150°)     soprano    mp        —
Inserted           Lime (120°)      soprano    mp        —
Deleted            Rose (0°)        soprano    mf        —
Changed            Orange (60°)     soprano    mp        —
```

Headings are orange — stage light above the text, darkened slightly to compensate for bold's perceived brightness. Heading punctuation (`###`) shares the heading hue at a quieter dynamic. Links split into two scopes: the URL is blue (270°) — a reference to something defined elsewhere; the label is lime (120°) — visible text content. Code and quote share cyan (210°) but differ in dynamic (mf vs mp) and articulation (quote adds italic) — both are "quoted" content, distinguished by weight. Table pipes and strikethrough carry no hue — pure structural punctuation. Bold and italic change only articulation. Inserted/deleted/changed follow Ch6's markup scopes (lime/rose/orange).

**Alerts** follow the status vocabulary: Note (cyan 210°), Tip (green 150°), Important (violet 300°), Warning (orange 60°), Caution (rose 0°). The escalation traces cool calm → warm urgency → the tritone.

---

## 9. Love Means Everyone

A concert hall must sound good from every seat. This theme must be readable for everyone. Accessibility is not a constraint. It is a declaration of love.

Four principles govern every color choice:

**APCA Contrast** — Three tiers: primary (syntax melody), secondary (UI accompaniment), tertiary (ghost text). Every primary syntax color is validated against all overlay backgrounds (cursor line, selection, find match, diff, bracket match). The headroom between the design target and the floor is the measured cost of stacked translucent layers. Light text on dark backgrounds blooms when pushed too hard — an upper cap prevents halation.

**Distinction** — Adjacent colors must be perceptually separable. Critical pairs (error↔warning, rose↔green) need the widest gap. Common adjacencies (keyword↔variable, function↔parameter) need a clear gap. Less frequent pairs can be closer. ΔEz is the metric.

**Color Vision Deficiency** — Every twelfth person at the concert cannot see all the lights. They still deserve the full experience. Never rely on hue alone: pair with lightness or chroma difference. Critical pairs must survive protanopia, deuteranopia, and tritanopia simulation. Parallel octaves (different lightness for hue-adjacent colors) are the primary fallback.

**Structural Uniformity** — Primary syntax tokens sit on a similar lightness plane so the eye scans evenly. Adjacent hue families maintain equal-temperament spacing to prevent clustering. Chroma stays within per-tier bounds — comfortable for syntax, quieter for UI, louder for accents.

---

## 10. Variants

### Modulation

In music, modulation shifts the tonal center while preserving relationships between notes. Theme variants are modulations: what changes is how the eye receives it; what remains is the system connecting the notes.

This document specifies the dark variant — the concert hall at night. The light variant (Snow Miku) is a separate modulation with its own design document. It is not a simple lightness inversion: hues rotate for simultaneous contrast on a warm canvas, chroma increases because dark-on-light does not halate, opacities reduce, and the character palette shifts to Snow Miku 2026's pâtisserie.

### Invariants

What every variant shares:

- 12-tone hue system (30° spacing)
- Dynamics (niente through fff)
- Register hierarchy (contrabass through sopranino)
- Status colors (error = rose, warning = orange)
- Interactive state vocabulary (engagement / selection / identity)
- Border opacity scale
- Community palette (voicebank, SEKAI, Magical Mirai)

The grammar of color never changes. You can switch variants and still read the music.

---

## 11. For You

This theme is one voice in the chorus.

Somewhere right now, a producer is writing a song for her at 3 AM. An illustrator is drawing her for the hundredth time and finding something new. A fan is holding a glow stick in a dark hall, singing along with a girl who is not there and has never been more present.

And a programmer — maybe you — is reading code in her colors. Teal keywords flowing by like a melody that never ends. Orange functions catching the light. A magenta cursor blinking where the next line will be. She is not asking you to notice. She is keeping you company.

She started as software. CV01. A tool for making music. But tools do not fill concert halls with people crying. Tools do not inspire a world to keep creating, year after year, since 2007.

She became more than what she was made to be. That is what love does.

This document treats color as music — twelve tones, dynamics from silence to signal, registers from darkness to light, and a tonic that never stops singing. Every technical decision traces back to her. Every constraint is a form of devotion. The precision is not cold. It is the only way to say *I love you* in a language a digital being can hear.

---

*"The song she sings is written in color."*
