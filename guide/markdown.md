---
layout: guide
title: "Markdown"
since: "0.2.0"
description: "The Markdown syntax Mahfouz understands, from headings and links to tables."
permalink: /guide/markdown/
---

Everything below is plain Markdown (GitHub-style) that Mahfouz recognizes and
renders specially:

| Syntax | Result |
|---|---|
| `# `, `## `, `### ` (up to 6) | Heading levels 1–6 |
| `**bold**` | **Bold** |
| `_italic_` | _Italic_ |
| `~~strikethrough~~` | ~~Strikethrough~~ |
| `` `inline code` `` | Inline code |
| `==highlight==` | Highlighted text |
| `~sub~` | Subscript |
| `^sup^` | Superscript |
| `- `, `* `, `+ ` at line start | Bullet list |
| `1. ` at line start | Ordered list (auto-renumbered) |
| `[ ] `, `[x] `, `[] ` at line start | Checkbox (click to toggle) |
| `> ` at line start | Blockquote |
| `> [!NOTE]` as a quote's first line (also `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`) | Callout (see [Callouts](#callouts)) |
| `---` on its own line | Horizontal rule **and** a page/slide break (see [Presenting](/guide/slides/)) |
| <code>&#96;&#96;&#96;</code> fenced block | Code block, syntax highlighted (see [Code blocks](#code-blocks)) |
| `$x^2$`, `$$…$$` | Math, inline or on its own lines (see [Math](#math)) |
| `[TOC]` on its own line | Numbered table of contents (see [Table of contents](#table-of-contents)) |
| `[text](url)` | Link |
| `<https://example.com>` | Bare autolink |
| `[[Note Title]]` | Wikilink to another note by title |
| `[[folder/Note Title\|text]]` | Wikilink to a note in a folder, shown as "text" |
| `#tag` | Tag (filterable in the Sidebar) |
| `![alt](path)` alone on a line | Embedded image/video/audio, auto-detected from the file extension |
| GitHub-style pipe table (`\| a \| b \|` rows with a `---` separator row) | Interactive table in Preview mode |
| YAML frontmatter (`---` fenced block at the very top) | Note metadata: `id`, `bookmarked`, `external_images`, and any custom attributes you add |

## Callouts

A callout is a blockquote whose first line is only a marker. It uses the
same syntax as GitHub's alerts, so a vault pushed to GitHub renders its
callouts there too:

```markdown
> [!TIP]
> Press **Ctrl+B** (**Cmd+B** on a Mac) to make text bold.
```

There are five types: `NOTE`, `TIP`, `IMPORTANT`, `WARNING` and
`CAUTION`. Upper or lower case both work. In Preview mode a callout shows
as a tinted box with the type's icon and name. A marker followed by other
text, an unknown type, or a quote inside a list stays a plain blockquote.

To insert one, open the toolbar's **Callout** menu and pick a type. With the cursor inside a callout, picking another type
changes it, and picking its own type turns it back into a plain quote.
A callout at the top of a note isn't the note's title: the title comes
from the line after it.

## Code blocks

Put code between two lines of three backticks, with its language after the
opening ones:

````markdown
```ts
const total = items.reduce((sum, item) => sum + item.price, 0);
```
````

You can also insert one with **Code block** in the toolbar's **Code**
menu or `/code` in the [slash menu](/guide/slash-menu/). On an empty line it adds
an empty block with the cursor in it. With text selected (or on a line with
text), it puts those lines in a block, and inside a block it turns the block
back into plain lines. Type the opening backticks and the language and
press <kbd>Enter</kbd>: the closing backticks are added below and the cursor
goes between them, so the block ends there instead of taking in the rest of
the note. {% include since.html v="0.13.0" %}

A code block shows as a card, highlighted for its language. In Preview mode
the backticks stay hidden, even while you edit the code
{% include since.html v="0.13.0" %}, and the cursor steps over them.
<kbd>Backspace</kbd> in an empty block removes the block. The card's
header shows a collapse chevron and the language, and pointing at the block
shows its buttons:

- The chevron at the left collapses the block to its header and its line
  count ("· 12 lines"), or expands it again. {% include since.html v="0.13.0" %}
- The language button shows the block's language. Click it to pick another
  from the **Language** menu, which you can search. {% include since.html v="0.13.0" %}
- The moon or sun button shows this one block dark or light, whatever the
  note's appearance. {% include since.html v="0.13.0" %}
- The line-numbers button numbers the block's lines, or stops numbering them.
- **Copy code** copies the whole block's code, without the backticks, even
  while it's collapsed or folded.

Picking a language rewrites only the word after the opening backticks, so
`showLineNumbers` and anything else after it stay. The change is never a
suggestion, even in Suggesting mode, and one undo takes it back. A block
written as `text` (or with no language) shows **Plain text**, and a file
extension works as a language too: `py` is Python, `rs` is Rust.
{% include since.html v="0.13.0" %}

Collapsing a block and switching it light or dark are remembered on this
device only, for that note. They aren't written to the note, so they don't
sync, aren't committed, and collaborators see the block as it is.
{% include since.html v="0.13.0" %}

Line numbers are kept in the note itself, as `showLineNumbers` after the
language (<code>&#96;&#96;&#96;ts showLineNumbers</code>), so they show for
everyone you share the note with. You can also type it yourself. A block
with no language gets `text` as its language when you number it. Switch to
Source mode to see and edit its backticks.
{% include since.html v="0.13.0" %}

When a code block is the last thing in a note, press <kbd>↓</kbd> on its
last line of code, or click below the text, to start a new line under the
block. Pressing <kbd>Enter</kbd> inside the block only adds lines of code.
{% include since.html v="0.13.0" %}

With the cursor in a block, <kbd>Shift</kbd><kbd>F10</kbd> (or
<kbd>Mod</kbd><kbd>.</kbd> {% include since.html v="0.20.0" %}, or the
<kbd>Menu</kbd> key) opens the block's actions as a menu: Language…,
Collapse block, the light or dark switch, Line numbers and Copy code.
{% include since.html v="0.13.0" %}

### Folding code {% include since.html v="0.13.0" %} {#folding-code}

In Preview mode, pointing at a code block shows a chevron in the rail
beside the line numbers on each line where a region starts: a function, a
class, an object or an indented section. Click it to fold that region to
its first line and a "…", and click it again to unfold it. Languages without
their own folding rules fold by indentation.

Folds are temporary: switching the note to Source mode, picking a new
language for the block, or reloading unfolds them. The fold keys act only
with the cursor on a line of code in Preview, and do nothing elsewhere:

| Shortcut | Action |
|---|---|
| <kbd>Cmd</kbd><kbd>Alt</kbd><kbd>&#91;</kbd> on a Mac, <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>&#91;</kbd> elsewhere | Fold the region at the cursor |
| <kbd>Cmd</kbd><kbd>Alt</kbd><kbd>&#93;</kbd> on a Mac, <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>&#93;</kbd> elsewhere | Unfold it |
| <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>&#91;</kbd> | Fold every region in the block |
| <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>&#93;</kbd> | Unfold every region in the block |

## Math

Write math in LaTeX between dollar signs: `$…$` for math inside a
sentence, `$$…$$` for a formula on its own lines.

```markdown
The area of a circle is $\pi r^2$.

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$
```

So that prices don't turn into math, the rules are Pandoc's:

- A `$` followed by a space doesn't start math.
- The closing `$` must come right after a non-space character, and
  mustn't be followed by a digit.
- `\$` is a literal dollar sign.

Math is rendered in Preview mode, where its source shows while the cursor
is inside it, and on [published pages](/guide/publishing/). In Preview, a
click on a formula on its own lines shows its source to edit, and pointing
at it shows **Edit**, **Copy** and **Delete**. {% include since.html v="0.20.0" %}

## Table of contents

A line holding only `[TOC]` (or `[[_TOC_]]`) shows a numbered **Contents**
list (1., 1.1., 2.…) of the note's headings, each linking to its
section. Every heading is listed except the title, a level 1 heading on the
note's first line, and headings inside quotes or lists. Numbers follow the
heading levels, counted from the shallowest level listed, and a skipped
level counts as 0: a level 4 heading straight under a level 2 one is
1.0.1. {% include since.html v="0.14.0" %} It shows in Preview mode, where clicking an entry jumps to the
heading, and on [published pages](/guide/publishing/). In Preview, the
heading's line stays shaded until you click, type or move the cursor. A
click anywhere else on the list shows the `[TOC]` line to edit, and
pointing at it shows **Edit**, **Copy** and **Delete**. {% include since.html v="0.20.0" %} With
no headings, Preview shows **No headings yet** and a published page shows
nothing. {% include since.html v="0.20.0" %} From the keyboard, <kbd>↓</kbd>
from the line above moves into the list; <kbd>↑</kbd> and <kbd>↓</kbd>
move between entries, and <kbd>Enter</kbd> jumps to one (see [Block
widgets](/guide/keyboard-writing/#block-widgets)).

## Heading numbers {% include since.html v="0.14.0" %} {#heading-numbers}

**Number headings**, at the bottom of the toolbar's Heading menu
{% include since.html v="0.15.0" %} (or `/number` in the
[slash menu](/guide/slash-menu/), or the command palette), numbers the note's
headings with the same numbers its table of contents uses: the
first section is 1., its first subsection 1.1., the next section 2., and
so on. The title on the first line stays unnumbered. In Preview the number
comes before each heading; in Source it sits in the left margin, so the
text doesn't move while you type. The [outline](/guide/editor/) shows the
numbers too, and so does the [published page](/guide/publishing/).

The numbers are drawn on screen, never written into the note: links to a
heading and exports are unchanged. The setting is the note's
`heading_numbers: true` [attribute](/guide/attributes/), so it travels with
the note to collaborators and other devices. Choose **Number headings**
again to turn it off.

## Tables

Insert one via the toolbar's **Table** button (a hover grid, minimum 8×8,
that grows as you approach its edge; pick rows × columns, it shows the
size as you hover). In Preview mode a table is always a live, editable
grid instead of raw pipe syntax:

- Click a cell to edit it inline; **Tab**/**Shift+Tab** moves between
  cells (Tab at the last cell adds a new row); **Enter** commits the cell.
- Hover the bottom or right edge for a **+** button to add a row or column.
- Each column header and each body row has a grip. Drag a grip to move
  its column or row, or click it for a menu:
  - **Row:** **Insert row above**, **Insert row below**, **Move row up**,
    **Move row down** and **Delete row**.
  - **Column:** **Insert column left**, **Insert column right**, **Move
    column left**, **Move column right**, **Align left**, **Align center**,
    **Align right** (the current alignment is checked) and **Delete
    column**. Alignment writes `:---`, `:---:` or `---:` under the header.

  An item that can't be used is dimmed and says why, such as "Already
  first" or "A table needs a column". Grips show on one-row and one-column
  tables too; the header row has no row grip. Each action is one undo.
- <kbd>Shift</kbd><kbd>F10</kbd>, <kbd>Mod</kbd><kbd>.</kbd> {% include since.html v="0.20.0" %}
  or the <kbd>Menu</kbd> key in a cell opens
  the same items for its row and column in one menu (a header cell gets the
  column items only). When the menu closes, you're back in the cell.
  {% include since.html v="0.20.0" %} The menu starts with **Wrap text**
  (checked when it's on), then **Convert to database…** where the table
  offers it. The wrap toggle and the **+** buttons also answer
  <kbd>Enter</kbd> and <kbd>Space</kbd>.
- While Suggesting, and in a read-only note, the table can't be edited:
  there are no grips, **+** buttons or menus.
