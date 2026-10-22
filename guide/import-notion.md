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
first. What you get is ordinary notes in the vault, added in one commit.

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
emails. The preview's warnings say when either is missing.

## Import

Right-click a note or folder in the sidebar and choose **Import here…**.
The import lands inside it. You can also run the **Import** action, which
imports into the active note. It has no shortcut until you give it one in
**Settings → Shortcuts** (see [Keyboard shortcuts](/guide/shortcuts/)).

The dialog has these steps:

1. **Source and destination.** Pick **Notion**, check **Import into**
   (**Change** picks another note or folder), and paste the token. To
   import a single page, paste its link into **Page link** (next section);
   leave it empty to import from everything shared with the integration.
   {% include since.html v="0.14.0" %} **Include comments** is on by
   default; turn it off for a faster import. Click **Continue**.
2. **Reading.** Mahfouz reads the shared pages, or only the linked page
   and what's under it. **Cancel** stops it, and nothing has been written
   yet.
3. **Choose pages.** {% include since.html v="0.14.0" %} When Notion shares
   more than one top-level page or database, they're listed with how many
   pages or rows each holds, all ticked. Untick the ones to leave out
   (**Select none** and **Select all** help), then click **Continue**.
   Sub-pages and database rows come with the page they're in, and a link
   to a page you left out becomes plain text. With a page link, or a single
   shared page, this step is skipped.
4. **Preview.** You see how many notes, databases, files, tasks and
   comments will be created, and any warnings about what can't come
   across. Under **People**, type a GitHub login for each person Notion
   mentions; a login is filled in when the person's email matches one of
   the vault's collaborators. A person left blank keeps their name as plain
   text, and their tasks stay unassigned. **Back** returns to the page
   list with your choices kept. Click **Import**.

### Import one page {% include since.html v="0.14.0" %} {#import-one-page}

1. In Notion, open the page, click **•••** in its top-right corner, and
   choose **Copy link**. A database's link works too.
2. Make sure the page is connected to your integration: **•••** →
   **Connections** should list it, on the page or on a page above it.
3. In the Import dialog, paste the link into **Page link** and click
   **Continue**.

Only that page and the pages under it are read, so this is quick even in a
large workspace. If the page isn't connected, the dialog says so and
nothing is read.

The files are downloaded, then everything is written and committed as one
change in the vault's history: **Import from Notion: N notes**. A
notification shows the progress. If something fails partway, the import
removes what it wrote and nothing is left behind.

Because the import is a single commit, you can take it back in one step
with git (`git revert` of that commit), or delete the imported notes,
which sends them to the [Trash](/guide/history/).

The token is kept in memory until you quit Mahfouz, and **Replace** swaps
it for another. It's never saved to disk or to the vault.

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
  imported too, and plain text otherwise. A mention of a person becomes
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
| Relation | Text: links to the related notes |
| Files & media | Attachment: the first file; any others go in the row's body |
| Formula, Rollup | The value at import time. It won't recalculate. |
| Created time, Last edited time | Date & time |
| Created by, Last edited by, ID | Text |
| Button, Verification, Place | Not imported |

Each database gets one table view. Notion's API doesn't expose views,
filters or sorts, so set those up again in Mahfouz.

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
  second, and **Include comments** adds one request for every block.

## Security

The token is sent only to Notion's API (`api.notion.com`); the Notion
plugin's code never sees it. Plugins aren't isolated from one another,
though: while the token is held, another installed plugin could make its
own requests to Notion's API with it, so only install plugins you trust.
