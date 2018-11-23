var sd =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict;\"\r\n\r\nconst swipe = __webpack_require__(/*! ./swipe */ \"./src/swipe.js\"),\r\n    parallax = __webpack_require__(/*! ./parallax */ \"./src/parallax.js\"),\r\n    slider = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\r\n\r\nexports.goTo = swipe.goTo;\r\nexports.showValue = slider.showValue;\r\n\n\n//# sourceURL=webpack://sd/./src/index.js?");

/***/ }),

/***/ "./src/parallax.js":
/*!*************************!*\
  !*** ./src/parallax.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const parallaxContainer = document.querySelector('.slide__second-wrapper'),\r\n\r\n    /**\r\n     * slideParalax - move parallax elements with another speed\r\n     */\r\n    slideParalax = () => {\r\n        const windowYOffset = window.pageYOffset;\r\n        parallaxContainer.style.top = (-windowYOffset * .5 + 400) + \"px\";\r\n    };\r\n\r\n\r\nwindow.onscroll = slideParalax;\r\n\n\n//# sourceURL=webpack://sd/./src/parallax.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * moveTabs - переключение между вкладками\r\n * @param {type} offset Description\r\n * @return {type} Description\r\n */\r\nconst moveTabs = (offset) => {\r\n        const tabs = document.querySelectorAll('.tab');\r\n\r\n        tabs.forEach((tab) => {\r\n            tab.style.transition = \"1s\"\r\n            tab.style.left = offset + \"px\";\r\n        });\r\n    },\r\n\r\n    /**\r\n     * showValue - управление слайдером\r\n     * @param {type} val     значение input-range\r\n     * @param {type} isinput режим oninput/onchange\r\n     * @return {type} Description\r\n     */\r\n    showValue = (val, isinput) => {\r\n        // src: https://css-tricks.com/custom-interactive-range-inputs/\r\n\r\n        let offset = 0;\r\n\r\n        if(!isinput) {\r\n            if(val >= 0 && val < 25) {\r\n                val = 0;\r\n            }\r\n            else if(val >= 25 && val <= 75) {\r\n                val = 50;\r\n            }\r\n            else if(val > 75 && val <= 100) {\r\n                val = 100;\r\n            }\r\n        }\r\n        else {\r\n            if(val >= 0 && val < 25) {\r\n                offset = 0;\r\n            }\r\n            else if(val >= 25 && val <= 75) {\r\n                offset = -1024;\r\n            }\r\n            else if(val > 75 && val <= 100) {\r\n                offset = -2048;\r\n            }\r\n            moveTabs(offset);\r\n        }\r\n        /* setup variables for the elements of our slider */\r\n        const thumb = document.getElementById(\"sliderthumb\"),\r\n            shell = document.getElementById(\"slidershell\"),\r\n            track = document.getElementById(\"slidertrack\"),\r\n            fill = document.getElementById(\"sliderfill\"),\r\n            slider = document.getElementById(\"slider\"),\r\n\r\n            pc = val/(slider.max - slider.min), /* the percentage slider value */\r\n            thumbsize = 43, /* must match the thumb size in your css */\r\n            bigval = 640, /* widest or tallest value depending on orientation */\r\n            smallval = 12, /* narrowest or shortest value depending on orientation */\r\n            tracksize = bigval - thumbsize,\r\n            fillsize = 12,\r\n            filloffset = 10,\r\n            bordersize = 2,\r\n            loc = pc * tracksize;\r\n\r\n        thumb.style.top =  \"-3px\";\r\n        thumb.style.left = loc-3 + \"px\";\r\n        fill.style.top = filloffset + bordersize + \"px\";\r\n        fill.style.left = 0 + \"px\";\r\n        fill.style.width = loc + (thumbsize/2) + \"px\";\r\n        fill.style.height = fillsize + \"px\";\r\n        shell.style.height = smallval + \"px\";\r\n        shell.style.width = bigval + \"px\";\r\n        track.style.height = fillsize + \"px\";\r\n        track.style.width = bigval - 4 + \"px\";\r\n        track.style.left = 0 + \"px\";\r\n        track.style.top = filloffset + bordersize + \"px\";\r\n    },\r\n\r\n    /**\r\n     * setValue -  установка начального значения\r\n     * @param {type} val  значение input range\r\n     * @param {type} mode режим oninput/onchange\r\n     * @return {type} Description\r\n     */\r\n    setValue = (val, mode) => {\r\n        document.getElementById(\"slider\").value = val;\r\n        showValue(val, mode);\r\n    };\r\n\r\ndocument.addEventListener('DOMContentLoaded', function(){\r\n    setValue(0,false);\r\n});\r\n\r\nexports.showValue = showValue;\r\n\n\n//# sourceURL=webpack://sd/./src/slider.js?");

