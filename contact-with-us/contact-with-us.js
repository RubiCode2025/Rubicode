
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const menuButtons = document.getElementById("menuButtons");

function toggleMenu() {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    menuButtons.classList.toggle("active");
}

hamburgerBtn.addEventListener("click", toggleMenu);