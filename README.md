# Mahfouz docs

The public website and user documentation for [Mahfouz](https://mahfouz.app), served by GitHub Pages at <https://docs.mahfouz.app>.

- [`HELP.md`](HELP.md) is the user guide. It is published at [docs.mahfouz.app/guide](https://docs.mahfouz.app/guide/) and bundled into the app as in-app help.
- `_includes/changelog.md` is written by the app's release workflow, not by hand. After every published release it copies the app's changelog here with links into the private app repo removed (`bin/public-changelog` in the app repo). `changelog.md` publishes it at [docs.mahfouz.app/changelog](https://docs.mahfouz.app/changelog/), with an anchor per version (`#v0.8.0`) that the app's About dialog links to.
- `license.md` is the license page, [docs.mahfouz.app/license](https://docs.mahfouz.app/license/).
- `index.html`, `compare/` and `styles.css` are the website.

## How the app uses this repo

The app repo (`mahfouz-app/app`) includes this repo as a git submodule at `docs/site` and bundles `HELP.md` from the pinned commit. After you change the guide here, bump the submodule in the app repo so the next release ships the new version.

## Preview locally

```bash
bundle exec jekyll serve
```

GitHub Pages builds the site with Jekyll. `guide.md` pulls `HELP.md` into the `guide` layout.
