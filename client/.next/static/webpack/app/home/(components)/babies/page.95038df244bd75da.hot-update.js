"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/home/(components)/babies/page",{

/***/ "(app-pages-browser)/./app/home/(components)/babies/page.tsx":
/*!***********************************************!*\
  !*** ./app/home/(components)/babies/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_app_home_components_babies_page_tsx_import_Redressed_arguments_subsets_latin_weight_400_variableName_redressed___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\"import\":\"Redressed\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"]}],\"variableName\":\"redressed\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"app\\\\\\\\home\\\\\\\\(components)\\\\\\\\babies\\\\\\\\page.tsx\\\",\\\"import\\\":\\\"Redressed\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\"]}],\\\"variableName\\\":\\\"redressed\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_app_home_components_babies_page_tsx_import_Redressed_arguments_subsets_latin_weight_400_variableName_redressed___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_home_components_babies_page_tsx_import_Redressed_arguments_subsets_latin_weight_400_variableName_redressed___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Contenair__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Contenair */ \"(app-pages-browser)/./app/home/Contenair.tsx\");\n/* harmony import */ var _SliceText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SliceText */ \"(app-pages-browser)/./app/home/SliceText.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Babies = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [showHide, setShowHide] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const res = await fetch(\"http://localhost:8000/products/\");\n                const data = await res.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Contenair__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \" https://luckypandakids.com/cdn/shop/files/Untitled_1200_x_400_px_2400_x_800_px_1.jpg?v=1685123308&width=1600\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex  justify-center items-center mt-10 mb-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\".concat((next_font_google_target_css_path_app_home_components_babies_page_tsx_import_Redressed_arguments_subsets_latin_weight_400_variableName_redressed___WEBPACK_IMPORTED_MODULE_4___default().className), \" font-extrabold text-4xl border-2\"),\n                        children: \"Babies's Products\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-4 gap-4\",\n                    children: showHide === true ? data.slice(0, 8).map((el, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-sm rounded overflow-hidden shadow-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-full\",\n                                    src: el.image,\n                                    alt: \"Sunset in the mountains\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-6 py-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"font-bold text-xl mb-2\",\n                                            children: el.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-700 text-base\",\n                                            children: (0,_SliceText__WEBPACK_IMPORTED_MODULE_2__.SliceText)(el.description)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-6 pt-4 pb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\",\n                                            children: \"#Men\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\",\n                                            children: \"#suit\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\",\n                                            children: \"#winter\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 13\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, undefined);\n                    }) : data.slice(0, data.length - 1).map((el, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-sm rounded overflow-hidden shadow-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"w-full\",\n                                    src: el.image,\n                                    alt: \"Sunset in the mountains\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-6 py-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"font-bold text-xl mb-2\",\n                                            children: el.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-700 text-base\",\n                                            children: (0,_SliceText__WEBPACK_IMPORTED_MODULE_2__.SliceText)(el.description)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-6 pt-4 pb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\",\n                                            children: \"#Men\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\",\n                                            children: \"#suit\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\",\n                                            children: \"#winter\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex  justify-center items-center mb-10 mt-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-transparent hover:bg-slate-700 text-slate-700 font-semibold   hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent    rounded \",\n                        children: \"See All Products\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\moham\\\\OneDrive\\\\Desktop\\\\legacyProject\\\\firstRepo\\\\client\\\\app\\\\home\\\\(components)\\\\babies\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Babies, \"ufXWL4Kz9mZ+SPZimsrc/AxwT4g=\");\n_c = Babies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Babies);\nvar _c;\n$RefreshReg$(_c, \"Babies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lLyhjb21wb25lbnRzKS9iYWJpZXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU1NQTtBQUppQztBQUNJO0FBRVE7QUFHbkQsTUFBTU0sU0FBTzs7SUFFVCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQVksRUFBRTtJQUM5QyxNQUFNLENBQUNJLFVBQVNDLFlBQVksR0FBQ0wsK0NBQVFBLENBQUM7SUFFdENELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtnQkFDeEIsTUFBTU4sT0FBTyxNQUFNSyxJQUFJRSxJQUFJO2dCQUMzQk4sUUFBUUQ7WUFDVixFQUFFLE9BQU9RLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFFQUo7SUFDRixHQUFHLEVBQUU7SUFFUCxxQkFFSSw4REFBQ007a0JBRUcsNEVBQUNoQixrREFBU0E7OzhCQUNOLDhEQUFDZ0I7b0JBQUlDLFdBQVU7OEJBQ1AsNEVBQUNDO3dCQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFFakIsOERBQUNIO29CQUFJQyxXQUFVOzhCQUNmLDRFQUFDRzt3QkFBR0gsV0FBVyxHQUF1QixPQUFwQmxCLG1NQUFtQixFQUFDO2tDQUFvQzs7Ozs7Ozs7Ozs7OEJBRzFFLDhEQUFDaUI7b0JBQUlDLFdBQVU7OEJBRTlCVCxhQUFXLE9BQUtGLEtBQUtlLEtBQUssQ0FBQyxHQUFFLEdBQUdDLEdBQUcsQ0FBQyxDQUFDQyxJQUFPQzt3QkFHekMscUJBRUksOERBQUNSOzRCQUFJQyxXQUFVOzs4Q0FDZiw4REFBQ0M7b0NBQUlELFdBQVU7b0NBQVNFLEtBQUtJLEdBQUdFLEtBQUs7b0NBQUVDLEtBQUk7Ozs7Ozs4Q0FDM0MsOERBQUNWO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQTBCTSxHQUFHSSxJQUFJOzs7Ozs7c0RBQ2hELDhEQUFDQzs0Q0FBRVgsV0FBVTtzREFDWmhCLHFEQUFTQSxDQUFDc0IsR0FBR00sV0FBVzs7Ozs7Ozs7Ozs7OzhDQUc3Qiw4REFBQ2I7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDYTs0Q0FBS2IsV0FBVTtzREFBZ0c7Ozs7OztzREFDaEgsOERBQUNhOzRDQUFLYixXQUFVO3NEQUFnRzs7Ozs7O3NEQUNoSCw4REFBQ2E7NENBQUtiLFdBQVU7c0RBQWdHOzs7Ozs7Ozs7Ozs7OzJCQVhuRE87Ozs7O29CQWdCakUsS0FBR2xCLEtBQUtlLEtBQUssQ0FBQyxHQUFFZixLQUFLeUIsTUFBTSxHQUFDLEdBQUdULEdBQUcsQ0FBQyxDQUFDQyxJQUFPQzt3QkFHdkMscUJBRUksOERBQUNSOzRCQUFJQyxXQUFVOzs4Q0FDZiw4REFBQ0M7b0NBQUlELFdBQVU7b0NBQVNFLEtBQUtJLEdBQUdFLEtBQUs7b0NBQUVDLEtBQUk7Ozs7Ozs4Q0FDM0MsOERBQUNWO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQTBCTSxHQUFHSSxJQUFJOzs7Ozs7c0RBQ2hELDhEQUFDQzs0Q0FBRVgsV0FBVTtzREFDWmhCLHFEQUFTQSxDQUFDc0IsR0FBR00sV0FBVzs7Ozs7Ozs7Ozs7OzhDQUc3Qiw4REFBQ2I7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDYTs0Q0FBS2IsV0FBVTtzREFBZ0c7Ozs7OztzREFDaEgsOERBQUNhOzRDQUFLYixXQUFVO3NEQUFnRzs7Ozs7O3NEQUNoSCw4REFBQ2E7NENBQUtiLFdBQVU7c0RBQWdHOzs7Ozs7Ozs7Ozs7OzJCQVhuRE87Ozs7O29CQWdCakU7Ozs7Ozs4QkFLUiw4REFBQ1I7b0JBQUlDLFdBQVU7OEJBQ2YsNEVBQUNlO3dCQUFPZixXQUFVO2tDQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5CO0dBM0ZNWjtLQUFBQTtBQTZGTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvaG9tZS8oY29tcG9uZW50cykvYmFiaWVzL3BhZ2UudHN4PzRiNDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IFJlZHJlc3NlZCB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCJcclxuaW1wb3J0IENvbnRlbmFpciBmcm9tIFwiLi4vLi4vQ29udGVuYWlyXCJcclxuaW1wb3J0IHsgU2xpY2VUZXh0IH0gZnJvbSBcIi4uLy4uL1NsaWNlVGV4dFwiXHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiQC9hcHAvdHlwZXMvcHJvZHVjdHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgcmVkcmVzc2VkPVJlZHJlc3NlZCh7c3Vic2V0czpbXCJsYXRpblwiXSx3ZWlnaHQ6W1wiNDAwXCJdfSlcclxuXHJcbmNvbnN0IEJhYmllcz0oKT0+e1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xyXG4gICAgY29uc3QgW3Nob3dIaWRlLHNldFNob3dIaWRlXT11c2VTdGF0ZShmYWxzZSlcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9kdWN0cy9cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgIDxDb250ZW5haXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiIGh0dHBzOi8vbHVja3lwYW5kYWtpZHMuY29tL2Nkbi9zaG9wL2ZpbGVzL1VudGl0bGVkXzEyMDBfeF80MDBfcHhfMjQwMF94XzgwMF9weF8xLmpwZz92PTE2ODUxMjMzMDgmd2lkdGg9MTYwMFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXQtMTAgbWItMTBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3JlZHJlc3NlZC5jbGFzc05hbWV9IGZvbnQtZXh0cmFib2xkIHRleHQtNHhsIGJvcmRlci0yYH0+QmFiaWVzJ3MgUHJvZHVjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC00XCI+XHJcblxyXG57c2hvd0hpZGU9PT10cnVlP2RhdGEuc2xpY2UoMCw4KS5tYXAoKGVsOmFueSxpOm51bWJlcik9PntcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zbSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGdcIiBrZXk9e2l9PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsXCIgc3JjPXtlbC5pbWFnZX0gYWx0PVwiU3Vuc2V0IGluIHRoZSBtb3VudGFpbnNcIi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e2VsLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgIHtTbGljZVRleHQoZWwuZGVzY3JpcHRpb24pfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB0LTQgcGItMlwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtci0yIG1iLTJcIj4jTWVuPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtci0yIG1iLTJcIj4jc3VpdDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgbXItMiBtYi0yXCI+I3dpbnRlcjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTpkYXRhLnNsaWNlKDAsZGF0YS5sZW5ndGgtMSkubWFwKChlbDphbnksaTpudW1iZXIpPT57XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc20gcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsXCIgc3JjPXtlbC5pbWFnZX0gYWx0PVwiU3Vuc2V0IGluIHRoZSBtb3VudGFpbnNcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWItMlwiPntlbC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1NsaWNlVGV4dChlbC5kZXNjcmlwdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHQtNCBwYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgbXItMiBtYi0yXCI+I01lbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtci0yIG1iLTJcIj4jc3VpdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIHB4LTMgcHktMSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBtci0yIG1iLTJcIj4jd2ludGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG59XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtYi0xMCBtdC0xMFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLXNsYXRlLTcwMCB0ZXh0LXNsYXRlLTcwMCBmb250LXNlbWlib2xkXHJcbiAgICAgICAgaG92ZXI6dGV4dC13aGl0ZSBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1zbGF0ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IFxyXG4gICAgICAgIHJvdW5kZWQgXCIgPlxyXG4gICAgICAgIFNlZSBBbGwgUHJvZHVjdHNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db250ZW5haXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWJpZXMiXSwibmFtZXMiOlsicmVkcmVzc2VkIiwiQ29udGVuYWlyIiwiU2xpY2VUZXh0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJhYmllcyIsImRhdGEiLCJzZXREYXRhIiwic2hvd0hpZGUiLCJzZXRTaG93SGlkZSIsImZldGNoRGF0YSIsInJlcyIsImZldGNoIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImgxIiwic2xpY2UiLCJtYXAiLCJlbCIsImkiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJzcGFuIiwibGVuZ3RoIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/(components)/babies/page.tsx\n"));

/***/ })

});