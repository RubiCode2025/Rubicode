/***************************************************************
 *    اسکریپت همبرگری: باز/بسته کردن منو در موبایل
 ***************************************************************/
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const menuButtons = document.getElementById("menuButtons");

function toggleMenu() {
    // دکمه همبرگری انیمیشن تبدیل به ضربدر
    hamburgerBtn.classList.toggle("active");
    // نمایش یا مخفی کردن nav و buttons
    navMenu.classList.toggle("active");
    menuButtons.classList.toggle("active");
}

hamburgerBtn.addEventListener("click", toggleMenu);