/***/ }),

/***/ "./src/swipe.js":
/*!**********************!*\
  !*** ./src/swipe.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let y0 = null,\r\n    dif = null,\r\n    position = 0;\r\n\r\nconst _C = document.querySelector('.slide'),\r\n     N = 3,\r\n     pageDownArrowContainer = document.querySelector('.slide__page-down'),\r\n\r\n    unify = (e) => {\treturn e.changedTouches ? e.changedTouches[0] : e },\r\n\r\n    /**\r\n     * getPosition - get current position\r\n     * @param {object} e event element\r\n     */\r\n    getPosition = (e) => {\r\n        y0 = unify(e).clientY;\r\n    },\r\n\r\n   /**\r\n    * drag - event on touch or mousedown\r\n    * @param {object} e event element\r\n    */\r\n    drag = (e) => {\r\n        const touchTrack = Math.round(unify(e).clientY- y0);\r\n        if(touchTrack > 40 && position > 0) {\r\n            dif = -768;\r\n        }\r\n        else if (touchTrack < -40 && position < 768*(N-1)) {\r\n            dif = 768;\r\n        }\r\n        else {\r\n            dif = 0;\r\n        }\r\n    },\r\n\r\n    /**\r\n     * move - move slide on next/prev page\r\n     * @param {object} e event element\r\n     */\r\n    move = (e) => {\r\n        console.log(dif != 0 && e.target.nodeName != 'BUTTON');\r\n        if (dif != 0 && e.target.nodeName != 'BUTTON') {\r\n            position = Math.abs(position + dif);\r\n            goTo(null, position);\r\n        }\r\n    },\r\n\r\n    /**\r\n     * hidePageDownArrow - hide block when last page\r\n     */\r\n    hidePageDownArrow = () => {\r\n        pageDownArrowContainer.style.display = 'none';\r\n    },\r\n\r\n    /**\r\n     * showPageDownArrow - show block when non last page\r\n     */\r\n    showPageDownArrow = () => {\r\n        pageDownArrowContainer.style.display = 'block';\r\n    },\r\n\r\n    /**\r\n     * setActiveButton - change buttons color\r\n     * @param {object} index - current page index\r\n     */\r\n    setActiveButton = (index) => {\r\n        const navButtons = document.querySelectorAll(\".slide__navigation-button\");\r\n\r\n        navButtons.forEach((btn) => {\r\n            btn.classList.remove('active');\r\n        });\r\n        navButtons[index].classList.add('active');\r\n    },\r\n\r\n    /**\r\n     * goTo - got to page by index or position\r\n     * @param {number} index - current page index\r\n     * @param {number} pos - position in px\r\n     */\r\n    goTo = (index, pos) => {\r\n\r\n        position = pos || 768 * index;\r\n        window.scrollTo({\r\n            top: position,\r\n            behavior: 'smooth'\r\n        });\r\n        console.log(dif, index, position);\r\n        index = index || position/768;\r\n        if(index != 0) {\r\n            hidePageDownArrow();\r\n        }\r\n        else {\r\n            showPageDownArrow();\r\n        }\r\n\r\n        setActiveButton(index);\r\n    };\r\n\r\n_C.addEventListener('touchstart', getPosition, false);\r\n\r\n_C.addEventListener('touchmove', drag, false);\r\n\r\n_C.addEventListener('touchend', move, false);\r\n\r\ngoTo(0);\r\n\r\nexports.goTo = goTo;\r\n\n\n//# sourceURL=webpack://sd/./src/swipe.js?");

/***/ })

/******/ });