# Mahfouz docs

The public website and user documentation for [Mahfouz](https://mahfouz.app), served by GitHub Pages at <https://docs.mahfouz.app>.

- [`HELP.md`](HELP.md) is the user guide. It is published at [docs.mahfouz.app/guide](https://docs.mahfouz.app/guide/) and the app's Help menu opens it there; the app doesn't bundle it.
- `_includes/changelog.md` is written by the app's release workflow, not by hand. After every published release it copies the app's changelog here with links into the private app repo removed (`bin/public-changelog` in the app repo). `changelog.md` publishes it at [docs.mahfouz.app/changelog](https://docs.mahfouz.app/changelog/), with an anchor per version (`#v0.8.0`) that the app's About dialog links to.
- `license.md` is the license page, [docs.mahfouz.app/license](https://docs.mahfouz.app/license/).
- `index.html`, `compare/` and `styles.css` are the website.

## How the app uses this repo

The app (`mahfouz-app/app`) doesn't bundle anything from this repo. Its Help menu opens <https://docs.mahfouz.app/guide/>, so a change to the guide is live as soon as it merges here. A feature that changes user-facing behavior updates the guide with a PR here, and the app PR links to it. The app's release workflow writes `_includes/changelog.md` and `version.json`, which the desktop app's update check reads.

## Preview locally

```bash
bundle exec jekyll serve
```

GitHub Pages builds the site with Jekyll. `guide.md` pulls `HELP.md` into the `guide` layout.
