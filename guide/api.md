---
layout: guide
title: "REST API for integrations"
since: "0.26.0"
description: "Connect an app such as Hatchward to your repositories through the Mahfouz REST API: OAuth, endpoints, paging and error codes."
permalink: /guide/api/
---

{% include since.html v="0.26.0" %}

Apps that sync with Mahfouz use the REST API at
`https://api.mahfouz.app/v1/`. A board that mirrors a database is one example.
The API is for programs, not for people or AI agents: AI agents connect
through [MCP](/guide/online-agents/). The API works on your GitHub
repositories directly, so no Mahfouz window or tab needs to be open. The same
[plan limits](/guide/online-agents/#plan-limits) apply.

The full description is an OpenAPI 3.1 document at
[`https://api.mahfouz.app/v1/openapi.json`](https://api.mahfouz.app/v1/openapi.json).

## Connect an app {#connect}

An app connects with OAuth 2.1 and PKCE (S256). It uses the same authorization
server as MCP.

1. **Register once** with dynamic client registration: send `POST
   https://platform.mahfouz.app/mcp/register` with your `redirect_uris` and
   `client_name`, and keep the `client_id` it returns.

   A registration that goes unused for 30 days is deleted; every token request
   keeps it alive. If a token request answers `invalid_client`, register
   again. The old client's grants end, so your users have to consent again.
2. **Authorize** at `https://platform.mahfouz.app/mcp/authorize`. Pass
   `resource=https://api.mahfouz.app/v1`, and name only that one resource.
   Ask for the scopes you need: `vaults:read`, plus `vaults:write` to change
   rows.
3. **The user consents.** They pick which repositories your app may reach, and
   give each one **Read** or **Edit**. Apps can't publish pages.
4. **Exchange the code** at `https://platform.mahfouz.app/mcp/token`, and send
   the access token as `Authorization: Bearer <token>`.
   - Access tokens last an hour. Refresh them with the refresh token.
   - See [Staying connected](#staying-connected) for how long a connection
     lasts.

A token for the API works only at `/v1/`, and an MCP token works only at
`/mcp`. Your users see your app under **Settings → Integrations**, where they
can change its repositories or revoke it. **Disconnect all agents** in
Settings → AI disconnects integrations too.

### Staying connected {#staying-connected}

{% include since.html v="0.26.0" %}

A connection lasts for as long as your app keeps refreshing its tokens. It
ends only when it goes 30 days without a refresh, or when the user
disconnects it.

- **Every refresh returns a new refresh token.** Store it and use it next
  time, and drop the old one.
- **Refresh one request at a time** for each connection. If a refresh's
  answer never arrives, retry once with the refresh token you sent; it still
  works until the next successful refresh.
- **Never send a refresh token older than that.** Mahfouz takes it as a sign
  that someone else holds the connection's tokens, and disconnects the app.
  The user then has to consent again. If several of your workers refresh,
  keep one shared copy of the refresh token, and never refresh from a copy a
  worker cached earlier.
- **Refresh at least once every 30 days**, even when there's nothing to sync.
  After 30 days without a refresh, the token request answers
  `invalid_grant`, and the user has to consent again.

A connection also ends when the user revokes your app under **Settings →
Integrations**, chooses **Disconnect all agents** in Settings → AI, or signs
out everywhere. Your next token request then answers `invalid_grant`, as it
does after a reused refresh token or 30 idle days, and the API answers
`unauthenticated`. If the user removes Mahfouz's access on GitHub,
the API answers `github_token_expired`, and the user has to consent again.

AI agents that connect through MCP work differently: their connection ends 30
days after the user consents, however often they refresh.

### Which account connected {#me}

{% include since.html v="0.26.0" %}

Send `GET /v1/me` once the token arrives. It answers whatever the user's plan:

```json
{"account": {"id": "01941f29-7c00-7a2b-9c3d-4e5f60718293", "login": "octocat"}}
```

- **Key the connection on `account.id`.** It's the Mahfouz account id, the
  same from every grant your app gets, so a reconnect gives the same id and
  two accounts never share one. Don't key on the grant, the token or your
  client id: a reconnect changes those.
- **It isn't the GitHub user id.** It's stable for the life of the Mahfouz
  account. Rarely, Mahfouz support moves a GitHub sign-in to another account;
  after that, the same person's grants report the other account's id.
- **`login` is for display.** It's the GitHub login the user had when they
  consented, and it can be out of date after a rename. Never key on it.
- Treat the id as personal data: store it to match connections, but don't log
  it or send it on to anyone else.

## Endpoints {#endpoints}

| Method and path | What it does |
|---|---|
| `GET /v1/me` | Returns the Mahfouz account the grant belongs to: `{account: {id, login}}`. See [Which account connected](#me). |
| `GET /v1/vaults` | Lists the repositories the grant reaches: `{vaults: [{id, name, can_write, paused}]}`. |
| `GET /v1/vaults/{vault}/databases` | Lists the vault's databases, a page at a time. Takes the query parameters `query`, `cursor` and `limit`. See [Listing databases](#databases). |
| `GET /v1/vaults/{vault}/databases/{id}/schema` | Returns a database's attributes, their types and a select's options, and its views. See [Reading a database's schema](#schema). |
| `GET /v1/vaults/{vault}/databases/{id}/rows` | Returns a page of a database's rows, in a view's order. Takes the query parameters `view`, `cursor` and `limit`. |
| `PATCH /v1/vaults/{vault}/databases/{id}/rows/{row}` | Sets a row's attributes. |
| `GET /v1/vaults/{vault}/databases/{id}/rows/{row}` | Returns one row with its body and version. See [A row's body](#body). {% include since.html v="0.26.0" %} |
| `PUT /v1/vaults/{vault}/databases/{id}/rows/{row}/body` | Replaces a row's body. See [A row's body](#body). {% include since.html v="0.26.0" %} |
| `POST /v1/vaults/{vault}/databases/{id}/rows/{row}/body/append` | Adds Markdown to the end of a row's body. {% include since.html v="0.26.0" %} |
| `GET /v1/vaults/{vault}/databases/{id}/rows/{row}/comments` | Lists a row's comment threads. See [Comments](#comments). {% include since.html v="0.26.0" %} |
| `POST /v1/vaults/{vault}/databases/{id}/rows/{row}/comments` | Starts a comment thread on a row. {% include since.html v="0.26.0" %} |

- **`{vault}`** is a repository's `id`, as `GET /v1/vaults` returns it.
- **Query parameters for rows:**
  - `view` is a view's key, at most 256 characters, matched without regard to case. Leave it out to get the database's first view.
  - `cursor` continues from an earlier page. See [Reading every row](#paging).
  - `limit` is the page size: 1 to 200, default 100.
- **A page of rows** is `{rows: [{id, title, created, updated, attributes}], next_cursor}`.
- **Values come back whole.** A relation is a list of `{id, title, state,
  text}`. A rollup is a number, a list or a date.

### Listing databases {#databases}

{% include since.html v="0.26.0" %}

`GET /v1/vaults/{vault}/databases` lists every database in the vault, at any
depth, including a database inside a row of another one. A page looks like
this:

```json
{
  "databases": [
    {"id": "01941f29-…", "title": "Projects", "path": "Projects/Projects.md", "kind": "custom", "row_count": 12, "updated": "2026-11-16T10:04:00Z"}
  ],
  "next_cursor": "eyJhIjoiMDE5NDFmMjkt…"
}
```

- **`id`** is the `{id}` to pass to the rows endpoints.
- **`kind`** is one of:
  - `tasks` for a task pages database;
  - `people` for the People database;
  - `daily` for Daily notes;
  - `custom` for any other.
- **`row_count`** counts all the database's rows, before any view's filters.
- **`updated`** is when the database page itself last changed, not its rows.
- **`query`** filters by title, ignoring case. It's trimmed, and must then be
  1 to 256 characters.
- **`limit`** is the page size: 1 to 200, default 100.
- A database whose settings block can't be read is still listed. Its rows
  return `422 unsupported` until someone fixes the block in Mahfouz.

Databases come in a fixed order, and each `next_cursor` continues from the
last database on its page. Renaming, moving or deleting a database while you
page never makes another one repeat or go missing. A database created while
you page may only show up on your next full pass. You can change `query` or
`limit` between pages and keep the same `cursor`.

### Reading a database's schema {#schema}

{% include since.html v="0.26.0" %}

`GET /v1/vaults/{vault}/databases/{id}/schema` describes a database: its
views, and every attribute its rows can hold, with each attribute's type. It
only reads, so it's safe to call before each check of a field mapping. It
looks like this:

```json
{
  "id": "01941f29-…", "title": "Projects", "path": "Projects/Projects.md", "kind": "custom",
  "version": "9f2c…",
  "views": [
    {"key": "Board", "name": "Board", "type": "kanban", "columns": ["title", "owner"], "group_by": {"property": "status", "direction": "ASC"}}
  ],
  "attributes": [
    {"key": "owner", "label": "Owner", "type": "relation", "options": null, "format": null,
     "relation": {"target": {"id": "01941f2a-…", "title": "People", "kind": "people"}, "target_text": "[[People]]", "reverse": "projects"}, "rollup": null},
    {"key": "status", "label": null, "type": "select", "options": [{"value": "To do", "color": "gray"}, {"value": "Done", "color": "green"}],
     "format": null, "relation": null, "rollup": null}
  ]
}
```

- **Which attributes are listed:** every key the database's settings name,
  every key one of its views uses, and every key one of its rows holds, sorted
  by key. That includes a typed attribute no row has a value for yet.
- **`id`, `title`, `created`, `updated`, `created_by` and `updated_by`** aren't in
  `attributes`: each row carries them as its own fields. A view's `columns`
  can still name them.
- **`type`** is the attribute's type: `text` (also for an attribute with no
  type set), `number`, `checkbox`, `url`, `email`, `phone`, `date`,
  `datetime`, `select`, `multiselect`, `color`, `font`, `attachment`,
  `image`, `audio`, `video`, `relation` or `rollup`.
- **`options`** lists a select's or multi-select's options in their set
  order, including options no row uses yet. It's `null` for other types.
- **`format`** is a date's fixed display format, or `null`.
- **`relation`** says which database a relation links to. `target` is
  `null` when the database it names can't be found. A `target.kind` of
  `people` is a link to people, such as an assignee.
- **`rollup`** names the relation it reads through, the `property` it reads
  on the linked rows and its `function`. An `error` says why it can't be
  computed.
- **`version`** changes whenever anything in the answer does. Compare it with
  the one you stored to see whether your mapping needs checking again.

An option has no separate id: its `value` is the text rows hold. When someone
renames an option in Mahfouz, every row holding it changes in the same commit.
Your next schema shows one option gone and a new one, so map it again. A row
can also hold a value no option lists, for example one typed by hand, so plan
for a value you don't recognize.

A row's multi-select comes back from the rows endpoint as a list when it's
stored as one, and as text (`"a, b"`) when someone wrote it that way.

A database whose settings block can't be read, or with more than 1000
attributes, returns `422 unsupported`.

### Setting attributes {#patch}

A `PATCH` takes a body like this:

```json
{"attributes": {"status": "Done", "tags": ["a", "b"], "due": null}}
```

- A list is written as a list, unless the key is typed as text or select.
  Then it's stored as text.
- `null` removes a key. A key the row doesn't have is skipped, so the same
  request can safely be sent again.
- Setting some keys and removing others happen as separate writes.
- `title`, `created` and `updated` can't be set this way.
- The answer is the row as it reads after the change.

If two apps change the same key at the same time, the last write wins.
`PATCH` doesn't take `If-Match` or `Idempotency-Key` yet: sending either
returns `400`, so it never writes unconditionally when you meant it not to.

### A row's body {#body}

{% include since.html v="0.26.0" %}

`GET …/rows/{row}` returns the row as a page of rows does, plus two fields:

```json
{"id": "01941f2a-…", "title": "Ship it", "created": "…", "updated": "…", "attributes": {"status": "Ready"},
 "body": "# Ship it\n\nThe plan.\n", "version": "9f86d081884c7d65…"}
```

- **`body`** is the note's Markdown below its frontmatter, as stored.
  Comments and suggestions are in it as CriticMarkup.
- **`version`** changes whenever the row's file changes: its body, an
  attribute or a comment. It's also sent as the `ETag` header. It isn't a git
  commit id.
- An encrypted row returns `"body": null` and `"encrypted": true`.

To change the body, send `PUT …/body` with `{"body": "…"}`, or add to the end
with `POST …/body/append` and `{"text": "…"}`. Both answer
`{id, title, version}` and the new `ETag`.

- **Send `If-Match`** with the `ETag` you read. If the row has changed since,
  the write is refused with `412 version_mismatch` and nothing is written.
  The answer's `ETag` header has the current version, so read the row again
  and decide. `If-Match: *` matches any version. Leave the header out to
  write regardless.
- A changed first heading changes the row's title, and its file name with it.
  The answer has the new title.
- A body can't add, remove or change a comment. Send the threads back as you
  read them, and add comments through [Comments](#comments).
- The write is refused with `422 refused` while the row is in Suggesting
  mode, and with `422 unsupported` for an encrypted row.
- A body is at most 1 MB.
- **Known limit:** a change made on GitHub between the version check and the
  save can still land under yours when the two merge cleanly.
- A read can be up to 5 seconds behind, so a write with its `ETag` can
  occasionally get a `412` it didn't need. Read again and retry.

### Comments {#comments}

{% include since.html v="0.26.0" %}

`POST …/comments` starts a thread as the user who connected, recording your
app's OAuth client id:

```json
{"text": "Picked up by the sync [op-42]", "quote": "The plan."}
```

- **With `quote`**, the thread is anchored on that text. It must appear
  exactly once in the body, outside other comments and suggestions.
- **Without `quote`**, the thread is anchored to the row as a whole, in a
  paragraph of its own at the end of the body. This works on an empty row
  too.
- `text` is at most 10,000 characters. Line breaks become spaces.
- It answers `201` with `{thread, version}` and the new `ETag`. It works in
  Suggesting mode. An encrypted row returns `422 unsupported`.

`GET …/comments` returns every thread in the row, in order:

```json
{"threads": [{"id": "3b1f0c2a9d8e7f65", "anchor": "The plan.", "resolved": false,
  "entries": [{"author": "@octo", "created": "2026-11-16", "text": "Picked up by the sync [op-42]", "edited": false, "created_by_client": "Fh3kq…"}]}],
 "version": "…"}
```

- **`created_by_client`** is the OAuth client id that wrote a comment through
  this API, or `null`. Use it, or a marker of your own in `text`, to find
  your comment after a write whose answer you lost.
- **`id`** follows the thread's first comment. It stays the same when the
  anchor text or the replies change, and changes if someone edits the first
  comment in Mahfouz.
- `created` is a date in UTC.

### Retrying writes safely {#idempotency}

{% include since.html v="0.26.0" %}

The body and comment writes take an `Idempotency-Key` header: 1 to 128
printable ASCII characters that name the write, such as your own operation
id.

- Sending the same request again with the same key within 24 hours returns
  the first answer, status and `ETag` included, without writing again.
- The same key with a different request returns `409 idempotency_conflict`.
  `If-Match` isn't part of the comparison, so a retry after re-reading still
  matches.
- While the first request is still running, a repeat returns `503 busy`.
- An answer that saved nothing (an error with `"landed": false`) isn't kept,
  so retrying runs the write again.
- If Mahfouz lost track of the first request's outcome, every repeat returns
  `500 internal` with `"landed": null`. Read the row, then use a new key.
- A key belongs to your grant and to one vault.

### Reading every row {#paging}

Ask for pages until `next_cursor` is `null`. Pass each page's `next_cursor`
back as `cursor`, with the same `view`.

A row deleted while you page can shift later pages by one. De-duplicate rows
by `id`, and treat one full pass as the current set.

## Errors {#errors}

Every error answers with an HTTP status and a JSON body:

```json
{"code": "indexing", "class": "throttled", "message": "Indexing octo/notes (3/40 notes); retry in about 10 s", "retryable": true, "retry_after_s": 10, "landed": false}
```

| Field | Meaning |
|---|---|
| `code` | What went wrong, from the table below. A code keeps its meaning once it ships. |
| `class` | A broader category, for a code your app doesn't know yet: `throttled`, `provider_unavailable`, `permission_lost`, `not_found`, `conflict`, `invalid_mapping`, `size_limit`, `unsupported` or `internal`. |
| `message` | What happened, written for people. Don't parse it. |
| `retryable` | Whether the same request, unchanged, may work later. |
| `retry_after_s` | How many seconds to wait before retrying. Every retryable `429` and `503` includes it, and also sends it as a `Retry-After` header. An error answered after the change was pushed names no wait. |
| `landed` | Whether a change reached GitHub. `false` means nothing was pushed for certain. `null` means Mahfouz can't tell, so read the row before writing again. `true` means the change was pushed before the error. |

| Code | Status | When |
|---|---|---|
| `invalid_argument` | 400 | A parameter, cursor or body is missing, unknown or malformed. |
| `unauthenticated` | 401 | The token is missing, expired, revoked, or not for this API. |
| `permission_denied` | 403 | The grant doesn't reach that repository, or may only read it. |
| `github_token_expired` | 403 | The user needs to consent again. |
| `plan_has_no_agents` | 403 | The user's plan doesn't include working while Mahfouz is closed. |
| `repository_paused` | 403 | The plan pauses this repository. |
| `not_found` | 404 | There's no such database, or the row isn't in it. |
| `note_changed` | 409 | The row changed on GitHub during the write. Read it again, then retry. |
| `idempotency_conflict` | 409 | The `Idempotency-Key` was used for a different request. Use a new key. {% include since.html v="0.26.0" %} |
| `version_mismatch` | 412 | The row changed since the `If-Match` version was read. The `ETag` header has the current one. {% include since.html v="0.26.0" %} |
| `cursor_expired` | 410 | Reserved for change cursors. |
| `too_large` | 422 | The repository, or the request body, is over a size limit. |
| `unsupported` | 422 | Mahfouz can't work on this: git-crypt, an encrypted note, or a database it can't read. |
| `refused` | 422 | The change can't be made as asked. The message says why. |
| `repository_blocked` | 423 | Agents are stopped for the repository because a push rewrote its history. |
| `rate_limited` | 429 | Too many requests. |
| `hours_cap_reached` | 429 | This month's hours are used up. `retry_after_s` counts down to the reset. |
| `internal` | 500 | Mahfouz failed. |
| `indexing`, `busy`, `upgrading` | 503 | The repository's workspace is starting, busy, or being updated. |
| `server_paused`, `github_unavailable`, `at_capacity` | 503 | Mahfouz or GitHub can't serve the request right now. |
| `not_saved` | 503 | The change wasn't saved, or was saved only in part. `landed` says which. |

Cloudflare sits in front of Mahfouz and can answer with its own `502`, `504`
or `52x` page, which has no JSON body. Treat those as retryable, with an
unknown outcome.
