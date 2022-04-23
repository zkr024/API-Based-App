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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Montserrat\\\", sans-serif;\\r\\n  background: rgb(12, 12, 32);\\r\\n  color: #1d1d1d;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 3px 100px;\\r\\n  font-size: 20px;\\r\\n  background-color: #ddd;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 120px;\\r\\n}\\r\\n\\r\\n.logo img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  width: 50%;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  padding: 15px;\\r\\n  border-radius: 10px;\\r\\n  background-color: #006;\\r\\n}\\r\\n\\r\\nnav a {\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.showCounter {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n#count {\\r\\n  color: #fa0;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 90%;\\r\\n  max-width: 1000px;\\r\\n  margin: 40px auto 100px auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 50px;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  text-align: center;\\r\\n  background-color: #eee;\\r\\n  border-radius: 15px;\\r\\n  padding-bottom: 15px;\\r\\n}\\r\\n\\r\\n.poster {\\r\\n  width: 90%;\\r\\n  margin-top: 15px;\\r\\n  margin-bottom: 10px;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.top {\\r\\n  display: flex;\\r\\n  margin: 0 15px;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  color: #900;\\r\\n  font-size: 15px;\\r\\n  cursor: pointer;\\r\\n  transition: transform 0.5s;\\r\\n  animation: heart 1s ease-in-out;\\r\\n}\\r\\n\\r\\n@keyframes heart {\\r\\n  25% {\\r\\n    transform: rotate(-45deg);\\r\\n  }\\r\\n\\r\\n  75% {\\r\\n    transform: rotate(45deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n.like:hover {\\r\\n  transform: scale(1.3);\\r\\n}\\r\\n\\r\\n.counter {\\r\\n  font-size: 10px;\\r\\n  color: #900;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 16px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.options {\\r\\n  margin-top: 10px;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.options button {\\r\\n  width: 40%;\\r\\n  padding: 5px;\\r\\n  border-radius: 10px;\\r\\n  background: #006;\\r\\n  color: #eee;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.options button:hover {\\r\\n  background: #eee;\\r\\n  color: #006;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: #ddd;\\r\\n  padding: 30px 50px;\\r\\n  color: #005;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%) scale(0);\\r\\n  transition: 250ms ease-in-out;\\r\\n  z-index: 10;\\r\\n  padding: 10px;\\r\\n  width: 700px;\\r\\n  max-width: 80%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  border-radius: 15px;\\r\\n  overflow: auto;\\r\\n  height: 90%;\\r\\n}\\r\\n\\r\\n.modal.active {\\r\\n  transform: translate(-50%, -50%) scale(1);\\r\\n}\\r\\n\\r\\n.close {\\r\\n  background-color: #fff;\\r\\n  align-self: flex-end;\\r\\n  border-radius: 50%;\\r\\n  width: 4%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  cursor: pointer;\\r\\n  font-size: 25px;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  font-weight: bold;\\r\\n  color: rgb(12, 12, 32);\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close-button:hover {\\r\\n  background-color: rgb(12, 12, 32);\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n#overlay {\\r\\n  position: fixed;\\r\\n  opacity: 0;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  background-color: rgba(0, 0, 0, 0.6);\\r\\n  backdrop-filter: blur(5px);\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n#overlay.active {\\r\\n  opacity: 1;\\r\\n  pointer-events: all;\\r\\n}\\r\\n\\r\\n.imgContainer {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin: 10px 0 10px 10px;\\r\\n}\\r\\n\\r\\n.imgContainer img {\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.data,\\r\\n.addComment,\\r\\n.postComment {\\r\\n  background-color: #eee;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.data,\\r\\n.information {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.information {\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.details div,\\r\\n.details p {\\r\\n  margin-top: 15px;\\r\\n}\\r\\n\\r\\n.details p {\\r\\n  font-size: 13px;\\r\\n}\\r\\n\\r\\n.addComment {\\r\\n  margin-top: 15px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#text,\\r\\n#textarea {\\r\\n  width: 95%;\\r\\n  margin: 10px;\\r\\n  border: none;\\r\\n  padding: 10px;\\r\\n  background: rgb(12, 12, 32);\\r\\n  color: #fff;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n#textarea {\\r\\n  margin-top: 0;\\r\\n  height: 100px;\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  color: #ccc;\\r\\n}\\r\\n\\r\\n.submit {\\r\\n  margin-bottom: 10px;\\r\\n  padding: 5px;\\r\\n  background: rgb(12, 12, 32);\\r\\n  color: #fff;\\r\\n  border-radius: 8px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.submit:hover {\\r\\n  background: #eee;\\r\\n  color: #006;\\r\\n}\\r\\n\\r\\n.commentContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.theCounter {\\r\\n  background-color: rgb(12, 12, 32);\\r\\n  border-radius: 10px;\\r\\n  padding: 5px 10px;\\r\\n  color: #eee;\\r\\n  display: flex;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n#commentCount {\\r\\n  margin-left: 5px;\\r\\n}\\r\\n\\r\\n.postComment {\\r\\n  list-style: none;\\r\\n  margin: auto;\\r\\n  margin-top: 15px;\\r\\n  padding: 5px 25px;\\r\\n  border-radius: 10px;\\r\\n  max-width: 90%;\\r\\n  max-height: 150px;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.commentList {\\r\\n  color: rgb(12, 12, 32);\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.user {\\r\\n  width: 95px;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.date {\\r\\n  width: 100px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-based-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://api-based-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://api-based-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://api-based-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://api-based-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://api-based-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://api-based-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://api-based-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://api-based-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://api-based-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load.js */ \"./src/modules/load.js\");\n\r\n\r\n\r\n(0,_modules_load_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://api-based-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/closeModal.js":
/*!***********************************!*\
  !*** ./src/modules/closeModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nconst close = () => {\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].closeModal.addEventListener('click', () => {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].overlay.classList.remove('active');\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal.classList.remove('active');\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postComment.innerHTML = '';\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].commentCount.innerHTML = 0;\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (close);\n\n//# sourceURL=webpack://api-based-app/./src/modules/closeModal.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (array, position) => {\r\n  if (array) {\r\n    position.innerHTML = `${array.length}`;\r\n  } else {\r\n    position.innerHTML = 0;\r\n  }\r\n  return position.innerHTML;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://api-based-app/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/commentEvent.js":
/*!*************************************!*\
  !*** ./src/modules/commentEvent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentToAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentToAPI.js */ \"./src/modules/commentToAPI.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.js */ \"./src/modules/date.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\n\r\n\r\nconst commentEvent = () => {\r\n  // eslint-disable-next-line consistent-return\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].submit.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    const position = e.path[0].attributes[2].value;\r\n    const id = parseInt(position, 10);\r\n    if (!_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text.value || !_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].textarea.value) {\r\n      return null;\r\n    }\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].postComment.innerHTML += `\r\n      <li class=\"commentList\">\r\n        <div class=\"date\">${(0,_date_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}</div>\r\n        <div class=\"user\">${_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text.value}:</div>\r\n        <div>${_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].textarea.value}</div>\r\n      <li>\r\n    `;\r\n    _commentToAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newComment(id, _variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text.value, _variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].textarea.value);\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addComment.reset();\r\n    let sum = parseInt(_variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].commentCount.innerHTML, 10);\r\n    sum += 1;\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].commentCount.innerHTML = sum;\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentEvent);\n\n//# sourceURL=webpack://api-based-app/./src/modules/commentEvent.js?");

