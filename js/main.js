const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").
forEach(link => {
  if(link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
})

//NAV-PROJECTS DROPDOWN 

const projDropdown  = document.querySelector(".nav-projects");

projDropdown.addEventListener("click", function() {
  document.querySelector(".nav-dropdown").classList.toggle("active-dropdown");
})