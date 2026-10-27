---
layout: guide
title: "Attributes & the right sidebar"
since: "0.2.0"
description: "Note pills, the right sidebar and per-note attributes."
permalink: /guide/attributes/
---

## Note pills & the right sidebar {% include since.html v="0.13.0" %} {#note-pills--the-right-sidebar}

A row of pills always sits at the right of the note header, above the
text, whether the right sidebar is open or not:

- **Who and when**: avatars for the person who last edited the note
  and, if different, the person who created it, then how long ago it was
  last edited ("Edited 5m ago", or "Not committed" for a note that has
  no commit yet). Hover for names. Opens **Details**.
- **Backlinks**, **Tags**, **Attributes**, **Comments**: an icon and a
  count each. A pill at zero is dimmed but still clickable. The
  **Comments** pill is tinted while the note has unresolved comments.

With the right sidebar closed, clicking a pill opens a card under it
with that section:

- **Details**: who created and last edited the note, its path, and the
  latest 5 entries of its [history](/guide/history/).
- **Backlinks**: the notes that link here.
- **Tags**: the note's tags.
- **Attributes**: the note's attributes, read-only, with **Edit in
  sidebar**.
- **Comments**: the open threads, each with **Reply**, which opens the
  thread in the editor, and **Resolve**.

Every card has **Open in sidebar**, which opens the right sidebar on
that section.

With the sidebar open, clicking a pill scrolls the sidebar to that
section and expands it.

Open and close the sidebar with the titlebar button or
<kbd>Mod</kbd><kbd>Shift</kbd><kbd>&#92;</kbd>. Click a section's
heading (the chevron) to fold or unfold it; Mahfouz remembers which
sections you folded on this device.

The sidebar's sections, in order:

