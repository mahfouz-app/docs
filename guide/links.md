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
  pill above the note shows the count; click it for a card listing them (see
  [Note pills](/guide/attributes/#note-pills--the-right-sidebar)).
  A wikilink in an attribute counts too, such as `author: "[[Ursula K. Le Guin]]"`
  or an item in a list. That note is listed with the attribute it links
  through, for example "The Dispossessed via author", and opens at the top. {% include since.html v="0.12.0" %}

## Tags {% include since.html v="0.12.0" %} {#tags}

Any `#` immediately followed by a letter (and not inside code, a link or a
URL) is a tag: `#project`, `#ideas`, etc. A note's frontmatter `tags:` list
counts too (`tags: [project, ideas]`, or one `- item` per line; a leading `#`
is optional). Mahfouz picks tags up automatically.

Every tag can be clicked. Clicking one opens the [Search tab](#search)
with `tag:name` in its field, listing the notes that have that tag in
every vault: {% include since.html v="0.13.0" %}

- In Preview, click the tag. In Source, <kbd>Cmd/Ctrl</kbd>+click it (a
  plain click places the cursor so you can edit it).
- A `#tag` on a task title in the [Tasks](/guide/tasks/) view, a chip in a
  note's `tags` attribute, and a tag in the right sidebar's **Tags** section
  work the same way.

With a `tag:` in the search, **Narrow by** under the search field lists the
other tags those notes carry. Click one to add it as another `tag:`: only
notes with **all** the tags stay. To remove a tag, use the × on its chip
in the summary line, or delete it from the field. {% include since.html v="0.13.0" %}

While you type `tag:` and part of a name, **Matching tags** lists the tags
whose names contain it, so `tag:pro` offers `#project` and `#improv`.
Click one to finish the word. `person:` does the same with people's
handles and names. {% include since.html v="0.13.0" %}

With the search field empty, the Search tab lists every tag with its note
count, and **Untagged**, which searches `is:untagged` for notes with no
tags. {% include since.html v="0.13.0" %}

### Rename a tag

**Rename tag…** renames a tag in every note of every vault that has it.
Open it from the tag's menu:

- In the [Search tab](#search), right-click a tag in the list it shows
  while the field is empty, or a tag under **Narrow by**. {% include since.html v="0.13.0" %}
- In the editor, right-click a tag (in Preview or Source) and choose
  **Rename tag #name…**. With the cursor on a tag and nothing selected,
  <kbd>Shift</kbd><kbd>F10</kbd> or the <kbd>Menu</kbd> key opens the same
  menu.

The dialog counts the notes it will change in each vault. Type the new name
after the `#`. A tag starts with a letter, followed by letters, digits, `-`
or `_`. Capitals are lowercased as you type, and a leading `#` is dropped.
If the new name is a tag that already exists, the dialog says so and the
button becomes **Merge**: the two tags become one, and a `tags:` list that
had both keeps it once.

Each vault gets one commit, `Rename tag #old to #new`. What's rewritten:

- `#old` in note bodies, in any case (`#Old` becomes `#new`), including
  inside pending [suggestions](/guide/track-changes/).
- Items of a frontmatter `tags:` list. The list keeps its style: one
  `- item` per line, or `[a, b]`, with any quotes or leading `#`.

What stays as it is:

- `#old` inside code, a URL, a link's destination or a wikilink, and in
  comment entries.
- Longer tags that start the same way, such as `#old-ideas` or `#older`.
- Vaults with a stopped git operation (a merge or rebase, for example), and
  vaults that are [git-crypt locked](/guide/encryption/) or need to be
  reconnected. These aren't searched.
- Notes whose [edits are waiting](/guide/when-sync-fails/#edits-to-title-are-waiting)
  for your choice, and encrypted notes.

The dialog lists what will be skipped before you rename.
[Disk-only notes](/guide/history/#auto-commit-and-disk-only-notes) are
renamed but stay out of the commit.

When it's done, one notification reports every vault. If a vault fails, its
changes are undone, the others keep theirs, and the notification offers
**Try again**.

## Search

<kbd>Mod</kbd><kbd>Shift</kbd><kbd>F</kbd>, **Search** in the left rail, or
the scope button in the note's [Find bar](/guide/editor/#find-and-replace)
opens the **Search tab** in the main pane. There's one Search tab: opening
it again brings it to the front with its query, results and place kept.
The tab is titled with what you searched for. {% include since.html v="0.13.0" %}

It searches the titles and text of your notes in **all open vaults** as
you type. With text selected in the note, or a query in its Find bar,
<kbd>Mod</kbd><kbd>Shift</kbd><kbd>F</kbd> starts the search with it. On
the desktop, **Edit → Find in All Notes** does the same. {% include since.html v="0.13.0" %}

A word matches anywhere inside a word, so `udget` finds "budget", and
`كتاب` finds "والكتاب" and "بالكتاب". Words
of three letters or more are looked up in the search index; shorter words
still match, more slowly. A note has to match every word you type. Notes
whose title matches come first.

You can narrow a search with:

| Type | To find |
|---|---|
| `"exact phrase"` | Notes with those words together, in that order |
| `-word` | Only notes without that word |
| `tag:name` | Only notes with that tag (`tag:#name` works too) |
| `person:handle` | Only notes that [mention](/guide/people/#mentions) `@handle` or have a [task](/guide/tasks/) assigned to them. A person's handle and their GitHub login find the same notes, mentions and tasks under either. `person:@handle` works too {% include since.html v="0.13.0" %} |
| `is:untagged` | Only notes with no tags {% include since.html v="0.13.0" %} |
| `in:vault` | Only notes in that vault; quote a name with spaces, `in:"Work notes"` |

**Match case** (`Aa`), **Match whole word** (`ab`) and **Use regular
expression** (`.*`) in the search field work as they do in the note's Find
bar, and <kbd>Alt</kbd><kbd>C</kbd>, <kbd>Alt</kbd><kbd>W</kbd> and
<kbd>Alt</kbd><kbd>R</kbd> switch them. With one of them on, a long search
can stop with "Search too slow; narrow it". {% include since.html v="0.13.0" %}

Under the search field, a summary line shows the `tag:`, `person:`, `in:`
and `is:untagged` filters you've used as chips (click × on one to remove it
from the search), and the sort: **Relevance**, **Edited** or **Title**. The
count in the field reads how many matches in how many notes. {% include since.html v="0.13.0" %}

The results are grouped by note: its title, where it sits (its folders,
and its vault when you have more than one open), then a row for each
matching line, with its line number and your matches highlighted. A note
lists up to 20 lines, then says how many more it has. {% include since.html v="0.13.0" %}

| Key | What it does |
|---|---|
| <kbd>↑</kbd> / <kbd>↓</kbd> | Move through each note's title and its matching lines |
| <kbd>Enter</kbd> | Open the note at that line, or at its top on its title |
| <kbd>Mod</kbd><kbd>Enter</kbd> | Open it in a new tab (or <kbd>Cmd/Ctrl</kbd>+click the line or title) |

The note you open highlights the words and phrases you searched for, never
the operators, while the Search tab stays open, and shades the line you
opened until you click, type or move the cursor in the note.

With the search field empty, the tab lists your recent searches, every tag
with its note count (see [Tags](#tags)) and a few search tips. Recent
searches are kept on this device only.

An [encrypted note](/guide/encryption/) is found by its title only: its
text isn't searched.

### Replace across notes {% include since.html v="0.13.0" %} {#replace-across-notes}

Click the chevron at the left of the search field to show the **Replace**
field. Each match in the results then reads old → new: the old text struck
through, the new text underlined.

- Each note has a checkbox. Untick a note to leave it out.
- A match on the line a note's title comes from has its own **changes the
  title** box, unticked at first. A note whose title changes may have its
  file renamed in a following commit.
- A note in [Suggesting mode](/guide/track-changes/) is marked **as
  suggestions**: it gets each replacement as a tracked substitution
  instead. Matches a suggestion can't change, such as someone else's
  suggestion or a link's address, are left as they are.
- In every note, matches in suggestion and comment markup (a
  suggestion's author, a comment's entries) are left as they are, so a
  replace never changes who wrote them.
- Encrypted notes, notes whose
  [edits are waiting](/guide/when-sync-fails/#edits-to-title-are-waiting)
  for your choice and vaults that are [git-crypt locked](/guide/encryption/)
  are skipped. A line under the summary says what's left out.

**Replace** (<kbd>Enter</kbd> in the Replace field) changes the matches on
the highlighted line. **Replace all** (<kbd>Mod</kbd><kbd>Enter</kbd>)
names what it changes, such as "7 in 2 notes", and asks once before
writing. When the search stopped early, because it hit its limit or ran
too long, Replace all is off until you narrow it. After you change the
Replace text, both buttons are off for a moment, until the preview shows
the new text.

Each vault gets one commit, `Replace "old" with "new" in N notes`. A note
that changed since the preview (its text, or a switch between Editing and
Suggesting), or has Windows line endings, is skipped, and the others go
ahead. One notification reports what changed, what was skipped and how
many matches were left as they are. If a vault fails, its changes are undone.

To jump to a note by its title, run a command or open a setting, use the
[command palette](/guide/command-palette/) (<kbd>Mod</kbd><kbd>K</kbd>) instead.
