---
layout: guide
title: "Plans & billing"
since: "0.23.0"
description: "Upgrade to Pro or Max from Settings → Plan, change or cancel in Stripe, and what pauses when you're over a plan's limits."
permalink: /guide/plan/
---

{% include since.html v="0.23.0" %}

Your Mahfouz account is on one of three plans: **Free**, **Pro** or
**Max**. Notes, tasks, people, databases, publishing and agents while
Mahfouz is open are free. The paid plans add:

| | Free | Pro | Max |
|---|---|---|---|
| Agents while Mahfouz is closed ([on GitHub](/guide/online-agents/)) | — | 2 repositories | 10 repositories |
| [Custom domains](/guide/custom-domains/) | — | 1 | 5 |
| "Published with Mahfouz" on [published pages](/guide/publishing/#the-pages-footer) | Shown | Hidden | Hidden |
| Support | Community | Email | Priority |

[Pricing](/pricing/) lists the prices. A plan belongs to your Mahfouz
account, not to a vault or a device: it's the same in every browser and in
the desktop app.

## Settings → Plan

Open **Settings → Plan** (the last section of Settings). You need to be
[signed in with GitHub](/guide/github/); signed out, the page offers
**Sign in with GitHub**. It shows:

- **Your plan**: its name, what you pay and when it renews, and for each
  limit how much you use, such as **Agent repositories 1 of 2**.
- **The plans**, with a **Monthly** and **Yearly** switch. Paying yearly
  costs 10 months' price for 12.
- **Manage billing**, on a paid plan, which opens Stripe.

The page reads your plan again each time you open it.

## Upgrade {#upgrade}

### From Free

1. In **Settings → Plan**, choose **Monthly** or **Yearly**.
2. Click **Upgrade to Pro** or **Upgrade to Max**. Stripe Checkout opens in
   your browser (on the web, in a new tab).
3. Enter your card and billing address in Stripe, and pay. Stripe adds
   sales tax or VAT before you pay: see [Taxes](#taxes-and-payments).
4. Stripe sends you to a Mahfouz page that says **Your plan is updated.**
   Click **Open Mahfouz** (desktop) or **Back to Mahfouz** (web).

Meanwhile Mahfouz shows **Finish in your browser**, waiting for Stripe to
confirm. It closes by itself once the new plan arrives, and **You're on
Pro.** (or Max) pops up. **Open again** opens Checkout again if you closed
it; **Cancel** stops waiting; **×** hides the dialog and keeps waiting. If
you leave Checkout without paying, its page says **Nothing changed.**

If your browser blocks the new tab, Mahfouz says so, with an **Open
Stripe** link.

### From Pro to Max, or monthly to yearly

On a paid plan, **Upgrade to Max** (or **Switch to yearly** on your own
plan) asks first in a dialog that shows:

- what you pay now: the difference for the rest of the period you already
  paid for, such as "You'll pay $11.73 now for the rest of this month, then
  $20 a month from Dec 3.";
- the card Stripe charges.

Click **Upgrade to Max** to pay it. Your plan changes as soon as the
payment goes through. If the price changed while the dialog was open,
it offers **Refresh the price** instead.

### If your bank needs to approve it

Some banks ask you to confirm a payment. Settings → Plan then says **Your
bank needs to confirm the upgrade to Max.** Click **Confirm payment**:
Stripe's invoice page opens in your browser, where you confirm it. Until
then you stay on your old plan, and if it isn't confirmed within a day, the
upgrade lapses and nothing changes.

## Change or cancel

Everything else about billing happens in Stripe. **Manage billing** opens
Stripe's billing page in your browser, where you:

- change your card;
- see and download invoices;
- move to a lower plan, or from yearly to monthly;
- cancel.

**Move to Pro** and **Move to Free** on the plan cards open the same page.
When you're done, Stripe sends you to a Mahfouz page that says **Your
billing is updated.**, and Settings → Plan shows the change the next time
you open it or come back to the app.

A lower plan, or a cancel, starts when the period you paid for ends. Until
then you keep what you paid for, and Settings → Plan says what's coming:

- **Changes to Pro on Dec 3. Until then you keep Max.** **Keep Max** opens
  Stripe again to undo it.
- **Pro ends on Dec 3, 2026. You'll move to Free then.** **Keep Pro** undoes
  the cancel.

Under it, **What pauses on …** lists the repositories and domains that will
be over the new plan's limits: see [What pauses](#what-pauses).

## When a payment fails

If Stripe can't charge your card when your plan renews, Settings → Plan
says **Your last payment failed.**, and so does a notification in the
**Billing** category (you can mute it in [Settings →
Notifications](/guide/notifications/)). Stripe tries your card again over
the next days, and the page says when.

Everything keeps working while Stripe retries. Click **Manage billing** to
update your card; the next retry then charges it. If every retry fails, Stripe
cancels the plan and you move to Free.

## What pauses when you're over a limit {#what-pauses}

When you move to a lower plan, or your plan ends, you can have more agent
repositories or custom domains than the new plan includes. Mahfouz pauses
the ones over the limit, newest first:

- **Agent repositories**: the ones agents on GitHub were given access to
  most recently. Agents can't work on a paused repository while
  Mahfouz is closed; they still can [through Mahfouz](/guide/external-agents/)
  while it's open. See [Agents on GitHub](/guide/online-agents/#plan-limits).
- **Custom domains** connected most recently. A paused domain stops
  answering, and its pages stay online at p.mahfouz.app. See [Custom
  domains](/guide/custom-domains/#plan-limits).

Each shows **Paused — over your plan's limit** in Settings, and Settings →
Plan lists them under **Paused until you upgrade**. Nothing is deleted:
the repositories' working copies, the domains' DNS records and every page
stay. Upgrade, or remove another repository or domain, and they pick up
where they left off.

On Free, published pages show "Published with Mahfouz" again.

## Complimentary plans

Mahfouz may give an account a plan for free. Settings → Plan then shows
**Max · Complimentary**: there's nothing to pay, nothing renews, and
there's no limit on agent repositories or custom domains. If you also
still have a subscription in Stripe, the page says so, with **Manage
billing** to cancel it there.

## Taxes and payments

- **Prices** are in US dollars, before tax. Stripe Checkout adds sales tax
  or VAT for your billing address, and shows it before you pay.
- **Stripe handles payments.** It keeps your email, billing address and
  card. Mahfouz keeps only your plan and when it renews, and never
  sees your card number. Settings shows the card's brand and last four
  digits as Stripe reports them. Mahfouz tells Stripe your [account ID](/guide/account/) so
  it can match a payment to your account; it sends Stripe nothing else.
- **Two checkouts at once**: if you end up paying for two plans, Mahfouz
  keeps the higher one and refunds the other.
- **A disputed charge**: while you dispute a payment with your bank, your
  account works as Free. If the dispute goes against the payment, the plan
  is canceled.
