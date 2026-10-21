---
layout: guide
title: "GitHub vaults on the web"
since: "0.9.0"
description: "Sign in with GitHub in the browser and open a repository as a vault."
permalink: /guide/web-github/
---

## Signing in with GitHub

GitHub vaults need a GitHub sign-in. (The desktop app signs in differently:
see [Signing in to GitHub](/guide/github/).) Click the account button at
the bottom of the left rail, then **Sign in with GitHub**: Mahfouz sends you
to GitHub and back. Mahfouz's server keeps the authorization for this browser
for up to 30 days, then you sign in again (the notification bell says when it
has expired). It keeps only the authorization, your GitHub account's id and
profile, and timestamps: never your notes.

Signing in lets Mahfouz act as you on GitHub; it doesn't give it your
repositories. That is a second step, installing the Mahfouz app on GitHub:
choose **Only select repositories** and pick the ones you keep vaults in.
The account menu then offers **Manage repository access** to change the
selection later.

The account menu has two ways to sign out:

- **Sign out**: ends this browser's session only.
- **Sign out everywhere**: ends every browser session and revokes
  Mahfouz's GitHub authorization, which signs the desktop app out too and
  disconnects [external agents](/guide/external-agents/) connected through
  the web. Mahfouz asks first. If it can't confirm that every session ended and
  that GitHub revoked it, it says **Signed out of this browser only**: the
  desktop app and other browsers may still be signed in. Click **Open
  GitHub settings** on that notice and revoke Mahfouz to be sure.

## Opening a GitHub repository

In [Choose a vault](/guide/vaults/#choosing-a-vault), on first run or from
**Add vault…** in Settings → Vaults, click **GitHub repository** under
**Open existing** {% include since.html v="0.13.0" %}. To start a new vault
on GitHub instead, see [New vault on GitHub](/guide/vaults/#new-vault-on-github).

1. Sign in with GitHub and install the Mahfouz app on your repositories, as
   above. If the repository belongs to an organization and an owner has to
   approve the installation first, Mahfouz says so; click **Check again**
   once they have.
2. Pick the repository. Type in the filter to narrow the list, and fold an
   account's repositories away with the arrow beside its name. Don't see it?
   **Manage repository access** adds it. Repositories already open in this
   browser are listed first, under **Open in Mahfouz**: picking one offers
   **Switch to it** instead of a second copy. A repository encrypted with
   git-crypt is dimmed and can't be picked: the web can't decrypt it (see
   [Encrypted vaults](/guide/encryption/)).
3. The size beside each repository is GitHub's estimate. Above 250 MB,
   Mahfouz warns that the clone may take a long time and fill that much of
   the browser's storage. Click **Clone** and keep the tab open until it
   ends: a clone can't be stopped part way, and a failed one says why and
   leaves nothing behind. To keep working meanwhile, close the dialog with
   **×**; a notification says when the clone is done, with **Open vault**.
   {% include since.html v="0.13.0" %}

Mahfouz downloads the repository's whole history.

If the repository is **public**, Mahfouz asks before it clones. Once the
vault syncs, everything you add to it is readable by anyone on the internet:
every note, plus `.config/bookmarks.md` (the notes you've bookmarked),
`.config/fields.md` (your fields) and the People database (the people you've
added, with their contact details). Deleting them later doesn't help, since
the git history keeps them. Click **Open as vault** to go ahead, or
**Cancel** to go back with nothing cloned. The **Edit** link on a published
page asks the same question. {% include since.html v="0.13.0" %}

### Where a GitHub vault lives

The vault is kept in this browser, not in a folder you can see. The
repository on GitHub is the copy that outlives the browser: clearing the
site's data, or a browser that resets its storage, deletes the vault here
(Mahfouz says **Mahfouz lost "&lt;vault&gt;"**), and you clone it again.
Anything not yet pushed is gone with it, so let it sync before you clear data.

### Syncing

A GitHub vault syncs on its own: it pushes shortly after a commit, and pulls
and then pushes anything still waiting regularly, when you return to the tab
and when you come back online. If GitHub and the vault each have commits the
other lacks, Mahfouz combines them as the desktop app does, including a note
changed on both sides when the changes don't overlap. If the same part of a
note changed on both sides, sync stops, and you choose what to keep in the
Merge tab (see [When sync fails](/guide/when-sync-fails/#this-note-changed-here-and-on-github)).
The browser can't wait while a tab closes, so commits not yet pushed go out
the next time you open the vault. A single commit larger than 100 MB has to
be pushed from the desktop app.

- **Unfinished updates**: if the tab closes in the middle of a pull or
  reset, Mahfouz finishes it on the next load. If you've edited a file it
  would overwrite, it stops and names the files, with two ways out:
  **Discard my changes and finish**, or **Reset to GitHub**, which makes the
  vault match GitHub. Both ask first and lose the changes they name. Commits
  wait until it's settled.
- **Lost access**: if the Mahfouz app no longer reaches the repository (you
  removed it from the selection, or the repository is gone or renamed),
  Mahfouz says **Mahfouz lost access to &lt;repository&gt;**. **Manage
  repository access** opens GitHub's page for the app.
- **Signed out**: when your sign-in ends, every vault's sync pauses with one
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
