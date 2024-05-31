// selectors
const btn_menu = document.querySelector('.menu-hamburger');
const header = document.querySelector('header');

// handlers
const openNav = () => header.classList.toggle('active-menu-hamburger');

// events
btn_menu.addEventListener('click', openNav);
