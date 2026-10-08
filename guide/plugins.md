---
layout: guide
title: "Plugins & registries"
description: "Install plugins such as Mermaid, draw.io and Slidev, and add plugin registries."
permalink: /guide/plugins/
---

Preferences → **Plugins** lists every plugin, grouped by the **registry**
it comes from. A registry is a git repository of plugins, much like a
Homebrew tap. `mahfouz` (github.com/mahfouz-app/plugins) is built in, and
you can add others under **Registries → Add a registry** with a git URL or
a GitHub `owner/repo`.

- **Only add registries you trust.** A plugin can run any code on your
  computer and read or change any vault. Mahfouz warns you before adding
  a registry.
- **Registries live on this computer only**, not in a vault. That way a
  collaborator can never add one to your machine through a commit.
- **Turning a plugin on is per vault**: it's recorded in
  `.config/settings.md` under `## Plugins`, e.g. `mahfouz/mermaid`.
  **Installing is per computer.** If you open a vault that uses a plugin
  this computer doesn't have, the [status bar](/guide/workspace/#status-bar) asks before
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
- **Draw.io diagrams**: ```` ```drawio ```` blocks render as diagrams. Click
  one, or insert one from the toolbar's **Embed** menu, to edit it in a
  draw.io tab. Changes save back into the note as you go.
- **Git LFS**: see [Git LFS for large media](/guide/git/#git-lfs-for-large-media).

Plugins aren't available on the web: see [What's only in the desktop
app](/guide/web/#whats-only-in-the-desktop-app).
