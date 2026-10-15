---
layout: guide
title: User guide
description: "The Mahfouz user guide: vaults, Markdown editing, Git sync, history, shortcuts, and more."
permalink: /guide/
---

Mahfouz is a cross-platform Markdown PKM (personal knowledge management) app.
Your notes are plain Markdown files in a folder that is also a git
repository; those files are the source of truth, and everything Mahfouz
shows you comes from them.

**Mahfouz needs git.** If it can't find a usable git when it starts, it
offers to install its own copy, or shows how to install git yourself. See
[Git & sync](/guide/git/#git).

This guide is the long-form manual. To open it from the app, choose **User
guide** in the account menu (click the account button at the bottom of the
left rail; on desktop, also **Help → User Guide**). On a phone, it's **User
guide** in the **⋯** menu at the top right. **Keyboard shortcuts** in the
account menu (<kbd>Mod</kbd><kbd>?</kbd>, or on desktop **Help → Keyboard
Shortcuts**) opens a quick-reference shortcut cheat sheet inside the app.

Your notes never leave your computer unless you send them somewhere: to a
Git remote, an AI agent or a published page. See [Privacy: where your notes
go](/privacy/).

Using Mahfouz in a browser? See [Mahfouz on the web](/guide/web/).

{%- for g in site.data.guide %}
<h2>{{ g.group | escape }}</h2>
<ul class="guide-index">
{%- for p in g.pages %}
  <li><a href="/guide/{{ p.slug }}/">{{ p.title | escape }}</a><p>{{ p.description | escape }}</p></li>
{%- endfor %}
</ul>
{%- endfor %}
