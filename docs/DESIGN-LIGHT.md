# Hatsune Miku Theme — Light Variant

Snow Miku 2026 — Shiawase Patisserie.
Costume design by **cold_air**. Main visual by **booota**.

---

## 1. The Scene

A pastel-blue patisserie shopfront in winter. She steps out in cream and cyan — cream dress, cyan-blue cape with pink and cyan snowflakes, chocolate beret with roll-cake spiral, chocolate boots and suspender straps, pastel-pink necktie. Pastries glow golden behind arched glass. Mint-green awning, snow on the ground, a wrought-iron chair, Yukine drawn in chalk on the chalkboard.

You code inside the patisserie. The editor is warm cream — her dress, the tablecloth, the light through the window. The sidebar and menus are the cool blue shopfront framing the warmth. Her hair is every keyword. Frost crystallizes on cream when you select.

---

## 2. Source Colors

All hue angles are **JzCzhz** (0° = rose, 180° = teal).

```
Element                  Corrected    Hz       Grid       Role
═══════════════════════════════════════════════════════════════════════════
Hair (mid-tone)          #65B5D8      ~234°    G (210°)   Tonic — keywords, accent
Cape (cyan-blue)         #55A8E0      ~242°    G (210°+)  Cool accent family
Shopfront walls          #BFC8D5      ~255°    ~235°      Chrome — sidebar, menus
Cream dress/skirt        #F2EDE0      ~85°     ~85°       Canvas — editor, content
Chocolate boots/straps   #5C3F35      ~49°     ~40°       Text ink
Warm brick               #BF9E9C      ~33°     ~30°       Warm neutral
Pastel-pink necktie      #FDC2C4      ~27°     ~27°       Focus, identity
Mint-green awning        #D0EDE4      ~180°    ~180°      Success, diff added
Gingerbread cookies      #B9936E      ~69°     ~70°       Warning, find match
Biscuit/dress warm       #E0CBB5      ~71°     ~75°       Disabled, muted
Iron chair               #9A829A      ~318°    ~310°      Decorative violet-grey
Chalkboard               #3E4651      ~254°    ~250°      Dark anchor, shadows
```

### Key Derivations

**Hair → Tonic.** Bright aqua-cyan maps to G (210°). Hair, cape, and shopfront form one cool gradient: ~234° → ~242° → ~255°.

**Dress → Canvas.** Warm cream editor canvas at Hz ~85°, matching the dress.

**Building → Chrome.** Pastel-blue shopfront walls → sidebar, tabs, menus. Hz ~235°.

**Chocolate → Ink.** Boots and straps → foreground text. Warm brown ink at ~40° Hz on warm cream canvas.

**Necktie → Identity.** Delicate pastel salmon-pink. Cursor, buttons, badges, and focus borders darken this hue while preserving Hz=27°.

---

## 3. Principles

1. **Warm content, cool chrome.** The editor canvas is warm cream (the dress). The sidebar and structural UI are cool blue (the building). You code inside the bakery; the shopfront frames the view.

2. **The tonic pops through temperature.** Cyan keywords (~210° Hz) are the cool accent on warm cream canvas — 125° of hue separation. The artwork's visual hierarchy: her hair is the cool standout in a warm scene. The gamut constraint (tonic max Cz 0.035 at soprano) matters less because temperature does the work.

3. **Pastel softness.** Canvas Jz ~0.186–0.210, Cz 0.008–0.020. Chromatic backgrounds corrected for ambient light — warm cream paper and cool frosted glass, matching the main visual's true surface colors.

4. **Per-hue gamut optimization.** Each syntax hue uses the register nearest its sRGB peak-chroma Jz. Cool hues peak dark (sopranino/treble), warm hues peak light (need darker registers for contrast).

5. **Transposition from dark.** Tonic shifts from F# (180°) to G (210°). Main syntax intervals preserved: variable +2, function +6, class +7, string +8, type +3. Signal tokens (error, operator) stay at fixed absolute hue positions.

---

## 4. The Score

### Registers

In a light theme, lower Jz = darker foreground = higher contrast. Each hue is assigned to the register nearest its sRGB peak-chroma Jz, darkened to target Lc ≥ 75.

```
Register       Jz      Role
═══════════════════════════════════════════════════════
sopranino      0.074   Blue/azure peak — keywords, tonic, string, interface
treble         0.088   Lime/azure peak — constants, classes
soprano        0.097   Violet/orange/gold — parameter, function, type
mezzo          0.110   Rose/magenta peak — operator, macro, decorator
alto           0.130   Comments
countertenor   0.148   Ghost, soft syntax
tenor          0.165   Punctuation
baritone       0.180
bass           0.192
contrabass     0.200   Barely visible on cream
```

