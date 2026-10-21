# Mahfouz docs

The public website and user documentation for [Mahfouz](https://mahfouz.app), served by GitHub Pages at <https://mahfouz.app>. The web app is at <https://web.mahfouz.app>.

- [`guide/`](guide/) is the user guide, one Markdown file per topic. [`_data/guide.yml`](_data/guide.yml) lists the pages in order, in groups; the sidebar, the index page at [mahfouz.app/guide](https://mahfouz.app/guide/) and each page's Previous/Next links are built from it, so a new page goes in both places. Write for users: describe what they see and do, not how the app works inside. The app's Help menu opens the index; the web app links to `/guide/web/`. Link between pages with root-relative URLs (`/guide/git/#git-lfs-for-large-media`).
  - Every guide page shows the release its topic first shipped in next to its title, from `since:` in its front matter (`since: 0.5.0`); a page without one shows no pill. A new page sets it to the release that ships the feature. To mark something that first appeared in a release, add `{% include since.html v="0.12.0" %}` after a heading or at the end of a bullet. On a heading, end the line with an explicit ID so the pill's text stays out of the anchor: `## Find and replace {% include since.html v="0.12.0" %} {#find-and-replace}`.
- `_includes/changelog.md` is written by the app's release workflow, not by hand. After every published release it copies the app's changelog here with links into the private app repo removed (`bin/public-changelog` in the app repo). `changelog.md` publishes it at [mahfouz.app/changelog](https://mahfouz.app/changelog/), with an anchor per version (`#v0.8.0`) that the app's About dialog links to.
- The legal pages are `license.md`, `privacy.md`, `terms.md` and `security.md` ([/license](https://mahfouz.app/license/), [/privacy](https://mahfouz.app/privacy/), [/terms](https://mahfouz.app/terms/), [/security](https://mahfouz.app/security/)), plus `plugins/policy.md` for the plugin registry. When the app starts sending or storing something new, update the privacy page and its effective date in the same PR. [`.github/SECURITY.md`](.github/SECURITY.md) points GitHub's security tab at `/security/`; it lives in `.github/` because a root `SECURITY.md` would clash with `security.md` on a case-insensitive disk. [`.github/ISSUE_TEMPLATE/report-page.yml`](.github/ISSUE_TEMPLATE/report-page.yml) is the form every published page's **Report this page** link opens.
- `acknowledgements.md` lists the open-source components the app ships, from [`_data/third_party.json`](_data/third_party.json). The app's release workflow rewrites that file after each release (its `bin/third-party-notices`, which also writes the licence texts the app ships); don't edit it by hand.
- `index.html`, `compare/` and `styles.css` are the website.
- `plugins/` is the plugin registry, [mahfouz.app/plugins](https://mahfouz.app/plugins/), and `plugins.js` filters it. Each plugin is a file in [`_plugins/`](_plugins/), at `_plugins/<registry>/<plugin id>.md`: its front matter holds the registry's fields (name, description, category, author, platforms, minimum Mahfouz version, source) and its body is the "What it does" section of the plugin's own page, `/plugins/<registry>/<plugin id>/` (layout `_layouts/plugin.html`). [`_data/plugin_options.yml`](_data/plugin_options.yml) lists the allowed categories and platforms, and [`_data/plugin_registries.yml`](_data/plugin_registries.yml) the registries. Plugin authors submit a plugin with a PR that adds its file, as the registry page's "Submit a plugin" section describes. When a plugin in the `mahfouz` registry is added, removed or changes what it does, its platforms or its `mahfouz` range, update its file too.

## How the app uses this repo

The app (`mahfouz-app/app`) doesn't bundle anything from this repo. Its Help menu opens <https://mahfouz.app/guide/>, so a change to the guide is live as soon as it merges here. A feature that changes user-facing behavior updates the guide with a PR here, and the app PR links to it. The app's release workflow writes `_includes/changelog.md` and `version.json`, which the desktop app's update check reads.

## Preview locally

```bash
bundle exec jekyll serve
```

GitHub Pages builds the site with Jekyll. The pages in `guide/` use the `guide` layout.