/***/ }),

/***/ "./src/modules/commentToAPI.js":
/*!*************************************!*\
  !*** ./src/modules/commentToAPI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nclass CommentAPI {\r\n  newComment(item, name, message) {\r\n    fetch(`${_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].urlAPI}apps/${_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyAPI}comments`, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: item,\r\n        username: name,\r\n        comment: message,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    })\r\n      .then((response) => response.text())\r\n      .then(this.getFromAPI(item));\r\n  }\r\n\r\n  // eslint-disable-next-line consistent-return\r\n  getFromAPI = async (id) => {\r\n    try {\r\n      const response = await fetch(`${_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].urlAPI}apps/${_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyAPI}comments?item_id=${id}`);\r\n      if (response.status === 200) {\r\n        const result = await response.json();\r\n        return result;\r\n      }\r\n      return null;\r\n    } catch (error) {\r\n      return error;\r\n    }\r\n  }\r\n}\r\n\r\nconst commentAPI = new CommentAPI();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentAPI);\n\n//# sourceURL=webpack://api-based-app/./src/modules/commentToAPI.js?");

/***/ }),

/***/ "./src/modules/date.js":
/*!*****************************!*\
  !*** ./src/modules/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst date = () => {\r\n  const today = new Date();\r\n  const year = today.getFullYear();\r\n  const month = today.getMonth() + 1;\r\n  const theDate = today.getDate();\r\n  let newMonth = '';\r\n  if (month.length > 1) {\r\n    newMonth = month;\r\n  } else {\r\n    newMonth = `0${month}`;\r\n  }\r\n  const display = `${year}-${newMonth}-${theDate}`;\r\n  return display;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (date);\n\n//# sourceURL=webpack://api-based-app/./src/modules/date.js?");

/***/ }),

