/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules.js":
/*!************************!*\
  !*** ./src/modules.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contact: () => (/* binding */ contact),
/* harmony export */   home: () => (/* binding */ home),
/* harmony export */   menu: () => (/* binding */ menu),
/* harmony export */   pageLoad: () => (/* binding */ pageLoad)
/* harmony export */ });

const pageLoad =  function() {
    const content = document.querySelector('#content');
    content.textContent = '';
    
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);
    
    const home = document.createElement('button');
    home.textContent = 'Home';
    home.className = 'home-nav';
    header.appendChild(home);

    const menu = document.createElement('button');
    menu.innerHTML = 'Menu';
    menu.classList.add('menu-nav');
    header.appendChild(menu);

    const contact = document.createElement('button');
    contact.innerHTML = 'Contact';
    contact.classList.add('contact-nav');
    header.appendChild(contact);

    const divContent = document.createElement('div');
    divContent.className = 'content';
    content.appendChild(divContent);
};

function home() {
    const divContent = document.querySelector('.content');
    divContent.className = 'content homepage-background';
    divContent.textContent = '';

    const text = document.createElement('div');
    text.className = 'text homepage-text';
    divContent.appendChild(text);

    const p = document.createElement('p');
    p.textContent = "Welcome to Medina Bites, your gateway to Middle Eastern delights in the heart of NY. Immerse yourself in the rich flavors of our cuisine, a perfect fusion of traditional recipes and contemporary tastes. From succulent kebabs to delightful baklava, each dish at Medina Bites brings the authentic spirit of the Middle East to your table. Join us at Medina Bites, where the allure of Arabic cuisine meets the warmth of our hospitality."
    text.appendChild(p);
}

function menu() {
    const divContent = document.querySelector('.content');
    divContent.className = 'content menu-background';
    divContent.textContent = '';

    divContent.innerHTML = `
    
    `
}

function contact() {
    const divContent = document.querySelector('.content');
    divContent.className = 'content contact-background';
    divContent.textContent = '';
    
    const contactText = document.createElement('div');
    contactText.className = 'text contact-text';
    divContent.appendChild(contactText);

    const contactHeader = document.createElement('h1');
    contactHeader.className = 'contact-header';
    contactHeader.textContent = 'Contact Us';
    contactText.appendChild(contactHeader);

    const contactContent = document.createElement('div');
    contactContent.innerHTML = `
    <div class="contact-div address">
        <h1 class="contact-bold">Address</h1>
        <p>123 Main Street, Cityville, Country</p>
    </div>

    <div class="contact-div phone">
        <h1 class="contact-bold">Phone</h1>
        <p>(+123) 456-7890</p>
    </div>

    <div class="contact-div email">
        <h1 class="contact-bold">Email</h1>
        <p><a href="">info@medinabites.com</a></p>
    </div>

    <div class="contact-div opening-hours">
        <h1 class="contact-bold">Opening Hours</h1>
        <p>Monday to Saturday: 10:00 AM - 10:00 PM</p>
        <p>Sunday: 12:00 PM - 8:00 PM</p>
    </div>
    `;

    contactText.appendChild(contactContent);

}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/modules.js");


