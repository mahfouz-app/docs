---
layout: guide
title: "The command palette"
description: "Press Mod+K to jump to a note, run a command or open a setting."
permalink: /guide/command-palette/
---

Press <kbd>Mod</kbd><kbd>K</kbd> (⌘K on macOS, Ctrl+K elsewhere) to open the command
palette. It also works while you're typing in a note. On desktop it's in
the menu bar too, as **Edit → Command Palette…**.

Type to match against:

- **Notes**: note titles in every vault. Each result shows the folders the
  note sits in, and its vault when you have more than one.
- **Commands**: the app's actions, such as New note, Rename or Go to tasks,
  and commands from your enabled plugins, each with its shortcut. Commands
  that act on a note only appear while a note is open.
- **Settings**: the Settings pages and the individual settings on them.
  Picking one opens Settings on that page.

The palette matches titles only. To search the text inside your notes, pick
the last row, **Search note contents for "…"**. It opens the
[search view](/guide/links/#search) with what you typed, and it's there for
every query, even when nothing else matches.

Before you type anything, the palette lists the notes you've opened since
you started the app, the most recent first. Right after starting it shows
the notes in your open tabs, and when there are none it suggests a few
commands instead.

| Key | What it does |
|---|---|
| <kbd>↑</kbd> / <kbd>↓</kbd> | Move through the results |
| <kbd>Enter</kbd> | Open the note in a new tab (or switch to its tab if it's already open), run the command or open the setting |
| <kbd>Mod</kbd><kbd>Enter</kbd> | Open the note in the current tab instead |
| <kbd>Esc</kbd> | Close the palette |

You can change the palette's key in **Settings → Shortcuts** (action
"Open the command palette", row `command_palette`). On the web, Ctrl+K on
Windows and Linux opens the palette rather than the browser's search box.
