
## 0.21.0 (2026-10-30) {#v0.21.0}

### Features

* The built-in registry grants the decryptor role, no plugin named
* Push: let the desktop app keep the push due list current
* Read plugin capabilities from the catalog, wizard and copy name no plugin
* Publish any fence a plugin draws, no language list
* Editor: Paste as menu with Keep formatting and Plain text
* Publish: run publishing and Markdown export in the background
* Fields: keep [text] as written in a custom date format
* Editor: paste formatted text from any app as Markdown

### Improvements

* Build on macos-15; GitHub retires macos-14 on Nov 2
* User Interface: one text field with its submit inside it
* User Interface: one collapsible header and disclosure chevron

### Bug fixes

* Editor: style lists inside a quote like the rest of the quote
* Databases: an option rename follows a Board's column order


## 0.20.0 (2026-10-29) {#v0.20.0}

### Features

* Comments: links, tags and people in comments follow on click
* Editor: Vim view mode for the note editor
* User Interface: one inline-edit rule for Enter, Escape and blur (useInlineEdit)
* ⌥↑/⌥↓ moves a heading's section or a list item
* Shortcuts: hide key hints on touch devices
* Daily: the Daily notes database and Today's note

### Improvements

* Phone: the bottom bars take Liquid Glass

### Bug fixes

* Editor: Preview formulas are one object; cut, drag and copy keep markup intact
* Phone: lift the Search field clear of iPhone's keyboard bar


## 0.19.0 (2026-10-28) {#v0.19.0}

### Features

* Plugins: refuse dialog footers a plugin draws itself
* Release: group release notes into Features, Improvements and Bug fixes
* User Interface: the last buttons on Button, and the guard's list gone
* Database view buttons on Button
* Plugin dialogs get footer slots, laid out by Dialog
* Button, one component for every text button, with a guard
* User Interface: move the hand-drawn state pills onto StatusLabel
* SettingsRow: one component for every settings row
* User Interface: every segmented control through SegmentedControl, with a guard
* An icon on every segment, required
* Attributes: move visibility out of notes, and the markers with it
* Attributes: the eye, the row menu, Show column and Settings write visibility settings
* Attributes: visibility settings in the vault and database blocks
* Rail: Tasks and People open their database in a tab

### Improvements

* User Interface: search fields over a list move onto PickerPanel
* User Interface: every clipboard copy goes through copyText
* User Interface: move the remaining empty states onto .empty-inline and .empty-block
* User Interface: one Avatar for every person's avatar
* User Interface: AnchoredPanel for the hand-placed floating panels
* Phone: bottom bars take iOS 27's frosted glass

### Bug fixes

* Databases: a filter chip's editor is one line of pills
* Editor: Tab after a task's title opens its assignee, then date picker
* Editor: no second scrollbar when hovering a block
* Server, Worker: headless MCP stuck on "Indexing (0/0)": fetch blobs with no haves
* Permalinks: one centered dialog when a link opens over the chooser
* Tasks: Board scrolls clear of the phone bar; resizable Tasks table columns
* Databases: keep a file cell open while its picker runs
* Databases: a partly applied column rename offers Finish rename
* Share: an image replaced in place reaches the share
* Sidebar: no row count on database rows
* Editor: media cards get the block grip, a Replace icon and a hairline frame
* Notifications: drop confirmations for things already on screen
* Phone: no breadcrumb row on the note screen
* Phone: paint the strip under the status bar in the installed app
* Sidebar: show the vault header's chevron, + and ⋯ on touch screens
* Merge: Merge tab actions in the phone's bottom bar
* Phone: bottom bars sit as low as iOS's own tab bars
* Editor: typing right after a person chip keeps the chip
* Editor: keep the block grip and + clear of heading numbers
* Gantt: scrollbars run beside only the part that scrolls
* Menus: a tap opens a submenu instead of picking its first item
* Desktop: reach the SSH agent the user's shell sets up
* Sidebar: a phone tap on a note opens it the first time


## 0.18.0 (2026-10-26) {#v0.18.0}

* fix(web): move Home, Tasks and People keys off the editor's heading keys
* fix(people): call a People database's title column Name
* fix(core): don't log a lost-access error as a failed unpushed/dirty refresh
* test(worker): guard the GitHub Apps' callback URL with a pinned checklist
* test: wait for the full parse in the personNotes and plugin placeholder tests; weekLabel reads ICU's dash spacing
* fix(editor): a grip click selects a Mermaid block instead of revealing its source
* fix(databases): Add icon above the database tab's title
* Gantt: resize the frozen Name column
* fix(sidebar): highlight the left sidebar's whole border while resizing
* fix: reveal a permalink's note in the sidebar
* fix(web): serve the touch icon at the root paths iOS probes
* fix(editor): lock a note updated elsewhere until the user refreshes
* Databases: resize a Table view's columns
* fix(tabs): closing a tab returns to the tab and line it was opened from
* fix(databases): show Filter, Sort and Group separately while the view bar fits them
* Databases: Timeline template (a Gantt that shows bars at once) and Add sample data
* fix: phone layout text sizes (17px body, 16px fields)
* fix(people): person chips sit in their line, not below it
* fix(gantt): week numbers, quarter labels, name-only Name column, scroller fills the pane
* docs(instructions): file reported work in the issue tracker first
* fix(databases): keep the View settings button on one line
* fix(web): hand a published page's Edit link to the tab holding the database
* feat(databases): View settings changes a Calendar's date and a Gallery's cover


