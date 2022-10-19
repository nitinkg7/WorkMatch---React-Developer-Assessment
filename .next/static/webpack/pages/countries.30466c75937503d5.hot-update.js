"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/countries",{

/***/ "./src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx":
/*!**********************************************************************************!*\
  !*** ./src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CountryList\": function() { return /* binding */ CountryList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styleGuide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styleGuide */ \"./src/modules/styleGuide/fe/index.ts\");\n/*\n We now want to display the countries as tiles in a grid.\n Each tile should show the country name in all caps letters and the code below.\n When clicking anywhere on the tile it should link to the country detail page (url: http://localhost:3000/countries/AL with AL being the respective code).\n Please also apply nice looking spacing and borders. Feel free to also add a hover effect.\n E.g.\n |---------------------|   |---------------------|\n | ANDORA              |   | ARMENIA             |\n | code: AN            |   | code: AM            |\n |---------------------|   |---------------------|\n\n Please show one tile per row on small screens and two tiles per row on large screens.\n\n Task:\n 1. write the code required to display the tiles in a grid as described above.\n    Please name it CountryList (pages/countries/index.tsx shows how it should be called)\n\n  You can view your results on http://localhost:3000/countries\n*/ // import { config } from \"@config\";\n// import { A } from \"@styleGuide\";\n// import { ICountry } from \"./2-interface\";\n// // config.routes.country(code) will give the correct path\nvar _this = undefined;\n\n\nvar CountryList = function(param) {\n    var countriesList = param.countriesList;\n    // <div>your solution goes here </div>\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styleGuide__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n            children: countriesList === null || countriesList === void 0 ? void 0 : countriesList.map(function(country, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styleGuide__WEBPACK_IMPORTED_MODULE_1__.A, {\n                    href: \"countries/\".concat(country.code),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styleGuide__WEBPACK_IMPORTED_MODULE_1__.FormCard, {\n                        heading: country.name,\n                        showHoverEffect: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: country.code\n                        }, void 0, false, {\n                            fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\",\n            lineNumber: 36,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, _this);\n};\n_c = CountryList;\nvar _c;\n$RefreshReg$(_c, \"CountryList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy90YXNrc0NvdW50cmllcy9mZS8xcHJlc2VudGF0aW9uLzUtdGFzay1yZXNwb25zaXZlLWRlc2lnbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsR0FFQSxvQ0FBb0M7QUFDcEMsbUNBQW1DO0FBQ25DLDRDQUE0QztBQUM1Qyw0REFBNEQ7QUFFNUQ7O0FBQWdEO0FBT3pDLElBQU1HLFdBQVcsR0FBRztRQUFHQyxhQUFhLFNBQWJBLGFBQWE7SUFDekMsc0NBQXNDO2tCQUN0QyxxRUFBQ0MsS0FBRztrQkFDRiw0RUFBQ0gsNkNBQUk7c0JBQ0ZFLGFBQWEsYUFBYkEsYUFBYSxXQUFLLEdBQWxCQSxLQUFBQSxDQUFrQixHQUFsQkEsYUFBYSxDQUFFRSxHQUFHLENBQUMsU0FBQ0MsT0FBTyxFQUFFQyxLQUFLO3FDQUNqQyw4REFBQ1IsMENBQUM7b0JBQUNTLElBQUksRUFBRSxZQUFXLENBQWUsT0FBYkYsT0FBTyxDQUFDRyxJQUFJLENBQUU7OEJBQ2xDLDRFQUFDVCxpREFBUTt3QkFBYVUsT0FBTyxFQUFFSixPQUFPLENBQUNLLElBQUk7d0JBQUVDLGVBQWUsRUFBRSxJQUFJO2tDQUNoRSw0RUFBQ1IsS0FBRztzQ0FBRUUsT0FBTyxDQUFDRyxJQUFJOzs7OztpQ0FBTzt1QkFEWkYsS0FBSzs7Ozs2QkFFVDs7Ozs7eUJBQ1Q7YUFDTCxDQUFDOzs7OztpQkFDRzs7Ozs7YUFDSDtDQUNQLENBQUM7QUFiV0wsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbW9kdWxlcy90YXNrc0NvdW50cmllcy9mZS8xcHJlc2VudGF0aW9uLzUtdGFzay1yZXNwb25zaXZlLWRlc2lnbi50c3g/NzExMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIFdlIG5vdyB3YW50IHRvIGRpc3BsYXkgdGhlIGNvdW50cmllcyBhcyB0aWxlcyBpbiBhIGdyaWQuXG4gRWFjaCB0aWxlIHNob3VsZCBzaG93IHRoZSBjb3VudHJ5IG5hbWUgaW4gYWxsIGNhcHMgbGV0dGVycyBhbmQgdGhlIGNvZGUgYmVsb3cuXG4gV2hlbiBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgdGlsZSBpdCBzaG91bGQgbGluayB0byB0aGUgY291bnRyeSBkZXRhaWwgcGFnZSAodXJsOiBodHRwOi8vbG9jYWxob3N0OjMwMDAvY291bnRyaWVzL0FMIHdpdGggQUwgYmVpbmcgdGhlIHJlc3BlY3RpdmUgY29kZSkuXG4gUGxlYXNlIGFsc28gYXBwbHkgbmljZSBsb29raW5nIHNwYWNpbmcgYW5kIGJvcmRlcnMuIEZlZWwgZnJlZSB0byBhbHNvIGFkZCBhIGhvdmVyIGVmZmVjdC5cbiBFLmcuXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXwgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuIHwgQU5ET1JBICAgICAgICAgICAgICB8ICAgfCBBUk1FTklBICAgICAgICAgICAgIHxcbiB8IGNvZGU6IEFOICAgICAgICAgICAgfCAgIHwgY29kZTogQU0gICAgICAgICAgICB8XG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXwgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuXG4gUGxlYXNlIHNob3cgb25lIHRpbGUgcGVyIHJvdyBvbiBzbWFsbCBzY3JlZW5zIGFuZCB0d28gdGlsZXMgcGVyIHJvdyBvbiBsYXJnZSBzY3JlZW5zLlxuXG4gVGFzazpcbiAxLiB3cml0ZSB0aGUgY29kZSByZXF1aXJlZCB0byBkaXNwbGF5IHRoZSB0aWxlcyBpbiBhIGdyaWQgYXMgZGVzY3JpYmVkIGFib3ZlLlxuICAgIFBsZWFzZSBuYW1lIGl0IENvdW50cnlMaXN0IChwYWdlcy9jb3VudHJpZXMvaW5kZXgudHN4IHNob3dzIGhvdyBpdCBzaG91bGQgYmUgY2FsbGVkKVxuXG4gIFlvdSBjYW4gdmlldyB5b3VyIHJlc3VsdHMgb24gaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvdW50cmllc1xuKi9cblxuLy8gaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIkBjb25maWdcIjtcbi8vIGltcG9ydCB7IEEgfSBmcm9tIFwiQHN0eWxlR3VpZGVcIjtcbi8vIGltcG9ydCB7IElDb3VudHJ5IH0gZnJvbSBcIi4vMi1pbnRlcmZhY2VcIjtcbi8vIC8vIGNvbmZpZy5yb3V0ZXMuY291bnRyeShjb2RlKSB3aWxsIGdpdmUgdGhlIGNvcnJlY3QgcGF0aFxuXG5pbXBvcnQgeyBBLCBGb3JtQ2FyZCwgR3JpZCB9IGZyb20gXCJAc3R5bGVHdWlkZVwiO1xuaW1wb3J0IHsgSUNvdW50cnksIElDb3VudHJ5T3ZlcnZpZXcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkSW50ZXJmYWNlcy8xLXRha3MtaW50ZXJmYWNlXCI7XG5cbmludGVyZmFjZSBJQ291bnRyeUxpc3Qge1xuICBjb3VudHJpZXNMaXN0OiBJQ291bnRyeU92ZXJ2aWV3W107XG59XG5cbmV4cG9ydCBjb25zdCBDb3VudHJ5TGlzdCA9ICh7IGNvdW50cmllc0xpc3QgfTogSUNvdW50cnlMaXN0KSA9PiAoXG4gIC8vIDxkaXY+eW91ciBzb2x1dGlvbiBnb2VzIGhlcmUgPC9kaXY+XG4gIDxkaXY+XG4gICAgPEdyaWQ+XG4gICAgICB7Y291bnRyaWVzTGlzdD8ubWFwKChjb3VudHJ5LCBpbmRleCkgPT4gKFxuICAgICAgICA8QSBocmVmPXtgY291bnRyaWVzLyR7Y291bnRyeS5jb2RlfWB9PlxuICAgICAgICAgIDxGb3JtQ2FyZCBrZXk9e2luZGV4fSBoZWFkaW5nPXtjb3VudHJ5Lm5hbWV9IHNob3dIb3ZlckVmZmVjdD17dHJ1ZX0+XG4gICAgICAgICAgICA8ZGl2Pntjb3VudHJ5LmNvZGV9PC9kaXY+XG4gICAgICAgICAgPC9Gb3JtQ2FyZD5cbiAgICAgICAgPC9BPlxuICAgICAgKSl9XG4gICAgPC9HcmlkPlxuICA8L2Rpdj5cbik7XG4iXSwibmFtZXMiOlsiQSIsIkZvcm1DYXJkIiwiR3JpZCIsIkNvdW50cnlMaXN0IiwiY291bnRyaWVzTGlzdCIsImRpdiIsIm1hcCIsImNvdW50cnkiLCJpbmRleCIsImhyZWYiLCJjb2RlIiwiaGVhZGluZyIsIm5hbWUiLCJzaG93SG92ZXJFZmZlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\n"));

/***/ })

});