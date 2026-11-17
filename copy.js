// Copy buttons (.home-copy) for install commands: copies data-copy.
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
