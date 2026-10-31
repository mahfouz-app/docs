---
layout: guide
title: "The editor"
since: "0.2.0"
description: "Editing and preview modes, what a click does in Preview, right-click menus, the outline, the table of contents and page preview."
permalink: /guide/editor/
---

In Mahfouz's editor you're always editing plain Markdown text, but
certain syntax renders visually as you type (checkboxes, bullets,
highlights, tags, wikilinks, media) rather than showing raw symbols.

There are three view modes for how much raw syntax stays
visible, switched with the bottom bar's view button (an eye in Preview, code
brackets in Source, a terminal prompt in Vim), or with <kbd>Mod</kbd><kbd>Shift</kbd><kbd>P</kbd>
(<kbd>Mod</kbd><kbd>Alt</kbd><kbd>P</kbd> on the web) {% include since.html v="0.20.0" %}
(remembered on this device, not per note). The button opens a menu of
Preview, Source and [Vim](#vim-mode); the shortcut switches between Preview
and Source, and from Vim goes to Preview. {% include since.html v="0.20.0" %}

- **Source** (default): most Markdown punctuation stays visible
  (`# `, `**`, `_`, `[text](url)`, etc.) so it's obvious what you're
  editing, while checkboxes, bullets, and horizontal rules still render as
  real widgets.
- **Preview**: heading marks, emphasis marks, link brackets, `==`
  highlight marks, and `~`/`^` sub/superscript marks are all hidden in
  favor of the styled result, except on whatever line your cursor is
  currently on, which always reveals its raw syntax so you can edit it.
  Tables render as fully interactive editable tables in Preview mode
  regardless of cursor position (see [Tables](/guide/markdown/#tables)).
  An image, video or audio embed likewise replaces its `![alt](path)` line
  in Preview mode, wherever the cursor is (see
  [Images & attachments](/guide/media/)).
  Copying from Preview copies formatted text: pasted into Mail, Google
  Docs, Slack or Word, headings, emphasis, lists, links and tables keep
  their formatting. Apps that only take plain text, and Mahfouz itself,
  get the Markdown, and so does **Paste and Match Style**. Wikilinks and
  attached images paste as their text. Copying in Source copies
  Markdown only.
  - The copy holds the Markdown of what you selected. Formatting the
    selection only partly covers is closed and reopened around the part
    you copied, so no marker is left over: selecting `old t` in
    `**bold** text` copies `**old** t`, and selecting the whole bold
    word copies `**bold**`. {% include since.html v="0.20.0" %}
  - Pending suggestions and comments copy as the text you see, with no
    markup and no author line. {% include since.html v="0.20.0" %}
  - Cut and dragging text to move it carry the same text, and the note
    keeps the markers of the formatting that stays.
    {% include since.html v="0.20.0" %}
  - Code blocks, tables, a note in Suggesting mode, and a whole line
    copied with nothing selected copy the raw Markdown, as before.

Other editor behavior:

- Pasting formatted text keeps its formatting as Markdown: from a web
  page, Word, Outlook, Google Docs, Notion, Slack or Mail, headings, bold,
  italic, strikethrough, inline code, links, bullet, numbered and task
  lists, quotes, tables, code blocks (with their language) and horizontal
  rules all come through. {% include since.html v="0.20.0" %}
  - Images aren't pasted, nor are buttons and other page controls; links
    keep their address only for web and email links.
  - Code pastes as its text: from a code editor such as VS Code, a
    selection that's all code, and anything pasted into a code block.
  - Copying from Mahfouz and pasting back pastes the Markdown, wikilinks
    and comments included.
  - <kbd>Mod</kbd><kbd>Shift</kbd><kbd>V</kbd> (**Paste as Plain Text**)
    pastes the text without formatting.
  - <kbd>Mod</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>V</kbd> (**Paste with
    Formatting**) always keeps the formatting, even where a plain paste
    would paste the text: code from a code editor, a selection that's all
    code, or inside a code block. Copying from Mahfouz still pastes the
    Markdown, and a copy with no formatting pastes its text.
    {% include since.html v="0.21.0" %}
  - The right-click menu's **Paste as** submenu offers both: **Keep
    formatting** and **Plain text** (see [Right-click menus](#right-click-menus)).
    Both are in the command palette too, and the desktop app's Edit menu has
    **Paste with Formatting** next to **Paste as Plain Text**. On the web,
    your browser may ask you to allow the paste first.
    {% include since.html v="0.21.0" %}
- An empty heading on the cursor's line, such as a `## ` you've just typed,
  shows its level as a gray hint (**Heading 2**) until you type its text,
  in Source and Preview. The hint is never saved, and it goes when the
  cursor leaves the line. A new note's first line shows **New Note**
  instead. {% include since.html v="0.13.0" %}
- **Tab** on a list item (bullet, numbered, or checklist) nests it under the
  item above, wherever your cursor is on the line, and its sub-items move
  with it. **Shift+Tab** moves it back out a level. On the first item of a
  list Tab does nothing, since there's nothing above to nest under.
- In Preview, <kbd>Backspace</kbd> and <kbd>Delete</kbd> remove what you
  can see; hidden markup goes only with the thing it formats.
  {% include since.html v="0.13.0" %}
  - Next to a wikilink, a link, or bold, italic, strikethrough, code,
    highlighted, underlined, subscript or superscript text, they step over
    the hidden markup and remove the visible character: Backspace after
    `[[Note]]` leaves `[[Not]]`.
  - Removing an element's last character, or deleting a selection of all
    its text, removes the element with its markup, so no stray `[[]]` or
    `****` is left behind.
  - At the start of a heading's, list item's, task's, quote's or
    callout's text, Backspace removes the line's markup and leaves a plain
    paragraph. A nested list item moves out a level instead, with its
    sub-items, the same as <kbd>Shift</kbd><kbd>Tab</kbd>.
    {% include since.html v="0.20.0" %}
  - <kbd>Delete</kbd> at the end of a line joins the next line's text
    without its markup.
  - Deleting a word (<kbd>Alt</kbd><kbd>Backspace</kbd> on a Mac,
    <kbd>Ctrl</kbd><kbd>Backspace</kbd> elsewhere) or to the start of the
    line (<kbd>Cmd</kbd><kbd>Backspace</kbd> on a Mac) follows the same
    rule. {% include since.html v="0.20.0" %}
  - Deleting a selection removes only the text you see. The markup of
    formatting that keeps some of its text stays, also when the selection
    spans several lines. With several cursors, each one works the same way.
    {% include since.html v="0.20.0" %}
  - A person mention, a task's date or assignee chip, and a formula go
    whole in one press: <kbd>Backspace</kbd> after a formula or
    <kbd>Delete</kbd> before one removes it.
    {% include since.html v="0.20.0" %}
  - On a line with text right after a horizontal rule, a table, an image
    card, an embed or a table of contents, Backspace at the start of the
    line deletes the whole block in one press; <kbd>Cmd</kbd><kbd>Z</kbd>
    (<kbd>Ctrl</kbd><kbd>Z</kbd> elsewhere) brings it back. On an empty
    line after one, it deletes only that line.
    {% include since.html v="0.20.0" %}
  - Emptying a suggestion removes it, its author line included.
    {% include since.html v="0.20.0" %}
  - Typing or pasting over part of a formatted element's text keeps the
    formatting around it. {% include since.html v="0.20.0" %}

  In Source, Backspace and Delete work as usual.
- In Preview, the cursor never sits in front of a list item's bullet or
  checkbox. Clicking left of the bullet, pressing <kbd>Home</kbd>, or
  moving up or down onto the marker puts it at the start of the item's
  text, and <kbd>←</kbd> from there goes to the end of the line above.
- On any other line, outside code blocks and tables, <kbd>Tab</kbd> moves
  focus out of the editor to the next control, and
  <kbd>Shift</kbd><kbd>Tab</kbd> to the one before it. {% include since.html v="0.20.0" %}
  See [Writing from the keyboard](/guide/keyboard-writing/) for moving
  between the editor and the panels around it.
- <kbd>Alt</kbd><kbd>↑</kbd> and <kbd>Alt</kbd><kbd>↓</kbd> on a heading
  move its whole section, and on a list item the item with its sub-items
  (see [Moving sections and list items](/guide/keyboard-writing/#moving-sections-and-list-items)).
  {% include since.html v="0.20.0" %}
- Misspelled words are underlined by your system's spell checker (see
  [Spelling check](/guide/spelling/)). In the macOS desktop app, what you
  type stays as typed, except for your Text Replacements and spelling
  corrections: the other macOS substitutions (smart quotes, smart dashes and
  link detection) are off (see
  [Text substitutions](/guide/spelling/#text-substitutions)).
  {% include since.html v="0.14.0" %}
- In Preview, a click on a link, a tag or a person follows it, and a
  click on an image or a diagram opens it larger (see
  [Clicking in Preview](#clicking-in-preview)). {% include since.html v="0.20.0" %}
  In Source, a click places the cursor and <kbd>Cmd/Ctrl</kbd>+click
  opens a link in the background. With the cursor on a link, <kbd>Mod</kbd><kbd>Enter</kbd>
  follows it in either mode, and <kbd>Mod</kbd><kbd>.</kbd> opens its card (see
  [Writing from the keyboard](/guide/keyboard-writing/#acting-on-whats-at-the-cursor)).
  {% include since.html v="0.20.0" %}
- **Find and replace**: <kbd>Cmd/Ctrl</kbd><kbd>F</kbd> (or toolbar) opens the
  [Find and Replace bar](#find-and-replace).
- **Find selection**: <kbd>Cmd/Ctrl</kbd><kbd>Alt</kbd><kbd>F</kbd> jumps to the next
  occurrence of the selected text, or of the word under the cursor when
  nothing is selected, without opening the panel. Press
  <kbd>Cmd/Ctrl</kbd><kbd>G</kbd> to keep going, <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>G</kbd> to go back. {% include since.html v="0.12.0" %}
- **Undo/redo**: standard <kbd>Cmd/Ctrl</kbd><kbd>Z</kbd> / <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>Z</kbd>, also available
  as toolbar buttons.

## Clicking in Preview {% include since.html v="0.20.0" %} {#clicking-in-preview}

In Preview, what a click does depends on what's under it:

- **A reference**, such as a link, a tag or a person, goes where it points.
- **A block**, such as an image or a diagram, opens larger.
- **Anything else is text**: a click places the cursor.

A reference's other actions are on its card, a right-click away. A block's
are on the toolbar that shows when you point at it, and in its menu.

The first time a click follows a link, a notice says: "Links open on
click. Right-click to edit."

### Clicking links, tags and people {#clicking-links-tags-and-people}

References are wikilinks (in table cells too), Markdown links, bare URLs,
paths to files on your computer, `#tags`, [mentions](/guide/people/#mentions)
and a task's assignee [chip](/guide/people/#person-chips).

| Do this | What happens |
|---|---|
| Click | Follows it. A note opens in its tab: the tab comes to the front if the note is already open, or opens new. A URL opens in your browser, a tag opens the [Search tab](/guide/links/#search), and a person opens their note. In the desktop app, a path shows the file in your file manager. |
| <kbd>Cmd/Ctrl</kbd>+click | Opens a note or a person's note in the background: its tab opens, and you stay on this note. A URL, a path or a tag opens as with a click. |
| <kbd>Shift</kbd>+click | Extends the selection. Nothing opens. |
| Right-click | Opens the reference's card. |
| Rest the mouse on it for half a second | Shows a small preview: the note's title and folder, the URL, or the person's name and role. A tag or a path has none. |

The person chips in a note's attributes open the same way: a click opens
the person, and <kbd>Cmd/Ctrl</kbd>+click opens them in the background.
Their right-click menu and hover card are the ones under
[Person chips](/guide/people/#person-chips).

From the keyboard, put the cursor on the reference: <kbd>Mod</kbd><kbd>Enter</kbd>
follows it, and <kbd>Mod</kbd><kbd>.</kbd>, <kbd>Shift</kbd><kbd>F10</kbd>
or the <kbd>Menu</kbd> key opens its card.

**The card** shows the preview at the top, then the reference's actions.
**Open** shows its keys. <kbd>↑</kbd> and <kbd>↓</kbd> move between the
actions, and <kbd>Esc</kbd> closes the card and puts you back in the note.

- **A link**: **Open**, **Open in background** (for a note), **Edit link…**,
  **Edit text**, **Copy link** and **Remove link**, which keeps the text.
  **Edit link…** opens the [link editor](/guide/links/#links-wikilinks--backlinks).
  A bare URL has no **Remove link**.
- **A tag**: **Search #tag**, **Rename tag…**, **Merge into…**,
  **Edit text** and **Copy tag**.
- **A person**: their card (email, phone, GitHub and website), then **Open
  person**, **Open in background**, **Change person…**, **Edit text** and
  the person's other actions, such as **Change handle @handle…** and
  **Find mentions** (see [Person chips](/guide/people/#person-chips)).
- **A path**: **Reveal in Finder** (**Reveal in File Explorer** on
  Windows, **Open Containing Folder** on Linux) and **Copy path**. On the
  web, only **Copy path**.
- A reference inside commented text adds **Open thread**: a click on the
  reference follows it, so the card is where you reach the
  [comment](/guide/track-changes/#comments).

To change a reference's text, choose **Edit text** on its card, move the
cursor into it with the arrow keys, or click just beside it.

In Source, a click places the cursor, and <kbd>Cmd/Ctrl</kbd>+click opens
the reference in the background.

### Clicking images and diagrams {#clicking-images-and-diagrams}

Blocks are images on their own line, diagrams and other
[blocks a plugin draws](/guide/markdown/#blocks-a-plugin-draws), math on its own lines, a `[TOC]` table of contents and
[database views](/guide/databases/).

- **A click on an image on its own line, or a diagram,** opens the viewer:
  the image or diagram at full size over the app. Drag to pan, and use
  **Zoom out**, **Zoom in** and **Fit** to zoom. Its bar has **Edit**,
  **Copy**, **Delete**, **⋯** (**Replace…** and **Download**, for an image
  file) and **Close**; at phone width, **⋯** and **Close**. <kbd>Esc</kbd>
  closes it. An image inside a link follows the link instead.
- **Edit** opens the plugin's own editor in a tab, for a plugin that has
  one (draw.io and Mermaid do); otherwise it shows the block's source in
  the note. A diagram
  that's empty or failed to draw opens its editor on a click.
- **A click on a math block or a table of contents** shows its source to
  edit. A click on a table of contents entry jumps to its heading.
- **A click on a database view's frame**, such as its header or footer,
  opens the database. Its rows and buttons work as usual.
- <kbd>Cmd/Ctrl</kbd>+click on a block does the same as a click.
- **Pointing at an image, a diagram, math or a table of contents** shows
  its toolbar. A block 360 pixels wide or wider shows **View**, **Edit**,
  **Copy** and **Delete**, plus **⋯** (**Replace…** and **Download**) for a
  file. A narrower image or diagram shows **View** and **⋯**. Only the
  actions that apply show. A database view has no toolbar.
- **A right-click** on an image, a diagram, math or a table of contents
  opens the block's menu, with all of its actions. A database view keeps
  its own menus.
- A video or audio player keeps its own controls.

From the keyboard, select the block, with <kbd>Shift</kbd> and the arrow
keys or by moving onto it: <kbd>Enter</kbd> opens it as a click would,
<kbd>Shift</kbd><kbd>F10</kbd> opens its menu, and <kbd>Delete</kbd> or
<kbd>Backspace</kbd> removes it (not a database view).

### Clicking in read-only notes {#clicking-in-read-only-notes}

A revision, a note in Trash and a [shared note](/guide/sharing/) you can
only read work the same way, without the actions that change the note:
no **Edit link…**, **Edit text**, **Remove link**, **Edit**, **Delete** or
**Replace…**. A click or <kbd>Mod</kbd><kbd>Enter</kbd> on a wikilink to a
note that doesn't exist does nothing, since following it would create the
note; the card's **Open** and <kbd>Cmd/Ctrl</kbd>+click still follow it. A
note shared with you isn't in any of your vaults, so its wikilinks don't
open and its tags don't search.

While you're [suggesting](/guide/track-changes/), **Edit link…**,
**Remove link** and **Delete** are written as your suggestions, or
refused where a suggestion can't go, such as a change to a link's URL.
**Replace…** isn't offered.

### Clicking on a phone {#clicking-on-a-phone}

- **While you read** a note, a tap follows a reference or opens a block in
  the viewer, as a click does.
- **While you edit**, a tap on a reference places the cursor in it, so you
  can change its text (a tap on a mention selects it), and a small button
  shows under it to follow it: **Open** and the name, **Search #tag**, or
  the reveal item for a path. A tap on an image or a diagram still opens
  the viewer.
- **Touch and hold** a reference to open its card, or a block for its
  menu, as a sheet from the bottom of the screen.

The first time a tap follows a link, the notice reads "Links open on tap.
Touch and hold for more."

## Vim mode {% include since.html v="0.20.0" %} {#vim-mode}

Pick **Vim** from the bottom bar's view menu to edit with vim keys. Vim
shows the raw Markdown as Source does, with relative line numbers, and the
bottom bar shows which vim mode you're in: **NORMAL**, **INSERT** or
**VISUAL**. The choice is remembered on this device, like Preview and
Source. The [command palette](/guide/command-palette/) also has
**Switch to Vim mode**, which has no default key; you can give it one
(see [Keyboard shortcuts](/guide/shortcuts/)).

Vim is for the note editor only. Revisions, Trash previews, shared notes,
Markdown files opened from outside a vault and the phone layout don't use
it.

- `:w` saves and commits at once, like
  [Manual save](/guide/history/). It commits the vault's waiting changes,
  not just this note's. A
  [disk-only note](/guide/history/#auto-commit-and-disk-only-notes) isn't
  committed.
- `:q` closes the tab. A pinned tab has to be unpinned first.
- `:wq` does both.
- <kbd>Esc</kbd> first closes an open menu (wikilinks, `@` mentions, the
  slash menu, emoji). A second <kbd>Esc</kbd> goes back to Normal mode.
- In Insert mode, <kbd>Ctrl</kbd><kbd>P</kbd> and
  <kbd>Ctrl</kbd><kbd>N</kbd> list words from the note (the nearest ones
  above the cursor first for <kbd>Ctrl</kbd><kbd>P</kbd>, below for
  <kbd>Ctrl</kbd><kbd>N</kbd>), and move through any list that's open.
  <kbd>Ctrl</kbd><kbd>Y</kbd> accepts the highlighted word and
  <kbd>Ctrl</kbd><kbd>E</kbd> closes the list. On the web on Windows and
  Linux the browser keeps <kbd>Ctrl</kbd><kbd>N</kbd> (new window), so use
  <kbd>Ctrl</kbd><kbd>P</kbd> there.
- In [Suggesting mode](/guide/track-changes/), edits made with vim keys
  are tracked as suggestions, like any other edit.

## Find and replace

<kbd>Cmd/Ctrl</kbd><kbd>F</kbd>, **Edit → Find and Replace** or the
toolbar's **Find and replace** opens the Find and Replace bar, with the
selection, or the word at the cursor, already in the **Find** field. The
bar sits across the top of the note, full width, and stays in place while
the note scrolls. {% include since.html v="0.13.0" %} It stays
open, with its query, when you switch between Source and Preview.

- **Match case** (`Aa`), **Match whole word** (`ab`) and **Use regular
  expression** (`.*`) are toggles inside the Find field. From the field,
  <kbd>Alt</kbd><kbd>C</kbd>, <kbd>Alt</kbd><kbd>W</kbd> and
  <kbd>Alt</kbd><kbd>R</kbd> switch them.
- **The count** beside the field reads "12 results", then "3 of 12" once
  you're on a match. It counts the note's text, so matches hidden inside
  markup in Preview count too. Past 1,000 matches it reads "1,000+". With
  no match, the field turns red, the count reads "No results" and the
  buttons are dimmed; an invalid regular expression says so in place of
  the count.
- <kbd>Enter</kbd> and <kbd>Shift</kbd><kbd>Enter</kbd> (or the up and down
  arrows beside the count) go to the next and previous match.
- **Select every match** with <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>L</kbd>
  or <kbd>Alt</kbd><kbd>Enter</kbd> in the Find field, to edit them all at
  once.
- **Replace** is folded away at first. Click the chevron at the bar's left,
  or press <kbd>Cmd/Ctrl</kbd><kbd>F</kbd> again in the Find field, to show
  the Replace field with the **Replace** and **Replace all** buttons.
  <kbd>Enter</kbd> in the Replace field replaces the current match, and
  <kbd>Cmd/Ctrl</kbd><kbd>Enter</kbd> replaces them all. {% include since.html v="0.13.0" %} The bar remembers
  whether Replace was open until you quit. A read-only note has no Replace.
- **Find in all notes**: the scope button beside the Find field takes the
  query, with its `Aa`, `ab` and `.*` settings, to the
  [Search tab](/guide/links/#search), which searches every note. When
  Replace is open, the Search tab opens with its Replace field open too,
  holding the same text, to [replace across notes](/guide/links/#replace-across-notes).
  <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>F</kbd> does the same from the
  note. {% include since.html v="0.13.0" %}
- **While Suggesting**, Replace and Replace all write each replacement as
  a [tracked substitution](/guide/track-changes/), and the bar says
  "Replacements are added as suggestions." Matches a suggestion can't
  change, such as text already suggested for deletion or someone else's
  suggestion, are skipped.
- **While Editing**, Replace and Replace all skip the matches in
  suggestion and comment markup: a suggestion's delimiters and its
  `{>>@name · date<<}` author, and a comment's entries. A replace never
  changes who a suggestion or comment is credited to. The text a
  suggestion adds or removes is replaced like any other. While the note
  holds suggestions or comments, the bar says "Matches in suggestion and
  comment markup are left as they are." {% include since.html v="0.13.0" %}
- <kbd>Esc</kbd> closes the bar and puts you back in the note.

**Find selection** (<kbd>Cmd/Ctrl</kbd><kbd>Alt</kbd><kbd>F</kbd>) never
opens the bar.

## Right-click menus

What a right-click in the editor opens depends on whether you click
inside a selection.

**Inside a selection**, on the desktop and on the web, Mahfouz opens its
own menu:

- **Cut**, **Copy**, **Paste**
- **Paste as**, with **Keep formatting** and **Plain text**
  {% include since.html v="0.21.0" %}
- **Comment** (see [Comments](/guide/track-changes/#comments))
- the toolbar's **Style**, **Text**, **Insert** and **Paragraph** groups,
  in the [toolbar](/guide/toolbar/)'s order and with its labels. Each
  toolbar dropdown (Heading, Subscript / Superscript, Embed, List,
  Callout) is a submenu.

A check mark shows the formatting the cursor is in. A row that can't be
used right now is dimmed and says why, such as "switch to Editing to
insert" while Suggesting. In a read-only note, such as a revision
preview, the menu has **Copy** only. On macOS, **Paste** from this menu
works like <kbd>Cmd</kbd><kbd>V</kbd>.

From the keyboard, <kbd>Mod</kbd><kbd>.</kbd>, <kbd>Shift</kbd><kbd>F10</kbd>
or the <kbd>Menu</kbd> key opens this menu for the selection, or a menu
for the link, task, suggestion, tag, table or image at the cursor (see
[The menu at the cursor](/guide/keyboard-writing/#the-menu-at-the-cursor)).
{% include since.html v="0.20.0" %}

**On a link, a tag, a person or a path**, a right-click opens its card,
and on an image, a diagram, math or a table of contents, the block's menu
(see [Clicking in Preview](#clicking-in-preview)). {% include since.html v="0.20.0" %}

**Anywhere else in the editor**, a right-click opens the system's menu:

- In the macOS desktop app, that menu (spelling suggestions, **Look Up**,
  **Writing Tools**) has a **Format** submenu with the same items, in
  place of the system's Font submenu. {% include since.html v="0.12.0" %}
  Right after **Paste** it also has a **Paste as** submenu, with **Keep
  formatting** and **Plain text**. {% include since.html v="0.21.0" %}
- On the web, and in the desktop app on Windows and Linux, it's your
  browser's or system's usual menu.
- In an unlocked encrypted note, no menu opens.

**Outside the editor**, a right-click opens no system menu, except in
text fields. The app's own menus (on sidebar rows, tabs and breadcrumbs)
open as before. On the web this means the browser's menu, with items
such as "Open link in new tab", isn't there outside text fields.

## Outline, table of contents & page preview

Three ways to find your place in a long note, all driven by the editor's
current scroll position ("whichever section is at the top of the viewport
is active"):

- **Outline** (floating over the editor's right edge) shows one short dash
  per heading (levels 1–6), deeper levels shorter, with the current
  section's dash darker. Hover over it, or move keyboard focus to it, to
  open the list of headings; click one to jump the editor there. It's
  hidden when the note has fewer than two headings, in the phone layout
  (a window narrower than 700px) and for [encrypted notes](/guide/encryption/).
  On a phone, **Outline** in the note's toolbar lists the headings instead
  ([Reading and editing a note](/guide/web/#editing-on-a-phone)). {% include since.html v="0.17.0" %}
  Turn it off in [Settings → General → **Note outline**](/guide/settings/).
  In a note with [numbered headings](/guide/markdown/#heading-numbers), the
  list shows each heading's number. {% include since.html v="0.14.0" %}
  Right-click a heading in the list and choose **Copy link to heading**
  to copy a [link to it](/guide/links/#link-to-a-heading). {% include since.html v="0.14.0" %}
  From the keyboard, <kbd>F6</kbd> reaches the outline; <kbd>↑</kbd> and
  <kbd>↓</kbd> move between headings, <kbd>Enter</kbd> jumps to one, and
  <kbd>Esc</kbd> goes back to the note. {% include since.html v="0.20.0" %}
- **Table of contents** (right sidebar) lists every heading (levels 1–6,
  ignoring anything inside a code fence) in the note, indented by level;
  click one to jump to it.
- **Page preview** (collapsible column to the left of the editor) shows
  thumbnail cards for each "page": the note split wherever a bare `---`
  line appears (the same rule [presenting](/guide/slides/)
  uses for slide breaks). Click a thumbnail to jump there. Drag cards to
  reorder pages, or right-click one for **Move up / Move down / Delete
  page**. It's off by default: turn it on in [Settings → General →
  **Page previews**](/guide/settings/). Switched off, the column isn't
  shown at all, its collapse bar included.
