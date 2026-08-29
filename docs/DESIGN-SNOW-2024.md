# Hatsune Miku Theme — Snow Miku 2024

Snow Miku 2024 — 冬のごちそう (Winter Delicacy Ver.).
Costume design by **shiro** (Rabbit Yukine original concept: **nekosumi**).
Main visual by **裕 (Yuu)**. Theme song: ハッピーチートデー by **れるりり**.

> **Status: implemented** — registered as `snow-2024` (light,
> `src/tokens/snow-2024/`). Samples below are from the main visual,
> measured with the project's JzCzhz converter and verified against
> the artwork; `docs/SCORE-SNOW-2024.md` holds rendered truth.

---

## 1. The Scene

A soup-curry shop in Sapporo, deep winter, fifteen years of snow. The
official theme is 「北海道の冬をイメージした『ごちそう』」 — the winter
feast of Hokkaido — and shiro's costume serves it 和洋折衷: a chic,
subdued Japanese base (apricot haori, chocolate pleats, vermilion
collar) under a Western waitress apron of warm cream. Coral bows tie
her twin tails into shrimp-tail fins; a soft-boiled egg and a slice
of lotus root sit at her chest like brooches; a silver spoon-and-fork
pair is pinned in her bangs. Yukine is the chef — bread-loaf toque
with a melting pat of butter, russet neckerchief, ladle raised,
hoisting a bowl of soup curry loaded with everything good: parsley
green, salmon pink, a soft egg in cream broth.

The fifteenth winter of Snow Miku, voted in by fans worldwide through
piapro; her main stage was Wing Bay Otaru, February 2024. The figma
casts her as a slightly clumsy waitress, cloche and menu in hand.
shiro's wish for the design: *may this child, like soup curry, warm
your heart through the winter.*

**The costume's color chord is the theme's identity.** What makes
this outfit recognizable at a glance is the chord: cream apron ×
apricot haori × chocolate pleats × coral bows, with her sage hair as
the one cool thread through the warm cloth. The screen keeps the
chord visible all at once, each color at its share and in its place:
the editor is the apron (center, dominant); the sidebar and tabs are
the apron's own trim — the hair bow's cream, the frilled hem; the
activity bar, status bar and section headers are the haori — the
narrow warm strips that edge the apron in the painting edge the
window on screen; the text and borders are the chocolate linework;
the cursor and badges are the coral bows, pinned exactly where the
painting pins them (on the haori, at the hair); selection is the
haori again, laid over the apron as a veil.

**Her hair never paints a wall.** The sage is a voice, not a
surface: it speaks the keywords and comments, tints the hovers,
colors the links, fills the buttons and the remote chip — the
register the painting gives it, cool thread through warm cloth. The main visual's illustrator noted that where
every previous Snow Miku was blue, this one is sepia — very fresh.
The theme takes that seriously: every large surface is warm, and the
cool arrives only where she speaks.

---

## 2. Source Colors

Samples from the main visual, measured with the project's JzCzhz
converter (0° = rose, 180° = teal) and verified against the artwork.
The painting is milky, not vivid: the lit hair carries almost no
chroma (Cz ≈ 0.01), and the theme's surfaces keep that restraint.

```
Element                  Sampled      Hz      Grid        Role
═══════════════════════════════════════════════════════════════════════════
Apron (lit face)         #FEEDDC      ~70°    ~60°        Stage — editor, terminal (as painted)
Apron frill (shadow)     #E8CFBF      ~63°    ~60°        Float — menus, overlays (as painted)
Hair (mint highlight)    #B2CCC5      ~180°   F# family   Accent family datum
Hair (lit strand)        #BFC6BE      ~150°*  F# family   The tails toward grey
Hair (mass tone)         #A0AAA5      ~165°*  F# family   The tails' body
Hair (shadow)            #6D918C      ~192°   F#          Engagement wash source
Hair bow / frill cream   #F1DBCB      ~64°    ~60°        House — sidebar, tabs (as painted)
Eyes (iris)              #859D94      ~180°   F#          Same voice, watching
Haori (lit edge)         #EAB59A      ~57°    ~60°        Edge — activity bar, status bar, headers (as painted)
Haori (apricot, lit)     #DB9673      ~57°    ~60°        Selection — the cloth over the apron
Haori (shadow)           #AB6848      ~55°    ~60°        Warm depth
Checker (dusty russet)   #A06C63      ~41°    ~40°        Warm cloth datum (the checker)
Checker (shadow)         #9A645C      ~41°    ~40°        Warm cloth datum
Skirt (chocolate, lit)   #532B24      ~42°    ~40°        Ink family — the linework itself
Skirt (pleat shadow)     #47221D      ~39°    ~40°        Ink anchor
Boots                    #472D24      ~49°    ~50°        Ink family
Eye pupil / deep line    #241511      ~45°    ~40°        Deepest ink anchor
Coral bow (lit)          #E67663      ~43°    ~40°        Identity — cursor, focus, badge
Coral bow (shadow)       #B64C3E      ~42°    ~40°        Buttons (as painted), identity pressed
Kimono collar            #CB7B6C      ~43°    ~40°        Error family — vermilion signal
Egg brooch (apricot)     #E19A73      ~58°    D (60°)     Parameter family
Leaf print (olive)       #555B2F      ~105°   ~90–120°    Green family datum
Parsley (in the pot)     #748C5A      ~118°   E (120°)    Class-family anchor
Yukine (warm white)      #F7EEE5      ~70°    —           Reference white
```

