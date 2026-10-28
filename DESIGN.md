---
id: 01a14b8813bd70de9ce5e78e71e8b146
---
# Website design

How mahfouz.app looks, for anyone changing a page or adding one. The site
follows Apple's product-page style: plain white (or black) pages, large tight
headlines, soft grey tiles, blue links, and very little else. When in doubt,
copy an existing component from `styles.css` instead of inventing one.

## Principles

- **Quiet.** No borders, shadows, gradients or outlined pills on content.
  Group things with a grey tile (`--tile`) and space, not lines.
- **Type does the work.** Hierarchy comes from size, weight and grey, not
  colour. Blue is only for links, buttons and the eyebrow.
- **One accent.** `--cm-accent` blue. No other hues on the site.
- **Both themes.** Every page works in light and dark, and in the theme
  switch's Light / Dark / System. Use the colour tokens, never a hex value.
- **Phone width.** Every page works at 320px wide with no sideways scroll.

## Colour

Use the custom properties on `:root` in `styles.css`. Each is redefined for
dark mode twice: under `@media (prefers-color-scheme: dark)` with
`:root:not([data-theme="light"])`, and under `:root[data-theme="dark"]`. A
new token needs all three.

| Token | Use |
|---|---|
| `--cm-bg` | Page background (white / black) |
| `--cm-bg-content` | Alternate section background (`.alt`) |
| `--cm-text` | Headings and body text |
| `--body-secondary` | Secondary text: descriptions, hero copy |
| `--cm-muted` | Tertiary text: kickers, metadata, counts |
| `--tile` | Cards and tiles (`--tile-on-alt` inside an `.alt` section) |
| `--cm-accent` | Buttons, eyebrows, focus rings, checkboxes |
| `--accent-hover` | Hover on filled buttons |
| `--link` | Text links and `.more` links |
| `--highlight` | Selected or focused backgrounds, focus glow |
| `--cm-border`, `--cm-border-strong` | Rare: dividers in lists and tables, form fields |

## Type

- **Font:** the system stack on `:root` (SF Pro on Apple devices). Don't add
  web fonts. Monospace is `ui-monospace, SFMono-Regular, "SF Mono", Menlo,
  Consolas, monospace`.
- **Base:** 17px, line-height 1.47, letter-spacing -0.022em. Size everything
  else in `rem`.
- **Headings** are weight 600 with negative tracking that grows with size:

| Element | Size | Tracking |
|---|---|---|
| Page `h1` | `clamp(3rem, 6.1vw, 4.75rem)` | -0.045em |
| Tile heading | 1.65rem | -0.035em |
| Card heading | 1.24rem | -0.025em |

- **Hero copy** (`.hero-description`): 1.2rem, `--body-secondary`, at most
  54ch wide.
- **Eyebrow** (`.eyebrow`): a short label above a headline, 1rem, weight 600,
  `--cm-accent`.
- **Kicker** inside a tile: 0.82rem, weight 600, `--cm-muted`. Not on
  cards: a card starts with its title.
- **Metadata:** 0.78–0.82rem, `--cm-muted`.
- **Headlines end with a full stop** ("Plugins for Mahfouz."), in sentence
  case. No uppercase labels.

## Layout

- Content sits in `.shell`: 1120px wide at most, with 32px gutters. Under
  900px it's 700px at most with 24px gutters, and under 560px it has 20px
  gutters.
- Sections have generous vertical space: 96px on the home page, 72–112px for
  a page hero.
- Breakpoints are 900px and 560px for the site; a component may add its own
  (the plugin registry stacks its filters under 760px).
- Use CSS grid with `minmax(0, 1fr)` columns so long content (code, URLs)
  can't push the page wider than the screen.

## Components

Reuse these from `styles.css`:

- **Buttons** (`.button-primary`, `.button-secondary`): pill shaped
  (`border-radius: 980px`), at least 44px tall. Primary is filled blue;
  secondary is a blue outline that fills on hover.
