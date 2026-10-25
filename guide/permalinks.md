---
layout: guide
title: "Permalinks"
since: "0.16.0"
description: "Copy a permanent link to a note, paste it into a pull request or a chat, and open it on any device that has the note."
permalink: /guide/permalinks/
---

## Copy a note's permalink

A permalink is a link to one note that keeps working when the note is renamed,
moved to another folder or moved to another vault. Paste it into a pull
request, an issue or a chat, so the people you work with can open the note.

- In the note's **⋯** menu (or its right-click menu in the sidebar), choose
  **Copy › Permalink**.
- Or run **Copy permalink** from the [command palette](/guide/command-palette/).
  It has no key of its own; you can give it one in
  [Settings → Shortcuts](/guide/shortcuts/).

The link looks like this:

```
https://l.mahfouz.app/a0k3v901a16f4f8bef70c2b797192393aef97a
```

It's made from the note's own ID and its vault's GitHub repository, on your
device. Nothing is stored or registered anywhere, so copying works offline.

- A note in a vault with no GitHub remote gets a **local link**. It opens
  only on devices that already have that vault, and the toast after copying
  says so.
- A note whose ID predates Mahfouz's current IDs (an older vault, or an ID
  written by hand) has no permalink: **Permalink** is greyed out, with the
  reason as its hint.

## Open a permalink

Click a permalink and it opens in Mahfouz on the web. Mahfouz looks for
the note in the vaults on that device:

- **The note is here**: it opens. A note that was moved to another vault
  still opens: it keeps its ID.
- **It isn't here yet**: Mahfouz pulls your vaults from GitHub once
  ("Checking your vaults for updates…") and looks again. That's how a note a
  teammate just pushed, and linked from their pull request, reaches you.
- **It was deleted**: the dialog says when and from which vault, and offers
  **Restore**.
- **You don't have its vault**: if your GitHub account can reach the
  repository it's in, the dialog offers to **Clone** it, then opens the note.
  Signed out, it asks you to sign in first, to check your repositories.
- **Otherwise** it says "This note isn't in a vault you can open". Ask for
  access to the vault it's in, then open the link again.

A permalink gives no one new access. The note opens only for someone whose
device already holds its vault, or whose GitHub account can clone its
repository. Restore and Clone always wait for your click.

### On the web and on desktop

- **On the web**, if Mahfouz is already open in another tab, the link opens
  in that tab, and the new one says "Opened in your other Mahfouz tab".
- When the browser doesn't have the note, the dialog offers **Open in
  desktop app**. The desktop app looks in its own vaults the same way.

## For agents

[External](/guide/external-agents/) and [online](/guide/online-agents/)
agents get the permalink with the note: `read_note` answers with a
`permalink`, and so does `create_note` once the note is created. Search and
list results don't carry one.

## What a permalink reveals

A permalink names no vault, title or text, but two things can be read from it:

- **A short fingerprint of its repository.** It's what lets Mahfouz offer the
  right repository to clone. Someone who guesses the repository's name can
  check the guess against it, and links into the same repository start the
  same way. Keep that in mind before pasting links to a private repository's
  notes somewhere public.
- **When the note was created.** A note's ID starts with its creation time.

A note that exists only on a pull request's branch can't be found from its
link until that branch is merged into the branch your vault follows.
