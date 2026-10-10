---
layout: guide
title: "Keyboard shortcuts"
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
| <kbd>Mod</kbd><kbd>&#92;</kbd> | Toggle left sidebar |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>&#92;</kbd> | Toggle right sidebar |
| <kbd>Mod</kbd><kbd>1</kbd> | Go to all notes |
| <kbd>Mod</kbd><kbd>2</kbd> | Go to bookmarks |
| <kbd>Mod</kbd><kbd>3</kbd> | Go to tags |
| <kbd>Mod</kbd><kbd>4</kbd> | Go to trash |
| <kbd>Mod</kbd><kbd>5</kbd> | Go to search |
| <kbd>Mod</kbd><kbd>6</kbd> | Go to tasks |
| — | Toggle auto-commit for note (no default key) |
| — | Open the vault mind map (no default key; action "Open mind map") |
| — | Create a database (no default key; action "New database") |
| — | Add a comment on the selection, or reply to the comment under the cursor (no default key; action "Add comment") |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>R</kbd> | Reveal the active note in Finder / File Explorer (row `reveal_in_file_manager`) |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>P</kbd> | Present active note as slides (a plugin command: its row is `mahfouz/slidev:present-fullscreen`) |

Fixed editor shortcuts (not remappable):

| Shortcut | Action |
|---|---|
| <kbd>Mod</kbd><kbd>B</kbd> | Bold |
| <kbd>Mod</kbd><kbd>I</kbd> | Italic |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>X</kbd> | Strikethrough |
| <kbd>Mod</kbd><kbd>E</kbd> | Inline code |
| <kbd>Mod</kbd><kbd>,</kbd> (comma) | Subscript |
| <kbd>Mod</kbd><kbd>.</kbd> (period) | Superscript |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>H</kbd> | Highlight |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>K</kbd> | Link the selection (asks for the URL) |
| <kbd>Mod</kbd><kbd>Alt</kbd><kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> | Heading 1 / 2 / 3 |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>8</kbd> | Bullet list |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>7</kbd> | Ordered list |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>9</kbd> | Checklist |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>.</kbd> | Blockquote |
| <kbd>Mod</kbd><kbd>Shift</kbd><kbd>M</kbd> | Insert media or file |

Other useful bindings: <kbd>Tab</kbd>/<kbd>Enter</kbd> inside a checklist or list continue
it; <kbd>Cmd/Ctrl</kbd>+click opens a link or wikilink; `[[` triggers wikilink
autocomplete; `!` triggers field autocomplete.

## The menu bar (desktop)

Every app action above is also in the desktop menu bar, next to its
shortcut:

- **File**: new notes (sibling, child, parent level), **New Folder**, **New
  Database**, New
  Vault, Open Vault, Save, Export, Close Tab.
- **Edit**: the usual editing commands, Find and Replace, Search Vault.
- **Note**: acts on the note in the active tab. It has Bookmark, Auto-commit,
  Rename, Duplicate, Move, the three Copy commands, Reveal in Finder (or
  File Explorer), Revision History, plugin commands such as Present, and
  Delete. These items are greyed out when no note tab is open.
- **View**: the sidebars, Line Numbers, Zoom In and Out, Stop Presenting.
- **Go**: All Notes, Bookmarks, Tags, Trash, Mind Map, Back, Forward.
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
| Go to search | <kbd>Mod</kbd><kbd>5</kbd> | <kbd>Mod</kbd><kbd>Shift</kbd><kbd>F</kbd> |
| Close the active tab | <kbd>Mod</kbd><kbd>W</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>W</kbd> |
| Go to all notes | <kbd>Mod</kbd><kbd>1</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>A</kbd> |
| Go to bookmarks | <kbd>Mod</kbd><kbd>2</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>K</kbd> |
| Go to tags | <kbd>Mod</kbd><kbd>3</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>T</kbd> |
| Go to trash | <kbd>Mod</kbd><kbd>4</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>X</kbd> |
| Go to tasks | <kbd>Mod</kbd><kbd>6</kbd> | <kbd>Mod</kbd><kbd>Alt</kbd><kbd>Shift</kbd><kbd>T</kbd> |
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
Shift or another modifier, it can't be pressed: open Settings from the gear
in the left rail instead.

On a Mac, shortcuts with ⌥ go by the key you press, not the character ⌥
types with it, so <kbd>⌘</kbd><kbd>⌥</kbd><kbd>S</kbd> works although ⌥S types "ß".

Shortcuts you change in **Settings → Shortcuts** are saved in the vault
(`.config/settings.md`) and apply on both. A default you haven't changed
stays each platform's own default.
