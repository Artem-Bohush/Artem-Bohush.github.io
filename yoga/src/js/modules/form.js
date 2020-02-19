// for form

function form() {
    
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
        request.open('POST', '/saveContact');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // для json формата
        // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // данные в формате ключ-значение
    
        let formData = new FormData(form);
        // request.send(formData); // переменная formData местит в себе данные в формате ключ-значение, просто отправляем ее
    
        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let Contact = JSON.stringify(obj);
        request.send(Contact);
    
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
        request.open('POST', '/saveContact');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
        let formData = new FormData(contactForm);
        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let Contact = JSON.stringify(obj);
        request.send(Contact);
    
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
}

module.exports = form;
// export { form };