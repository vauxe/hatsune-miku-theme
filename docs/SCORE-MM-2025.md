# The Score — Dark (Magical Mirai 2025)

> GENERATED — do not edit. Regenerate with `npm run docs:gen`.
> Columns: design JzCzhz → rendered hex, rendered hue, APCA Lc on the
> token's home background, perceived loudness L** (Fairchild–Pirrotta).
> Intent and rationale live in docs/DESIGN-MM-2025.md.

### The Ensemble

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
keyword            0.181 0.078  195   #00F3E4   195   82.4  89.7
variable           0.190 0.058  271   #C7CCFF   271   75.4  85.5
parameter          0.198 0.042   64   #FFD6B5    66   84.2  89.1
property           0.208 0.058   56   #FFD8B4    69   85.0  89.5
function           0.203 0.076  244   #99F0FF   219   87.3  91.3
method             0.203 0.076  244   #99F0FF   219   87.3  91.3
tag                0.207 0.046  237   #B9F7FF   216   93.5  94.1
attribute          0.208 0.058   56   #FFD8B4    69   85.0  89.5
class              0.196 0.058  316   #FFB9FF   318   76.1  86.9
struct             0.194 0.050  300   #EEC3FF   305   77.1  86.8
enum               0.196 0.055  312   #FEBDFF   318   77.4  87.4
interface          0.192 0.055  150   #9BF7BC   150   88.0  91.9
string             0.190 0.064   94   #E7DB8E    94   81.6  88.1
regex              0.186 0.075  120   #B8EA89   120   82.7  89.4
constant           0.199 0.058  330   #FFB8FF   318   75.7  86.8
number             0.204 0.058  333   #FFBDFF   318   77.6  87.4
boolean            0.204 0.058  333   #FFBDFF   318   77.6  87.4
enumMember         0.199 0.058  330   #FFB8FF   318   75.7  86.8
type               0.211 0.040  300   #FFDDFF   317   90.3  92.6
typeParameter      0.205 0.026  297   #F1DEFF   299   88.7  91.7
macro              0.202 0.050   76   #FFDFAE    78   87.8  91.0
operator           0.197 0.016  273   #DBDDF1   272   84.5  89.1
```

### Departures

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
comment            0.152 0.028  247   #94ABC1   248   53.1  71.2
commentDoc         0.163 0.030  245   #9DB9D1   246   60.4  75.9
punctuation        0.170 0.035  211   #8ECDD1   211   67.7  80.5
variableLanguage   0.181 0.078  195   #00F3E4   195   82.4  89.7
```

### Signals

Status hues are CVD-tuned.

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
status.error       0.194 0.080   24   #FFA5B5    17   65.5  80.3
status.warning     0.180 0.075   92   #E0CD76    92   73.9  84.1
status.info        0.184 0.055  240   #97D9FF   238   76.3  85.9
status.success     0.190 0.062  120   #C1EB9B   120   84.6  90.1
errorForeground    0.201 0.068   27   #FFB8BF    22   72.6  83.4
```

### Git

Lc measured on House (the explorer background).

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
added              0.196 0.060  120   #C9F3A4   120   85.8  92.5
modified           0.180 0.075   92   #E0CD76    92   70.1  84.1
deleted            0.194 0.080   23   #FFA4B7    15   61.4  80.2
untracked          0.178 0.048  183   #7BE3CC   183   72.6  86.1
conflicting        0.170 0.072  330   #F38CDE   330   53.5  78.9
renamed            0.176 0.085  261   #9CBDFF   258   60.7  80.8
stageModified      0.174 0.030   92   #CBC5A3    92   65.0  80.1
stageDeleted       0.176 0.032  330   #DFB1D4   330   61.9  79.8
submodule          0.178 0.020  262   #BEC7DC   261   66.6  81.3
```

### Terminal

