# Hatsune Miku Theme — Snow Miku 2024 Variant (Design Draft)

Snow Miku 2024 — 冬のごちそう (Winter Delicacy Ver.).
Costume design by **shiro** (Rabbit Yukine original concept: **nekosumi**).
Main visual by **裕 (Yuu)**. Theme song: ハッピーチートデー by **れるりり**.

> **Status: design draft — not yet implemented.** This document records
> the intent for a planned light-polarity theme. Sampled values below are
> provisional (taken from the main visual with the project's JzCzhz
> converter); implementation re-samples official art into
> `src/palette/`, and `docs/SCORE-SNOW-2024.md` will hold rendered truth
> once the theme is registered.

---

## 1. The Scene

A soup-curry shop in Sapporo, deep winter, fifteen years of snow. The
official theme is 「北海道の冬をイメージした『ごちそう』」 — the winter
feast of Hokkaido — and shiro's costume serves it 和洋折衷: a chic,
subdued Japanese base (persimmon haori, chocolate pleats, vermilion
collar) under a Western waitress apron of peach cream. Salmon-colored
ribbon fish swim through her twin tails; a soft-boiled egg and a slice
of lotus root sit at her chest like brooches; a fork gleams in her
bangs. Yukine is the chef — bread-loaf toque with a melting pat of
butter, russet neckerchief, ladle raised, hoisting a bowl of soup curry
loaded with everything good.

You code at the wooden table. The editor is the apron — peach cream,
lit by the kitchen. The sidebar and menus are the haori and the room —
the same warmth, more pigment. The ink is chocolate. The cursor is the
salmon ribbon. Her sage-celadon hair is the only cool thing in the
whole warm room — and that is exactly why it speaks every keyword.

The main visual's illustrator noted that where every previous Snow Miku
was blue, this one is sepia — very fresh. The theme takes that
seriously: this is the all-warm variant.

---

## 2. Source Colors

Provisional samples from the main visual, measured with the project's
JzCzhz converter (0° = rose, 180° = teal). Implementation re-samples
from official art packs.

```
Element                  Sampled      Hz      Grid        Role
═══════════════════════════════════════════════════════════════════════════
Hair (sage, lit)         #8FAEA5      ~180°   F# (180°)   Tonic — keywords, accent
Hair (sage, shadow)      #6D958F      ~192°   F#          Tonic depth
Eyes (iris)              #859D94      ~173°   F#          Same voice, watching
Apron cream              #FDE4D3      ~62°    ~60°        Canvas — editor, content
Apron highlight          #FFEFDD      ~72°    ~65°        Void — warm ivory
Haori (burnt sienna)     #AF6B46      ~58°    ~60°        Chrome — sidebar, menus
Checker (cocoa)          #8B534F      ~36°    ~40°        Warm neutral, secondary chrome
Skirt (chocolate)        #61352D      ~42°    ~40°        Ink family
Boots                    #503328      ~51°    ~50°        Ink family
Chest ribbon             #3C1711      ~41°    ~40°        Deepest ink anchor
Ribbon fish (salmon)     #E57662      ~44°    ~40°        Identity — cursor, focus
Ribbon fish (deep)       #B54B3F      ~41°    ~40°        Identity pressed, error depth
Kimono collar            #C0483A      ~42°    ~30–40°     Error — vermilion signal
Cuff stripe (pink)       #E7A9A0      ~39°    ~40°        Identity tint, diff removed
Egg brooch (apricot)     #F1AC82      ~60°    D (60°)     Parameter family
Bread toque (tan)        #CC9978      ~61°    ~60°        Warning/find family source
Leaf print (olive)       #555B2F      ~105°   ~90–120°    Success, diff added
Frill (dusty pink)       #C6978C      ~44°    ~40°        Soft warm neutral
Yukine (warm white)      #F7EEE5      ~70°    —           Reference white
Yukine scarf (russet)    #793F2B      ~50°    ~50°        Deep warm accent
```

### Key Derivations

**Hair → Tonic, at home.** Sage celadon sits at Hz ~180° — the canonical
Miku hue, where the dark variant's tonic lives. 2026 transposed the
tonic to G (210°); 2024 brings it home to F# (180°), voiced matcha-soft
in chrome and full-strength in syntax.

