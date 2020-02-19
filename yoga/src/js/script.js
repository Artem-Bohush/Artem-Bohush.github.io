require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let calc = require('./modules/calc'),
        form = require('./modules/form'),
        modal = require('./modules/modal'),
        slider = require('./modules/slider'),
        tabs = require('./modules/tabs'),
        timer = require('./modules/timer');

    calc();
    form();
    modal();
    slider();
    tabs();
    timer();

    // let calc = import {calc} from './modules/calc';
    // let form = import {form} from './modules/form';
    // let modal = import {modal} from './modules/modal';
    // let slider = import {slider} from './modules/slider';
    // let tabs = import {tabs} from './modules/tabs';
    // let timer = import {timer} from './modules/timer';
});