---
name: Notion import
description: Import pages, databases, tasks, comments and files from a Notion workspace.
category: Import
author: Mahfouz
author_url: https://github.com/mahfouz-app
platforms: [macos, linux, windows]
requires: 0.12.0
source: https://github.com/mahfouz-app/plugins/tree/main/plugins/notion
---

Adds **Notion** to the Import dialog. It copies a Notion workspace into a
vault through Notion's API, so you don't export anything from Notion first.

- Pages and sub-pages, databases with typed columns, to-dos as tasks,
  comments, mentions, images and files.
- It reads only the pages you share with a Notion internal integration,
  using that integration's token.
- What you get is ordinary notes, added in one commit.

See [Importing from Notion](/guide/import-notion/) to set up the
integration and run an import.