- **Details**: Created, Created by, Updated, Last edited by and Path,
  then the note's [history](/guide/history/). Created by and Last edited by
  are [person chips](/guide/people/#person-chips): click one to open the
  person's note. {% include since.html v="0.15.0" %} These rows come from git
  and the file on disk, so they're read-only; Path reveals the file in
  your file manager. Click a row's label to choose whether it also shows in the
  attributes block in the document.
- **Backlinks**: see [Links](/guide/links/#links-wikilinks--backlinks).
- **Tags**: the note's tags; click one to [search for it](/guide/links/#tags). {% include since.html v="0.13.0" %}
- **Attributes**: see [Attributes panel](#attributes-panel).
- **Comments**: the note's comment threads; see
  [Track changes](/guide/track-changes/).

## Attributes panel

Attributes Mahfouz understands get a matching control; everything else
is a free-form row. Both are saved in the note's frontmatter, so
they're visible and hand-editable outside the app too.

The panel shows in two places: as a block in the document under the
note's first heading, and as a right-sidebar section (open it from the
attributes pill's card; see [Note pills](#note-pills--the-right-sidebar)).

The read-only Created, Updated and Path rows live in the sidebar's
**Details** section; the block in the document shows them only if you've
chosen to there.

### Rows {% include since.html v="0.13.0" %} {#rows}

Every attribute is one row: its type's icon, its name, its value, an eye
and a menu.

- **The type icon** shows the attribute's type (an attribute with no
  type shows Text's). Click it for the list of types, the current one
  checked. Choosing a type changes it at once. **Select…**,
  **Multi-select…**, the dates and **Relation…** then open their next
  step; see [Changing a type](#change-type). {% include since.html v="0.14.0" %}
- **The eye** says whether the attribute shows in the block in the
  document: always, only while it has a value (dashed), or never (struck
  through). Click it to move to the next state. The setting isn't this
  note's alone: it's saved for every note of its database, or in the
  vault's settings, and the eye's tooltip says which ("Shown in every
  note in Projects"); see [Where visibility is saved](#visibility). {% include since.html v="0.18.0" %}
- **The menu** (the **⋯** button on hover) has **Rename…**, **Change type…**,
  **Visibility** and **Delete**. The **Visibility** submenu ends with
  where the setting is saved: "Saved in Projects (database)" or "Saved in
  vault settings". {% include since.html v="0.18.0" %} Delete changes only this note, and
  happens at once; its notification has **Undo**. **Rename…** of an
  attribute with a type renames it in every note and database, as in
  Settings → Attributes (it asks first); without a type, only in this
  note. Clearing the name keeps the old one.
- **+ Add attribute** adds a row and puts you in its name. Press
  <kbd>Enter</kbd> to go to its value, or <kbd>Esc</kbd> to drop the row.
  Click the new row's type icon to choose its type first: it's set when
  you keep the name. A name the vault already types keeps that type.
  An attribute added in the document shows there while it has a value,
  unless its database or the vault already says otherwise. {% include since.html v="0.18.0" %}

In the document, the eye and the menu show when you hover a row, and a
row you're editing stays until you leave it, even if you clear a value
that's only shown while filled. A note with nothing to show has no
block: add its first attribute from the right sidebar's Attributes
panel.

A Select shows its value as a colored pill; click it to pick another
option or **Clear**.

- **Render external images**: a switch; see
  [Media](/guide/media/).
- **Orientation**: Landscape / Portrait segmented control for PDF export
  (same as the toolbar button). Landscape is the default and writes no key.
- **Text, highlight, background color**: a color swatch each, with a
  clear button once set (same as the toolbar color menu). These and
  **Font** also style the note's
  [published page](/guide/publishing/#how-a-published-page-looks).
- A free-form key/value table for anything else. A recognized key with a
  value its control can't show (say `orientation: sideways`) stays in the
  table so you can fix it.

### Where visibility is saved {% include since.html v="0.18.0" %} {#visibility}

Visibility belongs to an attribute's name, not to one note, so notes that
belong together look alike:

- A note inside a [database](/guide/databases/), a row or any note under a
  row at any depth, follows that database. The setting is in the
  database's block, as `visibility` under the attribute in `properties`
  (the column menu's **Show column** sets it). A database inside a row
  decides its own attributes, and the outer database the rest.
- Any other note, and an attribute no database above the note sets,
  follows the vault: `visibility:` under the attribute's heading in
  `.config/attributes.md`, the **Visibility** column of
  [Settings → Attributes](#types).
- An attribute set nowhere is hidden.

Each setting is `show`, `filled` (shown while it has a value) or
`hidden`. Moving a note into, out of or between databases changes what it
shows, without changing any file.

Earlier versions kept visibility in the note itself, on the attribute's
name (`author!: …` always shown, `author?: …` shown while filled). When
Mahfouz opens a vault that still has those, it moves them into these
settings once, in one commit, `chore: move attribute visibility to
settings`: for each attribute, the choice most notes of a database (or of
the rest of the vault) had wins, and every note is left with plain names.

### Lists {% include since.html v="0.12.0" %} {#lists}

An attribute can hold a list of values, such as Obsidian's `tags` or
`aliases`. Mahfouz reads a list written either of these two ways:

```yaml
tags:
  - reading
  - fiction
aliases: ["J. Smith", "Smith, John"]
```

Other shapes, such as a list of mappings or a nested list, show as empty
in the app but are kept in the file as you wrote them.

In the panel, a list on an attribute with no type, or a Text attribute,
shows as chips:

- Click **×** on a chip to remove that item.
- Type in **Add…** and press <kbd>Enter</kbd> to add an item. Press
  <kbd>Backspace</kbd> in an empty **Add…** to remove the last item.
- In the `tags` attribute, **Add tag** opens a list of the vault's tags
  instead, with a search field, your **Recent** tags and **All tags**.
  Click a tag (or press <kbd>Enter</kbd>) to add it, again to remove it;
  the list stays open for more. Type a new tag and choose **Create #tag**
  to add one no note has yet. See [Suggested tags](/guide/links/#suggested-tags). {% include since.html v="0.14.0" %}

A Multiselect attribute keeps its own option chips. In a database, a list
shows as read-only pills, and editing the cell opens the same chips.

Mahfouz leaves a list as you wrote it until you change it. Once you edit
a list in the app, it's written on one line, as `["reading", "fiction"]`.
Text you type into an ordinary attribute stays text, even when it looks
like a list.

Mahfouz doesn't keep these when it saves a note's frontmatter: comments,
blank lines between keys, the order of keys, and multi-line values
written with `|` or `>`. Edit those notes in another editor if you need
them kept.

### Changing a type {% include since.html v="0.14.0" %} {#change-type}

Click an attribute's type icon (or its column's, in a database, or **Set
type…** in the column's menu) to change its type. A type that needs
nothing else is set with one click. A few open a next step in the menu's
place, with **←** to go back to the types and no **Save**: the type is set
at once, and every change in the step applies as you make it.

- **Select…** and **Multi-select…**: the options (below), then **Show as**:
  **Menu**, **Buttons** or **Radio** for a Select; **Chips** or
  **Checkboxes** for a Multi-select. A Select or Multi-select can have no
  options yet; in a database you can add them from a cell.
- **Date** and **Date & time**: **Show as** **Date** or **Relative**, and a
  format: `YYYY-MM-DD`, `DD MMM YYYY` or `MM/DD/YYYY` (Date & time adds
  `HH:mm`), each shown with an example, or **Custom…** to type your own.
- **Relation…** (a database column): see
  [Create a relation](/guide/databases/#create-a-relation).

### Select options {% include since.html v="0.13.0" %} {#options}

A Select or Multi-select attribute picks from a list of options. Edit them
in the type's step (see [Changing a type](#change-type)) or in
[Vault Settings → Attributes](#types).

- Type in **Type an option, Enter to add** and press <kbd>Enter</kbd> to add
  one; the field stays open so you can type the next. Pasting several lines
  adds one option per line. Each new option takes the next unused color. An
  option can't contain a comma, and two options can't have the same name.
  {% include since.html v="0.14.0" %}
- Click an option to open it: {% include since.html v="0.14.0" %}
  - Change its name to rename it. The rename applies when you press
    <kbd>Enter</kbd> or leave the field. If notes use the option, Mahfouz
    asks once, then renames it everywhere: in every note that uses it and in
    every database filter that compares the attribute with it, as one commit.
  - Pick one of the 8 colors.
  - **Delete** removes it. Notes that already use it keep their value as
    text; if any do, Mahfouz asks first and says how many.
- Drag an option to reorder it, or press <kbd>Alt</kbd><kbd>↑</kbd> or
  <kbd>Alt</kbd><kbd>↓</kbd> on it. {% include since.html v="0.14.0" %}

Colors are saved in `.config/attributes.md`, as a `colors:` list under the
attribute's options:

```markdown
### status
type: Select
options: Draft, Review, Done
colors:
- Draft: gray
- Review: yellow
- Done: green
```

The colors are gray, red, orange, yellow, green, blue, purple and pink.

### Attribute types in Settings {% include since.html v="0.13.0" %} {#types}

Vault Settings → **Attributes** lists every attribute type in the vault:
its type icon, name, its options as colored pills, its visibility, and
how many notes use it. The **Visibility** column is the vault's setting
([Where visibility is saved](#visibility)); an attribute with a setting
but no type is listed after the types as **No type**. {% include since.html v="0.18.0" %} Click a row's type icon to pick another type, and the new row's
icon to choose its type before **Add**. Click the arrow at the end of a
row to open it:

- **Options** uses the same option editor as the type menu's
  **Select…**, and changes apply as you make them. {% include since.html v="0.14.0" %}
- **Display** picks how the control looks: Menu, Buttons or Radio for a
  Select; Chips or Checkboxes for a Multi-select; Date or Relative for a
  date. {% include since.html v="0.14.0" %} **Format** sets a fixed date's format, such as `DD/MM/YYYY`. It
  takes the same codes as a [Date field](/guide/fields/#dates), month and
  weekday names (`MMMM`, `MMM`, `dddd`, `ddd`, in English) and the ISO
  week (`ww`) and week-year (`GGGG`) included, so `dddd, DD MMMM YYYY`
  reads `Wednesday, 09 December 2026`. {% include since.html v="0.13.0" %}
- **Rename…** renames the attribute in every note that has it and in
  every database view that uses it, as one commit, rollups reading it
  included. A Relation is renamed from its database column instead. Keys
  Mahfouz reads itself (below, and page settings such as `description`,
  `icon` or `page_theme`) can't be renamed, from or to. Renaming onto a
  name that already has a type, or a column a database already has, is
  refused rather than merged. If a rename stops partway, run it again to
  finish it.
- **Delete** removes the type. Notes keep their values, as text.

**+ Add attribute** adds a type: give it a name and a type and press
<kbd>Enter</kbd>. A Select or Multi-select opens so you can add its
options.

### Names Mahfouz keeps for itself

Some frontmatter keys hold Mahfouz's own settings, so an attribute can't
use them the same way:

- `id`, `title`, `created`, `updated`, `bookmarked`, `renamed`, `parent`
  and `external_images` are always Mahfouz's. Name your attribute
  something else.
- `database`, `auto_publish`, `publish_children`, `no_publish` and
  `published` are Mahfouz's only for certain values: `true` for the first
  four, and a published page's id for `published`. An attribute with one
  of these names can't hold those values: it would be written the same way
  as Mahfouz's own setting, so give it another name. {% include since.html v="0.18.0" %} Other values
  are fine, so a Jekyll or Hugo `published: false` stays your attribute.
- An attribute name can't end in `!` or `?`. {% include since.html v="0.18.0" %}

An attribute's value, or each item of a list, has to fit on one line.

When a change would break one of these rules, Mahfouz doesn't save it
and says why. In the free-form table, the other rows still save, and the
row it refused stays as you typed it so you can fix it.
