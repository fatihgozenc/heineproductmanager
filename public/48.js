(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/status-tap-9b3787f0.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/status-tap-9b3787f0.js ***!
  \**********************************************************************/
/*! exports provided: startStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
/* harmony import */ var _index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-821f9ab1.js */ "./node_modules/@ionic/core/dist/esm-es5/index-821f9ab1.js");

var startStatusTap = function () {
    var win = window;
    win.addEventListener('statusTap', function () {
        Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["f"])(function () {
            var width = win.innerWidth;
            var height = win.innerHeight;
            var el = document.elementFromPoint(width / 2, height / 2);
            if (!el) {
                return;
            }
            var contentEl = el.closest('ion-content');
            if (contentEl) {
                contentEl.componentOnReady().then(function () {
                    Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () { return contentEl.scrollToTop(300); });
                });
            }
        });
    });
};



/***/ })

}]);