Each hue uses the register nearest its sRGB peak-chroma Jz — displayed at maximum vividness automatically.

### Twelve Hues

Tonic at G = 210° Hz. Twelve hues at 30° intervals. Canvas Δ measured from warm Stage canvas (~85° Hz). Each hue uses the register nearest its peak-chroma Jz.

```
Note   Hz     Register     Tokens
═══════════════════════════════════════════════════════════════════════════
G      210°   sopranino    keyword · keywordControl · storage
                            · storageModifier · variableLanguage
A      270°   sopranino    variable
D       60°   soprano      parameter · property · attribute
D#      90°   soprano      function · method · tag
E      120°   treble       class · struct · enum
F      150°   sopranino    string · stringTemplate · regex
F#     180°   sopranino    interface
G#     240°   treble/sop   constant · enumMember · number · boolean
A#     300°   soprano/mez  type · typeParameter
B      330°   mezzo        decorator · macro
C        0°   mezzo        operator
C#      30°   soprano      error (ui.error, C.f)
```

**Variable at 270° (blue).** Most frequent non-keyword token. Wide gamut (max Cz 0.115 at sopranino). Near-complementary to cream — maximum visibility. Cool on warm: temperature does the work.

**Function at 90° (gold).** Only 5° from canvas hue, but at soprano register with mp chroma it reads clearly. Gold text on cream paper — warm, natural, like handwriting in amber ink.

**Constant at 240° (azure).** 155° from warm canvas — excellent temperature contrast. At treble register, cool azure pops strongly on cream.

### Instrument Chart

Max Cz at each hue's assigned register in sRGB. mp (Cz 0.120) clips to the gamut boundary automatically.

```
Hue             Register     Peak Cz
═══════════════════════════════════════════
Rose (0°)       mezzo        ~0.121
Red (30°)       soprano      ~0.121
Orange (60°)    soprano      ~0.133
Gold (90°)      soprano      ~0.179
Lime (120°)     treble       ~0.179
Green (150°)    sopranino    ~0.157
Teal (180°)     sopranino    ~0.152
Cyan (210°)     sopranino    ~0.138  ★ tonic
Azure (240°)    treble       ~0.097
Blue (270°)     sopranino    ~0.091
Violet (300°)   soprano      ~0.109
Magenta (330°)  mezzo        ~0.155
```

### Dynamics

Ensemble target: **mp** (Cz 0.120) — gamut-max. Clips to the sRGB boundary per hue automatically.

```
Dynamic   Cz       Role
═══════════════════════════════════════════════════════
niente    0        Achromatic
ppp       0.015    Barely tinted (indent guides)
pp        0.030    Visible tint (comments)
p         0.060    Present but restrained
mp        0.120    Gamut-max ensemble (syntax)
mf        0.135    Emphasis
f         0.150    Signal (status, git)
ff        0.165    Wide-gamut hues only
fff       0.180    Extreme (only blue delivers)
```

### Departures

```
Layer     Token         Hz     Register           Dyn
═══════════════════════════════════════════════════════════════
Structure punctuation   210°   mezzo              p
Whisper   comment       210°   alto               pp
          commentDoc    210°   mezzo+0.005        pp
Signal    error          30°   soprano            f (ui.error)
```

Punctuation is one register and one dynamic step above comments — active connective tissue in the code flow. Comments are tonic cyan at alto — her whisper between the lines. Error is warm red at soprano/f — vivid alarm on cream.

### Brackets

Six levels, warm/cool alternation. Tonic at level 4. Level 6 uses blue (270°) instead of green (150°) for deuteranopia safety against level 1 orange (60°).

```
Level   Note   Hz     Temperature
═══════════════════════════════════════════
  1     D       60°   Warm — gingerbread
  2     A#     300°   Cool — violet
  3     D#      90°   Warm — gold
  4     G      210°   Cool — ★ tonic ★
  5     C        0°   Warm — rose
  6     A      270°   Cool — display case blue
```

Adjacent pairs cross the warm/cool boundary (min gap 90°). Survives all CVD types.

---

## 5. Backgrounds

### Tiers

The spatial metaphor: warm inside (content), cool outside (structure).

```
Tier       Jz       Cz      Hz      Hex       Source
═══════════════════════════════════════════════════════════════════════════
Void       ~0.218   0.008   ~85°    #FEFAF0   Cream — warm absence
Stage      ~0.210   0.012   ~85°    #F5F0E2   Dress — editor, terminal
House      ~0.202   0.016   ~235°   #D5EAF4   Shopfront — sidebar, tabs
Float      ~0.194   0.020   ~235°   #C7E1EE   Frost — hover, menus
```

