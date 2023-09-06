document.addEventListener('DOMContentLoaded', () => {
    const openBurger = document.getElementById('burgerOpen');
    const closeBurger = document.getElementById('burgerClose');
    const burger = document.getElementById('burger');

    const navButtons = document.querySelectorAll('.header__nav-item-link');
    
    const body = document.body;
    const bodyBlock = document.getElementById('bodyBlock');

    openBurger.addEventListener('click', () => {
        body.classList.add('body-stop-scroll');
        burger.classList.add('burger--active');
    });

    closeBurger.addEventListener('click', () => {
        body.classList.remove('body-stop-scroll');
        burger.classList.remove('burger--active');
    });

    bodyBlock.addEventListener('click', () => {
        burger.classList.remove('burger--active');
    });

    navButtons.forEach(element => {
        element.addEventListener('click', () => {
            body.classList.remove('body-stop-scroll');
            burger.classList.remove('burger--active');
        });
    });
})