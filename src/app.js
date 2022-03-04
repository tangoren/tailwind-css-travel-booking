const body = document.querySelector("body");
const toggleButton = document.querySelector(".menu-toggle");
let toggleContent = toggleButton.querySelector("span");

window.addEventListener("resize", handeResize);
toggleButton.addEventListener("click", handleMenu);

function handeResize() {
   window.outerWidth <= 992 && body.classList.contains("menu-open")
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");

   toggleContent.textContent = "menu";
}

function handleMenu() {
   body.classList.toggle("menu-open");

   body.classList.contains("menu-open")
      ? (toggleContent.textContent = "close")
      : (toggleContent.textContent = "menu");
}
