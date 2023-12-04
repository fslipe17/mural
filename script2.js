

let container = document.querySelector('.container');
let imageBoxes = document.querySelectorAll('.image-box');
let currentIndex = 0;

function changeImage() {
    imageBoxes[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % imageBoxes.length;
    imageBoxes[currentIndex].style.opacity = 1;
}

setInterval(changeImage, 3000);