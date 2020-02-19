// for timer

function timer() {
    let deadLine = '2020-03-15';

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
}

module.exports = timer;
// export { timer };