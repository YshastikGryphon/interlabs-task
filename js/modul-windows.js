document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const bodyBlock = document.getElementById('bodyBlock');
    const allModulWindows = document.querySelectorAll('.js-modul');
    const buttonSearchShow = document.getElementById('searchOpen');
    const buttonSearchClose = document.getElementById('searchClose');
    const buttonFeedbackOpen = document.getElementById('feedbackOpen');
    const buttonFeedbackClose = document.getElementById('feedbackClose');

    const searchfield = document.getElementById('modulSearchfield'); 
    const feedback = document.getElementById('modulFeedback'); 

    bodyBlock.addEventListener('click', () => {
        body.classList.remove('body-stop-scroll');
        allModulWindows.forEach(element => {
            element.classList.remove('show');
        });
    });

    buttonSearchShow.addEventListener('click', () => {
        body.classList.add('body-stop-scroll');
        searchfield.classList.add('show');
    });
    buttonSearchClose.addEventListener('click', () => {
        body.classList.remove('body-stop-scroll');
        searchfield.classList.remove('show');
    });

    buttonFeedbackOpen.addEventListener('click', () => {
        body.classList.add('body-stop-scroll');
        feedback.classList.add('show');
    });
    buttonFeedbackClose.addEventListener('click', () => {
        body.classList.remove('body-stop-scroll');
        feedback.classList.remove('show');
    });
})
