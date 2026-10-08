---
layout: guide
title: "History & trash"
description: "Every change is a commit: browse history, restore notes, and choose what gets committed."
permalink: /guide/history/
---

Mahfouz keeps no separate history of its own — **history is git history.**

- **History** (the bottom of the sidebar's Details section — toolbar ⋯ →
  Revisions, `Cmd/Ctrl+Alt+R`, or click the save status) lists
  every commit that touched the current note (subject, relative time,
  short SHA). Click one to open that revision read-only in a new tab,
  with a banner offering **Restore** (writes a *new* commit restoring
  that content — history is always append-only, never rewritten).
- **Trash** (Sidebar, `Cmd/Ctrl+4`) is a flat, cross-vault list of every
  note deleted via git, newest first, each with a **Restore** button and a
  click-to-preview.
- Every note edit auto-commits ~30 seconds after your last keystroke in
  that note (message `Auto-save <timestamp>`), and any edits made outside
  Mahfouz (a text editor, another git client) are auto-committed as
  `External edits` as soon as Mahfouz notices them, so
  nothing you do to the vault folder is ever silently lost.

## Auto-commit and disk-only notes

By default every note auto-commits, as above. If you'd rather keep a
note's work-in-progress out of history, turn its **auto-commit** off.
The note is then **disk only**: it still saves to disk as you type, but
Mahfouz never commits it on its own, so it isn't pushed or shared until
you say so.

- **Turn it off or on** with the **Auto-commit** switch in the right-sidebar
  [Attributes panel](/guide/attributes/#attributes-panel), or right-click the note and pick
  **Turn off auto-commit** / **Turn on auto-commit**. The action **Toggle
  auto-commit for note** can be bound to a key in Settings → Shortcuts; it
  has no default key.
- **How to tell** — a disk-only note shows a drive glyph in the sidebar
  (filled while it has uncommitted changes), and the toolbar's save chip
  reads **Saved · not in history**.
- **Commit now / Discard changes** — when a disk-only note has uncommitted
  changes, the Attributes panel shows both buttons. Commit now records the
  note as a normal commit. Discard changes asks first, then returns the note
  to its last committed version (or deletes it if it was never committed).
  This can't be undone.
- **New child notes** created under a disk-only note start disk-only too.
- **Blocked pulls** — if someone else changes a disk-only note you've also
  edited, the pull would overwrite your uncommitted work, so it's blocked. A
  notification names the note(s) and offers **Commit now**, **Discard** and
  **Open note**. Pulling for the whole vault stays blocked until you resolve it.
- **Use remote (overwrites local)** (see [Git sync](/guide/git/#git-sync--remotes)) warns
  first and names any disk-only notes whose uncommitted edits it would
  destroy. Those edits aren't in history, so they can't be recovered.
- **Restoring a revision** of a disk-only note that has uncommitted changes
  asks first, since the restore replaces them. The restored version is
  committed.

Limits worth knowing:

- Deleting a disk-only note still commits the deletion, and restoring it
  from Trash brings back its **last committed version**, not the
  uncommitted edits.
- **Commit now** also commits any other changes waiting for the next
  auto-commit, in one commit named after the note. Other disk-only notes stay
  out.
- Attachments (in `files/`) that a disk-only note links to are still
  auto-committed, even while the note itself isn't.
- Moving the child notes of a disk-only parent can leave history
  inconsistent (the children committed in their new place, the parent not)
  until you commit the parent.
- The setting is stored **per note, on this computer only**: in the vault's
  local git folder, never committed or pushed. Collaborators and your other
  machines are unaffected and keep auto-committing that note. It survives
  removing and re-adding the vault and **Rebuild from vault**; a fresh clone
  of the vault starts with every note auto-committing.
