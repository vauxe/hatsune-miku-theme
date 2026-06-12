# The Score — Dark (Hatsune Miku)

> GENERATED — do not edit. Regenerate with `npm run docs:gen`.
> Columns: design JzCzhz → rendered hex, rendered hue, APCA Lc on the
> token's home background, perceived loudness L** (Fairchild–Pirrotta).
> Intent and rationale live in docs/DESIGN.md.

### The Ensemble

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
keyword            0.185 0.060  180   #66F3D3   180   83.9  90.1
variable           0.185 0.075  210   #27F1FC   210   83.1  89.8
parameter          0.203 0.060   20   #FFBECD    11   75.8  84.9
property           0.203 0.060   20   #FFBECD    11   75.8  84.9
function           0.189 0.060   60   #FFC39B    62   75.9  84.8
method             0.189 0.060   60   #FFC39B    62   75.9  84.8
tag                0.189 0.045   60   #FAC8AA    60   77.5  85.4
attribute          0.203 0.060   20   #FFBECD    11   75.8  84.9
class              0.185 0.075   90   #E9D27B    90   77.8  86.0
struct             0.185 0.060   90   #E4D28E    90   77.5  85.5
enum               0.185 0.075   90   #E9D27B    90   77.8  86.0
interface          0.185 0.060  150   #8DF0B1   150   83.3  89.7
string             0.185 0.060  120   #BCE498   120   80.9  88.0
regex              0.185 0.075  120   #B7E888   120   81.9  88.9
constant           0.189 0.060  240   #96E0FF   232   79.7  87.4
number             0.189 0.045  240   #A8DEFF   239   80.3  87.6
boolean            0.189 0.045  240   #A8DEFF   239   80.3  87.6
enumMember         0.189 0.060  240   #96E0FF   232   79.7  87.4
type               0.193 0.060  270   #C9D0FF   269   77.7  86.3
typeParameter      0.193 0.045  270   #CDD3FF   270   79.4  87.1
macro              0.197 0.060  300   #F5C1FF   311   77.7  87.1
operator           0.199 0.060  330   #FFB7FF   318   75.7  86.7
```

### Departures

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
comment            0.163 0.030  180   #8DC6B6   180   63.7  77.9
commentDoc         0.155 0.030  180   #85BCAD   180   58.3  74.6
punctuation        0.170 0.045  180   #7AD7C0   181   70.5  82.6
variableLanguage   0.185 0.060  180   #66F3D3   180   83.9  90.1
```

### Signals

Status hues are CVD-tuned.

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
status.error       0.180 0.080  330   #FF8FEF   327   61.7  81.7
status.warning     0.185 0.075   85   #F0CD7B    85   76.7  85.4
status.info        0.195 0.040  260   #C7DCFF   257   82.7  88.5
status.success     0.190 0.065  170   #68FCCD   170   88.3  92.3
errorForeground    0.185 0.075    0   #FF97CD   350   62.3  79.9
```

### Git

Lc measured on House (the explorer background).

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
added              0.190 0.065  150   #8AF9B4   150   86.3  92.0
modified           0.186 0.075   85   #F1CF7C    85   76.3  85.9
deleted            0.178 0.080  320   #FA91F9   320   60.5  82.2
untracked          0.180 0.045  210   #87DEE3   210   74.8  85.5
conflicting        0.165 0.070    0   #F985B5   360   53.4  76.1
renamed            0.170 0.055  265   #A9B8F5   265   62.1  79.7
stageModified      0.165 0.025   85   #C2B89E    85   61.0  75.8
stageDeleted       0.170 0.025  320   #CFB0CD   320   61.5  77.5
submodule          0.177 0.011  246   #BEC8D1   246   69.1  80.7
```

### Terminal

