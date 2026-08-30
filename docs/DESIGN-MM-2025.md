# Hatsune Miku Theme — Magical Mirai 2025

Magical Mirai 2025 — 星河一天 (Seiga Itten, "a sky of stars flowing
like a river"). Main visual and costume design by **Tiv**. Theme
song: ラストラス (Lustrous) by ***Luna**. The thirteenth Magical
Mirai — Sendai (first time), Osaka, Tokyo, August 2025.

> **Status: implemented** — registered as `mm-2025` (dark,
> `src/tokens/mm-2025/`). Samples below are from the main visual and
> the event's official site, measured with the project's JzCzhz
> converter and cross-verified against the full-resolution character
> artwork (two independent sampling passes; hues agreed within a few
> degrees); `docs/SCORE-MM-2025.md` holds rendered truth. Where the
> readability gates ruled against a nominal seat, the ruling is
> recorded in §4 (Departures).

---

## 1. The Scene

An open-air stage on a night without walls. The Milky Way runs
diagonally across the whole sky; the stage floor is dark and
polished, reflecting the stars like still water. Wire-frame star
lanterns — stellated polyhedra glowing from within — are scattered
across it. A chrome-blue mic stand waits at
center with paper strips tied to it — tanzaku, the Tanabata wish
papers, streaming from the stand and across the sky in a current of
their own. At the floor's edge sits a guitar amp wrapped in denim,
badged with a cyan starburst. One shooting star crosses the upper
sky, trailing pink.

Miku is Orihime, the weaver star. Her hair is looped into ring
braids at the crown — the weaver's thread — and falls in twin tails
so long they pool and curl like river water, mint at the source,
teal in the body, cyan-blue in the shadows, ice at the tips, with
star pins and glitter caught in the strands. The costume is Tiv's
和×ロック: a mandarin-collared halter in royal blue with a silver
cord clasp, an off-shoulder cobalt denim jacket lined in pale aurora
fabric, a denim skirt whose hem carries a sparkling band of galaxy
over a sheer indigo tulle underlayer, one deep-cobalt thigh-high
with a periwinkle garter, a white loose sock under a sheer checked
ruffle on the other leg, platform sandals (mint pedicure, a
pearl-string bow, a tiny "39" tag), a drawstring kinchaku pouch, a
clear vinyl pouch with a mint mascot charm, silver chains. On her
right ear, one candy-pink heart earring — the single warm object in
the painting.

The tour's first stop is Sendai, Japan's Tanabata city. Tiv drew the
visual "wishing this year's Magical Mirai becomes a time so fun and
beautiful you remember it every time you look up at the night sky."
*Luna wrote Lustrous around one line: 「純粋で無敵な、ただそこにある
光こそが明るい未来へ辿り着く道標になる」 — *the pure, invincible
light that is simply there is the signpost to a bright future*. At
the live finale, Miku changed into this costume and asked:
「私たちは、みんなの一番星になれたかな？」 — *did we become
everyone's first star?* The official after-report records the halls
that night filled with two lights — Miku's blue-green and the main
visual's blue, constellations across the ceiling: the concert itself
lit in the theme's two ambient families.

**The painting is one river of hue, crossed by one spark.** Measured
in JzCzhz, nearly everything in the frame sits on a single arc: her
lit hair at ~187°, its body at ~201°, its shadow at ~229°, her eyes
at ~239°, every piece of denim within a few degrees of 255°, the deep
sky at ~257°, the tulle and galaxy band at ~261°, the aurora horizon
at ~273°, the shooting star's trail at ~284°. The one thing outside
the river is the earring at ~321°. The painting is monochrome in its
cloth and sky; its richness is carried entirely by points of light —
thousands of white stars, glitter in the hair, sparkle on the hem,
the pink trail, the mint charm.

**The screen is the scene.** The editor is the zenith — the deepest
sky, and your code is its starlight: the polychrome lives in the
glyphs, never in the walls. The frame around the editor is the stage
floor, a mirror one shade lighter than the sky it reflects. The
activity bar and status bar are the denim — the worn cloth at the
edges, the amp at the bottom humming status. Menus and popups are
the tulle — sheer veils laid over the night. Borders are the Milky
Way: seams of star-mist, not lines of ink. The cursor is the
shooting star — the one *saturated* warm spark on screen, spent
exactly as the painting spends its own — and selection is the denim
jacket thrown over the sky. Links, buttons
and the live-session chip act in her cyan — the event's own
interactive voice.

---

## 2. Source Colors

Samples from the main visual (figure art and stage background),
measured with the project's JzCzhz converter (0° = rose, 180° =
teal). Values marked *site* are taken verbatim from
`magicalmirai.com/2025`'s stylesheet — the identity's own UI-grade
derivations of the same artwork.

