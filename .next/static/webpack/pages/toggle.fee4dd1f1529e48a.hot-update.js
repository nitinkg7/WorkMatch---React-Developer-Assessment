"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/toggle",{

/***/ "./src/modules/tasksCountries/fe/2feLogic/4-task-toggle.tsx":
/*!******************************************************************!*\
  !*** ./src/modules/tasksCountries/fe/2feLogic/4-task-toggle.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Toggle\": function() { return /* binding */ Toggle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styleGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styleGuide */ \"./src/modules/styleGuide/fe/index.ts\");\n/*\n Please write a component that contains a toggle button.\n When clicking the button it should show or hide a text below the button.\n The title of the page should change between 'shown' and 'hidden'.\n Hint: the title can be set with document.title = 'some string'.\n\n  You can view your results on http://localhost:3000/toggle\n*/ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Toggle = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isToggle = ref[0], setToggle = ref[1];\n    var handleToggle = function() {\n        document.title = !isToggle ? \"Shown\" : \"Hidden\";\n        setToggle(!isToggle);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styleGuide__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: handleToggle,\n                children: !isToggle ? \"Show\" : \"Hide\"\n            }, void 0, false, {\n                fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/2feLogic/4-task-toggle.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styleGuide__WEBPACK_IMPORTED_MODULE_2__.HorizontalLine, {}, void 0, false, {\n                fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/2feLogic/4-task-toggle.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styleGuide__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {\n                children: isToggle && \"Shown Text\"\n            }, void 0, false, {\n                fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/2feLogic/4-task-toggle.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/2feLogic/4-task-toggle.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(Toggle, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = Toggle;\nvar _c;\n$RefreshReg$(_c, \"Toggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy90YXNrc0NvdW50cmllcy9mZS8yZmVMb2dpYy80LXRhc2stdG9nZ2xlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BLEdBRUE7OztBQUFpQztBQUMrQjtBQUV6RCxJQUFNSSxNQUFNLEdBQUcsV0FBTTs7SUFDMUIsSUFBOEJKLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBckNLLFFBQVEsR0FBZUwsR0FBYyxHQUE3QixFQUFFTSxTQUFTLEdBQUlOLEdBQWMsR0FBbEI7SUFFMUIsSUFBTU8sWUFBWSxHQUFHLFdBQU07UUFDekJDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLENBQUNKLFFBQVEsR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ2hEQyxTQUFTLENBQUMsQ0FBQ0QsUUFBUSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELHFCQUNFLDhEQUFDSyxLQUFHOzswQkFFRiw4REFBQ1QsK0NBQU07Z0JBQUNVLE9BQU8sRUFBRUosWUFBWTswQkFBRyxDQUFDRixRQUFRLEdBQUcsTUFBTSxHQUFHLE1BQU07Ozs7O3FCQUFVOzBCQUNyRSw4REFBQ0gsdURBQWM7Ozs7cUJBQUc7MEJBRWxCLDhEQUFDQyxrREFBUzswQkFBRUUsUUFBUSxJQUFJLFlBQVk7Ozs7O3FCQUFhOzs7Ozs7YUFDN0MsQ0FDTjtBQUNKLENBQUMsQ0FBQztHQWpCV0QsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2R1bGVzL3Rhc2tzQ291bnRyaWVzL2ZlLzJmZUxvZ2ljLzQtdGFzay10b2dnbGUudHN4P2U1OTEiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiBQbGVhc2Ugd3JpdGUgYSBjb21wb25lbnQgdGhhdCBjb250YWlucyBhIHRvZ2dsZSBidXR0b24uXG4gV2hlbiBjbGlja2luZyB0aGUgYnV0dG9uIGl0IHNob3VsZCBzaG93IG9yIGhpZGUgYSB0ZXh0IGJlbG93IHRoZSBidXR0b24uXG4gVGhlIHRpdGxlIG9mIHRoZSBwYWdlIHNob3VsZCBjaGFuZ2UgYmV0d2VlbiAnc2hvd24nIGFuZCAnaGlkZGVuJy5cbiBIaW50OiB0aGUgdGl0bGUgY2FuIGJlIHNldCB3aXRoIGRvY3VtZW50LnRpdGxlID0gJ3NvbWUgc3RyaW5nJy5cblxuICBZb3UgY2FuIHZpZXcgeW91ciByZXN1bHRzIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b2dnbGVcbiovXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEhvcml6b250YWxMaW5lLCBQYXJhZ3JhcGggfSBmcm9tIFwiQHN0eWxlR3VpZGVcIjtcblxuZXhwb3J0IGNvbnN0IFRvZ2dsZSA9ICgpID0+IHtcbiAgY29uc3QgW2lzVG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnRpdGxlID0gIWlzVG9nZ2xlID8gXCJTaG93blwiIDogXCJIaWRkZW5cIjtcbiAgICBzZXRUb2dnbGUoIWlzVG9nZ2xlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogeW91ciBidXR0b24gKi99XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+eyFpc1RvZ2dsZSA/IFwiU2hvd1wiIDogXCJIaWRlXCJ9PC9CdXR0b24+XG4gICAgICA8SG9yaXpvbnRhbExpbmUgLz5cbiAgICAgIHsvKiBzaG93IGFuZCBoaWRlICovfVxuICAgICAgPFBhcmFncmFwaD57aXNUb2dnbGUgJiYgXCJTaG93biBUZXh0XCJ9PC9QYXJhZ3JhcGg+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnV0dG9uIiwiSG9yaXpvbnRhbExpbmUiLCJQYXJhZ3JhcGgiLCJUb2dnbGUiLCJpc1RvZ2dsZSIsInNldFRvZ2dsZSIsImhhbmRsZVRvZ2dsZSIsImRvY3VtZW50IiwidGl0bGUiLCJkaXYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/tasksCountries/fe/2feLogic/4-task-toggle.tsx\n"));

/***/ })

});