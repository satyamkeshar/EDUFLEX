"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/Redux/store.js":
/*!****************************!*\
  !*** ./src/Redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userSlice */ \"./src/Redux/userSlice.js\");\n\n\nconst customizedMiddleware = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.getDefaultMiddleware)({\n    serializableCheck: false\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        user: _userSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    middleware: []\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUmVkdXgvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RTtBQUVsQztBQUNyQyxNQUFNRyx1QkFBdUJGLHNFQUFvQkEsQ0FBQztJQUNoREcsbUJBQW1CO0FBQ3JCO0FBRU8sTUFBTUMsUUFBUUwsZ0VBQWNBLENBQUM7SUFDbENNLFNBQVM7UUFDUEMsTUFBTUwsa0RBQVdBO0lBQ25CO0lBQ0FNLFlBQVksRUFBRTtBQUNoQixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1ZmxleC8uL3NyYy9SZWR1eC9zdG9yZS5qcz83NmJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBnZXREZWZhdWx0TWlkZGxld2FyZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3VzZXJTbGljZSdcbmNvbnN0IGN1c3RvbWl6ZWRNaWRkbGV3YXJlID0gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xuICBzZXJpYWxpemFibGVDaGVjazogZmFsc2Vcbn0pXG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIHVzZXI6IHVzZXJSZWR1Y2VyXG4gIH0sXG4gIG1pZGRsZXdhcmU6IFtdXG59KSJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwidXNlclJlZHVjZXIiLCJjdXN0b21pemVkTWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwic3RvcmUiLCJyZWR1Y2VyIiwidXNlciIsIm1pZGRsZXdhcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Redux/store.js\n");

/***/ }),

