---
layout: guide
title: "Forms"
since: "0.32.0"
description: "Publish a form anyone with the link can fill in, and add each response as a row of a database."
permalink: /guide/forms/
---

A form collects responses from anyone with its link: job applications,
sign-ups, feedback. Each response becomes a new row of one of your
[databases](/guide/databases/). People who fill in the form don't need
Mahfouz or a GitHub account. {% include since.html v="0.32.0" %}

A form lives in a note of its own, the **form note**. The note holds a
`form` block, and you publish the note like any other
[published page](/guide/publishing/). Publishing works in the desktop app
and on the web, and you need to be [signed in to GitHub](/guide/github/).

## Make a form

There are two ways:

- **From the slash menu.** In any note, type `/` and choose **Form**. Pick
  the database the responses go to, or **New database…**. Mahfouz writes a
  form block with a Title question and a page text question.
- **From the database.** In the database's tab, open the **Forms** menu
  next to **Filter** and choose **New form for <database>…**, or choose
  **New form…** in the database's **⋯** menu. Tick the questions the form
  asks, then click **Create form**. To start, only Title and page text are
  ticked, so columns you use yourself, such as Status or Score, never go
  public unless you tick them.

  Mahfouz creates a note named "<database> form" next to the database,
  outside it, so the form note isn't read as one of the database's rows.

In Preview, the form block shows as a card: the form's questions, the
column each one fills, its type and whether it's required. In Source, you
see the block as YAML:

````markdown
```form
database: "[[Candidates]]"
confirmation: "Thanks! We read every application."
questions:
  - id: q7k2
    label: Your name
    column: title
    required: true
  - id: q3fm
    label: About you
    body: true
```
````

A note can hold one form. The block is part of the note, so it's saved,
committed and synced like the rest of your vault.

## Questions and columns

Each question fills one column of the new row. Its input comes from the
column's type:

