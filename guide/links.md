---
layout: guide
title: "Links, tags & search"
description: "Link notes with wikilinks, see backlinks, tag notes and search the vault."
permalink: /guide/links/
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
  count and opens it (see [Note pills](/guide/attributes/#note-pills--the-right-sidebar)).

## Tags

Any `#` immediately followed by a letter (and not inside code) is a tag —
`#project`, `#ideas`, etc. Mahfouz picks tags up automatically:

- The Sidebar's **Tags** view (`Cmd/Ctrl+3`) lists every tag with its note
  count; click one or more to AND-filter notes, "Clear" to reset.
- The lighter-weight **Tag filter** chip row offers the same picker in
  contexts that don't want the full Sidebar view.

## Search

`Cmd/Ctrl+K` opens the search overlay — searches across **all open
vaults** as you type, matching title and body text with
multi-term AND matching, ranked roughly: exact title match, then
title-starts-with, then title contains all terms, then title contains the
whole phrase, then body-only matches. Matched terms are highlighted in the
title and a generated snippet. With an empty query it shows your 8 most
recently edited notes instead. Navigate results with `↑`/`↓` (or
`Ctrl+P`/`Ctrl+N`), `Home`/`End`, and open with `Enter`.
