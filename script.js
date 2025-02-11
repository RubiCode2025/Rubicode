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

/***************************************************************
 *       اسلایدر تب‌دار (محصولات) – کد نمونه (تزریق JS)
 ***************************************************************/
const imagesData = {
    cat1: ["", "", ""],
    cat2: ["", "", ""],
    cat3: ["", "", ""]
};
const mySlider = document.getElementById("mySlider");
const tabButtons = document.querySelectorAll(".my-tab-btn");

let currentCategory = "cat1";
let currentIndex = 0;
let slideInterval = null;

function renderSlides() {
    mySlider.innerHTML = "";
    const imagesArray = imagesData[currentCategory];
    const total = imagesArray.length;

    for (let i = -1; i <= 1; i++) {
        const slideIndex = (currentIndex + i + total) % total;
        const slide = document.createElement("div");
        slide.classList.add("my-slide");

        if (i === 0) {
            slide.classList.add("center");
        } else if (i === 1) {
            slide.classList.add("right");
        } else if (i === -1) {
            slide.classList.add("left");
        }

        const img = document.createElement("img");
        img.src = imagesArray[slideIndex];
        slide.appendChild(img);

        mySlider.appendChild(slide);
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % imagesData[currentCategory].length;
    renderSlides();
}

function startAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}

function changeTab(category) {
    currentCategory = category;
    currentIndex = 0;
    renderSlides();
    startAutoSlide();
    tabButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === category);
    });
}

changeTab(currentCategory);
tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        changeTab(btn.dataset.category);
    });
});

/***************************************************************
 *         اسلایدر وبلاگ – کد جدید چند باکسی (ریسانسیو)
 ***************************************************************/
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('blogSliderTrack');
    // در اینجا با توجه به عرض صفحه تعداد اسلایدهای قابل نمایش تنظیم می‌شود:
    let visibleCount = window.innerWidth < 768 ? 1 : 3;

    // آرایه اسلایدهای اصلی (بدون کلون)
    const originalSlides = Array.from(track.querySelectorAll('.slide'));
    const prevBtn = document.getElementById('blogPrevBtn');
    const nextBtn = document.getElementById('blogNextBtn');
    const dots = document.querySelectorAll('#blogDotsContainer .dot');

    // کلون کردن آخرین visibleCount اسلاید و اضافه کردن به ابتدای مسیر
    const clonesBefore = originalSlides.slice(-visibleCount).map(slide => {
        const clone = slide.cloneNode(true);
        clone.classList.add('clone');
        return clone;
    });
    clonesBefore.forEach(clone => {
        track.insertBefore(clone, track.firstChild);
    });

    // کلون کردن اولین visibleCount اسلاید و اضافه کردن به انتهای مسیر
    const clonesAfter = originalSlides.slice(0, visibleCount).map(slide => {
        const clone = slide.cloneNode(true);
        clone.classList.add('clone');
        return clone;
    });
    clonesAfter.forEach(clone => {
        track.appendChild(clone);
    });

    // به‌روز رسانی آرایه اسلایدها شامل کلون‌ها
    let slides = Array.from(track.querySelectorAll('.slide'));
    let currentSliderIndex = visibleCount; // اولین اسلاید اصلی

    function updateSlider(transition = true) {
        const slideWidth = slides[0].offsetWidth + 20; // فاصله gap = 20px
        if (!transition) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 0.5s ease-in-out';
        }
        track.style.transform = `translateX(-${currentSliderIndex * slideWidth}px)`;

        // به‌روز کردن نقاط (dots)
        let dotIndex = currentSliderIndex - visibleCount;
        if (dotIndex >= originalSlides.length) dotIndex = 0;
        if (dotIndex < 0) dotIndex = originalSlides.length - 1;
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[dotIndex]) {
            dots[dotIndex].classList.add('active');
        }
    }

    nextBtn.addEventListener('click', () => {
        currentSliderIndex++;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentSliderIndex--;
        updateSlider();
    });

    track.addEventListener('transitionend', () => {
        // اگر به کلون‌های انتهایی رسیدیم
        if (currentSliderIndex >= visibleCount + originalSlides.length) {
            currentSliderIndex = visibleCount;
            updateSlider(false);
        }
        // اگر به کلون‌های ابتدای مسیر رسیدیم
        if (currentSliderIndex < visibleCount) {
            currentSliderIndex = currentSliderIndex + originalSlides.length;
            updateSlider(false);
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSliderIndex = visibleCount + index;
            updateSlider();
        });
    });

    updateSlider(false);
});