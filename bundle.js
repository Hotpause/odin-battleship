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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img.jpg */ "./src/img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Container styles */

/* Body styles */
body {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover; /* Cover the entire viewport with the background image */
  background-repeat: repeat; /* Prevent the background image from repeating */
  background-position: center center; /* Center the background image */
}

.game-container {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  /* border: 2px solid blue; */
}

.board-container {
  background-color: transparent;
  /* border: 2px solid red; */

  width: 45%;
}

/* Gameboard styles */
.gameboard {
  display: grid;
  grid-template-columns: repeat(10, 50px);
  gap: 5px;
  background-color: transparent;
  /* border: 1px solid orange; */
  justify-content: center;
}

.row {
  display: grid;
  grid-template-rows: repeat(10, 50px);
  /* border: 1px solid red; */
  gap: 5px;
}

#winnerMessage,
h1,
h2 {
  color: aliceblue;
  text-align: center;
  /* border: 1px solid green; */
  font-size: xx-large;
}

.cell {
  width: 50px;
  height: 50px;
  border-radius: 2px;
  /* border: 1px solid black; */
  box-sizing: border-box;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer; /* Add pointer cursor for clickable cells */
  transition: background-color 0.3s ease; /* Smooth transition for background color change */
}

/* Ship styles */
.ship {
  background-color: grey; /* Default color for ships that haven't been attacked */
}

.hit {
  background-color: green; /* Color for hit cells */
  color: white; /* White text for hit cells */
}

.miss {
  background-color: orange; /* Color for miss cells */
}

.sunk {
  background-color: darkred; /* Dark red color for sunk ships */
}

#computerBoard .cell.ship {
  background-color: aliceblue; /* Match the color of other cells */
}

#randomizeButton {
  background-color: #4caf50; /* Green background color */
  color: white; /* White text color */
  border: none; /* Remove border */
  margin-left: 90px;
  padding: 10px 20px; /* Add padding */
  font-size: 16px; /* Increase font size */
  cursor: pointer; /* Add pointer cursor on hover */
  border-radius: 5px; /* Add border radius */
  transition: background-color 0.3s ease; /* Smooth transition for background color change */
}

