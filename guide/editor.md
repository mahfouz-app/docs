---
layout: guide
title: "The editor"
description: "Editing and preview modes, right-click menus, the outline, the table of contents and page preview."
permalink: /guide/editor/
---

In Mahfouz's editor you're always editing plain Markdown text, but
certain syntax renders visually as you type (checkboxes, bullets,
highlights, tags, wikilinks, media) rather than showing raw symbols.

There are two independent view modes for how much raw syntax stays
visible, switched with the bottom bar's view button (an eye in Preview, code
brackets in Source)
(remembered on this device, not per note):

- **Source** (default): most Markdown punctuation stays visible
  (`# `, `**`, `_`, `[text](url)`, etc.) so it's obvious what you're
  editing, while checkboxes, bullets, and horizontal rules still render as
  real widgets.
- **Preview**: heading marks, emphasis marks, link brackets, `==`
  highlight marks, and `~`/`^` sub/superscript marks are all hidden in
  favor of the styled result, except on whatever line your cursor is
  currently on, which always reveals its raw syntax so you can edit it.
  Tables render as fully interactive editable tables in Preview mode
  regardless of cursor position (see [Tables](/guide/markdown/#tables)).
  An image, video or audio embed likewise replaces its `![alt](path)` line
  in Preview mode, wherever the cursor is (see
  [Images & attachments](/guide/media/)).
  Copying from Preview copies formatted text: pasted into Mail, Google
  Docs, Slack or Word, headings, emphasis, lists, links and tables keep
  their formatting. Apps that only take plain text, and Mahfouz itself,
  get the Markdown. Pending suggestions paste as the original text and
  comments are left out (the text they mark stays); wikilinks and
  attached images paste as their text. Copying in Source copies
  Markdown only.

Other editor behavior:

- **Tab** on a list item (bullet, numbered, or checklist) nests it under the
  item above, wherever your cursor is on the line, and its sub-items move
  with it. **Shift+Tab** moves it back out a level. On the first item of a
  list Tab does nothing, since there's nothing above to nest under.
- On any other line, **Tab** re-indents only when your cursor is in leading
  whitespace at the start of the line; anywhere else it's left free for
  OS-level autocomplete.
- Misspelled words are underlined by your system's spell checker (see
  [Spelling check](/guide/spelling/)). In the macOS desktop app, what you
  type stays as typed: macOS substitutions (smart quotes, smart dashes,
  Text Replacements, autocorrect and link detection) are off (see
  [Text substitutions](/guide/spelling/#text-substitutions)).
- <kbd>Cmd/Ctrl</kbd>+click on a link, `[[wikilink]]`, or a rendered link-card opens
  it (external URLs in your system browser; wikilinks by switching to that
  note).
- In Preview, a plain click on a link opens a small editor for it (see
  [Links](/guide/links/#links-wikilinks--backlinks)).
- **Find and replace**: <kbd>Cmd/Ctrl</kbd><kbd>F</kbd> (or toolbar) opens the search
  and replace panel.
- **Find selection**: <kbd>Cmd/Ctrl</kbd><kbd>Alt</kbd><kbd>F</kbd> jumps to the next
  occurrence of the selected text, or of the word under the cursor when
  nothing is selected, without opening the panel. Press
  <kbd>Cmd/Ctrl</kbd><kbd>G</kbd> to keep going, <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>G</kbd> to go back.
- **Undo/redo**: standard <kbd>Cmd/Ctrl</kbd><kbd>Z</kbd> / <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>Z</kbd>, also available
  as toolbar buttons.

## Right-click menus

What a right-click in the editor opens depends on whether you click
inside a selection.

**Inside a selection**, on the desktop and on the web, Mahfouz opens its
own menu:

- **Cut**, **Copy**, **Paste**
- **Comment** (see [Comments](/guide/track-changes/#comments))
- the toolbar's **Style**, **Text**, **Insert** and **Paragraph** groups,
  in the [toolbar](/guide/toolbar/)'s order and with its labels. Each
  toolbar dropdown (Heading, Subscript / Superscript, Embed, List,
  Callout) is a submenu.

A check mark shows the formatting the cursor is in. A row that can't be
used right now is dimmed and says why, such as "switch to Editing to
insert" while Suggesting. In a read-only note, such as a revision
preview, the menu has **Copy** only. On macOS, **Paste** from this menu
works like <kbd>Cmd</kbd><kbd>V</kbd>.

**Anywhere else in the editor**, a right-click opens the system's menu:

- In the macOS desktop app, that menu (spelling suggestions, **Look Up**,
  **Writing Tools**) has a **Format** submenu with the same items, in
  place of the system's Font submenu.
- On the web, and in the desktop app on Windows and Linux, it's your
  browser's or system's usual menu.
- In an unlocked encrypted note, no menu opens.

**Outside the editor**, a right-click opens no system menu, except in
text fields. The app's own menus (on sidebar rows, tabs and breadcrumbs)
open as before. On the web this means the browser's menu, with items
such as "Open link in new tab", isn't there outside text fields.

## Outline, table of contents & page preview

Three ways to find your place in a long note, all driven by the editor's
current scroll position ("whichever section is at the top of the viewport
is active"):

- **Outline** (floating over the editor's right edge) shows one short dash
  per heading (levels 1–6), deeper levels shorter, with the current
  section's dash darker. Hover over it, or move keyboard focus to it, to
  open the list of headings; click one to jump the editor there. It's
  hidden when the note has fewer than two headings, in the phone layout
  (a window narrower than 700px) and for [encrypted notes](/guide/encryption/).
  Turn it off in [Settings → General → **Note outline**](/guide/settings/).
- **Table of contents** (right sidebar) lists every heading (levels 1–6,
  ignoring anything inside a code fence) in the note, indented by level;
  click one to jump to it.
- **Page preview** (collapsible column to the left of the editor) shows
  thumbnail cards for each "page": the note split wherever a bare `---`
  line appears (the same rule [presenting](/guide/slides/)
  uses for slide breaks). Click a thumbnail to jump there. Drag cards to
  reorder pages, or right-click one for **Move up / Move down / Delete
  page**. It's off by default: turn it on in [Settings → General →
  **Page previews**](/guide/settings/). Switched off, the column isn't
  shown at all, its collapse bar included.