## 0.17.0 (2026-10-26) {#v0.17.0}

* Step 5/6: phone Search — one field for notes, commands and contents, at the bottom
* fix(fields): refuse a date part that would merge; keep Long text lines in slide headers
* fix(database): ask a database's questions in its note's Light or Dark
* Move a Board's columns and a card's fields per view, like a table's columns
* Step 3/6: the phone note page — read first, tap to edit, toolbar above the keyboard
* feat(mcp): a local client at Publish publishes without the dialog
* Step 3/4: say "You're offline" instead of leaving the app to sign in
* Step 1/4: start the installed web app with no network (offline app shell)
* Databases: one Filter, sort and group menu, icon steps and an N more menu in the view bar
* Databases: a column's Rename renames the name its header shows
* fix(server): answer a call only once the git it started has finished
* fix(mcp): replay a local client's retried write instead of applying it twice
* Step 3/3: Task reminders while Mahfouz is closed (Web Push)
* Step 2/3: Worker Web Push service for task reminders
* Step 1/3: Device notifications on the web (OS notifications while open)
* fix(server): forget idle MCP sessions' reads on a long-lived server
* feat(mcp): filter a local client's tools/list by its levels and report them in list_vaults
* fix(agent): add_database_row into a People database adds a person
* fix(web): commit as the signed-in account after an offline launch
* fix(desktop): keep a vault's own git config from naming programs the app's git runs
* feat(web): theme-color follows the app's appearance
* Lock unlocked encrypted notes when the window hides for agents
* ci: run the web suites in parallel for a desktop-only change
* Step 2/2: App: shared new-version banner (desktop + web)
* fix(database): draw option pills bare, with no dropdown frame around them
* fix(mcp): headless server's own wording, no active vault in list_vaults
* fix(mcp): page query_database and return the view's columns
* feat(mcp): per-vault access levels for local clients
* fix(databases): name new columns after their type, numbered, and size the draft's icons
* fix(sync): a note whose file became a Git LFS pointer leaves the index and refuses writes
* fix(database): views scroll again, and no scrollbars on the view switcher
* ci: move actions/checkout and dorny/paths-filter to Node 24 releases


## 0.16.0 (2026-10-25) {#v0.16.0}

* feat(mcp): put the owner's account on production's server path
* fix(database): name built-in row fields instead of showing their keys
* feat(people): a person's Tasks as the compact database shell
* fix(mcp): set_attributes writes a flow list on a multi-select key as a YAML list
* feat(share): owner sync, the sharing end-to-end test, cleanup (S13)
* fix(fields): merge the Fields tab's edits onto fields.md as it is now
* feat(rail): Tasks and People rail panels on a shared RailPanel
* Databases: Tasks Board on the shared card; reorder a Board's option columns
* Ignore a vault repository's fsmonitor and hooks when the app runs git
* feat(databases): Gantt task tree (Gantt 7/7)
* feat(databases): Gantt dependencies (Gantt 6/7)
* feat(database): a Note ID column in every database
* feat(database): page database tables and Board columns
* feat(database): one shell for the database tab, with New and a row ⋯ column
* feat(share): owner opens live, settles conflicts with Compare, shares on the chooser (S12c)
* feat(share): the shared note's editor pieces (S10)
* docs(instructions): link Mahfouz notes in PRs by permalink, never by path
* feat(databases): edit Gantt rows from menus and the keyboard (Gantt 4/7)
* feat(share): the live document over the socket (S5b)
* feat(databases): Gantt view keys, writers and placement core (Gantt 1/7)
* feat(permalink): Copy permalink and opening one, on web and desktop
* docs(instructions): claim kb issues, record plans, cite note IDs in PRs
* style(rail): match the sidebar's background, line under the titlebar
* fix(sidebar): larger note slot icons
* fix(ui): reorder select options and sorts with a mouse drag
* feat(terraform): redirect l.mahfouz.app permalinks to the web app
* fix(databases): the Calendar's day dialog takes the note's appearance
* ci(check-desktop): fall back to apt-get when the apt cache restores nothing
* docs(instructions): track issues in the kb Issue Tracker, not GitHub Issues
* Import: File menu item, background reading with a progress notification
* docs(instructions): the gh stack lock, cross-workspace guards, browser mockups
* docs: point guide and privacy links at mahfouz.app
* feat(database): fill the pane and pin the Title column