Each normal/bright pair is asserted ΔEz ≥ 6 (the emphasis axis CLI tools rely on).

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
black              0.140 0.015  249   #909BA7   250   45.6  64.9
red                0.180 0.075    0   #FF91C7   352   60.2  79.0
green              0.180 0.090  150   #4AF79B   150   83.0  90.5
yellow             0.215 0.045   60   #FFE8C7    77   93.0  93.4
blue               0.170 0.060  270   #AEB4FA   270   62.8  79.8
magenta            0.200 0.045  330   #FFC4FA   322   80.2  88.1
cyan               0.200 0.060  180   #76FFE6   185   91.6  93.6
white              0.182 0.030   20   #EFBAC0    20   71.0  81.9
brightBlack        0.155 0.015  210   #9AB2B3   210   56.2  72.0
brightRed          0.192 0.090    0   #FF8FD5   342   60.3  79.8
brightGreen        0.200 0.090  150   #62FFB1   154   88.7  92.7
brightYellow       0.215 0.060   60   #FFE2B7    77   89.7  91.8
brightBlue         0.170 0.075  270   #AAB0FF   270   61.1  79.6
brightMagenta      0.215 0.045  330   #FFD6FF   318   87.7  91.3
brightCyan         0.215 0.075  180   #4BFFF9   200   90.8  93.3
brightWhite        0.185 0.045  210   #8CE5EA   210   80.2  87.6
```

### Brackets

Adjacent pairs are asserted ΔEz ≥ 12 under Brettel protan/deutan/tritan.

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
bracket1           0.185 0.060   20   #FFA9B8    17   67.3  80.9
bracket2           0.185 0.060  270   #BFC6FF   270   72.3  84.0
bracket3           0.185 0.060   90   #E4D28E    90   77.5  85.5
bracket4           0.185 0.060  180   #66F3D3   180   83.9  90.1
bracket5           0.185 0.060  330   #FFA7ED   329   69.1  83.7
bracket6           0.185 0.060  120   #BCE498   120   80.9  88.0
```

### Symbol Icons

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
property           0.215 0.090   20   #FFB1CF   359   71.0  83.1
field              0.155 0.060   20   #E58796    20   50.4  71.7
function           0.215 0.090   60   #FFD596    78   83.1  88.6
method             0.170 0.045   60   #E1B195    59   63.8  77.6
constructor        0.170 0.090   60   #FFA068    60   61.9  78.5
class              0.200 0.075   90   #FDE48B    90   89.1  91.8
struct             0.170 0.090   90   #DABE57    90   66.6  80.2
enum               0.140 0.075   90   #AF9A4C    90   46.4  67.4
package            0.095 0.060   90   #74662F    90   21.4  47.5
string             0.185 0.075  120   #B7E888   120   81.9  88.9
reference          0.215 0.060  120   #E0FFB9   116   99.1  96.8
interface          0.215 0.060  150   #AEFFD4   158   94.8  94.8
folder             0.185 0.090  180   #00FFD4   178   88.3  92.4
array              0.140 0.060  180   #2EB79C   180   51.3  72.8
variable           0.185 0.090  210   #00F6FF   209   85.6  91.0
constant           0.170 0.060  240   #82C8F4   240   66.7  81.0
number             0.185 0.090  240   #64DDFF   226   75.2  85.7
boolean            0.215 0.060  240   #B3FFFF   205   97.2  95.8
enumMember         0.140 0.075  240   #4CA3D7   240   46.5  70.3
typeParameter      0.185 0.060  270   #BFC6FF   270   72.3  84.0
module             0.215 0.060  270   #E4EBFF   264   93.0  93.4
namespace          0.170 0.060  270   #AEB4FA   270   62.8  79.8
operator           0.215 0.060  330   #FFC9FF   318   82.5  89.2
snippet            0.185 0.045  330   #F5B2E6   330   70.8  83.5
```

### Support (built-ins)

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
function           0.195 0.075   60   #FFC492    67   76.1  85.0
class              0.185 0.075   90   #E9D27B    90   77.8  86.0
type               0.193 0.060  270   #C9D0FF   269   77.7  86.3
constant           0.189 0.060  240   #96E0FF   232   79.7  87.4
variable           0.185 0.060  210   #69EBF3   210   81.5  88.7
```

