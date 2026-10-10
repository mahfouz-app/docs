---
layout: guide
title: "Plugins & registries"
description: "Install plugins such as Mermaid, draw.io and Slidev, and add plugin registries."
permalink: /guide/plugins/
---

Preferences → **Plugins** lists every plugin, grouped by the **registry**
it comes from. A registry is a git repository of plugins. `mahfouz` (github.com/mahfouz-app/plugins) is built in, and
you can add others under **Registries → Add a registry** with a git URL or
a GitHub `owner/repo`.

- **Only add registries you trust.** A plugin can run any code on your
  computer and read or change any vault. Mahfouz warns you before adding
  a registry.
- **Registries live on this computer only** (on the web, in this browser),
  not in a vault. That way a collaborator can never add one to your
  machine through a commit.
- **Turning a plugin on is per vault**: it's recorded in
  `.config/settings.md` under `## Plugins`, e.g. `mahfouz/mermaid`.
  **Installing is per computer.** If you open a vault that uses a plugin
  this computer doesn't have, the [status bar](/guide/tabs/#status-bar) asks before
  installing it. **Not now** stops it asking for that vault. If the plugin
  comes from a registry you haven't added, the status bar tells you, but
  the registry is never added for you.
- **Updates wait for you.** Registries are checked at launch (or with
  **Check for updates**). A newer version shows **Update** next to the
  plugin and a pill in the status bar, and nothing changes until you
  approve it. The confirmation says so when an update wants to do
  something new, like run a background process or download from a new
  host.
- A plugin's own page (click its name) shows its version, disk use, the log
  of its background process if it has one, and **Uninstall**.

The built-in `mahfouz` registry has:

- **Mermaid diagrams**: ```` ```mermaid ```` blocks render as diagrams.
  A diagram's edit button, or inserting one from the **Embed** menu, opens
  it in a Mermaid tab: the source on the left, a live preview on the right.
  - Changes save back into the note as you type.
  - While the source has an error, the last good diagram stays visible,
    the error shows under it, and the line is marked.
  - The tab's toolbar has **Samples** to start from a template (flowchart,
    sequence, class, state, ER, Gantt, pie, mind map, timeline), zoom and
    **Fit**, **Export SVG**, **Export PNG** and **Copy SVG**.
  - Mermaid's own `---config:---` header at the top of the source sets the
    diagram's theme and options, and is saved with it.
  - If the diagram changes in the note while its tab is open, the tab
    stops saving and offers **Copy my version** or **Reload from note**,
    so neither edit is overwritten.
- **Draw.io diagrams**: ```` ```drawio ```` blocks render as diagrams. Click
  one, or insert one from the toolbar's **Embed** menu, to edit it in a
  draw.io tab. Changes save back into the note as you go.
- **Git LFS**: see [Git LFS for large media](/guide/git/#git-lfs-for-large-media).

## Plugins on the web

Preferences → **Plugins** works the same way on [the web](/guide/web/):
turn plugins on per vault, add registries, and install and update plugins.
A few things differ:

- **Installing needs a GitHub sign-in.** Installing or updating a plugin,
  or adding a registry, asks you to [sign in with
  GitHub](/guide/web-github/#signing-in-with-github). Plugins you've
  already installed keep working while you're signed out.
- **Registries must be GitHub repositories.**
- **Plugins are kept in this browser's storage**, not in the vault, and
  not on your other browsers or devices. Clearing the site's data removes
  them; they install again when a vault turns them on.
- **Only some plugins run in a browser.** Mermaid diagrams and Draw.io
  work on the web. Slidev presentations, PDF export and Git LFS run
  programs on your computer, so they're desktop only and show **Desktop
  only** in the list. A vault that turns them on in the desktop app isn't
  affected.
- **Draw.io is a large download**, around 150 MB of files, so installing it
  in the browser may take a while.
- **Safari before version 26 can't store plugins.** Use a current Chrome,
  Edge, Firefox or Safari, or the desktop app.
- **Reload after an update.** After you update a plugin, reload the page
  to use the new version.
- **Saving downloads a file.** A plugin's save or export button, such as
  Mermaid's **Export SVG**, downloads the file through the browser.

Plugins from a registry you add run inside Mahfouz with your session: they
can reach your vaults and the GitHub repositories your account can reach.
Only add registries you trust.
