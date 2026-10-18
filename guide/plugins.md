---
layout: guide
title: "Plugins & registries"
description: "Install plugins such as Mermaid, draw.io and Slidev, and add plugin registries."
permalink: /guide/plugins/
---

Settings → **Plugins** lists every plugin, grouped by the **registry**
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
  this computer doesn't have, a [notification](/guide/notifications/) asks
  before installing it. **Not now** stops it asking for that vault. If the
  plugin comes from a registry you haven't added, a notification tells you,
  but the registry is never added for you.
- **Updates wait for you.** Registries are checked at launch (or with
  **Check for updates**). A newer version shows **Update** next to the
  plugin and a notification, and nothing changes until you
  approve it. The confirmation says so when an update wants to do
  something new, like run a background process or download from a new
  host.
- A plugin's own page (click its name) shows its version, disk use, the log
  of its background process if it has one, and **Uninstall**.

The [plugin registry](/plugins/) lists every plugin submitted for
Mahfouz, from the built-in registry and others, and you can filter it by
category, platform, registry and author.

## Plugin terms {% include since.html v="0.13.0" %} {#plugin-terms}

Some plugins have terms you accept before using them. Before Mahfouz
installs, turns on or updates such a plugin, it shows the terms with an
**I accept these terms** checkbox, and the confirm button works only once
you tick it. This happens wherever you turn the plugin on: the switch in
Settings → **Plugins**, the plugin's setup wizard, or an **Enable** button
in a note. **Cancel** leaves everything as it was.

- **Acceptance is remembered on this computer**, not in the vault, so each
  collaborator accepts for themselves.
- **You're asked again only when the terms change.** A new version with the
  same terms doesn't ask.
- **A plugin's dependencies show their terms too.** Installing PDF export,
  for example, also shows Slidev presentations' terms if it has any.
- **A vault can't skip the question.** If a vault turns on an installed
  plugin whose terms you haven't accepted on this computer, the plugin
  doesn't load, and a [notification](/guide/notifications/), "Accept
  ⟨plugin⟩'s terms to use it", offers **Review terms**.

Plugin authors add terms with `"terms": "terms.md"` in the plugin's
manifest: a Markdown file in the plugin, at most 16 KB. It's shown as text
with headings, paragraphs and `-` bullets; inline Markdown such as
`**bold**` or links appears as written. Terms need Mahfouz 0.13.0 or later.

## Installing from the plugin registry {% include since.html v="0.12.0" %} {#installing-from-the-plugin-registry}

Each plugin in the [plugin registry](/plugins/) has an **Install** button.
It opens [the web app](/guide/web/), which offers:

- **Open in Mahfouz**: opens the desktop app, which asks before
  installing. If you don't have the desktop app, nothing happens.
- **Install in this browser**: for plugins that run on the web. It needs a
  [GitHub sign-in](/guide/web-github/#signing-in-with-github).
- **Download Mahfouz**: for the desktop app.

An install link never installs anything or adds a registry on its own:

- **The desktop app asks first.** It shows the plugin, its registry and
  the warning that a plugin can run any code on your computer, and
  installs only when you click **Install**. If the plugin is already
  installed, it says so and offers **Update** when a newer version is
  waiting.
- **A registry you haven't added gets the usual warning.** It's added
  only if you click **Add**, and then you're asked about the plugin
  itself.
- **A link can't replace a registry you have.** If you already added a
  different registry with the same name, the link is refused.
- **Turning the plugin on is still a separate step.** After it installs,
  turn it on for each vault in Settings → **Plugins**.

Plugin authors can link to their own plugins the same way. The
`registry` part can be left out for the built-in `mahfouz` registry:

```text
https://mahfouz.app/plugins/install?plugin=<registry>/<plugin>&registry=<git URL or owner/repo>
```

The desktop app also opens the same link with `mahfouz://` in place of
`https://mahfouz.app/`. A link's registry must be a GitHub `owner/repo` or
an `https://` git URL.

## The built-in registry

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
- **Notion import**: adds Notion to the Import dialog. See
  [Importing from Notion](/guide/import-notion/). {% include since.html v="0.12.0" %}

## Plugins on the web {% include since.html v="0.12.0" %} {#plugins-on-the-web}

Settings → **Plugins** works the same way on [the web](/guide/web/):
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
  programs on your computer, and Notion import reaches Notion through the
  desktop app, so they're desktop only and show **Desktop only** in the
  list. A vault that turns them on in the desktop app isn't
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
