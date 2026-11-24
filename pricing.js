// /pricing/: the plans, prices and comparison, read from Stripe through the
// app's public GET /billing/plans when the page loads. Nothing on the site
// holds a price. Until the answer arrives, and whenever it fails, the page
// keeps its fallback (a link to the app's Settings → Plan) and shows no
// numbers. Text from Stripe is set with textContent only.
(function () {
  "use strict";

  var API = { production: "https://api.mahfouz.app", staging: "https://api-staging.mahfouz.app" };
  // ?plans-api=staging reads staging's catalog, for checking a change before it's live.
  var env = new URLSearchParams(location.search).get("plans-api") === "staging" ? "staging" : "production";
  var PLANS_URL = API[env] + "/billing/plans";
  var TIMEOUT_MS = 8000;
  var SVG = "http://www.w3.org/2000/svg";

  var main = document.querySelector("main.pricing");
  if (!main || typeof fetch !== "function") return;

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function check(cls) {
    var svg = document.createElementNS(SVG, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    if (cls) svg.setAttribute("class", cls);
    var path = document.createElementNS(SVG, "path");
    path.setAttribute("d", "M5 12.5l4.5 4.5L19 7.5");
    svg.appendChild(path);
    return svg;
  }

  function money(cents, currency) {
    var whole = cents % 100 === 0;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
      minimumFractionDigits: whole ? 0 : 2,
      maximumFractionDigits: whole ? 0 : 2,
    }).format(cents / 100);
  }

  function isAmount(p) {
    return !!p && typeof p.amount === "number" && Number.isSafeInteger(p.amount) && p.amount > 0 && typeof p.currency === "string" && /^[a-z]{3}$/i.test(p.currency);
  }

  // "$8 a month"; "$80 a year · $6.67 a month" and "2 months free"; Free's "$0 forever",
  // in the paid tiers' currency (null when they have none to show, so nothing renders).
  function prices(tier, currency) {
    if (tier.tier === "free") {
      if (!currency) return null;
      var zero = { big: money(0, currency), rest: "forever" };
      return { monthly: zero, yearly: zero, saving: null };
    }
    var m = tier.prices && tier.prices.month;
    var y = tier.prices && tier.prices.year;
    if (!isAmount(m) || !isAmount(y)) return null;
    var saved = (12 * m.amount - y.amount) / m.amount;
    var months = Number.isInteger(saved) ? String(saved) : saved.toFixed(1);
    return {
      monthly: { big: money(m.amount, m.currency), rest: "a month" },
      yearly: { big: money(y.amount, y.currency), rest: "a year · " + money(Math.round(y.amount / 12), y.currency) + " a month" },
      saving: saved > 0 ? months + " months free" : null,
    };
  }

  function nameOf(tier) {
    if (typeof tier.name === "string" && tier.name.trim() !== "") return tier.name;
    return tier.tier.charAt(0).toUpperCase() + tier.tier.slice(1);
  }

  function card(tier, shown) {
    var li = el("li", "pricing-plan");
    var head = el("div", "pricing-plan-head");
    head.appendChild(el("h3", "", nameOf(tier)));
    li.appendChild(head);
    [
      ["monthly", "pricing-price pricing-price-monthly"],
      ["yearly", "pricing-price pricing-price-yearly"],
    ].forEach(function (k) {
      var p = el("p", k[1], shown[k[0]].big + " ");
      p.appendChild(el("span", "", shown[k[0]].rest));
      li.appendChild(p);
    });
    var features = Array.isArray(tier.features)
      ? tier.features.filter(function (f) {
          return typeof f === "string" && f.trim() !== "";
        })
      : [];
    if (features.length > 0) {
      var ul = el("ul", "pricing-features");
      features.forEach(function (f) {
        var item = el("li");
        item.appendChild(check());
        item.appendChild(document.createTextNode(f));
        ul.appendChild(item);
      });
      li.appendChild(ul);
    }
    var foot = el("div", "pricing-plan-foot");
    var a;
    if (tier.tier === "free") {
      a = el("a", "button button-secondary pricing-button-small", "Download Mahfouz");
      a.href = "/download/";
    } else {
      a = el("a", tier.tier === "pro" ? "registry-install" : "button button-secondary pricing-button-small", "Get " + nameOf(tier));
      a.href = "/guide/plan/#upgrade";
    }
    foot.appendChild(a);
    li.appendChild(foot);
    return li;
  }

  var SUPPORT = { community: "Community", email: "Email", priority: "Priority" };

  function count(n, unit) {
    return n === 0 ? false : unit ? n.toLocaleString("en-US") + " " + unit : String(n);
  }

  function always() {
    return true;
  }

  // The comparison's rows: the labels are this page's copy, the cells each tier's limits.
  var ROWS = [
    ["Notes, tasks, people, databases", always],
    ["Publish pages", always],
    ["Agents while Mahfouz is open", always],
    ["Agents while Mahfouz is closed", function (l) { return count(l.headlessRepos, "repos"); }],
    ["Agent hours a month", function (l) { return count(l.containerHours, "hours"); }],
    ["Custom domains", function (l) { return count(l.customDomains, ""); }],
    ["“Published with Mahfouz” on pages", function (l) { return l.hideBadge ? "Hidden" : "Shown"; }],
    ["“Report this page” on pages", function () { return "Shown"; }],
    ["Support", function (l) { return SUPPORT[l.support] || String(l.support); }],
  ];

  function validLimits(l) {
    return !!l && typeof l.headlessRepos === "number" && typeof l.containerHours === "number" && typeof l.customDomains === "number" && typeof l.hideBadge === "boolean" && typeof l.support === "string";
  }

  function cell(value) {
    var td = el("td");
    if (value === true) {
      td.appendChild(check("pricing-yes"));
      td.appendChild(el("span", "sr-only", "Included"));
    } else if (value === false) {
      var dash = el("span", "pricing-no", "—");
      dash.setAttribute("aria-hidden", "true");
      td.appendChild(dash);
      td.appendChild(el("span", "sr-only", "Not included"));
    } else td.textContent = value;
    return td;
  }

  function compare(tiers) {
    var table = main.querySelector(".pricing-table");
    var headRow = el("tr");
    var corner = el("th");
    corner.setAttribute("scope", "col");
    corner.appendChild(el("span", "sr-only", "Feature"));
    headRow.appendChild(corner);
    tiers.forEach(function (t) {
      var th = el("th", "", nameOf(t));
      th.setAttribute("scope", "col");
      headRow.appendChild(th);
    });
    table.tHead.appendChild(headRow);
    ROWS.forEach(function (row) {
      var tr = el("tr");
      var th = el("th", "", row[0]);
      th.setAttribute("scope", "row");
      tr.appendChild(th);
      tiers.forEach(function (t) {
        tr.appendChild(cell(row[1](t.limits)));
      });
      table.tBodies[0].appendChild(tr);
    });
    main.querySelector(".pricing-compare").hidden = false;
  }

  /** Fills the page from the tiers; false, with nothing shown, when a paid tier has no price to show. */
  function render(tiers) {
    var paid = tiers
      .map(function (t) { return t.prices && t.prices.month; })
      .filter(isAmount)[0];
    var currency = paid ? paid.currency : null;
    var shown = tiers.map(function (t) { return prices(t, currency); });
    if (shown.indexOf(null) !== -1) return false;
    var list = main.querySelector(".pricing-plans");
    tiers.forEach(function (t, i) {
      list.appendChild(card(t, shown[i]));
    });
    var saving = shown.map(function (s) { return s.saving; }).filter(Boolean)[0];
    var savingEl = main.querySelector(".pricing-saving");
    if (saving && savingEl) {
      savingEl.textContent = saving;
      savingEl.hidden = false;
    }
    // The table only when every tier's limits read: a row of blanks says nothing.
    if (tiers.every(function (t) { return validLimits(t.limits); })) compare(tiers);
    list.hidden = false;
    main.querySelector(".pricing-period").hidden = false;
    main.querySelector(".pricing-fallback").hidden = true;
    return true;
  }

  var controller = typeof AbortController === "function" ? new AbortController() : null;
  var timer = controller
    ? setTimeout(function () {
        controller.abort();
      }, TIMEOUT_MS)
    : null;
  fetch(PLANS_URL, { credentials: "omit", headers: { Accept: "application/json" }, signal: controller ? controller.signal : undefined })
    .then(function (res) {
      if (!res.ok) throw new Error("status " + res.status);
      return res.json();
    })
    .then(function (body) {
      var all = body && Array.isArray(body.tiers) ? body.tiers : [];
      var tiers = ["free", "pro", "max"].map(function (t) {
        return all.filter(function (x) { return x && x.tier === t; })[0];
      });
      if (tiers.indexOf(undefined) !== -1) throw new Error("missing tier");
      if (!render(tiers)) throw new Error("missing price");
    })
    .catch(function () {
      // The fallback stays: no numbers rather than wrong ones.
    })
    .then(function () {
      if (timer) clearTimeout(timer);
    });
})();
