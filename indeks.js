let slides = document.querySelectorAll('.slides')
let currentSlide = 0;

function showSlide(slideNumber) {
    slides.forEach(slide => slide.style.display = 'none')
    slides[slideNumber].style.display = 'inline'
}

function prevSlide() {
    if (--currentSlide < 0) currentSlide = slides.length - 1
    showSlide(currentSlide)
}

function nextSlide() {
    if (++currentSlide > slides.length - 1) currentSlide = 0
    showSlide(currentSlide)
}

function init() {
    showSlide(0)
}

init()