/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Global Styles */\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: 'Raleway', sans-serif;\r\n  background-color: #1d1d1d;\r\n}\r\n\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: inherit;\r\n  -moz-box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/* Header Styles */\r\n\r\n.header {\r\n  background-color: #000;\r\n  color: #919191;\r\n}\r\n\r\n.nav-ul {\r\n  display: flex;\r\n  width: 80%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.nav-ul li {\r\n  list-style: none;\r\n  margin-right: 65px;\r\n  padding: 1.1em 0;\r\n}\r\n\r\n.nav-ul li a {\r\n  color: #919191;\r\n  font-size: 1.2rem;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.title {\r\n  border: 2px solid black;\r\n  border-radius: 50%;\r\n}\r\n\r\n/* Call out styles */\r\n\r\n.callout {\r\n  padding-top: 1.2em;\r\n}\r\n\r\n.callout-content {\r\n  margin: 0 auto;\r\n  width: 55%;\r\n  color: #fff;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\r\n  padding-bottom: 2em;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.callout-header {\r\n  text-align: center;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 2.75em;\r\n  font-weight: 700;\r\n  text-shadow: 0 2px 2px rgb(0 0 0 / 40%);\r\n  margin: 0.5em 0;\r\n}\r\n\r\n.callout-copy {\r\n  color: #ccc;\r\n  width: 65%;\r\n  margin: 0 auto;\r\n  line-height: 1.4em;\r\n  letter-spacing: 0.5px;\r\n  margin-bottom: 1.3em;\r\n  text-align: center;\r\n}\r\n\r\n.callout-info {\r\n  font-size: 1em;\r\n  font-weight: 700;\r\n  color: #6ac045;\r\n  margin: 0 auto;\r\n  letter-spacing: 0.5px;\r\n  text-align: center;\r\n}\r\n\r\n/* Movie section styles */\r\n\r\n.movie-section-title {\r\n  text-align: center;\r\n  color: #fff;\r\n  padding-bottom: 1.2em;\r\n}\r\n\r\n.movie-section-title span {\r\n  font-size: 1.15em;\r\n  font-weight: 700;\r\n}\r\n\r\n.fa-star {\r\n  color: #6ac045;\r\n  padding-right: 0.4em;\r\n}\r\n\r\n.movies {\r\n  margin: 0 auto;\r\n  width: 65%;\r\n  color: #fff;\r\n  display: grid;\r\n  grid-template-columns: 23% 23% 23% 23%;\r\n  grid-gap: 20px 20px;\r\n  grid-auto-flow: row;\r\n}\r\n\r\n/* Movie Wrapper overlay styles */\r\n.movie-image-div {\r\n  position: relative;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movie-image-div:hover {\r\n  border: 4px solid #6ac045;\r\n}\r\n\r\n.details-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  font-family: 'Raleway', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: opacity 0.35s;\r\n}\r\n\r\n.details-overlay > * {\r\n  transform: translateY(20px);\r\n  transition: transform 0.35s;\r\n}\r\n\r\n.details-overlay:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.details-overlay:hover > * {\r\n  transform: translateY(0);\r\n}\r\n\r\n.movie-image {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.overlay-star {\r\n  padding-bottom: 0.2em;\r\n}\r\n\r\n.movie-overlay-rating {\r\n  padding-bottom: 1.1em;\r\n  font-size: 1.7em;\r\n  font-weight: bold;\r\n}\r\n\r\n.movie-overlay-genre {\r\n  padding-bottom: 1.1em;\r\n  font-size: 2.3em;\r\n  font-weight: bold;\r\n}\r\n\r\n.ovelay-details-btn {\r\n  color: #fff;\r\n  padding: 0.5em 1.3em;\r\n  background: #6ac045;\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Movie Wrapper styles */\r\n.movie-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.8em;\r\n}\r\n\r\n.movie-title {\r\n  font-family: 'Raleway', sans-serif;\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-bottom: 1em;\r\n  align-items: center;\r\n}\r\n\r\n.movie-likes {\r\n  padding-left: 0.5em;\r\n}\r\n\r\n.commentBtn {\r\n  color: #fff;\r\n  padding: 0.5em;\r\n  background: #36b37f;\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n.commentBtn:hover {\r\n  box-shadow: 0 8px 16px rgba(54, 179, 127, 0.24);\r\n}\r\n\r\n/* Footer Styles */\r\nfooter {\r\n  margin-top: auto;\r\n  background: #c1c7d0b9;\r\n}\r\n\r\nfooter p {\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Global Styles */\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: 'Raleway', sans-serif;\r\n  background-color: #1d1d1d;\r\n}\r\n\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: inherit;\r\n  -moz-box-sizing: inherit;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/* Header Styles */\r\n\r\n.header {\r\n  background-color: #000;\r\n  color: #919191;\r\n}\r\n\r\n.nav-ul {\r\n  display: flex;\r\n  width: 80%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.nav-ul li {\r\n  list-style: none;\r\n  margin-right: 65px;\r\n  padding: 1.1em 0;\r\n}\r\n\r\n.nav-ul li a {\r\n  color: #919191;\r\n  font-size: 1.2rem;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.title {\r\n  border: 2px solid black;\r\n  border-radius: 50%;\r\n}\r\n\r\n/* Call out styles */\r\n\r\n.callout {\r\n  padding-top: 1.2em;\r\n}\r\n\r\n.callout-content {\r\n  margin: 0 auto;\r\n  width: 55%;\r\n  color: #fff;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\r\n  padding-bottom: 2em;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.callout-header {\r\n  text-align: center;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 2.75em;\r\n  font-weight: 700;\r\n  text-shadow: 0 2px 2px rgb(0 0 0 / 40%);\r\n  margin: 0.5em 0;\r\n}\r\n\r\n.callout-copy {\r\n  color: #ccc;\r\n  width: 65%;\r\n  margin: 0 auto;\r\n  line-height: 1.4em;\r\n  letter-spacing: 0.5px;\r\n  margin-bottom: 1.3em;\r\n  text-align: center;\r\n}\r\n\r\n.callout-info {\r\n  font-size: 1em;\r\n  font-weight: 700;\r\n  color: #6ac045;\r\n  margin: 0 auto;\r\n  letter-spacing: 0.5px;\r\n  text-align: center;\r\n}\r\n\r\n/* Movie section styles */\r\n\r\n.movie-section-title {\r\n  text-align: center;\r\n  color: #fff;\r\n  padding-bottom: 1.2em;\r\n}\r\n\r\n.movie-section-title span {\r\n  font-size: 1.15em;\r\n  font-weight: 700;\r\n}\r\n\r\n.fa-star {\r\n  color: #6ac045;\r\n  padding-right: 0.4em;\r\n}\r\n\r\n.movies {\r\n  margin: 0 auto;\r\n  width: 65%;\r\n  color: #fff;\r\n  display: grid;\r\n  grid-template-columns: 23% 23% 23% 23%;\r\n  grid-gap: 20px 20px;\r\n  grid-auto-flow: row;\r\n}\r\n\r\n/* Movie Wrapper overlay styles */\r\n.movie-image-div {\r\n  position: relative;\r\n  border: 4px solid #fff;\r\n}\r\n\r\n.movie-image-div:hover {\r\n  border: 4px solid #6ac045;\r\n}\r\n\r\n.details-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\r\n  color: #fff;\r\n  font-family: 'Raleway', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0;\r\n  transition: opacity 0.35s;\r\n}\r\n\r\n.details-overlay > * {\r\n  transform: translateY(20px);\r\n  transition: transform 0.35s;\r\n}\r\n\r\n.details-overlay:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.details-overlay:hover > * {\r\n  transform: translateY(0);\r\n}\r\n\r\n.movie-image {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.overlay-star {\r\n  padding-bottom: 0.2em;\r\n}\r\n\r\n.movie-overlay-rating {\r\n  padding-bottom: 1.1em;\r\n  font-size: 1.7em;\r\n  font-weight: bold;\r\n}\r\n\r\n.movie-overlay-genre {\r\n  padding-bottom: 1.1em;\r\n  font-size: 2.3em;\r\n  font-weight: bold;\r\n}\r\n\r\n.ovelay-details-btn {\r\n  color: #fff;\r\n  padding: 0.5em 1.3em;\r\n  background: #6ac045;\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Movie Wrapper styles */\r\n.movie-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.8em;\r\n}\r\n\r\n.movie-title {\r\n  font-family: 'Raleway', sans-serif;\r\n  padding: 0.5em 0;\r\n}\r\n\r\n.likes-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-bottom: 1em;\r\n  align-items: center;\r\n}\r\n\r\n.movie-likes {\r\n  padding-left: 0.5em;\r\n}\r\n\r\n.commentBtn {\r\n  color: #fff;\r\n  padding: 0.5em;\r\n  background: #36b37f;\r\n  border-radius: 4px;\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 700;\r\n  line-height: 1.5em;\r\n  cursor: pointer;\r\n}\r\n\r\n.commentBtn:hover {\r\n  box-shadow: 0 8px 16px rgba(54, 179, 127, 0.24);\r\n}\r\n\r\n/* Footer Styles */\r\nfooter {\r\n  margin-top: auto;\r\n  background: #c1c7d0b9;\r\n}\r\n\r\nfooter p {\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/display-movies.js":
/*!***************************************!*\
  !*** ./src/modules/display-movies.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const movieContainer = document.querySelector('.movies');

const displayMovies = async (sampleMovies) => {
  sampleMovies.forEach((movie) => {
    const movieWrapper = document.createElement('div');
    movieWrapper.id = `movie_${movie.id}`;
    movieWrapper.className = 'movie-wrapper';

    const movieImgDiv = document.createElement('div');
    movieImgDiv.className = 'movie-image-div';

    const movieImg = document.createElement('img');
    movieImg.src = movie.image.medium;
    movieImg.className = 'movie-image';
    movieImgDiv.appendChild(movieImg);

    const movieImgOverlay = document.createElement('div');
    movieImgOverlay.className = 'details-overlay';
    const ratingStar = document.createElement('i');
    ratingStar.classList.add('fa-solid');
    ratingStar.classList.add('fa-star');
    ratingStar.classList.add('overlay-star');
    const movieRating = document.createElement('span');
    movieRating.className = 'movie-overlay-rating';
    if (movie.rating.average) {
      movieRating.innerHTML = `${movie.rating.average} / 10`;
    } else {
      movieRating.innerHTML = '0 / 10';
    }
    const movieGenre = document.createElement('span');
    movieGenre.className = 'movie-overlay-genre';
    movieGenre.innerHTML = `${movie.genres[0]}`;
    const movieDetailsBtn = document.createElement('button');
    movieDetailsBtn.className = 'ovelay-details-btn';
    movieDetailsBtn.innerHTML = 'View Details';

    movieImgOverlay.appendChild(ratingStar);
    movieImgOverlay.appendChild(movieRating);
    movieImgOverlay.appendChild(movieGenre);
    movieImgOverlay.appendChild(movieDetailsBtn);
    movieImgDiv.appendChild(movieImgOverlay);

    movieWrapper.appendChild(movieImgDiv);

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = `${movie.name}`;
    movieTitle.className = 'movie-title';
    movieWrapper.appendChild(movieTitle);

    const likesContainer = document.createElement('div');
    likesContainer.className = 'likes-container';
    const likeBtn = document.createElement('i');
    likeBtn.classList.add('fa-solid');
    likeBtn.classList.add('fa-heart');
    likeBtn.style.cursor = 'pointer';
    likeBtn.id = `${movieWrapper.id}`;
    likesContainer.appendChild(likeBtn);

    const movieLikes = document.createElement('span');
    movieLikes.className = 'movie-likes';
    movieLikes.textContent = '3 likes';
    likesContainer.appendChild(movieLikes);
    movieWrapper.appendChild(likesContainer);

    const commentBtn = document.createElement('button');
    commentBtn.innerHTML = 'Comment on Movie';
    commentBtn.className = 'commentBtn';
    movieWrapper.appendChild(commentBtn);

    movieContainer.appendChild(movieWrapper);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);


/***/ }),

