'use strict';

let btnMenu = document.querySelector('.nav__icon');
let menu = document.querySelector('.nav__menu');
btnMenu.addEventListener('click', (e) => {
    document.body.classList.toggle('_lock')
    menu.classList.toggle('visible__menu');
    btnMenu.classList.toggle('_active');
})