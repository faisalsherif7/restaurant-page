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

    text.innerHTML = `
    <p>Welcome to Medina Bites, an exquisite haven in the heart of Cityville where Middle Eastern flavors come alive on your plate. Immerse yourself in the tantalizing fusion of traditional recipes and contemporary tastes that define our culinary journey. From the savory delight of our Shawarma Platter to the sweet perfection of our Baklava Delight, each dish at Medina Bites is crafted to bring the authentic spirit of the Middle East to your table.</p>

    <p>Indulge in our famed Hummus Platter, a creamy blend of chickpeas, tahini, and garlic served with warm pita bread, or savor the crispiness of our Falafel Wrap, a handheld treat bursting with falafel goodness. Explore the refreshing notes of our Moroccan Couscous Salad or dive into the heartiness of the Chicken Shawarma Bowl—a perfect marriage of marinated chicken, seasoned rice, and grilled vegetables.</p>
    
    <p>Journey through our menu, where the Vegetarian Moussaka takes center stage, a layered casserole of eggplant, zucchini, and potatoes, topped with a rich tomato and lentil filling. And don't forget to complement your Middle Eastern feast with our refreshing Mint Lemonade, a delightful drink to accompany the vibrant flavors on your plate.</p>
    
    <p>At Medina Bites, we invite you to experience the allure of Arabic cuisine in every bite, where each dish is a celebration of warmth, tradition, and culinary excellence. Join us, and let the warmth of our hospitality elevate your Middle Eastern dining adventure.</p>
    `
}

