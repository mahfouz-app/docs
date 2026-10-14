---
layout: guide
title: "Preview notes in Finder"
description: "Select a Markdown file in Finder and press Space to see it rendered, with Mahfouz's Quick Look preview on macOS."
permalink: /guide/quick-look/
---

Mahfouz for desktop on macOS 12 or later comes with a Quick Look preview.
Select a `.md` file in Finder and press <kbd>Space</kbd> to see it rendered
as a note. Finder's preview pane, column view and Spotlight use the same
preview.

It works for any Markdown file, inside a vault or not, and doesn't open
the app.

## What the preview shows

- The rendered note, following macOS's light or dark appearance.
- The note's [attributes](/guide/attributes/#attributes-panel) that show
  in the document: those set to always show, and those set to show when
  they're not empty.
- [Track changes](/guide/track-changes/) as the original text, with a
  count of the pending suggestions.
- [Math](/guide/markdown/#math), highlighted
  [code blocks](/guide/markdown/#code-blocks),
  [callouts](/guide/markdown/#callouts) and the
  [table of contents](/guide/markdown/#table-of-contents).

Some things it doesn't show:

- **Images** show as a placeholder with the file name.
- **Diagrams** and **database views** show as placeholders.
- **Links** aren't clickable.
- **Task dates and assignees** appear as written, not as chips.
- **Encrypted notes** show a message instead of their contents.
- **Finder icons** don't show the note's contents: there are no
  thumbnails.
- **Large files**: a file over 512 KB shows its first 512 KB.

## Setting it up

Move Mahfouz to your **Applications** folder and open it once. macOS
finds the preview after that.

If macOS says it can't check Mahfouz or can't open it, approve it once in
**System Settings → Privacy & Security → Open Anyway**. The preview needs
that approval too.

### When another app's preview is used

Another app with its own Markdown preview, such as Obsidian, can take over
`.md` files. To use Mahfouz's, turn off the other app's preview in the
Quick Look list:

- **macOS 15 and later**: System Settings → General → Login Items &
  Extensions → Quick Look.
- **macOS 13 and 14**: System Settings → Privacy & Security → Extensions →
  Quick Look.
- **macOS 12**: System Preferences → Extensions → Quick Look.

### The Open with button

The **Open with …** button at the top of the preview names your default
app for `.md` files, not the app drawing the preview. To change it, select
a `.md` file in Finder, choose **File → Get Info**, pick an app under
**Open with**, then click **Change All**.

## If the preview doesn't appear

Run this in Terminal, then try again:

```sh
qlmanage -r
```

If it still doesn't appear, log out of macOS and back in.
