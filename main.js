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

// create website data preservation 

// object containing form data
const formInputData = {
  nameInputData: '',
  emailInputData: '',
  messageInputData: ''
}

// check the availability of form data
if (localStorage.getItem('formInputData')!==null){
  // retrieve the data if it is there
  const inputData = localStorage.getItem('formInputData');
  // deserialize the data
  formInputData = JSON.parse('inpuData');
}

// obtain the input and message data
const nameEmailMessageData = document.querySelectorAll('input, textarea');
// loop through the fields
nameEmailMessageData.forEach((field) => {
  field.value = formInputData[field.name];
  field.addEventListener('input', myLocalStorage);
})

// execute this function once event is fired

function myLocalStorage(e) {
  formInputData[e.target.name] = e.target.value;
    localStorage.setItem('formInputData', JSON.stringify('formInputData'));
}