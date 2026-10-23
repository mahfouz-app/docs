---
layout: guide
title: "History & trash"
since: "0.2.0"
description: "Every change is a commit: browse history, restore notes, and choose what gets committed."
permalink: /guide/history/
---

Mahfouz keeps no separate history of its own: **history is git history.**

- **History** (the bottom of the sidebar's Details section; toolbar ⋯ →
  Revisions, <kbd>Cmd/Ctrl</kbd><kbd>Alt</kbd><kbd>R</kbd>, or **Open in sidebar** on the save status's card) lists
  every commit that touched the current note (subject, relative time,
  short SHA). Click one to open that revision read-only in a new tab,
  with a banner offering **Restore** (writes a *new* commit restoring
  that content; history is always append-only, never rewritten).
  Auto-saves fold into one **Edited · N saves** row per stretch of
  editing: consecutive auto-saves by the same person, no more than 30
  minutes apart. Click the row to list its saves, then click a save to
  open it. A lone auto-save shows as **Edited**. Named commits (yours,
  the agent's, renames) always keep their own row. {% include since.html v="0.12.0" %}
- **Trash** (the account menu's **Trash**, or <kbd>Mod</kbd><kbd>Alt</kbd><kbd>X</kbd> {% include since.html v="0.14.0" %}) is a flat, cross-vault list of every
  note deleted via git, newest first, each with a **Restore** button and a
  click-to-preview.
- Every note edit auto-commits within about 30 seconds of your last
  keystroke, as `Auto-save: “Meeting notes”`. Any edits made outside
  Mahfouz (a text editor, another git client) are auto-committed as
  `External edits: “Reading list”` as soon as Mahfouz notices them, so
  nothing you do to the vault folder is ever silently lost. Saving with
  <kbd>Cmd/Ctrl</kbd><kbd>S</kbd> commits at once, as
  `Manual save: “Meeting notes”`. Each message names up to three of the
  changed notes, then "and N more". When a commit touches several files,
  its description lists them all. Note titles show up in the vault's git
  history, which everyone with access to the repository can read.

## Commit notes {% include since.html v="0.12.0" %} {#commit-notes}

To choose what goes into a commit yourself, open **Commit notes…**:
<kbd>Cmd/Ctrl</kbd><kbd>Alt</kbd><kbd>G</kbd> (on the web too), the
[command palette](/guide/command-palette/), the vault header's right-click
menu, File → Commit Notes… on desktop, or **Commit…** in the right-sidebar
[Attributes panel](/guide/attributes/#attributes-panel) of a note with
uncommitted changes (which opens the dialog with that note checked). The
bottom bar's save status card has the same **Commit…** {% include since.html v="0.15.0" %}.

- The dialog lists every note in the vault with uncommitted changes, with
  its path. New and deleted notes carry a **new** or **deleted** badge.
- Each note but a deleted one has its **Auto-commit** switch {% include since.html v="0.15.0" %},
  off for a disk-only note (below). Turning it off or on there is the same
  as anywhere else, and doesn't check or uncheck the note.
- Check the notes to commit (**Select all** checks every one), then edit
  the message if you like. It's generated from your pick (`Commit: <title>`
  for one note, `Commit <N> notes` for several) until you change it.
- **Commit N notes** commits exactly those notes, plus the images they link
  to, in one commit. Nothing else goes in.
- Auto-commit waits while the dialog is open. Other changes commit as usual
  once you close it, and the dialog says how many there are.

## Auto-commit and disk-only notes

By default every note auto-commits, as above. If you'd rather keep a
note's work-in-progress out of history, turn its **auto-commit** off.
The note is then **disk only**: it still saves to disk as you type, but
Mahfouz never commits it on its own, so it isn't pushed or shared until
you say so.

- **Turn it off or on** with the **Auto-commit** switch in the right-sidebar
  [Attributes panel](/guide/attributes/#attributes-panel), on the bottom bar's
  save status card or in [Commit notes](#commit-notes) {% include since.html v="0.15.0" %},
  or right-click the note and pick
  **Turn off auto-commit** / **Turn on auto-commit**. The action **Toggle
  auto-commit for note** can be bound to a key in Settings → Shortcuts; it
  has no default key.
- **How to tell**: a disk-only note shows a drive glyph in the sidebar
  (filled while it has uncommitted changes), and the bottom bar's save icon
  is a floppy disk that reads **Saved · not in history** when you point at it.
- **Commit… / Discard changes**: when a disk-only note has uncommitted
  changes, the Attributes panel shows both buttons. **Commit…** opens
  [Commit notes](#commit-notes) with the note checked; the commit is a
  normal one. Discard changes asks first, then returns the note
  to its last committed version (or deletes it if it was never committed).
  This can't be undone.
- **New child notes** created under a disk-only note start disk-only too.
- **Blocked pulls**: if someone else changes a disk-only note you've also
  edited, the pull would overwrite your uncommitted work, so it's blocked. A
  notification names the note(s) and offers **Commit…** (Commit notes, with
  those notes checked), **Discard** and **Open note**. Pulling for the whole vault stays blocked until you resolve it.
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
