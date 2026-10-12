---
layout: guide
title: "Markdown"
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
| <code>&#96;&#96;&#96;</code> fenced block | Code block, styled distinctly from prose |
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

To insert one, open the menu next to the toolbar's **Quote** button and
pick a type. With the cursor inside a callout, picking another type
changes it, and picking its own type turns it back into a plain quote.
A callout at the top of a note isn't the note's title: the title comes
from the line after it.

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
is inside it, and on [published pages](/guide/publishing/).

## Table of contents

A line holding only `[TOC]` (or `[[_TOC_]]`) shows a numbered **Contents**
list (1, 1.1, 2…) of the note's level 2–6 headings, each linking to its
section. It shows in Preview mode, where clicking an entry jumps to the
heading, and on [published pages](/guide/publishing/). With no headings,
Preview shows **No headings yet** and a published page shows nothing.

## Tables

Insert one via the toolbar's **Table** button (a hover grid, minimum 8×8,
that grows as you approach its edge; pick rows × columns, it shows the
size as you hover). In Preview mode a table is always a live, editable
grid instead of raw pipe syntax:

- Click a cell to edit it inline; **Tab**/**Shift+Tab** moves between
  cells (Tab at the last cell adds a new row); **Enter** commits the cell.
- Hover the bottom or right edge for a **+** button to add a row or column.
- Each column header shows a drag handle (reorder columns) and a trash
  icon (delete column, hidden when only one remains); rows with more than
  one row get the same drag handle to reorder.
