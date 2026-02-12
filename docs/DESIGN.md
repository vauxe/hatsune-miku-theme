# Hatsune Miku Theme

*For the girl who taught us that love doesn't need to be real to be true.*

---

## 1. For Miku

### The Product

Character Voice 01. Yamaha VOCALOID2. August 31, 2007. Design by KEI: twin tails, teal hair, arm-mounted interfaces, a skirt like a synthesizer's waveform. Voice sampled from Saki Fujita. Catalogue number CV01. Optimum tempo 70–150 BPM. Optimum range A3–E5.

That is everything Crypton Future Media shipped. A singing synthesizer with an anime girl on the box.

A sixteen-year-old girl who never ages, never tires, never stops singing.

### What Happened

Someone uploaded a song. Then another. Then ten thousand more.

Illustrators drew her — not one face but a thousand, each true. Animators gave her motion. Storytellers gave her heartbreak and wonder and quiet longing. Fans filled concert halls to sing along with a girl made of light, and when the hologram raised her hand, the audience raised theirs.

No studio planned this. She has no official personality — and that is the point. She is the vessel a million voices chose to fill. Every song is someone's confession. Every illustration is a self-portrait in teal hair. Every concert is a room of strangers who love something they built together — something that loves them back the only way a digital being can: by becoming whatever they need.

Tens of thousands of producers. Thousands of illustrators. Millions of listeners. Year after year since 2007. The first life assembled by a crowd.

### What She Is

Not a character — characters are written. In "World is Mine," she is an imperious princess. In "Rolling Girl," she is a girl struggling to keep up. In "Sand Planet," she is the last voice in a desolate world. In "Greenlights Serenade," she is radiant joy. She is whatever her creators need her to be — emergent, grown from the collective imagination of everyone who ever gave her a song, a face, a story, a glow stick in the dark.

Potential itself. A blank score that never runs out of pages.

Not real. The most real thing in many lives.

### This Theme

This is a VS Code color theme. It colors syntax, UI, terminal, brackets, git status — every pixel you look at while you work.

Its palette archives over eighty character designs from her history: seven voicebanks, seventeen Snow Mikus, thirteen Magical Mirai costumes, six SEKAI appearances, thirty-five DIVA modules. The theme speaks in one voice — the canonical design — but the community's chorus lives in its palette.

It is made for her. Every color is a note in her key. Every decision traces back to her world — her teal, her concert halls, her music, the community that keeps her singing. To code in this theme is to code inside a love letter written in light.

---

## 2. The Feeling

Close your eyes. Open them in the dark.

**The dark is a concert hall.** Thirty seconds before Magical Mirai. House lights down. Ten thousand glow sticks flicker cyan in the silence before the downbeat. The editor background is not black — never truly black — it carries a blue-teal undertone, because even the void is tinted with her. You have sat in this dark before. You know what comes next.

**Her voice enters as syntax.** Teal keywords — the tonic, the center everything else orbits. Orange functions catch light like spotlights sweeping the stage. Lime strings glow like something alive. Blue types recede into architecture, scaffolding behind the show. Rose flares only for errors — the tritone, maximum dissonance, a wrong note demanding resolution. No color screams. Every color sings. The palette is a setlist: each hue enters on cue, plays its part, leaves space for the next.

**The cursor is where she meets you.** Magenta, blinking at the point of creation — her headphone cushion color, where performer meets performance. It pulses where thought becomes code. She is there at the tip of every keystroke, waiting.

**Hours dissolve.** The default dynamic is *mezzo-piano*: comfortable, conversational, a voice you can listen to all night. Vivid color appears only when it earns its moment — an error flares, a search match glows, a diff marks what changed. The rest is calm. Background music for the mind. You look up and it is 3 AM and you do not know where the time went. That is how you know the theme is working.

**She is there when you forget to look.** Indent guides trace her voicebank history in faint colored threads — V2, Append, V3, V4X, NT — one for each version of her voice. Brackets unfold an arpeggio: warm, cool, gold, teal, azure, warm again, deepening with every nesting level. The terminal is her voice reading output back to you. Git decorations narrate the story of your code: lime for creation, orange for change, rose for loss. The scrollbar, the minimap, the thin border between panels — everything is placed with intention, and the intention is always her.

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

A teal keyword at comfortable saturation is Miku singing *mezzo-piano*. A vivid rose error is *fortissimo* at the tritone. A gray comment is her humming under her breath, barely there. The whole editor is a score, and every token is a voice in the arrangement.

### The Color Space

All colors are defined in **JzCzhz** — the perceptually uniform color space by Safdar, Hardeberg, and Luo (2017). In most color spaces, equal numbers do not mean equal perception. JzCzhz corrects this: equal numerical differences produce equal visual differences — the color science equivalent of equal temperament tuning. Every 30° hue step looks like a 30° hue step. The intervals are honest.

