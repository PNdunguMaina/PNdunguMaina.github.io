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

const form = document.getElementById("contact-form");
const emailInput = document.getElementById("mail");
const alert = document.querySelector(".error");

form.addEventListener("submit", (event) => {
  let alertError = "";
  const email = emailInput.value.toLowerCase();
  if (email !== emailInput.value) {
    alertError =
      "Your form cannot be submitted, please turn it to lowercase and resubmit";
  }
  if (alertError.length > 0) {
    event.preventDefault();
    alert.innerHTML = alertError;
  }
});
