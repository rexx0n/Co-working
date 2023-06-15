import "./scss/style.scss";
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
let slider = document.querySelector(".price__carousel");
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
