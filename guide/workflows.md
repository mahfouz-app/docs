---
layout: guide
title: "Workflows"
since: "0.32.0"
description: "Email someone when a note is created or a row is added to a database, even when Mahfouz is closed."
permalink: /guide/workflows/
---

A workflow runs actions when something happens to a note in a vault. It
has three parts:

- **When**: what starts it. For now, **a note is created in this vault**,
  or **a row is added to a database**.
- **Only if** (optional): conditions on the new note's attributes, such as
  `Status is Lead`.
- **Then**: the actions it runs, in order. For now the one action is
  **Email**: a link to the note, or the note itself. More triggers and
  actions are coming.

Workflows run on Mahfouz's servers when your change reaches GitHub, so they
run even when no Mahfouz window or tab is open. They're part of the **Pro**
and **Max** [plans](/guide/plan/).

## Before you start

- The vault needs a GitHub remote: workflows watch the repository, not
  your computer. See [Git & sync](/guide/git/).
- You need to be [signed in with GitHub](/guide/github/), on Pro or Max.
- Workflows run from the repository's default branch. A vault with
  another branch checked out shows **Needs you** on its workflows, and
  nothing turns on from it.
- Every address a workflow emails has to be one you've confirmed. See
  [Workflow email addresses](#workflow-email-addresses).

## Create a workflow

1. Open **Vault Settings → Workflows** and click **New workflow**.
2. Give it a **Name**.
3. Under **When**, pick **A note is created in this vault**, or **A row is
   added to a database** and then the database.
4. To run only for some notes, click **Add condition**. The first condition
   is labelled **Only if**. Each condition is an attribute, an operator and a value, such as
   **Status** **is** **Lead**. With two or more, choose **And** (all must
   match) or **Or** (any can match): one choice applies to all of them.
5. Under **Then**, set up the first Email action (below). Click **Add
   action** for another. Each action's **⋯** menu moves it up or down, or
   removes it.
6. Click **Create**.

The workflow is saved as a file in the vault,
`.config/workflows/<name>.md`, and committed like any other change. It
turns on for you once that commit reaches GitHub: until then its status is
**Not pushed yet** ("It turns on once this change reaches GitHub."), with
**Push now**. A change to the vault's attribute types
(`.config/attributes.md`) has to reach GitHub too, since conditions read
them.

A workflow can have 1 to 10 actions, and email at most 20 addresses across
all of them. You can have several Email actions, for example a link to the
team and the note itself to one person.

## Conditions

Conditions read the new note's attributes, as they are when the note
reaches GitHub. They use the same operators as a database's
[filters](/guide/databases/): **is**, **is not**, **contains**, **is
empty**, and so on.

- A condition can only read an attribute with a type in **Settings →
  Attributes**, plus the note's **Title** and **ID**.
- It can't read a relation, a rollup, a **Date & time** attribute, or the
  attributes Mahfouz manages itself (created, updated and the like).
  **Date** attributes work.
- A missing attribute reads as empty, so **Region is not EMEA** matches a
  note with no Region.
- An attribute set a little later still counts. A note whose conditions
  don't match yet is checked again whenever it changes, for 24 hours. A row
  whose Status is set in the commit after it was added still sends its
  email, once.

## The Email action

- **To**: pick from your addresses. One you haven't confirmed yet is
  marked **Not confirmed**: turning the workflow on sends it a
  confirmation. **Add an address…**, at the end of your addresses, adds a
  new one. For a database workflow, you can also pick an
  [Email field of the row](#email-a-field-of-the-row).
- **Send**: **A link** (the default) or **The note**.
  - **A link** emails the note's title and an **Open in Mahfouz** button.
    The link opens only for people with access to the vault's repository.
  - **The note** also emails the note's text. The text then leaves GitHub
    and stays in that inbox.

What's never emailed, whichever you choose:

- **Protected notes** get a link with no title and no text: encrypted
  notes, [people](/guide/people/) and notes in the People database, and
  notes in a vault or folder [encrypted with git-crypt](/guide/encryption/).
  The email says the note is protected.
- **Comments and pending suggestions.** The note is sent as
  [publishing](/guide/publishing/) reads it: the original text, with
  [suggestions](/guide/track-changes/) rejected and comment threads
  removed.
- **Database views and images.** A database view in the note becomes a
  line saying to open the note, and an image becomes its description with a
  link. Nothing in the email loads from the web.
- **The author.** The email doesn't say who added the note.

The email's subject is **New in** the database or vault, then the note's
title, such as `New in Clients: Northwind Traders`. Its footer names the
workflow and who turned it on, with an **Unsubscribe** link.

### Email a field of the row

A database workflow can email an address held in the new row, such as the
**Email** of someone who filled in a form. Pick the field under **A field
of the new row** in **To**. The field has to be typed **Email** in
**Settings → Attributes**.

The address in the row isn't yours to confirm, so the person it belongs
to confirms it: a form that asks for an email can send them a confirmation
when they submit it. Until they do, the row waits, for up to 7 days; after
that, the action is skipped for that row. A row added by hand, or one whose
address was edited after the form was submitted, is never emailed through
a field. A cell holding more than one address, or anything but an address,
is skipped at once.

## Turn a workflow on and off

A workflow file is shared with everyone in the vault, but it runs only for
the people who turn it on. Each card in **Vault Settings → Workflows** has a
**Run for me** switch:

- **Turning it on** opens a review first: what starts it, which addresses
  each action emails, and whether each gets a link or the note. Click the
  button at the bottom to turn it on. If an address isn't confirmed under
  your account yet, the button sends it a confirmation, and the workflow
  starts once the address is confirmed.
- **Turning it off** applies at once, for you only.

When you turn a workflow on, its emails come from your account: it reads
the repository with your GitHub access, and its emails count toward your
daily limit.

**Editing a workflow pauses it for everyone else** who turned it on, until
they review the change. When others have turned it on, the editor names
them before you save ("Saving pauses it for @sam and 1 other until they
review it"); everyone who can read the repository sees who turned a
workflow on. It stays on for you.
Deleting a workflow deletes the file, for everyone in the vault.

**Settings → Account → Workflow email** lists the workflows you've turned
on, in every vault.

## Statuses

Each workflow shows one status:

- **On**: it runs for you. The card says when it last ran.
- **Off**: you haven't turned it on, or turned it off.
- **Not pushed yet**: the file (or the vault's attribute types) hasn't
  reached GitHub, so nothing can run it. If you turned it on, the card says
  "It turns on once this change reaches GitHub."; otherwise "It reaches the
  others in this vault once it's pushed." Click **Push now** to push.
- **Needs you**: it's stopped for you until you act. The card says why, with
  one button:

| Reason | What happened | Button |
|---|---|---|
| Changed by someone else | Someone edited what it does. | **Review** |
| Address not confirmed | An address hasn't confirmed yet. | **Send again** |
| Expired | 90 days passed without you using Mahfouz. | **Renew** |
| GitHub access ended | Mahfouz needs your permission to read the repository again. | **Reauthorize** |
| No access to the repository | Your GitHub account can't read the repository any more. | **Try again** |
| Database not found | Its database isn't in the vault any more. | **Pick database** |
| An action failed | An action couldn't send, for example because an address bounced. The other actions still ran. | **Edit** |
| Made with a newer Mahfouz | It uses a trigger or action this version doesn't have. It's shown read-only and doesn't run. | **Update Mahfouz** |
| Can't be read | The file has a mistake. The card quotes the line. | **Open file** |
| Typed by hand | Its database was typed by name in the file and isn't resolved yet. | **Pick database** |
| Another branch | The vault has another branch than the repository's default one checked out. Workflows run from the default branch. | None |

A workflow you've turned on stays on while you use Mahfouz, signed in, at
least once every 90 days: each use renews it. **Sign out everywhere** in
[Settings → Account](/guide/account/#sign-out-everywhere) turns off every
workflow you turned on.

## Workflow email addresses

A workflow only emails addresses that you, the person who turned it on,
have confirmed. Manage them in **Settings → Account → Workflow email**
(the vault's Workflows tab links there):

1. Click **Add address…**, enter the address, and click **Send
   confirmation**.
2. Mahfouz emails it a link, which works for 7 days. Once someone there
   clicks it and confirms, workflows can email it.

The list shows each address as **Confirmed** or **Waiting**, with **Send
again** and **Remove**. You can have up to 20 addresses. An address gets at
most one confirmation a day from your account.

When someone else's workflow emails an address you haven't confirmed, the
review asks to send it a confirmation before you turn it on.

## Unsubscribing

Every workflow email has an **Unsubscribe** link. It opens a page that does
nothing until you choose:

- **From this workflow**: other workflows can still email the address.
- **From every Mahfouz workflow**: until the address is confirmed again.

The email also carries a standard unsubscribe header, so a mail app's own
**Unsubscribe** button works too. An unsubscribed address is left out of
the email, and the workflow carries on with its other recipients.

## Timing and limits

- **When it runs**: usually within about 30 seconds of the commit reaching
  GitHub. A note created on your computer runs its workflows once it's
  pushed.
- **New notes only**: renaming a note, moving it, or giving it children
  doesn't count as creating it, and neither does restoring or reverting
  one. A note emails each address once per workflow.
- **Untitled notes wait**: a note still called Untitled waits until it has
  a title, for up to 24 hours. After that it's sent as it is.
- **Many notes at once**: when more than 20 new notes are ready for one
  action in a single run, each address gets one digest email listing them,
  as links.
- **Daily limits**: the workflows you turn on send at most 300 emails a
  day in all, and one address gets at most 50 workflow emails a day.
  Emails past a limit wait for the next day; they aren't dropped.
- **Plans**: on Free, workflows don't run. The files stay in the vault:
  turn them on again after you [upgrade](/guide/plan/#upgrade). A
  repository with a workflow you turned on counts toward your plan's
  repositories, like an [agent on GitHub](/guide/online-agents/).

## The workflow file

You don't need to edit the file by hand: the editor in Vault Settings
writes it. If you do, a workflow file is Markdown with one fenced
`workflow` block. Text around the block is yours, and the first heading is
the workflow's name.

````markdown
# New client intake

Mails the ops inbox when a client is added.

```workflow
format: 1
when:
  created: in 01a1c9d2e3f4a5b6c7d8e9f0a1b2c3e4 (Clients)
if:
  and:
    - status = "Lead"
    - region != "EMEA"
then:
  - email:
      to: [ops@acme.com, {field: email}]
      send: link
  - email:
      to: [you@acme.com]
      send: note
```
````

- **`format`** is `1`.
- **`when`** has one trigger, `created`, with `vault` (any new note) or
  `in <database>`. The app writes the database's ID, with its title in
  brackets for people reading the file, so renaming or moving the database
  doesn't break the workflow. A typed `in Clients` is resolved when you
  save the workflow in the editor; until then its card shows **Needs you**
  with **Pick database**.
- **`if`** is optional: one condition, or `and:` or `or:` with a list of
  them, one level only. Each is written like a database filter:
  `<attribute> <operator> <value>`, for example `status = "Lead"`,
  `owner contains "@ana"` or `email is empty`.
- **`then`** lists 1 to 10 actions. An `email` has `to:` (addresses, and
  for a database workflow `{field: <attribute>}`) and `send:` (`link`, the
  default, or `note`).

Comments in the block (`# …`) are kept when the app edits the file. A file
with a mistake shows **Can't be read** with the line, and doesn't run.
Editing the file by hand pauses it for everyone who turned it on, as editing
it in the app does, except for changes that leave what it does the same
(comments, spacing and the text around the block).

## What's stored, and where

- **In the vault**: the workflow file, `.config/workflows/<name>.md`, which
  everyone with the vault can read, addresses included. Like everything
  under `.config/`, it's [never published](/guide/publishing/).
- **On Mahfouz's servers**:
  - your confirmed addresses, until you remove them or
    [delete your account](/guide/account/#delete-your-account);
  - which workflows you turned on, each for 90 days and renewed when you
    use Mahfouz;
  - which notes each workflow has already emailed, for 90 days, so nobody
    gets the same email twice;
  - the unsubscribe list, which keeps a one-way code for each address,
    never the address itself.
- **In the inbox**: what the email holds. With **The note**, that's the
  note's text, outside GitHub.

Emails are sent from `workflows@mail.mahfouz.app`.
