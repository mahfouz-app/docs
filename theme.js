(function () {
  var KEY = "mahfouz-theme";
  var root = document.documentElement;
  var colors = { light: "#ffffff", dark: "#000000" };

  function stored() {
    try {
      var value = localStorage.getItem(KEY);
      return value === "light" || value === "dark" ? value : "system";
    } catch (e) {
      return "system";
    }
  }

  function apply(theme) {
    if (theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);

    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      var meta = metas[i];
      if (!meta.dataset.system) meta.dataset.system = meta.content;
      meta.content = theme === "system" ? meta.dataset.system : colors[theme];
    }

    var buttons = document.querySelectorAll(".theme-switch button");
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].setAttribute("aria-pressed", String(buttons[j].dataset.theme === theme));
    }
  }

  apply(stored());

  document.addEventListener("DOMContentLoaded", function () {
    apply(stored());
    document.addEventListener("click", function (event) {
      var button = event.target.closest(".theme-switch button");
      if (!button) return;
      var theme = button.dataset.theme;
      try {
        if (theme === "system") localStorage.removeItem(KEY);
        else localStorage.setItem(KEY, theme);
      } catch (e) {}
      apply(theme);
    });
  });
})();