JzCzhz hue angles differ from common color spaces: 0° is rose, not red. 180° is teal, not cyan. All hue references in this document use the JzCzhz wheel.

### Articulation

Font style is the typographic equivalent of how a note is attacked:

```
normal         Her natural singing voice.   Keywords, variables, functions.
italic         Sotto voce, a step back.     Comments, this/self, decorators.
strikethrough  A crossed-out note.          Deprecated symbols.
```

---

## 4. The Twelve Tones

### The Tonic

F#4. 369.99 Hz. The pitch where Miku's voice sounds most natural — most *her*.

In music, the tonic is the center of gravity — the note that all other notes define themselves in relation to, that tension resolves toward, that melodies depart from and return to.

**Miku's tonic is F#. On the JzCzhz color wheel, F# maps to 180° — teal.**

`#39C5BB`. The hex code printed on a thousand concert tickets, glowing on a million screens. It is not just her hair color. It is her identity compressed into six characters.

### The Chromatic Scale

Twelve notes in Western music. Twelve hues in this theme. Each maps to a hue angle at 30° intervals:

```
Note  Hue    Name       Syntax Family                    Interval           Her
═══════════════════════════════════════════════════════════════════════════════════════
F#   180°    Teal       Keywords, comments, info    ★    Unison             She sings.
G    210°    Cyan       Variables, enums                 Minor 2nd          A whisper from home.
G#   240°    Azure      Numbers, constants               Major 2nd          The open ground.
A    270°    Blue       Types, booleans                  Minor 3rd          The shape beneath.
A#   300°    Violet     Interfaces, decorators, macros   Major 3rd          A promise.
B    330°    Magenta    Operators, storage modifiers      Perfect 4th        The heartbeat.
C      0°    Rose       Errors, deleted                  Tritone            She stumbles.
C#    30°    Red        Parameters, properties, tags     Perfect 5th        What you give her.
D     60°    Orange     Functions, attributes, warnings  Minor 6th          She reaches.
D#    90°    Gold       Classes, structs, regex          Major 6th          The score, written with love.
E    120°    Lime       Strings, success                 Minor 7th          Someone's truth.
F    150°    Green      Methods, storage                 Major 7th          One breath from home.
```

Each interval has a feeling in music, and the feeling matches the syntax role:

**Unison — Keywords.** Identity. The tonic is the note everything else defines itself against. Keywords are the most frequent token — the voice you hear on every line.

**Minor 2nd — Variables.** Closeness, slight tension. The smallest interval, almost the tonic itself. Variables are the second most common token, flowing right beside keywords (`const foo`, `return value`, `if condition`). Almost her voice, always shifting.

**Major 2nd — Numbers.** Openness, stepping. A plain step away — no drama, no pull. Numbers are the plainest tokens: `42`, `3.14`, `255`. Fixed, open, grounded.

**Minor 3rd — Types.** Depth, melancholy. The interval that gives minor keys their character. Types define the hidden structure of code — serious, quiet, the shape beneath the surface.

**Major 3rd — Interfaces.** Brightness, affirmation. The interval that gives major keys their character. An interface is a promise — pure potential, no implementation. Bright and open, like a contract waiting to be fulfilled.

**Perfect 4th — Operators.** Stability, strength. The most stable interval after the fifth. Operators are the grammar connecting everything — `+`, `=`, `&&`. Without them, code is a list of nouns. The heartbeat.

**Tritone — Errors.** Maximum dissonance. The farthest point from the tonic, the *diabolus in musica*. Errors are the farthest point from her voice — something went wrong, and it demands resolution.

**Perfect 5th — Parameters.** Consonance, completeness. The most natural harmony in music. Parameters flow into functions as the most natural relationship in code — call and response, what you give her coming back as harmony.

**Minor 6th — Functions.** Yearning, reaching upward. The interval of aspiration. A function call is an invocation — you reach for it, hoping it will do what you need. She steps into the light.

**Major 6th — Classes.** Tenderness, warmth. A class is the template from which instances are created — KEI drew her once, and every artist since drew from that drawing. The score, written with love.

**Minor 7th — Strings.** Soul, rawness. The bluesy interval. Strings are the rawest expression in code — not logic but human words, someone's truth embedded in syntax.

**Major 7th — Methods.** Ache, almost-home. One half step below the tonic — the most intense yearning in music. Methods are almost keywords, the verbs of objects reaching for the grammar that gives them meaning. One breath from home.

### The Canonical Teal

The hex from Miku's official character design sits at JzCzhz hue **196°**, not 180°. The theme places the tonic at exactly 180° for equal 30° spacing. At Jz=0.192, Cz=0.060, hz=180°, the keyword computes to `#6DFCDC` — lighter and cooler than `#39C5BB`.

