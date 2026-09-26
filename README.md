# Mahfouz docs

The public website and user documentation for [Mahfouz](https://mahfouz.app), served by GitHub Pages at <https://mahfouz.app>.

- [`HELP.md`](HELP.md) is the user guide. It is published at [mahfouz.app/guide](https://mahfouz.app/guide/) and bundled into the app as in-app help.
- `index.html`, `compare/` and `styles.css` are the website.

## How the app uses this repo

The app repo (`mahfouz-app/app`) includes this repo as a git submodule at `docs/site` and bundles `HELP.md` from the pinned commit. After you change the guide here, bump the submodule in the app repo so the next release ships the new version.

## Preview locally

```bash
bundle exec jekyll serve
```

GitHub Pages builds the site with Jekyll. `guide.md` pulls `HELP.md` into the `guide` layout.
