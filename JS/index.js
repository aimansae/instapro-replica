const logo = document.getElementsByClassName('logoblue')[0]
const togglemenu = document.getElementsByClassName("toggle-menu")[0]
const toggleMenuX = document.getElementsByClassName('iconx')[0]
const toggleMenuBars = document.getElementsByClassName('icon-bars')[0]

const navbarLinks = document.getElementsByClassName('nav-links')[0]
const signupStyle = document.getElementsByClassName('signup-style')[0]
const svgContainer = document.getElementsByClassName('instapro-logo')[0];
const header = document.getElementsByClassName('header')[0]


togglemenu.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
    togglemenu.classList.toggle("navbarActive")
    header.classList.toggle("headerActiveBackground")
    toggleMenuBars.classList.toggle('activeBars')
    toggleMenuX.classList.toggle('activeX')
    signupStyle.style.border = 'none';
    logo.classList.toggle('activeLogo')

    

    
})


// for logo image
// togglemenu.addEventListener('click', () =>{

//   const logoImg = document.createElement('img');
//   logoImg.classList.add('newLogo')
//   logoImg.src = './images/logo-blue.png';
//   logoImg.alt = 'Logo Image';

//   svgContainer.innerHTML = '';
//   svgContainer.appendChild(logoImg);
// })


// expand more jobs button
var expandButton = document.getElementById("expandButton");
var container = document.querySelector(".expand-hide");

expandButton.addEventListener("click", function() {
  container.classList.toggle("show");

  expandButton.remove();
  console.log('clicked')
});