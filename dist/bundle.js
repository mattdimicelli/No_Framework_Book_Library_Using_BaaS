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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*** The new CSS Reset - version 1.4.2 (last updated 30.11.2021) ***/\\n\\n/*\\n    Remove all the styles of the \\\"User-Agent-Stylesheet\\\", except for the 'display' property\\n    - The \\\"symbol *\\\" part is to solve Firefox SVG sprite bug\\n */\\n *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {\\n    all: unset;\\n    display: revert;\\n}\\n\\n/* Preferred box-sizing value */\\n*,\\n*::before,\\n*::after {\\n    box-sizing: border-box;\\n}\\n\\n/* Remove list styles (bullets/numbers) */\\nol, ul, menu {\\n    list-style: none;\\n}\\n\\n/* For images to not be able to exceed their container */\\nimg {\\n    max-width: 100%;\\n}\\n\\n/* removes spacing between cells in tables */\\ntable {\\n    border-collapse: collapse;\\n}\\n\\n/* revert the 'white-space' property for textarea elements on Safari */\\ntextarea {\\n    white-space: revert;\\n}\\n\\n/* revert for bug in Chromium browsers\\n   - fix for the content editable attribute will work properly. */\\n:where([contenteditable]){\\n    -moz-user-modify: read-write;\\n    -webkit-user-modify: read-write;\\n    overflow-wrap: break-word;\\n    -webkit-line-break: after-white-space;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://library_2/./src/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://library_2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://library_2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://library_2/./src/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://library_2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://library_2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://library_2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://library_2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://library_2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://library_2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n\n// import './styles.css';\n\nlet myLibrary = [];\n\ninitializeApp();\n\nfunction initializeApp() {\n    console.log('fire')\n    let openNewBookFormBtn = document.querySelector('button.open-new-book-form');\n    openNewBookFormBtn.addEventListener('click', openNewBookForm);\n    populateStats();\n    renderBooks();\n}\n\nfunction populateStats() {\n    const numRead = myLibrary.filter(book => book.readStatus === 'read').length;\n    const numNotRead = myLibrary.filter(book => book.readStatus === 'not-read')\n    .length;\n    const numReading = myLibrary.filter(book => book.readStatus === 'reading')\n    .length;\n    document.querySelector('.total-num').textContent = String(myLibrary.length);\n    document.querySelector('.read-num').textContent = String(numRead);\n    document.querySelector('.not-read-num').textContent = String(numNotRead);\n    document.querySelector('.reading-num').textContent = String(numReading);\n}\n\nfunction openNewBookForm() {\n    let form = \n    `<form class=\"new-book-form\">\n        <label for=\"title\">Title*</label>\n        <input type=\"text\" required=\"true\" id=\"title\" placeholder=\"Title\"\n        pattern=\".*\\\\S.*\">\n        <!-- the pattern is so that the title of the book can't be only \n        whitespace. -->\n\n        <label for=\"author\">Author</label>\n        <input type=\"text\" id=\"author\" placeholder=\"Author\">\n\n        <label for=\"pages\">Number of pages</label>\n        <input type=\"number\" id=\"pages\" placeholder=\"Number of pages\">\n        \n        <label for=\"read-status\">Have you read this book?</label>\n        <select id=\"read-status-select\" required>\n            <option value=\"was-read\" selected>Read</option>\n            <option value=\"not-read\">Haven't read</option>\n            <option value=\"reading\">Reading</option>\n        </select>\n\n        <label for=\"language\">Language</label>\n        <input id=\"language\" type=\"text\" placeholder=\"Language\" list=\"languages\"\n        autocomplete=\"off\">\n        <datalist id=\"languages\">\n    `;\n    const languages = [\n        'Chinese',\n        'Spanish',\n        'English',\n        'Hindi',\n        'Arabic',\n        'Bengali',\n        'Portuguese',\n        'Russian',\n        'Japanese',\n        'Punjabi',\n        'German',\n        'Javanese',\n        'Wu',\n        'Malay',\n        'Telugu',\n        'Vietnamese',\n        'Korean',\n        'French',\n        'Marathi',\n        'Tamil',\n        'Urdu',\n        'Turkish',\n        'Italian',\n        'Yue',\n        'Thai',\n        'Gujarati',\n        'Jin',\n        'Min',\n        'Persian',\n        'Polish'\n    ];\n    languages.sort().forEach(language => {\n        form += `<option>${language}</option>`;\n    });\n    form += \n    `\n    </datalist>\n\n    <label for=\"published\">Date published </label>\n    <input type=\"date\" id=\"published\">\n\n    <label for=\"genres\">Genre(s)</label>\n    <select type=\"text\" id=\"genres\" multiple=\"true\">\n        <option value=\"\">Genres</option>\n    `;\n    const genres = [\n        'Action & Adventure',\n        'Classics',\n        \"Children's\",\n        'Comic Book or Graphic Novel',\n        'Contemporary Fiction',\n        'Detective & Mystery',\n        'Dystopian',\n        'Fantasy',\n        'Historical Fiction',\n        'Horror',\n        'Literary Fiction',\n        'Magical Realism',\n        'New Adult',\n        'Romance',\n        'Science Fiction',\n        'Short Stories',\n        'Suspense & Thrillers',\n        \"Women's Fiction\",\n        'Art & Photography',\n        'Biography',\n        'Memoir & Autobiography',\n        'Essays',\n        'Food & Drink',\n        'Guide / How-to',\n        'History',\n        'Humanities & Social Sciences',\n        'Humor',\n        'Parenting & Families',\n        'Poetry',\n        'Religion & Spirituality',\n        'Science & Technology',\n        'Self-Help',\n        'Travel',\n        'True Crime',\n        'Young Adult',\n        'Other'\n    ]\n    genres.sort().forEach(genre => {\n        form += `<option>${genre}</option>`;\n    });\n    form +=\n    `\n    </select>\n    <button class=\"new-book-form-submit\" \n    onclick=\"newBookFormSubmitHandler(event)\">\n    Add Book\n    </button>\n    <button class=\"new-book-form-cancel\" \n    onclick=\"newBookFormCancelHandler(event)\">\n    Cancel\n    </button>\n    </form>\n    `;\n    document.querySelector('.library').insertAdjacentHTML('beforeend', form);    \n}\n\nfunction renderBooks() {\n    let library = document.querySelector('.library');\n    let fragment = new DocumentFragment();\n    myLibrary.forEach((book, index) => {\n        const {title, author, pages, readStatus, language, published, genres} \n        = book;\n        const whitespaceOnlyRegex = /\\s+/;\n        let bookCard = document.createElement('article');\n        let bookTitle = document.createElement('h2');\n        bookTitle.textContent = `Title: ${title}`;\n        let by = document.createElement('p');\n        if(whitespaceOnlyRegex.test(author) || author === '') {\n            by.textContent = '';\n        }\n        else by.textContent = `By: ${author}`;\n        let bookPages = document.createElement('p');\n        if (whitespaceOnlyRegex.test(pages) || pages === '') {\n            pages.textContent = '';\n        }\n        else bookPages.textContent = `Pages: ${pages}`;\n        let readStatusSelect = document.createElement('select');\n        readStatusSelect.id = 'read-status';\n        readStatusSelect.required = true;\n        readStatusSelect.addEventListener('change', function(e) {\n            book.setReadStatus(e, book);\n        });\n        let readOption = document.createElement('option');\n        readOption.value = 'read';\n        readOption.textContent = 'Read';\n        let notReadOption = document.createElement('option');\n        notReadOption.value = 'not-read';\n        notReadOption.textContent = \"Haven't read\";\n        let readingOption = document.createElement('option');\n        readingOption.value = 'reading';\n        readingOption.textContent = 'Reading';\n        if (readStatus === 'read') readOption.selected = true;\n        else if (readStatus === 'not-read') notReadOption.selected = true;\n        else if (readStatus === 'reading') readingOption.selected = true;\n        readStatusSelect.append(readOption, notReadOption, readingOption);\n        let bookLanguage = document.createElement('p');\n        if (whitespaceOnlyRegex.test(language) || language === '') {\n            bookLanguage.textContent = '';\n        }\n        else bookLanguage.textContent = `Language: ${language}`;\n        let datePublished = document.createElement('p');\n        datePublished.textContent = published ? `Published: ${published}` : '';\n        let bookGenre = document.createElement('p');\n        bookGenre.textContent = '';\n        if (genres.length > 0) {\n            genres.forEach((genre, index) => {\n                if (index === 0) bookGenre.textContent = `Genres: ${genre}, `;\n                else if (index === genres.length - 1) {\n                    bookGenre.textContent += genre;\n                } \n                else bookGenre.textContent += genre + ', ';\n            });\n        }\n        bookCard.dataset.id = index;  \n        let removeBtn = document.createElement('button');\n        removeBtn.textContent = '×';\n        removeBtn.addEventListener('click', function(e) {\n            book.removeBook(e);\n        });\n        bookCard.append(\n            bookTitle,\n            by,\n            bookPages,\n            readStatusSelect,\n            bookLanguage,\n            datePublished,\n            bookGenre,\n            removeBtn\n        );\n        fragment.append(bookCard);\n    });\n    library.append(fragment);\n}\n\nfunction addBookToLibrary(\n    title,\n    author,\n    pages,\n    readStatus,\n    language,\n    published,\n    genres\n    ) {\n    let newBook = new Book(\n        title,\n        author,\n        pages,\n        readStatus,\n        language,\n        published,\n        genres\n        );\n    myLibrary.push(newBook);\n}\n\nfunction Book(title, author, pages, readStatus, language, published, genres) {\n    this.title = title;\n    this.author = author;\n    this.pages = pages;\n    this.readStatus = readStatus;\n    this.language = language;\n    this.published = published;\n    this.genres = genres;\n}\n\n// eslint-disable-next-line no-unused-vars\nfunction newBookFormSubmitHandler(e) {\n    e.preventDefault();\n    const form = document.querySelector('.new-book-form');\n    const valid = form.reportValidity();\n    if (!valid) return;\n\n    const title = document.querySelector('#title').value.trim(); \n    //string (with content)\n\n    const author = document.querySelector('#author').value.trim();  \n    //empty string or string (non-empty)\n\n    const pages = document.querySelector('#pages').value.trim();  \n    // empty string or string-number\n\n    const readStatus = document.querySelector('#read-status-select').value;  \n    //string (non-empty)\n\n    const languageUnformatted = document.querySelector('#language').value.trim();\n    const languageFormatted = languageUnformatted.slice(0,1).toUpperCase()\n    + languageUnformatted.slice(1).toLowerCase();  //string\n    const publishedDate = document.querySelector('#published').value;  \n    //string\n\n    const genreSelect = document.querySelector('#genres');  \n    const selectedGenres = [...genreSelect.options]\n    .filter(option => option.selected).map(option => option.value);  \n    //empty array or array of strings\n    addBookToLibrary(\n        title,\n        author,\n        pages,\n        readStatus,\n        languageFormatted,\n        publishedDate,\n        selectedGenres\n    );\n    form.remove();\n    renderBooks();\n}\n\n// eslint-disable-next-line no-unused-vars\nfunction newBookFormCancelHandler() {\n    document.querySelector('.new-book-form').remove();\n}\n\nBook.prototype.info = function() {\n    return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus ? \n        'read' : 'not yet read'}`;\n}\nBook.prototype.setReadStatus = function(e, book) {\n    const readStatus = e.currentTarget.value;\n    book.readStatus = readStatus;\n}\nBook.prototype.removeBook = function(e) {\n    let bookCard = e.currentTarget.parentElement;\n    myLibrary.splice(bookCard.dataset.id);\n    bookCard.remove();\n}\n\n\n\n  \n\n//# sourceURL=webpack://library_2/./src/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;