# The Score — Light (Snow Miku 2024)

> GENERATED — do not edit. Regenerate with `npm run docs:gen`.
> Columns: design JzCzhz → rendered hex, rendered hue, APCA Lc on the
> token's home background, perceived loudness L** (Fairchild–Pirrotta).
> Intent and rationale live in docs/DESIGN-SNOW-2024.md.

### The Ensemble

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
keyword            0.068 0.120  180   #006F4B   160   71.3  49.7
variable           0.082 0.120  270   #4632B0   270   80.7  57.3
parameter          0.094 0.120   60   #A23B00    54   72.7  51.4
property           0.094 0.120   60   #A23B00    54   72.7  51.4
function           0.094 0.120   90   #826000    83   69.6  49.6
method             0.094 0.120   90   #826000    83   69.6  49.6
tag                0.094 0.120   90   #826000    83   69.6  49.6
attribute          0.094 0.120   60   #A23B00    54   72.7  51.4
class              0.076 0.120  120   #326600   125   74.5  48.6
struct             0.076 0.120  120   #326600   125   74.5  48.6
enum               0.076 0.120  120   #326600   125   74.5  48.6
interface          0.076 0.120  210   #006F81   223   69.6  49.9
string             0.069 0.120  150   #006C0A   134   73.1  51.5
regex              0.076 0.120  150   #007617   135   69.3  54.8
constant           0.076 0.120  240   #00559F   251   76.2  51.0
number             0.076 0.120  240   #00559F   251   76.2  51.0
boolean            0.076 0.120  240   #00559F   251   76.2  51.0
enumMember         0.076 0.120  240   #00559F   251   76.2  51.0
type               0.094 0.120  300   #8400B1   300   76.3  62.5
typeParameter      0.094 0.060  300   #744C8B   300   73.6  51.1
macro              0.094 0.120  330   #A0008D   330   73.8  58.3
operator           0.094 0.120    0   #AF0060     4   72.7  54.8
```

### Departures

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
comment            0.120 0.035  180   #569383   179   53.9  60.8
commentDoc         0.107 0.035  180   #488374   180   61.2  55.2
punctuation        0.103 0.060  180   #008870   178   60.9  58.0
variableLanguage   0.068 0.120  180   #006F4B   160   71.3  49.7
```

### Signals

Status hues are CVD-tuned.

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
status.error       0.037 0.135   42   #5D0000    40   90.2  30.5
status.warning     0.071 0.055   90   #574B1A    90   80.5  36.6
status.info        0.091 0.110  180   #008A64   165   60.4  59.0
status.success     0.090 0.115  150   #00872C   138   62.5  60.0
errorForeground    0.094 0.150   42   #B90000    42   71.7  55.4
```

### Git

Lc measured on House (the explorer background).

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
added              0.024 0.130  150   #003300   134   81.7  27.4
modified           0.070 0.085   90   #5D4800    86   71.0  37.8
deleted            0.050 0.120  300   #4F0074   296   78.9  45.5
untracked          0.055 0.085  180   #00553B   164   71.0  39.6
conflicting        0.058 0.110    0   #750039     9   75.6  39.0
renamed            0.072 0.095  270   #3D368F   270   73.7  48.4
stageModified      0.062 0.055  180   #005542   173   70.8  39.3
stageDeleted       0.061 0.070  210   #00525A   216   71.1  38.0
submodule          0.064 0.055  210   #005258   213   71.2  37.9
```

### Terminal

Each normal/bright pair is asserted ΔEz ≥ 6 (the emphasis axis CLI tools rely on).

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
black              0.143 0.014   45   #AA9893    46   44.1  65.2
red                0.094 0.130    0   #B30060     5   71.8  55.5
green              0.096 0.120  120   #467E00   123   64.8  57.3
yellow             0.076 0.120   90   #6C4B00    80   78.2  41.3
blue               0.079 0.110  240   #00589C   249   75.6  50.5
magenta            0.105 0.120  300   #921EC2   300   71.9  65.8
cyan               0.086 0.110  190   #00826F   183   63.2  55.9
white              0.108 0.045   92   #7E764C    92   62.7  52.3
brightBlack        0.092 0.014   45   #6D5E5A    45   71.7  42.6
brightRed          0.079 0.130    0   #9C004F     8   77.2  49.6
brightGreen        0.090 0.120  120   #407700   123   67.7  54.8
brightYellow       0.074 0.120   90   #6A4900    79   78.9  40.5
brightBlue         0.069 0.110  240   #004C8E   251   79.9  46.6
brightMagenta      0.074 0.120  300   #6C0095   299   82.2  55.2
brightCyan         0.074 0.110  190   #007360   180   69.3  50.6
brightWhite        0.056 0.020   45   #47342F    45   87.6  26.2
```

### Brackets

Adjacent pairs are asserted ΔEz ≥ 12 under Brettel protan/deutan/tritan.

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
bracket1           0.076 0.120   60   #892500    49   80.4  44.1
bracket2           0.076 0.120  300   #6E0098   298   81.7  56.0
bracket3           0.089 0.120   90   #7C5B00    83   71.8  47.5
bracket4           0.076 0.120  180   #007A54   161   67.0  53.6
bracket5           0.066 0.120    0   #840041     9   82.3  43.2
bracket6           0.076 0.120  270   #402AA8   270   83.0  55.7
```

