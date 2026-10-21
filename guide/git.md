---
layout: guide
title: "Git & sync"
since: "0.2.0"
description: "How Mahfouz uses git, syncing with a remote, and Git LFS for large media."
permalink: /guide/git/
---

## Git

Mahfouz needs git 2.20 or newer. If your machine has one, Mahfouz uses it
and installs nothing. On a Mac, the stub at `/usr/bin/git` only counts once
the Command Line Tools are installed. The Linux `.deb` and `.rpm` packages
install git as a dependency, so on Linux the screen below mostly matters
for the AppImage.

When Mahfouz finds no usable git at startup, it shows a **Git is required**
screen instead of opening your vaults:

- **Install** downloads Mahfouz's own copy (about 25–70 MB depending on
  your platform). **Retry** repeats a failed download.
- Or install git yourself, using the command the screen shows for your
  system:
  - macOS: `xcode-select --install` (Apple's Command Line Tools)
  - Linux: `sudo apt install git` or `sudo dnf install git`
  - Windows: Git for Windows from git-scm.com

  On a platform where Mahfouz can't install its own copy, this is the only
  option.
- **Check again** finds a git you installed yourself, without restarting.

Mahfouz's own copy:

- **Where it lives**: with the app on this computer, never inside your vault.
- **Updates** come with app updates. When a release bumps the bundled git,
  Mahfouz installs it in the background and starts using it on the next
  launch, then removes the old copy. Mahfouz never uses a copy of its own
  git that is too old to be safe.
- **Sign-in**: on macOS and Windows the bundled git uses Git Credential
  Manager. Background syncs never pop up a sign-in window; **Sync now** may,
  so a sync you start can ask you to sign in. On Linux there's no bundled
  helper: configure your own (`git config --global credential.helper …`, or
  ssh-agent).

To see which git is in use, open **About Mahfouz**: it shows the git
version and whether it's the system's or Mahfouz's own.

## Git sync & remotes

Vault Settings → **Vault** section:

- **Connect a remote**: paste a `git@…`, `https://…`, or `ssh://…` URL.
  - If the remote is empty, your local content is pushed as the initial
    commit automatically.
  - If the remote already has content, you're asked to choose: **use
    remote** (hard-resets your local vault to match it)
    or **push local** (force-pushes your local content over it). Pick
    carefully: both directions are destructive to whichever side loses.
- **Sync now**: pulls, then pushes, immediately.
- Once connected, Mahfouz keeps syncing on its own:
  - It pushes about 60 seconds after each commit.
  - Every 5 minutes, when the app regains focus and when you come back
    online, it pulls, then pushes anything still waiting. A push that failed
    (offline, a sign-in problem) is retried this way, and at the next launch.
  - A vault whose remote repository isn't found stops syncing in the
    background until you fix it (see
    [When sync fails](/guide/when-sync-fails/#the-remote-repository-wasnt-found)). {% include since.html v="0.13.0" %}
  - When you close the window or quit, it saves, commits and pushes first.
    A quit the system starts (logging out, shutting down) doesn't wait;
    those commits go out at the next launch. {% include since.html v="0.12.0" %}
  - If that takes more than a moment, a dialog shows what it's waiting
    for. **Quit now** quits without waiting (anything not pushed goes out
    at the next launch), and **Don't quit** keeps Mahfouz open. {% include since.html v="0.13.0" %}
- **When both sides have new commits**: Mahfouz combines them in a "Merge
  remote changes" commit. That includes a note changed on both sides, when
  the two sides changed different attributes or different lines: for
  example, two people editing different cells of one database row, or
  adding values to the same multi-select cell. A quiet "Merged … from
  GitHub" entry in the [notification center](/guide/notifications/) lists
  those notes. If the same attribute or the same (or a neighbouring) line
  changed on both sides, sync stops, and you choose what to keep in the
  Merge tab (see [When sync fails](/guide/when-sync-fails/#this-note-changed-here-and-on-github)). {% include since.html v="0.12.0" %}
- **Authentication** is entirely your local git setup's problem: ssh-agent,
  the `gh` CLI, your OS keychain, whatever `git push`/`pull` from a
  terminal in that folder already uses. Mahfouz never stores or sees a token.
- If a sync fails, see [When sync fails](/guide/when-sync-fails/).
- To keep a vault's contents encrypted on GitHub, see
  [Encrypted vaults](/guide/encryption/).
- The icon in each vault's Sidebar header shows its current sync state
  (see [The vault icon](#the-vault-icon)).

On the web, GitHub vaults sync differently: see [Syncing](/guide/web-github/#syncing) under
[Mahfouz on the web](/guide/web/).

## Sync status {% include since.html v="0.12.0" %} {#sync-status}

Mahfouz shows how far your changes have travelled: saved on this device,
committed, or pushed to the remote.

### The vault icon

Each vault's header in the Sidebar starts with an icon. A vault connected to
a remote shows a cloud:

- **Cloud with a check**: synced. Everything is pushed.
- **Gray cloud with an up arrow**: changes are waiting to push.
- **Blue cloud with a spinning ring**: syncing (pushing or pulling).
- **Red cloud with "!"**: the last sync failed. Hover the icon for details,
  and use **Retry** on the sync notice (see
  [When sync fails](/guide/when-sync-fails/)).

A local-only vault, with no remote, shows a computer icon instead.

**Settings → Vaults** lists each vault's status: **Local only**,
**Connected**, or, after a failed sync, what failed, such as **Push failed**
or **Remote not found**. Hover the status for details. {% include since.html v="0.13.0" %}

Click the cloud to sync now. Hover it to see when the vault last pushed and
last pulled.

### The note mark

Each note shows a mark before its title, in the Sidebar and on its tab.
A note without a [page icon](/guide/notes/#page-icons) shows a cloud in the
same style:

- **Cloud with a check**: pushed.
- **Cloud with an up arrow**: committed, but not pushed yet.
- **Dashed cloud with a dot**: changes not committed yet.
- **Red cloud with "!"**: the push failed.
- **Red cloud with ×**: the note conflicts with the remote (see
  [When sync fails](/guide/when-sync-fails/#this-note-changed-here-and-on-github)).

A note with a page icon keeps its emoji and gets a small dot at the emoji's
top right instead:

- **Gray dot**: not committed.
- **Blue dot**: not pushed.
- **Amber dot**: the push failed.
- **Red dot**: conflict.
- **No dot**: pushed.

While a note's changes are being pushed, its mark briefly turns into the
blue syncing cloud. A failed push or a conflict pulses three times when it
first appears.

In a local-only vault there's nothing to push, so notes show only
uncommitted changes. A [disk-only note](/guide/history/#auto-commit-and-disk-only-notes)
keeps its own drive glyph.

### The save chip

The bottom bar's save icon shows the note's sync state as a cloud, and
pointing at it reads the state after **Saved**: **Saved · Not committed**, **Saved · Not pushed**, **Saved · Pushing…**,
**Saved · Pushed**, **Saved · Push failed** or **Saved · Conflict**.

## Git LFS for large media

If a vault will hold large media files, turn on Git LFS for it in Vault
Settings → **Vault**: it shows whether `git-lfs` is installed and
configured for this vault, and an **Enable Git LFS for media** button that
sets up Git LFS for this vault and adds the tracking rules to
`.gitattributes` for you. This is opt-in per vault, and only affects files
added *after* you enable it; existing committed media isn't migrated
retroactively.

`git-lfs` itself doesn't need to be installed separately: turn on the
**Git LFS** plugin in Settings → Plugins and Mahfouz downloads and
manages it for you (no Homebrew required; currently Macs only, Apple
Silicon or Intel). If you already have `git-lfs` on your system PATH (e.g. via
Homebrew), Mahfouz detects and uses that instead.
