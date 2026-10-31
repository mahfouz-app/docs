---
layout: guide
title: "Tasks"
since: "0.11.0"
description: "Turn a checklist item into a task with a due date and an assignee, mark it in progress, give a bigger task a page of its own with sub-tasks, see every task in a table, on a board or on a calendar, and get reminded when one is due."
permalink: /guide/tasks/
---

A task is a checklist item with a due date. Write it on one line: the
checkbox, the title, optionally who it's for, then `//` and the date.

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
  just before the `//`, such as a GitHub login. It's optional.
- **The `//`** needs a space on each side. That is what makes the line
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

{% include since.html v="0.20.0" %} From the keyboard, with the cursor on a
task line, <kbd>Mod</kbd><kbd>Enter</kbd> ticks it as a click would, even
while Suggesting. <kbd>Mod</kbd><kbd>.</kbd> opens its menu: **To do**,
**In progress** and **Done**, then **Change due date…**, **Change
assignee…** and **Remove due date**.

## In the editor

On a task line, the assignee and the due date show as two small chips after
the title. Your own login reads **you**. The date chip says when the task is
due: **Today 14:00**, **Wed, Oct 14**, or **Overdue · Oct 6**. A done task's
chips are dimmed. In Live mode, put the cursor on the line to see and edit
the raw text; Preview always shows the chips.

### Placeholder chips {% include since.html v="0.13.0" %} {#placeholder-chips}

While the cursor is on a checklist item that has a title, dashed
**Assign** and **Due date** chips show after it for whatever the line is
still missing. Click one to open the assignee or date picker; hover it to
see its key (<kbd>@</kbd> or <kbd>!</kbd>). The × beside a chip hides it on
that line until you reload; hiding **Assign** also stops a date from adding
your own `@login`. Assigning someone on a line with no date yet opens the date
picker next, since a line without a date isn't a task. A handle typed at the
end of a checklist item (`- [ ] Call @ana`) counts as its assignee once it
gets a date.

{% include since.html v="0.19.0" %} You can make a whole task without the
mouse: type its title, then press <kbd>Tab</kbd> at the end of the line to
open the assignee picker (or the date picker, when the line already names
someone). Pick a person with <kbd>Enter</kbd>, or press <kbd>Esc</kbd> to
assign no one, and the date picker opens next. <kbd>Tab</kbd> anywhere else
on the line still indents it.

### Set a date

Type a space and <kbd>!</kbd> after the title of a checklist item to choose
a due date from a menu. {% include since.html v="0.13.0" %} It starts with **Today**, **Tomorrow** and
**Next week**, and narrows as you type: a weekday (`!fri`), a day of a month
(`!oct 30` or `!30 oct`), an ISO date (`!2026-10-30`), each with an optional
time (`!tomorrow 3pm`, `!fri 15:00`). Pick a row and the line gets
` // YYYY-MM-DD`; **Pick a date and time…** opens the date picker. Typing
`//` no longer opens anything; the `//` in the line is written for you.
{% include since.html v="0.13.0" %}

Click the date chip to open the date picker on a task's date.

- Pick a day in the calendar, or use **Today**, **Tomorrow** or **Next Mon**.
  The calendar's weeks start on the day set in Settings → General →
  [First day of week](/guide/settings/).
- Add a time if you want one; leave it empty for an all-day task. Type it
  as you'd write it: `14:30`, `1430`, `9`, `2:30pm` or `2.30 p` all work, and
  the line under the field shows how it was read. {% include since.html v="0.13.0" %}
  The time is saved when you leave the field, press Enter, click **Done** or
  close the picker; one it can't read is marked in red and isn't saved.
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

