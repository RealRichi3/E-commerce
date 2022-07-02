// SMOOTH SCROLLING - Menubar buttons
let aboutMenuBtn = document.getElementsByClassName("about-menu")[0];
let contactMenuBtn = document.getElementsByClassName("contact-menu")[0];
let aboutNavBtn = document.getElementById("about-btn");
let contactNavBtn = document.getElementById("contact-btn");
let contactDetails = document.getElementsByClassName("contact-details")[0];
let pageDescription = document.getElementsByClassName("page-description")[0];

function scrollTo(button, pageSection) {
  button.addEventListener("click", function () {
    pageSection.scrollIntoView({ behavior: "smooth" });
  });
}
let buttonPageSection = [
  [aboutMenuBtn, pageDescription],
  [aboutNavBtn, pageDescription],
  [contactMenuBtn, contactDetails],
  [contactNavBtn, contactDetails],
];
buttonPageSection.forEach((itemAction) => {
  scrollTo(itemAction[0], itemAction[1]);
});

// MENUBAR open and close action
let openMenuButton = document.getElementsByClassName("open-menu")[0],
  closeMenuButton = document.getElementsByClassName("close-menu")[0],
  dropDownMenu = document.getElementsByClassName("drop-down-menu")[0];

openMenuButton.addEventListener("click", function () {
  dropDownMenu.style.display = "block";
  openMenuButton.style.display = "none";
  closeMenuButton.style.display = "block";
});
closeMenuButton.addEventListener("click", function () {
  dropDownMenu.style.display = "none";
  openMenuButton.style.display = "block";
  closeMenuButton.style.display = "none";
});

// HEADER - Smooth display on scroll
let header = document.getElementsByClassName("header")[0];
let headerContainer = document.getElementsByClassName("header-container")[0];
window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    header.classList.add("scrolled");
    header.classList.add("shadow");
    headerContainer.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    header.classList.remove("shadow");
    headerContainer.classList.remove("scrolled");
  }
});

// Smooth show and hide effect for Slide show next and prev buttons
let leftArrow = document.getElementsByClassName("left-arrow")[0];
let rightArrow = document.getElementsByClassName("right-arrow")[0];
let welcomePaneContainer = document.getElementsByClassName(
  "welcome-pane-container"
)[0];
welcomePaneContainer.addEventListener("mouseover", function () {
  leftArrow.classList.add("button-hover");
  rightArrow.classList.add("button-hover");

  welcomePaneContainer.addEventListener("mouseout", function () {
    leftArrow.classList.remove("button-hover");
    rightArrow.classList.remove("button-hover");
  });
});

// Hover Effect for cart button
let cartButton = document.getElementsByClassName("cartBtn")[0],
  cartImg = document.getElementsByClassName("cartImg")[0];
cartButton.addEventListener("mouseover", function () {
  cartImg.setAttribute("src", "./img/icons/shopping-cart-hover.png");
});
cartButton.addEventListener("mouseout", function () {
  cartImg.setAttribute("src", "./img/icons/shopping-cart (3).png");
});

// Shop Now button
let shopNowButton = Array.from(document.getElementsByClassName("shop-now"));
let featuredProductSection =
  document.getElementsByClassName("featured-products")[0];
shopNowButton.forEach((lrbutton) => {
  lrbutton.addEventListener("click", () => {
    featuredProductSection.scrollIntoView({ behavior: "smooth" });
  });
});

// SLIDE SHOW
let currentSlide = -1,
  slides = Array.from(document.getElementsByClassName("welcome-pane")),
  nextButton = document.getElementsByClassName("next")[0],
  prevButton = document.getElementsByClassName("prev")[0];

// Auto slide show
setInterval(function () {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  slideShow(currentSlide);
}, 5000);

// Slide show on click
function slideShow(current) {
  slides.forEach((slide) => {
    slide.style.visibility = "hidden";
  });
  // slides[currentSlide].classList.add("OpacityOnAnim");
  slides[currentSlide].style.visibility = "hidden";
  slides[current].style.visibility = "visible";
}
nextButton.addEventListener("click", function () {
  currentSlide++;
  if (currentSlide == slides.length) {
    currentSlide = 0;
  }
  slideShow(currentSlide);
});
prevButton.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide <= -1) {
    currentSlide = slides.length - 1;
  }
  slideShow(currentSlide);
});
// Slide show fix
// Fix first background image not showing on load
function windowLoad() {
  slides.forEach((slide) => {
    slide.style.visibility = "hidden";
  });
  slides[0].style.visibility = "visible";
}
windowLoad();

// NEW ARRIVALS
// Product Image Hover Effect
let newArrivalItemImgs = Array.from(
  document.getElementsByClassName("new-arrivals-item-img")
);
newArrivalItemImgs.forEach((item) => {
  item.addEventListener("mouseover", function () {
    item.children[1].style.visibility = "visible";
  });
  item.addEventListener("mouseout", function () {
    item.children[1].style.visibility = "hidden";
  });
});

// SHOP ITEMS
// Product Image Hover Effect
let shopItemImgs = Array.from(document.getElementsByClassName("shop-item-img"));
shopItemImgs.forEach((item) => {
  item.addEventListener("mouseover", function () {
    item.children[1].style.visibility = "visible";
  });
  item.addEventListener("mouseout", function () {
    item.children[1].style.visibility = "hidden";
  });
});
// Add product description to match hover img
let hoverImgText = Array.from(
  document.getElementsByClassName("shop-img-hover")
);
hoverImgText.forEach((item) => {
  item.children[0].innerHTML =
    item.parentNode.parentNode.getElementsByClassName(
      "shop-item-description"
    )[0].innerHTML;
});

// Set Stock bar length to match soldQuantity/totalQuantity
let stockBar = Array.from(document.getElementsByClassName("stock-bar"));
stockBar.forEach((bar) => {
  let stock = bar.parentElement.children[0].innerHTML.split("/"),
    stockPercentage = (Number(stock[0]) / Number(stock[1])) * 100;
  bar.style.width = `${stockPercentage}%`;
});