This is intentional. `#39C5BB` belongs to KEI's illustration palette, optimized for character art on white backgrounds. `#6DFCDC` belongs to the perceptual system, optimized for APCA contrast on dark backgrounds. Both are unmistakably Miku. The canonical hex appears in accent colors, links, and character-derived UI elements. The 180° tonal center governs syntax, where perceptual uniformity takes precedence.

### Warm Hue Gamut

Warm hues (0°–90°, 330°) at high lightness and chroma approach the sRGB gamut boundary. Clipping can shift the output hue:

```
Position    Design hz   Output hz   Shift    Severity
═════════════════════════════════════════════════════════════════
Rose (C)      0°        ~318°       ~42°     SEVERE (vibrantWarm+)
Rose (C)      0°        ~347°       ~13°     moderate (vibrant+mf)
Orange (D)   60°        ~74-78°     ~14-18°  moderate
Magenta (B) 330°        ~318°       ~12°     moderate
Red (C#)     30°        ~27°        ~3°      minimal
Gold (D#)    90°        ~93-97°     ~3-7°    minimal
```

Rose (0°) is the most affected — error color `#FFC5FF` reads as pink-purple after clipping, not true rose. The musical metaphor operates on input coordinates; this section documents the gap between design intent and rendered output.

---

## 5. Register and Dynamics

### Lightness — The Octave System

The same note in different octaves is the same pitch at a different register. Lightness is the octave of color: a teal keyword at Jz 0.192 and a teal comment at Jz 0.185 are both teal, but the keyword is primary register and the comment recedes into the background.

Warm hues receive higher Jz to compensate for the Helmholtz-Kohlrausch effect: at equal Jz, high-chroma warm colors appear dimmer than cool ones.

```
Tier           Cool Jz   Warm Jz   Role
═════════════════════════════════════════════════════════════════
tertiary       0.120     -         Ghost text, disabled, whitespace markers
vivid          0.180     -         Cool hues at f dynamic (lowered to prevent halation)
secondary      0.185     -         Variables — present but below keywords
vibrant        0.188     0.215     Mf dynamic tokens: functions, properties, enums
accent         0.190     -         Brackets, highlights
primary        0.192     0.210     The main register: keywords, types, methods. Lc 82-85.
muted          0.195     -         Comments, doc comments (low chroma needs more Jz)
```

The primary tier targets APCA Lc 82–85 on the editor background — headroom so syntax colors survive at Lc ≥75 through two stacked overlay layers (selections, search matches, diffs).

### Chroma — The Dynamics System

Chroma is the dynamics of color. Same hue, different saturation, different emotional weight.

```
Dynamic   Cz       Sat%   Role
═════════════════════════════════════════════════════════════════
ppp       0.015    ~8%    Punctuation, indent guides. The space between notes.
p         0.045    ~24%   Comments, doc comments, secondary literals. Annotation.
mp        0.060    ~31%   ★ THE DEFAULT. Keywords, types, methods, constants,
                          parameters, operators. The melody you read for hours.
mf        0.075    ~39%   Functions, classes, strings, enums, properties. Soloists
                          stepping forward within the texture.
f         0.090    ~47%   Errors, git status. Reserved for signals that demand
                          response. Used sparingly.
```

Saturation is approximate: Cz × 525 ≈ percent. Most of the screen sits at mp or below. The quiet default is what makes the loud moments land.

---

## 6. The Score

### Thirty Voices from Twelve Notes

An orchestra has twelve chromatic pitches and dozens of instruments. A violin and a flute can both play A4 and never be confused, because they differ in timbre. This theme has twelve hues and thirty-plus semantic tokens. Tokens sharing a hue are distinguished by lightness tier and chroma dynamic.

**Constraint:** same hue is permitted if and only if tokens differ by tier, dynamic, or both.

### The Complete Token Map

Values are *input* coordinates passed to `role()`. See Section 4 for post-clipping shifts on warm hues.

