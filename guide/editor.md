---
layout: guide
title: The editor
description: "Write in the editor, use the formatting toolbar, the table of contents and fields."
permalink: /guide/editor/
---

## The editor

Mahfouz's editor is CodeMirror 6 in **live-preview source mode** — you're
always editing real Markdown text, but certain syntax renders visually
(checkboxes, bullets, highlights, tags, wikilinks, media) as you type,
rather than showing raw symbols.

There are two independent view modes for how much raw syntax stays
visible, switched with the toolbar's **Show source** button
(persisted per-device, not per-note):

- **Source** (default): most Markdown punctuation stays visible
  (`# `, `**`, `_`, `[text](url)`, etc.) so it's obvious what you're
  editing, while checkboxes, bullets, and horizontal rules still render as
  real widgets.
- **Preview**: heading marks, emphasis marks, link brackets, `==`
  highlight marks, and `~`/`^` sub/superscript marks are all hidden in
  favor of the styled result — except on whatever line your cursor is
  currently on, which always reveals its raw syntax so you can edit it.
  GFM tables render as fully interactive editable tables in Preview mode
  regardless of cursor position (see [Tables](/guide/markdown/#tables) below).

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
- **Find and replace**: `Cmd/Ctrl+F` (or toolbar) opens CodeMirror's
  built-in search/replace panel.
- **Undo/redo**: standard `Cmd/Ctrl+Z` / `Cmd/Ctrl+Shift+Z`, also available
  as toolbar buttons.

## The formatting toolbar

The toolbar above the editor, left to right:

- **Undo / Redo**
- **Bold, Italic, Underline, Strikethrough, Inline code, Highlight**
- **Sub/Superscript** dropdown
- **Link** — inserts `[text](url)`
- **Tag** — inserts a `#tag`
- **Heading** dropdown — Normal text / H1 / H2 / H3
- **List** dropdown — Bullet / Numbered / Checklist
- **Quote** (blockquote), with a menu beside it for inserting or changing
  a [callout](/guide/markdown/#callouts)
- **Table** — opens the hover-grid size picker
- **Embed** dropdown — inserts a block for each enabled embed plugin (such
  as Mermaid). If none are enabled, it links to Preferences instead.
- **Insert media or file** — opens a native multi-file picker and attaches
  the chosen files (see [Media](/guide/markdown/#media-images--attachments))
- **Find and replace**
- **Font** dropdown — whole-note font override, stored as a note attribute
- **Color** dropdown — Text / Background / Highlight tabs. Each has a
  100-swatch grayscale + hue grid, a native "Custom…" color picker and
  "Reset to default." Like Font, these are whole-note settings stored as
  note attributes, not formatting for the selected text.
- **Page orientation** — switches between Landscape and Portrait

Right-aligned at the end of the toolbar:

- **Save status** — shows whether the note has been saved; click it to
  open the [Details](/guide/attributes/#note-pills--the-right-sidebar) section
- **Zoom** dropdown
- **Show source** — switches between Source and Preview (see
  [The editor](#the-editor))
- **Attributes** — shows or hides the document attributes sidebar
- **⋯ (More)** — the note's action menu, the same one you get by
  right-clicking the note in the Sidebar (minus "Open in new tab"):
  **Present**, **Export…**, **New child note**, **New folder**,
  **Bookmark** / **Remove bookmark**, **Move…**, **Rename**, **Duplicate**,
  **Copy name**, **Copy as wikilink**, **Copy ID**, **Reveal in Finder**
  (**Reveal in File Explorer** on Windows, **Open Containing Folder** on Linux),
  **Revisions** (opens the note's history in the Details section), and **Delete** (danger). Each
  item shows its keyboard shortcut.

A plugin that registers toolbar items (such as draw.io's **New diagram**
or Mermaid's **Insert diagram**) adds its own buttons at the right end of
the toolbar, after **Attributes** and just before **⋯ (More)**, but only
while the plugin is enabled. A toolbar button with a keyboard shortcut
can be rebound or turned off in `.config/settings.md` under
`## Shortcuts`, the same way as a plugin command (see [Presenting notes
as slides](/guide/slides/) for an example). Plugin tabs and
the Preferences → Plugins list both show each plugin's icon.

All toggle-style formatting (bold, italic, lists, headings, blockquote,
etc.) is a *smart toggle*: applying it again removes it, and applying a
different list type to a line that already has one converts it in place
rather than stacking markers.

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

## Fields (`!name`)

Type `!` followed by letters anywhere in a note to trigger autocomplete
over your custom fields. Selecting one inserts it in place, once, as fixed
text. Comes seeded with `!today`, `!now`, `!time`, `!iso`, `!uuid`,
`!title`, `!page`, `!total`.

Manage them in Vault Settings → **Fields** — an editable table of
Field / Expansion / Description rows. Expansions support these tokens:

| Token | Expands to |
|---|---|
| `{date:FMT}` | Current date/time, using `YYYY`, `MM`, `DD`, `HH`, `mm`, `ss` — e.g. `{date:YYYY-MM-DD}` |
| `{iso}` | Current timestamp as an ISO 8601 string |
| `{uuid}` | A random UUID |
| `{title}` | The note's title |

Anything else in the expansion passes through as literal text. This lives
in the vault as `.config/fields.md`, a plain Markdown table you can also
hand-edit directly.

Fields also work in a slides template's header or footer (Vault Settings →
**Slides**), or a note's `header` / `footer` attribute, where — unlike in
the editor — they're evaluated fresh every time the note is presented or
exported, so `{date:YYYY-MM-DD}` and friends stay current. Two extra
tokens, `{page}` and `{total}`, are available only there (headers and
footers).
