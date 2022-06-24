// const hamburger = document.querySelector(".menu-bar");
// const sideMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//   sideMenu.classList.toggle("active");
// });

// document.querySelectorAll(".nav-link").forEach((n) =>
//   n.addEventListener("click", () => {
//     sideMenu.classList.remove("active");
//   })
// );

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

// function ShowAlert() {
//   var email = document.getElementById("mail");
//   var filter =
//     /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   if (!filter.test(email.value)) {
//     alert("Please provide a valid email address");
//     email.focus;
//     return false;
//   } else {
//     alert(
//       "Thanks for your intrest in us, Now you will be able to receive monthly updates from us."
//     );
//     document.getElementById("mail").value = "";
//   }
// }

// function ValidateEmail(input) {
//   var validRegex = /^[a-z]/;

//   if (input.value.match(validRegex)) {
//     alert("Valid email address!");

//     document.form.user_email.focus();

//     return true;
//   } else {
//     alert("Invalid email address!");

//     document.form.user_email.focus();

//     return false;
//   }
// }