### Symbol Icons

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
property           0.076 0.165   60   #990000    42   78.7  47.7
field              0.130 0.120   60   #D5640D    60   54.8  65.1
function           0.076 0.165   90   #774400    69   78.3  42.4
method             0.107 0.120   90   #926F00    85   63.1  55.3
constructor        0.140 0.150   90   #C59300    84   44.2  69.7
class              0.076 0.150  120   #286900   128   73.7  50.0
struct             0.107 0.165  120   #449200   126   57.1  64.2
enum               0.140 0.150  120   #6BBC00   123   37.4  76.8
package            0.140 0.150  120   #6BBC00   123   37.4  76.8
string             0.094 0.150  150   #009510   134   57.0  65.4
reference          0.076 0.120  150   #007617   135   69.3  54.8
interface          0.076 0.120  210   #006F81   223   69.6  49.9
folder             0.094 0.165  180   #009F6A   158   51.7  66.1
array              0.094 0.120  180   #009168   164   57.5  61.4
variable           0.094 0.165  270   #5400E7   270   76.8  71.9
constant           0.107 0.150  240   #0076E3   251   61.0  66.2
number             0.093 0.165  240   #0061D9   254   68.2  63.8
boolean            0.140 0.120  240   #00A3FD   244   43.1  74.1
enumMember         0.140 0.150  240   #00A0FF   245   44.1  74.0
typeParameter      0.094 0.120  300   #8400B1   300   76.3  62.5
module             0.076 0.150  300   #7600AA   296   79.1  60.3
namespace          0.130 0.120  300   #B242E6   300   60.1  72.7
operator           0.076 0.120    0   #95004D     7   78.6  47.9
snippet            0.100 0.120    0   #B80067     3   70.5  57.0
```

### Support (built-ins)

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
function           0.076 0.150   90   #734700    73   78.2  42.0
class              0.076 0.150  120   #286900   128   73.7  50.0
type               0.076 0.120  300   #6E0098   298   81.7  56.0
constant           0.076 0.120  240   #00559F   251   76.2  51.0
variable           0.076 0.120  270   #402AA8   270   83.0  55.7
```

### Markdown

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
heading            0.076 0.150   90   #734700    73   78.2  42.0
headingPunct       0.076 0.120   90   #6C4B00    80   78.2  41.3
codeBlock          0.076 0.150   58   #960000    42   79.3  46.9
quote              0.076 0.120   58   #8A2100    47   80.6  44.3
linkUrl            0.076 0.120  300   #6E0098   298   81.7  56.0
inserted           0.076 0.120  150   #007617   135   69.3  54.8
deleted            0.076 0.150    0   #A0004C    11   76.4  50.1
alertImportant     0.076 0.150  330   #920080   331   77.2  54.5
alertNote          0.076 0.150  240   #004FB4   254   76.3  55.8
alertTip           0.076 0.150  150   #007D00   133   66.6  57.8
alertWarning       0.076 0.150   90   #734700    73   78.2  42.0
alertCaution       0.076 0.150    0   #A0004C    11   76.4  50.1
```

### Debug

Lc measured on House — light debug tokens are tuned for the sidebar.

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
name               0.068 0.120    0   #880044     8   71.7  44.3
value              0.060 0.150  120   #165400   130   71.7  42.0
string             0.054 0.120  150   #005900   133   70.1  44.4
number             0.066 0.150  240   #0041A4   255   71.3  52.2
boolean            0.064 0.120  240   #00458E   253   72.1  46.4
error              0.063 0.150    0   #8B003D    14   71.3  44.4
type               0.072 0.120  300   #690092   298   73.2  54.4
```

### Text Tiers

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
foreground         0.056 0.042   41   #532B24    41   88.2  28.4
foregroundMuted    0.070 0.006   58   #4D4845    59   81.6  31.6
foregroundSubtle   0.130 0.003   58   #908D8B    62   51.2  59.0
tertiary           0.096 0.008   45   #6D6462    43   69.7  43.9
disabled           0.090 0.006   45   #645E5C    49   72.5  40.9
ghostText          0.135 0.003   58   #969391    62   48.2  61.3
placeholder        0.098 0.006   45   #6E6765    46   68.5  44.8
whitespace         0.135 0.003   58   #969391    62   48.2  61.3
ruler              0.135 0.003   58   #969391    62   48.2  61.3
```

### Accents & Cursor

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
accentPrimary      0.118 0.023  194   #658A85   194   56.3  57.4
accentSecondary    0.053 0.035  184   #004339   184   86.4  31.5
cursor             0.113 0.104   43   #BF4736    43   64.8  57.5
link               0.063 0.075  185   #005C49   175   78.0  42.0
linkActive         0.057 0.075  185   #005442   175   80.9  38.8
```

### Backgrounds

```
tier               Jz    Cz     hz    hex
════════════════════════════════════════════════
void               0.213 0.014   68   #FFF1E4
stage              0.210 0.018   70   #FEEDDC
house              0.198 0.021   64   #F1DBCB
float              0.189 0.023   61   #E8CFBF
```

### Overlay Tints (composited on Stage)

Alpha compositing is nonlinear in sRGB; identity comes from voice and
channel, visibility from the measured ΔEz below.

```
voice                 alpha     blended   ΔEz vs Stage
════════════════════════════════════════════════════════
engagement (sage)      8% (light ) #F1E5D5    4.0
engagement (sage)     15% (medium) #E8DFCF    6.8
selection (haori)      8% (light ) #FBE6D3    2.9
selection (haori)     15% (medium) #F9E0CD    5.1
selection (haori)     25% (strong) #F5D7C2    8.7
find (turmeric)       25% (strong) #E7D3AE   14.1
```
