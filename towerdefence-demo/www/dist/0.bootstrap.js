(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/zkwasm_contract.js":
/*!*********************************!*\
  !*** ../pkg/zkwasm_contract.js ***!
  \*********************************/
/*! exports provided: __wbg_set_wasm, step, load, init, get_state, zkmain, clip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zkwasm_contract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zkwasm_contract_bg.wasm */ \"../pkg/zkwasm_contract_bg.wasm\");\n/* harmony import */ var _zkwasm_contract_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zkwasm_contract_bg.js */ \"../pkg/zkwasm_contract_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _zkwasm_contract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"step\", function() { return _zkwasm_contract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"step\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return _zkwasm_contract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"load\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return _zkwasm_contract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"init\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"get_state\", function() { return _zkwasm_contract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"get_state\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zkmain\", function() { return _zkwasm_contract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"zkmain\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clip\", function() { return _zkwasm_contract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"clip\"]; });\n\n\n\nObject(_zkwasm_contract_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_zkwasm_contract_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/zkwasm_contract.js?");

/***/ }),

/***/ "../pkg/zkwasm_contract_bg.js":
/*!************************************!*\
  !*** ../pkg/zkwasm_contract_bg.js ***!
  \************************************/
/*! exports provided: __wbg_set_wasm, step, load, init, get_state, zkmain, clip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"step\", function() { return step; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return load; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_state\", function() { return get_state; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"zkmain\", function() { return zkmain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clip\", function() { return clip; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n/**\n* Step function receives a encoded command and changes the global state accordingly\n* @param {bigint} command\n*/\nfunction step(command) {\n    wasm.step(command);\n}\n\n/**\n* @param {bigint} account\n* @param {bigint} r0\n* @param {bigint} r1\n* @param {bigint} r2\n* @param {bigint} r3\n*/\nfunction load(account, r0, r1, r2, r3) {\n    wasm.load(account, r0, r1, r2, r3);\n}\n\n/**\n* @param {bigint} seed\n*/\nfunction init(seed) {\n    wasm.init(seed);\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n* @returns {string}\n*/\nfunction get_state() {\n    let deferred1_0;\n    let deferred1_1;\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        wasm.get_state(retptr);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        deferred1_0 = r0;\n        deferred1_1 = r1;\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);\n    }\n}\n\n/**\n* @returns {bigint}\n*/\nfunction zkmain() {\n    const ret = wasm.zkmain();\n    return ret;\n}\n\nlet cachedBigUint64Memory0 = null;\n\nfunction getBigUint64Memory0() {\n    if (cachedBigUint64Memory0 === null || cachedBigUint64Memory0.byteLength === 0) {\n        cachedBigUint64Memory0 = new BigUint64Array(wasm.memory.buffer);\n    }\n    return cachedBigUint64Memory0;\n}\n\nfunction getArrayU64FromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return getBigUint64Memory0().subarray(ptr / 8, ptr / 8 + len);\n}\n/**\n* @returns {BigUint64Array}\n*/\nfunction clip() {\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        wasm.clip(retptr);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        var v1 = getArrayU64FromWasm0(r0, r1).slice();\n        wasm.__wbindgen_free(r0, r1 * 8, 8);\n        return v1;\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n    }\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/zkwasm_contract_bg.js?");

/***/ }),

/***/ "../pkg/zkwasm_contract_bg.wasm":
/*!**************************************!*\
  !*** ../pkg/zkwasm_contract_bg.wasm ***!
  \**************************************/
/*! exports provided: memory, load, get_state, zkmain, init, step, clip, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/zkwasm_contract_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tdgame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tdgame */ \"../pkg/zkwasm_contract.js\");\n\n\ntdgame__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);