---
layout: guide
title: "Publishing notes to the web"
since: "0.11.0"
description: "Publish a note as a public page anyone with the link can read, keep it up to date, and unpublish it."
permalink: /guide/publishing/
---

Publishing turns one note into a public web page. Anyone with the link can
read it, without Mahfouz or a GitHub account. The rest of your vault stays
private: only that note and its images are sent.

To share a note with chosen people instead, who can then comment on it or
edit it with you, see [Sharing a note with people](/guide/sharing/) {% include since.html v="0.16.0" %}.

Publishing works in the desktop app and on the web. You need to be
[signed in to GitHub](/guide/github/), and the vault needs at least one
commit.

## Publish a note

Click **Publish** (the globe) in the open note's [bottom bar](/guide/toolbar/#the-bottom-bar),
or right-click the note in the sidebar and choose **Publish to web…**. The dialog says
what goes public:

- **The note**: its text, as it reads now.
- **Images to upload**: every image the note shows, listed by name.
  PNG, JPEG, GIF, WebP and AVIF images are published.
- **Attachments that aren't published**: any other file the note links,
  such as a PDF or an SVG, is named here and left out.
- **Diagrams shown as code** — any Mermaid or draw.io block that will be
  published as its source text (see [Diagrams](#diagrams)).
- **Links to other notes** link to those notes' pages when they're
  published, and appear as plain text otherwise (see
  [Links between published notes](#links-between-published-notes)).
- **Your vault's settings** (`.config/`) are never sent.
- **Note IDs**: when a [database view](/guide/databases/#publishing) on
  the page shows **Note ID**, the dialog warns that the ids reveal when
  each row was created. **Page settings** warns the same way. Hide Note ID
  in the view to leave it out. {% include since.html v="0.16.0" %}

Choose the page's **Visibility** (see [Visibility](#visibility)) and
**Theme** (see [Themes](#themes)). Turn on **Auto-publish changes**
{% include since.html v="0.13.0" %} if you want
the page to follow the note (see
[Keeping the page up to date](#keeping-the-page-up-to-date)), then click
**Publish**. The link is copied to your clipboard, and a notification offers
**Open** and **QR code**.

The page's address is the note's title followed by an id, for example
`https://p.mahfouz.app/trip-notes-ab3de7fgh2`. If you rename the note, the
next update changes the address, and the old one keeps working: it
redirects to the new one.

### What isn't published

- **Attributes.** The page shows the note's body only. Some attributes
  change how the page looks or what a shared link shows (see
  [How a published page looks](#how-a-published-page-looks) and
  [Link previews and language](#link-previews-and-language)), but no
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

## Visibility

A page is either:

- **Unlisted** — the default. Anyone with the link can read it, and
  search engines are asked not to list it.
- **Indexed** — listed in p.mahfouz.app's sitemap, so it can appear in
  search results. That can take a day or more.

Choosing **Indexed** asks you to confirm. Search engines may keep a copy of
an indexed page for a while after you make it unlisted again.

Indexed pages need a GitHub account that's at least a week old, and you can
have up to 20 at a time. If a page can't be made indexed when you publish
it, it's published unlisted, and the notification says why.

Updating a page keeps its visibility. Unpublishing it and publishing it
again starts it unlisted, at the same address.

## Page settings

To change a published page's options later, choose **Page settings…** from
the note's menu. It has the same **Visibility** and **Theme** choices as the
publish dialog, and changes the live page right away, without an update.

**Settings → Published pages** also has **Make indexed** or **Make
unlisted** next to each page.

## Keeping the page up to date

A page doesn't change when you edit the note. To bring it up to date:

- Choose **Update published page** from the note's menu.
- Or, in the right sidebar's **Attributes** section, click **Update** next to
  **Page out of date**. That row appears when you've changed something the
  page shows since you last published it: the title, the text and its
  images, the page's style, or the `description` and `lang` attributes.
  Other attributes aren't on the page, so changing them doesn't mark it out
  of date.

The same section shows the page's link (click it to open the page, or
**Copy**) and the **Auto-publish** switch.

**Auto-publish** updates the page a few seconds after each commit that
changes what the page shows, so the page follows your edits without you
asking.

- It works through commits, so a note with auto-commit turned off (a
  [disk-only note](/guide/history/#auto-commit-and-disk-only-notes)) can't
  auto-publish.
- Changes you pull from a collaborator don't update the page. The page
  changes when you edit the note yourself, or when you update it.
- If the publishing service can't be reached, the update waits and is tried
  again the next time Mahfouz starts or commits.
- If you're signed out, or the page belongs to another account, auto-publish
  stops for that note and a notification says why.

Once a note is published, its bottom bar's globe is tinted, with a dot
while the page is behind the note. That menu, and the note's right-click
menu in the sidebar, hold the page's actions, among them **Copy public
link**, **Open published page** and **QR code**. The
[Share](/guide/toolbar/#the-bottom-bar) button beside it sends the page's
link along with the note's text.

## QR code {% include since.html v="0.12.0" %} {#qr-code}

**QR code**, in a published note's menu or on the notification after you
publish, shows a code for the page's link. Scan it with a phone to open the
page, or click **Download SVG** to save it. Nothing is stored.

## Publish child notes {% include since.html v="0.12.0" %} {#publish-child-notes}

A note's children can be published with it. Tick **Also publish child
notes** in the publish dialog, or, for a note that's already published,
choose **Publish child notes…** from its menu. The dialog says how many
notes that publishes now.

- Every note under the parent gets its own page and link: its children,
  their children, and so on. The parent's page links to a child only where
  its text does, like any [link between published notes](#links-between-published-notes).
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

## How a published page looks {% include since.html v="0.12.0" %} {#how-a-published-page-looks}

A published page looks like the note does in the editor's
[Preview mode](/guide/editor/):

- **Always light.** The page has a white background by default, whatever
  the reader's dark-mode setting is.
- **The same typography** as Preview: the same headings, lists, task
  checkboxes, tables, quotes and highlights.
- **Callouts** (`> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`,
  `> [!CAUTION]`) show with their icons and colours.
- **Code blocks** are syntax highlighted for JavaScript, TypeScript, JSX,
  Python, JSON, CSS, HTML, Rust, Go, Java, C, C++, PHP, YAML and XML. Other
  languages, and blocks over 64 KB, show as plain monospace text.
- **Math** (`$…$` and `$$…$$`, see [Markdown](/guide/markdown/#math)) is
  typeset. Pages published before Mahfouz rendered math show its source
  until you update them.
- **A table of contents**: a `[TOC]` line becomes a numbered **Contents**
  list of the note's headings, the title left out (see
  [Markdown](/guide/markdown/#table-of-contents)).
- **Diagrams** are drawn as images when they can be (see
  [Diagrams](#diagrams)).

The note's own style comes along too. These [attributes](/guide/attributes/)
apply to the page:

- **Background color**, **Text color** and **Highlight color**. A colour
  carries over when it's a six-digit hex value such as `#1e3a5f`, which is
  what the colour picker writes. A colour typed by hand in another form
  (say `red`) is ignored on the page.
- **Font**. With no Font attribute, the page uses the vault's editor font
  setting.
- **Heading numbers**. A note with
  [numbered headings](/guide/markdown/#heading-numbers) shows them on its
  page too. {% include since.html v="0.14.0" %}

If you set only a dark background, or only a light text colour, the rest
of the page's colours (the text or background you didn't set, highlights,
lines and callouts) switch to dark-theme ones so the page stays readable.

Pages published before Mahfouz sent a note's style have the new look, but
on a white background. The note's colours and font reach the page the next
time you publish or update it.

### Themes

A page has one of two themes:

- **Default** — the look described above.
- **Essay** — for long reading: larger serif text in a narrower column, a
  centred title, small-caps section headings and quieter quotes. {% include since.html v="0.12.0" %}

Choose it in the publish dialog or in **Page settings…**. The theme is
stored as the note's `page_theme` attribute (`page_theme: essay`), so you
can also set it in the Attributes panel; **Default** removes the attribute.
The note's own colours and font still apply on top of either theme.

### Diagrams

A Mermaid or draw.io block is published as an image when the vault has the
[Mermaid or Draw.io plugin](/guide/plugins/) enabled, with a current version
of the plugin. Otherwise it's published as its source text, and the publish
dialog lists it under **Diagrams shown as code**.

Once a diagram is published as an image, it stays one when someone updates
the page without the plugin, as long as the block hasn't changed.

### Links between published notes

A link to another note links to that note's page when the note is
published from the same GitHub repository and its page hasn't been taken
down. Any other link to a note appears as plain text. When you publish a
note later, links to it on pages that are already up turn into links within
an hour, without updating those pages.

A [link to a heading](/guide/links/#link-to-a-heading) goes to that heading
on the other note's page, and `[[#Heading]]` jumps to the heading on the
same page. When the heading's text holds a link or math, or another heading
has the same text, the link opens the page at the top instead. {% include since.html v="0.14.0" %}

### Link previews and language

When someone shares a page's link, apps that show link previews show its
title, a description and its first image. The description comes from the
note's first paragraph. To write your own, add a `description`
[attribute](/guide/attributes/) of up to 300 characters.

A `lang` attribute, such as `ar` or `en-US`, sets the page's language.
Paragraphs in right-to-left and left-to-right scripts each flow in their own
direction, whatever the page's language.

Changing either attribute marks the page out of date.

### The Markdown version

Every page is also available as Markdown at its address followed by `.md`,
for example `https://p.mahfouz.app/trip-notes-ab3de7fgh2.md`. Its images
point at the published copies.

### The page's footer

The bottom of every page shows **Published with Mahfouz**, when the page
was last updated, a **Markdown** link to the [Markdown version](#the-markdown-version),
an **Edit** link and **Report this page**.

**Edit** opens Mahfouz on the web with the page:

- **Edit original**: if you're signed in and can edit the repository the
  note came from, this opens the note. If that repository isn't open in
  Mahfouz yet, it's cloned into your browser first, after asking.
- **Copy into my vault**: makes the page a new note in a vault you choose,
  with its images copied into the vault's `files/` folder. The copy isn't
  published.
- **Sign in to edit** and **Open on GitHub** appear when they apply.

## Publishing with the agent

You can ask the [AI agent](/guide/track-changes/#suggestions-from-the-agent),
or an [external agent](/guide/external-agents/) whose
[access level](/guide/external-agents/#access-levels) in the vault is
**Publish** {% include since.html v="0.17.0" %}, to publish or unpublish a
note. The AI agent always waits for you, in every approval mode. An
external agent follows its approval mode: it waits unless the mode is
**Don't ask** {% include since.html v="0.17.0" %}.

- **Publish.** The agent's card lists the images to upload, the attachments
  that aren't published and the diagrams shown as code. Accepting the AI
  agent's card doesn't publish yet: it opens the usual publish dialog,
  where you choose the options and click **Publish**, or cancel. An
  external agent's publish puts the note online at once, as an
  **Unlisted** page without its child notes, and gives the agent the
  link {% include since.html v="0.17.0" %}. An agent can't turn on child-note publishing or change a page's
  visibility.
- **Unpublish.** Accepting it takes the page down at once, like
  **Unpublish** in the note's menu.

Neither has **Undo**. To bring a page back, publish the note again from its
menu: it gets the same address, unlisted.

## Unpublish

Choose **Unpublish** from the note's menu, and confirm. The link stops
working right away, and the note itself is unchanged. Publishing it again
later gives it the same address, unlisted.

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
The page's theme, description and language are ordinary attributes:
`page_theme`, `description` and `lang`.

A copy of the note (Duplicate, a template, an import, or **Copy into my
vault**) is a new note and isn't published. Moving a note to another vault
keeps its page.

The page itself, including its visibility, lives on Mahfouz's publishing
service, not in your vault. Deleting the vault or its repository doesn't
take the page down; unpublish it first.
