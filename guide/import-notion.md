---
layout: guide
title: "Importing from Notion"
since: "0.12.0"
description: "Bring pages, databases, tasks, comments and files from a Notion workspace into a vault."
permalink: /guide/import-notion/
---

The **Notion import** plugin copies a Notion workspace into a vault: its
pages and sub-pages, databases, to-dos, comments, images and files. It
reads Notion through its API, so you don't export anything from Notion
first. What you get is ordinary notes in the vault, saved in batches as
they're read. {% include since.html v="0.27.0" %}

You need:

- **The desktop app**, version 0.12.0 or later. Importing isn't available
  on the web.
- **The Notion import plugin.** Turn it on in Settings →
  [Plugins](/guide/plugins/).
- **A Notion integration token**, with the pages you want shared with that
  integration (next section).

## Set up a Notion integration

Notion only lets an app read the pages you share with it. To give Mahfouz
access:

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
   and create a new **internal** integration for your workspace.
2. Under **Capabilities**, turn on **Read content**, **Read comments** and
   **Read user information**. Leave the insert and update capabilities off:
   the import only reads.
3. Copy the integration's secret. That's the token you paste into Mahfouz.
4. In Notion, open each top-level page you want to import, click **•••**
   in its top-right corner, choose **Connections**, and add your
   integration. Sharing a page shares everything under it, so you only
   need to do this for the top of each tree.

