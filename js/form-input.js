document.addEventListener('DOMContentLoaded', () => {
    const modulInputs = document.querySelectorAll('.modul__feedback-input');
    const modulTextarea = document.querySelectorAll('.modul__feedback-textarea');

    modulInputs.forEach(element => {
        element.addEventListener('input', () => {
            if (element.value) {
                element.classList.add('modul__feedback-input--active');
            } else {
                element.classList.remove('modul__feedback-input--active');
            }
        });
    });

    modulTextarea.forEach(element => {
        element.addEventListener('input', () => {
            if (element.value) {
                element.classList.add('modul__feedback-input--active');
            } else {
                element.classList.remove('modul__feedback-input--active');
            }
        });
    });

    const formEmail = document.getElementById('formEmail');
    const formEmailButton = document.getElementById('formEmailButton');

    formEmail.addEventListener('input', () => {
        if (formEmail.value) {
            formEmailButton.disabled = false;
        } else {
            formEmailButton.disabled = true;
        }
    });
})

