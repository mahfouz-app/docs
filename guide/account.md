---
layout: guide
title: "Your Mahfouz account"
since: "0.23.0"
description: "See who's signed in, copy your account ID for support, and sign out everywhere from Settings → Account."
permalink: /guide/account/
---

{% include since.html v="0.23.0" %}

You sign in to Mahfouz [with GitHub](/guide/github/), and Mahfouz keeps a
Mahfouz account for you: what you publish, share, connect to agents and
pay for belongs to it. **Settings → Account**, the first section of
Settings, shows that account.

## Who's signed in

The top of the page shows your name, your GitHub login and how you're
signed in: **Signed in with GitHub**, or what needs you, such as an
expired sign-in or an organization owner's approval. Signed out, the page
offers **Sign in with GitHub**.

## Your account ID

**Account ID** is your account's own identifier, such as
`01a1a718-8bbf-7e4e-a71f-694847a4ad5c`. Click **Copy** and include it when
you write to support: it lets us find your account without your email or
GitHub login.

The ID isn't secret, but it isn't random either: its first part encodes
the date and time your account was created. Share it only where you'd
share that.

The desktop app shows the ID once it has reached Mahfouz's server; offline,
before it has, the page says it can't show it yet.

## Sign out everywhere

**Sign out** in the account menu signs out of this browser or this
computer only. To sign out everywhere:

- **On the web**, click **Sign out everywhere** in Settings → Account.
  Mahfouz asks first, then ends every browser session, revokes Mahfouz's
  GitHub authorization (which signs the desktop app out too), and
  disconnects [external agents](/guide/external-agents/) connected through
  the web. If it can't confirm that every session ended and that GitHub
  revoked it, it says **Signed out of this browser only**: the desktop app
  and other browsers may still be signed in. Click **Open GitHub settings**
  on that notice and revoke Mahfouz to be sure.
- **In the desktop app**, the same row is **Revoke Mahfouz on GitHub**. It
  opens GitHub's authorized apps page, where revoking Mahfouz signs this
  computer out. Web sessions end from **Sign out everywhere** on the web.

Sign out everywhere ends sessions; it doesn't delete your account, your
[plan](/guide/plan/) or anything you've published.

## Coming soon

Device sessions (a list of where you're signed in, each with its own sign
out) and deleting your account from Settings are coming. Until then, write
to support to delete your account.
