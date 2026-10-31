---
layout: guide
title: "Databases"
since: "0.12.0"
description: "Turn a note into a table of its child notes: typed columns, sorting, filters, and saved views, all stored in your files."
permalink: /guide/databases/
---

A database is a note whose child notes are shown as a table. Each child note
is a row. Each attribute on those notes is a column. Nothing is stored outside
your files: the table is built from the notes and their attributes every time
you open it.

## What makes a note a database

A database note has two things:

- `database: custom` in its frontmatter. {% include since.html v="0.22.0" %}
- A `database` block in its body, which holds the database's views.

~~~markdown
---
database: custom
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

{% include since.html v="0.22.0" %} `database: custom` marks a database
of your own. A database Mahfouz uses for something of its own says so in
its place: `database: tasks` for a
[Tasks database](/guide/tasks/#a-tasks-database), `database: people` for
the [People database](/guide/people/) and `database: daily` for
[Daily notes](/guide/daily-notes/). A database has one of these at most.
Any other value, `database: true` included, is an ordinary attribute and
doesn't make the note a database. A copy of one of Mahfouz's databases
(**Duplicate**, an import) is a plain `database: custom`.

## Create a database

You can create a database in three ways:

- **New database.** Right-click the sidebar background, a vault or a plain
  folder and choose **New database**; from a folder, the database goes
  inside that folder. To create a database inside a note, right-click the note
  and choose **New child database**. The **File** menu also has a **New
  Database** action, with no default key; see
  [Keyboard shortcuts](/guide/shortcuts/).

  First, choose what it starts with: **Empty** (a Title column only), or a
  template: **Projects**, **Reading list**, **Meeting notes**, **Bookmarks**,
  **Timeline** {% include since.html v="0.18.0" %}, or **Tasks** {% include since.html v="0.22.0" %}. The new database opens as a table, ready for you to type its
  first row. To name it, click its title at the top of the tab.
- **Turn into database.** Right-click a note that already has child notes and
  choose **Turn into database**. Its children become the rows, and the
  attributes they already use become the columns. The block goes below the
  note's heading; if the note doesn't start with one, a heading with the
  note's title is added above the text, which is otherwise left as it was.
  **Turn back into a note** removes the block. The child notes stay. In
  the database's tab, it's in the **⋯ Database actions** menu too, except
  while the note is in Suggesting mode. {% include since.html v="0.16.0" %}
- **Convert a Markdown table.** Hover over a table in a note and click the
  **Convert to database** icon next to the wrap toggle. Each table row
  becomes a note: the first column becomes the note's title, and every other
  column becomes an attribute. A link to the new database replaces the
  table, and the whole conversion is one commit. You can convert a table of
  up to 500 rows.

None of these are available while a note is in Suggesting mode, because they
change the note directly.

### Templates

A template gives the database its columns, their types, a few views, and
sample rows you can delete. To start with no rows, turn off **Add sample
data** in the picker. {% include since.html v="0.18.0" %}

| Template | Columns | Views |
|---|---|---|
| Projects | Status, Owner, Start, Due | Table, Board by Status, Calendar by Due, Gantt from Start to Due {% include since.html v="0.16.0" %} |
| Reading list | Author, Shelf, Rating, Cover | Table, Gallery |
| Meeting notes | Date, Attendees, Type | Table, Calendar by Date |
| Bookmarks | Link, Topic, Read, Cover | Table, Gallery |
| Timeline {% include since.html v="0.18.0" %} | Status, Start, End, Depends on, Parent | Gantt from Start to End, colored by Status; Table |
| Tasks {% include since.html v="0.22.0" %} | Status, Due, Assignee, Parent task, Sub-tasks | Board by Status, Calendar by Due, Table |

Column types belong to the whole vault (see [Columns](#columns)). If your
vault already gives one of these attributes a type, it keeps that type: a
Select gains the options it's missing, and anything else stays as it is. If
your notes already use one of these attributes without a type, it gets the
template's type everywhere. The picker tells you about each of these, with
how many notes they affect, before anything is created.

Timeline opens on its Gantt view with five sample rows: a project and the
four tasks under it, each depending on the one before, so you see bars,
dependency arrows and a task tree at once. Depends on and Parent link rows
of the same database, and each gets a column linking back: **Blocks** and
**Sub-items**. Those two columns aren't shown in the views; turn them on in
**Columns** if you want them. {% include since.html v="0.18.0" %}

Tasks makes a Tasks database: its rows are [task pages](/guide/tasks/#task-pages),
listed in the Tasks tab, the Tasks panel and reminders beside the tasks
written as lines. Parent task and Sub-tasks link its rows to each other.
{% include since.html v="0.22.0" %}

Owner and Attendees are relations to your [People](/guide/people/)
database, which is created if you don't have one. Each person's row gets a
column linking back to the new database. If your notes already use that
attribute as text, or the relation can't be made, the column stays plain
text; the picker or a notification says so.

## The table

A database note opens as a table in its own tab. To see or edit the
note itself, click **View source** in the bottom bar. {% include since.html v="0.14.0" %} It's in the
**⋯ Database actions** menu too. {% include since.html v="0.16.0" %}
In Preview, the block shows as an **Open database** card.
<kbd>Mod</kbd><kbd>Enter</kbd> with the cursor on it, or <kbd>Enter</kbd>
after <kbd>↓</kbd> moves onto the card, opens the database. {% include since.html v="0.20.0" %}

On a phone, a database's toolbar is at the bottom of the screen:
**Filter**, **Sort**, **Group**, **Columns** and **+ New row** (see [Pages
and their toolbars](/guide/web/#phone-pages)). {% include since.html v="0.17.0" %}

The tab is laid out like a note, {% include since.html v="0.14.0" %} but always fills the pane, with a
small margin at each side: {% include since.html v="0.16.0" %}

- The breadcrumbs, with the note's **Details**, **Backlinks** and
  **Attributes** pills to their right. A phone shows no breadcrumbs: those
  open from the **⋯**. {% include since.html v="0.19.0" %}
- The page icon and the title, lined up with the table's left edge
  rather than a note's text, {% include since.html v="0.16.0" %} then the number of rows. When filters hide some rows, it says how many are shown,
  such as **3 of 4 rows**.
- The views as tabs, then **Filter**, **Sort** and **Group**, each with a
  count of the filters, sorts or grouping the view has, and **Columns** (a
  Board or Gallery has **Fields** instead of **Columns**). A view that shows
  no grouping, such as a Gallery or a Calendar, has no **Group**. {% include since.html v="0.18.0" %}
- When the toolbar can't fit every view beside **Filter**, **Sort** and
  **Group**, those three become one button, **Filter, sort and group** (an
  icon of three lines getting shorter, with their counts added up), which
  opens one panel with **Filter**, **Sort** and **Group** tabs. They combine
  before any view moves into **N more**. {% include since.html v="0.18.0" %}
- When the views don't all fit, the first ones stay in the row, the view
  you're looking at always among them, and the rest are in an **N more**
  menu at the end of the row. Pick one there to show it. {% include since.html v="0.17.0" %}
- As the pane narrows, the toolbar's buttons give way to their icons one
  at a time: first **Columns** (and **View settings**, which
  becomes a cog), then **+ View**, then **New**. Hover over an icon to see
  its name. {% include since.html v="0.17.0" %}
- After them, **⋯ Database actions**: {% include since.html v="0.16.0" %}
  - **Copy embed** copies an embed of the view you're looking at; see
    [Show a database in another note](#show-a-database-in-another-note).
    It isn't offered when that view has no name or shares its name with
    another view: rename the view first.
  - **View source** opens the note itself.
  - **Turn back into a note** removes the block; the rows stay as child
    notes. It isn't offered while the note is in Suggesting mode.
  - A [People database](/guide/people/#import) lists **Import vCard…**,
    **Import macOS Contacts…** (on macOS) and **Export all as vCard…**
    first. {% include since.html v="0.16.0" %}
- **New**, at the end of the toolbar in every view, adds a row: type its
  title and press <kbd>Enter</kbd>. {% include since.html v="0.16.0" %}
  - In a table, it opens the **New row** at the bottom, or in a grouped
    table, the first group's.
  - In a Gallery, it opens a new card after the last one.
  - On a Board, it opens a new card at the top of the first column, and
    the row gets that column's value.
  - On a Calendar, it opens a new row on today, and the row is due today.
  - In a [People database](/guide/people/#adding-a-person), the chevron
    beside **New** offers **Add with details…**.
  - **New** isn't available on a Board with no grouping it can show, on
    a Calendar whose dates can't be changed there (its date comes from
    Created, Updated or a rollup), or while the database is renaming a
    column.
- A second row shows the view's filters, sorts and grouping as chips, then
  **+ Add filter** and **+ Add sort**; see
  [The settings row](#the-settings-row). {% include since.html v="0.15.0" %}
- The bottom bar shows where the note stands and offers **Publish** and
  **Share**. Its **View source** button opens the note itself.
  **Appearance** and **Zoom** work as they do for a note.

To rename the database, click its title at the top of the tab, type the new
name, and press <kbd>Enter</kbd>. Press <kbd>Escape</kbd> to cancel. The
name is the note's heading, so its file follows it, as it does when you
retitle any note.

In the sidebar, a database starts collapsed.
Expand it to see the rows as ordinary notes.

## Sort and filter

- Click a column header to sort by it. Click again to reverse the order, and
  once more to stop sorting by it.
- To sort by several columns, open **Sort** (on a narrow toolbar, the
  **Sort** tab of **Filter, sort and group**). {% include since.html v="0.18.0" %} Each sort has a direction
  button: click **Ascending** to make it **Descending**, and again to flip
  it back. To change which sort comes first, drag a sort by its handle, or
  focus the handle and press <kbd>Alt</kbd><kbd>↑</kbd> or
  <kbd>Alt</kbd><kbd>↓</kbd>. {% include since.html v="0.15.0" %}
- The **Filter** tab shows the rows that match every filter in the list. Each filter
  is a column, a comparison, and a value. A Select column offers its options.
- When the view has no filters, the **Filter** tab opens the list of columns right
  away, with a search box; pick one to add a filter on it. The **Sort** tab does the
  same while the view has no sorts. {% include since.html v="0.15.0" %}

The comparisons are written as words: {% include since.html v="0.15.0" %}

| Column | Comparisons |
|---|---|
| Text, and columns with no type | **is**, **is not**, **contains**, **doesn't contain** |
| Select | **is**, **is not** |
| Checkbox | **is**, **is not** (**Checked** or **Unchecked**) |
| Number | **is**, **is not**, **is less than**, **is at most**, **is greater than**, **is at least** |
| Date and Date & time | **is**, **is not**, **is before**, **is on or before**, **is after**, **is on or after** |
| Multi-select | **has any of**, **has all of**, **has none of**, plus **is** and **is not** for an exact match |
| Relation | **has any of**, **has all of**, **has none of** |

Every column but a Checkbox also offers **is empty** and **is not empty**.
With **has any of**, **has all of** and **has none of**, the value is a
checklist of the column's values: tick as many as you need, and type to
search them. A row matches **has any of** when it holds at least one ticked
value, **has all of** when it holds every one, and **has none of** when it
holds none. Unticking the last value removes the filter. {% include since.html v="0.15.0" %}

Sorts and filters you change apply on this device until you choose
**Save view**. **Reset** returns to the saved view. If someone else changes
the saved view, your unsaved changes are dropped.

### The settings row {% include since.html v="0.14.0" %} {#the-settings-row}

A row under the toolbar shows each of the view's filters, sorts and
grouping as a chip, such as **Status is not Done**, **Rating descending** or
**Grouped by Status**:

- Click a filter chip to edit just that filter, right on the chip.
  {% include since.html v="0.15.0" %} Its column, comparison and value sit
  on one line as pills, a choice's value in its option's color: click a
  pill to change it, or for a list column, click its values to open the
  checklist. {% include since.html v="0.19.0" %}
- Click a sort chip to flip it between ascending and descending, and a
  Checkbox filter chip to flip it between **Checked** and **Unchecked**.
  {% include since.html v="0.15.0" %}
- Click the grouping chip to open the **Group** tab. {% include since.html v="0.17.0" %}
- Click a chip's **×** to remove just that filter, sort or grouping. A
  Board's grouping chip has no **×**, because a Board is always grouped.
- **+ Add filter** and **+ Add sort** open the list of columns, with a
  search box. Pick a column: a new filter shows as a dashed chip with its
  editor open, and stays dashed until it has a value; close the editor
  without a value and it's gone. A Checkbox column is added as **is
  Checked** right away, and a new sort starts ascending.
  {% include since.html v="0.15.0" %}
- When you've changed the view on this device, the row ends with
  **Changed on this device**, **Reset** and **Save view**.

A view with no filters, sorts or grouping shows just **+ Add filter** and
**+ Add sort** in that row. {% include since.html v="0.15.0" %}

Some filters written in the block, such as `or` and `not` groups, can't be
shown in the **Filter** list. They still apply, and the list marks them
"can't be shown here".

## Group rows {% include since.html v="0.12.0" %} {#group-rows}

**Group** splits the table into sections by a Select attribute, such as a
status. The sections follow the order of the attribute's options. A value
that isn't one of the options gets its own section after them, and rows with
no value come last, under "No ⟨attribute⟩". Your sort applies inside each
section.

- Open **Group** (on a narrow toolbar, the **Group** tab of **Filter, sort
  and group**) {% include since.html v="0.18.0" %}, then an attribute, or **None** to stop grouping. Only
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
- A Select or Multi-select cell opens a list of the attribute's options,
  with a search box. {% include since.html v="0.14.0" %} Type to filter the
  options, and click one (or press <kbd>Enter</kbd>) to choose it; a
  Select saves as soon as you choose. When no option matches what you
  typed (ignoring case), the last row is **Create** followed by the new
  option's pill, in the next unused color: choose it to add the option and
  set the cell to it. A name that can't be an option, such as one with a
  comma, has no Create row. **Edit options…** at the bottom opens the
  column's options. An attribute can be a Select
  with no options yet: create them from the cells as you go.
- A checkbox cell toggles
  with one click, or <kbd>Enter</kbd>; an unchecked one shows an empty box.
- The arrow keys move between cells, as in a spreadsheet. They don't move
  onto a row's **⋯**; <kbd>Tab</kbd> reaches it. {% include since.html v="0.16.0" %}
  <kbd>Home</kbd> and <kbd>End</kbd> move to a row's first and last cells. {% include since.html v="0.16.0" %}
- A table wider than the pane scrolls sideways inside the tab. Its first
  column stays at the left edge while it scrolls, whichever column it is, and
  each row's **⋯** stays at the right edge. When **Title** isn't the first
  column, it scrolls with the rest. {% include since.html v="0.16.0" %}
- A table with more rows than fit on a page shows them in pages. Under the
  table, a line such as "Showing 1–25 of 60 rows" sits beside **Previous**,
  **Next**, a button for each page, and a menu for how many rows a page
  holds: 25, 50 or 100. This device remembers your choice for every
  database. When every row fits on one page, there's no pager.
  {% include since.html v="0.16.0" %}
- In a grouped table, a group that runs onto the next page ends with
  "⟨group⟩ continues on the next page · N more", and the next page starts
  with "⟨group⟩ (continued)". A group's count is always the whole group's,
  not just the rows on this page. {% include since.html v="0.16.0" %}
- The table goes back to the first page when you change the view, its
  filters, its sort or its grouping. A row you create with <kbd>Enter</kbd>
  takes you to its page when the New row you typed in is on that page too;
  otherwise the table stays where it is and says the row was added. A row
  you're editing that your edit moves to another page takes you with it.
  <kbd>↓</kbd> stops at the last row of a page; use **Next** to go on.
  {% include since.html v="0.16.0" %}
- Select and Multi-select values show as pills in their options' colors
  (see [Select options](/guide/attributes/#options)). Hover a value that's
  cut short to read it whole.
- Click a row's title to rename it. The open icon next to the title opens the
  note; <kbd>Cmd</kbd>-click (<kbd>Ctrl</kbd>-click) opens it in a new tab.
- **New row**, under the last row, or **New** in the toolbar, adds a row:
  type its title and press <kbd>Enter</kbd>. Another
  empty row opens for the next one. A row without a title isn't created.
- **⋯** at the end of a row offers **Open**, **Open in new tab**, **Open
  linked note** (for a row with relations), and **Delete row**. {% include since.html v="0.16.0" %}
  You can restore a deleted row from Trash.

Each edit is an ordinary change to that note and is committed like any other.
The table has no undo; use [History](/guide/history/) or Trash instead.

If the database note is in Suggesting mode, edits in the table change the
vault directly instead of becoming suggestions.

## Columns

- **+** at the end of the header adds a column right in the header, with
  its name selected. {% include since.html v="0.14.0" %}
  - Until you type a name, the column is named after the highlighted type:
    **Text** to start, **URL** once you move to URL. When that name is
    already used, a number one past the highest is added (with **URL** and
    **URL 2** taken, the next is **URL 3**). {% include since.html v="0.17.0" %}
  - Type the column's name. The list of types is open under it from the
    start; **More types** shows the rest.
  - Click a type to add the column with that type. Select, Multi-select,
    Date, Date & time and Relation then open their next step, such as a
    Select's options; any other type puts the cursor in the column's first
    cell.
  - Or press <kbd>Enter</kbd> to add the column as Text. If you moved to a
    type with <kbd>↑</kbd> or <kbd>↓</kbd> first, it's added with that type,
    opening its step if it has one. A name your vault already gives a type
    keeps that type.
  - <kbd>Escape</kbd>, clicking elsewhere, or moving away with
    <kbd>Tab</kbd> discards the column; nothing is written. A name that
    can't be used says why under the header.

  The column is added to the view for everyone, in the database block, and
  a name with spaces or capitals is kept as the column's label (**Due
  date** is stored as `due_date`).
- **Columns** shows or hides columns and changes their order. Title is always
  shown. To move a column, drag the grip beside its name, or focus its switch
  and press <kbd>Alt</kbd>+<kbd>↑</kbd> or <kbd>Alt</kbd>+<kbd>↓</kbd>. {% include since.html v="0.15.0" %}
  - **Title** is in the list at its place, and any column can go before it.
    Its switch can't be turned off, but <kbd>Alt</kbd>+<kbd>↑</kbd> and
    <kbd>Alt</kbd>+<kbd>↓</kbd> move it like any column. {% include since.html v="0.16.0" %}
  - Turning a column off or on leaves it where it is while **Columns** is
    open. The next time you open it, hidden columns are listed after the
    shown ones. {% include since.html v="0.16.0" %}
  - A hidden column you move takes that place when you turn it on. {% include since.html v="0.16.0" %}
- To move a column from the table, point at its header and drag the grip on
  its top edge; a line shows where it will land. Click the grip to open the
  header's menu. {% include since.html v="0.15.0" %} **Title**'s header has
  the grip too, and a column can be dragged before it. {% include since.html v="0.16.0" %}
- To resize a column, Title included, drag the right edge of its header; a
  line and the width follow the pointer. Double-click the edge to fit the
  column to its widest cell. From the keyboard, <kbd>Tab</kbd> to the edge
  (**Resize** and the column's name) and press <kbd>←</kbd> or
  <kbd>→</kbd> (with <kbd>Shift</kbd> for bigger steps), <kbd>Home</kbd> or
  <kbd>End</kbd> for the narrowest and widest, or <kbd>Enter</kbd> to fit.
  **Reset width** in the column's menu puts it back to its natural width.
  Like a sort, a new width is kept on this device until you **Save view**,
  which stores it in the view as `columnSize`, the key Obsidian Bases uses,
  so everyone sees it. Embedded views use the saved widths, and on a
  phone the first column never takes more than 60% of the screen.
  {% include since.html v="0.18.0" %}
- A column header's menu offers **Rename…**, **Set type…**, sorting,
  **Move left**, **Move right** and **Show column**. **Title**'s menu has
  **Move left** and **Move right** too, and either one moves a column past
  Title. {% include since.html v="0.16.0" %}
- **Show column** has two parts. {% include since.html v="0.18.0" %} **In this view**: **Shown**, or
  **Hidden** to hide the column in this view. **In note pages (rows and
  the notes inside them)**: **Always show**, **Hide when empty** or
  **Always hide**, whether the attribute shows in the attributes block of
  every row and every note under a row. That's saved in the database's
  block; see [Where visibility is saved](/guide/attributes/#visibility).
- **Rename** starts from the name the header shows, and the header shows
  the name you type. {% include since.html v="0.17.0" %} The attribute is
  renamed the way **+** names a new column ("Due date" is `due_date`), in
  every row in a single commit. If a row already has an attribute with the
  new name, the rename isn't made. A new name that only changes how the
  name is written ("notes" to "Notes") changes the header alone, and no row.
- **Set type** sets the attribute's type for the whole vault. A typed
  column's icon in the header opens the same list of types. Types are
  stored in `.config/attributes.md`, so another database that uses the same
  attribute shows the same type. A type's next step, such as a Select's
  options or a date's format, has **←** to go back and no **Save**: each
  change applies as you make it. See
  [Changing a type](/guide/attributes/#change-type). {% include since.html v="0.14.0" %}

### Note ID {% include since.html v="0.16.0" %} {#note-id}

Every database lists **Note ID** in **Columns** (**Fields** on a Board or
Gallery), after **Updated**; the [Tasks](/guide/tasks/) table, which has
no Updated, lists it last. It's off until you turn it on. It shows each
row's note id, the `id` in the row's frontmatter, in monospace. You can't
edit it, but you can sort and filter by it.

Click a Note ID cell, or the Note ID line on a card, to copy the id; **Note
ID copied** confirms it. Clicking a card's Note ID line copies the id
without opening the row. In a [database view embedded in a
note](#show-a-database-in-another-note), the id shows but isn't copied.

## Save view

**Save view** writes your current sort, filters, grouping, and columns, with
their order, {% include since.html v="0.16.0" %} into the
view you're looking at, in the database block. It's at the end of the
[settings row](#the-settings-row) while the view has changes on this
device. {% include since.html v="0.14.0" %} Other views and the comments
and formatting elsewhere in the block are kept.

## Views

A database can have several views of the same rows, each with its own sort,
filters, grouping, and columns. The views appear as tabs under the title,
each with an icon for its kind {% include since.html v="0.14.0" %}; click one
to show it. The view you picked is remembered on this device.

- **+ View** adds a view: **Table**, **Board** grouped by one of the
  database's Select attributes, **Gallery** with the cover image you
  choose, **Calendar** by one of the rows' dates, or
  [**Gantt**](#gantt) from a start date to an end date.
  {% include since.html v="0.16.0" %}
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

## Board {% include since.html v="0.12.0" %} {#board}

A Board shows the rows as cards in columns, one column per option of a
Select attribute, such as a status. Values that aren't options get their own
columns after them, and rows with no value go in the last column, "No
⟨attribute⟩". In the block, a Board is a view with `type: kanban` and a
`groupBy`.

- **Move a card** by dragging it to another column. That sets the card's
  attribute to the column's value; dropping it on "No ⟨attribute⟩" clears it.
  Press <kbd>Escape</kbd> while dragging to cancel.
  While you drag, the card follows the pointer, the column under it is
  tinted, and a space opens where the card will land. A Board has no
  manual card order: each column keeps the view's sort, so the space shows
  where the sort puts the card, and none opens in a column whose filters
  would hide it. An empty column still has room to drop into. {% include since.html v="0.15.0" %}
- Or use **⋯** on a card, then **Move to**, which works from the keyboard
  too. The card's menu also offers **Open**, **Open in new tab**, and
  **Delete row**.
- **Click a card** to open its note; <kbd>Cmd</kbd>-click (<kbd>Ctrl</kbd>-click)
  opens it in a new tab. Click a field to edit it on the card, as you would
  a table cell; relations and rollups are edited in a Table view.
- Each field on a card shows its type's icon and its value. The field's
  name shows too when two fields share an icon, when a field has no icon
  (rollups, attributes with no type, Created and Updated), and on narrow
  screens. {% include since.html v="0.14.0" %}
- A column's header shows its option as a colored pill, how many cards it
  holds, and **+**, which opens that column's new row: type a title to add
  a card with that column's value. {% include since.html v="0.14.0" %}
- **New in ⟨column⟩** adds a card that already has that column's value.
- Each column shows 25 cards at first, then **Show 25 more** (or **Show N
  more** when fewer are left). The count in the column's header is all its
  cards, not just the ones shown. A card you move or create there shows,
  even when the sort puts it past the cards shown. {% include since.html v="0.16.0" %}
- **Reorder the columns** by dragging a column's grip, the handle at the
  top of its header, or with **Move left** and **Move right** in the
  column's **⋯**, as you reorder a table's columns. Any column moves,
  "No ⟨attribute⟩" and values that aren't options included. The order
  belongs to this view: like sorting and filtering, it applies on this
  device until you choose **Save view**, and **Reset** puts the default order
  back. The Select's own option order doesn't change; edit it in the
  option editor. Choosing another attribute in **Group** starts from the
  default order again. {% include since.html v="0.17.0" %}
- Values that aren't options say **not an option** after their name. Until
  you reorder the columns, their columns and "No ⟨attribute⟩" come after
  the option columns, in either sort direction: sorting a Board descending
  reverses only the options. {% include since.html v="0.16.0" %}
- The **Group** tab chooses which Select attribute the Board uses, and **Fields**
  chooses which attributes the cards show. Like sorting and filtering, these
  apply on this device until you choose **Save view**.
- **Fields** orders the fields as **Columns** orders a table's columns,
  Title included. Fields placed before Title show above the card's title. {% include since.html v="0.16.0" %}
- **Reorder a card's fields** by dragging a field's grip, which shows at
  the card's left edge when you point at the field. The field moves on
  every card of the view, as it would in **Fields**. {% include since.html v="0.17.0" %}

Cards in a column follow the view's sort. There's no manual card order.

## Gallery {% include since.html v="0.12.0" %} {#gallery}

A Gallery shows the rows as cards in a grid, each with a cover image above
its title and fields. The cover runs to the card's edges, and fields show
as they do on a Board card. {% include since.html v="0.14.0" %} It suits rows that have a picture, such as books,
places, or recipes. In the block, a Gallery is a view with `type: cards`.

When you add one with **+ View** ▸ **Gallery**, choose where its covers come
from:

- **Image from ⟨attribute⟩** uses an Image attribute of the rows. The view
  gets `image: <attribute>`. A row with no value in it has no cover.
- **First image in note** uses the first image in each row's note. This is
  the default when the view has no `image` key.
- **No image** shows cards without covers, written as `image: false`.

To change it later, open **View settings** in the toolbar and pick another
source under **Cover**. {% include since.html v="0.17.0" %} The change is written into the view straight
away, as the Gantt's [View settings](#view-settings) are.

Cards work like a Board's:

- **Click a card** to open its note; <kbd>Cmd</kbd>-click
  (<kbd>Ctrl</kbd>-click) opens it in a new tab. Click one of its fields
  to edit it on the card instead.
- **⋯** on a card offers **Open**, **Open in new tab**, and **Delete row**.
- **New** in the toolbar, {% include since.html v="0.16.0" %} or **+ New row** after the last card, adds a row.
- **Fields** chooses which attributes the cards show and in what order, as on
  a Board. Fields placed before Title show above the card's title. {% include since.html v="0.16.0" %}
  You can also drag a field's grip on a card, as on a Board. {% include since.html v="0.17.0" %}
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

## Calendar {% include since.html v="0.12.0" %} {#calendar}

A Calendar shows a month or a week, with each row on the day of one of its
dates, such as a due date. In the block, a Calendar is a view with `type: calendar` and
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
To change the date later, open **View settings** in the toolbar and pick
another under **Date**, which lists the same dates. {% include since.html v="0.17.0" %} The change is written
into the view straight away, with no **Save view** step.

Working with the calendar:

- **‹** and **›** change the month, and **Today** goes back to this month.
  The month shown isn't saved.
- **Month** and **Week**, next to **Today**, switch between the month and
  one week. A week shows seven tall days with every row on them, and a row
  with a time shows it before its title. **‹** and **›** then move by a
  week. The choice is kept on this computer until you click **Save view**,
  which writes `range: week` into the view (picking **Month** and saving
  removes it), so everyone with the vault sees the same layout.
- Weeks start on the day set in Settings → General →
  [First day of week](/guide/settings/).
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

From the keyboard, the month or week is one stop: the arrow keys move between days,
<kbd>Enter</kbd> enters a day so its rows and buttons can be reached with
the arrow keys, and <kbd>Escape</kbd> leaves it. When the Calendar is 600
pixels wide or less, as on a phone or in a split, days show a count; tap or
press <kbd>Enter</kbd> on a day to list its rows below the month, with a
button to add one.

Sort and filters apply as in a table. A Calendar isn't grouped: a grouping
saved in the view is kept in the block but not shown.

## Gantt {% include since.html v="0.16.0" %} {#gantt}

A Gantt shows each row as a bar on a timeline, from its start date to its
end date, such as a project phase from its start to its due date. The end
day is included: a bar from 3 March to 14 March covers 12 days. In the
block, a Gantt is a view with `type: gantt`, `date: <start attribute>` and
`end: <end attribute>`. This view is Mahfouz's own; other apps that read the
block show it as an unknown view.

To start with everything a Gantt uses already set up, create a database
from the [Timeline template](#templates): its Gantt has start and end
dates, bars colored by status, dependencies and sub-items.
{% include since.html v="0.18.0" %}

**+ View** ▸ **Gantt** offers the start first, then the end:

- **Start** lists the rows' dates: Date and Date & time attributes,
  attributes with no type whose values are dates, **Created**, and rollups
  that calculate **Earliest date** or **Latest date**.
- **End** lists the same dates without the start you picked, and with
  **Updated** instead of **Created**.

A Gantt needs two date attributes it can change. When the database has
fewer, the item reads **Gantt (needs two date attributes)** and can't be
chosen. If the view's `date` or `end` is missing or isn't a date, the Gantt
asks you to choose one, and your choice is written into the view.

### Read the timeline

- **Day**, **Week**, **Month** and **Quarter**, at the right of the
  Gantt's header, set the zoom. Like a sort, the zoom applies on this
  device until you click **Save view**, which writes it into the view as
  `range` (picking **Month** and saving removes it).
- The Gantt opens on today when its rows reach today, and otherwise on the
  first bar. **Earlier** and **Later** scroll by a day, a week, a month or
  a quarter, following the zoom, and **Today** goes back to today. A line
  marks today, and at Day and Week the weekends are shaded. The header
  names the months the rows span. Where you've scrolled isn't saved.
- At Week, the time header numbers the weeks, such as *2026 W53*. {% include since.html v="0.18.0" %}
  When the week starts on Monday, weeks follow ISO 8601: week 1 is the week
  with 4 January in it. When it starts on Sunday or Saturday, week 1 is the
  week with 1 January in it. The year is the week's own, so the days a week
  takes from the next year carry its number. The week's first day follows
  [First day of week](/guide/settings/).
- At Quarter, the time header names each quarter, such as *2026 Q4*, with
  a dotted line at each month in between. {% include since.html v="0.18.0" %}
- The column on the left lists the rows by name. Point at a name or a bar
  to read its dates. {% include since.html v="0.18.0" %} Click a name or a
  bar to open the row's note.

Each row shows one of these:

- **A bar**, when the row has both dates and the end isn't before the start.
- **A milestone**, a mark on one day, when the row has only one of its
  dates. If the view's start and end are the same attribute, every dated
  row is a milestone, and a note says so.
- **A hatched red bar**, when the end comes before the start. Point at it to
  read both dates. Fix it with **Set dates…** in its **⋯** menu; it can't be
  dragged.
- **The text it can't read**, such as *Start “next week” isn't a date*, when
  a date is written in a form Mahfouz can't read exactly, such as
  `10/13/2026`. The row has no bar until you fix the date: **Set dates…**
  replaces the text, or you can edit it in the note.
- **No dates** in an empty track, when the row has neither date. With a
  mouse or a trackpad, the track reads **Drag to set dates** instead; see
  [Drag bars](#drag-bars).

Sort and filters apply as in a table. Rows with no dates stay in the list, so
you can give them dates.

The **Name** column on the left stays in place as the timeline scrolls. To
make it wider or narrower, drag the right edge of its header, or
<kbd>Tab</kbd> to the edge (**Resize Name**) and press <kbd>←</kbd> or
<kbd>→</kbd> (with <kbd>Shift</kbd> for bigger steps). Double-click the edge,
or press <kbd>Enter</kbd> on it, to fit the longest name. The timeline takes
the rest of the width. As with a table's [column widths](#columns), the width
applies on this device until you **Save view**, which stores it as the
view's `columnSize` for `title`.
{% include since.html v="0.18.0" %}

### View settings

**View settings**, in the toolbar, changes the Gantt's **Start**, **End**,
**Color by**, **Dependencies** and **Sub-items**:

- **Start** and **End** pick the dates again. Start doesn't list the end,
  and End doesn't list the start.
- **Color by** colors each bar with the option color of a Select attribute,
  such as a status (see [Select options](/guide/attributes/#options)).
  **None** removes it, and the bars take the accent color.
- **Dependencies** picks the relation the Gantt's arrows follow; see
  [Dependencies](#gantt-dependencies).
- **Sub-items** picks the relation that nests rows under other rows; see
  [Sub-items](#gantt-sub-items).

Unlike sorting and filtering, each change in View settings is written into
the view straight away, so it changes the view for everyone with the vault
at once. There's no **Save view** step and no **Reset** for it.

### Lanes

The **Group** tab splits the rows into lanes by a Select attribute, such as a
status; its list is captioned **Group rows into lanes by**. The lanes follow
the order of the attribute's options, as a table's sections do, and each
lane's header says how many rows it holds. Click a lane's chevron, or press
<kbd>Enter</kbd>, <kbd>←</kbd> or <kbd>→</kbd> on its header, to collapse or
expand it. Like a table's grouping, lanes apply on this device until you
click **Save view**. A grouping the Gantt can't show as lanes, such as one
written by hand on a relation, is kept in the block, and a note says the
rows aren't grouped.

### Change dates

**⋯** on a row offers **Open**, **Open in new tab**, **Set dates…**, **Remove
dates** and **Delete row**:

- **Set dates…** picks the start on a month, then **Next** to pick the end
  (**Back** returns to the start). Nothing is written until you click
  **Save**, and only the dates you changed are written. A date that comes
  from **Created**, **Updated** or a rollup shows its day and why it can't be
  changed.
- **Remove dates** removes both dates. If one of them can't be changed here,
  only the other is removed.

A row's two dates are written together, in one commit. A date keeps its
form: a date stays a date, and a date and time keeps its time.

### Keyboard

The list of rows on the left is one stop for <kbd>Tab</kbd>. On a row:

- <kbd>↑</kbd> and <kbd>↓</kbd> move between rows, and <kbd>Enter</kbd> opens
  the row's note (<kbd>Cmd</kbd><kbd>Enter</kbd>, or
  <kbd>Ctrl</kbd><kbd>Enter</kbd>, opens it in a new tab).
- <kbd>→</kbd> opens the row's **⋯** menu, and <kbd>Escape</kbd> closes it.
- <kbd>Alt</kbd><kbd>←</kbd> and <kbd>Alt</kbd><kbd>→</kbd> move the row's
  bar a day earlier or later. At Quarter, they move it to the previous or
  next week.
- <kbd>Shift</kbd><kbd>Alt</kbd><kbd>←</kbd> and
  <kbd>Shift</kbd><kbd>Alt</kbd><kbd>→</kbd> move only its end.

Each change, and each change that can't be made, shows in a short message
at the bottom of the Gantt and is announced to screen readers.

### Drag bars {#drag-bars}

With a mouse or a trackpad:

- **Drag a bar**, or the name on the bar, to move it. Both dates move
  together. Dragging a milestone moves its one date.
- **Drag a bar's left or right edge** to change only its start or its end.
  Bars narrower than 24 pixels have no edges; drag them to move them, or use
  **Set dates…**.
- **Drag across an undated row's track**, where it reads **Drag to set
  dates**, to draw its dates in: the bar grows as you drag, and both dates
  are set when you let go. A drag that stays on one day sets a one-day span.

While you drag, the bar shows where it will land, and nothing is written
until you let go. Press <kbd>Escape</kbd> to cancel. Dragging near the
Gantt's edges scrolls it. Bars snap to whole days, and at Quarter to whole
weeks: a start lands on the first day of a week, and an end on the last.
Moving up or down never moves a row to another lane, and an end can't be
dragged before its start.

Some drags can't be made. The pointer shows it over such a bar, and as soon
as you start one, a message at the bottom of the Gantt says why:

- a date that comes from **Created**, **Updated** or a rollup, such as
  *Can't move ‘Launch’: its start comes from Created. Drag its end edge
  instead.*;
- a date written in another time zone, whose day here isn't the day it was
  written on; change it in the table;
- a bar whose end comes before its start;
- any drag while the database is being updated.

If the row changes while you drag it, for example when someone else's edit
arrives, nothing is written, and a message says so.

An undated row can only be drawn in when both its start and its end can be
changed here and they're different attributes. Otherwise its track reads
**No dates**, as it does on a touch screen.

### Dependencies {% include since.html v="0.16.0" %} {#gantt-dependencies}

A Gantt can draw an arrow from each row to the rows that wait for it, such
as from *Design* to *Build* when the build can't start until the design is
done. The arrows follow a relation of the database to itself (see
[Relate a database to itself](#relate-a-database-to-itself)): a row's links
in it are the rows it depends on.

To choose the relation, open **View settings** and pick it under
**Dependencies**. The **Dependencies** setting appears only when the
database has a relation to itself, or when the view already names one.
**None** removes the arrows. Like the view's other settings, the choice is
written into the view straight away, as `dependsOn: <key>`. A two-way
relation that links back through the same column, listed as **⟨key⟩
(two-way, same key)**, can't show dependencies, since each link points both
ways; a note says so, such as *“related” links both ways, so it can't show
dependencies. Pick another relation in View settings.* A two-way relation
that links back through another column works.

The list also offers the relation **Sub-items** uses (see
[Sub-items](#gantt-sub-items)). Picking it draws the arrows, but the rows
stop nesting, and a note says why, such as *“under” already shows
dependencies, so it can't nest rows. Pick another relation in View
settings.*

An arrow runs from the end of a row's dependency to the start of the row.
When the row starts on or before the day its dependency ends, the arrow is
dashed and in the warning color: the row starts too early. Screen readers
read each row's dependencies with its name, such as *Build, depends on
Design (conflict)*.

A row with no dates of its own whose sub-items have dates is drawn as its
bracket (see [Sub-items](#gantt-sub-items)), and its arrows attach to the
bracket: as a dependency it ends on the bracket's last day, and as a
dependent it starts on its first, so an arrow to or from it is dashed when
the dates overlap the bracket. A row whose dates can't be read has no
bracket to stand in for them, and no arrows.

Arrows are drawn only between rows the Gantt shows, so rows in a collapsed
lane have none. When dependencies point to rows the view's filter hides, a
note counts them, such as *1 dependency points to a row this view's filter
hides.*

With a mouse or a trackpad, point at a bar: a dot appears past its right
end. Drag the dot onto another row's bar or milestone, or a milestone's
name, to make that row depend on this one. A dashed line follows the
pointer, and dragging near the Gantt's edges scrolls it. Press
<kbd>Escape</kbd> to cancel. Bars narrower than 24 pixels have no dot.

On a touch screen or with the keyboard, use the row's **⋯** menu:

- **Add dependency…** opens *‘Build’ depends on…*, a list of the rows the
  view shows, with a search field. The rows it already depends on are
  checked. A row that would make a loop is greyed out, marked *(depends on
  it)*.
- **Remove dependency** lists the rows it depends on; pick one to remove it.
  A link to a row that no longer exists is listed with *(missing)*, and a
  link from the row to itself, written by hand, as *Build (itself)*, so you
  can remove those too.

Each change is one commit, and a message at the bottom of the Gantt says
what happened, such as *‘Build’ now depends on ‘Design’*. When the row
starts too early, the message adds *it starts before that ends*. Some
changes are refused, and nothing is written:

- a row can't depend on itself, or twice on the same row;
- a dependency can't make a loop, such as *Refused: ‘Design’ already depends
  on ‘Build’, so this would make a loop. Nothing was changed.*;
- if the relation has come to link both ways since the Gantt was drawn
  (someone changed the database, say), the change says *“blocked_by” links
  both ways now, so it can't show dependencies. Nothing was changed.*;
- removing a dependency that's already gone says *Nothing was changed*;
- dropping the dot anywhere but another bar or milestone says *Drop on
  another bar to add a dependency*;
- nothing can change while the database is being updated: *Can't change
  dependencies while the database is being updated.*

In a database embed, the arrows are drawn but can't be changed. In the list
a narrow Gantt shows instead of the timeline (see [On a phone](#on-a-phone)),
a row that starts too early says so, such as *starts before Design ends*.

### Sub-items {% include since.html v="0.16.0" %} {#gantt-sub-items}

A Gantt can nest rows under other rows, as a project's phases hold their
tasks: *API* and *UI* under *Build*, say. Like dependencies, the nesting
follows a relation of the database to itself (see
[Relate a database to itself](#relate-a-database-to-itself)): the row a row
links in it is its parent, and the rows that link a row are its sub-items.

To choose the relation, open **View settings** and pick it under
**Sub-items**. It lists the same relations as **Dependencies**, except the
one the arrows already follow. The **Sub-items** setting appears only when
there's a relation to choose or the view already names one. **None** shows
every row at the top level. The choice is written into the view straight
away, as `parentBy: <key>`. Some relations can't nest rows, and a note says
why:

- a two-way relation that links back through the same column, such as
  *“related” links both ways, so it can't nest rows. Pick another relation
  in View settings.*;
- the relation the arrows follow, *“blocked_by” already shows
  dependencies, so it can't nest rows. Pick another relation in View
  settings.*;
- anything that isn't a relation of the database to itself, *“client”
  can't nest rows: it isn't a relation of this database to itself.*

The rows show as a tree: each parent, then its sub-items, indented under
it, at every level, in the view's sort among rows of the same parent. A
parent's title is bold, and screen readers read its sub-items with its name,
such as *Build, no dates, 3 sub-items, spanning 23 Oct – 16 Nov*; a
sub-item adds its parent, such as *, sub-item of Build*. In lanes, a
sub-item stays with its parent, in its top-level row's lane, whatever its
own value.

The timeline draws a bracket over the days a parent's sub-items cover, at
every level. A parent with no dates of its own shows only the bracket, with
its title next to it, and its line on the left says the span. A parent with
dates shows its own bar, and a thin bracket under it. Point at a bracket to
read it, such as *Span of 3 sub-items: 23 Oct – 16 Nov. Change it by moving
the sub-items.* The bracket can't be dragged: it follows its sub-items. When
none of a parent's sub-items have dates, it has no bracket, and an undated
parent keeps its **Drag to set dates** track.

Click a parent's chevron to collapse or expand it. On a parent, <kbd>→</kbd>
expands it when it's collapsed, and <kbd>←</kbd> collapses it; on a
sub-item, <kbd>←</kbd> moves to its parent. Which parents are collapsed
isn't saved: reopening the database shows every row.

Some rows can't be nested as their links say, and a note says so:

- a row whose parent the view's filter hides is shown at the top level, such
  as *1 row is shown at the top level: its parent is hidden by this view's
  filter.*;
- a loop written by hand, such as two rows under each other, is shown from
  its first row, such as *‘Design’ is shown at the top level: its parent ‘QA’
  is inside it.*;
- a row linking more than one other row is shown under the first one the
  view shows, such as *1 row has more than one parent; it's shown under the
  first.*

Use a row's **⋯** menu to change where it sits:

- **Make sub-item of…** opens *Make ‘QA’ a sub-item of…*, a list of the rows
  the view shows, with a search field. Its parent now is checked, and a row
  inside it, which would make a loop, is greyed out, marked *(inside it)*.
  A row has one parent: picking another moves it there, and its other
  parents in this database are removed, such as *‘QA’ is now a sub-item of
  ‘Build’ (no longer under ‘Design’)*. On a row that links more than one
  parent, picking one it already links keeps that one and removes the
  others, with the same message. Links to notes outside the database, links
  that no longer lead anywhere, and a link from the row to itself, written
  by hand, stay. If the new parent is collapsed, it expands, so the row
  stays in view. If it's in a collapsed lane, the lane stays collapsed, the
  message adds *it's in the collapsed ‘Todo’ lane*, and the lane's header
  takes the focus.
- **Remove from ‘Build’** moves the row out from under the parent it's shown
  under, such as *‘QA’ is no longer a sub-item of ‘Build’*. A row with
  another parent is then shown under it, and the message adds *it's now
  under ‘Design’*. A row at the top level shows **Remove from parent**,
  greyed out.

Each change is one commit, and a message at the bottom of the Gantt says
what happened. Some changes are refused, and nothing is written:

- picking the row's parent now says *‘QA’ is already a sub-item of
  ‘Build’*;
- a row inside it makes a loop: *Refused: ‘Auth’ is inside ‘Build’, so this
  would make a loop. Nothing was changed.*;
- a row can't be a sub-item of itself;
- if the relation has come to link both ways since the Gantt was drawn, the
  change says *“under” links both ways now, so it can't nest rows. Nothing
  was changed.*;
- nothing can change while the database is being updated: *Can't change
  sub-items while the database is being updated.*

In the list a narrow Gantt shows (see [On a phone](#on-a-phone)), rows are
indented the same way, and a parent with no dates says its span and how many
sub-items it has, such as *spans 23 Oct – 16 Nov · 3 sub-items*.

### On a phone

When the Gantt is 600 pixels wide or less, as on a phone or in a split, it
shows a list instead of the timeline: each row's title and its dates, such
as *10 Oct – 22 Oct · 13 days*, grouped by lane. Each row keeps its **⋯**
menu, so you can set and remove its dates there. The zoom switch and dragging
aren't shown.

## Relations

A Relation column links each row to rows of another database: each book to
its authors, for example. It can also link rows of the same database, such
as each person to their manager. A relation is usually two-way. When you link a
book to an author, the author's row gets the book in its own column, in the
same commit.

### Create a relation

1. Click the column's type icon, or choose **Set type…** in its header
   menu, then **Relation…**.
2. Pick the other database from the list; type to search it. This database
   is listed first, as **⟨name⟩ (this database)**; see
   [Relate a database to itself](#relate-a-database-to-itself).
   {% include since.html v="0.14.0" %}
3. One click makes a two-way relation: the other database gets a column
   named after this one, linking back. To choose **One-way** instead, or to
   rename the reverse column, click **›** next to the database: **Two-way**
   with its **Reverse name**, such as `books`, or **One-way** to link in this
   direction only. Your choice applies as you make it.

The reverse name can't be a name Mahfouz keeps for itself, a column the
other database already has, or an attribute its rows already hold.

If the column already holds links, the other database's rows get their
links back when you save. Once a relation's rows hold links, it can't be
pointed at a different database.

### Relate a database to itself {% include since.html v="0.15.0" %} {#relate-a-database-to-itself}

Pick **⟨name⟩ (this database)** in the list to link rows of this database to
each other. Its details open, since there's no other database to name the
reverse column after. For a two-way relation, choose how it links back under
**Links back through**:

- **Another column** links back in a second column you name, such as a
  `manager` column with `reports` linking back. Nothing is written until you
  type a name. Linking Ada's manager to Grace adds Ada to Grace's reports.
- **This column** links back in the same column, such as `related`: linking
  Ada to Grace also links Grace to Ada.

**One-way** links in this direction only. A row can't link to itself, so the
picker doesn't list the row you're editing.

### Link rows {% include since.html v="0.12.0" %} {#link-rows}

- Click a Relation cell's edit button, or press <kbd>Enter</kbd> on it, to
  open the picker. Type to search the other database's rows; the rows
  already linked are listed first.
- A relation to your People database lists people by name and `@handle`,
  with **Search people**: the people you picked recently come first, under
  **Recent**, then **All people**. {% include since.html v="0.14.0" %}
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
with the same picker, and each link there has an **×** to remove it, except a person (below).

In a relation to your People database, such as **Manager** and **Direct
reports**, each link is a [person chip](/guide/people/#person-chips), in the
table and in the Attributes panel. Click a person's name to open their note:
the cell has no separate open button. To remove a person, focus their chip
and press <kbd>Backspace</kbd>, or choose **Remove** in its right-click menu.
{% include since.html v="0.15.0" %}

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

A Relation column's filter offers **has any of**, **has all of**, **has
none of**, **is empty** and **is not empty**. {% include since.html v="0.15.0" %}
For the first three, tick rows of the other database in the checklist.
Sorting a Relation column sorts by its linked titles.

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

## Rollups {% include since.html v="0.12.0" %} {#rollups}

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

## Show a database in another note {% include since.html v="0.12.0" %} {#show-a-database-in-another-note}

Any note can show one of a database's views, such as a weekly review showing
the books you're reading. Type `/` and choose **Database view**, then start
typing the database's name and pick it from the suggestions, which list only
databases. Or, in the database's tab, open a view's
**▾** menu and choose **Copy embed**, then paste it into the note. **⋯
Database actions** → **Copy embed** {% include since.html v="0.16.0" %} copies the view you're looking at the same
way; neither is offered for a view with no name, or one that shares its name
with another view, until you rename it.

The note holds a small block:

````markdown
```database-view
source: "[[Reading list]]"
view: Reading now
```
````

- `source` is the database, as a link. If you rename the database, Mahfouz
  updates the link.
- `view` names one of its views. Without it, the first view is shown. If you
  rename or delete that view, the embed shows the first view and says so.

In Preview, the block shows the view's rows as they are now. The embed is
read-only: clicking a row's
title opens its note in a new tab, and you edit rows in the database itself.
The block's text shows when you move the cursor onto it or choose **Edit
source**. Other apps show it as a code block.

The embed keeps the view's layout, read-only:

- **Table**: up to 10 rows.
- **Board**: its columns, with up to 10 cards each. A column's heading counts
  all its rows. You can't drag cards or add rows. A Board with no grouping,
  or one grouped by something an embed can't show, such as a relation,
  shows as a table and says why.
- **Gallery**: up to 10 cards.
- **Calendar**: the current month, with each row on its day, or the current
  week for a view saved as a week. You can't move to other months or weeks,
  and rows on other days or with no date aren't shown. A Calendar with no date attribute says so instead. When the note
  is narrow, days show a count; click or press <kbd>Enter</kbd> on a day to
  list its rows below the month.
- **Gantt**: {% include since.html v="0.16.0" %} one month of the timeline,
  or a quarter for a view saved at Quarter: the one holding today when the
  rows reach today, otherwise the one holding the first start. It shows up
  to 10 rows with dates in that month, in their lanes and colors, and bars
  that run past it are cut at its edges. You can't scroll, zoom or drag. The
  line at the bottom counts the rows outside the month, the rows without
  dates, and the rows that didn't fit, such as *2 more rows*. Dependency
  arrows are drawn, but can't be changed. Sub-items stay under their
  parents, and nothing collapses; a parent with no dates is drawn as its
  bracket when its sub-items in that month give it one. It counts as one of
  the 10 rows, and is left out when none of its sub-items fit.

When rows are left out, a line at the bottom says how many are shown (for a
Calendar, how many aren't), with **Open database** to see the rest. In a
Board, <kbd>Tab</kbd> moves between columns, and the arrow keys move between
cards.

{% include since.html v="0.20.0" %} From the keyboard, <kbd>↓</kbd> from
the line above an embed moves into it: <kbd>↑</kbd> and <kbd>↓</kbd> move
between **Open database**, **Edit source** and the rows' links,
<kbd>Enter</kbd> opens one, and <kbd>Esc</kbd> goes back to the text (see
[Block widgets](/guide/keyboard-writing/#block-widgets)).

A view's sort, filters and column order {% include since.html v="0.16.0" %} apply, as saved in the database. A column before Title comes first in a table, and above the title on a card. Changes you
haven't saved with **Save view** don't show in embeds. An embed in a note's
history shows today's rows, not the rows as they were.

## Publishing

Publishing a database note leaves the block out of the published page.

Publishing a note with an embedded view, or exporting it to Word or PDF, replaces the
block with a table of the view's rows, up to 100: titles and the view's
columns, as plain text, in the view's column order, so a column placed before
Title comes first. {% include since.html v="0.16.0" %} Exporting to Markdown keeps the block as written. The
table is built each time the note is published, so rows added later appear
when you next publish or update the page; a change to a row doesn't by itself
mark the page out of date.

If something a published table shows is later marked not to publish, made
disk-only, or deleted, a page that publishes automatically is updated to
remove it. That covers a row, a linked note in a relation column, or the
database itself. For any other page, Mahfouz tells you which page still shows
it, and it's removed when you update the page. Mahfouz remembers what each
page showed on the computer that published it, so a page published from
another computer, or before you cleared the app's site data, isn't checked
until you update it from this one. Some rows and columns are always left out:

- rows marked not to publish, disk-only rows, and people;
- links to those notes in relation columns, and their values in rollups;
- the **Created by** and **Last edited by** columns.

A view that shows [Note ID](#note-id) publishes each row's id. Note ids are
time-ordered, so they reveal when each row was created, even with
**Created** hidden; the publish dialog and **Page settings** warn when a view
on the page shows Note ID. Hide Note ID in the view and save the view to
leave it out. {% include since.html v="0.16.0" %}

An embed is published as *Database view (not published)* when its database is
itself marked not to publish, is disk-only, or holds your people, and when
Mahfouz can't find the database or read its block. The same rules apply when
you export to Word or PDF.

## The agent

The agent can read a database with its `query_database` tool. The tool
returns the database's views, the columns of the view it asked for, and up to
200 rows, which the agent treats as data. For a Gantt view, it also returns
the view's start (`date`), `end`, zoom (`range`: day, week, month or quarter),
the Select attribute its bars are colored by (`color_by`), the relation
its dependency arrows follow (`depends_on`), and the relation that nests its
rows (`parent_by`).
{% include since.html v="0.16.0" %} To
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
