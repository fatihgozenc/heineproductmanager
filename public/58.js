(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-picker.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-picker.entry.js ***!
  \**************************************************************************************/
/*! exports provided: amplify_picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_picker", function() { return AmplifyPicker; });
/* harmony import */ var _index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a93ff41e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-a93ff41e.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_59947173_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-59947173.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-59947173.js");




var amplifyPickerCss = ".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}";
var AmplifyPicker = /** @class */ (function () {
    function AmplifyPicker(hostRef) {
        Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Picker button text */
        this.pickerText = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_59947173_js__WEBPACK_IMPORTED_MODULE_3__["T"].PICKER_TEXT);
        /** File input accept value */
        this.acceptValue = '*/*';
    }
    AmplifyPicker.prototype.render = function () {
        var _this = this;
        return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "picker" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", null, this.pickerText)), Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { title: this.pickerText, type: "file", accept: this.acceptValue, onChange: function (e) { return _this.inputHandler(e); } })));
    };
    return AmplifyPicker;
}());
AmplifyPicker.style = amplifyPickerCss;



/***/ })

}]);