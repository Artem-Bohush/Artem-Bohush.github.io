window.addEventListener('DOMContentLoaded', function () {
    let hamburger = document.querySelector('.hamburger'),
        nav = document.getElementById('menu'),
        menu = document.querySelector('.menu'),
        menuLink = document.querySelectorAll('.menu_link'),
        clicked = false;

    nav.addEventListener('click', function (event) {
        let target = event.target;
        if (clicked == false && target && target.classList.contains('hamburger')) {
            menu.classList.add('menu_active');
            hamburger.classList.add('hamburger_active');
            clicked = true;
        } else {
            menu.classList.remove('menu_active');
            hamburger.classList.remove('hamburger_active');
            clicked = false;
        }
    });

    menu.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('menu_link')) {
            menu.classList.remove('menu_active');
            hamburger.classList.remove('hamburger_active');
            clicked = false;
        }
    });
});