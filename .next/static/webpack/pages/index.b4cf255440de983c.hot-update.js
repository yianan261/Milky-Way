"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Carousel2.js":
/*!****************************!*\
  !*** ./pages/Carousel2.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Carousel2 = function() {\n    var _this1 = _this;\n    _s();\n    // We will start by storing the index of the current image in the state.\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentImage = ref[0], setCurrentImage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"img2.jpg\",\n        \"img3.jpg\",\n        \"img1.jpg\"\n    ]), images = ref1[0], setImg = ref1[1];\n    var img1 = [\n        \"img2.jpg\",\n        \"img3.jpg\",\n        \"img1.jpg\"\n    ];\n    /**\n   * Render the next card when the user clicks on right button\n   */ var moveRight = function() {\n        if (currentImage < images.length - 1) {\n            setCurrentImage(currentImage + 1);\n        } else {\n            setCurrentImage(-1);\n        }\n    };\n    /**\n   * Render the next card when the user clicks on left button\n   */ var moveLeft = function() {\n        if (currentImage > 0) {\n            setCurrentImage(currentImage - 1);\n        }\n    };\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n        fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n        lineNumber: 29,\n        columnNumber: 3\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center pt-10 pb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"btn text-2xl\",\n                        onClick: moveLeft,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/arrowleft.png\",\n                            height: 30,\n                            width: 30\n                        }, void 0, false, {\n                            fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    images.slice(currentImage, currentImage + 1).map(function(img, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card w-75\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"carosel-img-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: img,\n                                            alt: \"cannot render image\",\n                                            className: \"carosel-img rounded-2xl shadow-2xl shadow-cyan-400/60\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"viewDrop grid justify-items-center pt-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: \"/Drop\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    id: \"dropButton \",\n                                                    className: \"bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg shadow-cyan-500/50 hover:animate-pulse \",\n                                                    children: \"View Drop\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this1)\n                        }, index, false, {\n                            fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this1);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"btn \",\n                        onClick: moveRight,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/arrowright.png\",\n                            height: 30,\n                            width: 30\n                        }, void 0, false, {\n                            fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-3xl text-center text-white hover:text-violet-300 hover:animate-pulse antialiased \",\n                children: \"Discover the Milkiverse\"\n            }, void 0, false, {\n                fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/chenyian261/Documents/GitHub/newNFTMarket/pages/Carousel2.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(Carousel2, \"9Qu+g6Ptxt7Yivl9UFMrJ7P+arw=\");\n_c = Carousel2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel2);\nvar _c;\n$RefreshReg$(_c, \"Carousel2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxFQUFFOzs7OztpQ0FBSTs7Ozs7NkJBQy9DOzs7Ozs7cUJBQ0w7MEJBQ04sOERBQUNOLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx3RkFBd0Y7MEJBQ3BHLHlCQUF5Qjs7Ozs7cUJBQ3RCOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FqRUtYLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQW1FZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0Nhcm91c2VsMi5qcz9mOWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IENhcm91c2VsMiA9ICgpID0+IHtcbiAgLy8gV2Ugd2lsbCBzdGFydCBieSBzdG9yaW5nIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBpbWFnZSBpbiB0aGUgc3RhdGUuXG4gIGNvbnN0IFtjdXJyZW50SW1hZ2UsIHNldEN1cnJlbnRJbWFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1nXSA9IHVzZVN0YXRlKFtcImltZzIuanBnXCIsIFwiaW1nMy5qcGdcIiwgXCJpbWcxLmpwZ1wiXSk7XG4gIGNvbnN0IGltZyA9IFtcImltZzIuanBnXCIsIFwiaW1nMy5qcGdcIiwgXCJpbWcxLmpwZ1wiXTtcbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgbmV4dCBjYXJkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHJpZ2h0IGJ1dHRvblxuICAgKi9cbiAgbGV0IG1vdmVSaWdodCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudEltYWdlIDwgaW1hZ2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHNldEN1cnJlbnRJbWFnZShjdXJyZW50SW1hZ2UgKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudEltYWdlKC0xKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgbmV4dCBjYXJkIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGxlZnQgYnV0dG9uXG4gICAqL1xuICBsZXQgbW92ZUxlZnQgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRJbWFnZSA+IDApIHtcbiAgICAgIHNldEN1cnJlbnRJbWFnZShjdXJyZW50SW1hZ2UgLSAxKTtcbiAgICB9XG4gIH07XG4gIDxidXR0b24+PC9idXR0b24+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHQtMTAgcGItMjBcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIHRleHQtMnhsXCIgb25DbGljaz17bW92ZUxlZnR9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYXJyb3dsZWZ0LnBuZ1wiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAge2ltYWdlcy5zbGljZShjdXJyZW50SW1hZ2UsIGN1cnJlbnRJbWFnZSArIDEpLm1hcCgoaW1nLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB3LTc1XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm9zZWwtaW1nLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltZ31cbiAgICAgICAgICAgICAgICAgIGFsdD1cImNhbm5vdCByZW5kZXIgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3NlbC1pbWcgcm91bmRlZC0yeGwgc2hhZG93LTJ4bCBzaGFkb3ctY3lhbi00MDAvNjBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3RHJvcCBncmlkIGp1c3RpZnktaXRlbXMtY2VudGVyIHB0LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvRHJvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wQnV0dG9uIFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWN5YW4tNTAwIHRvLWJsdWUtNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIHNoYWRvdy1sZyBzaGFkb3ctY3lhbi01MDAvNTAgaG92ZXI6YW5pbWF0ZS1wdWxzZSBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBEcm9wXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gIFwiIG9uQ2xpY2s9e21vdmVSaWdodH0+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9hcnJvd3JpZ2h0LnBuZ1wiIGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXZpb2xldC0zMDAgaG92ZXI6YW5pbWF0ZS1wdWxzZSBhbnRpYWxpYXNlZCBcIj5cbiAgICAgICAge1wiRGlzY292ZXIgdGhlIE1pbGtpdmVyc2VcIn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWwyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJDYXJvdXNlbDIiLCJjdXJyZW50SW1hZ2UiLCJzZXRDdXJyZW50SW1hZ2UiLCJpbWFnZXMiLCJzZXRJbWciLCJpbWciLCJtb3ZlUmlnaHQiLCJsZW5ndGgiLCJtb3ZlTGVmdCIsImJ1dHRvbiIsImRpdiIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJzbGljZSIsIm1hcCIsImluZGV4IiwiYWx0IiwiaHJlZiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Carousel2.js\n");

/***/ })

});