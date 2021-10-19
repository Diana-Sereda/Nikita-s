// Rellax effect 
// var rellax = new Rellax('.rellax');

//Проверь работает ли в реальности !!!!!
//Remove rellax effect for mobile version 
if($(window).width() <= 834){
   $('.rellax').attr('data-rellax-speed', '0');
}


// Search 

const body=document.querySelector('body');
const cart=document.querySelector('.cart');
const icon=document.querySelector('.search-icon');
const search=document.querySelector('.search');
const toClose=document.querySelector('.close');
const closeTetxt=document.querySelector('.close-text');
const searchInput=document.querySelector('.search-input');
const invisic=document.querySelector('.invisic');
const searchValue=document.getElementById('this-search');
const result=document.querySelector('.search-result');
const resultMobile=document.querySelector('.search-result-mobile');


icon.onclick=function(){
  if($(window).width() <= 834){
    icon.classList.add('invisic');
    closeTetxt.classList.remove('invisic');
search.classList.add('searching');
toClose.classList.remove('invisic');
cart.classList.toggle('invisic');
resultMobile.style.display = "block";
body.style.overflow = "hidden";
  }else{
search.classList.add('searching');
toClose.classList.remove('invisic');
searchInput.classList.remove('invisic');
cart.classList.toggle('invisic');
cover.style.display = "block";
result.style.display = "block";
body.style.overflow = "hidden";
  }
}

toClose.onclick=function(){
 searchValue.value='';
 search.classList.remove('searching');
 toClose.classList.add('invisic');
 searchInput.classList.add('invisic');
  cart.classList.toggle('invisic');
  resultMobile.style.display = "none";
  cover.style.display = "none";
  result.style.display = "none";
    body.style.overflow = "auto";
    icon.classList.remove('invisic');
    closeTetxt.classList.add('invisic');
}
// icon.onclick=function(){
//   search.classList.add('searching');
//   toClose.classList.remove('invisic');
//   // closeTetxt.classList.remove('invisic');
//   searchInput.classList.remove('invisic');
//   cart.classList.toggle('invisic');
//   cover.style.display = "block";
//   result.style.display = "block";
//   body.style.overflow = "hidden";
// }
// toClose.onclick=function(){
//  searchValue.value='';
//  search.classList.remove('searching');
//  toClose.classList.add('invisic');
// //  closeTetxt.classList.add('invisic');
//  searchInput.classList.add('invisic');
//   cart.classList.toggle('invisic');
//   cover.style.display = "none";
//   result.style.display = "none";
//     body.style.overflow = "auto";
// }


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

// Close details
const eng=document.getElementById('en');
const summary = document.querySelector("summary");

eng.onclick=function(){
  document.getElementById('rus-img').src='img/icons/EN.svg';
  document.getElementById('en-img').src='img/icons/RU.svg';
  details.removeAttribute("open");
}
summary.onclick=function(){
  document.getElementById('rus-img').src='img/icons/RU.svg';
  document.getElementById('en-img').src='img/icons/EN.svg';
}

//connect button 

const connect_btn=document.querySelector(".connect");
connect_btn.onclick=function(){
  connect_btn.innerHTML="8 905 950 60 31";
}

