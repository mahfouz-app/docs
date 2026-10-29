---
layout: guide
title: "Images & attachments"
since: "0.2.0"
description: "Add images, video, audio and other files to notes, and how Mahfouz stores them."
permalink: /guide/media/
---

- **Embedding**: `![alt text](path)` on its own line renders inline as an
  image, video, or audio player, chosen automatically from the file
  extension (video: mp4/webm/ogv/mov/m4v; audio: mp3/wav/ogg/oga/m4a/flac/
  aac; anything else: image). In Preview mode the embed takes the place of
  its line; in Source mode the line stays visible above the embed. To
  change the path or alt text, switch to Source.
- **From the keyboard** {% include since.html v="0.20.0" %}: in Preview,
  <kbd>↓</kbd> or <kbd>↑</kbd> from the next line moves onto an image or
  media card, then to its **Replace** and **Delete** buttons.
  <kbd>Enter</kbd> or <kbd>Space</kbd> on the card, or
  <kbd>Mod</kbd><kbd>.</kbd> on the image's line, opens its menu:
  **Replace file…**, **Width** (**25%**, **50%**, **75%** or **Full
  width**, the same width dragging the handle sets, kept on this device),
  **Copy path** and **Delete**. A read-only note, or a shared note you can
  only comment on, has no Replace or Delete. See [Writing from the
  keyboard](/guide/keyboard-writing/#images-and-media).
- **Adding files**: drag a file from the OS onto the editor, paste a file
  from your clipboard (e.g. a screenshot), or use the toolbar's **Insert
  media or file** button. The file is copied into the vault-level `files/`
  folder under a cleaned-up name (with a short suffix if that name is
  taken), and a `![Name](/files/file.ext)`
  (media) or `[Name](/files/file.ext)` (other files) line is inserted at
  your cursor. The link is the same wherever the note later moves.
- **Paths**: a path starting with `/` resolves from the vault root; any
  other relative path resolves against the note's own folder (you can't
  reach outside the vault with `../../`). `file:` URLs are rejected.
  `data:` URIs render directly.
- **Remote images**: `http(s)://` image URLs only render if you've turned
  on **"Render external images in this note"** in the
  [Attributes panel](/guide/attributes/#attributes-panel), off by default, per note.
- **Cleanup**: if you delete an embed line (or the note itself), Mahfouz
  removes the underlying file from disk automatically, but only if no
  other note in the vault still references it. Only files under `files/`
  (or, for older vaults, beside the note) are ever removed this way.
- **Markdown export** copies the note (and, optionally, its children) plus
  the attachments they reference, keeping `/files/…` links valid with the
  export folder as the root.
- **Pasting a URL** inserts a Markdown link with the URL as its text
  (`[https://example.com](https://example.com)`). Paste it over selected
  text to link that text instead (`[text](https://example.com)`). Inside
  code or an existing link, the URL is pasted as plain text.
- **Link titles**: after pasting a URL, press **Tab** while the
  "Tab → title" hint is showing to replace the link text with the page's
  title (`[Title](url)`).