Each normal/bright pair is asserted ΔEz ≥ 6 (the emphasis axis CLI tools rely on).

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
black              0.135 0.022  257   #8994A7   257   42.0  63.2
red                0.178 0.072   30   #FF9DA0    29   62.1  78.5
green              0.186 0.070  120   #BAE88E   120   82.0  89.0
yellow             0.216 0.048   92   #FFFBBE    97  101.2  97.8
blue               0.175 0.085  261   #9BBBFF   259   63.7  80.4
magenta            0.207 0.052  333   #FFC6FF   318   81.0  88.7
cyan               0.199 0.062  202   #6CFFFE   204   92.0  93.9
white              0.177 0.016  273   #C3C4D7   273   69.5  80.6
brightBlack        0.152 0.030  249   #93ABC3   248   53.1  71.3
brightRed          0.184 0.082   28   #FF9AA3    25   61.2  78.2
brightGreen        0.201 0.064  120   #CDFBA5   120   94.0  94.7
brightYellow       0.218 0.042   92   #FFFDC8    97  102.5  98.4
brightBlue         0.183 0.092  261   #A0C3FF   256   67.4  81.9
brightMagenta      0.214 0.044  333   #FFD5FF   318   87.0  91.1
brightCyan         0.210 0.062  204   #7AFFFF   204   92.8  94.2
brightWhite        0.203 0.012  273   #E4E5F4   273   89.4  91.6
```

### Brackets

Adjacent pairs are asserted ΔEz ≥ 12 under Brettel protan/deutan/tritan.

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
bracket1           0.166 0.074  204   #00DADA   204   69.5  83.3
bracket2           0.207 0.042  308   #FFD4FF   318   86.6  91.0
bracket3           0.172 0.068   88   #D8C076    88   67.3  80.1
bracket4           0.207 0.045  240   #BDF5FF   219   92.9  93.8
bracket5           0.174 0.060  325   #ED9BE3   325   61.1  79.9
bracket6           0.204 0.055  150   #A9FFCA   152   93.7  94.5
```

### Symbol Icons

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
property           0.200 0.095   45   #FFB194    52   68.6  81.4
field              0.148 0.050   70   #C19B74    71   49.7  68.9
function           0.170 0.098  240   #40CAFF   233   64.8  81.2
method             0.190 0.052  248   #ACDBFF   243   79.1  87.0
constructor        0.140 0.075  250   #639CDB   250   44.8  70.0
class              0.204 0.048  310   #FFCCFF   318   83.3  89.6
struct             0.168 0.070  300   #D399F6   300   57.4  79.1
enum               0.180 0.066  325   #F99DEE   325   64.5  82.2
package            0.140 0.050  300   #A985C0   300   41.8  67.5
string             0.190 0.065   92   #EADA8D    92   81.5  88.0
reference          0.206 0.030  104   #EBF1C9   104   94.0  94.1
interface          0.212 0.050  158   #B0FFDE   167   95.1  95.0
folder             0.185 0.075  204   #09F4F4   204   83.7  90.3
array              0.150 0.050  204   #58BBBB   205   55.3  74.3
variable           0.180 0.058  272   #BDBFFF   272   68.9  82.7
constant           0.204 0.042  340   #FFC9F6   326   81.7  88.7
number             0.190 0.058  345   #FFACE4   337   70.0  83.6
boolean            0.215 0.010  280   #F5F4FF   279   99.1  96.6
enumMember         0.160 0.062  340   #E487C3   340   51.8  74.6
typeParameter      0.205 0.030  257   #D7EAFF   250   90.6  92.4
module             0.178 0.048  257   #ACC7F8   257   69.9  82.6
namespace          0.144 0.038  257   #8A9EC1   257   47.1  68.3
operator           0.207 0.022  204   #CCF8F7   204   95.5  95.0
snippet            0.163 0.042  211   #7AC7CC   211   63.3  78.4
```

### Support (built-ins)

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
function           0.184 0.075  183   #00F9D6   183   84.9  91.0
class              0.200 0.060  183   #74FFE9   188   91.4  93.6
type               0.191 0.048  183   #8AF4DC   183   86.5  91.1
constant           0.184 0.045  183   #89E9D3   183   80.6  88.1
variable           0.207 0.065  183   #6BFFF3   196   91.4  93.6
```

