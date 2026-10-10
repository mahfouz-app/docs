---
layout: guide
title: "Settings"
description: "Preferences and per-vault settings."
permalink: /guide/settings/
---

**Settings…** (<kbd>Cmd/Ctrl</kbd><kbd>,</kbd>, or menu **Mahfouz → Settings…**) — applies
instantly and is stored in `.config/settings.md` (a plain Markdown file
you can hand-edit):

| Setting | Options | Default |
|---|---|---|
| Tab size | 2 or 4 spaces | 4 |
| Color mode | System / Light / Dark | System |
| Font | Serif / Monospace | Serif |
| Line numbers | Shown / Hidden | Hidden |

**Slash command menu** (Settings → General, on by default) turns the
[slash menu](/guide/slash-menu/) on or off. Unlike the settings above, it's
stored on this computer only, not in the vault. So is **Emoji suggestions
when typing :**, which turns the [`:` emoji suggestions](/guide/slash-menu/#emoji)
on or off.

Sidebar sort order (alphabetical vs. chronological) is also saved there,
toggled from the Sidebar header.

Keyboard shortcuts are also stored in `.config/settings.md` (see [Keyboard shortcuts](/guide/shortcuts/)) —
edit the file directly to remap or disable one; blank a binding to
disable it.

Settings → AI → External agents connects AI apps such as Claude Code and
claude.ai to your vaults: see [External agents (MCP)](/guide/external-agents/).

Some settings aren't available on the web: see [What's only in the desktop
app](/guide/web/#whats-only-in-the-desktop-app).
