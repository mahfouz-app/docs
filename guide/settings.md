---
layout: guide
title: "Settings"
description: "Preferences and per-vault settings."
permalink: /guide/settings/
---

Open **Settings** from the account menu (the account button at the bottom
of the left rail), with <kbd>Mod</kbd><kbd>,</kbd> (<kbd>Mod</kbd><kbd>;</kbd>
on the web), or on desktop from menu **Mahfouz → Settings…**. Settings apply
instantly and are stored in `.config/settings.md` (a plain Markdown file
you can hand-edit):

| Setting | Options | Default |
|---|---|---|
| Tab size | 2 or 4 spaces | 4 |
| Color mode | System / Light / Dark | System |
| Font | Serif / Sans-serif / Monospace | Serif |
| Line numbers | Shown / Hidden | Hidden |

A single note can be shown Light or Dark whatever the Color mode, from the
**Appearance** button in its [bottom bar](/guide/toolbar/#the-bottom-bar).
That choice is kept on this device only.

**Slash command menu** (Settings → General, on by default) turns the
[slash menu](/guide/slash-menu/) on or off. Unlike the settings above, it's
stored on this computer only, not in the vault. So is **Emoji suggestions
when typing :**, which turns the [`:` emoji suggestions](/guide/slash-menu/#emoji)
on or off.

**Note outline** (Settings → General, on by default) shows or hides the
[outline](/guide/editor/#outline-table-of-contents--page-preview) that floats
over the editor's right edge. **Page previews** (Settings → General, off by
default) shows or hides the [page preview](/guide/editor/#outline-table-of-contents--page-preview)
column to the left of the editor. Both are stored on this computer only.

Sidebar sort order (alphabetical vs. chronological) is also saved there,
toggled from the Sidebar header.

**First day of week** (Settings → General) is the day the calendars start
their weeks on: a database's [Calendar](/guide/databases/#calendar), the task
[date picker](/guide/tasks/#set-a-date), and **Pick date…** when you
[reschedule a reminder](/guide/tasks/#reminders). Like the slash menu, it's
stored on this computer only. **Automatic**, the default, follows your
system's region in the desktop app on macOS and Windows, and your language on
Linux and the web; the menu shows the day it picked. The desktop app reads
your system's setting when it starts, so a change there applies the next
time you open Mahfouz. Choose **Monday**, **Sunday** or **Saturday** to
override it. A Date attribute's field uses your system's or browser's own
date picker, which doesn't follow this setting.

Keyboard shortcuts are also stored in `.config/settings.md` (see [Keyboard shortcuts](/guide/shortcuts/)).
Edit the file directly to remap or disable one; blank a binding to
disable it.

Settings → AI → External agents connects AI apps such as Claude Code and
claude.ai to your vaults: see [External agents (MCP)](/guide/external-agents/).

Some settings aren't available on the web: see [What's only in the desktop
app](/guide/web/#whats-only-in-the-desktop-app).
