'use strict';

// for tabs


let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}

hideTabContent(1);

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

info.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});


// for timer

let deadLine = '2019-07-26';

function getTimeRamaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / 1000 / 60 / 60) % 24),
        days = Math.floor((t / 1000 / 60 / 60) / 24);
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function setClock(id, endTime) {
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRamaining(endTime);

        function checkZero(num) {
            if (num >= 10) {
                return num;
            } else {
                return '0' + num;
            }
        }

        if (t.total >= 0) {
            days.textContent = checkZero(t.days) + ' дн.';
            hours.textContent = checkZero(t.hours);
            minutes.textContent = checkZero(t.minutes);
            seconds.textContent = checkZero(t.seconds);
        } else {
            clearInterval(timeInterval);
            days.textContent = '00 дн.';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
}
setClock('timer', deadLine);


// for calculator


let persons = document.querySelectorAll('.counter-block-input')[0],
    days = document.querySelectorAll('.counter-block-input')[1],
    location = document.getElementById('select'),
    totalValue = document.getElementById('total');

function clearTotal() {
    totalValue.innerHTML = 0;
}

persons.addEventListener('input', function () {
    if (days.value != '' && days.value != '0' && persons.value != '0') {
        let request = new XMLHttpRequest();
        request.open('GET', '../../src/js/prises.json');
        request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
        request.send();
        request.addEventListener('readystatechange', function () {
            if (request.readyState == 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                if (location.options.selectedIndex == 0) {
                    totalValue.innerHTML = (+persons.value + +days.value) * +data.mumbai;
                    if (persons.value == '') {
                        clearTotal();
                    }
                } else if (location.options.selectedIndex == 1) {
                    totalValue.innerHTML = (+persons.value + +days.value) * +data.kerala;
                    if (persons.value == '') {
                        clearTotal();
                    }
                } else if (location.options.selectedIndex == 2) {
                    totalValue.innerHTML = (+persons.value + +days.value) * +data.varanasi;
                    if (persons.value == '') {
                        clearTotal();
                    }
                }
            }
        });
    } else {
        clearTotal();
    }
});

days.addEventListener('input', function () {
    if (persons.value != '' && persons.value != '0' && days.value != '0') {
        let request = new XMLHttpRequest();
        request.open('GET', '../../src/js/prises.json');
        request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
        request.send();
        request.addEventListener('readystatechange', function () {
            if (request.readyState == 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                if (location.options.selectedIndex == 0) {
                    totalValue.innerHTML = (+persons.value + +days.value) * +data.mumbai;
                    if (days.value == '') {
                        clearTotal();
                    }
                } else if (location.options.selectedIndex == 1) {
                    totalValue.innerHTML = (+persons.value + +days.value) * +data.kerala;
                    if (days.value == '') {
                        clearTotal();
                    }
                } else if (location.options.selectedIndex == 2) {
                    totalValue.innerHTML = (+persons.value + +days.value) * +data.varanasi;
                    if (days.value == '') {
                        clearTotal();
                    }
                }
            }
        });
    } else {
        clearTotal();
    }
});

location.addEventListener('change', function () {
    if (persons.value == '' || days.value == '' || persons.value == '0' || days.value == '0') {
        clearTotal();
    } else {
        let request = new XMLHttpRequest();
        request.open('GET', '../../src/js/prises.json');
        request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
        request.send();
        request.addEventListener('readystatechange', function () {
            if (request.readyState == 4 && request.status == 200) {
                let data = JSON.parse(request.response);
                if (location.options.selectedIndex == 0) {
                    totalValue.innerHTML = (+persons.value + +days.value) * +data.mumbai;
                } else if (location.options.selectedIndex == 1) {
                    totalValue.innerHTML = (+persons.value + +days.value) * +data.kerala;
                } else if (location.options.selectedIndex == 2) {
                    totalValue.innerHTML = (+persons.value + +days.value) * +data.varanasi;
                }
            }
        });
    }
});


// for form


let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

statusMessage.classList.add('status');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // для json формата
    // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // данные в формате ключ-значение

    let formData = new FormData(form);
    // request.send(formData); // переменная formData местит в себе данные в формате ключ-значение, просто отправляем ее

    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);
    request.send(json);

    request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });

    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
});

let contactForm = document.querySelector('#form'),
    inputs = contactForm.getElementsByTagName('input');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    contactForm.appendChild(statusMessage);
    statusMessage.style.color = '#ffffff';
    statusMessage.style.marginTop = 5 + 'px';

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    let formData = new FormData(contactForm);
    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);
    request.send(json);

    request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status === 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
});


// for modal window


let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descrBtn = document.querySelectorAll('.description-btn');

function showModalWindow() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
}

function closeMdalWindow() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
}

more.addEventListener('click', showModalWindow);

close.addEventListener('click', closeMdalWindow);

descrBtn.forEach(function (item) {
    item.addEventListener('click', showModalWindow);
});

// for slider


let sliderIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

function showSlides(n) {

    if (n > 4) {
        sliderIndex = 1;
    }
    if (n < 1) {
        sliderIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex - 1].classList.add('dot-active');
}

function changeSlides(n) {
    showSlides(sliderIndex += n);
}

function currentSlide(n) {
    showSlides(sliderIndex = n);
}

prev.addEventListener('click', function () {
    changeSlides(-1);
});

next.addEventListener('click', function () {
    changeSlides(1);
});

showSlides(sliderIndex);

dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
});