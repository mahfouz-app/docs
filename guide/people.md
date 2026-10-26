---
layout: guide
title: "People"
since: "0.12.0"
description: "Keep the people you work with in a People database, mention them with @, assign them tasks, and import or export them as vCards."
permalink: /guide/people/
---

A person is a note whose frontmatter names their handle with `person:`.
Mahfouz keeps people as rows of a **People** database, so each one is an
ordinary note you can open, edit and link to.

```markdown
---
person: ada
name: Ada Lovelace
first_name: Ada
last_name: Lovelace
email: ada@example.com
company: Analytical Engines
position: Engineer
github: ada
---
```

- **The handle** is what you type after `@` to mention someone. It uses
  letters, numbers, `-` and `_`, like a GitHub login, and case doesn't
  matter. A new person's handle is made from their name; if it's taken,
  Mahfouz adds `-2`, `-3` and so on.
- **The contact fields** are `name`, `first_name` and `last_name`
  ({% include since.html v="0.14.0" %}), `email`, `phone`, `company`,
  `position` (the job title, shown as **Title**), `github`, `birthday`,
  `address`, `url` and `nickname`. Each is an ordinary
  [attribute](/guide/attributes/), edited in the note's Attributes. A field
  with several values, such as two email addresses, holds a list.
- **Missing fields** show in the note's Attributes as placeholders, such
  as **Add email…**: Name, First name, Last name, Email, Phone, Title,
  Company and GitHub, then a **More** row for Nickname, Birthday, Address
  and URL. Type in one to write just that field. Nothing is stored for a
  field you leave empty. {% include since.html v="0.14.0" %}
