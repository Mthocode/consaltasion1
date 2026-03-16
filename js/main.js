document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {

  /* Fade-in on page load */
  document.body.style.opacity = 0;
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });

  /* Page fade-out on link click */
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    if (href && !href.startsWith("#") && !href.startsWith("http") && !link.hasAttribute("target")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });

  /* Sticky header shadow on scroll */
  const header = document.querySelector(".top-bar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

});

