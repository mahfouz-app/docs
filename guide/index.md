---
layout: guide
title: User guide
description: "The Mahfouz user guide: vaults, Markdown editing, Git sync, history, shortcuts, and more."
permalink: /guide/
---

Mahfouz is a cross-platform Markdown PKM (personal knowledge management) app.
Your notes are plain Markdown files in a folder that is also a git
repository — those files are the source of truth, and everything Mahfouz
shows you comes from them.

**Mahfouz needs git.** If it can't find a usable git when it starts, it
offers to install its own copy, or shows how to install git yourself. See
[Git & sync](/guide/git/#git).

This guide is the long-form manual. To open it from the app, click the **?**
button near the bottom of the left rail (on desktop, also **Help → User
Guide**).
Menu → **Help → Keyboard Shortcuts** (<kbd>Cmd/Ctrl</kbd><kbd>?</kbd>) opens a quick-reference
shortcut cheat sheet inside the app.

Using Mahfouz in a browser? See [Mahfouz on the web](/guide/web/).

{%- for g in site.data.guide %}
<h2>{{ g.group | escape }}</h2>
<ul class="guide-index">
{%- for p in g.pages %}
  <li><a href="/guide/{{ p.slug }}/">{{ p.title | escape }}</a><p>{{ p.description | escape }}</p></li>
{%- endfor %}
</ul>
{%- endfor %}