```
Element                    Sampled     hz     Cz      Role
═══════════════════════════════════════════════════════════════════════
Hair, lit loops            #53E4CE    187°   0.061   Accent family datum
Hair, tail body            #34C7C3    201°   0.062   Tonic mass tone
Hair, braid shade          #419C9B    203°   0.048   Tonic, lowered
Hair, shadow               #1D96B7    229°   0.071   The river turning blue
Hair, ice tips             #76D4DB    211°   0.049   Punctuation datum
Mascot charm (mint)        #75F1D7    183°   0.054   Support/builtin family
Mint bead (ear drop)       #1DF9BF    169°   0.079   Mint family, vivid end
"2025" patch (shoulder)    #41BDC1    208°   0.059   The year speaks the tonic
Aurora lining (sleeve)     #9497CF    271°   0.052   Variable family — the
                                                     aurora worn as cloth
Eye iris (bright)          #1AB1F8    239°   0.098   Function family
Eye rim                    #193168    259°   0.074   The sky inside her eyes
Jacket denim, lit          #4984E8    255°   0.107   Selection veil source
Halter top, royal          #1852AF    255°   0.111   Selection, deep register
Skirt denim                #0B2870    259°   0.092   Denim, deepest
Tulle underlayer           #142876    261°   0.095   Float material
Galaxy hem band            #4E629F    262°   0.070   Section-header band
Thigh-high                 #33518D    257°   0.076   Edge cloth
Amp denim                  #285CA5    253°   0.092   Edge cloth (status bar)
Kinchaku pouch             #4979CC    255°   0.094   Denim mid
Garter (periwinkle)        #6D9AE3    255°   0.079   Control-border hardware
Star hairpin               #5494F6    254°   0.104   Hardware, lit
Silver clasp/chain         #A1A7BF    267°   0.023   Hardware, neutral
Earring (candy heart)      #F994F6    321°   0.077   ★ Identity — the spark
Shooting-star trail        #9382C0    284°   0.055   Type/constellation family
Sock (starlight white)     #DCDDEF    273°   0.015   Foreground datum
Star lantern               #BDCBDC    252°   0.019   Foreground, mid
Flare core                 #F6F2F9    298°   0.005   Brightest starlight
Sky, deep corners          #052963    257°   0.080   Stage hue datum
Sky, deep corners (2)      #09245B    258°   0.075   Stage hue datum
Nebula cloud               #314D93    259°   0.085   Float depth datum
Sky, mid                   #3E90D9    247°   0.091   Sky brightening low
Milky Way mist             #9EBCDC    249°   0.037   Comments, muted fg, seams
Milky Way mist (2)         #8EC1EC    245°   0.053   Mist, brighter
Aurora horizon (lavender)  #C0C0F8    274°   0.046   Variable family
Aurora horizon (pale)      #D4D6F7    273°   0.027   Starlight, lavender cast
Floor, deep                #153163    257°   0.070   House datum
Floor, reflection          #386091    252°   0.067   House, lit register
─────────────────────────────────────────────────────────────────────
Site: page night           #000821    259°   0.036   Void
Site: deep indigo          #021C49    257°   0.065   Stage depth datum
Site: section navy         #06172C    254°   0.034   Stage/panel family
Site: slate indigo         #252E48    263°   0.036   Raised night
Site: text white           #FDFDFD     —     0.000   Starlight ceiling
Site: cyan accent          #17DDDD    204°   0.071   Action — links, buttons
Site: cyan accent, deep    #00C3C3    204°   0.068   Action, pressed
Site: lavender             #BFABFF    282°   0.066   Aurora, UI-grade
Site: periwinkle           #708FFF    261°   0.105   ANSI blue, renamed
Site: pink                 #CD4E9E    345°   0.087   Identity, deep register
Site: pink, pale           #FFA2DC    341°   0.058   Identity, lifted
Site: star yellow          #FFF078     96°   0.092   String/warning family
Site: antique gold         #AD9552     87°   0.068   Gold, lowered
Site: crimson              #D6004F     23°*  0.126   Error family
```

