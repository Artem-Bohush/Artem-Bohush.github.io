// for modal window

function modal() {
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
}

module.exports = modal;
// export { modal };