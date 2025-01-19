//Displaying the Search Form
let searchBtn = document.getElementById("search-btn");
let searchForm = document.getElementById("search-box");

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    //Removing Other Bars
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
})

//Displaying the Shopping Cart
let cartBtn = document.getElementById("cart-btn");
let shoppingCart = document.getElementById("cart-box");

cartBtn.addEventListener('click', () => {
    shoppingCart.classList.toggle('active');
    //Removing Other Bars
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
})

//Displaying the User Login Form
let userBtn = document.getElementById("user-btn");
let loginForm = document.getElementById("user-login");

userBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
    //Removing Other Bars
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
})

//Displaying the Side Navigation Bar
let menuBtn = document.getElementById("menu-btn");
let navBar = document.getElementById("nav-element");

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
    //Removing Other Bars
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
})

//Removing Side Bars When Scrolling the Window
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

// Swiper Part
var swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });