---
layout: guide
title: "Notifications"
description: "The notification center, sounds, quiet time and update notices."
permalink: /guide/notifications/
---

Everything Mahfouz has to tell you — exports, plugin installs and updates, errors saving or syncing, [task reminders](/guide/tasks/#reminders) — collects in the notification center. Open it with the bell button at the right end of the titlebar, next to the AI chat button. Proposals from [external agents](/guide/external-agents/) have their own plug button beside it.

- A dot on the bell means there are notifications you haven't dealt with; hover over the bell to see how many. A ring around it means something is running, and hovering shows what.
- The filter button in the center's header switches between **Unread**, **All** and **Archived** and narrows the list by category; a dot on it means you're not looking at everything unread. The double-check button marks everything read. Click a notification to mark it read, or archive it with ×.
- The pin button in the header keeps the center open as a column on the right, beside your notes; drag its edge to resize it. Pinned, the bell shows and hides the column, and clicking elsewhere or pressing Escape leaves it open. Click the pin again to have it open from the bell instead. The column stays pinned the next time you open Mahfouz.
- A finished PDF export waits in the center with **Open**, **Save…** and **Discard**.
- Errors, and things waiting on you, also pop up briefly in the corner. Closing a pop-up leaves the notification in the center.
- History is kept on this computer for 30 days. It isn't part of your vault.

## Sounds, system notifications and quiet time

Settings → Notifications controls how notifications interrupt you:

- **System notifications** appear only while Mahfouz is in the background, for errors and things waiting on you. They show a title only, never note names or paths.
- **Sounds** play a short tone for errors and things waiting on you. They're off by default.
- **Mute** a category to keep its notifications in the history without pop-ups, sounds or a badge. These settings are saved in `.config/settings.md`, so they follow the vault. The categories are Exports, Plugins, Vault, Sync, Editor, Publishing, App updates and Tasks. Muting **Tasks** turns that vault's task reminders off entirely.

**Do not disturb**, the moon button in the notification center's header, silences everything for an hour, until tomorrow morning, or until you turn it off. It applies to this computer only.

## New versions of Mahfouz

When a new version of Mahfouz is released, a notification tells you which version is out and which one you have. **What's new** opens the release notes; **Download** opens the installer where one is available for your platform. Mahfouz doesn't install anything itself.

- Mahfouz checks at most once a day while it's open. **Mahfouz → Check for Updates…** checks right away and always tells you the result, including when you're up to date.
- If you installed Mahfouz with Homebrew, there's no Download button; the notification shows the command to run instead: `brew upgrade --cask mahfouz`.
- Archive the notification to skip that version. It comes back when a newer one is released.
- To stop the checks entirely, turn off **Automatically check for new versions** in Settings → Notifications. It applies to this computer only. Muting the **App updates** category keeps the checks but silences their notifications.
