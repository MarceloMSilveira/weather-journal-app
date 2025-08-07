"use strict";
self["webpackHotUpdatems1_weather_journal_app"]("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}

body{
    background: white;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#app{
    display: grid;
    grid-auto-rows: minmax(150px, auto);
    grid-template-columns: 50% 50%;
    height:90%;
    width: 80%;
    background: #FBF5DE;
    color: #3D74B6;
    justify-content: center;
    grid-gap: 1em;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
    grid-template-areas: 
    "header header"
    "entries results"
    "footer footer";
}

#app > div {
    display: flex;
}

#date{

}

#temp{

}

#content{

}

#zip, #feelings, .results {
    padding-left: 10px;
}

.headline {
    grid-area: header;
    flex-direction: row;
    justify-content: center;
    font-size: 3rem;
}

.user-entries {
    grid-area: entries;
    flex-direction: column;
    padding-left: 20px;
    width: 95%;
}

#results {
    grid-area: results;
    width: 95%;
    background: rgba(59, 74, 107, .4);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer {
    grid-area: footer;
    justify-content: center;
    align-items: end;
}

.buttons {
    display: flex;  
    justify-content: space-around;
}

.buttons > button {
    width: 30%;
    height: max-content;
}

.buttons > button:hover, .buttons > button:focus {
    font-weight: bolder;
    background-color: #2f3c59;
}

.title{

}

/*  Basic Styling To Override Default For Basic HTML Elements */
label{
    display:block;
    font-size: 27px;
}

input{
    display:block;
    height: 60px;
    /* width: 320px; */
    background:#22b2da;
    color: #f0d43a;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
    border: none;
}

button{
    width: 400px;
    height: 100px;
    background: #3b4a6b;
    color: #f0d43a;
    font-size: 26px;
    font-family: 'Oswald', sans-serif;
    border: none;
    box-shadow: 2px 4px 5px #444;
}
h1{
    font-size: 36px;
}

textarea{
    background:#22b2da;
    color: #f0d43a;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
    width: 100%;
}

#allEntries {
    display: grid;
    column-gap: 10px;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    width: 95%;
}

/* Reset style for HTML element on active to have no border*/
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
/* Style for Placeholder Text*/
::placeholder { /* Firefox, Chrome, Opera */ 
    color: #f0d43a; 
    font-family: 'Oswald', sans-serif;

} 
  
:-ms-input-placeholder { /* Internet Explorer 10-11 */ 
    color: #f0d43a; 
    font-family: 'Oswald', sans-serif;

} 
  
::-ms-input-placeholder { /* Microsoft Edge */ 
    color: #f0d43a; 
    font-family: 'Oswald', sans-serif;

} 

