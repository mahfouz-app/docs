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

## Group rows

**Group** splits the table into sections by a Select attribute, such as a
status. The sections follow the order of the attribute's options. A value
that isn't one of the options gets its own section after them, and rows with
no value come last, under "No ⟨attribute⟩". Your sort applies inside each
section.

- Choose **Group**, then an attribute, or **None** to stop grouping. Only
  Select attributes are offered; if there are none, set a column's type to
  Select first.
- Click a section's name to collapse or expand it.
- **New in ⟨section⟩** adds a row that already has that section's value.
- When you change a row's value, the row moves to its new section.

Like sorting and filtering, grouping applies on this device until you choose
**Save view**, which writes it into the block as `groupBy`.

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

**Save view** writes your current sort, filters, grouping, and columns into the
view you're looking at, in the database block. Other views and the comments
and formatting elsewhere in the block are kept.

## Views

A database can have several views of the same rows, each with its own sort,
filters, grouping, and columns. The views appear as buttons in the toolbar;
click one to show it. The view you picked is remembered on this device.

- **+ View** adds a view: **Table**, **Board** grouped by one of the
  database's Select attributes, **Gallery** with the cover image you
  choose, or **Calendar** by one of the rows' dates.
- The **▾** next to the current view offers **Rename**, **Duplicate**, and
  **Delete view**. Rename edits the name in place: press <kbd>Enter</kbd> to
  save it or <kbd>Escape</kbd> to cancel. Deleting a view asks first; the rows
  and their notes aren't affected.
- View names must be unique, ignoring case, and can't start with `#`.

Adding, renaming, duplicating, or deleting a view changes the database block
straight away. Each view keeps its own unsaved changes on this device until
you choose **Save view** while showing it.

A view type this app doesn't support yet, for example one written in another
app, is shown as a table, with a note saying so.

## Board

A Board shows the rows as cards in columns, one column per option of a
Select attribute, such as a status. Values that aren't options get their own
columns after them, and rows with no value go in the last column, "No
⟨attribute⟩". In the block, a Board is a view with `type: kanban` and a
`groupBy`.

- **Move a card** by dragging it to another column. That sets the card's
  attribute to the column's value; dropping it on "No ⟨attribute⟩" clears it.
  Press <kbd>Escape</kbd> while dragging to cancel.
- Or use **⋯** on a card, then **Move to**, which works from the keyboard
  too. The card's menu also offers **Open**, **Open in new tab**, and
  **Delete row**.
- **Click a card** to open its note; <kbd>Cmd</kbd>-click (<kbd>Ctrl</kbd>-click)
  opens it in a new tab. Cards show the view's fields, read-only; edit them
  in a Table view or in the note.
- **New in ⟨column⟩** adds a card that already has that column's value.
- **Group** chooses which Select attribute the Board uses, and **Fields**
  chooses which attributes the cards show. Like sorting and filtering, these
  apply on this device until you choose **Save view**.

Cards in a column follow the view's sort. There's no manual card order.

## Gallery

A Gallery shows the rows as cards in a grid, each with a cover image above
its title and fields. It suits rows that have a picture, such as books,
places, or recipes. In the block, a Gallery is a view with `type: cards`.

When you add one with **+ View** ▸ **Gallery**, choose where its covers come
from:

- **Image from ⟨attribute⟩** uses an Image attribute of the rows. The view
  gets `image: <attribute>`. A row with no value in it has no cover.
- **First image in note** uses the first image in each row's note. This is
  the default when the view has no `image` key.
- **No image** shows cards without covers, written as `image: false`.

Cards work like a Board's:

- **Click a card** to open its note; <kbd>Cmd</kbd>-click
  (<kbd>Ctrl</kbd>-click) opens it in a new tab.
- **⋯** on a card offers **Open**, **Open in new tab**, and **Delete row**.
- **+ New row**, in the toolbar or after the last card, adds a row.
- **Fields** chooses which attributes the cards show, and sort and filters
  apply as in a table. A Gallery isn't grouped: a grouping saved in the view
  is kept in the block but not shown.

Covers come only from images in the vault. The first image is taken from
the note's text as it stands without its pending suggestions: an image
that's only in a comment, in a code block, or added by a pending suggestion
is skipped, while one a pending deletion would remove counts until the
deletion is accepted. A few forms give no cover:

