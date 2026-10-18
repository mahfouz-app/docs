---
layout: page
title: Plugin registry policy
description: "The rules for listing a plugin on docs.mahfouz.app, what a listing means, and how to report a plugin."
permalink: /plugins/policy/
---

The [plugin registry](/plugins/) lists plugins for Mahfouz, from the
official `mahfouz` registry and from registries other people run. This
page sets the rules for being listed, and what a listing means for the
people who install a plugin.

## What a listing means

A listing says a plugin exists and where its source is. It isn't a
security review, a guarantee that the plugin works, or an endorsement.
Only plugins in the `mahfouz` registry, marked **Official**, are made by
Influpert LLC.

A plugin runs inside Mahfouz and can read and change the vaults you open.
Mahfouz asks you to approve every install and update, and limits the
plugin to the web addresses it lists, but read what a plugin does, and
who made it, before you install it.

## Rules for listing a plugin

To be listed, a plugin must:

- have its source public, at the `source` link in its file;
- say what it does accurately, in its description and its page;
- list, in its manifest, every web address it contacts, and contact no
  others;
- work with the Mahfouz versions and platforms its file lists;
- state its licence, and any terms a user must accept, in its repository.

A plugin must not:

- send notes, keys or anything else from a user's computer anywhere they
  didn't ask it to;
- contain malware, mine cryptocurrency, show ads, or track people;
- hide what its code does, for example with obfuscated or minified-only
  source;
- break the law or infringe someone's rights, including by using the
  Mahfouz name or logo in a way that suggests it's official;
- do something different from what its listing says, or change to do so
  in a later version.

## Removing a listing

We may refuse a listing, or remove one, if a plugin breaks these rules,
stops working, or puts users at risk. We may also remove a registry from
the list. Removing a listing doesn't uninstall the plugin from anyone's
computer, so if a plugin is harmful we'll also say so here, when it's safe
to.

Authors can remove their own listing with a pull request that deletes its
file.

## Reporting a plugin

If a plugin is harmful, email
[security@influpert.com](mailto:security@influpert.com) with its name and what
it does wrong. For anything else, such as a broken plugin, open an issue
on its source repository.

## The terms that apply

Using any plugin is covered by the Mahfouz [terms of service](/terms/), and
by the plugin's own licence and terms. Submitting a plugin also means you
agree to this policy.
