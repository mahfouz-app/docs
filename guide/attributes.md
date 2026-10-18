---
layout: guide
title: "Attributes & the right sidebar"
description: "Note pills, the right sidebar and per-note attributes."
permalink: /guide/attributes/
---

## Note pills & the right sidebar

A row of pills sits at the right end of the note's path, above the text:

- **Who and when**: initials for the person who last edited the note
  and, if different, the person who created it, then how long ago it was
  last edited ("Not committed" for a note that has no commit yet). Hover
  for names. Opens **Details**.
- **Backlinks**, **Tags**, **Attributes**: an icon and a count each.
  A pill at zero is dimmed but still clickable.

Clicking a pill opens the right sidebar on that section. While the
sidebar is open, the pills move into the top of it and turn sections on
and off there; a highlighted pill means its section is showing. Turning
off the last section closes the sidebar, and opening it again from the
toolbar (or <kbd>Mod</kbd><kbd>Shift</kbd><kbd>&#92;</kbd>) shows every section.

The sidebar's sections, in order:

- **Details**: Created, Created by, Updated, Last edited by and Path,
  then the note's [history](/guide/history/). These rows come from git
  and the file on disk, so they're read-only; Path reveals the file in
  your file manager. Click a row's label to choose whether it also shows in the
  attributes block in the document.
- **Backlinks**: see [Links](/guide/links/#links-wikilinks--backlinks).
- **Tags**: the note's tags; click one to add it to the [Tags view](/guide/links/#tags).
- **Attributes**: see [Attributes panel](#attributes-panel).

## Attributes panel

Attributes Mahfouz understands get a matching control; everything else
is a free-form row. Both are saved in the note's frontmatter, so
they're visible and hand-editable outside the app too.

The panel shows in two places: as a block in the document under the
note's first heading, and as a right-sidebar section (open it with the
attributes pill; see [Note pills](#note-pills--the-right-sidebar)).

The read-only Created, Updated and Path rows live in the sidebar's
**Details** section; the block in the document shows them only if you've
chosen to there.

### Rows {% include since.html v="0.13.0" %} {#rows}

Every attribute is one row: its type's icon, its name, its value, an eye
and a menu.

- **The type icon** shows the attribute's type (an attribute with no
  type shows Text's). Click it to change the type.
- **The eye** says whether the attribute shows in the block in the
  document: always, only while it has a value (dashed), or never (struck
  through). Click it to move to the next state.
- **The menu** (the **⋯** button on hover) has **Rename…**, **Change type…**,
  **Visibility** and **Delete**. Rename and Delete change only this note.
  Delete happens at once; its notification has **Undo**.
- **+ Add attribute** adds a row and puts you in its name. Press
  <kbd>Enter</kbd> to go to its value, or <kbd>Esc</kbd> to drop the row.

In the document, the eye and the menu show when you hover a row, and a
row you're editing stays until you leave it, even if you clear a value
that's only shown while filled. A note with nothing to show has no
block: hover its title to see **+ Add attribute**.

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

### Select options {% include since.html v="0.13.0" %} {#options}

A Select or Multi-select attribute picks from a list of options. Set
them when you choose the type: in the panel, open the attribute's menu
and choose **Change type…**; in a database, choose **Set type…** in the
column header's menu.

- Type in **Add option** and press <kbd>Enter</kbd> to add one. An option
  can't contain a comma, and two options can't have the same name.
- Click the dot before an option to give it a color, or **No color**.
- Drag an option by its handle to reorder it, or focus the handle and
  press <kbd>↑</kbd> or <kbd>↓</kbd>. The option's menu also has **Move
  up** and **Move down**.
- **Delete** in the option's menu removes it. Notes that already use it
  keep their value; the panel shows it as a free-form row.
- **Rename…** in the option's menu renames it everywhere: in every note
  that uses it and in every database filter that compares the attribute
  with it, as one commit. Mahfouz says how many notes and databases change
  before it does it.

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
its icon, name, type, its options as colored pills, and how many notes
use it. Pick another type in the row's Type column. Click the arrow at the end of a
row to open it:

- **Options** uses the same option editor as **Change type…**.
- **Display** picks how the control looks: Menu, Segmented or Radio for a
  Select; Chips or Checkboxes for a Multi-select; Fixed or Relative for a
  date. **Format** sets a fixed date's format, such as `DD/MM/YYYY`.
- **Rename…** renames the attribute in every note that has it and in
  every database view that uses it, as one commit. A Relation is renamed
  from its database column instead.
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
  four, and a published page's id for `published`. When an attribute with one of these names is hidden from
  the document, it's written to the file the same way Mahfouz writes its
  own setting, so it can't hold those values. Show it in the document, or
  give it another name. Other values are fine either way, so a Jekyll or
  Hugo `published: false` stays your attribute.

An attribute's value, or each item of a list, has to fit on one line.

When a change would break one of these rules, Mahfouz doesn't save it
and says why. In the free-form table, the other rows still save, and the
row it refused stays as you typed it so you can fix it.
