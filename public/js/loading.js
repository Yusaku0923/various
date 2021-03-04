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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/loading.js":
/*!*********************************!*\
  !*** ./resources/js/loading.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  var h = $(window).height();
  $('#wrap').css('display', 'none');
  $('#loader-bg ,#loader').height(h).css('display', 'block');
});
$(window).load(function () {
  //全ての読み込みが完了したら実行
  // sleep(300000);
  $('.right-upper-tx').delay(4000).queue(function () {
    $(this).show(); // はいチーズ表示

    $('.loading-tx').hide();
    $('.complete-tx').show();
  }); // $('#flash').delay(4900).queue(function() {

  $('.p-flash').delay(5500).queue(function () {
    $(this).toggleClass('open');
    $('#loader-bg').delay(500).fadeOut(100);
    $('#loader').delay(500).fadeOut(100);
    $('#wrap').css('display', 'block');
    $('#flash').delay(1500).fadeOut(1000);
  }); // $('#loader-bg').delay(4900).fadeOut(800);
  // $('#loader').delay(4600).fadeOut(300);
  // $('#wrap').css('display', 'block');
});

function sleep(waitMsec) {
  var startMsec = new Date();
  console.log('a'); // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）

  while (new Date() - startMsec < waitMsec) {
    ;
  }
} //10秒たったら強制的にロード画面を非表示
// $(function(){
//   setTimeout('stopload()',10000);
// });
// function stopload(){
//   $('#wrap').css('display','block');
//   $('#loader-bg').delay(900).fadeOut(800);
//   $('#loader').delay(600).fadeOut(300);
// }

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./resources/js/loading.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pc021\Desktop\various\various\resources\js\loading.js */"./resources/js/loading.js");


/***/ })

/******/ });