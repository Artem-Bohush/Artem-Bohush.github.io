// for calculator

function calc() {
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
            request.open('GET', '../src/js/prises.json');
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
            request.open('GET', '../src/js/prises.json');
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
            request.open('GET', '../src/js/prises.json');
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
}

module.exports = calc;
// export { calc };