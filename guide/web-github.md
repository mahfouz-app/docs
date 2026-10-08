---
layout: guide
title: "GitHub vaults on the web"
description: "Sign in with GitHub in the browser and open a repository as a vault."
permalink: /guide/web-github/
---

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

On first run (in the bar above the welcome page), or from Open Vault, click
**Open a GitHub repository…**:

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
desktop app instead. A single commit larger than 100 MB has to be pushed
from the desktop app.

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
Notes you moved out of a browser-stored vault are restored from that
vault's Trash, so once it's removed, the vault they came from can't bring
them back.
