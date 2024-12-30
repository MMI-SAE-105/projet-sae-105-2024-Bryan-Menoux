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

/* play video */

const playBtn = document.querySelectorAll(".play-btn");

if (playBtn) {
  playBtn.forEach((element) => {
    const video = element.parentElement.querySelector("video");
    let playBtnIcon = element.querySelector(".play-btn__img");
    element.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        element.classList.add("hide");
        element.innerHTML = `Pause vidéo <img src="/assets/img/pause_btn.svg" class="play-btn__img" />`;
      } else {
        video.pause();
        element.classList.remove("hide");
        element.innerHTML = `Lire la vidéo <img src="/assets/img/play_btn.svg" alt="Play video" class="play-btn__img" />`;
      }
    });
  });
}

/* carousel */

const carousel = document.querySelector(".section__carousel-container");
const prevButton = document.querySelector(".carousel__btn--prev");
const nextButton = document.querySelector(".carousel__btn--next");
let premierItem = document.querySelector(".section__carousel-item");
let scrollAmount = premierItem.clientWidth;

if (carousel) {
  console.log(scrollAmount);

  prevButton.addEventListener("click", () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({
      left: +scrollAmount,
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
}
