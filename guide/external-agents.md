---
layout: guide
title: "External agents (MCP)"
since: "0.12.0"
description: "Let Claude, ChatGPT, Claude Code, Codex, Cursor or VS Code read and edit your vaults, and choose which edits wait for you."
permalink: /guide/external-agents/
---

External agents are AI apps outside Mahfouz, such as Claude Code, Codex,
Cursor, VS Code, Claude or ChatGPT, connected to it over MCP. Once connected, an
agent can read the vaults you allow and work in them: create notes and nest
them under other notes, create databases and add rows, add tasks and tick
them off, comment, look up and add [people](/guide/people/) {% include since.html v="0.13.0" %}, and ask to publish a note. You decide what each agent can do in each
vault, from nothing to publishing, and which of its edits wait for your
approval.

## Connect an agent in the desktop app

1. Open Settings → AI → External agents and turn on **Allow external
   agents (MCP)**.
2. Click **Connect** on the client's card:
   **Claude Code**, **Codex**, **Cursor**, **VS Code**, **Claude Desktop**
   or **Other** {% include since.html v="0.22.0" %}. Change the name if you
   like; it's how the client shows up in Settings and on its proposals.
3. Under **Access to each vault**, choose what the agent may do in each
   vault: **None** {% include since.html v="0.19.0" %}, **Read**, **Edit** or **Publish** (see
   [Access levels](#access-levels)). The vault you have open starts at
   **Edit** and the others at **None**. Click **Connect**.
   {% include since.html v="0.17.0" %}
4. Mahfouz pairs the client and shows its setup: a command to run or a
   block to paste, holding the client's token. Copy it into the client as
   its [section below](#set-up-your-client) says.

The snippet holds the client's token, and Mahfouz shows it only once. If
you lose it, revoke the client and connect it again.

The agent reaches your vaults through the running app.

### Set up your client {% include since.html v="0.22.0" %} {#set-up-your-client}

Each client below starts Mahfouz's MCP server itself, as
`Mahfouz --mcp`, with the client's token in the `MAHFOUZ_MCP_TOKEN`
environment variable. **Connect** pairs the client and shows its setup
with the path to Mahfouz and the token already filled in; the examples
here use the default macOS path and `<token>` in their place.

Claude and ChatGPT, on the web, can't start a program on your computer:
connect them through the [connector URL](/guide/online-agents/#set-up-your-client)
instead.

#### Claude Code {#claude-code}

Run the command Mahfouz shows in a terminal:

```sh
claude mcp add mahfouz -e MAHFOUZ_MCP_TOKEN=<token> -- /Applications/Mahfouz.app/Contents/MacOS/Mahfouz --mcp
```

Run `/mcp` in Claude Code to check that **mahfouz** is connected.

#### Codex {#codex}

Run the command Mahfouz shows in a terminal:

```sh
codex mcp add mahfouz --env MAHFOUZ_MCP_TOKEN=<token> -- /Applications/Mahfouz.app/Contents/MacOS/Mahfouz --mcp
```

Or add the block Mahfouz shows to `~/.codex/config.toml`:

```toml
[mcp_servers.mahfouz]
command = "/Applications/Mahfouz.app/Contents/MacOS/Mahfouz"
args = ["--mcp"]
env = { MAHFOUZ_MCP_TOKEN = "<token>" }
```

#### Cursor {#cursor}

Add this to `~/.cursor/mcp.json`. If the file already has servers, add the
`mahfouz` entry to its `mcpServers`.

```json
{
  "mcpServers": {
    "mahfouz": {
      "command": "/Applications/Mahfouz.app/Contents/MacOS/Mahfouz",
      "args": ["--mcp"],
      "env": { "MAHFOUZ_MCP_TOKEN": "<token>" }
    }
  }
}
```

Use the global file rather than a project's `.cursor/mcp.json`: a file in
a project can end up committed, token and all.

#### VS Code {#vscode}

Run this in a terminal to add Mahfouz to your VS Code user profile:

```sh
code --add-mcp '{"name":"mahfouz","type":"stdio","command":"/Applications/Mahfouz.app/Contents/MacOS/Mahfouz","args":["--mcp"],"env":{"MAHFOUZ_MCP_TOKEN":"<token>"}}'
```

Or add it to an `mcp.json` (**MCP: Open User Configuration** in the
Command Palette opens your profile's). VS Code's file uses `servers`, not
`mcpServers`:

```json
{
  "servers": {
    "mahfouz": {
      "type": "stdio",
      "command": "/Applications/Mahfouz.app/Contents/MacOS/Mahfouz",
      "args": ["--mcp"],
      "env": { "MAHFOUZ_MCP_TOKEN": "<token>" }
    }
  }
}
```

A workspace's `.vscode/mcp.json` works too, but keep the token out of a
repository: prefer your profile. Mahfouz's tools show up in Copilot Chat's
agent mode.

#### Claude Desktop {#claude-desktop}

Add the JSON Mahfouz shows to `claude_desktop_config.json`: in Claude
Desktop, Settings → Developer → **Edit Config**. If the file already has
servers, add the `mahfouz` entry to its `mcpServers`.

```json
{
  "mcpServers": {
    "mahfouz": {
      "command": "/Applications/Mahfouz.app/Contents/MacOS/Mahfouz",
      "args": ["--mcp"],
      "env": { "MAHFOUZ_MCP_TOKEN": "<token>" }
    }
  }
}
```

Then quit and restart Claude Desktop.

#### Other clients {#other-clients}

Any client that can start a local (stdio) MCP server can connect. Give it:

- **Command**: the path to Mahfouz that Settings shows, such as
  `/Applications/Mahfouz.app/Contents/MacOS/Mahfouz`.
- **Arguments**: `--mcp`.
- **Environment**: `MAHFOUZ_MCP_TOKEN` set to the client's token.

A client that only connects to remote servers over HTTP uses the
[connector URL](/guide/online-agents/#other-clients) instead.

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
   custom connector in your agent: see
   [Set up your client](/guide/online-agents/#set-up-your-client) for each
   client's steps.
3. The agent opens a Mahfouz page. Sign in with GitHub if asked, check the
   app's name and where access goes, and click **Allow**. Reading notes,
   databases and tasks is always included. Untick **Propose and make
   edits** to connect it read only.
4. Back in Settings, the client appears under **Connected clients** with
   every vault at **None** {% include since.html v="0.19.0" %}. Choose its [access level](#access-levels)
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
[agents on GitHub](/guide/online-agents/). Each vault row there has an
**Access:** line and, at **Edit** or **Publish** only, an **Ask before
changes:** line ([Ask before changes](#ask-before-changes)). {% include since.html v="0.19.0" %}

- **None** {% include since.html v="0.19.0" %}: the agent can't see the vault.
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

## Ask before changes {% include since.html v="0.19.0" %} {#ask-before-changes}

At **Edit** and **Publish**, each client has its own **Ask before
changes** setting in each vault, chosen on the line under its access level
in Settings → AI → External agents. It was called the approval mode before
0.19.0.

- **Always**: ask before every edit. Every change waits for you.
- **If risky**: the default; ask before destructive edits. Changes apply right
  away, except deletes, moves, attribute removals, turning a note into a
  database, changing a person's handle {% include since.html v="0.13.0" %},
  publishing and unpublishing, and rewrites that drop most of a note.
- **Never**: don't ask. Every change applies right away, deletes included. At
  **Publish**, publishing and unpublishing apply right away too {% include since.html v="0.17.0" %}.
  Merging people always waits for you.

An agent can ask to change its own setting. It can make it stricter on its
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
note. {% include since.html v="0.17.0" %} These follow the client's **Ask before changes**: they wait
for you under **Always** and **If risky**, and apply right away under
**Never** {% include since.html v="0.19.0" %}. Once applied, a publish
puts that one note online as an **Unlisted** page, never its child notes,
and the agent gets the page's link; an unpublish takes the page down at
once. Neither can be undone from **Recently applied**: publish the note
again from its menu to bring a page back.

### Tasks {% include since.html v="0.22.0" %} {#tasks}

An agent lists your [tasks](/guide/tasks/) with `list_tasks`: task lines
and [task pages](/guide/tasks/#task-pages) together, each with its status
(to do, in progress or done). A page also comes with its database, its
parent task and its [repeat rule](/guide/tasks/#recurring-task-pages), and
may have no due date. It can ask to:

- **Add a task** with `add_task`: a task line in a note, or with `page`
  a task page in the Tasks database it names, else the vault's own (created
  as **Tasks** when there's none). Only a page can take a `repeat` rule.
- **Tick a task off, reopen it or mark it in progress** with
  `complete_task`. Completing a recurring page moves it to its next due date
  and back to to do, as ticking it in the Tasks tab does, and the agent is
  told the new date. The agent passes the due date `list_tasks` gave it, so
  a page that was completed or rescheduled since, or a completion sent
  twice, is turned down and the page never moves forward twice.

Both have **Undo** under **Recently applied**. A row added with
`add_database_row` to a Tasks database without a status starts as to do.

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
  [Change handle…](/guide/people/#changing-a-handle). Under **If risky**
  {% include since.html v="0.19.0" %} it waits for you.
- **Merge people** with `merge_people`, just like
  [Merge people](/guide/people/#merging-people). It always waits for you,
  even under **Never** {% include since.html v="0.19.0" %}, and can't be undone from **Recently applied**:
  restore the merged notes from [Trash](/guide/history/). {% include since.html v="0.14.0" %}

Each of the others has **Undo** under **Recently applied**. Undoing a handle change
changes the handle back.

Contact details are vault content: everyone with access to the vault's
repository can read them, and an agent you connect can read them too.
Nothing about people is ever published.

## Disconnect an agent

In Settings → AI → External agents:

- **Revoke**, on the client's own heading line {% include since.html v="0.19.0" %}, cuts it off. To use it again, connect it
  again: on desktop as a new client, with a new token; on the web by
  approving it again.
- Setting a vault to **None** {% include since.html v="0.19.0" %} takes it away from the client, and
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
  the edits that are hard to spot afterwards. Keep **Ask before changes**
  at **Always** {% include since.html v="0.19.0" %} for vaults whose content you didn't write yourself.
- **The desktop token is a password for your vaults.** Anyone with it can
  act as that client, and can start Mahfouz if it isn't running
  {% include since.html v="0.13.0" %}. Don't share the snippet;
  revoke the client if it leaks.
