# Mahfouz docs

The user guide and website for docs.mahfouz.app (Jekyll). The app lives in
[mahfouz-app/app](https://github.com/mahfouz-app/app).

## Kitchen sink

`_includes/kitchen-sink/` is a sample vault that uses every content feature
Mahfouz supports. The unlisted guide page `guide/kitchen-sink.md`
(/guide/kitchen-sink/) shows each of its notes' source by including them.

Keep it current. Whenever a change adds, changes or removes anything about
how note content is written, rendered or behaves (Markdown syntax, Preview or
Source rendering, published pages, exports, editor behavior on content, a
bug fix in any of those), update the kitchen sink in the same docs PR as the
guide change:

- Add new syntax or behavior where it fits, or in a new section; change or
  remove what changed.
- For a rendering or editing bug fix, make sure the sink holds a case that
  showed the bug.
- Keep it a valid vault: every note has a unique 32-character hex `id`, task
  due dates stay in the future, links point to notes inside the sink, and
  attachments live in its `files/`.
- A new note in the sink goes in the guide page's list too, as an include.
- Don't link to the page from `_data/guide.yml` or any other page yet.