The assignee shows as a [person chip](/guide/people/#person-chips): click
the name to open the person's note, or right-click the chip for the person
menu. {% include since.html v="0.15.0" %} In a note,
<kbd>Cmd/Ctrl</kbd>+click opens the person's note in the background.
{% include since.html v="0.20.0" %}

To change a task's assignee, click the ▾ on its assignee chip
{% include since.html v="0.15.0" %}, or focus the chip and press
<kbd>Space</kbd>. The picker checks the current assignee:

- With nothing typed in **Search people**, it lists the current assignee,
  then **Recent**: the last five people you picked in this vault on this
  computer. **All people** and **Unassign** follow.
  {% include since.html v="0.14.0" %}
- Type to search by handle and name, then click a person or use the arrow
  keys and Enter. Among equally good matches, recent people come first.
  {% include since.html v="0.14.0" %}
- To assign someone who isn't listed, type their login and pick
  **Assign @login**.
- **Unassign** removes the assignee and keeps the date.

Like the date picker, these changes apply directly, even in Suggesting mode.

## Task pages {% include since.html v="0.22.0" %} {#task-pages}

A task that needs more than one line can be a page of its own: a note
with a body, sub-tasks, and its status, due date and assignee as
[attributes](/guide/attributes/). Task pages are the rows of a Tasks
database, and they show up wherever task lines do: the
[Tasks panel](#the-tasks-panel), the [Tasks tab](#the-tasks-view) and the
rail's dot, a daily note's [tasks block](/guide/daily-notes/#the-tasks-block),
a [person's page](/guide/people/#a-persons-page) and
[reminders](#reminders).

### A Tasks database

To make one, choose **New database** and pick the **Tasks**
[template](/guide/databases/#templates): its columns are **Status**,
**Due**, **Assignee**, **Parent task** and **Sub-tasks**, and it opens on a
Board by status, with a Calendar by due date and a Table. You don't have
to make one first: the first time you add a task page, or
[turn a task line into one](#turn-into-task-page), in a vault that has
none, Mahfouz creates **Tasks** at `Tasks/Tasks.md`.

What makes a database a Tasks database is `task_pages: true` in its note's
frontmatter, which the template writes. **Turn back into a note** removes it
with the rest of the database.

### What a page holds

Each row is a task, read from its own attributes:

- **Status** is to do, in progress or done. Your own option names work:
  **Done**, **Complete** and **Completed** read as done, **In progress**
  and **Doing** as in progress, and anything else, such as **Not started**,
  as to do. The Tasks tab shows them as **To do**, **In progress** and
  **Done**. When Mahfouz changes a page's status, it writes the vault's own
  option for it.
- **Due** is a date, or a date and a time. A page without one is fine: it's
  listed under **No date**, between **Upcoming** and **Done**, and never
  reminds you.
- **Assignee** is a [person's](/guide/people/) handle, with or without the
  `@`.

An [encrypted](/guide/encryption/) page isn't listed, and neither is one in
Trash.

### In the Tasks views

Pages and task lines share one list. A page has a page icon before its
title, and its **Note** column names its database; click it to open the
database. Click a page's title to open the page itself, at its top.

The Tasks tab writes a page's changes into the page: ticking it, its
status, due date and assignee, and its title, which is the page's heading.
In [Suggesting mode](/guide/track-changes/), a page's title can't be changed
from the Tasks tab, so the page opens instead.

### Sub-tasks

**Parent task** links a page to the page it belongs to, and **Sub-tasks**
lists the pages under it. Both are kept in step, as with any
[relation](/guide/databases/#relations).

- In the Table and the [Tasks panel](#the-tasks-panel), a sub-task sits
  under its parent when it falls in the same group, such as **Upcoming**.
  The parent gets a chevron to fold them away and its progress, such as
  **2/5**: how many of its sub-tasks are done.
- A sub-task in another group, say one that's overdue while its parent is
  upcoming, is listed in its own group, naming its parent.
- On the Board, and in the Table grouped by **Status**, each sub-task is its
  own card or row, naming its parent.

Which parents you've folded isn't saved.

## Turn into task page {% include since.html v="0.22.0" %} {#turn-into-task-page}

When a task line outgrows its line, make it a page. Choose **Turn into task
page** from:

- the menu you get by right-clicking a task line's checkbox in a note;
- a task line's **⋯** in the Tasks tab, or its **⋯** or right-click menu in
  the [Tasks panel](#the-tasks-panel);
- the [command palette](/guide/command-palette/), with the cursor on the
  task line. The action, `turn_into_task_page`, has no default key; you
  can give it one in [Keyboard shortcuts](/guide/shortcuts/).

Mahfouz then, in one commit:

- creates a page in the Tasks database with the line's title, status, due
  date and time, and assignee. Tags at the end of the title go into the
  page's text;
- replaces the line with a link to the page, such as
  `- [[Tasks/Call the venue]]`, with no checkbox, so the task is listed once.

The page opens in a background tab, and a notice offers **Open page** and
**Undo**. **Undo** puts the line back and deletes the page, as long as
nobody has edited the page since; it works until Mahfouz reloads.

When the vault has no Tasks database yet, Mahfouz asks first: **Create and
move** creates **Tasks** (its own commit), then moves the task. **Undo**
keeps the database. With more than one Tasks database, the page goes to the
one [New task](#new-task) last used in the vault on this device, or else
the oldest.

Nothing changes, and a notice says why, when:

- the note is in Suggesting mode (a new page can't be a suggestion): the
  notice offers **Switch to Editing**;
- the note is [encrypted](/guide/encryption/), since the page would hold the
  task's text unencrypted;
- the note has [edits waiting](/guide/when-sync-fails/#edits-to-title-are-waiting)
  for your choice;
- the line's title is only tags: give the task a title first;
- the vault is [encrypted with git-crypt](/guide/encryption/) and locked on
  this device.

## Recurring task pages {% include since.html v="0.22.0" %} {#recurring-task-pages}

A task page can repeat, such as a weekly report or the monthly rent. Give
it a **Repeat** attribute: its cell opens a small editor where you pick
**Every** with a number and a unit (day, week, month or year), the weekdays
for a weekly rule or the day for a monthly one, and **Repeat from**:

- **Due date**: the next due date is counted from the current one, so a
  weekly task stays on its weekday even if you finish it late.
- **Completion date**: the next due date is counted from the day you mark it
  done.

**Next** shows when the task will next be due. **Save** writes the rule and
**Clear** removes it. The rule is plain text in the page's frontmatter, so
you can also type it in the cell or in any editor:

```yaml
repeat: every week on mon
repeat: every 2 months
repeat: every day from completion
```

When you mark a recurring page done, it isn't put under **Done**: its due
date moves to the next time, its status goes back to **To do**, and
**Last completed** (`last_completed`) is set to that day. It's one commit,
and the notice's **Undo** puts the due date and **Last completed** back. In
the Tasks tab, a recurring page shows a repeat icon after its title; hover
it to see the rule.

A rule Mahfouz can't read, such as `every fortnight on mon`, is kept as
written: the cell says why, and the task doesn't repeat until you fix it.

## The Tasks panel {% include since.html v="0.16.0" %} {#the-tasks-panel}

Click **Tasks** in the left rail to show your tasks in the left sidebar,
in place of your notes, and open the [Tasks tab](#the-tasks-view) beside
them. {% include since.html v="0.19.0" %} Click it again to bring your notes
back; the tab stays open. The button looks pressed while the panel shows.

- Type in **Search tasks** to filter the list.
- **Mine** and **Everyone** choose whose tasks show. The Tasks tab and the
  rail's dot (below) follow the same choice.
- Tasks are grouped under **Overdue**, **Today** and **Upcoming**, five
  each; **Show N more** lists the rest of a group. **Done** starts
  collapsed.
- Each task has its checkbox, its due date (in red when it's overdue; just
  the time under **Today**) and its assignee's avatar. Click a task to
  open its note at its line.
- A [task page](#task-pages) has a page icon, and clicking it opens the
  page. A parent page has a chevron and its sub-task progress before its
  date, with its sub-tasks indented under it, and undated pages are
  grouped under **No date**. {% include since.html v="0.22.0" %}
- A task's **⋯**, or a right-click, offers **Open note**, **Mark done**
  (or **Mark to do**) and **Open in Tasks**, and on a task line
  [**Turn into task page**](#turn-into-task-page). {% include since.html v="0.22.0" %}
- **New task**, at the foot of the list or the **＋** at the top, asks for
  a title: press <kbd>Enter</kbd> to add it, due today, where
  [New task puts tasks in the vault](#new-task), or <kbd>Esc</kbd> to
  cancel. If it can't be written, the title stays so you can try again.
- The table button at the top, and **Open the Tasks database** at the
  bottom, open the [Tasks tab](#the-tasks-view).

Ticking a task here updates the Tasks tab and the rail's dot at once.

## The Tasks view

The Tasks tab, in the main pane beside your notes, shows every task as a
database, with three views to pick from at the top. Open it from the
[Tasks panel](#the-tasks-panel), or press <kbd>Mod</kbd><kbd>2</kbd> {% include since.html v="0.14.0" %}:
the key, which the rail button's tooltip names, and
[reminders](#reminders) open the tab directly. {% include since.html v="0.16.0" %}
On a phone, **Tasks** in [Home's navigation bar](/guide/web/#homes-navigation-bar)
opens it, and the tab's toolbar is at the bottom of the screen: **Filter**,
**Sort**, **Group**, **View** and **+ New task** ([Pages and their
toolbars](/guide/web/#phone-pages)). {% include since.html v="0.17.0" %} You can
[remove **Tasks** from the rail](/guide/notes/#rail-pins):
<kbd>Mod</kbd><kbd>2</kbd> still opens the Tasks tab, and reminders keep
coming. {% include since.html v="0.15.0" %}

The Tasks tab looks like a [database](/guide/databases/#the-table):
{% include since.html v="0.16.0" %}

- The breadcrumbs start at **Home**, since the tab covers every vault, then
  the counts. Under them, the **Tasks** heading says how many tasks are
  open and how many are overdue, such as **12 open · 3 overdue**.
- **Table**, **Board** and **Calendar** are tabs. They're fixed: you can't
  add, rename or delete views here.
- The bar at the bottom shows how many tasks there are.
- Each task's **⋯** offers **Open note**, **Status ▸**, **Set due…** and
  **Assign…**, and on a task line **Turn into task page**
  {% include since.html v="0.22.0" %}.
- The table shows 25 tasks a page, with the same pager as a database's.
  Changing **Mine**/**Everyone** or the vault goes back to the first page.

The views:

- **Table** shows **Title**, **Status**, **Due**, **Assignee** and
  **Note** by default, and **Vault** last when you have several vaults. {% include since.html v="0.16.0" %}
  It lists the tasks grouped into **Overdue**, **Today**,
  **Upcoming**, **No date** (undated [task pages](#task-pages)
  {% include since.html v="0.22.0" %}) and **Done** (collapsed at first), sorted by due date. An
  in-progress task carries an **In progress** chip. Edit a task right in
  the table:
  - Tick its checkbox to mark it done, or untick it.
  - Click its title to open its note at that line, shaded until you click,
    type or move the cursor in the note. Click ✎ to rename it.
  - Click its due date to pick another day; its time stays. To change the
    time, use the date chip in the note.
  - Its assignee is a [person chip](/guide/people/#person-chips): click
    the name to open the person's note, or the ▾ to pick someone else or
    **Unassign**. {% include since.html v="0.15.0" %}
  Each change rewrites the task's line in its note. A table wider than the
  pane scrolls sideways, and the first column stays at the left edge while
  it does. {% include since.html v="0.16.0" %} **Columns** shows or
  hides **Status**, **When**, **Assignee**, **Note**, **Vault** and
  **Tags**, and the **Group** tab groups by **When** or **Status**, or not at all. {% include since.html v="0.12.0" %}
  You can reorder the columns, Title included, as in a database: in
  **Columns**, with a header's grip, or with **Move left** and **Move right**.
  The order is kept on this device only. <kbd>Home</kbd> and <kbd>End</kbd>
  move to a row's first and last cells. {% include since.html v="0.16.0" %}
  **Columns** also lists **Note ID**, last: a task's Note ID is the id of
  the note holding it, so tasks in one note share it; click it to copy it (see
  [Note ID](/guide/databases/#note-id)). {% include since.html v="0.16.0" %}
- **Board** puts the tasks in three columns: **To do**, **In progress**
  and **Done**. Drag a card to another column to change its status, or
  open the card's menu and pick a column under **Move to**. While you
  drag, a space opens where the task will land, by the Board's sort. {% include since.html v="0.15.0" %} Each card
  shows its title, then its `#tags` on their own line (click one to search
  for it in the [Search tab](/guide/links/#tags)), then its note and its due date, with an icon for
  whether it's overdue, due today, upcoming or done. Tags at the end of
  the title move to the tag line; a tag in the middle of the title stays
  there, tinted. On a [person's page](/guide/people/#a-persons-page), a
  card keeps its title as written, with no tag line. {% include since.html v="0.12.0" %}
  Each card starts with its checkbox: tick it to mark the task done (an
  in-progress one too) without opening the card. The column names are
  colored by status. **Fields** chooses what the cards show and in what
  order, as **Columns** does for the table: by default the title, due date,
  assignee, note and tags; **Status** and **Note ID** can be turned on.
  Fields placed before Title show above the card's title. On a person's
  page, cards don't show the assignee. Mahfouz remembers the Board's fields
  on this computer. {% include since.html v="0.16.0" %}
- **Calendar** shows the tasks on a month, or on a week with **Week**, by
  their due date. Drag one to another day, or pick **Move to date…** in its
  menu; its time stays.
  Overdue tasks are tinted and done ones are struck through. {% include since.html v="0.12.0" %}

**Filter** and **Sort**, with **Group** (one **Filter, sort and group**
button with a tab for each when the toolbar is narrow) {% include since.html v="0.18.0" %}, narrow and
order any view. Mahfouz remembers each
view's settings, and the view you picked, on this computer; **Reset**
goes back to the defaults. As in a [database](/guide/databases/#the-settings-row),
a row under the toolbar shows each filter, sort and grouping as a chip:
click one to edit it, or its **×** to remove it. While you've changed the
view, the row ends with **Changed on this device** and **Reset**. {% include since.html v="0.14.0" %}
**+ Add filter** and **+ Add sort** in that row add one, and clicking a
sort chip flips its direction. {% include since.html v="0.15.0" %} When
the filters hide every task, the view says **No tasks match these
filters.**, with **Reset**. {% include since.html v="0.15.0" %}

In every view, two chips at the start of the row under the toolbar set
whose tasks and which vaults the tab shows. {% include since.html v="0.16.0" %}

- **Mine** shows the tasks assigned to your GitHub login, or to the handle
  of a person whose `github` is your login; you need to be signed in with
  GitHub. **Everyone** shows every task, including the ones
  with no assignee, and adds an **Assignee** column.
- With more than one vault, the Tasks tab covers all of them, with a
  **Vault** column. Pick a single vault from the vault chip.
- To narrow the tasks by topic, put `#tags` on the task line itself, such
  as `- [ ] Fix login #bug @sam // 2026-10-14`. Only tags on the task's own
  line count, not the note's other tags. {% include since.html v="0.12.0" %}
  To filter by them, choose **+ Add filter**, then **Tags**, and tick tags
  in the checklist, each with its count of tasks; type to search them.
  **has any of** keeps the tasks carrying at least one ticked tag; switch
  it to **has all of** or **has none of** as in a
  [database](/guide/databases/#sort-and-filter). Like the other filters,
  tag filters belong to the view (Table, Board or Calendar), and
  [renaming a tag](/guide/links/#rename-a-tag) updates them.
  {% include since.html v="0.15.0" %} Clicking a `#tag` on a card or in the
  **Tags** column opens the [Search tab](/guide/links/#tags) with
  `tag:name` instead. {% include since.html v="0.13.0" %}
- Clicking a reminder opens the task's note at its line too.

A dot on the **Tasks** icon in the left rail tells you when something
needs attention: red when a task is overdue, blue when one is due later
today. It follows the **Mine**/**Everyone** choice and the vault menu,
but not the views' filters: it counts every one of those tasks that is
overdue or due today. {% include since.html v="0.15.0" %} Hover
over the icon to see the counts, such as **2 overdue · 1 due today**. {% include since.html v="0.12.0" %}
The dot goes with the button: with **Tasks** removed from the rail, it
isn't shown anywhere. {% include since.html v="0.15.0" %}

## New task {% include since.html v="0.16.0" %} {#new-task}

**New task**, at the end of the Tasks tab's toolbar, adds a task without
opening a note. Type its title and press <kbd>Enter</kbd>. It adds a task
line to a note, or a [task page](#task-pages), depending on where you've
chosen new tasks go in the vault (below).

- In the table, it opens a **New task** row.
- On the Board, it opens a new card at the top of **To do**. Each column
  also has **+ New task** at its foot, which adds the task with that
  column's status.
- On the Calendar, it opens a new task due today. **+** on a day adds one
  due that day.

The first time you add a task in a vault, Mahfouz asks **Where**
{% include since.html v="0.22.0" %}:

- **In a note (task line)** writes one line, `- [ ] Title // date`, at the
  end of the note you pick.
- **As a task page in Tasks** creates a page in the vault's Tasks
  database, created for you when there's none. When the vault has more
  than one, pick it under **Database**. The page starts as **To do** with
  no due date, or with the Board column's status or the Calendar day you
  added it from; set the rest on the page.

Either way, the task is assigned to your `@login` when you're signed in with
GitHub. On a [person's page](/guide/people/#a-persons-page), **New task
for @handle** assigns it to their `@handle` instead. {% include since.html v="0.16.0" %}
Mahfouz remembers the choice, and the note, for that vault on this
computer. To change it, click the chevron beside **New task** and choose
**Change where…** {% include since.html v="0.22.0" %}. Mahfouz asks again only when the note is gone
or has been encrypted. The [Tasks panel](#the-tasks-panel)'s quick add
follows the same choice.

- If the note is in Suggesting mode, the task is added as your
  suggestion. It isn't listed until the suggestion is accepted, so a
  notice says where it went, with **Open note** at its line.
- If the task can't be written, its title stays in the draft, so you can
  try again.
- **New task** is off while the vault is [encrypted with
  git-crypt](/guide/encryption/) and locked on this device; hover it to see
  why.

## Reminders

When one of your tasks comes due, a notification tells you. Click it to
open the note at the task, or, on a pop-up you've moved to with
<kbd>Tab</kbd>, press <kbd>Enter</kbd>. Its **Mark done** button ticks the
task off without opening it. In the
[notification center](/guide/notifications/) and its pop-ups (not in device
notifications {% include since.html v="0.17.0" %}), it also has two menus:

- **Snooze** hides the reminder for **10 minutes**, **1 hour**, **3 hours**
  or until the next 09:00 (**Today 09:00** or **Tomorrow 09:00**). It comes
  back unread when the time is up; several coming back at once arrive as one
  notice. Snoozing doesn't change the note, so the task stays overdue for
  everyone. The snooze applies to this computer only (on the web, this
  browser): your other computers still remind you on time. It survives
  quitting Mahfouz. {% include since.html v="0.12.0" %}
- **Reschedule** moves the task to **Tomorrow**, **Next week** (the coming
  Monday; not offered on a Sunday, when that's tomorrow) or, with **Pick
  date…**, any later day, keeping its time. It changes the date on the
  task's line like any other edit, so everyone sees the new date once it's
  committed. For a [task page](#task-pages), **Mark done** and
  **Reschedule** change the page's **Status** and **Due**.
  {% include since.html v="0.22.0" %} If the task's line has changed since the reminder, the note
  opens at the task instead, so you can set the date there. If the note has
  [edits waiting](/guide/when-sync-fails/#edits-to-title-are-waiting) for
  your choice, Reschedule, like **Mark done**, changes nothing and a notice
  says so: choose which version to keep first. {% include since.html v="0.12.0" %}

- Reminders go to the task's assignee only: the tasks assigned to your
  GitHub login, or to a person whose `github` is your login, in every
  vault. You need to be signed in with GitHub, and
  tasks with no assignee never remind anyone.
- A task reminds you at its time; an all-day task at 09:00. A task page
  with no due date never reminds you. {% include since.html v="0.22.0" %} An in-progress
  task still reminds you; only a done one doesn't.
- Reminders come only while Mahfouz is open, except on the web, where
  [Device notifications](/guide/notifications/#task-reminders-while-mahfouz-is-closed)
  can bring them while it's closed {% include since.html v="0.17.0" %}. If several came due while it
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
[Ask before changes](/guide/external-agents/#ask-before-changes) setting.

External agents work with task lines only: they don't list
[task pages](#task-pages) as tasks, and can't tick one off.
{% include since.html v="0.22.0" %}
