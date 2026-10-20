---
layout: guide
title: "Presenting notes as slides"
description: "Present a note as a slide deck and style it with slides templates."
permalink: /guide/slides/
---

Any note can be shown as a [Slidev](https://sli.dev) deck: every bare
`---` line is a slide break (a note with none is a one-slide deck).

Leave a blank line after a `---` that separates two slides. Slidev reads a
`---` followed directly by text as the start of that slide's settings,
running to the next `---`, so a heading written right under it can vanish
from the deck. Settings go right under the `---`, with no blank line, and a
second `---` closes them:

```markdown
# First slide

---
layout: quote
---

> A quote slide.

---

# Third slide
```

Slidev also reads a `yaml` code block as a slide's settings when it's the
first thing after a `---` and a blank line, and the slide has no settings
block of its own. Mahfouz reads it the same way: the page preview leaves it
out of the slide, and layout completion, hints and the template usage counts
in Settings → **Slides** take its `layout`, `class` and `hide`:

````markdown
---

```yaml
layout: quote
```

> A quote slide.
````

Slide 1's settings are the note's own attributes, such as `layout`, not a
block at the top of its text. A block there shows as an empty slide 1 in
Present (unless the note's `hide` drops slide 1). The editor underlines it.
When the block holds only a plain `layout` or `class` that the note's
attributes don't already set differently, it offers **Move to attributes**
(not while Suggesting; a `class` alone only when the note has a `layout`).
When the block holds only text, with no `key:` line, Present drops that
text too. The editor marks those lines and offers **Remove rule**, which
deletes the rule (`---`) above them so they show on slide 1 (not while
Suggesting), and page 1 in the page preview is marked **Not shown in
Present**. When a ```` ```yaml ```` block follows the closing `---`,
**Remove rule** isn't offered, because removing the rule would hide that
block instead.

In a deck, the editor underlines lines Present won't show and offers
**Add blank line**, and their page in the preview is marked **Not shown in
Present**.

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
- **PDF**: a note's menu → **Export…** (or <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>E</kbd>), then
  the **PDF** card, renders the deck to a PDF; once it's ready, **Save…**
  asks where to put it. Page shape follows the note's **Orientation**.
- **Enable it first**: Present is the **Slidev presentations** plugin and
  PDF export the **PDF export** plugin (Settings → Plugins), both from
  the built-in `mahfouz` registry. Each can be on without the other; while
  the PDF export plugin is off, the Export dialog's PDF card offers to turn
  it on.
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
  bottom of every slide. Both can use [fields](/guide/fields/) (such as
  `{page}` and `{total}`, or `{id}` for the note's ID {% include since.html v="0.13.0" %}),
  expanded when the deck is presented or exported.
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
- **Decoration**: an SVG shape drawn on the slides
  ([Decorations](#decorations) below).

A value the app can't use is marked **Not applied** and left as you
wrote it. Images and fonts are copied into the vault's `files/` directory,
and deleting a note never removes a file a template still uses.

**Custom CSS** is applied after everything else, for anything the fields
don't cover. The fields are available as variables, such as
`var(--mahfouz-accent)` and `var(--mahfouz-heading)`. Target a layout with
`[data-layout="quote"]`; slide N is also `.slidev-page-N`.

### Styling each layout {% include since.html v="0.12.0" %} {#styling-each-layout}

A Slidev slide picks a layout (`layout: quote`, `layout: two-cols`), and a
template can style each one through a **layout section**:

- **A layout**, such as `quote`, styles every slide with that layout.
- **A variant**, such as `quote` with variant `wide`, styles slides that
  also have `class: wide`. It builds on the layout's section.
- **First slide** styles the first slide shown, whatever its layout. It
  replaces the older cover fields.

Each field is inherited: the template's own value, then the layout's, then
the variant's, then First slide's. A field a section leaves empty keeps the
value from the level above, so a section only lists what changes.

To add one, click **Add layout section** under the template, pick a
layout (First slide or one of Slidev's layouts, each with a one-line
description) and optionally type a variant. `dark` and `light` are
reserved and can't be used as variants. Each section shows how many fields
it overrides; open it to edit them, see the inherited values in grey, add
its own Custom CSS, or **Remove section**. Emptying a section keeps it.

### Usage counts {% include since.html v="0.12.0" %} {#usage-counts}

Settings → **Slides** shows how much of a template your decks use, so you
can tell whether a section does anything before you change or remove it:

- **Beside the template's name**: "· 4 notes use it", or "· not used yet".
  It counts the decks that end up with this template, whether they pick it
  themselves or fall back to it as the vault default.
- **On each layout section**: "7 slides", "1 slide", or "not used yet". A
  layout section counts every slide with that layout, its variants
  included; a variant counts slides with that layout and class; **First
  slide** counts the decks.

Slides a deck hides (a `hide: true` or `disabled: true` in their
frontmatter) aren't counted, since they don't show when you present. When
slide 1 is hidden, **First slide** styles the first slide that shows.

The counts come from your saved notes and update as the notes change.

The rename and delete dialogs give a different number: how many notes
pick the template by name. That counts only the notes whose own
`slides_template` names it, not the ones that use it as the default.

### Decorations {% include since.html v="0.12.0" %} {#decorations}

A decoration is one SVG shape, such as a wave, a corner or a mark, that a
template places on its slides without any CSS. The template itself can
have one, shown on every slide, and so can each layout section and First
slide. Add it from **+ Add property** → **Decoration**:

- **Decoration**: an `.svg` file chosen with **Choose SVG…** (copied into
  `files/`), or `none` to switch off one the section would inherit.
- **Position**: one of nine spots on the 3×3 grid (Top left through Bottom
  right), or **Fill** from the menu beside it to cover the whole slide.
- **Size**: a percentage of the slide width, such as `30%`. Fill ignores it.
- **Opacity**: from 0 to 1.
- **Layer**: **Behind text** or **In front**. In front still stays under the
  header, footer and logo.
- **Tint**: **Own colours** shows the SVG as drawn; a palette colour
  (**Accent**, **Accent 2**, **Text**, **Heading** or **Muted**) paints the
  whole shape that colour. A tint the template doesn't set falls back to the
  text colour.

Each field is inherited like the others: the template's own value, then
the layout's, then the variant's, then First slide's. A section that
inherits a decoration shows it in grey with **Hide here**, which turns it
off for that section's slides.

The decoration is drawn on each slide's `.slidev-page::after` layer, which
it owns: a template's Custom CSS can't style that layer on slides that
show a decoration. Use another element, such as `.slidev-layout::after`,
for your own effects.

### Previewing a template {% include since.html v="0.12.0" %} {#previewing-a-template}

Settings → **Slides** shows a preview beside the form (below it in a
narrow window), marked **Approximate**. It draws a sample deck with the
template's colours, fonts, images, decorations and CSS, and updates as you
edit. Its tabs switch between sample slides: **First slide**, **Content**,
one for each layout section, and **Code and table**.

- It's close to Present, not exact: CSS aimed at Slidev's own markup may
  not show, and fonts, spacing and code highlighting can differ.
- **Hide preview** folds it away, and this device remembers the choice.
  **Show preview** brings it back.
- Images and fonts over the preview's size limits are left out, and the
  preview says "Some files are too large to preview." They still apply
  when you present.
- The preview can't run scripts or load anything but your vault's files
  and Google Fonts. A template with a Google font loads it from Google, on
  the web too ([Privacy](/privacy/#google-fonts-in-slides-templates)).

#### Render with Slidev {% include since.html v="0.12.0" %} {#render-with-slidev}

On the desktop, **Render with Slidev** draws the same sample deck with
Slidev itself and shows the slides as thumbnails, labelled "Rendered by
Slidev" with the time. It needs the **Slidev presentations** plugin, version
1.8.0 or later, turned on for the vault.

- **Render again** renders the deck again; **Back to live preview** returns
  to the approximate preview.
- Any edit to the template returns to the live preview, and the preview
  says "Slidev render out of date: edited since". Click **Render again** for
  fresh thumbnails.
- It renders only the vault that's open. For another vault's templates it
  says "Open this vault to render it with Slidev."
- If the plugin is missing, off or too old, it says so and links to
  **Settings → Plugins**.
- On the web there's no button: the preview says "Exact rendering needs
  the desktop app."

### Layouts in the editor {% include since.html v="0.12.0" %} {#layouts-in-the-editor}

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

### Built-in templates {% include since.html v="0.12.0" %} {#built-in-templates}

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
layout, `### <layout>.<variant>` for a variant and `### first` for the first slide
shown:

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
