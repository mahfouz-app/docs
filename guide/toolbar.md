---
layout: guide
title: "The formatting toolbar"
description: "Every button on the formatting toolbar, its More menu and the bottom bar."
permalink: /guide/toolbar/
---

The toolbar above the editor groups its buttons, with a separator between
groups. Left to right:

- **History**: **Undo**, **Redo**
- **Style**: the **Heading** dropdown: Normal text / Heading 1 / Heading 2 /
  Heading 3
- **Text**: **Bold**, **Italic**, **Underline**, **Strikethrough**, the
  **Subscript / Superscript** dropdown, **Highlight**, **Inline code** and
  **Remove formatting** (see [Remove formatting](#remove-formatting))
- **Insert**:
  - **Link**: opens a field under the selection for the URL; **Enter**
    links the selected text (`[text](url)`), **Esc** cancels
  - **Tag**: inserts a `#tag`
  - **Insert media or file**: opens a native multi-file picker and
    attaches the chosen files (see [Media](/guide/media/))
  - **Table**: opens the hover-grid size picker
  - **Embed** dropdown: inserts a block for each enabled embed plugin (such
    as Mermaid). If none are enabled, it links to Preferences instead.
- **Paragraph**: the **List** dropdown (Bullet list / Numbered list /
  Checklist), **Quote** (blockquote) and the **Callout** dropdown, for
  inserting or changing a [callout](/guide/markdown/#callouts)
- **Find**: **Find and replace**
- **Note look**:
  - **Font** dropdown: whole-note font override, stored as a note attribute
  - **Color** dropdown: Text / Background / Highlight tabs. Each has a
    100-swatch grayscale + hue grid, a native "Custom…" color picker and
    "Reset to default." Like Font, these are whole-note settings stored as
    note attributes, not formatting for the selected text.
- **Slides**, when shown: **Page orientation** switches a slides PDF
  export between Landscape and Portrait, and the slides-template menu
  picks the note's [slides template](/guide/slides/)

Table and Embed aren't available while
[Suggesting](/guide/track-changes/); their tooltips say to switch to
Editing. The same groups, in the same order and with the same labels,
are in the editor's [right-click menu](/guide/editor/#right-click-menus).

Right-aligned at the end of the toolbar:

- **Attributes**: shows or hides the document attributes sidebar
- **⋯ (More)**: the note's action menu, the same one you get by
  right-clicking the note in the Sidebar (minus "Open in new tab" and the
  publish items, which are in the bottom bar):
  **Present**, **Export…**, **New child note**, **New folder**,
  **Bookmark** / **Remove bookmark**, **Move…**, **Rename**, **Duplicate**,
  **Copy name**, **Copy as wikilink**, **Copy ID**, **Reveal in Finder**
  (**Reveal in File Explorer** on Windows, **Open Containing Folder** on Linux),
  **Revisions** (opens the note's history in the Details section), and **Delete** (danger). Each
  item shows its keyboard shortcut.

## The bottom bar

The bar under the open note shows where the note stands on the left and
how you're viewing it on the right. Its menus open upward.

On the left:

- **Save status**: shows whether the note has been saved, and where its
  changes are: **Saved · Not committed**, **Not pushed**, **Pushing…**,
  **Pushed**, **Push failed** or **Conflict** (see
  [The save chip](/guide/git/#the-save-chip)). Click it to open the
  [Details](/guide/attributes/#note-pills--the-right-sidebar) section
- **Publish**: publishes the note to the web. Once it's published, it reads
  **Published ▴** and holds the page's actions: **Update published page**,
  **Copy public link**, **Open published page**, **QR code**, **Publish
  child notes…**, **Page settings…** and **Unpublish**. A dot shows while
  the page is behind the note (see [Publishing](/guide/publishing/))
- **Share** (a box with an up arrow): opens the system share sheet to send
  the note to another app, such as Mail or Messages. It sends the note's
  text as Markdown, without its attributes or a database's view settings.
  Pending [suggestions](/guide/track-changes/) go as the original text
  (text proposed for deletion stays, insertions don't), and comments are
  left out. A published note's page link goes too; it opens the page as
  last published, so update the page first if it's out of date. Share is
  in the macOS app (also **File → Share…**) and in browsers that can share:
  Safari; Chrome and Edge on macOS, Windows and ChromeOS; mobile browsers.
  An encrypted note can't be shared: it has no Share button, **File →
  Share…** is greyed out, and the command palette refuses it

On the right:

- **Editing ▴ / Suggesting ▴**: switches between making changes and
  suggesting them, and reviews suggestions. It shows how many suggestions
  the note has (see [Track changes](/guide/track-changes/))
- **Comment**: comments on the selected text, or opens the comment
  under the cursor (see [Comments](/guide/track-changes/#comments))
- **Show source**: switches between Source and Preview (see
  [The editor](/guide/editor/))
- **Appearance** (a half circle, a sun or a moon): shows this note in
  **Light** or **Dark** whatever the app's
  [Color mode](/guide/settings/), or **Auto** (the default) to follow it.
  Only the note changes: its toolbar, the note and this bar, along with
  the menus and diagrams inside it. The sidebars and tabs keep the app's
  colors. The choice is yours alone, kept for this note on this device
  (in the browser's or app's local storage), so collaborators and your
  other devices still see Auto, and nothing is committed. A note's own
  background and text colors still apply. **Cycle the active note's
  appearance** in the [command palette](/guide/command-palette/) steps
  through Auto, Light and Dark; it has no shortcut until you bind one in
  **Settings → Shortcuts**
- **Zoom** dropdown

A plugin with toolbar items (such as draw.io's **New diagram**,
Mermaid's **Insert diagram** or Slidev's **Present**) adds its own buttons
at the right end of the toolbar, just before **⋯ (More)**, but only
while the plugin is enabled. A toolbar button with a keyboard shortcut
can be rebound or turned off in `.config/settings.md` under
`## Shortcuts`, the same way as a plugin command (see [Presenting notes
as slides](/guide/slides/) for an example). Plugin tabs and
the Settings → Plugins list both show each plugin's icon.

All toggle-style formatting (bold, italic, lists, headings, blockquote,
etc.) is a *smart toggle*: applying it again removes it, and applying a
different list type to a line that already has one converts it in place
rather than stacking markers.

## Remove formatting

**Remove formatting** takes the text formatting off the selected text:
bold, italic, underline, strikethrough, highlight, inline code, subscript
and superscript. It has no keyboard shortcut.

- Only the selected text loses it. A mark that runs past the selection is
  split, so the text outside keeps it: in `**the new**`, removing
  formatting from "new" leaves `**the** new`.
- With no selection, it removes the marks the cursor is in.
- Links, tags, wikilinks, headings, lists, quotes, comments and
  suggestions stay.
- It isn't available while Suggesting: switch to Editing to remove
  formatting.
