---
layout: guide
title: "Spelling check"
since: "0.12.0"
description: "See misspelled words as you type, turn checking on or off, and keep a vault dictionary of words to accept."
permalink: /guide/spelling/
---

Misspelled words are underlined as you type. The checking is done by your
system's spell checker: macOS in the desktop app, your browser on the web.
Right-click an underlined word for suggestions.

The system also picks the language; Mahfouz has no language setting. On
the Mac, each paragraph is checked in the language it's mostly written in,
from your Mac's spelling languages, so an English paragraph and an Arabic
paragraph can sit in the same note. In a paragraph that mixes them,
misspellings in the less-used language can be missed. English is checked as
American English, so British spellings such as "colour" are underlined: add
the ones you use to the vault dictionary. In a browser, the languages are
the ones turned on in its spelling settings.

Words already in a note are underlined once you edit near them. In
browsers, pasted text isn't checked.

## Turning it on or off

Turn **Check spelling** on or off in Settings → General. It's stored on
this computer only, not in the vault, so it doesn't change anything for
your collaborators.

In the desktop app, the right-click menu also has **Check Spelling While
Typing**, but that only lasts until the app restarts. Use the setting to
turn checking off for good.

## Text substitutions

In the desktop app on macOS, the editor applies your Text Replacements
(System Settings → Keyboard → Text Replacements): type a shortcut and a
space, and it's replaced, with the cursor after the space. They don't apply
in code blocks. {% include since.html v="0.14.0" %}

The other macOS text substitutions are off: smart quotes, smart dashes,
automatic spelling correction and link detection. What you type stays as
typed, so `it's` keeps its straight apostrophe and `--` stays two hyphens.
Misspelled words are still underlined; they just aren't corrected for you.

The right-click menu's **Substitutions** submenu can turn one back on, but
only until the app restarts.

## What isn't checked

Code blocks are never checked. On the web in Chrome and Firefox, inline
code, links, wikilinks, tags and mentions aren't checked either. In Safari
and in the desktop app, they can be.

## The vault dictionary {% include since.html v="0.12.0" %} {#the-vault-dictionary}

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
