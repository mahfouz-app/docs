---
layout: guide
title: Mahfouz on the web
description: "Use Mahfouz in a browser with a local folder or a GitHub repository."
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

Mahfouz needs a secure (https) connection, browser file storage, Web Locks,
module workers, service workers and IndexedDB. A browser without one of them
shows **This browser can't run Mahfouz** with a link to the desktop app (or,
over plain http, **Mahfouz needs a secure connection**).

Opening a folder on your computer needs the File System Access API, which
only Chromium browsers have. In Safari and Firefox the first-run card says so
and links here.

GitHub vaults live in the browser's own storage, which Safari can write to
from version 26. In an older Safari, **Open a GitHub repository…** is
disabled and the card says why.

## Opening a folder

On first run, click **Open or create a vault…** and choose a folder. The
browser asks whether Mahfouz may edit the folder: choose **Edit files**.
Press `Ctrl+Alt+O` (`⌘⌥O` on a Mac) to open another folder later.

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

Mahfouz keeps a search index of your notes in the browser, and only one tab
can use it at once. A second tab shows **Mahfouz is open in another tab**:
switch to the first one, or close it and reload.

If the index is ever damaged, Mahfouz offers **Rebuild and reload**. Your
notes are safe: they live in your folders, and the index is rebuilt from them.

## Signing in with GitHub

GitHub vaults need a GitHub sign-in. (The desktop app signs in differently:
see [Signing in to GitHub](/guide/github/).) Click the account icon at
the bottom of the left rail, then **Sign in with GitHub**: Mahfouz sends you
to GitHub and back. Mahfouz's server keeps the authorization for this browser
for up to 30 days, then you sign in again (the notification bell says when it
has expired). It keeps only the authorization, your GitHub account's id and
profile, and timestamps: never your notes.

Signing in lets Mahfouz act as you on GitHub; it doesn't give it your
repositories. That is a second step, installing the Mahfouz app on GitHub:
choose **Only select repositories** and pick the ones you keep vaults in.
The account popover then offers **Manage repository access** to change the
selection later.

- **Sign out** — ends this browser's session only.
- **Sign out everywhere (including desktop)** — ends every browser session
  and revokes Mahfouz's GitHub authorization, which signs the desktop app out
  too. If Mahfouz can't confirm that every session ended and that GitHub
  revoked it, it says **Signed out of this browser only**: the desktop app
  and other browsers may still be signed in. Open **GitHub settings** from
  that notice and revoke Mahfouz to be sure.

## Opening a GitHub repository

On first run, or from Open Vault, click **Open a GitHub repository…**:

1. Sign in with GitHub and install the Mahfouz app on your repositories, as
   above. If the repository belongs to an organization and an owner has to
   approve the installation first, Mahfouz says so; click **Check again**
   once they have.
2. Pick the repository. Don't see it? **Manage repository access** adds it.
3. Mahfouz shows the repository's size (GitHub's estimate). Above 250 MB it
   warns that the clone may take a long time and fill that much of the
   browser's storage. Click **Clone** and keep the tab open until it ends: a
   clone can't be stopped part way, and a failed one leaves nothing behind.

Mahfouz downloads the repository's whole history. If it's already open in
this browser, the picker offers **Switch to it** instead of a second copy.

### Where a GitHub vault lives

The vault is kept in this browser, not in a folder you can see. The
repository on GitHub is the copy that outlives the browser: clearing the
site's data, or a browser that resets its storage, deletes the vault here
(Mahfouz says **Mahfouz lost "&lt;vault&gt;"**), and you clone it again.
Anything not yet pushed is gone with it, so let it sync before you clear data.

### Syncing

A GitHub vault syncs on its own: it pushes shortly after a commit and pulls
regularly and when you return to the tab. Syncing only fast-forwards: if
GitHub and the vault each have commits the other lacks, Mahfouz doesn't merge
them on the web, and the notification says so. Sync that vault from the
desktop app instead. A push over the 100 MB GitHub takes in one go is sent in
parts; a single commit larger than that has to be pushed from the desktop app.

- **Unfinished updates** — if the tab closes in the middle of a pull or
  reset, Mahfouz finishes it on the next load. If you've edited a file it
  would overwrite, it stops and names the files, with two ways out:
  **Discard my changes and finish**, or **Reset to GitHub**, which makes the
  vault match GitHub. Both ask first and lose the changes they name. Commits
  wait until it's settled.
- **Lost access** — if the Mahfouz app no longer reaches the repository (you
  removed it from the selection, or the repository is gone or renamed),
  Mahfouz says **Mahfouz lost access to &lt;repository&gt;**. **Manage
  repository access** opens GitHub's page for the app.