- an attribute written as a wikilink, such as `[[cover.png]]`;
- a link that isn't an image, such as a PDF;
- an image link with a space in its path, such as `![](my cover.png)`.
  Write the space as `%20`, or use the picker, which never adds spaces.

The first-image fallback is Mahfouz's own. A Gallery written in another app
with `type: cards` keeps its `image` and other settings, such as
`imageFit` and `cardSize`, exactly as written, though Mahfouz doesn't use
them yet.

## Calendar

A Calendar shows a month, with each row on the day of one of its dates, such
as a due date. In the block, a Calendar is a view with `type: calendar` and
`date: <attribute>`. This view is Mahfouz's own; other apps that read the
block show it as an unknown view.

**+ View** ▸ **Calendar** offers the dates the rows can be placed by:

- a Date or Date & time attribute, or an attribute with no type whose values
  are dates. You can move these rows.
- **Created** or **Updated**, and rollups that calculate **Earliest date** or
  **Latest date**. These are read-only: the Calendar shows the rows but can't
  move them, and says so.

If the view's `date` is missing or names an attribute that isn't a date, the
Calendar asks you to choose one, and your choice is written into the view.

Working with the month:

- **‹** and **›** change the month, and **Today** goes back to this month.
  The month shown isn't saved.
- A day shows up to three rows, then **+N more**, which lists the rest.
- **Drag a row** to another day to change its date. A date keeps its form: a
  date stays a date, and a date and time keeps its time.
- **+** on a day adds a row with that date.
- **⋯** on a row offers **Open**, **Open in new tab**, **Move to date…**,
  **Remove date**, and **Delete row**.
- **No date (N)** shows the rows without a date. Drag one onto a day to give
  it that date, or drag a row onto the list to remove its date.

A value Mahfouz can't read exactly as a date, such as `10/13/2026` or
`2026-02-30`, is listed under **No date** with its text, and can't be moved
until you fix it in the note.

From the keyboard, the month is one stop: the arrow keys move between days,
<kbd>Enter</kbd> enters a day so its rows and buttons can be reached with
the arrow keys, and <kbd>Escape</kbd> leaves it. When the Calendar is 600
pixels wide or less, as on a phone or in a split, days show a count; tap or
press <kbd>Enter</kbd> on a day to list its rows below the month, with a
button to add one.

Sort and filters apply as in a table. A Calendar isn't grouped: a grouping
saved in the view is kept in the block but not shown.

## Relations

A Relation column links each row to rows of another database: each book to
its authors, for example. A relation is usually two-way. When you link a
book to an author, the author's row gets the book in its own column, in the
same commit.

### Create a relation

1. In the column header's menu, choose **Set type…**, then **Relation**.
2. Under **Related database**, choose the other database. If there's no
   other database yet, create one first.
3. Choose **Two-way** and type the **Reverse name**: the column the other
   database gets, such as `books`. Or choose **One-way** to link in this
   direction only.

The reverse name can't be a name Mahfouz keeps for itself, a column the
other database already has, or an attribute its rows already hold.

If the column already holds links, the other database's rows get their
links back when you save. Once a relation's rows hold links, it can't be
pointed at a different database.

### Link rows

- Click a Relation cell's edit button, or press <kbd>Enter</kbd> on it, to
  open the picker. Type to search the other database's rows; the rows
  already linked are listed first.
- Click a row, or press <kbd>Enter</kbd> on it, to link or unlink it. Choose
  **Done**, or click or move focus outside the picker, to apply your changes
  as one commit. <kbd>Tab</kbd> moves to the picker's buttons.
  <kbd>Escape</kbd> discards your changes.
- **New in ⟨database⟩** creates a row in the other database, with what you
  typed as its title, and selects it. It's linked when you apply.
- **Open linked note** opens the highlighted row. A row's **⋯** menu offers
  it too.

A cell shows up to three links, then a **+K** button that shows the rest. A
Board card shows them as pills. The Attributes panel edits a row's relations
with the same picker, and each link there has an **×** to remove it.

A link to a note that no longer exists is struck through. To remove it,
unselect it in the picker, or click its **×** in the Attributes panel. If the
note is restored from Trash, the link works again. A link to a note outside
the other database is shown, but nothing is written back to it.

