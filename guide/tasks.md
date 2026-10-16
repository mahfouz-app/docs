---
layout: guide
title: "Tasks"
description: "Turn a checklist item into a task with a due date and an assignee, mark it in progress, see every task in a table, on a board or on a calendar, and get reminded when one is due."
permalink: /guide/tasks/
---

A task is a checklist item with a due date. Write it on one line: the
checkbox, the title, optionally who it's for, then ` // ` and the date.

```markdown
- [ ] Ship release notes @omar // 2026-10-12 14:00
- [ ] Review the sync PR @sam // 2026-10-14
- [/] Draft the onboarding guide @omar // 2026-10-13
- [ ] Water plants // 2026-10-15
- [x] Call Sam @omar // 2026-10-01 09:30
```

- **The date** is `YYYY-MM-DD`. The time, `HH:MM` in 24-hour form, is
  optional; a task without one is due all day.
- **The assignee** is a [person's](/guide/people/) handle after `@`,
  just before the ` // `, such as a GitHub login. It's optional.
- **The ` // `** needs a space on each side. That is what makes the line
  a task: a checklist item that only mentions a date, such as
  `- [ ] Read 2026-03-02`, stays an ordinary checklist item.
- **Times** are read in your own time zone. A collaborator elsewhere sees
  the same clock time in theirs.
- **The checkbox** holds the task's status: `[ ]` to do, `[/]` in
  progress, `[x]` done. `[/]` follows the convention of Obsidian's Tasks
  plugin; GitHub shows it as plain text rather than a checkbox.

Tasks are plain text in the note, so they travel with the vault and show
up in any Markdown editor. Tick the checkbox to mark a task done.

### Mark a task in progress

Clicking a task's checkbox toggles it between to do and done; an
in-progress task becomes done. To pick a status, right-click the checkbox
and choose **To do**, **In progress** or **Done**.

Preview shows an in-progress task with a partly filled checkbox, and so
does a [published page](/guide/publishing/).

## In the editor

On a task line, the assignee and the due date show as two small chips after
the title. Your own login reads **you**. The date chip says when the task is
due: **Today 14:00**, **Wed, Oct 14**, or **Overdue · Oct 6**. A done task's
chips are dimmed. In Live mode, put the cursor on the line to see and edit
the raw text; Preview always shows the chips.

### Set a date

Click the date chip, or type ` //` after the title of a checklist item, to
open the date picker.

- Pick a day in the calendar, or use **Today**, **Tomorrow** or **Next Mon**.
  The calendar's weeks start on the day set in Settings → General →
  [First day of week](/guide/settings/).
- Add a time if you want one; leave it empty for an all-day task. The time
  is saved once it's complete, and again when you leave the field or close
  the picker.
- **Remove date** turns the task back into an ordinary checklist item.
- The keyboard works too: the arrow keys move between days, Page Up and Page
  Down change the month, Enter picks the day, and Esc closes the picker.

When you give a date to an item that has no assignee and you're signed in
with GitHub, your own `@login` is added. Changes made with the picker apply
directly, even while the note is in Suggesting mode.

### Assign someone

Type `@` on a checklist item to choose who the task is for, from the same
[people menu](/guide/people/#mentions) as a mention. It shows
the vault's [people](/guide/people/): its person notes and the collaborators
on its GitHub repository, with their access level. Without a GitHub remote,
or when the collaborators can't be loaded, it offers only your people and
your own login.

To change a task's assignee, click its assignee chip. The picker checks the
current assignee:

- Type to filter the list, then click a person or use the arrow keys and
  Enter.
- To assign someone who isn't listed, type their login and pick
  **Assign @login**.
- **Unassign** removes the assignee and keeps the date.

Like the date picker, these changes apply directly, even in Suggesting mode.

## The Tasks view

Click **Tasks** in the left rail (<kbd>Mod</kbd><kbd>6</kbd>) to open the
Tasks tab in the main pane, beside your notes. It shows every task as a
database, with three views to pick from at the top:

- **Table** lists the tasks grouped into **Overdue**, **Today**,
  **Upcoming** and **Done** (collapsed at first), sorted by due date. An
  in-progress task carries an **In progress** chip. Edit a task right in
  the table:
  - Tick its checkbox to mark it done, or untick it.
  - Click its title to open its note at that line, shaded until you click,
    type or move the cursor in the note. Click ✎ to rename it.
  - Click its due date to pick another day; its time stays. To change the
    time, use the date chip in the note.
  - Click its assignee to pick someone else, or **Unassign**.
  Each change rewrites the task's line in its note. **Columns** shows or
  hides **Status**, **When**, **Assignee**, **Note**, **Vault** and
  **Tags**, and **Group** groups by **When** or **Status**, or not at all.
- **Board** puts the tasks in three columns: **To do**, **In progress**
  and **Done**. Drag a card to another column to change its status, or
  open the card's menu and pick a column under **Move to**. Each card
  shows its note and its due date, with an icon for whether it's overdue,
  due today, upcoming or done.
- **Calendar** shows the tasks on a month by their due date. Drag one to
  another day, or pick **Move to date…** in its menu; its time stays.
  Overdue tasks are tinted and done ones are struck through.

**Filter** and **Sort** narrow and order any view. Mahfouz remembers each
view's settings, and the view you picked, on this computer; **Reset**
goes back to the defaults.

In every view:

- **Mine** shows the tasks assigned to your GitHub login, or to the handle
  of a person whose `github` is your login; you need to be signed in with
  GitHub. **Everyone** shows every task, including the ones
  with no assignee, and adds an **Assignee** column.
- With more than one vault, the Tasks tab covers all of them, with a
  **Vault** column. Pick a single vault from the menu at the top.
- To narrow the tasks by topic, put `#tags` on the task line itself, such
  as `- [ ] Fix login #bug @sam // 2026-10-14`. Each tag on the listed
  tasks shows as a chip with its count under the toolbar. Click chips to
  show only the tasks carrying any of them; **Clear** shows every task
  again. Only tags on the task's own line count, not the note's other
  tags. Clicking a `#tag` on a card or in the **Tags** column opens the
  [Tags view](/guide/links/#tags) with that tag added instead.
- Clicking a reminder opens the task's note at its line too.

A dot on the **Tasks** icon in the left rail tells you when something
needs attention: red when a task is overdue, blue when one is due later
today. It counts the same tasks the view shows, so it follows the
**Mine**/**Everyone** choice, the vault menu and the picked tags. Hover
over the icon to see the counts, such as **2 overdue · 1 due today**.

## Reminders

When one of your tasks comes due, a notification tells you. Click it to
open the note at the task, or, on a pop-up you've moved to with
<kbd>Tab</kbd>, press <kbd>Enter</kbd>. Its **Mark done** button ticks the
task off without opening it. In the
[notification center](/guide/notifications/) and its pop-ups (not in system
notifications), it also has two menus:

- **Snooze** hides the reminder for **10 minutes**, **1 hour**, **3 hours**
  or until the next 09:00 (**Today 09:00** or **Tomorrow 09:00**). It comes
  back unread when the time is up; several coming back at once arrive as one
  notice. Snoozing doesn't change the note, so the task stays overdue for
  everyone. The snooze applies to this computer only (on the web, this
  browser): your other computers still remind you on time. It survives
  quitting Mahfouz.
- **Reschedule** moves the task to **Tomorrow**, **Next week** (the coming
  Monday; not offered on a Sunday, when that's tomorrow) or, with **Pick
  date…**, any later day, keeping its time. It changes the date on the
  task's line like any other edit, so everyone sees the new date once it's
  committed. If the task's line has changed since the reminder, the note
  opens at the task instead, so you can set the date there. If the note has
  [edits waiting](/guide/when-sync-fails/#edits-to-title-are-waiting) for
  your choice, Reschedule, like **Mark done**, changes nothing and a notice
  says so: choose which version to keep first.

- Reminders go to the task's assignee only: the tasks assigned to your
  GitHub login, or to a person whose `github` is your login, in every
  vault. You need to be signed in with GitHub, and
  tasks with no assignee never remind anyone.
- A task reminds you at its time; an all-day task at 09:00. An in-progress
  task still reminds you; only a done one doesn't.
- Reminders come only while Mahfouz is open. If several came due while it
  was closed or your computer was asleep, they're summarized in one notice,
  such as **3 tasks are overdue**. Click it (or press <kbd>Enter</kbd> on
  the pop-up) to open the Tasks view; **Snooze all** snoozes every task in
  the notice, and they come back together.
- Each task reminds you once, and again when a snooze ends. Changing its date
  reminds you again at the new time and cancels a snooze; editing its title
  doesn't.
- The first time Mahfouz runs with reminders, tasks that are already overdue
  don't remind you.
- To stop reminders for a vault, open it and turn on **Mute Tasks** in
  Settings → Notifications. Like the other mutes, it's saved in the vault's
  `.config/settings.md`; unlike them, a muted vault's reminders aren't
  recorded at all, and a snooze that ends while it's muted doesn't bring its
  reminder back.

## External agents

An [external agent](/guide/external-agents/) can read your tasks and
change their status. Each task it lists comes with its status: to do, in
progress or done. When it asks to tick a task off, reopen it or mark it
in progress, that's a proposal like its other edits: whether it waits for
your approval depends on the vault's
[approval mode](/guide/external-agents/#approval-modes).
