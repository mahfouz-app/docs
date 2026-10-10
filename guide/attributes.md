---
layout: guide
title: "Attributes & the right sidebar"
description: "Note pills, the right sidebar and per-note attributes."
permalink: /guide/attributes/
---

## Note pills & the right sidebar

A row of pills sits at the right end of the note's path, above the text:

- **Who and when** — initials for the person who last edited the note
  and, if different, the person who created it, then how long ago it was
  last edited ("Not committed" for a note that has no commit yet). Hover
  for names. Opens **Details**.
- **Backlinks**, **Tags**, **Attributes** — an icon and a count each.
  A pill at zero is dimmed but still clickable.

Clicking a pill opens the right sidebar on that section. While the
sidebar is open, the pills move into the top of it and turn sections on
and off there; a highlighted pill means its section is showing. Turning
off the last section closes the sidebar, and opening it again from the
toolbar (or `Mod+Shift+\`) shows every section.

The sidebar's sections, in order:

- **Details** — Created, Created by, Updated, Last edited by and Path,
  then the note's [history](/guide/history/). These rows come from git
  and the file on disk, so they're read-only; Path reveals the file in
  your file manager. Click a row's label to choose whether it also shows in the
  attributes block in the document.
- **Backlinks** — see [Links](/guide/links/#links-wikilinks--backlinks).
- **Tags** — the note's tags; click one to filter by it.
- **Attributes** — see [Attributes panel](#attributes-panel).

## Attributes panel

Attributes Mahfouz understands get a matching control; everything else
is a free-form row. Both are saved in the note's frontmatter, so
they're visible and hand-editable outside the app too.

The panel shows in two places: as a block in the document under the
note's first heading, and as a right-sidebar section (open it with the
attributes pill — see [Note pills](#note-pills--the-right-sidebar)).

The read-only Created, Updated and Path rows live in the sidebar's
**Details** section; the block in the document shows them only if you've
chosen to there.

- **Render external images** — a switch; see
  [Media](/guide/media/).
- **Orientation** — Landscape / Portrait segmented control for PDF export
  (same as the toolbar button). Landscape is the default and writes no key.
- **Text, highlight, background color** — a color swatch each, with a
  clear button once set (same as the toolbar color menu).
- A free-form key/value table for anything else. A recognized key with a
  value its control can't show (say `orientation: sideways`) stays in the
  table so you can fix it.

### Names Mahfouz keeps for itself

Some frontmatter keys hold Mahfouz's own settings, so an attribute can't
use them the same way:

- `id`, `title`, `created`, `updated`, `bookmarked`, `renamed`, `parent`
  and `external_images` are always Mahfouz's. Name your attribute
  something else.
- `database`, `auto_publish` and `published` are Mahfouz's only for
  certain values: `true` for the first two, and a published page's id for
  `published`. When an attribute with one of these names is hidden from
  the document, it's written to the file the same way Mahfouz writes its
  own setting, so it can't hold those values. Show it in the document, or
  give it another name. Other values are fine either way, so a Jekyll or
  Hugo `published: false` stays your attribute.

Attribute values have to fit on one line.

When a change would break one of these rules, Mahfouz doesn't save it
and says why. In the free-form table, the other rows still save, and the
row it refused stays as you typed it so you can fix it.
