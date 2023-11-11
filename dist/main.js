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

    const menu = document.createElement('p');
    menu.innerHTML = '<button>Menu</button>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7O1VDdkZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEQ7O0FBRTFELGtEQUFRO0FBQ1IsaURBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsOENBQUk7QUFDWixNQUFNO0FBQ04sUUFBUSw4Q0FBSTtBQUNaLE1BQU07QUFDTixRQUFRLGlEQUFPO0FBQ2Y7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgcGFnZUxvYWQgPSAgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgaG9tZS5jbGFzc05hbWUgPSAnaG9tZS1uYXYnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChob21lKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudS5pbm5lckhUTUwgPSAnPGJ1dHRvbj5NZW51PC9idXR0b24+JztcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtbmF2Jyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gJ0NvbnRhY3QnO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1uYXYnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXZDb250ZW50KTtcbn07XG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgZGl2Q29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCBob21lcGFnZS1iYWNrZ3JvdW5kJztcbiAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dC5jbGFzc05hbWUgPSAndGV4dCBob21lcGFnZS10ZXh0JztcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIE1lZGluYSBCaXRlcywgeW91ciBnYXRld2F5IHRvIE1pZGRsZSBFYXN0ZXJuIGRlbGlnaHRzIGluIHRoZSBoZWFydCBvZiBOWS4gSW1tZXJzZSB5b3Vyc2VsZiBpbiB0aGUgcmljaCBmbGF2b3JzIG9mIG91ciBjdWlzaW5lLCBhIHBlcmZlY3QgZnVzaW9uIG9mIHRyYWRpdGlvbmFsIHJlY2lwZXMgYW5kIGNvbnRlbXBvcmFyeSB0YXN0ZXMuIEZyb20gc3VjY3VsZW50IGtlYmFicyB0byBkZWxpZ2h0ZnVsIGJha2xhdmEsIGVhY2ggZGlzaCBhdCBNZWRpbmEgQml0ZXMgYnJpbmdzIHRoZSBhdXRoZW50aWMgc3Bpcml0IG9mIHRoZSBNaWRkbGUgRWFzdCB0byB5b3VyIHRhYmxlLiBKb2luIHVzIGF0IE1lZGluYSBCaXRlcywgd2hlcmUgdGhlIGFsbHVyZSBvZiBBcmFiaWMgY3Vpc2luZSBtZWV0cyB0aGUgd2FybXRoIG9mIG91ciBob3NwaXRhbGl0eS5cIlxuICAgIHRleHQuYXBwZW5kQ2hpbGQocCk7XG59XG5cbmZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgZGl2Q29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCBjb250YWN0LWJhY2tncm91bmQnO1xuICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBcbiAgICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RUZXh0LmNsYXNzTmFtZSA9ICd0ZXh0IGNvbnRhY3QtdGV4dCc7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VGV4dCk7XG5cbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb250YWN0SGVhZGVyLmNsYXNzTmFtZSA9ICdjb250YWN0LWhlYWRlcic7XG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICBjb250YWN0VGV4dC5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcblxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWRpdiBhZGRyZXNzXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cImNvbnRhY3QtYm9sZFwiPkFkZHJlc3M8L2gxPlxuICAgICAgICA8cD4xMjMgTWFpbiBTdHJlZXQsIENpdHl2aWxsZSwgQ291bnRyeTwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWRpdiBwaG9uZVwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJjb250YWN0LWJvbGRcIj5QaG9uZTwvaDE+XG4gICAgICAgIDxwPigrMTIzKSA0NTYtNzg5MDwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWRpdiBlbWFpbFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJjb250YWN0LWJvbGRcIj5FbWFpbDwvaDE+XG4gICAgICAgIDxwPjxhIGhyZWY9XCJcIj5pbmZvQG1lZGluYWJpdGVzLmNvbTwvYT48L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1kaXYgb3BlbmluZy1ob3Vyc1wiPlxuICAgICAgICA8aDEgY2xhc3M9XCJjb250YWN0LWJvbGRcIj5PcGVuaW5nIEhvdXJzPC9oMT5cbiAgICAgICAgPHA+TW9uZGF5IHRvIFNhdHVyZGF5OiAxMDowMCBBTSAtIDEwOjAwIFBNPC9wPlxuICAgICAgICA8cD5TdW5kYXk6IDEyOjAwIFBNIC0gODowMCBQTTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29udGFjdFRleHQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuXG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkLCBtZW51LCBjb250YWN0LCBob21lIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhZ2VMb2FkLCBtZW51LCBjb250YWN0LCBob21lIH0gZnJvbSBcIi4vbW9kdWxlc1wiO1xuXG5wYWdlTG9hZCgpO1xuY29udGFjdCgpO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBob21lTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtbmF2Jyk7XG5jb25zdCBtZW51TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbmF2Jyk7XG5jb25zdCBjb250YWN0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtbmF2Jyk7XG5cbmhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IGhvbWVOYXYpIHtcbiAgICAgICAgaG9tZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSBtZW51TmF2KSB7XG4gICAgICAgIG1lbnUoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gY29udGFjdE5hdikge1xuICAgICAgICBjb250YWN0KCk7XG4gICAgfVxufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=