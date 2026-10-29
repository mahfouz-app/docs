---
layout: guide
title: "Writing from the keyboard"
since: "0.20.0"
description: "Move between the editor and the panels around it, act on what's at the cursor, open its menu, and move sections, all without the mouse."
permalink: /guide/keyboard-writing/
---

Everything you can do with the mouse while writing a note has a key too.
<kbd>Mod</kbd> is ⌘ on macOS and Ctrl on Windows and Linux; <kbd>Alt</kbd>
is ⌥ on macOS. Keys with a name in **Settings → Shortcuts** can be changed
there (see [Keyboard shortcuts](/guide/shortcuts/)).

## Moving between regions

The note's window has five regions: the editor, the
[formatting toolbar](/guide/toolbar/), the [outline](/guide/editor/#outline-table-of-contents--page-preview),
the right sidebar and the [bottom bar](/guide/toolbar/#the-bottom-bar).

- <kbd>F6</kbd> moves focus to the next region and
  <kbd>Shift</kbd><kbd>F6</kbd> to the previous one, in that order.
  Regions that aren't showing, such as a closed right sidebar, are
  skipped.
- In the desktop app, <kbd>F6</kbd> past the bottom bar goes back to the
  editor. On the web, it goes on to the browser's own address bar and
  panes, as <kbd>F6</kbd> does on any page.
- <kbd>Esc</kbd> in the toolbar, the outline, the right sidebar or the
  bottom bar puts you back in the note, where the cursor was. Menus,
  popovers, dialogs and text fields still close with <kbd>Esc</kbd> first.

The actions are **Move focus to the next region** and **Move focus to the
previous region** (rows `focus_next_region` and `focus_previous_region`).
**Focus the active note's editor** and **Focus the active note's
comments** are in the [command palette](/guide/command-palette/), with no
key until you give them one.

### Tab and Shift+Tab

<kbd>Tab</kbd> and <kbd>Shift</kbd><kbd>Tab</kbd> indent and outdent only
on a list or task line (including its continuation lines, and lists in
quotes and callouts) and in a code block. In a table, they still move
between cells. On any other line, <kbd>Tab</kbd> moves focus out of the
editor to the next control, and <kbd>Shift</kbd><kbd>Tab</kbd> to the one
before it.

### The toolbars and the outline

The formatting toolbar and the bottom bar are each one stop for
<kbd>Tab</kbd>. Inside one:

| Key | Does |
|---|---|
| <kbd>←</kbd> / <kbd>→</kbd> | Move to the previous or next button |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first or last button |
| <kbd>Enter</kbd> or <kbd>Space</kbd> | Press the button, or open its menu |

Coming back to a toolbar puts you on the button you used last. Moving onto
**Zoom** in the bottom bar doesn't open its slider; <kbd>Enter</kbd>,
<kbd>Space</kbd> or <kbd>↓</kbd> does.

In the outline, <kbd>↑</kbd> and <kbd>↓</kbd> move between headings, and
<kbd>Enter</kbd> jumps to the heading with the cursor on it.
<kbd>Shift</kbd><kbd>F10</kbd> or <kbd>Mod</kbd><kbd>.</kbd> on a heading
opens its menu.

## Acting on what's at the cursor

<kbd>Mod</kbd><kbd>Enter</kbd> does what a click would do on the item the
cursor is in, or right next to:

- a [mention](/guide/people/#mentions): opens the person's note;
- a `[[wikilink]]`: opens the note;
- a URL, a Markdown link or an autolink: opens it;
- a path to a file on your computer: shows it in Finder or File Explorer;
- a `#tag`: searches for it in the [Search tab](/guide/links/#search);
- a [database](/guide/databases/) block, in Preview: opens the database;
- a [task](/guide/tasks/) line: ticks it. To do or in progress becomes
  done, and done becomes to do. Like a click on the checkbox, this applies
  directly, even while you're [suggesting](/guide/track-changes/).

Anywhere else, <kbd>Mod</kbd><kbd>Enter</kbd> adds a blank line, as
before. In a read-only note it still opens links, but doesn't tick tasks.
A wikilink inside code doesn't open or create a note, with the key or with
<kbd>Mod</kbd>+click.

## The menu at the cursor

<kbd>Mod</kbd><kbd>.</kbd> opens a menu for what's at the cursor. It's the
same menu <kbd>Shift</kbd><kbd>F10</kbd> and the <kbd>Menu</kbd> key open,
so it works on a selection, a tag, a mention, a code block, a table cell
and an outline heading too.

What's at the cursor comes first in the menu:

- **A link**: **Open** (<kbd>Mod</kbd><kbd>Enter</kbd>), **Edit link…**,
  **Copy link** and **Remove link**, which keeps the link's text. Removing
  `[[#Intro]]` leaves `Intro`, not a `#Intro` tag. While you're suggesting,
  **Remove link** asks you to switch to Editing.
- **A task line**: **To do**, **In progress** and **Done**, then **Change
  due date…**, **Change assignee…** and **Remove due date**.
- **A suggestion**: who made it and when, **Accept**, **Reject**, **Next
  suggestion** and **Previous suggestion**. After you accept or reject one,
  the next suggestion is selected.
- **A tag**: **Search tag #name**, then the tag's usual items.
- **A table**: **Wrap text** (checked when it's on), then **Convert to
  database…** where the table offers it.
- **An image or media file**: see [Images](#images-and-media).

When the cursor is on more than one of these, a suggestion comes before a
link, and a link before a task. In a read-only note, and in a
[shared note](/guide/sharing/) you can only comment on, the items that
change the note aren't shown.

## Suggestions

<kbd>F8</kbd> and <kbd>Shift</kbd><kbd>F8</kbd> go to the next and
previous [suggestion](/guide/track-changes/). A screen reader hears which
one it is, such as "Suggestion 2 of 5 · @ana", and that
<kbd>Mod</kbd><kbd>.</kbd> opens its menu to accept or reject it.

## Block widgets

In Preview, some blocks show as widgets with their own buttons and links:
a [database view](/guide/databases/) embed, a database's **Open database**
card, a `[TOC]` table of contents, the **Next steps** card in a new vault,
a plugin's placeholder, a rendered diagram, an image or media card, and a
day's [tasks block](/guide/daily-notes/#the-tasks-block).

- <kbd>↓</kbd> from the line above a widget moves into it, to its first
  control. <kbd>↑</kbd> from the line below moves to its last control.
- Inside, <kbd>↑</kbd> and <kbd>↓</kbd> move between its controls. Past
  the first or last one, you're in the next widget or back in the text.
- <kbd>Enter</kbd> opens or presses the control. In a table of contents it
  jumps to the heading.
- <kbd>Esc</kbd> skips past the widget, in the direction you were moving,
  back in the text.

A hint, "↑ ↓ move · ↵ open · Esc back to text", shows when you move into a
widget.

A rendered diagram is first one stop: <kbd>Enter</kbd> shows its source,
and while it's focused, <kbd>+</kbd> and <kbd>-</kbd> zoom in and out and
<kbd>0</kbd> resets the zoom. Its **Edit** button comes next.

### Images and media

An image or media card is one stop, followed by **Replace** and
**Delete**. <kbd>Enter</kbd> or <kbd>Space</kbd> on the card, or
<kbd>Mod</kbd><kbd>.</kbd> on the image's line, opens its menu:

- **Replace file…**
- **Width**: **25%**, **50%**, **75%** or **Full width**. This is the same
  width as dragging the card's handle, kept on this device.
- **Copy path**
- **Delete**

In a read-only note, and in a shared note you can only comment on,
**Replace** and **Delete** aren't offered.

## A person's card

While the cursor is in a [mention](/guide/people/#mentions) of someone in
your People, their card shows under it, as it does on hover. The card
doesn't take focus, so you keep typing.

## Moving sections and list items

<kbd>Alt</kbd><kbd>↑</kbd> and <kbd>Alt</kbd><kbd>↓</kbd> move:

- **A heading's whole section**, with its subsections, past the section
  before or after it at the same level. The heading never moves without
  its text.
- **A list or task item** with its sub-items, past the item before or
  after it.
- **Any other line**, or a selection, as before.

At the first or last section or item, and on the note's title, nothing
moves. Each press is one undo. A numbered list keeps its numbers in order.

Sections and list items don't move while you're
[suggesting](/guide/track-changes/) ("Switch to Editing to move a
section"), or when a suggestion or comment crosses the edge of the part
you're moving. Dragging a section by its grip is refused in the same case.

## Note actions in the palette

These [command palette](/guide/command-palette/) actions run the same code
as their buttons, and you can give each one a key in **Settings →
Shortcuts**:

| Action | Default key |
|---|---|
| Switch the active note between Source and Preview | <kbd>Mod</kbd><kbd>Shift</kbd><kbd>P</kbd> (web: <kbd>Mod</kbd><kbd>Alt</kbd><kbd>P</kbd>) |
| Go to the next suggestion | <kbd>F8</kbd> |
| Go to the previous suggestion | <kbd>Shift</kbd><kbd>F8</kbd> |
| Switch the active note between Editing and Suggesting | None |
| Accept all suggestions in the active note | None |
| Reject all suggestions in the active note | None |
| Publish the active note to the web | None |
| Focus the active note's comments | None |
| Focus the active note's editor | None |

The note's **Status** card, from the bottom bar's save icon, shows its
counts as "1,284 words · 6,912 characters · 7 min read".
