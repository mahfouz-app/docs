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

The rows are the note's **direct** child notes. A row's own children are its
sub-pages, not rows of the database.

## Create a database

You can create a database in three ways:

- **New database.** Right-click the sidebar background or a vault and choose
  **New database**. To create a database inside a note, right-click the note
  and choose **New child database**. The new database opens in the editor with an empty heading; type
  its name. The **File** menu also has a **New Database** action, with no
  default key; see [Keyboard shortcuts](/guide/shortcuts/).
- **Turn into database.** Right-click a note that already has child notes and
  choose **Turn into database**. Its children become the rows, and the
  attributes they already use become the columns. The block goes below the
  note's heading; if the note doesn't start with one, a heading with the
  note's title is added above the text, which is otherwise left as it was.
  **Turn back into a note** removes the block. The child notes stay.
- **Convert a Markdown table.** Hover over a table in a note and click the
  **Convert to database** icon next to the wrap toggle. Each table row
  becomes a note: the first column becomes the note's title, and every other
  column becomes an attribute. A link to the new database replaces the
  table, and the whole conversion is one commit. You can convert a table of
  up to 500 rows.

None of these are available while a note is in Suggesting mode, because they
change the note directly.

## The table

A database note opens as a table in its own tab. To see or edit the
note itself, click **View source**. In Preview, the block shows as an
**Open database** card.

In the sidebar, a database starts collapsed and shows how many rows it has.
Expand it to see the rows as ordinary notes.

## Sort and filter

- Click a column header to sort by it. Click again to reverse the order, and
  once more to stop sorting by it.
- To sort by several columns, use **Sort**.
- **Filter** shows the rows that match every filter in the list. Each filter
  is a column, a comparison, and a value. A Select column offers its options.

Sorts and filters you change apply on this device until you choose
**Save view**. **Reset** returns to the saved view. If someone else changes
the saved view, your unsaved changes are dropped.

Some filters written in the block, such as `or` and `not` groups, can't be
shown in the **Filter** list. They still apply, and the list marks them
"can't be shown here".

## Edit cells and rows

- To edit a cell with its attribute's own editor, click it or press
  <kbd>Enter</kbd> on it. Press <kbd>Enter</kbd> or click elsewhere to save
  the value, or press <kbd>Escape</kbd> to cancel. <kbd>Tab</kbd> saves the
  value and moves to the next cell.
- A Select option or a checkbox saves as soon as you choose or tick it.
- Click a row's title to rename it. The open icon next to the title opens the
  note; <kbd>Cmd</kbd>-click (<kbd>Ctrl</kbd>-click) opens it in a new tab.
- **New row** adds a row: type its title and press <kbd>Enter</kbd>. Another
  empty row opens for the next one. A row without a title isn't created.
- **⋯** on a row offers **Open**, **Open in new tab**, and **Delete row**.
  You can restore a deleted row from Trash.

Each edit is an ordinary change to that note and is committed like any other.
The table has no undo; use [History](/guide/history/) or Trash instead.

If the database note is in Suggesting mode, edits in the table change the
vault directly instead of becoming suggestions.

## Columns

- **Columns** shows or hides columns and changes their order. Title is always
  shown.
- A column header's menu offers **Rename…**, **Set type…**, sorting, and
  **Hide column**.
- **Rename** changes the attribute's name in every row in a single commit.
  If a row already has an attribute with the new name, the rename isn't
  made.
- **Set type** sets the attribute's type for the whole vault. Types are
  stored in `.config/attributes.md`, so another database that uses the same
  attribute shows the same type.

## Save view

**Save view** writes your current sort, filters, and columns into the
database block. Comments and formatting elsewhere in the block are kept.

## Publishing

Publishing a database note leaves the block out of the published page.

## The agent

The agent can read a database with its `query_database` tool. The tool
returns the columns and up to 200 rows, which the agent treats as data. To
add a row, the agent creates a child note and then sets its attributes. You
approve both steps.
