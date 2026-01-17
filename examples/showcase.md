# Hatsune Miku Theme - Markdown Showcase

> "The World is My Stage, and Code is My Song."

## All-Miku Synthesis Edition

This document demonstrates **Markdown syntax highlighting** with the *Hatsune Miku Theme*.

### Heading Hierarchy

Headings use a color progression:

- **H1**: `#E05096` (Pink) - Main title
- **H2**: `#4DD0E1` (Cyan) - Major sections
- **H3**: `#FFD740` (Amber) - Subsections
- **H4**: `#39C5BB` (Teal) - Minor sections
- **H5**: `#9CCC65` (Green) - Details
- **H6**: `#78909C` (Grey) - Footnotes

#### Version Mapping

The theme maps each Miku version to UI elements:

##### V2 Classic (2007)

The original `#39C5BB` teal remains the **canonical identity color**.

###### Technical Note

This is the foundation of the entire color system.

---

### Text Formatting

**Bold text** uses `#FFD740` (Amber) for emphasis.

*Italic text* uses `#4DD0E1` (Cyan) for subtle emphasis.

***Bold and italic*** combines both styles.

~~Strikethrough~~ indicates deprecated content.

### Links and References

- [External Link](https://vocaloid.com) - Cyan `#4DD0E1`
- [Internal Reference](#all-miku-synthesis-edition)
- <https://autolinked-url.com>

### Lists

#### Unordered List

- Append Dark - Bass foundation
- Append Solid - Low grounded
- V2 Classic - Mid identity
  - Sub-item with nesting
  - Another nested item
    - Deep nesting
- NT - High clarity
- Append Vivid - Peak electric
- Append Light - Ultra airy

#### Ordered List

1. First step: Initialize the stage
2. Second step: Load voice bank
3. Third step: Begin performance
   1. Sub-step A
   2. Sub-step B
4. Fourth step: Complete

#### Task List

- [x] Implement V2 Classic identity
- [x] Add SEKAI stage accents
- [x] Create frequency visualizer
- [ ] Add more language support
- [ ] Create documentation

### Code

Inline `code` uses monospace font with teal tint.

#### Code Blocks

```typescript
// TypeScript example
interface VoiceBank {
  name: string;
  version: 'V2' | 'NT' | 'SEKAI';
  color: `#${string}`;
}

const miku: VoiceBank = {
  name: 'Hatsune Miku',
  version: 'V2',
  color: '#39C5BB'
};

async function perform(song: string): Promise<void> {
  console.log(`Now singing: ${song}`);
}
```

```python
# Python example
class DigitalDiva:
    CANONICAL_COLOR = "#39C5BB"

    def __init__(self, name: str = "Hatsune Miku"):
        self.name = name

    async def sing(self, song: str) -> None:
        print(f"Performing: {song}")
```

```rust
// Rust example
struct VoiceBank<'a> {
    name: &'a str,
    version: MikuVersion,
}

impl<'a> VoiceBank<'a> {
    fn new(name: &'a str) -> Self {
        Self { name, version: MikuVersion::V2Classic }
    }
}
```

### Blockquotes

> "The future is in your hands."
> — Hatsune Miku

Nested quotes:

> Level 1 quote
> > Level 2 nested quote
> > > Level 3 deeply nested

### Tables

| Version | Color | Year | Role |
|---------|-------|------|------|
| V2 Classic | `#39C5BB` | 2007 | Identity |
| V3 | `#3BC8BE` | 2013 | Evolution |
| V4X | `#38C4BA` | 2016 | Professional |
| NT | `#3ED1C8` | 2020 | Technology |
| SEKAI | `#33CCBB` | 2020 | Stage |

### Images

![Theme Preview](./images/preview.png)

### Horizontal Rules

Three or more dashes:

---

Three or more asterisks:

***

Three or more underscores:

___

### HTML Elements

<details>
<summary>Click to expand</summary>

This is hidden content that can be expanded.

- Item 1
- Item 2
- Item 3

</details>

<kbd>Ctrl</kbd> + <kbd>K</kbd>, <kbd>Ctrl</kbd> + <kbd>T</kbd> - Theme selector

### Footnotes

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.

### Definition Lists

Hatsune Miku
: A virtual singer developed by Crypton Future Media using Yamaha's Vocaloid technology.

Canonical Color
: The official `#39C5BB` teal that represents Miku's identity since 2007.

### Mathematical Expressions

Inline math: $E = mc^2$

Block math:

$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \cdots + x_n
$$

---

*All-Miku Synthesis: Every voice, one stage.*
