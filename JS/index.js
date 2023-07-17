const togglemenu = document.getElementsByClassName("toggle-menu")[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]


togglemenu.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})