**Apron → Canvas.** Peach cream at ~62° — warmer and pinker than 2026's
cream (~85°). The whole lightness ladder re-derives on this canvas.

**Haori → Chrome.** Burnt sienna at ~58° — *the same hue as the canvas*.
Content and structure are one wood; they separate by lightness and
pigment load, not temperature. This is the defining constraint of the
variant (see Principles).

**Chocolate → Ink.** Skirt, boots, ribbon: ~40–50°, continuous with the
2026 chocolate-ink tradition. Text is dark roast on peach cream.

**Ribbon fish → Identity.** Salmon-vermilion (~40°) marks cursor,
buttons, badges, focus. The deep end of the same family (collar
vermilion, deepened) is the error voice — same-hue coexistence
separated by depth, exactly as 2026 ran necktie pink (27°) beside
strawberry error (30°).

---

## 3. Principles

1. **All-warm sepia.** 2026 separated content from chrome by
   temperature (warm cream vs cool blue). 2024 has no cool structure to
   spend — canvas and chrome share one warm hue family. Separation
   comes from the lightness step, the pigment step (Cz ladder), and
   boundary borders. This is the variant's central readability risk and
   its central character; the gates own the verdict.

2. **The tonic is the only cool voice.** Sage celadon (180°) against a
   uniformly warm room — ~120° of hue separation from canvas. In the
   artwork her hair is the coolest object in the frame; in the editor,
   keywords are. Cool syntax hues (azure, blue, violet) remain available
   for data tokens: syntax is the plated food, allowed vivid.

3. **和洋折衷 — restrained base, vivid garnish.** Surfaces stay chic
   and subdued (the 和 base: low-chroma warm tiers, never chroma-boosted
   chrome). Signals carry the gochisou colors (the 洋 service: salmon,
   turmeric, matcha, vermilion) at full voice.

4. **The two-tier ensemble re-derives on peach.** The light-variant
   discipline carries over: two syntax registers (2026 seats its
   120°–240° arc at sopranino, the rest at soprano) with one clipped
   dynamic. Tier memberships and values re-derive because the canvas
   is peachier and slightly deeper than 2026's cream.

5. **Minimal transposition.** Only two seats change relative to the
   2026 grammar: the tonic returns 210° → 180°, and interface (2026's
   180°) takes the vacated 210°. Every other assignment carries over.
   Signal tokens keep fixed absolute positions.

---

## 4. The Score

### Twelve Hues

Tonic at F# = 180°. Canvas Δ measured from the peach Stage (~62°).
Registers re-derived at implementation; the seating below is the design.

```
Note   Hz     Tokens
═══════════════════════════════════════════════════════════════════
F#     180°   keyword · keywordControl · storage
              · storageModifier · variableLanguage   ★ tonic
G      210°   interface
A      270°   variable
G#     240°   constant · enumMember · number · boolean
A#     300°   type · typeParameter
B      330°   decorator · macro
C        0°   operator
C#      30°   error (deep vermilion, C.f)
D       60°   parameter · property · attribute
D#      90°   function · method · tag
E      120°   class · struct · enum
F      150°   string · stringTemplate · regex
```

**Parameter at 60° (apricot).** Two degrees from the canvas hue — the
egg-yolk brooch on the peach apron. The 2026 precedent (function gold
5° from cream canvas) says register and chroma do the work; this is the
tightest such pairing in the family and gets first scrutiny at the
gates.

**Function at 90° (turmeric).** Curry gold — the pot itself. Reads as
warm handwriting on the apron, one register down from parameter.

**Variable at 270° (blue).** Kept from 2026: the most frequent token
takes the widest cool gamut, near-complementary to peach.

**String at 150° (matcha).** Green tea over rice; also the success
family's home.

### Departures

```
Layer     Token         Hz     Voice
═══════════════════════════════════════════════════════
Structure punctuation   180°   tonic, one step above comments
Whisper   comment       180°   celadon at alto — steam between lines
          commentDoc    180°   slightly deeper steam
Signal    error          30°   deep vermilion at f — the collar
```

Comments whisper in the tonic, as in both existing variants. Error
rides depth below the salmon identity family — the deutan separation
from warning is carried by lightness, not hue (the 2026 lesson).

