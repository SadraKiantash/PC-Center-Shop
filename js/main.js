/* || HEADER || */
/* Defining menu button and nav menu part */

const menuButton = document.querySelector(".menu__button");
const navMenu = document.querySelector(".navMenu");

/* adding an event listener to menu button and give it a function to show/hide nav menu */

menuButton.addEventListener("click", () => {
  if (navMenu.classList.contains("hideNav")) {
    navMenu.classList.remove("hideNav");
    navMenu.classList.add("showNav");
  } else {
    navMenu.classList.add("hideNav");
    navMenu.classList.remove("showNav");
  }
});

/* || CAROUSEL || */

/* defining the diffrent parts of the carousel */

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = 100 * index + "vw";
};

slides.forEach(setSlidePosition);
window.addEventListener("resize", function () {
  slides.forEach(setSlidePosition);
});

// Move slide
const moveToSlide = (currentSlide, targetSlide, targetDot) => {
  const currentDot = dotsNav.querySelector(".current-slide");
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");

  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

// when I click the nav indicators, move to that slide
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(currentSlide, targetSlide, targetDot, targetIndex);
});

// Adding a function with timer to go to the next slide of carousel automatically

let carouselTimer = setInterval(function () {
  // Defining the next current slide of carousel and specifing the next slide and slide indicators
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const slideIndex = slides.findIndex((slide) => slide === nextSlide);
  const targetDot = dots[slideIndex];

  // If the current slide is the last slide. go to the first slides

  if (slideIndex === slides.length - 1) {
    function goToTheFirstSlide() {
      moveToSlide(slides[slides.length - 1], slides[0], dots[0]);
    }
    goToTheFirstSlide();
  }

  //move to the next slide

  if (slideIndex != -1) moveToSlide(currentSlide, nextSlide, targetDot);
}, 5000);
