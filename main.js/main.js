/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/menu-mobile.js":
/*!***************************!*\
  !*** ./js/menu-mobile.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n    const html = document.documentElement\n    const outside = 'data-outside'\n\n    function handleOutsidClick(event) {\n        if (!element.contains(event.target)) {\n            element.removeAttribute(outside)\n\n            events.forEach((userEvent) => {\n                html.removeEventListener(userEvent, handleOutsidClick)\n            })\n\n            callback()\n        }\n    }\n\n    if (!element.hasAttribute(outside)) {\n        events.forEach((userEvent) => {\n            setTimeout(() => {\n                html.addEventListener(userEvent, handleOutsidClick)\n            }, 0)\n        })\n\n        element.setAttribute(outside, '')\n    }\n}\nfunction initMenuMobile() {\n    const btnMenu = document.getElementById('btn-mobile')\n    const sidebar = document.querySelector('.sidebar-menu')\n    const hamburger = document.querySelector('.hamburger')\n    const events = ['click', 'touchstart']\n\n    function menuOpen(event) {\n        event.preventDefault()\n        btnMenu.classList.add('active')\n        sidebar.classList.add('active')\n        hamburger.classList.add('active')\n\n        outsideClick(sidebar, events, () => {\n            btnMenu.classList.remove('active')\n            sidebar.classList.remove('active')\n            hamburger.classList.remove('active')\n        })\n    }\n    events.forEach((event) => {\n        btnMenu.addEventListener(event, menuOpen)\n    })\n\n    const header = document.querySelectorAll('#header')\n    function colorBtnMenu() {\n        const windowFinal = window.innerHeight * 0.0\n\n        header.forEach((event) => {\n            const headerTop = event.getBoundingClientRect().top - windowFinal\n            const totalHeader = -event.offsetHeight\n\n            if (totalHeader > headerTop) {\n                hamburger.classList.add('active-color')\n            } else {\n                hamburger.classList.remove('active-color')\n            }\n        })\n    }\n\n    colorBtnMenu()\n\n    window.addEventListener('scroll', colorBtnMenu)\n\n    // REMOVE ACTIVE AO CLICAR NO LINK\n\n    const navMenuLinks = document.querySelectorAll('[data-Menu=\"closer-menu\"] a[href^=\"./\"]')\n    const navMenu = document.querySelector('[data-Menu=\"closer-menu\"]')\n\n    function closeMenu() {\n        navMenuLinks.forEach(() => {\n            btnMenu.classList.remove('active')\n            sidebar.classList.remove('active')\n            hamburger.classList.remove('active')\n        })\n    }\n\n    navMenu.addEventListener('click', closeMenu)\n}\n\n\n//# sourceURL=webpack://musicalizando/./js/menu-mobile.js?");

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-mobile.js */ \"./js/menu-mobile.js\");\n/* harmony import */ var _swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper.js */ \"./js/swiper.js\");\n/* harmony import */ var _show_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-scroll.js */ \"./js/show-scroll.js\");\n/* harmony import */ var _show_class_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-class.js */ \"./js/show-class.js\");\n/* harmony import */ var _typewriter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typewriter.js */ \"./js/typewriter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_swiper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_show_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_show_class_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_typewriter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n\n\n//# sourceURL=webpack://musicalizando/./js/scripts.js?");

/***/ }),

/***/ "./js/show-class.js":
/*!**************************!*\
  !*** ./js/show-class.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initShowClass)\n/* harmony export */ });\nfunction initShowClass() {\r\n\r\n}\r\n\r\nconst knowMore = document.querySelectorAll('.know-more')\r\nconst clasS = document.querySelectorAll('.content-description')\r\n\r\nfunction showClass(index) {\r\n    clasS[index].classList.toggle('active')\r\n}\r\n\r\nknowMore.forEach((button, index) => {\r\n    button.addEventListener('click', () => {\r\n        showClass(index)\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack://musicalizando/./js/show-class.js?");

/***/ }),

/***/ "./js/show-scroll.js":
/*!***************************!*\
  !*** ./js/show-scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initShowScroll)\n/* harmony export */ });\nfunction initShowScroll() {\r\n    const sectionAnime = document.querySelectorAll('[data-anime=\"show-scroll\"]')\r\n\r\n    function animaScroll() {\r\n        const windowHalf = window.innerHeight * 0.7\r\n\r\n        sectionAnime.forEach((section) => {\r\n            const sectionTop = section.getBoundingClientRect().top - windowHalf\r\n\r\n            if (sectionTop < 0) {\r\n                section.classList.add('active')\r\n            } else if (section.classList.contains('active')) {\r\n                section.classList.remove('active')\r\n            }\r\n        })\r\n    }\r\n\r\n    window.addEventListener('scroll', animaScroll)\r\n\r\n    animaScroll()\r\n}\r\n\n\n//# sourceURL=webpack://musicalizando/./js/show-scroll.js?");

/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ configSwiper)\n/* harmony export */ });\nfunction configSwiper() {\r\n    var swiper = new Swiper(\".mySwiper\", {\r\n        slidesPerView: 2,\r\n        spaceBetween: 0,\r\n        slidesPerGroup: 1,\r\n        loop: true,\r\n        loopFillGroupWithBlank: true,\r\n        pagination: {\r\n            el: \".swiper-pagination\",\r\n            clickable: true,\r\n        },\r\n        navigation: {\r\n            nextEl: \".swiper-button-next\",\r\n            prevEl: \".swiper-button-prev\",\r\n        },\r\n        breakpoints: {\r\n            // when window width is >= 320px\r\n            900: {\r\n                slidesPerView: 2,\r\n                spaceBetween: 30,\r\n            },\r\n            // when window width is >= 480px\r\n            768: {\r\n                slidesPerView: 1,\r\n                spaceBetween: 10,\r\n            },\r\n            // when window width is >= 640px\r\n            360: {\r\n                slidesPerView: 1,\r\n                spaceBetween: 20,\r\n            },\r\n        },\r\n    });\r\n}\n\n//# sourceURL=webpack://musicalizando/./js/swiper.js?");

/***/ }),

/***/ "./js/typewriter.js":
/*!**************************!*\
  !*** ./js/typewriter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTypeweriter)\n/* harmony export */ });\nfunction initTypeweriter() {\r\n\r\n}\r\nconst time = 100\r\nfunction typewriter(element) {\r\n    const textArray = element.innerHTML.split('')\r\n    element.innerHTML = ''\r\n    textArray.forEach((letter, index) => {\r\n        setTimeout(() => {\r\n            element.innerHTML += letter\r\n        }, time * index)\r\n    })\r\n}\r\ntypewriter(document.querySelector('[data-anime=\"typewriter-p\"]'))\r\n\n\n//# sourceURL=webpack://musicalizando/./js/typewriter.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/scripts.js");
/******/ 	
/******/ })()
;