'use strict';

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const toggler = document.querySelector('.burger__line');
const link = document.querySelector('.nav__link');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav--mobile');
  toggler.classList.toggle('burger__line--open');
  link.classList.toggle('nav__link--active');
});

link.addEventListener('click', () => {
  link.classList.toggle('nav__link--active');
});