---
layout: page
title: Acknowledgements
description: "The open-source software in Mahfouz, and each component's licence."
permalink: /acknowledgements/
---

Mahfouz includes the open-source software below, and we're grateful to
everyone who makes it. Each component is used under its own licence;
follow its link for the licence's full text and the source. Nothing in the
Mahfouz [terms of service](/terms/) limits your rights under these
licences.

| Component | Version | Licence |
|---|---|---|
{% for p in site.data.third_party -%}
| [{{ p.name }}]({{ p.url }}) | {{ p.version }} | {{ p.license }} |
{% endfor %}