### Brackets

Six levels, warm/cool alternation, tonic at level 4 — the 2026
structure with the celadon tonic seated home:

```
Level   Note   Hz     Temperature
═══════════════════════════════════════════
  1     D       60°   Warm — apricot
  2     A#     300°   Cool — violet
  3     D#      90°   Warm — turmeric
  4     F#     180°   Cool — ★ tonic ★
  5     C        0°   Warm — rose
  6     A      270°   Cool — blue
```

Adjacent pairs cross the warm/cool boundary; level 6 stays blue for
deuteranopia safety against level 1. Same CVD assertions as the light
variant (ΔEz ≥ 12 under Brettel, all pairs).

---

## 5. Backgrounds

### Tiers

All four tiers are warm — the room has no cold corner. Start from the
established light-variant ladders (Jz steps and the Cz ladder
0.008/0.012/0.016/0.020) and re-tune on peach; House and Float drift
toward the haori's sienna hue while staying inside the chrome-chroma
discipline (structural surfaces are never chroma-boosted).

```
Tier       Intent
═══════════════════════════════════════════════════════════════════
Void       Warm ivory — the lit kitchen behind everything
Stage      Apron peach-cream — editor, terminal
House      Kinako latte — sienna-tinted structure: sidebar, tabs
Float      Deeper latte — menus, hovers over the frame
```

Without a temperature boundary, the Stage/House seam leans harder on
the Jz step, the Cz step, and boundary borders than 2026 did. If the
gates find the seam too soft, the correction is more pigment within
the ladder and stronger borders — not a cool House.

### Nesting

Mirrors the light variant: inputs drop to Stage inside House
containers; active tabs drop to Stage and merge with the editor;
inactive tabs recede into House; floating widgets take Float. Shadows
are warm ivory, never grey.

---

## 6. Foreground

Chocolate ink (~40–50°, the skirt-boots-ribbon family) on peach cream —
the darkest anchor is the chest ribbon. Both surfaces and ink are warm;
readability comes from lightness contrast alone, which the peach canvas
must grant at every text tier. The diminished tiers split between the
ink family (warm rows: tertiary, disabled, placeholder) and the sienna
chrome voice (structural rows: muted, subtle, ghost).

---

## 7. The UI

### Four Voices

```
Voice       Source              Hz       Mechanism      Role
═══════════════════════════════════════════════════════════════════
Structure   Haori sienna        ~60°     Solid Jz       Where am I?
Engagement  Celadon hair        ~180°    Opacity tint   Hover, active (transient)
Selection   Steam sage          ~190°    Opacity tint   Selected, cursor line (persistent)
Identity    Ribbon-fish salmon  ~40°     Solid border   Focus, keyboard target
```

**Steam on the window.** Selection is the greyer, softer sage — steam
condensing on warm glass — while Engagement is the tonic celadon, more
chromatic. The two cool tints separate by chroma, mirroring how 2026
separated cyan engagement from ice selection.

**Identity rides depth.** Salmon (~40°) and celadon (~180°) sit ~140°
apart; under deutan both drift toward neutrals, so the identity family
keeps a firm lightness gap from the engagement tints. Gates own the
final word.

### Accent Hierarchy

The ribbon-fish family (~40°) serves all identity and action roles —
cursor, primary buttons, badges, focus and active borders — darkening
through salmon → deep salmon → vermilion for hover/active/pressed.
Button text is warm cream on deep salmon. Links take the tonic's
darker registers.

### Materials

**Fabric** — lists, trees, menus: transparent at rest → celadon tint on
hover → steam tint selected → salmon border on focus. **Metal** —
buttons, badges: salmon solid, deepening on interaction. **Glass** —
inputs: Stage fill with sienna border → tonic border on hover → salmon
on focus; validation tints the fill, focus always takes the border.
**Architecture** — tabs and bars at House; active tab drops to Stage;
status bar: normal = House, debugging = deep salmon, remote = celadon.
**Air** — scrollbars and minimap ride tonic tints.

### Overlays