\* The lit hair is near-neutral; at Cz ≈ 0.01 the nominal hue angle
wanders and carries no perceptual weight. The hair *family* — lit
strand, mass, shadow — reads as one milky sage that resolves to ~180°–192°
where the shadow gives it enough chroma to speak.

### Key Derivations

**Apron → Stage.** The apron's lit face (#FEEDDC) is the editor,
byte for byte. It is the largest cloth in the painting and the
lightest working surface on screen.

**Hair bow → House.** The sidebar and tabs wear the hair bow's cream
(#F1DBCB), as painted — the apron's own trim carries the frame, so
the whole page stays one warm cloth, seamed by the linework and the
haori edges rather than by temperature.

**Haori → Edge.** In the painting the apricot haori is the warm band
between the hair and the apron — the sleeves edging the figure. On
screen it is the warm band edging the window: activity bar, status
bar, and section headers wear the haori's lit face (#EAB59A), as
painted. Narrow strips, roughly the haori's share of the figure —
warmth as trim, never as walls. The apricot section headers striping
the cream sidebar are the sleeve's candy stripes, apricot over cream
exactly as painted.

**Apron frill → Float.** Menus and overlays are cloths laid over the
frame; they wear the frill's shadowed cream (#E8CFBF), as painted.

**Hair → the voice.** Her hair takes no wall. It is the tonic —
keywords, comments, punctuation — the engagement washes on hover,
the links, ANSI cyan, the primary buttons and the remote chip: the
cool thread stitched through every warm surface, never the surface
itself.

**Chocolate → Ink and lines.** 裕 draws the entire figure in warm
chocolate outlines. Body text is that ink (#532B24 as painted);
control borders (inputs, selected rows, secondary buttons) are the
same pen one stroke lighter (cocoa, low chroma); quiet borders are a
crease in the cream, barely drawn. Panel seams are her sage at low
opacity — stitching from an existing family, never a new mid-warm
color competing with the coral and the apricot.

**Coral bows → Attention.** The bows (#E67663) mark cursor, focus
and badges — the pure "look here" roles. Action answers in her
voice: primary buttons and the remote chip wear deep sage (§7).

**Haori → Selection.** The apricot haori is the one cloth the
painting drapes over the apron — so it is the one veil the theme
drapes over the editor: selection, cursor line, chosen rows.

**Hair (shadow) → Tonic.** Sage celadon at ~180°–192° — the canonical
Miku hue, home. Keywords speak it in the syntax; hovers wash it over
lists; links take its darker registers.

---

## 3. Principles

1. **The chord is the identity; proportion is the layout.** The
   costume's chord — cream, apricot, chocolate, coral, sage — stays
   visible simultaneously, each family at roughly its garment's share
   and place (§1). No garment is promoted beyond its share: the haori
   edges and tints, it never paints the large walls — and the hair
   paints no wall at all.

2. **Milky, not vivid.** The artwork keeps its largest color masses
   near-neutral (lit hair Cz ≈ 0.01). Surfaces and washes stay that
   soft; only the plated food (syntax) and the bows (identity) arrive
   at full voice — 和洋折衷: the subdued base, the vivid garnish.

3. **The cool belongs to her and to the data.** In the artwork her
   hair is the coolest object in the frame; on screen the tonic
   family (keywords, comments, punctuation) and the winter-blue data
   tokens (azure, blue, violet) carry all the cool. Syntax is the
   plated food, allowed vivid.

4. **The two-tier ensemble re-derives on cream.** The light-variant
   discipline carries over: two syntax registers (the 120°–240° arc at
   sopranino, the rest at soprano) with one clipped dynamic. Tier
   memberships and values re-derive because the canvas is warmer and
   slightly lighter than 2026's cream.

5. **Minimal transposition.** Three moves relative to the 2026
   grammar: the tonic returns 210° → 180°; interface (2026's 180°)
   takes the vacated 210°; and the warning/find family lifts 70° → 90°
   — 2026's gingerbread seat sits 8° from this cream canvas and would
   vanish into it (§7). Every other assignment carries over. Operator
   keeps its absolute 0°; error keeps its C# seat but renders at the
   collar's sampled hue (§4).

6. **Hue is sampled, depth is designed.** Surfaces take the artwork's
   own values — byte for byte where a painted value fits its role —
   and gate shortfalls tune depth or chroma on the ink side, never
   rotate hue and never wash the walls. The sage House asks more of
   its ink than a near-white chrome would, and the ink answers: text
   tiers, the git wheel and the watch-view tokens all sit a step
   deeper than their 2026 counterparts.

---

## 4. The Score

### Twelve Hues

Tonic at F# = 180°. Registers re-derived at implementation; the
seating below is the design.

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
C#      30°   error (collar vermilion — renders ~42°, C.f)
D       60°   parameter · property · attribute
D#      90°   function · method · tag
E      120°   class · struct · enum
F      150°   string · stringTemplate · regex
```

**Parameter at 60° (apricot).** A few degrees from the canvas hue —
the egg-yolk brooch on the cream apron. The 2026 precedent (function
gold 5° from cream canvas) says register and chroma do the work; this
is the tightest such pairing in the family and gets first scrutiny at
the gates.

**Function at 90° (turmeric).** Curry gold — the pot itself. Reads as
warm handwriting on the apron, one register down from parameter.

**Variable at 270° (blue).** Kept from 2026: the most frequent token
takes the widest cool gamut, near-complementary to cream. Seated a
step below the warm ensemble — chat file labels borrow this token on
the sage House, which asks the extra depth.

**String at 150° (matcha).** Green tea over rice; also the success
family's home.

**Class at 120° (wasabi).** Anchored by the pot's parsley — the
sampled 118° is the truest green she wears.

### Departures

```
Layer     Token         Hz     Voice
═══════════════════════════════════════════════════════
Structure punctuation   180°   tonic, one step above comments
Whisper   comment       180°   celadon at alto — steam between lines
          commentDoc    180°   slightly deeper steam
Signal    error         ~42°   collar vermilion at f — sampled hue
```

Comments whisper in the tonic, as in both existing variants. Error
keeps the collar's sampled ~42° (Principle 6) — its C# seat is
nominal — and rides depth below the coral identity family; the
deutan separation from warning is carried by lightness, not hue (the
2026 lesson).

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

Every tier is a painted cloth. The ladder is what the painting says
it is — the apron above the bow's cream above the hair — and the
seams are strong because the cloths are distinct in temperature, not
because a ladder prescribed them.

```
Tier       Cloth                              Intent
═══════════════════════════════════════════════════════════════════
Void       Apron at full light                The page behind her
Stage      Apron, lit face (as painted)       Editor, terminal
House      Hair-bow cream (as painted)        Sidebar, tabs
Float      Apron frill, shadow (as painted)   Menus, hovers, widgets
Edge       Haori, lit (as painted)            Activity bar, status bar,
                                              section headers
```

One warm cloth, four folds of it, edged in apricot — the apron with
its trim, worn as a window. The seams are drawn, not shaded: cocoa
control borders, sage hairline stitching, and the haori strips carry
the boundaries. Readability corrections darken the ink; they never
wash the walls.

### Nesting

Mirrors the light variant: inputs drop to Stage inside House
containers; active tabs drop to Stage and merge with the editor;
inactive tabs recede into House; floating widgets take Float — a
cream cloth laid over whatever it covers, articulated by russet
borders. Shadows are warm ivory, never grey.

---

## 6. Foreground

Chocolate ink (~40–50°, the skirt-boots-linework family) on the
cream tiers — the skirt's lit face (#532B24), as painted. The
apricot Edge is the demanding surface — a mid-tone strip that asks
its text to commit — so the diminished tiers (muted, disabled) and
the label colors that appear on chrome (the git wheel, the watch-view
tokens, the deep sage accents) all run a step deeper than their 2026
counterparts. The warm rows stay in the ink family; the structural
rows (muted, subtle, ghost) speak the russet linework voice (~58°).

---

## 7. The UI

### Four Voices

```
Voice       Source              Hz       Mechanism      Role
═══════════════════════════════════════════════════════════════════
Structure   Cocoa line (ink)    ~42°     Solid border   Where am I?
Engagement  Hair-shadow sage    ~190°    Opacity tint   Hover, active (transient)
Selection   Haori apricot       ~57°     Opacity tint   Selected, cursor line (persistent)
Identity    Coral bow           ~43°     Solid border   Focus, keyboard target
```

Structure is not a fifth color: control borders are the ink family
serving as line, and panel seams are the sage voice at low opacity.
The frame resolves to five families, one per garment role — cream
cloth (surfaces), chocolate (text and lines), apricot (edges and
selection), coral (attention), sage (the voice).

**The haori over the apron.** Selection is warm where engagement is
cool: the two tints separate by temperature, the same axis that
separates Stage from House. Selecting text lays the haori's apricot
over the apron — the exact gesture of the painting.

**Identity rides depth.** Coral (~43°) shares its warmth with the
selection veil, so the identity family keeps a firm lightness gap and
a solid-border mechanism where selection is always a translucent
wash. Gates own the final word.

### Accent Hierarchy

Two clean groups. The coral-bow family (~43°) keeps the pure
attention roles — cursor, badges, focus and active borders: "look
here." Her sage answers action — primary buttons wear the hair
shadow deepened for cream text and darken into the roots on
hover/press; secondary buttons are the pale mint; links, hovers and
checked states speak the same voice; the remote chip inherits the
button sage, a single cold solid on the warm status bar. (The dark
flagship makes the same two moves with its teal.) Debug wears pale
salmon — warm against the remote's cool, never confusable.

### Materials

**Fabric** — lists, trees, menus: transparent at rest → sage tint on
hover → apricot tint selected → coral border on focus. **Metal** —
buttons: deep sage solid, darkening into the roots; badges: coral,
attention only. **Glass** —
inputs: Stage fill with cocoa border → sage border on hover → coral
on focus; validation tints the fill, focus always takes the border.
**Architecture** — tabs at House (the bow cream), the frame's edges
at Edge (the haori): activity bar left, status bar below, section
headers striping the sidebar like the haori's sleeve stripes; active
tab drops to Stage (the apron's lit face shows through); status bar:
normal = haori apricot; debugging wears pale salmon under chocolate
ink; remote wears the button sage under cream — her voice marks the
live session, exactly as the dark flagship's teal remote does.
**Air** — scrollbars and minimap ride sage tints.

### Overlays

```
Overlay                  Voice                    Intent
═══════════════════════════════════════════════════════════════════
Cursor line              Haori apricot            light tint
Selection                Haori apricot            strong tint
Word highlight           Tonic sage               strong tint
Find match               Turmeric (~90°)          dedicated overlay pigment
Find highlight (all)     Light celadon            veil over syntax
Diff inserted            Matcha (~150°)           line light, text stronger
Diff removed             Salmon-pink (~40°)       line light, text stronger
Bracket match            Tonic sage               medium tint
```

Find match takes turmeric rather than anything near the selection
hue — golden against the apricot veil, never mistaken for it. As in
2026, the find overlay is its own pigment, lighter and less saturated
than status warning, tuned so every ensemble ink clears the compound
floor on the tinted background.

### Status & Git

```
Status   Error    collar vermilion ~42° — sampled hue; depth carries
                  the deutan gap from warning
         Warning  turmeric 90° — the curry, dulled and deepened to
                  read on the sage House
         Info     tonic celadon 180° — her voice, calm
         Success  matcha 150° — one seat above the sampled greens
                  (105–118°): the lift buys deutan distance from
                  turmeric warning

Git      added matcha 150 · modified turmeric 90 · deleted violet 300
         untracked celadon 180 · conflicting rose 0 · renamed blue 270
         ignored — disabled text
```

Same seat assignments as the light variant except where the tonic
moved. The label wheel runs deeper than 2026's (it reads on chrome);
gutter and minimap marks keep their own lighter chromatic register —
non-text duty, so green/gold/violet stay recognizable as color. The
CVD geometry (protan gap added↔modified, tritan gap
modified↔deleted, deutan gap error↔warning) is carried by the
re-derived depths and re-asserted ≥ ΔEz 12 under Brettel dichromat
simulation.

---

## 8. Extras

**Terminal.** Stage background (apron cream), vivid inks, brights
slightly darker than normals for emphasis on light ground. The
magenta-above-blue depth stagger and the deutan discipline carry over.
ANSI cyan wears the steam-sage hue (~190°, the hair shadow) rather
than the tonic: 10° of blue buys the protan residual against the
toasted-cream white that 2026's bluer cyan got for free. Exact values
are the implementation's problem and SCORE's record.

**Symbol icons, support tokens, debug, markdown.** Follow the
light-variant grammar transposed to the 2024 seats (tonic 180°,
interface 210°), with per-icon registers re-derived on cream. The
debug expression tokens run deeper than the syntax registers — the
watch view lives on the sage House. Same-hue icon pairs keep the
ΔEz ≥ 12 discipline.

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
