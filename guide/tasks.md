---
layout: guide
title: "Tasks"
description: "Turn a checklist item into a task with a due date and an assignee, and see every task in one list."
permalink: /guide/tasks/
---

A task is a checklist item with a due date. Write it on one line: the
checkbox, the title, optionally who it's for, then ` // ` and the date.

```markdown
- [ ] Ship release notes @omar // 2026-10-12 14:00
- [ ] Review the sync PR @sam // 2026-10-14
- [ ] Water plants // 2026-10-15
- [x] Call Sam @omar // 2026-10-01 09:30
```

- **The date** is `YYYY-MM-DD`. The time, `HH:MM` in 24-hour form, is
  optional; a task without one is due all day.
- **The assignee** is a GitHub login after `@`, just before the ` // `.
  It's optional.
- **The ` // `** needs a space on each side. That is what makes the line
  a task: a checklist item that only mentions a date, such as
  `- [ ] Read 2026-03-02`, stays an ordinary checklist item.
- **Times** are read in your own time zone. A collaborator elsewhere sees
  the same clock time in theirs.

Tasks are plain text in the note, so they travel with the vault and show
up in any Markdown editor. Tick the checkbox to mark a task done.

## The Tasks view

Click **Tasks** in the left rail (`Mod+6`) to see every task in one list,
grouped into **Overdue**, **Today**, **Upcoming** and **Completed**.

- **Mine** shows the tasks assigned to your GitHub login; you need to be
  signed in with GitHub. **Everyone** shows every task, including the ones
  with no assignee.
- With more than one vault, the list covers all of them. Pick a single
  vault from the menu at the top, and each task shows which vault it's in.
- Click a task to open its note at that line. Tick its checkbox to mark it
  done without opening the note.
