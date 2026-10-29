---
layout: guide
title: "Track changes"
since: "0.11.0"
description: "Suggest edits instead of making them, then accept or reject each one."
permalink: /guide/track-changes/
---

Track changes lets you **suggest** edits to a note instead of making them,
as in Word or Google Docs. Your suggestions stay in the note, marked up,
until you or a collaborator accepts or rejects them.

When you [share a note](/guide/sharing/), the people you give **Can
comment** or **Can suggest** add comments and suggestions the same way, and
you accept or reject theirs {% include since.html v="0.16.0" %}.

## Suggesting and editing

The bottom bar's track changes menu (a pencil while Editing, a tinted pencil
with a plus while Suggesting) sets the mode for the open note:

- **Editing**: your changes apply directly, as usual.
- **Suggesting**: your changes become suggestions:
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
- **From the keyboard** {% include since.html v="0.20.0" %}:
  <kbd>F8</kbd> and <kbd>Shift</kbd><kbd>F8</kbd> go to the next and
  previous suggestion. With the cursor in one, <kbd>Mod</kbd><kbd>.</kbd>
  opens its menu: who made it and when, **Accept**, **Reject**, **Next
  suggestion** and **Previous suggestion**. After you accept or reject
  one, the next is selected. The [command palette](/guide/command-palette/)
  also has Editing/Suggesting, Accept all and Reject all, which you can
  give keys in **Settings → Shortcuts**.

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

- **Show in note**: opens the note at the agent's first suggestion and
  shades its line until you click, type or move the cursor in the note.
- **Reject all agent suggestions**: removes every suggestion the agent
  has made in that note, including earlier ones, after asking. Your own
  suggestions and other people's stay.

Some edits can't be shown as suggestions: changes inside code, a link's
URL or HTML, edits inside someone else's pending suggestion, and some
changes to line breaks. For those the agent falls back to its usual
proposal card in the chat, with the reason, and you accept or reject it
there. In notes in **Editing**, the agent always works that way.

[External agents](/guide/external-agents/) such as Claude Code suggest
their edits the same way in a note that is in **Suggesting**.

