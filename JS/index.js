const togglemenu = document.getElementsByClassName("toggle-menu")[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
const signupStyle = document.getElementsByClassName('signup-style')[0]
const svgContainer = document.getElementsByClassName('instapro-logo')[0];
const header = document.getElementsByClassName('header')[0]


togglemenu.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
    navbarLinks.classList.add('togglestyle');    
    togglemenu.style.color = 'black';
    togglemenu.style.border = '1px solid #3F27BA';
    header.style.backgroundColor ='#fff';

    signupStyle.style.border = 'none';

    
})


// for logo image
togglemenu.addEventListener('click', () =>{

  const logoImg = document.createElement('img');
  logoImg.classList.add('newLogo')
  logoImg.src = './images/logo-blue.png';
  logoImg.alt = 'Logo Image';

  svgContainer.innerHTML = '';
  svgContainer.appendChild(logoImg);
})


// expand more jobs button
var expandButton = document.getElementById("expandButton");
var container = document.querySelector(".expand-hide");

expandButton.addEventListener("click", function() {
  container.classList.toggle("show");

  expandButton.remove();
  console.log('clicked')
});