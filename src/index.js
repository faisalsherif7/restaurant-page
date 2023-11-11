import { pageLoad, menu, contact } from "./modules";

pageLoad();

const menuNav = document.querySelector('.menu-nav');
const contactNav = document.querySelector('.contact-nav');

menuNav.addEventListener('click', () => {
    menu();
})

contactNav.addEventListener('click', () => {
    contact();
})