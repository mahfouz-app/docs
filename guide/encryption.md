---
layout: guide
title: "Encrypted vaults"
description: "Use a vault encrypted with git-crypt: what's encrypted on GitHub, unlocking it on a new device, and what stays visible."
permalink: /guide/encryption/
---

Mahfouz works with vaults encrypted with
[git-crypt](https://github.com/AGWA/git-crypt). On GitHub, the files are
stored encrypted. On your computer, once the vault is unlocked, they're
plain Markdown, and Mahfouz reads and edits them like any other vault.

The desktop app reads, merges and commits through git-crypt. Everything it
writes to the repository stays encrypted on GitHub, including the notes you
fix in the Merge tab after a conflict and the versions you bring back from
[history or the Trash](/guide/history/).

## What stays visible on GitHub

git-crypt encrypts what's inside your files, not everything about them.
Anyone who can see the repository can still see:

- **File and folder names.** In Mahfouz these come from note titles, so a
  note's title can be read from its file name.
- **Commit messages**, such as `Deleted: <title>`.
- **When files changed**, and how often.

If a title is private, give the note a title that isn't.

## What git-crypt can't do

- **It can't change the key.** Removing someone from the repository
  doesn't take back the key they already have, so they can still decrypt
  everything committed with it, including new commits. To shut someone
  out, move the vault to a new repository with a new key.
- **Earlier commits stay as they were.** Encrypting a vault encrypts it
  from that commit on. What you committed before stays unencrypted in
  history unless you rewrite history or move the vault to a new
  repository.
- **It can't encrypt Git LFS files.** A vault that stores files with Git
  LFS can't be encrypted.
- **Every plugin you install can ask your GPG keys to decrypt.** Plugins
  run together in the app, so any of them can ask for what the Encryption
  plugin asks for. Set up gpg-agent to ask for your passphrase, or a
  YubiKey touch, every time something is decrypted.

The [Encryption plugin](/plugins/) (Mahfouz 0.12.0 or later) shows these
limits, with what stays visible, as its
[terms](/guide/plugins/#plugin-terms) when you install or turn it on, and
again before it encrypts a vault. **Encrypt vault** stays off until you
tick **I accept these terms**.
Its own copy of git-crypt only runs git's filters: to use `git-crypt`
commands in a terminal, install git-crypt itself.

## Setting up encryption

Mahfouz doesn't set up git-crypt for you yet. Use git-crypt's own commands
in a terminal in the vault folder: `git-crypt init` to start encrypting,
then `git-crypt add-gpg-user` to give each person's GPG key access. Its
[README](https://github.com/AGWA/git-crypt#readme) covers the steps,
including which files to encrypt in `.gitattributes`.

## A locked vault {% include since.html v="0.12.0" %} {#a-locked-vault}

When a vault uses git-crypt and this device can't decrypt it, the vault is
locked. That happens when git-crypt isn't set up in this copy of the
repository (a fresh clone, for example), or its key is missing.

A locked vault shows **This vault is encrypted** in the Sidebar. Until it's
unlocked, Mahfouz doesn't index its notes, commit, pull or push, and won't
write its files, so nothing encrypted is ever saved over or sent as
plain text.

### Unlocking a vault

Open a terminal in the vault folder and run one of these:

- `git-crypt unlock`, if your GPG key has been added to the repository.
- `git-crypt unlock /path/to/keyfile`, if you were given a key file.

Then return to Mahfouz. It notices the next time the window gets focus or
the vault syncs, and rebuilds the vault from its files.

On a Mac or Linux, git-crypt saves the command you ran it with in the
vault's git settings, and git runs that command each time it reads or
writes an encrypted file. If you ran a bare `git-crypt unlock`, Mahfouz has
to find `git-crypt` on its own path, and an app started from the Dock or
Finder doesn't see Homebrew's `/opt/homebrew/bin`. To avoid that, unlock
with the full path, which git-crypt saves instead:

```sh
"$(command -v git-crypt)" unlock
```

Add the key file's path after `unlock` if you use one. If the vault is
already unlocked, run this again (with no uncommitted changes) to save the
full path.

## On the web

Mahfouz on the web can't decrypt git-crypt vaults. Opening one shows
**This vault is encrypted with git-crypt. Mahfouz on the web can't decrypt
it, so its notes can't be read or changed here. Open it in Mahfouz for
desktop.**

When you [open a GitHub repository](/guide/web-github/#opening-a-github-repository),
the picker marks encrypted repositories **Encrypted · desktop only**.
