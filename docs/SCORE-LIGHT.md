# The Score — Light (Snow Miku 2026)

> GENERATED — do not edit. Regenerate with `npm run docs:gen`.
> Columns: design JzCzhz → rendered hex, rendered hue, APCA Lc on the
> token's home background.
> Intent and rationale live in docs/DESIGN-LIGHT.md.

### The Ensemble

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
keyword            0.079 0.120  210   #007284   222   68.7
variable           0.100 0.120  270   #5849CB   270   72.9
parameter          0.100 0.120   60   #AA4200    55   70.3
property           0.100 0.120   60   #AA4200    55   70.3
function           0.100 0.120   90   #896700    84   67.0
method             0.100 0.120   90   #896700    84   67.0
tag                0.100 0.120   90   #896700    84   67.0
attribute          0.100 0.120   60   #AA4200    55   70.3
class              0.079 0.120  120   #346900   125   73.6
struct             0.079 0.120  120   #346900   125   73.6
enum               0.079 0.120  120   #346900   125   73.6
interface          0.079 0.120  180   #007D57   162   66.1
string             0.079 0.120  150   #00791B   136   68.4
regex              0.079 0.120  150   #00791B   136   68.4
constant           0.079 0.120  240   #0058A3   250   75.4
number             0.079 0.120  240   #0058A3   250   75.4
boolean            0.079 0.120  240   #0058A3   250   75.4
enumMember         0.079 0.120  240   #0058A3   250   75.4
type               0.100 0.120  300   #8B12BA   300   74.5
typeParameter      0.100 0.060  300   #7B5393   300   71.0
macro              0.100 0.120  330   #A90095   330   71.9
operator           0.100 0.120    0   #B80067     3   70.8
```

### Departures

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
comment            0.120 0.035  210   #578F92   210   55.2
commentDoc         0.107 0.035  210   #498083   210   62.1
punctuation        0.107 0.060  210   #00878E   211   60.5
variableLanguage   0.079 0.120  210   #007284   222   68.7
```

### Signals

Status hues are CVD-tuned.

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
status.error       0.098 0.140   30   #BF0028    35   70.5
status.warning     0.105 0.140   70   #B04C00    58   67.4
status.info        0.095 0.110  210   #008595   219   60.9
status.success     0.090 0.115  180   #008A63   164   60.7
errorForeground    0.100 0.150   30   #C70025    37   68.7
```

### Git

Lc measured on House (the explorer background).

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
added              0.076 0.120  180   #007954   162   62.1
modified           0.095 0.120   70   #9B4900    61   66.2
deleted            0.085 0.120  300   #7900A4   299   73.8
untracked          0.088 0.110  210   #007C8C   219   59.1
conflicting        0.088 0.120    0   #A6005A     4   69.5
renamed            0.080 0.100  270   #443D9E   270   75.0
stageModified      0.078 0.065  210   #00656C   213   68.6
stageDeleted       0.072 0.080  235   #00557C   241   73.0
submodule          0.080 0.060  235   #0F5D7A   235   70.6
```

### Terminal

Each normal/bright pair is asserted ΔEz ≥ 6 (the emphasis axis CLI tools rely on).

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
black              0.143 0.014   40   #AB9894    42   44.2
red                0.100 0.130    0   #BD0067     5   69.7
green              0.096 0.120  120   #467E00   123   65.1
yellow             0.081 0.120   60   #8F2B00    50   78.9
blue               0.081 0.110  240   #005B9F   249   74.7
magenta            0.087 0.120  300   #7B00A7   299   78.8
cyan               0.089 0.110  210   #007D8D   219   64.3
white              0.098 0.030   95   #6E6B50    95   68.1
brightBlack        0.098 0.014   40   #746461    41   69.2
brightRed          0.081 0.130    0   #9F0051     8   76.8
brightGreen        0.090 0.120  120   #407700   123   68.0
brightYellow       0.077 0.120   60   #8A2500    49   80.5
brightBlue         0.071 0.110  240   #004F91   250   79.2
brightMagenta      0.077 0.120  300   #6F0099   299   81.8
brightCyan         0.077 0.110  210   #006E7E   221   70.3
brightWhite        0.056 0.020   40   #483430    42   87.8
```

### Brackets

Adjacent pairs are asserted ΔEz ≥ 12 under Brettel protan/deutan/tritan.

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
bracket1           0.079 0.120   60   #8D2800    49   79.6
bracket2           0.079 0.120  300   #71009C   298   81.2
bracket3           0.079 0.120   90   #704E00    80   77.2
bracket4           0.079 0.120  210   #007284   222   68.7
bracket5           0.079 0.120    0   #980050     6   78.3
bracket6           0.079 0.120  270   #432EAB   270   82.3
```