```
Overlay                  Voice                    Intent
═══════════════════════════════════════════════════════════════════
Cursor line              Steam sage               light tint
Selection                Steam sage               strong tint
Word highlight           Tonic celadon            strong tint
Find match               Turmeric (~90°)          dedicated overlay pigment
Diff inserted            Matcha (~150°)           line light, text stronger
Diff removed             Salmon-pink (~40°)       line light, text stronger
Bracket match            Tonic celadon            medium tint
```

Find match takes turmeric rather than anything near the canvas hue —
a 60°-family overlay would vanish into peach. As in 2026, the find
overlay is its own pigment, lighter and less saturated than status
warning, tuned so every ensemble ink clears the compound floor on the
tinted background.

### Status & Git

```
Status   Error    deep vermilion 30° — the collar; depth carries the
                  deutan gap from warning
         Warning  turmeric 90° — the curry, golden caution
         Info     tonic celadon 180° — her voice, calm
         Success  matcha 150° — the leaf print approves

Git      added matcha 150 · modified turmeric 90 · deleted violet 300
         untracked celadon 180 · conflicting rose 0 · renamed blue 270
         ignored — disabled text
```

Same seat assignments as the light variant except where the tonic
moved; all pairs re-asserted ≥ ΔEz 12 under Brettel dichromat
simulation at implementation.

---

## 8. Extras

**Terminal.** Stage background (peach cream), vivid inks, brights
slightly darker than normals for emphasis on light ground. The
magenta-above-blue depth stagger and the deutan discipline carry over;
exact values are the implementation's problem and SCORE's record.

**Symbol icons, support tokens, debug, markdown.** Follow the
light-variant grammar transposed to the 2024 seats (tonic 180°,
interface 210°), with per-icon registers re-derived on peach. Same-hue
icon pairs keep the ΔEz ≥ 12 discipline.

**Indent guides.** Six pastry-case stripes, her hair first:

```
Guide   Hz     Source
═══════════════════════════════════════════
  1     180°   Tonic celadon — her hair
  2     300°   Violet — twilight plum
  3     330°   Magenta — azuki
  4     150°   Matcha
  5      90°   Turmeric — the curry
  6     270°   Blue — winter window
```

---

## 9. Implementation Notes

- **Registry entry** (the whole public wiring):
  `{ id: 'snow-2024', name: 'Hatsune Miku (Snow Miku 2024)', polarity: 'light', slug: 'snow-2024', vscodeFilename: 'hatsune-miku-snow-2024-color-theme.json' }` —
  not a flagship; the web `dark`/`light` aliases stay pinned to the
  flagship pair. Web exposure is additive:
  `data-hm-theme="snow-2024"` selectors only.
- **Tokens**: `src/tokens/snow-2024/` starting from the light
  composition with its own primitives; palette source
  `src/palette/snow2024.ts`, re-sampled from official art (this
  document's samples are provisional main-visual reads).
- **Docgen**: first third theme — docgen's per-theme title/prose
  branches must move into theme metadata (the planned abstraction
  point).
- **Gates**: `npm run readability` covers the theme the moment it is
  registered. Watch list, in order: the all-warm Stage/House seam;
  parameter (60°) on peach (62°); identity-vs-error same-hue depth
  split; find-match visibility over peach.

---

## References

- SNOW MIKU 2024 official site — theme, dates, credits:
  https://snowmiku.com/2024/
- Official blog, main visual reveal (shiro's soup-curry comment, 裕's
  sepia comment): https://blog.piapro.net/2023/09/b2309071.html
- Official blog, figma 冬のごちそうver. (waitress motif, parts):
  https://blog.piapro.net/2024/10/w241003-1.html
- Good Smile Company, ねんどろいど 雪ミク 冬のごちそうVer. (costume
  design shiro, Yukine concept nekosumi):
  https://www.goodsmile.info/ja/product/15329
- Good Smile Company (EN), figma Snow Miku: Winter Delicacy ver.:
  https://www.goodsmile.com/en/product/60102
- Theme song「ハッピーチートデー」/ れるりり feat. 初音ミク (MV):
  https://blog.piapro.net/2023/12/e2312201.html
- Official CD『Yukifull Kitchen feat. 初音ミク』:
  https://www.crypton.co.jp/cfm/news/2024/01/24sm24cd
