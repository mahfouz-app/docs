---
layout: guide
title: "Fields"
description: "Type { to pick a field such as {title}, and define your own."
permalink: /guide/fields/
---

Type <kbd>{</kbd> in a note to pick one of your fields from a menu, and keep
typing to narrow it (`{si`). {% include since.html v="0.13.0" %} Each row shows what it will insert;
picking one inserts it in place, once, as fixed text. The menu stays closed
for CriticMarkup (`{++`, `{--`, `{~~`, `{==`, `{>>`), a second `{`, and
inside code and math. **Edit fields…** at the bottom opens Vault Settings →
**Fields**. Comes seeded with `now`, `time`, `iso`, `uuid`, `title`, `page`
and `total`. For a date, type a space and <kbd>!</kbd> instead (see
[Tasks](/guide/tasks/#set-a-date)). {% include since.html v="0.13.0" %}

Before 0.13.0 fields were typed as `!name`. In `.config/fields.md` the
Field column still reads `!name`, so older versions keep reading it.

Manage them in Vault Settings → **Fields**: an editable table of
Field / Expansion / Description rows. Expansions support these tokens:

| Token | Expands to |
|---|---|
| `{date:FMT}` | Current date/time, using `YYYY`, `MM`, `DD`, `HH`, `mm`, `ss` (e.g. `{date:YYYY-MM-DD}`) |
| `{iso}` | Current timestamp as an ISO 8601 string |
| `{uuid}` | A random UUID |
| `{title}` | The note's title |

Anything else in the expansion passes through as literal text. This lives
in the vault as `.config/fields.md`, a plain Markdown table you can also
hand-edit directly.

Fields also work in a slides template's header or footer (Vault Settings →
**Slides**), or a note's `header` / `footer` attribute, where (unlike in
the editor) they're evaluated fresh every time the note is presented or
exported, so `{date:YYYY-MM-DD}` and friends stay current. Write a field
there as `{name}`, such as `{sig}`, or as `!name`. Use `!name` if the vault is also opened with a version before 0.13.0, which shows `{name}` as written. {% include since.html v="0.13.0" %} A built-in token
wins over a field with the same name. Two extra
tokens, `{page}` and `{total}`, are available only there (headers and
footers).
