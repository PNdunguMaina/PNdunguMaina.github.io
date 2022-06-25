const hamburger = document.querySelector('.menu-bar');
const sideMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  sideMenu.classList.remove('active');
}));

// create website data preservation

// object containing form data
// Local storage
const fullNameForm = document.getElementById('name');
const emailForm = document.getElementById('mail');
const commentForm = document.getElementById('message');

function handleChange() {
  const formData = {
    fullName: fullNameForm.value,
    email: emailForm.value,
    comment: commentForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const getFormValue = localStorage.getItem('form');
  if (getFormValue) {
    const formObject = JSON.parse(getFormValue);
    fullNameForm.value = formObject.fullName;
    emailForm.value = formObject.email;
    commentForm.value = formObject.comment;
  }
});

fullNameForm.onchange = handleChange;
emailForm.onchange = handleChange;
commentForm.onchange = handleChange;