| Column type | What the visitor sees |
|---|---|
| Text | A one-line text field |
| Number | A number field |
| Checkbox | A checkbox |
| URL, Email, Phone | A field for that kind of value |
| Date, Date & time | A date picker |
| Select | A choice of the column's options |
| Multi-select | A choice of one or more of the column's options |
| Attachment, Image | A file upload (see [Files](#files)) |

Relation, rollup, color, font, audio and video columns can't be asked for,
and neither can the attributes Mahfouz keeps for itself.

One question can be **Page text** instead of a column: a longer answer
written into the row's page, under a heading named after the question.

On the card:

- Drag a question by its handle to reorder it, or press
  <kbd>Alt</kbd><kbd>↑</kbd> and <kbd>Alt</kbd><kbd>↓</kbd>.
- Turn **Required** on or off in the question's row.
- Click a question's **⋯** to change its label and its help text (shown
  under the question), move it, or remove it.
- **Add question** lists the database's columns that aren't asked yet.

A form can have up to 30 questions. A one-line answer can be up to 500
characters, and a page text answer up to 10,000.

The card is read-only while the note is in Suggesting mode, and in an
encrypted note.

## Settings

Click **Settings** on the card:

- **Responses go to**: the database that gets the rows. A form can't add
  rows to the People database, or to the database the form note is a row of.
- **After submitting, show**: the message visitors see once they've sent
  the form. Empty, it's "Thanks! Your response was sent."
- **Close on**: the form stops taking responses after this day.
- **Stop after**: the form stops taking responses once it has this many.
- **Uploaded files**: where files go (see [Files](#files)).

Changes to the block, settings included, reach the live form when you
update the page. Until then, the card says **Update the page to publish
the form**.

## Publish the form

Publish the form note from its bottom bar or its menu, as any
[published page](/guide/publishing/#publish-a-note). The publish dialog
says the page has a form, which database gets the responses, how long
responses wait, and where uploaded files go.

The form runs on its own address, `f.mahfouz.page`. The dialog's **Form
link** gives it, with **Copy**. The page's usual `p.mahfouz.app` address,
and its address on a [custom domain](/guide/custom-domains/), open the form
too. You can also copy the link from the card or from the database's
**Forms** menu.

Anyone with the link can send a response. Each visitor goes through
Cloudflare's bot check (Turnstile) before the response is accepted. The
form's address is the only place Mahfouz runs a script on a published
page: your other pages stay script-free.

A page with a form isn't listed in the sitemap, even when its visibility is
Indexed.

## How responses arrive

Responses wait, encrypted, on Mahfouz's servers until your app adds them to
the database. The app adds them:

- when it opens,
- when its window comes back into focus,
- after a sync,
- and when you click **Add N now** in the database's **Forms** menu.

Each batch is one commit, **Form responses: 3 to Candidates**, and a
notification says how many were added, with a button to open the database.
If you're editing, the responses wait until your edits are saved.

A form can also have its responses added while the app is closed: turn on
**Add responses on Mahfouz's servers when the app is closed** in its
**Settings**. It's off by default. It needs an
[online agent connection](/guide/online-agents/) with write access to the
vault's repository, uses your plan's container hours, and commits to the
repository as you. You turn it on from web.mahfouz.app, and it can't be on
for a database you keep [disk-only](/guide/history/#auto-commit-and-disk-only-notes). You get a notification
when responses are added this way.

Each response becomes a new row:

- Its title is the Title question's answer, or "Response <date>" when the
  form doesn't ask for one.
- Each answer fills its column. Page text goes into the row's page under a
  heading.
- An answer that no longer fits its column, because the column changed
  since the response was sent, is kept in the row's page under **Answers
  that no longer fit**.
- The row also gets two hidden attributes: `form_response`, which Mahfouz
  uses to know the response was added, and `form_submitted`, when it was
  sent.

Answers are written as plain text. A visitor can't add a link, a
`[[wikilink]]`, an `@mention`, a `#tag`, a task or a suggestion to your
vault: whatever they type is escaped, so it shows as typed and links to
nothing.

The database's **Forms** menu lists every form that adds rows to it, with
whether it's live, closed, not published or needs fixing, and how many
responses it has, how many are waiting, and how many came this month.

### Notifications

On the web, with [device notifications](/guide/notifications/) on, Mahfouz
can tell you when a form gets new responses ("3 new form responses"), even
when the app is closed. The notification holds only the count, never a
form's name or an answer.

Responses that wait too long are deleted (see [Limits](#limits)). Before
that, Mahfouz warns you, 3 days and 1 day ahead: open the app to add them.

## Files

A question on an Attachment or Image column asks for a file. Visitors can
send PDF, PNG, JPEG, GIF, WebP, AVIF or plain text files. Mahfouz checks each file's
type from its contents, not its name, and refuses anything else.

| Plan | Files per response | Size of each file |
|---|---|---|
| Free | 1 | Up to 5 MB |
| Pro, Max | 3 | Up to 10 MB |

**Uploaded files** in the form's settings decides where they go:

- **Copy into the vault** (the default): each file is saved in the vault's
  `files/` folder with the response, then deleted from Mahfouz's servers.
  Mahfouz gives the file a safe name, and its extension always matches the
  type found in its contents.
- **Keep on Mahfouz's servers** (Pro and Max): the file stays on the
  server, and the row's cell links it. Click the link in the row to open
  it. Only the form's owner can open its files; a collaborator on the vault
  can't. This keeps large files out of git, but those files can't be
  recovered from the vault alone.

When you delete a row whose file is kept on the server, the file is deleted
30 days later. Restore the row from Trash before then and the file stays.

## Limits

| Plan | Live forms | Responses a month | Responses wait | Files kept on the server |
|---|---|---|---|---|
| Free | 1 | 100 | 10 days | — |
| Pro | 10 | 2,000 | 30 days | 5 GB |
| Max | 50 | 20,000 | 90 days | 50 GB |

- **Responses a month** counts every form of yours together. Once they're
  used up, your forms close until the next month.
- **Responses wait** is how long a response stays on Mahfouz's servers
  before your app adds it. Responses still waiting after that are deleted,
  and the form closes to new responses until your app adds the rest.
- Publishing a form past your plan's number of live forms is refused.
- Past your storage for kept files, a form that keeps files on the server
  closes.

See [Plans & billing](/guide/plan/).

A form also closes on its **Close on** day and once it reaches **Stop
after**. A closed form tells visitors it isn't taking responses. The card
says why it's closed.

## Fix a form

A form can stop matching its database: a column is removed or renamed, its
type changes, or a select loses its options. The card then marks each
question that needs fixing and says why, such as "Status was removed". For
each one, choose **Map to a column…** to pick another column, or remove the
question.

Until it's fixed:

- Publishing or updating the page waits, and the publish dialog lists what
  to fix.
- Responses keep arriving. Answers to the broken questions go into the
  row's page text, so nothing is lost.

If the form's database can't be found at all, a notification says the form
needs fixing, with **Open form note**. Pick the database again in
**Settings**. Its responses wait on the server for up to 90 days
meanwhile.

The form finds its database by its id, so renaming the database doesn't
break it.

## Unpublish

Unpublish the form note as any
[published page](/guide/publishing/#unpublish). The form stops taking
responses right away.

Unpublishing deletes the responses your app hasn't added yet, and any files
the form keeps on Mahfouz's servers. Before you confirm, Mahfouz says how
many of each will be deleted. To keep them, open the app and let it add
the responses first.

Removing the `form` block from the note and updating the page closes the
form too. If responses are still waiting, a notification says so: put the
form back to add them, or unpublish the page to delete them.

## Privacy

What visitors see:

- the form note's text, as on any published page,
- each question's label, help text and, for a select, its options,
- your confirmation message.

What never leaves your vault:

- the database's name and its column names,
- the rows already in the database,
- which column each question fills.

Responses are encrypted while they wait on Mahfouz's servers, and only you,
the form's owner, can read them. Mahfouz keeps no visitor's IP address or
account with a response. Once your app adds a response, it's deleted from
the server a day later; a file kept on the server stays until you delete
its row.

## FAQ

**Can a collaborator on the vault add my form's responses?**
No. Only the account that published the form can read its responses. A
collaborator sees the rows once your app has added and synced them.

**What happens if I edit a row a response created?**
Nothing special: it's an ordinary row. The response was added once and
won't be added again.

**Can I publish the same form on two pages?**
No. A form is its note, and a note has one page. Make another form note
for another page.

**What does an export of the form note hold?**
A Word or PDF export, or **Send a copy…**, shows *Form (not published)*
where the form is. A Markdown export keeps the block as written.

**I changed a question's label. Do older responses change?**
No. Each response is added with the questions it was sent against.
