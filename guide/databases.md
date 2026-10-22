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

- **New database.** Right-click the sidebar background, a vault or a plain
  folder and choose **New database**; from a folder, the database goes
  inside that folder. To create a database inside a note, right-click the note
  and choose **New child database**. The **File** menu also has a **New
  Database** action, with no default key; see
  [Keyboard shortcuts](/guide/shortcuts/).

  First, choose what it starts with: **Empty** (a Title column only), or a
  template: **Projects**, **Reading list**, **Meeting notes**, or
  **Bookmarks**. The new database opens as a table, ready for you to type its
  first row. To name it, click its title at the top of the tab.
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

### Templates

A template gives the database its columns, their types, a few views, and one
example row you can delete:

| Template | Columns | Views |
|---|---|---|
| Projects | Status, Owner, Start, Due | Table, Board by Status, Calendar by Due |
| Reading list | Author, Shelf, Rating, Cover | Table, Gallery |
| Meeting notes | Date, Attendees, Type | Table, Calendar by Date |
| Bookmarks | Link, Topic, Read, Cover | Table, Gallery |

Column types belong to the whole vault (see [Columns](#columns)). If your
vault already gives one of these attributes a type, it keeps that type: a
Select gains the options it's missing, and anything else stays as it is. If
your notes already use one of these attributes without a type, it gets the
template's type everywhere. The picker tells you about each of these, with
how many notes they affect, before anything is created.

Owner and Attendees are relations to your [People](/guide/people/)
database, which is created if you don't have one. Each person's row gets a
column linking back to the new database. If your notes already use that
attribute as text, or the relation can't be made, the column stays plain
text; the picker or a notification says so.

## The table

A database note opens as a table in its own tab. To see or edit the
note itself, click **⋯** (**More view actions**) at the end of the toolbar
and choose **View source**. {% include since.html v="0.14.0" %} In Preview, the block shows as an
**Open database** card.

The tab is laid out like a note: {% include since.html v="0.14.0" %}

- The breadcrumbs, with the note's **Details**, **Backlinks** and
  **Attributes** pills to their right.
- The page icon and the title, at the width of a note's text, then the
  number of rows. When filters hide some rows, it says how many are shown,
  such as **3 of 4 rows**.
- The views as tabs, then the **Filter**, **Sort**, **Group** and
  **Columns** buttons, as icons (a Board or Gallery has **Fields** instead
  of **Columns**), and **⋯**, which holds **View source**.
- When the view has filters, sorts or a grouping, a second row shows them
  as chips; see [The settings row](#the-settings-row).
- The bottom bar shows where the note stands and offers **Publish** and
  **Share**. The width
  button switches the tab between the text width and the full width of the
  pane; this device remembers the choice for each database. **Appearance**
  and **Zoom** work as they do for a note.

To rename the database, click its title at the top of the tab, type the new
name, and press <kbd>Enter</kbd>. Press <kbd>Escape</kbd> to cancel. The
name is the note's heading, so its file follows it, as it does when you
retitle any note.

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

### The settings row {% include since.html v="0.14.0" %} {#the-settings-row}

When a view has filters, sorts or a grouping, a row under the toolbar shows
each one as a chip, such as **Rating descending** or **Grouped by Status**:

- Click a chip to edit it: it opens **Filter**, **Sort** or **Group** at
  that setting.
- Click a chip's **×** to remove just that filter, sort or grouping. A
  Board's grouping chip has no **×**, because a Board is always grouped.
- **+ Add filter** opens **Filter** to add one.
- When you've changed the view on this device, the row ends with
  **Changed on this device**, **Reset** and **Save view**.

A view with none of these shows no second row.

Some filters written in the block, such as `or` and `not` groups, can't be
shown in the **Filter** list. They still apply, and the list marks them
"can't be shown here".

## Group rows {% include since.html v="0.12.0" %} {#group-rows}

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
- The arrow keys move between cells, as in a spreadsheet.
- Select and Multi-select values show as pills in their options' colors
  (see [Select options](/guide/attributes/#options)). Hover a value that's
  cut short to read it whole.
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

- **+** at the end of the header adds an **Untitled** column right in the
  header, with its name selected. {% include since.html v="0.14.0" %}
  - Type the column's name. The list of types is open under it from the
    start; **More types** shows the rest. **Relation** is listed only when
    the vault has another database.
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
  shown.
- A column header's menu offers **Rename…**, **Set type…**, sorting, and
  **Hide column**.
- **Rename** changes the attribute's name in every row in a single commit.
  If a row already has an attribute with the new name, the rename isn't
  made.
- **Set type** sets the attribute's type for the whole vault. A typed
  column's icon in the header opens the same list of types. Types are
  stored in `.config/attributes.md`, so another database that uses the same
  attribute shows the same type. A type's next step, such as a Select's
  options or a date's format, has **←** to go back and no **Save**: each
  change applies as you make it. See
  [Changing a type](/guide/attributes/#change-type). {% include since.html v="0.14.0" %}

## Save view

**Save view** writes your current sort, filters, grouping, and columns into the
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

## Board {% include since.html v="0.12.0" %} {#board}

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
- **Group** chooses which Select attribute the Board uses, and **Fields**
  chooses which attributes the cards show. Like sorting and filtering, these
  apply on this device until you choose **Save view**.

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

Cards work like a Board's:

- **Click a card** to open its note; <kbd>Cmd</kbd>-click
  (<kbd>Ctrl</kbd>-click) opens it in a new tab. Click one of its fields
  to edit it on the card instead.
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

## Relations

A Relation column links each row to rows of another database: each book to
its authors, for example. A relation is usually two-way. When you link a
book to an author, the author's row gets the book in its own column, in the
same commit.

### Create a relation

1. Click the column's type icon, or choose **Set type…** in its header
   menu, then **Relation…**.
2. Pick the other database from the list; type to search it. If there's no
   other database yet, create one first. {% include since.html v="0.14.0" %}
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
**▾** menu and choose **Copy embed**, then paste it into the note.

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

When rows are left out, a line at the bottom says how many are shown (for a
Calendar, how many aren't), with **Open database** to see the rest. In a
Board, <kbd>Tab</kbd> moves between columns, and the arrow keys move between
cards.

A view's sort and filters apply, as saved in the database. Changes you
haven't saved with **Save view** don't show in embeds. An embed in a note's
history shows today's rows, not the rows as they were.

## Publishing

Publishing a database note leaves the block out of the published page.

Publishing a note with an embedded view, or exporting it to Word or PDF, replaces the
block with a table of the view's rows, up to 100: titles and the view's
columns, as plain text. Exporting to Markdown keeps the block as written. The
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

An embed is published as *Database view (not published)* when its database is
itself marked not to publish, is disk-only, or holds your people, and when
Mahfouz can't find the database or read its block. The same rules apply when
you export to Word or PDF.

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
