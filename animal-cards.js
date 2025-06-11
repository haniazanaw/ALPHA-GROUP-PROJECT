const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.card-row');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function updateSlide() {
  const slideWidth = slides[0].offsetWidth;
  slidesWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateSlide();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  updateSlide();
});

window.addEventListener('resize', updateSlide);


updateSlide();

