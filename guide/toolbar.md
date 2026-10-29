---
layout: guide
title: "The formatting toolbar"
since: "0.4.0"
description: "Every button on the formatting toolbar, its More menu and the bottom bar."
permalink: /guide/toolbar/
---

The toolbar above the editor groups its buttons, with a separator between
groups. On a phone it shows only while you edit a note, as one row just
above the keyboard that you swipe sideways (see [Reading and editing a
note](/guide/web/#editing-on-a-phone)). {% include since.html v="0.17.0" %} Left to right:

- **History**: **Undo**, **Redo**
- **Style**: the **Heading** dropdown: Normal text / Heading 1 / Heading 2 /
  Heading 3 / Heading 4 / Heading 5 / Heading 6 (4 to 6 {% include since.html v="0.13.0" %})
- **Text**: **Bold**, **Italic**, **Underline**, **Strikethrough**, the
  **Subscript / Superscript** dropdown, **Highlight**, the **Code** dropdown
  and **Remove formatting** (see [Remove formatting](#remove-formatting)).
  **Code** holds **Inline code** and **Code block**, which inserts a
  [code block](/guide/markdown/#code-blocks), puts the selected lines in
  one, or, inside a block, removes its backticks. The **Code** button shows
  pressed while the cursor is in inline code or a code block.
  {% include since.html v="0.13.0" %}
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

Table, Code block and Embed aren't available while
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
  **Copy ›** (**Name**, **Wikilink**, **ID**, and **[Permalink](/guide/permalinks/)** {% include since.html v="0.16.0" %}), **Reveal in Finder**
  (**Reveal in File Explorer** on Windows, **Open Containing Folder** on Linux),
  **Revisions** (opens the note's history in the Details section), and **Delete** (danger). Each
  item shows its keyboard shortcut.

## The bottom bar {% include since.html v="0.12.0" %} {#the-bottom-bar}

The bar under the open note shows where the note stands on the left and
how you're viewing it on the right. Apart from the word count and the zoom
level, every control is an icon: point at one to see what it says or does.
On a phone the bar doesn't show: its controls are in the note's **⋯**
menu instead (see [Reading and editing a
note](/guide/web/#editing-on-a-phone)). {% include since.html v="0.17.0" %} A mode
that's on (Suggesting, a published page, a Light or Dark appearance, a
zoom other than 100%) is tinted. Its menus open upward.

The bar, like the formatting toolbar, is one stop for <kbd>Tab</kbd>:
<kbd>←</kbd> and <kbd>→</kbd> move between its controls, <kbd>Home</kbd>
and <kbd>End</kbd> go to the ends, and <kbd>Esc</kbd> goes back to the
note. <kbd>F6</kbd> reaches either bar from the note (see [Writing from the
keyboard](/guide/keyboard-writing/#the-toolbars-and-the-outline)). {% include since.html v="0.20.0" %}

On the left:

- **Word count**: how many words the note has, such as **1,284 words**.
  While text is selected, it reads **212 of 1,284 words**. Point at it to
  see the number of characters (not counting spaces) and the reading time,
  at 200 words a minute. Only the text you'd read counts: Markdown markup,
  code blocks, HTML, URLs, the target of a wikilink (the part before `|`),
  pending [suggested insertions](/guide/track-changes/) and comments don't.
  Inline code, text suggested for deletion and the text a comment is
  anchored to do count
- **Save status**: an icon for whether the note has been saved and where
  its changes are. A clock while it saves; a cloud once it's saved, marked
  for **Not committed**, **Not pushed**, **Pushing…**, **Pushed**, **Push
  failed** or **Conflict** (red for the last two); a tick for a note with
  no remote; a floppy disk for a [disk-only](/guide/history/) note; a red
  **!** when a save fails. Point at it for the words, such as **Saved 2m
  ago · Not pushed** (see [The save chip](/guide/git/#the-save-chip)).
  Click it to open the note's **Status** card {% include since.html v="0.15.0" %}:
  the same words with a line on what they mean, the note's counts, such as
  **1,284 words · 6,912 characters · 7 min read** {% include since.html v="0.20.0" %},
  **Commit…** while the note
  has uncommitted changes (it opens [Commit notes](/guide/history/#commit-notes)
  with the note checked), the note's **Auto-commit** switch (see
  [Auto-commit and disk-only notes](/guide/history/#auto-commit-and-disk-only-notes)),
  and who created and last edited it, and when. **Open in sidebar** shows the
  [Details](/guide/attributes/#note-pills--the-right-sidebar) section, with
  the note's path and history
- **Publish** (a globe): publishes the note to the web. Once it's
  published, the globe is tinted and opens a menu of the page's actions: **Update published page**,
  **Copy public link**, **Open published page**, **QR code**, **Publish
  child notes…**, **Page settings…** and **Unpublish**. A dot shows while
  the page is behind the note (see [Publishing](/guide/publishing/))
- **Share…** (two people): shares the note with chosen GitHub accounts or
  a secret link, so they can read, comment on, suggest edits to or edit it
  live with you (see [Sharing a note with people](/guide/sharing/)). It
  shows only where sharing is on for your account {% include since.html v="0.16.0" %}
- **Share** (a box with an up arrow): opens the system share sheet to send
  the note to another app, such as Mail or Messages. It sends the note's
  text as Markdown, without its attributes or a database's view settings.
  Pending [suggestions](/guide/track-changes/) go as the original text
  (text proposed for deletion stays, insertions don't), and comments are
  left out. A published note's page link goes too; it opens the page as
  last published, so update the page first if it's out of date. Share is
  in the macOS app and in browsers that can share: Safari; Chrome and Edge
  on macOS, Windows and ChromeOS; mobile browsers. An encrypted note can't
  be shared: it has no Share button, and the command palette refuses it {% include since.html v="0.12.0" %}
  The File menu has no Share item: use the button, the command palette or
  a key you set for Share in Settings → Shortcuts {% include since.html v="0.14.0" %}

On the right:

- **Track changes** (a pencil while Editing, a tinted pencil with a plus
  while Suggesting): switches between making changes and suggesting them,
  and reviews suggestions. It shows how many suggestions the note has (see
  [Track changes](/guide/track-changes/))
- **Comment** (a speech bubble with a plus): comments on the selected text, or opens the comment
  under the cursor (see [Comments](/guide/track-changes/#comments))
- **Source / Preview** (an eye in Preview, code brackets in Source): shows
  the mode the note is in; click it to pick Preview, Source or
  Vim {% include since.html v="0.20.0" %} (see
  [The editor](/guide/editor/)). <kbd>Mod</kbd><kbd>Shift</kbd><kbd>P</kbd>
  (<kbd>Mod</kbd><kbd>Alt</kbd><kbd>P</kbd> on the web) switches between
  Preview and Source {% include since.html v="0.20.0" %}
- **Appearance** (a half circle, a sun or a moon, tinted while it's Light
  or Dark): shows this note in
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
- **Zoom** (the percentage, such as **100%**, tinted when it isn't 100%):
  point at it, click it or tab to it, and it opens into a slider in the
  bar. Drag the slider or
  use the arrow keys to step through the levels from 50% to 200%, or use
  **−** and **+**. Double-click the percentage to go back to 100%.
  <kbd>Escape</kbd>, moving the pointer away or clicking elsewhere closes it

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
