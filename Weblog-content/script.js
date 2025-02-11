// تابع تغییر رنگ پس‌زمینه هدر (کد اصلی شما)
function toggleHeaderColor() {
    const headerBox = document.getElementById('headerBox');
    if (headerBox.style.backgroundColor === 'black') {
        headerBox.style.backgroundColor = '#333';
    } else {
        headerBox.style.backgroundColor = 'black';
    }
}

// تابع نمایش/مخفی کردن منوی ناوبری در موبایل
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuButtons = document.getElementById('menuButtons');
    navMenu.classList.toggle('active');
    menuButtons.classList.toggle('active');
}