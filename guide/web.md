---
layout: guide
title: "Mahfouz on the web"
since: "0.9.0"
description: "Use Mahfouz in a browser: supported browsers, opening a folder, and what's desktop-only."
permalink: /guide/web/
---

Mahfouz also runs in your browser, at **web.mahfouz.app**. It works on the
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
Firefox, [Choose a vault](/guide/vaults/#choosing-a-vault) leaves out
**Folder** {% include since.html v="0.13.0" %}.

GitHub vaults are kept in the browser's own storage, which Safari supports
from version 26. An older Safari can open neither a folder nor a GitHub
vault, so Choose a vault says so and links to the desktop app
{% include since.html v="0.13.0" %}. [Plugins](/guide/plugins/#plugins-on-the-web)
need the same storage, so an older Safari can't install them either.

## Opening a folder

On first run, click **Folder** under **Open existing** in [Choose a
vault](/guide/vaults/#choosing-a-vault) {% include since.html v="0.13.0" %}
and choose a folder. The
browser asks whether Mahfouz may edit the folder: choose **Edit files**.
Press <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>O</kbd> (<kbd>⌥</kbd><kbd>⌘</kbd><kbd>O</kbd> on a Mac) to open another folder later.

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

## On a phone {% include since.html v="0.12.0" %} {#on-a-phone}

When the window is narrower than 700 pixels, as on a phone, Mahfouz
switches to a layout made for it:

- The note takes the whole width. A bar at the bottom of the screen holds
  a **Search** button on the left and **Tasks** and **People** on the
  right. {% include since.html v="0.14.0" %}
- Tapping **Search** opens the [command palette](/guide/command-palette/)
  at the bottom of the screen, just above the keyboard, with a **Cancel**
  button beside its field. {% include since.html v="0.14.0" %}
- **Tasks** opens the Tasks tab, and **People** opens the
  [People view](/guide/people/#the-people-view) over the whole screen. {% include since.html v="0.14.0" %}
- To see your notes, choose **Notes** in the **⋯** menu, or **Go to all
  notes** in the palette: the sidebar opens over the whole screen. Opening
  a note closes it, and so does the close button in its top corner. {% include since.html v="0.14.0" %}
- The **⋯** button at the top right holds **Notes** {% include since.html v="0.14.0" %}, **Settings**,
  **Account**, **Trash**, **User guide** and **Send feedback**.
- The AI chat opens over the whole screen. The right sidebar isn't
  available at this width.

The sidebar always starts closed at this width, whatever you chose on a
wider screen. The desktop app uses the same layout when you make its
window that narrow.

## What's only in the desktop app

The Slidev presentations and PDF export plugins, the AI agent, Export,
Git LFS (and its plugin), syncing a local folder with a remote (a GitHub vault syncs on the
web), merging diverged histories, Reveal in Finder, moving a vault, system
notifications, update checks and the [Finder preview](/guide/quick-look/). Settings say **Available in the desktop
app** where one would be.

Other plugins, such as Mermaid and Draw.io, work on the web: see [Plugins
on the web](/guide/plugins/#plugins-on-the-web).
