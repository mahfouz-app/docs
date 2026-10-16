---
layout: guide
title: "Links, tags & search"
description: "Link notes with wikilinks, see backlinks, tag notes and search the vault."
permalink: /guide/links/
---

## Links, wikilinks & backlinks

- `[[Note Title]]` links to another note by its exact title (case
  insensitive). Type `[[` to trigger autocomplete of existing titles. A
  wikilink to a title that doesn't exist yet still renders, just styled as
  "broken" until a matching note is created; opening it creates the note.
- **Pointing at a folder**: when two notes share a title, put the folder
  in front, `[[people/John]]`. The folder can be the last part of a longer
  path (`people` also finds `work/people/John`); start with `/` to count
  from the vault root (`[[/people/John]]`). Folder and note names match
  the way they read in the sidebar, ignoring case. Opening a link like
  this to a note that doesn't exist yet creates it in that folder.
  Without a folder, `[[John]]` picks the John nearest the vault root.
- **Different link text**: `[[people/John|Johnny]]` links to John but
  reads "Johnny".
- **Editing a link in Preview**: click it to open a small editor. For a
  wikilink, pick the note (notes that share a title show their folder,
  and picking one fills in `folder/Title`; or type a name that doesn't
  exist yet to link to a new note) and set the text it shows; for a regular link, change its
  text and URL. **Open** follows the link, **Remove link** keeps the text
  and drops the link, **Save** (or <kbd>Enter</kbd>) applies, <kbd>Esc</kbd> cancels.
  <kbd>Cmd/Ctrl</kbd>+click still opens a link directly.
- Pasting a bare URL over an empty cursor wraps it as `<url>`; pasting over
  a text selection turns the selection into `[selected text](url)`.
- **Backlinks**: the right sidebar's "Linked from N notes" section lists
  every note that links to the one you're viewing (via `[[wikilink]]` or a
  regular link to its title). Click one to open it at the line holding its
  link, shaded until you click, type or move the cursor in the note; a
  [database](/guide/databases/) opens as a table instead. The backlinks
  pill above the note shows the count and opens it (see
  [Note pills](/guide/attributes/#note-pills--the-right-sidebar)).
  A wikilink in an attribute counts too, such as `author: "[[Ursula K. Le Guin]]"`
  or an item in a list. That note is listed with the attribute it links
  through, for example "The Dispossessed via author", and opens at the top.

## Tags

Any `#` immediately followed by a letter (and not inside code, a link or a
URL) is a tag: `#project`, `#ideas`, etc. A note's frontmatter `tags:` list
counts too (`tags: [project, ideas]`, or one `- item` per line; a leading `#`
is optional). Mahfouz picks tags up automatically.

Every tag can be clicked. Clicking one opens the **Tags** view in the left
rail and adds that tag to the selection:

- In Preview, click the tag. In Source, <kbd>Cmd/Ctrl</kbd>+click it (a
  plain click places the cursor so you can edit it).
- A `#tag` on a task title in the [Tasks](/guide/tasks/) view, a chip in a
  note's `tags` attribute, and a tag in the right sidebar's **Tags** section
  work the same way.

Clicking a tag that's already selected keeps it selected. To remove a tag,
use the × on its chip, or **Clear** to start over.

The **Tags** view (**Tags** in the left rail, <kbd>Mod</kbd><kbd>3</kbd>) works like
search:

- The field at the top holds the selected tags as chips. Type in it to
  find a tag and press <kbd>Enter</kbd> to add it; <kbd>Backspace</kbd> in
  the empty field removes the last one.
- With nothing selected, it lists every tag with its note count, and typing
  in the field filters that list. **Untagged** lists notes with no tags.
- With tags selected, it shows only notes that have **all** of them, across
  every vault. **Narrow by** lists the other tags those notes carry, with
  counts; pick one to narrow further.

The selection only filters the Tags view. Home always shows every note, and
the selection is still there when you come back to Tags.

## Search

**Search** in the left rail (<kbd>Mod</kbd><kbd>5</kbd>, or <kbd>Mod</kbd><kbd>Shift</kbd><kbd>F</kbd> on the web) opens the
search view in the left sidebar. It searches **all open vaults** as you
type, matching title and body text, and lists the results under each
vault. The buttons beside the search box change how results are sorted.
Click a result to open the note with your matches highlighted and the line
of the first one shaded until you click, type or move the cursor in the
note. Edit the query and the shading follows the first match.

To jump to a note by its title, run a command or open a setting, use the
[command palette](/guide/command-palette/) (<kbd>Mod</kbd><kbd>K</kbd>) instead.
