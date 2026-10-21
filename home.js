(function () {
  var notes = [
    { title: "Cairo Journal", body: "A place to collect small details from the city.", more: "The old stone holds the warmth of the day. I followed a quiet lane past the market and turned toward the river.", link: "Old streets", back: [["Morning walk", "…turned toward the river."], ["Places to return to", ""]], tags: ["#cairo", "#field-notes"] },
    { title: "Morning walk", body: "Left before the heat. The cafés were still stacking chairs.", more: "Turned toward the river and kept going until the call to prayer.", link: "Cairo Journal", back: [["Cairo Journal", "…small details from the city."]], tags: ["#walks"] },
    { title: "Old streets", body: "Notes on the lanes and buildings around the river.", more: "Mashrabiya windows, carved doors, and a bookbinder's shop that has been there for decades.", link: "Places to return to", back: [["Cairo Journal", "See also [[Old streets]]"], ["Places to return to", "…the old streets near the river."]], tags: ["#cairo", "#places"] },
    { title: "Reading list", body: "Palace Walk. Sugar Street. The Harafish.", more: "Start with the Cairo Trilogy, then the short stories.", link: "Ideas", back: [], tags: ["#books"] }
  ];

  function el(tag, text, cls) {
    var node = document.createElement(tag);
    if (text) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  }

  var doc = document.getElementById("home-doc");
  var back = document.getElementById("home-backlinks");
  var tags = document.getElementById("home-tags");
  var title = document.getElementById("home-wtitle");
  var noteButtons = document.querySelectorAll(".home-side button");

  function showNote(i) {
    var n = notes[i];
    var see = el("p");
    see.append("See also ", el("code", "[[" + n.link + "]]"));
    doc.replaceChildren(el("p", "# " + n.title, "md"), el("h3", n.title), el("p", n.body), el("p", n.more), see);
    back.replaceChildren();
    if (!n.back.length) back.append(el("p", "No backlinks yet.", "bl"));
    n.back.forEach(function (b) {
      var p = el("p", b[0], "bl");
      if (b[1]) p.append(el("small", b[1]));
      back.append(p);
    });
    tags.replaceChildren.apply(tags, n.tags.map(function (t) { return el("span", t); }));
    title.textContent = "Field Notes · " + n.title + ".md";
    noteButtons.forEach(function (b) { b.setAttribute("aria-current", String(b.dataset.note === String(i))); });
  }

  noteButtons.forEach(function (b) {
    b.addEventListener("click", function () { showNote(Number(b.dataset.note)); });
  });

  var modeButtons = document.querySelectorAll(".home-seg button");
  var proposals = document.querySelectorAll("#home-props li");

  function setMode(mode) {
    modeButtons.forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.mode === mode)); });
    proposals.forEach(function (li) {
      var destructive = li.dataset.kind === "destructive";
      var waits = mode === "every" || (mode === "destructive" && destructive);
      var status = li.querySelector(".home-status");
      status.className = "home-status " + (waits ? "wait" : "done");
      status.textContent = waits ? (destructive ? "Waiting · destructive" : "Waiting for you") : "Applied · Undo";
    });
  }

  modeButtons.forEach(function (b) {
    b.addEventListener("click", function () { setMode(b.dataset.mode); });
  });

  var commits = document.getElementById("home-commits");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var added = 0;

  function addCommit() {
    var first = commits.firstElementChild;
    var stamp = first && first.querySelector("small");
    if (stamp && stamp.textContent === "just now") stamp.textContent = "a moment ago";
    var text = el("div", "Auto-save");
    text.append(el("small", "just now"));
    var row = el("div", null, "home-commit new");
    row.append(el("i"), text, el("code", Math.random().toString(16).slice(2, 9)));
    commits.prepend(row);
    while (commits.children.length > 3) commits.lastElementChild.remove();
  }

  if (commits && !reduce) {
    setInterval(function () { if (added++ < 20) addCommit(); }, 6000);
  }
})();

(function () {
  var buttons = document.querySelectorAll(".home-copy");
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(button.getAttribute("data-copy")).then(function () {
        button.setAttribute("data-copied", "");
        button.title = "Copied";
        setTimeout(function () {
          button.removeAttribute("data-copied");
          button.title = "Copy";
        }, 1500);
      }, function () {});
    });
  });
})();
