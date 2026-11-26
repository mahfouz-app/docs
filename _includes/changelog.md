
## 0.31.0 (2026-11-26) {#v0.31.0}

Minor fixes and improvements.


## 0.30.0 (2026-11-25) {#v0.30.0}

### Features

* Desktop: Open Markdown File… (⌘O) opens any Markdown file on your computer, also from a tile in the vault chooser


## 0.29.1 (2026-11-25) {#v0.29.1}

Maintenance and reliability improvements.


## 0.29.0 (2026-11-25) {#v0.29.0}

### Features

* External agents: choose how much computing power agents get on each repository, and see the hours they used per repository
* Published pages: Unpublish all at once, and confirmation dialogs open centered
* Custom domains are available on every plan: Free includes one, Pro 3 and Max 10

### Bug fixes

* macOS: the app's web content process is named “Mahfouz Web Content”
* Editor: the cursor no longer lands in text Preview hides (media cards, tables, Notes)


## 0.28.0 (2026-11-23) {#v0.28.0}

### Features

* Import: map the people an import names after you've reviewed it
* API: integrations can subscribe to a database's changes and get notified


## 0.27.0 (2026-11-21) {#v0.27.0}

### Features

* Import: resume an import that stopped
* Databases: a Tree view nests rows under their parent row

### Bug fixes

* Tasks: an @mention in a new task's title stays a mention
* Tasks: links in task titles are shown and open on click
* Import: a text cell's link to a page not imported yet waits for that page


## 0.26.0 (2026-11-17) {#v0.26.0}

### Features

* Connected apps stay connected for as long as they're in use
* Connecting an app: the consent screen shows where the app sends you back, beside its name
* API: a row update can require the version you read, so it never overwrites a newer change
* API: read and write a database row's body, and comment on a row
* Desktop: install updates in place from the update banner

### Bug fixes

* Agents: several requests to one vault at once wait their turn instead of failing
* Sharing: the link switch lines up with the other switches


## 0.25.1 (2026-11-12) {#v0.25.1}

Maintenance and reliability improvements.


## 0.25.0 (2026-11-12) {#v0.25.0}

### Features

* Account: delete your account yourself
* Plans: agents working on your GitHub repositories run within your plan's monthly hours
* History: small side changes (dictionary words, the rail, renames) go into the next auto-save instead of commits of their own
* History: changes are committed when you stop editing, not every 30 seconds
* People: a vCard's name parts import as first and last name
* History: day headings, editing sessions, line counts and “Not pushed” marks
* The app says Settings, not Preferences, wherever it points you there
* New vault on GitHub: choose the repository's owner
* Add vault: the dialog opens centered and keeps one height across its steps
* Settings: a title row with a close button across both panes, and a Search field
* Plans: enter a promotion code at checkout
* Editor: no hint under Vim in the View menu

### Bug fixes

* AI: the Keychain is asked for access only when an AI key is stored
* Editor: room for the block grip and + at any zoom
* Editor: heading numbers are sized like their headings
* Notes: a renamed note keeps its created date after a resync
* History: no error on a branch with no commits yet
* History: follows a note through renames
* History: today's auto-saves are grouped into Edited rows again
* Permalinks: a note opened in a second web tab shows its text instead of an empty page


## 0.24.0 (2026-11-06) {#v0.24.0}

Maintenance and reliability improvements.


## 0.23.1 (2026-11-06) {#v0.23.1}

v0.23.0 was never published; this release carries its changes.

### Improvements

