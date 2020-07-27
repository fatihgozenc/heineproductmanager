(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-federated-sign-in.entry.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-federated-sign-in.entry.js ***!
  \*************************************************************************************************/
/*! exports provided: amplify_federated_sign_in */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_federated_sign_in", function() { return AmplifyFederatedSignIn; });
/* harmony import */ var _index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a93ff41e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-a93ff41e.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-6835ae6a.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-6835ae6a.js");





var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]('amplify-federated-sign-in');
var AmplifyFederatedSignIn = /** @class */ (function () {
    function AmplifyFederatedSignIn(hostRef) {
        Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The current authentication state. */
        this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
    }
    AmplifyFederatedSignIn.prototype.componentWillLoad = function () {
        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure !== 'function') {
            throw new Error(_constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_4__["N"]);
        }
        var _a = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].configure({}).oauth, oauth = _a === void 0 ? {} : _a;
        // backward compatibility
        if (oauth['domain']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth);
        }
        else if (oauth['awsCognito']) {
            this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth['awsCognito']);
        }
        if (oauth['auth0']) {
            this.federated.auth0 = Object.assign(Object.assign({}, this.federated.auth0), oauth['auth0']);
        }
    };
    AmplifyFederatedSignIn.prototype.render = function () {
        if (!this.federated) {
            logger.debug('federated prop is empty. show nothing');
            logger.debug('federated={google_client_id: , facebook_app_id: , amazon_client_id}');
            return null;
        }
        if (!Object.values(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"]).includes(this.authState)) {
            return null;
        }
        logger.debug('federated Config is', this.federated);
        return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-form-section", { "data-test": "federated-sign-in-section" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-section", { "data-test": "federated-sign-in-body-section" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-federated-buttons", { authState: this.authState, "data-test": "federated-sign-in-buttons", federated: this.federated }))));
    };
    return AmplifyFederatedSignIn;
}());



/***/ })

}]);