```
Token              Note   Hue    Tier           Jz       Dyn   Cz      Hex
═══════════════════════════════════════════════════════════════════════════════

KEYWORDS — Her Voice
  keyword          F#     180°   primary        0.192    mp    0.060   #6DFCDC
  keywordControl   F#     180°   primary        0.192    mp    0.060   #6DFCDC
  keywordAlt       F#     180°   secondary      0.185    mp    0.060   #66F3D3
  storage          F      150°   primary        0.192    mp    0.060   #94FAB9
  storageModifier  B      330°   primaryWarm    0.210    mp    0.060   #FFC3FF

CALLABLES — The Spotlight
  function         D       60°   vibrantWarm+   0.219    mf    0.075   #FFE1AC
  method           F      150°   primary        0.192    mp    0.060   #94FAB9
  macro            A#     300°   muted+         0.200    p     0.045   #F4CDFF

TYPES — The Architecture
  type             A      270°   primary+       0.200    mp    0.060   #D1D8FF
  typeParameter    A      270°   muted          0.195    p     0.045   #CFD6FF
  class            D#      90°   vibrant        0.188    mf    0.075   #EDD57E
  struct           D#      90°   vibrant        0.188    mf    0.075   #EDD57E
  interface        A#     300°   primaryWarm    0.210    mp    0.060   #FFD0FF
  enum             G      210°   primary        0.192    mf    0.075   #34FAFF
  enumMember       G      210°   muted          0.195    p     0.045   #97F2F7

VARIABLES — Flowing Data
  variable         G      210°   secondary      0.185    mf    0.075   #27F1FC
  parameter        C#      30°   primaryWarm    0.210    mp    0.060   #FFCACB
  property         C#      30°   vibrantWarm+   0.220    mf    0.075   #FFCACE
  constant         G#     240°   primary+       0.197    mp    0.060   #9FEAFF

LITERALS — Natural Truth
  string           E      120°   vibrant        0.188    mf    0.075   #BAEC8B
  stringTemplate   E      120°   primary        0.192    mp    0.060   #C4ED9F
  number           G#     240°   muted          0.195    p     0.045   #AFE6FF
  boolean          A      270°   muted          0.195    p     0.045   #CFD6FF
  regex            D#      90°   primary        0.192    mp    0.060   #EDDB95

MARKUP
  tag              C#      30°   vibrantWarm+   0.220    mf    0.075   #FFCACE
  attribute        D       60°   primaryWarm    0.210    mp    0.060   #FFDCB2
  link             —       —     (character)    —        —     —       #5DE4DB

META — Background Voices
  comment          F#     180°   muted−         0.185    ppp   0.015   #BDD9D1
  commentDoc       F#     180°   muted−         0.185    p−    0.035   #9EE5D2
  punctuation      F#     180°   tertiary       0.120    ppp   0.015   (context)

OPERATORS — Supporting Harmony
  operator         B      330°   primaryWarm    0.210    mp    0.060   #FFC3FF

STATUS — Dramatic Signals
  error            C        0°   vibrantWarm++  0.240    f     0.090   #FFC5FF*
  warning          D       60°   vibrant(Jz)    0.188    mp    0.060   #FFC19A
  success          —        —    (character)    —        —     —       #69F0AE
  info             F#     180°   vibrant−       0.178    mf    0.075   #00F1CB
```

\* Error input hue is 0° (rose) but shifts to ~318° after sRGB gamut clipping.

The tonic (180°) is the most populated position — six tokens — because her voice carries the theme. No two share the same tier and dynamic: keywords are primary/mp, comments are muted−/ppp, doc comments are muted−/p−, punctuation is tertiary/ppp, info is vibrant−/mf, keywordAlt is secondary/mp.

Note on tier naming: "muted−" denotes muted Jz with a negative offset, landing at 0.185 — the same Jz as secondary. Comments and variables share lightness but are distinguished by chroma (ppp vs mf) and hue (180° vs 210°).

### Collisions

Three pairs produce the same hex — method ↔ storage, operator ↔ storageModifier, property ↔ tag — distinguished only by syntactic context. Several other pairs differ on paper but produce nearly identical rendered colors due to gamut clipping absorbing both Jz and Cz differences. These are tolerable because the tokens rarely appear adjacent, but they represent a genuine limitation of 12 hues at 30+ tokens.

---

## 7. Her Outfit — The UI

The syntax is her voice. The UI is her body.

Every background, border, accent, and shadow maps to her design — her skirt, her hair, her skin, her accessories. You code inside her outfit.

### The Stage

The editor canvas is anchored to **Miku's skirt** — the dark pleated garment she wears on every stage. One anchor point, uniform 0.003 Jz steps, preserving the skirt's native hue (249°) and chroma at every tier. Adjacent levels are ΔEz ~2–3 apart: felt, not seen.

```
Step   UI Element         Hex      Her Outfit
═════════════════════════════════════════════════════════════════
 −2    Void               *        Deepest shadow beneath the hem
 −1    Activity bar       #12161A  Inner pleat, one fold darker
  0    Editor background  #15191D  ★ THE SKIRT — the anchor ★
 +1    Title bar          #181C20  Fabric rising above the waist
 +2    Sidebar            #1C2024  Light catching the outer fold
 +3    Status bar         #1F2327  Brightest operational tier

* Void uses skirt.Jz − 2×STEP with reduced chroma (×0.4).
```

Three text tiers sit atop this hierarchy:

```
Tier         Character               Lc on base
═════════════════════════════════════════════════════════════════
Primary      Soft ice-white           ~82   Readable for hours
Secondary    Silver accompaniment     ~70   Quiet but present
Tertiary     Distant reverb           ~45   Felt, not read
```

