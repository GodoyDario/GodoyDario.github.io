const images = ["Imagenes/2wYpcpnuTAOhlIMxmHudsw.jpg ", "Imagenes/EXsOAkmxQxWeIuzWGLCRjQ.jpg", "Imagenes/fGIB4fylRDKct_JYWBMawA.jpg"];
let currentIndex = 0;

const carouselImage = document.getElementById('carousel-image');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carouselImage.src = images[currentIndex];
});