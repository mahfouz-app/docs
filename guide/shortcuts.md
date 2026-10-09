---
layout: guide
title: "Keyboard shortcuts"
description: "Every keyboard shortcut, on desktop and on the web, and how to change them."
permalink: /guide/shortcuts/
---

On the web, some of these keys differ: see [Keyboard shortcuts on the
web](#keyboard-shortcuts-on-the-web).

Remappable app shortcuts (`.config/settings.md`, `## Shortcuts` table).
`Mod` = ⌘ on macOS, Ctrl elsewhere:

| Shortcut | Action |
|---|---|
| `Mod+N` | New note (sibling of selection) |
| `Mod+Alt+Shift+N` | New note (child of selection) |
| `Mod+Alt+N` | New note (parent level) |
| `Mod+?` | Open keyboard shortcuts help |
| `Mod+W` | Close active tab |
| `Mod+S` | Manual save + commit |
| `Mod+\` | Toggle left sidebar |
| `Mod+Shift+\` | Toggle right sidebar |
| `Mod+1` | Go to all notes |
| `Mod+2` | Go to bookmarks |
| `Mod+3` | Go to tags |
| `Mod+4` | Go to trash |
| `Mod+5` | Go to search |
| `Mod+6` | Go to tasks |
| — | Toggle auto-commit for note (no default key) |
| — | Open the vault mind map (no default key; action "Open mind map") |
| `Mod+Shift+R` | Reveal the active note in Finder / File Explorer (row `reveal_in_file_manager`) |
| `Mod+Shift+P` | Present active note as slides (a plugin command: its row is `mahfouz/slidev:present-fullscreen`) |

Fixed editor shortcuts (not remappable):

| Shortcut | Action |
|---|---|
| `Mod+B` | Bold |
| `Mod+I` | Italic |
| `Mod+Shift+X` | Strikethrough |
| `Mod+E` | Inline code |
| `Mod+,` (comma) | Subscript |
| `Mod+.` (period) | Superscript |
| `Mod+Shift+H` | Highlight |
| `Mod+Shift+K` | Link the selection (asks for the URL) |
| `Mod+Alt+1` / `2` / `3` | Heading 1 / 2 / 3 |
| `Mod+Shift+8` | Bullet list |
| `Mod+Shift+7` | Ordered list |
| `Mod+Shift+9` | Checklist |
| `Mod+Shift+.` | Blockquote |
| `Mod+Shift+M` | Insert media or file |

Other useful bindings: `Tab`/`Enter` inside a checklist or list continue
it; `Cmd/Ctrl+Click` opens a link or wikilink; `[[` triggers wikilink
autocomplete; `!` triggers field autocomplete.

## The menu bar (desktop)

Every app action above is also in the desktop menu bar, next to its
shortcut:

- **File**: new notes (sibling, child, parent level), **New Folder**, New
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

- Shortcuts without ⌘ or Ctrl, such as `F2` for Rename.
- `Mod+D`, `Mod+[` and `Mod+]`, which the editor also uses to select the
  next match and to indent or outdent. Leaving them off the menu keeps them
  working in the editor.

These menu keys are fixed and aren't in the `## Shortcuts` table:
`Mod+,` Settings, `Mod+Shift+N` New Vault, `Mod+Shift+O` Open Vault, `Mod+F`
Find and Replace, `Mod+.` Stop Presenting. Line Numbers has no key, so
`Mod+Shift+L` copies the note as a wikilink.

## Keyboard shortcuts on the web

The browser keeps some keys for itself (close tab, new window, switch tabs,
zoom, bookmarks, developer tools, reload), so those shortcuts move on the web.
Every other shortcut is the same as on desktop. `Mod` is ⌘ on a Mac and Ctrl
elsewhere; `Alt` is ⌥ on a Mac.

| Action | Desktop | Web |
|---|---|---|
| New note at the same level | `Mod+N` | `Mod+Alt+Enter` |
| Go to search | `Mod+5` | `Mod+Shift+F` |
| Close the active tab | `Mod+W` | `Mod+Alt+W` |
| Go to all notes | `Mod+1` | `Mod+Alt+A` |
| Go to bookmarks | `Mod+2` | `Mod+Alt+K` |
| Go to tags | `Mod+3` | `Mod+Alt+T` |
| Go to trash | `Mod+4` | `Mod+Alt+X` |
| Go to tasks | `Mod+6` | `Mod+Alt+Shift+T` |
| Bookmark the active note | `Mod+D` | `Mod+Alt+S` |
| Duplicate the active note | `Mod+Shift+D` | `Mod+Alt+Shift+D` |
| Copy the note's name | `Mod+Shift+C` | `Mod+Alt+Shift+C` |
| Copy the note as a wikilink | `Mod+Shift+L` | `Mod+Alt+Shift+L` |
| Copy the note's ID | `Mod+Alt+I` | `Mod+Alt+Shift+I` |
| Delete the active note | `Mod+Shift+Backspace` | `Mod+Alt+Backspace` |
| Increase editor zoom | `Mod+=` | `Mod+Alt+=` |
| Decrease editor zoom | `Mod+-` | `Mod+Alt+-` |
| Previous tab | `Mod+[` | `Mod+Alt+[` |
| Next tab | `Mod+]` | `Mod+Alt+]` |
| Settings | `Mod+,` | `Mod+;` |
| Open Vault | `Mod+Shift+O` | `Mod+Alt+O` |
| Export the active note | `Mod+Shift+E` | (desktop only) |
| Reveal in Finder | `Mod+Shift+R` | (desktop only) |

`Mod+;` assumes a US-style keyboard layout. On a layout where ";" needs
Shift or another modifier, it can't be pressed: open Settings from the gear
in the left rail instead.

On a Mac, shortcuts with ⌥ go by the key you press, not the character ⌥
types with it, so `⌘⌥S` works although ⌥S types "ß".

Shortcuts you change in **Settings → Shortcuts** are saved in the vault
(`.config/settings.md`) and apply on both. A default you haven't changed
stays each platform's own default.
