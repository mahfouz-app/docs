---
layout: page
title: Privacy
description: "Your notes stay on your computer. They go to a cloud or an AI only when you choose: a Git remote, an AI agent, or a published page."
permalink: /privacy/
---

*Effective 19 October 2026*

Your notes are files in a folder on your computer, and that's where they
stay. Mahfouz has no cloud of its own, keeps no copy of your notes, and
doesn't send them to an AI. None of it leaves your computer until you
choose one of the options on this page.

Mahfouz sends error reports, timings and usage counts to help find bugs,
never with your notes in them, and you can turn that off: see [Error
reports and usage counts](#error-reports-and-usage-counts). You don't need
an account to use it. We don't sell or share data about you, and we don't
use it for advertising.

This policy is from Influpert LLC, the company that makes Mahfouz. It
covers the desktop app, the web app at [mahfouz.app](https://mahfouz.app),
published pages and this website.

## What stays on your computer

- **Your notes, attachments and history.** A vault is a folder and a git
  repository on your disk. Every version git keeps is there too.
- **Your settings.** Vault settings are in the vault's `.config/` folder;
  the rest are stored on this computer.
- **Your keys.** AI API keys and your GitHub sign-in are kept in the
  macOS keychain.

## What leaves, and only when you choose

| You choose to… | What's sent | Where it goes |
|---|---|---|
| [Sync with a remote](/guide/git/) | The vault's commits | The Git remote you set, such as a private GitHub repository |
| [Sign in to GitHub](/guide/github/) | Requests to create and list repositories | GitHub |
| Use the AI agent | The messages you send and the notes it reads to answer | The provider whose API key you add: Anthropic, OpenAI or OpenRouter |
| [Connect an external agent](/guide/external-agents/) | What the agent reads in the vaults you tick | That agent, such as Claude Code or Codex |
| [Publish a note](/guide/publishing/) | That one note and its images | A public page, at the link you share |
| [Send feedback](/guide/feedback/) | What you write, plus the app version, operating system and CPU architecture if you leave **Include diagnostics** on, and your GitHub login if you tick **Include my GitHub login** | A public GitHub issue, filed through mahfouz.app |
| [Install a plugin](/guide/plugins/) | Requests for the plugin and its files | The repository it's shared from, and the hosts the plugin lists |

Each of these is off until you turn it on:

- **Sync.** A new vault has no remote. Until you add one, its commits
  stay on your computer.
- **The AI agent.** It does nothing until you add your own API key in
  Settings → AI. It then talks to that provider directly, under that
  provider's terms. Mahfouz isn't in between and sees none of it.
- **External agents.** **Allow external agents (MCP)** is off until you
  turn it on, and each agent reaches only the vaults you tick. On the
  desktop, agents connect to the app on your computer only. You choose
  which of their edits wait for you: see [Approval
  modes](/guide/external-agents/#approval-modes).
- **Publishing.** Only the note you publish goes out. The rest of the
  vault, its settings and [people](/guide/people/#privacy) are never sent.
- **Plugins.** A plugin is installed only after you approve it, and it
  can reach only the web addresses it lists.

To stop sharing, remove the remote, delete the API key, revoke the agent,
uninstall the plugin or [unpublish](/guide/publishing/) the note.

## The desktop app checks for updates

The desktop app downloads `docs.mahfouz.app/version.json` to see whether a
newer version is out. The request sends nothing about you or your notes.

## Error reports and usage counts

Unless you turn it off, the desktop app and the web app send:

- **Errors and crashes:** the kind of error, its code, and where in the
  app's code it happened, without the error's message. A desktop crash is
  sent the next time you open the app, with the app version, operating
  system and CPU architecture.
- **Timings:** how long opening the app, syncing, saving, committing and
  pushing take.
- **Counts** of features used, from a fixed list, such as "a note was
  created from the sidebar".
- **A random id for that computer or browser**, not tied to your GitHub
  account or to you.

Note text, titles, attributes, file paths, vault and repository names,
tags, people, commit messages, the plaintext of encrypted notes, your
GitHub account, email address and tokens are never sent, and the screen
is never recorded. Everything sent is built from a fixed list in the app's
code: anything not on it is dropped first.

It goes to Datadog, in the United States, and is kept for at most 30 days.
It's on by default. Turn it off in **Settings → Privacy → Help improve
Mahfouz**: nothing more is sent from that computer or browser, and its
random id is deleted. A crash that happened while it was on is still
reported the next time you open the app. See [Help improve
Mahfouz](/guide/telemetry/).

## Google Fonts in slides templates

A [slides template](/guide/slides/#editing-a-template) font can be a
Google Fonts family, such as Inter. The font then loads from Google
whenever it's drawn: when you present a deck or export it as PDF, and in
the template preview in Settings → Slides, on the desktop and on the web.
Each load sends your IP address and the font's name to Google, under
[Google's privacy policy](https://policies.google.com/privacy). It sends
no note content.

To avoid it, pick a `.woff2` font file instead of a Google family: it's
copied into the vault's `files/` folder and never fetched from Google.

## On the web

At [mahfouz.app](https://mahfouz.app), a folder you open is read and
written by the browser directly. A [GitHub vault](/guide/web-github/) is
kept in the browser's storage, and its sync passes through Mahfouz's
server on its way to GitHub without being stored. The AI agent is
desktop-only. See [Mahfouz on the web](/guide/web/).

## What Mahfouz's server keeps

Mahfouz's server runs on Cloudflare. It keeps only these things, and only
once you use the feature:

- **Your GitHub sign-in on the web.** When you sign in to GitHub at
  mahfouz.app, the server keeps your GitHub account ID, username, name and
  avatar, and the GitHub tokens for your session, encrypted. Your browser
  holds a cookie that identifies the session. The session ends, and all of
  it is deleted, when you sign out or 30 days after you signed in.
- **Published pages.** A note you publish, its images and the page made
  from it are stored until you unpublish it, along with its title, link,
  your GitHub account ID and when it was published. When you unpublish,
  the note, its images and the page are deleted. A short record stays: the
  page's title, link, your GitHub account ID and when it was published and
  unpublished.
- **Agents on the web.** If you connect an agent such as claude.ai to
  mahfouz.app, the server keeps the connection you approved, with its
  tokens stored as hashes, for up to 30 days or until you revoke it. What
  the agent reads and writes passes through to your open tab and isn't
  stored.
- **Request logs.** Like any web server, Cloudflare records requests to
  mahfouz.app and published pages, including the IP address, the address
  requested and the time. We use these logs only to run the service and
  stop abuse, and they're kept for at most a few days.
- **Server errors and timings.** The server sends its own errors and how
  long each request takes to Datadog, kept for at most 30 days. These
  record the kind of request, such as "a published page", never its
  address, so no page title or repository name is in them. The switch in
  Settings → Privacy doesn't cover them.

## Cookies

mahfouz.app sets two cookies, both needed for signing in, and no others:
one that holds your session for up to 30 days, and one that lasts 10
minutes while GitHub sign-in completes. Published pages and this website
set no cookies. This website remembers your Light / Dark choice in your
browser only.

## Who else handles data

- **Cloudflare** hosts mahfouz.app and published pages.
- **Datadog** receives error reports, timings and usage counts from the
  apps and the server, under [Datadog's privacy
  policy](https://www.datadoghq.com/legal/privacy/).
- **GitHub** hosts this website, the app's downloads, feedback issues and
  page reports, and signs you in. It handles data under [GitHub's privacy
  statement](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement).

The services you connect yourself, such as an AI provider or your Git
remote, handle what you send them under their own policies.

## Your choices and rights

You're in control of almost everything: sign out to delete your web
session, unpublish to delete a page, and delete a vault to delete your
notes. To ask what we hold about you, or to have the remaining record of
an unpublished page deleted, email
[privacy@influpert.com](mailto:privacy@influpert.com). Depending on where you
live, you may have the right to access, correct, delete or export your
personal data, and to complain to a data protection authority. We'll
answer within 30 days.

Mahfouz isn't meant for children under 13, and we don't knowingly collect
data from them.

## Changes to this policy

If what Mahfouz collects changes, we'll update this page and its
effective date before the change ships, and note it in the
[changelog](/changelog/).
