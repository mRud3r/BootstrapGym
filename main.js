const lightToggle = document.querySelector(".light-toggle");
const darkToggle = document.querySelector(".dark-toggle");
const bodyElement = document.body;



lightToggle.addEventListener('click', function() {
    bodyElement.setAttribute('data-bs-theme', 'light');
    darkToggle.classList.remove('disabled');
    lightToggle.classList.add('disabled');
});


darkToggle.addEventListener('click', function() {
    bodyElement.setAttribute('data-bs-theme', 'dark');
    lightToggle.classList.remove('disabled');
    darkToggle.classList.add('disabled');
});
