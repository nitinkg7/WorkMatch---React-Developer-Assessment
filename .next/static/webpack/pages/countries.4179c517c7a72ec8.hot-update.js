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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CountryList\": function() { return /* binding */ CountryList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config */ \"./src/config.ts\");\n/* harmony import */ var _styleGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styleGuide */ \"./src/modules/styleGuide/fe/index.ts\");\n/*\n We now want to display the countries as tiles in a grid.\n Each tile should show the country name in all caps letters and the code below.\n When clicking anywhere on the tile it should link to the country detail page (url: http://localhost:3000/countries/AL with AL being the respective code).\n Please also apply nice looking spacing and borders. Feel free to also add a hover effect.\n E.g.\n |---------------------|   |---------------------|\n | ANDORA              |   | ARMENIA             |\n | code: AN            |   | code: AM            |\n |---------------------|   |---------------------|\n\n Please show one tile per row on small screens and two tiles per row on large screens.\n\n Task:\n 1. write the code required to display the tiles in a grid as described above.\n    Please name it CountryList (pages/countries/index.tsx shows how it should be called)\n\n  You can view your results on http://localhost:3000/countries\n*/ var _this = undefined;\n\n\n// import { A } from \"@styleGuide\";\n// import { ICountry } from \"./2-interface\";\n// // config.routes.country(code) will give the correct path\n\nvar CountryList = function(param) {\n    var countriesList = param.countriesList;\n    // <div>your solution goes here </div>\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styleGuide__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n            children: countriesList === null || countriesList === void 0 ? void 0 : countriesList.map(function(country, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styleGuide__WEBPACK_IMPORTED_MODULE_2__.FormCard, {\n                    heading: country.name,\n                    showHoverEffect: true,\n                    onClick: function() {\n                        _config__WEBPACK_IMPORTED_MODULE_1__.config.routes.country(country.code);\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: country.code\n                    }, void 0, false, {\n                        fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this)\n                }, index, false, {\n                    fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\",\n            lineNumber: 36,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nitingupta/Logiquad/react-nextjs-project-master/src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, _this);\n};\n_c = CountryList;\nvar _c;\n$RefreshReg$(_c, \"CountryList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy90YXNrc0NvdW50cmllcy9mZS8xcHJlc2VudGF0aW9uLzUtdGFzay1yZXNwb25zaXZlLWRlc2lnbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLEdBRUE7O0FBQWlDO0FBQ2pDLG1DQUFtQztBQUNuQyw0Q0FBNEM7QUFDNUMsNERBQTREO0FBRVo7QUFPekMsSUFBTUcsV0FBVyxHQUFHO1FBQUdDLGFBQWEsU0FBYkEsYUFBYTtJQUN6QyxzQ0FBc0M7a0JBQ3RDLHFFQUFDQyxLQUFHO2tCQUNGLDRFQUFDSCw2Q0FBSTtzQkFDRkUsYUFBYSxhQUFiQSxhQUFhLFdBQUssR0FBbEJBLEtBQUFBLENBQWtCLEdBQWxCQSxhQUFhLENBQUVFLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUVDLEtBQUs7cUNBQ2pDLDhEQUFDUCxpREFBUTtvQkFFUFEsT0FBTyxFQUFFRixPQUFPLENBQUNHLElBQUk7b0JBQ3JCQyxlQUFlLEVBQUUsSUFBSTtvQkFDckJDLE9BQU8sRUFBRSxXQUFNO3dCQUNiWiwwREFBcUIsQ0FBQ08sT0FBTyxDQUFDTyxJQUFJLENBQUMsQ0FBQztvQkFDdEMsQ0FBQzs4QkFFRCw0RUFBQ1QsS0FBRztrQ0FBRUUsT0FBTyxDQUFDTyxJQUFJOzs7Ozs2QkFBTzttQkFQcEJOLEtBQUs7Ozs7eUJBUUQ7YUFDWixDQUFDOzs7OztpQkFDRzs7Ozs7YUFDSDtDQUNQLENBQUM7QUFsQldMLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NDb3VudHJpZXMvZmUvMXByZXNlbnRhdGlvbi81LXRhc2stcmVzcG9uc2l2ZS1kZXNpZ24udHN4PzcxMTEiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiBXZSBub3cgd2FudCB0byBkaXNwbGF5IHRoZSBjb3VudHJpZXMgYXMgdGlsZXMgaW4gYSBncmlkLlxuIEVhY2ggdGlsZSBzaG91bGQgc2hvdyB0aGUgY291bnRyeSBuYW1lIGluIGFsbCBjYXBzIGxldHRlcnMgYW5kIHRoZSBjb2RlIGJlbG93LlxuIFdoZW4gY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIHRpbGUgaXQgc2hvdWxkIGxpbmsgdG8gdGhlIGNvdW50cnkgZGV0YWlsIHBhZ2UgKHVybDogaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvdW50cmllcy9BTCB3aXRoIEFMIGJlaW5nIHRoZSByZXNwZWN0aXZlIGNvZGUpLlxuIFBsZWFzZSBhbHNvIGFwcGx5IG5pY2UgbG9va2luZyBzcGFjaW5nIGFuZCBib3JkZXJzLiBGZWVsIGZyZWUgdG8gYWxzbyBhZGQgYSBob3ZlciBlZmZlY3QuXG4gRS5nLlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18ICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiB8IEFORE9SQSAgICAgICAgICAgICAgfCAgIHwgQVJNRU5JQSAgICAgICAgICAgICB8XG4gfCBjb2RlOiBBTiAgICAgICAgICAgIHwgICB8IGNvZGU6IEFNICAgICAgICAgICAgfFxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18ICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcblxuIFBsZWFzZSBzaG93IG9uZSB0aWxlIHBlciByb3cgb24gc21hbGwgc2NyZWVucyBhbmQgdHdvIHRpbGVzIHBlciByb3cgb24gbGFyZ2Ugc2NyZWVucy5cblxuIFRhc2s6XG4gMS4gd3JpdGUgdGhlIGNvZGUgcmVxdWlyZWQgdG8gZGlzcGxheSB0aGUgdGlsZXMgaW4gYSBncmlkIGFzIGRlc2NyaWJlZCBhYm92ZS5cbiAgICBQbGVhc2UgbmFtZSBpdCBDb3VudHJ5TGlzdCAocGFnZXMvY291bnRyaWVzL2luZGV4LnRzeCBzaG93cyBob3cgaXQgc2hvdWxkIGJlIGNhbGxlZClcblxuICBZb3UgY2FuIHZpZXcgeW91ciByZXN1bHRzIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb3VudHJpZXNcbiovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJAY29uZmlnXCI7XG4vLyBpbXBvcnQgeyBBIH0gZnJvbSBcIkBzdHlsZUd1aWRlXCI7XG4vLyBpbXBvcnQgeyBJQ291bnRyeSB9IGZyb20gXCIuLzItaW50ZXJmYWNlXCI7XG4vLyAvLyBjb25maWcucm91dGVzLmNvdW50cnkoY29kZSkgd2lsbCBnaXZlIHRoZSBjb3JyZWN0IHBhdGhcblxuaW1wb3J0IHsgQSwgRm9ybUNhcmQsIEdyaWQgfSBmcm9tIFwiQHN0eWxlR3VpZGVcIjtcbmltcG9ydCB7IElDb3VudHJ5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZEludGVyZmFjZXMvMS10YWtzLWludGVyZmFjZVwiO1xuXG5pbnRlcmZhY2UgSUNvdW50cnlMaXN0IHtcbiAgY291bnRyaWVzTGlzdDogSUNvdW50cnlbXTtcbn1cblxuZXhwb3J0IGNvbnN0IENvdW50cnlMaXN0ID0gKHsgY291bnRyaWVzTGlzdCB9OiBJQ291bnRyeUxpc3QpID0+IChcbiAgLy8gPGRpdj55b3VyIHNvbHV0aW9uIGdvZXMgaGVyZSA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8R3JpZD5cbiAgICAgIHtjb3VudHJpZXNMaXN0Py5tYXAoKGNvdW50cnksIGluZGV4KSA9PiAoXG4gICAgICAgIDxGb3JtQ2FyZFxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgaGVhZGluZz17Y291bnRyeS5uYW1lfVxuICAgICAgICAgIHNob3dIb3ZlckVmZmVjdD17dHJ1ZX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBjb25maWcucm91dGVzLmNvdW50cnkoY291bnRyeS5jb2RlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj57Y291bnRyeS5jb2RlfTwvZGl2PlxuICAgICAgICA8L0Zvcm1DYXJkPlxuICAgICAgKSl9XG4gICAgPC9HcmlkPlxuICA8L2Rpdj5cbik7XG4iXSwibmFtZXMiOlsiY29uZmlnIiwiRm9ybUNhcmQiLCJHcmlkIiwiQ291bnRyeUxpc3QiLCJjb3VudHJpZXNMaXN0IiwiZGl2IiwibWFwIiwiY291bnRyeSIsImluZGV4IiwiaGVhZGluZyIsIm5hbWUiLCJzaG93SG92ZXJFZmZlY3QiLCJvbkNsaWNrIiwicm91dGVzIiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/tasksCountries/fe/1presentation/5-task-responsive-design.tsx\n"));

/***/ })

});