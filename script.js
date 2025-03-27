
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Если прокрутка больше 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});