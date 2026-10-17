# Settings

App preferences. Hand-editable; values follow the tables below.

## Preferences

| Key | Value | Description |
|---|---|---|
| `sort_order` | `name_asc` | Sidebar ordering: `name`, `created`, or `modified`, each `_asc` or `_desc` |
| `search_sort_order` | `relevance` | Search results ordering: `relevance`, or the same `sort_order` values |
| `color_scheme` | `system` | UI theme (`light`, `dark`, `system`) |
| `editor_font` | `serif` | Editor font family (`serif`, `sans`, or `monospace`) |
| `tab_size` | `4` | Editor tab width in spaces |
| `show_line_numbers` | `false` | Show line numbers in the editor gutter (`true` or `false`) |
| `new_note_prefix` | `` | Prefix glued onto new note file names; supports date tokens YYYY/YY/MM/DD/HH/hh/mm/ss/a plus R for the note's own id (e.g. `YYYYMMDD_` or `YYYYMMDD_R_`) |
| `new_note_naming` | `title` | How new notes' files are named: `title` (the prefix and the title, following title edits) or `id` (the note's id alone; titles never rename files) |
| `display_filenames` | `false` | Show sidebar note names as on-disk filenames instead of titles (`true` or `false`) |
| `ai_provider` | `anthropic` | LLM provider for the Agent panel (`anthropic`, `openai`, or `openrouter`); the API key is stored in the OS keychain, not here |
| `ai_model_anthropic` | `` | Model id sent to anthropic; blank uses its default |
| `ai_model_openai` | `` | Model id sent to openai; blank uses its default |
| `ai_model_openrouter` | `` | Model id sent to openrouter; blank uses its default |
| `notify_system` | `true` | System notifications while Mahfouz is in the background (`true` or `false`) |
| `notify_sound` | `false` | Play a sound for errors and things waiting on you (`true` or `false`) |
| `commit_message_naming` | `titles` | Whether Auto-save, Manual save and External edits commits name the changed notes (`titles`) or only count them (`none`) |
| `notify_muted` | `` | Muted notification categories, comma-separated: `export`, `plugins`, `vault`, `sync`, `editor`, `publish`, `app`, `tasks` |

## Shortcuts

Modifier syntax:
- `Mod` — primary OS modifier (⌘ on macOS, Ctrl elsewhere)
- `Shift`, `Alt`, `Ctrl` — literal modifiers (`Ctrl` only when you need
  Ctrl on macOS specifically; otherwise prefer `Mod`)
- Combine with `+`, e.g. `Mod+Shift+N`

Action names are fixed; rows whose action name the app doesn't recognize are
ignored. To disable a shortcut, blank the binding column.

| Action | Shortcut | Description |
|---|---|---|
| `new_note_sibling` | `Mod+N` | New note at the level of the selected note |
| `new_note_child` | `Mod+Alt+Shift+N` | New child of the selected note |
| `new_note_parent` | `Mod+Alt+N` | New note at the parent level |
| `new_database` |  | New database at the active vault's root |
| `search` | `Mod+5` | Go to search |
| `command_palette` | `Mod+K` | Open the command palette |
| `find_selection` | `Mod+Alt+F` | Find the next occurrence of the selection or the word at the cursor |
| `help` | `Mod+?` | Open keyboard shortcuts help |
| `send_feedback` |  | Send feedback |
| `close_tab` | `Mod+W` | Close the active tab |
| `save` | `Mod+S` | Manual save and commit |
| `commit_notes` | `Mod+Alt+G` | Commit notes… |
| `toggle_sidebar` | `Mod+\` | Toggle the left sidebar |
| `toggle_right_sidebar` | `Mod+Shift+\` | Toggle the right sidebar |
| `nav_home` | `Mod+1` | Go to all notes |
| `nav_bookmarks` | `Mod+2` | Go to bookmarks |
| `nav_tags` | `Mod+3` | Go to tags |
| `nav_trash` | `Mod+4` | Go to trash |
| `nav_tasks` | `Mod+6` | Go to tasks |
| `export_note` | `Mod+Shift+E` | Export the active note |
| `share_note` |  | Share the active note |
| `import` |  | Import from another app into the active note |
| `toggle_bookmark` | `Mod+D` | Bookmark/unbookmark the active note |
| `toggle_autocommit` |  | Toggle auto-commit for note |
| `rename_note` | `F2` | Rename the active note |
| `duplicate_note` | `Mod+Shift+D` | Duplicate the active note |
| `move_note` | `Mod+Alt+M` | Move the active note |
| `set_note_icon` |  | Set note icon |
| `copy_note_name` | `Mod+Shift+C` | Copy the active note's name |
| `copy_note_wikilink` | `Mod+Shift+L` | Copy the active note as a wikilink |
| `copy_note_id` | `Mod+Alt+I` | Copy the active note's ID |
| `reveal_in_file_manager` | `Mod+Shift+R` | Reveal the active note in Finder |
| `show_revisions` | `Mod+Alt+R` | Show revision history for the active note |
| `delete_note` | `Mod+Shift+Backspace` | Delete the active note |
| `zoom_in` | `Mod+=` | Increase editor zoom |
| `zoom_out` | `Mod+-` | Decrease editor zoom |
| `cycle_note_appearance` |  | Cycle the active note's appearance (Auto, Light, Dark) |
| `tab_back` | `Mod+[` | Go back to the previous tab |
| `tab_forward` | `Mod+]` | Go forward to the next tab |
| `open_mind_map` |  | Open mind map |
| `add_comment` |  | Comment on the selection |
| `add_to_dictionary` | `Mod+Alt+;` | Add word to vault dictionary |
| `remove_from_dictionary` |  | Remove word from vault dictionary |
| `paste_plain` | `Mod+Shift+V` | Paste as plain text |

## Plugins

Plugins enabled for this vault, as `<registry>/<id>`. Registries and installs are per machine: a plugin listed here but not installed on this computer asks before installing.

| Plugin | Enabled |
|---|---|
| `mahfouz/drawio` | `true` |
| `mahfouz/mermaid` | `true` |
