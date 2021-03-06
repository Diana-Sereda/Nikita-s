// Search

const body = document.querySelector("body");
const cart = document.querySelector(".cart");
const icon = document.querySelector(".search-icon");
const search = document.querySelector(".search");
const toClose = document.querySelector(".close");
const closeTetxt = document.querySelector(".close-text");
const searchInput = document.querySelector(".search-input");
const invisic = document.querySelector(".invisic");
const searchValue = document.getElementById("this-search");
const result = document.querySelector(".search-result");
const resultMobile = document.querySelector(".search-result-mobile");

icon.onclick = function () {
  if ($(window).width() <= 834) {
    icon.classList.add("invisic");
    closeTetxt.classList.remove("invisic");
    search.classList.add("searching");
    toClose.classList.remove("invisic");
    cart.classList.toggle("invisic");
    resultMobile.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    search.classList.add("searching");
    toClose.classList.remove("invisic");
    searchInput.classList.remove("invisic");
    cart.classList.toggle("invisic");
    cover.style.display = "block";
    result.style.display = "block";
    body.style.overflow = "hidden";
  }
};

toClose.onclick = function () {
  searchValue.value = "";
  search.classList.remove("searching");
  toClose.classList.add("invisic");
  searchInput.classList.add("invisic");
  cart.classList.toggle("invisic");
  resultMobile.style.display = "none";
  cover.style.display = "none";
  result.style.display = "none";
  body.style.overflow = "auto";
  icon.classList.remove("invisic");
  closeTetxt.classList.add("invisic");
};
closeTetxt.onclick = function () {
  searchValue.value = "";
  search.classList.remove("searching");
  toClose.classList.add("invisic");
  searchInput.classList.add("invisic");
  cart.classList.toggle("invisic");
  resultMobile.style.display = "none";
  cover.style.display = "none";
  result.style.display = "none";
  body.style.overflow = "auto";
  icon.classList.remove("invisic");
  closeTetxt.classList.add("invisic");
};

//Show Cover

const details = document.querySelector("details");
const cover = document.querySelector(".cover");

details.addEventListener("toggle", (event) => {
  if (details.open) {
    cover.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    cover.style.display = "none";
    body.style.overflow = "auto";
  }
});

// Close details
const eng = document.getElementById("en");
const summary = document.querySelector("summary");

eng.onclick = function () {
  document.getElementById("rus-img").src = "img/icons/EN.svg";
  document.getElementById("en-img").src = "img/icons/RU.svg";
  details.removeAttribute("open");
};
summary.onclick = function () {
  document.getElementById("rus-img").src = "img/icons/RU.svg";
  document.getElementById("en-img").src = "img/icons/EN.svg";
};

//add to cart button
const like = document.querySelector(".like");
const inactive = document.querySelector(".inactive-like");
const active = document.querySelector(".active-like");

inactive.onclick = function () {
 inactive.style.display = "none";
 active.style.display = "block";
};
active.onclick = function () {
 active.style.display = "none";
 inactive.style.display = "block";
};
const addToCart = document.querySelector(".add-to-cart");
const ok = document.querySelector(".ok-btn");

addToCart.onclick = function () {
  document.querySelector(".cart-window").style.display = "block";
   cover.style.display = "block";
   cover.style.height = "200vh";
};
ok.onclick = function () {
  document.querySelector(".cart-window").style.display = "none";
   cover.style.display = "none";
};
//connect button
const connect_btn = document.querySelector(".connect");
connect_btn.onclick = function () {
  connect_btn.innerHTML = "8 905 950 60 31";
};

// Showpong cart window
const allAdded = document.querySelector(".all-added-products");
const addedProductsNumber = cartWindow.children.length;
const addedProduct = document.getElementsByClassName("added-product");

for (var i = 0; i < addedProduct.length; i++) {
  if (addedProductsNumber <= 2) {
    addedProduct[i].style.width = "100%";
    addedProduct[i].style.margin = "auto";
  }
}
for (var i = 0; i < addedProduct.length; i++) {
  if (addedProductsNumber > 2) {
    addedProduct[i].style.width = "43%";
  }
}

 