---
layout: guide
title: "When sync fails"
since: "0.12.0"
description: "What each sync notice means, what its buttons do, and how to fix the problem."
permalink: /guide/when-sync-fails/
---

When a sync goes wrong, Mahfouz shows a notice in the [notification center](/guide/notifications/) and, for most problems, a pop-up. Your notes are always saved on this device, so a failed sync loses nothing. This page lists the notices, what they mean and what to do. For how syncing works, see [Git & sync](/guide/git/#git-sync--remotes).

## Buttons

- **Retry** syncs again. Use it after you've fixed the cause.
- **Open merge** opens the vault's Merge tab, where you choose what to keep for each change that couldn't be combined. A click on that notice opens it too.
- **Keep both** keeps your version of each file that changed on both sides, saves the remote's version beside it, then syncs.
- **Open remote settings** opens the vault's settings on the **Source** tab, where its remote is set.
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

Until you do, Mahfouz stops syncing the vault in the background: it doesn't pull or push again until you **Retry**, use **Sync now**, connect another remote, or restart the app. Your commits wait on this device. The vault shows **Remote not found**, and connecting a remote that doesn't exist shows this notice rather than **Connected**. {% include since.html v="0.13.0" %}

### The remote repository has moved

GitHub says it has a new address. Update the remote with **Open remote settings**.

### You don't have access to the remote repository

Your account can reach it but isn't allowed to do this. Ask the owner for write access.

### This vault has no remote

Add one with **Open remote settings**, then **Retry**.

### N changes need your choice {#this-note-changed-here-and-on-github}

The same note (or notes) changed on this device and on the remote since they last synced, and the changes overlap, so Mahfouz can't combine them on its own. It combines changes to different notes, and changes to different attributes or lines of one note, without asking. It stops when both sides changed the same attribute, the same or neighbouring lines, or a database's views; when one side changed a note's publish settings and the other changed the note at all; and for a settings file, a file that isn't text, a file deleted on one side, or a file on one side where the other side has a folder of the same name. Pushes are paused until you choose. The notice's buttons:

- **Open merge** opens the vault's **Merge tab**.
- **Keep both** keeps your version of each file and saves the remote's version as a separate note, "&lt;title&gt; (remote copy)", next to yours, then syncs. A changed file that isn't a note gets its copy as "&lt;name&gt; (remote copy)". It isn't offered when a settings file is among the changes.
- **Retry** syncs again, for when you've settled it another way (on desktop, with git).

#### The Merge tab {% include since.html v="0.12.0" %} {#the-merge-tab}

The tab lists what couldn't be combined, grouped as **Notes**, **Settings** and **Files**. Each row says why, and expands to show the difference: an attribute's value before and on each side, the overlapping sections side by side, or a file's changed lines. The first row still to choose starts expanded.

- **A note**: **Mine** or **GitHub's** settles only the parts that overlap; everything else from both sides is still combined. **Keep both** saves GitHub's version as a separate note, as on the notice.
  - Inside the expanded row, each overlapping part can be chosen on its own: an attribute, the publishing settings (as one group), or a section, with **Mine** or **GitHub's**. A section can also take **Both**: your lines, then GitHub's, with the lines they share kept once; a **Result** pane shows the outcome. To combine them differently, finish, then edit the note.
  - **Both** isn't offered for a section that holds a database block, a comment thread or a suggestion.
  - A row whose parts are chosen differently shows **Mixed**, and "N of M parts chosen" until every part is chosen. Choosing **Mine** or **GitHub's** for the row resets every part.
  - A note with a database block changed differently on both sides is chosen as a whole: **Mine** or **GitHub's** settles all its parts together.
  - If your choices for a note can't be combined into a readable note, **Finish merge** writes nothing, keeps your choices, and asks you to choose differently.
- **A note that can't be combined part by part**: **Use my whole note** or **Use GitHub's whole note** keeps that note as one side has it, after you confirm.
- **A note or file deleted on one side**: **Keep it** or **Delete it…** when GitHub deleted it (deleting asks first, and names any child notes GitHub also deleted); **Restore GitHub's version** or **Keep it deleted** when you deleted it.
- **A settings file**: **Keep mine** or **Use GitHub's**.
- **A file here and a folder on GitHub (or the reverse) with the same name**: this tab can't settle it. Rename yours, or rename it on GitHub, then **Retry**. When that's the only thing left, the notice reads "A file and a folder are both named …" and doesn't offer **Keep both**. A note GitHub moved into a folder of the same name can show the ordinary notice first; choosing to keep yours then brings up this one.
- **Another file changed on both sides**: **Mine** or **GitHub's** keeps that file as one side has it; **Keep both** saves GitHub's version beside it when the file is text.
- **Take all mine…** and **Take all GitHub's…** choose for every row still open that isn't a delete or a whole-note choice, after you confirm a list of what's discarded. They never decide deletes or whole-note rows.
- **Finish merge** checks every file again, then syncs with your choices and pushes. If something changed since you chose, it says which and writes nothing, so you can look again. **Postpone** closes the tab; your choices stay until the merge is finished or you quit Mahfouz (or reload the page, on the web).
- **On a phone**, these actions are in the bottom bar: **Take all** opens a menu with **Take all mine…** and **Take all GitHub's…**, then **Postpone**, and **Finish merge** is the round button at the end. Each row's choices sit under its name. {% include since.html v="0.19.0" %}

While a note is waiting on a choice, the editor shows "This note has a merge waiting in the Merge tab." with **Open merge**. You can keep editing; if you do, you choose that note again.

The notice and the tab say "GitHub" whichever remote the vault uses. Whatever you discard stays in the vault's history.

### Your notes and the remote both have new changes

The remote rejected a push because it has commits this device doesn't. The next sync brings them in, combining changes to different notes, then sends yours: nothing to do. The same notice for a pull that names no notes means the two histories share no commits at all. On desktop, resolve that with git.

### The remote has no branch yet

For example, your vault is on `main` but the remote only has `master`. The notice lists the branches the remote does have. Mahfouz won't create a branch on its own. Either:

- **Push this branch** to create it on the remote, or
- **Open remote settings** and point the vault at the right remote.

### This push is too large for the remote

A file or the whole push is over the remote's size limit. On desktop, large files can be stored with Git LFS (see [Git LFS for large media](/guide/git/#git-lfs-for-large-media)). On the web, push from the desktop app.

### Couldn't pull: notes with uncommitted changes

A pull would overwrite notes you've changed but not yet committed. The notice names them. Its buttons:

- **Commit…** opens [Commit notes](/guide/history/#commit-notes) with those notes checked.
- **Discard** throws those changes away.
- **Open note** opens the first of them.

Then sync again.

### Edits to “&lt;title&gt;” are waiting

The note changed outside Mahfouz (a pull, another app, another device) while you were editing it, and the two versions can't be combined on their own. Your edits are kept on this device until you choose which version to keep. **Open note** opens it, where you choose.

If you quit Mahfouz (or reload the page, on the web) before choosing, your edits are still kept: this notice offers them back the next time you open Mahfouz.

Removing a vault discards the edits waiting in it. The removal question says how many notes have them.

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
