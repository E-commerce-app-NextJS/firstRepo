"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"51aede673e15\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2U2NDQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1MWFlZGU2NzNlMTVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./lib/context/WishListContext.tsx":
/*!*****************************************!*\
  !*** ./lib/context/WishListContext.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WishItemsProvider: function() { return /* binding */ WishItemsProvider; },\n/* harmony export */   useWishItems: function() { return /* binding */ useWishItems; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartContext */ \"(app-pages-browser)/./lib/context/CartContext.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst WishItemsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    items: [],\n    addItem: ()=>{},\n    removeItem: ()=>{},\n    addToCart: ()=>{}\n});\nconst WishItemsProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [wishItems, setWishItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const cartItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartItemsContext);\n    const addToWishHandler = (item)=>{\n        setWishItems((prevItems)=>[\n                ...prevItems,\n                {\n                    ...item,\n                    itemQuantity: 1\n                }\n            ]);\n    };\n    const removeFromWishHandler = (item)=>{\n        setWishItems(wishItems.filter((prevItem)=>prevItem.id !== item.id));\n    };\n    const addToCartHandler = (item)=>{\n        cartItems.addItem(item, 1);\n        removeFromWishHandler(item);\n    };\n    const wishItemsCtx = {\n        items: wishItems,\n        addItem: addToWishHandler,\n        removeItem: removeFromWishHandler,\n        addToCart: addToCartHandler\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WishItemsContext.Provider, {\n        value: wishItemsCtx,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ali\\\\OneDrive\\\\Desktop\\\\firstRepo\\\\client\\\\lib\\\\context\\\\WishListContext.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WishItemsProvider, \"AYvwqLfzEQ1WK5FLFGujmlbCOVw=\");\n_c = WishItemsProvider;\nconst useWishItems = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WishItemsContext);\n    if (!context) {\n        throw new Error(\"useWishItems must be used within a WishItemsProvider\");\n    }\n    return context;\n};\n_s1(useWishItems, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n\nvar _c;\n$RefreshReg$(_c, \"WishItemsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9jb250ZXh0L1dpc2hMaXN0Q29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUU7QUFDbEI7QUFpQmpELE1BQU1LLGlDQUFtQkosb0RBQWFBLENBQXVCO0lBQzNESyxPQUFPLEVBQUU7SUFDVEMsU0FBUyxLQUFPO0lBQ2hCQyxZQUFZLEtBQU87SUFDbkJDLFdBQVcsS0FBTztBQUNwQjtBQUVBLE1BQU1DLG9CQUE2RDtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDOUUsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFhLEVBQUU7SUFDekQsTUFBTVcsWUFBWVosaURBQVVBLENBQUNFLDBEQUFnQkE7SUFFN0MsTUFBTVcsbUJBQW1CLENBQUNDO1FBQ3hCSCxhQUFhLENBQUNJLFlBQWM7bUJBQ3ZCQTtnQkFDSDtvQkFBRSxHQUFHRCxJQUFJO29CQUFFRSxjQUFjO2dCQUFFO2FBQzVCO0lBQ0g7SUFFQSxNQUFNQyx3QkFBd0IsQ0FBQ0g7UUFDN0JILGFBQWFELFVBQVVRLE1BQU0sQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxFQUFFLEtBQUtOLEtBQUtNLEVBQUU7SUFDckU7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ1A7UUFDeEJGLFVBQVVQLE9BQU8sQ0FBQ1MsTUFBTTtRQUN4Qkcsc0JBQXNCSDtJQUN4QjtJQUVBLE1BQU1RLGVBQWU7UUFDbkJsQixPQUFPTTtRQUNQTCxTQUFTUTtRQUNUUCxZQUFZVztRQUNaVixXQUFXYztJQUNiO0lBRUEscUJBQ0UsOERBQUNsQixpQkFBaUJvQixRQUFRO1FBQUNDLE9BQU9GO2tCQUMvQmI7Ozs7OztBQUdQO0dBaENNRDtLQUFBQTtBQWtDTixNQUFNaUIsZUFBZTs7SUFDbkIsTUFBTUMsVUFBVTFCLGlEQUFVQSxDQUFDRztJQUMzQixJQUFJLENBQUN1QixTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVDtJQU5NRDtBQVFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY29udGV4dC9XaXNoTGlzdENvbnRleHQudHN4P2UwNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENhcnRJdGVtc0NvbnRleHQgfSBmcm9tIFwiLi9DYXJ0Q29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIFdpc2hJdGVtIHsgXHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcHJpY2U6IG51bWJlcjtcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIGl0ZW1RdWFudGl0eTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgV2lzaEl0ZW1zQ29udGV4dFR5cGUgeyBcclxuICBpdGVtczogV2lzaEl0ZW1bXTtcclxuICBhZGRJdGVtOiAoaXRlbTogV2lzaEl0ZW0pID0+IHZvaWQ7XHJcbiAgcmVtb3ZlSXRlbTogKGl0ZW06IFdpc2hJdGVtKSA9PiB2b2lkO1xyXG4gIGFkZFRvQ2FydDogKGl0ZW06IFdpc2hJdGVtKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBXaXNoSXRlbXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxXaXNoSXRlbXNDb250ZXh0VHlwZT4oe1xyXG4gIGl0ZW1zOiBbXSxcclxuICBhZGRJdGVtOiAoKSA9PiB7fSxcclxuICByZW1vdmVJdGVtOiAoKSA9PiB7fSxcclxuICBhZGRUb0NhcnQ6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IFdpc2hJdGVtc1Byb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3dpc2hJdGVtcywgc2V0V2lzaEl0ZW1zXSA9IHVzZVN0YXRlPFdpc2hJdGVtW10+KFtdKTtcclxuICBjb25zdCBjYXJ0SXRlbXMgPSB1c2VDb250ZXh0KENhcnRJdGVtc0NvbnRleHQpO1xyXG5cclxuICBjb25zdCBhZGRUb1dpc2hIYW5kbGVyID0gKGl0ZW06IFdpc2hJdGVtKSA9PiB7XHJcbiAgICBzZXRXaXNoSXRlbXMoKHByZXZJdGVtcykgPT4gW1xyXG4gICAgICAuLi5wcmV2SXRlbXMsXHJcbiAgICAgIHsgLi4uaXRlbSwgaXRlbVF1YW50aXR5OiAxIH0sIFxyXG4gICAgXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbVdpc2hIYW5kbGVyID0gKGl0ZW06IFdpc2hJdGVtKSA9PiB7IFxyXG4gICAgc2V0V2lzaEl0ZW1zKHdpc2hJdGVtcy5maWx0ZXIoKHByZXZJdGVtKSA9PiBwcmV2SXRlbS5pZCAhPT0gaXRlbS5pZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvQ2FydEhhbmRsZXIgPSAoaXRlbTogV2lzaEl0ZW0pID0+IHtcclxuICAgIGNhcnRJdGVtcy5hZGRJdGVtKGl0ZW0sIDEpOyBcclxuICAgIHJlbW92ZUZyb21XaXNoSGFuZGxlcihpdGVtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB3aXNoSXRlbXNDdHggPSB7XHJcbiAgICBpdGVtczogd2lzaEl0ZW1zLFxyXG4gICAgYWRkSXRlbTogYWRkVG9XaXNoSGFuZGxlcixcclxuICAgIHJlbW92ZUl0ZW06IHJlbW92ZUZyb21XaXNoSGFuZGxlcixcclxuICAgIGFkZFRvQ2FydDogYWRkVG9DYXJ0SGFuZGxlcixcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdpc2hJdGVtc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dpc2hJdGVtc0N0eH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvV2lzaEl0ZW1zQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgdXNlV2lzaEl0ZW1zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFdpc2hJdGVtc0NvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VXaXNoSXRlbXMgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFdpc2hJdGVtc1Byb3ZpZGVyJyk7XHJcbiAgfVxyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgV2lzaEl0ZW1zUHJvdmlkZXIsIHVzZVdpc2hJdGVtcyB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDYXJ0SXRlbXNDb250ZXh0IiwiV2lzaEl0ZW1zQ29udGV4dCIsIml0ZW1zIiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJhZGRUb0NhcnQiLCJXaXNoSXRlbXNQcm92aWRlciIsImNoaWxkcmVuIiwid2lzaEl0ZW1zIiwic2V0V2lzaEl0ZW1zIiwiY2FydEl0ZW1zIiwiYWRkVG9XaXNoSGFuZGxlciIsIml0ZW0iLCJwcmV2SXRlbXMiLCJpdGVtUXVhbnRpdHkiLCJyZW1vdmVGcm9tV2lzaEhhbmRsZXIiLCJmaWx0ZXIiLCJwcmV2SXRlbSIsImlkIiwiYWRkVG9DYXJ0SGFuZGxlciIsIndpc2hJdGVtc0N0eCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VXaXNoSXRlbXMiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/context/WishListContext.tsx\n"));

/***/ })

});