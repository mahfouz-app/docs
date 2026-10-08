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
  once, after asking. One undo (`Cmd/Ctrl+Z`) reverts either.

Accepting keeps the suggested text. Rejecting restores the original. Either
way the change is saved and committed like any other edit.

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

- Two people suggesting changes to the *same line* at the same time will
  hit a merge conflict on sync, as with any other edit to the same line.
- On the web, syncing only fast-forwards. If someone else pushed changes to
  the note since you last pulled, the sync stops with the usual divergence
  message.
- [Presenting a note as slides](/guide/slides/) shows the suggestion markup.
  Accept or reject the suggestions before presenting.
