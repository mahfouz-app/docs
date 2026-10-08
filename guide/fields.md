---
layout: guide
title: "Fields"
description: "Type !name to expand a field such as !today, and define your own."
permalink: /guide/fields/
---

Type `!` followed by letters anywhere in a note to trigger autocomplete
over your custom fields. Selecting one inserts it in place, once, as fixed
text. Comes seeded with `!today`, `!now`, `!time`, `!iso`, `!uuid`,
`!title`, `!page`, `!total`.

Manage them in Vault Settings → **Fields** — an editable table of
Field / Expansion / Description rows. Expansions support these tokens:

| Token | Expands to |
|---|---|
| `{date:FMT}` | Current date/time, using `YYYY`, `MM`, `DD`, `HH`, `mm`, `ss` — e.g. `{date:YYYY-MM-DD}` |
| `{iso}` | Current timestamp as an ISO 8601 string |
| `{uuid}` | A random UUID |
| `{title}` | The note's title |

Anything else in the expansion passes through as literal text. This lives
in the vault as `.config/fields.md`, a plain Markdown table you can also
hand-edit directly.

Fields also work in a slides template's header or footer (Vault Settings →
**Slides**), or a note's `header` / `footer` attribute, where — unlike in
the editor — they're evaluated fresh every time the note is presented or
exported, so `{date:YYYY-MM-DD}` and friends stay current. Two extra
tokens, `{page}` and `{total}`, are available only there (headers and
footers).
