const body = document.querySelector("body");
const toggleButton = document.querySelector(".menu-toggle");

window.addEventListener("resize", handeResize);
toggleButton.addEventListener("click", handleMenu);

function handeResize() {
   window.outerWidth <= 992 && body.classList.contains("menu-open")
      ? body.classList.add("menu-open")
      : body.classList.remove("menu-open");
}

function handleMenu() {
   body.classList.toggle("menu-open");

   let toggleContent = toggleButton.querySelector("span");

   body.classList.contains("menu-open")
      ? (toggleContent.textContent = "close")
      : (toggleContent.textContent = "menu");
}
