// دکمه همبرگری
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const menuButtons = document.getElementById("menuButtons");

function toggleMenu() {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    menuButtons.classList.toggle("active");
}
hamburgerBtn.addEventListener("click", toggleMenu);

// تغییر وضعیت زیرمنو در سایدبار
function toggleSubmenu(element) {
    const submenu = element.nextElementSibling;
    submenu.classList.toggle('open');
}

// تغییر تب‌ها
document.querySelectorAll('.tabs button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.tabs button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        this.classList.add('active');
        const contentId = this.id.replace('tab-', '');
        document.getElementById(contentId).classList.add('active');
    });
});