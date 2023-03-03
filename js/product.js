/* || PRODUCT PAGE || */

// Creating a function that when i click on an image it will show the image

const images = document.querySelectorAll(".images");
const img1 = document.querySelector(".img1");

// Making a function that changes the main image to the selected image

const changingImg = (img) => {
  let img__src = "/img/products/" + img.id + ".png";
  let img__src2 = "/img/products/" + img1.id + ".png";
  let temp = img1.id;
  img1.id = img.id;
  img.id = temp;
  img1.src = img__src;
  img.src = img__src2;
};

// Calling the changing Image function

img1.addEventListener("click", () => {
  changingImg(img1);
});

for (i = 0; i < images.length; i++) {
  const img = images[i];
  img.addEventListener("click", () => {
    changingImg(img);
  });
}
/* || ADDING products TO FAVORITE LIST ICON Button || */
const favorite__button = document.querySelector(".addTo__favorites");
console.log(favorite__button);
const favorite__button__img = document.querySelector(".addTo__favorites__img");
const favorite__button__img2 = document.querySelector(
  ".addTo__favorites__img2"
);

favorite__button.addEventListener("click", () => {
  if (favorite__button__img2.classList.contains("hide-img")) {
    favorite__button__img2.classList.remove("hide-img");
    favorite__button__img.classList.add("hide-img");
  } else {
    favorite__button__img2.classList.add("hide-img");
    favorite__button__img.classList.remove("hide-img");
  }
});

/* || Function for the links in the header of  product features  || */

// Defining the links and the sections
const introduction__link = document.getElementById("introduction__link");
const information__link = document.getElementById("information__link");
const comments__link = document.getElementById("comments__link");
const introduction__section = document.querySelector(".introduction");
const information__section = document.querySelector(".product__information");
const comments__section = document.querySelector(".commentSection");
const similar__products__title = document.querySelector(
  ".similar__products__title"
);
const similar__products__section = document.querySelector(
  ".similar__products__section"
);

/* Giving the similar products and shop icons and footer a top value */

const current__feature__section = document.querySelector(
  ".current__feature__section"
);

const shopIcons = document.querySelector(".shopIcons2");
const footer = document.getElementById("productFooter");
const copyRight = document.querySelector(".copyRight2");

similar__products__section.style.top =
  854 + current__feature__section.offsetHeight + "px";
similar__products__title.style.top =
  805 + current__feature__section.offsetHeight + "px";
shopIcons.style.top = 1350 + current__feature__section.offsetHeight + "px";
footer.style.top = 1600 + current__feature__section.offsetHeight + "px";
copyRight.style.top = 2060 + current__feature__section.offsetHeight + "px";

// Creating the function that shows the relatad section to the link and change the current link

const change__featureSection = (feature__link, feature__section) => {
  const current__feature__section = document.querySelector(
    ".current__feature__section"
  );

  const current__feature__link = document.querySelector(".current__feature");
  if (feature__section.classList.contains("hidden")) {
    feature__section.classList.remove("hidden");
    current__feature__section.classList.add("hidden");
    current__feature__section.classList.remove("current__feature__section");
    current__feature__link.classList.remove("current__feature");
    feature__section.classList.add("current__feature__section");
    feature__link.classList.add("current__feature");
    similar__products__section.style.top =
      854 + feature__section.offsetHeight + "px";
    similar__products__title.style.top =
      805 + feature__section.offsetHeight + "px";
    shopIcons.style.top = 1350 + feature__section.offsetHeight + "px";
    footer.style.top = 1600 + feature__section.offsetHeight + "px";
    copyRight.style.top = 2060 + feature__section.offsetHeight + "px";
  }
};

// Adding an event listener to the links to call the function
introduction__link.addEventListener("click", () => {
  change__featureSection(introduction__link, introduction__section);
});

information__link.addEventListener("click", () => {
  change__featureSection(information__link, information__section);
});

comments__link.addEventListener("click", () => {
  change__featureSection(comments__link, comments__section);
});
