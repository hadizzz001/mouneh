"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/checkout/page",{

/***/ "(app-pages-browser)/./src/components/WhatsApp.js":
/*!************************************!*\
  !*** ./src/components/WhatsApp.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_context_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/context/CartContext */ \"(app-pages-browser)/./src/app/context/CartContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst WhatsAppButton = (param)=>{\n    let { inputs, items } = param;\n    _s();\n    const { cart, removeFromCart, updateQuantity, clearCart, isModalOpen, toggleModal } = (0,_app_context_CartContext__WEBPACK_IMPORTED_MODULE_1__.useCart)();\n    const handleClick = ()=>{\n        const url = createWhatsAppURL(inputs, items);\n        window.open(url, \"_blank\");\n        clearCart();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"ProvidersSingleProduct--selected\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                type: \"button\",\n                className: \"AddToCart HtmlProductAddToCart\",\n                style: {\n                    borderRadius: \"0\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Order Now!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\abc\\\\Desktop\\\\Hadi\\\\My Bussiness\\\\Mouneh\\\\src\\\\components\\\\WhatsApp.js\",\n                    lineNumber: 18,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\abc\\\\Desktop\\\\Hadi\\\\My Bussiness\\\\Mouneh\\\\src\\\\components\\\\WhatsApp.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\abc\\\\Desktop\\\\Hadi\\\\My Bussiness\\\\Mouneh\\\\src\\\\components\\\\WhatsApp.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\abc\\\\Desktop\\\\Hadi\\\\My Bussiness\\\\Mouneh\\\\src\\\\components\\\\WhatsApp.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(WhatsAppButton, \"L8b80ovy9osv/8UHAajSLnrLpoY=\", false, function() {\n    return [\n        _app_context_CartContext__WEBPACK_IMPORTED_MODULE_1__.useCart\n    ];\n});\n_c = WhatsAppButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhatsAppButton);\nconst createWhatsAppURL = (inputs, items)=>{\n    const { address, email, fname, lname, phone } = inputs;\n    // Calculate the total amount\n    const totalAmount = items.reduce((sum, item)=>sum + item.price * item.quantity, 0);\n    // Formatting the message\n    const message = \"\\n    *Customer Information:*\\n    Name: \".concat(fname, \" \").concat(lname, \"\\n    Email: \").concat(email, \"\\n    Phone: \").concat(phone, \"\\n    Address: \").concat(address, \"\\n\\n    *Order Details:*\\n    \").concat(items.map((item, index)=>\"\\n      Item \".concat(index + 1, \":\\n      - Name: \").concat(item.title, \"\\n      - Description: \").concat(item.description, \"\\n      - Quantity: \").concat(item.quantity, \"\\n      - Price: $\").concat(item.price, \"\\n      - Image: \").concat(item.img[0], \" \\n    \")).join(\"\\n\"), \"\\n\\n    *Total Amount:* $\").concat(totalAmount, \"\\n  \");\n    const encodedMessage = encodeURIComponent(message);\n    const phoneNumber = \"96181352620\"; // Replace with your desired number\n    return \"https://wa.me/\".concat(phoneNumber, \"?text=\").concat(encodedMessage);\n};\nvar _c;\n$RefreshReg$(_c, \"WhatsAppButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1doYXRzQXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3FEO0FBSXJELE1BQU1DLGlCQUFpQjtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFOztJQUNyQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsY0FBYyxFQUFFQyxjQUFjLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUUsR0FBR1QsaUVBQU9BO0lBQzdGLE1BQU1VLGNBQWM7UUFDaEIsTUFBTUMsTUFBTUMsa0JBQWtCVixRQUFRQztRQUN0Q1UsT0FBT0MsSUFBSSxDQUFDSCxLQUFLO1FBQ2pCSjtJQUNKO0lBRUEscUJBQ0ksOERBQUNRO2tCQUNHLDRFQUFDQztZQUFLQyxXQUFVO3NCQUNaLDRFQUFDQztnQkFBT0MsU0FBU1Q7Z0JBQWFVLE1BQUs7Z0JBQVNILFdBQVU7Z0JBQWlDSSxPQUFPO29CQUFFQyxjQUFjO2dCQUFJOzBCQUM5Ryw0RUFBQ047OEJBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQjtHQWpCTWY7O1FBQ29GRCw2REFBT0E7OztLQUQzRkM7QUFtQk4sK0RBQWVBLGNBQWNBLEVBQUM7QUFFOUIsTUFBTVcsb0JBQW9CLENBQUNWLFFBQVFDO0lBQy9CLE1BQU0sRUFBRW9CLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFLEdBQUd6QjtJQUVoRCw2QkFBNkI7SUFDN0IsTUFBTTBCLGNBQWN6QixNQUFNMEIsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE9BQVNELE1BQU1DLEtBQUtDLEtBQUssR0FBR0QsS0FBS0UsUUFBUSxFQUFFO0lBRWxGLHlCQUF5QjtJQUN6QixNQUFNQyxVQUFVLDRDQUVDUixPQUFURCxPQUFNLEtBQ0xELE9BRFFFLE9BQU0saUJBRWRDLE9BREFILE9BQU0saUJBRUpELE9BREZJLE9BQU0sbUJBSWJ4QixPQUhTb0IsU0FBUSxrQ0FZQUssT0FUakJ6QixNQUFNZ0MsR0FBRyxDQUFDLENBQUNKLE1BQU1LLFFBQVUsZ0JBRWpCTCxPQURISyxRQUFRLEdBQUUscUJBRUFMLE9BRFBBLEtBQUtNLEtBQUssRUFBQywyQkFFUE4sT0FER0EsS0FBS08sV0FBVyxFQUFDLHdCQUV0QlAsT0FERUEsS0FBS0UsUUFBUSxFQUFDLHNCQUVqQkYsT0FEQ0EsS0FBS0MsS0FBSyxFQUFDLHFCQUNBLE9BQVpELEtBQUtRLEdBQUcsQ0FBQyxFQUFFLEVBQUMsWUFDdEJDLElBQUksQ0FBQyxPQUFNLDZCQUVpQixPQUFaWixhQUFZO0lBRy9CLE1BQU1hLGlCQUFpQkMsbUJBQW1CUjtJQUMxQyxNQUFNUyxjQUFjLGVBQWUsbUNBQW1DO0lBQ3RFLE9BQU8saUJBQXFDRixPQUFwQkUsYUFBWSxVQUF1QixPQUFmRjtBQUNoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9XaGF0c0FwcC5qcz9jYTk0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vYXBwL2NvbnRleHQvQ2FydENvbnRleHQnO1xyXG5cclxuXHJcblxyXG5jb25zdCBXaGF0c0FwcEJ1dHRvbiA9ICh7IGlucHV0cywgaXRlbXMgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBjYXJ0LCByZW1vdmVGcm9tQ2FydCwgdXBkYXRlUXVhbnRpdHksIGNsZWFyQ2FydCwgaXNNb2RhbE9wZW4sIHRvZ2dsZU1vZGFsIH0gPSB1c2VDYXJ0KCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBjcmVhdGVXaGF0c0FwcFVSTChpbnB1dHMsIGl0ZW1zKTtcclxuICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICAgICAgICBjbGVhckNhcnQoKVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlByb3ZpZGVyc1NpbmdsZVByb2R1Y3QtLXNlbGVjdGVkXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiQWRkVG9DYXJ0IEh0bWxQcm9kdWN0QWRkVG9DYXJ0XCIgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjBcIiB9fSAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPk9yZGVyIE5vdyE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoYXRzQXBwQnV0dG9uO1xyXG5cclxuY29uc3QgY3JlYXRlV2hhdHNBcHBVUkwgPSAoaW5wdXRzLCBpdGVtcykgPT4ge1xyXG4gICAgY29uc3QgeyBhZGRyZXNzLCBlbWFpbCwgZm5hbWUsIGxuYW1lLCBwaG9uZSB9ID0gaW5wdXRzO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgYW1vdW50XHJcbiAgICBjb25zdCB0b3RhbEFtb3VudCA9IGl0ZW1zLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eSwgMCk7XHJcblxyXG4gICAgLy8gRm9ybWF0dGluZyB0aGUgbWVzc2FnZVxyXG4gICAgY29uc3QgbWVzc2FnZSA9IGBcclxuICAgICpDdXN0b21lciBJbmZvcm1hdGlvbjoqXHJcbiAgICBOYW1lOiAke2ZuYW1lfSAke2xuYW1lfVxyXG4gICAgRW1haWw6ICR7ZW1haWx9XHJcbiAgICBQaG9uZTogJHtwaG9uZX1cclxuICAgIEFkZHJlc3M6ICR7YWRkcmVzc31cclxuXHJcbiAgICAqT3JkZXIgRGV0YWlsczoqXHJcbiAgICAke2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IGBcclxuICAgICAgSXRlbSAke2luZGV4ICsgMX06XHJcbiAgICAgIC0gTmFtZTogJHtpdGVtLnRpdGxlfVxyXG4gICAgICAtIERlc2NyaXB0aW9uOiAke2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgIC0gUXVhbnRpdHk6ICR7aXRlbS5xdWFudGl0eX1cclxuICAgICAgLSBQcmljZTogJCR7aXRlbS5wcmljZX1cclxuICAgICAgLSBJbWFnZTogJHtpdGVtLmltZ1swXX0gXHJcbiAgICBgKS5qb2luKCdcXG4nKX1cclxuXHJcbiAgICAqVG90YWwgQW1vdW50OiogJCR7dG90YWxBbW91bnR9XHJcbiAgYDtcclxuXHJcbiAgICBjb25zdCBlbmNvZGVkTWVzc2FnZSA9IGVuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKTtcclxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gJzk2MTgxMzUyNjIwJzsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgZGVzaXJlZCBudW1iZXJcclxuICAgIHJldHVybiBgaHR0cHM6Ly93YS5tZS8ke3Bob25lTnVtYmVyfT90ZXh0PSR7ZW5jb2RlZE1lc3NhZ2V9YDtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNhcnQiLCJXaGF0c0FwcEJ1dHRvbiIsImlucHV0cyIsIml0ZW1zIiwiY2FydCIsInJlbW92ZUZyb21DYXJ0IiwidXBkYXRlUXVhbnRpdHkiLCJjbGVhckNhcnQiLCJpc01vZGFsT3BlbiIsInRvZ2dsZU1vZGFsIiwiaGFuZGxlQ2xpY2siLCJ1cmwiLCJjcmVhdGVXaGF0c0FwcFVSTCIsIndpbmRvdyIsIm9wZW4iLCJkaXYiLCJzcGFuIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsImFkZHJlc3MiLCJlbWFpbCIsImZuYW1lIiwibG5hbWUiLCJwaG9uZSIsInRvdGFsQW1vdW50IiwicmVkdWNlIiwic3VtIiwiaXRlbSIsInByaWNlIiwicXVhbnRpdHkiLCJtZXNzYWdlIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiam9pbiIsImVuY29kZWRNZXNzYWdlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicGhvbmVOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/WhatsApp.js\n"));

/***/ })

});