---
layout: guide
title: "Notes & organization"
description: "Create notes, nest them in a tree, and organize them with folders and bookmarks."
permalink: /guide/notes/
---

Every note is a single Markdown file at the vault root, named after its
title: a note titled *Meeting notes* is `meeting_notes.md`. A note with no
title yet is `untitled.md`, and when two notes in the same place would get
the same name, one of them gets a short random suffix. The moment a note
gets its first child it becomes a folder of the same name holding its own
file (`meeting_notes/meeting_notes.md`) and its children, nesting the same
way. Once a note has a folder it keeps it.

The file name follows the title as you edit it, until you rename the note
in the Sidebar: from then on it keeps the name you gave it. You never need
these paths day to day — the Sidebar presents them as a normal expandable
tree. Notes from older versions may have names that include their id; they
pick up a title-based name the next time their title changes. Vaults
created before this layout are offered a one-time migration on open;
declining keeps the older one-folder-per-note shape, which still works.

- **New note**: `Cmd/Ctrl+N` creates a sibling of whatever's selected;
  `Cmd/Ctrl+Shift+N` creates a child of it; `Cmd/Ctrl+Alt+N` creates a note
  at the parent level. Each vault section also has a `+` button in the
  Sidebar for "new note here."
- **Title**: there's no separate title field — a note's title is always
  the first non-empty line of its body (with a leading `#` stripped if
  present). Rename a note by editing its first line.
- **Reordering / nesting**: drag a note in the Sidebar to reorder it or
  drop it onto another note to make it a child.
- **Folders**: a folder doesn't have to belong to a note. Right-click a
  plain folder in the Sidebar for **New note**, **New folder**, **Rename
  folder** (edit the name in place: `Enter` saves, `Esc` cancels),
  **Reveal in Finder**, and **Delete folder**.
- **Breadcrumb**: the bar above the editor shows where the open note
  lives: the vault, then every folder it's nested in. Click a folder that
  belongs to a note to open that note; click a plain folder to show it in
  the Sidebar.
- **Sidebar menu**: right-click empty space in the Sidebar for **New
  note** and **New folder** (in the active vault), **New vault…**, **Open
  vault…**, and the grouping, sort and filename-display options.
- **Reveal in Finder** is called **Reveal in File Explorer** on Windows
  and **Open Containing Folder** on Linux.
- **Bookmarks**: click the ribbon icon on a Sidebar row, or use the
  toolbar's ⋯ menu → Bookmark, to pin a note. `Cmd/Ctrl+2` jumps to the
  Bookmarks view (a flat list across all vaults).
- **Unimported files**: if you drop a plain `.md` file into the vault
  folder outside Mahfouz (no `id:` in its frontmatter), it shows up right
  away in the Sidebar as a clickable "pending" row, in the folder (or under
  the note) it was added to. Mahfouz doesn't touch the file until you edit
  it there: the first edit imports it — Mahfouz adds the id it needs and
  leaves everything else alone.
- **Edits from other apps**: Mahfouz watches the vault folder. When another
  app changes the note you have open, the editor updates in place within a
  second, keeping your cursor where it was (`Cmd/Ctrl+Z` undoes the
  reload). If you were typing at the same moment, a banner offers to
  reload or resolve the conflict instead, so your unsaved typing is never
  overwritten.
- **Status dots**: each Sidebar row shows a small dot indicating whether
  the note has uncommitted changes, is synced to a remote, or is local-only. A note with auto-commit off also shows a drive glyph
  (see [Auto-commit and disk-only notes](/guide/history/#auto-commit-and-disk-only-notes)).
- **Sort order**: toggle alphabetical vs. chronological (by last-updated)
  ordering from the Sidebar header in Trash/Bookmarks views, or globally
  via Settings.
