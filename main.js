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

const form = document.getElementsByTagName("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", () => {
  if (email.value.search(/[a-z]g/) !== -1) {
    emailError.textContent = "success";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (email.value.search(/[a-z]g/) !== -1) {
    emailError.textContent = "success";
  } else {
    showError();
    event.preventDefault();
  }
});

function showError() {
  emailError.textContent = "Entered value needs to be in lowercase";
  emailError.className = "open";
}