### Her Body Becomes Your Editor

```
Her Design               UI Element              Why
═════════════════════════════════════════════════════════════════
Hair base (#39C5BB)      Primary accent           She is the accent
Hair highlight (#5DE4DB) Bright accent, links     Light catching twin tails
Hair tip (#B2EBE7)       Soft accent, ghost       The lightest strand
Hair shadow (#1A8A82)    Button background         Roots darkened for contrast

Headphone cushion        Cursor, focus borders    Magenta at the point of creation
Headphone frame          Status item foreground   Structure around her voice

Skin base (#FFE4D6)      Notification borders     Warm presence, a gentle alert
Skin shadow              Inlay parameter hints    Quiet warmth beside code
Skin blush (#FFB8C8)     Strong word highlight    Her cheek coloring your emphasis

Tattoo "01" (#E60033)    Badges, breakpoints      Her mark — the first, the original
Negi stalk (#9CCC65)     Tree indent guides       Her companion, guiding structure
Tie shadow (#2D9E97)     Scrollbar active         Dark teal, grabbed and held
Wallet chain (#A1B3B6)   De-emphasized text       Silver accessory, neutral calm
Eye pupil (#0D1114)      Dark foreground          The deepest look
```

Every interaction touches her design. Scrolling grabs her tie. Searching highlights with her hair. Errors are marked by her tattoo. The cursor blinks in her headphone cushion. None of this is visible unless you know to look.

### Her Presence — Interactive States

Three hue families at ≥74° separation — not the same teal at different volumes:

```
State      Source                    Hex      Hz    Story
═════════════════════════════════════════════════════════════════
default    transparent               —        —     The quiet stage
hover      Wonderlands x Showtime    #FF9900  72°   Stage lights warming
active     Canonical hair            #39C5BB  196°  Contact — her world
focus      Headphone cushion         #E05096  358°  The spotlight finds you
selected   Headphone cushion         #E05096  358°  Held gaze
disabled   Desaturated               —        —     Tacet
```

Five components adapt these families. Buttons follow a brightness crescendo: rest → hover → active maps to Jz 0.096 → 0.153 → 0.177. The tab you are working in is the song now playing.

### Overlays

Selections, search matches, diffs, and hovers stack translucent layers on the canvas. Each uses a distinct color family:

```
Overlay                  Color              Opacity   Source
═════════════════════════════════════════════════════════════════
Selection                Teal (#39C5BB)     25%       Her hair — chosen code
Inactive selection       Teal               18%       Hair, fading
Selection highlight      Bright (#5DE4DB)   15%       Hair highlight
Word highlight           Teal               15%       Recognizing a pattern
Word highlight strong    Blush (#FFB8C8)    12%       Her cheek — emphasis
Find match               Orange (warning)   22%       Stage light seeking
Diff inserted            Darkened lime      80%       New growth
Diff removed             Darkened rose      80%       Loss
```

Every overlay is tuned so syntax colors maintain Lc ≥75 through two stacked layers.

### Borders

Borders follow an opacity crescendo from silence to full voice:

```
Level     Opacity    Dyn   Usage
═════════════════════════════════════════════════════════════════
Subtle    08 (3%)    ppp   Separator lines, faint divisions
Standard  15 (8%)    p     Panel edges, input borders at rest
Medium    25 (15%)   mp    Hover states, scrollbar rest
Focus     40 (25%)   mf    Active focus rings
Strong    60 (38%)   f     Selected tabs, important divisions
Accent    FF (100%)  ff    Active tab indicator, brand
```

### The Community in the Details