/***/ "./src/modules/get-movies.js":
/*!***********************************!*\
  !*** ./src/modules/get-movies.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const endPoint = 'https://api.tvmaze.com/shows?page=1';
const getMovies = async () => {
  const res = await fetch(endPoint);
  const data = res.json();
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);

/***/ }),

/***/ "./src/modules/movie-modal.js":
/*!************************************!*\
  !*** ./src/modules/movie-modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const movieModal = async (commentButtons, sampleMovies) => { //eslint-disable-line
  commentButtons.forEach((button, i) => { //eslint-disable-line
    button.addEventListener('click', async () => {
      alert('I have been clicked');
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieModal);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_get_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get-movies */ "./src/modules/get-movies.js");
/* harmony import */ var _modules_display_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display-movies */ "./src/modules/display-movies.js");
/* harmony import */ var _modules_movie_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/movie-modal */ "./src/modules/movie-modal.js");





window.addEventListener('load', async () => {
  const movies = await (0,_modules_get_movies__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const sampleMovies = movies.slice(0, 12);
  await (0,_modules_display_movies__WEBPACK_IMPORTED_MODULE_2__["default"])(sampleMovies);

  const commentButtons = [...document.querySelectorAll('.commentBtn')];
  (0,_modules_movie_modal__WEBPACK_IMPORTED_MODULE_3__["default"])(commentButtons, sampleMovies);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDd0I7QUFDUTtBQUNOO0FBQy9DO0FBQ0E7QUFDQSx1QkFBdUIsK0RBQVM7QUFDaEM7QUFDQSxRQUFRLG1FQUFhO0FBQ3JCO0FBQ0E7QUFDQSxFQUFFLGdFQUFVO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LW1vdmllcy5qcyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9nZXQtbW92aWVzLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL21vdmllLW1vZGFsLmpzIiwid2VicGFjazovL3N0cmVhbS1pdC1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3RyZWFtLWl0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdHJlYW0taXQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHbG9iYWwgU3R5bGVzICovXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgU3R5bGVzICovXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgY29sb3I6ICM5MTkxOTE7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi11bCBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA2NXB4O1xcclxcbiAgcGFkZGluZzogMS4xZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi11bCBsaSBhIHtcXHJcXG4gIGNvbG9yOiAjOTE5MTkxO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi8qIENhbGwgb3V0IHN0eWxlcyAqL1xcclxcblxcclxcbi5jYWxsb3V0IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGxvdXQtY29udGVudCB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiA1NSU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsbG91dC1oZWFkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMi43NWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiKDAgMCAwIC8gNDAlKTtcXHJcXG4gIG1hcmdpbjogMC41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbGxvdXQtY29weSB7XFxyXFxuICBjb2xvcjogI2NjYztcXHJcXG4gIHdpZHRoOiA2NSU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuM2VtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsbG91dC1pbmZvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGNvbG9yOiAjNmFjMDQ1O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIE1vdmllIHNlY3Rpb24gc3R5bGVzICovXFxyXFxuXFxyXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1zZWN0aW9uLXRpdGxlIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjE1ZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtc3RhciB7XFxyXFxuICBjb2xvcjogIzZhYzA0NTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVzIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDY1JTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMlIDIzJSAyMyUgMjMlO1xcclxcbiAgZ3JpZC1nYXA6IDIwcHggMjBweDtcXHJcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxyXFxufVxcclxcblxcclxcbi8qIE1vdmllIFdyYXBwZXIgb3ZlcmxheSBzdHlsZXMgKi9cXHJcXG4ubW92aWUtaW1hZ2UtZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbWFnZS1kaXY6aG92ZXIge1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgIzZhYzA0NTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5ID4gKiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLW92ZXJsYXk6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciA+ICoge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW1hZ2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXktc3RhciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1vdmVybGF5LXJhdGluZyB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMS4xZW07XFxyXFxuICBmb250LXNpemU6IDEuN2VtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1vdmVybGF5LWdlbnJlIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMi4zZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZWxheS1kZXRhaWxzLWJ0biB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDEuM2VtO1xcclxcbiAgYmFja2dyb3VuZDogIzZhYzA0NTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb3ZpZSBXcmFwcGVyIHN0eWxlcyAqL1xcclxcbi5tb3ZpZS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMC44ZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1saWtlcyB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ0biB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZDogIzM2YjM3ZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ0bjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoNTQsIDE3OSwgMTI3LCAwLjI0KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyIFN0eWxlcyAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZDogI2MxYzdkMGI5O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0NBQWtD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Q1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBTdHlsZXMgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBjb2xvcjogIzkxOTE5MTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi11bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDY1cHg7XFxyXFxuICBwYWRkaW5nOiAxLjFlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXVsIGxpIGEge1xcclxcbiAgY29sb3I6ICM5MTkxOTE7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ2FsbCBvdXQgc3R5bGVzICovXFxyXFxuXFxyXFxuLmNhbGxvdXQge1xcclxcbiAgcGFkZGluZy10b3A6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsbG91dC1jb250ZW50IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDU1JTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jYWxsb3V0LWhlYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAyLjc1ZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoMCAwIDAgLyA0MCUpO1xcclxcbiAgbWFyZ2luOiAwLjVlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FsbG91dC1jb3B5IHtcXHJcXG4gIGNvbG9yOiAjY2NjO1xcclxcbiAgd2lkdGg6IDY1JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4zZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYWxsb3V0LWluZm8ge1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6ICM2YWMwNDU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgc2VjdGlvbiBzdHlsZXMgKi9cXHJcXG5cXHJcXG4ubW92aWUtc2VjdGlvbi10aXRsZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXNlY3Rpb24tdGl0bGUgc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuMTVlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5mYS1zdGFyIHtcXHJcXG4gIGNvbG9yOiAjNmFjMDQ1O1xcclxcbiAgcGFkZGluZy1yaWdodDogMC40ZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogNjUlO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMyUgMjMlIDIzJSAyMyU7XFxyXFxuICBncmlkLWdhcDogMjBweCAyMHB4O1xcclxcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLyogTW92aWUgV3JhcHBlciBvdmVybGF5IHN0eWxlcyAqL1xcclxcbi5tb3ZpZS1pbWFnZS1kaXYge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWltYWdlLWRpdjpob3ZlciB7XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCAjNmFjMDQ1O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLW92ZXJsYXkgPiAqIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtb3ZlcmxheTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1vdmVybGF5OmhvdmVyID4gKiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheS1zdGFyIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLW92ZXJsYXktcmF0aW5nIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxLjFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLW92ZXJsYXktZ2VucmUge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEuMWVtO1xcclxcbiAgZm9udC1zaXplOiAyLjNlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlbGF5LWRldGFpbHMtYnRuIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMS4zZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAjNmFjMDQ1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIE1vdmllIFdyYXBwZXIgc3R5bGVzICovXFxyXFxuLm1vdmllLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWxpa2VzIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnRuIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzZiMzdmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnRuOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSg1NCwgMTc5LCAxMjcsIDAuMjQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgU3R5bGVzICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiAjYzFjN2QwYjk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBtb3ZpZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZXMnKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlNb3ZpZXMgPSBhc3luYyAoc2FtcGxlTW92aWVzKSA9PiB7XHJcbiAgc2FtcGxlTW92aWVzLmZvckVhY2goKG1vdmllKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZpZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vdmllV3JhcHBlci5pZCA9IGBtb3ZpZV8ke21vdmllLmlkfWA7XHJcbiAgICBtb3ZpZVdyYXBwZXIuY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXInO1xyXG5cclxuICAgIGNvbnN0IG1vdmllSW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb3ZpZUltZ0Rpdi5jbGFzc05hbWUgPSAnbW92aWUtaW1hZ2UtZGl2JztcclxuXHJcbiAgICBjb25zdCBtb3ZpZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbW92aWVJbWcuc3JjID0gbW92aWUuaW1hZ2UubWVkaXVtO1xyXG4gICAgbW92aWVJbWcuY2xhc3NOYW1lID0gJ21vdmllLWltYWdlJztcclxuICAgIG1vdmllSW1nRGl2LmFwcGVuZENoaWxkKG1vdmllSW1nKTtcclxuXHJcbiAgICBjb25zdCBtb3ZpZUltZ092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vdmllSW1nT3ZlcmxheS5jbGFzc05hbWUgPSAnZGV0YWlscy1vdmVybGF5JztcclxuICAgIGNvbnN0IHJhdGluZ1N0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XHJcbiAgICByYXRpbmdTdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXInKTtcclxuICAgIHJhdGluZ1N0YXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1zdGFyJyk7XHJcbiAgICBjb25zdCBtb3ZpZVJhdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1vdmllUmF0aW5nLmNsYXNzTmFtZSA9ICdtb3ZpZS1vdmVybGF5LXJhdGluZyc7XHJcbiAgICBpZiAobW92aWUucmF0aW5nLmF2ZXJhZ2UpIHtcclxuICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gYCR7bW92aWUucmF0aW5nLmF2ZXJhZ2V9IC8gMTBgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbW92aWVSYXRpbmcuaW5uZXJIVE1MID0gJzAgLyAxMCc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtb3ZpZUdlbnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbW92aWVHZW5yZS5jbGFzc05hbWUgPSAnbW92aWUtb3ZlcmxheS1nZW5yZSc7XHJcbiAgICBtb3ZpZUdlbnJlLmlubmVySFRNTCA9IGAke21vdmllLmdlbnJlc1swXX1gO1xyXG4gICAgY29uc3QgbW92aWVEZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBtb3ZpZURldGFpbHNCdG4uY2xhc3NOYW1lID0gJ292ZWxheS1kZXRhaWxzLWJ0bic7XHJcbiAgICBtb3ZpZURldGFpbHNCdG4uaW5uZXJIVE1MID0gJ1ZpZXcgRGV0YWlscyc7XHJcblxyXG4gICAgbW92aWVJbWdPdmVybGF5LmFwcGVuZENoaWxkKHJhdGluZ1N0YXIpO1xyXG4gICAgbW92aWVJbWdPdmVybGF5LmFwcGVuZENoaWxkKG1vdmllUmF0aW5nKTtcclxuICAgIG1vdmllSW1nT3ZlcmxheS5hcHBlbmRDaGlsZChtb3ZpZUdlbnJlKTtcclxuICAgIG1vdmllSW1nT3ZlcmxheS5hcHBlbmRDaGlsZChtb3ZpZURldGFpbHNCdG4pO1xyXG4gICAgbW92aWVJbWdEaXYuYXBwZW5kQ2hpbGQobW92aWVJbWdPdmVybGF5KTtcclxuXHJcbiAgICBtb3ZpZVdyYXBwZXIuYXBwZW5kQ2hpbGQobW92aWVJbWdEaXYpO1xyXG5cclxuICAgIGNvbnN0IG1vdmllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgbW92aWVUaXRsZS50ZXh0Q29udGVudCA9IGAke21vdmllLm5hbWV9YDtcclxuICAgIG1vdmllVGl0bGUuY2xhc3NOYW1lID0gJ21vdmllLXRpdGxlJztcclxuICAgIG1vdmllV3JhcHBlci5hcHBlbmRDaGlsZChtb3ZpZVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBsaWtlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGlrZXNDb250YWluZXIuY2xhc3NOYW1lID0gJ2xpa2VzLWNvbnRhaW5lcic7XHJcbiAgICBjb25zdCBsaWtlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xyXG4gICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1oZWFydCcpO1xyXG4gICAgbGlrZUJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcbiAgICBsaWtlQnRuLmlkID0gYCR7bW92aWVXcmFwcGVyLmlkfWA7XHJcbiAgICBsaWtlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaWtlQnRuKTtcclxuXHJcbiAgICBjb25zdCBtb3ZpZUxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbW92aWVMaWtlcy5jbGFzc05hbWUgPSAnbW92aWUtbGlrZXMnO1xyXG4gICAgbW92aWVMaWtlcy50ZXh0Q29udGVudCA9ICczIGxpa2VzJztcclxuICAgIGxpa2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllTGlrZXMpO1xyXG4gICAgbW92aWVXcmFwcGVyLmFwcGVuZENoaWxkKGxpa2VzQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb21tZW50QnRuLmlubmVySFRNTCA9ICdDb21tZW50IG9uIE1vdmllJztcclxuICAgIGNvbW1lbnRCdG4uY2xhc3NOYW1lID0gJ2NvbW1lbnRCdG4nO1xyXG4gICAgbW92aWVXcmFwcGVyLmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xyXG5cclxuICAgIG1vdmllQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmllV3JhcHBlcik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TW92aWVzO1xyXG4iLCJjb25zdCBlbmRQb2ludCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzP3BhZ2U9MSc7XHJcbmNvbnN0IGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChlbmRQb2ludCk7XHJcbiAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNb3ZpZXM7IiwiY29uc3QgbW92aWVNb2RhbCA9IGFzeW5jIChjb21tZW50QnV0dG9ucywgc2FtcGxlTW92aWVzKSA9PiB7IC8vZXNsaW50LWRpc2FibGUtbGluZVxyXG4gIGNvbW1lbnRCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaSkgPT4geyAvL2VzbGludC1kaXNhYmxlLWxpbmVcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgYWxlcnQoJ0kgaGF2ZSBiZWVuIGNsaWNrZWQnKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW92aWVNb2RhbDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZ2V0TW92aWVzIGZyb20gJy4vbW9kdWxlcy9nZXQtbW92aWVzJztcclxuaW1wb3J0IGRpc3BsYXlNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXktbW92aWVzJztcclxuaW1wb3J0IG1vdmllTW9kYWwgZnJvbSAnLi9tb2R1bGVzL21vdmllLW1vZGFsJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IG1vdmllcyA9IGF3YWl0IGdldE1vdmllcygpO1xyXG4gIGNvbnN0IHNhbXBsZU1vdmllcyA9IG1vdmllcy5zbGljZSgwLCAxMik7XHJcbiAgYXdhaXQgZGlzcGxheU1vdmllcyhzYW1wbGVNb3ZpZXMpO1xyXG5cclxuICBjb25zdCBjb21tZW50QnV0dG9ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudEJ0bicpXTtcclxuICBtb3ZpZU1vZGFsKGNvbW1lbnRCdXR0b25zLCBzYW1wbGVNb3ZpZXMpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9