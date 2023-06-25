import "./scss/style.scss";
import "./about.js";
// let arrowDown = document.querySelectorAll('.questions__arrow-down')
// let arrowUp = document.querySelectorAll('')
// let questions = document.querySelector('.questions__info')
// arrowDown.forEach((btn) => {
//     btn.addEventListener('click', function(event) {
//        document.getElementById('1').classList.add('questions__span--visible')
//     })
// })
//Гамбургер
let hamburger = document.querySelector(".hamburger__first > .hamburger__lines");
let hamburger__first = document.querySelector(".hamburger__first");
let hamburger__active = document.querySelector(".hamburger__active");
let close = document.querySelector(".close");
console.log(close);
hamburger.addEventListener("click", function (e) {
  hamburger__first.setAttribute("id", "none");
  hamburger__active.removeAttribute("id");
});
close.addEventListener("click", function (e) {
  hamburger__active.setAttribute("id", "none");
  hamburger__first.removeAttribute("id");
});

//карусель
let leftArrow = document.querySelector(".price__carousel-arrow--left");
let rightArrow = document.querySelector(".price__carousel-arrow--right");
let sliderLine = document.querySelector(".price__cards");
let imgs = document.querySelectorAll(".price__cards .price__card");
let count = 0;
let width;
let translate = 0;

function init() {
  imgs.forEach((item) => {
    item.style.width = width + "px";
  });
  rollSlider();
}
window.addEventListener("resize", init);

init();

function rollSlider() {
  sliderLine.style.transform = "translate(-" + translate + "px)";
}
leftArrow.addEventListener("click", () => {
  count--;
  if (count <= 0) {
    count = imgs.length - 1;
    translate = translate - -385;
  } else {
    translate = translate + -385;
  }
  console.log(count);
  rollSlider();
});

rightArrow.addEventListener("click", () => {
  count++;
  if (count >= imgs.length - 1) {
    translate = 0;
    count = 0;
  } else {
    translate = translate - -385;
  }
  rollSlider();
});

//карусель2
let leftArrowVibe = document.querySelector(".vibe-coworking__btn--left");
let rightArrowVibe = document.querySelector(".vibe-coworking__btn--right");
let phones = document.querySelectorAll(".vibe-coworking__phone");
let sliderVibe = document.querySelector(".vibe-coworking__slider");
let widthVibe;
let countVibe = 0;
let translateVibe = 0;

function initVibe() {
  phones.forEach((item) => {
    item.style.width = width + "px";
  });
  rollSliderVibe();
}
window.addEventListener("resize", initVibe);

initVibe();

function rollSliderVibe() {
  sliderVibe.style.transform = "translate(-" + translateVibe + "px)";
}

leftArrowVibe.addEventListener("click", () => {
  console.log(countVibe);
  countVibe--;
  if (countVibe <= 0) {
    console.log("<0");
    countVibe = phones.length;
    translateVibe = translateVibe - -900;
    console.log(translateVibe);
  } else {
    translateVibe = translateVibe + -300;
  }
  rollSliderVibe();
});

rightArrowVibe.addEventListener("click", () => {
  countVibe++;
  if (countVibe >= phones.length) {
    translateVibe = 0;
    countVibe = 0;
  } else {
    translateVibe = translateVibe - -300;
  }
  rollSliderVibe();
});
