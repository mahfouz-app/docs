---
layout: guide
title: "Sharing a note with people"
since: "0.16.0"
description: "Share one note with chosen GitHub accounts or a secret link, let them read, comment, suggest or edit it live, and stop sharing any time."
permalink: /guide/sharing/
---

Sharing lets other people work on one note with you, without giving them
your vault or your repository. They see only that note's text, and
everyone in it edits live, together. Their edits are saved to your
repository on GitHub, as commits by you.

Sharing is different from [publishing](/guide/publishing/): a published
page is public and read-only, while a share is for the people you choose,
and they can work on the note.

Sharing works in the desktop app and on the web. You need to be
[signed in to GitHub](/guide/github/), and the note's vault must be backed
up to a GitHub repository you can push to.

Sharing is being turned on account by account. If the note's bottom bar has
no **Share…** button, it isn't on for your account yet.

## Share a note

Click **Share…** (the two people) in the open note's
[bottom bar](/guide/toolbar/#the-bottom-bar). In the dialog:

- **People**: type a GitHub login, pick what they can do, and add them.
  They sign in to Mahfouz with that account to open the note.
- **Anyone with the link**: turn it on to make a secret link anyone can
  open, signed in or not. Pick what link holders can do, and when the link
  stops working: in 1, 7 or 30 days, or never. **Copy link** copies it. The
  link is shown only once; **Reset link** makes a new one and the old one
  stops working.

What each level lets people do:

| Level | They can |
|---|---|
| **Can read** | Read the note as it changes. |
| **Can comment** | Read it and add [comments](/guide/track-changes/#comments). |
| **Can suggest** | Comment and [suggest edits](/guide/track-changes/), which you accept or reject. |
| **Can edit** | Edit the text directly. |

The first time you share, GitHub asks you once to let Mahfouz save the
edits people make, even while the app is closed: choose **Continue on
GitHub**. Mahfouz writes only the shared note's file. You can take that
permission back by stopping sharing, or in GitHub's settings.

A shared note gets a `shared:` line in its frontmatter. The line names the
share and grants nothing: who it's shared with lives only on Mahfouz's
server. Sharing also stops the note's file name following its title, so
someone else's title edit never renames your file.

## What people see

Someone you shared with by name finds the note under **Shared with me** in
the sidebar, below the vaults (with no vault open, under **Shared with
you** in the vault chooser). It opens in a share tab: the note, who shared
it, what they can do, how its edits are saving, and who else is in it.

Someone with the link opens it on a page of its own on the web, with
nothing else of Mahfouz around it, or in the desktop app with **Open in
Mahfouz for desktop**. Before writing anything, a link holder who isn't
signed in is asked what to call them. Their comments and suggestions show
that name as a guest (`@Sam~guest`), remembered in that browser.

Everyone sees each other's cursors as they type. Recipients never see your
note's attributes, your other notes or your vault.

In a shared note, web images and blocks a plugin draws, such as diagrams, aren't
shown, for you either, because its text is partly other people's. Images
from your vault still show.

## How edits are saved

The share saves its edits to your repository a few seconds after people
stop typing, as a commit by you: `Shared: edits by @ada, @Sam~guest`, with
a `Co-authored-by` line for each signed-in editor. They reach your vault
with your next pull.

Your own edits reach the share once Mahfouz has pushed them: the share then
reads the note from GitHub, along with any images it links.

To edit together with everyone, choose **Open live** in the **Share…**
dialog. The note opens in a share tab, live. While that tab is open, the
note's own tab is read-only, so you type in one place: the share.
**Close the share tab** makes it editable again.

### Save conflicts

When the note changed on GitHub and in the share in the same place, the
share keeps editing but stops saving, and you get a notification. Choose
**Compare…** to see GitHub's version against the shared one, then **Keep
this version** (the share's) or **Keep GitHub's**. Keeping GitHub's
version asks first, since the share's unsaved edits go, for everyone in it.

## Change or stop sharing

Open **Share…** again to change what people can do, add or remove people,
or change the link. A change applies at once, even to someone who has the
note open. Removing someone closes their tab.

**Stop sharing** ends the share for everyone. What they wrote stays in your
note. If the last edits couldn't be saved, the dialog shows the note as the
share had it, to copy. Deleting the note, or moving it to another vault,
stops its share too.

## Notes that can't be shared

- An [encrypted](/guide/encryption/) note, or a note in a vault encrypted
  with git-crypt.
- A person note or a [People database](/guide/people/): contact details
  aren't shared.
- A [database](/guide/databases/): share one of its rows instead.
- A note kept on disk only, which isn't on GitHub.
- A note over 500,000 characters.
- A note whose repository's default branch is protected, since a share
  can't save to it.

To send someone a one-off copy of a note's text instead, use **Send a
copy…** in the bottom bar.
