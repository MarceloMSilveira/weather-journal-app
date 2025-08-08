"use strict";
self["webpackHotUpdatems1_weather_journal_app"]("main",{

/***/ "./frontend/app.js":
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _date_time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date_time.js */ "./frontend/date_time.js");
/* zip for tests:  
  miami: 33101 
33125-1234 (Miami)
  Orlando: 32801
32801-5678 (Orlando)

10001-0001 (New York)
10001 (Manhattan)

https://api.openweathermap.org/data/2.5/weather?zip=32801,us&appid=dd6c3ba86f66f547459582b843e14bc8
*/

//imports



/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const apikey = 'dd6c3ba86f66f547459582b843e14bc8';
async function setUI() {
  const [allResults] = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('http://localhost:3010/all');
  console.log(allResults[0].place);

  // const placeDiv = document.querySelector('#results .place');
  // placeDiv.textContent = allData.place;

  // const dateDiv = document.querySelector('#results .date');
  // dateDiv.textContent = allData.date;

  // const temperatureDiv = document.querySelector('#results .temperature');
  // temperatureDiv.textContent = allData.temperature;

  // const feelingsDiv = document.querySelector('#results .feelings');
  // feelingsDiv.textContent = allData.feelings;
}
function toCelsius(k) {
  return k - 273.15;
}
async function getUserData(evt) {
  evt.preventDefault();
  const zip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=dd6c3ba86f66f547459582b843e14bc8`;
  const {
    data: result
  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(weatherUrl);
  const temperature = toCelsius(result.main.temp);
  const resultObj = {
    feelings: feelings,
    place: result.name,
    temperature: Math.round(temperature),
    date: (0,_date_time_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
  };
  await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('http://localhost:3010/setData', resultObj);
  await setUI();
}
const form = document.getElementById('entriesForm');
form.addEventListener('submit', getUserData);
function setCurrentYearInFooter() {
  const spanElement = document.querySelector("#this-year");
  const thisYear = new Date().getFullYear();
  //console.log('test');
  //console.log(thisYear);
  spanElement.textContent = thisYear;
}
async function getWeather(zipCode) {
  const fullUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=dd6c3ba86f66f547459582b843e14bc8`;
  const {
    data: result
  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(fullUrl);
  //console.log(result.name);
}
setCurrentYearInFooter();
//getWeather(33101);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b3e3795f924900572827")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5789550f0d45b9bc6a18.hot-update.js.map