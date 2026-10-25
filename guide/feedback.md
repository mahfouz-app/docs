---
layout: guide
title: "Sending feedback"
since: "0.8.0"
description: "Report a bug or suggest a feature from inside the app."
permalink: /guide/feedback/
---

Choose **Send feedback** in the account menu (click the account button at
the bottom of the left rail), or **Help → Send Feedback…** on desktop, to
report a bug, suggest an idea, or ask a question. On a phone, it's in
the **⋯** menu at the top of [Home](/guide/web/#phone-home). {% include since.html v="0.17.0" %} Pick a kind, give it a title
and some details, and press **Submit**.

Feedback becomes a **public** issue on
[mahfouz-app/docs](https://github.com/mahfouz-app/docs/issues), filed by the
Mahfouz feedback bot through Mahfouz's server, on desktop and on the web alike,
whether or not you're signed in to GitHub. Once it's filed, the dialog
links to the new issue. {% include since.html v="0.13.0" %}

**Include diagnostics** (on by default) appends the app version, operating
system and CPU architecture (the app version alone on the web), and nothing
else. Nothing from your vault or notes is ever sent. Expand **What's
included** to see the exact lines, or untick the box to leave them out.

## Including your GitHub login {% include since.html v="0.13.0" %} {#including-your-github-login}

Feedback is anonymous unless you tick **Include my GitHub login (@you)**,
which appears when you're signed in to GitHub. The issue then ends with
"Sent by @you", so GitHub notifies you of replies. Mahfouz's server checks the
login with GitHub using your sign-in, so nobody can send feedback in your
name. Signed out, the box is greyed: add a way to reach you in the details
if you'd like a reply.

## When you're offline {% include since.html v="0.13.0" %} {#when-youre-offline}

If Mahfouz's server can't be reached, or it's had too many reports from your
network in the last minute, the dialog says **Saved. Mahfouz will send it
once it can connect.** The report waits on this device,
up to 10 of them, and is sent the next time you open Mahfouz or your
connection comes back. A notification links to the issue once it's filed.
