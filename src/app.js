const body = document.querySelector("body");
const toggleButton = document.querySelector(".menu-toggle");
let toggleContent = toggleButton.querySelector("span");

window.addEventListener("resize", handeResize);
toggleButton.addEventListener("click", handleMenu);

// Mobile menu resize state
function handeResize() {
   window.outerWidth <= 992 && body.classList.contains("menu-open")
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");

   toggleContent.textContent = "menu";
}

// Mobile menu state
function handleMenu() {
   body.classList.toggle("menu-open");

   body.classList.contains("menu-open")
      ? (toggleContent.textContent = "close")
      : (toggleContent.textContent = "menu");
}

// Places carousel
var let = new Swiper(".tour-places .swiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
