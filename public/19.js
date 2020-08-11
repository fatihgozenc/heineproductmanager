(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_avatar, ion_badge, ion_thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_thumbnail", function() { return Thumbnail; });
/* harmony import */ var _index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-821f9ab1.js */ "./node_modules/@ionic/core/dist/esm-es5/index-821f9ab1.js");
/* harmony import */ var _ionic_global_f538b4cf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-f538b4cf.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-f538b4cf.js");
/* harmony import */ var _theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-3f0b0c04.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-3f0b0c04.js");



var avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";
var avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";
var Avatar = /** @class */ (function () {
    function Avatar(hostRef) {
        Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Avatar.prototype.render = function () {
        return (Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_ionic_global_f538b4cf_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }, Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return Avatar;
}());
Avatar.style = {
    ios: avatarIosCss,
    md: avatarMdCss
};
var badgeIosCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}";
var badgeMdCss = ":host{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:13px;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}";
var Badge = /** @class */ (function () {
    function Badge(hostRef) {
        Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Badge.prototype.render = function () {
        var _a;
        var mode = Object(_ionic_global_f538b4cf_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
        return (Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign(Object.assign({}, Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color)), (_a = {}, _a[mode] = true, _a)) }, Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return Badge;
}());
Badge.style = {
    ios: badgeIosCss,
    md: badgeMdCss
};
var thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";
var Thumbnail = /** @class */ (function () {
    function Thumbnail(hostRef) {
        Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Thumbnail.prototype.render = function () {
        return (Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_ionic_global_f538b4cf_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) }, Object(_index_821f9ab1_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return Thumbnail;
}());
Thumbnail.style = thumbnailCss;



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-3f0b0c04.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-3f0b0c04.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction, animation) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction, animation)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ })

}]);