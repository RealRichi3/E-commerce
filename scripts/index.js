// Smooth scrolling for drop-down menu
// Drop down menu items
let aboutBtn = document.getElementsByClassName("about-menu")[0];
let contactBtn = document.getElementsByClassName("contact-menu")[0];
let contactDetails = document.getElementsByClassName("contact-details")[0];
let pageDescription = document.getElementsByClassName("page-description")[0];

aboutBtn.addEventListener("click", function () {
  pageDescription.scrollIntoView({
    behavior: "smooth",
  });
});
contactBtn.addEventListener("click", function () {
  contactDetails.scrollIntoView({
    behavior: "smooth",
  });
});


// Menu icon open and close action
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
})