A column header shows **One-way relation** with the reason when links are
written on this side only: the relation was set up as one-way, the other
database can't be found, or it has no matching column.

### Links on one side only

A two-way link can end up on one side only, for example after a file is
edited in another app. In the table, such a link has a dashed border and a ↶
mark, and the column header shows how many there are, such as **2 not linked
back**.

To fix them, click **Repair…** in the column header:

1. For each pair, choose **Link both**, the default, or **Unlink both**. The
   dialog says which side holds the link and which side changed most
   recently.
2. To also remove links to notes that no longer exist, select **Remove links
   to deleted notes**. It's off by default, because restoring a deleted note
   from Trash makes its links work again.
3. Click **Apply**. All the changes are made in one commit. **Cancel** or
   <kbd>Escape</kbd> changes nothing.

### Filter and sort by a relation

A Relation column's filter offers **contains**, **doesn't contain**, **is
empty** and **is not empty**. For **contains**, choose a row of the other
database. Sorting a Relation column sorts by its linked titles.

### In your files

A relation is stored in both places Mahfouz keeps a database's data:

- Each row holds its links as a list of wikilinks, which other apps such as
  Obsidian can read:

  ```yaml
  authors: ["[[authors/ursula_k_le_guin|Ursula K. Le Guin]]"]
  ```

- The database block names the other database and the reverse column:

  ```yaml
  properties:
    authors:
      relation: { target: "[[Authors]]", reverse: books }
  ```

When you retitle a row or a database, Mahfouz updates the links to it and the
other database's block in one commit, so the relation keeps working.

Every change to a relation, from the table, the Attributes panel, the agent
or a plugin, updates both sides. A view can't be grouped by a relation. Use
the same Mahfouz version on every device that edits a vault with
relations: a version from before relations edits only one side of a link.

## Rollups

A Rollup column summarizes a property of each row's related rows: the
average rating of an author's books, for example, or the date of their latest
book. Its values are computed from the related rows each time you look, so
they follow every change to those rows.

### Add a rollup

1. Open **Columns** and choose **Add rollup…**. It needs a Relation column;
   without one, it says to add a Relation column first.
2. Give the column a **Name**, then choose the **Relation** to follow, the
   **Property** of the related rows to read, and what to **Calculate**:

   | Calculate | Gives |
   |---|---|
   | **Show original** | the values themselves |
   | **Count all** | how many related rows there are |
   | **Count values** | how many values the related rows hold; each item of a list counts |
   | **Count unique values** | how many different values there are |
   | **Sum**, **Average**, **Min**, **Max** | for a Number property |
   | **Earliest date**, **Latest date** | for a Date or Date & time property, or Created and Updated |

   **Calculate** offers only what fits the property you chose.

A rollup column is read-only; its header says which relation it's computed
from. You can sort and filter it like any column of its result: a number, a
date, or a list for **Show original**. Text that isn't a number is left out
of a sum or an average.

To change a rollup, open its column menu and choose **Edit rollup…**. **Remove
rollup** deletes the column and takes it out of every view's columns, sort and
grouping. If a saved filter uses the rollup, remove that filter first.

If a rollup can't be computed, for example because its relation was removed,
its header shows the reason. Renaming the relation column updates its rollups,
but renaming a column in the related database doesn't: choose **Edit
rollup…** and pick the property again. If rows hold their own value under the rollup's
name, the rollup hides it, and the header says how many rows do.

The definition lives in the database block, next to the relation:

```yaml
properties:
  avg_rating:
    rollup: { relation: books, property: rating, function: average }
```

The values are never written to your notes.

## Publishing

Publishing a database note leaves the block out of the published page.

## The agent

The agent can read a database with its `query_database` tool. The tool
returns the database's views, the columns of the view it asked for, and up to
200 rows, which the agent treats as data. To
add a row, the agent creates a child note and then sets its attributes. You
approve both steps.

The agent can also link and unlink rows. Its change lists every note it
affects, including the rows of the other database that get their links
updated. When the agent may apply safe edits on its own, a relation change
that removes links or changes other notes still waits for you to approve it.
If the row changed while the change was waiting, approving it is refused and
the agent proposes it again. Undoing the agent's change restores both sides.
If a change was only partly written, its links may be left on one side:
**Repair…** in the column header fixes them.