function menu() {
    const divContent = document.querySelector('.content');
    divContent.className = 'content menu-background';
    divContent.textContent = '';

    divContent.innerHTML = `
    <div class="text menu-text">

        <div class="card">
            <h1>Shawarma Platter</h1>
            <p class="price">$12.99</p>
            <p class="description">Savor the taste of thinly sliced, marinated meat (chicken or beef) grilled to perfection. Served with fragrant rice, fresh vegetables, and tahini sauce.</p>
        </div>

        <div class="card">
            <h1>Mezze Sampler</h1>
            <p class="price">$14.99</p>
            <p class="description">Indulge in a delightful assortment of Middle Eastern appetizers, including hummus, baba ganoush, falafel, and stuffed grape leaves. Perfect for sharing!</p>
        </div>

        <div class="card">
            <h1>Lamb Kofta Skewers</h1>
            <p class="price">$15.99</p>
            <p class="description">Juicy minced lamb, seasoned with aromatic spices, skewered and grilled to perfection. Served with couscous and a zesty mint yogurt sauce.</p>
        </div>

        <div class="card">
            <h1>Hummus Platter</h1>
            <p class="price">$9.99</p>
            <p class="description">Dive into our creamy and flavorful hummus, made from chickpeas, tahini, and a touch of garlic. Served with a drizzle of olive oil, a sprinkle of paprika, and warm pita bread for dipping.</p>
        </div>

        <div class="card">
            <h1>Baklava Delight</h1>
            <p class="price">$7.99</p>
            <p class="description">A sweet finale to your meal! Layers of flaky phyllo dough, chopped nuts, and sweet honey, baked to golden perfection. A classic Middle Eastern dessert.</p>
        </div>

        <div class="card">
            <h1>Falafel Wrap</h1>
            <p class="price">$10.99</p>
            <p class="description">Crispy falafel balls wrapped in warm pita bread, accompanied by fresh veggies and tahini sauce. A delightful handheld treat!</p>
        </div>

        <div class="card">
            <h1>Moroccan Couscous Salad</h1>
            <p class="price">$11.99</p>
            <p class="description">A refreshing salad featuring fluffy couscous, mixed with colorful bell peppers, cherry tomatoes, cucumbers, and a zesty lemon vinaigrette.</p>
        </div>

        <div class="card">
            <h1>Chicken Shawarma Bowl</h1>
            <p class="price">$13.99</p>
            <p class="description">Tender slices of marinated chicken, served over a bed of seasoned rice, accompanied by grilled vegetables and topped with garlic sauce.</p>
        </div>

        <div class="card">
            <h1>Vegetarian Moussaka</h1>
            <p class="price">$12.99</p>
            <p class="description">A layered casserole of eggplant, zucchini, and potatoes, topped with a rich tomato and lentil filling. Baked to perfection and served with a side of tzatziki.</p>
        </div>

    </div>
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
(0,_modules__WEBPACK_IMPORTED_MODULE_0__.home)();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7OztVQzNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBEOztBQUUxRCxrREFBUTtBQUNSLDhDQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDhDQUFJO0FBQ1osTUFBTTtBQUNOLFFBQVEsOENBQUk7QUFDWixNQUFNO0FBQ04sUUFBUSxpREFBTztBQUNmO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHBhZ2VMb2FkID0gIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGhvbWUuY2xhc3NOYW1lID0gJ2hvbWUtbmF2JztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LW5hdicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbmF2Jyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2Q29udGVudCk7XG59O1xuXG5mdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGRpdkNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQgaG9tZXBhZ2UtYmFja2dyb3VuZCc7XG4gICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHQuY2xhc3NOYW1lID0gJ3RleHQgaG9tZXBhZ2UtdGV4dCc7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIHRleHQuaW5uZXJIVE1MID0gYFxuICAgIDxwPldlbGNvbWUgdG8gTWVkaW5hIEJpdGVzLCBhbiBleHF1aXNpdGUgaGF2ZW4gaW4gdGhlIGhlYXJ0IG9mIENpdHl2aWxsZSB3aGVyZSBNaWRkbGUgRWFzdGVybiBmbGF2b3JzIGNvbWUgYWxpdmUgb24geW91ciBwbGF0ZS4gSW1tZXJzZSB5b3Vyc2VsZiBpbiB0aGUgdGFudGFsaXppbmcgZnVzaW9uIG9mIHRyYWRpdGlvbmFsIHJlY2lwZXMgYW5kIGNvbnRlbXBvcmFyeSB0YXN0ZXMgdGhhdCBkZWZpbmUgb3VyIGN1bGluYXJ5IGpvdXJuZXkuIEZyb20gdGhlIHNhdm9yeSBkZWxpZ2h0IG9mIG91ciBTaGF3YXJtYSBQbGF0dGVyIHRvIHRoZSBzd2VldCBwZXJmZWN0aW9uIG9mIG91ciBCYWtsYXZhIERlbGlnaHQsIGVhY2ggZGlzaCBhdCBNZWRpbmEgQml0ZXMgaXMgY3JhZnRlZCB0byBicmluZyB0aGUgYXV0aGVudGljIHNwaXJpdCBvZiB0aGUgTWlkZGxlIEVhc3QgdG8geW91ciB0YWJsZS48L3A+XG5cbiAgICA8cD5JbmR1bGdlIGluIG91ciBmYW1lZCBIdW1tdXMgUGxhdHRlciwgYSBjcmVhbXkgYmxlbmQgb2YgY2hpY2twZWFzLCB0YWhpbmksIGFuZCBnYXJsaWMgc2VydmVkIHdpdGggd2FybSBwaXRhIGJyZWFkLCBvciBzYXZvciB0aGUgY3Jpc3BpbmVzcyBvZiBvdXIgRmFsYWZlbCBXcmFwLCBhIGhhbmRoZWxkIHRyZWF0IGJ1cnN0aW5nIHdpdGggZmFsYWZlbCBnb29kbmVzcy4gRXhwbG9yZSB0aGUgcmVmcmVzaGluZyBub3RlcyBvZiBvdXIgTW9yb2NjYW4gQ291c2NvdXMgU2FsYWQgb3IgZGl2ZSBpbnRvIHRoZSBoZWFydGluZXNzIG9mIHRoZSBDaGlja2VuIFNoYXdhcm1hIEJvd2zigJRhIHBlcmZlY3QgbWFycmlhZ2Ugb2YgbWFyaW5hdGVkIGNoaWNrZW4sIHNlYXNvbmVkIHJpY2UsIGFuZCBncmlsbGVkIHZlZ2V0YWJsZXMuPC9wPlxuICAgIFxuICAgIDxwPkpvdXJuZXkgdGhyb3VnaCBvdXIgbWVudSwgd2hlcmUgdGhlIFZlZ2V0YXJpYW4gTW91c3Nha2EgdGFrZXMgY2VudGVyIHN0YWdlLCBhIGxheWVyZWQgY2Fzc2Vyb2xlIG9mIGVnZ3BsYW50LCB6dWNjaGluaSwgYW5kIHBvdGF0b2VzLCB0b3BwZWQgd2l0aCBhIHJpY2ggdG9tYXRvIGFuZCBsZW50aWwgZmlsbGluZy4gQW5kIGRvbid0IGZvcmdldCB0byBjb21wbGVtZW50IHlvdXIgTWlkZGxlIEVhc3Rlcm4gZmVhc3Qgd2l0aCBvdXIgcmVmcmVzaGluZyBNaW50IExlbW9uYWRlLCBhIGRlbGlnaHRmdWwgZHJpbmsgdG8gYWNjb21wYW55IHRoZSB2aWJyYW50IGZsYXZvcnMgb24geW91ciBwbGF0ZS48L3A+XG4gICAgXG4gICAgPHA+QXQgTWVkaW5hIEJpdGVzLCB3ZSBpbnZpdGUgeW91IHRvIGV4cGVyaWVuY2UgdGhlIGFsbHVyZSBvZiBBcmFiaWMgY3Vpc2luZSBpbiBldmVyeSBiaXRlLCB3aGVyZSBlYWNoIGRpc2ggaXMgYSBjZWxlYnJhdGlvbiBvZiB3YXJtdGgsIHRyYWRpdGlvbiwgYW5kIGN1bGluYXJ5IGV4Y2VsbGVuY2UuIEpvaW4gdXMsIGFuZCBsZXQgdGhlIHdhcm10aCBvZiBvdXIgaG9zcGl0YWxpdHkgZWxldmF0ZSB5b3VyIE1pZGRsZSBFYXN0ZXJuIGRpbmluZyBhZHZlbnR1cmUuPC9wPlxuICAgIGBcbn1cblxuZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50IG1lbnUtYmFja2dyb3VuZCc7XG4gICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgZGl2Q29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRleHQgbWVudS10ZXh0XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoMT5TaGF3YXJtYSBQbGF0dGVyPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4kMTIuOTk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+U2F2b3IgdGhlIHRhc3RlIG9mIHRoaW5seSBzbGljZWQsIG1hcmluYXRlZCBtZWF0IChjaGlja2VuIG9yIGJlZWYpIGdyaWxsZWQgdG8gcGVyZmVjdGlvbi4gU2VydmVkIHdpdGggZnJhZ3JhbnQgcmljZSwgZnJlc2ggdmVnZXRhYmxlcywgYW5kIHRhaGluaSBzYXVjZS48L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aDE+TWV6emUgU2FtcGxlcjwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JDE0Ljk5PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkluZHVsZ2UgaW4gYSBkZWxpZ2h0ZnVsIGFzc29ydG1lbnQgb2YgTWlkZGxlIEVhc3Rlcm4gYXBwZXRpemVycywgaW5jbHVkaW5nIGh1bW11cywgYmFiYSBnYW5vdXNoLCBmYWxhZmVsLCBhbmQgc3R1ZmZlZCBncmFwZSBsZWF2ZXMuIFBlcmZlY3QgZm9yIHNoYXJpbmchPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGgxPkxhbWIgS29mdGEgU2tld2VyczwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JDE1Ljk5PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkp1aWN5IG1pbmNlZCBsYW1iLCBzZWFzb25lZCB3aXRoIGFyb21hdGljIHNwaWNlcywgc2tld2VyZWQgYW5kIGdyaWxsZWQgdG8gcGVyZmVjdGlvbi4gU2VydmVkIHdpdGggY291c2NvdXMgYW5kIGEgemVzdHkgbWludCB5b2d1cnQgc2F1Y2UuPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGgxPkh1bW11cyBQbGF0dGVyPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4kOS45OTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5EaXZlIGludG8gb3VyIGNyZWFteSBhbmQgZmxhdm9yZnVsIGh1bW11cywgbWFkZSBmcm9tIGNoaWNrcGVhcywgdGFoaW5pLCBhbmQgYSB0b3VjaCBvZiBnYXJsaWMuIFNlcnZlZCB3aXRoIGEgZHJpenpsZSBvZiBvbGl2ZSBvaWwsIGEgc3ByaW5rbGUgb2YgcGFwcmlrYSwgYW5kIHdhcm0gcGl0YSBicmVhZCBmb3IgZGlwcGluZy48L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aDE+QmFrbGF2YSBEZWxpZ2h0PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4kNy45OTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5BIHN3ZWV0IGZpbmFsZSB0byB5b3VyIG1lYWwhIExheWVycyBvZiBmbGFreSBwaHlsbG8gZG91Z2gsIGNob3BwZWQgbnV0cywgYW5kIHN3ZWV0IGhvbmV5LCBiYWtlZCB0byBnb2xkZW4gcGVyZmVjdGlvbi4gQSBjbGFzc2ljIE1pZGRsZSBFYXN0ZXJuIGRlc3NlcnQuPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGgxPkZhbGFmZWwgV3JhcDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JDEwLjk5PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkNyaXNweSBmYWxhZmVsIGJhbGxzIHdyYXBwZWQgaW4gd2FybSBwaXRhIGJyZWFkLCBhY2NvbXBhbmllZCBieSBmcmVzaCB2ZWdnaWVzIGFuZCB0YWhpbmkgc2F1Y2UuIEEgZGVsaWdodGZ1bCBoYW5kaGVsZCB0cmVhdCE8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aDE+TW9yb2NjYW4gQ291c2NvdXMgU2FsYWQ8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiQxMS45OTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5BIHJlZnJlc2hpbmcgc2FsYWQgZmVhdHVyaW5nIGZsdWZmeSBjb3VzY291cywgbWl4ZWQgd2l0aCBjb2xvcmZ1bCBiZWxsIHBlcHBlcnMsIGNoZXJyeSB0b21hdG9lcywgY3VjdW1iZXJzLCBhbmQgYSB6ZXN0eSBsZW1vbiB2aW5haWdyZXR0ZS48L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aDE+Q2hpY2tlbiBTaGF3YXJtYSBCb3dsPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4kMTMuOTk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+VGVuZGVyIHNsaWNlcyBvZiBtYXJpbmF0ZWQgY2hpY2tlbiwgc2VydmVkIG92ZXIgYSBiZWQgb2Ygc2Vhc29uZWQgcmljZSwgYWNjb21wYW5pZWQgYnkgZ3JpbGxlZCB2ZWdldGFibGVzIGFuZCB0b3BwZWQgd2l0aCBnYXJsaWMgc2F1Y2UuPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGgxPlZlZ2V0YXJpYW4gTW91c3Nha2E8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiQxMi45OTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5BIGxheWVyZWQgY2Fzc2Vyb2xlIG9mIGVnZ3BsYW50LCB6dWNjaGluaSwgYW5kIHBvdGF0b2VzLCB0b3BwZWQgd2l0aCBhIHJpY2ggdG9tYXRvIGFuZCBsZW50aWwgZmlsbGluZy4gQmFrZWQgdG8gcGVyZmVjdGlvbiBhbmQgc2VydmVkIHdpdGggYSBzaWRlIG9mIHR6YXR6aWtpLjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICBgXG59XG5cbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgZGl2Q29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCBjb250YWN0LWJhY2tncm91bmQnO1xuICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBcbiAgICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RUZXh0LmNsYXNzTmFtZSA9ICd0ZXh0IGNvbnRhY3QtdGV4dCc7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VGV4dCk7XG5cbiAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb250YWN0SGVhZGVyLmNsYXNzTmFtZSA9ICdjb250YWN0LWhlYWRlcic7XG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICBjb250YWN0VGV4dC5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcblxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWRpdiBhZGRyZXNzXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cImNvbnRhY3QtYm9sZFwiPkFkZHJlc3M8L2gxPlxuICAgICAgICA8cD4xMjMgTWFpbiBTdHJlZXQsIENpdHl2aWxsZSwgQ291bnRyeTwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWRpdiBwaG9uZVwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJjb250YWN0LWJvbGRcIj5QaG9uZTwvaDE+XG4gICAgICAgIDxwPigrMTIzKSA0NTYtNzg5MDwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWRpdiBlbWFpbFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJjb250YWN0LWJvbGRcIj5FbWFpbDwvaDE+XG4gICAgICAgIDxwPjxhIGhyZWY9XCJcIj5pbmZvQG1lZGluYWJpdGVzLmNvbTwvYT48L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1kaXYgb3BlbmluZy1ob3Vyc1wiPlxuICAgICAgICA8aDEgY2xhc3M9XCJjb250YWN0LWJvbGRcIj5PcGVuaW5nIEhvdXJzPC9oMT5cbiAgICAgICAgPHA+TW9uZGF5IHRvIFNhdHVyZGF5OiAxMDowMCBBTSAtIDEwOjAwIFBNPC9wPlxuICAgICAgICA8cD5TdW5kYXk6IDEyOjAwIFBNIC0gODowMCBQTTwvcD5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29udGFjdFRleHQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQpO1xuXG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkLCBtZW51LCBjb250YWN0LCBob21lIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHBhZ2VMb2FkLCBtZW51LCBjb250YWN0LCBob21lIH0gZnJvbSBcIi4vbW9kdWxlc1wiO1xuXG5wYWdlTG9hZCgpO1xuaG9tZSgpO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBob21lTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtbmF2Jyk7XG5jb25zdCBtZW51TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbmF2Jyk7XG5jb25zdCBjb250YWN0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtbmF2Jyk7XG5cbmhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IGhvbWVOYXYpIHtcbiAgICAgICAgaG9tZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSBtZW51TmF2KSB7XG4gICAgICAgIG1lbnUoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PT0gY29udGFjdE5hdikge1xuICAgICAgICBjb250YWN0KCk7XG4gICAgfVxufSlcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=