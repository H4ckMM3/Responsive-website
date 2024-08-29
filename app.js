   // Показать кнопку при прокрутке вниз
   window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
};

// Функция для прокрутки вверх
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}