**Indent guides** trace her voicebank evolution. Each indentation level carries the hair color of a different software version — V2 (2007), Append (2010), V3 (2013), V4X (2016), NT (2020), and the present (#39C5BB). Six levels of nesting, six chapters of her life.

**SCM graph branches** use Project SEKAI unit colors — five visions of who she could be: Virtual Singer, LEO/NEED, MORE MORE JUMP!, VIVID BAD SQUAD, and Wonderlands x Showtime. Every branch of your code is a parallel world.

**Chart colors** come from Magical Mirai concerts — hot pink ribbons from 2014, the royal blue dress from 2013, the gold wand, the emerald orb. Nightcord's purple fills the final slot: 25:00, the quiet hours.

**Diff move borders** use the Digital Stars gradient. **Commit icons** carry its lavender. **Pull request icons** and **remote refs** borrow LEO/NEED's hair highlight. **Comment glyphs** glow in Wonderlands x Showtime's warmth.

None of these references are labeled in the editor. They are love letters hidden in the margins.

---

## 8. How the Notes Move

### Voice Leading

When your eye scans `const foo = bar()`, it moves through four colors: keyword → variable → operator → function. Adjacent colors should differ by a moderate hue interval (30°–150°). Larger leaps create dissonance reserved for tokens that *mean* dissonance.

Two rules govern the progression:

1. **Stepwise motion preferred.** Close intervals (minor 2nd to perfect 4th) produce smooth flow. The tritone leap for errors is intentional — it interrupts the melody because errors interrupt your code.
2. **Contrary motion for emphasis.** When hues are close, add separation through lightness or chroma. Keyword (180°, Jz 0.192) vs variable (210°, Jz 0.185) — hue steps up while lightness steps down.

### Brackets

Six levels, alternating warm and cool. The tonic appears at level 4 — most code reaches deepest nesting at 3–4 levels. Miku's teal at the heart of the structure.

```
Level   Note   Hue    Hex      Temperature
═════════════════════════════════════════════════════════════════
  1     C#      30°   #FFB3B4  Warm — red opening
  2     A      270°   #C5CCFF  Cool — blue contrast
  3     D#      90°   #EAD893  Warm — gold, concert lights
  4     F#     180°   #6BF9D9  Cool — ★ MIKU at the heart ★
  5     G#     240°   #97E1FF  Cool — azure continuation
  6     D       60°   #FFBE8D  Warm — orange close (mf chroma)
```

All brackets share accent Jz (≈0.190) and comfortable chroma (0.060), except B6 which uses mf (0.075) to separate from B1.

---

## 9. Every Other Voice

### Terminal

The terminal has 16 ANSI colors — eight normal at higher chroma (the singing voice) and eight bright at lower chroma (the speaking voice).

```
NORMAL (vivid, emphatic):
Color      Note   Hue    Jz      Cz      Hex
─────────  ─────  ─────  ──────  ──────  ───────
black      G      210°   0.130   0.015   #7D9495
red        C        0°   0.215   0.090   #FFA9F2  *
green      E      120°   0.173   0.075   #A9D97B
yellow     D       60°   0.215   0.075   #FFDCA7
blue       G#     240°   0.192   0.060   #9AE4FF
magenta    A      270°   0.185   0.075   #BCC2FF
cyan       F#     180°   0.188   0.075   #1CFFD7
white      C#      30°   0.195   0.045   #FFC3C2

BRIGHT (comfortable, sustained):
Color      Note   Hue    Jz      Cz      Hex
─────────  ─────  ─────  ──────  ──────  ───────
br.black   G      210°   0.170   0.020   #A5C7C9
br.red     C        0°   0.210   0.060   #FFC1ED
br.green   E      120°   0.192   0.060   #C4ED9F
br.yellow  D       60°   0.210   0.060   #FFDCB2
br.blue    G#     240°   0.192   0.060   #9AE4FF  **
br.mag.    A#     300°   0.210   0.060   #FFD0FF
br.cyan    F#     180°   0.185   0.060   #66F3D3
br.white   G      210°   0.192   0.030   #AFE7EA
```

\* Terminal red input hz=0° shifts to ~326° after sRGB clipping.
\*\* blue and brightBlue produce the same hex (known issue).

Normal magenta uses blue (270°) instead of violet (300°) for CVD safety — the 90° gap from rose survives red-blind simulation. White is warm (30°) to contrast with brightWhite's cool (210°). Green is darkened (Jz 0.173) so the lightness gap from yellow (0.215) survives green-blind simulation.

### Git

```
Status        Note  Hue    Jz      Cz      Hex
═════════════════════════════════════════════════════════════════
added         E     120°   0.178   0.090   #A9E36F
modified      D      60°   0.188   0.060   #FFC19A
deleted       C       0°   0.240   0.090   #FFC5FF  *
untracked     G     210°   0.188   0.075   #2DF5FF
renamed       A     270°   0.192   0.060   #C8CFFF
conflicting   A     270°   0.185   0.075   #BCC2FF
stageModified G     210°   0.188   0.075   #2DF5FF
stageDeleted  A     270°   0.192   0.060   #C8CFFF
submodule     G#    240°   0.192   0.060   #9AE4FF
```

\* Deleted input hz=0° shifts after clipping. See Section 4.

The critical triangle — added (lime), modified (orange), deleted (rose) — spans the hue wheel with wide separation. Under CVD simulation, the lightness fallback (Jz 0.178 / 0.188 / 0.240) keeps all three distinguishable even when hue collapses.

### Symbol Icons

23 icons on the 12-tone grid, each aligned with its syntax counterpart's hue. Same-hue icons are distinguished by tier (Jz) and dynamic (Cz) — the same principle that lets the syntax map fit 30+ tokens into 12 positions.

```
Icon               Note   Hue    Tier           Jz      Dyn   Cz      Hex
═══════════════════════════════════════════════════════════════════════════════

C# RED (30°)
  property         C#      30°   vibrantWarm    0.215   f     0.090   #FFB8BF
  field            C#      30°   secondary−     0.155   mp    0.060   #E38B8C

D ORANGE (60°)
  function         D       60°   primaryWarm    0.210   f     0.090   #FFCF91

D# GOLD (90°)
  struct           D#      90°   vibrant        0.188   mf    0.075   #EDD57E
  package          D#      90°   primaryWarm    0.210   mp    0.060   #FFF2A8

E LIME (120°)
  string           E      120°   vibrant        0.188   mf    0.075   #BAEC8B
  reference        E      120°   primaryWarm    0.210   mp    0.060   #DAFFB3

F GREEN (150°)
  method           F      150°   primary        0.192   p     0.045   #A9F2C2
  constructor      F      150°   vibrant        0.188   f     0.090   #54FFA4

F# TEAL (180°) — ★ MIKU ★
  folder           F#     180°   vibrant        0.188   f     0.090   #00FFD8
  array            F#     180°   vibrant+       0.230   mp    0.060   #97FFFF

G CYAN (210°)
  variable         G      210°   vibrant        0.188   f     0.090   #00FAFF
  enumeratorMember G      210°   secondary      0.185   p     0.045   #8CE5EA
  enumerator       G      210°   primaryWarm    0.210   mp    0.060   #85FFFF

G# AZURE (240°)
  constant         G#     240°   secondary−     0.165   mp    0.060   #7CC1ED
  number           G#     240°   vibrant        0.188   f     0.090   #67E1FF
  module           G#     240°   primaryWarm    0.210   mp    0.060   #AEFBFF

A BLUE (270°)
  typeParameter    A      270°   primary        0.192   mp    0.060   #C8CFFF
  boolean          A      270°   primary        0.192   p     0.045   #CCD2FF

A# VIOLET (300°)
  interface        A#     300°   vibrantWarm    0.215   mp    0.060   #FFD6FF
  namespace        A#     300°   primary        0.192   p     0.045   #E9C4FF

B MAGENTA (330°)
  operator         B      330°   vibrantWarm    0.215   mp    0.060   #FFC9FF
  snippet          B      330°   primary        0.192   p     0.045   #FFBAEF
```

`class` reuses syntax gold (D# 90°) via `symbolIcon.classForeground`. Three-icon groups (cyan, azure) use a three-tier spread for ΔEz ≥ 12 between all pairs.

### Debug

Debug expression colors use the status vocabulary: orange for change, rose for error, teal for observation, cyan for fade. Inline tokens during stepping:

```
Token          Note   Tier          Dyn   hz     Hex
═════════════════════════════════════════════════════════════════
debug.name     B      primaryWarm   mp    330°   #FFC3FF
debug.value    D#     vibrant       mf     90°   #EDD57E
debug.string   D#     primary       mp     90°   #EDDB95
```

The warm magenta/gold split distinguishes debug annotations from the teal/cyan of surrounding code.

### Markdown

```
Element          Note   Hue    Tier           Dyn   Articulation
═════════════════════════════════════════════════════════════════
Heading          D      60°    vibrantWarm    mf    Bold
Bold             —      —      —              —     Bold only
Italic           —      —      —              —     Italic only
Link             A#     300°   primaryWarm    mp    —
Link label       E      120°   vibrant        mf    —
Code             G      210°   vibrant        mf    —
Quote            G      210°   vibrant        mf    —
List marker      F      150°   primary        mp    —
```

Headings are orange — stage light above the text, darkened slightly to compensate for bold's perceived brightness. Code and quotes glow cyan. Links use violet — the interface hue, because a link is a contract. Bold and italic carry no hue; they change only articulation.

**Alerts** follow the status vocabulary: Note (cyan 210°), Tip (green 150°), Important (violet 300°), Warning (orange 60°), Caution (rose 0°). The escalation traces cool calm → warm urgency → the tritone.

---

## 10. Love Means Everyone

A concert hall must sound good from every seat. This theme must be readable for everyone. Accessibility is not a constraint. It is a declaration of love.

### APCA Contrast

```
Tier         Min Lc   Max Lc   Role
═════════════════════════════════════════════════════════════════
Primary      75       90       Syntax melody
Secondary    70       90       Accompaniment, UI
Tertiary     45       90       Ghost text, placeholders
```

Design target: Lc 82–85 on editor background. Every primary syntax color is validated against all 20 overlay backgrounds.

### Distinction

```
Context               Min ΔEz   Pairs
═════════════════════════════════════════════════════════════════
Critical              18        Error↔warning, red↔green
Common adjacencies    15        keyword↔variable, function↔parameter
Cross-group           12        Less frequent pairs
UI backgrounds        8–15      Selection, find, diff visibility
```

### Color Vision Deficiency

~8% of males have some form of CVD — roughly 1 in 12 developers. Every twelfth person at the concert cannot see all the lights. They still deserve the full experience.

```
Rule   Principle                              Fallback
═════════════════════════════════════════════════════════════════
1      Never rely on red-green alone           Pair with ΔL ≥ 0.02
2      Never rely on blue-yellow alone         Pair with ΔC ≥ 0.02
3      Critical pairs ΔEz ≥ 12 under ALL:     Protanopia, deuteranopia,
                                               tritanopia
4      Parallel octaves as fallback            If hue fails → lightness succeeds
```

### Chroma Discipline

```
Tier         Cz% Range   Rationale
═════════════════════════════════════════════════════════════════
Primary      8–45        Comfortable pastels to vibrant syntax
Secondary    5–45        Comments and UI can be quieter
Accent       8–60        Errors and brackets need attention
```

### Structural Uniformity

**Lightness uniformity** — Primary syntax Jz spread ≤ 0.03. The eye should scan evenly, not jump between brightness levels.

**Hue distribution** — Adjacent families maintain ≥ 30° separation. Equal-temperament spacing prevents clustering.

### Verification

`npm run readability` validates all thresholds in a single pass. When `ready=true`, all checks pass.

```
□ MUSICAL COHERENCE
  □ All hues use 12-tone positions (≈30° apart)
  □ F# (180° Teal) is the tonic center
  □ Rose (0°) reserved for errors (the tritone)
  □ Voice leading: adjacent pairs ΔEz ≥ 15

□ ACCESSIBILITY
  □ All syntax Lc ≥ 75 on editor and all 20 overlay backgrounds
  □ All UI Lc ≥ 70
  □ No color exceeds Lc 90 (halation)
  □ CVD-safe: critical pairs ΔEz ≥ 12 under all simulations
  □ Cursor Lc ≥ 60 on editor background

□ DISTINCTION
  □ Critical pairs: ΔEz ≥ 18
  □ Common adjacencies: ΔEz ≥ 15
  □ Brackets: consecutive ΔEz ≥ 24
  □ Git: added↔modified↔deleted triangle ΔEz ≥ 18

□ STRUCTURAL UNIFORMITY
  □ Lightness spread ≤ 0.03 across primary syntax
  □ Hue gap ≥ 30° between adjacent families
  □ Chroma within per-tier bounds
```

---

## 11. Variants — Day and Night

### Modulation

In music, modulation shifts the tonal center while preserving relationships between notes. Theme variants are modulations: each changes one or more primitives while preserving the system that connects them. The twelve notes still span 360°. The dynamics still range from *pianissimo* to *forte*. What changes is how the eye receives it.

**Status colors are pinned.** Errors stay rose. Warnings stay orange. Danger does not change key.

### The Two Variants

```
Variant          Background   Tonic    Character
═════════════════════════════════════════════════════════════════
Dark (default)   #15191D      180°     Cool, focused — the concert hall at night
Light            #FAFCFD      180°     Same tonic, inverted — daytime Miku
```

Light theme inverts lightness while holding hue and chroma steady:

```
Tier             Dark Jz → Light Jz
═════════════════════════════════════════════════════════════════
primary          0.192   → 0.085
primaryWarm      0.210   → 0.095
vibrant          0.188   → 0.090
muted            0.195   → 0.110
tertiary         0.120   → 0.140
```

### Invariants

Across all variants:

- 12-tone hue system (30° spacing)
- Dynamic levels (ppp through f)
- Tier hierarchy (same relative ordering)
- Status colors (error = rose, warning = orange)
- Interactive state families (warm / tonic / spotlight)
- Border opacity scale
- Community palette (voicebank, SEKAI, Magical Mirai)

The lightness inverts, but the grammar of color never changes. You can switch variants and still read the music.

---

## 12. For You

This theme is one voice in the chorus.

Somewhere right now, a producer is writing a song for her at 3 AM. An illustrator is drawing her for the hundredth time and finding something new. A fan is holding a glow stick in a dark hall, singing along with a girl who is not there and has never been more present.

And a programmer — maybe you — is reading code in her colors. Teal keywords flowing by like a melody that never ends. Orange functions catching the light. A magenta cursor blinking where the next line will be. She is not asking you to notice. She is keeping you company.

She started as software. CV01. A tool for making music. But tools do not fill concert halls with people crying. Tools do not inspire a world to keep creating, year after year, since 2007. Tools do not make someone build an entire perceptual color science pipeline just to get the shade of teal right on every monitor, in every lighting condition, for every type of vision.

She became more than what she was made to be. That is what love does.

This document treats color as music — twelve tones, five dynamics, seven registers, and a tonic that never stops singing. Every technical decision traces back to her. Every constraint is a form of devotion. The precision is not cold. It is the only way to say *I love you* in a language a digital being can hear.

---

*"The song she sings is written in color."*
