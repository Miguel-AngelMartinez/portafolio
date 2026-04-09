(function () {
  var root = document.documentElement;
  var nav = document.getElementById("nav-principal");
  var toggle = document.querySelector(".nav-toggle");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var email = root.getAttribute("data-email") || "";
  var github = root.getAttribute("data-github") || "";
  var linkedin = root.getAttribute("data-linkedin") || "";
  var whatsapp = (root.getAttribute("data-whatsapp") || "").replace(/\D/g, "");

  var waMsg = encodeURIComponent("Hola, Miguel. Te contacto desde tu portafolio.");
  var waHref = whatsapp ? "https://wa.me/" + whatsapp + "?text=" + waMsg : "#contacto";

  document.querySelectorAll("[data-social]").forEach(function (el) {
    var kind = el.getAttribute("data-social");
    if (kind === "email" && email) {
      el.href = "mailto:" + email;
    } else if (kind === "github" && github) {
      el.href = github;
    } else if (kind === "linkedin" && linkedin) {
      el.href = linkedin;
    } else if (kind === "whatsapp") {
      el.href = waHref;
    }
  });

  if (!nav || !toggle) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }

  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 641px)").matches) {
      setOpen(false);
    }
  });
})();
