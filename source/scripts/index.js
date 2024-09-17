const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-navigation--is-close')) {
    navMain.classList.remove('main-navigation--is-close');
    navMain.classList.add('main-navigation--is-open');
    navToggle.classList.remove ('main-header__toggle--open');
    navToggle.classList.add ('main-header__toggle--close');
  } else {
    navMain.classList.add('main-navigation--is-close');
    navMain.classList.remove('main-navigation--is-open');
    navToggle.classList.add ('main-header__toggle--open');
    navToggle.classList.remove ('main-header__toggle--close');
  }
});
