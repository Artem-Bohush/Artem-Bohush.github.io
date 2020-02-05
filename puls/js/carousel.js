$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/png/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/png/arrow-right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });
});
