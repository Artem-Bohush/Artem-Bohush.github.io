window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // for tabs

    $('.catalog__tab').each(function (i) {
        $(this).on('click', function (event) {
            event.preventDefault();
            $('.catalog__tab').removeClass('catalog__tab_active');
            $('.catalog__content').removeClass('catalog__content_active');
            $('.catalog__tab').eq(i).addClass('catalog__tab_active');
            $('.catalog__content').eq(i).addClass('catalog__content_active');
        });
    });

    $('.catalog-item__link').each(function (i) {
        $(this).on('click', function (event) {
            event.preventDefault();
            $('.catalog-item__front').eq(i).css('display', 'none');
            $('.catalog-item__details').eq(i).fadeIn();
            $('.catalog-item__details').eq(i).css('display', 'flex');
        });
    });
    $('.catalog-item__link-back').each(function (i) {
        $(this).on('click', function (event) {
            event.preventDefault();
            $('.catalog-item__details').eq(i).css('display', 'none');
            $('.catalog-item__front').eq(i).fadeIn();
        });
    });

    // for modal windows

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_item').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    // for validation

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Минимум {0} символа!")
                },
                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                    phone: "только цифры"
                },
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильный формат"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+38(099)999-99-99");

    // for sending mails

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // for smooth scroll and pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn('slow');
        } else {
            $('.pageup').fadeOut('slow');
        }
    });

    $("arrow-up").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
    $("to-catalog").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    new WOW().init();
});