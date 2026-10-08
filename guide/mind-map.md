---
layout: guide
title: "The vault mind map"
description: "See a vault's notes as a radial map, browse by folder or by tag, and add notes from it."
permalink: /guide/mind-map/
---

The mind map is a radial picture of a vault's notes, with the vault in the
centre and its notes branching out around it. It is the vault's home screen:
whenever no tab is open, the main pane shows the active vault's map. A vault
with no notes, and the Trash view, still show the plain empty screen.

**New note** is in the map's toolbar, so you can start a note from the home
screen.

## Open the map

To open the map at any time, right-click the vault in the sidebar and choose
**Open mind map**. It opens as a tab, and the tab is restored when you restart
the app.

There is also an **Open mind map** shortcut action. It has no default key; to
give it one, bind it under `## Shortcuts` in `.config/settings.md`. See
[Keyboard shortcuts](/guide/shortcuts/) for how shortcuts are stored and
changed.

## Tree and Tags

The **Tree | Tags** toggle in the toolbar switches how the map is arranged.

- **Tree** follows the folder and parent/child structure exactly as the
  sidebar does, folders included.
- **Tags** shows the vault, then each tag, then the notes with that tag, plus
  an **Untagged** branch for notes with no tag. A note with several tags
  appears under each of them.

## Add notes with +

Hover a node to show its **+** button. On a touch screen, tap the node once to
select it and show the button.

In **Tree** mode:

- **+** on a note adds a child note.
- **+** on a folder adds a note in that folder.
- **+** on the vault adds a top-level note.

In **Tags** mode:

- **+** on a tag creates a note that already has that tag.
- **+** on **Untagged** creates a plain top-level note.
- Notes have no **+** in Tags mode.

The new note opens in a new tab.

## Click and collapse

- Click a note to open it.
- Click a folder, a tag or **Untagged** to collapse or expand its branch.
- The small badge beside a node also collapses or expands it, and shows how
  many items are hidden.

Large branches show 50 items at a time. Click the **+N more** node to show the
next batch.

## Move around

| Input | Action |
|---|---|
| Right-mouse drag | Pan |
| Two-finger scroll | Pan |
| Pinch, or `Ctrl`+scroll | Zoom toward the pointer |
| Toolbar zoom out / zoom in | Zoom |
| Toolbar **Fit** | Fit the whole map in view |

Left-click never pans, so you can't create a note by accident while moving
around.

On a touch screen, drag with one finger to pan and use the toolbar buttons to
zoom.

## Keyboard

Press `Tab` to move focus into the map, then:

| Key | Action |
|---|---|
| Arrow keys | Move between a node's parent, its children and its siblings |
| `Enter` | Open a note, or collapse or expand a branch |
| `+` or `Shift`+`Enter` | Add a note, as the **+** button would |

## What is remembered

The mode (Tree or Tags) and which branches you collapsed are saved per vault
on this device. They are not stored in the vault and are not synced, so each
device keeps its own view.
