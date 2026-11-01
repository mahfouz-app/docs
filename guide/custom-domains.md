---
layout: guide
title: "Custom domains"
since: "0.22.0"
description: "Serve a published note and its child notes as a website on your own subdomain, such as docs.example.com."
permalink: /guide/custom-domains/
---

A custom domain serves a published note and its child notes as one website
on a subdomain you own, such as `docs.example.com`. The note is the site's
home page, and each page under it gets a readable address that follows your
notes' titles, like `docs.example.com/guides/setup`. There's nothing to build
or host: Mahfouz serves the site over HTTPS, and keeps it in step with the
pages you publish.

## What a site is

A site starts from one note that's [published](/guide/publishing/) with
**Keep updated** set to **This note and child notes** (see
[Publish child notes](/guide/publishing/#publish-child-notes)). The site
holds that note's page and the pages of every published note under it:

- **The note itself** is the home page, at `/`.
- **Each page under it** is at the path of titles from the home page down,
  for example `/guides/setup` for a note **Setup** inside a note **Guides**.
- **New child notes** join the site as soon as they're published, which
  happens on their first commit.

Only the pages you've published are on the site. A note that isn't
published, or that you've kept off the web, isn't there.

For now, a custom domain has to be a subdomain, like `docs.example.com` or
`notes.example.org`. A root domain such as `example.com` isn't supported
yet.

## Connect a domain

You need the note's page to be published with **This note and child
notes**, push access to the vault's GitHub repository, and access to your
domain's DNS settings.

1. Open the Custom domain dialog in one of these ways:
   - Choose **Page settings…** from the note's menu, then **Set up…** next
     to **Custom domain**.
   - Choose **Publish ▸ Custom domain…** from the note's **⋯** menu.
   - Open **Settings → Custom domains**, click **Add domain…**, and choose
     the note. Notes that can't start a site are greyed out, with the
     reason.
   - Or run **Set up a custom domain for the active note's published site**
     from the [command palette](/guide/command-palette/).
2. Enter the subdomain, for example `docs.example.com`, and click
   **Connect**.
3. The dialog shows two DNS records. Add both at your DNS provider (copy
   each value with its copy button):
   - **TXT** `_mahfouz.docs.example.com`: proves the domain is yours.
   - **CNAME** `docs.example.com` pointing to `sites.mahfouz.app`: sends
     visitors to Mahfouz.
4. Wait for DNS. Mahfouz checks the records every 10 minutes, and the
   dialog checks every 30 seconds while it's open. Click **Check now** to
   check at once. DNS changes can take a few minutes, sometimes hours.
5. Once both records are found, Mahfouz issues a certificate for the domain,
   which usually takes a few minutes. The site goes live as soon as it's
   ready.

Click **Done** to close the dialog at any time; connecting carries on
without it.

A few things can get in the way:

- **CAA records.** If your domain has CAA records, add one allowing
  `letsencrypt.org` and `pki.goog`, or the certificate can't be issued.
- **Domains on Cloudflare.** If your domain's DNS is on Cloudflare, add the
  CNAME as **DNS only** (the grey cloud), not proxied.
- **The request expires.** If the records aren't found within 48 hours, the
  request is dropped, and you connect again.

Once the site is live, you can delete the TXT record if you like. The CNAME
must stay.

## What each status means

The Custom domain dialog, **Page settings** and **Settings → Custom
domains** show the domain's status:

- **Waiting for DNS**: the records aren't in place yet. The dialog lists
  them, and when the request expires.
- **Issuing certificate**: the records were found, and the certificate is
  on its way.
- **Live**: the site is up. The dialog links to it and says how many pages
  it has.
- **Not reaching us**: the domain stopped pointing at Mahfouz, usually
  because its CNAME record changed or was removed. Visitors get an error,
  and the pages' p.mahfouz.app links work again in the meantime. The site
  comes back by itself once the record is fixed. After 30 days, its
  certificate is released: fixing the record then starts over, and the
  records have to be found within 7 days. After 30 more days, the domain
  is removed.
- **Certificate failed**: the certificate couldn't be issued. The dialog
  quotes the reason. Fix it (often a CAA record), then click **Check now**.
  Mahfouz also starts the certificate over each week, and removes the
  domain after three weeks without one.
- **Paused**: the site's home page was unpublished or taken down. Publish
  the note again, from the same repository, and the site comes back. After
  30 days paused, its certificate is released: publishing the note then
  starts over, and the records have to be found within 7 days. After 30
  more days, the domain is removed.
- **Removing**: the domain is being disconnected. This takes up to a
  minute.

## Addresses on the site

- **Paths follow titles.** A page's path is built from the titles of the
  published pages above it. Retitling a page, or moving its note, changes
  its path, and the old path redirects to the new one.
- **Paths are stable.** A page keeps its path while it stays where it is.
  When two pages under the same parent would get the same path, the newer
  one gets its page id added, like `/setup-ab3de7fgh2`.
- **Unpublishing a page in the middle moves the pages under it up.** Their
  paths skip the unpublished page: with **Guides** unpublished,
  `/guides/setup` becomes `/setup`. The old addresses redirect.
- **A page that leaves the site** (unpublished, or moved out from under the
  home page) redirects from its site address to its p.mahfouz.app address
  while it's still published.
- **Unlisted pages get readable addresses.** On p.mahfouz.app, an Unlisted
  page can only be found by its link, which holds a random id. On your
  domain, an Unlisted page under the home page is at a path anyone could
  guess from its title, such as `/guides/setup`. Keep a page you don't want
  found outside the site's notes, or unpublish it.
- **Links between the site's pages** use their site addresses. Links to
  other published pages keep their p.mahfouz.app addresses.
- **The Markdown version** of a page is at its path followed by `.md`, and
  the home page's at `/index.md`.
- **Search engines** read the site's own `robots.txt` and `sitemap.xml`,
  which list its **Indexed** pages at their domain addresses (see
  [Visibility](/guide/publishing/#visibility)).

A note under the site's home page can have a domain of its own. Its pages
are then served on that domain only, not on the outer site.

## What happens to p.mahfouz.app links

While the site is **Live**, each page's p.mahfouz.app address redirects to
its address on your domain, so links you shared before keep working. The
note's menu still copies and opens the p.mahfouz.app address, which takes
readers to the site. **Settings → Published pages** shows each page's
address on your domain, and marks the home page **Site · docs.example.com**.

When the site isn't live (in any other status, or after you remove the
domain), the p.mahfouz.app addresses serve the pages again. A browser that
already followed a redirect may keep using it for up to five minutes.

## Remove a domain

Open the Custom domain dialog (**Manage…** in **Page settings**, or from
**Settings → Custom domains**), click **Remove**, and confirm. The site stops
answering on your domain, and the pages' p.mahfouz.app addresses work
again, within a minute; a browser that followed the redirect may take up to
five. You can delete the DNS records afterwards.

Removing a domain doesn't unpublish anything.

## Who can manage a domain

A domain belongs to the repository of the note it's connected to, not to the
person who connected it:

- **Anyone with push access** to the repository can connect, check and
  remove its domains.
- **Anyone who can read the repository** sees the domain and its status,
  but not its DNS records, and can't change it.
- **Whoever connected a domain** can always remove it, even after losing
  access to the repository.

**Settings → Custom domains** lists your domains and the domains on
repositories you can push to, with **Open note** and **Manage…** (or
**View…**) for each.

## Limits

- Your account can have up to 5 domains, and a repository up to 3.
- Your GitHub account has to be at least 7 days old to connect a domain.
- Up to 2 of your domains can be waiting for DNS at a time.
- One note can have one domain, and a domain serves one site.
- You can try to connect a domain up to 10 times an hour.
- Mahfouz can connect only so many domains in all. When it's full, you see
  "Mahfouz can't connect more domains right now", and can try again later.

## How it's stored

Nothing about a custom domain is in your vault. The domain, its status and
each page's address on the site live on Mahfouz's publishing service, like a
page's [visibility](/guide/publishing/#visibility). Which pages are on the
site comes from where their notes are in your vault: Mahfouz sends that from
any device you're signed in on, after you commit or sync.
