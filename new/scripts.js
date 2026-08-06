const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (menuToggle && siteNav) {
  const menuLabel = menuToggle.querySelector(".sr-only");

  const closeMenu = ({ returnFocus = false } = {}) => {
    const wasOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
    if (menuLabel) menuLabel.textContent = "Menü megnyitása";
    if (returnFocus && wasOpen) menuToggle.focus({ preventScroll: true });
  };

  const openMenu = () => {
    menuToggle.setAttribute("aria-expanded", "true");
    siteNav.classList.add("is-open");
    if (menuLabel) menuLabel.textContent = "Menü bezárása";
    siteNav.querySelector("a")?.focus({ preventScroll: true });
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu();
    else openMenu();
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu({ returnFocus: true });
      return;
    }

    if (
      event.key === "Tab" &&
      menuToggle.getAttribute("aria-expanded") === "true" &&
      !desktopMenu.matches
    ) {
      const focusableItems = [menuToggle, ...siteNav.querySelectorAll("a")];
      const firstItem = focusableItems[0];
      const lastItem = focusableItems.at(-1);

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  const desktopMenu = window.matchMedia("(min-width: 821px)");
  desktopMenu.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}
