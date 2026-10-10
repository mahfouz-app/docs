---
layout: guide
title: "Git & sync"
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

- **Where it lives** — with the app on this computer, never inside your vault.
- **Updates** come with app updates. When a release bumps the bundled git,
  Mahfouz installs it in the background and starts using it on the next
  launch, then removes the old copy. Mahfouz never uses a copy of its own
  git that is too old to be safe.
- **Sign-in** — on macOS and Windows the bundled git uses Git Credential
  Manager. Background syncs never pop up a sign-in window; **Sync now** may,
  so a sync you start can ask you to sign in. On Linux there's no bundled
  helper: configure your own (`git config --global credential.helper …`, or
  ssh-agent).

To see which git is in use, open **About Mahfouz**: it shows the git
version and whether it's the system's or Mahfouz's own.

## Git sync & remotes

Vault Settings → **Vault** section:

- **Connect a remote** — paste a `git@…`, `https://…`, or `ssh://…` URL.
  - If the remote is empty, your local content is pushed as the initial
    commit automatically.
  - If the remote already has content, you're asked to choose: **use
    remote** (hard-resets your local vault to match it)
    or **push local** (force-pushes your local content over it). Pick
    carefully — both directions are destructive to whichever side loses.
- **Sync now** — pulls, then pushes, immediately.
- Once connected, Mahfouz keeps syncing on its own:
  - It pushes about 60 seconds after each commit.
  - Every 5 minutes, when the app regains focus and when you come back
    online, it pulls, then pushes anything still waiting. A push that failed
    (offline, a sign-in problem) is retried this way, and at the next launch.
  - When you close the window or quit, it saves, commits and pushes first,
    waiting a few seconds at most. A quit the system starts (logging out,
    shutting down) doesn't wait; those commits go out at the next launch.
- **When both sides have new commits** — if this device and the remote
  changed *different* notes, Mahfouz combines them in a "Merge remote
  changes" commit. It never combines two versions of the same note: if a
  note changed on both sides, sync stops and names it, with **Keep both**
  (see [When sync fails](/guide/when-sync-fails/#this-note-changed-here-and-on-github)).
- **Authentication** is entirely your local git setup's problem — ssh-agent,
  the `gh` CLI, your OS keychain, whatever `git push`/`pull` from a
  terminal in that folder already uses. Mahfouz never stores or sees a token.
- If a sync fails, see [When sync fails](/guide/when-sync-fails/).
- The [status bar](/guide/tabs/#status-bar)'s right-hand pill always shows the active
  vault's current sync state.

On the web, GitHub vaults sync differently: see [Syncing](/guide/web-github/#syncing) under
[Mahfouz on the web](/guide/web/).

## Git LFS for large media

If a vault will hold large media files, turn on Git LFS for it in Vault
Settings → **Vault**: it shows whether `git-lfs` is installed and
configured for this vault, and an **Enable Git LFS for media** button that
sets up Git LFS for this vault and adds the tracking rules to
`.gitattributes` for you. This is opt-in per vault, and only affects files
added *after* you enable it — existing committed media isn't migrated
retroactively.

`git-lfs` itself doesn't need to be installed separately: turn on the
**Git LFS** plugin in Preferences → Plugins and Mahfouz downloads and
manages it for you (no Homebrew required — currently Macs only, Apple
Silicon or Intel). If you already have `git-lfs` on your system PATH (e.g. via
Homebrew), Mahfouz detects and uses that instead.