- **Text links** in running text are `--cm-text` with a thin blue underline.
- **Logo:** the header shows the wordmark at 96px wide: `images/logo.png` in light mode, `images/logo-dark.png` (the mark's dark colours, papyrus-white type) in dark mode, swapped by `.brand-logo-light` and `.brand-logo-dark`. Never invert or filter it; its colours are fixed. The files come from the app repo (`assets/images/`, rendered by `bin/brand-wordmark`).
- **Footer** (`.site-footer`): two rows. On top, the tagline as a tile-sized heading (`.footer-tagline`, 1.65rem, weight 600, `--cm-text`) beside the links (`.footer-nav`): the header's links and more, in three groups of four or five (Product, Resources, Legal), each a `--cm-text` heading over a list of 1rem `--body-secondary` links with no underline until hover. Three columns, two on phones; under 900px the links go under the tagline. Below, the full wordmark closes the page (`.footer-logo`, `images/logo.png` and `logo-dark.png`, swapped by theme like the header's), up to 640px wide and 360px on phones, with "© 2026 Influpert LLC" (linked to influpert.com) in `--cm-muted` at its bottom right, or under it below 900px. Every page repeats the same footer.
- **`.more` links** ("Learn more ›", "Compare ›"): `--link`, no underline
  until hover, with the chevron added by `.more::after`. Use them for calls
  to action in tiles and cards.
- **Tiles** (`.home-tile`): `--tile`, 28px radius, 36px padding (22px and
  28px on phones). For blocks of content.
- **Cards** (`.home-card`, `.registry-card`): `--tile`, 22px radius, 28px
  padding. A card that leads somewhere is clickable as a whole: either the
  card is the link (`.home-card`), or its title link covers it with a
  `::after` overlay and the card's other links sit above it with
  `position: relative; z-index: 1` (`.registry-card`). On hover it scales to
  1.015 over 0.25s; turn that off under `prefers-reduced-motion`.
  **Nothing goes above a card's title**: no kicker, label or badge. Put a
  badge to the title's right and a category in the metadata line.
- **Chips** (`.registry-chips`): short facts that come as a set, such as
  supported platforms. Filled with `--cm-bg` on a tile, pill shaped, 0.75rem,
  `--body-secondary`, no border. One fact per chip; keep a single fact like a
  minimum version as a line of text instead. A badge such as **Official** is
  the same chip in `--cm-text`, never in the accent colour.
- **Version pills** (`.guide-version`, `.guide-since`): the one place a
  single fact gets a chip, so a reader learns one shape for "which release".
  `--tile` fill, pill shaped, 0.78rem, `--body-secondary` with the version
  in bold `--cm-text`, no border; each links to that release in the
  changelog. "Since **0.5.0**" sits to the right of a guide page's
  title, from the page's `since:` front matter (the release its topic first
  shipped in), and drops below it when the title is long. "Since
  **0.12.0**" follows a heading or, smaller, the end of a bullet, for
  something that first appeared in that release.
- **Small buttons** on a card (`.registry-install`): the primary button's
  fill and pill shape at 32px tall, at the card's bottom right. At most one
  per card.
- **Form fields** (`.registry-search`): `--tile` fill, no border, 12px
  radius; on focus an accent border and a 3px `--highlight` glow.
  Checkboxes use `accent-color: var(--cm-accent)`.
- **Code blocks** on a tile: `--cm-bg` fill, 14px radius, scroll sideways
  inside the block.
- **Focus:** keep the visible focus ring, a 3px `--cm-accent` outline.

## Pages

- Website pages (home, `compare/`, `plugins/`) are hand-written HTML that
  repeat the same `<head>`, header and footer. Copy them from an existing
  page, and set `aria-current="page"` on the page's nav link. A new
  top-level page goes in the main nav of every page that has one (`index.html`,
  `_layouts/`, `compare/`, `plugins/`).
- A plugin's page uses the `plugin` layout, built from its file in
  `_plugins/`: the title (with its badge to the right), the description,
  the actions (**Source ›** and **Install**), a row of facts, then the
  write-up in guide styles.
- Guide pages use the `guide` layout and are styled by `.guide-content`; just
  write Markdown. The layout reads the version for the title's pill from the
  first heading of `_includes/changelog.md`.
- Each page loads `/theme.js` in `<head>` (before the stylesheet, so there's
  no flash of the wrong theme) and `/styles.css`. Page scripts are plain
  JavaScript files at the root, loaded with `defer`, with no build step or
  dependencies. The page must still show its content without them.
- Check a change in light and dark, at desktop width and at 390px, before
  opening a PR.