/***/ "./src/modules/displayShows.js":
/*!*************************************!*\
  !*** ./src/modules/displayShows.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _showsFromAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showsFromAPI.js */ \"./src/modules/showsFromAPI.js\");\n/* harmony import */ var _updateLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateLikes.js */ \"./src/modules/updateLikes.js\");\n/* harmony import */ var _showCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showCounter.js */ \"./src/modules/showCounter.js\");\n\r\n\r\n\r\n\r\n\r\nconst displayShows = async (shows) => {\r\n  shows = await (0,_showsFromAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  const section = shows.slice(14, 29);\r\n  let info = '';\r\n  section.forEach((show) => {\r\n    info += `\r\n      <div class=\"show\">\r\n        <img class=\"poster\" src=\"${show.image.medium}\">\r\n        <div class=\"top\">\r\n          <h3 class=\"title\">${show.name}</h3>\r\n          <div class=\"likes\">\r\n            <span id=\"${show.id}\" class=\"like material-icons-outlined\">favorite</span>\r\n            <p class=\"counter\"></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"options\">\r\n          <button class=\"comment\">Comment</button>\r\n          <button class=\"reservation\">Reservation</button>\r\n        </div>\r\n      </div>\r\n    `;\r\n  });\r\n  _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].intro.innerHTML = info;\r\n  (0,_updateLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const show = document.querySelectorAll('.show');\r\n  (0,_showCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(show);\r\n  return section;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);\n\n//# sourceURL=webpack://api-based-app/./src/modules/displayShows.js?");

/***/ }),

/***/ "./src/modules/getLikesFromAPI.js":
/*!****************************************!*\
  !*** ./src/modules/getLikesFromAPI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nconst getLikesFromAPI = async () => {\r\n  const response = await fetch(`${_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].urlAPI}apps/${_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyAPI}likes`);\r\n  const result = await response.json();\r\n  return result;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikesFromAPI);\n\n//# sourceURL=webpack://api-based-app/./src/modules/getLikesFromAPI.js?");

/***/ }),

/***/ "./src/modules/likeEvent.js":
/*!**********************************!*\
  !*** ./src/modules/likeEvent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayShows_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayShows.js */ \"./src/modules/displayShows.js\");\n/* harmony import */ var _postToAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postToAPI.js */ \"./src/modules/postToAPI.js\");\n\r\n\r\n\r\nconst likes = async () => {\r\n  const section = await (0,_displayShows_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const likes = document.querySelectorAll('.like');\r\n  likes.forEach((like) => {\r\n    like.addEventListener('click', (e) => {\r\n      let counter = parseInt(e.path[1].childNodes[3].innerHTML, 10);\r\n      if (!counter) {\r\n        counter = 1;\r\n      } else {\r\n        counter += 1;\r\n      }\r\n      e.path[1].childNodes[3].innerHTML = counter;\r\n      const position = parseInt(e.path[0].id, 10);\r\n      _postToAPI_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newLike(position);\r\n    });\r\n  });\r\n  return section;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likes);\n\n//# sourceURL=webpack://api-based-app/./src/modules/likeEvent.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.js */ \"./src/modules/logo.js\");\n/* harmony import */ var _logoRefresh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logoRefresh.js */ \"./src/modules/logoRefresh.js\");\n/* harmony import */ var _popupEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popupEvent.js */ \"./src/modules/popupEvent.js\");\n/* harmony import */ var _commentEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentEvent.js */ \"./src/modules/commentEvent.js\");\n\r\n\r\n\r\n\r\n\r\nconst load = () => {\r\n  (0,_logo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_popupEvent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_commentEvent_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  (0,_logoRefresh_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://api-based-app/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/logo.js":
