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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_peevs_Desktop_Hackathon_newNFTMarket_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_peevs_Desktop_Hackathon_newNFTMarket_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_peevs_Desktop_Hackathon_newNFTMarket_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json */ \"./artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n/* pages/index.js */ \n\n\n// import Web3Modal from \"web3modal\";\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var openNFT = function openNFT(_nft) {\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push({\n            pathname: \"/nft-desc\",\n            query: {\n                price: _nft.price,\n                tokenId: _nft.tokenId,\n                seller: _nft.seller,\n                owner: _nft.owner,\n                image: _nft.image,\n                name: _nft.name,\n                description: _nft.description\n            }\n        });\n    /* needs the user to sign the transaction, so will use Web3Provider and sign it */ // const web3Modal = new Web3Modal();\n    // const connection = await web3Modal.connect();\n    // const provider = new ethers.providers.Web3Provider(connection);\n    // const signer = provider.getSigner();\n    // const contract = new ethers.Contract(\n    //   marketplaceAddress,\n    //   NFTMarketplace.abi,\n    //   signer\n    // );\n    /* user will be prompted to pay the asking proces to complete the transaction */ // const price = ethers.utils.parseUnits(nft.price.toString(), \"ether\");\n    // const transaction = await contract.createMarketSale(nft.tokenId, {\n    //   value: price,\n    // });\n    // await transaction.wait();\n    // loadNFTs();\n    };\n    var renderNFT = function renderNFT() {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"px-4 py-10\",\n                style: {\n                    maxWidth: \"1600px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4\",\n                    children: nfts.map(function(nft, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"border shadow-md shadow-cyan-500/50 rounded-xl bg-white-100 m-4 overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                class: \"relative block border border-gray-100\",\n                                href: \"#\",\n                                onClick: function() {\n                                    return openNFT(nft);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        class: \"object-contain w-full h-56 lg:h-72\",\n                                        src: nft.image,\n                                        alt: \"Build Your Own Drone\",\n                                        loading: \"lazy\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        class: \"p-6\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h5\", {\n                                                class: \"mt-4 text-lg text-white font-bold\",\n                                                children: nft.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n                                                lineNumber: 114,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                class: \"mt-2 text-sm text-white\",\n                                                children: [\n                                                    nft.price,\n                                                    \" ETH\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n                                                lineNumber: 116,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                class: \"block w-full p-4 mt-4 text-sm font-medium bg-pink-500 rounded-md\",\n                                                type: \"button\",\n                                                onClick: function() {\n                                                    return openNFT(nft);\n                                                },\n                                                children: \"VIEW MORE\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n                                                lineNumber: 118,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, _this)\n                        }, nft.tokenId, false, {\n                            fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n                            lineNumber: 94,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"not-loaded\"), loadingState = ref1[0], setLoadingState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadNFTs();\n    }, []);\n    function loadNFTs() {\n        return _loadNFTs.apply(this, arguments);\n    }\n    function _loadNFTs() {\n        _loadNFTs = _asyncToGenerator(_Users_peevs_Desktop_Hackathon_newNFTMarket_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee1() {\n            var provider, contract, data, items;\n            return _Users_peevs_Desktop_Hackathon_newNFTMarket_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx1) {\n                while(1)switch(_ctx1.prev = _ctx1.next){\n                    case 0:\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.JsonRpcProvider(\"https://rpctest.meter.io\");\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.marketplaceAddress, _artifacts_contracts_NFTMarketplace_sol_NFTMarketplace_json__WEBPACK_IMPORTED_MODULE_6__.abi, provider);\n                        _ctx1.next = 4;\n                        return contract.fetchMarketItems();\n                    case 4:\n                        data = _ctx1.sent;\n                        _ctx1.next = 7;\n                        return Promise.all(data.map(function() {\n                            var _ref = _asyncToGenerator(_Users_peevs_Desktop_Hackathon_newNFTMarket_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(i) {\n                                var tokenUri, meta, price, item;\n                                return _Users_peevs_Desktop_Hackathon_newNFTMarket_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                    while(1)switch(_ctx.prev = _ctx.next){\n                                        case 0:\n                                            _ctx.next = 2;\n                                            return contract.tokenURI(i.tokenId);\n                                        case 2:\n                                            tokenUri = _ctx.sent;\n                                            _ctx.next = 5;\n                                            return axios__WEBPACK_IMPORTED_MODULE_3___default().get(tokenUri);\n                                        case 5:\n                                            meta = _ctx.sent;\n                                            price = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.formatUnits(i.price.toString(), \"ether\");\n                                            item = {\n                                                price: price,\n                                                tokenId: i.tokenId.toNumber(),\n                                                seller: i.seller,\n                                                owner: i.owner,\n                                                image: meta.data.image,\n                                                name: meta.data.name,\n                                                description: meta.data.description\n                                            };\n                                            return _ctx.abrupt(\"return\", item);\n                                        case 9:\n                                        case \"end\":\n                                            return _ctx.stop();\n                                    }\n                                }, _callee);\n                            }));\n                            return function(i) {\n                                return _ref.apply(this, arguments);\n                            };\n                        }()));\n                    case 7:\n                        items = _ctx1.sent;\n                        setNfts(items);\n                        setLoadingState(\"loaded\");\n                    case 10:\n                    case \"end\":\n                        return _ctx1.stop();\n                }\n            }, _callee1);\n        }));\n        return _loadNFTs.apply(this, arguments);\n    }\n    if (loadingState === \"loaded\" && !nfts && !nfts.length) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        className: \"px-20 py-10 text-3xl\",\n        children: \"No items in marketplace\"\n    }, void 0, false, {\n        fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n        lineNumber: 136,\n        columnNumber: 12\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"NFTdisplay \",\n        children: renderNFT()\n    }, void 0, false, {\n        fileName: \"/Users/peevs/Desktop/Hackathon/newNFTMarket/pages/index.js\",\n        lineNumber: 137,\n        columnNumber: 10\n    }, this);\n};\n_s(Home, \"pYULULWO8qbsm7izx6npS09J9kA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzRDQUM5REwsSUFBSSxHQUFHO2dEQUNUOUMsS0FBSyxFQUFMQSxLQUFLO2dEQUNMQyxPQUFPLEVBQUVjLENBQUMsQ0FBQ2QsT0FBTyxDQUFDbUQsUUFBUSxFQUFFO2dEQUM3QmxELE1BQU0sRUFBRWEsQ0FBQyxDQUFDYixNQUFNO2dEQUNoQkMsS0FBSyxFQUFFWSxDQUFDLENBQUNaLEtBQUs7Z0RBQ2RDLEtBQUssRUFBRXlDLElBQUksQ0FBQ1YsSUFBSSxDQUFDL0IsS0FBSztnREFDdEJDLElBQUksRUFBRXdDLElBQUksQ0FBQ1YsSUFBSSxDQUFDOUIsSUFBSTtnREFDcEJDLFdBQVcsRUFBRXVDLElBQUksQ0FBQ1YsSUFBSSxDQUFDN0IsV0FBVzs2Q0FDbkMsQ0FBQzt5RUFDS3dDLElBQUk7Ozs7Ozs2QkFDWjs0Q0FkZS9CLENBQUM7Ozs0QkFjZixDQUNIOzt3QkFoQktxQixLQUFLLGFBZ0JWO3dCQUNEUixPQUFPLENBQUNRLEtBQUssQ0FBQyxDQUFDO3dCQUNmTCxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7OztTQUMzQjtlQW5DY0MsU0FBUTs7SUFvSHZCLElBQUlGLFlBQVksS0FBSyxRQUFRLElBQUksQ0FBQ2xCLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUN5QyxNQUFNLEVBQ3BELHFCQUFPLDhEQUFDQyxJQUFFO1FBQUM3QyxTQUFTLEVBQUMsc0JBQXNCO2tCQUFDLHlCQUF1Qjs7Ozs7WUFBSyxDQUFDO0lBQzNFLHFCQUFPLDhEQUFDRCxLQUFHO1FBQUNDLFNBQVMsRUFBQyxhQUFhO2tCQUFFRixTQUFTLEVBQUU7Ozs7O1lBQU8sQ0FBQztDQUN6RDtHQTlIdUJiLElBQUk7O1FBRVhILGtEQUFTOzs7QUFGRkcsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIHBhZ2VzL2luZGV4LmpzICovXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IG1hcmtldHBsYWNlQWRkcmVzcyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuaW1wb3J0IE5GVE1hcmtldHBsYWNlIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVE1hcmtldHBsYWNlLnNvbC9ORlRNYXJrZXRwbGFjZS5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZShcIm5vdC1sb2FkZWRcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZE5GVHMoKTtcbiAgfSwgW10pO1xuICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpIHtcbiAgICAvKiBjcmVhdGUgYSBnZW5lcmljIHByb3ZpZGVyIGFuZCBxdWVyeSBmb3IgdW5zb2xkIG1hcmtldCBpdGVtcyAqL1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKFxuICAgICAgXCJodHRwczovL3JwY3Rlc3QubWV0ZXIuaW9cIlxuICAgICk7XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgbWFya2V0cGxhY2VBZGRyZXNzLFxuICAgICAgTkZUTWFya2V0cGxhY2UuYWJpLFxuICAgICAgcHJvdmlkZXJcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb250cmFjdC5mZXRjaE1hcmtldEl0ZW1zKCk7XG5cbiAgICAvKlxuICAgICAqICBtYXAgb3ZlciBpdGVtcyByZXR1cm5lZCBmcm9tIHNtYXJ0IGNvbnRyYWN0IGFuZCBmb3JtYXRcbiAgICAgKiAgdGhlbSBhcyB3ZWxsIGFzIGZldGNoIHRoZWlyIHRva2VuIG1ldGFkYXRhXG4gICAgICovXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGRhdGEubWFwKGFzeW5jIChpKSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKTtcbiAgICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IGF4aW9zLmdldCh0b2tlblVyaSk7XG4gICAgICAgIGxldCBwcmljZSA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhpLnByaWNlLnRvU3RyaW5nKCksIFwiZXRoZXJcIik7XG4gICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgIHByaWNlLFxuICAgICAgICAgIHRva2VuSWQ6IGkudG9rZW5JZC50b051bWJlcigpLFxuICAgICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXG4gICAgICAgICAgb3duZXI6IGkub3duZXIsXG4gICAgICAgICAgaW1hZ2U6IG1ldGEuZGF0YS5pbWFnZSxcbiAgICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogbWV0YS5kYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICBzZXROZnRzKGl0ZW1zKTtcbiAgICBzZXRMb2FkaW5nU3RhdGUoXCJsb2FkZWRcIik7XG4gIH1cbiAgZnVuY3Rpb24gb3Blbk5GVChfbmZ0KSB7XG4gICAgUm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6IFwiL25mdC1kZXNjXCIsXG4gICAgICBxdWVyeToge1xuICAgICAgICBwcmljZTogX25mdC5wcmljZSxcbiAgICAgICAgdG9rZW5JZDogX25mdC50b2tlbklkLFxuICAgICAgICBzZWxsZXI6IF9uZnQuc2VsbGVyLFxuICAgICAgICBvd25lcjogX25mdC5vd25lcixcbiAgICAgICAgaW1hZ2U6IF9uZnQuaW1hZ2UsXG4gICAgICAgIG5hbWU6IF9uZnQubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IF9uZnQuZGVzY3JpcHRpb24sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8qIG5lZWRzIHRoZSB1c2VyIHRvIHNpZ24gdGhlIHRyYW5zYWN0aW9uLCBzbyB3aWxsIHVzZSBXZWIzUHJvdmlkZXIgYW5kIHNpZ24gaXQgKi9cbiAgICAvLyBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XG4gICAgLy8gY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XG4gICAgLy8gY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XG4gICAgLy8gY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgLy8gY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgIC8vICAgbWFya2V0cGxhY2VBZGRyZXNzLFxuICAgIC8vICAgTkZUTWFya2V0cGxhY2UuYWJpLFxuICAgIC8vICAgc2lnbmVyXG4gICAgLy8gKTtcblxuICAgIC8qIHVzZXIgd2lsbCBiZSBwcm9tcHRlZCB0byBwYXkgdGhlIGFza2luZyBwcm9jZXMgdG8gY29tcGxldGUgdGhlIHRyYW5zYWN0aW9uICovXG4gICAgLy8gY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhuZnQucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcbiAgICAvLyBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZU1hcmtldFNhbGUobmZ0LnRva2VuSWQsIHtcbiAgICAvLyAgIHZhbHVlOiBwcmljZSxcbiAgICAvLyB9KTtcbiAgICAvLyBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KCk7XG4gICAgLy8gbG9hZE5GVHMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlck5GVCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0xMFwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjE2MDBweFwiIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNCBwdC00XCI+XG4gICAgICAgICAgICB7bmZ0cy5tYXAoKG5mdCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtuZnQudG9rZW5JZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgc2hhZG93LW1kIHNoYWRvdy1jeWFuLTUwMC81MCByb3VuZGVkLXhsIGJnLXdoaXRlLTEwMCBtLTQgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInJlbGF0aXZlIGJsb2NrIGJvcmRlciBib3JkZXItZ3JheS0xMDBcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbk5GVChuZnQpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJvYmplY3QtY29udGFpbiB3LWZ1bGwgaC01NiBsZzpoLTcyXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtuZnQuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkJ1aWxkIFlvdXIgT3duIERyb25lXCJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibXQtNCB0ZXh0LWxnIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+e25mdC5uYW1lfTwvaDU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0yIHRleHQtc20gdGV4dC13aGl0ZVwiPntuZnQucHJpY2V9IEVUSDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayB3LWZ1bGwgcC00IG10LTQgdGV4dC1zbSBmb250LW1lZGl1bSBiZy1waW5rLTUwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuTkZUKG5mdCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBWSUVXIE1PUkVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBpZiAobG9hZGluZ1N0YXRlID09PSBcImxvYWRlZFwiICYmICFuZnRzICYmICFuZnRzLmxlbmd0aClcbiAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT1cInB4LTIwIHB5LTEwIHRleHQtM3hsXCI+Tm8gaXRlbXMgaW4gbWFya2V0cGxhY2U8L2gxPjtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiTkZUZGlzcGxheSBcIj57cmVuZGVyTkZUKCl9PC9kaXY+O1xufVxuIl0sIm5hbWVzIjpbImV0aGVycyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYXJrZXRwbGFjZUFkZHJlc3MiLCJORlRNYXJrZXRwbGFjZSIsIkhvbWUiLCJvcGVuTkZUIiwiX25mdCIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicHJpY2UiLCJ0b2tlbklkIiwic2VsbGVyIiwib3duZXIiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInJlbmRlck5GVCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWF4V2lkdGgiLCJuZnRzIiwibWFwIiwibmZ0IiwiaSIsImEiLCJjbGFzcyIsImhyZWYiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwibG9hZGluZyIsImg1IiwicCIsImJ1dHRvbiIsInR5cGUiLCJzZXROZnRzIiwicm91dGVyIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwibG9hZE5GVHMiLCJwcm92aWRlciIsImNvbnRyYWN0IiwiZGF0YSIsIml0ZW1zIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwiQ29udHJhY3QiLCJhYmkiLCJmZXRjaE1hcmtldEl0ZW1zIiwiUHJvbWlzZSIsImFsbCIsInRva2VuVXJpIiwibWV0YSIsIml0ZW0iLCJ0b2tlblVSSSIsImdldCIsInV0aWxzIiwiZm9ybWF0VW5pdHMiLCJ0b1N0cmluZyIsInRvTnVtYmVyIiwibGVuZ3RoIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});