const toggle = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".header__menu");
const page = document.body;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "false";
    const isClosed = !isOpen;
    toggle.ariaExpanded = isOpen;
    nav.ariaExpanded = isClosed;
    page.classList.toggle("noscroll", isClosed);
  });
}

const hero = document.querySelector(".hero");
const header = document.querySelector(".header__mobile");
const homeLinkLogo = document.querySelector(".home-link__logo");
const menuHamburger = document.querySelector(".header__menu-btn");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > hero.clientHeight) {
    homeLinkLogo.src = "/assets/img/logo_vert_clair.svg";
    menuHamburger.classList.add("header__scrolled");
  } else {
    homeLinkLogo.src = "/assets/img/logo_blanc.svg";
    menuHamburger.classList.remove("header__scrolled");
  }
});