/*!*****************************!*\
  !*** ./src/modules/logo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_movie_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/movie.png */ \"./src/modules/images/movie.png\");\n\r\n\r\nconst img = () => {\r\n  const imgLogo = document.getElementById('imgLogo');\r\n  const logo = imgLogo.attributes.src;\r\n  logo.value = _images_movie_png__WEBPACK_IMPORTED_MODULE_0__;\r\n  return logo;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (img);\n\n//# sourceURL=webpack://api-based-app/./src/modules/logo.js?");

/***/ }),

/***/ "./src/modules/logoRefresh.js":
/*!************************************!*\
  !*** ./src/modules/logoRefresh.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nconst logoRefresh = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].refresh.addEventListener('click', () => window.location.reload());\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logoRefresh);\n\n//# sourceURL=webpack://api-based-app/./src/modules/logoRefresh.js?");

/***/ }),

/***/ "./src/modules/popupEvent.js":
/*!***********************************!*\
  !*** ./src/modules/popupEvent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likeEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeEvent.js */ \"./src/modules/likeEvent.js\");\n/* harmony import */ var _closeModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeModal.js */ \"./src/modules/closeModal.js\");\n/* harmony import */ var _commentToAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentToAPI.js */ \"./src/modules/commentToAPI.js\");\n/* harmony import */ var _updateComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateComments.js */ \"./src/modules/updateComments.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst popup = async () => {\r\n  const cards = await (0,_likeEvent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const comment = document.querySelectorAll('.comment');\r\n  comment.forEach((button) => {\r\n    button.addEventListener('click', (e) => {\r\n      const idPosition = e.path[2].childNodes[3].childNodes[3].childNodes[1].attributes[0].value;\r\n      const idNumber = parseInt(idPosition, 10);\r\n      cards.forEach((card) => {\r\n        if (card.id === idNumber) {\r\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].cardName.innerHTML = card.name;\r\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].genres.innerHTML = `Genres: ${card.genres}`;\r\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].languages.innerHTML = `Language: ${card.language}`;\r\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].cardSummary.innerHTML = card.summary;\r\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].modalImg.attributes[1].value = card.image.medium;\r\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].submit.id = `${card.id}`;\r\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].modal.classList.add('active');\r\n          _variables_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].overlay.classList.add('active');\r\n\r\n          const update = async () => {\r\n            const dataAPI = await _commentToAPI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getFromAPI(idNumber);\r\n            if (dataAPI) {\r\n              (0,_updateComments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dataAPI, _variables_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].postComment);\r\n              (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(dataAPI, _variables_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].commentCount);\r\n            }\r\n          };\r\n          update();\r\n        }\r\n      });\r\n    });\r\n  });\r\n  (0,_closeModal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://api-based-app/./src/modules/popupEvent.js?");

/***/ }),

/***/ "./src/modules/postToAPI.js":
/*!**********************************!*\
  !*** ./src/modules/postToAPI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\n/* eslint-disable class-methods-use-this */\r\nclass LikeCounter {\r\n  // eslint-disable-next-line camelcase\r\n  newLike(item_id) {\r\n    fetch(`${_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].urlAPI}apps/${_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keyAPI}likes`, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    })\r\n      .then((response) => response.text());\r\n  }\r\n}\r\n\r\nconst likeCounter = new LikeCounter();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeCounter);\n\n//# sourceURL=webpack://api-based-app/./src/modules/postToAPI.js?");

/***/ }),

