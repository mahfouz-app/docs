---
layout: guide
title: "Publishing notes to the web"
description: "Publish a note as a public page anyone with the link can read, keep it up to date, and unpublish it."
permalink: /guide/publishing/
---

Publishing turns one note into a public web page. Anyone with the link can
read it, without Mahfouz or a GitHub account. The rest of your vault stays
private: only that note and its images are sent.

Publishing works in the desktop app and on the web. You need to be
[signed in to GitHub](/guide/github/), and the vault needs at least one
commit.

## Publish a note

Open the note's menu (right-click it in the sidebar, or **⋯ (More)** on the
[toolbar](/guide/toolbar/)) and choose **Publish to web…**. The dialog says
what goes public:

- **The note** — its text, as it reads now.
- **Images to upload** — every image the note shows, listed by name.
  PNG, JPEG, GIF, WebP and AVIF images are published.
- **Attachments that aren't published** — any other file the note links,
  such as a PDF or an SVG, is named here and left out.
- **Links to other notes** appear as plain text.
- **Your vault's settings** (`.config/`) are never sent.

Tick **Auto-publish changes** if you want the page to follow the note (see
[Keeping the page up to date](#keeping-the-page-up-to-date)), then click
**Publish**. The link is copied to your clipboard, and a notification offers
**Open**.

The page's address is the note's title followed by an id, for example
`https://p.mahfouz.app/trip-notes-ab3de7fgh2`. If you rename the note, the
next update changes the address, and the old one keeps working: it
redirects to the new one. Published pages ask search engines not to index
them.

### What isn't published

- **Attributes.** The page shows the note's body only. The colour and font
  attributes change how the page looks (see
  [How a published page looks](#how-a-published-page-looks)), but no
  attribute is shown on the page.
- **Pending suggestions.** A note with [track changes](/guide/track-changes/)
  is published as it reads with every pending suggestion rejected: the
  original text. Comments, and who wrote them, aren't published.
- **External images.** An image from another website shows on the page only
  if the note has **Render external images** turned on (see
  [Media](/guide/media/)). Otherwise the page shows its alt text.

### Limits

- A note can be up to 1 MB, each image up to 5 MB, and the whole page up
  to 25 MB.
- You can have up to 100 published pages at a time.
- Publishing a lot in a short time is slowed down for a while.

## Keeping the page up to date

A page doesn't change when you edit the note. To bring it up to date:

- Choose **Update published page** from the note's menu.
- Or, in the right sidebar's **Attributes** section, click **Update** next to
  **Page out of date**. That row appears when you've changed the note since
  you last published it.

The same section shows the page's link (click it to open the page, or
**Copy**) and the **Auto-publish** switch.

**Auto-publish** updates the page a few seconds after each commit that
changes the note, so the page follows your edits without you asking.

- It works through commits, so a note with auto-commit turned off (a
  [disk-only note](/guide/history/#auto-commit-and-disk-only-notes)) can't
  auto-publish.
- Changes you pull from a collaborator don't update the page. The page
  changes when you edit the note yourself, or when you update it.
- If the publishing service can't be reached, the update waits and is tried
  again the next time Mahfouz starts or commits.
- If you're signed out, or the page belongs to another account, auto-publish
  stops for that note and a notification says why.

Once a note is published, its menu also has **Copy public link** and
**Open published page**.

## Publish child notes

A note's children can be published with it. Tick **Also publish child
notes** in the publish dialog, or, for a note that's already published,
choose **Publish child notes…** from its menu. The dialog says how many
notes that publishes now.

- Every note under the parent gets its own page and link: its children,
  their children, and so on. The parent's page doesn't link to them, and
  links between notes still appear as plain text.
- Notes that arrive later are published too: a new child, a note you move
  under the parent, one you restore from the trash, or a file added outside
  Mahfouz. Each is published on the first commit after it has a title, and a
  notification gives its link.
- With **Auto-publish changes** on for the parent, the child pages follow
  your edits as well.
- A [disk-only note](/guide/history/#auto-commit-and-disk-only-notes) isn't
  published, and neither is a note you pull from a collaborator until you
  change it yourself.

Choose **Stop publishing child notes** from the parent's menu to turn it
off. No new children are published; the pages already online stay up.

Unpublishing a child keeps it off the web: it isn't published again with
its parent. Publishing it yourself undoes that. Unpublishing the parent asks
whether to unpublish its child pages too; **Cancel** keeps them online. A
child you move out from under the parent keeps its page.

The setting travels with the vault, but it publishes nothing on a device
until it's turned on there. On your other computer, or for a collaborator,
the parent's menu shows **Publish child notes on this device…**. So a child
is only ever published under the account of someone who chose to.

## How a published page looks

A published page looks like the note does in the editor's
[Preview mode](/guide/editor/):

- **Always light.** The page has a white background by default, whatever
  the reader's dark-mode setting is.
- **The same typography** as Preview: the same headings, lists, task
  checkboxes, tables, quotes and highlights.
- **Callouts** (`> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`,
  `> [!CAUTION]`) show with their icons and colours.
- **Code blocks** show as plain grey monospace text. Diagrams aren't drawn:
  a Mermaid or draw.io block shows as its source text.
- **Links to other notes** are plain text, since the notes they point to
  aren't public.

The note's own style comes along too. These [attributes](/guide/attributes/)
apply to the page:

- **Background color**, **Text color** and **Highlight color**. A colour
  carries over when it's a six-digit hex value such as `#1e3a5f`, which is
  what the colour picker writes. A colour typed by hand in another form
  (say `red`) is ignored on the page.
- **Font**. With no Font attribute, the page uses the vault's editor font
  setting.

If you set only a dark background, or only a light text colour, the rest
of the page's colours (the text or background you didn't set, highlights,
lines and callouts) switch to dark-theme ones so the page stays readable.

Pages published before Mahfouz sent a note's style have the new look, but
on a white background. The note's colours and font reach the page the next
time you publish or update it.

### The page's footer

The bottom of every page shows **Published with Mahfouz**, when the page
was last updated, an **Edit** link and **Report this page**.

**Edit** opens Mahfouz on the web with the page:

- **Edit original** — if you're signed in and can edit the repository the
  note came from, this opens the note. If that repository isn't open in
  Mahfouz yet, it's cloned into your browser first, after asking.
- **Copy into my vault** — makes the page a new note in a vault you choose,
  with its images copied into the vault's `files/` folder. The copy isn't
  published.
- **Sign in to edit** and **Open on GitHub** appear when they apply.

## Unpublish

Choose **Unpublish** from the note's menu, and confirm. The link stops
working right away, and the note itself is unchanged.

**Settings → Published pages** lists every page you've published, from any
vault or device, with its link and when it was last updated. **Unpublish**
there works the same way.

When you delete a published note, Mahfouz asks whether to unpublish its page
too. **Cancel** keeps the page online.

If a page is unpublished somewhere else, such as from another device, the
next update tells you, and the note stops being marked as published.

## How it's stored

A published note remembers its page in its own attributes:
`published: <id>` (the page's id) and, with auto-publish on,
`auto_publish: true`. A parent that publishes its children has
`publish_children: true`, and a child kept off the web has
`no_publish: true`. They travel with the note through git, so another
device or a collaborator sees the note as published. See
[Names Mahfouz keeps for itself](/guide/attributes/#names-mahfouz-keeps-for-itself).

A copy of the note (Duplicate, a template, an import, or **Copy into my
vault**) is a new note and isn't published. Moving a note to another vault
keeps its page.

The page itself lives on Mahfouz's publishing service, not in your vault.
Deleting the vault or its repository doesn't take the page down; unpublish
it first.
