document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
      link.addEventListener("click", function (e) {
          const href = this.getAttribute("href");
          if (href && href.length > 1) {
              const target = document.querySelector(href);
              if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: "smooth" });
              }
          }
      });
  });
});
