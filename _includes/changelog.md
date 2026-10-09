
## 0.11.0 (2026-10-09) {#v0.11.0}

* fix(ops): adopt the existing staging R2 bucket
* Copy from Preview as formatted text
* feat(tasks): due reminders (4/4)
* Structured git errors, phase 1c: branch-safe pushes and notice actions
* Structured git errors, phase 1b: plain-language notices and Show details
* feat: comment threads (track changes phase 3)
* feat(links): folder-qualified wikilinks and working aliases
* feat(editor): edit links in preview with a popover
* fix: two publish tests broken by the track-changes merge
* fix(editor): media cards replace their markdown line in Preview; drop collapse
* fix(editor): type after line-prefix markup in Preview
* feat: agent edits become suggestions in Suggesting mode (track changes phase 2)
* fix(editor): stop auto-pairing apostrophes
* fix(tabs): shrink tabs to fit, scroll overflow with arrow buttons
* feat(publish): publish a note to p.mahfouz.app with Edit and Copy
* feat(menu): put every app action in the native menu, with keys synced from settings
* fix(db): pass vault ids explicitly instead of a global withVault override
* feat: track changes (suggesting mode), phase 1
* fix(tabs): keep restored and filtered-out tabs open
* Structured git errors, phase 1a: typed errors end to end
* Plugin host APIs for a mermaid.live-style Mermaid editor
* feat: vault mind map as the vault home view
* feat(editor): paste URLs as Markdown links, prompt for the link URL
* fix(desktop): commit as the user, not the Mahfouz placeholder
* fix(web): author commits as the signed-in GitHub account
* feat: rail help icon opens the user guide on the web
* Editable welcome page when no vault is open
* feat: drag a note to another vault (move, ⌥ to copy)
* Callouts (GitHub alerts) in notes
* docs: point CLAUDE.md and AGENTS.md at the guide/ pages


## 0.10.0 (2026-10-08) {#v0.10.0}

* Serve the web app at mahfouz.app; the site moves to docs.mahfouz.app
* docs(changelog): list 0.9.0 by PR title
* ci(release): read BWS from the production environment
* fix(release): one changelog line per PR, titled from the PR


## 0.9.0 (2026-10-08) {#v0.9.0}

* ci(web): a release deploys the web app with the desktop builds
* test(worker): give the receive-pack linear-time test 30 s
* chore(web): drop PR previews; staging is enough
* feat(web): launch the web app in production (M3)
* feat(web): GitHub sign-in, the vault picker and the avatar on the web (M2d)
* feat(web): browser-storage GitHub vaults: clone, pull, reset and chunked push (M2c)
* M2b: git proxy and GitHub API allowlist
* M2a: web sessions and GitHub sign-in in the Worker
* M1g: PR previews, asset-worker kill switch, cross-browser checklist
* M1f: the web shell — Mahfouz boots on the web for local folders
* M1e: web platform I/O (dialogs, drops, watcher, vault assets)
* M1d: web index database (sqlite-wasm in a Worker)
* M1c: web git engine (isomorphic-git over folder handles)
* M1b: browser filesystem (HandleFs, web VaultFs, folder handles)
* M1a: web app Worker, deploy CI and custom domains
* fix(ops): point www at mahfouz-app.github.io so GitHub serves its certificate
* feat(ops): Terraform applies in CI behind an approval; look the zone up
* fix(ui): lower dark-mode scrollbar contrast
* fix(ui): darken scrollbars in dark mode
* fix(settings): reload settings when the active vault changes
* fix(sync): treat a diff rename as delete-old plus add-new
* feat(notifications): click a notification to run its action
* feat(sidebar): name a new folder inline as part of creating it
* fix(desktop): hide the webview's Reload/Inspect Element context menu
* fix(editor): underline markdown link labels like wikilinks
* feat: drag individual list items in Preview
* Folder paths in breadcrumb, folder rename/reveal, sidebar menu, per-OS reveal label
* fix(bin/dev): install workspace dependencies before starting
* Account avatar and app-wide GitHub auth state (web version, step 4c)
* Install a managed git when the machine has none
* fix(plugins): let a plugin ship its own Node.js runtime
* feat: per-note disk-only mode (auto-save without auto-commit)
* Sign in to GitHub with the Mahfouz GitHub App (web version, step 4b)
* Open the user guide on mahfouz.app; remove the docs/site submodule
* feat: show a "Mahfouz needs Git" screen when git is missing
* chore(docs): bump docs/site for note pills and Details
* feat(settings): click a shortcut to rebind it; icon reset button
* fix(sync): reflect external edits and new external files live
* feat(ui): note pills for details, backlinks, tags and attributes
* feat(editor): Tab nests a list item under the one above
* chore(linux): declare git as a .deb/.rpm dependency
* feat: notify when a new Mahfouz version is available
* fix(git): read log paths NUL-delimited so non-ASCII names aren't quoted
* Put the mahfouz.app zone in Terraform (web version, step 3)
* fix(editor): start a bullet list on "- ", "* " or "+ " under a text line
* ci: cache Tauri's apt packages, keyed on the runner image
* Add golden git fixtures (web version, step 2)
* Put Tauri behind a platform interface (web version, step 1)
* Adopt the develop/main branch model in bin/release, CI and docs
* Split src/app into core and desktop workspaces
* Bump docs for the license page
* Publish release notes on mahfouz.app/changelog
* Make the license proprietary to Influpert LLC
* Add an About dialog with release date and links
* Keep list bullets rendered on the cursor line

