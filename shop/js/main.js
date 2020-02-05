// $('body').css("background", "red");

$(document).ready(function(){

    $('.slider').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>'
    });

    $('.slider-second').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        focusOnSelect: true,
        cssEase: 'linear',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        nextArrow:'<button type="button" class="slick-next"></button>'
      });

});

window.onload = function() {

    let btnMobLang = document.querySelector('.lang-nav');
    let listMobLang = document.querySelector('.drop-list-lang');

    btnMobLang.addEventListener('click', function() {
        
    });

    let btnMobCurr = document.querySelector('.curr-nav');
    let listMobCurr = document.querySelector('.drop-list-curr');

    btnMobCurr.addEventListener('click', function() {
        
    });

    let btnMobNav = document.querySelector('.mob-nav');
    let listMobNav = document.querySelector('.drop-list-nav');

    let showMenu = false;
    btnMobNav.addEventListener('click', function(){
        if (!showMenu) {
            showMenu = !showMenu;
            listMobNav.classList.add('appear'); 
            listMobNav.style.display = 'block';
            setTimeout(() => {
                listMobNav.classList.remove('appear'); 
            }, 300);
        } else {
            showMenu = !showMenu;
            listMobNav.classList.add('fade'); 
            setTimeout(() => {
                listMobNav.style.display = 'none';
                listMobNav.classList.remove('fade');
            }, 300);
        }
    });

}