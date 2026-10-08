---
layout: guide
title: "Signing in to GitHub"
description: "Connect your GitHub account to create repositories and invite collaborators."
permalink: /guide/github/
---

Signing in lets Mahfouz create repositories for your vaults and manage who
can open them. Click the account button at the bottom of the left rail,
below Settings, and choose **Sign in with GitHub**. (You can also sign in
from **Vault settings → Collaborators**.)

1. Mahfouz shows a short code and opens GitHub. Enter the code and approve
   **Mahfouz**. This signs you in: it authorizes Mahfouz to act for you on
   GitHub, but doesn't yet give it any of your repositories.
2. Installing the Mahfouz app on your repositories is a separate step. Until
   the app is installed, the account menu and Collaborators show **Install
   Mahfouz on your repositories**. Choose **Only select
   repositories** and pick the repositories that hold your vaults. Mahfouz
   can see and manage only the repositories you pick. To change the
   selection later, use **Manage repository access** in the account menu or in
   Collaborators, or go to github.com under **Settings → Applications → Installed GitHub
   Apps**. A repository owned by an organization may need an organization
   owner to approve the installation.

Mahfouz uses the sign-in to create private repositories, list your
repositories, and invite or remove collaborators with Read or Write access.
It never changes a repository's visibility and never deletes one; create a
public repository on github.com and connect it with **Use an existing one**.
The sign-in never pushes or pulls: git sync keeps using your own SSH keys or
credential helper.

The sign-in is stored securely in your system keychain on this computer,
never in your vault.

## The account button

The button at the bottom of the left rail shows your GitHub picture once
you're signed in. A small dot means something needs you:

- **Warning dot**: Mahfouz isn't installed on any of your repositories, your
  sign-in expired (**Sign in again**), or you signed in with an earlier
  version (**Upgrade GitHub connection**).
- **Clock dot** (on the web, once available): an organization owner still
  has to approve installing Mahfouz. The desktop app can't see pending
  approvals, so it never shows this dot.

Its menu shows who you're signed in as and your GitHub connection, plus
**Manage repository access**, **Open GitHub profile** and **Sign out**.

## Adding your vaults' repositories

After you sign in, Mahfouz checks every vault connected to GitHub. If the
Mahfouz app can't see some of their repositories, the notification center
shows one **Add N repositories to Mahfouz** notice listing them, with a
button to the GitHub page where you add them. It lists only repositories you
can add: your own, and those of an organization where Mahfouz is already
installed. For someone else's repository, Collaborators says to ask its
owner instead. **Not now** hides the notice for those repositories; it comes
back if another vault's repository is missing. Mahfouz forgets your **Not
now** choices when you sign out.

## When Collaborators can't manage a repository

- **Accept the invite**: someone invited you to the repository and you
  haven't accepted yet. Open the invitation on GitHub, accept it, and come
  back.
- **Ask the owner to install Mahfouz**: the repository belongs to someone
  else and the Mahfouz app isn't installed on it. Only its owner (or an
  organization owner) can add it.
- **Add this repository**: it's your repository, but it isn't in the
  Mahfouz app's selection yet. **Add this repository to Mahfouz** opens the
  page to add it.
- Only admins of a repository can manage its collaborators.

## Creating a repository for a vault

Creating a repository needs the Mahfouz app installed on your own GitHub
account. Until it is, Collaborators offers two steps on GitHub instead of
**Create and connect**: **Create the repository on GitHub** (it opens
GitHub's new-repository page, private, named after the vault), then
**Install Mahfouz on it**. Once both are done, the repository appears under
**Use an existing one**.

**Create and connect** first checks that this computer can push to GitHub
with your own SSH key: the first push uses it, not your GitHub sign-in. If
the check fails, nothing is created; the panel says what to fix (add an SSH
key to GitHub, or run `ssh -T git@github.com` once in Terminal to accept
GitHub's host key) and offers **Check again**.

## Staying signed in

GitHub renews the sign-in automatically while you use Mahfouz's GitHub
features. Each renewal lasts up to six months, so you'll be asked to **Sign
in again**:

- after six months without using them, or
- when GitHub rejects a renewal: for example, because you revoked Mahfouz on
  github.com, or because someone used a copy of your sign-in, which replaces
  yours.

Nothing in your vault is affected, and git sync keeps working. If GitHub
can't be reached while Mahfouz is renewing your sign-in, it keeps the
sign-in and shows "GitHub is temporarily unavailable"; try again later.
Other failed requests show "Couldn't reach GitHub" with the reason.

Until you sign in again, the account button shows a warning dot, and the
notification center a **GitHub sign-in expired** notice.

## Upgrading from an earlier version

If you signed in with an earlier version of Mahfouz, that sign-in keeps
working. The account button shows a warning dot and the notification center an
**Upgrade GitHub connection** notice: sign in once
more to move to the Mahfouz app. The old sign-in is removed only after the
new one is saved. Afterwards you can revoke the old "Mahfouz" entry on
github.com under **Settings → Applications → Authorized OAuth Apps**.

## Signing out

**Sign out** (in the account menu or Collaborators) removes the sign-in from this computer only. To revoke
Mahfouz's access entirely, go to github.com → **Settings → Applications →
Authorized GitHub Apps**.
