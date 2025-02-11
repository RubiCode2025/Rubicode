document.addEventListener("DOMContentLoaded", function () {
    // اسکریپت دکمه همبرگری (موبایل)
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");
    const menuButtons = document.getElementById("menuButtons");

    function toggleMenu() {
        hamburgerBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
        menuButtons.classList.toggle("active");
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener("click", toggleMenu);
    }

    // تابع بارگذاری محتوای تب‌ها
    function loadTabContent(tabName) {
        document.getElementById("tab-content").innerHTML = "<p>در حال بارگذاری...</p>";
        setTimeout(() => {
            const content = {
                "description": "<h2>درباره دوره فرانت</h2><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...</p>",
                "reviews": `<div class="comment-section">
      <h2>نظر خود را بگو</h2>
      <div class="input-container">
        <input type="text" id="commentInput" class="comment-input" placeholder="نظر خود را وارد کنید...">
        <button class="send-btn" onclick="addComment()">ارسال</button>
      </div>
      <div class="comment-list" id="commentList"></div>
    </div>`,
                "faq": `<div class="faq-container">
      <div class="faq-item">
        <div class="faq-header">این دوره برای کیا خوبه؟ <span>▼</span></div>
        <div class="faq-content">این دوره برای همه افرادی که علاقه به یادگیری فرانت‌اند دارند مناسب است.</div>
      </div>
      <div class="faq-item">
        <div class="faq-header">آیا پیش‌نیاز خاصی دارد؟ <span>▼</span></div>
        <div class="faq-content">خیر، این دوره از صفر تا صد طراحی شده و نیازی به پیش‌نیاز ندارد.</div>
      </div>
      <div class="faq-item">
        <div class="faq-header">این دوره چقدر طول می‌کشد؟ <span>▼</span></div>
        <div class="faq-content">این دوره تقریباً ۳ ساعت ویدیو آموزشی دارد.</div>
      </div>
    </div>`,
                "chapters": `<div class="chapters-accordion-container">
      <div class="tabs">
      </div>
      <button class="accordion">فصل اول آشنایی <span class="icon">▼</span></button>
      <div class="panel">
        <div>مقدمه</div>
        <div>مفاهیم پایه</div>
      </div>
      <button class="accordion">دست به کد شو <span class="icon">▼</span></button>
      <div class="panel">
        <div>شروع برنامه نویسی</div>
        <div>اولین پروژه</div>
      </div>
      <button class="accordion">با تمرین کار در میاد <span class="icon">▼</span></button>
      <div class="panel">
        <div>تمرین لاگین پیچ</div>
        <div>هدر و فوتر</div>
        <div>ساخت عکس</div>
      </div>
      <button class="accordion">پروژه اول شما <span class="icon">▼</span></button>
      <div class="panel">
        <div>طراحی پروژه نهایی</div>
      </div>
    </div>`,
                "teacher": `<div class="profile-card">
      <img src="../IMG/Asset%201@2x.png" alt="پروفایل" class="profile-image">
      <div class="profile-info">
          <div class="profile-name">امیر محمد اکبری افلاکی</div>
          <div class="profile-title">Front-End Developer</div>
          <button class="resume-btn">نمایش رزومه</button>
      </div>
    </div>`
            };
            document.getElementById("tab-content").innerHTML = content[tabName] || "<p>محتوا یافت نشد</p>";

            // اجرای اسکریپت‌های مربوط به تب‌های FAQ و سرفصل‌ها
            if (tabName === "faq") {
                document.querySelectorAll('.faq-header').forEach(item => {
                    item.addEventListener('click', () => {
                        const parent = item.parentElement;
                        const faqContent = parent.querySelector('.faq-content');

                        if (parent.classList.contains('active')) {
                            faqContent.style.display = 'none';
                            parent.classList.remove('active');
                        } else {
                            document.querySelectorAll('.faq-content').forEach(el => el.style.display = 'none');
                            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
                            faqContent.style.display = 'block';
                            parent.classList.add('active');
                        }
                    });
                });
            }
            if (tabName === "chapters") {
                document.querySelectorAll('.chapters-accordion-container .accordion').forEach(button => {
                    button.addEventListener("click", function() {
                        this.classList.toggle("active");
                        var panel = this.nextElementSibling;
                        if (panel.style.display === "block") {
                            panel.style.display = "none";
                            this.querySelector(".icon").textContent = "▼";
                        } else {
                            panel.style.display = "block";
                            this.querySelector(".icon").textContent = "▲";
                        }
                    });
                });
            }
        }, 500);
    }

    // بارگذاری اولیه تب "توضیح"
    loadTabContent("description");

    document.querySelectorAll(".tab-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelectorAll(".tab-link").forEach(el => el.classList.remove("active"));
            this.classList.add("active");
            loadTabContent(this.getAttribute("data-tab"));
        });
    });
});

// تابع افزودن نظر (کامنت)
function addComment() {
    const input = document.getElementById('commentInput');
    const commentText = input.value.trim();
    if (commentText === '') return;

    const commentList = document.getElementById('commentList');
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const profilePic = document.createElement('div');
    profilePic.classList.add('profile-pic');

    const commentContent = document.createElement('div');
    commentContent.classList.add('comment-content');

    const now = new Date().toLocaleDateString('fa-IR');

    const replyContainer = document.createElement('div');
    replyContainer.classList.add('reply-input-container');

    const replyButton = document.createElement('span');
    replyButton.classList.add('reply');
    replyButton.innerText = 'پاسخ';
    replyButton.onclick = function() {
        replyContainer.style.display = replyContainer.style.display === 'none' ? 'block' : 'none';
    };

    const replyInput = document.createElement('input');
    replyInput.classList.add('reply-input');
    replyInput.setAttribute('type', 'text');
    replyInput.setAttribute('placeholder', 'پاسخ خود را بنویسید...');

    const replySend = document.createElement('button');
    replySend.classList.add('reply-send');
    replySend.innerText = 'ارسال';
    replySend.onclick = function() {
        if (replyInput.value.trim() !== '') {
            const replyText = document.createElement('p');
            replyText.innerHTML = `<strong>کاربر ناشناس</strong>: ${replyInput.value}`;
            replyContainer.appendChild(replyText);
            replyInput.value = '';
        }
    };

    replyContainer.appendChild(replyInput);
    replyContainer.appendChild(replySend);

    commentContent.innerHTML = `<strong>کاربر ناشناس</strong><p>${commentText}</p><small>تاریخ: ${now}</small>`;
    commentContent.appendChild(replyButton);
    commentContent.appendChild(replyContainer);

    commentDiv.appendChild(profilePic);
    commentDiv.appendChild(commentContent);

    commentList.prepend(commentDiv);
    input.value = '';
}