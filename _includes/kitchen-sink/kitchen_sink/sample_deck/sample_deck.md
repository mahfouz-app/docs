---
id: 8ef186b74f8744ffb9c249cadc6f9bfb
---
# Sample deck

A note written as slides: each `---` starts a slide, and a slide can open with its own frontmatter.

---
layout: quote
---

> The Analytical Engine weaves algebraic patterns.

---
layout: two-cols
---

## Left

Points on the left.

::right::

## Right

Points on the right.

---

```yaml
layout: center
class: wide
```

## Settings in a yaml block

Slidev reads a `yaml` code block right after a `---` and a blank line as the slide's settings.

---

## Links between slides

Present adds this note's children after its own slides. [[Sample deck appendix]] is a child, so this link jumps to its first slide.

A link to a note outside the deck, [[Dune|a book from the reading list]], shows its alias as plain text, and [[Reading list]] shows the note's title. A link to a note that doesn't exist, [[Missing slide]], shows its own text.
