---
layout: guide
title: "The command palette"
since: "0.12.0"
description: "Press Mod+K to go to a note by its title or contents, run a command or open a setting."
permalink: /guide/command-palette/
---

Press <kbd>Mod</kbd><kbd>K</kbd> (⌘K on macOS, Ctrl+K elsewhere) to open the command
palette. It also works while you're typing in a note. On desktop it's in
the menu bar too, as **Edit → Command Palette…**.
On a phone, the palette is the [Search page](/guide/web/#search-on-a-phone):
**Search** in Home's navigation bar, or <kbd>Mod</kbd><kbd>K</kbd> on a
keyboard, opens it. {% include since.html v="0.17.0" %}

Type to match against:

- **Notes**: note titles in every vault, then the text inside your notes. {% include since.html v="0.14.0" %}
  Each result shows the folders the note sits in, and its vault when you
  have more than one. The words you typed are highlighted in the title,
  and a note found by its text shows a line of it around the match. {% include since.html v="0.14.0" %}
- **Commands**: the app's actions, such as New note, Rename or Go to tasks,
  and commands from your enabled plugins, each with its shortcut. Commands
  that act on a note only appear while a note is open.
- **Settings**: the Settings pages and the individual settings on them.
  Picking one opens Settings on that page.

All three kinds are listed together, a few of each. To see one kind only,
pick **Notes**, **Commands** or **Settings** in the row under the search
field, or press <kbd>Alt</kbd><kbd>1</kbd> to <kbd>Alt</kbd><kbd>4</kbd>
(⌥1 to ⌥4 on macOS); **All** goes back to the mixed list. Notes alone shows
up to 30 matches, and Commands or Settings alone shows every match. Before
you type anything, Commands and Settings list everything of their kind. {% include since.html v="0.13.0" %}

Notes found by their text come after the notes whose titles match, once
you pause typing, so the title matches stay where they are. A note whose
title matches is listed once. Some rows are always kept for text matches,
so many matching titles never hide them. The text search reads your
notes as last saved, and it understands the
[Search tab's operators](/guide/links/#search), such as `tag:` and `in:`. {% include since.html v="0.14.0" %}

For case-sensitive or whole-word matching, regular expressions or
replacing text, pick the last row, **Search all notes for “…”**, which
shows whenever you've typed something (in **All** and **Notes**). It
closes the palette and opens the [Search tab](/guide/links/#search) with
what you typed. {% include since.html v="0.14.0" %}

You can also press the **Go to search** key while the palette is open. It closes the palette and opens the
[Search tab](/guide/links/#search) with what you typed. The palette's
footer names the key, and so does the list when nothing matches in **Commands** or **Settings**. If you
unbind **Go to search**, the palette doesn't show it. {% include since.html v="0.13.0" %}

Before you type anything, the palette lists your bookmarked notes, in the
order the sidebar's Bookmarks view shows them (up to 10; pick **Notes** to
see them all). Then come the notes you've opened since you started the app,
the most recent first, leaving out the ones already listed as bookmarks.
Right after starting, those are the notes in your open tabs. A few
suggested commands come last. {% include since.html v="0.13.0" %}

| Key | What it does |
|---|---|
| <kbd>↑</kbd> / <kbd>↓</kbd> | Move through the results |
| <kbd>Enter</kbd> | Open the note in a new tab (or switch to its tab if it's already open), run the command or open the setting |
| <kbd>Mod</kbd><kbd>Enter</kbd> | Open the note in the current tab instead |
| <kbd>Alt</kbd><kbd>1</kbd> to <kbd>Alt</kbd><kbd>4</kbd> | Show all kinds, or only notes, commands or settings |
| The **Go to search** key | Close the palette and search note contents for what you typed |
| <kbd>Esc</kbd> | Close the palette |

You can change the palette's key in **Settings → Shortcuts** (action
"Open the command palette", row `command_palette`). On the web, Ctrl+K on
Windows and Linux opens the palette rather than the browser's search box.