Without **Read comments**, comments aren't imported. Without **Read user
information**, people come in by the names Notion shows, without their
emails. The preview's warnings say when **Read comments** is missing. When
**Read user information** is, the review says so under **People**
{% include since.html v="0.27.0" %}, with **Open Notion integrations** to
turn it on and **Scan again** to read the workspace again once you have.
You can also import without it and
[map people afterwards](#map-people).

## Import

Right-click a note or folder in the sidebar and choose **Import here…**.
The import lands inside it. You can also choose **File → Import…**
{% include since.html v="0.16.0" %} or run the **Import** action. Both
import into the active note, or the vault's top level when no note is
open. The action has no shortcut until you give it one in **Settings →
Shortcuts** (see [Keyboard shortcuts](/guide/shortcuts/)).

The import runs in the background, so you can keep working while Notion
is read and while the notes are written. {% include since.html v="0.16.0" %}
One notification in the [notification area](/guide/notifications/) follows
it from start to finish, with its progress. A click outside the dialog
doesn't close it: use **Cancel**, the **×** or <kbd>Esc</kbd>.

The import has these steps:

1. **Source and destination.** Pick **Notion**, check **Import into**
   (**Change** picks another note or folder), and paste the token. To
   import a single page, paste its link into **Page link** (next section);
   leave it empty to import from everything shared with the integration.
   {% include since.html v="0.14.0" %} **Include comments** is on by
   default; turn it off for a faster import. Click **Start**
   {% include since.html v="0.16.0" %}.
2. **Scan.** {% include since.html v="0.27.0" %} The dialog closes and
   Mahfouz lists the top-level pages and databases shared with the
   integration, or only the linked page, in the background. This is quick:
   the pages themselves are read later, during the import. When it's done,
   the notification says what's ready: click **Review…** to reopen the
   dialog on the next step, or **Discard** to drop it. If the scan fails,
   the notification says why, and **Try again…** reopens the dialog with
   your choices kept.
3. **Review.** {% include since.html v="0.27.0" %} The top-level pages and
   databases are listed with about how many pages or rows each holds, all
   ticked. Untick the ones to leave out (**Select none** and **Select all**
   help). Sub-pages and database rows come with the page they're in. Any
   warnings about what can't come across are listed under them. Under
   **People**, type a GitHub login for each person Notion mentions; a login
   is filled in when the person's email matches one of the vault's
   collaborators. A person left blank keeps their name as plain text, and
   their tasks stay unassigned. People Notion names only once the import
   is under way, such as guests, can be
   [mapped afterwards](#map-people). **Back** returns to the first step. Click
   **Import about N notes**.
4. **Import.** The dialog closes and the same notification follows the
   import: **150 of about 410 notes saved**, with **Stop**. Notion is read
   one page at a time, and every 50 notes or so are saved and committed,
   so the first notes show up in the sidebar within seconds, and you can
   open them while the rest arrive.

### Map people afterwards {% include since.html v="0.27.0" %} {#map-people}

People the review didn't list, because Notion first names them partway
through the import (guests, or everyone when the integration can't read
the workspace's members), are kept in the notes as links with their name
until you give them a GitHub login. When the import finishes, its
notification says how many there are; click **Map people…**. You can also
choose **Map imported people…** later, from the menu of a note that
mentions one of them or from the command palette.

The dialog lists each person with the notes that name them. Type a GitHub
login for the ones you know and click **Map people**: their mentions
become `@login`, their tasks are assigned to them, and the comments they
wrote show them as the author, in one change in the vault's history. A
person left blank becomes their name as plain text. Until then, a
published page shows their name.

### Import one page {% include since.html v="0.14.0" %} {#import-one-page}

1. In Notion, open the page, click **•••** in its top-right corner, and
   choose **Copy link**. A database's link works too.
2. Make sure the page is connected to your integration: **•••** →
   **Connections** should list it, on the page or on a page above it.
3. In the Import dialog, paste the link into **Page link** and click
   **Start**.

Only that page and the pages under it are read, so this is quick even in a
large workspace. If the page isn't connected, the notification says so and
nothing is imported.

A link to a row of a database imports the row as a page, without its
properties; link the database to bring its rows in with their
properties.

### In the vault's history {% include since.html v="0.27.0" %} {#history}

Each batch is its own change in the vault's history: **Import from
Notion: notes 1–50**, **notes 51–100**, and so on. When links are left to
point at pages saved in a later batch, a last change, **Import from
Notion: links**, sorts them out. When it's done, the notification says **Imported N notes**,
in how many changes, with **Open**.

If a batch fails, only that batch is taken back, and the import stops:
the batches before it stay in the vault. To take a whole import back,
delete the imported notes, which sends them to the
[Trash](/guide/history/), or revert its changes with git.

Every imported note carries an `import_source` attribute naming the Notion
page it came from (hidden in the note's attributes until you show it).
That's how a resumed import, on this computer or another clone of the
vault, knows which pages are already in, so don't edit or remove it while
an import may still be resumed.

The token is kept in memory until you quit Mahfouz, and **Replace** swaps
it for another. It's never saved to disk or to the vault.

### Stop, resume or finish {% include since.html v="0.27.0" %} {#resume}

**Stop** in the notification stops the import after the batch being
saved; you can also quit Mahfouz, or lose the connection. Either way, the
notes already saved stay, and the notification says **Import from Notion
stopped**, with:

- **Resume…** reopens the Import dialog with a banner naming the import
  and how many notes were saved. Paste the token again (it's only kept
  until Mahfouz quits) and click **Resume import**: the import carries on
  where it stopped, into the same place and with the same pages and
  people, without the scan or the review. **Start over** drops the resume
  point instead; the notes already imported stay.
- **Finish here** ends the import as it is. Links to pages that weren't
  imported become links back to Notion (or plain text, after Mahfouz has
  restarted without a resume point), in one more change.

Resuming works after a restart too: when Mahfouz opens a vault with a
stopped import, the same notification comes back. If the Notion plugin is
turned off, it says to turn it on to resume; **Finish here** still works.
The resume point lives in the vault's `.git` folder on this computer and
is never committed. Without it (another computer, or it was removed), a
new import of the same pages skips the ones already in the vault.

Until an import is finished, a link to a page that hasn't been imported
yet is written as `mahfouz-import:page/…`, in a note's text and in a
database cell alike, and becomes a link when the page arrives. A note holding such a link
offers **Repair import links in this vault** in its menu and in the
command palette: it points every such link whose page is now in the vault
at its note, then asks before turning the rest into text.

## What comes across

- **Pages** become notes, with Notion's nesting kept: a page's sub-pages
  are its child notes. The page title becomes the note's heading.
- **Text** keeps headings, lists, to-dos, quotes, code (with its language),
  equations, tables, dividers, bold, italic, strikethrough, inline code and
  links.
- **Toggles** become list items with their contents nested under them.
  **Callouts** become quotes that start with the callout's emoji.
  **Columns** are laid out one after the other. **Synced blocks** are
  copied into each page that shows them.
- **Bookmarks and embeds** become links.
- **Images and files** stored in Notion are copied into the vault's
  `files/` folder (see [Images & attachments](/guide/media/)).
- **Databases** become Mahfouz databases: each Notion entry is a row note,
  and each property a typed column.
- **To-dos with a date mention** become [tasks](/guide/tasks/). A person
  mentioned in the same to-do becomes its assignee. Other to-dos stay
  ordinary checklist items.
- **Comments** become [comment threads](/guide/track-changes/#comments) on
  the block they were left on, with their author and date. A comment on a
  one-line block highlights that block's text; a comment on a longer block
  or on the page itself becomes a thread at that spot. An author with no
  GitHub login is written as their name, for example `@jane-doe`.
- **Mentions** of a page become links to its note when that page is
  imported too, and links back to Notion otherwise. A mention of a person becomes
  their `@login`, or their name. A date mention becomes the date.

### Database columns

| Notion property | Mahfouz column |
|---|---|
| Text | Text |
| Number | Number |
| Select, Status | Select, with the same options |
| Multi-select | Multi-select |
| Date | Date, or Date & time when any value has a time. A range adds a second `… end` column. |
| Checkbox | Checkbox |
| URL, Email, Phone | URL, Email, Phone |
| Person | Text: `@login` or the person's name |
| Relation | A relation column when it links rows of the same database {% include since.html v="0.27.0" %}; text with links to the related notes otherwise |
| Files & media | Attachment: the first file; any others go in the row's body |
| Formula, Rollup | The value at import time. It won't recalculate. |
| Created time, Last edited time | Date & time |
| Created by, Last edited by, ID | Text |
| Button, Verification, Place | Not imported |

Each database gets one table view. Notion's API doesn't expose views,
filters or sorts, so set those up again in Mahfouz.

**Sub-items** {% include since.html v="0.27.0" %}: a database whose rows
have Notion's **Parent item** and **Sub-items** properties gets them as a
pair of [relation](/guide/databases/) columns, and a Tree view next to the
table nests each row under its parent. Notion's API doesn't say which
relation holds sub-items, so Mahfouz takes the one whose name contains
"parent", as long as no row has more than one parent. Otherwise the
relation comes in without the Tree view, and the import's warnings say
why. A relation like **Blocked by** / **Blocking** stays a pair of
relation columns.

## Limits

- **Comments:** Notion's API returns only unresolved comments, and anchors
  each one to a whole block, not to the words it was left on. Files
  attached to comments aren't imported.
- **Linked databases** (a view of a database that lives elsewhere) can't
  be read through the API and are skipped. Import the original database
  instead.
- **Files hosted elsewhere**, such as an image embedded from another
  website, stay links to that site.
- **Dates and times** are converted to this computer's time zone. A date
  range keeps only its start, except in a database column.
- **Page icons and covers**, tables of contents, breadcrumbs, buttons and
  AI or meeting-notes blocks aren't imported.
- **Large workspaces take a while.** Notion allows about three requests a
  second, and **Include comments** adds one request for every block. The
  notes arrive as they're read, and you can stop and resume.

## Security

The token is sent only to Notion's API (`api.notion.com`); the Notion
plugin's code never sees it. Plugins aren't isolated from one another,
though: while the token is held, another installed plugin could make its
own requests to Notion's API with it, so only install plugins you trust.
