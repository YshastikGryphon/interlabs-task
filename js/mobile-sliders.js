document.addEventListener('DOMContentLoaded', () => {
    initNews();
    initSpecialists();
    window.addEventListener('resize', () => {
        initNews();
        initSpecialists();
    });

    // News
    function initNews() {
        let browserWidth = window.innerWidth;
        switch (true) {
            case (browserWidth < 500):
                createMobileSlider('news__list', 'newsSliderNext', 'newsSliderPrev', null);
                createMobileSlider('news__list', 'newsSliderNext', 'newsSliderPrev', 1);
                break;

            case (browserWidth < 980):
                createMobileSlider('news__list', 'newsSliderNext', 'newsSliderPrev', null);
                createMobileSlider('news__list', 'newsSliderNext', 'newsSliderPrev', 2);
                break;

            default:
                createMobileSlider('news__list', 'newsSliderNext', 'newsSliderPrev', null);
                break;
        }
    }

    // specialists
    function initSpecialists() {
        let browserWidth = window.innerWidth;
        switch (true) {
            case (browserWidth < 500):
                createMobileSlider('specialists__grid', 'specialistsNext', 'specialistsPrev', null);
                createMobileSlider('specialists__grid', 'specialistsNext', 'specialistsPrev', 1);
                break;

            default:
                createMobileSlider('specialists__grid', 'specialistsNext', 'specialistsPrev', null);
                break;
        }
    }

    /**
     * Создает слайдер
     * @param {class} list - элемент ul с данными
     * @param {id} next - кнопка следующий слайд
     * @param {id} prev - кнопка предыдущий слайд
     * @param {number/null} slidesOnScreen - количество слайдов на экране
     * slidesOnScreen = null, чтобы очистить изменения
     */
    function createMobileSlider(list, next, prev, slidesOnScreen) {
        let sliderItems = document.querySelectorAll(`.${list} li`);
        const btnNext = document.getElementById(`${next}`);
        const btnPrev = document.getElementById(`${prev}`);
        let currentSlide = 0;
        let slideble = sliderItems.length - slidesOnScreen;

        if (slidesOnScreen === null) {
            sliderItems.forEach(element => {
                element.style.transform = `translateX(0%)`;
            });
            btnNext.addEventListener('click', nextSlide);
            btnPrev.addEventListener('click', prevSlide);

            btnPrev.disabled = true;
            btnNext.disabled = false;

            return;
        }

        btnNext.addEventListener('click', nextSlide);
        btnPrev.addEventListener('click', prevSlide);

        function nextSlide() {
            btnNext.disabled = false;
            btnPrev.disabled = false;
            
            currentSlide++;
            sliderItems.forEach(element => {
                element.style.transform = `translateX(-${currentSlide * 100}%)`;
            });

            if (currentSlide >= slideble) {
                btnNext.disabled = true;
            }
        }

        function prevSlide() {
            btnNext.disabled = false;
            btnPrev.disabled = false;
            currentSlide--;
    
            if (currentSlide <= 0) {
                btnPrev.disabled = true;
            }
    
            sliderItems.forEach(element => {
                element.style.transform = `translateX(-${currentSlide * 100}%)`;
            });
        }
    }
})