- **The People database** is created at the vault root, titled **People**,
  the first time you add someone. It starts with the Title, `email`,
  `phone`, `company`, `position` and `github` columns, and with **Manager**
  and **Direct reports**: setting someone's manager adds them to that
  person's direct reports. {% include since.html v="0.15.0" %} If your vault
  already uses `manager` or `reports` for something else, those two columns
  are left out; you can
  [relate the database to itself](/guide/databases/#relate-a-database-to-itself)
  under other names.
- **GitHub collaborators** on the vault's repository appear as people
  automatically, with their GitHub login as the handle. A collaborator gets
  a note the first time you edit them. A person note whose `github` is a
  collaborator's login is that collaborator.

## Mentions

Type `@` anywhere in a note's text to open the people menu. It lists the
vault's people and collaborators, matched on handle and name; pick one to
write their `@handle`. An `@` inside code, a link or an email address
doesn't open it.

- With nothing typed after `@`, the people you picked recently come first,
  under **Recent**, then **All people**. What you type after `@` searches
  them all. Recent is kept for each vault on this computer only: it isn't
  saved in the vault or shared with collaborators. The task assignee picker
  and a relation to the People database list the same recent people.
  {% include since.html v="0.14.0" %}
- **Add “x” as a person…**, the last row, adds someone new from what you
  typed and writes their mention.
- **Add “x” with details…**, the row under it when no one matches, opens
  the [Add person form](#adding-a-person) with the name filled in, and
  writes the mention once you add them. Reach it with the arrow keys. {% include since.html v="0.14.0" %}
- **Over a selection:** select a name and press `@`. If it's exactly one
  person's name or handle, it becomes their mention at once. Otherwise the
  menu opens with **Add “name” as a person** first; press Esc to type a
  plain `@` over the selection instead.
- **Before a word:** with the cursor right before a word, press `@`. It
  works as though you'd selected the word, or the words that follow when
  they're exactly someone's name: `@` before **Ada Lovelace** makes
  `@ada`. Press Esc to keep the word and type a plain `@` in front of it. {% include since.html v="0.13.0" %}
- Adding someone shows **Added Ada Lovelace to people**, with an **Undo**
  that removes the new person and the mention. It works only while the
  person note is unchanged and nothing else mentions them.
- A mention that names someone shows as a chip. A mention of a handle
  nobody has stays plain text.
- In Preview, the chip is a [person chip](#person-chips): the person's
  initials and name instead of their `@handle`. Backspace deletes it whole.
  {% include since.html v="0.13.0" %}
- In Preview, a click selects the mention, and so does moving onto it with
  the arrow keys. With it selected, <kbd>Enter</kbd> opens the person's note
  and <kbd>Space</kbd> lists people to put someone else in its place.
  <kbd>Cmd/Ctrl</kbd>+click opens the person's note.
  {% include since.html v="0.15.0" %} Typing over a selected mention starts
  a new mention in its place. {% include since.html v="0.13.0" %}
- Hover a mention to see the person's card: their email, phone, GitHub and
  website. Click the card to open their note. {% include since.html v="0.15.0" %}
- To find every note that mentions someone, choose **Find mentions** in the
  [person menu](#person-chips) (right-click the mention).
  {% include since.html v="0.15.0" %} From the keyboard,
  put the cursor on the mention and run **Find mentions of person** from
  the [command palette](/guide/command-palette/), or give it a key in
  [Shortcuts](/guide/shortcuts/). It opens the
  [Search tab](/guide/links/#search) with `person:handle`, which also finds
  the notes with a task assigned to them, and the notes that mention the
  person's GitHub login. {% include since.html v="0.13.0" %}

## Person chips {% include since.html v="0.15.0" %} {#person-chips}

A person looks the same everywhere in Mahfouz: a pill with their initials
in a colour of their own, then their name. Your own chip adds **(you)**.
You'll see one for:

- a [mention](#mentions) in Preview;
- a [task's assignee](/guide/tasks/#assign-someone), in the note and in the
  Tasks tab's **Assignee** column;
- a link in a People database's relation columns, such as **Manager** and
  **Direct reports**, in the table and in the
  [Attributes panel](/guide/attributes/#attributes-panel);
- **Created by** and **Last edited by** in a note's
  [Details](/guide/attributes/#note-pills--the-right-sidebar).

What a chip does:

- **Click the name** to open the person's note. In a note's text, a click
  selects the mention instead; <kbd>Cmd/Ctrl</kbd>+click opens it.
- **Click ▾** on an editable chip (an assignee, a relation link) to pick
  someone else.
- **Hover** a chip, or move focus to it, to see the person's card. The card
  has no buttons: click it to open the person's note.
- **Right-click** a chip, press <kbd>Shift</kbd><kbd>F10</kbd> on it, or
  long-press it for the person menu: **Open**, **Change person…**,
  **Change handle…** ([below](#changing-a-handle)), **Find mentions**,
  **Copy @handle**, **Send email**, **Copy email**, **Export vCard…** and
  **Remove**. Each item shows only where it applies.

With a chip focused:

| Key | Does |
|---|---|
| <kbd>Enter</kbd> | Opens the person's note |
| <kbd>Space</kbd> or <kbd>Alt</kbd><kbd>↓</kbd> | Picks someone else |
| <kbd>Backspace</kbd> | Removes the person |

A commit author who isn't in your People shows as a chip in their own
colour too, under Created by and Last edited by. Their menu offers **Send
email** and **Copy email**.

## The People view

Click **People** in the left rail (<kbd>Mod</kbd><kbd>3</kbd> {% include since.html v="0.14.0" %}) to list the vault's people; click it
again to go back to your notes. On a phone, it's **People** in [Home's navigation
bar](/guide/web/#homes-navigation-bar), and the view opens as a page with
its own toolbar: **Find**, **Import**, **Export**, **Open People
database** and **+ Add person**. {% include since.html v="0.17.0" %}
You can [hide **People** from the rail](/guide/notes/#rail-pins);
<kbd>Mod</kbd><kbd>3</kbd> still opens the view. {% include since.html v="0.15.0" %}

- Type in **Search people** to filter the list. Click a person to open
  their note. A collaborator with no note yet shows **GitHub only**.
- **All**, **Notes** and **GitHub** choose who's listed: everyone, only
  person notes, or only collaborators without a note. Switching vaults
  goes back to **All**. {% include since.html v="0.16.0" %}
- The list shows 50 people at first; **Show N more** adds the next ones.
  {% include since.html v="0.16.0" %}
- **Add person** (＋) asks for a name: type it and press <kbd>Enter</kbd> to
  add a row to the People database. The chevron beside the name field
  opens the [Add person form](#adding-a-person) instead. {% include since.html v="0.14.0" %}
- **Open People database** (the table button at the top) opens the
  database itself, as a table, and so does **Open the People database**
  under the list, shown once the vault has a People database.
  {% include since.html v="0.16.0" %}
- **Import** and **Export all** are described [below](#import).
- Right-click a person, or click the **⋯** that shows when you point at
  them {% include since.html v="0.16.0" %}, for **Open**, **Export vCard**, **Change handle…**
  ([below](#changing-a-handle)) and **Delete**. **Merge with…** is there
  too, and on a duplicate **Merge into ⟨owner⟩…** ([below](#merging-people)). {% include since.html v="0.14.0" %}
- <kbd>Shift</kbd>+click people to select several (once a selection exists,
  <kbd>Cmd/Ctrl</kbd>+click adds or removes one), then click **Merge…** in
  the bar at the bottom (**N selected**), or right-click a selected person
  for **Merge N people…**. {% include since.html v="0.14.0" %}
- A warning icon marks a person whose handle doesn't work; hover it to see
  why. The handle is used by another person note (the first by path keeps
  it), is also a collaborator's GitHub login (this note takes it, so the
  collaborator isn't listed), or isn't a valid handle.
- Under the **People** heading, **Shared with N collaborators on this
  vault** is a reminder of who can read these notes. {% include since.html v="0.16.0" %}

## Adding a person {% include since.html v="0.14.0" %} {#adding-a-person}

The **Add person** form takes a person's contact details in one go. Open it
from the chevron beside **Add person**'s name field in the
[People view](#the-people-view), from **Add “x” with details…** in the
[mention menu](#mentions), or from **Add with details…** under the
chevron beside **New** in a People database's toolbar
{% include since.html v="0.16.0" %} or beside its **New row** draft.

- **First name**, **Last name** and **Full name**. Full name fills itself
  from the first and last names until you type over it.
- **Email**, **Phone**, **Title**, **Company**, **GitHub**, **Nickname**,
  **Birthday** (`YYYY-MM-DD`, or `--MM-DD` without a year), **URL** and
  **Address**.

Only the fields you fill in are written to the new person note.

In a People database, **New** {% include since.html v="0.16.0" %}, **New row** and **New in ⟨group⟩** add a person too:
the new row gets a handle, made from its title, so you can mention it. {% include since.html v="0.14.0" %}

### GitHub only {% include since.html v="0.16.0" %} {#github-only}

Under a People database's table, **GitHub only (N)** lists the vault's
GitHub collaborators who don't have a person note yet. They aren't rows:
filters, sorting, paging, embeds, publishing and the agent don't see them.

- **Add as person** writes the collaborator's person note into the People
  database you're looking at, even when the vault has several, and opens
  it. It's off, with the reason, while the database can't be changed.
- The section shows on the table's last page, below the table's message
  when no rows are shown. Click its header to collapse it.
- It doesn't show on a Board, or in a database that isn't a People
  database.

## A person's page

Under a person note's text, Mahfouz shows:

- **Tasks:** the [tasks](/guide/tasks/) assigned to them, as a **Table**,
  **Board** or **Calendar** like the Tasks tab. Its view settings are shared
  by every person page. {% include since.html v="0.12.0" %}
  It's a compact copy of the Tasks tab, in a frame: the fixed **Table**,
  **Board** and **Calendar** tabs, **Filter** and **Sort** (one **Filter,
  sort and group** button when the frame is narrow) with no **Group**
  {% include since.html v="0.18.0" %}, and **Columns**. The toolbar shows even when they have no tasks yet.
  {% include since.html v="0.16.0" %}
  - **New task for @handle**, under the table, adds a task assigned to
    them, into the note [New task](/guide/tasks/#new-task) remembers for
    the vault. A Board column's **+ New task** and a Calendar day's **+**
    assign it to them too. {% include since.html v="0.16.0" %}
  - **Open in Tasks** opens the Tasks tab on **Everyone**, filtered to
    their handle as a change on this device; **Reset** clears it.
    {% include since.html v="0.16.0" %}
- **Mentions:** a row for each mention of them, showing its line; two
  mentions in one paragraph share a row. When there's more to see, the
  chevron expands the row to the whole paragraph, list item, heading or
  table row. Click the note's title on the right, or the row, to open the
  note at the mention. Links in the text open their own targets. {% include since.html v="0.12.0" %}
- **Export vCard**, at the top, saves the person as a `.vcf` file.
  **Change handle…**, next to it, changes their handle (see
  [Changing a handle](#changing-a-handle)). **Merge…** merges them with
  other people ([Merging people](#merging-people)). {% include since.html v="0.14.0" %}
- On a duplicate's page, a banner says another note owns the handle and
  offers **Merge into ⟨owner⟩…**. {% include since.html v="0.14.0" %}

Clicking a task or a mention opens its note at that line, shaded until you
click, type or move the cursor in the note.

## Notes {% include since.html v="0.14.0" %} {#notes}

Under a person's contact fields, in the note's Attributes, **Notes** is a
text box for what you know about them. It saves as you type, into the
note's `## Notes` section:

```markdown
## Notes

Leads the engine team. Owns the Q3 release and reviews the docs.
```

- A note with no Notes section gets one when you first type in the box:
  right after the title when the note holds nothing else, or else at the
  end.
- An older `## Summary` section is read as the person's notes.
- In Preview, the section is hidden from the note's text, since the box
  shows it. Source mode shows it as written.
- In [Suggesting](/guide/track-changes/) mode, what you type in the box is
  a suggestion, as in the note's text.

### Generating notes

Mahfouz can draft notes for you from what the vault knows about the
person. This is on the desktop app only, and needs an AI provider and its
key in Settings → AI.

Once the person has mentions or tasks, a sparkle button sits inside the
Notes box: **Generate notes from N mentions and M tasks**. The draft
streams in below the box, and nothing is written until you choose:

- **Append** adds the draft after the notes you have.
- **Replace** replaces your notes with the draft.
- **Discard**, or <kbd>Esc</kbd>, throws the draft away.

A draft never overwrites your notes by itself.

What's sent to the provider:

- the person's `name`, `company` and `position`;
- the title, status and due date of each [task](/guide/tasks/) assigned to
  them;
- the passage around each mention of them, without
  [comments](/guide/track-changes/#comments) or pending suggestions.

[Encrypted notes](/guide/encryption/) are never sent. The first time you
generate notes in a vault, and again after you switch provider, Mahfouz
asks before sending anything.

## Changing a handle

**Change handle…** changes a person's handle and rewrites every reference
to it in the vault, so no mention is left behind. It's in three places:

- the person's right-click menu in the [People view](#the-people-view);
- the button next to **Export vCard** on [their page](#a-persons-page);
- the right-click menu on an `@mention` in a note, which also has **Open**
  for the person. <kbd>Shift</kbd><kbd>F10</kbd> or the <kbd>Menu</kbd> key
  opens it too, with the cursor on the mention.

The dialog starts with the current handle, selected. Type the new one
(the `@` is already there) and click **Change handle**:

- A handle uses letters, digits, `-` and `_`, like a GitHub login.
- You can't take a handle another person has, or a collaborator's GitHub
  login. To make two people one, [merge them](#merging-people) instead. {% include since.html v="0.14.0" %} Changing only the case, such as
  `ada` to `Ada`, is fine.
- A collaborator with no note yet can't be changed: their handle is their
  GitHub login, so the item is dimmed with the hint "GitHub login".

The change is one commit in the person's vault, **Change handle @old to
@new**. It rewrites:

- the person note's `person:`;
- every `@old` mention in the vault's notes;
- tasks assigned to `@old`, whatever the case;
- `@old` on every side of a pending [suggestion](/guide/track-changes/).

It leaves alone `@old` in code, in email addresses and URLs, `@old/…`,
longer handles that start with `@old`, and the author and text of
[comments](/guide/track-changes/#comments). A note with edits waiting for
your choice, an encrypted note, or a vault that's locked, unreachable or
in the middle of a git operation is skipped, and the result says which. If
the change fails, every note is put back and the notice offers **Try
again**.

A person whose `github` is set still answers to their GitHub login after
the change: `@login` keeps naming them. A person note whose handle is a
duplicate, or isn't valid, gets only its own `person:` changed; no
mention is rewritten. The change covers one vault, and other people's
copies of it pick it up when they pull.

## Merging people {% include since.html v="0.14.0" %} {#merging-people}

**Merge people** turns two or more person notes into one: the person you
keep gets everyone's details, and every reference to the others points at
them. Open it from:

- a person's right-click menu in the [People view](#the-people-view):
  **Merge with…**, then pick the others;
- a duplicate's right-click menu (the warning icon: two notes claiming one
  handle): **Merge into ⟨owner⟩…**;
- a selection of people in the People view: **Merge…** in the bar at the
  bottom, or **Merge N people…** in a selected person's right-click menu;
- **Merge…** on [a person's page](#a-persons-page), or the banner's
  **Merge into ⟨owner⟩…** on a duplicate's page.

In the dialog, pick who to **Keep**. The **Result** table shows what the
kept person ends up with:

- **Email**, **phone**, **URL**, tags, list attributes and relation columns
  combine every value.
- Any other attribute whose value differs between the people offers a
  choice. It starts on the kept person's value.

Click **Merge** and Mahfouz:

- adds the others' [Notes](#notes) after the kept person's own, and puts
  the rest of their text under a **From ⟨name⟩** heading;
- rewrites their `@handle` mentions and task assignees to the kept handle
  everywhere in the vault (a duplicate's handle already names the kept
  person, so nothing changes there);
- points wikilinks and relation links to them at the kept person;
- moves the merged notes to [Trash](/guide/history/), where you can restore
  them.

It's one commit in the vault, **Merge @a into @b**.

Nothing changes, and the dialog says why, when a note you're merging away
has notes inside it, is [published](/guide/publishing/) (unpublish it
first), is only on this computer (disk-only), or is
[encrypted](/guide/encryption/), or when any note the merge touches has
edits waiting for your choice. Encrypted notes can't be searched, so a
mention inside one keeps the old handle.

## Import

Click **Import** in the People view and pick a source. A People
database's **⋯ Database actions** has the same sources, as **Import
vCard…** and **Import macOS Contacts…**. {% include since.html v="0.16.0" %}

- **vCard file (.vcf)…** reads a vCard file exported from another address
  book. It works on desktop and on the web.
- **macOS Contacts…** reads your Mac's address book. It's on the desktop
  app on macOS only: macOS asks for access first, then you choose which
  contacts to bring in. {% include since.html v="0.12.0" %}

A review dialog lists each contact before anything is written:

- A contact **matches** an existing person when one of its emails is
  theirs, or else when its name is the same (ignoring accents and case).
  A match only fills the fields that person doesn't have yet; their name
  is never changed. Every other contact is **new**, shown with the handle
  it will get.
- Untick a contact to leave it out. Cards without a name aren't imported.
- **Fields** picks what's brought in: **Name, nickname, email, phone,
  company, title, website** is on, and **Address, birthday, notes** is off.
  A contact's notes go into the body of its new note.
- **Import** writes everything as one commit, **Import N people**.

The dialog also says it: collaborators on the vault can read People, and
the vault's git history keeps everything ever imported, even after you edit
or delete it.

## Export

Export saves people as vCard 3.0 files, for another address book:

- **One person:** **Export vCard** in their row's menu in the People view,
  **Export vCard…** in the [person menu](#person-chips)
  {% include since.html v="0.15.0" %}, or **Export vCard** on their page.
- **Everyone:** **Export all** in the People view, or **Export all as
  vCard…** in a People database's **⋯ Database actions**
  {% include since.html v="0.16.0" %}, saves `People.vcf`. It's off until
  someone has a person note.

On the web, the file downloads. A person note's body isn't exported.

## Privacy

People are ordinary vault content. Everyone with access to the vault's
repository can read their contact details, and git history keeps them.

People notes are never [published](/guide/publishing/): not a person note,
not the People database, and not its rows, even under a parent that
publishes its child notes. An `@handle` in a published note stays plain
text.
