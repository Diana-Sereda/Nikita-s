// Rellax effect 
// var rellax = new Rellax('.rellax');

// Search 

const body=document.querySelector('body');
const cart=document.querySelector('.cart');
const icon=document.querySelector('.search-icon');
const search=document.querySelector('.search');
const toClose=document.querySelector('.close');
const searchInput=document.querySelector('.search-input');
const invisic=document.querySelector('.invisic');
const searchValue=document.getElementById('this-search');
const result=document.querySelector('.search-result');


icon.onclick=function(){
  search.classList.add('searching');
  toClose.classList.remove('invisic');
  searchInput.classList.remove('invisic');
  cart.classList.toggle('invisic');
  cover.style.display = "block";
  result.style.display = "block";
  body.style.overflow = "hidden";


}
toClose.onclick=function(){
 searchValue.value='';
 search.classList.remove('searching');
 toClose.classList.add('invisic');
 searchInput.classList.add('invisic');
  cart.classList.toggle('invisic');
  cover.style.display = "none";
  result.style.display = "none";
    body.style.overflow = "auto";
}

//Show Cover 

const details = document.querySelector("details");
const cover = document.querySelector(".cover");

details.addEventListener("toggle", event => {
  if (details.open) {
    cover.style.display = "block";
     body.style.overflow = "hidden";
  } else {
    cover.style.display = "none";
     body.style.overflow = "auto";
  }
});