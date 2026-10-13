(function () {
  var form = document.getElementById("registry-filters");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".registry-card"));
  var status = document.getElementById("registry-status");
  var empty = document.getElementById("registry-empty");
  var clear = document.getElementById("registry-clear");
  var search = form.elements.q;
  var author = form.elements.author;
  var groups = ["category", "platform", "registry"];

  // The filter form only works with this script, so it starts hidden.
  form.hidden = false;

  function checked(name) {
    return Array.prototype.slice.call(form.querySelectorAll('input[name="' + name + '"]:checked')).map(function (box) { return box.value; });
  }

  function values(card, name) {
    if (name === "platform") return card.dataset.platforms.split(" ");
    return [card.dataset[name]];
  }

  function read() {
    var state = { q: search.value.trim().toLowerCase(), author: author.value };
    groups.forEach(function (name) { state[name] = checked(name); });
    return state;
  }

  // A card has to pass every filter. Within one group of checkboxes, any
  // checked value passes. `skip` leaves one group out, for its counts.
  function matches(card, state, skip) {
    if (state.q && card.dataset.search.indexOf(state.q) === -1) return false;
    if (skip !== "author" && state.author && card.dataset.author !== state.author) return false;
    return groups.every(function (name) {
      if (name === skip || !state[name].length) return true;
      var own = values(card, name);
      return state[name].some(function (value) { return own.indexOf(value) !== -1; });
    });
  }

  function render(state) {
    var shown = 0;
    cards.forEach(function (card) {
      var show = matches(card, state);
      card.hidden = !show;
      if (show) shown += 1;
    });
    status.textContent = shown === cards.length ? cards.length + " plugins" : shown + " of " + cards.length + " plugins";
    empty.hidden = shown > 0;
    clear.hidden = !(state.q || state.author || groups.some(function (name) { return state[name].length; }));

    // Each checkbox counts the plugins it would show, given the other filters.
    groups.forEach(function (name) {
      form.querySelectorAll('input[name="' + name + '"]').forEach(function (box) {
        var n = cards.filter(function (card) { return matches(card, state, name) && values(card, name).indexOf(box.value) !== -1; }).length;
        box.parentNode.querySelector(".registry-count").textContent = n;
      });
    });
  }

  // Filters live in the URL, e.g. ?category=diagrams&platform=web, so a
  // filtered list can be shared.
  function save(state) {
    var params = new URLSearchParams();
    if (state.q) params.set("q", search.value.trim());
    groups.forEach(function (name) { state[name].forEach(function (value) { params.append(name, value); }); });
    if (state.author) params.set("author", state.author);
    var query = params.toString();
    history.replaceState(null, "", query ? "?" + query : location.pathname);
  }

  function load() {
    var params = new URLSearchParams(location.search);
    search.value = params.get("q") || "";
    groups.forEach(function (name) {
      var wanted = params.getAll(name);
      form.querySelectorAll('input[name="' + name + '"]').forEach(function (box) { box.checked = wanted.indexOf(box.value) !== -1; });
    });
    author.value = params.get("author") || "";
    if (author.selectedIndex === -1) author.value = "";
  }

  function update() {
    var state = read();
    render(state);
    save(state);
  }

  form.addEventListener("input", update);
  form.addEventListener("submit", function (event) { event.preventDefault(); });
  clear.addEventListener("click", function () {
    form.reset();
    update();
    search.focus();
  });

  load();
  render(read());
})();
