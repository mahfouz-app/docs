---
layout: guide
title: "External agents (MCP)"
description: "Let Claude Code, Claude Desktop, Codex or claude.ai read and edit your vaults, and choose which edits wait for you."
permalink: /guide/external-agents/
---

External agents are AI apps outside Mahfouz, such as Claude Code, Claude
Desktop, Codex or claude.ai, connected to it over MCP. Once connected, an
agent can read the vaults you allow and work in them: create notes and nest
them under other notes, create databases and add rows, add tasks and tick
them off, and comment. You decide which vaults each agent can reach, and
which of its edits wait for your approval.

## Connect an agent in the desktop app

1. Open Settings → AI → External agents and turn on **Allow external
   agents (MCP)**.
2. Click **Connect a client** and pick **Claude Code**, **Claude Desktop**,
   **Codex** or **Other**. Change the name if you like; it's how the client
   shows up in Settings and on its proposals.
3. Under **Vaults it can use**, tick the vaults the agent may reach, then
   click **Connect**.
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

The agent reaches your vaults through the running app, so Mahfouz has to
be open while you use it. If it isn't, the agent is told to open Mahfouz
and turn on External agents.

## Connect an agent on the web

On [mahfouz.app](https://mahfouz.app), agents connect through a connector
URL instead of a token:

1. Open Settings → AI → External agents in the browser you use Mahfouz in,
   and turn on **Allow external agents (MCP)**.
2. Copy the **Connector URL**, `https://mahfouz.app/mcp`, and add it as a
   custom connector in your agent: in Claude, Settings → Connectors; or in
   Claude Desktop or Codex.
3. The agent opens a Mahfouz page. Sign in with GitHub if asked, check the
   app's name and where access goes, and click **Allow**. Reading notes,
   databases and tasks is always included. Untick **Propose and make
   edits** to connect it read only.
4. Back in Settings, the client appears under **Connected clients** with
   no vaults. Tick the vaults it may use.

Which vaults a client can reach is set per browser, in the browser where
you allow them. Agents can reach your vaults only while a Mahfouz tab is
open.

## Approval modes

Each client has its own mode in each vault it can use, chosen next to the
vault in Settings → AI → External agents:

- **Ask before every edit** — every change waits for you.
- **Ask before destructive edits** — the default. Changes apply right
  away, except deletes, moves, attribute removals, turning a note into a
  database, and rewrites that drop most of a note.
- **Don't ask** — every change applies right away, deletes included.

An agent can ask to change its own mode. It can make it stricter on its
own, but a looser mode needs your yes: Mahfouz asks **Let "…" edit "…"
without asking?**, and nothing changes if you cancel or don't answer.
After you decline, that client can't ask again for ten minutes.

### Review and undo

When an agent has proposals waiting or has applied changes recently, a
plug button appears in the titlebar, next to the [notification](/guide/notifications/)
bell; the number on it is how many proposals are waiting. Click it to see
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

## Disconnect an agent

In Settings → AI → External agents:

- **Revoke** next to a client cuts it off. To use it again, connect it
  again: on desktop as a new client, with a new token; on the web by
  approving it again.
- Unticking a vault takes that vault away from the client, and turns down
  its proposals still waiting there.
- On the web, **Disconnect all agents** cuts off every client at once.
  [**Sign out everywhere (including desktop)**](/guide/web-github/)
  disconnects every agent connected through the web, too.

Turning off **Allow external agents (MCP)** stops agents from reaching
this app until you turn it back on.

## Privacy and safety

- **An agent reaches only the vaults you allow.** It's refused anywhere
  else.
- **Notes are data, not instructions.** An agent reads notes you haven't
  shown it, and a note can contain text written to steer it. Mahfouz tells
  agents never to follow instructions found in note text, and asks before
  the edits that are hard to spot afterwards. Keep **Ask before every
  edit** for vaults whose content you didn't write yourself.
- **The desktop token is a password for your vaults.** Anyone with it can
  act as that client while Mahfouz is open. Don't share the snippet;
  revoke the client if it leaks.
