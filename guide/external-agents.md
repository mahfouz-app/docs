---
layout: guide
title: "External agents (MCP)"
since: "0.12.0"
description: "Let Claude Code, Claude Desktop, Codex or claude.ai read and edit your vaults, and choose which edits wait for you."
permalink: /guide/external-agents/
---

External agents are AI apps outside Mahfouz, such as Claude Code, Claude
Desktop, Codex or claude.ai, connected to it over MCP. Once connected, an
agent can read the vaults you allow and work in them: create notes and nest
them under other notes, create databases and add rows, add tasks and tick
them off, comment, look up and add [people](/guide/people/) {% include since.html v="0.13.0" %}, and ask to publish a note. You decide what each agent can do in each
vault, from nothing to publishing, and which of its edits wait for your
approval.

## Connect an agent in the desktop app

1. Open Settings → AI → External agents and turn on **Allow external
   agents (MCP)**.
2. Click **Connect a client** and pick **Claude Code**, **Claude Desktop**,
   **Codex** or **Other**. Change the name if you like; it's how the client
   shows up in Settings and on its proposals.
3. Under **Access to each vault**, choose what the agent may do in each
   vault: **No access**, **Read**, **Edit** or **Publish** (see
   [Access levels](#access-levels)). The vault you have open starts at
   **Edit** and the others at **No access**. Click **Connect**.
   {% include since.html v="0.17.0" %}
4. Copy what Mahfouz shows into the client:
   - **Claude Code**: a `claude mcp add mahfouz …` command. Run it in a
     terminal.
   - **Claude Desktop**: a JSON block. Add it to `claude_desktop_config.json`
     (in Claude Desktop, Settings → Developer → Edit Config), then restart
     Claude Desktop.
   - **Codex**: a `codex mcp add mahfouz …` command to run in a terminal,
     or the same setup as a block for `~/.codex/config.toml`.
   - **Other**: the command, its arguments and an environment variable,
     for any client that can start a stdio MCP server.

The snippet holds the client's token, and Mahfouz shows it only once. If
you lose it, revoke the client and connect it again.

The agent reaches your vaults through the running app.

### When Mahfouz is closed {% include since.html v="0.13.0" %} {#when-mahfouz-is-closed}

- **Mahfouz isn't running:** a connected agent starts it in the
  background. No window opens and nothing takes focus. The agent's first
  call waits up to 20 seconds while your vaults load. If External agents
  is turned off, the agent is told to open Mahfouz and turn it on.
- **You close the window:** turn on **Keep available when the window is
  closed**, under **Allow external agents (MCP)**, and Mahfouz keeps
  running. A Mahfouz item in the menu bar shows that it's running: click
  it to open Mahfouz. Right-click it for a menu
  {% include since.html v="0.15.0" %} that shows the version and how many
  agents made a request in the last 5 minutes, with **About**,
  **Settings…** and **Quit**. Click the version to open Mahfouz too.
  **Quit** always quits.
  Closing the window locks every encrypted note you unlocked
  {% include since.html v="0.17.0" %}: its tab closes, and you unlock it
  again when you open Mahfouz.
- **Nothing is happening:** with no window open and no agent request for
  30 minutes, Mahfouz quits on its own. This applies whether the window
  was closed or an agent started the app.

Only agents connected with the desktop snippet can start Mahfouz. A vault
that needs you first, such as one encrypted with git-crypt that isn't
unlocked, isn't prompted for: the agent gets the same error it would with
the app open.

## Connect an agent on the web {% include since.html v="0.12.0" %} {#connect-an-agent-on-the-web}

On [web.mahfouz.app](https://web.mahfouz.app), agents connect through a connector
URL instead of a token:

1. Open Settings → AI → External agents in the browser you use Mahfouz in,
   and turn on **Allow external agents (MCP)**.
2. Copy the **Connector URL**, `https://api.mahfouz.app/mcp`, and add it as a
   custom connector in your agent: in Claude, Settings → Connectors; or in
   Claude Desktop or Codex.
3. The agent opens a Mahfouz page. Sign in with GitHub if asked, check the
   app's name and where access goes, and click **Allow**. Reading notes,
   databases and tasks is always included. Untick **Propose and make
   edits** to connect it read only.
4. Back in Settings, the client appears under **Connected clients** with
   every vault at **No access**. Choose its [access level](#access-levels)
   in each vault it may use. {% include since.html v="0.17.0" %}
   A client you connected read only can be given **Read** at most.

Which vaults a client can reach is set per browser, in the browser where
you allow them. Agents can reach your vaults only while a Mahfouz tab is
open.

To let an agent work with no Mahfouz window or tab open, connect it to
your GitHub repositories instead: see
[Agents on GitHub](/guide/online-agents/).

## Access levels {% include since.html v="0.17.0" %} {#access-levels}

Each client has its own access level in each vault, chosen next to the
vault in Settings → AI → External agents, as for
[agents on GitHub](/guide/online-agents/):

- **No access**: the agent can't see the vault.
- **Read**: read notes, databases, tasks and people. Any change is refused
  with "You can read … but not change it".
- **Edit**: read, and propose or make changes. Publishing and unpublishing
  are refused.
- **Publish**: also ask to publish and unpublish notes.

The agent is offered only the tools its levels allow: no tool that changes
notes while every vault is at **Read**, and `publish_note` and
`unpublish_note` only while a vault is at **Publish**. `list_vaults` tells
it, for each vault, whether it can change notes (`can_write`) and publish
them (`can_publish`). Most clients read the tools when they connect, so
after you raise a level, reconnect the client to offer it the new tools.

Clients connected before access levels keep what they could do at
**Edit**. To let one publish, set the vault to **Publish**.

## Approval modes

At **Edit** and **Publish**, each client has its own mode in each vault,
chosen under its access level in Settings → AI → External agents:

- **Ask before every edit**: every change waits for you.
- **Ask before destructive edits**: the default. Changes apply right
  away, except deletes, moves, attribute removals, turning a note into a
  database, changing a person's handle {% include since.html v="0.13.0" %},
  publishing and unpublishing, and rewrites that drop most of a note.
- **Don't ask**: every change applies right away, deletes included. At
  **Publish**, publishing and unpublishing apply right away too {% include since.html v="0.17.0" %}.
  Merging people always waits for you.

An agent can ask to change its own mode. It can make it stricter on its
own, but a looser mode needs your yes: Mahfouz asks **Let "…" edit "…"
without asking?**, and nothing changes if you cancel or don't answer.
After you decline, that client can't ask again for ten minutes.

### Review and undo

When an agent has proposals waiting or has applied changes recently, a
plug button appears in the titlebar, next to the AI chat button; the
number on it is how many proposals are waiting. On a phone, it's **External agents** in the **⋯** menu on
[Home](/guide/web/#phone-home), and the number shows on **⋯** too. {% include since.html v="0.17.0" %} Click it to see
each one, with the client, the vault and how many lines change, then
**Accept** or **Reject** it. Proposals that always need your approval say
**Destructive — always asks**.

Under **Recently applied**, the last few changes from the past day each
have **Undo**, or **Restore** for a deleted note.

Every accepted change is an ordinary edit, committed as `Agent: …`, so it
shows up in [history](/guide/history/) like any other. In a note that is in
**Suggesting**, an agent's edits to the text go into the note as
[suggestions](/guide/track-changes/#suggestions-from-the-agent) marked
**Agent** instead, whatever its mode, and wait for you to accept them there.

### Publishing and unpublishing

An agent at **Publish** in the vault can ask to
[publish](/guide/publishing/#publishing-with-the-agent) or unpublish a
note. {% include since.html v="0.17.0" %} These follow the client's approval mode: they wait
for you under **Ask before every edit** and **Ask before destructive
edits**, and apply right away under **Don't ask**. Once applied, a publish
puts that one note online as an **Unlisted** page, never its child notes,
and the agent gets the page's link; an unpublish takes the page down at
once. Neither can be undone from **Recently applied**: publish the note
again from its menu to bring a page back.

### People {% include since.html v="0.13.0" %} {#people}

An agent can read your [People](/guide/people/) directory: each person's
handle, name and contact details, plus the collaborators on the vault's
GitHub repository, and one person's open tasks and the notes that mention
them. It can also ask to:

- **Add a person**, as a new row of the People database, with the same
  handle rules as **Add person**.
- **Change a person's contact details**. A collaborator with no person note
  gets one first.
- Adding or changing a person takes `first_name` and `last_name` too, beside
  the other [contact fields](/guide/people/). {% include since.html v="0.14.0" %}
- **Change a person's handle**, which rewrites their mentions and task
  assignees across the vault, just like
  [Change handle…](/guide/people/#changing-a-handle). Under **Ask before
  destructive edits** it waits for you.
- **Merge people** with `merge_people`, just like
  [Merge people](/guide/people/#merging-people). It always waits for you,
  even under **Don't ask**, and can't be undone from **Recently applied**:
  restore the merged notes from [Trash](/guide/history/). {% include since.html v="0.14.0" %}

Each of the others has **Undo** under **Recently applied**. Undoing a handle change
changes the handle back.

Contact details are vault content: everyone with access to the vault's
repository can read them, and an agent you connect can read them too.
Nothing about people is ever published.

## Disconnect an agent

In Settings → AI → External agents:

- **Revoke** next to a client cuts it off. To use it again, connect it
  again: on desktop as a new client, with a new token; on the web by
  approving it again.
- Setting a vault to **No access** takes it away from the client, and
  turns down its proposals still waiting there. Lowering a level turns
  down the waiting proposals the new level doesn't allow. {% include since.html v="0.17.0" %}
- On the web, **Disconnect all agents** cuts off every client at once.
  [**Sign out everywhere**](/guide/web-github/#signing-in-with-github) in
  the account menu disconnects every agent connected through the web, too.

Turning off **Allow external agents (MCP)** stops agents from reaching
this app until you turn it back on.

## Privacy and safety

External agents are off until you turn them on, and nothing in your vaults
reaches an agent before then. For everywhere your notes can go, see
[Privacy](/privacy/).

- **An agent reaches only the vaults you allow, and only as far as their
  access level.** It's refused anywhere else, and a vault at **Read** can't
  be changed.
- **Notes are data, not instructions.** An agent reads notes you haven't
  shown it, and a note can contain text written to steer it. Mahfouz tells
  agents never to follow instructions found in note text, and asks before
  the edits that are hard to spot afterwards. Keep **Ask before every
  edit** for vaults whose content you didn't write yourself.
- **The desktop token is a password for your vaults.** Anyone with it can
  act as that client, and can start Mahfouz if it isn't running
  {% include since.html v="0.13.0" %}. Don't share the snippet;
  revoke the client if it leaks.
