---
layout: guide
title: "The editor"
description: "Editing and preview modes, the table of contents and page preview."
permalink: /guide/editor/
---

In Mahfouz's editor you're always editing plain Markdown text, but
certain syntax renders visually as you type (checkboxes, bullets,
highlights, tags, wikilinks, media) rather than showing raw symbols.

There are two independent view modes for how much raw syntax stays
visible, switched with the toolbar's **Show source** button
(remembered on this device, not per note):

- **Source** (default): most Markdown punctuation stays visible
  (`# `, `**`, `_`, `[text](url)`, etc.) so it's obvious what you're
  editing, while checkboxes, bullets, and horizontal rules still render as
  real widgets.
- **Preview**: heading marks, emphasis marks, link brackets, `==`
  highlight marks, and `~`/`^` sub/superscript marks are all hidden in
  favor of the styled result — except on whatever line your cursor is
  currently on, which always reveals its raw syntax so you can edit it.
  Tables render as fully interactive editable tables in Preview mode
  regardless of cursor position (see [Tables](/guide/markdown/#tables)).
  An image, video or audio embed likewise replaces its `![alt](path)` line
  in Preview mode, wherever the cursor is (see
  [Images & attachments](/guide/media/)).

Other editor behavior:

- **Tab** on a list item (bullet, numbered, or checklist) nests it under the
  item above, wherever your cursor is on the line, and its sub-items move
  with it. **Shift+Tab** moves it back out a level. On the first item of a
  list Tab does nothing, since there's nothing above to nest under.
- On any other line, **Tab** re-indents only when your cursor is in leading
  whitespace at the start of the line; anywhere else it's left free for
  OS-level autocomplete.
- Native macOS spellcheck/autocorrect (including Text Replacements) work
  normally.
- `Cmd/Ctrl+Click` on a link, `[[wikilink]]`, or a rendered link-card opens
  it (external URLs in your system browser; wikilinks by switching to that
  note).
- In Preview, a plain click on a link opens a small editor for it (see
  [Links](/guide/links/#links-wikilinks--backlinks)).
- **Find and replace**: `Cmd/Ctrl+F` (or toolbar) opens the search
  and replace panel.
- **Undo/redo**: standard `Cmd/Ctrl+Z` / `Cmd/Ctrl+Shift+Z`, also available
  as toolbar buttons.

## Table of contents & page preview

Two right/left-hand panels, both driven by the editor's current scroll
position ("whichever section is at the top of the viewport is active"):

- **Table of contents** (right sidebar) lists every heading (levels 1–6,
  ignoring anything inside a code fence) in the note, indented by level;
  click one to jump to it.
- **Page preview** (collapsible column to the left of the editor) shows
  thumbnail cards for each "page" — the note split wherever a bare `---`
  line appears (the same rule [presenting](/guide/slides/)
  uses for slide breaks). Click a thumbnail to jump there. Drag cards to
  reorder pages, or right-click one for **Move up / Move down / Delete
  page**.
