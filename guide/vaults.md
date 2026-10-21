---
layout: guide
title: "Vaults"
since: "0.2.0"
description: "Create, open and switch between vaults: the folders your notes live in."
permalink: /guide/vaults/
---

A **vault** is a folder on disk containing your notes, and (usually) a git
repository. Mahfouz doesn't create a vault for you on first launch: it asks
you to [choose one](#choosing-a-vault). An empty folder stays empty: Mahfouz
writes no starter note into it.

You can have multiple vaults open at once. Each appears as its own
collapsible section at the top of the Sidebar's Notes view, showing either
the connected repo's `owner/repo` name (with a cloud icon) or the local
folder name (with a computer icon) if it isn't connected to a remote yet.
The cloud shows the vault's sync state; click it to sync now (see
[The vault icon](/guide/git/#the-vault-icon)).
Click a vault section's gear/⋯ button to open **Vault Settings** for that
vault specifically (see [Git sync & remotes](/guide/git/#git-sync--remotes) and
[Git LFS](/guide/git/#git-lfs-for-large-media)), including:

- **Vault path**: shown with buttons to reveal it in Finder/Explorer, or
  **Move or rename…** it (type a new path, or pick a new parent folder;
  same-disk moves only).
- **Notes**: **New note prefix**, the text every new note's file name in
  this vault starts with (see [Notes & organization](/guide/notes/)).
  {% include since.html v="0.13.0" %}
- **Rebuild from vault**: re-reads every note from the files in the vault
  folder. Use this if the sidebar or search ever looks out of sync
  with what's actually in the folder.
- **Remove vault from Mahfouz**: removes it from the app only; nothing on
  disk is touched.

On the web, vaults open differently: see [Mahfouz on the web](/guide/web/).

## Choosing a vault

{% include since.html v="0.13.0" %} With no vault open (on first run, or
after you remove the last one), the window shows **Choose a vault** and
nothing else, under the Mahfouz emblem and the app's version, with two
groups:

- **Start new**
  - **On this computer**: a new folder of notes, with a git repository in it
    (see [New vault on this computer](#new-vault-on-this-computer)).
  - **On GitHub**: a new private repository on GitHub (see
    [New vault on GitHub](#new-vault-on-github)).
- **Open existing**
  - **Folder**: a folder of notes you already have, or an empty one.
  - **GitHub repository**: clone a repository you already keep notes in (see
    [Opening a GitHub repository](/guide/web-github/#opening-a-github-repository)).

What you see depends on where you run Mahfouz:

| | On this computer | On GitHub | Folder | GitHub repository |
|---|---|---|---|---|
| Desktop app | Yes | Yes | Yes | Yes {% include since.html v="0.13.0" %} |
| Web | No | Yes | Chrome, Edge and other Chromium browsers | Yes |

On the web, **Folder** needs a browser that can open folders on your
computer (see [Mahfouz on the web](/guide/web/)). A browser that can neither
open a folder nor keep a GitHub vault says so and links to the desktop app.

**Add vault…** in **Settings → Vaults** opens the same choices as a dialog.
On the desktop app, **File → New Vault…**
(<kbd>Mod</kbd><kbd>Shift</kbd><kbd>N</kbd>) opens it straight on **New vault
on this computer**, and **File → Open Vault…**
(<kbd>Mod</kbd><kbd>Shift</kbd><kbd>O</kbd>) skips it and goes straight to the
folder picker; on the web, <kbd>Mod</kbd><kbd>Alt</kbd><kbd>O</kbd> opens a
folder.

### Recent vaults

{% include since.html v="0.13.0" %} Vaults you remove from Mahfouz are
listed under **Recent**, on the left of **Choose a vault** and of **Add
vault…**, newest first (up to 10). The list is kept on this computer only,
not in any vault. A vault kept in the browser's storage on the web isn't
listed, since removing it deletes it.

Click a vault to open it again: Mahfouz asks you to pick its folder, starting
at the folder it was in on the desktop app. Right-click it, or click **⋯**,
for **Open…**, **Reveal in Finder** and **Copy path** (desktop app only), and
**Remove from Recent**, which forgets it without touching the folder.

## New vault on this computer

{% include since.html v="0.13.0" %} On the desktop app, **On this computer**
makes a vault in a new folder:

1. Type a name for the vault.
2. Click **Choose folder…** and pick where the vault's folder goes. It must
   be a new or empty folder: one that already holds files is refused and
   left untouched. To use notes you already have, choose **Open existing →
   Folder** instead.
3. Click **Create vault**.

If the folder is synced by iCloud Drive (including Desktop and Documents
when iCloud's **Desktop & Documents Folders** is on), Dropbox, OneDrive,
Google Drive or Box, Mahfouz warns you first. The sync service and git can
both change the same files and damage the vault's history, so a folder
outside them is safer; to keep a copy elsewhere, back the vault up to GitHub
instead. You can still create the vault there.

## Opening a GitHub repository on the desktop app

{% include since.html v="0.13.0" %} On the desktop app, **GitHub
repository** under **Open existing** clones a repository you already keep
notes in. On the web it's kept in the browser instead (see [Opening a GitHub
repository](/guide/web-github/#opening-a-github-repository)).

1. Sign in with GitHub and install the Mahfouz app on the repository, as for
   [New vault on GitHub](#new-vault-on-github).
2. Pick the repository from the list. Type in the filter to narrow it down;
   repositories already open in Mahfouz are listed first, under **Open in
   Mahfouz**, and picking one offers **Switch to it** instead of a second
   copy. Each account's repositories fold away with the arrow beside its
   name.
3. Check the folder under the list. Mahfouz clones the repository into a new
   folder named after it, such as `~/Documents/notes`, inside the folder it
   shows; it starts at the folder your last clone went into. Click **Change
   folder…** to pick another. If that folder already has one with the same
   name, Mahfouz says so, with **Choose another folder…** and **Reveal in
   Finder**: the clone always takes the repository's name, so it never
   renames it. A folder that's a vault, or inside one, is refused too.
4. Click **Clone**. The first time, Mahfouz asks you to confirm the folder.
   If the repository is public, it asks first, since everything you add to
   the vault becomes public once it syncs.

While it clones, Mahfouz shows how far it has got: checking access,
downloading (with how much has arrived) and unpacking. Close the dialog with
**×** to keep working: the clone carries on, and a notification says when
it's done, with **Open vault**.

The clone and every sync after it use this computer's own SSH key, not your
GitHub sign-in. Mahfouz checks that the key works before it clones; if it
doesn't, it says how to fix it, and **Check again** tries again. A clone that
fails says why (a dropped connection, a full disk), with git's own message
under **Details**, and leaves nothing behind.

## New vault on GitHub

{% include since.html v="0.13.0" %} **On GitHub** creates a private
repository and makes it a vault. It needs a GitHub sign-in with the Mahfouz
app installed on your own account (see [Signing in to
GitHub](/guide/github/), or [on the web](/guide/web-github/#signing-in-with-github)).
Mahfouz walks you through both if you haven't done them yet.

1. Name the repository. It's always private; Mahfouz never creates a public
   one.
2. On the desktop app, also click **Choose folder…** and pick the folder the
   vault lives in on this computer. It must be a new or empty folder: one
   that already holds files is refused and left untouched, so its files and
   history are never pushed. To back up notes you already have, open their
   folder with **Open existing → Folder** and connect it to GitHub from
   there. {% include since.html v="0.13.0" %} The first push uses this
   computer's SSH key, not your GitHub sign-in, so Mahfouz checks that it can
   push before it creates anything on GitHub. If the check fails, no
   repository is created: the vault stays on this computer, and Mahfouz says
   what to fix.
3. On the web, the vault is kept in the browser's storage, like a [cloned
   repository](/guide/web-github/#where-a-github-vault-lives).

If the repository was created but the first push failed, **Try again**
pushes to that same repository instead of creating another.

On the web, if the Mahfouz app was installed for selected repositories only
and can't reach the new repository yet, Mahfouz says so: click **Open
installation settings**, give the app access to it, then click **Try
again**.

## A new vault's first note

{% include since.html v="0.13.0" %} A vault you make with **On this
computer** or **On GitHub** opens on a first note, untitled, with the cursor
in its title. Nothing is saved until you type in it.

Under its title, a **Next steps** card lists what to try: type <kbd>/</kbd>
for headings, lists and tables, type <kbd>[</kbd><kbd>[</kbd> to link to
another note, **Import…** to bring notes in from Notion or a folder (desktop
app), and **Back up to GitHub…** to keep a private copy there (when the vault
isn't on GitHub yet). The card isn't part of the note. Close it with **×**
and it doesn't come back on this computer.

## Open Markdown files from Finder

{% include since.html v="0.14.0" %} The desktop app opens `.md` and
`.markdown` files. Double-click one in Finder or File Explorer, or choose
**Open With → Mahfouz**, and Mahfouz opens it:

- **A note in one of your vaults** opens as that note.
- **A file in a vault that isn't a note yet** opens with *This file is in
  ⟨vault⟩ but isn't a note yet.* Click **Make it a note** to add it to the
  vault.
- **Any other file** opens in a tab of its own, outside any vault.

### Files outside your vaults

A file outside your vaults opens as just that file. Your edits save
straight to it, with no history. It has no attributes, backlinks, comments,
publishing or sharing, and its `[[wikilinks]]` and `@mentions` don't lead
anywhere. A strip at the top offers two ways to bring it in:

- **Open folder as vault** opens the folder around the file as a vault: the
  root of the git repository it's in, or the file's own folder when it isn't
  in one. Mahfouz asks first. It won't open your home folder, Downloads,
  Desktop or Documents this way, unless that folder is a git repository.
- **Import into…** copies the file into a vault you pick, as a new note.
  The original file stays as it is.

These tabs don't reopen after you quit Mahfouz.

### Make Mahfouz the default Markdown app

- **macOS**: in **Settings → General → Default Markdown app**, click **Make
  Mahfouz the default**. macOS asks you to confirm; once you do, the setting
  reads **Mahfouz is the default**.
- **Windows**: right-click a Markdown file, choose **Open with → Choose
  another app**, pick Mahfouz and select **Always**.
- **Linux**: use your file manager's **Open With** (or the file's
  **Properties**), or run `xdg-mime default` with Mahfouz's `.desktop` file
  for `text/markdown`.
