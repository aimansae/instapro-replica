const togglemenu = document.getElementsByClassName("toggle-menu")[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]


togglemenu.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
    navbarLinks.classList.add('togglestyle')
})

// expand more jobs button
var expandButton = document.getElementById("expandButton");
var container = document.querySelector(".expand-hide");

expandButton.addEventListener("click", function() {
  container.classList.toggle("show");

  expandButton.remove();
  console.log('clicked')
});