---
layout: guide
title: "Keyboard shortcuts"
since: "0.2.0"
description: "Every keyboard shortcut, on desktop and on the web, and how to change them."
permalink: /guide/shortcuts/
---

On the web, some of these keys differ: see [Keyboard shortcuts on the
web](#keyboard-shortcuts-on-the-web).

Remappable app shortcuts (`.config/settings.md`, `## Shortcuts` table).
<kbd>Mod</kbd> = ⌘ on macOS, Ctrl elsewhere:

| Shortcut | Action |
|---|---|
| <kbd>Mod</kbd><kbd>N</kbd> | New note (sibling of selection) |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>N</kbd> | New note (child of selection) |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>N</kbd> | New note (parent level) |
| <kbd>Mod</kbd><kbd>?</kbd> | Open keyboard shortcuts help |
| <kbd>Mod</kbd><kbd>W</kbd> | Close active tab |
| <kbd>Mod</kbd><kbd>S</kbd> | Manual save + commit |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>G</kbd> | [Commit notes…](/guide/history/#commit-notes): pick which uncommitted notes to commit |
| <kbd>Mod</kbd><kbd>&#92;</kbd> | Toggle left sidebar |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>&#92;</kbd> | Toggle right sidebar |
| <kbd>Mod</kbd><kbd>1</kbd> | Go to all notes |
| <kbd>Mod</kbd><kbd>2</kbd> | Go to tasks (was <kbd>Mod</kbd><kbd>6</kbd>) {% include since.html v="0.14.0" %} |
| <kbd>Mod</kbd><kbd>3</kbd> | Go to people {% include since.html v="0.14.0" %} |
| <kbd>Mod</kbd><kbd>9</kbd> | Show notifications {% include since.html v="0.14.0" %} |
| <kbd>Mod</kbd><kbd>0</kbd> | Open the account menu {% include since.html v="0.14.0" %} |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>K</kbd> | Go to bookmarks (was <kbd>Mod</kbd><kbd>2</kbd>) {% include since.html v="0.14.0" %} |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>X</kbd> | Go to trash (was <kbd>Mod</kbd><kbd>4</kbd>) {% include since.html v="0.14.0" %} |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>F</kbd> | Open the [Search tab](/guide/links/#search) to search note contents, starting from the Find bar's query or the selection {% include since.html v="0.13.0" %} |
| <kbd>Mod</kbd><kbd>K</kbd> | Open the [command palette](/guide/command-palette/) |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>F</kbd> | Find the next occurrence of the selection, or of the word under the cursor (row `find_selection`) |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>;</kbd> | Add the word under the cursor to the [vault dictionary](/guide/spelling/#the-vault-dictionary) |
| None | Remove the word under the cursor from the vault dictionary (no default key) |
| None | Toggle auto-commit for note (no default key) |
| None | Open the vault mind map (no default key; action "Open mind map") |
| None | Create a database (no default key; action "New database") |
| None | Add a comment on the selection, or reply to the comment under the cursor (no default key; action "Add comment") |
| None | Set the active note's page icon (no default key; action "Set note icon") |
| None | Find the notes that mention the person at the cursor: opens the [Search tab](/guide/links/#search) on `person:handle` for the @mention the cursor is on (no default key; action "Find mentions of person", row `find_mentions`) {% include since.html v="0.13.0" %} |
| None | Copy a [link to the heading](/guide/links/#link-to-a-heading) the cursor is on (no default key; action "Copy link to heading", row `copy_heading_link`) {% include since.html v="0.14.0" %} |
| None | Copy the active note's [permalink](/guide/permalinks/) (no default key; action "Copy permalink", row `copy_permalink`) {% include since.html v="0.16.0" %} |
| None | [Share the active note](/guide/toolbar/#the-bottom-bar) through the system share sheet (no default key; row `share_note`; in the macOS app and in browsers that can share) |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>R</kbd> | Reveal the active note in Finder / File Explorer (row `reveal_in_file_manager`) |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>P</kbd> | Present active note as slides (a plugin command: its row is `mahfouz/slidev:present-fullscreen`) |

The rail's keys follow its order: the items at the top count up from
<kbd>Mod</kbd><kbd>1</kbd> (all notes, tasks, people), and the ones at the
bottom count back from <kbd>Mod</kbd><kbd>0</kbd> (the account menu, then
notifications). Each rail button's tooltip shows its key. {% include since.html v="0.14.0" %}
Each key belongs to its action, not to a place on the rail: it keeps
working when you [move or hide](/guide/notes/#rail-pins) the rail item. {% include since.html v="0.15.0" %}

A vault whose `## Shortcuts` table still holds the old default keys
(<kbd>Mod</kbd><kbd>6</kbd> for tasks, <kbd>Mod</kbd><kbd>2</kbd> for
bookmarks, <kbd>Mod</kbd><kbd>4</kbd> for trash) gets the new ones. If your
vault already gives <kbd>Mod</kbd><kbd>3</kbd>, <kbd>Mod</kbd><kbd>9</kbd> or
<kbd>Mod</kbd><kbd>0</kbd> to another action, that action keeps it, and Go to
people, Show notifications or Open the account menu has no key until you give
it one in **Settings → Shortcuts**. {% include since.html v="0.14.0" %}

Fixed editor shortcuts (not remappable):

| Shortcut | Action |
|---|---|
| <kbd>Mod</kbd><kbd>B</kbd> | Bold |
| <kbd>Mod</kbd><kbd>I</kbd> | Italic |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>X</kbd> | Strikethrough |
| <kbd>Mod</kbd><kbd>E</kbd> | Inline code |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>,</kbd> (comma) | Subscript |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>.</kbd> (period) | Superscript |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>H</kbd> | Highlight |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>K</kbd> | Link the selection (asks for the URL) |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>1</kbd> to <kbd>6</kbd> | Heading 1 to 6 (4 to 6 {% include since.html v="0.13.0" %}) |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>8</kbd> | Bullet list |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>7</kbd> | Ordered list |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>9</kbd> | Checklist |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>.</kbd> | Blockquote |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>M</kbd> | Insert media or file |

Other useful bindings: <kbd>Tab</kbd>/<kbd>Enter</kbd> inside a checklist or list continue
it; <kbd>Cmd/Ctrl</kbd>+click opens a link or wikilink; `[[` triggers wikilink
autocomplete; `{` opens the field menu and a space then `!` the date menu. {% include since.html v="0.13.0" %} The Find and Replace bar has
its own keys, listed under [Find and replace](/guide/editor/#find-and-replace);
the Search tab shares them. Code blocks have their own fold keys, listed under
[Folding code](/guide/markdown/#folding-code). {% include since.html v="0.13.0" %}

## The sidebar from the keyboard {% include since.html v="0.13.0" %} {#the-sidebar-from-the-keyboard}

The sidebar's notes, folders, Bookmarks and Notes headers, and Trash
entries are one stop when you press <kbd>Tab</kbd>: focus lands on the row of the
open note, or on the row you last moved to. Then:

| Key | Action |
|---|---|
| <kbd>↓</kbd> / <kbd>↑</kbd> | Move to the next or previous row |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move to the first or last row |
| <kbd>→</kbd> | Expand a row, or move to its first child when it's already expanded |
| <kbd>←</kbd> | Collapse a row, or move to its parent when it's already collapsed |
| <kbd>Enter</kbd> | Open a note (<kbd>Mod</kbd><kbd>Enter</kbd> opens it in a new tab), expand or collapse a folder or header, or preview a Trash entry |
| <kbd>F2</kbd> | Rename the focused note or folder (the Rename note shortcut, so a new key you give it works here too) |
| <kbd>Shift</kbd><kbd>F10</kbd> | Open the row's menu, as **⋯** would |

In the [Search tab](/guide/links/#search), <kbd>↓</kbd> and <kbd>↑</kbd> in the search field move through each note's title and its matching lines,
<kbd>Enter</kbd> opens the note at that line (at its top on its title) and <kbd>Mod</kbd><kbd>Enter</kbd> opens it in a new tab. {% include since.html v="0.13.0" %}

## The menu bar (desktop)

Every app action above is also in the desktop menu bar, next to its
shortcut:

- **File**: new notes (sibling, child, parent level), **New Folder**,
  **New Database**, New Vault, Open Vault, Save, Import
  {% include since.html v="0.16.0" %}, Export, Share (macOS only), Close
  Tab.
- **Edit**: the usual editing commands, Find and Replace, Find Selection,
  Find in All Notes {% include since.html v="0.13.0" %}, Command Palette.
- **Note**: acts on the note in the active tab. It has Bookmark, Auto-commit,
  Rename, Duplicate, Move, the Copy commands (Copy Permalink
  {% include since.html v="0.16.0" %}), Reveal in Finder (or
  File Explorer), Revision History, plugin commands such as Present, and
  Delete. These items are greyed out when no note tab is open.
- **View**: the sidebars, Line Numbers, Zoom In and Out, Stop Presenting.
- **Go**: All Notes, Bookmarks, Trash, Mind Map, Back, Forward.
- **Help**: Keyboard Shortcuts, User Guide, Send Feedback.

The keys shown in the menu follow your `## Shortcuts` table: change a
shortcut there and the menu shows the new key. A few keys never appear in
the menu, though they still work:

- Shortcuts without ⌘ or Ctrl, such as <kbd>F2</kbd> for Rename.
- <kbd>Mod</kbd><kbd>D</kbd>, <kbd>Mod</kbd><kbd>&#91;</kbd> and <kbd>Mod</kbd><kbd>&#93;</kbd>, which the editor also uses to select the
  next match and to indent or outdent. Leaving them off the menu keeps them
  working in the editor.

These menu keys are fixed and aren't in the `## Shortcuts` table:
<kbd>Mod</kbd><kbd>,</kbd> Settings, <kbd>Mod</kbd><kbd>Shift</kbd><kbd>N</kbd> New Vault, <kbd>Mod</kbd><kbd>Shift</kbd><kbd>O</kbd> Open Vault, <kbd>Mod</kbd><kbd>F</kbd>
Find and Replace, <kbd>Mod</kbd><kbd>.</kbd> Stop Presenting. Line Numbers has no key, so
<kbd>Mod</kbd><kbd>Shift</kbd><kbd>L</kbd> copies the note as a wikilink.

## Keyboard shortcuts on the web

The browser keeps some keys for itself (close tab, new window, switch tabs,
zoom, bookmarks, developer tools, reload), so those shortcuts move on the web.
Every other shortcut is the same as on desktop. <kbd>Mod</kbd> is ⌘ on a Mac and Ctrl
elsewhere; <kbd>Alt</kbd> is ⌥ on a Mac.

| Action | Desktop | Web |
|---|---|---|
| New note at the same level | <kbd>Mod</kbd><kbd>N</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>Enter</kbd> |
| Close the active tab | <kbd>Mod</kbd><kbd>W</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>W</kbd> |
| Go to all notes | <kbd>Mod</kbd><kbd>1</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>1</kbd> (was <kbd>Mod</kbd><kbd>Alt</kbd><kbd>A</kbd>) {% include since.html v="0.14.0" %} |
| Go to tasks | <kbd>Mod</kbd><kbd>2</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>2</kbd> (was <kbd>Mod</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>T</kbd>) {% include since.html v="0.14.0" %} |
| Go to people | <kbd>Mod</kbd><kbd>3</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>3</kbd> {% include since.html v="0.14.0" %} |
| Show notifications | <kbd>Mod</kbd><kbd>9</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>9</kbd> {% include since.html v="0.14.0" %} |
| Open the account menu | <kbd>Mod</kbd><kbd>0</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>0</kbd> {% include since.html v="0.14.0" %} |
| Go to bookmarks | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>K</kbd> {% include since.html v="0.14.0" %} | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>K</kbd> |
| Go to trash | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>X</kbd> {% include since.html v="0.14.0" %} | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>X</kbd> |
| Bookmark the active note | <kbd>Mod</kbd><kbd>D</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>S</kbd> |
| Duplicate the active note | <kbd>Mod</kbd><kbd>Shift</kbd><kbd>D</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>D</kbd> |
| Copy the note's name | <kbd>Mod</kbd><kbd>Shift</kbd><kbd>C</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>C</kbd> |
| Copy the note as a wikilink | <kbd>Mod</kbd><kbd>Shift</kbd><kbd>L</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>L</kbd> |
| Copy the note's ID | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>I</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>I</kbd> |
| Delete the active note | <kbd>Mod</kbd><kbd>Shift</kbd><kbd>Backspace</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>Backspace</kbd> |
| Increase editor zoom | <kbd>Mod</kbd><kbd>=</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>=</kbd> |
| Decrease editor zoom | <kbd>Mod</kbd><kbd>-</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>-</kbd> |
| Previous tab | <kbd>Mod</kbd><kbd>&#91;</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>&#91;</kbd> |
| Next tab | <kbd>Mod</kbd><kbd>&#93;</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>&#93;</kbd> |
| Settings | <kbd>Mod</kbd><kbd>,</kbd> | <kbd>Mod</kbd><kbd>;</kbd> |
| Open Vault | <kbd>Mod</kbd><kbd>Shift</kbd><kbd>O</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>O</kbd> |
| Export the active note | <kbd>Mod</kbd><kbd>Shift</kbd><kbd>E</kbd> | (desktop only) |
| Reveal in Finder | <kbd>Mod</kbd><kbd>Shift</kbd><kbd>R</kbd> | (desktop only) |

<kbd>Mod</kbd><kbd>;</kbd> assumes a US-style keyboard layout. On a layout where ";" needs
Shift or another modifier, it can't be pressed: choose **Settings** in the
account menu (the account button at the bottom of the left rail) instead.

On a Mac, shortcuts with ⌥ go by the key you press, not the character ⌥
types with it, so <kbd>⌥</kbd><kbd>⌘</kbd><kbd>S</kbd> works although ⌥S types "ß".
Mahfouz shows a shortcut's symbols in Apple's order: ⌃, ⌥, ⇧, then ⌘ (⌥⌘S,
not ⌘⌥S). {% include since.html v="0.14.0" %}

On Windows and Linux, some keyboard layouts (German, Polish and others) treat
Ctrl+Alt as AltGr, so in the browser a Ctrl+Alt+digit key may type a
character instead of running its action. If one does, give the action
another key in **Settings → Shortcuts**. {% include since.html v="0.14.0" %}

In **Settings → Shortcuts**, each binding shows one keycap per key, such
as <kbd>⌘</kbd><kbd>⇧</kbd><kbd>K</kbd>. Click it and press the new keys to
record another one; each row has its own reset button to bring back the
default. {% include since.html v="0.19.0" %}

Shortcuts you change in **Settings → Shortcuts** are saved in the vault
(`.config/settings.md`) and apply on both. A default you haven't changed
stays each platform's own default.