### Markdown

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
heading            0.195 0.075   60   #FFC492    67   76.1  85.0
headingPunct       0.195 0.060   60   #FFCAA1    65   78.9  86.3
codeBlock          0.185 0.075  210   #27F1FC   210   83.1  89.8
quote              0.185 0.060  210   #69EBF3   210   81.5  88.7
linkUrl            0.193 0.060  270   #C9D0FF   269   77.7  86.3
inserted           0.185 0.060  120   #BCE498   120   80.9  88.0
deleted            0.185 0.075    0   #FF97CD   350   62.3  79.9
alertImportant     0.197 0.075  300   #FBB7FF   316   75.0  86.3
alertNote          0.185 0.075  210   #27F1FC   210   83.1  89.8
alertTip           0.185 0.075  150   #73F7A9   150   85.0  91.0
alertWarning       0.195 0.075   60   #FFC492    67   76.1  85.0
alertCaution       0.185 0.075    0   #FF97CD   350   62.3  79.9
```

### Debug

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
name               0.185 0.060  330   #FFA7ED   329   69.1  83.7
value              0.185 0.075   90   #E9D27B    90   77.8  86.0
string             0.185 0.060  120   #BCE498   120   80.9  88.0
number             0.185 0.075  240   #7DDCFF   230   76.1  85.9
boolean            0.185 0.060  240   #92DBFF   235   77.1  86.2
error              0.185 0.075    0   #FF97CD   350   62.3  79.9
type               0.185 0.060  270   #BFC6FF   270   72.3  84.0
```

### Text Tiers

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
foreground         0.203 0.011  248   #DEE8F2   248   90.2  91.8
foregroundMuted    0.185 0.015  210   #BDD7D9   212   77.4  84.8
foregroundSubtle   0.140 0.015  210   #89A0A1   210   46.6  65.6
tertiary           0.140 0.015  210   #89A0A1   210   46.6  65.6
disabled           0.140 0.015  210   #89A0A1   210   46.6  65.6
ghostText          0.155 0.025  180   #8CB9AC   180   57.5  73.8
placeholder        0.140 0.020  210   #82A2A3   209   46.9  66.2
whitespace         0.140 0.015  210   #89A0A1   210   46.6  65.6
ruler              0.140 0.015  210   #89A0A1   210   46.6  65.6
```

### Accents & Cursor

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
accentPrimary      0.153 0.060  196   #39C5BB   196   59.1  77.1
accentSecondary    0.182 0.037  200   #95DFDB   201   77.3  85.8
cursor             0.192 0.093  358   #FF8CD9   339   59.7  79.8
link               0.167 0.037  200   #84CCC8   200   66.4  79.8
linkActive         0.173 0.030  187   #98D2C6   187   70.6  81.8
```

### Backgrounds

```
tier               Jz    Cz     hz    hex
════════════════════════════════════════════════
void               0.023 0.004  249   #141618
stage              0.031 0.009  249   #1A1F24
house              0.039 0.009  249   #23282D
float              0.046 0.009  249   #2A3035
```

### Overlay Tints (composited on Stage)

Alpha compositing is nonlinear in sRGB; identity comes from voice and
channel, visibility from the measured ΔEz below.

```
voice                 alpha     blended   ΔEz vs Stage
════════════════════════════════════════════════════════
engagement (teal)      8% (light ) #1D2D30    6.4
engagement (teal)     15% (medium) #1E373A   11.1
engagement (teal)     25% (strong) #22494A   18.9
engagement (teal)     38% (heavy ) #265D5D   27.3
selection (frost)      8% (light ) #222E36    7.3
selection (frost)     15% (medium) #293943   12.5
selection (frost)     25% (strong) #344C5A   21.4
find (orange)         25% (strong) #3C321B   22.1
diff added (negi)     15% (medium) #2A3F39   14.3
diff removed (rose)   15% (medium) #3B2E38   12.2
```