- **Signed out** — when your sign-in ends, every vault's sync pauses with one
  notice, **Sync paused: signed out of GitHub** (or **expired**). **Sign in
  again** resumes them; your changes stay in the vault meanwhile.

### Removing a GitHub vault

Removing a browser-stored vault (Settings → Vaults → Remove, or Close vault)
deletes it from this browser, unlike a folder vault, whose folder is left
alone. The question tells you how many commits GitHub doesn't have yet and
whether some changes aren't committed yet: those are lost. What's on GitHub
stays, and you can open it again from there. Sync first to keep your work.

## Commits on the web

Mahfouz commits your changes to the folder's repository as the desktop app
does: about 30 seconds after you stop typing, or right away with **Manual
save** (`Ctrl+S`, `⌘S` on a Mac). The commits are ordinary git commits: the
desktop app, a terminal or any git tool sees them.

Commits use the name and email in the repository's own configuration
(`.git/config`). The browser can't read your computer's global git settings
(`~/.gitconfig`), so in a repository without its own, web commits are
authored as **Mahfouz &lt;mahfouz@local&gt;** (as the desktop app's are in a
vault it created). To commit under your name, set it once in the repository;
the desktop app uses it too:

```sh
git config user.name "Your Name"
git config user.email "you@example.com"
```

### Read-only vaults

Some git settings change the bytes git stores, and the web version can't
apply them. A vault that uses one opens **read-only** on the web: you can
read and edit notes, and changes are saved to the folder, but they aren't
committed. Commit them from the desktop app. The notification names the
setting:

- a git filter, such as Git LFS or git-crypt (`filter=` in `.gitattributes`);
- line-ending conversion (`eol=crlf`, or `core.autocrlf` in the repository's
  config), or Windows line endings converted by a setting outside the folder;
- re-encoding (`working-tree-encoding`) or keyword expansion (`ident`);
- an index format the web doesn't read (sparse checkout, `git add -N`).

## What's only in the desktop app

Plugins (Mermaid, draw.io, presentations, PDF export), the AI agent, Export,
Git LFS, syncing a local folder with a remote (a GitHub vault syncs on the
web), merging diverged histories, Reveal in Finder, moving a vault, system
notifications and update checks. Settings say **Available in the desktop
app** where one would be. **Send feedback** opens a new issue on GitHub
instead of sending it from the app.

## Keyboard shortcuts on the web

The browser keeps some keys for itself (close tab, new window, switch tabs,
zoom, bookmarks, developer tools, reload), so those shortcuts move on the web.
Every other shortcut is the same as on desktop. `Mod` is ⌘ on a Mac and Ctrl
elsewhere; `Alt` is ⌥ on a Mac.

| Action | Desktop | Web |
|---|---|---|
| New note at the same level | `Mod+N` | `Mod+Alt+Enter` |
| Go to search | `Mod+5` | `Mod+Shift+F` |
| Close the active tab | `Mod+W` | `Mod+Alt+W` |
| Go to all notes | `Mod+1` | `Mod+Alt+A` |
| Go to bookmarks | `Mod+2` | `Mod+Alt+K` |
| Go to tags | `Mod+3` | `Mod+Alt+T` |
| Go to trash | `Mod+4` | `Mod+Alt+X` |
| Bookmark the active note | `Mod+D` | `Mod+Alt+S` |
| Duplicate the active note | `Mod+Shift+D` | `Mod+Alt+Shift+D` |
| Copy the note's name | `Mod+Shift+C` | `Mod+Alt+Shift+C` |
| Copy the note as a wikilink | `Mod+Shift+L` | `Mod+Alt+Shift+L` |
| Copy the note's ID | `Mod+Alt+I` | `Mod+Alt+Shift+I` |
| Delete the active note | `Mod+Shift+Backspace` | `Mod+Alt+Backspace` |
| Increase editor zoom | `Mod+=` | `Mod+Alt+=` |
| Decrease editor zoom | `Mod+-` | `Mod+Alt+-` |
| Previous tab | `Mod+[` | `Mod+Alt+[` |
| Next tab | `Mod+]` | `Mod+Alt+]` |
| Settings | `Mod+,` | `Mod+;` |
| Open Vault | `Mod+Shift+O` | `Mod+Alt+O` |
| Export the active note | `Mod+Shift+E` | (desktop only) |
| Reveal in Finder | `Mod+Shift+R` | (desktop only) |

`Mod+;` assumes a US-style keyboard layout. On a layout where ";" needs
Shift or another modifier, it can't be pressed: open Settings from the gear
in the left rail instead.

On a Mac, shortcuts with ⌥ go by the key you press, not the character ⌥
types with it, so `⌘⌥S` works although ⌥S types "ß".

Shortcuts you change in **Settings → Shortcuts** are saved in the vault
(`.config/settings.md`) and apply on both. A default you haven't changed
stays each platform's own default.
