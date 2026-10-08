---
layout: guide
title: "When sync fails"
description: "What each sync notice means, what its buttons do, and how to fix the problem."
permalink: /guide/when-sync-fails/
---

When a sync goes wrong, Mahfouz shows a notice in the [notification center](/guide/notifications/) and, for most problems, a pop-up. Your notes are always saved on this device, so a failed sync loses nothing. This page lists the notices, what they mean and what to do. For how syncing works, see [Git & sync](/guide/git/#git-sync--remotes).

## Buttons

- **Retry** syncs again. Use it after you've fixed the cause.
- **Open remote settings** opens the vault's settings where its remote is set.
- **Push this branch** creates the branch on the remote. It only runs when you click that button, never from a click on the notice itself.
- **Install git** (desktop only) installs Mahfouz's own copy of git, then syncs again.
- **Sign in** and **Sign in again** start the GitHub sign-in.

A click on the notice itself runs its first button.

## Show details and Copy details

Some notices have **Show details** (desktop only). It opens git's own message: the command that failed, its exit code and what it printed. Mahfouz removes credentials from it first. **Copy details** puts that text on your clipboard, which helps when you report a problem. Read it before you share it. The browser app has no git command line, so its notices have no details.

## Background and manual syncs

Mahfouz syncs on its own in the background. When you're offline or the remote doesn't respond, a background sync doesn't pop up. The notice waits in the notification center, and Mahfouz tries again later. **Sync now** is a sync you started, so it always shows its notice.

## Notices

### You're offline or the remote didn't answer

Your network is down or the server didn't reply. Mahfouz tries again automatically. Nothing to do unless it lasts.

### The remote isn't responding

The server returned an error. Mahfouz tries again automatically.

### Git couldn't sign in to the remote

The remote rejected your credentials, or none were available. Check the credentials git uses for this remote (ssh-agent, your keychain, the `gh` CLI), then **Retry**.

### Sync paused: signed out of GitHub, or GitHub sign-in expired

On the web, your GitHub sign-in ended. Syncing stops for every vault until you **Sign in** (or **Sign in again**). **Retry** syncs all the vaults it stopped. See [Signing in to GitHub](/guide/github/).

### The remote repository wasn't found

It may have been renamed, moved or deleted, or your account can't see it. Check the remote's address with **Open remote settings**, then **Retry**.

### The remote repository has moved

GitHub says it has a new address. Update the remote with **Open remote settings**.

### You don't have access to the remote repository

Your account can reach it but isn't allowed to do this. Ask the owner for write access.

### This vault has no remote

Add one with **Open remote settings**, then **Retry**.

### Your notes and the remote both have new changes

Both sides have new changes, and Mahfouz can't combine them yet. Retry after the other device's changes are in. On desktop you can also resolve it with git yourself. Mahfouz doesn't pick a side for you.

### The remote has no branch yet

For example, your vault is on `main` but the remote only has `master`. The notice lists the branches the remote does have. Mahfouz won't create a branch on its own. Either:

- **Push this branch** to create it on the remote, or
- **Open remote settings** and point the vault at the right remote.

### This push is too large for the remote

A file or the whole push is over the remote's size limit. On desktop, large files can be stored with Git LFS (see [Git LFS for large media](/guide/git/#git-lfs-for-large-media)). On the web, push from the desktop app.

### Couldn't pull: notes with uncommitted changes

A pull would overwrite notes you've changed but not yet committed. The notice names them. Its buttons:

- **Commit now** commits those changes.
- **Discard** throws those changes away.
- **Open note** opens the first of them.

Then sync again.

### Problems with the vault's folder or git

- **Another git process is using this vault**: wait a moment and **Retry**. If nothing else is running, a leftover lock file may be in the way.
- **The disk is full**: free up space, then **Retry**.
- **Mahfouz can't write to this vault's folder**: check the folder's permissions.
- **This vault's folder isn't a git repository**: its `.git` folder is missing or damaged.
- **Git doesn't know your name and email**: set `user.name` and `user.email` in git's config.
- **This vault uses Git LFS, which isn't installed**: install Git LFS or turn on the Git LFS plugin.
- **Git isn't installed**: **Install git** on desktop, or see [Git & sync](/guide/git/#git).

### Git stopped with an error

Mahfouz didn't recognise the problem. On desktop, **Show details** has git's own message.
