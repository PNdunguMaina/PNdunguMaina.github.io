// mobile-menu
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

// mobile-popup

const mainProjects = [
  {
    imagePlaceholder: "Images/ImgPlaceholder.png",
    title: "Multi-Post Stories",
    projectText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ["css", "html", "Bootstrap", "Ruby"],
    button: "See Project",
  },
  {
    imagePlaceholder: "Images/ImgPlaceholder.png",
    title: "Multi-Post Stories",
    projectText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ["css", "html", "Bootstrap", "Ruby"],
    button: "See Project",
  },
  {
    imagePlaceholder: "Images/ImgPlaceholder.png",
    title: "Multi-Post Stories",
    projectText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ["css", "html", "Bootstrap", "Ruby"],
    button: "See Project",
  },
  {
    imagePlaceholder: "Images/ImgPlaceholder.png",
    title: "Multi-Post Stories",
    projectText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tags: ["css", "html", "Bootstrap", "Ruby"],
    button: "See Project",
  },
];

const worksSection = document.getElementById("works");

mainProjects.forEach((project) => {
  const div = document.createElement("div");
  div.className = "works list-2";
  worksSection.appendChild(div);

  const divFirst = document.createElement("div");
  divFirst.className = "featured-img";
  divFirst.innerHTML = `<img src=${project.imagePlaceholder} alt="Image placeholder">`;
  div.appendChild(divFirst);

  const divSecond = document.createElement("div");
  divSecond.className = "right-block";
  div.appendChild(divSecond);

  const header = document.createElement("h4");
  header.innerHTML = project.title;
  divSecond.appendChild(header);

  const p = document.createElement("p");
  p.className = "work-text";
  p.innerHTML = project.projectText;
  divSecond.appendChild(p);

  const ul = document.createElement("ul");
  ul.className = "tags";
  divSecond.appendChild(ul);

  for (let i = 0; i < project.tags.length; i++) {
    const tagList = document.createElement("li");
    const tagsLength = project.tags.length;
    tagList.textContent = project.tags[i];
    ul.appendChild(tagList);
  }

  const buttonWorks = document.createElement("button");
  buttonWorks.dataset.modalTarget = "#modal";
  buttonWorks.type = "button";
  buttonWorks.className = "button-works";
  buttonWorks.textContent = project.button;
  divSecond.appendChild(buttonWorks);
});

// pop-up window

const mobilePopup = [
  {
    title: "Multi-post story",
    closeButton: "&times;",
    snapshootPortfolio: "Images/pop-up img2.svg",
    projectText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    tags: ["html", "Ruby on Rails", "css", "Bootstrap"],
    liveVersion: "https://pndungumaina.github.io/",
    sourceCode: "https://github.com/PNdunguMaina/My-personal-portfolio.git",
  },
];

const modal = document.getElementById("modal");

const divHeader = document.createElement("div");
divHeader.id = "modal-header";
modal.appendChild(divHeader);

const h1 = document.createElement("h1");
h1.textContent = "Multi-post story";
divHeader.appendChild(h1);

const closeButtonMain = document.createElement("button");
closeButtonMain.dataset.closeButton = ".modal";
closeButtonMain.className = "close-button";
closeButtonMain.textContent = "X";
divHeader.appendChild(closeButtonMain);

const divImage = document.createElement("div");
divImage.className = "modal-img";
modal.appendChild(divImage);

const imageMobile = document.createElement("img");
imageMobile.src = "images/pop-up img.svg";
imageMobile.alt = "modal image mobile";
divImage.appendChild(imageMobile);

const imageDesktop = document.createElement("img");
imageDesktop.src = "images/close-img-2.svg";
imageDesktop.alt = "modal image desktop";
divImage.appendChild(imageDesktop);

const divContent = document.createElement("div");
divContent.className = "content";
modal.appendChild(divContent);

const contentText = document.createElement("p");
contentText.textContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.";
divContent.appendChild(contentText);

const ModalTags = document.createElement("ul");
ModalTags.className = "tags";
divContent.appendChild(ModalTags);

const ModalTag1 = document.createElement("li");
ModalTag1.textContent = "html";
ModalTags.appendChild(ModalTag1);

const ModalTag2 = document.createElement("li");
ModalTag2.textContent = "Ruby on rails";
ModalTags.appendChild(ModalTag2);

const ModalTag3 = document.createElement("li");
ModalTag3.textContent = "css";
ModalTags.appendChild(ModalTag3);

const ModalTag4 = document.createElement("li");
ModalTag4.textContent = "GitHub";
ModalTags.appendChild(ModalTag4);

const divButtons = document.createElement("div");
divButtons.className = "buttons";
modal.appendChild(divButtons);

const liveButton = document.createElement("button");
liveButton.type = "submit";
liveButton.className = "live-btn";
liveButton.textContent = "See Live";
divButtons.appendChild(liveButton);

const imageLiveButton = document.createElement("img");
imageLiveButton.src = "images/pop-up ellipse-1.svg";
imageLiveButton.alt = "pop-up ellipse";
liveButton.appendChild(imageLiveButton);

const sourceButton = document.createElement("button");
sourceButton.type = "submit";
sourceButton.className = "source-btn";
sourceButton.textContent = "See Source";
divButtons.appendChild(sourceButton);

const sourceButtonSpan = document.createElement("span");
sourceButton.appendChild(sourceButtonSpan);

const imageSourceButton = document.createElement("img");
imageSourceButton.src = "images/github.svg";
imageSourceButton.alt = "GitHub icon";
sourceButtonSpan.appendChild(imageSourceButton);

const openWindowButtons = document.querySelectorAll("[data-modal-target]");
const closeWindowButtons = document.querySelectorAll("[data-close-button]");

openWindowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    const overlay = document.getElementById("main");
    openWindow(modal, overlay);
  });
});

closeWindowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest("#modal");
    const overlay = document.getElementById("main");
    closeWindow(modal, overlay);
  });
});

function openWindow(modal, overlay) {
  if (modal === null) {
    return;
  } else {
    modal.classList.add("active");
    overlay.classList.add("active");
  }
}

function closeWindow(modal, overlay) {
  if (modal === null) {
    return;
  } else {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}
