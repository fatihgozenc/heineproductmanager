(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-authenticator.entry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-authenticator.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: amplify_authenticator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_authenticator", function() { return AmplifyAuthenticator; });
/* harmony import */ var _index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a93ff41e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-a93ff41e.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_59947173_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-59947173.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-59947173.js");
/* harmony import */ var _constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-6835ae6a.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-6835ae6a.js");
/* harmony import */ var _helpers_e703dacf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-e703dacf.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-e703dacf.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var amplifyAuthenticatorCss = ":host{--background-color:var(--amplify-background-color);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('Authenticator');
var AmplifyAuthenticator = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */
        this.initialAuthState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn;
        /** Callback for Authenticator state machine changes */
        this.handleAuthStateChange = function () { };
        this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading;
        this.toastMessage = '';
        this.handleExternalAuthEvent = function (_a) {
            var payload = _a.payload;
            switch (payload.event) {
                case 'cognitoHostedUI':
                case 'signIn':
                    return Object(_helpers_e703dacf_js__WEBPACK_IMPORTED_MODULE_6__["d"])(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, payload.data);
                case 'cognitoHostedUI_failure':
                case 'parsingUrl_failure':
                case 'signOut':
                case 'customGreetingSignOut':
                    return Object(_helpers_e703dacf_js__WEBPACK_IMPORTED_MODULE_6__["d"])(_this.initialAuthState);
            }
        };
        this.handleToastEvent = function (_a) {
            var payload = _a.payload;
            switch (payload.event) {
                case _constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_5__["T"]:
                    if (payload.message)
                        _this.toastMessage = payload.message;
                    break;
            }
        };
    }
    class_1.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var byHostedUI;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_helpers_e703dacf_js__WEBPACK_IMPORTED_MODULE_6__["o"])(function (authState, authData) {
                            _this.onAuthStateChange(authState, authData);
                            _this.toastMessage = '';
                        });
                        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen(_constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_5__["U"], this.handleToastEvent);
                        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].listen(_constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_5__["A"], this.handleExternalAuthEvent);
                        Object(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["appendToCognitoUserAgent"])('amplify-authenticator');
                        byHostedUI = localStorage.getItem(_constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_5__["R"]);
                        localStorage.removeItem(_constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_5__["R"]);
                        if (!(byHostedUI !== 'true')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.checkUser()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.checkUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_1, cachedAuthState, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"] || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser !== 'function') {
                            throw new Error(_constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_5__["N"]);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 9]);
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()];
                    case 2:
                        user = _a.sent();
                        Object(_helpers_e703dacf_js__WEBPACK_IMPORTED_MODULE_6__["d"])(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn, user);
                        return [3 /*break*/, 9];
                    case 3:
                        error_1 = _a.sent();
                        cachedAuthState = null;
                        try {
                            cachedAuthState = localStorage.getItem(_constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_5__["c"]);
                        }
                        catch (error) {
                            logger.debug('Failed to get the auth state from local storage', error);
                        }
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        if (!(cachedAuthState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn)) return [3 /*break*/, 6];
                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        Object(_helpers_e703dacf_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.initialAuthState);
                        return [3 /*break*/, 8];
                    case 7:
                        error_2 = _a.sent();
                        logger.debug('Failed to sign out', error_2);
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.onAuthStateChange = function (nextAuthState, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (nextAuthState === undefined)
                    return [2 /*return*/, logger.error('nextAuthState cannot be undefined')];
                logger.info('Inside onAuthStateChange Method current authState:', this.authState);
                if (nextAuthState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedOut) {
                    this.authState = this.initialAuthState;
                }
                else {
                    this.authState = nextAuthState;
                }
                this.authData = data;
                if (this.authData)
                    logger.log('Auth Data was set:', this.authData);
                if (this.authState === nextAuthState) {
                    this.handleAuthStateChange(this.authState, this.authData);
                    logger.info("authState has been updated to " + this.authState);
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.renderAuthComponent = function (authState) {
        switch (authState) {
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignIn:
                return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "sign-in" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-in", { federated: this.federated, usernameAlias: this.usernameAlias })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignIn:
                return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "confirm-sign-in" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-confirm-sign-in", { user: this.authData })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignUp:
                return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "sign-up" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-sign-up", { usernameAlias: this.usernameAlias })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ConfirmSignUp:
                return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "confirm-sign-up" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-confirm-sign-up", { user: this.authData, usernameAlias: this.usernameAlias })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ForgotPassword:
                return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "forgot-password" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-forgot-password", { usernameAlias: this.usernameAlias })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].ResetPassword:
                return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "require-new-password" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-require-new-password", { user: this.authData })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].VerifyContact:
                return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "verify-contact" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-verify-contact", { user: this.authData })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].TOTPSetup:
                return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "totp-setup" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-totp-setup", { user: this.authData })));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].Loading:
                return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "loading" }, Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Loading...")));
            case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__["A"].SignedIn:
                return [Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "greetings" }), Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)];
            default:
                throw new Error("Unhandled auth state: " + authState);
        }
    };
    class_1.prototype.componentWillUnload = function () {
        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove(_constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_5__["A"], this.handleExternalAuthEvent);
        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Hub"].remove(_constants_6835ae6a_js__WEBPACK_IMPORTED_MODULE_5__["U"], this.handleToastEvent);
        return _helpers_e703dacf_js__WEBPACK_IMPORTED_MODULE_6__["o"];
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.toastMessage ? (Object(_index_a93ff41e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-toast", { message: this.toastMessage, handleClose: function () {
                _this.toastMessage = '';
            }, "data-test": "authenticator-error" })) : null, this.renderAuthComponent(this.authState)));
    };
    return class_1;
}());
AmplifyAuthenticator.style = amplifyAuthenticatorCss;



/***/ })

}]);