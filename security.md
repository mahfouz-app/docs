---
layout: page
title: Security
description: "How to report a security problem in Mahfouz, what's in scope, and how Mahfouz protects your notes and sign-ins."
permalink: /security/
---

If you've found a security problem in Mahfouz, please tell us privately
first, so we can fix it before it's public. Don't open a GitHub issue or
send feedback from the app for it: both are public.

## Report a vulnerability

Email [security@influpert.com](mailto:security@influpert.com) with:

- what the problem is, and what someone could do with it;
- the steps to reproduce it, or a proof of concept;
- the Mahfouz version and operating system, or the address on web.mahfouz.app;
- whether, and how, you'd like to be credited.

We'll confirm we've received your report within 3 business days, and keep
you updated until it's fixed. Please give us 90 days to ship a fix before
you share details, unless we agree on another date together. Once the fix
is out, we'll credit you in the [changelog](/changelog/) if you'd like.

We don't offer a bug bounty.

## In scope

- The Mahfouz desktop app, in its latest release.
- The web app at `web.mahfouz.app` and Mahfouz's server, including
  `api.mahfouz.app`, which the desktop app uses to publish and send
  feedback.
- Published pages at `p.mahfouz.app`.
- This website, `mahfouz.app`, and the official `mahfouz` [plugin
  registry](/plugins/).

Only the latest release gets security fixes, so check the problem is
still there in it.

## Out of scope

- Plugins and registries made by other people. Report those to their
  authors.
- Problems in GitHub, Cloudflare, an AI provider or another service
  Mahfouz connects to. Report those to that service.
- Denial-of-service and load testing, spam, and social engineering of us
  or our users.
- Reports from automated scanners, or about missing headers or settings,
  without a way to use them.
- Anything that needs an already compromised device or account.

## Testing safely

While you look for a problem, please:

- test only against your own vaults, accounts and published pages;
- not read, change or delete anyone else's data, and stop as soon as you
  reach any;
- not degrade Mahfouz's web app or server for other people.

If you act in good faith and follow this policy, we won't take legal
action against you or ask anyone else to, and we'll treat your research as
authorized.

## How Mahfouz protects you

- **Your notes stay local.** A vault is a folder on your computer. Nothing
  leaves it unless you set up sync, publishing, an AI provider, an agent or
  a plugin. See [Privacy](/privacy/).
- **Your keys are in the keychain.** AI API keys and your GitHub sign-in
  are kept in the macOS keychain, not in your vault or in a settings file.
- **Encrypted vaults.** A vault can be [encrypted with
  git-crypt](/guide/encryption/), so its notes are unreadable on GitHub.
- **Agents are off until you allow them.** On the desktop, external agents
  connect only from your own computer, reach only the vaults you tick, and
  their edits can wait for your approval. See [External
  agents](/guide/external-agents/).
- **You approve each plugin.** A plugin is installed, and updated, only
  when you approve it, its files are checked against their recorded
  checksums, and it can reach only the web addresses it lists. A plugin
  still runs inside the app with access to your vaults, so install only
  plugins you trust.
- **Sign-ins on the web are protected.** At web.mahfouz.app your GitHub tokens
  stay on the server, encrypted, and never reach the browser. Your session
  cookie can't be read by scripts or sent from other sites, and it ends 30
  days after you sign in. Requests that change something must come from
  web.mahfouz.app itself.
- **Feedback is filed by Mahfouz's server.** The bot account that files
  feedback issues keeps its token on the server; the app carries none.
  Your GitHub sign-in goes along only when you choose to include your
  login, and only so the server can check it with GitHub.
- **Published pages are kept apart.** Pages live on their own domain,
  `p.mahfouz.app`, with a strict content security policy, so a page can't
  reach your web.mahfouz.app session.
- **Strict web settings.** web.mahfouz.app uses HTTPS only, a content security
  policy that lets it talk only to itself, and refuses to be framed by
  other sites.

