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
let openMenuButton = document.getElementsByClassName("open-menu")[0];
let closeMenuButton = document.getElementsByClassName("close-menu")[0];
let dropDownMenu = document.getElementsByClassName("drop-down-menu")[0];

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

let leftArrow = document.getElementsByClassName("left-arrow")[0];
let rightArrow = document.getElementsByClassName("right-arrow")[0];
let welcomePane = document.getElementsByClassName("welcome-pane")[0];
welcomePane.addEventListener("mouseover", function () {
  leftArrow.classList.add("button-hover");
  rightArrow.classList.add("button-hover");

  welcomePane.addEventListener("mouseout", function () {
    leftArrow.classList.remove("button-hover");
    rightArrow.classList.remove("button-hover");
  });
});

let i = 0;
let views = document.getElementsByClassName("main-product");

function changeView() {
  document.slide.src = views[i];
  if (i < views.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeView, 3000);
}


