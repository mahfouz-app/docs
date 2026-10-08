---
layout: guide
title: "Markdown & media"
description: "The Markdown syntax Mahfouz understands, and how images and attachments are stored."
permalink: /guide/markdown/
---

## Markdown syntax reference

Everything below is plain Markdown (GFM-flavored) that Mahfouz recognizes and
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
| `---` on its own line | Horizontal rule **and** a page/slide break (see [Presenting](/guide/slides/)) |
| <code>&#96;&#96;&#96;</code> fenced block | Code block, styled distinctly from prose |
| `[text](url)` | Link |
| `<https://example.com>` | Bare autolink (what pasting a URL produces) |
| `[[Note Title]]` | Wikilink to another note by title |
| `#tag` | Tag (indexed, filterable in the Sidebar) |
| `![alt](path)` alone on a line | Embedded image/video/audio, auto-detected from the file extension |
| GFM pipe table (`\| a \| b \|` rows with a `---` separator row) | Interactive table in Preview mode |
| YAML frontmatter (`---` fenced block at the very top) | Note metadata — `id`, `bookmarked`, `external_images`, and any custom attributes you add |

### Tables

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

## Media, images & attachments

- **Embedding**: `![alt text](path)` on its own line renders inline as an
  image, video, or audio player, chosen automatically from the file
  extension (video: mp4/webm/ogv/mov/m4v; audio: mp3/wav/ogg/oga/m4a/flac/
  aac; anything else: image). A small chevron in the editor gutter next to
  that line collapses/expands the embed (remembered per note on your
  device).
- **Adding files**: drag a file from the OS onto the editor, paste a file
  from your clipboard (e.g. a screenshot), or use the toolbar's **Insert
  media or file** button. The file is copied into the vault-level `files/`
  folder with a sanitized, uniquified name, and a `![Name](/files/file.ext)`
  (media) or `[Name](/files/file.ext)` (other files) line is inserted at
  your cursor. The link is the same wherever the note later moves.
- **Paths**: a path starting with `/` resolves from the vault root; any
  other relative path resolves against the note's own folder (you can't
  reach outside the vault with `../../`). `file:` URLs are rejected.
  `data:` URIs render directly.
- **Remote images**: `http(s)://` image URLs only render if you've turned
  on **"Render external images in this note"** in the
  [Attributes panel](/guide/attributes/#attributes-panel) — off by default, per note.
- **Cleanup**: if you delete an embed line (or the note itself), Mahfouz
  removes the underlying file from disk automatically, but only if no
  other note in the vault still references it. Only files under `files/`
  (or, for older vaults, beside the note) are ever removed this way.
- **Markdown export** copies the note (and, optionally, its children) plus
  the attachments they reference, keeping `/files/…` links valid with the
  export folder as the root.
- **Link titles**: after pasting a bare URL, press **Tab** while the
  "Tab → title" hint is showing to fetch the page's title and turn it into
  a normal Markdown link (`[Title](url)`).
