document.addEventListener("DOMContentLoaded", () => {
  const autoWidth = (title) => {
    document
      .querySelectorAll(".styles__item-info, .services__item-info")
      .forEach((itemInfo) => {
        title = itemInfo.querySelector(
          ".styles__item-title, .services__item-title"
        );
        itemInfo.style.width = title.offsetWidth + "px";
      });
  };
  const openMobileNav = (burguer, mobileNav) => {
    burguer = document.getElementById("burguer");
    mobileNav = document.getElementById("mobile-navigation");

    burguer.classList.toggle("active");
    mobileNav.classList.toggle("open");

    burguer.classList.contains("active")
      ? burguer.setAttribute("aria-label", "Close navigation")
      : burguer.setAttribute("aria-label", "Open navigation");

    mobileNav.classList.contains("open")
      ? mobileNav.setAttribute("aria-hidden", "false")
      : mobileNav.setAttribute("aria-hidden", "true");
  };
  const heroInfoColorChage = () => {
    setTimeout(() => {
      document
        .querySelectorAll(".hero-title, .hero__description")
        .forEach((text) => {
          text.style.opacity = 1;
        });
    }, 500);

    setTimeout(() => {
      document.getElementById("hero__projects-link").style.opacity = 1;
    }, 7500);
  };

  heroInfoColorChage();
  window.innerWidth > 1024 ? autoWidth() : null;
  document.getElementById("burguer").addEventListener("click", openMobileNav);
});
