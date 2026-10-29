---
layout: guide
title: "Mahfouz on the web"
since: "0.9.0"
description: "Use Mahfouz in a browser: supported browsers, opening a folder, and what's desktop-only."
permalink: /guide/web/
---

Mahfouz also runs in your browser, at **web.mahfouz.app**. It works on the
same vaults as the desktop app: a folder of Markdown notes in a git
repository. You can open a folder on your computer (Chromium browsers only),
or a repository from GitHub, which Mahfouz keeps in the browser and syncs
back. Mahfouz has no copy of your notes: a folder is read and written by the
browser directly, and a GitHub vault's sync passes through Mahfouz's server
on its way to GitHub without being stored.

## Supported browsers

| Browser | Version | Open local folders | GitHub vaults |
|---|---|---|---|
| Chrome, Edge and other Chromium browsers | 108 or later | Yes | Yes |
| Safari | 17 or later | No | 26 or later |
| Firefox | 114 or later | No | Yes |

Use one of these browsers at the version shown or later, over a secure
(https) connection. Any other browser shows **This browser can't run
Mahfouz** with a link to the desktop app (or, over plain http, **Mahfouz
needs a secure connection**).

Only Chromium browsers can open a folder on your computer. In Safari and
Firefox, [Choose a vault](/guide/vaults/#choosing-a-vault) leaves out
**Folder** {% include since.html v="0.13.0" %}.

GitHub vaults are kept in the browser's own storage, which Safari supports
from version 26. An older Safari can open neither a folder nor a GitHub
vault, so Choose a vault says so and links to the desktop app
{% include since.html v="0.13.0" %}. [Plugins](/guide/plugins/#plugins-on-the-web)
need the same storage, so an older Safari can't install them either.

### New versions {% include since.html v="0.17.0" %} {#new-versions}

When a new version of Mahfouz for the web is out while you have it open, a
banner under the title bar offers **Reload**. Mahfouz saves your changes
first, then loads the new version. **Dismiss** hides it until the next
version.

## Opening a folder

On first run, click **Folder** under **Open existing** in [Choose a
vault](/guide/vaults/#choosing-a-vault) {% include since.html v="0.13.0" %}
and choose a folder. The
browser asks whether Mahfouz may edit the folder: choose **Edit files**.
Press <kbd>Ctrl</kbd><kbd>Alt</kbd><kbd>O</kbd> (<kbd>⌥</kbd><kbd>⌘</kbd><kbd>O</kbd> on a Mac) to open another folder later.

If the folder isn't a git repository yet, Mahfouz asks before creating one
(`git init`). A browser can't see the folders above the one you picked, so it
can't tell whether that folder already sits inside another repository, such
as a project you work on. If it does, pick a folder of its own instead:
otherwise the new repository takes your notes out of the enclosing one.

### Reconnect

The browser remembers the folder, but Chrome asks for permission again after
it restarts, unless you chose **Allow on every visit**. Until then Mahfouz
shows **Reconnect "&lt;folder&gt;"** in the notification bell. Click
**Reconnect** and allow access: Mahfouz checks the folder and picks up any
changes made meanwhile.

### One tab at a time

Mahfouz runs in one tab at a time. A second tab shows **Mahfouz is open
somewhere else** {% include since.html v="0.17.0" %}: switch to the first
one, or close it and reload. On Android, the [installed
app](#install-it-on-your-home-screen) counts as a tab too.

If Mahfouz's data in the browser is ever damaged, it offers **Rebuild and
reload**. Your notes are safe: they live in your vaults, and Mahfouz reads
them again.

## On a phone {% include since.html v="0.12.0" %} {#on-a-phone}

When the window is narrower than 700 pixels, as on a phone, Mahfouz
switches to a layout made for it. It's made of pages: **Home** is where
you start, and every other page has a way back to where you came from. {% include since.html v="0.17.0" %}
There's no tab strip: your open tabs are listed on Home.

Launching or reloading Mahfouz shows the note you had open, or Home when
there's none. The desktop app uses the same layout, editing included,
when you make its window that narrow, with the mouse. At 700 pixels and
wider, nothing changes.

Wherever you can add something under what you're looking at, the button
is the same round **+** at the end of the bottom bar: **New note**, **New
child note**, **New row**, **New task** and **Add person**.

### Home {% include since.html v="0.17.0" %} {#phone-home}

Home shows your notes as a page:

- **Open tabs** come first. Tap one to go to it, or tap its close button
  to close it; **Close all** closes them all. Press and hold a tab for
  its menu, the same one a tab has on a wider screen, such as **Pin tab**.
- Then your vaults, [bookmarks](/guide/notes/), the notes tree and
  **Shared with me**.

The bar at the top of Home holds **Alerts** and **⋯**:

- **Alerts** (a bell) opens [Notifications](/guide/notifications/). A
  badge shows how many notifications are unread.
- **⋯** holds your account and the app's menus, in three parts:
  - Your account: the same row and status as the [account
    menu](/guide/github/#the-account-button).
  - **Notes**: **Sort by**, **Collapse all**, **New folder**, **New
    database**, **New vault…** and **Open vault…**. When you've hidden
    **Tasks** or **People** from the bar, it also has **Show Tasks** or
    **Show People** to bring it back.
  - **App**: **AI chat**, **Settings**, **Trash**, **External agents**,
    **Keyboard shortcuts**, **User guide**, **Send feedback**, **About**
    and **Check for updates**. When an [external
    agent](/guide/external-agents/#review-and-undo) has proposals
    waiting, **External agents** and the **⋯** button show how many. The
    AI chat opens over the whole screen.

### Home's navigation bar {% include since.html v="0.17.0" %} {#homes-navigation-bar}

Only Home has the navigation bar at the bottom of the screen. It shows
icons only, in this order:

- **Home**.
- Up to three items from the vault's [rail](/guide/notes/#rail-pins): the
  **Tasks** and **People** views, then your pinned notes and databases.
  With more than three, the third slot becomes **More**, with a count;
  tap it for the rest.
- **Search** (see [Search](#search-on-a-phone)).
- **New note**, the round **+**. The note opens ready to type.

The bar shows the same items, in the same order, as the vault's rail on
a wider screen, so changing one changes the other. Press and hold an
item, or a row in **More**, for its menu: **Move left**, **Move right**,
**Remove from bar** and **Show in bar**, which brings back a view or pin
you removed.

### Pages and their toolbars {% include since.html v="0.17.0" %} {#phone-pages}

Every page other than Home has a bar at the top with **‹**, the page's
icon and title, and **⋯** or the page's own actions. **‹** goes back to
the page you came from, and to Home when there's nothing to go back to.
Your phone's back gesture does the same.

Each page also has its own toolbar at the bottom of the screen. It starts
with **Home** and ends with the page's main action:

| Page | Toolbar |
|---|---|
| A note | **Home** · **Find** · **Outline** · **Comments** · **Details** · **+ New child note** (see [Reading and editing a note](#editing-on-a-phone)) |
| A [database](/guide/databases/) | **Home** · **Filter** · **Sort** · **Group** · **Columns** · **+ New row** |
| [Tasks](/guide/tasks/#the-tasks-view) | **Home** · **Filter** · **Sort** · **Group** · **View** · **+ New task** |
| [People](/guide/people/#the-people-view) | **Home** · **Find** · **Import** · **Export** · **Open People database** · **+ Add person** |
| [Notifications](/guide/notifications/) | **Home** · **Filter** · **Do not disturb** · **Clear archive** · **Settings** · **Mark all read** |
| Trash | **Home** |

- **Filter**, **Sort**, **Group**, **Columns** and view settings open
  just above the toolbar, and stay above the keyboard while you type in
  them. Tap the same button again to close the panel.
- **A button you can't use right now** says why when you tap it, such as
  **Group, this view has no grouping**.
- **A database**: its **⋯** starts with **Rename…**, **Pin to bottom
  bar** or **Remove from bottom bar**, **Copy embed** and **Open as
  note**. Below them come the save and sync status, the database's
  actions (such as **View settings…** for a Calendar, Gallery or Gantt, and **Add
  with details…** in the People database), **Appearance**, **History**
  and the note's actions. The view switcher stays on the page.
- **Tasks**: **View** picks Table, Board or Calendar, and has
  **Columns…** (**Fields…** on the Board). The **Mine** and **Everyone**
  and vault chips stay on the page. **⋯** has **Change note…**, which
  picks the note [new tasks](/guide/tasks/#new-task) go into.
- **Notifications**: **Unread**, **All** and **Archived** sit at the top
  of the page. **Clear archive** asks before it deletes the archived
  notifications.
- **Trash**: its sort is in **⋯** at the top.

Any other page, such as a plugin's tab, a revision or a merge, has
**‹**, its title and **⋯** at the top, and **Home** at the bottom.

### Reading and editing a note {% include since.html v="0.17.0" %} {#editing-on-a-phone}

A note opens for reading: the text takes the whole screen and no
formatting toolbar shows. There's no breadcrumb bar above the note: its
**Details**, **Backlinks**, **Attributes** and **Comments** open from the
toolbar and the **⋯**, just above the toolbar. {% include since.html v="0.19.0" %} Links, wikilinks, mentions and checkboxes work
as usual, and pressing and holding selects text without bringing up the
keyboard. A tap on a link, a tag or a person follows it, a tap on an
image or a diagram opens the viewer, and touching and holding either
opens its actions (see [Clicking on a phone](/guide/editor/#clicking-on-a-phone)).
{% include since.html v="0.20.0" %}

- **Find** opens [Find in note](/guide/editor/#find-and-replace).
- **Outline** opens a list of the note's headings. Tap one to jump to it;
  the note stays in reading.
- **Comments** shows how many unresolved comments the note has, and opens
  them.
- **Details** opens the note's [Details](/guide/attributes/#note-pills--the-right-sidebar).
- **+ New child note** creates a note under this one and opens it ready
  to type. It's hidden when you can't edit the note, such as a read-only,
  locked or shared read-only note.

To edit, tap the text where you want the cursor (a tap on a link follows
it instead). {% include since.html v="0.20.0" %} **Edit**, the first row
of the note's **⋯**, does the same, which helps with a screen reader or a
keyboard. You can't edit a read-only, locked or shared read-only note.
While you edit:

- The bar at the top shows **‹**, the title and **Done editing**.
- The [formatting toolbar](/guide/toolbar/) sits right above the
  keyboard, as one row: swipe it sideways for more buttons. Its **⋯** stays
  at the end of the row. The note's toolbar steps aside.
- A tap on a link, a tag or a person places the cursor in it, with a
  small button under it to follow it (see
  [Clicking on a phone](/guide/editor/#clicking-on-a-phone)).
  {% include since.html v="0.20.0" %}

Editing ends only when you choose to: **Done editing**, **‹**, going to
another page, or opening Search. Coming back from Search goes back to
editing.

The note's **⋯** at the top starts with **Edit**, then **Details**,
**Backlinks** and **Attributes**, then the note's actions. On a phone it
also holds what the [bottom bar](/guide/toolbar/#the-bottom-bar) has on a
wider screen:

- The save and sync status, which opens the note's **Status** card.
- The word count and reading time.
- **Source** or **Preview**, and **Editing** or **Suggesting**.
- **Suggestions**: previous, next, accept all and reject all, and track
  changes for everyone (see [Track changes](/guide/track-changes/)).
- **Add comment**, **History**, **Publish**, **Share**, **Send a copy**,
  **Appearance**, **Zoom**, **Pin to bottom bar** and **Set icon…**.

An [encrypted note](/guide/encryption/) gets nothing that sends its text
out of Mahfouz.

### Search {% include since.html v="0.17.0" %} {#search-on-a-phone}

On a phone, Search is one field that finds notes and runs commands, like
the [command palette](/guide/command-palette/) on a wider screen. Open it
with **Search** in Home's navigation bar, or press <kbd>Mod</kbd><kbd>K</kbd>
on a keyboard; press <kbd>Mod</kbd><kbd>K</kbd> again to close it. It
opens as a page, with **‹**, **Search** and **⋯** in the bar at the top.

The field, **Search or run a command**, sits at the bottom of the screen,
right above the keyboard, with a round **×** beside it to cancel. With the
keyboard down, the field sits where a page's toolbar is.

- **Before you type**, the page lists the notes and databases you opened
  recently, or suggested commands when there are none yet.
- **As you type**, it lists notes whose titles match, a **Search note
  contents for “…”** row with how many notes match, then matching
  commands and settings. Tap a command to run it, such as **New note**.
- **Opened from a note**, the list also has that note's commands, such as
  **Bookmark** and **Export…**, and they act on that note.
- **Search note contents for “…”** shows the notes whose text matches, on
  the same page, as the [Search tab](/guide/links/#search) does. **‹**
  goes back to the list.
- **⋯** holds the options for searching note contents: **Match case**,
  **Whole word**, **Regular expression**, **Show replace** and **Sort by**.
- **×** leaves Search and goes back to where you opened it. <kbd>Esc</kbd>
  clears the field, and pressed again, goes back.

Recent searches aren't kept on a phone: your recent notes take their
place. In a narrow desktop window, <kbd>Alt</kbd><kbd>1</kbd> to
<kbd>Alt</kbd><kbd>4</kbd> still show one kind of result at a time.

### Install it on your home screen {% include since.html v="0.17.0" %} {#install-it-on-your-home-screen}

You can install Mahfouz on your phone's home screen. It then opens in its
own window, with no browser toolbars.

- **Android (Chrome):** open web.mahfouz.app, then tap **Install app** in
  Chrome's **⋮** menu, or in the prompt Chrome shows.
- **iPhone and iPad (Safari):** open web.mahfouz.app, tap **Share**, then
  **Add to Home Screen**.

Some things to know:

- **On iPhone and iPad, the installed app keeps its own storage, apart from
  Safari's.** Sign in to GitHub again in the app, and open your vaults
  again there. Vaults you opened in Safari stay in Safari, so push your
  changes before you switch. In return, Safari doesn't clear the app's data
  after a week without use, as it can for a website.
- On iPhone and iPad, links to web.mahfouz.app open in Safari, not in the
  installed app. On Android they open in the installed app.
- On Android, the installed app and Chrome share one copy of Mahfouz's
  data, so only one of them can be open at a time (see [One tab at a
  time](#one-tab-at-a-time)).
- **It starts with no connection.** {% include since.html v="0.17.0" %}
  Once the app has been opened online, it keeps a copy of itself (about
  9 MB, or twice that for a while after an update), so it opens offline,
  and your vaults open and save as usual. On iPhone and iPad, open it online
  once in the installed app itself: Safari's copy doesn't count. Syncing
  with GitHub, signing in, publishing, sharing and installing plugins wait
  for a connection. Signing in while offline says **You're offline. Connect
  to the internet to sign in.**
- Online, the app opens the newest version, unless the connection takes
  more than a few seconds to answer: it then opens the copy it keeps, and a
  banner offers **Reload** once the new version can load.
- On iPhone and iPad, [notifications](#notifications-on-iphone) need the
  installed app. {% include since.html v="0.17.0" %}
- The installed app has no browser Reload button. When a new version of
  Mahfouz is out while the app is open, a banner offers **Reload** (see
  [New versions](#new-versions)).

### Notifications on iPhone {% include since.html v="0.17.0" %} {#notifications-on-iphone}

On iPhone and iPad, [device notifications](/guide/notifications/#device-notifications)
and [task reminders while Mahfouz is
closed](/guide/notifications/#task-reminders-while-mahfouz-is-closed) work
only in the Home Screen app, on iOS 16.4 or later. In Safari, Settings →
Notifications says **Add Mahfouz to your Home Screen (Share → Add to Home
Screen) to get them.**

1. In Safari, open web.mahfouz.app, tap **Share**, then **Add to Home
   Screen**.
2. Open Mahfouz from your Home Screen, sign in, and turn on **Device
   notifications** in Settings → Notifications. Allow notifications when
   iOS asks.

To allow or stop them later, go to iPhone **Settings** → **Notifications**
→ **Mahfouz**.

## What's only in the desktop app

The Slidev presentations and PDF export plugins, the AI agent, Export,
Git LFS (and its plugin), syncing a local folder with a remote (a GitHub vault syncs on the
web), merging diverged histories, Reveal in Finder, moving a vault, update
checks and the [Finder preview](/guide/quick-look/). [Device
notifications](/guide/notifications/#device-notifications) work on the web
too {% include since.html v="0.17.0" %}. Settings say **Available in the desktop
app** where one would be.

Other plugins, such as Mermaid and Draw.io, work on the web: see [Plugins
on the web](/guide/plugins/#plugins-on-the-web).
