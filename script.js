(function () {
  var toggle = document.querySelector(".nav-check");
  var nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.checked = false;
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.checked) {
      toggle.checked = false;
      toggle.focus();
    }
  });
})();
