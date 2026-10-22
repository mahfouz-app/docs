---
id: 01a14b8847be75f1a0e2bfc977dc0a36
layout: guide
description: "A sample vault that uses every Markdown feature Mahfouz supports, to see them all in one place."
permalink: /guide/kitchen-sink/
---
A sample vault that uses every Markdown feature Mahfouz supports: text
formatting, lists and tasks, callouts, code, math, tables, media, diagrams,
track changes and comments, people, slides, a database and a tag to rename.

To open it, copy the `_includes/kitchen-sink/` folder from the
[docs repository](https://github.com/mahfouz-app/docs) into an empty folder
and open that folder as a vault. The sample image is in its `files/` folder.
Below is each note's source.

## The kitchen sink note

`kitchen_sink/kitchen_sink.md`

````markdown
{% include kitchen-sink/kitchen_sink/kitchen_sink.md %}
````

## A database: Reading list

`kitchen_sink/reading_list/reading_list.md`

````markdown
{% include kitchen-sink/kitchen_sink/reading_list/reading_list.md %}
````

## A database row: Dune

`kitchen_sink/reading_list/dune.md`

````markdown
{% include kitchen-sink/kitchen_sink/reading_list/dune.md %}
````

## A database row: The Left Hand of Darkness

`kitchen_sink/reading_list/the_left_hand_of_darkness.md`

````markdown
{% include kitchen-sink/kitchen_sink/reading_list/the_left_hand_of_darkness.md %}
````

## Renaming a tag: Tag rename

`kitchen_sink/tag_rename.md`

````markdown
{% include kitchen-sink/kitchen_sink/tag_rename.md %}
````

## A flow-style tags list: Tag rename flow

`kitchen_sink/tag_rename_flow.md`

````markdown
{% include kitchen-sink/kitchen_sink/tag_rename_flow.md %}
````

## A note ending in a code block: Ends with a code block

`kitchen_sink/ends_with_code_block.md`

````markdown
{% include kitchen-sink/kitchen_sink/ends_with_code_block.md %}
````

## Heading numbers: Numbered headings

`kitchen_sink/numbered_headings.md`

````markdown
{% include kitchen-sink/kitchen_sink/numbered_headings.md %}
````

## A deck: Sample deck

`kitchen_sink/sample_deck/sample_deck.md`

````markdown
{% include kitchen-sink/kitchen_sink/sample_deck/sample_deck.md %}
````

## A deck's child note: Sample deck appendix

`kitchen_sink/sample_deck/sample_deck_appendix.md`

````markdown
{% include kitchen-sink/kitchen_sink/sample_deck/sample_deck_appendix.md %}
````

## A deck with a block at the top: Deck with a top block

`kitchen_sink/deck_with_a_top_block.md`

````markdown
{% include kitchen-sink/kitchen_sink/deck_with_a_top_block.md %}
````

## A deck with text at the top: Deck with a prose top block

`kitchen_sink/deck_with_a_prose_top_block.md`

````markdown
{% include kitchen-sink/kitchen_sink/deck_with_a_prose_top_block.md %}
````

## A deck with text above a yaml block: Deck with a prose top block before yaml

`kitchen_sink/deck_with_a_prose_top_block_before_yaml.md`

````markdown
{% include kitchen-sink/kitchen_sink/deck_with_a_prose_top_block_before_yaml.md %}
````

## The People database

`people/people.md`

````markdown
{% include kitchen-sink/people/people.md %}
````

## A person: Ada Lovelace

`people/ada_lovelace.md`

````markdown
{% include kitchen-sink/people/ada_lovelace.md %}
````
