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
    p.innerHTML = `
    <p>Welcome to Medina Bites, an exquisite haven in the heart of Cityville where Middle Eastern flavors come alive on your plate. Immerse yourself in the tantalizing fusion of traditional recipes and contemporary tastes that define our culinary journey. From the savory delight of our Shawarma Platter to the sweet perfection of our Baklava Delight, each dish at Medina Bites is crafted to bring the authentic spirit of the Middle East to your table.</p>

    <p>Indulge in our famed Hummus Platter, a creamy blend of chickpeas, tahini, and garlic served with warm pita bread, or savor the crispiness of our Falafel Wrap, a handheld treat bursting with falafel goodness. Explore the refreshing notes of our Moroccan Couscous Salad or dive into the heartiness of the Chicken Shawarma Bowl—a perfect marriage of marinated chicken, seasoned rice, and grilled vegetables.</p>
    
    <p>Journey through our menu, where the Vegetarian Moussaka takes center stage, a layered casserole of eggplant, zucchini, and potatoes, topped with a rich tomato and lentil filling. And don't forget to complement your Middle Eastern feast with our refreshing Mint Lemonade, a delightful drink to accompany the vibrant flavors on your plate.</p>
    
    <p>At Medina Bites, we invite you to experience the allure of Arabic cuisine in every bite, where each dish is a celebration of warmth, tradition, and culinary excellence. Join us, and let the warmth of our hospitality elevate your Middle Eastern dining adventure.</p>
    `
    text.appendChild(p);
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
(0,_modules__WEBPACK_IMPORTED_MODULE_0__.menu)();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7VUM3SkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wRDs7QUFFMUQsa0RBQVE7QUFDUiw4Q0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBSTtBQUNaLE1BQU07QUFDTixRQUFRLDhDQUFJO0FBQ1osTUFBTTtBQUNOLFFBQVEsaURBQU87QUFDZjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBwYWdlTG9hZCA9ICBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lLmNsYXNzTmFtZSA9ICdob21lLW5hdic7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS1uYXYnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW5hdicpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkNvbnRlbnQpO1xufTtcblxuZnVuY3Rpb24gaG9tZSgpIHtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50IGhvbWVwYWdlLWJhY2tncm91bmQnO1xuICAgIGRpdkNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0LmNsYXNzTmFtZSA9ICd0ZXh0IGhvbWVwYWdlLXRleHQnO1xuICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gYFxuICAgIDxwPldlbGNvbWUgdG8gTWVkaW5hIEJpdGVzLCBhbiBleHF1aXNpdGUgaGF2ZW4gaW4gdGhlIGhlYXJ0IG9mIENpdHl2aWxsZSB3aGVyZSBNaWRkbGUgRWFzdGVybiBmbGF2b3JzIGNvbWUgYWxpdmUgb24geW91ciBwbGF0ZS4gSW1tZXJzZSB5b3Vyc2VsZiBpbiB0aGUgdGFudGFsaXppbmcgZnVzaW9uIG9mIHRyYWRpdGlvbmFsIHJlY2lwZXMgYW5kIGNvbnRlbXBvcmFyeSB0YXN0ZXMgdGhhdCBkZWZpbmUgb3VyIGN1bGluYXJ5IGpvdXJuZXkuIEZyb20gdGhlIHNhdm9yeSBkZWxpZ2h0IG9mIG91ciBTaGF3YXJtYSBQbGF0dGVyIHRvIHRoZSBzd2VldCBwZXJmZWN0aW9uIG9mIG91ciBCYWtsYXZhIERlbGlnaHQsIGVhY2ggZGlzaCBhdCBNZWRpbmEgQml0ZXMgaXMgY3JhZnRlZCB0byBicmluZyB0aGUgYXV0aGVudGljIHNwaXJpdCBvZiB0aGUgTWlkZGxlIEVhc3QgdG8geW91ciB0YWJsZS48L3A+XG5cbiAgICA8cD5JbmR1bGdlIGluIG91ciBmYW1lZCBIdW1tdXMgUGxhdHRlciwgYSBjcmVhbXkgYmxlbmQgb2YgY2hpY2twZWFzLCB0YWhpbmksIGFuZCBnYXJsaWMgc2VydmVkIHdpdGggd2FybSBwaXRhIGJyZWFkLCBvciBzYXZvciB0aGUgY3Jpc3BpbmVzcyBvZiBvdXIgRmFsYWZlbCBXcmFwLCBhIGhhbmRoZWxkIHRyZWF0IGJ1cnN0aW5nIHdpdGggZmFsYWZlbCBnb29kbmVzcy4gRXhwbG9yZSB0aGUgcmVmcmVzaGluZyBub3RlcyBvZiBvdXIgTW9yb2NjYW4gQ291c2NvdXMgU2FsYWQgb3IgZGl2ZSBpbnRvIHRoZSBoZWFydGluZXNzIG9mIHRoZSBDaGlja2VuIFNoYXdhcm1hIEJvd2zigJRhIHBlcmZlY3QgbWFycmlhZ2Ugb2YgbWFyaW5hdGVkIGNoaWNrZW4sIHNlYXNvbmVkIHJpY2UsIGFuZCBncmlsbGVkIHZlZ2V0YWJsZXMuPC9wPlxuICAgIFxuICAgIDxwPkpvdXJuZXkgdGhyb3VnaCBvdXIgbWVudSwgd2hlcmUgdGhlIFZlZ2V0YXJpYW4gTW91c3Nha2EgdGFrZXMgY2VudGVyIHN0YWdlLCBhIGxheWVyZWQgY2Fzc2Vyb2xlIG9mIGVnZ3BsYW50LCB6dWNjaGluaSwgYW5kIHBvdGF0b2VzLCB0b3BwZWQgd2l0aCBhIHJpY2ggdG9tYXRvIGFuZCBsZW50aWwgZmlsbGluZy4gQW5kIGRvbid0IGZvcmdldCB0byBjb21wbGVtZW50IHlvdXIgTWlkZGxlIEVhc3Rlcm4gZmVhc3Qgd2l0aCBvdXIgcmVmcmVzaGluZyBNaW50IExlbW9uYWRlLCBhIGRlbGlnaHRmdWwgZHJpbmsgdG8gYWNjb21wYW55IHRoZSB2aWJyYW50IGZsYXZvcnMgb24geW91ciBwbGF0ZS48L3A+XG4gICAgXG4gICAgPHA+QXQgTWVkaW5hIEJpdGVzLCB3ZSBpbnZpdGUgeW91IHRvIGV4cGVyaWVuY2UgdGhlIGFsbHVyZSBvZiBBcmFiaWMgY3Vpc2luZSBpbiBldmVyeSBiaXRlLCB3aGVyZSBlYWNoIGRpc2ggaXMgYSBjZWxlYnJhdGlvbiBvZiB3YXJtdGgsIHRyYWRpdGlvbiwgYW5kIGN1bGluYXJ5IGV4Y2VsbGVuY2UuIEpvaW4gdXMsIGFuZCBsZXQgdGhlIHdhcm10aCBvZiBvdXIgaG9zcGl0YWxpdHkgZWxldmF0ZSB5b3VyIE1pZGRsZSBFYXN0ZXJuIGRpbmluZyBhZHZlbnR1cmUuPC9wPlxuICAgIGBcbiAgICB0ZXh0LmFwcGVuZENoaWxkKHApO1xufVxuXG5mdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGRpdkNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQgbWVudS1iYWNrZ3JvdW5kJztcbiAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBkaXZDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGV4dCBtZW51LXRleHRcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGgxPlNoYXdhcm1hIFBsYXR0ZXI8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiQxMi45OTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5TYXZvciB0aGUgdGFzdGUgb2YgdGhpbmx5IHNsaWNlZCwgbWFyaW5hdGVkIG1lYXQgKGNoaWNrZW4gb3IgYmVlZikgZ3JpbGxlZCB0byBwZXJmZWN0aW9uLiBTZXJ2ZWQgd2l0aCBmcmFncmFudCByaWNlLCBmcmVzaCB2ZWdldGFibGVzLCBhbmQgdGFoaW5pIHNhdWNlLjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoMT5NZXp6ZSBTYW1wbGVyPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4kMTQuOTk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+SW5kdWxnZSBpbiBhIGRlbGlnaHRmdWwgYXNzb3J0bWVudCBvZiBNaWRkbGUgRWFzdGVybiBhcHBldGl6ZXJzLCBpbmNsdWRpbmcgaHVtbXVzLCBiYWJhIGdhbm91c2gsIGZhbGFmZWwsIGFuZCBzdHVmZmVkIGdyYXBlIGxlYXZlcy4gUGVyZmVjdCBmb3Igc2hhcmluZyE8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aDE+TGFtYiBLb2Z0YSBTa2V3ZXJzPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4kMTUuOTk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+SnVpY3kgbWluY2VkIGxhbWIsIHNlYXNvbmVkIHdpdGggYXJvbWF0aWMgc3BpY2VzLCBza2V3ZXJlZCBhbmQgZ3JpbGxlZCB0byBwZXJmZWN0aW9uLiBTZXJ2ZWQgd2l0aCBjb3VzY291cyBhbmQgYSB6ZXN0eSBtaW50IHlvZ3VydCBzYXVjZS48L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aDE+SHVtbXVzIFBsYXR0ZXI8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiQ5Ljk5PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkRpdmUgaW50byBvdXIgY3JlYW15IGFuZCBmbGF2b3JmdWwgaHVtbXVzLCBtYWRlIGZyb20gY2hpY2twZWFzLCB0YWhpbmksIGFuZCBhIHRvdWNoIG9mIGdhcmxpYy4gU2VydmVkIHdpdGggYSBkcml6emxlIG9mIG9saXZlIG9pbCwgYSBzcHJpbmtsZSBvZiBwYXByaWthLCBhbmQgd2FybSBwaXRhIGJyZWFkIGZvciBkaXBwaW5nLjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoMT5CYWtsYXZhIERlbGlnaHQ8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiQ3Ljk5PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkEgc3dlZXQgZmluYWxlIHRvIHlvdXIgbWVhbCEgTGF5ZXJzIG9mIGZsYWt5IHBoeWxsbyBkb3VnaCwgY2hvcHBlZCBudXRzLCBhbmQgc3dlZXQgaG9uZXksIGJha2VkIHRvIGdvbGRlbiBwZXJmZWN0aW9uLiBBIGNsYXNzaWMgTWlkZGxlIEVhc3Rlcm4gZGVzc2VydC48L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aDE+RmFsYWZlbCBXcmFwPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJpY2VcIj4kMTAuOTk8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+Q3Jpc3B5IGZhbGFmZWwgYmFsbHMgd3JhcHBlZCBpbiB3YXJtIHBpdGEgYnJlYWQsIGFjY29tcGFuaWVkIGJ5IGZyZXNoIHZlZ2dpZXMgYW5kIHRhaGluaSBzYXVjZS4gQSBkZWxpZ2h0ZnVsIGhhbmRoZWxkIHRyZWF0ITwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoMT5Nb3JvY2NhbiBDb3VzY291cyBTYWxhZDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JDExLjk5PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkEgcmVmcmVzaGluZyBzYWxhZCBmZWF0dXJpbmcgZmx1ZmZ5IGNvdXNjb3VzLCBtaXhlZCB3aXRoIGNvbG9yZnVsIGJlbGwgcGVwcGVycywgY2hlcnJ5IHRvbWF0b2VzLCBjdWN1bWJlcnMsIGFuZCBhIHplc3R5IGxlbW9uIHZpbmFpZ3JldHRlLjwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoMT5DaGlja2VuIFNoYXdhcm1hIEJvd2w8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcmljZVwiPiQxMy45OTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5UZW5kZXIgc2xpY2VzIG9mIG1hcmluYXRlZCBjaGlja2VuLCBzZXJ2ZWQgb3ZlciBhIGJlZCBvZiBzZWFzb25lZCByaWNlLCBhY2NvbXBhbmllZCBieSBncmlsbGVkIHZlZ2V0YWJsZXMgYW5kIHRvcHBlZCB3aXRoIGdhcmxpYyBzYXVjZS48L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aDE+VmVnZXRhcmlhbiBNb3Vzc2FrYTwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+JDEyLjk5PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkEgbGF5ZXJlZCBjYXNzZXJvbGUgb2YgZWdncGxhbnQsIHp1Y2NoaW5pLCBhbmQgcG90YXRvZXMsIHRvcHBlZCB3aXRoIGEgcmljaCB0b21hdG8gYW5kIGxlbnRpbCBmaWxsaW5nLiBCYWtlZCB0byBwZXJmZWN0aW9uIGFuZCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgdHphdHppa2kuPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIGBcbn1cblxuZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBkaXZDb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50IGNvbnRhY3QtYmFja2dyb3VuZCc7XG4gICAgZGl2Q29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFRleHQuY2xhc3NOYW1lID0gJ3RleHQgY29udGFjdC10ZXh0JztcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0KTtcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnRhY3RIZWFkZXIuY2xhc3NOYW1lID0gJ2NvbnRhY3QtaGVhZGVyJztcbiAgICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuICAgIGNvbnRhY3RUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuXG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZGl2IGFkZHJlc3NcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwiY29udGFjdC1ib2xkXCI+QWRkcmVzczwvaDE+XG4gICAgICAgIDxwPjEyMyBNYWluIFN0cmVldCwgQ2l0eXZpbGxlLCBDb3VudHJ5PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZGl2IHBob25lXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cImNvbnRhY3QtYm9sZFwiPlBob25lPC9oMT5cbiAgICAgICAgPHA+KCsxMjMpIDQ1Ni03ODkwPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZGl2IGVtYWlsXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cImNvbnRhY3QtYm9sZFwiPkVtYWlsPC9oMT5cbiAgICAgICAgPHA+PGEgaHJlZj1cIlwiPmluZm9AbWVkaW5hYml0ZXMuY29tPC9hPjwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWRpdiBvcGVuaW5nLWhvdXJzXCI+XG4gICAgICAgIDxoMSBjbGFzcz1cImNvbnRhY3QtYm9sZFwiPk9wZW5pbmcgSG91cnM8L2gxPlxuICAgICAgICA8cD5Nb25kYXkgdG8gU2F0dXJkYXk6IDEwOjAwIEFNIC0gMTA6MDAgUE08L3A+XG4gICAgICAgIDxwPlN1bmRheTogMTI6MDAgUE0gLSA4OjAwIFBNPC9wPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb250YWN0VGV4dC5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudCk7XG5cbn1cblxuZXhwb3J0IHsgcGFnZUxvYWQsIG1lbnUsIGNvbnRhY3QsIGhvbWUgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcGFnZUxvYWQsIG1lbnUsIGNvbnRhY3QsIGhvbWUgfSBmcm9tIFwiLi9tb2R1bGVzXCI7XG5cbnBhZ2VMb2FkKCk7XG5tZW51KCk7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbmNvbnN0IGhvbWVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1uYXYnKTtcbmNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1uYXYnKTtcbmNvbnN0IGNvbnRhY3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1uYXYnKTtcblxuaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gaG9tZU5hdikge1xuICAgICAgICBob21lKCk7XG4gICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IG1lbnVOYXYpIHtcbiAgICAgICAgbWVudSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09PSBjb250YWN0TmF2KSB7XG4gICAgICAgIGNvbnRhY3QoKTtcbiAgICB9XG59KVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==