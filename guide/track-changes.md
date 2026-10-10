---
layout: guide
title: "Track changes"
description: "Suggest edits instead of making them, then accept or reject each one."
permalink: /guide/track-changes/
---

Track changes lets you **suggest** edits to a note instead of making them,
as in Word or Google Docs. Your suggestions stay in the note, marked up,
until you or a collaborator accepts or rejects them.

## Suggesting and editing

The toolbar's **Editing ▾** / **Suggesting ▾** menu sets the mode for the
open note:

- **Editing** — your changes apply directly, as usual.
- **Suggesting** — your changes become suggestions:
  - new text shows **underlined in green**
  - deleted text stays, **struck through in red**
  - replaced text shows the old text struck through and the new text underlined

  Each suggestion records who made it and when.
- **Track changes for everyone** turns Suggesting on for the note itself.
  It's saved in the note (as `track_changes: true` in its attributes), so
  anyone who opens the note, including a collaborator after a pull,
  starts in Suggesting.

The Editing/Suggesting choice only affects you, on this device. It doesn't
change the note. Turning on **Track changes for everyone** doesn't stop
anyone from switching to Editing: it sets the default, it doesn't lock the
note.

## Reviewing suggestions

- **Hover** a suggestion to see who made it and when, with **Accept** and
  **Reject** buttons.
- When a note has suggestions, the menu shows how many. **Previous
  suggestion** and **Next suggestion** step through them.
- **Accept all** and **Reject all** resolve every suggestion in the note at
  once, after asking. One undo (<kbd>Cmd/Ctrl</kbd><kbd>Z</kbd>) reverts either.

Accepting keeps the suggested text. Rejecting restores the original. Either
way the change is saved and committed like any other edit. If a suggestion
was the whole line, for example a deleted paragraph or an added list item,
the line goes too.

## Suggestions from the agent

When a note is in **Suggesting**, the agent suggests its edits like anyone
else. When you ask it to change the note, its edits appear right away as
suggestions marked **Agent**, with a light background tint. This happens in
every agent mode, including **Manual**. Nothing changes until you accept
the suggestions.

The agent's message in the chat says how many changes it suggested and
offers:

- **Show in note** — opens the note at the agent's first suggestion.
- **Reject all agent suggestions** — removes every suggestion the agent
  has made in that note, including earlier ones, after asking. Your own
  suggestions and other people's stay.

Some edits can't be shown as suggestions: changes inside code, a link's
URL or HTML, edits inside someone else's pending suggestion, and some
changes to line breaks. For those the agent falls back to its usual
proposal card in the chat, with the reason, and you accept or reject it
there. In notes in **Editing**, the agent always works that way.

[External agents](/guide/external-agents/) such as Claude Code suggest
their edits the same way in a note that is in **Suggesting**.

## Comments

Select some text and click **Comment** in the toolbar, type your comment,
and press Enter or click the send button (the paper plane). The commented
text gets a soft amber highlight. Nothing is saved until you send the first
comment; the × button next to the box drops it.

When the cursor is inside commented text, its thread opens beside it. The
buttons are icons; point at one to see its name:

- **Reply** (paper plane) — type in the box and press Enter or click it.
- **Resolve** (check mark) — marks the thread done. The highlight goes
  away, but the thread stays in the note, and **Reopen** (the curved arrow
  that takes its place) brings it back. Replying to a resolved thread
  reopens it too.
- **Delete thread** (trash can) — removes the comments and keeps the text.
  One undo (<kbd>Cmd/Ctrl</kbd><kbd>Z</kbd>) brings them back.

Tab moves between the box and the buttons; Esc goes back to the note.

The **Comments** section in the right sidebar lists the note's open
threads, with resolved ones collapsed at the bottom. Click one to jump to
it. **Add comment** has no keyboard shortcut by default; you can give it
one under Settings → Shortcuts.

Comments work in both **Editing** and **Suggesting**, and they never become
suggestions. A comment stays on one line of text: it can't cover a heading
or list marker, code, a link or another suggestion. If the commented text
is later deleted, the thread stays as a small marker so the discussion
isn't lost.

**The agent can comment too.** Ask it to review a note and it leaves
comments marked **Agent**, or replies to a thread. In **Manual** mode you
see its comments in the chat first, and nothing is added until you accept.
In the other modes they're added right away. **Undo** on the chat card
removes them. The agent never resolves a thread, and it won't remove
someone else's reply.

## What gets tracked

Suggesting tracks the **text within lines**: typing, deleting, pasting and
inline formatting such as bold. Some edits change the shape of the note
rather than its text, so they still apply directly:

- pressing Enter, joining two lines, and list continuation
- list, quote, heading and checklist markers at the start of a line
- indenting and outdenting

Some edits are turned off while suggesting:

- reordering sections by dragging
- editing tables in the table view
- inserting a table or an embed
- typing inside HTML, a link's URL or an autolink

Edits inside code (inline code and code blocks) apply directly.

**Pasting.** When you paste text copied from a note that has suggestions,
the text is pasted as it reads with those suggestions accepted, and it
becomes your suggestion.

If you need to edit the suggestion markup itself, switch to **Editing**.
Typing it while suggesting is blocked, with the message *Switch to Editing
to edit markup directly*. Text inside someone else's suggestion can't be
edited until that suggestion is accepted or rejected.

## How it's stored

Suggestions are plain text in the note's Markdown file, written in
[CriticMarkup](https://github.com/CriticMarkup/CriticMarkup-toolkit), so
they travel with the note through git and stay readable in any editor:

```
Meet on {~~Monday~>Tuesday~~}{>>@octocat · 2026-10-08<<} at
{++10 am++}{>>@octocat · 2026-10-08<<}{--noon--}{>>@octocat · 2026-10-08<<}.
```

The `{>>…<<}` after a suggestion records its author (your GitHub login when
you're signed in) and date. Suggestions made while signed out carry no
author.

A pending suggestion doesn't count as part of the note yet:

- The note's **title**, and its file and folder name, come from the text
  *before* suggestions. Suggesting a new heading renames nothing until the
  suggestion is accepted.
- **Export** to PDF and other plugin formats uses the text before
  suggestions. **Markdown** export copies the file as it is, markup
  included.
- **Links, tags and attachments** in a suggestion count right away, so an
  image in a pending suggestion is never cleaned up as unused.

## Limits

- Comments are stored in the note's Markdown as `{==text==}` followed by
  `{>>@who · date · comment<<}`, so other editors show that markup.
- Two people replying to comments in the same paragraph at the same time
  will hit a merge conflict on sync.
- Two people suggesting changes to the *same line* at the same time will
  hit a merge conflict on sync, as with any other edit to the same line.
- On the web, syncing only fast-forwards. If someone else pushed changes to
  the note since you last pulled, the sync stops with the usual divergence
  message.
- [Presenting a note as slides](/guide/slides/) shows the suggestion markup.
  Accept or reject the suggestions before presenting.
