const body = document.querySelector("body");
const toggleButton = document.querySelector(".menu-toggle");
const menuOverlay = document.querySelector(".header-menu-overlay");
const reserveButton = document.querySelector(".tour-reserve");
let toggleContent = toggleButton.querySelector("span");
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

window.addEventListener("resize", handeResize);
toggleButton.addEventListener("click", handleMenuToggle);
menuOverlay.addEventListener("click", handleMenuClose);

// Mobile menu resize state
function handeResize() {
   window.outerWidth <= 992 && body.classList.contains("menu-open")
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");

   toggleContent.textContent = "menu";
}

// Mobile menu toggle
function handleMenuToggle() {
   body.classList.toggle("menu-open");

   body.classList.contains("menu-open")
      ? (toggleContent.textContent = "close")
      : (toggleContent.textContent = "menu");
}

// Mobile menu toggle
function handleMenuClose() {
   body.classList.remove("menu-open");

   body.classList.contains("menu-open")
      ? (toggleContent.textContent = "close")
      : (toggleContent.textContent = "menu");
}

// Mobile scroll to content
function scrollTo(element) {
   window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop,
   });
}

reserveButton.addEventListener("click", () => {
   scrollTo(document.querySelector(".tour-sidebar"));
});

// Places carousel
var let = new Swiper(".tour-places .swiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
         spaceBetween: 15,
      },
      576: {
         slidesPerView: 2,
         spaceBetween: 15,
      },
      992: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1200: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
});

// Source to accordion: https://codeorum.com/tutorials/simple-accordion-collapsible-element-with-vanilla-js-and-simple-animation-effect
function initAcc(elem, option) {
   //addEventListener on mouse click
   document.addEventListener("click", function (e) {
      //check is the right element clicked
      if (!e.target.matches(elem + " .accordion-trigger")) return;
      else {
         //check if element contains active class
         if (!e.target.parentElement.classList.contains("active")) {
            if (option == true) {
               //if option true remove active class from all other accordions
               var elementList = document.querySelectorAll(
                  elem + " .accordion-panel"
               );
               Array.prototype.forEach.call(elementList, function (e) {
                  e.classList.remove("active");
               });
            }
            //add active class on cliked accordion
            e.target.parentElement.classList.add("active");
         } else {
            //remove active class on cliked accordion
            e.target.parentElement.classList.remove("active");
         }
      }
   });
}

//activate accordion function
initAcc(".accordion", true);
