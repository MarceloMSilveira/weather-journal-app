"use strict";
self["webpackHotUpdatems1_weather_journal_app"]("main",{

/***/ "./frontend/app.js":
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

function setCurrentYearInFooter() {
  const spanElement = document.querySelector("#this-year");
  const thisYear = new Date().getFullYear();
  console.log('test');
  console.log(thisYear);
  spanElement.textContent = thisYear;
}

setCurrentYearInFooter();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frontend/style.css */ "./frontend/style.css");
/* harmony import */ var _frontend_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frontend/app.js */ "./frontend/app.js");



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("324223a367ede8867477")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bedcb866e2f64c62c223.hot-update.js.map