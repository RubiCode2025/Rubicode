/************************************************************
 * اسکریپت منوی همبرگری (نمایش/مخفی کردن منو در موبایل)
 ************************************************************/
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const menuButtons = document.getElementById("menuButtons");

function toggleMenu() {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    menuButtons.classList.toggle("active");
}
hamburgerBtn.addEventListener("click", toggleMenu);

/************************************************************
 * اسکریپت داشبورد: تغییر محتوای سمت راست بر اساس منو
 ************************************************************/
function loadContent(section, element) {
    // حذف کلاس active از تمامی منوها
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    const contentBox = document.getElementById('content');

    if (section === 'edit-profile') {
        contentBox.innerHTML = `
          <h3>ویرایش اطلاعات حساب</h3>
          <form>
            <div class="form-group">
              <label>نام کاربری</label>
              <input type="text" placeholder="نام کاربری">
            </div>
            <div class="form-group">
              <label>ایمیل</label>
              <input type="email" placeholder="ایمیل">
            </div>
            <button type="submit" class="btn btn-primary">ذخیره</button>
          </form>
        `;
    } else if (section === 'my-courses') {
        contentBox.innerHTML = `
          <h3>دوره‌های من</h3>
          <div class="course-card">
            <div class="course-info">
              <div class="course-title">فرانت چیه و باید داخل فرانت چیکار کرد</div>
              <div class="course-meta">بازدید: 125 | لایک‌ها: 100</div>
              <button class="btn-watch">تماشای دوره</button>
            </div>
            <div class="course-image"></div>
          </div>
        `;
    } else if (section === 'saved-items') {
        contentBox.innerHTML = `
          <h3>ذخیره‌شده‌ها</h3>
          <div class="course-card">
            <div class="course-info">
              <div class="course-title">فرانت چیه و باید داخل فرانت چیکار کرد</div>
              <div class="course-meta">بازدید: 125 | لایک‌ها: 100</div>
              <button class="btn-save">ذخیره</button>
            </div>
            <div class="course-image"></div>
          </div>
          <div class="course-card">
            <div class="course-info">
              <div class="course-title">فرانت چیه و باید داخل فرانت چیکار کرد</div>
              <div class="course-meta">بازدید: 125 | لایک‌ها: 100</div>
              <button class="btn-save">ذخیره</button>
            </div>
            <div class="course-image"></div>
          </div>
          <div class="course-card">
            <div class="course-info">
              <div class="course-title">فرانت چیه و باید داخل فرانت چیکار کرد</div>
              <div class="course-meta">بازدید: 125 | لایک‌ها: 100</div>
              <button class="btn-save">ذخیره</button>
            </div>
            <div class="course-image"></div>
          </div>
        `;
    } else if (section === 'notifications') {
        contentBox.innerHTML = `
          <h3>اطلاعیه‌ها و نظرات</h3>
          <div class="tabs">
            <div class="tab active" onclick="switchTab('notifications', this)">اطلاعیه ها</div>
            <div class="tab" onclick="switchTab('comments', this)">نظرات</div>
          </div>
          <div id="tab-content">
            <div class="notification-box">
              <div class="notification-title">اعلان جدید: به‌روزرسانی سیستم</div>
              <p>سیستم در تاریخ ۱۴۰۳/۱۱/۱۵ به‌روزرسانی خواهد شد.</p>
            </div>
          </div>
        `;
    }
}

function switchTab(tab, element) {
    document.querySelectorAll('.tab').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    const tabContent = document.getElementById('tab-content');
    if (tab === 'notifications') {
        tabContent.innerHTML = `
          <div class="notification-box">
            <div class="notification-title">اعلان جدید: به‌روزرسانی سیستم</div>
            <p>سیستم در تاریخ ۱۴۰۳/۱۱/۱۵ به‌روزرسانی خواهد شد.</p>
          </div>
        `;
    } else if (tab === 'comments') {
        tabContent.innerHTML = `
          <div class="notification-box">
            <div class="notification-title">نظرات شما</div>
            <p>هیچ نظری ثبت نشده است.</p>
          </div>
        `;
    }
}