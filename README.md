# Mahfouz docs

The public website and user documentation for [Mahfouz](https://mahfouz.app), served by GitHub Pages at <https://docs.mahfouz.app>.

- [`guide/`](guide/) is the user guide, one Markdown file per topic. [`_data/guide.yml`](_data/guide.yml) lists the pages in order; the index page at [docs.mahfouz.app/guide](https://docs.mahfouz.app/guide/) and each page's Previous/Next links are built from it, so a new page goes in both places. The app's Help menu opens the index; the web app links to `/guide/web/`. Link between pages with root-relative URLs (`/guide/git/#git-lfs-for-large-media`).
- `_includes/changelog.md` is written by the app's release workflow, not by hand. After every published release it copies the app's changelog here with links into the private app repo removed (`bin/public-changelog` in the app repo). `changelog.md` publishes it at [docs.mahfouz.app/changelog](https://docs.mahfouz.app/changelog/), with an anchor per version (`#v0.8.0`) that the app's About dialog links to.
- `license.md` is the license page, [docs.mahfouz.app/license](https://docs.mahfouz.app/license/).
- `index.html`, `compare/` and `styles.css` are the website.

## How the app uses this repo

The app (`mahfouz-app/app`) doesn't bundle anything from this repo. Its Help menu opens <https://docs.mahfouz.app/guide/>, so a change to the guide is live as soon as it merges here. A feature that changes user-facing behavior updates the guide with a PR here, and the app PR links to it. The app's release workflow writes `_includes/changelog.md` and `version.json`, which the desktop app's update check reads.

## Preview locally

```bash
bundle exec jekyll serve
```

GitHub Pages builds the site with Jekyll. The pages in `guide/` use the `guide` layout.
