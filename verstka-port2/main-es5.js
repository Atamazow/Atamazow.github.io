function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _verstka2_verstka2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./verstka2/verstka2.component */
    "./src/app/verstka2/verstka2.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'verstka-port2';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-verstka2");
        }
      },
      directives: [_verstka2_verstka2_component__WEBPACK_IMPORTED_MODULE_1__["Verstka2Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _verstka2_verstka2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./verstka2/verstka2.component */
    "./src/app/verstka2/verstka2.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _verstka2_verstka2_component__WEBPACK_IMPORTED_MODULE_4__["Verstka2Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _verstka2_verstka2_component__WEBPACK_IMPORTED_MODULE_4__["Verstka2Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/verstka2/verstka2.component.ts":
  /*!************************************************!*\
    !*** ./src/app/verstka2/verstka2.component.ts ***!
    \************************************************/

  /*! exports provided: Verstka2Component */

  /***/
  function srcAppVerstka2Verstka2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Verstka2Component", function () {
      return Verstka2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Verstka2Component = /*#__PURE__*/function () {
      function Verstka2Component() {
        _classCallCheck(this, Verstka2Component);
      }

      _createClass(Verstka2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Verstka2Component;
    }();

    Verstka2Component.ɵfac = function Verstka2Component_Factory(t) {
      return new (t || Verstka2Component)();
    };

    Verstka2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Verstka2Component,
      selectors: [["app-verstka2"]],
      decls: 197,
      vars: 0,
      consts: [[1, "header_logo"], ["id", "myTopnav", 1, "topnav"], ["href", "#"], [1, "main__welcome"], [1, "mycompany"], [1, "wrapper"], [1, "main__about"], [1, "about__left"], ["src", "https://sun9-76.userapi.com/zJgk0vghBFDO0ZhBOf1e49iBgKgMgtRmMvSKdA/aG5MdtZ0h_g.jpg", "alt", "mac", 1, "mw-100"], [1, "about__right"], [1, "main__team"], [1, "team__cards"], [1, "card"], [1, "photo"], [1, "name"], [1, "position"], [1, "about__position"], [1, "main__services"], [1, "line"], [1, "services__cards"], [1, "services__card"], ["src", "https://sun9-3.userapi.com/g_yLRNiSceuUf7907SmYXWUBynZelSXzg6UWKQ/IWg7ZOVnXnE.jpg", "alt", "mobile apps"], ["src", "https://sun9-29.userapi.com/aPztNmoxSFWkBAKI6Av6_qqgp-cqT9TA0yUe3Q/e7bBBnK708I.jpg", "alt", "mobile apps"], ["src", "https://sun9-18.userapi.com/zZR9dmtZW5jeSUQQ3p3jR0XyYDa1cD0v7xNQbQ/NJWOPEbLw18.jpg", "alt", "mobile apps"], ["src", "https://sun9-27.userapi.com/xeuPUymaJJZcaOmAGYWSzREfCnkRRtJD9dlB4g/JsSZz8A9tQs.jpg", "alt", "mobile apps"], [1, "main__clients"], [1, "clients"], ["src", "/assets/img/Layer5.png"], ["src", "/assets/img/Layer4.png"], ["src", "/assets/img/Layer3.png"], ["src", "/assets/img/Layer2.png"], ["src", "/assets/img/Layer1.png"], [1, "main__work"], [1, "gallery"], [1, "line1"], ["src", "https://sun9-71.userapi.com/iwVE3YwPnTwAC3dPEFldW06IJo8CP4KTR3F9uA/hAEkQH-IYRc.jpg", "alt", ""], [1, "line2"], ["src", "https://sun9-74.userapi.com/7obnBHJNDc8Zp1h7e49EAk4_gTlbGFOWZN8csQ/SK3-HMPh3pM.jpg", "alt", ""], [1, "line3"], ["src", "https://sun9-30.userapi.com/eZ8Kt2sn0wFv3IOUvyr8m0VVGobfcttD9Gh6cw/wKR-sz3Oak0.jpg", "alt", ""], [1, "main__testimonials"], [1, "testimonials"], [1, "contact__from"], [1, "contact__wrapper"], ["action", "#", "name", "newform", "method", "post"], [1, "form__inputs"], [1, "red"], ["type", "text"], [1, "email"], ["type", "email"], [1, "message"], ["name", "text"], [1, "button__block"], ["type", "submit", "value", "SEND"], [1, "socical"], ["src", "/assets/img/ikona1.png", "alt", ""], ["src", "/assets/img/ikona2.png", "alt", ""], ["src", "/assets/img/ikona3.png", "alt", ""], ["src", "/assets/img/ikona4.png", "alt", ""], ["src", "/assets/img/ikona5.png", "alt", ""]],
      template: function Verstka2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "mycompany");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ABOUT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SERVICES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PORTFOLIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TESTIMONIALS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CONTACT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "WELCOME ON ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "MYCOMPANY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis suscipit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "SOME WORDS ABOUT US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "autem dignissimos dolore dolorem ducimus fugiat hic illum iste ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "labore magnam natus nemo nesciunt nihil, odio possimus? Doloribus, laudantium minus? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Mission - We deliver uniqueness and quality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Skills - Delivering fast and excellent results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Clients - Satisfied clients thanks to our experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "OUR TEAM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Nasir Atamazov");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in, soluta sunt ullam vitae voluptas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Nasir Atamazov");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in, soluta sunt ullam vitae voluptas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Nasir Atamazov");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in, soluta sunt ullam vitae voluptas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Nasir Atamazov");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in, soluta sunt ullam vitae voluptas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "OUR SERVICES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolore laborum minus non tempore, ullam unde! Atque eius ex nesciunt quod, reprehenderit totam voluptates! Accusamus alias aut dolore et fugit magni natus officiis repellat sunt, ut, voluptates voluptatum? Iusto, sint?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "MOBILE APPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores quisquam ratione rerum sint suscipit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "MOBILE APPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores quisquam ratione rerum sint suscipit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "MOBILE APPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores quisquam ratione rerum sint suscipit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "MOBILE APPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", The first line of Lorem Ipsum, \"Lorem ipsum dolor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " SOME OF OUR CLIENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "take a look at our work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ex quidem maiores ullam quis, at asperiores minus ad eaque maxime possimus cum ab iusto assumenda velit excepturi porro ipsa tenetur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "OUIR CLIENTS\u2019 TESTIMONIALS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Dean Martin, CEO Acme Inc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "section", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "CONTACT FORM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolorum enim sequi sit! Animi commodi earum est nobis nulla. Asperiores commodi dignissimos doloribus eum libero, maiores molestiae nostrum nulla perferendis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "form", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Email addres");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "textarea", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  background-color: #000;\r\n  display: flex;\r\n}\r\n\r\n.header_logo[_ngcontent-%COMP%]{\r\n  text-transform: uppercase;\r\n  color: white;\r\n  font-weight: 800;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  margin-top: 56px;\r\n  margin-left: 12%;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]{\r\n  margin-top: 56px;\r\n  margin-left: 29%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-align: center;\r\n  padding: 12px 16px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  border-bottom: 3px solid #fcac45;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\nmain[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\nmain[_ngcontent-%COMP%]   .main__welcome[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  text-align: center;\r\n  color: white;\r\n  padding: 200px 0 410px 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%]   .main__welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #999999;\r\n  font-size: 20px;\r\n}\r\n\r\nmain[_ngcontent-%COMP%]   .main__welcome[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  color: #999999;\r\n  font-size: 44px;\r\n}\r\n\r\nmain[_ngcontent-%COMP%]   .main__welcome[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after{\r\n  display: none;\r\n}\r\n\r\n.mycompany[_ngcontent-%COMP%]{\r\n  color:#fcac45;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]{\r\n  width: 76%;\r\n  margin: 0 auto;\r\n}\r\n\r\nmain[_ngcontent-%COMP%]   .main__about[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  padding: 100px 0 100px 0;\r\n}\r\n\r\n.about__right[_ngcontent-%COMP%]{\r\n  margin-left: 175px;\r\n}\r\n\r\n.about__right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  border-bottom: 3px solid #fcac45;\r\n  padding-bottom: 21px;\r\n}\r\n\r\n.about__right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-bottom: 50px;\r\n  color: #6c6c6c; ;\r\n}\r\n\r\n.about__right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  background-image: url(\"https://sun9-30.userapi.com/5XYq_2xdZARdBQWMVSx4C9KQex4EBaxRCrF-qg/Yt7K8OfwBjw.jpg\");\r\n  background-repeat: no-repeat;\r\n  padding-left: 25px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.about__right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:after{\r\n  display: none;\r\n}\r\n\r\n.mw-100[_ngcontent-%COMP%]{\r\n  min-width: 100%;\r\n}\r\n\r\n.main__team[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  text-align: center;\r\n  padding: 100px 0px 165px 0;\r\n  color: white;\r\n}\r\n\r\n.main__team[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-size:44px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.photo[_ngcontent-%COMP%]{\r\n  background-color: #d7d7d7;\r\n  width: 125px;\r\n  height: 125px;\r\n  border-radius: 50%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.team__cards[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n  margin: 0 40px;\r\n}\r\n\r\n.name[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  margin-bottom: 4px;\r\n\r\n}\r\n\r\n.position[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  margin-bottom: 35px;\r\n  color: #d7d7d7;\r\n}\r\n\r\n.about__position[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  color: #d7d7d7;\r\n}\r\n\r\n.services__cards[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto;\r\n  grid-column-gap: 20px;\r\n}\r\n\r\n.main__services[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding: 100px 0 30px 0;\r\n\r\n}\r\n\r\n.main__services[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  color: #6c6c6c;\r\n  margin-bottom: 100px;\r\n  font-size: 18px;\r\n}\r\n\r\n.services__card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.main__clients[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  padding:100px 0 205px 0 ;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  margin-bottom: 30px;\r\n\r\n}\r\n\r\n.main__clients[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  margin-left: 30px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.main__testimonials[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.main__testimonials[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.main__testimonials[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-transform: uppercase;\r\n  margin-bottom: 50px;\r\n\r\n}\r\n\r\n.main__work[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding: 100px 0 100px 0;\r\n}\r\n\r\n.main__work[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  margin-bottom: 30px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.main__work[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin-bottom: 155px;\r\n  color: #6c6c6c;\r\n}\r\n\r\n.main__work[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n  opacity: 0.9;\r\n  transition: 0.3s;\r\n}\r\n\r\n.contact__wrapper[_ngcontent-%COMP%]{\r\n  width: 753px;\r\n  margin: 0 auto;\r\n  color: #636363;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  width: 360px;\r\n  height: 40px;\r\n  font-size: 20px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.red[_ngcontent-%COMP%]{\r\n  color: red;\r\n}\r\n\r\n.form__inputs[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin-top: 100px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 163px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{\r\n  border: 1px solid #999999;\r\n  margin-top: 5px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:first-of-type{\r\n  margin-right: 28px;\r\n}\r\n\r\n.button__block[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\ninput[type=submit][_ngcontent-%COMP%]{\r\n  width: 165px;\r\n  height: 40px;\r\n  background-color:#fcac45;\r\n  color: white;\r\n  margin-right: 0px;\r\n  margin-top: 20px;\r\n  border: none;\r\n}\r\n\r\n.contact__from[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  text-align: left;\r\n}\r\n\r\n.contact__from[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  color: black;\r\n  margin-bottom: 30px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.contact__from[_ngcontent-%COMP%] {\r\n  padding: 100px 0 100px 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]:after{\r\n  content:\"\";\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 100px;\r\n  padding-bottom: 30px;\r\n  border-bottom: 3px solid #fcac45;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: #222222;\r\n  padding: 30px 0 30px 0;\r\n}\r\n\r\n.socical[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.socical[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  margin-left: 12px;\r\n}\r\n\r\n.socical[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n  opacity: 0.9;\r\n}\r\n\r\n@media screen and (max-width: 1365px){\r\n  nav[_ngcontent-%COMP%]{\r\n    margin-left:20%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1175px){\r\n  nav[_ngcontent-%COMP%]{\r\n    margin-left:10%;}\r\n}\r\n\r\n@media screen and (max-width: 1025px){\r\n  nav[_ngcontent-%COMP%]{\r\n    margin-left:10%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1010px){\r\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]{\r\n    float:right;\r\n    margin-top: -17px;\r\n    display: block;\r\n    color: white;\r\n    font-size: 25px;\r\n  }\r\n  nav[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .topnav.responsive[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top: 50px;\r\n    left:-200px;\r\n  }\r\n  .responsive[_ngcontent-%COMP%]{\r\n    height: 340px;\r\n  }\r\n  .topnav.responsive[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top:-50px;\r\n    right:-200px;\r\n  }\r\n  .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n\r\n\r\n\r\n  main[_ngcontent-%COMP%]   .main__welcome[_ngcontent-%COMP%]{\r\n    padding: 50px 0 50px 0;\r\n  }\r\n  main[_ngcontent-%COMP%]   .main__welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n  }\r\n  main[_ngcontent-%COMP%]   .main__welcome[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n  }\r\n  .mw-100[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n  }\r\n  .main__about[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n  }\r\n  .about__right[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-left: 0px;\r\n  }\r\n  .about__right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n  }\r\n  .about__right[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    margin-top: 10px;\r\n  }\r\n  .team__cards[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n  }\r\n  .services__cards[_ngcontent-%COMP%]{\r\n    grid-template-columns: auto;\r\n  }\r\n\r\n  .line1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:first-child){\r\n    display: none;\r\n  }.line2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:first-child){\r\n     display: none;\r\n   }.line3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:not(:first-child){\r\n      display: none;\r\n    }\r\n  .line[_ngcontent-%COMP%]{\r\n    margin-left:-35px ;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n  }\r\n  .clients[_ngcontent-%COMP%]{\r\n    margin-left: -20px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 765px){\r\n  input[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    margin-bottom: 30px;\r\n    margin-left: 30px;\r\n    display: flex;\r\n  }\r\n  .form__inputs[_ngcontent-%COMP%]{\r\n    margin: 40px auto;\r\n    flex-direction: column;\r\n  }\r\n  .name[_ngcontent-%COMP%], .email[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n  }\r\n  .message[_ngcontent-%COMP%]{\r\n    margin-left: 16px;\r\n  }\r\n  textarea[_ngcontent-%COMP%]{\r\n    width: 340px;\r\n    margin-left: 15px;\r\n  }\r\n  .contact__wrapper[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 100%;\r\n  }\r\n  .button__block[_ngcontent-%COMP%]{\r\n\r\n\r\n  }\r\n  input[type=submit][_ngcontent-%COMP%]{\r\n    width: 130px;\r\n    margin-right: 18px;\r\n    padding-left: 39px;\r\n    font-size: 18px ;\r\n\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyc3RrYTIvdmVyc3RrYTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFHQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkdBQTJHO0VBQzNHLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCOztBQUV6Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1COztBQUVyQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFTQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlLENBQUM7QUFDcEI7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7RUFDZDtFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7Ozs7RUFJQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsYUFBYTtFQUNmLENBQUM7S0FDRSxhQUFhO0dBQ2YsQ0FBQztNQUNFLGFBQWE7SUFDZjtFQUNGO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7RUFDQTs7O0VBR0E7RUFDQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7RUFFbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZlcnN0a2EyL3ZlcnN0a2EyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxubGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5oZWFkZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaGVhZGVyX2xvZ297XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxubmF2e1xyXG4gIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI5JTtcclxufVxyXG4udG9wbmF2IGF7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udG9wbmF2IGE6aG92ZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmY2FjNDU7XHJcbn1cclxuXHJcbi50b3BuYXYgLmljb257XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcbm1haW57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbm1haW4gLm1haW5fX3dlbGNvbWV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMDBweCAwIDQxMHB4IDA7XHJcbn1cclxubWFpbiAubWFpbl9fd2VsY29tZSBwIHtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxubWFpbiAubWFpbl9fd2VsY29tZSBoMXtcclxuICBjb2xvcjogIzk5OTk5OTtcclxuICBmb250LXNpemU6IDQ0cHg7XHJcbn1cclxubWFpbiAubWFpbl9fd2VsY29tZSBoMTphZnRlcntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubXljb21wYW55e1xyXG4gIGNvbG9yOiNmY2FjNDU7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiA3NiU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxubWFpbiAubWFpbl9fYWJvdXR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4IDA7XHJcbn1cclxuLmFib3V0X19yaWdodHtcclxuICBtYXJnaW4tbGVmdDogMTc1cHg7XHJcbn1cclxuXHJcbi5hYm91dF9fcmlnaHQgaDF7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmNhYzQ1O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMXB4O1xyXG59XHJcblxyXG4uYWJvdXRfX3JpZ2h0IHB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIGNvbG9yOiAjNmM2YzZjOyA7XHJcbn1cclxuXHJcbi5hYm91dF9fcmlnaHQgbGl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zdW45LTMwLnVzZXJhcGkuY29tLzVYWXFfMnhkWkFSZEJRV01WU3g0QzlLUWV4NEVCYXhSQ3JGLXFnL1l0N0s4T2Z3Qmp3LmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5hYm91dF9fcmlnaHQgaDE6YWZ0ZXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubXctMTAwe1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5tYWluX190ZWFte1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMDBweCAwcHggMTY1cHggMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm1haW5fX3RlYW0gaDF7XHJcbiAgZm9udC1zaXplOjQ0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5waG90b3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3O1xyXG4gIHdpZHRoOiAxMjVweDtcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG4udGVhbV9fY2FyZHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2FyZHtcclxuICBtYXJnaW46IDAgNDBweDtcclxufVxyXG4ubmFtZXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG5cclxufVxyXG4ucG9zaXRpb257XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgY29sb3I6ICNkN2Q3ZDc7XHJcbn1cclxuLmFib3V0X19wb3NpdGlvbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNkN2Q3ZDc7XHJcbn1cclxuXHJcbi5zZXJ2aWNlc19fY2FyZHN7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxufVxyXG5cclxuLm1haW5fX3NlcnZpY2VzIGgxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMDBweCAwIDMwcHggMDtcclxuXHJcbn1cclxuLm1haW5fX3NlcnZpY2VzIHB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNmM2YzZjO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc2VydmljZXNfX2NhcmQgaDR7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubWFpbl9fY2xpZW50c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOjEwMHB4IDAgMjA1cHggMCA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDF7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbn1cclxuXHJcbi5tYWluX19jbGllbnRzIGltZ3tcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWFpbl9fdGVzdGltb25pYWxze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWluX190ZXN0aW1vbmlhbHMgaDF7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ubWFpbl9fdGVzdGltb25pYWxzIHB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5tYWluX193b3Jre1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4IDA7XHJcbn1cclxuLm1haW5fX3dvcmsgaDF7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5tYWluX193b3JrIHB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTU1cHg7XHJcbiAgY29sb3I6ICM2YzZjNmM7XHJcbn1cclxuLm1haW5fX3dvcmsgaW1nOmhvdmVye1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uY29udGFjdF9fd3JhcHBlcntcclxuICB3aWR0aDogNzUzcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgY29sb3I6ICM2MzYzNjM7XHJcbn1cclxuaW5wdXR7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ucmVke1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmZvcm1fX2lucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNjNweDtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhe1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5pbnB1dDpmaXJzdC1vZi10eXBle1xyXG4gIG1hcmdpbi1yaWdodDogMjhweDtcclxufVxyXG5cclxuLmJ1dHRvbl9fYmxvY2t7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXN1Ym1pdF17XHJcbiAgd2lkdGg6IDE2NXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmY2FjNDU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5jb250YWN0X19mcm9tIGgxLHB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmZvcm0gcHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY29udGFjdF9fZnJvbSBoMXtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uY29udGFjdF9fZnJvbSB7XHJcbiAgcGFkZGluZzogMTAwcHggMCAxMDBweCAwO1xyXG59XHJcblxyXG5oMTphZnRlcntcclxuICBjb250ZW50OlwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmNhYzQ1O1xyXG59XHJcbmZvb3RlcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcclxuICBwYWRkaW5nOiAzMHB4IDAgMzBweCAwO1xyXG59XHJcbi5zb2NpY2Fse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zb2NpY2FsIGltZ3tcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuLnNvY2ljYWwgaW1nOmhvdmVye1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjVweCl7XHJcbiAgbmF2e1xyXG4gICAgbWFyZ2luLWxlZnQ6MjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE3NXB4KXtcclxuICBuYXZ7XHJcbiAgICBtYXJnaW4tbGVmdDoxMCU7fVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjVweCl7XHJcbiAgbmF2e1xyXG4gICAgbWFyZ2luLWxlZnQ6MTAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTBweCl7XHJcbiAgLnRvcG5hdiBhe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnRvcG5hdiBhLmljb257XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIG5hdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudG9wbmF2LnJlc3BvbnNpdmV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0Oi0yMDBweDtcclxuICB9XHJcbiAgLnJlc3BvbnNpdmV7XHJcbiAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gIH1cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgYS5pY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOi01MHB4O1xyXG4gICAgcmlnaHQ6LTIwMHB4O1xyXG4gIH1cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgYXtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBtYWluIC5tYWluX193ZWxjb21le1xyXG4gICAgcGFkZGluZzogNTBweCAwIDUwcHggMDtcclxuICB9XHJcbiAgbWFpbiAubWFpbl9fd2VsY29tZSBwe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBtYWluIC5tYWluX193ZWxjb21lIGgxe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICAubXctMTAwe1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWFpbl9fYWJvdXR7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuYWJvdXRfX3JpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLmFib3V0X19yaWdodCBsaXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5hYm91dF9fcmlnaHQgaDF7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAudGVhbV9fY2FyZHN7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuc2VydmljZXNfX2NhcmRze1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmxpbmUxIGltZzpub3QoOmZpcnN0LWNoaWxkKXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfS5saW5lMiBpbWc6bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgICAgZGlzcGxheTogbm9uZTtcclxuICAgfS5saW5lMyBpbWc6bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgLmxpbmV7XHJcbiAgICBtYXJnaW4tbGVmdDotMzVweCA7XHJcbiAgfVxyXG4gIC53cmFwcGVyIGgxe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5jbGllbnRze1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NXB4KXtcclxuICBpbnB1dHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5mb3JtX19pbnB1dHN7XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5uYW1lLC5lbWFpbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB9XHJcbiAgLm1lc3NhZ2V7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICB9XHJcbiAgdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgLmNvbnRhY3RfX3dyYXBwZXJ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmJ1dHRvbl9fYmxvY2t7XHJcblxyXG5cclxuICB9XHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRde1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzOXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4IDtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Verstka2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-verstka2',
          templateUrl: './verstka2.component.html',
          styleUrls: ['./verstka2.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\насир\Desktop\angular\verstka-port2\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map