### Markdown

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
heading            0.190 0.062  150   #8FF8B6   150   87.4  91.8
headingPunct       0.190 0.048  150   #A3F1BE   150   85.7  90.6
codeBlock          0.185 0.070  211   #48EEFA   211   81.8  89.3
quote              0.186 0.055  249   #A6D6FF   245   76.2  85.8
linkUrl            0.196 0.050  268   #CDD7FF   266   80.9  87.8
inserted           0.186 0.062  120   #BCE697   120   81.5  88.5
deleted            0.190 0.078   25   #FFA3B0    20   64.6  79.8
alertImportant     0.211 0.035  300   #FEE0FF   316   91.5  93.1
alertNote          0.201 0.070  243   #9CEEFF   221   86.5  90.9
alertTip           0.188 0.064  120   #BEE997   120   83.2  89.4
alertWarning       0.196 0.068   92   #F2E18F    92   85.9  90.3
alertCaution       0.184 0.082   27   #FF9AA5    23   61.3  78.3
```

### Debug

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
name               0.199 0.060  325   #FFB8FF   318   75.7  86.8
value              0.185 0.075   92   #E6D37B    92   77.5  86.0
string             0.200 0.060   92   #F5E69E    92   89.0  91.8
number             0.189 0.075  240   #82E1FF   228   78.5  87.2
boolean            0.189 0.060  240   #96E0FF   232   79.4  87.4
error              0.203 0.075   23   #FFB3C3    13   70.9  82.8
type               0.197 0.060  290   #E9C7FF   300   77.9  87.0
```

### Text Tiers

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
foreground         0.197 0.015  273   #DCDDEF   273   84.5  89.1
foregroundMuted    0.178 0.036  249   #ADCBEB   249   71.0  82.4
foregroundSubtle   0.140 0.030  249   #869CB4   250   45.3  66.2
tertiary           0.163 0.030  249   #A0B8D1   249   60.3  75.8
disabled           0.163 0.026  249   #A3B8CE   249   60.5  75.7
ghostText          0.150 0.026  249   #94A8BD   249   51.7  70.1
placeholder        0.140 0.022  249   #8B9CAD   249   45.5  65.6
whitespace         0.130 0.018  249   #828F9D   250   39.1  60.7
ruler              0.128 0.020  249   #7F8D9C   250   38.1  60.1
```

### Accents & Cursor

```
token              Jz    Cz     hz    rendered  hz~   Lc      L**
═════════════════════════════════════════════════════════════════
accentPrimary      0.169 0.071  204   #17DDDD   204   71.2  84.1
accentSecondary    0.187 0.062  204   #60F1F0   204   83.7  90.0
cursor             0.185 0.072  325   #FF9EF8   323   66.5  83.6
link               0.172 0.062  204   #4EDDDD   204   72.2  84.3
linkActive         0.190 0.060  204   #6AF4F4   204   85.8  91.0
```

### Backgrounds

```
tier               Jz    Cz     hz    hex
════════════════════════════════════════════════
void               0.014 0.036  259   #000821
stage              0.034 0.065  257   #021C49
house              0.052 0.070  257   #153163
float              0.064 0.078  259   #233C78
```

### Overlay Tints (composited on Stage)

Alpha compositing is nonlinear in sRGB; identity comes from voice and
channel, visibility from the measured ΔEz below.

```
voice                 alpha     blended   ΔEz vs Stage
════════════════════════════════════════════════════════
engagement (star-mist)   8% (light ) #042C55    6.1
engagement (star-mist)  15% (medium) #05385E   11.0
engagement (star-mist)  25% (strong) #074C6E   19.2
engagement (star-mist)  38% (heavy ) #0A6581   29.3
selection (denim)      8% (light ) #082556    4.7
selection (denim)     15% (medium) #0C2B60    8.3
selection (denim)     25% (strong) #143671   14.2
find (first-star)     25% (strong) #38306B   16.4
diff added (bamboo)   15% (medium) #1F3B56   15.3
diff removed (crimson)  15% (medium) #272B54   11.1
```
