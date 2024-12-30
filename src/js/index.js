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

const carousels = document.querySelectorAll(".section__carousel-container");

carousels.forEach((carousel) => {
  const prevButton = carousel.parentElement.querySelector(
    ".carousel__btn--prev"
  );
  const nextButton = carousel.parentElement.querySelector(
    ".carousel__btn--next"
  );
  const premierItem = carousel.querySelector(".section__carousel-item");
  const scrollAmount = premierItem.clientWidth;

  if (carousel && prevButton && nextButton) {
    console.log(`Scroll amount for carousel: ${scrollAmount}`);

    prevButton.addEventListener("click", () => {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });

    nextButton.addEventListener("click", () => {
      carousel.scrollBy({
        left: +scrollAmount,
        behavior: "smooth",
      });
    });
  }
});
