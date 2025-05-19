const btnOpen = document.querySelector('.header-menu-btn');
const btnClose = document.querySelector('.menu-close');
const menu = document.querySelector('.menu');
const links = Array.from(menu.querySelectorAll('nav a'));

function toggleClass() {
  menu.classList.toggle('is-open');
}

export default function initMenuOpener() {
  [btnOpen, btnClose, ...links].forEach(el =>
    el.addEventListener('click', toggleClass)
  );
}