/* Hover effect for the randomize button */
#randomizeButton:hover {
  background-color: #45a049; /* Darker green on hover */
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qBAAqB;;AAErB,gBAAgB;AAChB;EACE,yDAAgC;EAChC,sBAAsB,EAAE,wDAAwD;EAChF,yBAAyB,EAAE,gDAAgD;EAC3E,kCAAkC,EAAE,gCAAgC;AACtE;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;EAC7B,2BAA2B;;EAE3B,UAAU;AACZ;;AAEA,qBAAqB;AACrB;EACE,aAAa;EACb,uCAAuC;EACvC,QAAQ;EACR,6BAA6B;EAC7B,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,2BAA2B;EAC3B,QAAQ;AACV;;AAEA;;;EAGE,gBAAgB;EAChB,kBAAkB;EAClB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,sBAAsB;EACtB,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,eAAe,EAAE,2CAA2C;EAC5D,sCAAsC,EAAE,kDAAkD;AAC5F;;AAEA,gBAAgB;AAChB;EACE,sBAAsB,EAAE,uDAAuD;AACjF;;AAEA;EACE,uBAAuB,EAAE,wBAAwB;EACjD,YAAY,EAAE,6BAA6B;AAC7C;;AAEA;EACE,wBAAwB,EAAE,yBAAyB;AACrD;;AAEA;EACE,yBAAyB,EAAE,kCAAkC;AAC/D;;AAEA;EACE,2BAA2B,EAAE,mCAAmC;AAClE;;AAEA;EACE,yBAAyB,EAAE,2BAA2B;EACtD,YAAY,EAAE,qBAAqB;EACnC,YAAY,EAAE,kBAAkB;EAChC,iBAAiB;EACjB,kBAAkB,EAAE,gBAAgB;EACpC,eAAe,EAAE,uBAAuB;EACxC,eAAe,EAAE,gCAAgC;EACjD,kBAAkB,EAAE,sBAAsB;EAC1C,sCAAsC,EAAE,kDAAkD;AAC5F;;AAEA,0CAA0C;AAC1C;EACE,yBAAyB,EAAE,0BAA0B;AACvD","sourcesContent":["/* Container styles */\n\n/* Body styles */\nbody {\n  background-image: url(\"img.jpg\");\n  background-size: cover; /* Cover the entire viewport with the background image */\n  background-repeat: repeat; /* Prevent the background image from repeating */\n  background-position: center center; /* Center the background image */\n}\n\n.game-container {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 50px;\n  /* border: 2px solid blue; */\n}\n\n.board-container {\n  background-color: transparent;\n  /* border: 2px solid red; */\n\n  width: 45%;\n}\n\n/* Gameboard styles */\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 50px);\n  gap: 5px;\n  background-color: transparent;\n  /* border: 1px solid orange; */\n  justify-content: center;\n}\n\n.row {\n  display: grid;\n  grid-template-rows: repeat(10, 50px);\n  /* border: 1px solid red; */\n  gap: 5px;\n}\n\n#winnerMessage,\nh1,\nh2 {\n  color: aliceblue;\n  text-align: center;\n  /* border: 1px solid green; */\n  font-size: xx-large;\n}\n\n.cell {\n  width: 50px;\n  height: 50px;\n  border-radius: 2px;\n  /* border: 1px solid black; */\n  box-sizing: border-box;\n  background-color: aliceblue;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  cursor: pointer; /* Add pointer cursor for clickable cells */\n  transition: background-color 0.3s ease; /* Smooth transition for background color change */\n}\n\n/* Ship styles */\n.ship {\n  background-color: grey; /* Default color for ships that haven't been attacked */\n}\n\n.hit {\n  background-color: green; /* Color for hit cells */\n  color: white; /* White text for hit cells */\n}\n\n.miss {\n  background-color: orange; /* Color for miss cells */\n}\n\n.sunk {\n  background-color: darkred; /* Dark red color for sunk ships */\n}\n\n#computerBoard .cell.ship {\n  background-color: aliceblue; /* Match the color of other cells */\n}\n\n#randomizeButton {\n  background-color: #4caf50; /* Green background color */\n  color: white; /* White text color */\n  border: none; /* Remove border */\n  margin-left: 90px;\n  padding: 10px 20px; /* Add padding */\n  font-size: 16px; /* Increase font size */\n  cursor: pointer; /* Add pointer cursor on hover */\n  border-radius: 5px; /* Add border radius */\n  transition: background-color 0.3s ease; /* Smooth transition for background color change */\n}\n\n/* Hover effect for the randomize button */\n#randomizeButton:hover {\n  background-color: #45a049; /* Darker green on hover */\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


const renderboard = (gameboard, elementid) => {
  const container = document.getElementById(elementid);
  container.innerHTML = "";

  gameboard.grid.forEach((row, rowindex) => {
    const rowelement = document.createElement("div");
    rowelement.className = "row";

    row.forEach((cell, cellindex) => {
      const cellelement = document.createElement("div");
      cellelement.className = "cell";
      cellelement.textContent = `${rowindex},${cellindex}`;

      if (cell.status === "ship" && cell.attacked) {
        // Hit
        cellelement.classList.add("hit");
      } else if (cell.status === null && cell.attacked) {
        // Miss
        cellelement.classList.add("miss");
      } else if (cell.status === "ship") {
        // Ship (not hit)
        cellelement.classList.add("ship");
      }
      if (cell.attackedss) {
        console.log(
          `Row: ${rowindex}, Cell: ${cellindex}, Status: ${cell.status}, Attacked: ${cell.attacked}`
        );
      }

      rowelement.appendChild(cellelement);
    });
    container.appendChild(rowelement);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderboard);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


class Gameboard {
  constructor() {
    this.grid = Array(10)
      .fill(null)
      .map(() =>
        Array(10)
          .fill(null)
          .map(() => ({
            ship: null,
            status: null,
            attacked: false,
          }))
      );

    this.ships = [];
    this.missedAttacks = [];
  }
  clearShips() {
    // Reset the grid to remove all ships
    this.grid.forEach((row) => {
      row.forEach((cell) => {
        cell.ship = null;
        cell.status = null;
        cell.attacked = false;
      });
    });

    // Clear the ships array
    this.ships = [];
  }
  isValidShipPlacement(x, y, length, isHorizontal) {
    // Check if the ship fits within the gameboard
    if (
      (isHorizontal && x + length > 10) ||
      (!isHorizontal && y + length > 10)
    ) {
      return false;
    }

    // Check if any cell in the path of the ship is already occupied
    for (let i = 0; i < length; i++) {
      if (isHorizontal) {
        if (this.grid[y][x + i].status === "ship") {
          return false;
        }
      } else {
        if (this.grid[y + i][x].status === "ship") {
          return false;
        }
      }
    }

    return true;
  }

  placeShip(x, y, length, isHorizontal) {
    const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
    const shipCoordinates = [];

    for (let i = 0; i < length; i++) {
      if (isHorizontal) {
        this.grid[y][x + i] = {
          ship: ship,
          status: "ship",
          attacked: false,
        };
        shipCoordinates.push([y, x + i]);
      } else {
        this.grid[y + i][x] = {
          ship: ship,
          status: "ship",
          attacked: false,
        };
        shipCoordinates.push([y + i, x]);
      }
    }
    this.ships.push({ ship, coordinates: shipCoordinates });
  }

  receiveAttack(x, y) {
    console.log(`Receiving attack at ${y},${x}`);
    let cell = this.grid[y][x];

    if (cell.attacked) {
      console.log(`Cell ${y},${x} already attacked`);
      return false;
    }

    cell.attacked = true;
    console.log(`Cell ${y},${x} attacked`);

    if (cell.status === "ship") {
      cell.ship.hit();
      console.log(`Ship hit at ${y},${x}`);
    }

    if (cell.status === null) {
      this.missedAttacks.push([x, y]);
      console.log(`Miss at ${y},${x}`);
    }

    return true;
  }

  allShipsSunk() {
    let allShipsSunk = true;
    for (let i = 0; i < this.ships.length; i++) {
      if (!this.ships[i].ship.isSunk()) {
        allShipsSunk = false;
        break;
      }
    }
    return allShipsSunk;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Player {
  constructor() {
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  placeRandomizedShips() {
    const lengths = [5, 4, 3, 3, 2];

    lengths.forEach((length) => {
      let x, y, isHorizontal;

      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        isHorizontal = Math.random() < 0.5; // Randomly choose horizontal or vertical orientation
      } while (
        !this.gameboard.isValidShipPlacement(x, y, length, isHorizontal)
      );

      this.gameboard.placeShip(x, y, length, isHorizontal);
    });
  }
  placeShip(x, y, length, isHorizontal) {
    this.gameboard.placeShip(x, y, length, isHorizontal);
  }
  receiveAttack(x, y) {
    this.gameboard.receiveAttack(x, y);
  }

  allShipsSunk() {
    this.gameboard.allShipsSunk();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
  }
  hit() {
    if (this.hitCount < this.length) {
      this.hitCount++;
    } else {
      throw new Error("Ship is already sunk");
    }
  }
  isSunk() {
    if (this.hitCount === this.length) {
      return true;
    } else {
      return false;
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/img.jpg":
/*!*********************!*\
  !*** ./src/img.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c75aac530b411960bb09.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/dom.js");






const player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]();
const computer = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]();

let playersattackedcells = new Set();
let computersattackedcells = new Set();

player.placeRandomizedShips();
computer.placeRandomizedShips();

// player.placeShip(0, 0, 5, true);
// player.placeShip(2, 2, 4, false);
// computer.placeShip(1, 2, 5, true);
// computer.placeShip(5, 5, 4, false);

(0,_dom__WEBPACK_IMPORTED_MODULE_4__["default"])(player.gameboard, "playerBoard");
(0,_dom__WEBPACK_IMPORTED_MODULE_4__["default"])(computer.gameboard, "computerBoard");

let currentplayer = player;

const handleattack = (x, y) => {
  randomizeButton.style.display = "none";
  if (checkwinner()) {
    console.log("The game has already been won!");
    return;
  }
  console.log("******** players turn ********");
  if (computersattackedcells.has(`${x},${y}`)) {
    console.error("You've already attacked this cell:", y, x);
    return;
  } else computer.receiveAttack(x, y);
  computersattackedcells.add(`${x},${y}`);

  currentplayer = currentplayer === player ? computer : player;

  (0,_dom__WEBPACK_IMPORTED_MODULE_4__["default"])(player.gameboard, "playerBoard");
  (0,_dom__WEBPACK_IMPORTED_MODULE_4__["default"])(computer.gameboard, "computerBoard");

  computersturn();
  console.log("valid coordinates:", y, x);
  checkwinner();
};

const computersturn = () => {
  console.log("******* computers turn *******");
  let x, y;

  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  } while (playersattackedcells.has(`${x},${y}`));

  playersattackedcells.add(`${x},${y}`);
  player.receiveAttack(x, y);
  console.log("computer attacked", y, x);
  (0,_dom__WEBPACK_IMPORTED_MODULE_4__["default"])(player.gameboard, "playerBoard");
  (0,_dom__WEBPACK_IMPORTED_MODULE_4__["default"])(computer.gameboard, "computerBoard");
  checkwinner();
};

const checkwinner = () => {
  if (computer.gameboard.allShipsSunk()) {
    console.log("Player Wins");
    document.getElementById("winnerMessage").textContent = "Player Wins";
    document
      .getElementById("computerBoard")
      .removeEventListener("click", handleattack);
    return true;
  } else if (player.gameboard.allShipsSunk()) {
    console.log("Computer Wins");
    document.getElementById("winnerMessage").textContent = "Computer Wins";
    document
      .getElementById("computerBoard")
      .removeEventListener("click", handleattack);
    return true;
  }

  return false; // No winner yet
};

document.getElementById("computerBoard").addEventListener("click", (event) => {
  const cell = event.target;
  if (cell.classList.contains("cell")) {
    const rowelement = cell.parentElement;
    const cellindex = Array.from(rowelement.children).indexOf(cell);
    const rowindex = Array.from(rowelement.parentElement.children).indexOf(
      rowelement
    );

    if (rowindex >= 0 && rowindex < 10 && cellindex >= 0 && cellindex < 10) {
      handleattack(cellindex, rowindex);
    } else {
      console.error("Invalid coordinates:", rowindex, cellindex);
    }
    event.stopPropagation();
  }
});
const randomizeButton = document.getElementById("randomizeButton");

// Add event listener to the randomize button
randomizeButton.addEventListener("click", () => {
  // Clear the previously placed ships on the player's board
  player.gameboard.clearShips();

  // Place new randomized ships
  player.placeRandomizedShips();

  // Render the updated player's board
  (0,_dom__WEBPACK_IMPORTED_MODULE_4__["default"])(player.gameboard, "playerBoard");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1M7QUFDTTtBQUNWO0FBQ007O0FBRWhDLG1CQUFtQiwrQ0FBTTtBQUN6QixxQkFBcUIsK0NBQU07O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBVztBQUNYLGdEQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUUsR0FBRyxFQUFFO0FBQzNDO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZ0NBQWdDLEVBQUUsR0FBRyxFQUFFOztBQUV2Qzs7QUFFQSxFQUFFLGdEQUFXO0FBQ2IsRUFBRSxnREFBVzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQ0FBbUMsRUFBRSxHQUFHLEVBQUU7O0FBRTlDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtBQUNyQztBQUNBO0FBQ0EsRUFBRSxnREFBVztBQUNiLEVBQUUsZ0RBQVc7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxnREFBVztBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaW1nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQ29udGFpbmVyIHN0eWxlcyAqL1xuXG4vKiBCb2R5IHN0eWxlcyAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogQ292ZXIgdGhlIGVudGlyZSB2aWV3cG9ydCB3aXRoIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7IC8qIFByZXZlbnQgdGhlIGJhY2tncm91bmQgaW1hZ2UgZnJvbSByZXBlYXRpbmcgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgLyogQ2VudGVyIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXG59XG5cbi5nYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cblxuICB3aWR0aDogNDUlO1xufVxuXG4vKiBHYW1lYm9hcmQgc3R5bGVzICovXG4uZ2FtZWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xuICBnYXA6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNTBweCk7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgZ2FwOiA1cHg7XG59XG5cbiN3aW5uZXJNZXNzYWdlLFxuaDEsXG5oMiB7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbi5jZWxsIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBwb2ludGVyIGN1cnNvciBmb3IgY2xpY2thYmxlIGNlbGxzICovXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOyAvKiBTbW9vdGggdHJhbnNpdGlvbiBmb3IgYmFja2dyb3VuZCBjb2xvciBjaGFuZ2UgKi9cbn1cblxuLyogU2hpcCBzdHlsZXMgKi9cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgLyogRGVmYXVsdCBjb2xvciBmb3Igc2hpcHMgdGhhdCBoYXZlbid0IGJlZW4gYXR0YWNrZWQgKi9cbn1cblxuLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAvKiBDb2xvciBmb3IgaGl0IGNlbGxzICovXG4gIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCBmb3IgaGl0IGNlbGxzICovXG59XG5cbi5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAvKiBDb2xvciBmb3IgbWlzcyBjZWxscyAqL1xufVxuXG4uc3VuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7IC8qIERhcmsgcmVkIGNvbG9yIGZvciBzdW5rIHNoaXBzICovXG59XG5cbiNjb21wdXRlckJvYXJkIC5jZWxsLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7IC8qIE1hdGNoIHRoZSBjb2xvciBvZiBvdGhlciBjZWxscyAqL1xufVxuXG4jcmFuZG9taXplQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogR3JlZW4gYmFja2dyb3VuZCBjb2xvciAqL1xuICBjb2xvcjogd2hpdGU7IC8qIFdoaXRlIHRleHQgY29sb3IgKi9cbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVyICovXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7IC8qIEFkZCBwYWRkaW5nICovXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogSW5jcmVhc2UgZm9udCBzaXplICovXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIHBvaW50ZXIgY3Vyc29yIG9uIGhvdmVyICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgLyogQWRkIGJvcmRlciByYWRpdXMgKi9cbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uIGZvciBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZSAqL1xufVxuXG4vKiBIb3ZlciBlZmZlY3QgZm9yIHRoZSByYW5kb21pemUgYnV0dG9uICovXG4jcmFuZG9taXplQnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTsgLyogRGFya2VyIGdyZWVuIG9uIGhvdmVyICovXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCOztBQUVyQixnQkFBZ0I7QUFDaEI7RUFDRSx5REFBZ0M7RUFDaEMsc0JBQXNCLEVBQUUsd0RBQXdEO0VBQ2hGLHlCQUF5QixFQUFFLGdEQUFnRDtFQUMzRSxrQ0FBa0MsRUFBRSxnQ0FBZ0M7QUFDdEU7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCOztFQUUzQixVQUFVO0FBQ1o7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQixRQUFRO0FBQ1Y7O0FBRUE7OztFQUdFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlLEVBQUUsMkNBQTJDO0VBQzVELHNDQUFzQyxFQUFFLGtEQUFrRDtBQUM1Rjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxzQkFBc0IsRUFBRSx1REFBdUQ7QUFDakY7O0FBRUE7RUFDRSx1QkFBdUIsRUFBRSx3QkFBd0I7RUFDakQsWUFBWSxFQUFFLDZCQUE2QjtBQUM3Qzs7QUFFQTtFQUNFLHdCQUF3QixFQUFFLHlCQUF5QjtBQUNyRDs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLGtDQUFrQztBQUMvRDs7QUFFQTtFQUNFLDJCQUEyQixFQUFFLG1DQUFtQztBQUNsRTs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLDJCQUEyQjtFQUN0RCxZQUFZLEVBQUUscUJBQXFCO0VBQ25DLFlBQVksRUFBRSxrQkFBa0I7RUFDaEMsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFFLGdCQUFnQjtFQUNwQyxlQUFlLEVBQUUsdUJBQXVCO0VBQ3hDLGVBQWUsRUFBRSxnQ0FBZ0M7RUFDakQsa0JBQWtCLEVBQUUsc0JBQXNCO0VBQzFDLHNDQUFzQyxFQUFFLGtEQUFrRDtBQUM1Rjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSx5QkFBeUIsRUFBRSwwQkFBMEI7QUFDdkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ29udGFpbmVyIHN0eWxlcyAqL1xcblxcbi8qIEJvZHkgc3R5bGVzICovXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImltZy5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIENvdmVyIHRoZSBlbnRpcmUgdmlld3BvcnQgd2l0aCB0aGUgYmFja2dyb3VuZCBpbWFnZSAqL1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDsgLyogUHJldmVudCB0aGUgYmFja2dyb3VuZCBpbWFnZSBmcm9tIHJlcGVhdGluZyAqL1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgLyogQ2VudGVyIHRoZSBiYWNrZ3JvdW5kIGltYWdlICovXFxufVxcblxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cXG5cXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbi8qIEdhbWVib2FyZCBzdHlsZXMgKi9cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICBnYXA6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgb3JhbmdlOyAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4jd2lubmVyTWVzc2FnZSxcXG5oMSxcXG5oMiB7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG4uY2VsbCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIEFkZCBwb2ludGVyIGN1cnNvciBmb3IgY2xpY2thYmxlIGNlbGxzICovXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gZm9yIGJhY2tncm91bmQgY29sb3IgY2hhbmdlICovXFxufVxcblxcbi8qIFNoaXAgc3R5bGVzICovXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgLyogRGVmYXVsdCBjb2xvciBmb3Igc2hpcHMgdGhhdCBoYXZlbid0IGJlZW4gYXR0YWNrZWQgKi9cXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgLyogQ29sb3IgZm9yIGhpdCBjZWxscyAqL1xcbiAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0IGZvciBoaXQgY2VsbHMgKi9cXG59XFxuXFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOyAvKiBDb2xvciBmb3IgbWlzcyBjZWxscyAqL1xcbn1cXG5cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkOyAvKiBEYXJrIHJlZCBjb2xvciBmb3Igc3VuayBzaGlwcyAqL1xcbn1cXG5cXG4jY29tcHV0ZXJCb2FyZCAuY2VsbC5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgLyogTWF0Y2ggdGhlIGNvbG9yIG9mIG90aGVyIGNlbGxzICovXFxufVxcblxcbiNyYW5kb21pemVCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogR3JlZW4gYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXFxuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXIgKi9cXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4OyAvKiBBZGQgcGFkZGluZyAqL1xcbiAgZm9udC1zaXplOiAxNnB4OyAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjsgLyogQWRkIHBvaW50ZXIgY3Vyc29yIG9uIGhvdmVyICovXFxuICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIEFkZCBib3JkZXIgcmFkaXVzICovXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gZm9yIGJhY2tncm91bmQgY29sb3IgY2hhbmdlICovXFxufVxcblxcbi8qIEhvdmVyIGVmZmVjdCBmb3IgdGhlIHJhbmRvbWl6ZSBidXR0b24gKi9cXG4jcmFuZG9taXplQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7IC8qIERhcmtlciBncmVlbiBvbiBob3ZlciAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgcmVuZGVyYm9hcmQgPSAoZ2FtZWJvYXJkLCBlbGVtZW50aWQpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudGlkKTtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgZ2FtZWJvYXJkLmdyaWQuZm9yRWFjaCgocm93LCByb3dpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJvd2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvd2VsZW1lbnQuY2xhc3NOYW1lID0gXCJyb3dcIjtcblxuICAgIHJvdy5mb3JFYWNoKChjZWxsLCBjZWxsaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNlbGxlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGxlbGVtZW50LmNsYXNzTmFtZSA9IFwiY2VsbFwiO1xuICAgICAgY2VsbGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtyb3dpbmRleH0sJHtjZWxsaW5kZXh9YDtcblxuICAgICAgaWYgKGNlbGwuc3RhdHVzID09PSBcInNoaXBcIiAmJiBjZWxsLmF0dGFja2VkKSB7XG4gICAgICAgIC8vIEhpdFxuICAgICAgICBjZWxsZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgfSBlbHNlIGlmIChjZWxsLnN0YXR1cyA9PT0gbnVsbCAmJiBjZWxsLmF0dGFja2VkKSB7XG4gICAgICAgIC8vIE1pc3NcbiAgICAgICAgY2VsbGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICB9IGVsc2UgaWYgKGNlbGwuc3RhdHVzID09PSBcInNoaXBcIikge1xuICAgICAgICAvLyBTaGlwIChub3QgaGl0KVxuICAgICAgICBjZWxsZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjZWxsLmF0dGFja2Vkc3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgYFJvdzogJHtyb3dpbmRleH0sIENlbGw6ICR7Y2VsbGluZGV4fSwgU3RhdHVzOiAke2NlbGwuc3RhdHVzfSwgQXR0YWNrZWQ6ICR7Y2VsbC5hdHRhY2tlZH1gXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJvd2VsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb3dlbGVtZW50KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJib2FyZDtcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ncmlkID0gQXJyYXkoMTApXG4gICAgICAuZmlsbChudWxsKVxuICAgICAgLm1hcCgoKSA9PlxuICAgICAgICBBcnJheSgxMClcbiAgICAgICAgICAuZmlsbChudWxsKVxuICAgICAgICAgIC5tYXAoKCkgPT4gKHtcbiAgICAgICAgICAgIHNoaXA6IG51bGwsXG4gICAgICAgICAgICBzdGF0dXM6IG51bGwsXG4gICAgICAgICAgICBhdHRhY2tlZDogZmFsc2UsXG4gICAgICAgICAgfSkpXG4gICAgICApO1xuXG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMubWlzc2VkQXR0YWNrcyA9IFtdO1xuICB9XG4gIGNsZWFyU2hpcHMoKSB7XG4gICAgLy8gUmVzZXQgdGhlIGdyaWQgdG8gcmVtb3ZlIGFsbCBzaGlwc1xuICAgIHRoaXMuZ3JpZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwuc2hpcCA9IG51bGw7XG4gICAgICAgIGNlbGwuc3RhdHVzID0gbnVsbDtcbiAgICAgICAgY2VsbC5hdHRhY2tlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBDbGVhciB0aGUgc2hpcHMgYXJyYXlcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cbiAgaXNWYWxpZFNoaXBQbGFjZW1lbnQoeCwgeSwgbGVuZ3RoLCBpc0hvcml6b250YWwpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgc2hpcCBmaXRzIHdpdGhpbiB0aGUgZ2FtZWJvYXJkXG4gICAgaWYgKFxuICAgICAgKGlzSG9yaXpvbnRhbCAmJiB4ICsgbGVuZ3RoID4gMTApIHx8XG4gICAgICAoIWlzSG9yaXpvbnRhbCAmJiB5ICsgbGVuZ3RoID4gMTApXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGNlbGwgaW4gdGhlIHBhdGggb2YgdGhlIHNoaXAgaXMgYWxyZWFkeSBvY2N1cGllZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFt5XVt4ICsgaV0uc3RhdHVzID09PSBcInNoaXBcIikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFt5ICsgaV1beF0uc3RhdHVzID09PSBcInNoaXBcIikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgaXNIb3Jpem9udGFsKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIHRoaXMuZ3JpZFt5XVt4ICsgaV0gPSB7XG4gICAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgICBzdGF0dXM6IFwic2hpcFwiLFxuICAgICAgICAgIGF0dGFja2VkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3ksIHggKyBpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdyaWRbeSArIGldW3hdID0ge1xuICAgICAgICAgIHNoaXA6IHNoaXAsXG4gICAgICAgICAgc3RhdHVzOiBcInNoaXBcIixcbiAgICAgICAgICBhdHRhY2tlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHNoaXBDb29yZGluYXRlcy5wdXNoKFt5ICsgaSwgeF0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNoaXBzLnB1c2goeyBzaGlwLCBjb29yZGluYXRlczogc2hpcENvb3JkaW5hdGVzIH0pO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc29sZS5sb2coYFJlY2VpdmluZyBhdHRhY2sgYXQgJHt5fSwke3h9YCk7XG4gICAgbGV0IGNlbGwgPSB0aGlzLmdyaWRbeV1beF07XG5cbiAgICBpZiAoY2VsbC5hdHRhY2tlZCkge1xuICAgICAgY29uc29sZS5sb2coYENlbGwgJHt5fSwke3h9IGFscmVhZHkgYXR0YWNrZWRgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjZWxsLmF0dGFja2VkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhgQ2VsbCAke3l9LCR7eH0gYXR0YWNrZWRgKTtcblxuICAgIGlmIChjZWxsLnN0YXR1cyA9PT0gXCJzaGlwXCIpIHtcbiAgICAgIGNlbGwuc2hpcC5oaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGBTaGlwIGhpdCBhdCAke3l9LCR7eH1gKTtcbiAgICB9XG5cbiAgICBpZiAoY2VsbC5zdGF0dXMgPT09IG51bGwpIHtcbiAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gICAgICBjb25zb2xlLmxvZyhgTWlzcyBhdCAke3l9LCR7eH1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5zaGlwc1tpXS5zaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIGFsbFNoaXBzU3VuayA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFsbFNoaXBzU3VuaztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxuICBwbGFjZVJhbmRvbWl6ZWRTaGlwcygpIHtcbiAgICBjb25zdCBsZW5ndGhzID0gWzUsIDQsIDMsIDMsIDJdO1xuXG4gICAgbGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgpID0+IHtcbiAgICAgIGxldCB4LCB5LCBpc0hvcml6b250YWw7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgaXNIb3Jpem9udGFsID0gTWF0aC5yYW5kb20oKSA8IDAuNTsgLy8gUmFuZG9tbHkgY2hvb3NlIGhvcml6b250YWwgb3IgdmVydGljYWwgb3JpZW50YXRpb25cbiAgICAgIH0gd2hpbGUgKFxuICAgICAgICAhdGhpcy5nYW1lYm9hcmQuaXNWYWxpZFNoaXBQbGFjZW1lbnQoeCwgeSwgbGVuZ3RoLCBpc0hvcml6b250YWwpXG4gICAgICApO1xuXG4gICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBpc0hvcml6b250YWwpO1xuICAgIH0pO1xuICB9XG4gIHBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGlzSG9yaXpvbnRhbCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGlzSG9yaXpvbnRhbCk7XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgdGhpcy5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICB0aGlzLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRDb3VudCA9IDA7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhpdENvdW50IDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaGl0Q291bnQrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBpcyBhbHJlYWR5IHN1bmtcIik7XG4gICAgfVxuICB9XG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRDb3VudCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCByZW5kZXJib2FyZCBmcm9tIFwiLi9kb21cIjtcblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKCk7XG5cbmxldCBwbGF5ZXJzYXR0YWNrZWRjZWxscyA9IG5ldyBTZXQoKTtcbmxldCBjb21wdXRlcnNhdHRhY2tlZGNlbGxzID0gbmV3IFNldCgpO1xuXG5wbGF5ZXIucGxhY2VSYW5kb21pemVkU2hpcHMoKTtcbmNvbXB1dGVyLnBsYWNlUmFuZG9taXplZFNoaXBzKCk7XG5cbi8vIHBsYXllci5wbGFjZVNoaXAoMCwgMCwgNSwgdHJ1ZSk7XG4vLyBwbGF5ZXIucGxhY2VTaGlwKDIsIDIsIDQsIGZhbHNlKTtcbi8vIGNvbXB1dGVyLnBsYWNlU2hpcCgxLCAyLCA1LCB0cnVlKTtcbi8vIGNvbXB1dGVyLnBsYWNlU2hpcCg1LCA1LCA0LCBmYWxzZSk7XG5cbnJlbmRlcmJvYXJkKHBsYXllci5nYW1lYm9hcmQsIFwicGxheWVyQm9hcmRcIik7XG5yZW5kZXJib2FyZChjb21wdXRlci5nYW1lYm9hcmQsIFwiY29tcHV0ZXJCb2FyZFwiKTtcblxubGV0IGN1cnJlbnRwbGF5ZXIgPSBwbGF5ZXI7XG5cbmNvbnN0IGhhbmRsZWF0dGFjayA9ICh4LCB5KSA9PiB7XG4gIHJhbmRvbWl6ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGlmIChjaGVja3dpbm5lcigpKSB7XG4gICAgY29uc29sZS5sb2coXCJUaGUgZ2FtZSBoYXMgYWxyZWFkeSBiZWVuIHdvbiFcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnNvbGUubG9nKFwiKioqKioqKiogcGxheWVycyB0dXJuICoqKioqKioqXCIpO1xuICBpZiAoY29tcHV0ZXJzYXR0YWNrZWRjZWxscy5oYXMoYCR7eH0sJHt5fWApKSB7XG4gICAgY29uc29sZS5lcnJvcihcIllvdSd2ZSBhbHJlYWR5IGF0dGFja2VkIHRoaXMgY2VsbDpcIiwgeSwgeCk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgY29tcHV0ZXIucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgY29tcHV0ZXJzYXR0YWNrZWRjZWxscy5hZGQoYCR7eH0sJHt5fWApO1xuXG4gIGN1cnJlbnRwbGF5ZXIgPSBjdXJyZW50cGxheWVyID09PSBwbGF5ZXIgPyBjb21wdXRlciA6IHBsYXllcjtcblxuICByZW5kZXJib2FyZChwbGF5ZXIuZ2FtZWJvYXJkLCBcInBsYXllckJvYXJkXCIpO1xuICByZW5kZXJib2FyZChjb21wdXRlci5nYW1lYm9hcmQsIFwiY29tcHV0ZXJCb2FyZFwiKTtcblxuICBjb21wdXRlcnN0dXJuKCk7XG4gIGNvbnNvbGUubG9nKFwidmFsaWQgY29vcmRpbmF0ZXM6XCIsIHksIHgpO1xuICBjaGVja3dpbm5lcigpO1xufTtcblxuY29uc3QgY29tcHV0ZXJzdHVybiA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCIqKioqKioqIGNvbXB1dGVycyB0dXJuICoqKioqKipcIik7XG4gIGxldCB4LCB5O1xuXG4gIGRvIHtcbiAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIH0gd2hpbGUgKHBsYXllcnNhdHRhY2tlZGNlbGxzLmhhcyhgJHt4fSwke3l9YCkpO1xuXG4gIHBsYXllcnNhdHRhY2tlZGNlbGxzLmFkZChgJHt4fSwke3l9YCk7XG4gIHBsYXllci5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICBjb25zb2xlLmxvZyhcImNvbXB1dGVyIGF0dGFja2VkXCIsIHksIHgpO1xuICByZW5kZXJib2FyZChwbGF5ZXIuZ2FtZWJvYXJkLCBcInBsYXllckJvYXJkXCIpO1xuICByZW5kZXJib2FyZChjb21wdXRlci5nYW1lYm9hcmQsIFwiY29tcHV0ZXJCb2FyZFwiKTtcbiAgY2hlY2t3aW5uZXIoKTtcbn07XG5cbmNvbnN0IGNoZWNrd2lubmVyID0gKCkgPT4ge1xuICBpZiAoY29tcHV0ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgY29uc29sZS5sb2coXCJQbGF5ZXIgV2luc1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbm5lck1lc3NhZ2VcIikudGV4dENvbnRlbnQgPSBcIlBsYXllciBXaW5zXCI7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImNvbXB1dGVyQm9hcmRcIilcbiAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlYXR0YWNrKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgY29uc29sZS5sb2coXCJDb21wdXRlciBXaW5zXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lubmVyTWVzc2FnZVwiKS50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXIgV2luc1wiO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlckJvYXJkXCIpXG4gICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZWF0dGFjayk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7IC8vIE5vIHdpbm5lciB5ZXRcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXJCb2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGNlbGwgPSBldmVudC50YXJnZXQ7XG4gIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICBjb25zdCByb3dlbGVtZW50ID0gY2VsbC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGNlbGxpbmRleCA9IEFycmF5LmZyb20ocm93ZWxlbWVudC5jaGlsZHJlbikuaW5kZXhPZihjZWxsKTtcbiAgICBjb25zdCByb3dpbmRleCA9IEFycmF5LmZyb20ocm93ZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKFxuICAgICAgcm93ZWxlbWVudFxuICAgICk7XG5cbiAgICBpZiAocm93aW5kZXggPj0gMCAmJiByb3dpbmRleCA8IDEwICYmIGNlbGxpbmRleCA+PSAwICYmIGNlbGxpbmRleCA8IDEwKSB7XG4gICAgICBoYW5kbGVhdHRhY2soY2VsbGluZGV4LCByb3dpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGVzOlwiLCByb3dpbmRleCwgY2VsbGluZGV4KTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn0pO1xuY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5kb21pemVCdXR0b25cIik7XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgcmFuZG9taXplIGJ1dHRvblxucmFuZG9taXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIENsZWFyIHRoZSBwcmV2aW91c2x5IHBsYWNlZCBzaGlwcyBvbiB0aGUgcGxheWVyJ3MgYm9hcmRcbiAgcGxheWVyLmdhbWVib2FyZC5jbGVhclNoaXBzKCk7XG5cbiAgLy8gUGxhY2UgbmV3IHJhbmRvbWl6ZWQgc2hpcHNcbiAgcGxheWVyLnBsYWNlUmFuZG9taXplZFNoaXBzKCk7XG5cbiAgLy8gUmVuZGVyIHRoZSB1cGRhdGVkIHBsYXllcidzIGJvYXJkXG4gIHJlbmRlcmJvYXJkKHBsYXllci5nYW1lYm9hcmQsIFwicGxheWVyQm9hcmRcIik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==