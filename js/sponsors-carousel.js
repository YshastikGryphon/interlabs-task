document.addEventListener('DOMContentLoaded', () => {    
    const carouselWrapper = document.getElementById('carouselWrapper');
    const carouselDuplicate= document.getElementById('carouselDuplicate');

    carouselDuplicate.classList.add('animate');
    
    carouselWrapper.appendChild(carouselDuplicate.cloneNode(true));
    carouselWrapper.appendChild(carouselDuplicate.cloneNode(true));

})