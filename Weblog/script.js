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

/***************************************************************
 *    اسکریپت تب‌ها: نمایش سکشن‌های مربوطه
 ***************************************************************/
function showTopic(num) {
    // همه‌ی دکمه‌ها را گرفته و کلاس active را حذف می‌کنیم
    const buttons = document.querySelectorAll('.topic-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    // دکمه کلیک شده را active می‌کنیم
    buttons[num - 1].classList.add('active');

    // همه‌ی سکشن‌های موضوع را می‌گیریم
    const sections = document.querySelectorAll('.topic-content');
    sections.forEach(sec => sec.classList.remove('active'));

    // سکشن مربوط به موضوع انتخاب‌شده را فعال می‌کنیم
    const selectedSection = document.getElementById(`topic${num}`);
    selectedSection.classList.add('active');
}