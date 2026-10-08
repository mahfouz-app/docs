# User Guide

Mahfouz is a cross-platform Markdown PKM (personal knowledge management) app.
Your notes are plain Markdown files in a folder that is also a git
repository — the repo is the source of truth; Mahfouz's local database is
just a rebuildable index on top of it. This guide covers every feature
currently in the app.

**Mahfouz needs git.** If it can't find a usable git when it starts, it
offers to install its own copy, or shows how to install git yourself. See
[Git](#git).

Menu → **Help → Keyboard Shortcuts** (`Cmd/Ctrl+/`) opens a quick-reference
shortcut cheat sheet inside the app. This document is the long-form manual.

Using Mahfouz in a browser? See [Mahfouz on the web](#mahfouz-on-the-web).

---

## Vaults

A **vault** is a folder on disk containing your notes, and (usually) a git
repository. Mahfouz doesn't create a vault for you on first launch — use
**File → Open Vault…** (`Cmd/Ctrl+O`) to point it at an existing folder or
an empty one you want to turn into a vault.

You can have multiple vaults open at once. Each appears as its own
collapsible section at the top of the Sidebar's Notes view, showing either
the connected repo's `owner/repo` name (with a cloud icon) or the local
folder name (with a computer icon) if it isn't connected to a remote yet.
Click a vault section's gear/⋯ button to open **Vault Settings** for that
vault specifically (see [Git sync & remotes](#git-sync--remotes) and
[Git LFS](#git-lfs-for-large-media) below), including:

- **Vault path** — shown with buttons to reveal it in Finder/Explorer, or
  **Move or rename…** it (type a new path, or pick a new parent folder;
  same-disk moves only).
- **Rebuild from vault** — wipes and rebuilds the local index from the
  files on disk. Use this if the sidebar or search ever looks out of sync
  with what's actually in the folder.
- **Remove vault from Mahfouz** — removes it from the app only; nothing on
  disk is touched.

On the web, vaults open differently: see [Mahfouz on the web](#mahfouz-on-the-web).

---

## Mahfouz on the web

Mahfouz also runs in your browser, at **web.mahfouz.app**. It works on the
same vaults as the desktop app: a folder of Markdown notes in a git
repository. You can open a folder on your computer (Chromium browsers only),
or a repository from GitHub, which Mahfouz keeps in the browser and syncs
back. Mahfouz has no copy of your notes: a folder is read and written by the
browser directly, and a GitHub vault's sync passes through Mahfouz's server
on its way to GitHub without being stored.

### Supported browsers

| Browser | Version | Open local folders | GitHub vaults |
|---|---|---|---|
| Chrome, Edge and other Chromium browsers | 108 or later | Yes | Yes |
| Safari | 17 or later | No | 26 or later |
| Firefox | 114 or later | No | Yes |

Mahfouz needs a secure (https) connection, browser file storage, Web Locks,
module workers, service workers and IndexedDB. A browser without one of them
shows **This browser can't run Mahfouz** with a link to the desktop app (or,
over plain http, **Mahfouz needs a secure connection**).

Opening a folder on your computer needs the File System Access API, which
only Chromium browsers have. In Safari and Firefox the first-run card says so
and links here.

GitHub vaults live in the browser's own storage, which Safari can write to
from version 26. In an older Safari, **Open a GitHub repository…** is
disabled and the card says why.

### Opening a folder

On first run, click **Open or create a vault…** and choose a folder. The
browser asks whether Mahfouz may edit the folder: choose **Edit files**.
Press `Ctrl+Alt+O` (`⌘⌥O` on a Mac) to open another folder later.

If the folder isn't a git repository yet, Mahfouz asks before creating one
(`git init`). A browser can't see the folders above the one you picked, so it
can't tell whether that folder already sits inside another repository, such
as a project you work on. If it does, pick a folder of its own instead:
otherwise the new repository takes your notes out of the enclosing one.

#### Reconnect

The browser remembers the folder, but Chrome asks for permission again after
it restarts, unless you chose **Allow on every visit**. Until then Mahfouz
shows **Reconnect "&lt;folder&gt;"** in the notification bell. Click
**Reconnect** and allow access: Mahfouz checks the folder and picks up any
changes made meanwhile.

#### One tab at a time

Mahfouz keeps a search index of your notes in the browser, and only one tab
can use it at once. A second tab shows **Mahfouz is open in another tab**:
switch to the first one, or close it and reload.

If the index is ever damaged, Mahfouz offers **Rebuild and reload**. Your
notes are safe: they live in your folders, and the index is rebuilt from them.

### Signing in with GitHub

GitHub vaults need a GitHub sign-in. (The desktop app signs in differently:
see [Signing in to GitHub](#signing-in-to-github).) Click the account icon at
the bottom of the left rail, then **Sign in with GitHub**: Mahfouz sends you
to GitHub and back. Mahfouz's server keeps the authorization for this browser
for up to 30 days, then you sign in again (the notification bell says when it
has expired). It keeps only the authorization, your GitHub account's id and
profile, and timestamps: never your notes.

Signing in lets Mahfouz act as you on GitHub; it doesn't give it your
repositories. That is a second step, installing the Mahfouz app on GitHub:
choose **Only select repositories** and pick the ones you keep vaults in.
The account popover then offers **Manage repository access** to change the
selection later.

- **Sign out** — ends this browser's session only.
- **Sign out everywhere (including desktop)** — ends every browser session
  and revokes Mahfouz's GitHub authorization, which signs the desktop app out
  too. If Mahfouz can't confirm that every session ended and that GitHub
  revoked it, it says **Signed out of this browser only**: the desktop app
  and other browsers may still be signed in. Open **GitHub settings** from
  that notice and revoke Mahfouz to be sure.

### Opening a GitHub repository

On first run, or from Open Vault, click **Open a GitHub repository…**:

1. Sign in with GitHub and install the Mahfouz app on your repositories, as
   above. If the repository belongs to an organization and an owner has to
   approve the installation first, Mahfouz says so; click **Check again**
   once they have.
2. Pick the repository. Don't see it? **Manage repository access** adds it.
3. Mahfouz shows the repository's size (GitHub's estimate). Above 250 MB it
   warns that the clone may take a long time and fill that much of the
   browser's storage. Click **Clone** and keep the tab open until it ends: a
   clone can't be stopped part way, and a failed one leaves nothing behind.

Mahfouz downloads the repository's whole history. If it's already open in
this browser, the picker offers **Switch to it** instead of a second copy.

#### Where a GitHub vault lives

The vault is kept in this browser, not in a folder you can see. The
repository on GitHub is the copy that outlives the browser: clearing the
site's data, or a browser that resets its storage, deletes the vault here
(Mahfouz says **Mahfouz lost "&lt;vault&gt;"**), and you clone it again.
Anything not yet pushed is gone with it, so let it sync before you clear data.

#### Syncing

A GitHub vault syncs on its own: it pushes shortly after a commit and pulls
regularly and when you return to the tab. Syncing only fast-forwards: if
GitHub and the vault each have commits the other lacks, Mahfouz doesn't merge
them on the web, and the notification says so. Sync that vault from the
desktop app instead. A push over the 100 MB GitHub takes in one go is sent in
parts; a single commit larger than that has to be pushed from the desktop app.

- **Unfinished updates** — if the tab closes in the middle of a pull or
  reset, Mahfouz finishes it on the next load. If you've edited a file it
  would overwrite, it stops and names the files, with two ways out:
  **Discard my changes and finish**, or **Reset to GitHub**, which makes the
  vault match GitHub. Both ask first and lose the changes they name. Commits
  wait until it's settled.
- **Lost access** — if the Mahfouz app no longer reaches the repository (you
  removed it from the selection, or the repository is gone or renamed),
  Mahfouz says **Mahfouz lost access to &lt;repository&gt;**. **Manage
  repository access** opens GitHub's page for the app.
- **Signed out** — when your sign-in ends, every vault's sync pauses with one
  notice, **Sync paused: signed out of GitHub** (or **expired**). **Sign in
  again** resumes them; your changes stay in the vault meanwhile.

#### Removing a GitHub vault

Removing a browser-stored vault (Settings → Vaults → Remove, or Close vault)
deletes it from this browser, unlike a folder vault, whose folder is left
alone. The question tells you how many commits GitHub doesn't have yet and
whether some changes aren't committed yet: those are lost. What's on GitHub
stays, and you can open it again from there. Sync first to keep your work.

### Commits on the web

Mahfouz commits your changes to the folder's repository as the desktop app
does: about 30 seconds after you stop typing, or right away with **Manual
save** (`Ctrl+S`, `⌘S` on a Mac). The commits are ordinary git commits: the
desktop app, a terminal or any git tool sees them.

Commits use the name and email in the repository's own configuration
(`.git/config`). The browser can't read your computer's global git settings
(`~/.gitconfig`), so in a repository without its own, web commits are
authored as **Mahfouz &lt;mahfouz@local&gt;** (as the desktop app's are in a
vault it created). To commit under your name, set it once in the repository;
the desktop app uses it too:

```sh
git config user.name "Your Name"
git config user.email "you@example.com"
```

#### Read-only vaults

Some git settings change the bytes git stores, and the web version can't
apply them. A vault that uses one opens **read-only** on the web: you can
read and edit notes, and changes are saved to the folder, but they aren't
committed. Commit them from the desktop app. The notification names the
setting:

- a git filter, such as Git LFS or git-crypt (`filter=` in `.gitattributes`);
- line-ending conversion (`eol=crlf`, or `core.autocrlf` in the repository's
  config), or Windows line endings converted by a setting outside the folder;
- re-encoding (`working-tree-encoding`) or keyword expansion (`ident`);
- an index format the web doesn't read (sparse checkout, `git add -N`).

### What's only in the desktop app

Plugins (Mermaid, draw.io, presentations, PDF export), the AI agent, Export,
Git LFS, syncing a local folder with a remote (a GitHub vault syncs on the
web), merging diverged histories, Reveal in Finder, moving a vault, system
notifications and update checks. Settings say **Available in the desktop
app** where one would be. **Send feedback** opens a new issue on GitHub
instead of sending it from the app.

### Keyboard shortcuts on the web

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

---

## Notes & organization

Every note is a single Markdown file, `<note-id>.md`, at the vault root.
The moment a note gets its first child it becomes a folder of the same
name holding its own file (`<note-id>/<note-id>.md`) and its children
(`<note-id>/<child-id>.md`, nesting the same way). Once a note has a
folder it keeps it. You never see these paths day to day — the Sidebar
presents them as a normal expandable tree. Vaults created before this
layout are offered a one-time migration on open; declining keeps the older
one-folder-per-note shape, which still works.

- **New note**: `Cmd/Ctrl+N` creates a sibling of whatever's selected;
  `Cmd/Ctrl+Shift+N` creates a child of it; `Cmd/Ctrl+Alt+N` creates a note
  at the parent level. Each vault section also has a `+` button in the
  Sidebar for "new note here."
- **Title**: there's no separate title field — a note's title is always
  the first non-empty line of its body (with a leading `#` stripped if
  present). Rename a note by editing its first line.
- **Reordering / nesting**: drag a note in the Sidebar to reorder it or
  drop it onto another note to make it a child.
- **Folders**: a folder doesn't have to belong to a note. Right-click a
  plain folder in the Sidebar for **New note**, **New folder**, **Rename
  folder** (edit the name in place: `Enter` saves, `Esc` cancels),
  **Reveal in Finder**, and **Delete folder**.
- **Breadcrumb**: the bar above the editor shows where the open note
  lives: the vault, then every folder it's nested in. Click a folder that
  belongs to a note to open that note; click a plain folder to show it in
  the Sidebar.
- **Sidebar menu**: right-click empty space in the Sidebar for **New
  note** and **New folder** (in the active vault), **New vault…**, **Open
  vault…**, and the grouping, sort and filename-display options.
- **Reveal in Finder** is called **Reveal in File Explorer** on Windows
  and **Open Containing Folder** on Linux.
- **Bookmarks**: click the ribbon icon on a Sidebar row, or use the
  toolbar's ⋯ menu → Bookmark, to pin a note. `Cmd/Ctrl+2` jumps to the
  Bookmarks view (a flat list across all vaults).
- **Unimported files**: if you drop a plain `.md` file into the vault
  folder outside Mahfouz (no `id:` in its frontmatter), it shows up right
  away in the Sidebar as a clickable "pending" row, in the folder (or under
  the note) it was added to. Mahfouz doesn't touch the file until you edit
  it there: the first edit imports it — Mahfouz adds the id it needs and
  leaves everything else alone.
- **Edits from other apps**: Mahfouz watches the vault folder. When another
  app changes the note you have open, the editor updates in place within a
  second, keeping your cursor where it was (`Cmd/Ctrl+Z` undoes the
  reload). If you were typing at the same moment, a banner offers to
  reload or resolve the conflict instead, so your unsaved typing is never
  overwritten.
- **Status dots**: each Sidebar row shows a small dot indicating whether
  the note has uncommitted changes, is synced to a remote, or is local-only. A note with auto-commit off also shows a drive glyph
  (see [Auto-commit and disk-only notes](#auto-commit-and-disk-only-notes)).
- **Sort order**: toggle alphabetical vs. chronological (by last-updated)
  ordering from the Sidebar header in Trash/Bookmarks views, or globally
  via Settings.

---

## The editor

Mahfouz's editor is CodeMirror 6 in **live-preview source mode** — you're
always editing real Markdown text, but certain syntax renders visually
(checkboxes, bullets, highlights, tags, wikilinks, media) as you type,
rather than showing raw symbols.

There are two independent view modes for how much raw syntax stays
visible, switched with the toolbar's **Show source** button
(persisted per-device, not per-note):

- **Source** (default): most Markdown punctuation stays visible
  (`# `, `**`, `_`, `[text](url)`, etc.) so it's obvious what you're
  editing, while checkboxes, bullets, and horizontal rules still render as
  real widgets.
- **Preview**: heading marks, emphasis marks, link brackets, `==`
  highlight marks, and `~`/`^` sub/superscript marks are all hidden in
  favor of the styled result — except on whatever line your cursor is
  currently on, which always reveals its raw syntax so you can edit it.
  GFM tables render as fully interactive editable tables in Preview mode
  regardless of cursor position (see [Tables](#tables) below).

Other editor behavior:

- **Tab** on a list item (bullet, numbered, or checklist) nests it under the
  item above, wherever your cursor is on the line, and its sub-items move
  with it. **Shift+Tab** moves it back out a level. On the first item of a
  list Tab does nothing, since there's nothing above to nest under.
- On any other line, **Tab** re-indents only when your cursor is in leading
  whitespace at the start of the line; anywhere else it's left free for
  OS-level autocomplete.
- Native macOS spellcheck/autocorrect (including Text Replacements) work
  normally.
- `Cmd/Ctrl+Click` on a link, `[[wikilink]]`, or a rendered link-card opens
  it (external URLs in your system browser; wikilinks by switching to that
  note).
- **Find and replace**: `Cmd/Ctrl+F` (or toolbar) opens CodeMirror's
  built-in search/replace panel.
- **Undo/redo**: standard `Cmd/Ctrl+Z` / `Cmd/Ctrl+Shift+Z`, also available
  as toolbar buttons.

---

## Markdown syntax reference

Everything below is plain Markdown (GFM-flavored) that Mahfouz recognizes and
renders specially:

| Syntax | Result |
|---|---|
| `# `, `## `, `### ` (up to 6) | Heading levels 1–6 |
| `**bold**` | **Bold** |
| `_italic_` | _Italic_ |
| `~~strikethrough~~` | ~~Strikethrough~~ |
| `` `inline code` `` | Inline code |
| `==highlight==` | Highlighted text |
| `~sub~` | Subscript |
| `^sup^` | Superscript |
| `- `, `* `, `+ ` at line start | Bullet list |
| `1. ` at line start | Ordered list (auto-renumbered) |
| `[ ] `, `[x] `, `[] ` at line start | Checkbox (click to toggle) |
| `> ` at line start | Blockquote |
| `---` on its own line | Horizontal rule **and** a page/slide break (see [Presenting](#presenting-notes-as-slides)) |
| `` ``` `` fenced block | Code block, styled distinctly from prose |
| `[text](url)` | Link |
| `<https://example.com>` | Bare autolink (what pasting a URL produces) |
| `[[Note Title]]` | Wikilink to another note by title |
| `#tag` | Tag (indexed, filterable in the Sidebar) |
| `![alt](path)` alone on a line | Embedded image/video/audio, auto-detected from the file extension |
| GFM pipe table (`\| a \| b \|` rows with a `---` separator row) | Interactive table in Preview mode |
| YAML frontmatter (`---` fenced block at the very top) | Note metadata — `id`, `bookmarked`, `external_images`, and any custom attributes you add |

### Tables

Insert one via the toolbar's **Table** button (a hover grid, minimum 8×8,
that grows as you approach its edge — pick rows × columns, it shows the
size as you hover). In Preview mode a table is always a live, editable
grid instead of raw pipe syntax:

- Click a cell to edit it inline; **Tab**/**Shift+Tab** moves between
  cells (Tab at the last cell adds a new row); **Enter** commits the cell.
- Hover the bottom or right edge for a **+** button to add a row or column.
- Each column header shows a drag handle (reorder columns) and a trash
  icon (delete column — hidden when only one remains); rows with more than
  one row get the same drag handle to reorder.

---

## The formatting toolbar

The toolbar above the editor, left to right:

- **Undo / Redo**
- **Bold, Italic, Underline, Strikethrough, Inline code, Highlight**
- **Sub/Superscript** dropdown
- **Link** — inserts `[text](url)`
- **Tag** — inserts a `#tag`
- **Heading** dropdown — Normal text / H1 / H2 / H3
- **List** dropdown — Bullet / Numbered / Checklist
- **Quote** (blockquote)
- **Table** — opens the hover-grid size picker
- **Embed** dropdown — inserts a block for each enabled embed plugin (such
  as Mermaid). If none are enabled, it links to Preferences instead.
- **Insert media or file** — opens a native multi-file picker and attaches
  the chosen files (see [Media](#media-images--attachments))
- **Find and replace**
- **Font** dropdown — whole-note font override, stored as a note attribute
- **Color** dropdown — Text / Background / Highlight tabs. Each has a
  100-swatch grayscale + hue grid, a native "Custom…" color picker and
  "Reset to default." Like Font, these are whole-note settings stored as
  note attributes, not formatting for the selected text.
- **Page orientation** — switches between Landscape and Portrait

Right-aligned at the end of the toolbar:

- **Save status** — shows whether the note has been saved; click it to
  open the [Details](#note-pills--the-right-sidebar) section
- **Zoom** dropdown
- **Show source** — switches between Source and Preview (see
  [The editor](#the-editor))
- **Attributes** — shows or hides the document attributes sidebar
- **⋯ (More)** — the note's action menu, the same one you get by
  right-clicking the note in the Sidebar (minus "Open in new tab"):
  **Present**, **Export…**, **New child note**, **New folder**,
  **Bookmark** / **Remove bookmark**, **Move…**, **Rename**, **Duplicate**,
  **Copy name**, **Copy as wikilink**, **Copy ID**, **Reveal in Finder**
  (**Reveal in File Explorer** on Windows, **Open Containing Folder** on Linux),
  **Revisions** (opens the note's history in the Details section), and **Delete** (danger). Each
  item shows its keyboard shortcut.

A plugin that registers toolbar items (such as draw.io's **New diagram**
or Mermaid's **Insert diagram**) adds its own buttons at the right end of
the toolbar, after **Attributes** and just before **⋯ (More)**, but only
while the plugin is enabled. A toolbar button with a keyboard shortcut
can be rebound or turned off in `.config/settings.md` under
`## Shortcuts`, the same way as a plugin command (see [Presenting notes
as slides](#presenting-notes-as-slides) for an example). Plugin tabs and
the Preferences → Plugins list both show each plugin's icon.

All toggle-style formatting (bold, italic, lists, headings, blockquote,
etc.) is a *smart toggle*: applying it again removes it, and applying a
different list type to a line that already has one converts it in place
rather than stacking markers.

---

## Media, images & attachments

- **Embedding**: `![alt text](path)` on its own line renders inline as an
  image, video, or audio player, chosen automatically from the file
  extension (video: mp4/webm/ogv/mov/m4v; audio: mp3/wav/ogg/oga/m4a/flac/
  aac; anything else: image). A small chevron in the editor gutter next to
  that line collapses/expands the embed (remembered per note on your
  device).
- **Adding files**: drag a file from the OS onto the editor, paste a file
  from your clipboard (e.g. a screenshot), or use the toolbar's **Insert
  media or file** button. The file is copied into the vault-level `files/`
  folder with a sanitized, uniquified name, and a `![Name](/files/file.ext)`
  (media) or `[Name](/files/file.ext)` (other files) line is inserted at
  your cursor. The link is the same wherever the note later moves.
- **Paths**: a path starting with `/` resolves from the vault root; any
  other relative path resolves against the note's own folder (you can't
  reach outside the vault with `../../`). `file:` URLs are rejected.
  `data:` URIs render directly.
- **Remote images**: `http(s)://` image URLs only render if you've turned
  on **"Render external images in this note"** in the
  [Attributes panel](#attributes-panel) — off by default, per note.
- **Cleanup**: if you delete an embed line (or the note itself), Mahfouz
  removes the underlying file from disk automatically, but only if no
  other note in the vault still references it. Only files under `files/`
  (or, for older vaults, beside the note) are ever removed this way.
- **Markdown export** copies the note (and, optionally, its children) plus
  the attachments they reference, keeping `/files/…` links valid with the
  export folder as the root.
- **Link titles**: after pasting a bare URL, press **Tab** while the
  "Tab → title" hint is showing to fetch the page's title and turn it into
  a normal Markdown link (`[Title](url)`).

---

## Links, wikilinks & backlinks

- `[[Note Title]]` links to another note by its exact title (case
  insensitive). Type `[[` to trigger autocomplete of existing titles. A
  wikilink to a title that doesn't exist yet still renders, just styled as
  "broken" until a matching note is created.
- Pasting a bare URL over an empty cursor wraps it as `<url>`; pasting over
  a text selection turns the selection into `[selected text](url)`.
- **Backlinks**: the right sidebar's "Linked from N notes" section lists
  every note that links to the one you're viewing (via `[[wikilink]]` or a
  regular link to its title). The backlinks pill above the note shows the
  count and opens it (see [Note pills](#note-pills--the-right-sidebar)).

---

## Tags

Any `#` immediately followed by a letter (and not inside code) is a tag —
`#project`, `#ideas`, etc. Tags are indexed automatically:

- The Sidebar's **Tags** view (`Cmd/Ctrl+3`) lists every tag with its note
  count; click one or more to AND-filter notes, "Clear" to reset.
- The lighter-weight **Tag filter** chip row offers the same picker in
  contexts that don't want the full Sidebar view.

---

## Search

`Cmd/Ctrl+K` opens the search overlay — searches across **all open
vaults** as you type (debounced), matching title and body text with
multi-term AND matching, ranked roughly: exact title match, then
title-starts-with, then title contains all terms, then title contains the
whole phrase, then body-only matches. Matched terms are highlighted in the
title and a generated snippet. With an empty query it shows your 8 most
recently edited notes instead. Navigate results with `↑`/`↓` (or
`Ctrl+P`/`Ctrl+N`), `Home`/`End`, and open with `Enter`.

---

## Table of contents & page preview

Two right/left-hand panels, both driven by the editor's current scroll
position ("whichever section is at the top of the viewport is active"):

- **Table of contents** (right sidebar) lists every heading (levels 1–6,
  ignoring anything inside a code fence) in the note, indented by level;
  click one to jump to it.
- **Page preview** (collapsible column to the left of the editor) shows
  thumbnail cards for each "page" — the note split wherever a bare `---`
  line appears (the same rule [presenting](#presenting-notes-as-slides)
  uses for slide breaks). Click a thumbnail to jump there. Drag cards to
  reorder pages, or right-click one for **Move up / Move down / Delete
  page**.

---

## Note pills & the right sidebar

A row of pills sits at the right end of the note's path, above the text:

- **Who and when** — initials for the person who last edited the note
  and, if different, the person who created it, then how long ago it was
  last edited ("Not committed" for a note that has no commit yet). Hover
  for names. Opens **Details**.
- **Backlinks**, **Tags**, **Attributes** — an icon and a count each.
  A pill at zero is dimmed but still clickable.

Clicking a pill opens the right sidebar on that section. While the
sidebar is open, the pills move into the top of it and turn sections on
and off there; a highlighted pill means its section is showing. Turning
off the last section closes the sidebar, and opening it again from the
toolbar (or `Mod+Shift+\`) shows every section.

The sidebar's sections, in order:

- **Details** — Created, Created by, Updated, Last edited by and Path,
  then the note's [history](#history--trash). These rows come from git
  and the file on disk, so they're read-only; Path reveals the file in
  your file manager. Click a row's label to choose whether it also shows in the
  attributes block in the document.
- **Backlinks** — see [Links](#links-wikilinks--backlinks).
- **Tags** — the note's tags; click one to filter by it.
- **Attributes** — see [Attributes panel](#attributes-panel).

---

## Attributes panel

Attributes Mahfouz understands get a matching control; everything else
is a free-form row. Both round-trip straight to the note's YAML
frontmatter, so they're visible and hand-editable outside the app too.

The panel shows in two places: as a block in the document under the
note's first heading, and as a right-sidebar section (open it with the
attributes pill — see [Note pills](#note-pills--the-right-sidebar)).

The read-only Created, Updated and Path rows live in the sidebar's
**Details** section; the block in the document shows them only if you've
chosen to there.

- **Render external images** — a switch; see
  [Media](#media-images--attachments).
- **Orientation** — Landscape / Portrait segmented control for PDF export
  (same as the toolbar button). Landscape is the default and writes no key.
- **Text, highlight, background color** — a color swatch each, with a
  clear button once set (same as the toolbar color menu).
- A free-form key/value table for anything else. A recognized key with a
  value its control can't show (say `orientation: sideways`) stays in the
  table so you can fix it.

---

## History & trash

Mahfouz has no separate undo-history database — **history is git history.**

- **History** (the bottom of the sidebar's Details section — toolbar ⋯ →
  Revisions, `Cmd/Ctrl+Alt+R`, or click the save status) lists
  every commit that touched the current note (subject, relative time,
  short SHA). Click one to open that revision read-only in a new tab,
  with a banner offering **Restore** (writes a *new* commit restoring
  that content — history is always append-only, never rewritten).
- **Trash** (Sidebar, `Cmd/Ctrl+4`) is a flat, cross-vault list of every
  note deleted via git, newest first, each with a **Restore** button and a
  click-to-preview.
- Every note edit auto-commits ~30 seconds after your last keystroke in
  that note (message `Auto-save <timestamp>`), and any edits made outside
  Mahfouz (a text editor, another git client) are auto-committed as
  `External edits` as soon as Mahfouz notices them, so
  nothing you do to the vault folder is ever silently lost.

### Auto-commit and disk-only notes

By default every note auto-commits, as above. If you'd rather keep a
note's work-in-progress out of history, turn its **auto-commit** off.
The note is then **disk only**: it still saves to disk as you type, but
Mahfouz never commits it on its own, so it isn't pushed or shared until
you say so.

- **Turn it off or on** with the **Auto-commit** switch in the right-sidebar
  [Attributes panel](#attributes-panel), or right-click the note and pick
  **Turn off auto-commit** / **Turn on auto-commit**. The action **Toggle
  auto-commit for note** can be bound to a key in Settings → Shortcuts; it
  has no default key.
- **How to tell** — a disk-only note shows a drive glyph in the sidebar
  (filled while it has uncommitted changes), and the toolbar's save chip
  reads **Saved · not in history**.
- **Commit now / Discard changes** — when a disk-only note has uncommitted
  changes, the Attributes panel shows both buttons. Commit now records the
  note as a normal commit. Discard changes asks first, then returns the note
  to its last committed version (or deletes it if it was never committed).
  This can't be undone.
- **New child notes** created under a disk-only note start disk-only too.
- **Blocked pulls** — if someone else changes a disk-only note you've also
  edited, the pull would overwrite your uncommitted work, so it's blocked. A
  notification names the note(s) and offers **Commit now**, **Discard** and
  **Open note**. Pulling for the whole vault stays blocked until you resolve it.
- **Use remote (overwrites local)** (see [Git sync](#git-sync--remotes)) warns
  first and names any disk-only notes whose uncommitted edits it would
  destroy. Those edits aren't in history, so they can't be recovered.
- **Restoring a revision** of a disk-only note that has uncommitted changes
  asks first, since the restore replaces them. The restored version is
  committed.

Limits worth knowing:

- Deleting a disk-only note still commits the deletion, and restoring it
  from Trash brings back its **last committed version**, not the
  uncommitted edits.
- **Commit now** also commits any other changes waiting for the next
  auto-commit, in one commit named after the note. Other disk-only notes stay
  out.
- Attachments (in `files/`) that a disk-only note links to are still
  auto-committed, even while the note itself isn't.
- Moving the child notes of a disk-only parent can leave history
  inconsistent (the children committed in their new place, the parent not)
  until you commit the parent.
- The setting is stored **per note, on this computer only**: in the vault's
  local git folder, never committed or pushed. Collaborators and your other
  machines are unaffected and keep auto-committing that note. It survives
  removing and re-adding the vault and rebuilding its index; a fresh clone
  of the vault starts with every note auto-committing.

---

## Presenting notes as slides

Any note can be shown as a [Slidev](https://sli.dev) deck — every bare
`---` line is a slide break (a note with none is a one-slide deck).

- **`Cmd/Ctrl+Shift+P`** shows the current note fullscreen, layered over
  the whole app rather than opening a tab. Arrow keys move between slides;
  `Esc` (or menu **View → Stop Presenting**, `Cmd+.`) returns you exactly
  where you were. Rebind it in `.config/settings.md` under `## Shortcuts`,
  row `mahfouz/slidev:present-fullscreen`.
- A note's menu (sidebar, tab, or toolbar ⋯) offers **Present** as a
  regular tab instead, with **Reload**, **Presenter** (opens Slidev's
  presenter view — speaker notes, timer — in your system browser),
  **Browser** (opens the deck itself there), and **Restart** (restarts the
  shared Slidev server) in its toolbar.
- **PDF**: a note's menu → **Export…** (or `Cmd/Ctrl+Shift+E`) → Format
  **PDF** renders the deck to a PDF; once it's ready, **Save…** asks where
  to put it. Page shape follows the note's **Orientation**.
- **Enable it first**: Present is the **Slidev presentations** plugin and
  PDF export the **PDF export** plugin (Preferences → Plugins), both from
  the built-in `mahfouz` registry. Each can be on without the other; the
  Export dialog only offers PDF while the PDF export plugin is on.
  Installing either downloads Slidev, a headless browser and its own
  Node.js runtime (about 50 MB of that) — a one-time download of a few
  hundred MB, with a progress bar in the status bar (PDF export installs
  Slidev as its dependency). You don't need Node.js installed yourself.
  Editing the note updates the presentation live.

### Slides templates

A template gives your decks a look — background color or image, text and
accent colors, a font, a logo, a footer — for both Present and PDF export.

- **Create them** in Vault Settings → **Slides**. **Use as default**
  applies a template to every note that doesn't pick one.
- **Pick one for a note** from the slides-template menu on the editor
  toolbar (next to the orientation toggle, shown once the vault has a
  template): **Default**, a named template, or **None** to opt the note
  out. The choice is stored as the note's `slides_template` attribute.
- **Cover slide**: the optional cover fields (background, image, text
  color, logo) replace the main ones on the first slide only.
- **Header and footer**: one line of inline Markdown drawn at the top and
  bottom of every slide. Both can use [fields](#fields-name) — `!title`,
  `!page`, `!total` — expanded when the deck is presented or exported.
- A note overrides a template's header/footer with its own `header` /
  `footer` attribute (`none` turns that side off), and a `title_slide`
  attribute leaves slide 1 bare of either. A note whose `slides_template` is
  `none` still shows its own header or footer, if it has one.
- **Custom CSS** runs after the fields, for anything they don't cover.
  Each slide is `.slidev-page`, and slide N is also `.slidev-page-N`.
- **Font** is a [Google Fonts](https://fonts.google.com) family name such
  as `Inter`, downloaded when the deck loads.
- Images are copied into the vault's `files/` directory, and deleting a
  note never removes an image a template still uses.
- Templates live in `.config/slides.md`, one `## <name>` section per
  template, so they sync with the vault and can be edited by hand.
  Presenting picks up template changes the next time you present or switch
  notes.

---

## Git

Mahfouz needs git 2.20 or newer. If your machine has one, Mahfouz uses it
and installs nothing. On a Mac, the stub at `/usr/bin/git` only counts once
the Command Line Tools are installed. The Linux `.deb` and `.rpm` packages
install git as a dependency, so on Linux the screen below mostly matters
for the AppImage.

When Mahfouz finds no usable git at startup, it shows a **Git is required**
screen instead of opening your vaults:

- **Install** downloads Mahfouz's own copy (about 25–70 MB depending on
  your platform, checksum-verified). **Retry** repeats a failed download.
- Or install git yourself, using the command the screen shows for your
  system:
  - macOS: `xcode-select --install` (Apple's Command Line Tools)
  - Linux: `sudo apt install git` or `sudo dnf install git`
  - Windows: Git for Windows from git-scm.com

  On a platform where Mahfouz can't install its own copy, this is the only
  option.
- **Check again** finds a git you installed yourself, without restarting.

Mahfouz's own copy:

- **Where it lives** — in the app's local data folder, in a subfolder named
  after the bundled release, such as `git/2.53.0-4/`. It's never inside your vault.
  - macOS: `~/Library/Application Support/app.mahfouz/git/`
  - Windows: `%LOCALAPPDATA%\app.mahfouz\git\`
  - Linux: `~/.local/share/app.mahfouz/git/`
- **Updates** come with app updates. When a release bumps the bundled git,
  Mahfouz installs it in the background and starts using it on the next
  launch, then removes the old copy. A managed git that is too old to be
  safe is never used.
- **Sign-in** — on macOS and Windows the bundled git uses Git Credential
  Manager. Background syncs never pop up a sign-in window; **Sync now** may,
  so a sync you start can ask you to sign in. On Linux there's no bundled
  helper: configure your own (`git config --global credential.helper …`, or
  ssh-agent).

To see which git is in use, open **About Mahfouz**: it shows the git
version and whether it's the system's or Mahfouz's own.

---

## Git sync & remotes

Vault Settings → **Vault** section:

- **Connect a remote** — paste a `git@…`, `https://…`, or `ssh://…` URL.
  - If the remote is empty, your local content is pushed as the initial
    commit automatically.
  - If the remote already has content, you're asked to choose: **use
    remote** (hard-resets your local vault to match it, then re-indexes)
    or **push local** (force-pushes your local content over it). Pick
    carefully — both directions are destructive to whichever side loses.
- **Sync now** — pulls, then pushes, immediately.
- Once connected, Mahfouz keeps syncing on its own: it auto-pushes ~60
  seconds after an auto-commit, and auto-pulls (fast-forward only) every 5
  minutes and whenever the app regains focus.
- **Authentication** is entirely your local git setup's problem — ssh-agent,
  the `gh` CLI, your OS keychain, whatever `git push`/`pull` from a
  terminal in that folder already uses. Mahfouz never stores or sees a token.
- The [status bar](#status-bar)'s right-hand pill always shows the active
  vault's current sync state.

On the web, GitHub vaults sync differently: see [Syncing](#syncing) under
[Mahfouz on the web](#mahfouz-on-the-web).

---

## Signing in to GitHub

Signing in lets Mahfouz create repositories for your vaults and manage who
can open them. Click the account button at the bottom of the left rail,
below Settings, and choose **Sign in with GitHub**. (You can also sign in
from **Vault settings → Collaborators**.)

1. Mahfouz shows a short code and opens GitHub. Enter the code and approve
   **Mahfouz**. This signs you in: it authorizes Mahfouz to act for you on
   GitHub, but doesn't yet give it any of your repositories.
2. Installing the Mahfouz app on your repositories is a separate step. Until
   the app is installed, the account menu and Collaborators show **Install
   Mahfouz on your repositories**. Choose **Only select
   repositories** and pick the repositories that hold your vaults. Mahfouz
   can see and manage only the repositories you pick. To change the
   selection later, use **Manage repository access** in the account menu or in
   Collaborators, or go to github.com under **Settings → Applications → Installed GitHub
   Apps**. A repository owned by an organization may need an organization
   owner to approve the installation.

Mahfouz uses the sign-in to create private repositories, list your
repositories, and invite or remove collaborators with Read or Write access.
It never changes a repository's visibility and never deletes one; create a
public repository on github.com and connect it with **Use an existing one**.
The sign-in never pushes or pulls: git sync keeps using your own SSH keys or
credential helper.

The sign-in is stored in your system keychain, never in the vault or its
database.

### The account button

The button at the bottom of the left rail shows your GitHub picture once
you're signed in. A small dot means something needs you:

- **Warning dot**: Mahfouz isn't installed on any of your repositories, your
  sign-in expired (**Sign in again**), or you signed in with an earlier
  version (**Upgrade GitHub connection**).
- **Clock dot** (on the web, once available): an organization owner still
  has to approve installing Mahfouz. The desktop app can't see pending
  approvals, so it never shows this dot.

Its menu shows who you're signed in as and your GitHub connection, plus
**Manage repository access**, **Open GitHub profile** and **Sign out**.

### Adding your vaults' repositories

After you sign in, Mahfouz checks every vault connected to GitHub. If the
Mahfouz app can't see some of their repositories, the notification center
shows one **Add N repositories to Mahfouz** notice listing them, with a
button to the GitHub page where you add them. It lists only repositories you
can add: your own, and those of an organization where Mahfouz is already
installed. For someone else's repository, Collaborators says to ask its
owner instead. **Not now** hides the notice for those repositories; it comes
back if another vault's repository is missing. Mahfouz forgets your **Not
now** choices when you sign out.

### When Collaborators can't manage a repository

- **Accept the invite**: someone invited you to the repository and you
  haven't accepted yet. Open the invitation on GitHub, accept it, and come
  back.
- **Ask the owner to install Mahfouz**: the repository belongs to someone
  else and the Mahfouz app isn't installed on it. Only its owner (or an
  organization owner) can add it.
- **Add this repository**: it's your repository, but it isn't in the
  Mahfouz app's selection yet. **Add this repository to Mahfouz** opens the
  page to add it.
- Only admins of a repository can manage its collaborators.

### Creating a repository for a vault

Creating a repository needs the Mahfouz app installed on your own GitHub
account. Until it is, Collaborators offers two steps on GitHub instead of
**Create and connect**: **Create the repository on GitHub** (it opens
GitHub's new-repository page, private, named after the vault), then
**Install Mahfouz on it**. Once both are done, the repository appears under
**Use an existing one**.

**Create and connect** first checks that this computer can push to GitHub
with your own SSH key: the first push uses it, not your GitHub sign-in. If
the check fails, nothing is created; the panel says what to fix (add an SSH
key to GitHub, or run `ssh -T git@github.com` once in Terminal to accept
GitHub's host key) and offers **Check again**.

### Staying signed in

GitHub renews the sign-in automatically while you use Mahfouz's GitHub
features. Each renewal lasts up to six months, so you'll be asked to **Sign
in again**:

- after six months without using them, or
- when GitHub rejects a renewal: for example, because you revoked Mahfouz on
  github.com, or because someone used a copy of your sign-in, which replaces
  yours.

Nothing in your vault is affected, and git sync keeps working. If GitHub
can't be reached while Mahfouz is renewing your sign-in, it keeps the
sign-in and shows "GitHub is temporarily unavailable"; try again later.
Other failed requests show "Couldn't reach GitHub" with the reason.

Until you sign in again, the account button shows a warning dot, and the
notification center a **GitHub sign-in expired** notice.

### Upgrading from an earlier version

If you signed in with an earlier version of Mahfouz, that sign-in keeps
working. The account button shows a warning dot and the notification center an
**Upgrade GitHub connection** notice: sign in once
more to move to the Mahfouz app. The old sign-in is removed only after the
new one is saved. Afterwards you can revoke the old "Mahfouz" entry on
github.com under **Settings → Applications → Authorized OAuth Apps**.

### Signing out

**Sign out** (in the account menu or Collaborators) removes the sign-in from this computer only. To revoke
Mahfouz's access entirely, go to github.com → **Settings → Applications →
Authorized GitHub Apps**.

---

## Git LFS for large media

If a vault will hold large media files, turn on Git LFS for it in Vault
Settings → **Vault**: it shows whether `git-lfs` is installed and
configured for this vault, and an **Enable Git LFS for media** button that
runs `git lfs install --local` and writes a tracking block to
`.gitattributes` for you. This is opt-in per vault, and only affects files
added *after* you enable it — existing committed media isn't migrated
retroactively.

`git-lfs` itself doesn't need to be installed separately: turn on the
**Git LFS** plugin in Preferences → Plugins and Mahfouz downloads and
manages it for you (no Homebrew required — currently Macs only, Apple
Silicon or Intel). If you already have `git-lfs` on your system PATH (e.g. via
Homebrew), Mahfouz detects and uses that instead.

---

## Plugins & registries

Preferences → **Plugins** lists every plugin, grouped by the **registry**
it comes from. A registry is a git repository of plugins, much like a
Homebrew tap. `mahfouz` (github.com/mahfouz-app/plugins) is built in, and
you can add others under **Registries → Add a registry** with a git URL or
a GitHub `owner/repo`.

- **Only add registries you trust.** A plugin can run any code on your
  computer and read or change any vault. Mahfouz warns you before adding
  a registry.
- **Registries live on this computer only**, not in a vault. That way a
  collaborator can never add one to your machine through a commit.
- **Turning a plugin on is per vault**: it's recorded in
  `.config/settings.md` under `## Plugins`, e.g. `mahfouz/mermaid`.
  **Installing is per computer.** If you open a vault that uses a plugin
  this computer doesn't have, the [status bar](#status-bar) asks before
  installing it. **Not now** stops it asking for that vault. If the plugin
  comes from a registry you haven't added, the status bar tells you, but
  the registry is never added for you.
- **Updates wait for you.** Registries are checked at launch (or with
  **Check for updates**). A newer version shows **Update** next to the
  plugin and a pill in the status bar, and nothing changes until you
  approve it. The confirmation says so when an update wants to do
  something new, like run a background process or download from a new
  host.
- A plugin's own page (click its name) shows its version, disk use, the log
  of its background process if it has one, and **Uninstall**.

The built-in `mahfouz` registry has:

- **Mermaid diagrams**: ```` ```mermaid ```` blocks render as diagrams.
- **Draw.io diagrams**: ```` ```drawio ```` blocks render as diagrams. Click
  one, or insert one from the toolbar's **Embed** menu, to edit it in a
  draw.io tab. Changes save back into the note as you go.
- **Git LFS**: see [Git LFS for large media](#git-lfs-for-large-media).

Plugins aren't available on the web: see [What's only in the desktop
app](#whats-only-in-the-desktop-app).

---

## Fields (`!name`)

Type `!` followed by letters anywhere in a note to trigger autocomplete
over your custom fields. Selecting one inserts it in place, once, as fixed
text. Comes seeded with `!today`, `!now`, `!time`, `!iso`, `!uuid`,
`!title`, `!page`, `!total`.

Manage them in Vault Settings → **Fields** — an editable table of
Field / Expansion / Description rows. Expansions support these tokens:

| Token | Expands to |
|---|---|
| `{date:FMT}` | Current date/time, using `YYYY`, `MM`, `DD`, `HH`, `mm`, `ss` — e.g. `{date:YYYY-MM-DD}` |
| `{iso}` | Current timestamp as an ISO 8601 string |
| `{uuid}` | A random UUID |
| `{title}` | The note's title |

Anything else in the expansion passes through as literal text. This lives
in the vault as `.config/fields.md`, a plain Markdown table you can also
hand-edit directly.

Fields also work in a slides template's header or footer (Vault Settings →
**Slides**), or a note's `header` / `footer` attribute, where — unlike in
the editor — they're evaluated fresh every time the note is presented or
exported, so `{date:YYYY-MM-DD}` and friends stay current. Two extra
tokens, `{page}` and `{total}`, are available only there (headers and
footers).

---

## Notifications

Everything Mahfouz has to tell you — exports, plugin installs and updates, errors saving or syncing — collects in the notification center. Open it with the bell button at the right end of the titlebar, next to the AI chat button.

- A dot on the bell means there are notifications you haven't dealt with; hover over the bell to see how many. A ring around it means something is running, and hovering shows what.
- The filter button in the center's header switches between **Unread**, **All** and **Archived** and narrows the list by category; a dot on it means you're not looking at everything unread. The double-check button marks everything read. Click a notification to mark it read, or archive it with ×.
- The pin button in the header keeps the center open as a column on the right, beside your notes; drag its edge to resize it. Pinned, the bell shows and hides the column, and clicking elsewhere or pressing Escape leaves it open. Click the pin again to have it open from the bell instead. The column stays pinned the next time you open Mahfouz.
- A finished PDF export waits in the center with **Open**, **Save…** and **Discard**.
- Errors, and things waiting on you, also pop up briefly in the corner. Closing a pop-up leaves the notification in the center.
- History is kept on this computer for 30 days. It isn't part of your vault.

### Sounds, system notifications and quiet time

Settings → Notifications controls how notifications interrupt you:

- **System notifications** appear only while Mahfouz is in the background, for errors and things waiting on you. They show a title only, never note names or paths.
- **Sounds** play a short tone for errors and things waiting on you. They're off by default.
- **Mute** a category to keep its notifications in the history without pop-ups, sounds or a badge. These settings are saved in `.config/settings.md`, so they follow the vault.

**Do not disturb**, the moon button in the notification center's header, silences everything for an hour, until tomorrow morning, or until you turn it off. It applies to this computer only.

### New versions of Mahfouz

When a new version of Mahfouz is released, a notification tells you which version is out and which one you have. **What's new** opens the release notes; **Download** opens the installer where one is available for your platform. Mahfouz doesn't install anything itself.

- Mahfouz checks at most once a day while it's open. **Mahfouz → Check for Updates…** checks right away and always tells you the result, including when you're up to date.
- If you installed Mahfouz with Homebrew, there's no Download button; the notification shows the command to run instead: `brew upgrade --cask mahfouz`.
- Archive the notification to skip that version. It comes back when a newer one is released.
- To stop the checks entirely, turn off **Automatically check for new versions** in Settings → Notifications. It applies to this computer only. Muting the **App updates** category keeps the checks but silences their notifications.

---

## Settings

**Settings…** (`Cmd/Ctrl+,`, or menu **Mahfouz → Settings…**) — applies
instantly and is stored in `.config/settings.md` (a plain Markdown file
you can hand-edit):

| Setting | Options | Default |
|---|---|---|
| Tab size | 2 or 4 spaces | 4 |
| Color mode | System / Light / Dark | System |
| Font | Serif / Monospace | Serif |
| Line numbers | Shown / Hidden | Hidden |

Sidebar sort order (alphabetical vs. chronological) is also a persisted
preference, toggled from the Sidebar header.

Keyboard shortcuts are also stored in `.config/settings.md` (see below) —
edit the file directly to remap or disable one; blank a binding to
disable it.

Some settings aren't available on the web: see [What's only in the desktop
app](#whats-only-in-the-desktop-app).

---

## Keyboard shortcuts reference

On the web, some of these keys differ: see [Keyboard shortcuts on the
web](#keyboard-shortcuts-on-the-web).

Remappable app shortcuts (`.config/settings.md`, `## Shortcuts` table).
`Mod` = ⌘ on macOS, Ctrl elsewhere:

| Shortcut | Action |
|---|---|
| `Mod+N` | New note (sibling of selection) |
| `Mod+Alt+Shift+N` | New note (child of selection) |
| `Mod+Alt+N` | New note (parent level) |
| `Mod+/` | Open keyboard shortcuts help |
| `Mod+W` | Close active tab |
| `Mod+S` | Manual save + commit |
| `Mod+\` | Toggle left sidebar |
| `Mod+Shift+\` | Toggle right sidebar |
| `Mod+1` | Go to all notes |
| `Mod+2` | Go to bookmarks |
| `Mod+3` | Go to tags |
| `Mod+4` | Go to trash |
| `Mod+5` | Go to search |
| — | Toggle auto-commit for note (no default key) |
| `Mod+Shift+R` | Reveal the active note in Finder / File Explorer (row `reveal_in_file_manager`; an older `reveal_in_finder` row still works and is renamed on the next write) |
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
| `Mod+Shift+K` | Insert link |
| `Mod+Alt+1` / `2` / `3` | Heading 1 / 2 / 3 |
| `Mod+Shift+8` | Bullet list |
| `Mod+Shift+7` | Ordered list |
| `Mod+Shift+9` | Checklist |
| `Mod+Shift+.` | Blockquote |
| `Mod+Shift+M` | Insert media or file |

Other useful bindings: `Tab`/`Enter` inside a checklist or list continue
it; `Cmd/Ctrl+Click` opens a link or wikilink; `[[` triggers wikilink
autocomplete; `!` triggers field autocomplete.

Native menu-only shortcuts (macOS): `Cmd+Shift+N` New Vault, `Cmd+Shift+O`
Open Vault, `Cmd+F` Find and Replace, `Cmd+Shift+L` toggle line numbers.

---

## Status bar

The footer, left to right:

- **Save state** — Idle / Editing… / Saving… / Saved / "Save failed: …"
- **Commit state** — Repo clean / a live "Committing in Ns" countdown /
  Committing… / "Committed Xm ago" / "Commit failed: …"
- An optional transient message (e.g. "Attaching file.png…")
- Right-aligned: the active vault's **sync pill** — "Local only" if no
  remote is connected, or "Synced Xm ago" / "Pushing…" / "Pulling…" /
  "Sync error: …" if it is (hover to see the remote URL).

---

## Tabs

Notes open in a browser-style tab strip: click a tab to switch, click its
`×` (or middle-click) to close, right-click for a context menu.
`Cmd/Ctrl`+click (or middle-click) a Sidebar row to open it in a new tab
without switching away from your current one. History revisions and
Present-as-tab both open as their own read-only/embedded tabs alongside
your regular notes.

---

## Sending feedback

Click the speech-bubble button near the bottom of the left rail, or choose
**Help → Send Feedback…**, to report a bug, suggest an idea, or ask a
question. Pick a kind, give it a title and some details, and press
**Submit**.

Feedback becomes a **public** issue on
[mahfouz-app/docs](https://github.com/mahfouz-app/docs/issues), filed by the
Mahfouz feedback bot whether or not you're signed in to GitHub. Add a way to
reach you in the details if you'd like a reply. Once it's filed, the dialog
links to the new issue.

**Include diagnostics** (on by default) appends the app version, operating
system and CPU architecture, and nothing else. Nothing from your vault or
notes is ever sent. Expand **What's included** to see the exact lines, or
untick the box to leave them out.

On the web, **Send feedback** opens a new issue on GitHub instead: see
[What's only in the desktop app](#whats-only-in-the-desktop-app).