### Symbol Icons

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
property           0.079 0.165   60   #9D0000    42   78.1
field              0.130 0.120   60   #D5640D    60   55.1
function           0.079 0.165   90   #7A4700    70   77.5
method             0.107 0.120   90   #926F00    85   63.4
constructor        0.140 0.150   90   #C59300    84   44.5
class              0.079 0.150  120   #2B6C00   127   72.8
struct             0.107 0.165  120   #449200   126   57.4
enum               0.140 0.150  120   #6BBC00   123   37.7
package            0.140 0.150  120   #6BBC00   123   37.7
string             0.100 0.150  150   #009D1A   134   53.9
reference          0.079 0.120  150   #00791B   136   68.4
interface          0.079 0.120  180   #007D57   162   66.1
folder             0.100 0.165  210   #0096B5   227   52.9
array              0.100 0.120  210   #008DA0   220   57.4
variable           0.100 0.165  270   #5900F1   270   75.4
constant           0.107 0.150  240   #0076E3   251   61.3
number             0.093 0.165  240   #0061D9   254   68.5
boolean            0.140 0.120  240   #00A3FD   244   43.4
enumMember         0.140 0.150  240   #00A0FF   245   44.4
typeParameter      0.100 0.120  300   #8B12BA   300   74.5
module             0.079 0.150  300   #7900AE   296   78.6
namespace          0.130 0.120  300   #B242E6   300   60.4
operator           0.079 0.120    0   #980050     6   78.3
snippet            0.106 0.120    0   #C1006E     2   68.6
```

### Support (built-ins)

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
function           0.079 0.150   90   #764A00    74   77.4
class              0.079 0.150  120   #2B6C00   127   72.8
type               0.079 0.120  300   #71009C   298   81.2
constant           0.079 0.120  240   #0058A3   250   75.4
variable           0.079 0.120  270   #432EAB   270   82.3
```

### Markdown

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
heading            0.079 0.150   90   #764A00    74   77.4
headingPunct       0.079 0.120   90   #704E00    80   77.2
codeBlock          0.079 0.150  235   #005AB3   252   73.6
quote              0.079 0.120  235   #005D9F   248   74.1
linkUrl            0.079 0.120  300   #71009C   298   81.2
inserted           0.079 0.120  150   #00791B   136   68.4
deleted            0.079 0.150    0   #A4004F    11   75.8
alertImportant     0.079 0.150  330   #950083   330   76.8
alertNote          0.079 0.150  235   #005AB3   252   73.6
alertTip           0.079 0.150  150   #008100   133   65.4
alertWarning       0.079 0.150   90   #764A00    74   77.4
alertCaution       0.079 0.150    0   #A4004F    11   75.8
```

### Debug

Lc measured on House — light debug tokens are tuned for the sidebar.

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
name               0.079 0.120    0   #980050     6   72.6
value              0.079 0.150  120   #2B6C00   127   67.2
string             0.073 0.120  150   #007212   135   65.5
number             0.079 0.150  240   #0052B8   254   69.8
boolean            0.079 0.120  240   #0058A3   250   69.8
error              0.079 0.150    0   #A4004F    11   70.2
type               0.079 0.120  300   #71009C   298   75.6
```

### Text Tiers

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
foreground         0.075 0.065   48   #753826    48   81.2
foregroundMuted    0.098 0.006  235   #646A6D   235   68.6
foregroundSubtle   0.130 0.003  235   #8B8E90   240   51.5
tertiary           0.108 0.008   40   #7B7170    35   64.0
disabled           0.133 0.005   40   #968F8E    38   50.0
ghostText          0.135 0.003  235   #919496   240   48.5
placeholder        0.133 0.006   40   #978F8D    44   50.0
whitespace         0.135 0.003  235   #919496   240   48.5
ruler              0.135 0.003  235   #919496   240   48.5
```

### Accents & Cursor

```
token              Jz    Cz     hz    rendered  hz~   Lc
════════════════════════════════════════════════════════
accentPrimary      0.128 0.045  211   #4E9CA1   211   50.0
accentSecondary    0.092 0.056  219   #00717F   219   69.2
cursor             0.155 0.065   20   #E88493    21   41.2
link               0.076 0.090  215   #006679   225   73.3
linkActive         0.068 0.090  215   #005C6F   226   77.1
```

### Backgrounds

```
tier               Jz    Cz     hz    hex
════════════════════════════════════════════════
void               0.218 0.008   85   #FEFAF0
stage              0.210 0.012   86   #F5F0E2
house              0.202 0.016  234   #D5EAF4
float              0.194 0.020  235   #C7E1EE
```

### Overlay Tints (composited on Stage)

Alpha compositing is nonlinear in sRGB; identity comes from voice and
channel, visibility from the measured ΔEz below.

```
voice                 alpha     blended   ΔEz vs Stage
════════════════════════════════════════════════════════
engagement (tonic)     8% (light ) #E8E9DD    3.9
engagement (tonic)    15% (medium) #DCE3D8    7.4
selection (ice)        8% (light ) #E6E9DF    4.6
selection (ice)       15% (medium) #D9E3DD    8.7
selection (ice)       25% (strong) #C7DADA   14.5
find (gingerbread)    25% (strong) #E6D2B5   14.0
```