@media (max-width:700px) {
    #app{
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: 95%;
    font-size: 15px;
    font-family: 'Oswald', sans-serif;
    grid-template-areas: 
    "header"
    "entries"
    "results"
    "footer";
    }

    .user-entries {
        padding-left: 0px;
    }
}`, "",{"version":3,"sources":["webpack://./frontend/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;;AAEA;IACI,iBAAiB;IACjB,0DAA0D;IAC1D,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,8BAA8B;IAC9B,UAAU;IACV,UAAU;IACV,mBAAmB;IACnB,cAAc;IACd,uBAAuB;IACvB,aAAa;IACb,eAAe;IACf,iCAAiC;IACjC;;;mBAGe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;;AAEA;;AAEA,+DAA+D;AAC/D;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,iCAAiC;IACjC,YAAY;IACZ,4BAA4B;AAChC;AACA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,iCAAiC;IACjC,WAAW;AACf;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,8BAA8B;IAC9B,oBAAoB;IACpB,UAAU;AACd;;AAEA,4DAA4D;AAC5D;;;;IAII,aAAa;AACjB;AACA,8BAA8B;AAC9B,gBAAgB,2BAA2B;IACvC,cAAc;IACd,iCAAiC;;AAErC;;AAEA,yBAAyB,4BAA4B;IACjD,cAAc;IACd,iCAAiC;;AAErC;;AAEA,0BAA0B,mBAAmB;IACzC,cAAc;IACd,iCAAiC;;AAErC;;AAEA;IACI;IACA,mCAAmC;IACnC,0BAA0B;IAC1B,eAAe;IACf,iCAAiC;IACjC;;;;YAIQ;IACR;;IAEA;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["html {\n  box-sizing: border-box;\n}\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nbody{\n    background: white;\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n#app{\n    display: grid;\n    grid-auto-rows: minmax(150px, auto);\n    grid-template-columns: 50% 50%;\n    height:90%;\n    width: 80%;\n    background: #FBF5DE;\n    color: #3D74B6;\n    justify-content: center;\n    grid-gap: 1em;\n    font-size: 20px;\n    font-family: 'Oswald', sans-serif;\n    grid-template-areas: \n    \"header header\"\n    \"entries results\"\n    \"footer footer\";\n}\n\n#app > div {\n    display: flex;\n}\n\n#date{\n\n}\n\n#temp{\n\n}\n\n#content{\n\n}\n\n#zip, #feelings, .results {\n    padding-left: 10px;\n}\n\n.headline {\n    grid-area: header;\n    flex-direction: row;\n    justify-content: center;\n    font-size: 3rem;\n}\n\n.user-entries {\n    grid-area: entries;\n    flex-direction: column;\n    padding-left: 20px;\n    width: 95%;\n}\n\n#results {\n    grid-area: results;\n    width: 95%;\n    background: rgba(59, 74, 107, .4);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.footer {\n    grid-area: footer;\n    justify-content: center;\n    align-items: end;\n}\n\n.buttons {\n    display: flex;  \n    justify-content: space-around;\n}\n\n.buttons > button {\n    width: 30%;\n    height: max-content;\n}\n\n.buttons > button:hover, .buttons > button:focus {\n    font-weight: bolder;\n    background-color: #2f3c59;\n}\n\n.title{\n\n}\n\n/*  Basic Styling To Override Default For Basic HTML Elements */\nlabel{\n    display:block;\n    font-size: 27px;\n}\n\ninput{\n    display:block;\n    height: 60px;\n    /* width: 320px; */\n    background:#22b2da;\n    color: #f0d43a;\n    font-size: 20px;\n    font-family: 'Oswald', sans-serif;\n    border: none;\n}\n\nbutton{\n    width: 400px;\n    height: 100px;\n    background: #3b4a6b;\n    color: #f0d43a;\n    font-size: 26px;\n    font-family: 'Oswald', sans-serif;\n    border: none;\n    box-shadow: 2px 4px 5px #444;\n}\nh1{\n    font-size: 36px;\n}\n\ntextarea{\n    background:#22b2da;\n    color: #f0d43a;\n    font-size: 20px;\n    font-family: 'Oswald', sans-serif;\n    width: 100%;\n}\n\n#allEntries {\n    display: grid;\n    column-gap: 10px;\n    grid-template-columns: 1fr 1fr;\n    justify-items: start;\n    width: 95%;\n}\n\n/* Reset style for HTML element on active to have no border*/\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n/* Style for Placeholder Text*/\n::placeholder { /* Firefox, Chrome, Opera */ \n    color: #f0d43a; \n    font-family: 'Oswald', sans-serif;\n\n} \n  \n:-ms-input-placeholder { /* Internet Explorer 10-11 */ \n    color: #f0d43a; \n    font-family: 'Oswald', sans-serif;\n\n} \n  \n::-ms-input-placeholder { /* Microsoft Edge */ \n    color: #f0d43a; \n    font-family: 'Oswald', sans-serif;\n\n} \n\n@media (max-width:700px) {\n    #app{\n    grid-auto-rows: minmax(100px, auto);\n    grid-template-columns: 95%;\n    font-size: 15px;\n    font-family: 'Oswald', sans-serif;\n    grid-template-areas: \n    \"header\"\n    \"entries\"\n    \"results\"\n    \"footer\";\n    }\n\n    .user-entries {\n        padding-left: 0px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5789550f0d45b9bc6a18")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.71f8bf1d19dc7aa22101.hot-update.js.map