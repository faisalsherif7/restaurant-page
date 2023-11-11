import { pageLoad, menu, contact, home } from "./modules";

pageLoad();
contact();

const header = document.querySelector('.header');
const homeNav = document.querySelector('.home-nav');
const menuNav = document.querySelector('.menu-nav');
const contactNav = document.querySelector('.contact-nav');

header.addEventListener('click', (event) => {
    if (event.target === homeNav) {
        home();
    } else if (event.target === menuNav) {
        menu();
    } else if (event.target === contactNav) {
        contact();
    }
})


