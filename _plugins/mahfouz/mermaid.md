---
name: Mermaid diagrams
description: Render mermaid code blocks as diagrams, and edit one in a split editor tab.
category: Diagrams
author: Mahfouz
author_url: https://github.com/mahfouz-app
platforms: [macos, linux, windows, web]
requires: 0.8.0
source: https://github.com/mahfouz-app/plugins/tree/main/plugins/mermaid
---

```` ```mermaid ```` blocks render as diagrams. A diagram's edit button, or
inserting one from the **Embed** menu, opens it in a Mermaid tab: the source
on the left, a live preview on the right.

- Changes save back into the note as you type.
- While the source has an error, the last good diagram stays visible, the
  error shows under it, and the line is marked.
- The tab's toolbar has **Samples** to start from a template (flowchart,
  sequence, class, state, ER, Gantt, pie, mind map, timeline), zoom and
  **Fit**, **Export SVG**, **Export PNG** and **Copy SVG**.
- Mermaid's own `---config:---` header at the top of the source sets the
  diagram's theme and options, and is saved with it.
- If the diagram changes in the note while its tab is open, the tab stops
  saving and offers **Copy my version** or **Reload from note**, so neither
  edit is overwritten.
- Published pages show diagrams as images.
