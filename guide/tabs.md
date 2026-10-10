---
layout: guide
title: "Tabs & status bar"
description: "Working with tabs, and what the status bar shows."
permalink: /guide/tabs/
---

## Tabs

Notes open in a browser-style tab strip: click a tab to switch, click its
`×` (or middle-click) to close, right-click for a context menu.
<kbd>Cmd/Ctrl</kbd>+click (or middle-click) a Sidebar row to open it in a new tab
without switching away from your current one. History revisions and
Present-as-tab both open as their own read-only/embedded tabs alongside
your regular notes.

## Status bar

The footer, left to right:

- **Save state** — Idle / Editing… / Saving… / Saved / "Save failed: …"
- **Commit state** — Repo clean / a live "Committing in Ns" countdown /
  Committing… / "Committed Xm ago" / "Commit failed: …"
- An optional transient message (e.g. "Attaching file.png…")
- Right-aligned: the active vault's **sync pill** — "Local only" if no
  remote is connected, or "Synced Xm ago" / "Pushing…" / "Pulling…" /
  "Sync error: …" if it is (hover to see the remote URL).
