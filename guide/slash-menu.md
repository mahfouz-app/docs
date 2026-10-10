---
layout: guide
title: "The slash menu"
description: "Type / to insert headings, lists, tables, callouts, links, tasks, comments, diagrams and fields."
permalink: /guide/slash-menu/
---

Type `/` at the start of a line, or after a space, to open the slash menu.
Keep typing to filter it: `/ta` finds **Table**, `/h2` finds **Heading 2**.
Use the arrow keys to move through the list, <kbd>Enter</kbd> to run the
highlighted command, and <kbd>Esc</kbd> to close the menu. Running a
command removes the `/` and what you typed after it.

The menu doesn't open inside words or paths, so `and/or`, `/files/photo.png`
and links are typed as usual. If what you typed doesn't start any command's
name, <kbd>Enter</kbd> starts a new line instead, so `/usr` followed by
<kbd>Enter</kbd> stays as text.

## What's in the menu

| Group | Commands |
|---|---|
| Text | Heading 1–3, bulleted list, numbered list, checklist, quote |
| Insert | Table (3 × 3), callout (pick note, tip, important, warning or caution next), link, link to note, image or file, task with due date, tag |
| Review | Comment on the current line |
| Plugins | A block for each enabled diagram plugin, such as [Mermaid or draw.io](/guide/plugins/) |
| Fields | Each of your [fields](/guide/fields/), such as `!today` |

Some commands depend on where you are:

- **Task with due date** and **Comment** need text on the line. The comment
  is anchored on the whole line.
- **Table** and diagram blocks aren't available while you're
  [suggesting](/guide/track-changes/). They're shown dimmed, with the reason.
- **Image or file** and diagram blocks need an open note.

Inline formatting such as bold or italic isn't in the menu. Use its
[keyboard shortcut](/guide/shortcuts/) or the [toolbar](/guide/toolbar/).

## Turning it off

Turn off **Slash command menu** in Settings → General. This setting is
stored on this computer only, not in the vault, so it doesn't change the
menu for your collaborators.