(0,_modules__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
(0,_modules__WEBPACK_IMPORTED_MODULE_0__.contact)();

const header = document.querySelector('.header');
const homeNav = document.querySelector('.home-nav');
const menuNav = document.querySelector('.menu-nav');
const contactNav = document.querySelector('.contact-nav');

header.addEventListener('click', (event) => {
    if (event.target === homeNav) {
        (0,_modules__WEBPACK_IMPORTED_MODULE_0__.home)();
    } else if (event.target === menuNav) {
        (0,_modules__WEBPACK_IMPORTED_MODULE_0__.menu)();
    } else if (event.target === contactNav) {
        (0,_modules__WEBPACK_IMPORTED_MODULE_0__.contact)();
    }
})



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7VUM3RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wRDs7QUFFMUQsa0RBQVE7QUFDUixpREFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBSTtBQUNaLE1BQU07QUFDTixRQUFRLDhDQUFJO0FBQ1osTUFBTTtBQUNOLFFBQVEsaURBQU87QUFDZjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBwYWdlTG9hZCA9ICBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lLmNsYXNzTmFtZSA9ICdob21lLW5hdic7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS1uYXYnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW5hdicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xufTtcblxuZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50IGhvbWVwYWdlLWJhY2tncm91bmQnO1xuICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0LmNsYXNzTmFtZSA9ICd0ZXh0IGhvbWVwYWdlLXRleHQnO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gTWVkaW5hIEJpdGVzLCB5b3VyIGdhdGV3YXkgdG8gTWlkZGxlIEVhc3Rlcm4gZGVsaWdodHMgaW4gdGhlIGhlYXJ0IG9mIE5ZLiBJbW1lcnNlIHlvdXJzZWxmIGluIHRoZSByaWNoIGZsYXZvcnMgb2Ygb3VyIGN1aXNpbmUsIGEgcGVyZmVjdCBmdXNpb24gb2YgdHJhZGl0aW9uYWwgcmVjaXBlcyBhbmQgY29udGVtcG9yYXJ5IHRhc3Rlcy4gRnJvbSBzdWNjdWxlbnQga2ViYWJzIHRvIGRlbGlnaHRmdWwgYmFrbGF2YSwgZWFjaCBkaXNoIGF0IE1lZGluYSBCaXRlcyBicmluZ3MgdGhlIGF1dGhlbnRpYyBzcGlyaXQgb2YgdGhlIE1pZGRsZSBFYXN0IHRvIHlvdXIgdGFibGUuIEpvaW4gdXMgYXQgTWVkaW5hIEJpdGVzLCB3aGVyZSB0aGUgYWxsdXJlIG9mIEFyYWJpYyBjdWlzaW5lIG1lZXRzIHRoZSB3YXJtdGggb2Ygb3VyIGhvc3BpdGFsaXR5LlwiXG4gICAgdGV4dC5hcHBlbmRDaGlsZChwKTtcbn1cblxuZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50IG1lbnUtYmFja2dyb3VuZCc7XG4gICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgZGl2Q29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgXG4gICAgYFxufVxuXG5mdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGRpdkNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQgY29udGFjdC1iYWNrZ3JvdW5kJztcbiAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgXG4gICAgY29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VGV4dC5jbGFzc05hbWUgPSAndGV4dCBjb250YWN0LXRleHQnO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuXG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29udGFjdEhlYWRlci5jbGFzc05hbWUgPSAnY29udGFjdC1oZWFkZXInO1xuICAgIGNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG4gICAgY29udGFjdFRleHQuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG5cbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1kaXYgYWRkcmVzc1wiPlxuICAgICAgICA8aDEgY2xhc3M9XCJjb250YWN0LWJvbGRcIj5BZGRyZXNzPC9oMT5cbiAgICAgICAgPHA+MTIzIE1haW4gU3RyZWV0LCBDaXR5dmlsbGUsIENvdW50cnk8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1kaXYgcGhvbmVcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiY29udGFjdC1ib2xkXCI+UGhvbmU8L2gxPlxuICAgICAgICA8cD4oKzEyMykgNDU2LTc4OTA8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1kaXYgZW1haWxcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiY29udGFjdC1ib2xkXCI+RW1haWw8L2gxPlxuICAgICAgICA8cD48YSBocmVmPVwiXCI+aW5mb0BtZWRpbmFiaXRlcy5jb208L2E+PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZGl2IG9wZW5pbmctaG91cnNcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiY29udGFjdC1ib2xkXCI+T3BlbmluZyBIb3VyczwvaDE+XG4gICAgICAgIDxwPk1vbmRheSB0byBTYXR1cmRheTogMTA6MDAgQU0gLSAxMDowMCBQTTwvcD5cbiAgICAgICAgPHA+U3VuZGF5OiAxMjowMCBQTSAtIDg6MDAgUE08L3A+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGNvbnRhY3RUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KTtcblxufVxuXG5leHBvcnQgeyBwYWdlTG9hZCwgbWVudSwgY29udGFjdCwgaG9tZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTG9hZCwgbWVudSwgY29udGFjdCwgaG9tZSB9IGZyb20gXCIuL21vZHVsZXNcIjtcblxucGFnZUxvYWQoKTtcbmNvbnRhY3QoKTtcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLW5hdicpO1xuY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW5hdicpO1xuY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LW5hdicpO1xuXG5oZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBob21lTmF2KSB7XG4gICAgICAgIGhvbWUoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gbWVudU5hdikge1xuICAgICAgICBtZW51KCk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IGNvbnRhY3ROYXYpIHtcbiAgICAgICAgY29udGFjdCgpO1xuICAgIH1cbn0pXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9