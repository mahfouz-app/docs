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
| `[text](url)` | Link |
| `<https://example.com>` | Bare autolink |
| `[[Note Title]]` | Wikilink to another note by title |
| `#tag` | Tag (filterable in the Sidebar) |
| `![alt](path)` alone on a line | Embedded image/video/audio, auto-detected from the file extension |
| GitHub-style pipe table (`\| a \| b \|` rows with a `---` separator row) | Interactive table in Preview mode |
| YAML frontmatter (`---` fenced block at the very top) | Note metadata — `id`, `bookmarked`, `external_images`, and any custom attributes you add |

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

## Tables

Insert one via the toolbar's **Table** button (a hover grid, minimum 8×8,
that grows as you approach its edge — pick rows × columns, it shows the
size as you hover). In Preview mode a table is always a live, editable
grid instead of raw pipe syntax:

- Click a cell to edit it inline; **Tab**/**Shift+Tab** moves between
  cells (Tab at the last cell adds a new row); **Enter** commits the cell.
- Hover the bottom or right edge for a **+** button to add a row or column.
- Each column header shows a drag handle (reorder columns) and a trash
  icon (delete column — hidden when only one remains); rows with more than
  one row get the same drag handle to reorder.