\* Site alert colors (crimson `#D6004F`, coral `#FF7E7E`/`#F9938B`,
notice orange `#F3961A`) appear once each in the stylesheet — the
identity's own signal palette, kept out of the ambient design and
reserved for exactly that duty here.

### Key Derivations

**Zenith → Stage.** The editor is the sky above the frame. The
painting's deepest visible sky (#052963, #09245B — hz 257°, Cz
~0.08) sets the hue; the site's own night pages set the working
depth. The event's designers already made this exact move: when the
sky became a page, they kept 257° and stepped the chroma down
(#021C49, Cz 0.065; #06172C, Cz 0.034 — the deeper the duty, the
calmer the blue). The Stage follows the same
official precedent — the zenith's hue at a depth built for reading.
It is a *blue* night: the darkest surface on screen still reads as
sky, never as black.

**Floor → House.** The sidebar, panels and tab strip are the stage
floor (#153163) — the water-mirror Miku stands on, one step lighter
than the sky because it reflects it. You stand on the frame; the
editor opens into the sky.

**Nebula and tulle → Float.** Menus, hovers and the command palette
are sheer cloth laid over the night: the tulle underlayer (#142876)
and nebula (#314D93) family, a veil whose depth sits above the
floor. Widget shadows are the night itself — Void at opacity, never
grey.

**Denim → Edge and Selection.** The denim is the worn cloth of the
painting — jacket, skirt, thigh-high, amp — all within a few degrees
of 255°, the most chromatic large masses in the frame (Cz 0.09–0.11).
On screen it is worn the same two ways: as the frame's edges (the
activity bar and status bar wear the amp's denim; sidebar section
headers wear the skirt's galaxy hem band) and as the one cloth
draped over the sky — selection, the jacket thrown on (#1852AF /
#4984E8 as a translucent veil).

**Hair → the tonic.** Her hair is the river's source: mint at 187°,
teal at 201–203°, cyan-blue at 229°. The site's interactive cyan
(#17DDDD, 204°) is the hair's body tone made UI-grade — the
identity's own choice of voice. The tonic seats at G (210°) and
renders at the sampled ~204°: keywords, the engagement voice, links,
primary buttons, the remote chip.

**Earring → the First Star.** One warm spark in the whole painting:
the candy-pink heart (#F994F6, 321°), echoed by the shooting star's
trail and by the site's pink (#CD4E9E, #FFA2DC). It takes the pure
"look here" roles — cursor, focus, badges, the current find match —
and nothing else. 一番星: on a screen of cool light, the eye finds
the one warm point instantly.

**Milky Way → seams and silence.** The site literally uses a Milky
Way PNG as its section divider. Borders here are the same gesture:
hairlines are star-mist (#9EBCDC family) at low opacity — luminous
seams, not ink. Comments are the same mist at reading register: the
haze between the stars, present everywhere, pressing nowhere.

**Star gold → the written wish.** The identity's only warm-yellow
lives in its star sparkle (#FFF078, #AD9552). Strings — the words
humans write down — glint gold, and warnings share the family at
signal register: both are notable glints in a cool sky.

**Hardware → structure.** The costume's silver — clasp, chains,
buckles, the garter and hairpin periwinkles (#A1A7BF, #6D9AE3,
#5494F6) — is the frame's hardware: control borders, input outlines,
resize grips. Metal, not cloth.

---

## 3. Principles

1. **One river, many stars.** Every large surface lives on the
   painting's single hue arc (~250–263°), separated by depth alone —
   monochrome walls, like the sky. All polychrome belongs to points
   of light: glyphs, marks, pins, badges. The theme's richness is in
   its text, exactly as the painting's richness is in its stars.

2. **The light is simply there.** Text is starlight: high lightness,
   restrained chroma, on a sky that never brightens to meet it.
   Readability corrections tune the light — lift a glyph, never wash
   a wall. (*Luna's line is the accessibility policy: the light that
   is simply there is the signpost.)

3. **One warm spark.** The painting spends warmth once — the
   earring. The screen does the same: saturated pink-magenta appears
   only where attention is demanded (cursor, focus, badge, current
   find). Ambient UI never borrows it. Star gold and the signal
   palette are text- and status-register voices, never frame colors,
   and the warm text families (gold, sand, candy) hold low chroma so
   that literal-dense files keep the night's balance.

4. **Pink looks, cyan acts.** Two accent groups, both the identity's
   own grammar: the key visual reserves pink for its one spark; the
   official site gives every interactive element cyan. "Look here"
   is the First Star; "this responds" is the river's voice.

5. **Hue is sampled, depth is designed.** Surfaces take the
   artwork's hues — byte for byte where a painted or site value fits
   its role — and gate shortfalls adjust Jz or Cz on the light side,
   never rotate hue. The official site's sky-to-page move (257° kept,
   chroma halved) is the sanctioned pattern for every such
   adjustment.

6. **Where the painting is silent, the festival speaks.** The scene
   is Tanabata. Roles the artwork does not color are filled from
   festival canon before engineering convenience: bamboo-leaf green
   for growth (success, additions — the branch the wishes hang on),
   the five tanzaku colors for the indent guides, star gold for the
   written wish. Extensions must name their motif.

---

## 4. The Score

### Twelve Hues

Tonic at G = 210°. In the syntax the tonic renders at ~195° — the
hair spans 187°–229°, and the gates pushed the keyword voice one
step toward the river's mint source to hold the CRITICAL
keyword↔function floor against the iris cerulean; the *action* voice
(links, buttons, the remote chip) keeps the site's own 204°. The
seating below is as implemented.

```
Note   Hz     Tokens
═══════════════════════════════════════════════════════════════════
G      210°   keyword · keywordControl · storage      ★ tonic — the hair
              · storageModifier · variableLanguage      (renders ~195°)
G#     240°   function · method · tag                 the eye iris
A      270°   variable                                aurora lavender
A#     300°   type · typeParameter · class · struct
              · enum                                  the constellation
B      330°   number · boolean · constant
              · enumMember                            candy pink
C        0°   error (renders at site crimson ~24°)    the signal
C#      30°   deprecated · invalid                    coral, sparse
D       60°   property · attribute · parameter        warm sand
D#      90°   string · stringTemplate · warning       star gold
E      120°   regex · success family                  bamboo leaf
F      150°   markup heading · interface              spring green
F#     180°   support · builtin · namespace           the mascot's mint
```

Decorators and macros render as pale amber (~76°, between the sand
and the gold) — see Departures.

**Keyword at 210° (the current).** The river's own voice threads the
code — the single most identity-carrying assignment, matching the
site's interactive cyan family.

**Function at 240° (the gaze).** The brightest saturated point on
her figure is the eye (#1AB1F8): where she looks, action happens.
Calls and definitions carry the iris cerulean — vivid, frequent,
unmistakable against the tonic (30° apart plus a register gap; the
gates own the final separation).

**Variable at 270° (the aurora).** The most frequent colored token
sits nearest to starlight: a pale periwinkle-lavender
(#C0C0F8/#BFABFF family) barely a tint away from the foreground —
the horizon glow of the text, everywhere and calm. The seat is
anchored twice: the sky's aurora horizon (~273°) and the costume's
own aurora lining (#9497CF, 271°) — the fabric Tiv names is the
hue the most-worn token wears. Plain text keeps its faint lavender
cast at whisper chroma; variables step up to the strongest chroma
the primary-contrast shelf allows at this hue — visibly aurora,
still calm.

**Type at 300° (the constellation).** Types are the named shapes
drawn between the stars — the shooting-star trail's mauve (#9382C0)
lifted to text duty.

**Number at 330° (the candy).** Small, sweet populations of fixed
values sparkle in the earring's family at text register — pink as
*text* is allowed to be quiet; pink as *attention* (Principle 3) is
always the saturated spark, a register apart.

**String at 90° (the wish).** Written words glint star gold —
the one warm text family, the tanzaku ink. Warnings share the hue at
signal register: both mean "a glint worth reading."

**Property at 60° (warm sand).** The skin tones of the painting —
the only warm near-neutral it contains — carry member access: warm,
low-chroma, unmistakable beside gold strings (30° and a chroma tier
apart). Parameters share the family — what you hand her, held in
her hands.

**Regex at 120° (bamboo).** Pattern language takes the festival
green — sharp, rare, clearly not a string.

**Support at 180° (the mascot).** Built-ins and library names are
the little companion on her pouch (#75F1D7): help that travels with
her, fresh mint beside the tonic teal, separated by register.

### Departures

```
Layer     Token          Voice
═══════════════════════════════════════════════════════════════════
Structure operator       starlight — the glint between glyphs;
                         stays in the foreground family, never warm
Structure punctuation    ice (~211°, near-neutral) — the hair tips,
                         between mist and starlight
Whisper   comment        star-mist (~249°, low Cz) — the Milky Way
                         haze between the lines
          commentDoc     the same mist, one register brighter —
                         faint constellation lines
Signal    error          seats at C, renders at the site's own
                         crimson (#D6004F, measured ~23°); the C#
                         coral (deprecated) is dimmed, not vivid —
                         depth and duty carry the gap, gate-asserted
```

Comments deliberately do not speak the tonic: in this painting the
hair is a *voice*, and the haze is the sky's own light — soft,
everywhere, not code. Operators stay uncolored so the one-spark rule
(Principle 3) holds at the character scale: no warm dust sprinkled
between glyphs.

**Gate rulings (implementation).** Where a nominal seat could not
meet the measured floors, the seat moved — anchors kept, no sampled
hue rotated:

- *Parameter → D (warm sand).* The Lc ≥ 75 shelf clips every cool
  hue toward one pale island — type, variable and operator leave no
  room for a fourth near-starlight blue.
- *Interface → F (spring green).* The violet band holds a pale
  ladder (type, typeParameter, struct) plus one vivid family (class,
  enum); no third register survives.
- *Decorator/macro → pale amber (~76°).* Same shelf arithmetic.
- *Tonic renders ~195°* (syntax only) — within the hair's sampled
  span; the action cyan stays at the site's 204°.
- *Status:* error sits above warning in lightness — depth carries
  the deutan gap, as designed.

### Brackets

Six levels, alternating along the river and its sparks, tonic first
— the current opens the phrase:

```
Level   Note   Hz     Source
═══════════════════════════════════════════
  1     G      210°   ★ tonic — the current
  2     A#     300°   constellation mauve
  3     D#      90°   star gold
  4     G#     240°   iris cerulean
  5     B      330°   candy pink
  6     F      150°   spring green
```

Adjacent levels sit ≥ 60° apart (including the 6→1 wrap at 60°);
warm glints (gold, pink) are interleaved between cool voices so
depth never reads as a smooth gradient. As implemented the levels
carry a deep/bright lightness weave — under dichromacy the Jz
stagger is what survives, not the hue — and every adjacent pair
holds ΔEz ≥ 12 under Brettel, gate-asserted.

---

## 5. Backgrounds

### Tiers

The painting carries its own elevation model: the sky is darkest at
the zenith and brightens toward the horizon — the aurora glow sits
nearest the viewer's ground. On screen, elevation follows the same
optics: the deeper you look, the darker; the nearer a surface floats
to you, the lighter.

```
Tier    Scene                            Intent
═══════════════════════════════════════════════════════════════════
Void    The zenith (site page night)     Behind everything; empty
                                         editor groups, title bar
Stage   The deep sky (painted 257°,      Editor, terminal
        site working depth)
House   The water-mirror floor           Sidebar, panels, tab strip
        (#153163, one step lit)
Float   Tulle over the night             Menus, hovers, palette,
        (#142876/#314D93 family)         notifications
Edge    The denim (amp #285CA5 /         Activity bar, status bar,
        thigh-high #33518D family,       sidebar section headers
        deepened to duty)                (the galaxy hem band)
```

Every tier keeps the sky's hue discipline (~250–263°); tiers are
separated by depth and material, not by hue — one night, five
distances into it. The Edge is the exception in chroma, not hue:
denim is cloth, allowed its higher Cz because it is worn in narrow
strips, never as walls.

### Nesting

Inputs drop to Stage inside House containers — a cut through the
floor back into the sky. The active tab drops to Stage and merges
with the editor: a window opened into the night. Inactive tabs
recede into House. Floating widgets take Float with star-mist seams
and hardware borders; their shadows are Void at opacity — night
casting night, never a grey smudge.

---

## 6. Foreground

Text is starlight with the horizon's lavender cast: the sock and
pale-horizon whites (#DCDDEF, #D4D6F7 — hz ~273°, Cz ≤ 0.03) set the
body-text family, with the site's #FDFDFD as the ceiling for
emphasis. The muted ladder descends through the Milky Way's own
mists (#9EBCDC → deeper) — muted, subtle, ghost and disabled are all
fainter *light*, never grey ash: even silence is blue. Placeholder
and disabled registers sit at the mist's floor, still clearly on the
sky's arc. The Edge denim is the demanding surface — a chromatic
mid-blue strip whose labels must commit — so status-bar text runs
one register brighter than its House equivalent, and the gates hold
it there.

---

## 7. The UI

### Four Voices

```
Voice       Source                    Hz     Mechanism      Role
═══════════════════════════════════════════════════════════════════
Structure   Silver hardware           ~255–267°  Solid border   Where am I?
            (garter, clasp, chains)
Engagement  Star-mist ripple          ~249°  Opacity tint   Hover, active
            (the floor answers)                              (transient)
Selection   Denim veil (the jacket)   ~255°  Opacity tint   Selected, cursor
                                                             line (persistent)
Identity    First Star (earring)      ~321°  Solid border   Focus, keyboard
                                                             target
```

Panel seams are the Milky Way — star-mist at low opacity, a luminous
divider exactly as the official site draws its own sections. Control
borders are the costume's silverwork: periwinkle-silver, metal
against the cloth. The three tint voices separate by material, not
temperature — mist is airy (low chroma, lifted), denim is cloth
(chromatic cobalt), and the First Star is the only warm thing that
can ever surround a control.

**The jacket over the sky.** Selection lays the denim veil over the
Stage — the one cloth the painting drapes over everything else.
Under it, syntax starlight stays legible: the veil's opacity is
tuned at the gates so every ensemble ink clears the compound floor.

**The shooting star.** The cursor is pink — the single moving point
of warmth on screen, trailing attention the way the KV's one meteor
crosses its sky. Nothing ambient competes with it, by construction
(Principle 3).

### Accent Hierarchy

Two clean groups. **The First Star (pink, ~321°)** holds pure
attention: cursor, focus rings, badges, the current find match —
"look here." **The Current (cyan, ~204°)** answers action, exactly
as the official site does: links, primary buttons (deepening toward
#00C3C3 on hover/press, night text on cyan), checked states,
progress, and the remote chip — her voice marking the live session,
one cool solid on the denim status bar. Debug wears star gold on the
status bar: warm caution while instruments are live, never
confusable with the remote's cyan or the error crimson.

### Materials

**Night air** — the sky: Stage and Void, matte, absolute; nothing
textures the editor. **Mirror water** — the floor: House chrome;
rows are transparent at rest, ripple with star-mist on hover, take
the denim veil selected, and the First Star only as a focus border.
**Denim** — worn cloth: the Edge strips, selection, and secondary
buttons (denim fill, starlight text, hardware border); primary
buttons are stage light — the action cyan as a solid. **Tulle** —
sheer veils: Float surfaces over the night, galaxy-band headers,
shadows of pure Void. **Starlight** — the points and seams: text,
icons, star-mist hairlines, whitespace dots, indentation's tanzaku.

### Overlays

```
Overlay                  Voice                     Intent
═══════════════════════════════════════════════════════════════════
Cursor line              Denim cobalt              whisper veil — the
                                                   selection cloth at rest
Selection                Denim cobalt              strong veil
Word highlight           Tonic teal                medium tint
Find, current match      First Star pink           strong veil — the
                                                   star you wished for
Find, other matches      Pink mist                 faint veil
Bracket match            Aurora lavender           medium tint
Diff inserted            Bamboo green              line light, text stronger
Diff removed             Crimson rose              line light, text stronger
Hover link               The Current cyan          underline/tint
```

Find is attention, so it belongs to the First Star, not to gold —
gold is the strings' text voice, and a gold wash under a gold string
would erase itself. The current match is the meteor landing; other
matches are its afterglow. Both are tuned at the gates so starlight
syntax clears the compound floor through the veil.

### Status & Git

```
Status   Error    crimson (site #D6004F, renders ~23° on the C
                  seat) — the identity's own alarm, deepened for
                  starlight text
         Warning  star gold 90° — the glint that asks for attention
         Info     the current, cyan ~204–240° — her voice, calm
         Success  bamboo 120° — the branch the wishes hang on

Git      added bamboo 120 · modified star gold 90 · deleted crimson
         (C seat, renders ~23°) · untracked mint 180
         · renamed periwinkle ~261 (site #708FFF)
         · conflicting candy magenta 330 · ignored — disabled mist
```

The signal palette is the site's own alert set plus the festival
green — none of it appears in ambient chrome (Principle 3's
corollary: signals stay signals). CVD geometry as project standard:
protan gap added↔modified, tritan gap modified↔deleted, deutan gap
error↔warning, all asserted ≥ ΔEz 12 under Brettel at the gates;
gutter and minimap marks keep a lighter chromatic register for
non-text duty.

---

## 8. Extras

**Terminal.** Stage background — the terminal is the same night sky.
ANSI: black = the floor navy, red = the site's coral (#FF7E7E
family, deepened to duty), green = bamboo, yellow = star gold
(#FFF078 tempered), blue = the site's own periwinkle (#708FFF),
magenta = candy pink, cyan = the river teal (#17DDDD family), white
= starlight. Brights flare one register up — stars do. Exact values
are the implementation's problem and SCORE's record.

**Minimap & scrollbars.** The galaxy at arm's length: the code seen
from far enough away that it becomes a band of light. Slider,
section marks and every scrollbar ride star-mist — a drift of haze,
denser while held; no solid bars on the night.

**Indent guides.** Tanzaku — vertical paper strips hanging through
the code, in the festival's five traditional colors (五色の短冊)
plus the denim, at whisper opacity; the active guide is the strip
the wind just touched, one register brighter:

```
Guide   Hz      Source
═══════════════════════════════════════════
  1     ~204°   blue-green — the hair current
  2     ~345°   red — the site's pink, muted
  3      ~90°   yellow — star gold
  4       —     white — starlight, faint
  5     ~300°   purple — constellation mauve
  6     ~255°   denim — the sixth strip is cloth
```

**Symbol icons, support tokens, debug, markdown.** Follow the score
seats with per-icon registers derived on the night ground; same-hue
icon pairs keep the ΔEz ≥ 12 discipline. Debug expression tokens run
one register brighter than editor syntax — the watch view lives on
the House floor. Markdown headings take spring green (F 150°),
links the Current, code spans the mist on a Stage inlay.

**Whitespace & rulers.** Rendered whitespace is star-dust — mist
dots at the threshold of visibility. Rulers are star-mist seams, the
Milky Way marking the column where the sky folds.
