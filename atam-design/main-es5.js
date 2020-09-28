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


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'atam-design';
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-portfolio");
        }
      },
      directives: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"]],
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


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");

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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/portfolio/portfolio.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/portfolio/portfolio.component.ts ***!
    \**************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent() {
        _classCallCheck(this, PortfolioComponent);
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
      return new (t || PortfolioComponent)();
    };

    PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioComponent,
      selectors: [["app-portfolio"]],
      decls: 468,
      vars: 0,
      consts: [["type", "checkbox", "id", "checkbox-menu"], ["for", "checkbox-menu"], [1, "menu", "toch"], ["href", "#", 1, "logo"], [1, "header_prelude111"], ["src", "https://i.ibb.co/sRcKWnx/prelude.png", "alt", "", 1, "prelude"], [1, "contacts"], [1, "home"], ["href", "#"], ["src", "https://i.ibb.co/09WhFZ7/Caret.png", "alt", "", 1, "caret"], [1, "get__about"], [1, "cartSearch"], ["src", "https://i.ibb.co/68G6jkf/Cart.png", "alt", "", 1, "cart"], [1, "getSearch"], ["src", "https://i.ibb.co/sWWX9mc/Vector-Smart-Object.png", "alt", "", 1, "search"], [1, "btn1"], [1, "btn2"], [1, "toggle"], [1, "main_fon"], [1, "wrapper"], [1, "wrapper_section"], [1, "fon_text"], [1, "zag_fon"], [1, "safari"], [1, "app_store"], ["src", "https://i.ibb.co/55GGWNr/Vector-Smart-Object12.png", "alt", "", 1, "app_store11"], [1, "google_play"], ["src", "https://i.ibb.co/k5Jv2pg/Vector-Smart-Object8.png", "alt", "", 1, "app_store11"], [1, "strela"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-down"], [1, "object"], [1, "sponsor"], [1, "wrapper_get"], [1, "sposorObj"], ["src", "https://i.ibb.co/9rh26WQ/sponsor3.png", "alt", "", 1, "sponsorIkona"], ["src", "https://i.ibb.co/jh0dMG3/sponsor2.png", "alt", "", 1, "sponsorIkona", "textIkona"], ["src", "https://i.ibb.co/93R0ZPP/sponsor4.png", "alt", "", 1, "sponsorIkona", "textIkona"], [1, "main_selection"], [1, "selector__text"], [1, "selector__text22"], [1, "work"], [1, "text__selector"], [1, "selectorPlaybook"], [1, "message"], [1, "obkect__playbook"], ["src", "https://i.ibb.co/KwwDWBk/Icon.png", "alt", "", 1, "greenIkona"], [1, "zagPlaybook"], [1, "zagText"], [1, "bord"], ["src", "https://i.ibb.co/HY4RPrr/Icon1.png", "alt", "", 1, "greenIkona"], ["src", "https://i.ibb.co/QN9TYhH/Icon2.png", "alt", "", 1, "greenIkona"], ["src", "https://i.ibb.co/bmJWDpB/BG4.png", "alt", "", 1, "sberbank"], [1, "wrapper__gray"], [1, "lini1"], [1, "start__obj"], [1, "start_manage"], [1, "start_color"], [1, "edinica"], ["src", "https://i.ibb.co/kJKpxZ8/Dots-Right.png", "alt", "", 1, "tochki"], [1, "start_zag"], [1, "start_text"], [1, "start_color", "SC2"], [1, "edinica2"], [1, "content__main"], [1, "content__object"], [1, "content__select"], [1, "content_text__zagolovok"], [1, "content_zag"], [1, "content_Zagolovk"], [1, "share__assign"], [1, "content_text"], [1, "ProhectsTeamsTasks"], [1, "content__project"], [1, "cifra"], [1, "m"], [1, "content__project_zag"], [1, "content__project__text"], [1, "content__select22"], [1, "content__object__foto"], [1, "get__devuchka"], [1, "selector__img_video_calendar"], [1, "center"], [1, "glava__obj__center"], [1, "get__center__block1"], ["src", "https://i.ibb.co/93xwQYV/Icon4.png", "alt", ""], [1, "center__text_zag"], [1, "center_zag"], [1, "centet_text"], [1, "get__center__block1", "block2"], ["src", "https://i.ibb.co/QbqXn5x/Icon6.png", "alt", ""], [1, "glava__obj__center2"], [1, "get__center__block3"], ["src", "https://i.ibb.co/D49dczx/Icon3.png", "alt", ""], ["src", "https://i.ibb.co/JthzMSG/Icon5.png", "alt", ""], [1, "glavaPortfolio"], [1, "port__text"], [1, "port__get__zag"], [1, "port__get__text"], [1, "portfolio__rabotniki"], [1, "portfolio"], [1, "getPortfolio", "getport"], [1, "get__portfolio__block1", "block2"], ["src", "https://i.ibb.co/2sYSfp1/personaj1.png", "alt", "", 1, "personaj"], [1, "portfolio__text_zag"], [1, "portfolio_name"], [1, "portfolio_rabota"], [1, "portfolio__get__zag"], [1, "portfolio__get__text"], ["src", "https://i.ibb.co/r70SB3b/Star-Icon.png", "alt", "", 1, "zvezdochki"], [1, "portfolio", "port2"], ["src", "https://i.ibb.co/4W6gmcZ/Blue-Dots.png", "alt", "", 1, "dost__get"], [1, "getPortfolio"], ["src", "https://i.ibb.co/xCvsdRC/personaj2.png", "alt", "", 1, "personaj"], [1, "content"], ["src", "https://i.ibb.co/FWbFjYR/personaj3.png", "alt", "", 1, "personaj"], ["src", "https://i.ibb.co/Cv53JNv/personaj4.png", "alt", "", 1, "personaj"], ["src", "https://i.ibb.co/k5hpJsH/Pink-Dots.png", "alt", "", 1, "dost__get"], ["src", "https://i.ibb.co/qnHkx4z/personaj5.png", "alt", "", 1, "personaj"], ["src", "https://i.ibb.co/cQM8fkf/personaj7.png", "alt", "", 1, "personaj"], ["src", "https://i.ibb.co/qFtbBZs/personaj6.png", "alt", "", 1, "personaj"], ["src", "https://i.ibb.co/cNGP0ck/personaj8.png", "alt", "", 1, "personaj"], [1, "selector__text", "phone__text"], [1, "phone"], ["src", "https://i.ibb.co/RY7n0NF/phone555.png", "alt", "", 1, "iphone"], [1, "get__woman"], [1, "fon_text", "get__fon__Text"], [1, "woman_get_zag"], [1, "woman__zag"], [1, "started"], [1, "install"], [1, "woman_text"], ["src", "https://i.ibb.co/6Jjrrj9/AppStore.png", "alt", "", 1, "app_store11"], ["src", "https://i.ibb.co/LRdb8xz/Play-Store.png", "alt", "", 1, "app_store11"], ["src", "https://i.ibb.co/ZVGS4fs/Subscribe.png", "alt", "", 1, "subsride"], [1, "get__footer"], [1, "footer__slova"], [1, "footer__get__slova"], [1, "footer__text"], [1, "footer__ikona"], [1, "foot_ik"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], [1, "foot_ik", "foot_ik22"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "footer__get__slova22"], [1, "slova__zag"], [1, "slova__content"], [1, "footer__get__slova22", "foot__get__slov"], [1, "footer__get__slova22", "offices"], [1, "slova__content", "content22"], [1, "number"], [1, "bord_bott"], [1, "conec"], [1, "prelude__2019"], [1, "privacy__policy"]],
      template: function PortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PRELUDE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Resources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Purchase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u2630");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Your projects and tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " through every stage. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "You know where work stands and can keep everyone aligned ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " on goals. Plan and structure work in a way that\u2019s best for you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "The simple work management platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "A new way to manage your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "work, tasks and projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "It's easy to track your time by project and task. Assign your logged time to projects and tasks. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Time to bill? Select the relevant time entries and click invoice. It's that simple. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Always In Sync");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Arrange tasks in board, list, and timeline view to fit your needs. Track productivity with our dashboard.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "The Team Playbook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Arrange tasks in board, list, and timeline view to fit your needs. Track productivity with our dashboard.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "A Productivity Platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Arrange tasks in board, list, and timeline view to fit your needs. Track productivity with our dashboard.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "See all apps, integrations, and extensions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " for desktop, browser and email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Manage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "See all apps, integrations, and extensions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " for desktop, browser and email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Grow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "See all apps, integrations, and extensions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " for desktop, browser and email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " We are a future-oriented hybrid agency ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Share details and assign ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " tasks. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " All in one place");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Plan and structure work in a way that\u2019s best for you. Set priorities and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " deadlines. Eliminate roadblocks. Even when plans change. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "3.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Projects ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " We helps teams manage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " many tasks at same time. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "2.1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "k");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Teams ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " We helps teams manage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " many tasks at same time. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "7.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " We helps teams manage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " many tasks at same time. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "img", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "With Intuitive Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "You'll know exactly who\u2019s working on what and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " when it\u2019s due.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "With Intuitive Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "You'll know exactly who\u2019s working on what and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " when it\u2019s due.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "img", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "With Intuitive Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "You'll know exactly who\u2019s working on what and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " when it\u2019s due.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "img", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "With Intuitive Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "You'll know exactly who\u2019s working on what and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " when it\u2019s due.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "See why thousands of companies love using our app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Read how these customers organize their work with Prelude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Monica Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "CEO & Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Awesome app!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Really fun and interactive. Easy-to-use app worked instantly for me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "img", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Thomas Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "CEO & Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "This team rocks!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "p", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Really fun and interactive. Easy-to-use app worked instantly for me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "img", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Stella Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "CEO & Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "They made it easy!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Really fun and interactive. Easy-to-use app worked instantly for me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "img", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Vincent Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "CEO & Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Very useful app!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Really fun and interactive. Easy-to-use app worked instantly for me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "img", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "img", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Jane Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "CEO & Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Good job!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Really fun and interactive. Easy-to-use app worked instantly for me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "img", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Ernest Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "CEO & Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "This is a super app!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Really fun and interactive. Easy-to-use app worked instantly for me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "img", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "John Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "CEO & Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Works like magic!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "p", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Really fun and interactive. Easy-to-use app worked instantly for me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "img", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Jackson Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "span", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "CEO & Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Jackson Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Really fun and interactive. Easy-to-use app worked instantly for me!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "img", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "The simple work management platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Your projects gets completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " faster and easier.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "img", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "span", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " To get started,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "span", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, " download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, " & install now!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "p", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Prelude helps teams manage tasks and communication ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, " so projects gets completed faster and easier.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "img", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "img", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " PRELUDE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "p", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Learn and improve your knowledge with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, " our industry experts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "i", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "i", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "i", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, " About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, " Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, " Resources ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Marketplace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Experts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Guides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, " Offices ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "div", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "New York. 112 W 34th,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "Manhattan. USA. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "span", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "8922-473-73-19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "\xA92019 Prelude by Viworx-Co. All Rights Reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "div", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Terms of use |Privacy policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n}\r\n\r\nbody[_ngcontent-%COMP%]   html[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #f9f9fa;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  display: flex;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n\r\n\r\n  margin: 20px auto;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  width: 1170px;\r\n  max-width: 100%;\r\n}\r\n\r\n.caret[_ngcontent-%COMP%]{\r\n  width: 8px;\r\n  height: 6px;\r\n  margin-top: 17px;\r\n  margin-left: -20px;\r\n}\r\n\r\n.home[_ngcontent-%COMP%] {\r\n  margin-left:199px;\r\n}\r\n\r\n.get__about[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\n#checkbox-menu[_ngcontent-%COMP%], .toggle[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  list-style-type: none;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color:#39374d;\r\n  text-decoration: none;\r\n  align-self: center;\r\n  padding: 10px 25px;\r\n  font-size: 13px;\r\n  transition: background .2s linear;\r\n\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n}\r\n\r\n.header_prelude111[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-left: -5px;\r\n}\r\n\r\n.contacts[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.search[_ngcontent-%COMP%] {\r\n  height: 18px;\r\n  width:18px;\r\n  margin-top: 12px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.cart[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.prelude[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 25px;\r\n  display: flex;\r\n}\r\n\r\n.get_prelude[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.cartSearch[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 50px;\r\n}\r\n\r\n.btn1[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 150px;\r\n  background-color:#00d662 ;\r\n  border-radius: 4px;\r\n  margin-left: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n.btn2[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  font-size:16px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  width: 1170px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  max-width: 100%;\r\n}\r\n\r\n.Purchase[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-top: 15px;\r\n}\r\n\r\n\r\n\r\n.main_fon[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/6rTY0HF/getBg.png\");\r\n  width: 100%;\r\n  background-size: cover;\r\n  height: 750px;\r\n  overflow: hidden;\r\n  max-width: 100%;\r\n}\r\n\r\n.zag_fon[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.zag_fon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .woman__zag[_ngcontent-%COMP%] {\r\n  margin-top: 200px;\r\n  color: #39374d;\r\n  font-size: 48px;\r\n  width: 710px;\r\n  max-width: 100%;\r\n\r\n}\r\n\r\n.zag_fon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color:#373737;\r\n  margin-top: 50px;\r\n  font-size: 19px;\r\n}\r\n\r\n.app_store11[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 175px;\r\n  margin-left: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.safari[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-top: 52px;\r\n}\r\n\r\n.strela[_ngcontent-%COMP%] {\r\n  margin-top: 58px;\r\n  color: #39374c;\r\n  font-size: 18px;\r\n}\r\n\r\n.strela[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  color: #39374c;\r\n  margin-top: -30px;\r\n}\r\n\r\n.lydi[_ngcontent-%COMP%] {\r\n  margin-top: 35px;\r\n  position: absolute;\r\n  left:-100px;\r\n  width: 730px;\r\n\r\n}\r\n\r\n.object[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.wrapper_section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.sponsorIkona[_ngcontent-%COMP%] {\r\n  height: 87px;\r\n}\r\n\r\n.textIkona[_ngcontent-%COMP%] {\r\n  height: 20px;\r\n}\r\n\r\n.sposorObj[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 95px;\r\n}\r\n\r\n.textIkona3[_ngcontent-%COMP%] {\r\n  height: 78px;\r\n\r\n}\r\n\r\n.greenIkona[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n\r\n.wrapper_get[_ngcontent-%COMP%] {\r\n  width: 1100px;\r\n  margin: 0 auto;\r\n  max-width: 100%;\r\n}\r\n\r\n.main_selection[_ngcontent-%COMP%] {\r\n  margin-top: 95px;\r\n}\r\n\r\n.selector__text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.selector__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  color: #00d662;\r\n}\r\n\r\n.selector__text22[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n  font-size: 52px;\r\n  color: #39374d;\r\n}\r\n\r\n.text__selector[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  font-size: 18px;\r\n  color: #39374d;\r\n}\r\n\r\n.work[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n\r\n.message[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  text-align: center;\r\n  margin-top: 90px;\r\n}\r\n\r\n.obkect__playbook[_ngcontent-%COMP%] {\r\n  margin-left: 80px;\r\n}\r\n\r\n.zagPlaybook[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  color:#39374d ;\r\n  font-weight: 600;\r\n  margin-top: 27px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.zagText[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #748494;\r\n}\r\n\r\n.bord[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 5px;\r\n  margin-left: 41% ;\r\n  margin-top:27px;\r\n  background-color: #e7e7e7;\r\n  border-radius: 3px;\r\n}\r\n\r\n.obkect__playbook[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n.wrapper__gray[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/SdQYpW3/BG1.png\");\r\n  width: 100%;\r\n  height: 750px;\r\n  background-size: cover;\r\n  margin-top: -300px;\r\n}\r\n\r\n.sberbank[_ngcontent-%COMP%] {\r\n  width:970px;\r\n  height: 600px;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n  top: 50px;\r\n  display: flex;\r\n  z-index: 100;\r\n  left: 40px;\r\n}\r\n\r\n.lini1[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/1bP8rRY/Lines1.png\");\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background-size: cover;\r\n}\r\n\r\n.start_manage[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  margin: auto;\r\n  margin-left: 50px;\r\n}\r\n\r\n.start_color[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 50px;\r\n  background-color:#ffa4c7;\r\n  color: white;\r\n  margin: auto;\r\n  border-radius: 25px;\r\n  align-items: center;\r\n  display: flex;\r\n  text-align: center;\r\n}\r\n\r\n.edinica[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  display: block;\r\n  font-size: 22px;\r\n  color: white;\r\n}\r\n\r\n.SC2[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n\r\n.edinica2[_ngcontent-%COMP%] {\r\n  color: #79d1f7;\r\n  margin-left: 20px;\r\n  display: block;\r\n  font-size: 22px;\r\n}\r\n\r\n.wrapper_get[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.start__obj[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  text-align: center;\r\n  margin-top: 350px;\r\n}\r\n\r\n.tochki[_ngcontent-%COMP%] {\r\n  margin-left: 65px;\r\n  width: 230px;\r\n}\r\n\r\n.start_zag[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  margin-bottom: 25px;\r\n  font-size: 22px;\r\n  color: #39374d;\r\n  font-weight: 600;\r\n  font-family: futuraPT;\r\n}\r\n\r\n.start_text[_ngcontent-%COMP%] {\r\n  color:#b4bbc2;\r\n  font-size: 15px;\r\n}\r\n\r\n\r\n\r\n.content__main[_ngcontent-%COMP%] {\r\n  margin-top: 70px;\r\n}\r\n\r\n.content__object[_ngcontent-%COMP%] {\r\n  display: flex;\r\n\r\n}\r\n\r\n.content_zag[_ngcontent-%COMP%] {\r\n  color:#00d664;\r\n  font-size: 14px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.content_Zagolovk[_ngcontent-%COMP%] {\r\n  font-size: 46px;\r\n  margin-bottom:30px;\r\n  color: #39374d;\r\n}\r\n\r\n.content_Zagolovk[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #39374d;\r\n  font-weight: 600;\r\n}\r\n\r\n.content_text[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n\r\n}\r\n\r\n.cifra[_ngcontent-%COMP%] {\r\n  color:#39374d;\r\n  font-size:52px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.m[_ngcontent-%COMP%] {\r\n  color:#7540ee;\r\n  margin-left: 2px;\r\n}\r\n\r\n.content__project_zag[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  color: #39374d;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.content__project__text[_ngcontent-%COMP%] {\r\n  color: #5e5d6c;\r\n  font-size: 14px;\r\n}\r\n\r\n.ProhectsTeamsTasks[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-top: 55px;\r\n}\r\n\r\n.content__project[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n.get__devuchka[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/kGRd4R4/devushka1-jpg.png\");\r\n  width:800px;\r\n  height: 600px;\r\n  background-size: cover;\r\n}\r\n\r\n.content__object__foto[_ngcontent-%COMP%] {\r\n  margin-left: -160px;\r\n  margin-top: -100px;\r\n}\r\n\r\n.content__select22[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n.glava__obj__center[_ngcontent-%COMP%], .glava__obj__center2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.glava__obj__center2[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n\r\n}\r\n\r\n.get__center__block1[_ngcontent-%COMP%], .get__center__block3[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 15px;\r\n}\r\n\r\n.get__center__block3[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: 16px;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n}\r\n\r\n.center_zag[_ngcontent-%COMP%] {\r\n  color: #39374d;\r\n  font-size: 20px;\r\n}\r\n\r\n.center__text_zag[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\r\n\r\n.centet_text[_ngcontent-%COMP%] {\r\n  color: #748494;\r\n  font-size: 15px;\r\n  margin-top: 20px;\r\n  line-height: 24px;\r\n}\r\n\r\n.selector__img_video_calendar[_ngcontent-%COMP%] {\r\n  background-color: #f9f9fa;\r\n}\r\n\r\n.obj_block3[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border-radius: 4px;\r\n}\r\n\r\n.portfolio__rabotniki[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 200px;\r\n  display: flex;\r\n}\r\n\r\n.get__portfolio__block1[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n.glavaPortfolio[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/fFhzvPf/BG5.png\");\r\n  width: 100%;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n.portfolio[_ngcontent-%COMP%] {\r\n  width: 270px;\r\n  height: 340px;\r\n  margin-top: 50px;\r\n  margin-left: 45px;\r\n  font-family: \"Open Sans\";\r\n}\r\n\r\n.getPortfolio[_ngcontent-%COMP%] {\r\n  padding: 40px 35px 45px 45px;\r\n  font-size: 16px;\r\n  background-color: white;\r\n  width: 170px;\r\n  height: 240px;\r\n  border-radius: 7px;\r\n  position: relative;\r\n\r\n}\r\n\r\n.getport[_ngcontent-%COMP%] {\r\n  opacity: 0.7;\r\n}\r\n\r\n.personaj[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n.portfolio__get__text[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color:#748494;\r\n}\r\n\r\n.portfolio__text_zag[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  margin-left: 10px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.portfolio_name[_ngcontent-%COMP%] {\r\n  color: #39374d;\r\n  font-size: 14px;\r\n}\r\n\r\n.portfolio_rabota[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color:#b1b1b1;\r\n}\r\n\r\n.portfolio__get__zag[_ngcontent-%COMP%] {\r\n  color: #39374d;\r\n  font-size: 22px;\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.port2[_ngcontent-%COMP%] {\r\n  margin-top: 150px;\r\n}\r\n\r\n.port__text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  position:relative;\r\n  top: 180px;\r\n}\r\n\r\n.port__get__zag[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  color: #39374d;\r\n}\r\n\r\n.port__get__text[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #5e5d6c;\r\n}\r\n\r\n.dost__get[_ngcontent-%COMP%] {\r\n  position:absolute;\r\n  top: 42px;\r\n  margin-left: 67px;\r\n}\r\n\r\n.zvezdochki[_ngcontent-%COMP%] {\r\n  margin-top: 35px;\r\n}\r\n\r\n.phone[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  text-align: center;\r\n  margin-top: 100px;\r\n  margin-left: -100px;\r\n}\r\n\r\n.phone__text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  position: relative;\r\n  top: 180px;\r\n}\r\n\r\n.get__woman[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/SDTdVHd/devuchka.png\");\r\n  width: 100%;\r\n  height: 650px;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.woman_text[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #373737;\r\n}\r\n\r\n.started[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.install[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n}\r\n\r\n.safari[_ngcontent-%COMP%] {\r\n  margin-left: -15px;\r\n}\r\n\r\n.woman__zag[_ngcontent-%COMP%] {\r\n  font-size: 52px;\r\n}\r\n\r\n.woman_get_zag[_ngcontent-%COMP%]{\r\n position: absolute;\r\n  top:50px;\r\n  max-width: 100%;\r\n}\r\n\r\n.get__footer[_ngcontent-%COMP%] {\r\n  width: 1170px;\r\n  margin: auto;\r\n  max-width: 100%;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  background-color: #f5f2f0;\r\n  margin-top: 350px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.footer__text[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #5e5d6c;\r\n  line-height: 23px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.footer__ikona[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-top: 30px;\r\n}\r\n\r\n.foot_ik22[_ngcontent-%COMP%] {\r\n  margin-left: 15px;\r\n}\r\n\r\n.foot_ik[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 2px solid #b4bbc2;\r\n  text-align: center;\r\n  border-radius: 100px;\r\n}\r\n\r\n.fa-facebook[_ngcontent-%COMP%], .fa-twitter[_ngcontent-%COMP%], .fa-instagram[_ngcontent-%COMP%] {\r\n  margin-left: -1px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.foot_ik[_ngcontent-%COMP%]:hover {\r\n  background-color: #00d664;\r\n  color: white;\r\n  border-width: 0;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\n.footer__slova[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 130px;\r\n}\r\n\r\n.slova__zag[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #39374d;\r\n  margin-bottom: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.slova__content[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #373737;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.number[_ngcontent-%COMP%] {\r\n  color: #00d664;\r\n  margin-top: 6px;\r\n  font-weight: 600;\r\n  display: block;\r\n}\r\n\r\n.slova__content[_ngcontent-%COMP%]:hover {\r\n  color: #00d664;\r\n  border-bottom: 2px solid #00d664;\r\n  transition: 0.3s;\r\n}\r\n\r\n.bord_bott[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n  border-bottom: 1px solid #b4bbc2;\r\n}\r\n\r\n.conec[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 25px;\r\n}\r\n\r\n.prelude__2019[_ngcontent-%COMP%]{\r\n  font-size:16px;\r\n  color: #5e5d6c;\r\n}\r\n\r\n.privacy__policy[_ngcontent-%COMP%] {\r\n  color:#748494 ;\r\n  font-size: 14px;\r\n}\r\n\r\n.subsride[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  position: absolute;\r\n  top:20px;\r\n  left: 70px;\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n\r\n  .main_fon[_ngcontent-%COMP%]{\r\n    width: 1000px;\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    margin-left: 0;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    margin-right: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\r\n  .safari[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%], .strela[_ngcontent-%COMP%] {\r\n    margin-left: 6%;\r\n    width: 500px;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .toggle[_ngcontent-%COMP%] {\r\n    clear: both;\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    color: black;\r\n    background-color:#00d664;\r\n    transition: all .1s linear;\r\n  }\r\n\r\n  .toggle[_ngcontent-%COMP%]:hover {\r\n    background-color:#00d662;\r\n  }\r\n\r\n  #checkbox-menu[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .toch[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: all .7s linear;\r\n    padding-left: 14px;\r\n  }\r\n\r\n  #checkbox-menu[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .toch[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 0;\r\n    transition: height .3s linear;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-self: center;\r\n    width: 100%;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-left: -15px;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    text-align: center;\r\n    align-self: center;\r\n    align-content: center;\r\n    font-size: 20px;\r\n    color: #39374d;\r\n    margin-top: -5px;\r\n  }\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.contacts[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color:#00d664;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .contacts[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n  }\r\n\r\n  header[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .Home[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .search[_ngcontent-%COMP%], .cart[_ngcontent-%COMP%], .btn1[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .safari[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left: -10px;\r\n  }\r\n\r\n  \r\n\r\n  .object[_ngcontent-%COMP%], .object22[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .fon_text[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n\r\n    margin: auto;\r\n  }\r\n  .zag_fon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n  }\r\n\r\n  .sposorObj[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  \r\n  .message[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .obkect__playbook[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\n  .wrapper_get[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .bord[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    margin-top: 28px;\r\n  }\r\n\r\n  .sberbank[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .start__obj[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-top: 130px;\r\n    display: block;\r\n  }\r\n\r\n  .tochki[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .start_manage[_ngcontent-%COMP%] {\r\n    margin: 15px auto;\r\n  }\r\n\r\n  .sberbank[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .wrapper__gray[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .start_zag[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    margin-bottom: 9px;\r\n    font-size: 22px;\r\n    color: #39374d;\r\n    font-weight: 600;\r\n    font-family: futuraPT;\r\n  }\r\n\r\n\r\n  .ProhectsTeamsTasks[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    margin: auto;\r\n  }\r\n\r\n  .content__object[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    margin: auto;\r\n  }\r\n\r\n  .get__devuchka[_ngcontent-%COMP%]{\r\n    background-image: url(\"https://i.ibb.co/kGRd4R4/devushka1-jpg.png\");\r\n    width:350px;\r\n    height: 300px;\r\n    background-size: cover;\r\n    margin-left:-50px;\r\n  }\r\n\r\n  .content__object__foto[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-left: -30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: -30px;\r\n\r\n  }\r\n  .content__select[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    margin: 0 auto;\r\n\r\n  }\r\n  .ProhectsTeamsTasks[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n  }\r\n  .content_Zagolovk[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    width: 500px;\r\n  }\r\n\r\n  .portfolio__rabotniki[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: auto    ;\r\n    grid-column-gap: 20px;\r\n    margin-left: -20px;\r\n  }\r\n\r\n  .portfolio[_ngcontent-%COMP%] {\r\n    margin-left: 33%;\r\n  }\r\n\r\n  .port__get__zag[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .dost__get[_ngcontent-%COMP%] {\r\n    margin-left: 59px;\r\n  }\r\n\r\n  .port2[_ngcontent-%COMP%] {\r\n    margin-top: 35px;\r\n  }\r\n\r\n  .dost__get[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .phone[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    text-align: center;\r\n    margin: 70px auto;\r\n  }\r\n\r\n  .phone__text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: relative;\r\n    top: 150px;\r\n  }\r\n\r\n  .iphone[_ngcontent-%COMP%] {\r\n    width: 750px;\r\n    margin-top: 80px;\r\n    margin-left: -50px;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .footer__slova[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 200px 100px 100px;\r\n    grid-row-gap: 20px;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    margin-top: 200px;\r\n  }\r\n\r\n  .numbers[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n    height: 25px;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .header_prelude111[_ngcontent-%COMP%]{\r\n    margin-top: -12px;\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-top: 120px;\r\n    color: #39374d;\r\n    font-size: 42px;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .content__project[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-left: 20%;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%] {\r\n    margin-left:-25px;\r\n  }\r\n\r\n  .get__about[_ngcontent-%COMP%] {\r\n    margin-left:-22px;\r\n  }\r\n\r\n  .get__fon__Text[_ngcontent-%COMP%]{\r\n    margin-left: 20%;\r\n    margin-top: 40px;\r\n  }\r\n\r\n  .footer__slova[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .get__footer[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .footer__get__slova22[_ngcontent-%COMP%] {\r\n    margin-left: -30px;\r\n  }\r\n\r\n  .foot__get__slov[_ngcontent-%COMP%]{\r\n    margin-left: 0;\r\n  }\r\n\r\n  .caret[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .subsride[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    position: absolute;\r\n    top:-60px;\r\n    left: 0px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 420px) {\r\n\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .fon_text[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n    margin-top: 10%;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .app_store11[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n  }\r\n\r\n  .selector__text22[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .sberbank[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    margin: auto;\r\n    margin-left: 15px;\r\n  }\r\n  .start_manage[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n  }\r\n\r\n  .start_zag[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    margin-bottom: 10px;\r\n    font-size: 22px;\r\n    color: #39374d;\r\n    font-weight: 600;\r\n\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 10px;\r\n  }\r\n\r\n  .content__object__foto[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left:-20px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .content_text__zagolovok[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .content__project[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-left: 20%;\r\n  }\r\n\r\n  .glava__obj__center[_ngcontent-%COMP%], .glava__obj__center2[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n  }\r\n\r\n  .block2[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .phone[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    text-align: center;\r\n    margin: 70px auto;\r\n  }\r\n\r\n  .phone__text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: relative;\r\n    top: 150px;\r\n  }\r\n\r\n  .iphone[_ngcontent-%COMP%] {\r\n    width: 450px;\r\n    margin-top: 80px;\r\n    margin-left: -50px;\r\n  }\r\n\r\n  .safari[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .portfolio__rabotniki[_ngcontent-%COMP%] {\r\n    margin-left: -18%;\r\n\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%] {\r\n    margin-left: -2%;\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\n  .woman__zag[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n  }\r\n\r\n  .get_input[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n\r\n  }\r\n\r\n  .footer__slova[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 200px 100px;\r\n    padding: 15px ;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .offices[_ngcontent-%COMP%] {\r\n    margin-top:-45px;\r\n    margin-left: 45%;\r\n    width: 100%;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    padding-bottom: 30px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .numbers[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .content22[_ngcontent-%COMP%] {\r\n    margin-top: -18px;\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color:#373737;\r\n    margin-top: 50px;\r\n    font-size: 16px;\r\n    width: 320px;\r\n  }\r\n\r\n  .content_Zagolovk[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .glavaPortfolio[_ngcontent-%COMP%] {\r\n    margin-top: -80px;\r\n  }\r\n\r\n  .content_text[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #5e5d6c;\r\n    width: 350px;\r\n  }\r\n\r\n  .slova__zag[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #39374d;\r\n    margin-bottom: 14px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .footer__get__slova22[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .strela[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    margin-left: -14px;\r\n  }\r\n\r\n  .content__select[_ngcontent-%COMP%] {\r\n    width: 375px;\r\n    margin-left: -17px;\r\n    padding-left: 40px;\r\n    box-sizing: border-box;\r\n\r\n  }\r\n\r\n  .content_Zagolovk[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #39374d;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n  }\r\n\r\n  .offices[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .get__fon__Text[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n\r\n  }\r\n\r\n  .header_prelude111[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-left: -15px;\r\n  }\r\n  .fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n    font-weight: 900;\r\n    display: none;\r\n  }\r\n\r\n  .subsride[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    position: absolute;\r\n    top:20px;\r\n    left: 0px;\r\n  }\r\n\r\n  .woman_get_zag[_ngcontent-%COMP%] {\r\n    margin-left: -50px;\r\n    width: 360px;\r\n\r\n  }\r\n\r\n  .port__text[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .sberbank[_ngcontent-%COMP%]{\r\n    width: 520px;\r\n    height: 400px;\r\n    margin: auto;\r\n    margin-left: 0px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUlBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUNBQWlDOztBQUVuQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Us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LGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjs7RUFFbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7O0VBRWQ7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVGOztBQUdBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG59XHJcblxyXG5ib2R5IGh0bWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmOztcclxufVxyXG5cclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmYTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5pIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuXHJcblxyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG5cclxubmF2IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTE3MHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmV0e1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbi5ob21lIHtcclxuICBtYXJnaW4tbGVmdDoxOTlweDtcclxufVxyXG5cclxuLmdldF9fYWJvdXQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiNjaGVja2JveC1tZW51LC50b2dnbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLm1lbnUgbGkgYSB7XHJcbiAgY29sb3I6IzM5Mzc0ZDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgbGluZWFyO1xyXG5cclxufVxyXG5cclxuLm1lbnUgbGkgYS5sb2dvIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyX3ByZWx1ZGUxMTEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbn1cclxuXHJcbi5jb250YWN0cyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6MThweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uY2FydCB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ucHJlbHVkZSB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5nZXRfcHJlbHVkZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNhcnRTZWFyY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmJ0bjEge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDBkNjYyIDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJ0bjIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBmb250LXNpemU6MTZweDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIHdpZHRoOiAxMTcwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLlB1cmNoYXNlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuXHJcbi8q0KHQotCY0JvQmCDQlNCb0K8gbWFpbl9mb24qL1xyXG5cclxuXHJcbi5tYWluX2ZvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby82clRZMEhGL2dldEJnLnBuZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogNzUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi56YWdfZm9uIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLnphZ19mb24gaDEsLndvbWFuX196YWcge1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICB3aWR0aDogNzEwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLnphZ19mb24gcCB7XHJcbiAgY29sb3I6IzM3MzczNztcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLmFwcF9zdG9yZTExIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNhZmFyaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1MnB4O1xyXG59XHJcblxyXG4uc3RyZWxhIHtcclxuICBtYXJnaW4tdG9wOiA1OHB4O1xyXG4gIGNvbG9yOiAjMzkzNzRjO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnN0cmVsYSAgaXtcclxuICBjb2xvcjogIzM5Mzc0YztcclxuICBtYXJnaW4tdG9wOiAtMzBweDtcclxufVxyXG5cclxuLmx5ZGkge1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6LTEwMHB4O1xyXG4gIHdpZHRoOiA3MzBweDtcclxuXHJcbn1cclxuXHJcbi5vYmplY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLndyYXBwZXJfc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNwb25zb3JJa29uYSB7XHJcbiAgaGVpZ2h0OiA4N3B4O1xyXG59XHJcblxyXG4udGV4dElrb25hIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zcG9zb3JPYmoge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogOTVweDtcclxufVxyXG5cclxuLnRleHRJa29uYTMge1xyXG4gIGhlaWdodDogNzhweDtcclxuXHJcbn1cclxuXHJcbi5ncmVlbklrb25he1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLndyYXBwZXJfZ2V0IHtcclxuICB3aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW5fc2VsZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA5NXB4O1xyXG59XHJcblxyXG4uc2VsZWN0b3JfX3RleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlbGVjdG9yX190ZXh0IGgxIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6ICMwMGQ2NjI7XHJcbn1cclxuXHJcbi5zZWxlY3Rvcl9fdGV4dDIyIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogNTJweDtcclxuICBjb2xvcjogIzM5Mzc0ZDtcclxufVxyXG5cclxuLnRleHRfX3NlbGVjdG9yIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzM5Mzc0ZDtcclxufVxyXG5cclxuLndvcmsge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIDQ0NDQ0NDQ0NDQ0NCovXHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogOTBweDtcclxufVxyXG5cclxuLm9ia2VjdF9fcGxheWJvb2sge1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uemFnUGxheWJvb2sge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjojMzkzNzRkIDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDI3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnphZ1RleHQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzc0ODQ5NDtcclxufVxyXG5cclxuLmJvcmQge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MSUgO1xyXG4gIG1hcmdpbi10b3A6MjdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLm9ia2VjdF9fcGxheWJvb2sge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLndyYXBwZXJfX2dyYXkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5pYmIuY28vU2RRWXBXMy9CRzEucG5nXCIpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzUwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtYXJnaW4tdG9wOiAtMzAwcHg7XHJcbn1cclxuXHJcbi5zYmVyYmFuayB7XHJcbiAgd2lkdGg6OTcwcHg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgbGVmdDogNDBweDtcclxufVxyXG5cclxuLmxpbmkxIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kuaWJiLmNvLzFiUDhyUlkvTGluZXMxLnBuZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zdGFydF9tYW5hZ2Uge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zdGFydF9jb2xvciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmYTRjNztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZWRpbmljYSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLlNDMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5lZGluaWNhMiB7XHJcbiAgY29sb3I6ICM3OWQxZjc7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ud3JhcHBlcl9nZXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN0YXJ0X19vYmoge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDM1MHB4O1xyXG59XHJcblxyXG4udG9jaGtpIHtcclxuICBtYXJnaW4tbGVmdDogNjVweDtcclxuICB3aWR0aDogMjMwcHg7XHJcbn1cclxuXHJcbi5zdGFydF96YWcge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogZnV0dXJhUFQ7XHJcbn1cclxuXHJcbi5zdGFydF90ZXh0IHtcclxuICBjb2xvcjojYjRiYmMyO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuXHJcbi8qIDY2NjY2NjY2NjY2NjY2NjY2NjY2NiovXHJcblxyXG5cclxuXHJcblxyXG4uY29udGVudF9fbWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5cclxuLmNvbnRlbnRfX29iamVjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50X3phZyB7XHJcbiAgY29sb3I6IzAwZDY2NDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmNvbnRlbnRfWmFnb2xvdmsge1xyXG4gIGZvbnQtc2l6ZTogNDZweDtcclxuICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbn1cclxuXHJcbi5jb250ZW50X1phZ29sb3ZrIHNwYW4ge1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jb250ZW50X3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbn1cclxuXHJcbi5jaWZyYSB7XHJcbiAgY29sb3I6IzM5Mzc0ZDtcclxuICBmb250LXNpemU6NTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcbi5tIHtcclxuICBjb2xvcjojNzU0MGVlO1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcblxyXG4uY29udGVudF9fcHJvamVjdF96YWcge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogIzM5Mzc0ZDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uY29udGVudF9fcHJvamVjdF9fdGV4dCB7XHJcbiAgY29sb3I6ICM1ZTVkNmM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uUHJvaGVjdHNUZWFtc1Rhc2tzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDU1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50X19wcm9qZWN0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcblxyXG4uZ2V0X19kZXZ1Y2hrYSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby9rR1JkNFI0L2RldnVzaGthMS1qcGcucG5nXCIpO1xyXG4gIHdpZHRoOjgwMHB4O1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNvbnRlbnRfX29iamVjdF9fZm90byB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNjBweDtcclxuICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50X19zZWxlY3QyMiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmdsYXZhX19vYmpfX2NlbnRlciwuZ2xhdmFfX29ial9fY2VudGVyMiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmdsYXZhX19vYmpfX2NlbnRlcjIge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG5cclxufVxyXG5cclxuLmdldF9fY2VudGVyX19ibG9jazEsLmdldF9fY2VudGVyX19ibG9jazMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uZ2V0X19jZW50ZXJfX2Jsb2NrMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jZW50ZXJfemFnIHtcclxuICBjb2xvcjogIzM5Mzc0ZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXJfX3RleHRfemFnIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNlbnRldF90ZXh0IHtcclxuICBjb2xvcjogIzc0ODQ5NDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuXHJcbi5zZWxlY3Rvcl9faW1nX3ZpZGVvX2NhbGVuZGFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhO1xyXG59XHJcblxyXG4ub2JqX2Jsb2NrMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5cclxuLnBvcnRmb2xpb19fcmFib3RuaWtpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZ2V0X19wb3J0Zm9saW9fX2Jsb2NrMXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZ2xhdmFQb3J0Zm9saW8ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5pYmIuY28vZkZoenZQZi9CRzUucG5nXCIpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcblxyXG4ucG9ydGZvbGlvIHtcclxuICB3aWR0aDogMjcwcHg7XHJcbiAgaGVpZ2h0OiAzNDBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG59XHJcblxyXG4uZ2V0UG9ydGZvbGlvIHtcclxuICBwYWRkaW5nOiA0MHB4IDM1cHggNDVweCA0NXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuLmdldHBvcnQge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLnBlcnNvbmFqIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW9fX2dldF9fdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiM3NDg0OTQ7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW9fX3RleHRfemFnIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnBvcnRmb2xpb19uYW1lIHtcclxuICBjb2xvcjogIzM5Mzc0ZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW9fcmFib3RhIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6I2IxYjFiMTtcclxufVxyXG5cclxuLnBvcnRmb2xpb19fZ2V0X196YWcge1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5wb3J0MiB7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbi5wb3J0X190ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgdG9wOiAxODBweDtcclxufVxyXG5cclxuLnBvcnRfX2dldF9femFnIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbn1cclxuXHJcbi5wb3J0X19nZXRfX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzVlNWQ2YztcclxufVxyXG5cclxuLmRvc3RfX2dldCB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOiA0MnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA2N3B4O1xyXG59XHJcblxyXG4uenZlemRvY2hraSB7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG5cclxuLnBob25lIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG59XHJcblxyXG4ucGhvbmVfX3RleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxODBweDtcclxufVxyXG5cclxuLmdldF9fd29tYW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5pYmIuY28vU0RUZFZIZC9kZXZ1Y2hrYS5wbmdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2NTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLndvbWFuX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzM3MzczNztcclxufVxyXG5cclxuLnN0YXJ0ZWQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5pbnN0YWxsIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uc2FmYXJpIHtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuXHJcbi53b21hbl9femFnIHtcclxuICBmb250LXNpemU6IDUycHg7XHJcbn1cclxuXHJcbi53b21hbl9nZXRfemFne1xyXG4gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo1MHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdldF9fZm9vdGVyIHtcclxuICB3aWR0aDogMTE3MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjJmMDtcclxuICBtYXJnaW4tdG9wOiAzNTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZm9vdGVyX190ZXh0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM1ZTVkNmM7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZvb3Rlcl9faWtvbmEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmZvb3RfaWsyMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5mb290X2lrIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2I0YmJjMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuXHJcbi5mYS1mYWNlYm9vaywuZmEtdHdpdHRlciwuZmEtaW5zdGFncmFtIHtcclxuICBtYXJnaW4tbGVmdDogLTFweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uZm9vdF9pazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDY2NDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG59XHJcblxyXG4uZm9vdGVyX19zbG92YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbn1cclxuXHJcblxyXG4uc2xvdmFfX3phZyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zbG92YV9fY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzczNzM3O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5udW1iZXIge1xyXG4gIGNvbG9yOiAjMDBkNjY0O1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2xvdmFfX2NvbnRlbnQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDBkNjY0O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDBkNjY0O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcblxyXG4uYm9yZF9ib3R0IHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjRiYmMyO1xyXG59XHJcblxyXG4uY29uZWMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcblxyXG4ucHJlbHVkZV9fMjAxOXtcclxuICBmb250LXNpemU6MTZweDtcclxuICBjb2xvcjogIzVlNWQ2YztcclxufVxyXG5cclxuLnByaXZhY3lfX3BvbGljeSB7XHJcbiAgY29sb3I6Izc0ODQ5NCA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc3Vic3JpZGV7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MjBweDtcclxuICBsZWZ0OiA3MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG5cclxuICAubWFpbl9mb257XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnphZ19mb24ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgbGkgYS5sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLnNhZmFyaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC56YWdfZm9uLC5zdHJlbGEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRvZ2dsZSB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwZDY2NDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xyXG4gIH1cclxuXHJcbiAgLnRvZ2dsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGQ2NjI7XHJcbiAgfVxyXG5cclxuICAjY2hlY2tib3gtbWVudTpjaGVja2VkICsgbGFiZWwgLnRvY2ggbGkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjdzIGxpbmVhcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICB9XHJcblxyXG4gICNjaGVja2JveC1tZW51OmNoZWNrZWQgKyBsYWJlbCAudG9jaCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzIGxpbmVhcjtcclxuICB9XHJcblxyXG4gIC5tZW51IGxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICB1bCBsaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgfVxyXG5cclxuICAubWVudSBsaSBhIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzM5Mzc0ZDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgfVxyXG4gIC5tZW51IGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgbGkgYS5sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5tZW51IGxpIGEuY29udGFjdHMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgbGkgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGQ2NjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdHM6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuSG9tZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaCwuY2FydCwuYnRuMXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuemFnX2ZvbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2FmYXJpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgfVxyXG5cclxuICAvKiDQvNC+0LHQuNC70YzQvdCw0Y8g0LLQtdGA0YHRgtC60LAg0LTQu9GPIDIg0LHQu9C+0LrQsCAqL1xyXG5cclxuICAub2JqZWN0LC5vYmplY3QyMntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb25fdGV4dHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC56YWdfZm9uIGgxe1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNwb3Nvck9iantcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiDQvNC+0LHQuNC70YzQvdCw0Y8g0LLQtdGA0YHRgtC60LAg0LTQu9GPIDQ0NCDQsdC70L7QutCwICovXHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5vYmtlY3RfX3BsYXlib29rIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLndyYXBwZXJfZ2V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmJvcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICB9XHJcblxyXG4gIC5zYmVyYmFuayB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5zdGFydF9fb2JqIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAudG9jaGtpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc3RhcnRfbWFuYWdlIHtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNiZXJiYW5rIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlcl9fZ3JheSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnN0YXJ0X3phZ3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzM5Mzc0ZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogZnV0dXJhUFQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLlByb2hlY3RzVGVhbXNUYXNrcyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRfX29iamVjdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmdldF9fZGV2dWNoa2F7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kuaWJiLmNvL2tHUmQ0UjQvZGV2dXNoa2ExLWpwZy5wbmdcIik7XHJcbiAgICB3aWR0aDozNTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6LTUwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudF9fb2JqZWN0X19mb3Rve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuXHJcbiAgfVxyXG4gIC5jb250ZW50X19zZWxlY3R7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgfVxyXG4gIC5Qcm9oZWN0c1RlYW1zVGFza3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY29udGVudF9aYWdvbG92ayB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAucG9ydGZvbGlvX19yYWJvdG5pa2l7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gICAgO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xyXG4gIH1cclxuXHJcbiAgLnBvcnRfX2dldF9femFnIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5kb3N0X19nZXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU5cHg7XHJcbiAgfVxyXG5cclxuICAucG9ydDIge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICB9XHJcblxyXG4gIC5kb3N0X19nZXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5waG9uZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAucGhvbmVfX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNTBweDtcclxuICB9XHJcblxyXG4gIC5pcGhvbmUge1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX3Nsb3ZhIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm51bWJlcnMge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5tZW51IGxpIGEubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuaG9tZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfcHJlbHVkZTExMXtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIH1cclxuXHJcbiAgLnphZ19mb24gaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICAgIGNvbG9yOiAjMzkzNzRkO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRfX3Byb2plY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAuaG9tZSB7XHJcbiAgICBtYXJnaW4tbGVmdDotMjVweDtcclxuICB9XHJcblxyXG4gIC5nZXRfX2Fib3V0IHtcclxuICAgIG1hcmdpbi1sZWZ0Oi0yMnB4O1xyXG4gIH1cclxuXHJcbiAgLmdldF9fZm9uX19UZXh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19zbG92YSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdldF9fZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fZ2V0X19zbG92YTIyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICB9XHJcblxyXG4gIC5mb290X19nZXRfX3Nsb3Z7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5jYXJldCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuc3Vic3JpZGV7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6LTYwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiDQvNC+0LHQuNC70YzQvdCw0Y8g0LLQtdGA0YHRgtC60LAg0LTQu9GPIDU1NSDQsdC70L7QutCwICovXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZvbl90ZXh0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICAuaG9tZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5hcHBfc3RvcmUxMSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0b3JfX3RleHQyMiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuc2JlcmJhbmsge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICAuc3RhcnRfbWFuYWdlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXJ0X3phZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMzkzNzRkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRfX29iamVjdF9fZm90byB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0Oi0yMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50X3RleHRfX3phZ29sb3ZvayB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRfX3Byb2plY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAuZ2xhdmFfX29ial9fY2VudGVyLC5nbGF2YV9fb2JqX19jZW50ZXIye1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5ibG9jazIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAucGhvbmV7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAucGhvbmVfX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNTBweDtcclxuICB9XHJcblxyXG4gIC5pcGhvbmUge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICB9XHJcblxyXG4gIC5zYWZhcmkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAucG9ydGZvbGlvX19yYWJvdG5pa2kge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOCU7XHJcblxyXG4gIH1cclxuXHJcbiAgLnphZ19mb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLndvbWFuX196YWcge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgLmdldF9pbnB1dCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fc2xvdmEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICAub2ZmaWNlcyB7XHJcbiAgICBtYXJnaW4tdG9wOi00NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5udW1iZXJzIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuY29udGVudDIyIHtcclxuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gIH1cclxuXHJcbiAgLnphZ19mb24gaDEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC56YWdfZm9uIHAge1xyXG4gICAgY29sb3I6IzM3MzczNztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudF9aYWdvbG92ayB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZ2xhdmFQb3J0Zm9saW8ge1xyXG4gICAgbWFyZ2luLXRvcDogLTgwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudF90ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNWU1ZDZjO1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNsb3ZhX196YWcge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzOTM3NGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19nZXRfX3Nsb3ZhMjIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAuc3RyZWxhIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTRweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50X19zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDM3NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgfVxyXG5cclxuICAuY29udGVudF9aYWdvbG92ayBzcGFuIHtcclxuICAgIGNvbG9yOiAjMzkzNzRkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC5vZmZpY2VzIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZ2V0X19mb25fX1RleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuXHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX3ByZWx1ZGUxMTEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICB9XHJcbiAgLmZhLCAuZmFzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnN1YnNyaWRlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDoyMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLndvbWFuX2dldF96YWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5wb3J0X190ZXh0IHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAuc2JlcmJhbmt7XHJcbiAgICB3aWR0aDogNTIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio',
          templateUrl: './portfolio.component.html',
          styleUrls: ['./portfolio.component.css']
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
    /*! C:\Users\насир\Desktop\angular\atam-design\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map