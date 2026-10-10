---
layout: guide
title: "Databases"
description: "Turn a note into a table of its child notes: typed columns, sorting, filters, and saved views, all stored in your files."
permalink: /guide/databases/
---

A database is a note whose child notes are shown as a table. Each child note
is a row. Each attribute on those notes is a column. Nothing is stored outside
your files: the table is built from the notes and their attributes every time
you open it.

## What makes a note a database

A database note has two things:

- `database: true` in its frontmatter.
- A `database` block in its body, which holds the database's views.

~~~markdown
---
database: true
---
# Reading list

```database
rows: children
views:
  - type: table
    name: All
    order: [title, author, status, rating]
    sort: [{ property: rating, direction: DESC }]
    filters: 'status != "dropped"'
```
~~~

The rows are the note's **direct** child notes. A row can have children of its
own. They are that row's sub-pages, not rows of the database.

## Create a database

There are three ways:

- **New database.** Right-click the sidebar background or a vault and choose
  **New database**. Or right-click a note to create a database inside it. The
  new database opens in the editor with an empty heading; type its name. A
  **New Database** action is also in the **File** menu. It has no default
  key; see [Keyboard shortcuts](/guide/shortcuts/).
- **Turn into database.** Right-click a note that already has child notes and
  choose **Turn into database**. Its children become the rows, and the
  attributes they already use become the columns. **Turn back into a note**
  removes the block. The child notes stay.
- **Convert a Markdown table.** Hover a table in a note and click the
  **Convert to database** icon next to the wrap toggle. Each table row
  becomes a note: the first column becomes the note's title, and every other
  column becomes an attribute. The table is replaced by a link to the new
  database. The whole conversion is one commit. A table can have at most 500
  rows.

None of these are available while a note is in Suggesting mode, because they
change the note directly.

## The table

Opening a database note shows its table in its own tab. To see or edit the
note itself, click **View source**. In Preview, the block shows as an
**Open database** card.

In the sidebar, a database starts collapsed and shows how many rows it has.
Expand it to see the rows as ordinary notes.

## Sort and filter

- Click a column header to sort by it. Click again to reverse the order, and
  once more to stop sorting by it.
- **Sort** lets you sort by several columns.
- **Filter** shows the rows that match every filter in the list. Each filter
  is a column, a comparison, and a value. A Select column offers its options.

Sorts and filters you change apply on this device until you choose
**Save view**. **Reset** returns to the saved view. If someone else changes
the saved view, your unsaved changes are dropped.

Filters written in the block that the Filter list can't show, such as `or` and
`not` groups, still apply. They are listed as "can't be shown here".

## Edit cells and rows

- Click a cell, or press Enter on it, to edit it with its attribute's own
  editor. Enter or clicking elsewhere saves the value. Escape cancels it. Tab
  saves the value and moves to the next cell.
- Choosing a Select option or ticking a checkbox saves it straight away.
- Click a row's title to rename it. The open icon next to the title opens the
  note. Cmd-click (Ctrl-click) opens it in a new tab.
- **New row** adds a row: type its title and press Enter. Another empty row
  opens, ready for the next one. A row with no title is never created.
- **⋯** on a row offers **Open**, **Open in new tab**, and **Delete row**.
  A deleted row can be restored from Trash.

Each edit is an ordinary change to that note, and is committed like any other.
There is no undo inside the table: use History or Trash.

If the database note is in Suggesting mode, edits made in the table change
the vault directly. They aren't suggestions.

## Columns

- **Columns** shows or hides columns and changes their order. Title is always
  shown.
- A column header's menu offers **Rename…**, **Set type…**, sorting, and
  **Hide column**.
- **Rename** changes the attribute's name in every row in a single commit.
  It refuses if a row already has an attribute with the new name.
- **Set type** sets the attribute's type for the whole vault. Types are
  stored in `.config/attributes.md`, so another database that uses the same
  attribute shows the same type.

## Save view

**Save view** writes your current sort, filters, and columns into the
database block. Comments and formatting elsewhere in the block are kept.

## Publishing

When you publish a database note, the block is left out of the published
page.

## The agent

The agent can read a database with its `query_database` tool. The tool
returns the columns and up to 200 rows, which the agent treats as data. To
add a row, the agent creates a child note and then sets its attributes. You
approve both steps.