## 0.8.0 (2026-09-26) {#v0.8.0}

* Stop keychain password prompts on status checks
* Make the agent chat work like Claude Code
* Move the website and user guide to mahfouz-app/docs
* Add a notification center
* Add Send feedback (files a GitHub issue on mahfouz-app/docs)
* Keep the agent's system prompt stable across a conversation
* Keep agent history append-only for preserved thinking
* Headers and footers on slides templates; Commands become Fields
* Add a left rail and rework the titlebar
* Add slides templates for Present and PDF export
* Add Open to the export toast
* Plugin icons, logos and toolbar items
* Keep the changelog at the repo root


## 0.7.0 (2026-09-26) {#v0.7.0}

* Draw.io's edit button opens the diagram editor instead of the raw XML, with draw.io plugin 1.0.2
* Releases are published only once macOS, Windows and Linux have all built


## 0.6.0 (2026-09-26) {#v0.6.0}

* Show a card when an embed fails to render or its plugin fails to load
* Show an Enable/Install card for plugin blocks that can't render
* Hide wikilink brackets in table cells
* Send CORS header from the plugin static server to the app's origins
* Show dots instead of test names in bin/test
* Color plugin name links in Settings with the accent color


## 0.5.0 (2026-09-24) {#v0.5.0}

* Add bin/release and retire release-please
* Run bin/test in CI instead of separate test steps
* Format all Rust code with cargo fmt
* Install riprap guardrails
* Check the published plugin registry with the app's parser in CI
* Move Slidev and PDF export to the plugin registry (sub-project 4b)
* Add command, overlay, export-format and dependency extension points; run Slidev and PDF through them
* Move draw.io to the plugin registry; add plugin tabs (sub-project 3)
* Move Mermaid and Git LFS to the plugin registry (sub-project 2)
* Load plugins from git-based registries (plugin host, sub-project 1)
* Run the frontend tests in CI
* Remove static server test temp dirs on drop
* Fix stray leading space in page-preview headings and task items
* docs: describe the editor toolbar and its More menu accurately
* Fix deprecated depends_on macos: string-comparator syntax in cask template
* Bump @tauri-apps/api to match the tauri crate's minor version


## 0.4.0 (2026-09-24) {#v0.4.0}


### Features

