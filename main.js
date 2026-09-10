"use strict";

// All page content and the publication disclosures work without JavaScript.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const mobileViewport = window.matchMedia("(max-width: 900px)");

if (menuButton && navigation) {
  document.documentElement.classList.add("js-enabled");
  menuButton.hidden = false;

  const setMenuOpen = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    menuButton.querySelector(".menu-label").textContent = open ? "閉じる" : "メニュー";
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link || !mobileViewport.matches) return;
    setMenuOpen(false);
    // Move focus out of the collapsed menu to the selected section.
    const section = document.querySelector(link.getAttribute("href"));
    if (section) {
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
      section.addEventListener("blur", () => section.removeAttribute("tabindex"), { once: true });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenuOpen(false);
  });

  // Let keyboard users leave the disclosure without a tall header covering content.
  document.addEventListener("focusin", (event) => {
    if (!event.target.closest(".site-header")) setMenuOpen(false);
  });

  mobileViewport.addEventListener("change", () => {
    const focusWasInNavigation = navigation.contains(document.activeElement);
    setMenuOpen(false);
    if (mobileViewport.matches && focusWasInNavigation) menuButton.focus();
  });
}

const navLinks = [...document.querySelectorAll('.primary-navigation a[href^="#"]')];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navLinks) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    }
  }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
  document.querySelectorAll("main > section[id]").forEach((section) => sectionObserver.observe(section));
}

const year = document.querySelector("#copyright-year");
if (year) year.textContent = String(new Date().getFullYear());
