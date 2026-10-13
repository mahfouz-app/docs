---
layout: page
title: Privacy
description: "Your notes stay on your computer. They go to a cloud or an AI only when you choose: a Git remote, an AI agent, or a published page."
permalink: /privacy/
---

Your notes are files in a folder on your computer, and that's where they
stay. Mahfouz has no cloud of its own, keeps no copy of your notes, and
doesn't send them to an AI. Nothing leaves your computer until you choose
one of the options on this page.

Mahfouz also collects no analytics, and you don't need an account to use
it.

## What stays on your computer

- **Your notes, attachments and history.** A vault is a folder and a git
  repository on your disk. Every version git keeps is there too.
- **Your settings.** Vault settings are in the vault's `.config/` folder;
  the rest are stored on this computer.
- **Your keys.** AI API keys and your GitHub sign-in are kept in the
  system keychain.

## What leaves, and only when you choose

| You choose to… | What's sent | Where it goes |
|---|---|---|
| [Sync with a remote](/guide/git/) | The vault's commits | The Git remote you set, such as a private GitHub repository |
| [Sign in to GitHub](/guide/github/) | Requests to create and list repositories | GitHub |
| Use the AI agent | The messages you send and the notes it reads to answer | The provider whose API key you add: Anthropic, OpenAI or OpenRouter |
| [Connect an external agent](/guide/external-agents/) | What the agent reads in the vaults you tick | That agent, such as Claude Code or Codex |
| [Publish a note](/guide/publishing/) | That one note and its images | A public page, at the link you share |
| [Send feedback](/guide/feedback/) | What you write, plus the app version and operating system | A public GitHub issue |

Each of these is off until you turn it on:

- **Sync.** A new vault has no remote. Until you add one, its commits
  stay on your computer.
- **The AI agent.** It does nothing until you add your own API key in
  Settings → AI. It then talks to that provider directly, under that
  provider's terms. Mahfouz isn't in between and sees none of it.
- **External agents.** **Allow external agents (MCP)** is off until you
  turn it on, and each agent reaches only the vaults you tick. You choose
  which of its edits wait for you: see [Approval
  modes](/guide/external-agents/#approval-modes).
- **Publishing.** Only the note you publish goes out. The rest of the
  vault, its settings and [people](/guide/people/#privacy) are never sent.

To stop sharing, remove the remote, delete the API key, revoke the agent
or [unpublish](/guide/publishing/) the note.

## The desktop app checks for updates

The desktop app downloads `docs.mahfouz.app/version.json` to see whether a
newer version is out. The request sends nothing about you or your notes.
Installing or updating a [plugin](/guide/plugins/) downloads it from the
repository it's shared from, and only after you approve it.

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
server on its way to GitHub without being stored. Signing in to GitHub on
the web keeps that sign-in on Mahfouz's server for your browser. The AI
agent is desktop-only. See [Mahfouz on the web](/guide/web/).
