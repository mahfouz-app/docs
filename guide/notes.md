---
layout: guide
title: "Notes & organization"
since: "0.2.0"
description: "Create notes, nest them in a tree, and organize them with folders and bookmarks."
permalink: /guide/notes/
---

Every note is a single Markdown file at the vault root, named after its
title: a note titled *Meeting notes* is `meeting_notes.md`. A note with no
title yet is `untitled.md`, and when two notes in the same place would get
the same name, one of them gets a short random suffix. The moment a note
gets its first child it becomes a folder of the same name holding its own
file (`meeting_notes/meeting_notes.md`) and its children, nesting the same
way. Once a note has a folder it keeps it.

The file name follows the title as you edit it, until you rename the note
in the Sidebar: from then on it keeps the name you gave it. You never need
these paths day to day: the Sidebar presents them as a normal expandable
tree. Notes from older versions may have names that include their id; they
pick up a title-based name the next time their title changes. Vaults
created before this layout are offered a one-time migration on open;
declining keeps the older one-folder-per-note shape, which still works.

{% include since.html v="0.13.0" %} To start every new note's file name with
the same text, such as the date it was created, set **New note prefix** in
**Settings → Vaults →** your vault **→ Notes**. Each vault has its own.
The prefix is text plus [fields](/guide/fields/) from the vault's Fields:
**+** in the prefix inserts one, showing what it reads today, and clicking
a field's chip swaps or removes it. With the `today` field, `{today}_`
names a note `2026-10-19_meeting_notes.md`; `{id}` adds the note's ID.
Below the prefix, a line shows what a note created now would start with.
It's stored in the vault's `.config/settings.md` as `new_note_prefix`,
the fields by name: `{today}_{id}_`.
{: #new-note-prefix}

- **Which fields**: Date, Timestamp and Note ID fields, and Text fields on
  one line. A field whose value changes every time (Random text, or a Text
  field using `{uuid}`), needs the note's title or a slide, or holds
  several lines can't be used. {% include since.html v="0.13.0" %}
- **Dates** are filled in from the date the note was created, so the
  prefix stays the same when the file name follows a new title. {% include since.html v="0.13.0" %}
- **A field's format decides how the prefix reads.** The prefix is worked
  out again whenever a note's file name follows its title, so after you
  change a field's format, notes take the new format the next time they're
  renamed. Renaming a field in the Fields list renames it in the prefix
  too. {% include since.html v="0.13.0" %}
- **A missing field**: if the prefix names a field that's been deleted, or
  one that can't be used, its chip is marked, new notes get no prefix, and
  existing notes keep their file names when their titles change. {% include since.html v="0.13.0" %}
- **Older prefixes**: a prefix written with the earlier date codes
  (`YYYYMMDD_`, `R` for the note's ID) is converted once, when the vault
  opens, in a commit of its own: the date part becomes a Date field such
  as `prefix_date`, `R` becomes the Note ID field, and the prefix reads the
  same. One using `YY`, `hh` or `a`, which have no field equivalent, keeps
  working as before; Settings shows it read-only with the reason, and
  **Replace** lets you write it again with text and fields. Letters are
  otherwise never read as codes: `draft-` stays `draft-`. {% include since.html v="0.13.0" %}
- **Named by ID**: in a vault where new notes are named by their ID, the
  prefix isn't used, and its field is greyed out. {% include since.html v="0.13.0" %}

^

- **New note**: <kbd>Cmd/Ctrl</kbd><kbd>N</kbd> creates a sibling of whatever's selected;
  <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>N</kbd> creates a child of it; <kbd>Cmd/Ctrl</kbd><kbd>Alt</kbd><kbd>N</kbd> creates a note
  at the parent level. Each vault section also has a `+` button in the
  Sidebar for "new note here." Hover a note or a folder in the Sidebar for
  its own `+` (a new note inside it) and `⋮` (the same menu as a
  right-click). {% include since.html v="0.12.0" %}
- **Title**: there's no separate title field; a note's title is always
  the first non-empty line of its body (with a leading `#` stripped if
  present). Rename a note by editing its first line.
- **Reordering / nesting**: drag a note in the Sidebar to reorder it or
  drop it onto another note to make it a child.
- **Moving to another vault**: drag a note onto a note, a folder or the
  name of another vault in the Sidebar. The note moves, along with every
  note under it. Hold <kbd>Option</kbd> (<kbd>Alt</kbd> on Windows and Linux) when you
  release to copy it instead. The original stays where it is, and the copy
  gets new ids.
  - Images and other attachments the note links to are copied into the
    other vault's `files/` folder, and the links are updated. Linked files
    that no longer exist are skipped; the message after the move says how
    many.
  - The move is committed in both vaults: `Moved from <vault>: <title>`
    in the new one, and `Deleted: <title>` in the old one. You can bring
    the note back from **Trash** in its old vault.
  - Links to the note from notes in its old vault stop working. If any
    exist, or the note has notes under it, Mahfouz asks before it moves
    anything.
  - Files in the note's folder that it doesn't link to stay in the old
    vault.
  - A note whose auto-commit is off (disk only) can't be moved or copied
    to another vault. Turn auto-commit back on first.
- **Folders**: a folder doesn't have to belong to a note. Right-click a
  plain folder in the Sidebar for **New note**, **New database**, **New
  folder**, **Rename folder** (edit the name in place: <kbd>Enter</kbd> saves, <kbd>Esc</kbd> cancels),
  **Reveal in Finder**, and **Delete folder**. A note's own menu has
  **New folder** too: the folder goes inside the note's folder and shows
  under the note (a note without a folder gets one first).
- **Breadcrumb**: the bar above the editor shows where the open note
  lives: a home icon for the vault (hover it for the vault's name), then
  every folder it's nested in, each note with its icon. Click a folder that
  belongs to a note to open that note; click a plain folder to show it in
  the Sidebar. Hover any of them, or click the arrow after it, to list
  what's inside it and jump to one. {% include since.html v="0.12.0" %}
  The bar ends with the open note's own icon and title, so the note stays
  named after its title scrolls out of view. {% include since.html v="0.13.0" %}
- **Sidebar menu**: right-click empty space in the Sidebar for **New
  note** and **New folder** (in the active vault), **New vault…**, **Open
  vault…**, and the grouping, sort and filename-display options.
- **Reveal in Finder** is called **Reveal in File Explorer** on Windows
  and **Open Containing Folder** on Linux.
- **Bookmarks**: bookmark a note from its menu (right-click its Sidebar
  row, or the toolbar's ⋯ menu → **Bookmark**) or with
  <kbd>Cmd/Ctrl</kbd><kbd>D</kbd>. Each vault lists its bookmarked notes
  in a **Bookmarks** section above its **Notes** section, which holds the
  whole tree; a bookmarked note shows in both. Click a section's header to
  collapse or expand it; Mahfouz remembers that per vault on this device.
  <kbd>Mod</kbd><kbd>Alt</kbd><kbd>K</kbd> {% include since.html v="0.14.0" %} (Go → Bookmarks) opens and scrolls to
  the active vault's Bookmarks section. {% include since.html v="0.13.0" %}
- **Unimported files**: if you drop a plain `.md` file into the vault
  folder outside Mahfouz (no `id:` in its frontmatter), it shows up right
  away in the Sidebar as a clickable "pending" row, in the folder (or under
  the note) it was added to. Mahfouz doesn't touch the file until you edit
  it there: the first edit imports it; Mahfouz adds the id it needs and
  leaves everything else alone.
- **Edits from other apps**: Mahfouz watches the vault folder. When another
  app changes the note you have open, the editor updates in place within a
  second, keeping your cursor where it was (<kbd>Cmd/Ctrl</kbd><kbd>Z</kbd> undoes the
  reload). If you were typing at the same moment, a banner offers to
  reload or resolve the conflict instead, so your unsaved typing is never
  overwritten.
- **Sync marks**: each Sidebar row and tab shows a mark before the note's
  title: whether its changes are uncommitted, committed but not pushed, or
  pushed, and whether a push failed or conflicts with the remote. See
  [The note mark](/guide/git/#the-note-mark). A note with auto-commit off
  shows a drive glyph instead
  (see [Auto-commit and disk-only notes](/guide/history/#auto-commit-and-disk-only-notes)).
- **Sort order**: toggle alphabetical vs. chronological (by last-updated)
  ordering from the Sidebar header in the Trash view, or globally
  via Settings.

## Page icons {% include since.html v="0.12.0" %} {#page-icons}

Any note can have an emoji icon. It shows before the note's title in the
Sidebar and on its tab, and above the note in the editor.

- **Set it**: hover the top of the note and click **Add icon**, or choose
  **Set icon…** from the note's ⋯ menu or its right-click menu in the
  Sidebar. There's also a **Set note icon** shortcut action with no
  default key; bind one in **Settings → Shortcuts**.
- **Change or remove it**: click the icon above the note to pick another
  one. **Remove** in the picker clears it.
- **Where it's stored**: the note's frontmatter, as `icon: 🚀`. It shows
  up in the [Attributes](/guide/attributes/) panel, where you can edit it
  like any other attribute. If `icon:` already holds something that isn't
  a single emoji (a value another tool such as Jekyll uses), Mahfouz
  leaves it alone and shows no icon.
- **Folders**: a note with children can have an icon. A plain folder
  can't, because it has no note file to store it in.
- **Published pages**: a [published page](/guide/publishing/) doesn't
  show the icon, so changing it doesn't mark the page out of date.

## Pin notes to the rail {% include since.html v="0.15.0" %} {#rail-pins}

Pin the notes and databases you open most to the left rail, so each is
one click away.

- **Pin a note**: choose **Add to rail** from the note's ⋯ menu, its
  right-click menu in the Sidebar, or its tab's menu. You can also drag
  the note from the Sidebar onto the rail. The same menus then offer
  **Remove from rail**.
- **What a pin shows**: the note's [page icon](#page-icons), or, without
  one, a page glyph with the first letter of its title. A database shows
  a table glyph with the letter.
- **Open it**: click the pin. A database opens in its database tab.
- **Where pins go**: below **Tasks** and **People**, after a thin divider.
- **Rail item menu**: right-click a rail item, or focus it and press
  <kbd>Shift</kbd><kbd>F10</kbd> or the <kbd>Menu</kbd> key, for **Open**,
  **Move up**, **Move down** and **Remove from rail**. **Tasks** and
  **People** can be removed too; the home button can't. Removing
  **Tasks** keeps its key (<kbd>Mod</kbd><kbd>2</kbd>) and your
  [due reminders](/guide/tasks/#reminders), but the dot that warns of
  overdue tasks goes with the button. Removing **People** keeps its key
  (<kbd>Mod</kbd><kbd>3</kbd>).
- **Show on rail**: right-click the rail's empty space, or the home
  button, for **Show on rail**: tick **Tasks** or **People** to bring it
  back, and untick a pin to remove it.
- **Reorder**: drag rail items up and down. **Tasks** and **People** move
  among themselves, and pins among themselves.
- **Deleted notes**: a pin whose note was deleted shows faded and struck
  through. Restore the note from Trash and the pin comes back.
- **One rail per vault** {% include since.html v="0.17.0" %}: the rail
  shows the active vault's views and pins, so switching vaults switches
  the rail. A vault's pins are its own notes and databases. Choosing **Add
  to rail** on a note from a vault that isn't active pins it to that
  vault's rail, and Mahfouz says **Pinned to &lt;vault&gt;'s rail**.
  Moving a note to another vault moves its pin with it.
- **Where it's stored** {% include since.html v="0.17.0" %}: in the vault,
  as `.config/navigation.md` (see [The navigation file](#the-navigation-file)).
  It syncs to your other devices, and survives **Rebuild index** {% include since.html v="0.19.0" %}.
- **Shared with collaborators** {% include since.html v="0.17.0" %}: everyone
  who works in the vault sees the same rail. When a collaborator pins,
  unpins, hides or reorders an item, your rail follows when you pull their
  change. Changes made on two devices at once are merged, so they
  never stop a pull.
- **On a phone**: the same items show in Home's navigation bar, up to
  three of them ([Home's navigation bar](/guide/web/#homes-navigation-bar)). {% include since.html v="0.17.0" %}

### The navigation file {% include since.html v="0.17.0" %} {#the-navigation-file}

Each vault's rail is a plain Markdown file in the vault,
`.config/navigation.md`. You can edit it by hand in any text editor, or
change it on another device; the rail follows once the change is in the
vault:

```markdown
# Navigation

What this vault's navigation shows (the rail, and the phone's bottom bar), in order.

## Views
- tasks
- people

## Pinned
- 01a16c9ba1b67962b25a4739f187b5cf — Roadmap
```

- **Views** lists `tasks` and `people` in the order the rail shows them.
  Leave one out to hide it.
- **Pinned** lists the pinned notes and databases in order, each by its
  [note ID](/guide/databases/#note-id). The title after the ID is only
  there to help you read the file: Mahfouz refreshes it, and leaves it out
  for [disk-only](/guide/history/#auto-commit-and-disk-only-notes) and
  [encrypted](/guide/encryption/) notes, so their titles never show in
  plain text.
- Without the file, the rail shows **Tasks** and **People** and no pins.
  Mahfouz creates it the first time you change the rail. When it writes
  the file, it keeps your other lines and headings.
- Mahfouz batches a burst of rail changes into one commit, **Update
  navigation**.
- If Mahfouz can't read the file, as in a [locked
  vault](/guide/encryption/#a-locked-vault), the rail shows **Tasks** and
  **People** until it can.

The first time you open a vault in Mahfouz 0.17.0 or later, the rail you
had on that device (saved there, not in the vault) moves into the vault's
file, once. If the file already came from another device, your pins are
added to it.

## When an open note is updated elsewhere {% include since.html v="0.17.1" %} {#updated-elsewhere}

If a note you have open changes outside this editor (another app saves
the file, or a pull brings in someone else's edit), a banner says **This
note was updated elsewhere**, and the note is read-only until you choose:

- **Refresh** loads the new version. The cursor goes back to the line
  you were on, or the line now at its place if that line changed.
- If you had edits here that weren't saved yet, **Resolve conflicts**
  lets you combine the two versions. **Refresh…** drops your edits
  instead, after asking.

Your own saves never show the banner.

## Exporting

A note's ⋯ menu → **Export…** (or <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>E</kbd>)
opens the Export dialog. Pick a format card, then **Export**:

- **Word** makes an editable `.docx` document. It renders in the
  background; when it's ready, a notification offers **Open**, **Save…**
  and **Discard**.
- **Markdown** copies the note's file, and the attachments it links to, to
  a folder you pick. Once you've picked the folder, the dialog closes and
  the export runs in the background: a notification shows **Exporting
  "Trip notes" to Markdown…**, then **Exported "Trip notes" to
  Markdown.**, or **Markdown export failed** with the reason. {% include since.html v="0.21.0" %}
- **PDF** lays the note out as pages or slides through Slidev. It needs the
  **PDF export** plugin: while it's off, the PDF card's **Turn on…** opens
  Settings → Plugins. See [Slides](/guide/slides/).

**Include children** adds every note under this one; in a Word document
each starts on a new page. **Exclude files and images** leaves attachments
out.

Word and PDF (and any other format a plugin adds) offer two more choices.
Both start at **As written** each time the dialog opens:

- **Tags**: **As written** keeps `#launch`; **Without #** writes `launch`.
- **People**: **As written** keeps `@ada`; **As names** writes the
  person's name from [People](/guide/people/), such as `Ada Lovelace`. An
  `@handle` that names no one in People loses its `@` (`@someone` becomes
  `someone`).

A `#` or `@` in code, a URL, a link, a `[[wikilink]]` or an email address
isn't a tag or a mention, so it's left alone. Markdown offers neither
choice: it copies the note's file exactly as written.

What a Word document keeps:

- Headings (as Word's heading styles, so the navigation pane works), bold,
  italic, strikethrough, inline code, highlights, and links to web pages
  and email addresses.
- Lists, numbered lists and tasks (with a box for to do, in progress or
  done), block quotes, callouts, tables with their column alignment, code
  blocks and horizontal rules.
- Images from your vault, at the width you gave them in the editor, scaled
  to fit the page. WebP and AVIF images are converted to PNG.
- Mermaid and draw.io diagrams as pictures, when the vault has that plugin
  on; otherwise as their code.
- A `[TOC]` marker, as a numbered list of the headings.

What it leaves out or changes:

- Links to other notes, and `[[wikilinks]]`, become plain text.
- Math stays as its TeX source.
- Images from the web are left out: an export never downloads anything.
  The notification says how many images were left out.
- Pending suggestions export as the original text, and comments are left
  out, as when [publishing](/guide/publishing/). An embedded database view becomes
  a table, and a database note's own views block is replaced by a short
  placeholder.
- The note's attributes (frontmatter) aren't exported; its title becomes
  the document's title.

The page is US Letter. Encrypted notes can't be exported, and export is
desktop only.