## 0.15.0 (2026-10-23) {#v0.15.0}

* feat(brand): add a transparent bare-mark emblem
* One person chip: Tasks tab, People relations, authors
* fix(rail): Tasks toggles like People; Home leaves the Tasks tab
* feat(editor): + beside the grip opens the slash menu; empty-line hint
* Tasks: tags as a filter, plus filter redesign review fixes (4/4)
* fix(ui): cap every dropdown and menu at one shared height
* chore: refresh riprap payload to 0.14.1
* feat(desktop): menu bar item opens on click; menu shows version and active agents
* fix(editor): Enter and Tab accept a # tag suggestion
* feat(database): drag to reorder columns
* feat(databases): Board drag carries the card and shows where it lands
* Save status icon opens the note's Status card
* Number headings in the toolbar's Heading menu
* fix(editor): Enter on a bare { picks the highlighted field
* Custom rail: pin notes and databases, hide Tasks or People
* Database self-relations, and Manager ↔ Direct reports in People


## 0.14.0 (2026-10-22) {#v0.14.0}

* feat(plugins): host.slides.deck so Present shows child notes and resolves wikilinks
* fix(ui): give the External agents popover its own chrome and layout
* feat(publish): anchor links to headings on published pages
* feat(tags): Merge into… in the tag menus
* feat(mcp): merge_people tool
* fix(editor): Enter at a heading's start moves the heading down
* fix(tables): typing into a new table's header row and first column
* Heading numbers (heading_numbers: true)
* Import: choose which pages to import, and a Notion page link
* Database tab: lay it out like a note
* feat(share): the shared: marker in note frontmatter
* feat(databases): add a column right in the header
* fix(ui): two FolderOpenIcon exports broke develop's typecheck
* feat(palette): match note contents after titles, with highlights
* Clone a GitHub repository: one-screen picker, progress and hiding
* feat(phone): a glass Search pill and a Tasks and People pill
* feat(desktop): make Mahfouz the default Markdown app from Settings
* feat(share): remove Share… from the File menu
* Suggest tags as you type: #, the tags attribute and the Tasks filter
* fix(people): New row in a People database adds a person
* fix(editor): no drag grip on blank lines or past the note's end
* chore(infra): remove the domain swap's one-off Terraform allowances
* fix(editor): keep the page icon's gap from growing with the note


## 0.13.0 (2026-10-21) {#v0.13.0}

* feat(editor): Code dropdown (Inline code, Code block), ``` + Enter closes the fence, Preview keeps fences hidden
* fix(editor): apply macOS text replacements and spelling corrections with the cursor after the space
* fix(attributes): keep a new row when its type icon is clicked before naming it
* fix(notifications): keep pop-ups in the note pane and compact
* fix(editor): Backspace and Delete in Preview never take a hidden delimiter
* New brand: nuqta ladder mark, Nile accent, Flow loader
* fix(search): put the Search tab's sort on the field's row
* fix(editor): scroll the page icon with the title; name the note in the breadcrumbs
* docs(instructions): guide pages carry since:, badges read Since
* Sort the Logpush jobs' field_names as Cloudflare returns them
* Quote the Google SPF's content as Cloudflare stores it
* Forget the deleted no-mail SPF so the live Google SPF is adopted
* fix(desktop): menu actions ran twice in dev, so the command palette never opened
* feat(settings): a laptop icon marks settings kept on this computer only
* fix(ci): cancel a superseded PR run whole
* feat(settings): larger plugin icons, chevron in the registry field, heading buttons on the right
* Quit dialog: show the commit/push a quit waits for, with Quit now
* fix(sidebar): hide a swapping row's chevron at rest
* docs: three-host layout in docs, comments and test names (three-host split, 5/5)
* feat(settings): move Help improve Mahfouz into General
* feat(desktop): keep the local MCP available with the window closed, and start the app on demand
* feat(mcp): tools for people
* fix(ui): center the Settings modal and make it larger
* fix(ui): restore .visually-hidden for sync labels
* fix(editor): a way out below a code block that ends the note
* Remote MCP step 7a: consent, grants and routing for the server path
* feat(vaults): Next steps card in a new vault's first note (#686)
* refactor(editor): one triggerBefore helper behind the :, { and ! menus
* feat(fields): the new note prefix uses fields
* feat(vaults): open an existing GitHub repository on desktop (#682)
* fix(vaults): ask before cloning a public GitHub repository as a vault (#683)
* Remote MCP step 6b1: warm state from container snapshots
* Server platform follow-ups: unborn HEAD and non-ASCII tests, test helper and git helper tidy
* feat(tasks): type ! for a due date, drop the // trigger
* fix(telemetry): no timings for git-crypt vaults, locked or not
* Settings → Privacy: a crash report saved while on is still sent; list committing
* Remote MCP step 4: the container's HTTP server and image
* fix(desktop): seed the vault registry only when its file is missing; check sidecar vault params
* Telemetry: usage counts and timings from their call sites (#664)
* fix(tasks): the date picker's time is a text field, so a typed time is written
* test(worker): insert pagesForNotes' 250 pages in one DO call
* Telemetry: desktop webview and Rust panic reports
* test(watch): run the real-FSEvents test on CI's macOS job, not locally
* test(web-e2e): wait for the boot sync before signing out (#753)
* Sync: keep a note renamed with an edit (D + A) instead of reporting it removed
* fix(search): Search tab headers as stops, tag:/person: completion, slim scrollbar, scope as an image
* Web telemetry: Datadog RUM and errors (#662)
* Widen the left rail and enlarge its icons
* fix(find): the bar owns its Alt toggles, fewer exports, room to type at 320px
* feat(editor): fold regions inside code blocks from the rail
* feat(worker): log route classes, never paths, and turn Logpush on
* chore(tags): remove dead tag code left by the Search tab
* fix(sync): drop the old note's row when a modified path holds another id
* fix(search): no Find mentions in an encrypted note's palette; a failed search answers its request
* fix(db): a bulk write while auto-commit is paused leaves disk-only notes out
* fix(search): keep CriticMarkup markup out of replaces; follow-ups to #695
* chore(ops): drop the Terraform-managed Datadog dashboard
* fix(settings): show a vault's sync error in the Vaults list
* Remote MCP step 2: the server workspace and its Node platform
* fix(settings): move New note prefix to a vault Notes tab
* feat(search): replace across notes in the Search tab
* feat(ops): Datadog resources for telemetry, Workers' logs by Logpush
* fix(ui): task checkboxes use the app's .checkbox
* fix(sync): stop treating a missing remote as connected
* Declare Google Workspace mail on mahfouz.app in Terraform
* Public site at mahfouz.app, web app at web.mahfouz.app, desktop API at api.mahfouz.app
* feat(desktop): strict content security policy for the webview (#622 stage 2)
* feat(ui): new vault on GitHub
* test(ui): form-control guard reads conditional and spread input types
* fix(ui): Columns popover announces a move only when it applied
* feat(settings): Privacy section with the Help improve Mahfouz switch
* feat(feedback): file Send feedback through the Worker, drop the compiled-in token
* Desktop: enforce the vault registry in every file command (#622 stage 1, part 2)
* Unify text fields (3/3)
* Ship third-party licence texts in the app; keep the docs list current
* docs(rules): every guide addition carries its since.html version
* fix(watch): resync on a rescan flag, and check the vault every 60 s
* feat(engine): move the database-only read side into the engine
* feat(editor): Heading N hint on an empty heading; Heading 4 to 6 in the menus
* feat(attributes): a styled type menu, opened from the type icon (#629)
* fix(a11y): the collapsed right sidebar is inert (#631)
* fix(ui): a press counts as nested only in the layers it was opened inside
* test(watch): test the debounce loop with synthetic events, not FSEvents
* fix(agent): open Settings → AI on the keyless provider; key status hook
* fix(editor): keep the note's title block fixed in section drag (#586)
* docs: attach PR mockups with gh --attach
* fix(sidebar): scope the drag highlight per vault (#602)
* fix(ui): pill cards — no hidden sidebar queries, encrypted tag count, relation chips (#605, #606, #607)
* feat(engine): add @mahfouz/engine, its context, and move the first pure modules (headless MCP, step 2)
* fix(sidebar): drag to own vault root (#567); clamp width to the window (#568)
* fix(sidebar): keyboard tree rows and ARIA state (#581, #584)
* fix(a11y): collapsed sidebar is inert; resize handles work from the keyboard
* fix(ui): right sidebar shows nothing without a note; encrypted tags are plain text
* fix(sidebar): reveal a new child under a collapsed parent (#564)
* fix(sidebar): phone sheet is a modal Escape and back close; row actions on touch; pills as cards (#576–#580)
* fix(attributes): a re-list mid-debounce keeps the typed value
* fix(sidebar): forget per-vault collapse state of unregistered vaults (#565)
* fix(sidebar): rev:/ptab: tabs highlight their note's row; db: tab shows the note's emoji
* fix(sidebar): note and folder menus offer only what works (#559, #560, #561)
* ci: split check-web into parallel jobs, core's suite in three shards
* fix(sidebar): view shortcuts reveal a collapsed sidebar; tag filter only in Tags
* fix(ui): drop the right sidebar's own header and close button
* feat(search): sidebar search view with snippets, keyboard nav and ⌘⇧F
* Database: colored pills, one-click checkboxes, arrow keys, editable cards
* fix(sidebar): guard localStorage reads and writes
* Sidebar: show plain folders under their owning note (#552, #553)
* feat(ui): note pill cards
* feat(sidebar): a Bookmarks section above each vault's notes
* Command palette: kind filter and search-key hand-off
* fix(ai): keep Settings key edits from switching the agent
* feat(people): person summary on the person page
* fix(sidebar): scope rename and collapse per vault, reveal rename targets
* fix(sidebar): drag only the pressed note, not its ancestors
* fix(comments): keep an unlocked encrypted note's threads out of the sidebar
* People: @ before a word mentions it; Preview draws mentions as pills
* fix(editor): `!` fields empty after a fast-path boot
* fix(notes): line the page icon up with the note title
* feat(database): rename a database from its tab's title
* feat(export): choose how tags and people are written
* Comments: edit or delete your own entry in a thread
* feat(databases): Month and Week on Calendar views
* fix(editor): keep the cursor past list bullets in Preview
* feat(share): send the note's title on macOS too
* style(tables): slimmer pill handles and full-length add bars
* Share through navigator.share on macOS
* Show each database column's type and what a cell opens
* fix(tags): index body tags with the rename's grammar
* Pin and reorder tabs
* test: flush publish debounces instead of sleeping; split sync.test.ts; pin Node 24
* ci: run core, web and worker tests once when check-web runs
* Deck prose block at the top: mark page 1, and say why Remove rule isn't offered before a yaml block
* Row and column menus on the table grips
* Show comment threads in a margin beside the note
* Redesign the comment popover as a shared CommentThread
* feat(ui): compact Banner density for the account menu
* fix(tasks): Board card tags on their own line, out of the title button
* Change a person's handle everywhere it's referenced
* Redesign the Find and Replace panel
* Floating note outline; page previews become optional
* fix(ui): drop the duplicate EyeIcon that broke the develop build
* feat: icon-only buttons in the note's bottom bar
* Notification actions on one compact row, with icons
* Export notes to Word (.docx)
* Rename a tag everywhere from its context menu
* Encrypted notes: refuse macOS Services and Look Up while plaintext shows
* Per-note Light / Dark / Auto appearance in the bottom bar
* fix: turn off macOS text substitutions that drop the typed space
* feat: word count at the far left of the note bottom bar
* fix(tauri): embed the Windows app manifest in test binaries
* Account menu: status table, shared app items, announced keys, headless focus
* feat: zoom level opens into a slider in the bottom bar
* fix(tasks): Tasks tab scroll memory and task database test gaps
* Plugins: host.commands.refresh re-evaluates `when` for the OS menu
* refactor: share the main-thread webview helper
* Fix Sub/Superscript keys, keyboard toolbar presses, slash menu drift
* Drop a running plugin update from the update notice
* refactor: read a note's file through noteFromFile in readRefreshed
* refactor(ui): RelationPicker and AccountButton dismiss through useDismiss
* Read a link's destination, never a URL in its label (#474)


## 0.12.0 (2026-10-16) {#v0.12.0}

* Share a note through the system share sheet
* ci: give check-web 35 minutes
* Editor: native Format submenu in the macOS context menu
* fix: keep a source file an outside edit changed during a cross-vault move
* fix(publish): a retry after PublishRecordError updates the first page
* Editor toolbar: one model, regrouped like Google Docs
* Tasks: show tasks as a database (Table, Board, Calendar) in the Tasks tab and on person pages
* fix: refuse a cross-vault transfer whose source file was moved outside the app
* fix(publish): keep URLs in a link's label; link www. and email autolinks
* Plugins: host.vault.unlock, so a plugin's unlock command takes the button's steps
* Embed menu: say why it's empty in an encrypted note
* Person page mentions: the mention's line, the paragraph on demand, the note as a pill
* feat(ui): the avatar opens an account menu with Settings, the guide and feedback
* fix(shortcuts): leave the key alone for actions the platform doesn't have
* Encrypted notes: no webview context menu over an unlocked note
* test: check every invoked command is registered in generate_handler!
* refactor(ui): one focus-out check and one Tab rule for ContextMenu and Dropdown
* fix(notifications): stop rows taking the progress bar's and buttons' styles
* fix(naming): naming and settings follow-ups from #389's review
* fix(quicklook): color-mix() fallbacks for macOS 12, and #384's optional simplifications
* Tasks: open the Tasks view as a tab in the main pane
* fix(publish): unpublish leaves the row's page up when another note's file names it
* fix(agent): agent chat follow-ups from #415's review
* fix(cross-vault): refuse a move while a note's body waits in the source
* fix(publish): publish a note as its file holds it
* test(core): settle React updates inside act(), ending the act() warnings
* fix(cross-vault): refuse copying an encrypted note to another vault
* test(core): count operations instead of timing diff and palette scaling
* fix(tauri): compile the lib tests on Windows
* fix(publish): scan wikilinks in linear time
* fix(plugins): the OS menu lists only the note commands whose `when` applies
* Calendars start the week on your first day of the week
* Cross-vault transfer writes the source files, not the index rows
* fix(encrypted-notes): drop a late editor body for a locked encrypted note
* fix(plugins): vault commands, #377's remaining review MINORs
* feat(agent): fold tool calls and thinking into one line in the chat
* test(worker): make the MCP registration rate-limit test window-proof
* test(desktop): fix flaky check-desktop: ETXTBSY on fake git-crypt filters
* fix(save): body writes start from the note's file frontmatter (#372, 2/2)
* fix(save): a stale save settling mid-write no longer skips onSaved
* Tint the line a jump lands on; open backlinks at the link's line
* fix(editor): keep a person note's page under its text
* fix(tasks): join a snoozed rollup with only the tasks still due
* fix(save): every frontmatter writer starts from the note's file (#372, 1/2)
* fix(encrypted-notes): a networked plugin's command doesn't run from its key or the palette
* fix(quicklook): stale navigations, stuck renders, deadline after load, UTF-16/CP1252
* fix(naming): fail closed on unreadable naming; hand off Trash title-read slots
* feat(plugins): vault-scoped commands, listed in the palette with no note open
* feat(encryption): vault host APIs: move to a private repo, rewrite history, note and commit naming
* feat(encryption): plugin host APIs for re-encryption, settings pages and locked-vault unlock
* feat(encrypted-notes): plugin host APIs and a core decrypt entry point
* feat(encrypted-notes): unlock in the main editor through a plugin codec, with the plaintext kept in
* test(desktop): turn off commit and tag signing for every git a test spawns
* docs(instructions): lessons from the embed follow-up and layouts
* Slides: hint and Remove rule for a prose block at the top of a deck
* feat(tasks): snooze and reschedule from a due reminder
* Databases: Board, Gallery and Calendar layouts in embeds
* feat(plugins): accept a plugin's terms before installing, enabling or updating it
* Finder Quick Look preview for Markdown notes (macOS)
* fix(slides): usage counts read defaults.layout as Slidev's server does
* fix(slides): a float that underflows to zero hides no slide
* fix(merge): #369's Gate 3 fixes, which missed the merge
* Share one YAML-aligned reader for slide layout:/class: lines
* fix(merge): writers check the file; kept edits survive quit and reload
* fix(slides): read a slide's leading yaml code block as its frontmatter
* fix(slides): say hidden slides aren't counted in the layout sections copy
* docs(instructions): lessons from the databases Gallery, Calendar and embeds
* Databases: embed follow-up (gate 3 fixes, privacy)
* fix(slides): resolve tagged and anchored hide values as yaml does
* Slides: hint on a slide block at the top of a deck's text
* fix(slides): leave hidden slides out of template usage counts
* test(core): one global jsdom Range layout stub
* feat(encrypted-notes): the encrypted key, a locked view and a fail-closed write boundary
* feat: handle git-crypt vaults this device can't decrypt
* test(editor): stub Range rects in tests that await with a view mounted
* Plugin install links: web install page and mahfouz:// deep link
* feat(slides): flag lines Present doesn't show under a tight ---
* fix(merge): nothing written during a stopped git operation
* fix(sync): leave a pending app commit's writes to it, not "External edits"
* Databases: embed a database view in any note
* fix(slides): a blank line after --- opens no slide frontmatter
* History: group auto-saves into Edited rows
* fix(editor): clear a word's underline when it's added to the vault dictionary
* test(web): e2e for the slides preview's sandbox and meta CSP
* fix(commit): credit in-app edits to Auto-save and name the changed notes
* fix(disk-only): announce in-vault moves of disk-only notes
* fix: commit vault dictionary edits under their own message
* fix(sync): a file and a folder with the same name stop the merge instead of replacing each other
* fix(git): apply content filters to resolved merges and blob reads
* fix(db): tell listeners about writes to disk-only notes
* fix: refresh an inactive vault's dictionary on its sync
* feat(slides): template usage counts in Settings (Phase 4C)
* chore: map the owner's other addresses in .mailmap
* chore(riprap): refresh the payload to 0.13.0
* Spelling check: native underlines and a vault dictionary
* chore: map the leaked Smoke Test identity to its real author
* fix(desktop): drop an inherited GIT_DIR from every git the app and its tests run
* feat(slides): Render with Slidev in the template preview (Phase 4B)
* Databases: the Calendar view
* fix(core): never settle a note into a database block twice
* fix(test): keep test git helpers off the repository an inherited GIT_DIR names
* feat(core): choose each conflicting part in the Merge tab
* ci: give check-desktop 25 minutes
* feat(slides): approximate template preview in Settings (Phase 4A)
* AGENTS.md is the one copy of agent guidance; CLAUDE.md imports it
* Databases: the Gallery view
* Configurable port for the web e2e server (MAHFOUZ_E2E_PORT)
* Person page: contact fields inline, a Board that fits, one-line mentions
* Spelling check spike: native underlines in the macOS webview
* Slides templates: layout completion, Apply layout, slide 1 layout menu and hints (Phase 2b, part B)
* Agents keep the docs repo's kitchen sink current
* Fix duplicate toolbar, click offset and list selection; add code block card
* Slides templates: SVG decorations per section (Phase 3)
* test: fix flaky palette linear-growth timing test
* test(web-e2e): wait out the boot commit, then require Mod+S's Manual save
* People: import from macOS Contacts
* feat(core): Merge tab bulk picks, picks that survive tab switches, and a merge-waiting banner
* feat(tags): frontmatter tags: lists are tags
* test(web-e2e): don't require Mod+S to be the commit that pushes the edit
* Rollup columns
* feat(tags): clickable tags and a search-style Tags view in the rail
* feat(ui): Commit notes dialog (Commit notes 2/2)
* fix(core): binary Merge tab rows hash by blob and read deletes as deletes
* feat(core): the Merge tab — pick per file, with the differences shown
* fix(toolbar): heading menu follows the cursor line
* Tasks rail icon: due dot
* Sidebar: hover + on notes, ⋮ on folders
* fix(sidebar): show a parent note's chevron on hover
* Breadcrumbs: home icon, note emoji, children popover
* Add Find Selection (Mod+Alt+F): jump to the next occurrence
* Note bottom bar: save status, Publish and view controls move under the note
* feat(core): filter the Tasks view by the tasks' own #tags
* Slides templates: authoring form with layout sections and palette (Phase 2b, part A)
* fix(sidebar): renaming a file name no longer re-adds the new-note prefix
* feat(ui): move notifications to the left rail as a sidebar view
* fix(tasks): assignee chip opens a styled picker; time field writes in WebKit
* feat(core): a pull merges notes changed on both sides when the edits don't overlap
* Relation editing
* fix(core): pull merges under the rebuild mutex, with the network outside it
* feat: Mod+K command palette (notes, commands, settings)
* Slides templates: format v2 with per-layout sections, palette and a core stylesheet (Phase 2a)
* One Banner for notices; fix the external-change banner in dark mode
* test(core): drop the serial timing project; fix three load flakes
* fix(ui): pass vault ids to DB calls that run after an await
* Move five more menus onto Dropdown
* Slides templates: five built-in looks and a gallery (Phase 0)
* Attribute links in Backlinks
* feat(publish): Essay page theme and a QR code for published pages
* Add Serif to the per-note font picker
* test: bound timing tests on CPU time, not wall time
* Editor saves never overwrite a change they haven't seen
* docs(dev): notes on running and diagnosing core timing tests
* test: cap local vitest workers at 4
* fix(web): don't hold the vault's git lock across push and fetch transfers
* test(agent): sample the linear-time diff check until it shows linear growth
* Restore the Font picker in Settings → General
* Shared icons, IconButton, .icon-btn sizes and caption classes
* ci: a failing large push fails develop's run
* ci: pin actions/checkout to v5.1.0 in the token-holding jobs
* Slides templates: forward-compat release (Phase 1)
* Clean pastes from Word/Outlook, add Paste as Plain Text
* test(core): run wall-clock tests after the suite, one file at a time
* fix(ci): call influpert/bws by its major, not a commit
* test(web): markdownIn rereads a file the app is writing
* fix(sync): a vault's first pull and push wait for its first index
* fix: keep the completion menu's scrollbar off its shortcuts
* Fix overlapping Key/Type inputs in vault Attributes settings
* Vault and note sync indicators
* docs(riprap): registry plugins and untrusted vault content
* test(web): one FakeDocument and recordingLocks, from the web test harness
* Read and keep frontmatter lists
* Pull options to settle a merge: resolved text, keep theirs, expected refs
* feat(ops): per-environment Terraform, applied by the web deploys
* feat(shell): phone layout below 700px
* refactor(mcp): remove duplication in the MCP executor, transports and settings
* fix(shell): collapse the left sidebar below 700px until the user chooses
* fix(web): keep the E2E build's built-in plugin registry off github.com
* refactor(sidebar): drive the note drag with startPointerDrag
* test: keep the remote E2E run away from GitHub
* feat(import): Import dialog and plugin network layer (Notion import)
* feat(import): core import writer and plan format
* Refuse commits and pulls while a git merge or rebase is stopped
* fix(web): count unpushed commits after a running commit lands
* feat(web): turn on registry plugins in the web app (web plugins 5/5)
* fix(editor): tighten the gap under a note's page icon
* style(callouts): rounded borderless cards
* feat(databases): the Board (Kanban) view (phase 2, PR 3)
* fix(editor): style completion menus as a popover
* feat(mcp): remote MCP server on the Worker and the web tab relay (3/3)
* fix(db): make Convert table's link resolve to the new database
* fix(db): gate commits and sync walks against half-done moves
* feat(databases): group a database table by a Select attribute (phase 2, PR 1)
* feat(notes): emoji page icons
* Sync: push on every pass, merge different-file changes, push on quit
* fix(db): hold folders and new notes against moves
* Publish child notes with their parent
* fix(mind-map): open zoomed out; grabbing cursor on right-drag
* fix(editor): table widget write-back keeps every cell
* docs(changelog): rewrite the 0.11.0 entry for readers
* Use two shared empty-state styles
* fix(db): hold a directory note's whole subtree while it moves
* Ask the remaining confirmations in the app, re-checking after the answer (E2)
* Publish: send the note's style with a publish
* ci(release): announce a version only after its Workers are deployed
* feat(shortcuts): one keycap per key in the keyboard shortcuts dialog
* test(web): make readVault tolerate entries git removes mid-walk
* docs(instructions): store riprap:prune's base branch and protected list
* docs(instructions): editor completion lessons from the slash menu
* Published pages: light Preview look, note styles, callouts
* fix(frontmatter): escape line breaks in quoted attribute values
* feat(editor): slash command menu
* fix(editor): keep the link URL field open across an app or tab switch
* feat(comments): restyle the comment popover as the link popover, with icon buttons
* fix: typing lost or frozen during auto-commit


## 0.11.0 (2026-10-09) {#v0.11.0}

### Highlights

* **Track changes and comments.** Turn on Suggesting mode and edits become suggestions that someone accepts or rejects, as in Word or Google Docs. Comment threads anchor to text and can be resolved. Both live in the note itself, so they travel with push and pull.
* **Tasks.** Task lines across your vaults are collected in a Tasks view, where you can tick them off. In the editor, tasks get chips, a date picker and `@` completion for assignees, and you're reminded when a task assigned to you comes due.
* **Publish to the web.** Publish a note to a permanent link on p.mahfouz.app. Anyone with access to the vault can edit the original from the page; everyone else can copy it into their own vault. Only the note and its images are sent.
* **Mind map.** Each vault has a radial mind map of its notes, by folder or by tag. It's the vault's home view when no tab is open.

### New

* The AI agent's edits to a note in Suggesting mode arrive as suggestions you review in the note.
* Wikilinks can name a folder, such as `[[people/john]]`, and `[[Target|Alias]]` links now resolve, show in backlinks and complete.
* Callouts, using GitHub's alert syntax (`> [!TIP]`), render the same as on GitHub and in Obsidian.
* Copying from Preview keeps the formatting when you paste into Mail, Google Docs, Slack or Word.
* Clicking a link in Preview opens a popover to edit its text and address.
* Pasting a URL makes a Markdown link, and over selected text it links the selection.
* Drag a note, and the notes under it, onto another vault to move it. Hold ⌥ to copy instead.
* On desktop, every app action is in the menu bar, under new Note and Go menus, showing your own shortcuts.
* Git sync problems are explained in plain language, with **Show details** for the raw output and actions such as **Push this branch**. A push no longer creates a branch the remote doesn't have.
* With no vault open, you get an editable welcome page that explains Mahfouz and lets you try the editor.
* The **?** button in the rail opens the user guide. The shortcuts sheet is still on Mod+/.
* Plugins can edit fenced blocks in their own tabs, which the new Mermaid editor uses.

### Fixes

* Commits are authored as you, so a note's **Created by** and **Last edited by** show your name instead of "Mahfouz", on desktop and on the web.
* With many tabs open, tabs shrink to fit and arrow buttons scroll the rest. Scrolling the tab strip no longer drags the window.
* Restored tabs, and tabs hidden by a filter, stay open.
* Typing an apostrophe no longer inserts a second one.
* In Preview, typing at the start of a heading, quote, list item or task goes into the text instead of before its marker.
* In Preview, an image, video or audio card replaces its Markdown line instead of sitting under it. Collapsing media is removed.
* Switching between vaults no longer lets one vault's background work read from another.

### Internal

* Fixed two publish tests broken by the track-changes merge
* Terraform adopts the existing staging bucket for published pages
* Contributor docs point at the user guide pages


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
