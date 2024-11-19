
const carousel = document.querySelector('#carouselExample');
const bootstrapCarousel = new bootstrap.Carousel(carousel, {
    interval: false,
    ride: false
});

const nextButton = document.querySelector('.carousel-control-next');
const prevButton = document.querySelector('.carousel-control-prev');

nextButton.addEventListener('click', () => {
    bootstrapCarousel.next();
});

prevButton.addEventListener('click', () => {
    bootstrapCarousel.prev();
});