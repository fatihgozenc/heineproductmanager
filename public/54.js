(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-icon.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-icon.entry.js ***!
  \************************************************************************************/
/*! exports provided: amplify_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_icon", function() { return AmplifyIcon; });
/* harmony import */ var _index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a93ff41e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-a93ff41e.js");
/* harmony import */ var _icons_42c98dcb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons-42c98dcb.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/icons-42c98dcb.js");


var amplifyIconCss = ".sc-amplify-icon-h{--icon-fill-color:var(--amplify-white)}.icon.sc-amplify-icon{fill:var(--icon-fill-color)}";
var AmplifyIcon = /** @class */ (function () {
    function AmplifyIcon(hostRef) {
        Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    AmplifyIcon.prototype.validateName = function (newValue) {
        var isBlank = typeof newValue == null;
        if (isBlank) {
            throw new Error('name: required');
        }
    };
    // https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes
    AmplifyIcon.prototype.render = function () {
        return Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "icon" }, _icons_42c98dcb_js__WEBPACK_IMPORTED_MODULE_1__["i"][this.name]());
    };
    Object.defineProperty(AmplifyIcon, "watchers", {
        get: function () {
            return {
                "name": ["validateName"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return AmplifyIcon;
}());
AmplifyIcon.style = amplifyIconCss;



/***/ })

}]);