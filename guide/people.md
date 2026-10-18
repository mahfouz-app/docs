---
layout: guide
title: "People"
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
- **The contact fields** are `name`, `email`, `phone`, `company`,
  `position` (the job title), `github`, `birthday`, `address`, `url` and
  `nickname`. Each is an ordinary [attribute](/guide/attributes/), edited in
  the note's Attributes. A field with several values, such as two email
  addresses, holds a list.
- **The People database** is created at the vault root, titled **People**,
  the first time you add someone. It starts with the Title, `email`,
  `phone`, `company`, `position` and `github` columns.
- **GitHub collaborators** on the vault's repository appear as people
  automatically, with their GitHub login as the handle. A collaborator gets
  a note the first time you edit them. A person note whose `github` is a
  collaborator's login is that collaborator.

## Mentions

Type `@` anywhere in a note's text to open the people menu. It lists the
vault's people and collaborators, matched on handle and name; pick one to
write their `@handle`. An `@` inside code, a link or an email address
doesn't open it.

- **Add “x” as a person…**, the last row, adds someone new from what you
  typed and writes their mention.
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
- In Preview, the chip shows the person's initials and name instead of
  their `@handle`. Backspace deletes it whole. Click it, or move onto it
  with the arrow keys, to open the people menu and pick someone else;
  typing starts a new mention in its place. {% include since.html v="0.13.0" %}
- Hover a mention to see the person's card: their email, phone, GitHub and
  website, with **Open** to open their note, **Copy email**, and **vCard**
  to export them.

## The People view

Click **People** in the left rail to list the vault's people; click it
again to go back to your notes. On a phone, it's **People** in the **⋯**
menu at the top right.

- Type in **Search people** to filter the list. Click a person to open
  their note. A collaborator with no note yet shows **GitHub only**.
- **Add person** asks for a name and adds a row to the People database.
- **Open People database** opens the database itself, as a table.
- **Import** and **Export all** are described [below](#import).
- Right-click a person for **Open**, **Export vCard**, **Change handle…**
  ([below](#changing-a-handle)) and **Delete**.
- A warning icon marks a person whose handle doesn't work; hover it to see
  why. The handle is used by another person note (the first by path keeps
  it), is also a collaborator's GitHub login (this note takes it, so the
  collaborator isn't listed), or isn't a valid handle.
- Under the list, **Shared with N collaborators on this vault** is a
  reminder of who can read these notes.

## A person's page

Under a person note's text, Mahfouz shows:

- **Tasks:** the [tasks](/guide/tasks/) assigned to them, as a **Table**,
  **Board** or **Calendar** like the Tasks tab. Its view settings are shared
  by every person page. {% include since.html v="0.12.0" %}
- **Mentions:** a row for each mention of them, showing its line; two
  mentions in one paragraph share a row. When there's more to see, the
  chevron expands the row to the whole paragraph, list item, heading or
  table row. Click the note's title on the right, or the row, to open the
  note at the mention. Links in the text open their own targets. {% include since.html v="0.12.0" %}
- **Export vCard**, at the top, saves the person as a `.vcf` file.
  **Change handle…**, next to it, changes their handle (see
  [Changing a handle](#changing-a-handle)).

Clicking a task or a mention opens its note at that line, shaded until you
click, type or move the cursor in the note.

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
  login: there's no merging two people. Changing only the case, such as
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

## Import

Click **Import** in the People view and pick a source:

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
  **vCard** on their hover card, or **Export vCard** on their page.
- **Everyone:** **Export all** in the People view saves `People.vcf`.

On the web, the file downloads. A person note's body isn't exported.

## Privacy

People are ordinary vault content. Everyone with access to the vault's
repository can read their contact details, and git history keeps them.

People notes are never [published](/guide/publishing/): not a person note,
not the People database, and not its rows, even under a parent that
publishes its child notes. An `@handle` in a published note stays plain
text.
