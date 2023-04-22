"use strict";

const navOpen = document.querySelector(".nav__toggle");
const navExit = document.querySelector(".nav-mobile__close");
const nav = document.querySelector(".nav");
const navMobile = document.querySelector(".nav-mobile");
const overlay = document.querySelector(".overlay");

const openToggleMenu = function () {
  navMobile.classList.remove("hidden");
  overlay.classList.add("overlay-nav");
};

const closeToggleMenu = function () {
  navMobile.classList.add("hidden");
  overlay.classList.remove("overlay-nav");
};

navOpen.addEventListener("click", openToggleMenu);
navExit.addEventListener("click", closeToggleMenu);

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();
