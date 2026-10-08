---
layout: guide
title: "The formatting toolbar"
description: "Every button on the formatting toolbar and its More menu."
permalink: /guide/toolbar/
---

The toolbar above the editor, left to right:

- **Undo / Redo**
- **Bold, Italic, Underline, Strikethrough, Inline code, Highlight**
- **Sub/Superscript** dropdown
- **Link** — opens a field under the selection for the URL; **Enter**
  links the selected text (`[text](url)`), **Esc** cancels
- **Tag** — inserts a `#tag`
- **Heading** dropdown — Normal text / H1 / H2 / H3
- **List** dropdown — Bullet / Numbered / Checklist
- **Quote** (blockquote), with a menu beside it for inserting or changing
  a [callout](/guide/markdown/#callouts)
- **Table** — opens the hover-grid size picker
- **Embed** dropdown — inserts a block for each enabled embed plugin (such
  as Mermaid). If none are enabled, it links to Preferences instead.
- **Insert media or file** — opens a native multi-file picker and attaches
  the chosen files (see [Media](/guide/media/))
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
  [The editor](/guide/editor/))
- **Attributes** — shows or hides the document attributes sidebar
- **⋯ (More)** — the note's action menu, the same one you get by
  right-clicking the note in the Sidebar (minus "Open in new tab"):
  **Present**, **Export…**, **New child note**, **New folder**,
  **Bookmark** / **Remove bookmark**, **Move…**, **Rename**, **Duplicate**,
  **Copy name**, **Copy as wikilink**, **Copy ID**, **Reveal in Finder**
  (**Reveal in File Explorer** on Windows, **Open Containing Folder** on Linux),
  **Revisions** (opens the note's history in the Details section), and **Delete** (danger). Each
  item shows its keyboard shortcut.

A plugin with toolbar items (such as draw.io's **New diagram**
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
