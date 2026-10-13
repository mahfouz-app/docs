---
name: Git LFS
description: Store dropped media as Git LFS pointers instead of full binaries.
category: Sync & storage
author: Mahfouz
author_url: https://github.com/mahfouz-app
platforms: [macos]
requires: 0.8.0
source: https://github.com/mahfouz-app/plugins/tree/main/plugins/lfs
---

Downloads and manages `git-lfs` for you, so a vault can keep large media as
Git LFS pointers instead of committing every file in full. No Homebrew
needed.

- Turn Git LFS on per vault in Vault Settings → **Vault** with **Enable
  Git LFS for media**. It only affects files added after you turn it on.
- If you already have `git-lfs` on your PATH, Mahfouz uses that instead.
- Macs only for now, Apple Silicon or Intel.

See [Git LFS for large media](/guide/git/#git-lfs-for-large-media).
