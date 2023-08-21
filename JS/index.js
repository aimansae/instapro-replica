const logo = document.querySelectorAll(".logoblue");
const logoGrey = document.querySelectorAll(".logogrey");
const menuButton = document.getElementsByClassName("toggle-menu")[0];
const toggleMenuX = document.getElementsByClassName("iconx")[0];
const toggleMenuBars = document.getElementsByClassName("icon-bars")[0];

const navbarLinks = document.getElementsByClassName("nav-links")[0];
const signupStyle = document.getElementsByClassName("signup-style")[0];
const svgContainer = document.getElementsByClassName("instapro-logo")[0];
const header = document.getElementsByClassName("header")[0];

menuButton.addEventListener("click", (e) => {
  navbarLinks.classList.toggle("active");
  menuButton.classList.toggle("navbarActive");
  header.classList.toggle("headerActiveBackground");
  toggleMenuBars.classList.toggle("activeBars");
  toggleMenuX.classList.toggle("activeX");
  signupStyle.style.border = "none";

  for (let i = 0; i < logo.length; i++) {
    logo[i].classList.toggle("activeLogo");
  }
  for (let i = 0; i < logoGrey.length; i++) {
    logoGrey[i].classList.toggle("activeLogoGrey");
  }
});

// to close togglemenu on click
document.addEventListener("click", (e) => {
  const target = e.target;

  if (!menuButton.contains(target) && !navbarLinks.contains(target)) {
    navbarLinks.classList.remove("active");
    menuButton.classList.remove("navbarActive");
    toggleMenuBars.classList.remove("activeBars");
    header.classList.remove("headerActiveBackground");
    toggleMenuX.classList.remove("activeX");
    signupStyle.style.border = "";
  }
});

// expand more jobs button
var expandButton = document.getElementById("expandButton");
var container = document.querySelector(".expand-hide");

expandButton.addEventListener("click", function () {
  container.classList.toggle("show");

  expandButton.remove();
  console.log("clicked");
});

// for logo image
// togglemenu.addEventListener('click', () =>{

//   const logoImg = document.createElement('img');
//   logoImg.classList.add('newLogo')
//   logoImg.src = './images/logo-blue.png';
//   logoImg.alt = 'Logo Image';

//   svgContainer.innerHTML = '';
//   svgContainer.appendChild(logoImg);
// })
