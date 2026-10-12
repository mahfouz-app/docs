---
layout: guide
title: "Presenting notes as slides"
description: "Present a note as a slide deck and style it with slides templates."
permalink: /guide/slides/
---

Any note can be shown as a [Slidev](https://sli.dev) deck: every bare
`---` line is a slide break (a note with none is a one-slide deck).

- **<kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd>** shows the current note fullscreen, layered over
  the whole app rather than opening a tab. Arrow keys move between slides;
  <kbd>Esc</kbd> (or menu **View → Stop Presenting**, <kbd>Cmd</kbd><kbd>.</kbd>) returns you exactly
  where you were. Rebind it in `.config/settings.md` under `## Shortcuts`,
  row `mahfouz/slidev:present-fullscreen`.
- A note's menu (sidebar, tab, or toolbar ⋯) offers **Present** as a
  regular tab instead, with **Reload**, **Presenter** (opens Slidev's
  presenter view, with speaker notes and a timer, in your system browser),
  **Browser** (opens the deck itself there), and **Restart** (restarts
  Slidev) in its toolbar.
- **PDF**: a note's menu → **Export…** (or <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>E</kbd>) → Format
  **PDF** renders the deck to a PDF; once it's ready, **Save…** asks where
  to put it. Page shape follows the note's **Orientation**.
- **Enable it first**: Present is the **Slidev presentations** plugin and
  PDF export the **PDF export** plugin (Settings → Plugins), both from
  the built-in `mahfouz` registry. Each can be on without the other; the
  Export dialog only offers PDF while the PDF export plugin is on.
  Installing either is a one-time download of a few hundred MB; its
  progress shows on the notification bell (installing PDF export also installs
  Slidev). There's nothing else for you to install. Both are desktop
  only: on the web they show **Desktop only** in Settings → Plugins.
  Editing the note updates the presentation live.

## Slides templates

A template gives your decks a look (colors, a background image, fonts, a
logo, a header and footer) for both Present and PDF export. One template
can style each kind of slide differently through its layout sections.

- **Create them** in Vault Settings → **Slides**. **Use as default**
  applies a template to every note that doesn't pick one.
- **Pick one for a note** from the slides-template menu on the editor
  toolbar (next to the orientation toggle, shown once the vault has a
  template): **Default**, a named template, or **None** to opt the note
  out. The choice is stored as the note's `slides_template` attribute.
- **Header and footer**: one line of inline Markdown drawn at the top and
  bottom of every slide. Both can use [fields](/guide/fields/) (`!title`,
  `!page`, `!total`), expanded when the deck is presented or exported.
- A note overrides a template's header/footer with its own `header` /
  `footer` attribute (`none` turns that side off), and a `title_slide`
  attribute leaves slide 1 bare of either. A note whose `slides_template` is
  `none` still shows its own header or footer, if it has one.
- Presenting picks up template changes the next time you present or switch
  notes. On the web you can edit templates, but they apply only when you
  present or export from the desktop app.

### Editing a template

Settings → **Slides** shows only the fields a template sets, each with a
**×** to remove it. **+ Add property** adds the rest, in groups:

- **Colors**: background, text, accent, heading, link, muted, a second
  accent, code background and text, table border and table header.
  Background also takes a gradient.
- **Background image**: the image, plus its size, position, opacity and an
  overlay (a color or `rgba()` drawn over the image to keep text readable).
  A slide's own `image:` or `background:` still wins.
- **Text**: font, heading font and code font, plus the header and footer.
  A font is a [Google Fonts](https://fonts.google.com) family name such as
  `Inter`, or a `.woff2` file chosen with **Choose file**.
- **Logo**: an image and where it sits.

A value the app can't use is marked **Not applied** and left as you
wrote it. Images and fonts are copied into the vault's `files/` directory,
and deleting a note never removes a file a template still uses.

**Custom CSS** is applied after everything else, for anything the fields
don't cover. The fields are available as variables, such as
`var(--mahfouz-accent)` and `var(--mahfouz-heading)`. Target a layout with
`[data-layout="quote"]`; slide N is also `.slidev-page-N`.

### Styling each layout

A Slidev slide picks a layout (`layout: quote`, `layout: two-cols`), and a
template can style each one through a **layout section**:

- **A layout**, such as `quote`, styles every slide with that layout.
- **A variant**, such as `quote` with variant `wide`, styles slides that
  also have `class: wide`. It builds on the layout's section.
- **First slide** styles slide 1, whatever its layout. It replaces the
  older cover fields.

Each field is inherited: the template's own value, then the layout's, then
the variant's, then First slide's. A field a section leaves empty keeps the
value from the level above, so a section only lists what changes.

To add one, click **Add layout section** under the template, pick a
layout (First slide or one of Slidev's layouts, each with a one-line
description) and optionally type a variant. `dark` and `light` are
reserved and can't be used as variants. Each section shows how many fields
it overrides; open it to edit them, see the inherited values in grey, add
its own Custom CSS, or **Remove section**. Emptying a section keeps it.

### Layouts in the editor

In a deck (a note with its own slides template, other than **None**, or
one you've presented), the editor helps you pick layouts:

- **Completion**: in a slide's frontmatter, after its `---`, typing
  `layout:` lists the template's styled layouts first ("quote · wide —
  styled in Editorial"), then Slidev's layouts. Picking a variant writes
  both `layout:` and `class:`.
- **Apply layout…** in the slash menu (`/layout` or `/slide`) starts a new
  slide with the layout you pick and puts the cursor in it.
- **Slide 1 layout**: slide 1's layout is the note's `layout` attribute.
  Set it from the toolbar's slides-template menu → **Slide 1 layout**.
- **Hints**: a layout Slidev doesn't have, or a variant the template
  doesn't style, is marked with a suggestion ("Did you mean
  quote?").

### Built-in templates

**+ New template** in Settings → **Slides** offers **Blank template** or
**From a built-in…**, which opens a gallery of five looks:

- **Minimal**: white, Inter, blue accent.
- **Editorial**: cream, Fraunces, terracotta.
- **Bold**: black, Space Grotesk, yellow.
- **Midnight**: navy, IBM Plex Sans, teal.
- **Gradient**: white slides with a violet-to-coral cover.

Choose one (arrow keys work) and click **Add**, or press <kbd>Enter</kbd>.

- Adding writes an ordinary copy into `.config/slides.md`, named
  **Editorial 2** (and so on) if the name is taken, with a **Built-in**
  row recording which look it came from.
- It becomes the vault default only if it's the vault's first template.
- Edit its colors, font, logo and CSS like any other template. Later app
  updates never change your copy.
- Its font comes from Google Fonts when you present, like any template's.

### The file

Everything above lives in `.config/slides.md`, one `## <name>` section per
template, so templates sync with the vault and read as plain Markdown. A
template's own fields come first, then a `### <layout>` section for each
layout, `### <layout>.<variant>` for a variant and `### first` for slide 1:

````markdown
Format: 2

Default: Brand

## Brand

| Field | Value |
|---|---|
| background | #FFFFFF |
| text_color | #111111 |
| accent_color | #2F6FDE |
| font | Inter |

### quote

| Field | Value |
|---|---|
| background | #111111 |
| text_color | #FFFFFF |

### quote.wide

| Field | Value |
|---|---|
| font | Fraunces |

### first

| Field | Value |
|---|---|
| background | #2F6FDE |
````

A section with an invalid, reserved or duplicate name is kept as written
but not applied, and Settings says why. The `Format` line records the
file's version: an older app shows a newer file read-only and won't save
it, so update the app on every machine that edits templates.
