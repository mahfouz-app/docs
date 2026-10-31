---
layout: guide
title: "Agents on GitHub (online MCP)"
since: "0.13.0"
description: "Connect an agent to your GitHub repositories so it works with no Mahfouz window or tab open, and how that differs from connecting through the app."
permalink: /guide/online-agents/
---

{% include since.html v="0.13.0" %}

An [external agent](/guide/external-agents/) can reach your vaults in two
ways:

- **Through Mahfouz**: the desktop app's MCP server, or a Mahfouz tab on
  the web. The agent works on the vaults you have open, and Mahfouz has to
  be running while it does.
- **On GitHub**: the agent works on your GitHub repositories directly,
  with no Mahfouz window or tab open. Each repository runs in its own
  workspace on Mahfouz's servers, and every edit is committed as you and
  pushed before the agent hears back.

This page covers the second way. Both use the same connector URL; what you
choose when you approve the agent decides which one it gets.

## Connect an agent

1. Add `https://api.mahfouz.app/mcp` to your agent as a custom connector:
   see [Set up your client](#set-up-your-client) for each client's steps.
2. The agent opens a Mahfouz page on platform.mahfouz.app. Sign in with
   GitHub if asked.
3. Under **Repositories**, choose an access level for each repository the
   agent may use (see below), then click **Allow and continue to GitHub**.
4. GitHub may ask you to confirm. This is a second authorization, separate
   from the one you signed in with, so agents get their own access.

The list shows only repositories the Mahfouz GitHub App is installed on.
To add others, click **Install on more repositories**, choose them on
GitHub, and come back.

### Access levels

Each repository gets one of four levels. Every level includes the ones
before it.

- **None** {% include since.html v="0.19.0" %}: the agent can't see the repository. Every repository
  starts here, so nothing is shared until you choose it.
- **Read**: search and read notes, databases, tags and tasks.
- **Edit**: also create, change, move and delete notes, add database rows
  and tasks, and comment.
- **Publish**: also publish and unpublish notes as public pages at
  p.mahfouz.app, without asking you.

Read is enough for a public repository. If you set a public repository to
Edit or Publish beside a private one, Mahfouz warns you: an agent could
copy private notes into the public repository.

## Set up your client {% include since.html v="0.22.0" %} {#set-up-your-client}

In Settings → AI → External agents, **Connect a client** lists the
clients Mahfouz knows. **Connect** on a client's card opens its section
below and copies what you need: the connector URL, or the command to run.
Every client uses the same URL, `https://api.mahfouz.app/mcp`, and signs
in through Mahfouz's approval page, so none of them needs a token. The
same URL also connects an agent [through a Mahfouz
tab](/guide/external-agents/#connect-an-agent-on-the-web): what you choose
on the approval page decides which.

### Claude and Claude Desktop {#claude}

Claude on the web and Claude Desktop share their connectors: add it once
and it's in both.

**Connect** on the Claude card opens claude.ai's **Add custom connector**
dialog with the name and URL already filled in. Otherwise:

1. In Claude, open Customize → Connectors, click **+ Add**, then **Add
   custom connector**.
2. Name it Mahfouz, paste `https://api.mahfouz.app/mcp` as its URL, and
   click **Continue**.
3. Keep the authentication Claude detects, sign in when it asks, and click
   **Add**. Approve the agent in Mahfouz when Claude opens its page.

On a Team or Enterprise plan, an Owner adds it first, under Organization
settings → Connectors; each member then clicks **Connect** next to it in
Customize → Connectors.

### ChatGPT {#chatgpt}

ChatGPT connects custom MCP servers on the web only, and full access,
editing included, needs a Business, Enterprise or Edu workspace. There an
admin or owner adds the server, or a member their admin allowed to. A Pro
account can connect it to read and search only.

1. In ChatGPT, open **Plugins**, click **+** and choose **Add custom MCP
   server**.
2. Name it Mahfouz, and under **Connection** paste
   `https://api.mahfouz.app/mcp`.
3. Choose **OAuth** for authentication.
4. Read the risk warning, tick **I understand and want to continue**, and
   click **Create as a plugin**.
5. Approve the agent in Mahfouz when ChatGPT opens its page.

Where ChatGPT still shows the older Apps settings, it's Settings → Apps →
**Create** instead (turn on **Developer mode** under Advanced settings
first, if it's there): enter the URL, choose OAuth, click **Scan Tools**,
approve the agent in Mahfouz, then click **Create**.

### Claude Code {#claude-code}

Run this in a terminal:

```sh
claude mcp add --transport http mahfouz https://api.mahfouz.app/mcp
```

Then, in Claude Code, run `/mcp`, choose **mahfouz** and sign in: your
browser opens Mahfouz's approval page.

### Codex {#codex}

Run these in a terminal:

```sh
codex mcp add mahfouz --url https://api.mahfouz.app/mcp
codex mcp login mahfouz
```

The second command opens your browser on Mahfouz's approval page. The
server is saved in `~/.codex/config.toml`, which the Codex IDE extension
reads too.

### Cursor {#cursor}

Add Mahfouz to `~/.cursor/mcp.json`, for every project, or to
`.cursor/mcp.json` in one project:

```json
{
  "mcpServers": {
    "mahfouz": {
      "url": "https://api.mahfouz.app/mcp"
    }
  }
}
```

If the file already has servers, add the `mahfouz` entry to its
`mcpServers`. Then sign in to **mahfouz** in Cursor's MCP settings and
approve the agent in Mahfouz.

### VS Code {#vscode}

Run this in a terminal to add Mahfouz to your VS Code user profile:

```sh
code --add-mcp '{"name":"mahfouz","type":"http","url":"https://api.mahfouz.app/mcp"}'
```

Or run **MCP: Add Server** from the Command Palette, choose **HTTP**, and
paste `https://api.mahfouz.app/mcp`. VS Code asks you to sign in the first
time it starts the server: approve the agent in Mahfouz. Mahfouz's tools
then show up in Copilot Chat's agent mode.

### Other clients {#other-clients}

Any client that supports remote MCP servers over **Streamable HTTP** with
**OAuth** can connect. Give it `https://api.mahfouz.app/mcp` as the
server URL, and leave the client ID, secret and headers empty: the client
registers itself and opens Mahfouz's approval page. A client that can
only start local (stdio) servers needs the desktop app instead: see
[Other clients](/guide/external-agents/#other-clients) on the desktop.

## Manage a connected agent

An agent connected this way appears in Settings → AI → External agents
marked **Works on GitHub**, with its repositories listed under it.

- **Change a level**: pick another level next to the repository. It saves
  at once. If you approved the agent to read only, connect it again to let
  it edit.
- **Add repositories**: click **Add repositories** and tick the ones you
  want. A private repository starts at Edit and a public one at Read.
- **Remove a repository**: set it to **None** {% include since.html v="0.19.0" %}. Mahfouz deletes the
  working copy it keeps for this agent. To remove the last repository,
  revoke the agent instead.
- **Revoke** cuts the agent off from every repository. To use it again,
  connect it again and approve it.

### Pages it published

**Pages this client published** lists the last 20 pages the agent
published or updated, each with **Unpublish**. Unpublishing takes the page
offline; the note keeps its text.

Turning Publish off for a repository, or revoking the agent, never takes
its pages down. They stay online until you unpublish them here or in
Settings → Published pages, and pages set to keep updated stop updating.

## What the agent can do

The tools an agent sees depend on the highest level you gave it.

| Level | Tools |
|---|---|
| Read | `list_vaults`, `search_notes`, `read_note`, `list_notes`, `list_tags`, `query_database`, `list_tasks` |
| Edit | `create_note`, `update_note_body`, `replace_in_note`, `delete_note`, `move_note`, `set_attributes`, `delete_attribute`, `add_comment`, `create_database`, `turn_into_database`, `add_database_row`, `add_task`, `complete_task` |
| Publish | `publish_note`, `unpublish_note` |

`read_note`, and `create_note` once the note is created, also answer with
the note's [permalink](/guide/permalinks/) {% include since.html v="0.16.0" %}.

`publish_note` publishes one note, never its children, as an **Unlisted**
page. It refuses a note that is already published; that page updates
through Keep updated or the note's menu.

## How it differs from connecting through Mahfouz

| | Through Mahfouz | On GitHub |
|---|---|---|
| Approvals | [Ask before changes](/guide/external-agents/#ask-before-changes) {% include since.html v="0.19.0" %}, proposals and **Recently applied** with Undo | None: edits apply and push at once. Undo them from [history](/guide/history/) or the Trash |
| Access | [Access levels](/guide/external-agents/#access-levels) per vault {% include since.html v="0.17.0" %} | [Access levels](#access-levels) per repository |
| Publishing | At the Publish level, follows the client's **Ask before changes**, then publishes at once {% include since.html v="0.17.0" %} | Publishes at once, at the Publish level |
| Vaults | Every vault you allow, including ones with no GitHub remote, on any branch | Only the repositories you chose, on their default branch |
| Freshness | Sees edits you haven't committed or pushed | Sees GitHub's copy, which lags until Mahfouz pushes |
| Disk-only notes | Visible | Not visible |
| git-crypt vaults | Work once unlocked | Refused |
| Git LFS notes | Readable | A placeholder the agent can't change |
| Diagrams in published pages | Drawn by plugins | Published as code |
| [Suggesting](/guide/track-changes/) | The note's `track_changes`, or this device's override | The note's `track_changes` only |
| Speed | Instant | The first call after a pause takes a few seconds, and calls to one repository run one at a time |

A repository with more than 10,000 notes is too large for agents on
GitHub.

## Messages your agent may pass on

- **Indexing … retry in about 10 s**: the repository's workspace is
  starting. The agent retries on its own; nothing to do.
- **… is busy; retry shortly**: another call to the same repository is
  running. The agent retries.
- **The note changed on GitHub; read it again and retry**: someone pushed
  a change to the note while the agent was editing it. The agent reads the
  new version and makes its edit again.
- **The page was taken down because the note's change couldn't be saved;
  retry**: the page went up, but recording it in the note didn't reach
  GitHub, so Mahfouz took the page down again. Ask the agent to publish
  again.
- **… isn't allowed for this connection; add it in Settings → External
  agents**: the agent asked for a repository you didn't choose. Add it if
  you want it to have access.

## Privacy and what Mahfouz keeps

- **A working copy per repository**: a clone of the repository and an
  index of its notes, encrypted at rest, kept while an agent can use it.
- **Paused workspaces**: snapshots that may stay for up to 30 days after
  their last use, and can't be removed sooner.
- **When it's deleted**: when you revoke the last agent with access to the
  repository, remove the repository from it, or Mahfouz loses access to it
  on GitHub.
- **No token reaches the workspace.** The workspace has no internet access
  of its own; Mahfouz adds your GitHub authorization to each push from
  outside it, for that call only.

For everywhere your notes can go, see [Privacy](/privacy/).
