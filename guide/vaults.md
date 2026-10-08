---
layout: guide
title: "Vaults"
description: "Create, open and switch between vaults: the folders your notes live in."
permalink: /guide/vaults/
---

A **vault** is a folder on disk containing your notes, and (usually) a git
repository. Mahfouz doesn't create a vault for you on first launch — use
**File → Open Vault…** (`Cmd/Ctrl+O`) to point it at an existing folder or
an empty one you want to turn into a vault. An empty folder stays empty:
Mahfouz writes no starter note into it.

You can have multiple vaults open at once. Each appears as its own
collapsible section at the top of the Sidebar's Notes view, showing either
the connected repo's `owner/repo` name (with a cloud icon) or the local
folder name (with a computer icon) if it isn't connected to a remote yet.
Click a vault section's gear/⋯ button to open **Vault Settings** for that
vault specifically (see [Git sync & remotes](/guide/git/#git-sync--remotes) and
[Git LFS](/guide/git/#git-lfs-for-large-media)), including:

- **Vault path** — shown with buttons to reveal it in Finder/Explorer, or
  **Move or rename…** it (type a new path, or pick a new parent folder;
  same-disk moves only).
- **Rebuild from vault** — re-reads every note from the files in the vault
  folder. Use this if the sidebar or search ever looks out of sync
  with what's actually in the folder.
- **Remove vault from Mahfouz** — removes it from the app only; nothing on
  disk is touched.

On the web, vaults open differently: see [Mahfouz on the web](/guide/web/).

## The welcome page

Until you open a vault, Mahfouz shows a welcome page: a note that tours
the main features, with a bar above it holding **Open or create a vault…**
(and, on the web, **Open a GitHub repository…**). The welcome page is a
sandbox: you can type in it, tick its checkboxes and try the formatting
toolbar, but nothing on it is saved. Reloading resets it, and opening a
vault replaces it.
