// ===== لوفينغ هومز - JavaScript النسخة 2.0 =====

document.addEventListener('DOMContentLoaded', function () {

    // ===== تفعيل رابط القائمة الحالي =====
    var currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(function (link) {
        if (link.getAttribute('href') === currentPage ||
            link.getAttribute('href') === '../' + currentPage) {
            link.classList.add('active');
        }
    });

    // ===== accordion الأسئلة الشائعة =====
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = this.parentElement;
            var isOpen = item.classList.contains('open');
            // إغلاق الكل
            document.querySelectorAll('.faq-item').forEach(function (i) {
                i.classList.remove('open');
                i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            // فتح الحالي إذا كان مغلقاً
            if (!isOpen) {
                item.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ===== نموذج التواصل =====
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // تحقق بسيط
            var name = document.getElementById('name').value.trim();
            var email = document.getElementById('email').value.trim();
            var dogName = document.getElementById('dog-name').value.trim();

            if (!name || !email || !dogName) {
                alert('يرجى تعبئة جميع الحقول الإلزامية *');
                return;
            }

            // إظهار رسالة النجاح
            var msg = document.getElementById('success-msg');
            if (msg) {
                msg.style.display = 'block';
                form.reset();
                msg.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

});
