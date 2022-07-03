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
  if (window.scrollY > 0) {
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

// Add items from shop to welcome pane
function addToWelcomePane(product) {
  welcomePaneContainer.appendChild(product);
}
let productsToShow = Array.from(
  document.getElementsByClassName("shop-item")
).slice(0, 5);
productsToShow.forEach((product) => {
  let itemName = product.getElementsByClassName("product-name")[0].innerHTML,
    itemDescription = product.getElementsByClassName("product-description")[0]
      .innerHTML,
    newHTMLObject = Object.assign(document.createElement("div"), {
      className: "welcome-pane",
      innerHTML: `
      <div class="main-product">
          <div class="product-info">
              <h1 class="product-name"> </h1>
              <p class="product-description">
              </p>
              <button class="shop-now">SHOP NOW</button>
          </div>
      </div>
`,});

  newHTMLObject.getElementsByClassName("product-name")[0].innerHTML = itemName;
  newHTMLObject.getElementsByClassName("product-description")[0].innerHTML =
    itemDescription;
  newHTMLObject.style.display = "flex";
  addToWelcomePane(newHTMLObject);
});

// Shop Now button
let shopNowButton = Array.from(document.getElementsByClassName("shop-now"));
let shop = document.getElementsByClassName("main-shop")[0];
shopNowButton.forEach((lrbutton) => {
  lrbutton.addEventListener("click", () => {
    shop.scrollIntoView({ behavior: "smooth" });
  });
});

// SLIDE SHOW
let currentSlide = -1,
  slides = Array.from(document.getElementsByClassName("welcome-pane")),
  nextButton = document.getElementsByClassName("next")[0],
  prevButton = document.getElementsByClassName("prev")[0];

// Slide show on click
function slideShow(current) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[current].style.display = "flex";
}

// Auto slide show
setInterval(function () {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  slideShow(currentSlide);
}, 5000);

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

// Shop slide show
let shopProducts = Array.from(document.getElementsByClassName("shop-item")),
  nextButtonShop = document.getElementsByClassName("shop-next-button")[0],
  prevButtonShop = document.getElementsByClassName("shop-prev-button")[0],
  groupedShopProducts = [],
  shopCurrentSlide = -1,
  currentPaneNumber = document.getElementById("current-pane-number"),
  totalPaneNumber = document.getElementById("total-pane-number");
// Slide show effect for main shop
function shopSlideShow(currentShopSlide) {
  groupedShopProducts.forEach((group) => {
    group.forEach((product) => {
      product.style.display = "none";
    });
  });
  groupedShopProducts[currentShopSlide].forEach((item) => {
    item.style.display = "flex";
  });
  currentPaneNumber.innerHTML = currentShopSlide + 1;
}

// Group shop products in twos
for (let i = 0; i < shopProducts.length; i += 4) {
  groupedShopProducts.push(shopProducts.slice(i, i + 4));
}
totalPaneNumber.innerHTML = groupedShopProducts.length;

// Next button action
nextButtonShop.addEventListener("click", function () {
  if (shopCurrentSlide < groupedShopProducts.length - 1) {
    shopCurrentSlide++;
  } else {
    shopCurrentSlide = 0;
  }
  shopSlideShow(shopCurrentSlide);
});
// Prev button action
prevButtonShop.addEventListener("click", function () {
  shopCurrentSlide--;
  if (shopCurrentSlide <= -1) {
    shopCurrentSlide = groupedShopProducts.length - 1;
  }
  shopSlideShow(shopCurrentSlide);
});

// VERBOSE PREVIEW PANE
let vCloseButton = document.getElementsByClassName("close-verbose-pane")[0],
  vOpenButtons = Array.from(document.getElementsByClassName("preview-button")),
  vPreviewPane = document.getElementsByClassName("verbose-pane")[0],
  vProductName = document.querySelector(".verbose-pane .product-name"),
  vProductPrice = document.querySelector(".verbose-pane .product-price"),
  vProductDescription = document.querySelector(
    ".verbose-pane .product-description"
  ),
  vProductImage = document.querySelector(".verbose-pane .product-image"),
  vProductQuantity = document.querySelector(".verbose-pane .item-stock");

// Update Verbose preview pane with product details
function updateVerbosePreview(previewButton) {
  let product = previewButton.parentNode.parentNode.parentNode;
  vProductName.innerHTML =
    product.getElementsByClassName("product-name")[0].innerHTML;
  vProductDescription.innerHTML = product.getElementsByClassName(
    "product-description"
  )[0].innerHTML;
  vProductPrice.innerHTML =
    product.getElementsByClassName("product-price")[0].innerHTML;
  vProductQuantity.innerHTML = product
    .getElementsByClassName("item-stock")[0]
    .innerHTML.split("/")[0];
  vProductImage.src = product.getElementsByClassName("product-img")[0].src;
}

// Verbose preview pane close button action
vOpenButtons.forEach((previewButton) => {
  previewButton.addEventListener("click", () => {
    updateVerbosePreview(previewButton);
    vPreviewPane.style.display = "flex";
  });
});
vCloseButton.addEventListener("click", () => {
  vPreviewPane.style.display = "none";
});

// CART
// Show on button click
let cartOpenButton = document.getElementsByClassName("cartBtn")[0],
  cartCloseButton = document.getElementsByClassName("close-cart")[0],
  cartPanel = document.getElementsByClassName("final-cart")[0];
cartOpenButton.addEventListener("click", () => {
  cartPanel.style.display = "flex";
});
cartCloseButton.addEventListener("click", () => {
  cartPanel.style.display = "none";
});

// Increase Cart item number on click(add-to-cart)
let addToCartButtons = Array.from(
    document.getElementsByClassName("add-to-cart")
  ),
  cartItemNumber = document.getElementById("cart-items-number");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartItemNumber.innerHTML = Number(cartItemNumber.innerHTML) + 1;
  });
});

// Remove item from cart on button click (remove-item button)
let removeItemButtons = Array.from(
  document.getElementsByClassName("remove-item")
);
removeItemButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.parentNode.remove();
    cartItemNumber.innerHTML = Number(cartItemNumber.innerHTML) - 1;
  });
});

// Slide show fix
// Fix all slides displaying on window load
function windowLoad() {
  // for Welcome Pane
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slideShow(0);
  // for Shop
  groupedShopProducts.forEach((group) => {
    group.forEach((product) => {
      product.style.display = "none";
    });
  });
  shopSlideShow(0);
}
windowLoad();
