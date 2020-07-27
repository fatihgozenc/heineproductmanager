(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-photo-picker.entry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-photo-picker.entry.js ***!
  \********************************************************************************************/
/*! exports provided: amplify_photo_picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_photo_picker", function() { return AmplifyPhotoPicker; });
/* harmony import */ var _index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a93ff41e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-a93ff41e.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_59947173_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-59947173.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-59947173.js");




var amplifyPhotoPickerCss = ":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}";
var AmplifyPhotoPicker = /** @class */ (function () {
    function AmplifyPhotoPicker(hostRef) {
        var _this = this;
        Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Title string value */
        this.headerTitle = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_59947173_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHOTO_PICKER_TITLE);
        /** Header Hint value in string */
        this.headerHint = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_59947173_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHOTO_PICKER_HINT);
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_59947173_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHOTO_PICKER_PLACEHOLDER_HINT);
        /** Picker button text as string */
        this.buttonText = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(_Translations_59947173_js__WEBPACK_IMPORTED_MODULE_3__["T"].PHOTO_PICKER_BUTTON_TEXT);
        /** Function that handles file pick onClick */
        this.handleClick = function () { };
        this.handleInput = function (ev) {
            _this.file = ev.target.files[0];
            var reader = new FileReader();
            reader.onload = function (_e) {
                var url = reader.result;
                _this.previewState = url;
            };
            reader.readAsDataURL(_this.file);
        };
    }
    AmplifyPhotoPicker.prototype.componentWillLoad = function () {
        this.previewState = this.previewSrc;
    };
    AmplifyPhotoPicker.prototype.render = function () {
        var _this = this;
        return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "photo-picker-container" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-section", null, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header" }, this.headerTitle), Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-hint" }, this.headerHint), Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-picker", { acceptValue: 'image/*', inputHandler: this.handleInput }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "picker-body", slot: "picker" }, this.previewState ? Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: "" + this.previewState }) : Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", { name: "photoPlaceholder" }))), Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "placeholder-hint" }, this.placeholderHint), Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { handleButtonClick: function () { return _this.handleClick(_this.file); } }, this.buttonText))));
    };
    return AmplifyPhotoPicker;
}());
AmplifyPhotoPicker.style = amplifyPhotoPickerCss;



/***/ })

}]);