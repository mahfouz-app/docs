---
layout: guide
title: "Mahfouz on the web"
description: "Use Mahfouz in a browser: supported browsers, opening a folder, and what's desktop-only."
permalink: /guide/web/
---

Mahfouz also runs in your browser, at **mahfouz.app**. It works on the
same vaults as the desktop app: a folder of Markdown notes in a git
repository. You can open a folder on your computer (Chromium browsers only),
or a repository from GitHub, which Mahfouz keeps in the browser and syncs
back. Mahfouz has no copy of your notes: a folder is read and written by the
browser directly, and a GitHub vault's sync passes through Mahfouz's server
on its way to GitHub without being stored.

## Supported browsers

| Browser | Version | Open local folders | GitHub vaults |
|---|---|---|---|
| Chrome, Edge and other Chromium browsers | 108 or later | Yes | Yes |
| Safari | 17 or later | No | 26 or later |
| Firefox | 114 or later | No | Yes |

Use one of these browsers at the version shown or later, over a secure
(https) connection. Any other browser shows **This browser can't run
Mahfouz** with a link to the desktop app (or, over plain http, **Mahfouz
needs a secure connection**).

Only Chromium browsers can open a folder on your computer. In Safari and
Firefox the bar above the [welcome page](/guide/vaults/#the-welcome-page)
says so and links here.

GitHub vaults are kept in the browser's own storage, which Safari supports
from version 26. In an older Safari, **Open a GitHub repository…** is
disabled and the bar says why.

## Opening a folder

On first run, click **Open or create a vault…** in the bar above the
welcome page and choose a folder. The
browser asks whether Mahfouz may edit the folder: choose **Edit files**.
Press <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>O</kbd> (<kbd>⌘</kbd><kbd>⌥</kbd><kbd>O</kbd> on a Mac) to open another folder later.

If the folder isn't a git repository yet, Mahfouz asks before creating one
(`git init`). A browser can't see the folders above the one you picked, so it
can't tell whether that folder already sits inside another repository, such
as a project you work on. If it does, pick a folder of its own instead:
otherwise the new repository takes your notes out of the enclosing one.

### Reconnect

The browser remembers the folder, but Chrome asks for permission again after
it restarts, unless you chose **Allow on every visit**. Until then Mahfouz
shows **Reconnect "&lt;folder&gt;"** in the notification bell. Click
**Reconnect** and allow access: Mahfouz checks the folder and picks up any
changes made meanwhile.

### One tab at a time

Mahfouz runs in one tab at a time. A second tab shows **Mahfouz is open in
another tab**: switch to the first one, or close it and reload.

If Mahfouz's data in the browser is ever damaged, it offers **Rebuild and
reload**. Your notes are safe: they live in your vaults, and Mahfouz reads
them again.

## What's only in the desktop app

Plugins (Mermaid, draw.io, presentations, PDF export), the AI agent, Export,
Git LFS, syncing a local folder with a remote (a GitHub vault syncs on the
web), merging diverged histories, Reveal in Finder, moving a vault, system
notifications and update checks. Settings say **Available in the desktop
app** where one would be. **Send feedback** opens a new issue on GitHub
instead of sending it from the app.
