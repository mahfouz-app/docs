---
layout: guide
title: "Help improve Mahfouz"
since: "0.13.0"
description: "The error reports, timings and usage counts Mahfouz sends to find bugs, what it never sends, and how to turn it off."
permalink: /guide/telemetry/
---

## What it is {% include since.html v="0.13.0" %} {#what-it-is}

Mahfouz sends error reports, how long common tasks take, and counts of
the features you use, so bugs and slow spots can be found and fixed. It's
**on by default** and never includes your notes. Turn it off in
**Settings → General → Help improve Mahfouz**; its **What's sent** link
lists what it sends and never sends.

The switch is stored on this computer only, not in the vault, so a
collaborator can't turn it on or off for you. It covers the desktop app
and the web app in that browser.

## What's sent {#whats-sent}

- **Errors.** The kind of error (for example `FsError`), its code when it
  has one (for example `EACCES`), and where in the app's code it happened,
  as function and file names from the app itself. The error's message is
  left out, because messages can name a note or a path.
- **Crashes of the desktop app.** Where in the app's code it stopped, the
  app version, operating system and CPU architecture, sent the next time
  you open Mahfouz. A report saved while the switch was on is still sent
  once, even if you turn the switch off before then; the switch's
  description in Settings → General says so while it's off. {% include since.html v="0.13.0" %}
- **Timings.** How long it takes to open the app, sync a vault, save a
  note, commit and push, in milliseconds.
- **Counts.** That something happened, from a fixed list, such as "a note
  was created from the sidebar" or "a GitHub vault was opened".
- **A random id for this computer**, so reports from one computer can be
  told apart. It isn't tied to your GitHub account, and turning the switch
  off deletes it: turning it back on starts a new one.

Each of these is built from a fixed list in the app's code: anything that
isn't on the list is dropped before it's sent.

## What's never sent {#whats-never-sent}

- Note text, titles, attributes or comments
- File paths, or vault and repository names
- Tags, people, tasks or commit messages
- The plaintext of [encrypted notes](/guide/encryption/)
- Your GitHub account, email address or tokens
- Screen recordings: Mahfouz never records the screen

## Where it goes {#where-it-goes}

Reports go to [Datadog](https://www.datadoghq.com/), in the United States,
which stores them for Influpert LLC. See the [privacy policy](/privacy/).

## Mahfouz's servers {#servers}

The switch covers the apps. Mahfouz's servers, which run the web app and
[published pages](/guide/publishing/), also log their own errors and how
long each request takes, whatever the switch is set to. Those logs record
the kind of request (for example "a published page" or "a sync with
GitHub"), never its address, so a page's title or a repository's name
isn't logged.