**Stage** — warm cream, where code lives. **House** — cool blue shopfront framing the workspace. **Float** — deeper cool, menus hovering over the frame. **Void** — warm ivory, empty bakery glow.

The warm→cool boundary between Stage and House separates content from chrome. Active tabs drop to Stage (merging with the editor). Inactive tabs stay at House (receding into the frame).

### Nesting

```
Container                    Surface gets      Rationale
═══════════════════════════════════════════════════════════════════
Sidebar → input              Stage + border    Editor cream, defined by edge
Sidebar → section header     House + accent fg Bold text distinguishes
Panel → terminal             Stage             Same content surface
Title bar → command center   House + border    Recessed in House
Tab strip → active tab       Stage             Merges with editor (warm)
Tab strip → inactive tab     House (dimmed)    Cool = recessed
Editor → inline chat         Float             Float over Stage
Editor → peek view           Float → Stage     Title at Float, editor at Stage
```

### Shadows

Warm ivory (~85° Hz, bg.void). Widget shadow at 50% opacity, scrollbar shadow at 38%.

---

## 6. Foreground

Chocolate ink (~40° Hz) on warm cream canvas (~85° Hz) — both warm, cohesive. Readability comes from high lightness contrast (ΔJz ~0.172).

```
Role           Jz      Cz      Hz       Lc on Stage
═══════════════════════════════════════════════════════════════
Primary        0.038   0.018   ~40°     ~90
Muted          0.098   0.006   ~235°    ~60
Subtle         0.130   0.003   ~235°    ~30
Tertiary       0.108   0.008   ~40°     ~45
Disabled       0.133   0.005   ~40°     ~32
Ghost          0.135   0.003   ~235°    ~25
Placeholder    0.133   0.006   ~40°     ~32
```

Primary through disabled: warm chocolate family (~40° Hz). Ghost, Muted, and Subtle shift to cool (~235° Hz) — structural foreground that belongs to the chrome voice.

---

## 7. The UI

### Four Voices

```
Voice       Source               Hz      Mechanism      Role
═══════════════════════════════════════════════════════════════════
Structure   Shopfront walls      ~235°   Solid Jz       Where am I?
Engagement  Cyan hair            ~210°   Opacity tint    Hover, active (transient)
Selection   Ice crystal          ~235°   Opacity tint    Selected, cursor line (persistent)
Identity    Pastel-pink necktie  ~27°    Solid border    Focus, keyboard target
```

Engagement and Identity: ~183° apart (warm/cool boundary). CVD-safe under all conditions.

**Ice on cream.** Selection overlays use ice (~235° Hz) on warm Stage (~85° Hz) — frost crystallizes on cream when you select text or park the cursor.

### Accent Hierarchy

```
Register   JzCzhz                             Role
═══════════════════════════════════════════════════════════════
deep       Jz 0.025  Cz 0.015  Hz ~40°       Pressed, shadow
dark       Jz 0.088  Cz 0.070  Hz ~215°      Active, links
accent     Jz 0.128  Cz 0.045  Hz ~210°      Primary accent (tonic)
cursor     Jz 0.130  Cz 0.070  Hz ~27°       Cursor, focus, icons
button     Jz 0.115  Cz 0.075  Hz ~27°       Primary button bg
badge      Jz 0.108  Cz 0.078  Hz ~27°       Badge bg, notifications
```