Asking the agent to publish or unpublish a note always waits for you,
whatever its mode: see
[Publishing with the agent](/guide/publishing/#publishing-with-the-agent).

## Comments

Select some text and click **Comment** (the speech bubble with a plus) in
the bottom bar, type your comment and press <kbd>Enter</kbd> or click
**Comment**. The commented text gets a soft amber highlight. Nothing is
saved until you send the first comment; **Cancel** drops it. A click on a
link inside commented text follows the link; its card's **Open thread**
opens the comment. {% include since.html v="0.20.0" %}

The **Comments** section in the right sidebar lists the note's open
threads, with resolved ones collapsed at the bottom; it's where you find
resolved threads again. Click one to jump to it (and to its card in the
[comment margin](#the-comment-margin)); its line is shaded until you
click, type or move the cursor in the note. **Add comment** has no
keyboard shortcut by default; you can give it one under Settings →
Shortcuts.

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

### The thread

When the cursor is inside commented text, its thread opens beside it, or
in its card when the [comment margin](#the-comment-margin) shows:

- **The header** says how many comments there are, or **✓ Resolved**. Next
  to it are **Resolve** (or **Reopen**) and a **⋯** menu with **Delete
  thread…**.
- **Each comment** shows its author's avatar (their GitHub picture, or
  their initials; the agent has a sparkle), their name from the
  [People](/guide/people/) directory or their GitHub login (point at the
  name to see the login), and when they wrote it: "today", "yesterday",
  "2d ago" and so on, with the full date when you point at it. A long
  comment is cut off after six lines behind **Show more**, and `@handles`
  in it are marked. A comment that was changed after it was sent shows
  **(edited)** after its date.
- **Links, wikilinks, URLs, tags and people** in a comment work as they
  do in the note: a click follows them, <kbd>Cmd/Ctrl</kbd>+click opens a
  note in the background, and a right-click opens their card, without the
  actions that edit (see [Clicking in Preview](/guide/editor/#clicking-in-preview)).
  In the right sidebar's **Comments** section they're shown but don't
  respond to clicks; open the thread to use them. {% include since.html v="0.20.0" %}
- **Your own comments** have a **⋯** (**Comment actions**) that shows when
  you point at the comment or move to it with the keyboard, and always on a
  phone. Its menu has **Edit** and **Delete comment…**. The agent's
  comments have a **⋯** with **Delete comment…** only.
- **Edit** turns the comment into a field in place, with your text in it.
  Press <kbd>Enter</kbd> (or click **Save**) to save, or <kbd>Esc</kbd>
  (or **Cancel**) to leave it as it was; `@` picks people as in a reply.
  **Save** is off while the text is empty or unchanged. If the edit can't
  be saved, the thread says why and keeps your text.
- **Delete comment…** asks "Delete this comment?" first. The replies stay.
  Deleting the first comment keeps the highlight, and the next reply
  becomes the first. Deleting a thread's only comment asks "Delete this
  thread?" and deletes the thread.
- Each edit or delete is one undo step (<kbd>Cmd/Ctrl</kbd><kbd>Z</kbd>),
  and in **Suggesting** it applies directly instead of becoming a
  suggestion.
- **Resolve** marks the thread done. The highlight goes away, but the
  thread stays in the note, folded to its first comment, **Show N more
  replies** and who resolved it. **Reopen** brings it back, and so does
  replying: the button then reads **Reply and reopen**.
- **Delete thread…** asks "Delete this thread?" first. It removes the
  comments and keeps the text, and one undo
  (<kbd>Cmd/Ctrl</kbd><kbd>Z</kbd>) brings them back.
- **The reply field** is one line until you click it. Type and press
  <kbd>Enter</kbd> (or click **Reply**) to send; **Cancel** clears it.
  <kbd>Shift</kbd><kbd>Enter</kbd> adds no new line, because a comment is
  stored on one line. Type `@` to pick someone from the People directory;
  <kbd>Enter</kbd> or <kbd>Tab</kbd> picks them, and <kbd>Esc</kbd> closes
  the list. If a reply can't be saved, the thread says why and keeps your
  text.
- In a read-only note, such as a revision, the thread has no reply field,
  buttons or **⋯**.

<kbd>Tab</kbd> moves between the field and the buttons; <kbd>Esc</kbd> goes
back to the note.

### The comment margin

When a note has open threads and its pane is wide enough (about 880 pixels
or more), each thread shows as a card in a margin to the right of the text,
in Source and Preview alike. The text moves over to make room. A card sits
level with its commented text and scrolls with it; when cards would
overlap, they stack in order, and the one you're reading stays level with
its text.

- A card shows the first comment, cut off after three lines, and how many
  replies there are. Click it, or press <kbd>Enter</kbd> on it, to put the
  cursor in its text: the card opens in place as the full thread, with
  its reply field.
- Pointing at a card tints its text, and pointing at commented text
  outlines its card.
- A resolved thread has no card, except while you're reading it, for
  example after clicking it in the sidebar.
- **On a narrower pane**, a thin strip of markers beside the text stands
  in for the cards. Markers too close together merge into one with a
  count; press it again to go through them. A marker opens its thread
  beside the text.
- **On a phone**, the markers open the thread as a sheet from the bottom
  of the screen, quoting the commented text. Tap outside it, or press
  <kbd>Esc</kbd>, to put it away.

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
- **Export** to Word, PDF and other plugin formats uses the text before
  suggestions. **Markdown** export copies the file as it is, markup
  included.
- **Links, tags and attachments** in a suggestion count right away, so an
  image in a pending suggestion is never cleaned up as unused.

## Limits

- Comments are stored in the note's Markdown as `{==text==}` followed by
  `{>>@who · date · comment<<}`, so other editors show that markup. An
  edited comment keeps its author and date and is stored as
  `{>>@who · YYYY-MM-DD · edited · comment<<}`. A comment whose own text
  starts with `edited · ` is stored as `edited\ · `, so it isn't read as
  edited.
- Two people replying to comments in the same paragraph at the same time
  will hit a merge conflict on sync.
- Two people suggesting changes to the *same line* at the same time will
  hit a merge conflict on sync, as with any other edit to the same line.
- On the web, syncing only fast-forwards. If someone else pushed changes to
  the note since you last pulled, the sync stops with the usual divergence
  message.
- [Presenting a note as slides](/guide/slides/) shows the suggestion markup.
  Accept or reject the suggestions before presenting.
