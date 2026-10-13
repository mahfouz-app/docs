---
layout: guide
title: "Spelling check"
description: "See misspelled words as you type, turn checking on or off, and keep a vault dictionary of words to accept."
permalink: /guide/spelling/
---

Misspelled words are underlined as you type. The checking is done by your
system's spell checker: macOS in the desktop app, your browser on the web.
Right-click an underlined word for suggestions.

On the Mac, the language is detected word by word, so English and Arabic
(and any other language you have installed) can be checked in the same
note. Words already in a note are underlined once you edit near them. In
browsers, pasted text isn't checked.

## Turning it on or off

Turn **Check spelling** on or off in Settings → General. It's stored on
this computer only, not in the vault, so it doesn't change anything for
your collaborators.

In the desktop app, the right-click menu also has **Check Spelling While
Typing**, but that only lasts until the app restarts. Use the setting to
turn checking off for good.

## What isn't checked

Code blocks are never checked. On the web in Chrome and Firefox, inline
code, links, wikilinks, tags and mentions aren't checked either. In Safari
and in the desktop app, they can be.

## The vault dictionary

To stop a word from being underlined, put the cursor in it and run **Add
word to vault dictionary** (<kbd>Mod</kbd><kbd>Alt</kbd><kbd>;</kbd>, or
from the [command palette](/guide/command-palette/)). **Remove word from
vault dictionary** takes it out again; it has no default shortcut.

To see every word, open Settings → Vaults, pick the vault, and go to
**Dictionary**. You can add and remove words there too.

The words are saved in the vault as `.config/dictionary.md`, one `- word`
per line, so you can also edit the file by hand. Like the rest of the
vault, the dictionary is shared with everyone who has the vault, and the
words stay in its git history.

- In the desktop app, the words of the vault you're working in apply.
- On the web, the vault dictionary works in Chrome and Firefox, not in
  Safari.

A dictionary entry is a single word: letters, digits and apostrophes, up
to 64 characters. Hyphenated words are checked in halves, so add each half
on its own. A dictionary holds up to 5000 words and 64 KB.

### Vault dictionary or Learn Spelling

The Mac's own **Learn Spelling** teaches only your Mac. The vault
dictionary travels with the vault, to every copy of it and to everyone
who has it.
