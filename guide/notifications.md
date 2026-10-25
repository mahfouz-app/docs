---
layout: guide
title: "Notifications"
since: "0.8.0"
description: "The notification center, sounds, quiet time and update notices."
permalink: /guide/notifications/
---

Everything Mahfouz has to tell you (exports, plugin installs and updates, errors saving, committing or syncing, [task reminders](/guide/tasks/#reminders)) collects in the notification center. Open it with the bell button on the left rail, just above your account button, or press <kbd>Mod</kbd><kbd>9</kbd> {% include since.html v="0.14.0" %}: the center takes the place of your notes in the left sidebar, the way the People view does, and clicking the bell again brings your notes back. On a phone, the bell is in the titlebar and opens the center as a full-screen sheet. Proposals from [external agents](/guide/external-agents/) have their own plug button in the titlebar.

- A dot on the bell means there are notifications you haven't dealt with; hover over the bell to see how many. A ring around it means something is running, and hovering shows what.
- The filter button in the center's header switches between **Unread**, **All** and **Archived** and narrows the list by category; a dot on it means you're not looking at everything unread. The double-check button marks everything read. Click a notification to mark it read and run its main action, such as opening a reminder's note, or archive it with ×.
- A finished PDF export waits in the center with **Open**, **Save…** and **Discard**.
- A notification's other actions are buttons on one row under its text, each with an icon. When the row is too narrow, buttons show only their icon; hover over one to see its name.
- Errors, and things waiting on you, also pop up briefly in the corner. A pop-up doesn't take focus, but you can move to it with <kbd>Tab</kbd> and press <kbd>Enter</kbd> to run its main action; it stays up while it has focus. Closing a pop-up leaves the notification in the center. While the center is showing, nothing pops up: new notifications appear in its list instead.
- History is kept on this computer for 30 days. It isn't part of your vault.

## Sounds, device notifications and quiet time

Settings → Notifications controls how notifications interrupt you:

- **Device notifications** {% include since.html v="0.17.0" %} (called **System notifications** before) appear in your system's notification center while Mahfouz is in the background, for errors and things waiting on you. The switch is saved on this device only: your other devices and your collaborators keep their own choice. Each device starts from the vault's old System notifications setting, once. See [Device notifications](#device-notifications) below.
- **Sounds** play a short tone for errors and things waiting on you. They're off by default.
- **Mute** a category to keep its notifications in the history without pop-ups, sounds or a badge. These settings are saved in `.config/settings.md`, so they follow the vault. The categories are Exports, Plugins, Vault, Sync, Editor, Publishing, App updates and Tasks. Muting **Tasks** turns that vault's task reminders off entirely.

**Do not disturb**, the moon button in the notification center's header, silences everything for an hour, until tomorrow morning, or until you turn it off. It applies to this computer only.

### Device notifications {% include since.html v="0.17.0" %} {#device-notifications}

A device notification shows the notification's title and its category after **Mahfouz ·**, such as **Mahfouz · Sync**, never its details. A title can still name a note or a task, as it does in the notification center. Clicking one brings Mahfouz forward and runs its main action.

On the web, and in the [installed app](/guide/web/#install-it-on-your-home-screen), turning on **Device notifications** is the click that asks the browser for permission; Mahfouz never asks at any other time. If you've blocked notifications for web.mahfouz.app, the switch can't be turned on and says **Blocked in this browser's site settings.** Allow them there, then turn it on. On iPhone, notifications need the Home Screen app: see [Notifications on iPhone](/guide/web/#notifications-on-iphone).

### Task reminders while Mahfouz is closed {% include since.html v="0.17.0" %} {#task-reminders-while-mahfouz-is-closed}

On the web, the same switch also brings your [task reminders](/guide/tasks/#reminders) while Mahfouz is closed, wherever the browser can receive them: you're signed in, the browser supports Web Push, and on iPhone, Mahfouz is the Home Screen app.

- These reminders say only **A task is due** or **N tasks are due**. Tapping one opens Tasks.
- To send them, Mahfouz's server keeps your open tasks' due times, to the minute, and nothing else: never their titles, ids or note text. Your browser's push service (Apple, Google, Mozilla or Microsoft, depending on the browser) delivers each one, so it sees when a reminder arrives, but not what it's for.
- The list of due times comes from whichever web device you used last. A task you complete only in the desktop app keeps reminding you until you open Mahfouz on a web device. A list that no web device has refreshed for 14 days stops.
- Muting **Tasks**, snoozing a task (it comes back when the snooze ends) and completing it each stop its reminder. Do not disturb applies only to the device it's set on: it doesn't silence the reminders on your other devices.
- If Mahfouz is open in a web tab, that tab shows the reminder and the one sent while closed is skipped. The desktop app can't do that, so a reminder can show twice on a computer with the desktop app open.
- Signing out on a device stops its reminders.

The line under **Device notifications** says what to expect on this device. **Only while Mahfouz is open.** means reminders reach it only while Mahfouz is open, and the line says why when it can: you're not signed in, the browser can't receive them, or on iPhone, Mahfouz isn't on your Home Screen.

## New versions of Mahfouz

{% include since.html v="0.17.0" %} When a new version of Mahfouz is released, a banner under the title bar says which version is out and which one you have. **What's new** opens the release notes; **Download** opens the installer where one is available for your platform. Mahfouz doesn't install anything itself.

- Mahfouz checks when it starts and then at most once a day. **Mahfouz → Check for Updates…**, or **Check for updates** at the bottom of the account menu, checks right away and always tells you the result, including when you're up to date.
- If you installed Mahfouz with Homebrew, there's no Download button; the banner shows the command to run instead: `brew upgrade --cask mahfouz`.
- **Skip this version** (the × on the banner) hides it until a newer version is released. Check for Updates… shows it again.
- If Mahfouz isn't in front when it finds a new version, you also get one system notification for that version, unless Do not disturb is on.
- To stop the checks entirely, turn off **Automatically check for new versions** in Settings → Notifications. It applies to this computer only. Muting the **App updates** category stops the automatic banner too; Check for Updates… still shows it.
- On the web, the banner offers **Reload** instead: see [New versions](/guide/web/#new-versions).
