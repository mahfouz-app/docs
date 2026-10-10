---
layout: guide
title: "Presenting notes as slides"
description: "Present a note as a slide deck and style it with slides templates."
permalink: /guide/slides/
---

Any note can be shown as a [Slidev](https://sli.dev) deck — every bare
`---` line is a slide break (a note with none is a one-slide deck).

- **<kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>P</kbd>** shows the current note fullscreen, layered over
  the whole app rather than opening a tab. Arrow keys move between slides;
  <kbd>Esc</kbd> (or menu **View → Stop Presenting**, <kbd>Cmd</kbd><kbd>.</kbd>) returns you exactly
  where you were. Rebind it in `.config/settings.md` under `## Shortcuts`,
  row `mahfouz/slidev:present-fullscreen`.
- A note's menu (sidebar, tab, or toolbar ⋯) offers **Present** as a
  regular tab instead, with **Reload**, **Presenter** (opens Slidev's
  presenter view — speaker notes, timer — in your system browser),
  **Browser** (opens the deck itself there), and **Restart** (restarts
  Slidev) in its toolbar.
- **PDF**: a note's menu → **Export…** (or <kbd>Cmd/Ctrl</kbd><kbd>Shift</kbd><kbd>E</kbd>) → Format
  **PDF** renders the deck to a PDF; once it's ready, **Save…** asks where
  to put it. Page shape follows the note's **Orientation**.
- **Enable it first**: Present is the **Slidev presentations** plugin and
  PDF export the **PDF export** plugin (Preferences → Plugins), both from
  the built-in `mahfouz` registry. Each can be on without the other; the
  Export dialog only offers PDF while the PDF export plugin is on.
  Installing either is a one-time download of a few hundred MB, with a
  progress bar in the status bar (installing PDF export also installs
  Slidev). There's nothing else for you to install.
  Editing the note updates the presentation live.

## Slides templates

A template gives your decks a look — background color or image, text and
accent colors, a font, a logo, a footer — for both Present and PDF export.

- **Create them** in Vault Settings → **Slides**. **Use as default**
  applies a template to every note that doesn't pick one.
- **Pick one for a note** from the slides-template menu on the editor
  toolbar (next to the orientation toggle, shown once the vault has a
  template): **Default**, a named template, or **None** to opt the note
  out. The choice is stored as the note's `slides_template` attribute.
- **Cover slide**: the optional cover fields (background, image, text
  color, logo) replace the main ones on the first slide only.
- **Header and footer**: one line of inline Markdown drawn at the top and
  bottom of every slide. Both can use [fields](/guide/fields/) — `!title`,
  `!page`, `!total` — expanded when the deck is presented or exported.
- A note overrides a template's header/footer with its own `header` /
  `footer` attribute (`none` turns that side off), and a `title_slide`
  attribute leaves slide 1 bare of either. A note whose `slides_template` is
  `none` still shows its own header or footer, if it has one.
- **Custom CSS** runs after the fields, for anything they don't cover.
  Each slide is `.slidev-page`, and slide N is also `.slidev-page-N`.
- **Font** is a [Google Fonts](https://fonts.google.com) family name such
  as `Inter`, downloaded when the deck loads.
- Images are copied into the vault's `files/` directory, and deleting a
  note never removes an image a template still uses.
- Templates live in `.config/slides.md`, one `## <name>` section per
  template, so they sync with the vault and can be edited by hand.
  Presenting picks up template changes the next time you present or switch
  notes.