/***/ "./src/modules/showCounter.js":
/*!************************************!*\
  !*** ./src/modules/showCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nconst showCounter = (value) => {\r\n  if (!value.length) {\r\n    return null;\r\n  }\r\n  const number = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].count;\r\n  number.innerHTML = `(${value.length})`;\r\n  return value.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCounter);\r\n\n\n//# sourceURL=webpack://api-based-app/./src/modules/showCounter.js?");

/***/ }),

/***/ "./src/modules/showsFromAPI.js":
/*!*************************************!*\
  !*** ./src/modules/showsFromAPI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nconst loadShows = async () => {\r\n  const answer = await fetch(`${_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tvAPI}`);\r\n  const data = await answer.json();\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadShows);\n\n//# sourceURL=webpack://api-based-app/./src/modules/showsFromAPI.js?");

/***/ }),

/***/ "./src/modules/updateComments.js":
/*!***************************************!*\
  !*** ./src/modules/updateComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateComments = (comment, position) => {\r\n  if (comment.length) {\r\n    let details = '';\r\n    comment.forEach((message) => {\r\n      details += `\r\n        <li class=\"commentList\">\r\n          <div class=\"date\">${message.creation_date}</div>\r\n          <div class=\"user\">${message.username}:</div>\r\n          <div>${message.comment}</div>\r\n        <li>\r\n      `;\r\n    });\r\n    position.innerHTML = details;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateComments);\n\n//# sourceURL=webpack://api-based-app/./src/modules/updateComments.js?");

/***/ }),

/***/ "./src/modules/updateLikes.js":
/*!************************************!*\
  !*** ./src/modules/updateLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikesFromAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikesFromAPI.js */ \"./src/modules/getLikesFromAPI.js\");\n\r\n\r\nconst updateLikes = async () => {\r\n  const likesPosition = document.querySelectorAll('.like');\r\n  const info = await (0,_getLikesFromAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  likesPosition.forEach((like) => {\r\n    const getID = parseInt(like.id, 10);\r\n    info.forEach((value) => {\r\n      const compare = value.item_id;\r\n      if (compare === getID) {\r\n        like.parentElement.childNodes[3].innerHTML = value.likes;\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikes);\n\n//# sourceURL=webpack://api-based-app/./src/modules/updateLikes.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Variables {\r\n  intro = document.getElementById('container');\r\n\r\n  count = document.getElementById('count');\r\n\r\n  refresh = document.getElementById('refresh');\r\n\r\n  keyAPI = 'g3mf0gMCPpCVVbKGzPbE/';\r\n\r\n  urlAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\r\n\r\n  tvAPI = 'https://api.tvmaze.com/shows';\r\n\r\n  modal = document.querySelector('.modal');\r\n\r\n  overlay = document.getElementById('overlay');\r\n\r\n  modalImg = document.querySelector('.modal-image');\r\n\r\n  cardName = document.querySelector('.cardName');\r\n\r\n  genres = document.querySelector('.genres');\r\n\r\n  languages = document.querySelector('.languages');\r\n\r\n  cardSummary = document.querySelector('.cardSummary');\r\n\r\n  closeModal = document.querySelector('.close-button');\r\n\r\n  postComment = document.querySelector('.postComment');\r\n\r\n  text = document.getElementById('text');\r\n\r\n  textarea = document.getElementById('textarea');\r\n\r\n  submit = document.querySelector('.submit');\r\n\r\n  commentCount = document.getElementById('commentCount');\r\n\r\n  addComment = document.querySelector('.addComment');\r\n}\r\n\r\nconst variables = new Variables();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variables);\n\n//# sourceURL=webpack://api-based-app/./src/modules/variables.js?");

/***/ }),

/***/ "./src/modules/images/movie.png":
/*!**************************************!*\
  !*** ./src/modules/images/movie.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef55a60183c37c7d1fbc.png\";\n\n//# sourceURL=webpack://api-based-app/./src/modules/images/movie.png?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;