// carrossel

const slides = document.querySelectorAll('[data-js="carrossel-item"]');
const nextBtn = document.querySelector('[data-js="carrossel-btn--next"]');
const prevBtn = document.querySelector('[data-js="carrossel-btn--prev"]');

const lastSlideIndex = slides.length -1;
let currentSlideIndex = 0;
const manipulateSlidesClasses = (correctSlideIndex) => {
    slides.forEach(slide => slide.classList.remove('carrossel-item--visible'))
    slides[currentSlideIndex].classList.add('carrossel-item--visible');
}

nextBtn.addEventListener("click", () => {
    // if (currentSlideIndex === lastSlideIndex) {
    //     currentSlideIndex = 0
    // } else {
    //     currentSlideIndex++ --pós acrementada--
    // }
    const correctSlideIndex = currentSlideIndex === lastSlideIndex //expressão ternária
    ? currentSlideIndex = 0
    : ++currentSlideIndex //pré-acrementada
    
    // slides.forEach(slide => {
    //     slide.classList.remove('carrossel-item--visible');
    //      })
    //      slides[currentSlideIndex].classList.add('carrossel-item--visible');
    manipulateSlidesClasses (correctSlideIndex) // coloquei todo código forEach numa função para ser invocada.
});

prevBtn.addEventListener("click", () => {
   const correctSlideIndex = currentSlideIndex === 0
   ? currentSlideIndex = lastSlideIndex
   : --currentSlideIndex // pré-decrementada
   manipulateSlidesClasses (correctSlideIndex) //forEach encapsulado   
})


