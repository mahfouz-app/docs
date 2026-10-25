---
layout: guide
title: "Fields"
since: "0.2.0"
description: "Type { to pick a field such as {today}, and define your own."
permalink: /guide/fields/
---

A field is a named snippet: today's date, a signature, the note's ID.
Type <kbd>{</kbd> in a note to pick one of your fields from a menu, and keep
typing to narrow it (`{si`). {% include since.html v="0.13.0" %} Each row shows what it will insert;
picking one inserts it in place, once, as fixed text. <kbd>Enter</kbd>
picks the highlighted field, the first one too, even before you type a
name. {% include since.html v="0.15.0" %} The menu stays
closed for CriticMarkup (`{++`, `{--`, `{~~`, `{==`, `{>>`), a second `{`,
and inside code and math. **Edit fields…** at the bottom opens Vault
Settings → **Fields**. Fields are also in the [slash menu](/guide/slash-menu/).
For a date, type a space and <kbd>!</kbd> instead (see
[Tasks](/guide/tasks/#set-a-date)). {% include since.html v="0.13.0" %}

Fields also work in a slides template's header or footer (Vault Settings →
**Slides**), or a note's `header` / `footer` attribute, where (unlike in
the editor) they're evaluated fresh every time the note is presented or
exported, so a date stays current. Write a field there as `{name}`, such
as `{signature}`. The older `!name` still works: use it if the vault is
also opened with a version before 0.13.0, which shows `{name}` as written.
{% include since.html v="0.13.0" %} A [token](#tokens) (`{date}`, `{iso}`, `{uuid}`, `{id}`,
`{title}`, `{page}`, `{total}`, in any case) wins over a field with the
same name. The Slide number and Slide count types have a value only
there.

## The Fields list

Vault Settings → **Fields** lists the vault's fields, edited in place:
each row is the field's type, its name and what it inserts. Changes are
saved as you type. {% include since.html v="0.13.0" %}

- **Add field** adds a row and puts the cursor in its name. A name
  starts with a letter, followed by letters, digits or `_`.
- **The type** is the icon at the start of the row: click it to pick
  another. Switching back to the type a field had restores its value.
- **The trash** at the end of the row deletes the field.

Each field has a type: {% include since.html v="0.13.0" %}

| Type | Inserts |
|---|---|
| Text | The text you type, on one line. It can use the tokens below, and shows what it expands to beside it. |
| Long text | Several lines of text, such as a signature or an address. |
| Date | The current date or time, in the format you pick (see [Dates](#dates)). |
| Timestamp | The current date and time as an ISO 8601 timestamp. |
| Random text | A new random ID each time. |
| Note ID | The note's ID. |
| Note title | The note's title. |
| Slide number | The slide's number, in headers and footers only. |
| Slide count | The number of slides, in headers and footers only. |

### Built-in fields {% include since.html v="0.13.0" %} {#built-in}

Every vault has these fields. They're listed first, with a lock where the
trash would be: they can't be changed or deleted, and no other field can
take their names.

| Field | Inserts |
|---|---|
| `today` | The date, `YYYY-MM-DD` |
| `now` | The date and time, `YYYY-MM-DD HH:mm` |
| `time` | The time, `HH:mm` |
| `iso` | An ISO 8601 timestamp |
| `uuid` | A random UUID |
| `id` | The note's ID {% include since.html v="0.13.0" %} |
| `page` | The slide number (headers and footers only) |
| `total` | The slide count (headers and footers only) |

`title` is no longer a built-in field. A vault that already has it keeps
it as one of its own fields, which you can change or delete; new vaults
don't get it. {% include since.html v="0.13.0" %}

Fields no longer have a description: a vault's descriptions are dropped
the next time its fields are saved (its git history keeps them). The
autocomplete and the slash menu show what a field inserts instead.
{% include since.html v="0.13.0" %}

## Dates

A Date field's value is a menu showing today's date in its format. Pick
one of the preset formats, or **Custom…** to write your own.
{% include since.html v="0.13.0" %}

In **Custom…**, the format is a text field where each date part shows as a
chip: {% include since.html v="0.13.0" %}

- **+** inside the field inserts a part at the cursor: year, month,
  day, weekday, hour, minute, second, week. Each part shows a sample value
  from 11 December 1911, Naguib Mahfouz's birthday. A part that would run
  into the text beside the cursor is greyed out, since the two would read
  as a different part: Month right after Month reads as the month name.
  Type a separator, such as a space or `-`, first.
  {% include since.html v="0.17.0" %}
- **Click a chip** to swap it for another part, or to **Remove** it. A
  part that would run into its neighbours is greyed out there too.
  {% include since.html v="0.17.0" %}
- **Type** anything else, such as `/`, `-` or a word, between the chips.
- **Arrow keys** step over a chip as one character, and
  <kbd>Backspace</kbd> deletes it whole. <kbd>Alt</kbd><kbd>←</kbd> and
  <kbd>Alt</kbd><kbd>→</kbd> (also <kbd>Ctrl</kbd><kbd>←</kbd> and
  <kbd>Ctrl</kbd><kbd>→</kbd> on Windows and Linux) jump from chip to
  chip, and <kbd>Alt</kbd><kbd>↓</kbd> opens the menu of the chip beside
  the cursor.
- **Back to presets** (the arrow beside the field) returns to the menu.

A format's codes, which also work in a `{date:FMT}` token:

| Code | Example | |
|---|---|---|
| `YYYY` | `2026` | Year |
| `MMMM` | `December` | Month name {% include since.html v="0.13.0" %} |
| `MMM` | `Dec` | Short month name {% include since.html v="0.13.0" %} |
| `MM` | `12` | Month |
| `DD` | `09` | Day |
| `dddd` | `Wednesday` | Weekday name {% include since.html v="0.13.0" %} |
| `ddd` | `Wed` | Short weekday name {% include since.html v="0.13.0" %} |
| `HH` | `13` | Hour, 24-hour |
| `mm` | `45` | Minute |
| `ss` | `09` | Second |
| `ww` | `50` | ISO week {% include since.html v="0.13.0" %} |
| `GGGG` | `2026` | ISO week-year {% include since.html v="0.13.0" %} |

Month and weekday names are in English, so a field reads the same on
every computer. A format that shows the week and no month or day prints
the week's own year: 29 December 2025 is in week 1 of 2026, so `GGGG-Www`
gives `2026-W01`. A format with a month or day prints the calendar year.
{% include since.html v="0.13.0" %}

A format has no way to mark letters as plain text: letters that spell a
code are always read as one, so `Summary` shows a minute (`mm`) chip.
{% include since.html v="0.13.0" %}

## Long text {% include since.html v="0.13.0" %} {#long-text}

A Long text field holds several lines, such as a signature, inserted as
written, blank lines included. Switching it to Text joins its lines with
spaces.

## Tokens

A Text field can mix plain text with these tokens. Anything else passes
through as written.

| Token | Expands to |
|---|---|
| `{date:FMT}` | The current date or time in format `FMT` (codes above), such as `{date:YYYY-MM-DD}` |
| `{iso}` | The current timestamp as an ISO 8601 string |
| `{uuid}` | A random UUID |
| `{id}` | The note's ID {% include since.html v="0.13.0" %} |
| `{title}` | The note's title |
| `{page}`, `{total}` | The slide number and slide count, in headers and footers only |

A literal `{id}` already in a header or footer now expands to the note's
ID. {% include since.html v="0.13.0" %}

## The fields file

The fields live in the vault as `.config/fields.md`, which you can also
edit by hand. It's a definition list: the field's name on one line, then
`: ` and its value on the next, with any further lines of the value
indented two spaces. {% include since.html v="0.13.0" %}

```
standup
: {date:dddd} standup

signature
: Best,
  Naguib
```

The built-in fields aren't in the file. A file in the older table form is
still read, and is rewritten as a list the next time the fields are
saved. When a vault opens, a row in it with a built-in field's name is
dropped if it's the same as the built-in, and otherwise kept under a new
name, such as `today_2`. {% include since.html v="0.13.0" %}

Fields are also how the [New note prefix](/guide/notes/#new-note-prefix)
names new notes.
