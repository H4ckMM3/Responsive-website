// Получаем элементы иконки бургера и мобильного меню
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu .close');

// Добавляем обработчики событий для открытия и закрытия мобильного меню
hamburger.addEventListener('click', toggleMobileMenu);
closeButton.addEventListener('click', toggleMobileMenu);

// Функция для переключения видимости мобильного меню с плавной анимацией
function toggleMobileMenu() {
    if (mobileMenu.classList.contains('show')) {
        mobileMenu.style.transform = 'translateX(100%)'; // Начинаем закрытие
        mobileMenu.style.opacity = '0'; // Начинаем затухание
        setTimeout(() => {
            mobileMenu.classList.remove('show'); // Убираем класс после завершения анимации
        }, 500); // Длительность анимации должна совпадать с transition в CSS (0.5s)
    } else {
        mobileMenu.classList.add('show'); // Добавляем класс для отображения меню
        setTimeout(() => {
            mobileMenu.style.transform = 'translateX(0)'; // Запуск анимации появления
            mobileMenu.style.opacity = '1'; // Запуск анимации появления
        }, 10); // Небольшая задержка для правильного срабатывания анимации
    }
}
