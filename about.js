let leftArrowAbout = document.querySelector(".team__carousel-btn--left");
let rightArrowAbout = document.querySelector(".team__carousel-btn--right");
console.log(leftArrowAbout);
console.log(rightArrowAbout);
let teamCarousel = document.querySelector(".team__carousel");
let cards = document.querySelectorAll(".team__card");
let countAbout = 0;
let widthAbout;
let translateAbout = 0;

function initAbout() {
  cards.forEach((item) => {
    item.style.width = widthAbout + "px";
  });
  rollSliderAbout();
}
window.addEventListener("resize", initAbout);

initAbout();

function rollSliderAbout() {
  teamCarousel.style.transform = "translate(-" + translateAbout + "px)";
}
leftArrowAbout.addEventListener("click", () => {
  countAbout--;
  console.log(countAbout);
  if (countAbout <= 0) {
    countAbout = cards.length;
    translateAbout = translateAbout - -661;
  } else {
    translateAbout = translateAbout - 304;
  }
  rollSliderAbout();
});

rightArrowAbout.addEventListener("click", () => {
  countAbout++;
  console.log("asdas");
  if (countAbout >= cards.length) {
    translateAbout = 0;
    countAbout = 0;
  } else {
    translateAbout = translateAbout - -304;
  }
  rollSliderAbout();
});