/***/ "./src/Redux/userSlice.js":
/*!********************************!*\
  !*** ./src/Redux/userSlice.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setAuthUser: () => (/* binding */ setAuthUser),\n/* harmony export */   userSlice: () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    user: null\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"counter\",\n    initialState,\n    reducers: {\n        setAuthUser: (state, payload)=>{\n            return {\n                user: payload.payload.user\n            };\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { setAuthUser } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUmVkdXgvdXNlclNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLGVBQWU7SUFDbkJDLE1BQUs7QUFDUDtBQUVPLE1BQU1DLFlBQVlILDZEQUFXQSxDQUFDO0lBQ25DSSxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDUkMsYUFBYSxDQUFDQyxPQUFNQztZQUNsQixPQUFPO2dCQUNMTixNQUFNTSxRQUFRQSxPQUFPLENBQUNOLElBQUk7WUFDNUI7UUFDRjtJQUNGO0FBQ0YsR0FBRTtBQUdGLCtEQUErRDtBQUN4RCxNQUFNLEVBQUVJLFdBQVcsRUFBRSxHQUFHSCxVQUFVTSxPQUFPO0FBRWhELGlFQUFlTixVQUFVTyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1ZmxleC8uL3NyYy9SZWR1eC91c2VyU2xpY2UuanM/Nzk4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjpudWxsXG59XG5cbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdjb3VudGVyJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEF1dGhVc2VyOiAoc3RhdGUscGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcjogcGF5bG9hZC5wYXlsb2FkLnVzZXJcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59KVxuXG5cbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHsgc2V0QXV0aFVzZXIgfSA9IHVzZXJTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsInVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEF1dGhVc2VyIiwic3RhdGUiLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Redux/userSlice.js\n");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"footer-content\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-12 col-sm-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-0 text-muted text-medium\",\n                                children: \"Colored Strategies 2021\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                                lineNumber: 10,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                            lineNumber: 9,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-sm-6 d-none d-sm-block\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"breadcrumb pt-0 pe-0 mb-0 float-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"breadcrumb-item mb-0 text-medium\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://1.envato.market/BX5oGy\",\n                                            target: \"_blank\",\n                                            className: \"btn-link\",\n                                            children: \"Review\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                                            lineNumber: 17,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                                        lineNumber: 16,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"breadcrumb-item mb-0 text-medium\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://1.envato.market/BX5oGy\",\n                                            target: \"_blank\",\n                                            className: \"btn-link\",\n                                            children: \"Purchase\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"breadcrumb-item mb-0 text-medium\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://acorn-html-docs.coloredstrategies.com/\",\n                                            target: \"_blank\",\n                                            className: \"btn-link\",\n                                            children: \"Docs\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\components\\\\Footer.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRXpCLFNBQVNDO0lBQ1AscUJBQ0UsOERBQUNDO2tCQUNELDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUVELFdBQVU7MENBQThCOzs7Ozs7Ozs7OztzQ0FJN0MsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRTtnQ0FBR0YsV0FBVTs7a0RBQ1osOERBQUNHO3dDQUFHSCxXQUFVO2tEQUNaLDRFQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDTEMsUUFBTzs0Q0FDUE4sV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7a0RBSUgsOERBQUNHO3dDQUFHSCxXQUFVO2tEQUNaLDRFQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDTEMsUUFBTzs0Q0FDUE4sV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7a0RBSUgsOERBQUNHO3dDQUFHSCxXQUFVO2tEQUNaLDRFQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDTEMsUUFBTzs0Q0FDUE4sV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdqQjtBQUVBLGlFQUFlSCxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1ZmxleC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcz85ZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNlwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LW11dGVkIHRleHQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIENvbG9yZWQgU3RyYXRlZ2llcyAyMDIxXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBkLW5vbmUgZC1zbS1ibG9ja1wiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWIgcHQtMCBwZS0wIG1iLTAgZmxvYXQtZW5kXCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gbWItMCB0ZXh0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly8xLmVudmF0by5tYXJrZXQvQlg1b0d5XCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tbGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmV2aWV3XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIG1iLTAgdGV4dC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vMS5lbnZhdG8ubWFya2V0L0JYNW9HeVwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFB1cmNoYXNlXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIG1iLTAgdGV4dC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYWNvcm4taHRtbC1kb2NzLmNvbG9yZWRzdHJhdGVnaWVzLmNvbS9cIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1saW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEb2NzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9vdGVyIiwiZm9vdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInVsIiwibGkiLCJhIiwiaHJlZiIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Footer.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Redux/store */ \"./src/Redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_3__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n            store: _Redux_store__WEBPACK_IMPORTED_MODULE_1__.store,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.Toaster, {\n                    position: \"top-center\",\n                    reverseOrder: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 16,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\pages\\\\_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Satyam keshar\\\\OneDrive\\\\Desktop\\\\EDUFLEX\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 15,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDQztBQUNNO0FBQzJCO0FBQ3RDO0FBQ087QUFDQztBQUNGO0FBR3hDLFNBQVNTLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDdkMsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3ZCLHFCQUNDO2tCQUNDLDRFQUFDUCxpREFBUUE7WUFBQ0QsT0FBT0EsK0NBQUtBOzs4QkFDckIsOERBQUNPLG9EQUFPQTtvQkFDUE0sVUFBUztvQkFDVEMsY0FBYzs7Ozs7OzhCQUVmLDhEQUFDSjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSzVCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZHVmbGV4Ly4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdG9yZSB9IGZyb20gJ0AvUmVkdXgvc3RvcmUnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLCBnZXRBdXRoIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0gPlxuXHRcdFx0XHQ8VG9hc3RlclxuXHRcdFx0XHRcdHBvc2l0aW9uPVwidG9wLWNlbnRlclwiXG5cdFx0XHRcdFx0cmV2ZXJzZU9yZGVyPXt0cnVlfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHRcdHsvKiA8Rm9vdGVyIC8+ICovfVxuXHRcdFx0PC9Qcm92aWRlcj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsic3RvcmUiLCJQcm92aWRlciIsImluaXRpYWxpemVBcHAiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnZXRBdXRoIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwiVG9hc3RlciIsInVzZVJvdXRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicG9zaXRpb24iLCJyZXZlcnNlT3JkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();