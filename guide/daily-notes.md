---
layout: guide
title: "Daily notes"
since: "0.20.0"
description: "Open today's note in one step: a note for each day in a Daily notes database, with a live list of the day's tasks and room to write."
permalink: /guide/daily-notes/
---

**Today's note** opens the note for today, and creates it the first time
you ask. Each day gets its own note in a **Daily notes** database, with a
live list of that day's [tasks](/guide/tasks/) at the top and a place to
write below it. {% include since.html v="0.20.0" %}

## Today's note {% include since.html v="0.20.0" %} {#todays-note}

Choose **Today's note** in any of these places:

- The [command palette](/guide/command-palette/): type "Today's note".
- The menu you get by right-clicking the sidebar's background, right after
  **New note**.
- The vault menu.
- On desktop, **File → Today's Note**.
- On a phone, the **⋯** menu at the top of [Home](/guide/web/#phone-home).
- The **Today's note** button at the end of the Daily notes database's
  toolbar. On a phone, it's the first row of the database's **⋯** menu.

If today's note already exists, it opens. If it doesn't, Mahfouz creates
it, and creates the Daily notes database too if the vault doesn't have one
yet. Choosing it again the same day opens the same note.

Today's note has no default keyboard shortcut, since
<kbd>Mod</kbd><kbd>Alt</kbd><kbd>D</kbd> hides the Dock on macOS. To give
it one, set a key for **Today's note** in Settings →
[Shortcuts](/guide/shortcuts/), or add a `today_note` row to the
`## Shortcuts` table in the vault's `.config/settings.md`.

## The Daily notes database {% include since.html v="0.20.0" %} {#the-daily-notes-database}

The first time you open today's note, Mahfouz creates a
[database](/guide/databases/) called **Daily notes** at the top of the
vault, with two views:

- **Calendar**, which places each day on its date.
- **Table**, which lists every day.

Each day is a row, a note titled with its date as `YYYY-MM-DD`, such as
`2026-11-02`. It has a `day` attribute holding the same date, which is what
the Calendar uses. A new day's note looks like this:

````markdown
# 2026-11-02

## Tasks

```day-tasks
day: 2026-11-02
```

## Notes

````

The cursor lands under **Notes**, where you write. The block under
**Tasks** lists the day's tasks: see [The tasks block](#the-tasks-block).

In this database, **New row** and a Calendar day's **+** open that day's
note instead of adding a blank row. If the note doesn't exist yet, it's
created.

Each day's note has a fixed name and ID that come from its date. If two of
your devices both create the same day's note before they sync, they write
the same file, so git merges them like any other note.

## The tasks block {% include since.html v="0.20.0" %} {#the-tasks-block}

The Tasks section of a day's note holds a `day-tasks` block. In the file,
the block stores only its date:

````markdown
```day-tasks
day: 2026-11-02
```
````

In Preview, Mahfouz draws it as a live list of that day's tasks, read
from the tasks in your vault. Nothing is copied into the daily note, so the
list stays current as you add, change or finish tasks elsewhere.

### What it lists

- **Whose tasks:** when you're [signed in to GitHub](/guide/github/), the
  tasks assigned to you plus the tasks with no assignee. When you're signed
  out, everyone's tasks.
- **Which vault:** only the tasks in the vault the note is in.
- **Today:** the tasks due today, open or done, plus the open tasks that
  are overdue, in their own **Overdue** group.
- **A past day:** only the tasks due that day, open or done, as they stand
  now.
- **Not the note's own tasks:** tasks written in the daily note itself
  aren't listed, since they're right below the block.

Obsidian's `tasks` blocks (the Tasks plugin's query blocks) aren't
affected. They stay ordinary code blocks.

### Working with it

- **Tick a task** in the list to complete it. Mahfouz ticks it in the note
  where the task is written.
- **Open a task's note** by clicking the note's name on its row. The note
  opens at the task's line.
- **Add a task** with the block's **New task due** row, which names the
  block's day. It writes a new task line due that day right after the
  block, assigned to you when you're signed in. It's turned off while
  you're [suggesting](/guide/track-changes/).

### In any note

The block works in any note, not only in a daily note. To add one, type
`/` and choose **Tasks for a day** in the [slash menu](/guide/slash-menu/).
It inserts a block for today; change its `day:` line for another date.

## When a note leaves the app {% include since.html v="0.20.0" %} {#when-a-note-leaves-the-app}

The list is drawn from your vault, so it can't go with the note
everywhere:

- [Publishing](/guide/publishing/), **Share** (sending a copy) and the
  export formats that plugins add, such as PDF, show `*Tasks (not
  published)*` in place of the block, so your tasks never reach the web.
- [Quick Look](/guide/quick-look/) shows its own placeholder, **Tasks ·
  open in Mahfouz**.
- The built-in Markdown export, [slides](/guide/slides/) and a
  [live note share](/guide/sharing/) keep the block as written, its
  `day:` line included.
