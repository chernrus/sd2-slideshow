var slider =
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
/***/ (function(module, exports) {

eval("\"use strict;\"\r\n\r\n/**\r\n * moveTabs - переключение между вкладками\r\n * @param {type} offset Description\r\n * @return {type} Description\r\n */\r\nconst parallax = document.querySelector('.slide__second-wrapper'),\r\n\r\n    moveTabs = (offset) => {\r\n        const tabs = document.querySelectorAll('.tab');\r\n\r\n\r\n        tabs.forEach((tab) => {\r\n            tab.style.transition = \"1s\"\r\n            tab.style.left = offset + \"px\";\r\n        });\r\n    },\r\n\r\n    /**\r\n     * showValue - управление слайдером\r\n     * @param {type} val     значение input-range\r\n     * @param {type} isinput режим oninput/onchange\r\n     * @return {type} Description\r\n     */\r\n    showValue = (val, isinput) => {\r\n        // src: https://css-tricks.com/custom-interactive-range-inputs/\r\n\r\n        var offset = 0;\r\n\r\n        if(!isinput) {\r\n            if(val >= 0 && val < 25) {\r\n                val = 0;\r\n            }\r\n            else if(val >= 25 && val <= 75) {\r\n                val = 50;\r\n            }\r\n            else if(val > 75 && val <= 100) {\r\n                val = 100;\r\n            }\r\n        }\r\n        else {\r\n            if(val >= 0 && val < 25) {\r\n                offset = 0;\r\n            }\r\n            else if(val >= 25 && val <= 75) {\r\n                offset = -1024;\r\n            }\r\n            else if(val > 75 && val <= 100) {\r\n                offset = -2048;\r\n            }\r\n            moveTabs(offset);\r\n        }\r\n        /* setup variables for the elements of our slider */\r\n        var thumb = document.getElementById(\"sliderthumb\");\r\n        var shell = document.getElementById(\"slidershell\");\r\n        var track = document.getElementById(\"slidertrack\");\r\n        var fill = document.getElementById(\"sliderfill\");\r\n        // var rangevalue = document.getElementById(\"slidervalue\" + slidernum);\r\n        var slider = document.getElementById(\"slider\");\r\n\r\n        var pc = val/(slider.max - slider.min); /* the percentage slider value */\r\n        var thumbsize = 43; /* must match the thumb size in your css */\r\n        var bigval = 640; /* widest or tallest value depending on orientation */\r\n        var smallval = 12; /* narrowest or shortest value depending on orientation */\r\n        var tracksize = bigval - thumbsize;\r\n        var fillsize = 12;\r\n        var filloffset = 10;\r\n        var bordersize = 2;\r\n        var loc = pc * tracksize;\r\n\r\n        thumb.style.top =  \"-3px\";\r\n        thumb.style.left = loc-3 + \"px\";\r\n        fill.style.top = filloffset + bordersize + \"px\";\r\n        fill.style.left = 0 + \"px\";\r\n        fill.style.width = loc + (thumbsize/2) + \"px\";\r\n        fill.style.height = fillsize + \"px\";\r\n        shell.style.height = smallval + \"px\";\r\n        shell.style.width = bigval + \"px\";\r\n        track.style.height = fillsize + \"px\";\r\n        track.style.width = bigval - 4 + \"px\";\r\n        track.style.left = 0 + \"px\";\r\n        track.style.top = filloffset + bordersize + \"px\";\r\n    },\r\n\r\n    /**\r\n     * setValue -  установка начального значения\r\n     * @param {type} val  значение input range\r\n     * @param {type} mode режим oninput/onchange\r\n     * @return {type} Description\r\n     */\r\n    setValue = (val, mode) => {\r\n        document.getElementById(\"slider\").value = val;\r\n        showValue(val, mode);\r\n    },\r\n\r\n    slideParalax = () => {\r\n        const windowYOffset = window.pageYOffset;\r\n    \tparallax.style.top = (-windowYOffset * .5 + 400) + \"px\";\r\n        // console.log(windowYOffset, parallax.style.top);\r\n    };\r\n\r\ndocument.addEventListener('DOMContentLoaded', function(){\r\n  setValue(0,false);\r\n})\r\n\r\n\r\n\r\nwindow.onscroll = slideParalax;\r\n\r\nconst _C = document.querySelector('.slide'),\r\n      N = 3;\r\n\r\nlet i = 0, y0 = null, locked = false, dif = null, position = 0;\r\n\r\nfunction unify(e) {\treturn e.changedTouches ? e.changedTouches[0] : e };\r\n\r\nfunction lock(e) {\r\n    y0 = unify(e).clientY;\r\n    // position = e.offsetTop;\r\n    console.log(e);\r\n\t// _C.classList.toggle('smooth', !(locked = true))\r\n    console.log('touchstart');\r\n};\r\n\r\nfunction drag(e) {\r\n    console.log('move');\r\n\t// e.preventDefault();\r\n// // slideParalax();\r\n    console.log(`${Math.round(unify(e).clientY- y0)}px`);\r\n    // dif = Math.round(unify(e).clientY- y0) > 0 ?  : 768;\r\n    if(Math.round(unify(e).clientY- y0) > 50) {\r\n        dif = -768;\r\n    }\r\n    else if (Math.round(unify(e).clientY- y0) < -50 ) {\r\n        dif = 768;\r\n    }\r\n    else {\r\n        dif = 0;\r\n    }\r\n// \t// if(locked)\r\n// \t\t// _C.style.setProperty('--ty', `${Math.round(unify(e).clientY- y0)}px`)\r\n};\r\n\r\nfunction move(e) {\r\n    console.log('touchend');\r\n    let dy = unify(e).clientY - y0, s = Math.sign(dy);\r\n    console.log(position);\r\n\r\n    window.scrollTo({\r\n        top: position+dif,\r\n        behavior: 'smooth'\r\n    });\r\n\r\n    position = position + dif;\r\n  // if(locked) {\r\n  //   let dy = unify(e).clientY - y0, s = Math.sign(dy);\r\n  //   console.log(dy);\r\n  //   //\r\n  //   // if((i > 0 || s < 0) && (i < N - 1 || s > 0))\r\n  //   //   _C.style.setProperty('--i', i -= s);\r\n  //   // _C.style.setProperty('--ty', '0px');\r\n  //   // _C.classList.toggle('smooth', !(locked = false));\r\n  //   // y0 = null;\r\n  //\r\n  //   window.scrollTo({\r\n  //     top: dy+768,\r\n  //     behavior: 'smooth'\r\n  //   });\r\n  // }\r\n\r\n};\r\n\r\n_C.style.setProperty('--n', N);\r\n\r\n_C.addEventListener('mousedown', lock, false);\r\n_C.addEventListener('touchstart', lock, false);\r\n\r\n_C.addEventListener('mousemove', drag, false);\r\n_C.addEventListener('touchmove', drag, false);\r\n\r\n_C.addEventListener('mouseup', move, false);\r\n_C.addEventListener('touchend', move, false);\r\n\r\nexports.showValue = showValue;\r\n\n\n//# sourceURL=webpack://slider/./src/index.js?");

/***/ })

/******/ });