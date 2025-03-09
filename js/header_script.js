// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const closeButton = document.querySelector('.close-button');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

closeButton.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
});