* add a Slidev presentations toggle to the Plugins pane
* add attribute type registry (.config/attributes.md)
* add Attributes toolbar button to reveal right sidebar
* add DiagramEditorPane for full-tab draw.io editing
* add draw.io frontend command wrapper and install/server hook
* add draw.io plugin install mechanism
* add draw.io plugin toggle to Settings
* add drawio plugin setting
* add New Conversation button and history popover to Agent Chat
* always restore tabs on launch instead of prompting
* **assets:** vault-level files/ directory with refcounted cleanup
* attachment/image/audio/video attribute widget
* attribute names open the visibility menu; Rename/Delete for custom rows
* Attributes color rows open the toolbar's color picker
* block and section ranges for drag-to-rearrange
* bulk Attributes section in Vault Settings
* checkbox and color attribute widgets
* count file-typed attribute values toward asset_refs
* date/datetime attribute widget (fixed format / relative display)
* derive Created/Updated attributes from git history, add author rows
* drag blocks and heading sections to re-arrange them
* expand date tokens in per-vault new-note prefix
* fold note details into the Attributes panel as read-only rows
* gate Present and PDF export behind the Slidev plugin toggle
* generate new note IDs as UUIDv7 instead of random base36
* **github:** device-flow auth and repo/collaborator API in Rust
* highlight the sidebar search query in the opened note
* inline Set type / Change type / Make free-form popover
* make font choice a per-note attribute
* make search a sidebar view like Home/Bookmarks/Tags/Trash
* move Git LFS to an opt-in plugin with managed binary install
* multi-select attribute widget (chips/checkboxes display)
* new note H1 placeholder, fix title-rename truncation, drop new-vault prefix global
* per-attribute inline visibility as a frontmatter key suffix
* preview font style in the per-note font pickers
* registry-driven TypedAttributeRow with scalar widgets (text/number/url/email/phone)
* rename Properties to Attributes and keep the panel live
* render Attributes as a collapsible block under the first heading
* render Created by/Last edited by author as a mailto: link
* render draw.io diagrams inline as an embed
* reveal the drag range only on press, and enlarge the grip
* rework right sidebar layout and section toggles
* select attribute widget (segmented/radio display)
* serve the draw.io plugin's static assets from an in-process server
* show vault name in Bookmarks/Tags sidebar views
* sidebar "Add attribute" opens the key/type/options form
* store many conversations per vault instead of one transcript
* sync .config/attributes.md on boot and on diff
* typed widgets for recognized attributes in the Attributes panel
* use underscore id/title separator for new-format note IDs
* validate note attributes against the type registry, drop KNOWN_ATTRIBUTES
* **vault:** file-per-note layout with promotion on first child
* **vault:** manage GitHub collaborators from the vault menu and settings
* **vault:** opt-in migration to file-per-note layout; export follows assets
* visibility menu for the read-only rows (Created, Updated, Path)
* wire diagram tabs into the main tab system


### Bug Fixes

