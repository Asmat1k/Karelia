import { bodyLockStatus, bodyLockToggle, bodyLock, bodyUnlock } from './functions.js';

// МЕНЮ-БУРГЕР
export function menuInit() {
  if (document.querySelector('.menu__icon')) {
    document.addEventListener('click', (event) => {
      if (bodyLockStatus && event.target.closest('.menu__icon')) {
        bodyLockToggle(); 
        document.documentElement.classList.toggle('active');
        document.querySelector('.menu__icon').classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
      } else if(event.target.classList.contains('header-nav__list')) {
        bodyLockToggle(); 
        document.documentElement.classList.add('active');
        document.querySelector('.menu__icon').classList.add('active');
        document.querySelector('.header__menu').classList.add('active');
      } else  {
        menuClose();
        document.documentElement.classList.remove('active');
        document.querySelector('.menu__icon').classList.remove('active');
        document.querySelector('.header__menu').classList.remove('active');
      }
    });
  }
}


export function menuOpen() {
  bodyLock();
  document.documentElement.classList.add('active');
  document.querySelector('.header__menu').classList.add('active');
}

export function menuClose() {
  bodyUnlock();
  document.documentElement.classList.remove('active');
  document.querySelector('.header__menu').classList.remove('active');
}
//----------------------------------------------------------------------
