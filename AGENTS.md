# Mahfouz docs

The user guide and website for mahfouz.app (Jekyll). The app lives in
[mahfouz-app/app](https://github.com/mahfouz-app/app).

## Issues: the Mahfouz Issue Tracker, not GitHub Issues

**Stop using GitHub Issues.** Every bug, follow-up, deferred review finding
and feature idea, for this repo and every other mahfouz-app repo, goes into
the **Issue Tracker** database in the **kb** vault (`mahfouz-app/kb`, cloned
at `/Users/o/Projects/github/mahfouz/kb`). Don't run `gh issue create`,
`list`, `edit` or `close`, or `gh api …/issues`. This overrides any skill
or older note that says to file a GitHub issue. The open GitHub issues were
imported into the tracker on 2026-10-24.

- **Where:** the database note `issue_tracker/issue_tracker.md` (id
  `01a16c9ba1b67962b25a4739f187b5cf`); each issue is a child note in
  `issue_tracker/`. Views: All, Open, Board.
- **Columns:** `status` (`Open`, `In Progress`, `Closed`, `Not planned`),
  `labels` (`bug`, `enhancement`), `opened` and `closed` (dates). `number`
  and `github` are for imported issues only; leave them empty. The title
  carries an area prefix (`Guide: …`, `Site: …`); the body is the issue,
  self-contained, with acceptance criteria.
- **How:** through the Mahfouz MCP tools (the kb vault's id from
  `list_vaults`): `query_database` with view `Open` to read, `search_notes`
  to check for a duplicate, `add_database_row` to file (status `Open`, a
  label, `opened` today), `set_attributes` to close (status `Closed`, the
  `closed` date). Without the MCP server, edit the kb clone: a row is
  `issue_tracker/<slug>.md` with frontmatter (`id`: 32 random hex
  characters, `status`, `labels`, `opened`) and a `# Title`; pull, commit,
  push.
- **Rules:** one row per finding, never a checklist row; check for a
  duplicate first; cite the row from the PR by its permalink (`tracked in
  kb: [<title>](<permalink>)`, below); set it Closed when the fix merges;
  don't take a follow-up into the current PR.
- **Permalinks, never paths:** a PR, commit message or PR comment names a
  Mahfouz note (a kb row or any other vault note) by its permalink,
  `https://l.mahfouz.app/<slug>`, never by its path
  (`issue_tracker/<file>.md`). A path breaks when the note is renamed or
  moved and means nothing on GitHub; a permalink opens the note for anyone
  with the vault and offers a clone to anyone who can reach its repository
  ([guide](https://mahfouz.app/guide/permalinks/)). Get it from MCP's
  `read_note` (its `permalink` field), or for a kb row as
  `https://l.mahfouz.app/a0petb` followed by the row's frontmatter `id`
  (`mahfouz-app/kb`'s repo hash is fixed):
  `printf 'https://l.mahfouz.app/a0petb%s\n' "$(sed -n 's/^id: //p' issue_tracker/<file>.md)"`.
  A note whose `id` isn't 32 lowercase hex characters has none: name it by
  its title, not its path.

The app repo's `.riprap/instructions/issue-tracker.md` has the full rules.

## Design

Before changing how a page looks, or adding a page, read
[DESIGN.md](DESIGN.md): the site's style, colour tokens, type, layout and
components. Match it, and update it in the same PR when the design changes.

## Kitchen sink

`_includes/kitchen-sink/` is a sample vault that uses every content feature
Mahfouz supports. The unlisted guide page `guide/kitchen-sink.md`
(/guide/kitchen-sink/) shows each of its notes' source by including them.

Keep it current. Whenever a change adds, changes or removes anything about
how note content is written, rendered or behaves (Markdown syntax, Preview or
Source rendering, published pages, exports, editor behavior on content, a
bug fix in any of those), update the kitchen sink in the same docs PR as the
guide change:

- Add new syntax or behavior where it fits, or in a new section; change or
  remove what changed.
- For a rendering or editing bug fix, make sure the sink holds a case that
  showed the bug.
- Keep it a valid vault: every note has a unique 32-character hex `id`, task
  due dates stay in the future, links point to notes inside the sink, and
  attachments live in its `files/`.
- A new note in the sink goes in the guide page's list too, as an include.
- Don't link to the page from `_data/guide.yml` or any other page yet.
