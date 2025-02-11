/***************************************************************
 *    اسکریپت همبرگری: باز/بسته کردن منو در موبایل
 ***************************************************************/
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const menuButtons = document.getElementById("menuButtons");

function toggleMenu() {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    menuButtons.classList.toggle("active");
}

hamburgerBtn.addEventListener("click", toggleMenu);

// بستن منو با کلیک بر روی لینک‌ها (اختیاری)
const navLinks = document.querySelectorAll('.nav-list a, nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

/***************************************************************
 *    اسکریپت تب‌دار (اسلایدر محصولات)
 ***************************************************************/
    // داده‌ها (مسیری از تصاویر دلخواه خود جایگزین کنید)
const imagesData = {
        cat1: [
            "",
            "",
            "",
        ],
        cat2: [
            "",
            "",
            "",
        ],
        cat3: [
            "",
            "",
            "",
        ]
    };

const mySlider = document.getElementById("mySlider");
const selectedPreview = document.getElementById("selectedPreview");
const tabButtons = document.querySelectorAll(".my-tab-btn");

// دسته پیش‌فرض
let currentCategory = "cat1";
// اندیس فعلی که وسط قرار دارد
let currentIndex = 0;

function renderSlides() {
    mySlider.innerHTML = "";
    const imagesArray = imagesData[currentCategory];
    const total = imagesArray.length;

    // پنج اسلاید [-2, -1, 0, +1, +2]
    for (let i = -2; i <= 2; i++) {
        const slideIndex = (currentIndex + i + total) % total;
        const slide = document.createElement("div");
        slide.classList.add("my-slide");

        // تعیین کلاس بر اساس فاصله از مرکز
        if (i === 0) {
            slide.classList.add("center");
        } else if (i === 1) {
            slide.classList.add("right");
        } else if (i === -1) {
            slide.classList.add("left");
        } else if (i === 2) {
            slide.classList.add("far-right");
        } else if (i === -2) {
            slide.classList.add("far-left");
        }

        const img = document.createElement("img");
        img.src = imagesArray[slideIndex];
        img.alt = `Slide ${slideIndex + 1}`;
        slide.appendChild(img);

        mySlider.appendChild(slide);
    }
    // به‌روزرسانی باکس انتخاب‌شده (تصویر وسط)
    updateSelectedBox();
}

function nextSlide() {
    const imagesArray = imagesData[currentCategory];
    currentIndex++;
    if (currentIndex >= imagesArray.length) {
        currentIndex = 0;
    }
    renderSlides();
}

function prevSlide() {
    const imagesArray = imagesData[currentCategory];
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imagesArray.length - 1;
    }
    renderSlides();
}

// نمایش تصویر مرکز در باکس بزرگ
function updateSelectedBox() {
    selectedPreview.innerHTML = "";
    const imagesArray = imagesData[currentCategory];
    const bigImgSrc = imagesArray[currentIndex];
    const bigImg = document.createElement("img");
    bigImg.src = bigImgSrc;
    bigImg.alt = `Selected Slide ${currentIndex + 1}`;
    selectedPreview.appendChild(bigImg);
}

function changeTab(category) {
    if (category === currentCategory) return; // جلوگیری از رفرش غیرضروری
    currentCategory = category;
    currentIndex = 0;
    renderSlides();
    tabButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === category);
    });
}

// راه‌اندازی اولیه
renderSlides();

// هندل تب‌ها
tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        changeTab(btn.dataset.category);
    });
});