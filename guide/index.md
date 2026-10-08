---
layout: guide
title: User guide
description: "The Mahfouz user guide: vaults, Markdown editing, Git sync, history, shortcuts, and more."
permalink: /guide/
---

Mahfouz is a cross-platform Markdown PKM (personal knowledge management) app.
Your notes are plain Markdown files in a folder that is also a git
repository — the repo is the source of truth; Mahfouz's local database is
just a rebuildable index on top of it.

**Mahfouz needs git.** If it can't find a usable git when it starts, it
offers to install its own copy, or shows how to install git yourself. See
[Git & sync](/guide/git/#git).

Menu → **Help → Keyboard Shortcuts** (`Cmd/Ctrl+/`) opens a quick-reference
shortcut cheat sheet inside the app. This guide is the long-form manual.

Using Mahfouz in a browser? See [Mahfouz on the web](/guide/web/).

<ul class="guide-index">
{%- for p in site.data.guide %}
  <li><a href="/guide/{{ p.slug }}/">{{ p.title | escape }}</a><p>{{ p.description | escape }}</p></li>
{%- endfor %}
</ul>
