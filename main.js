const hamburger = document.querySelector(".menu-bar");
const sideMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  })
);
