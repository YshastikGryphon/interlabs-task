document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.hero__slider');
    const sliderButtons = document.querySelectorAll('.hero__slider-button');

    sliderButtons.forEach(element => {
        element.addEventListener('click', () => {
            sliderButtons.forEach(elem => {
                elem.classList.remove('slider-button--active');
            });
            element.classList.add('slider-button--active');

            slider.id = `heroSlide${element.value}`;
        });
    });
})