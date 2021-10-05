// hamburger

const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#mobile');

hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('open-menu');
});
