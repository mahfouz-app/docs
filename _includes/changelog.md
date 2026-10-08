
## 0.9.0 (2026-10-08) {#v0.9.0}

* Merge pull request #104 from mahfouz-app/claude/web-deploy-on-release
* Merge pull request #105 from mahfouz-app/claude/receive-pack-timeout
* Merge pull request #98 from mahfouz-app/claude/web-no-previews
* Merge pull request #97 from mahfouz-app/claude/web-launch
* Merge pull request #96 from mahfouz-app/claude/web-github-ui
* Merge pull request #95 from mahfouz-app/claude/web-opfs
* Merge pull request #94 from mahfouz-app/claude/web-gitproxy
* Merge pull request #93 from mahfouz-app/claude/web-session
* Merge pull request #90 from mahfouz-app/claude/web-preview
* Merge pull request #86 from mahfouz-app/claude/web-shell
* Merge pull request #85 from mahfouz-app/claude/web-io
* Merge pull request #84 from mahfouz-app/claude/web-sqlite
* Merge pull request #83 from mahfouz-app/claude/web-git
* Merge pull request #82 from mahfouz-app/claude/web-handlefs
* Merge pull request #75 from mahfouz-app/claude/web-deploy
* Merge pull request #102 from mahfouz-app/claude/www-github-io
* Merge pull request #99 from mahfouz-app/claude/terraform-ci
* Merge pull request #92 from mahfouz-app/claude/dark-scrollbar-contrast
* Merge pull request #91 from mahfouz-app/claude/mahfouz-dark-scrollbars-0a6c42
* Merge pull request #89 from mahfouz-app/claude/settings-follow-active-vault
* Merge pull request #87 from mahfouz-app/claude/sync-rename-dotdir
* Merge pull request #81 from mahfouz-app/claude/notification-actions-09eafc
* Merge pull request #80 from mahfouz-app/claude/default-folder-rename-5fbd97
* Merge pull request #79 from mahfouz-app/claude/no-webview-context-menu
* Merge pull request #78 from mahfouz-app/claude/link-label-underline
* Merge pull request #77 from mahfouz-app/claude/list-item-drag
* Merge pull request #76 from mahfouz-app/claude/folders-breadcrumb-reveal
* Merge pull request #74 from mahfouz-app/claude/bin-dev-install
* Merge pull request #73 from mahfouz-app/claude/account-avatar
* Merge pull request #71 from mahfouz-app/claude/mahfouz-git-install-e023ab
* Merge pull request #69 from mahfouz-app/claude/slidev-install-no-nodejs-3a1978
* Merge pull request #72 from mahfouz-app/claude/note-auto-save-feature-a4deac
* Merge pull request #68 from mahfouz-app/claude/desktop-github-app
* Merge pull request #70 from mahfouz-app/claude/remove-docs-submodule
* Merge pull request #67 from mahfouz-app/feat/git-missing-screen
* Merge pull request #66 from mahfouz-app/claude/notes-header-pills-ui-f56d25
* Merge pull request #65 from mahfouz-app/claude/keyboard-shortcuts-ui-98d051
* Merge pull request #64 from mahfouz-app/claude/mahfouz-note-sync-dd6f97
* Merge pull request #63 from mahfouz-app/claude/notes-header-pills-ui-f56d25
* Merge pull request #61 from mahfouz-app/claude/tab-key-bullet-nesting-53dd3e
* chore(linux): declare git as a .deb/.rpm dependency
* feat: notify when a new Mahfouz version is available
* fix(git): read log paths NUL-delimited so non-ASCII names aren't quoted
* feat(ops): put the HCP workspace in the mahfouz project
* feat(ops): keep Terraform state in HCP Terraform, as influpert/web does
* docs(spec): no Email Routing; the zone declares no-mail records
* fix(ops): DNSSEC can't be switched off by accident; token set for 4a; cutover and CI fixes
* feat(ops): Terraform CI and the infrastructure runbook
* feat(ops): add bin/dns-parity for the nameserver cutover
* feat(ops): never let a plan destroy the zone
* feat(ops): declare the mahfouz.app zone and its records in Terraform
* feat(ops): add the R2 state bootstrap stack
* feat(ops): pin Terraform tooling and introduce ops/terraform
* docs(plan): infrastructure in Terraform (web version, step 3)
* fix(editor): start a bullet list on "- ", "* " or "+ " under a text line
* ci: cache Tauri's apt packages, keyed on the runner image
* test(fixtures): keep fixture commit times monotonic
* test(fixtures): cover merges, offsets and untracked dirs; drop machine identity
* test(fixtures): load the golden git record in Vitest and pin its wire shape
* test(fixtures): keep the golden record independent of the git version
* docs(plan): the golden record normalizes UTC timestamps to Z
* test(fixtures): record desktop git output on the golden fixture
* test(fixtures): keep the fixture tarball machine-independent
* test(fixtures): add the golden git fixture vault and its rebuild check
* docs(plan): keep the fixture script bash-3.2 compatible
* docs(plan): golden git fixtures (web version, step 2)
* refactor(platform): web-friendly asset/binary signatures; cover sync, remote-sync and drag-drop
* test(platform): keep Tauri imports behind the platform boundary
* refactor(platform): events, dialogs, opener, assets, drag-and-drop and paths go through platform()
* refactor(platform): GitHub calls and the help document go through platform()
* refactor(platform): git operations go through platform()
* refactor(platform): vault files, database and watcher go through platform()
* feat(platform): desktop Tauri adapter, installed at boot
* fix(platform): createRepo description may be null
* feat(platform): add the Platform interface, setPlatform/can, and a test fake
* test(platform): inventory Tauri calls and record the IPC baseline
* docs: implementation plan for the platform interface (web version step 1)
* fix(release): fail loudly on an unreachable remote; show failing shell tests
* chore: adopt develop/main branch model
* chore(release): merge each release back into develop
* fix(release): only treat develop→main merges as promotions
* chore(release): build changelog from develop's line once promotions exist
* chore: point scripts, CI and docs at the new layout
* chore: set up bun workspaces for core and desktop
* chore: move src/app into src/core and src/desktop (pure renames)
* docs: specs and plan for the web version and workspace split
* fix(plugins): stop a sidecar with killpg, not the kill command
* Merge branch 'claude/remove-page-preview-count'
* Bump docs for the license page
* Publish release notes on mahfouz.app/changelog
* Make the license proprietary to Influpert LLC
* Add an About dialog with release date and links
* Merge branch 'claude/view-mode-toggle-icons'
* Merge branch 'claude/notification-pin-icon-24045c'
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