The necktie pink family (Hz=27°) serves all identity/action roles: cursor, buttons, badges, focus borders, active borders. Derived by darkening the sampled pastel (#FDC2C4) proportionally.

### Opacity Scale

Light backgrounds amplify tints — a drop of food coloring in cream shows more than in dark batter.

```
Name      Hex    Opacity
═══════════════════════════════
subtle    08     3%
light     15     8%
medium    25     15%
strong    40     25%
heavy     60     38%
solid     80     50%
dense     CC     80%
opaque    FF     100%
```

### Five Materials

**Fabric** — tint surfaces. Lists, menus, trees. Transparent at rest → cyan tint on hover → ice tint when selected → coral-pink border on focus.

**Metal** — solid objects. Buttons, badges. Necktie pink bg at rest → darker pink on hover → deepest pink on active → necktie border on focus. Button text is cream (#FFF5E0) on dark pink.

**Glass** — inputs, search boxes. Editor cream bg + cool border at rest → accent border on hover → necktie border on focus. Validation states tint the fill; focus always takes the border (identity wins).

**Architecture** — tabs, bars, panel titles. House tier at rest. Active tab drops to Stage (warm cream, merges with editor). Status bar overrides: normal=House, debugging=eye iris, remote=cape cyan.

**Air** — scrollbars, minimap sliders. Tonic tint at strong (25%) → heavy (38%) → solid (50%).

### Overlays

```
Overlay                  Color                         Tier
═══════════════════════════════════════════════════════════════════════════
Cursor line              Ice (~235° Hz)                light (8%)
Selection                Ice (~235° Hz)                strong (25%)
Inactive selection       Ice (~235° Hz)                medium (15%)
Word highlight           Tonic (~210° Hz)              light (8%)
Word highlight strong    Tonic (~210° Hz)              medium (15%)
Find match               Gingerbread overlay (~70°)    strong (25%)
Diff inserted line       Mint-green (~180°)            light (8%)
Diff inserted text       Mint-green (~180°)            medium (15%)
Diff removed line        Pastel pink (~27°)            light (8%)
Diff removed text        Pastel pink (~27°)            light (8%)
Bracket match            Tonic (~210° Hz)              light (8%)
Inline completion bg     Cool muted (~235° Hz)         subtle (3%)
```

**Find match uses a dedicated overlay color** (Jz 0.125, Cz 0.090, Hz 70°) — lighter and less saturated than status warning, to preserve cool-token contrast on the tinted background. Status warning (Jz 0.095, Cz 0.124) is too dark/vivid for overlay use.

**Diff removed text at light (8%)** instead of medium — the pastel pink overlay at medium (15%) crushes contrast for cool syntax tokens. The removed line border and gutter provide sufficient visibility at the reduced opacity.

### Status & Git

Status and git colors are vivid — bright enough to be clearly distinguishable on cream canvas and cool chrome backgrounds. Jz range 0.085–0.095 with high chroma (Cz 0.100–0.124).

```
Status level   Hz      Jz     Cz      Hex       Lc on cream
═══════════════════════════════════════════════════════════════════
Error          30°     0.088  0.120   #A70028   ~62
Warning        70°     0.095  0.124   #9C4800   ~60
Info           210°    0.090  0.100   #007C8A   ~57
Success        180°    0.090  0.110   #008963   ~53
```

```
Git state      Hz      Jz     Cz      Source
═══════════════════════════════════════════════════════════════════
Added          180°    0.076  0.120   Mint — vivid growth
Modified        70°    0.095  0.120   Gingerbread — warm change
Deleted        300°    0.085  0.120   Violet — twilight departure
Untracked      210°    0.088  0.110   Tonic — drifting in
Conflict         0°    0.088  0.120   Rose — demands resolution
Renamed        270°    0.080  0.100   Blue — reorganized
Ignored         —      —      —       Disabled text
```

Six distinct hues at vivid chroma, easily distinguishable in the explorer panel.

---

## 8. Extras

### Terminal

Background matches Stage (warm cream). ANSI colors are vivid — Jz 0.082–0.098 with high chroma for clear distinction on cream. "Bright" variants are slightly darker (more contrast on light bg).

```
ANSI       Hue         Normal Jz    Bright Jz
═══════════════════════════════════════════════════════════════
black      ~40° Hz     0.148        0.108     Chocolate brown
red         0° Hz      0.097        0.082     Vivid rose (soprano for CVD)
green     120° Hz      0.091        0.085     Vivid pistachio
yellow     60° Hz      0.076        0.072     Vivid baked peach
blue      240° Hz      0.076        0.066     Vivid azure
magenta   300° Hz      0.082        0.072     Vivid raspberry
cyan      210° Hz      0.084        0.072     Vivid tonic ★
white      ~95° Hz     0.093        0.056     Warm cream → ink
```

### Symbol Icons

24 icons on the 12-tone grid. Same-hue icons distinguished by register and dynamic (DEz >= 12 between pairs). Warm hues need darker registers than cool hues for visibility on cream.

```
Icon            Hz     Register        Dyn    Hue family
═══════════════════════════════════════════════════════════════════════════
property         60°   sopranino       ff     Orange — baked peach
field            60°   alto            mp     Orange — deeper warmth
function         90°   sopranino       ff     Gold — croissant glow
method           90°   mezzo           mp     Gold — DEz≥15 from function
constructor      90°   countertenor    f      Gold — DEz≥15 from method
class           120°   sopranino       f      Lime — pistachio
struct          120°   mezzo           ff     Lime — DEz≥15 from class
enum            120°   alto            f      Lime — DEz≥15 from struct
package         120°   alto            f      Lime — same as enum
string          150°   soprano         f      Green — mint leaf
reference       150°   sopranino       mp     Green — link
interface       180°   sopranino       mp     Teal — canonical
folder          210°   soprano         ff     Tonic — her home
array           210°   soprano         mp     Tonic — ordered
variable        270°   soprano         ff     Blue — vivid data
constant        240°   mezzo           f      Azure — deep truth
number          240°   treble          ff     Azure — quantity
boolean         240°   countertenor    mp     Azure — truth
enumMember      240°   countertenor    f      Azure — one choice
typeParameter   300°   soprano         mp     Violet — shape
module          300°   sopranino       f      Violet — boundary
namespace       300°   alto            mp     Violet — distant scope
operator          0°   sopranino       mp     Rose — rhythm
snippet           0°   soprano+0.006   mp     Rose — template
```

### Support Tokens

Library and built-in tokens share their syntax hue, one dynamic step louder (f instead of mp). Same register — distinction comes from chroma alone.

```
Token            Hz     Register     Dyn    Syntax counterpart
═══════════════════════════════════════════════════════════════
support.function  90°   sopranino    f      function (mp)
support.class    120°   sopranino    f      class (mp)
support.type     300°   sopranino    mp     type (mp) — same
support.constant 240°   sopranino    mp     constant (mp) — same
support.variable 270°   sopranino    mp     variable (mp) — same
```

### Indent Guides

Six hues from the patisserie palette. Tonic leads (the first stripe is her hair), then five contrasting hues for maximum distinction between levels. Alto register, p dynamic — gentle pastry-case stripes at the margin.

```
Guide   Hz     Source
═══════════════════════════════════════════
  1     210°   Tonic cyan — her hair
  2     300°   Violet — twilight
  3     330°   Magenta — raspberry macaron
  4     150°   Green — mint leaf
  5      90°   Gold — butter croissant
  6     270°   Azure — display case
```

Inactive guides at 25% opacity. Active guides at 100%.

### Inlay Hints

Inlay hints sit inside the editor canvas at reduced prominence. Three voices:

```
Hint type     Hz      Source             Role
═══════════════════════════════════════════════════════════════
Default       235°    foregroundMuted     Cool chrome — structural annotation
Type          210°    accentMuted         Tonic — type information whispered
Parameter     270°    inlayParameter      Blue — data name echoed faintly
```

Background: Stage at 50% opacity — translucent cream, not opaque.

### Semantic Token Modifiers

Modifiers change font style or shift to a related hue. No modifier changes register or dynamic — the base token's voice stays intact.

```
Modifier         Effect                    Rationale
═══════════════════════════════════════════════════════════════════════════
readonly         foreground → constant     Immutable — azure 240°, same as constants
static           (none)                    Static is structural, not visual
deprecated       fontStyle: strikethrough  A crossed-out note — the shape remains
abstract         fontStyle: italic         Not yet concrete — leaning forward
async            (none)                    Async is invisible in the editor
declaration      (none)                    Declaration site = usage site
definition       (none)                    Same as declaration
documentation    fontStyle: italic         Prose voice — leaning, literary
modification     (none)                    Mutation is contextual, not styled
defaultLibrary   (none)                    Handled per-type (support tokens)
```

Font styles used in TextMate scopes: comments (italic), variableLanguage (italic), headings (bold), emphasis (italic), strong (bold), quotes (italic), links (underline), deprecated (strikethrough), strikethrough (strikethrough).

### Debug

Token colors at sopranino register for visibility on House background.

```
Token      Hz     Dyn    Source
═══════════════════════════════════════════
name         0°   mp     Rose — identity
value      120°   f      Lime — the treasure
string     150°   mp     Green — text within (sopranino−0.006)
number     240°   f      Azure — quantity
boolean    240°   mp     Azure — truth
error        0°   f      Rose — something broke
type       300°   mp     Violet — shape beneath
```

### Markdown

```
Element              Hz     Register        Dyn    Style
═══════════════════════════════════════════════════════════════
Heading               90°   sopranino       f      bold
Heading punctuation   90°   sopranino       mp
Code block           235°   sopranino       f
Quote                235°   sopranino       mp     italic
Link URL             300°   sopranino       mp     underline
Inserted             150°   sopranino       mp
Deleted                0°   sopranino       f
Alert: important     330°   sopranino       f
Alert: note          235°   sopranino       f
Alert: tip           150°   sopranino       f
Alert: warning        90°   sopranino       f
Alert: caution         0°   sopranino       f
```
