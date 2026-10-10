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

(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;

  var nodes = document.querySelectorAll("main .section");
  if (!nodes.length) return;

  document.documentElement.classList.add("js");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );

  nodes.forEach(function (node) {
    node.classList.add("reveal");
    observer.observe(node);
  });
})();
