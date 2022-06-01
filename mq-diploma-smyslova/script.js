// $(document).ready(function() {
//     $('.header__burger').click(function(event) {
//      $('.header__burger,.nav').toggleClass('active');
//      $('body').toggleClass('lock')
//     }); 
//  }); 

/* Тот же код без использования jQuery, на чистом JavaScript */
let burder = document.querySelector(".header__burger");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let activeClass = "active";

burder.addEventListener("click", () => {
  nav.classList.toggle(activeClass);
  body.classList.toggle(activeClass);
})