* macOS: the app is signed and notarized by Apple (#1276, #1282)

### Bug fixes

* Settings → Plan: banners sit flush with the plan card, and the billing note is a link


## 0.23.0 (2026-11-05) {#v0.23.0}

### Improvements

* macOS: the app is signed and notarized by Apple

### Bug fixes

* Settings → Plan: banners sit flush with the plan card, and the billing note is a link


## 0.22.1 (2026-11-04) {#v0.22.1}

Maintenance and reliability improvements.


## 0.22.0 (2026-11-04) {#v0.22.0}

### Features

* Publishing: a page uploaded from another device or by a collaborator shows when it's out of date
* A note read from GitHub opens in a read-only tab
* Vaults: one Add Vault… item opens the vault chooser
* External agents: a list of desktop AI clients you can connect
* Publishing: one Keep updated choice per note: this note, this note and its child notes, or never
* Databases: a database file names its kind (`database: custom`, `people`, `tasks` or `daily`)

### Improvements

* Brief status messages share one toast

### Bug fixes

* Editor: the block grip and + sit beside the hovered block at any zoom
* Desktop: an AI client connecting no longer reopens Mahfouz when it's already running
* Publishing: says when child notes aren't published from this device
* Editor: in a shared note or a file opened from outside a vault, a relative link no longer opens an unrelated note
* Sync: when you first connect a vault, the choice between GitHub's copy and this computer's stays pending until you make it


## 0.21.0 (2026-10-30) {#v0.21.0}

### Features

* Task reminders: tasks changed on desktop keep reminders on the web up to date
* Publishing: diagrams drawn by any plugin are published as images
* Editor: a Paste as menu with Keep formatting and Plain text
* Publishing and Markdown export run in the background
* Fields: text in [brackets] stays as written in a custom date format
* Editor: formatted text pasted from any app becomes Markdown

### Improvements

* Text fields with a submit button show it inside the field
* Collapsible headers and their chevrons look the same everywhere

### Bug fixes

* Editor: lists inside a quote are styled like the rest of the quote
* Databases: renaming an option keeps its place in a Board's column order


## 0.20.0 (2026-10-29) {#v0.20.0}

### Features

* Comments: links, tags and people in comments open on click
* Editor: a Vim mode for the note editor
* Editing in place behaves the same everywhere for Enter, Escape and clicking away
* Editor: ⌥↑/⌥↓ moves a heading's section or a list item
* Shortcuts: key hints are hidden on touch devices
* Daily notes: a Daily notes database and Today's note

### Improvements

* Phone: the bottom bars take Liquid Glass

### Bug fixes

* Editor: math formulas in Preview act as one object; cut, drag and copy keep their markup intact
* Phone: the Search field stays clear of iPhone's keyboard bar


## 0.19.0 (2026-10-28) {#v0.19.0}

### Features

* Every segmented control shows an icon on each segment
* Attributes: whether an attribute shows in a note is set for the vault or a database, from the eye, the row menu, Show column and Settings, instead of in each note
* Rail: Tasks and People open their database in a tab

### Improvements

* Phone: bottom bars take iOS 27's frosted glass

### Bug fixes

* Databases: a filter chip's editor is one line of pills
* Editor: Tab after a task's title opens its assignee, then its date picker
* Editor: no second scrollbar when hovering a block
* Agents on GitHub no longer get stuck on “Indexing (0/0)”
* Permalinks: one centered dialog when a link opens over the vault chooser
* Tasks: the Board scrolls clear of the phone bar, and Tasks table columns can be resized
* Databases: a file cell stays open while its picker runs
* Databases: a partly applied column rename offers Finish rename
* Sharing: an image replaced in place reaches the shared note
* Sidebar: no row count on database rows
* Editor: media cards get the block grip, a Replace icon and a hairline frame
* Notifications: no confirmations for things already on screen
* Phone: no breadcrumb row on the note screen
* Phone: the strip under the status bar is painted in the installed app
* Sidebar: the vault header's chevron, + and ⋯ show on touch screens
* Phone: Merge tab actions in the bottom bar
* Phone: bottom bars sit as low as iOS's own tab bars
* Editor: typing right after a person chip keeps the chip
* Editor: the block grip and + stay clear of heading numbers
* Gantt: scrollbars run only beside the part that scrolls
* Menus: a tap opens a submenu instead of picking its first item
* Desktop: git reaches the SSH agent your shell sets up
* Sidebar: on a phone, tapping a note opens it the first time


## 0.18.0 (2026-10-26) {#v0.18.0}

* Web: the Home, Tasks and People keys no longer clash with the editor's heading keys
* People: a People database's title column is called Name
* Editor: clicking a Mermaid block's grip selects the block instead of showing its source
* Databases: the Add icon sits above the database tab's title
* Gantt: resize the frozen Name column
* Sidebar: the left sidebar's whole border highlights while resizing
* Permalinks: opening one reveals its note in the sidebar
* Web: the home-screen icon shows on iOS
* Editor: a note updated elsewhere is locked until you refresh it
* Databases: resize a Table view's columns
* Tabs: closing a tab returns to the tab and line it was opened from
* Databases: Filter, Sort and Group show separately while the view bar has room
* Databases: a Timeline template (a Gantt that shows bars at once) and Add sample data
* Phone: larger text (17px body, 16px fields)
* People: person chips sit in their line, not below it
* Gantt: week numbers, quarter labels, a name-only Name column, and the chart fills the pane
* Databases: the View settings button stays on one line
* Web: a published page's Edit link opens in the tab that already has your vaults open
* Databases: View settings changes a Calendar's date and a Gallery's cover


## 0.17.0 (2026-10-26) {#v0.17.0}

* Phone: one Search field at the bottom for notes, commands and contents
* Fields: a date part that would run into the next is refused; Long text lines stay in slide headers
* Databases: a database's questions follow its note's Light or Dark appearance
* Databases: move a Board's columns and a card's fields per view, like a table's columns
* Phone: the note page reads first, tap to edit, with the toolbar above the keyboard
* External agents: a local client allowed to publish publishes without the dialog
* Says “You're offline” instead of sending you away to sign in
* Web: the installed web app starts without a network connection
* Databases: one Filter, sort and group menu, icon steps and an N more menu in the view bar
* Databases: a column's Rename renames the name its header shows
* External agents: a write a local client retries is applied once, not twice
* Web: task reminders while Mahfouz is closed
* Web: device notifications while the app is open
* External agents: a local client sees only the tools its access level allows
* Agent: adding a row to a People database adds a person
* Web: commits are made as your account after starting offline
* Web: the browser's toolbar color follows the app's appearance
* Encrypted notes lock when the window hides while agents stay available
* A new-version banner on desktop and the web
* Databases: option pills are drawn bare, with no dropdown frame
* Agents: database queries come back in pages, with the view's columns
* External agents: set an access level per vault for local clients
* Databases: new columns are named after their type and numbered
* Sync: a note whose file became a Git LFS pointer is left out instead of being overwritten
* Databases: views scroll again, with no scrollbars on the view switcher


## 0.16.0 (2026-10-25) {#v0.16.0}

* Databases: built-in row fields show their names instead of their keys
* People: a person's tasks in a compact database
* Agents: setting a multi-select attribute writes a list
* Sharing: a shared note's changes sync back to its owner's vault
* Fields: the Fields tab's edits merge onto the file as it is now
* Rail: Tasks and People panels
* Databases: the Tasks Board uses the shared card; reorder a Board's option columns
* Gantt: a task tree of sub-items
* Gantt: dependencies between rows
* Databases: a Note ID column in every database
* Databases: tables and Board columns are paged
* Databases: the database tab gets New and a ⋯ menu on each row
* Sharing: the owner opens a shared note live, settles conflicts with Compare, and sees notes shared with them in the vault chooser
* Sharing: edit a shared note live with the people you share it with
* Gantt: edit rows from menus and the keyboard
* Databases: the Gantt view
* Permalinks: copy a note's permalink and open one, on the web and desktop
* Rail: matches the sidebar's background, with a line under the titlebar
* Sidebar: larger note icons
* Reorder select options and sorts with a mouse drag
* Databases: the Calendar's day dialog takes the note's appearance
* Import: a File menu item, and reading in the background with a progress notification
* Guide and privacy links point at mahfouz.app
* Databases: tables fill the pane and pin the Title column


## 0.15.0 (2026-10-23) {#v0.15.0}

* One person chip in the Tasks tab, People relations and authors
* Rail: Tasks toggles like People; Home leaves the Tasks tab
* Editor: a + beside the grip opens the slash menu; a hint on empty lines
* Tasks: filter by tags
* Dropdowns and menus share one maximum height
* Desktop: the menu bar item opens on click, and its menu shows the version and active agents
* Editor: Enter and Tab accept a # tag suggestion
* Databases: drag to reorder columns
* Databases: dragging a Board card carries the card and shows where it lands
* The save status icon opens the note's Status card
* Number headings from the toolbar's Heading menu
* Editor: Enter on a bare { picks the highlighted field
* Custom rail: pin notes and databases, hide Tasks or People
* Databases: relations to the same database, and Manager ↔ Direct reports in People


## 0.14.0 (2026-10-22) {#v0.14.0}

* Slides: Present shows child notes and follows wikilinks
* The External agents popover gets its own layout
* Publishing: links to headings work on published pages
* Tags: Merge into… in the tag menus
* Agents: merge people
* Editor: Enter at the start of a heading moves the heading down
* Tables: typing into a new table's header row and first column works
* Heading numbers for a note
* Import: choose which pages to import, and import from a Notion page link
* The database tab is laid out like a note
* Databases: add a column right in the header
* Command palette: matches note contents after titles, with highlights
* Clone a GitHub repository: a one-screen picker with progress, which you can hide
* Phone: a glass Search pill and a Tasks and People pill
* Desktop: make Mahfouz the default Markdown app from Settings
* Share… moves out of the File menu
* Tags are suggested as you type: #, the tags attribute and the Tasks filter
* People: New row in a People database adds a person
* Editor: no drag grip on blank lines or past the note's end
* Editor: the gap under the page icon no longer grows with the note


## 0.13.0 (2026-10-21) {#v0.13.0}

* Editor: a Code dropdown (Inline code, Code block); ``` and Enter closes the fence; Preview keeps fences hidden
* Editor: macOS text replacements and spelling corrections leave the cursor after the space
* Attributes: a new row stays when its type icon is clicked before it's named
* Notifications: pop-ups stay in the note pane and compact
* Editor: Backspace and Delete in Preview never remove a hidden delimiter
* A new look: the nuqta ladder mark, the Nile accent and a new loader
* Search: the Search tab's sort sits on the field's row
* Editor: the page icon scrolls with the title; the breadcrumbs name the note
* Settings: a laptop icon marks settings kept on this computer only
* Settings: larger plugin icons, a chevron in the registry field, heading buttons on the right
* Quit: the quit dialog shows the commit or push it waits for, with Quit now
* Sidebar: a row's chevron stays hidden at rest
* Settings: Help improve Mahfouz moves into General
* Desktop: external agents stay available with the window closed, and start the app when needed
* Agents: tools for people
* Settings opens centered and larger
* Sync status labels are read by screen readers again
* Editor: a way out below a code block that ends the note
* Vaults: a Next steps card in a new vault's first note
* Fields: the new note prefix uses fields
* Vaults: open an existing GitHub repository on desktop
* Vaults: asks before cloning a public GitHub repository as a vault
* Tasks: type ! for a due date (the // trigger is gone)
* Settings → Privacy: turning off diagnostics says a crash report saved while it was on is still sent once
* Tasks: the date picker's time is a text field, so a typed time is kept
* Sync: a note renamed and edited outside the app keeps its place instead of showing as removed
* Search: Search tab headers are keyboard stops, tag: and person: complete, a slimmer scrollbar
* The left rail is wider, with larger icons
* Find bar: its own Alt toggles and room to type in narrow windows
* Editor: fold regions inside code blocks from the rail
* Sync: replacing a note's file with another note no longer leaves the old note listed
* Search: Find mentions isn't offered in an encrypted note; a failed search still answers
* Notes that don't auto-commit stay out of commits made by bulk changes
* Search: replacing across notes leaves suggestion and comment markup alone
* Settings: a vault's sync error shows in the Vaults list
* Settings: New note prefix moves to a vault's Notes tab
* Search: replace across notes in the Search tab
* Task checkboxes match the app's other checkboxes
* Sync: a vault whose remote is missing no longer shows as connected
* The website is at mahfouz.app and the web app at web.mahfouz.app
* New vault on GitHub
* Columns popover: announces a move only when it applied
* Settings: a Privacy section with the Help improve Mahfouz switch
* Text fields look the same everywhere
* Third-party licence texts ship with the app
* Sync: the vault is checked for outside changes every 60 seconds
* Editor: a Heading N hint on an empty heading; Heading 4 to 6 in the menus
* Attributes: a styled type menu, opened from the type icon
* Accessibility: collapsed sidebars are skipped by the keyboard and screen readers; resize handles work from the keyboard
* AI: Settings → AI opens on the provider that's missing a key
* Editor: the note's title stays fixed when dragging sections
* Sidebar: the drag highlight is scoped to each vault
* Note cards: encrypted tag counts and relation chips show correctly
* Sidebar: drag a note to its own vault's root; the sidebar's width fits the window
* Sidebar: tree rows work from the keyboard and announce their state
* The right sidebar shows nothing without a note; encrypted notes' tags are plain text
* Sidebar: a new child note is revealed under a collapsed parent
* Phone: the sidebar sheet closes with Escape and Back; row actions on touch; pills as cards
* Attributes: a value you're typing is kept when the list refreshes
* Sidebar: revision and plugin tabs highlight their note's row; a database tab shows the note's emoji
* Sidebar: note and folder menus offer only what works
* Sidebar: view shortcuts reveal a collapsed sidebar; the tag filter shows only in Tags
* The right sidebar drops its own header and close button
* Search: a sidebar Search view with snippets, keyboard navigation and ⌘⇧F
* Databases: colored pills, one-click checkboxes, arrow keys and editable cards
* Sidebar: plain folders show under their owning note
* Note cards
* Sidebar: a Bookmarks section above each vault's notes
* Command palette: filter by kind
* AI: editing keys in Settings no longer switches the agent
* People: a summary on the person page
* Sidebar: rename and collapse are kept per vault
* Sidebar: dragging a note moves only that note, not its parents
* Comments: an unlocked encrypted note's threads stay out of the sidebar
* People: @ before a word mentions it; Preview draws mentions as pills
* Editor: ! fields work after a fast start
* Notes: the page icon lines up with the note title
* Databases: rename a database from its tab's title
* Export: choose how tags and people are written
* Comments: edit or delete your own comment in a thread
* Databases: Month and Week on Calendar views
* Editor: the cursor stays past list bullets in Preview
* Send a copy uses the system share sheet on macOS, with the note's title
* Tables: slimmer handles and full-length add bars
* Databases: each column shows its type and what a cell opens
* Tags: tags in a note's text are found the same way Rename tag finds them
* Pin and reorder tabs
* Slides: a prose block at the top of a deck marks page 1, and the app says why Remove rule isn't offered before a yaml block
* Tables: row and column menus on the grips
* Comments: threads show in a margin beside the note
* Comments: a redesigned comment popover
* Tasks: Board card tags sit on their own line
* People: change a person's handle everywhere it's used
* A redesigned Find and Replace panel
* A floating note outline; page previews become optional
* Icon-only buttons in the note's bottom bar
* Notification actions on one compact row, with icons
* Export notes to Word (.docx)
* Tags: rename a tag everywhere from its menu
* Encrypted notes: macOS Services and Look Up are off while an unlocked note shows
* A Light, Dark or Auto appearance per note, in the bottom bar
* macOS text substitutions no longer drop the typed space
* A word count at the far left of the note's bottom bar
* Account menu: a status table, shared app items and announced keys
* The zoom level opens into a slider in the bottom bar
* Tasks: the Tasks tab remembers its scroll position
* Editor: subscript and superscript keys, keyboard toolbar presses and the slash menu's position fixed
* Plugins: an update that's running leaves the update notice
* Links: a link opens its destination, never a URL written in its label


## 0.12.0 (2026-10-16) {#v0.12.0}

* Share a note through the system share sheet
* Editor: a native Format submenu in the macOS context menu
* Moving notes between vaults keeps a source file changed outside the app during the move
* Publishing: retrying after a failed publish updates the first page
* Editor toolbar: regrouped like Google Docs
* Tasks: tasks as a database (Table, Board, Calendar) in the Tasks tab and on person pages
* Moving notes between vaults is refused when a source file was moved outside the app
* Publishing: URLs in a link's label are kept; www. and email addresses become links
* Embed menu: says why it's empty in an encrypted note
* Person page mentions: the mention's line, the paragraph on demand, the note as a pill
* The avatar opens an account menu with Settings, the guide and feedback
* Shortcuts: keys are left alone for actions the platform doesn't have
* Encrypted notes: no context menu over an unlocked note
* Notifications: rows no longer take the progress bar's and buttons' styles
* Quick Look: previews work on macOS 12
* Tasks: the Tasks view opens as a tab in the main pane
* Publishing: unpublishing leaves a page up when another note still names it
* Moving notes between vaults waits while a note's changes are still being saved
* Publishing: a note is published as its file holds it
* Encrypted notes can't be copied to another vault
* Publishing: notes with many links publish faster
* Plugins: the menu bar lists only the note commands that apply
* Calendars start the week on your first day of the week
* Agent: tool calls and thinking fold into one line in the chat
* Saving: every write starts from the note's file, so an outside edit to its attributes is kept
* The line a jump lands on is tinted; backlinks open at the link's line
* Editor: a person note's page stays under its text
* Tasks: a snoozed reminder joins only the tasks still due
* Quick Look: fixes for stale and stuck previews and older text encodings
* Plugins: vault commands, listed in the palette with no note open
* Encrypted notes: unlock and edit them in the main editor through a plugin
* Slides: a hint and Remove rule for a block at the top of a deck
* Tasks: snooze and reschedule from a due reminder
* Databases: Board, Gallery and Calendar layouts in embeds
* Plugins: accept a plugin's terms before installing, enabling or updating it
* A Finder Quick Look preview for Markdown notes (macOS)
* Slides: template usage counts read a deck's default layout correctly
* Slides: a hide value that rounds to zero no longer hides a slide
* Saving: kept edits survive quitting and reloading
* Slides: a slide's leading yaml code block is read as its settings
* Slides: the layout sections say hidden slides aren't counted
* Slides: hidden slides are left out of template usage counts
* Encrypted notes: a locked view for encrypted notes
* Vaults encrypted with git-crypt that this device can't decrypt open locked
* Plugin install links: an install page on the web and a mahfouz:// link on desktop
* Slides: flags lines Present doesn't show under a tight ---
* Nothing is written while a git operation is stopped
* Sync: the app's own pending changes aren't committed as External edits
* Databases: embed a database view in any note
* Slides: a blank line after --- opens no slide settings
* History: auto-saves are grouped into Edited rows
* Editor: a word's underline clears when it's added to the vault dictionary
* Commits: in-app edits are saved as Auto-save, naming the changed notes
* Vault dictionary changes get their own commit
* Sync: a file and a folder with the same name stop the merge instead of replacing each other
* Spelling: an inactive vault's dictionary refreshes when it syncs
* Slides: template usage counts in Settings
* Spelling check: native underlines and a vault dictionary
* Slides: Render with Slidev in the template preview
* Databases: the Calendar view
* Merge tab: choose each conflicting part
* Slides: a template preview in Settings
* Databases: the Gallery view
* Person page: contact fields inline, a Board that fits, one-line mentions
* Slides templates: layout completion, Apply layout, a slide 1 layout menu and hints
* Editor: fixes a doubled toolbar, click offsets and list selection; adds a code block card
* Slides templates: SVG decorations per section
* People: import from macOS Contacts
* Merge tab: bulk picks, picks that survive tab switches, and a merge-waiting banner
* Tags: a frontmatter tags: list counts as tags
* Databases: rollup columns
* Tags: clickable tags and a search-style Tags view in the rail
* A Commit notes dialog
* Merge tab: binary files and deletions show correctly
* The Merge tab: pick per file, with the differences shown
* Toolbar: the heading menu follows the cursor's line
* Tasks rail icon: a due dot
* Sidebar: + on notes and ⋮ on folders when hovered
* Sidebar: a parent note's chevron shows on hover
* Breadcrumbs: a home icon, the note's emoji, and a children popover
* Find Selection (Mod+Alt+F): jump to the next occurrence
* Note bottom bar: save status, Publish and view controls move under the note
* Tasks: filter the Tasks view by the tasks' own #tags
* Slides templates: an editing form with layout sections and a palette
* Sidebar: renaming a file no longer adds the new-note prefix again
* Notifications move to the left rail as a sidebar view
* Tasks: the assignee chip opens a styled picker; the time field saves in Safari's engine
* Sync: a pull merges notes changed on both sides when the edits don't overlap
* Databases: edit relations
* A Mod+K command palette for notes, commands and settings
* Slides templates: per-layout sections and a color palette
* One style for notices; the external-change banner is fixed in dark mode
* Slides templates: five built-in looks and a gallery
* Backlinks include links in attributes
* Publishing: an Essay page theme and a QR code for published pages
* Serif in the per-note font picker
* Editor saves never overwrite a change they haven't seen
* The Font picker is back in Settings → General
* Pastes from Word and Outlook are cleaned up; Paste as Plain Text
* The completion menu's scrollbar stays off its shortcuts
* Vault settings → Attributes: the Key and Type fields no longer overlap
* Sync indicators for vaults and notes
* Attributes: frontmatter lists are read and kept as written
* Phone layout below 700px
* The left sidebar collapses below 700px until you choose otherwise
* Import: an Import dialog, starting with Notion
* Commits and pulls are refused while a git merge or rebase is stopped
* Web: the unpushed count is right after a commit lands
* Web: plugins in the web app
* Editor: a tighter gap under a note's page icon
* Callouts are rounded, borderless cards
* Databases: the Board view
* Editor: completion menus are styled as popovers
* AI agents can work on your vaults through the web app
* Databases: Convert table's link opens the new database
* Databases: group a table by a Select attribute
* Notes: emoji page icons
* Sync: pushes on every pass, merges changes to different files, and pushes on quit
* Publish child notes with their parent
* Mind map: opens zoomed out; a grabbing cursor on right-drag
* Editor: editing a table keeps every cell
* Confirmations are asked in the app's own dialogs
* Publishing: a note's style is sent with it
* Shortcuts: one keycap per key in the keyboard shortcuts dialog
* Published pages: the light Preview look, note styles and callouts
* Attributes: line breaks in quoted values are kept
* Editor: a slash command menu
* Editor: the link URL field stays open when you switch apps or tabs
* Comments: the comment popover looks like the link popover, with icon buttons
* Typing is no longer lost or frozen during an auto-commit


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


## 0.10.0 (2026-10-08) {#v0.10.0}

* The web app is at mahfouz.app; the website moves to docs.mahfouz.app


## 0.9.0 (2026-10-08) {#v0.9.0}

* The web app launches
* Web: GitHub sign-in, the vault picker and your avatar
* Web: clone GitHub repositories as vaults kept in the browser, with pull, reset and push
* Web: Mahfouz runs in the browser on local folders
* Dark mode: softer scrollbars
* Settings reload when the active vault changes
* Notifications: click a notification to run its action
* Sidebar: name a new folder inline as you create it
* Desktop: the webview's Reload and Inspect Element menu is hidden
* Editor: Markdown link labels are underlined like wikilinks
* Drag individual list items in Preview
* Folder paths in the breadcrumbs, folder rename and reveal, a sidebar menu, and a reveal label for each OS
* An account avatar shows your GitHub sign-in across the app
* A managed git is installed when the computer has none
* Plugins can bring their own Node.js runtime
* Disk-only notes: save without auto-committing
* Sign in to GitHub with the Mahfouz GitHub App
* Help opens the user guide on mahfouz.app
* A “Mahfouz needs Git” screen when git is missing
* Settings: click a shortcut to rebind it; an icon reset button
* Sync: outside edits and new files show up live
* Note pills for details, backlinks, tags and attributes
* Editor: Tab nests a list item under the one above
* Linux: the .deb and .rpm packages require git
* A notice when a new Mahfouz version is available
* Git: file names with non-ASCII characters are read correctly
* Editor: "- ", "* " or "+ " under a line of text starts a bullet list
* Release notes are published at mahfouz.app/changelog
* An About dialog with the release date and links
* List bullets stay drawn on the cursor's line


## 0.8.0 (2026-09-26) {#v0.8.0}

* No more keychain password prompts on status checks
* The agent chat works like Claude Code
* A notification center
* Send feedback, which files an issue for the Mahfouz team
* Headers and footers on slides templates; Commands become Fields
* A left rail and a reworked titlebar
* Slides templates for Present and PDF export
* Open in the export toast
* Plugin icons, logos and toolbar items


## 0.7.0 (2026-09-26) {#v0.7.0}

* draw.io's edit button opens the diagram editor instead of the raw XML, with draw.io plugin 1.0.2


## 0.6.0 (2026-09-26) {#v0.6.0}

* A card shows when an embed fails to render or its plugin fails to load
* An Enable or Install card for plugin blocks that can't render
* Wikilink brackets are hidden in table cells
* Plugin names in Settings are links in the accent color


## 0.5.0 (2026-09-24) {#v0.5.0}

* Presentations (Slidev) and PDF export become plugins
* draw.io becomes a plugin, and plugins get their own tabs
* Mermaid and Git LFS become plugins
* Plugins install from git-based registries
* No stray leading space in page-preview headings and task items


## 0.4.0 (2026-09-24) {#v0.4.0}

### Features

* Plugins: a Slidev presentations switch
* Attributes: define attribute types for a vault
* An Attributes toolbar button reveals the right sidebar
* draw.io diagrams open in a full tab for editing
* Settings: a draw.io plugin switch
* Agent chat: a New Conversation button and a history popover
* Tabs are always restored on launch, without asking
* Attachments live in the vault's files/ folder and are removed once no note uses them
* Attachment, image, audio and video attributes
* Attribute names open the visibility menu; Rename and Delete for custom attributes
* Attributes: color rows open the toolbar's color picker
* Bulk Attributes section in Vault Settings
* Checkbox and color attributes
* Date and date & time attributes, with a fixed format or a relative display
* Created and Updated come from git history, with author rows
* Drag blocks and heading sections to rearrange them
* Date codes in a vault's new-note prefix
* Note details fold into the Attributes panel as read-only rows
* Present and PDF export need the Slidev plugin switch on
* GitHub sign-in, with repository and collaborator access
* The sidebar search query is highlighted in the opened note
* Set type, Change type and Make free-form, inline
* The font is chosen per note
* Search is a sidebar view like Home, Bookmarks, Tags and Trash
* Git LFS becomes an opt-in plugin that installs git-lfs for you
* Multi-select attributes, shown as chips or checkboxes
* New notes get a heading placeholder, and title renames no longer cut names short
* Choose which attributes show inline in a note
* The per-note font pickers preview each font
* Text, number, URL, email and phone attributes
* Properties are renamed Attributes, and the panel stays live
* Attributes show as a collapsible block under the first heading
* Created by and Last edited by link to the author's email
* draw.io diagrams show inline as embeds
* The drag range shows only while pressed, and the grip is larger
* A reworked right sidebar with section toggles
* Select attributes, shown as segments or radio buttons
* The Bookmarks and Tags views show the vault's name
* Add attribute opens a form for its key, type and options
* Several agent conversations per vault
* Typed fields for known attributes in the Attributes panel
* A note is a single file until it has child notes
* Manage GitHub collaborators from the vault menu and settings
* An opt-in move to the one-file-per-note layout; export follows attachments
* A visibility menu for the read-only rows (Created, Updated, Path)

### Bug fixes

* Clicking the drag grip no longer moves the block
* Attributes: type picker fixes, and a date no longer off by one day
* Attribute fields follow the light and dark themes
* Vault settings: the attribute type dropdown fits its column
* Renaming an attribute no longer duplicates it
* Created by and Last edited by fill in for existing notes
* The app's name is capitalized “Mahfouz”
* draw.io: saves wait for a pause and are written on close
* The parent section isn't highlighted when the pointer is beside a block
* A heading's highlight goes when the pointer leaves its line
* draw.io: switching tabs no longer discards edits
* macOS: the app icon has a rounded-square background and fits the icon grid
* Agent chat: the running conversation can't be deleted
* draw.io: blocks in files with Windows line endings are edited correctly
* Wikilink [[ ]] brackets are hidden in Preview
* Agent chat: history popover placement and scrolling; no switching or deleting mid-turn
* The editor toolbar spans the right sidebar
* The per-note font picker is inline at half size
* A plugin's dependency is installed when the plugin is already on at launch
* Diagram tabs stay open, and the editor toolbar hides over them
* The cursor no longer jumps when a note is renamed
* Dragging a note onto another in the sidebar drops it there
* The right sidebar's toggle icon matches the left's
* The inline Attributes block shows only when something is set to show
* The draw.io editor tab opens right after inserting a diagram
* Renaming in the sidebar renames the file or folder when the name comes from it
* The Add attribute form is inline instead of a floating popover
* The Trash view is per vault, like Home
* Shows where a dragged table row or column will land
* The sidebar title follows the heading until you rename the note
* Right-click no longer selects text in the sidebars and an empty editor
* Autosave waits for a pause in typing as intended
* Presentations stop running when the Slidev plugin is off
* Diagram save failures are shown, and plugin installs show progress
* Deleting a note removes the empty folders it leaves


## 0.3.0 (2026-04-28) {#v0.3.0}

### Features

* Settings: per-vault settings, with a gear icon next to the repository
* Vault settings: Sync is renamed Vault, with a Move vault… button


## 0.2.0 (2026-04-28) {#v0.2.0}

### Features

* Filter by several tags at once; Trash previews hide frontmatter
* Context menus, permanent delete, tag drill-in and tidier navigation
* Push and pull with git, and a default .gitignore
* Drag and drop or paste media into a vault; a chevron to collapse sections
* Editor: a muted, iA Writer-style theme
* Trash from git history, with a preview in the editor
* An icon-only navigation rail with Home, Search, Trash, Help and Settings
* Media cards and a restore-from-Trash banner
* Each vault syncs, auto-commits and connects to its remote on its own
* Several vaults at once
* A native macOS menu bar with Settings… (⌘,)
* The Trash list is back in the sidebar, with an active highlight
* Nested notes, bookmarks, commands and resizable sidebars
* Pin and delete the current note
* The first desktop version: notes, live preview and a sidebar
* Properties, history, revision tabs and collapsible sections
* A right sidebar, a help dialog, a settings screen and more shortcuts
* Right sidebar: a table of contents and note details
* Search: a Cmd+K command palette, from the sidebar and the titlebar
* Sidebar: pin and delete on hover for each item
* Sidebar: the connected repository shows as the header instead of "Local"
* A status bar, settings sections, editable commands, Cmd+S, and reload on focus
* Tabs above the editor
* A Trash view, single-click delete and a sidebar footer toolbar
* Vault sync, shortcuts in settings, search in the top bar and media
* Notes are committed automatically after you write
* A folder per note, and a dot on Trash
* Notes are saved to disk in a local git repository
* Wikilinks, backlinks, tags with a tag filter, and tag highlighting

### Bug fixes

* Editor: macOS text replacements and spelling now work
* History: a restored revision is committed at once, as Restored
