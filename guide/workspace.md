---
layout: guide
title: "Tabs, settings & notifications"
description: "Tabs, the status bar, settings, notifications and sending feedback."
permalink: /guide/workspace/
---

## Tabs

Notes open in a browser-style tab strip: click a tab to switch, click its
`×` (or middle-click) to close, right-click for a context menu.
`Cmd/Ctrl`+click (or middle-click) a Sidebar row to open it in a new tab
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

## Settings

**Settings…** (`Cmd/Ctrl+,`, or menu **Mahfouz → Settings…**) — applies
instantly and is stored in `.config/settings.md` (a plain Markdown file
you can hand-edit):

| Setting | Options | Default |
|---|---|---|
| Tab size | 2 or 4 spaces | 4 |
| Color mode | System / Light / Dark | System |
| Font | Serif / Monospace | Serif |
| Line numbers | Shown / Hidden | Hidden |

Sidebar sort order (alphabetical vs. chronological) is also a persisted
preference, toggled from the Sidebar header.

Keyboard shortcuts are also stored in `.config/settings.md` (see below) —
edit the file directly to remap or disable one; blank a binding to
disable it.

Some settings aren't available on the web: see [What's only in the desktop
app](/guide/web/#whats-only-in-the-desktop-app).

## Notifications

Everything Mahfouz has to tell you — exports, plugin installs and updates, errors saving or syncing — collects in the notification center. Open it with the bell button at the right end of the titlebar, next to the AI chat button.

- A dot on the bell means there are notifications you haven't dealt with; hover over the bell to see how many. A ring around it means something is running, and hovering shows what.
- The filter button in the center's header switches between **Unread**, **All** and **Archived** and narrows the list by category; a dot on it means you're not looking at everything unread. The double-check button marks everything read. Click a notification to mark it read, or archive it with ×.
- The pin button in the header keeps the center open as a column on the right, beside your notes; drag its edge to resize it. Pinned, the bell shows and hides the column, and clicking elsewhere or pressing Escape leaves it open. Click the pin again to have it open from the bell instead. The column stays pinned the next time you open Mahfouz.
- A finished PDF export waits in the center with **Open**, **Save…** and **Discard**.
- Errors, and things waiting on you, also pop up briefly in the corner. Closing a pop-up leaves the notification in the center.
- History is kept on this computer for 30 days. It isn't part of your vault.

### Sounds, system notifications and quiet time

Settings → Notifications controls how notifications interrupt you:

- **System notifications** appear only while Mahfouz is in the background, for errors and things waiting on you. They show a title only, never note names or paths.
- **Sounds** play a short tone for errors and things waiting on you. They're off by default.
- **Mute** a category to keep its notifications in the history without pop-ups, sounds or a badge. These settings are saved in `.config/settings.md`, so they follow the vault.

**Do not disturb**, the moon button in the notification center's header, silences everything for an hour, until tomorrow morning, or until you turn it off. It applies to this computer only.

### New versions of Mahfouz

When a new version of Mahfouz is released, a notification tells you which version is out and which one you have. **What's new** opens the release notes; **Download** opens the installer where one is available for your platform. Mahfouz doesn't install anything itself.

- Mahfouz checks at most once a day while it's open. **Mahfouz → Check for Updates…** checks right away and always tells you the result, including when you're up to date.
- If you installed Mahfouz with Homebrew, there's no Download button; the notification shows the command to run instead: `brew upgrade --cask mahfouz`.
- Archive the notification to skip that version. It comes back when a newer one is released.
- To stop the checks entirely, turn off **Automatically check for new versions** in Settings → Notifications. It applies to this computer only. Muting the **App updates** category keeps the checks but silences their notifications.

## Sending feedback

Click the speech-bubble button near the bottom of the left rail, or choose
**Help → Send Feedback…**, to report a bug, suggest an idea, or ask a
question. Pick a kind, give it a title and some details, and press
**Submit**.

Feedback becomes a **public** issue on
[mahfouz-app/docs](https://github.com/mahfouz-app/docs/issues), filed by the
Mahfouz feedback bot whether or not you're signed in to GitHub. Add a way to
reach you in the details if you'd like a reply. Once it's filed, the dialog
links to the new issue.

**Include diagnostics** (on by default) appends the app version, operating
system and CPU architecture, and nothing else. Nothing from your vault or
notes is ever sent. Expand **What's included** to see the exact lines, or
untick the box to leave them out.

On the web, **Send feedback** opens a new issue on GitHub instead: see
[What's only in the desktop app](/guide/web/#whats-only-in-the-desktop-app).
