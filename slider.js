let currentPosition = 0;
const logosContainer = document.querySelector('.logos');
const logoWidth = logosContainer.querySelector('img').clientWidth + 30; // Ширина изображения + отступ

function moveLeft() {
    currentPosition += logoWidth;
    if (currentPosition > 0) {
        currentPosition = -(logosContainer.scrollWidth - logosContainer.clientWidth);
    }
    logosContainer.style.transform = `translateX(${currentPosition}px)`;
}

function moveRight() {
    currentPosition -= logoWidth;
    if (currentPosition < -(logosContainer.scrollWidth - logosContainer.clientWidth)) {
        currentPosition = 0;
    }
    logosContainer.style.transform = `translateX(${currentPosition}px)`;
}
