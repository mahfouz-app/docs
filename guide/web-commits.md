---
layout: guide
title: "Commits on the web"
description: "How the web app commits your changes, and read-only vaults."
permalink: /guide/web-commits/
---

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

## Read-only vaults

Some git settings change what git stores, and the web version can't
apply them. A vault that uses one opens **read-only** on the web: you can
read and edit notes, and changes are saved to the folder, but they aren't
committed. Commit them from the desktop app. The notification names the
setting:

- a git filter, such as Git LFS or git-crypt (`filter=` in `.gitattributes`);
- line-ending conversion (`eol=crlf`, or `core.autocrlf` in the repository's
  config), or Windows line endings converted by a setting outside the folder;
- re-encoding (`working-tree-encoding`) or keyword expansion (`ident`);
- sparse checkout, or a file added with `git add -N`.