* a click on the drag grip no longer moves the block
* add missing drawio field to PluginSettings in 11 test sites
* add path traversal protection to static file server and remove stray package-lock.json
* address a diagram block by body-fence ordinal, not DOM position
* address DiagramEditorPane review findings
* attribute panel type picker, scalar write storm, date off-by-one
* attribute widget CSS used invented, non-theme-aware variable names
* Attributes settings type dropdown missing grid width/shrink styling
* AttributesSection rename no longer duplicates the attribute
* backfill created_by/updated_by on existing notes after migration
* capitalize app name to "Mahfouz" in productName and release artifacts
* debounce drawio autosave and flush it on close/unmount
* don't highlight the parent section when the pointer is beside a block
* drop a heading's highlight when the pointer leaves its heading line
* eliminate bind-close-rebind race in static server port allocation
* enable draw.io autosave so switching tabs doesn't discard edits
* gate Slidev install/start behind the plugin toggle at the hook level
* give macOS app icon a rounded-square background
* guard deleteConversation against active conversation while running
* handle CRLF line endings in replaceDrawioBlockAt regex
* hide [[ ]] wikilink markers in preview mode
* history popover position/scroll, disable switch/delete mid-turn, guard malformed conversation entries
* hoist EditorToolbar above content-row so it spans the right sidebar
* inline the per-note font picker at half size
* install a plugin's dependency if it's already enabled at boot
* keep diagram: tabs alive and hide the editor toolbar over them
* key the editor by note id, not path, to stop cursor jump on rename
* make sidebar note drag-to-reparent actually drop
* match right-sidebar toggle icon to the left sidebar's
* mount the inline Attributes block only when something is set to show
* name the dev Cargo binary "Mahfouz" so Cmd+Tab shows it capitalized
* open the draw.io editor tab immediately after toolbar insert
* remove unused AttributeTypeDef import in AttributesPanel.test.ts
* rename file/folder (not content) when sidebar name comes from directory
* render the "Add attribute" form inline instead of as a floating popover
* reset settingsInitialSection on Settings modal close
* resolve attribute types per vault when indexing asset refs
* scope Trash view per-vault like Home
* seed orientation Select options as lowercase, matching real stored values
* seed the attribute-type registry in AttributesPanel.test.ts
* serialize concurrent draw.io installs with mutex and atomic counter
* show where a dragged table row or column will land
* shrink app icon to sit within macOS icon safe area
* sidebar title stays live with H1 edits until an explicit rename
* sort preview-mode decoration entries before building range set
* stop right-click from selecting text in sidebars and empty editor
* stop the autosave debounce from being defeated by re-renders
* stop the autostarted Slidev server when the plugin is off
* surface diagram save failures and stream install progress
* sweep empty ancestor directories after leaf note deletion


### Reverts

* remove bundled-resource install path from slidev.rs
* remove dead bundled-install branching from Slidev progress UI
* remove Slidev vendoring script and bundled-resource build config


## 0.3.0 (2026-04-28) {#v0.3.0}


### Features

* **settings:** per-vault settings modal + gear icon next to repo
* **vault-settings:** rename Sync→Vault, add "Move vault…" button

## 0.2.0 (2026-04-28) {#v0.2.0}


### Features

* AND-filter multiple tags, trash preview strips frontmatter
* context menus, permanent delete, tag drill-in, nav cleanup
* direct git push/pull (Phase 2 slice 1) + default .gitignore
* drag-and-drop + paste media into vault, gutter chevron for collapse
* **editor:** CodeMirror 6 with iA Writer-style muted theme
* git-native trash with in-editor preview, NavRail reshuffle
* icon-only navigation rail with Home/Search and Trash/Help/Settings
* media cards, slug ids, optimistic I/O, restore-from-trash banner
* **multi-vault:** per-vault engines: sync, auto-commit, remote (phase 2/4)
* **multi-vault:** vault registry + vault-scoped schema (phase 1/4)
* native macOS menu bar with App &gt; Settings… (⌘,)
* **navrail:** trash list back in sidebar, active highlight, divider
* nesting, bookmarks, commands, meta files, resizable sidebars
* page actions — pin and delete the current note
* Phase 1 desktop MVP — DB-backed notes, live preview, Tahoe sidebar
* properties, history, revision tabs, collapsible sections, nav additions
* right sidebar, help modal, settings screen + extra shortcuts
* **right-sidebar:** Table of Contents + Note Details panels
* **search:** Cmd+K command palette with sidebar + titlebar entry points
* **sidebar:** hover-revealed pin/delete per item + matched footer button
* **sidebar:** show connected repo as header label instead of "Local"
* status bar, settings sections, editable commands, Cmd+S, focus reload
* tabs above the editor
* Trash view, single-click delete, sidebar footer toolbar
* vault sync engine, shortcuts in settings, top-bar search, media rendering
* **vault:** debounced auto-commit after writes
* **vault:** per-note folders + trash dot indicator
* **vault:** persist notes to disk in a local git repo
* wikilinks, backlinks, tags + tag filter, editor tag highlighting


### Bug Fixes

* collapse nested if in walk_md to satisfy clippy
* **editor:** enable autocorrect + spellcheck so macOS text replacements fire
* **history:** commit restored revision immediately with a Restored message
