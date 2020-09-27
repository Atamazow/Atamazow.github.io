(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");



class AppComponent {
    constructor() {
        this.title = 'atam-design';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-portfolio");
    } }, directives: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 468, vars: 0, consts: [["type", "checkbox", "id", "checkbox-menu"], ["for", "checkbox-menu"], [1, "menu", "toch"], ["href", "#", 1, "logo"], [1, "header_prelude111"], ["src", "https://i.ibb.co/sRcKWnx/prelude.png", "alt", "", 1, "prelude"], [1, "contacts"], [1, "home"], ["href", "#"], ["src", "https://i.ibb.co/09WhFZ7/Caret.png", "alt", "", 1, "caret"], [1, "get__about"], [1, "cartSearch"], ["src", "https://i.ibb.co/68G6jkf/Cart.png", "alt", "", 1, "cart"], [1, "getSearch"], ["src", "https://i.ibb.co/sWWX9mc/Vector-Smart-Object.png", "alt", "", 1, "search"], [1, "btn1"], [1, "btn2"], [1, "toggle"], [1, "main_fon"], [1, "wrapper"], [1, "wrapper_section"], [1, "fon_text"], [1, "zag_fon"], [1, "safari"], [1, "app_store"], ["src", "https://i.ibb.co/55GGWNr/Vector-Smart-Object12.png", "alt", "", 1, "app_store11"], [1, "google_play"], ["src", "https://i.ibb.co/k5Jv2pg/Vector-Smart-Object8.png", "alt", "", 1, "app_store11"], [1, "strela"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-down"], [1, "object"], [1, "sponsor"], [1, "wrapper_get"], [1, "sposorObj"], ["src", "https://i.ibb.co/9rh26WQ/sponsor3.png", "alt", "", 1, "sponsorIkona"], ["src", "https://i.ibb.co/jh0dMG3/sponsor2.png", "alt", "", 1, "sponsorIkona", "textIkona"], ["src", "https://i.ibb.co/9rh26WQ/sponsor3.png", "alt", "", 1, "sponsorIkona", "textIkona3"], ["src", "https://i.ibb.co/93R0ZPP/sponsor4.png", "alt", "", 1, "sponsorIkona", "textIkona"], [1, "main_selection"], [1, "selector__text"], [1, "selector__text22"], [1, "work"], [1, "text__selector"], [1, "selectorPlaybook"], [1, "message"], [1, "obkect__playbook"], ["src", "https://i.ibb.co/KwwDWBk/Icon.png", "alt", ""], [1, "zagPlaybook"], [1, "zagText"], [1, "bord"], ["src", "https://i.ibb.co/HY4RPrr/Icon1.png", "alt", ""], ["src", "https://i.ibb.co/QN9TYhH/Icon2.png", "alt", ""], ["src", "https://i.ibb.co/bmJWDpB/BG4.png", "alt", "", 1, "sberbank"], [1, "wrapper__gray"], [1, "lini1"], [1, "start__obj"], [1, "start_manage"], [1, "start_color"], [1, "edinica"], ["src", "https://i.ibb.co/kJKpxZ8/Dots-Right.png", "alt", "", 1, "tochki"], [1, "start_zag"], [1, "start_text"], [1, "start_color", "SC2"], [1, "edinica2"], [1, "content__main"], [1, "content__object"], [1, "content__select"], [1, "content_text__zagolovok"], [1, "content_zag"], [1, "content_Zagolovk"], [1, "share__assign"], [1, "content_text"], [1, "ProhectsTeamsTasks"], [1, "content__project"], [1, "cifra"], [1, "m"], [1, "content__project_zag"], [1, "content__project__text"], [1, "content__select22"], [1, "content__object__foto"], [1, "get__devuchka"], [1, "selector__img_video_calendar"], [1, "center"], [1, "glava__obj__center"], [1, "get__center__block1"], ["src", "https://i.ibb.co/93xwQYV/Icon4.png", "alt", ""], [1, "center__text_zag"], [1, "center_zag"], [1, "centet_text"], [1, "get__center__block1", "block2"], ["src", "https://i.ibb.co/QbqXn5x/Icon6.png", "alt", ""], [1, "glava__obj__center2"], [1, "get__center__block3"], ["src", "https://i.ibb.co/D49dczx/Icon3.png", "alt", ""], ["src", "https://i.ibb.co/JthzMSG/Icon5.png", "alt", ""], [1, "glavaPortfolio"], [1, "port__text"], [1, "port__get__zag"], [1, "port__get__text"], [1, "portfolio__rabotniki"], [1, "portfolio"], [1, "getPortfolio", "getport"], [1, "get__portfolio__block1", "block2"], ["src", "https://i.ibb.co/2sYSfp1/personaj1.png", "alt", "", 1, "personaj"], [1, "portfolio__text_zag"], [1, "portfolio_name"], [1, "portfolio_rabota"], [1, "portfolio__get__zag"], [1, "portfolio__get__text"], ["src", "https://i.ibb.co/r70SB3b/Star-Icon.png", "alt", "", 1, "zvezdochki"], [1, "portfolio", "port2"], ["src", "https://i.ibb.co/4W6gmcZ/Blue-Dots.png", "alt", "", 1, "dost__get"], [1, "getPortfolio"], ["src", "https://i.ibb.co/xCvsdRC/personaj2.png", "alt", "", 1, "personaj"], [1, "content"], ["src", "https://i.ibb.co/FWbFjYR/personaj3.png", "alt", "", 1, "personaj"], ["src", "https://i.ibb.co/Cv53JNv/personaj4.png", "alt", "", 1, "personaj"], ["src", "https://i.ibb.co/k5hpJsH/Pink-Dots.png", "alt", "", 1, "dost__get"], ["src", "https://i.ibb.co/qnHkx4z/personaj5.png", "alt", "", 1, "personaj"], ["src", "https://i.ibb.co/cQM8fkf/personaj7.png", "alt", "", 1, "personaj"], ["src", "https://i.ibb.co/qFtbBZs/personaj6.png", "alt", "", 1, "personaj"], ["src", "https://i.ibb.co/cNGP0ck/personaj8.png", "alt", "", 1, "personaj"], [1, "selector__text", "phone__text"], [1, "phone"], ["src", "https://i.ibb.co/RY7n0NF/phone555.png", "alt", "", 1, "iphone"], [1, "get__woman"], [1, "fon_text", "get__fon__Text"], [1, "woman_get_zag"], [1, "woman__zag"], [1, "started"], [1, "install"], [1, "woman_text"], ["src", "https://i.ibb.co/6Jjrrj9/AppStore.png", "alt", "", 1, "app_store11"], ["src", "https://i.ibb.co/LRdb8xz/Play-Store.png", "alt", "", 1, "app_store11"], ["src", "https://i.ibb.co/ZVGS4fs/Subscribe.png", "alt", "", 1, "subsride"], [1, "get__footer"], [1, "footer__slova"], [1, "footer__get__slova"], [1, "footer__text"], [1, "footer__ikona"], [1, "foot_ik"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], [1, "foot_ik", "foot_ik22"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "footer__get__slova22"], [1, "slova__zag"], [1, "slova__content"], [1, "footer__get__slova22", "foot__get__slov"], [1, "footer__get__slova22", "offices"], [1, "slova__content", "content22"], [1, "number"], [1, "bord_bott"], [1, "conec"], [1, "prelude__2019"], [1, "privacy__policy"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "The simple work management platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "A new way to manage your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "work, tasks and projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "It's easy to track your time by project and task. Assign your logged time to projects and tasks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Time to bill? Select the relevant time entries and click invoice. It's that simple. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Always In Sync");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Arrange tasks in board, list, and timeline view to fit your needs. Track productivity with our dashboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "The Team Playbook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Arrange tasks in board, list, and timeline view to fit your needs. Track productivity with our dashboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "A Productivity Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Arrange tasks in board, list, and timeline view to fit your needs. Track productivity with our dashboard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "See all apps, integrations, and extensions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " for desktop, browser and email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "See all apps, integrations, and extensions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " for desktop, browser and email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Grow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "See all apps, integrations, and extensions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " for desktop, browser and email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " We are a future-oriented hybrid agency ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Share details and assign ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " tasks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " All in one place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Plan and structure work in a way that\u2019s best for you. Set priorities and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " deadlines. Eliminate roadblocks. Even when plans change. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "3.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " We helps teams manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " many tasks at same time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "2.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Teams ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " We helps teams manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " many tasks at same time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "7.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " We helps teams manage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " many tasks at same time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "With Intuitive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "You'll know exactly who\u2019s working on what and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " when it\u2019s due.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "With Intuitive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "You'll know exactly who\u2019s working on what and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " when it\u2019s due.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "With Intuitive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "You'll know exactly who\u2019s working on what and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " when it\u2019s due.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "With Intuitive Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p", 88);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "See why thousands of companies love using our app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Read how these customers organize their work with Prelude");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Monica Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "CEO & Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Awesome app!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Really fun and interactive. Easy-to-use app worked instantly for me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Thomas Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "CEO & Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "This team rocks!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Really fun and interactive. Easy-to-use app worked instantly for me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Stella Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "CEO & Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "They made it easy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Really fun and interactive. Easy-to-use app worked instantly for me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "img", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Vincent Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "CEO & Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Very useful app!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Really fun and interactive. Easy-to-use app worked instantly for me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Jane Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "CEO & Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Good job!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Really fun and interactive. Easy-to-use app worked instantly for me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "img", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Ernest Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "CEO & Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "This is a super app!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Really fun and interactive. Easy-to-use app worked instantly for me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "CEO & Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Works like magic!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Really fun and interactive. Easy-to-use app worked instantly for me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "img", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Jackson Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "CEO & Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Jackson Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Really fun and interactive. Easy-to-use app worked instantly for me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "The simple work management platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "Your projects gets completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, " faster and easier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "span", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " To get started,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "span", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, " download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, " & install now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "Prelude helps teams manage tasks and communication ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, " so projects gets completed faster and easier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "img", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "img", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " PRELUDE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "p", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Learn and improve your knowledge with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, " our industry experts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "i", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "i", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "i", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "div", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, " Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, " Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Marketplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Experts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Guides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, " Offices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "div", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "New York. 112 W 34th,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "Manhattan. USA. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "span", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "8922-473-73-19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "\u00A92019 Prelude by Viworx-Co. All Rights Reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Terms of use |Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n}\r\n\r\nbody[_ngcontent-%COMP%]   html[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  background-color: #f9f9fa;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  display: flex;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n\r\n\r\n  margin: 20px auto;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  width: 1170px;\r\n  max-width: 100%;\r\n}\r\n\r\n.caret[_ngcontent-%COMP%]{\r\n  width: 8px;\r\n  height: 6px;\r\n  margin-top: 17px;\r\n  margin-left: -20px;\r\n}\r\n\r\n.home[_ngcontent-%COMP%] {\r\n  margin-left:199px;\r\n}\r\n\r\n.get__about[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\n#checkbox-menu[_ngcontent-%COMP%], .toggle[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  list-style-type: none;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color:#39374d;\r\n  text-decoration: none;\r\n  align-self: center;\r\n  padding: 10px 25px;\r\n  font-size: 13px;\r\n  transition: background .2s linear;\r\n\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n}\r\n\r\n.header_prelude111[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-left: -5px;\r\n}\r\n\r\n.contacts[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.search[_ngcontent-%COMP%] {\r\n  height: 18px;\r\n  width:18px;\r\n  margin-top: 12px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.cart[_ngcontent-%COMP%] {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n.prelude[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 25px;\r\n  display: flex;\r\n}\r\n\r\n.get_prelude[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.cartSearch[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 50px;\r\n}\r\n\r\n.btn1[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 150px;\r\n  background-color:#00d662 ;\r\n  border-radius: 4px;\r\n  margin-left: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n.btn2[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  font-size:16px;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  width: 1170px;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  max-width: 100%;\r\n}\r\n\r\n.Purchase[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-top: 15px;\r\n}\r\n\r\n\r\n\r\n.main_fon[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/6rTY0HF/getBg.png\");\r\n  width: 100%;\r\n  background-size: cover;\r\n  height: 750px;\r\n  overflow: hidden;\r\n  max-width: 100%;\r\n}\r\n\r\n.zag_fon[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n\r\n}\r\n\r\n.zag_fon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .woman__zag[_ngcontent-%COMP%] {\r\n  margin-top: 200px;\r\n  color: #39374d;\r\n  font-size: 48px;\r\n  width: 710px;\r\n  max-width: 100%;\r\n\r\n}\r\n\r\n.zag_fon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color:#373737;\r\n  margin-top: 50px;\r\n  font-size: 19px;\r\n}\r\n\r\n.app_store11[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 175px;\r\n  margin-left: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.safari[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-top: 52px;\r\n}\r\n\r\n.strela[_ngcontent-%COMP%] {\r\n  margin-top: 58px;\r\n  color: #39374c;\r\n  font-size: 18px;\r\n}\r\n\r\n.strela[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  color: #39374c;\r\n  margin-top: -30px;\r\n}\r\n\r\n.lydi[_ngcontent-%COMP%] {\r\n  margin-top: 35px;\r\n  position: absolute;\r\n  left:-100px;\r\n  width: 730px;\r\n\r\n}\r\n\r\n.object[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.wrapper_section[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.sponsorIkona[_ngcontent-%COMP%] {\r\n  height: 87px;\r\n  width: 87px;\r\n}\r\n\r\n.textIkona[_ngcontent-%COMP%] {\r\n  width: 176px;\r\n  height: 20px;\r\n}\r\n\r\n.sposorObj[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 95px;\r\n}\r\n\r\n.textIkona3[_ngcontent-%COMP%] {\r\n  height: 78px;\r\n  width: 110px;\r\n}\r\n\r\n.wrapper_get[_ngcontent-%COMP%] {\r\n  width: 1100px;\r\n  margin: 0 auto;\r\n  max-width: 100%;\r\n}\r\n\r\n.main_selection[_ngcontent-%COMP%] {\r\n  margin-top: 95px;\r\n}\r\n\r\n.selector__text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.selector__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  color: #00d662;\r\n}\r\n\r\n.selector__text22[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n  font-size: 52px;\r\n  color: #39374d;\r\n}\r\n\r\n.text__selector[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  font-size: 18px;\r\n  color: #39374d;\r\n}\r\n\r\n.work[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n\r\n.message[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  text-align: center;\r\n  margin-top: 90px;\r\n}\r\n\r\n.obkect__playbook[_ngcontent-%COMP%] {\r\n  margin-left: 80px;\r\n}\r\n\r\n.zagPlaybook[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  color:#39374d ;\r\n  font-weight: 600;\r\n  margin-top: 27px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.zagText[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #748494;\r\n}\r\n\r\n.bord[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 5px;\r\n  margin-left: 41% ;\r\n  margin-top:27px;\r\n  background-color: #e7e7e7;\r\n  border-radius: 3px;\r\n}\r\n\r\n.obkect__playbook[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n.wrapper__gray[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/SdQYpW3/BG1.png\");\r\n  width: 100%;\r\n  height: 750px;\r\n  background-size: cover;\r\n  margin-top: -300px;\r\n}\r\n\r\n.sberbank[_ngcontent-%COMP%] {\r\n  width:970px;\r\n  height: 600px;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n  top: 50px;\r\n  display: flex;\r\n  z-index: 100;\r\n  left: 40px;\r\n}\r\n\r\n.lini1[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/1bP8rRY/Lines1.png\");\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background-size: cover;\r\n}\r\n\r\n.start_manage[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  margin: auto;\r\n  margin-left: 50px;\r\n}\r\n\r\n.start_color[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  width: 50px;\r\n  background-color:#ffa4c7;\r\n  color: white;\r\n  margin: auto;\r\n  border-radius: 25px;\r\n  align-items: center;\r\n  display: flex;\r\n  text-align: center;\r\n}\r\n\r\n.edinica[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  display: block;\r\n  font-size: 22px;\r\n  color: white;\r\n}\r\n\r\n.SC2[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n\r\n.edinica2[_ngcontent-%COMP%] {\r\n  color: #79d1f7;\r\n  margin-left: 20px;\r\n  display: block;\r\n  font-size: 22px;\r\n}\r\n\r\n.wrapper_get[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.start__obj[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  text-align: center;\r\n  margin-top: 350px;\r\n}\r\n\r\n.tochki[_ngcontent-%COMP%] {\r\n  margin-left: 65px;\r\n  width: 230px;\r\n}\r\n\r\n.start_zag[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  margin-bottom: 25px;\r\n  font-size: 22px;\r\n  color: #39374d;\r\n  font-weight: 600;\r\n  font-family: futuraPT;\r\n}\r\n\r\n.start_text[_ngcontent-%COMP%] {\r\n  color:#b4bbc2;\r\n  font-size: 15px;\r\n}\r\n\r\n\r\n\r\n.content__main[_ngcontent-%COMP%] {\r\n  margin-top: 70px;\r\n}\r\n\r\n.content__object[_ngcontent-%COMP%] {\r\n  display: flex;\r\n\r\n}\r\n\r\n.content_zag[_ngcontent-%COMP%] {\r\n  color:#00d664;\r\n  font-size: 14px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.content_Zagolovk[_ngcontent-%COMP%] {\r\n  font-size: 46px;\r\n  margin-bottom:30px;\r\n  color: #39374d;\r\n}\r\n\r\n.content_Zagolovk[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #39374d;\r\n  font-weight: 600;\r\n}\r\n\r\n.content_text[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n\r\n}\r\n\r\n.cifra[_ngcontent-%COMP%] {\r\n  color:#39374d;\r\n  font-size:52px;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.m[_ngcontent-%COMP%] {\r\n  color:#7540ee;\r\n  margin-left: 2px;\r\n}\r\n\r\n.content__project_zag[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  color: #39374d;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.content__project__text[_ngcontent-%COMP%] {\r\n  color: #5e5d6c;\r\n  font-size: 14px;\r\n}\r\n\r\n.ProhectsTeamsTasks[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-top: 55px;\r\n}\r\n\r\n.content__project[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n.get__devuchka[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/kGRd4R4/devushka1-jpg.png\");\r\n  width:800px;\r\n  height: 600px;\r\n  background-size: cover;\r\n}\r\n\r\n.content__object__foto[_ngcontent-%COMP%] {\r\n  margin-left: -160px;\r\n  margin-top: -100px;\r\n}\r\n\r\n.content__select22[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n.glava__obj__center[_ngcontent-%COMP%], .glava__obj__center2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.glava__obj__center2[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n\r\n}\r\n\r\n.get__center__block1[_ngcontent-%COMP%], .get__center__block3[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 15px;\r\n}\r\n\r\n.get__center__block3[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  padding: 16px;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n}\r\n\r\n.center_zag[_ngcontent-%COMP%] {\r\n  color: #39374d;\r\n  font-size: 20px;\r\n}\r\n\r\n.center__text_zag[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n}\r\n\r\n.centet_text[_ngcontent-%COMP%] {\r\n  color: #748494;\r\n  font-size: 15px;\r\n  margin-top: 20px;\r\n  line-height: 24px;\r\n}\r\n\r\n.selector__img_video_calendar[_ngcontent-%COMP%] {\r\n  background-color: #f9f9fa;\r\n}\r\n\r\n.obj_block3[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border-radius: 4px;\r\n}\r\n\r\n.portfolio__rabotniki[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 200px;\r\n  display: flex;\r\n}\r\n\r\n.get__portfolio__block1[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n.glavaPortfolio[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/fFhzvPf/BG5.png\");\r\n  width: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n.portfolio[_ngcontent-%COMP%] {\r\n  width: 270px;\r\n  height: 340px;\r\n  margin-top: 50px;\r\n  margin-left: 45px;\r\n  font-family: \"Open Sans\";\r\n}\r\n\r\n.getPortfolio[_ngcontent-%COMP%] {\r\n  padding: 40px 35px 45px 45px;\r\n  font-size: 16px;\r\n  background-color: white;\r\n  width: 170px;\r\n  height: 240px;\r\n  border-radius: 7px;\r\n  position: relative;\r\n}\r\n\r\n.getport[_ngcontent-%COMP%] {\r\n  opacity: 0.7;\r\n}\r\n\r\n.personaj[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n.portfolio__get__text[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color:#748494;\r\n}\r\n\r\n.portfolio__text_zag[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  margin-left: 10px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.portfolio_name[_ngcontent-%COMP%] {\r\n  color: #39374d;\r\n  font-size: 14px;\r\n}\r\n\r\n.portfolio_rabota[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color:#b1b1b1;\r\n}\r\n\r\n.portfolio__get__zag[_ngcontent-%COMP%] {\r\n  color: #39374d;\r\n  font-size: 22px;\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.port2[_ngcontent-%COMP%] {\r\n  margin-top: 150px;\r\n}\r\n\r\n.port__text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  position:relative;\r\n  top: 180px;\r\n}\r\n\r\n.port__get__zag[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  color: #39374d;\r\n}\r\n\r\n.port__get__text[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #5e5d6c;\r\n}\r\n\r\n.dost__get[_ngcontent-%COMP%] {\r\n  position:absolute;\r\n  top: 42px;\r\n  margin-left: 67px;\r\n}\r\n\r\n.zvezdochki[_ngcontent-%COMP%] {\r\n  margin-top: 35px;\r\n}\r\n\r\n.phone[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  text-align: center;\r\n  margin-top: 100px;\r\n  margin-left: -100px;\r\n}\r\n\r\n.phone__text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  position: relative;\r\n  top: 180px;\r\n}\r\n\r\n.get__woman[_ngcontent-%COMP%] {\r\n  background-image: url(\"https://i.ibb.co/SDTdVHd/devuchka.png\");\r\n  width: 100%;\r\n  height: 650px;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.woman_text[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #373737;\r\n}\r\n\r\n.started[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n.install[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n}\r\n\r\n.safari[_ngcontent-%COMP%] {\r\n  margin-left: -15px;\r\n}\r\n\r\n.woman__zag[_ngcontent-%COMP%] {\r\n  font-size: 52px;\r\n}\r\n\r\n.woman_get_zag[_ngcontent-%COMP%]{\r\n position: absolute;\r\n  top:50px;\r\n  max-width: 100%;\r\n}\r\n\r\n.get__footer[_ngcontent-%COMP%] {\r\n  width: 1170px;\r\n  margin: auto;\r\n  max-width: 100%;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  background-color: #f5f2f0;\r\n  margin-top: 250px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.footer__text[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #5e5d6c;\r\n  line-height: 23px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.footer__ikona[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-top: 30px;\r\n}\r\n\r\n.foot_ik22[_ngcontent-%COMP%] {\r\n  margin-left: 15px;\r\n}\r\n\r\n.foot_ik[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 2px solid #b4bbc2;\r\n  text-align: center;\r\n  border-radius: 100px;\r\n}\r\n\r\n.fa-facebook[_ngcontent-%COMP%], .fa-twitter[_ngcontent-%COMP%], .fa-instagram[_ngcontent-%COMP%] {\r\n  margin-left: -1px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.foot_ik[_ngcontent-%COMP%]:hover {\r\n  background-color: #00d664;\r\n  color: white;\r\n  border-width: 0;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\n.footer__slova[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 130px;\r\n}\r\n\r\n.slova__zag[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  color: #39374d;\r\n  margin-bottom: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.slova__content[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #373737;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.number[_ngcontent-%COMP%] {\r\n  color: #00d664;\r\n  margin-top: 6px;\r\n  font-weight: 600;\r\n  display: block;\r\n}\r\n\r\n.slova__content[_ngcontent-%COMP%]:hover {\r\n  color: #00d664;\r\n  border-bottom: 2px solid #00d664;\r\n  transition: 0.3s;\r\n}\r\n\r\n.bord_bott[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n  border-bottom: 1px solid #b4bbc2;\r\n}\r\n\r\n.conec[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 25px;\r\n}\r\n\r\n.prelude__2019[_ngcontent-%COMP%]{\r\n  font-size:16px;\r\n  color: #5e5d6c;\r\n}\r\n\r\n.privacy__policy[_ngcontent-%COMP%] {\r\n  color:#748494 ;\r\n  font-size: 14px;\r\n}\r\n\r\n.subsride[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  position: absolute;\r\n  top:-80px;\r\n  left: 70px;\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n\r\n  .main_fon[_ngcontent-%COMP%]{\r\n    width: 1000px;\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    margin-left: 0;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    margin-right: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\r\n  .safari[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%], .strela[_ngcontent-%COMP%] {\r\n    margin-left: 6%;\r\n    width: 500px;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .toggle[_ngcontent-%COMP%] {\r\n    clear: both;\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    color: black;\r\n    background-color:#00d664;\r\n    transition: all .1s linear;\r\n  }\r\n\r\n  .toggle[_ngcontent-%COMP%]:hover {\r\n    background-color:#00d662;\r\n  }\r\n\r\n  #checkbox-menu[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .toch[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: all .7s linear;\r\n    padding-left: 14px;\r\n  }\r\n\r\n  #checkbox-menu[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .toch[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 0;\r\n    transition: height .3s linear;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-self: center;\r\n    width: 100%;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n\r\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-left: -15px;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    text-align: center;\r\n    align-self: center;\r\n    align-content: center;\r\n    font-size: 20px;\r\n    color: #39374d;\r\n    margin-top: -5px;\r\n  }\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.contacts[_ngcontent-%COMP%] {\r\n    margin-right: 0;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color:#00d664;\r\n    border-radius: 3px;\r\n  }\r\n\r\n  .contacts[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n  }\r\n\r\n  header[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .Home[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .search[_ngcontent-%COMP%], .cart[_ngcontent-%COMP%], .btn1[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .safari[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    left: -10px;\r\n  }\r\n\r\n  \r\n\r\n  .object[_ngcontent-%COMP%], .object22[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .fon_text[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n\r\n    margin: auto;\r\n  }\r\n  .zag_fon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n  }\r\n\r\n  .sposorObj[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  \r\n  .message[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .obkect__playbook[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\n  .wrapper_get[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .bord[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    margin-top: 28px;\r\n  }\r\n\r\n  .sberbank[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .start__obj[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-top: 130px;\r\n    display: block;\r\n  }\r\n\r\n  .tochki[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .start_manage[_ngcontent-%COMP%] {\r\n    margin: 15px auto;\r\n  }\r\n\r\n  .sberbank[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .wrapper__gray[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .start_zag[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    margin-bottom: 9px;\r\n    font-size: 22px;\r\n    color: #39374d;\r\n    font-weight: 600;\r\n    font-family: futuraPT;\r\n  }\r\n\r\n\r\n  .ProhectsTeamsTasks[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    margin: auto;\r\n  }\r\n\r\n  .content__object[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    margin: auto;\r\n  }\r\n\r\n  .get__devuchka[_ngcontent-%COMP%]{\r\n    background-image: url(\"https://i.ibb.co/kGRd4R4/devushka1-jpg.png\");\r\n    width:350px;\r\n    height: 300px;\r\n    background-size: cover;\r\n    margin-left:-50px;\r\n  }\r\n\r\n  .content__object__foto[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-left: -30px;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: -30px;\r\n\r\n  }\r\n  .content__select[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n    margin: 0 auto;\r\n\r\n  }\r\n  .ProhectsTeamsTasks[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    text-align: center;\r\n  }\r\n  .content_Zagolovk[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    width: 500px;\r\n  }\r\n\r\n  .portfolio__rabotniki[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: auto    ;\r\n    grid-column-gap: 20px;\r\n    margin-left: -20px;\r\n  }\r\n\r\n  .portfolio[_ngcontent-%COMP%] {\r\n    margin-left: 33%;\r\n  }\r\n\r\n  .port__get__zag[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .dost__get[_ngcontent-%COMP%] {\r\n    margin-left: 59px;\r\n  }\r\n\r\n  .port2[_ngcontent-%COMP%] {\r\n    margin-top: 35px;\r\n  }\r\n\r\n  .dost__get[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .phone[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    text-align: center;\r\n    margin: 70px auto;\r\n  }\r\n\r\n  .phone__text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: relative;\r\n    top: 150px;\r\n  }\r\n\r\n  .iphone[_ngcontent-%COMP%] {\r\n    width: 750px;\r\n    margin-top: 80px;\r\n    margin-left: -50px;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .footer__slova[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 200px 100px 100px;\r\n    grid-row-gap: 20px;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n  }\r\n\r\n  .numbers[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n    height: 25px;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .header_prelude111[_ngcontent-%COMP%]{\r\n    margin-top: -12px;\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin-top: 120px;\r\n    color: #39374d;\r\n    font-size: 42px;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .content__project[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-left: 20%;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%] {\r\n    margin-left:-25px;\r\n  }\r\n\r\n  .get__about[_ngcontent-%COMP%] {\r\n    margin-left:-22px;\r\n  }\r\n\r\n  .get__fon__Text[_ngcontent-%COMP%]{\r\n    margin-left: 20%;\r\n    margin-top: 40px;\r\n  }\r\n\r\n  .footer__slova[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .get__footer[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .footer__get__slova22[_ngcontent-%COMP%] {\r\n    margin-left: -30px;\r\n  }\r\n\r\n  .foot__get__slov[_ngcontent-%COMP%]{\r\n    margin-left: 0;\r\n  }\r\n\r\n  .caret[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .subsride[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    position: absolute;\r\n    top:-60px;\r\n    left: 0px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 420px) {\r\n\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .fon_text[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n    margin-top: 10%;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .home[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .app_store11[_ngcontent-%COMP%] {\r\n    width: 150px;\r\n  }\r\n\r\n  .selector__text22[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .sberbank[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    margin: auto;\r\n    margin-left: 15px;\r\n  }\r\n  .start_manage[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n  }\r\n\r\n  .start_zag[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n    margin-bottom: 10px;\r\n    font-size: 22px;\r\n    color: #39374d;\r\n    font-weight: 600;\r\n\r\n  }\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 10px;\r\n  }\r\n\r\n  .content__object__foto[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left:-20px;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .content_text__zagolovok[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .content__project[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    margin-left: 20%;\r\n  }\r\n\r\n  .glava__obj__center[_ngcontent-%COMP%], .glava__obj__center2[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n  }\r\n\r\n  .block2[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .phone[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    text-align: center;\r\n    margin: 70px auto;\r\n  }\r\n\r\n  .phone__text[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    position: relative;\r\n    top: 150px;\r\n  }\r\n\r\n  .iphone[_ngcontent-%COMP%] {\r\n    width: 450px;\r\n    margin-top: 80px;\r\n    margin-left: -50px;\r\n  }\r\n\r\n  .safari[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .portfolio__rabotniki[_ngcontent-%COMP%] {\r\n    margin-left: -18%;\r\n\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%] {\r\n    margin-left: -2%;\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\n  .woman__zag[_ngcontent-%COMP%] {\r\n    font-size: 35px;\r\n  }\r\n\r\n  .get_input[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n\r\n  }\r\n\r\n  .footer__slova[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 200px 100px;\r\n    padding: 15px ;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .offices[_ngcontent-%COMP%] {\r\n    margin-top:-45px;\r\n    margin-left: 45%;\r\n    width: 100%;\r\n  }\r\n\r\n  footer[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    padding-bottom: 30px;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .numbers[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .content22[_ngcontent-%COMP%] {\r\n    margin-top: -18px;\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n\r\n  }\r\n\r\n  .zag_fon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color:#373737;\r\n    margin-top: 50px;\r\n    font-size: 16px;\r\n    width: 320px;\r\n  }\r\n\r\n  .content_Zagolovk[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .glavaPortfolio[_ngcontent-%COMP%] {\r\n    margin-top: -80px;\r\n  }\r\n\r\n  .content_text[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #5e5d6c;\r\n    width: 350px;\r\n  }\r\n\r\n  .slova__zag[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #39374d;\r\n    margin-bottom: 14px;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .footer__get__slova22[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .strela[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    margin-left: -14px;\r\n  }\r\n\r\n  .content__select[_ngcontent-%COMP%] {\r\n    width: 375px;\r\n    margin-left: -17px;\r\n    padding-left: 40px;\r\n    box-sizing: border-box;\r\n\r\n  }\r\n\r\n  .content_Zagolovk[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: #39374d;\r\n    font-weight: 600;\r\n    font-size: 28px;\r\n  }\r\n\r\n  .offices[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n\r\n  .get__fon__Text[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n\r\n  }\r\n\r\n  .header_prelude111[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-left: -15px;\r\n  }\r\n  .fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n    font-weight: 900;\r\n    display: none;\r\n  }\r\n\r\n  .subsride[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    position: absolute;\r\n    top:60px;\r\n    left: 0px;\r\n  }\r\n\r\n  .woman_get_zag[_ngcontent-%COMP%] {\r\n    margin-left: -50px;\r\n    width: 360px;\r\n\r\n  }\r\n\r\n  .port__text[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .sberbank[_ngcontent-%COMP%]{\r\n    width: 520px;\r\n    height: 400px;\r\n    margin: auto;\r\n    margin-left: 0px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUlBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUNBQWlDOztBQUVuQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Us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O0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCOztFQUVsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTs7RUFFZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBRUY7O0FBR0E7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuXHJcbmJvZHkgaHRtbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7O1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmkge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG5cclxuXHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcblxyXG5uYXYge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMTcwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZXR7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxufVxyXG5cclxuLmhvbWUge1xyXG4gIG1hcmdpbi1sZWZ0OjE5OXB4O1xyXG59XHJcblxyXG4uZ2V0X19hYm91dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuI2NoZWNrYm94LW1lbnUsLnRvZ2dsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4ubWVudSBsaSBhIHtcclxuICBjb2xvcjojMzkzNzRkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBsaW5lYXI7XHJcblxyXG59XHJcblxyXG4ubWVudSBsaSBhLmxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuXHJcbi5oZWFkZXJfcHJlbHVkZTExMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxufVxyXG5cclxuLmNvbnRhY3RzIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDoxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJ0IHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5wcmVsdWRlIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmdldF9wcmVsdWRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FydFNlYXJjaCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uYnRuMSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGQ2NjIgO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYnRuMiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDExNzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uUHVyY2hhc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5cclxuLyrQodCi0JjQm9CYINCU0JvQryBtYWluX2ZvbiovXHJcblxyXG5cclxuLm1haW5fZm9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kuaWJiLmNvLzZyVFkwSEYvZ2V0QmcucG5nXCIpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgaGVpZ2h0OiA3NTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnphZ19mb24ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG59XHJcblxyXG4uemFnX2ZvbiBoMSwud29tYW5fX3phZyB7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIHdpZHRoOiA3MTBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uemFnX2ZvbiBwIHtcclxuICBjb2xvcjojMzczNzM3O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG59XHJcblxyXG4uYXBwX3N0b3JlMTEge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2FmYXJpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDUycHg7XHJcbn1cclxuXHJcbi5zdHJlbGEge1xyXG4gIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgY29sb3I6ICMzOTM3NGM7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc3RyZWxhICBpe1xyXG4gIGNvbG9yOiAjMzkzNzRjO1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4ubHlkaSB7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDotMTAwcHg7XHJcbiAgd2lkdGg6IDczMHB4O1xyXG5cclxufVxyXG5cclxuLm9iamVjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ud3JhcHBlcl9zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3BvbnNvcklrb25hIHtcclxuICBoZWlnaHQ6IDg3cHg7XHJcbiAgd2lkdGg6IDg3cHg7XHJcbn1cclxuXHJcbi50ZXh0SWtvbmEge1xyXG4gIHdpZHRoOiAxNzZweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5zcG9zb3JPYmoge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogOTVweDtcclxufVxyXG5cclxuLnRleHRJa29uYTMge1xyXG4gIGhlaWdodDogNzhweDtcclxuICB3aWR0aDogMTEwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyX2dldCB7XHJcbiAgd2lkdGg6IDExMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluX3NlbGVjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogOTVweDtcclxufVxyXG5cclxuLnNlbGVjdG9yX190ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3Rvcl9fdGV4dCBoMSB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGNvbG9yOiAjMDBkNjYyO1xyXG59XHJcblxyXG4uc2VsZWN0b3JfX3RleHQyMiB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBmb250LXNpemU6IDUycHg7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbn1cclxuXHJcbi50ZXh0X19zZWxlY3RvciB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbn1cclxuXHJcbi53b3JrIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiA0NDQ0NDQ0NDQ0NDQqL1xyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuXHJcbi5vYmtlY3RfX3BsYXlib29rIHtcclxuICBtYXJnaW4tbGVmdDogODBweDtcclxufVxyXG5cclxuLnphZ1BsYXlib29rIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IzM5Mzc0ZCA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi56YWdUZXh0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM3NDg0OTQ7XHJcbn1cclxuXHJcbi5ib3JkIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNDElIDtcclxuICBtYXJnaW4tdG9wOjI3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5vYmtlY3RfX3BsYXlib29rIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVyX19ncmF5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kuaWJiLmNvL1NkUVlwVzMvQkcxLnBuZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc1MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTMwMHB4O1xyXG59XHJcblxyXG4uc2JlcmJhbmsge1xyXG4gIHdpZHRoOjk3MHB4O1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5saW5pMSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby8xYlA4clJZL0xpbmVzMS5wbmdcIik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc3RhcnRfbWFuYWdlIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uc3RhcnRfY29sb3Ige1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmE0Yzc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmVkaW5pY2Ege1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5TQzIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZWRpbmljYTIge1xyXG4gIGNvbG9yOiAjNzlkMWY3O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLndyYXBwZXJfZ2V0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdGFydF9fb2JqIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzNTBweDtcclxufVxyXG5cclxuLnRvY2hraSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG59XHJcblxyXG4uc3RhcnRfemFnIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IGZ1dHVyYVBUO1xyXG59XHJcblxyXG4uc3RhcnRfdGV4dCB7XHJcbiAgY29sb3I6I2I0YmJjMjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4vKiA2NjY2NjY2NjY2NjY2NjY2NjY2NjYqL1xyXG5cclxuXHJcblxyXG5cclxuLmNvbnRlbnRfX21haW4ge1xyXG4gIG1hcmdpbi10b3A6IDcwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50X19vYmplY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4uY29udGVudF96YWcge1xyXG4gIGNvbG9yOiMwMGQ2NjQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50X1phZ29sb3ZrIHtcclxuICBmb250LXNpemU6IDQ2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG59XHJcblxyXG4uY29udGVudF9aYWdvbG92ayBzcGFuIHtcclxuICBjb2xvcjogIzM5Mzc0ZDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY29udGVudF90ZXh0IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcblxyXG59XHJcblxyXG4uY2lmcmEge1xyXG4gIGNvbG9yOiMzOTM3NGQ7XHJcbiAgZm9udC1zaXplOjUycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG4ubSB7XHJcbiAgY29sb3I6Izc1NDBlZTtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnRfX3Byb2plY3RfemFnIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmNvbnRlbnRfX3Byb2plY3RfX3RleHQge1xyXG4gIGNvbG9yOiAjNWU1ZDZjO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLlByb2hlY3RzVGVhbXNUYXNrcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1NXB4O1xyXG59XHJcblxyXG4uY29udGVudF9fcHJvamVjdCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5cclxuLmdldF9fZGV2dWNoa2Ege1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5pYmIuY28va0dSZDRSNC9kZXZ1c2hrYTEtanBnLnBuZ1wiKTtcclxuICB3aWR0aDo4MDBweDtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50X19vYmplY3RfX2ZvdG8ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTYwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG59XHJcblxyXG4uY29udGVudF9fc2VsZWN0MjIge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5nbGF2YV9fb2JqX19jZW50ZXIsLmdsYXZhX19vYmpfX2NlbnRlcjIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5nbGF2YV9fb2JqX19jZW50ZXIyIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuXHJcbn1cclxuXHJcbi5nZXRfX2NlbnRlcl9fYmxvY2sxLC5nZXRfX2NlbnRlcl9fYmxvY2szIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmdldF9fY2VudGVyX19ibG9jazMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2VudGVyX3phZyB7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uY2VudGVyX190ZXh0X3phZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXRfdGV4dCB7XHJcbiAgY29sb3I6ICM3NDg0OTQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcblxyXG4uc2VsZWN0b3JfX2ltZ192aWRlb19jYWxlbmRhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmYTtcclxufVxyXG5cclxuLm9ial9ibG9jazMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuXHJcbi5wb3J0Zm9saW9fX3JhYm90bmlraSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmdldF9fcG9ydGZvbGlvX19ibG9jazF7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmdsYXZhUG9ydGZvbGlvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kuaWJiLmNvL2ZGaHp2UGYvQkc1LnBuZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvIHtcclxuICB3aWR0aDogMjcwcHg7XHJcbiAgaGVpZ2h0OiAzNDBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG59XHJcblxyXG4uZ2V0UG9ydGZvbGlvIHtcclxuICBwYWRkaW5nOiA0MHB4IDM1cHggNDVweCA0NXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgaGVpZ2h0OiAyNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZ2V0cG9ydCB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4ucGVyc29uYWoge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLnBvcnRmb2xpb19fZ2V0X190ZXh0IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6Izc0ODQ5NDtcclxufVxyXG5cclxuLnBvcnRmb2xpb19fdGV4dF96YWcge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucG9ydGZvbGlvX25hbWUge1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnBvcnRmb2xpb19yYWJvdGEge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjojYjFiMWIxO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvX19nZXRfX3phZyB7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnBvcnQyIHtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG5cclxuLnBvcnRfX3RleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB0b3A6IDE4MHB4O1xyXG59XHJcblxyXG4ucG9ydF9fZ2V0X196YWcge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogIzM5Mzc0ZDtcclxufVxyXG5cclxuLnBvcnRfX2dldF9fdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNWU1ZDZjO1xyXG59XHJcblxyXG4uZG9zdF9fZ2V0IHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6IDQycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDY3cHg7XHJcbn1cclxuXHJcbi56dmV6ZG9jaGtpIHtcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG59XHJcblxyXG4ucGhvbmUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbn1cclxuXHJcbi5waG9uZV9fdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE4MHB4O1xyXG59XHJcblxyXG4uZ2V0X193b21hbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pLmliYi5jby9TRFRkVkhkL2RldnVjaGthLnBuZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY1MHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ud29tYW5fdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzczNzM3O1xyXG59XHJcblxyXG4uc3RhcnRlZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmluc3RhbGwge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5zYWZhcmkge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG5cclxuLndvbWFuX196YWcge1xyXG4gIGZvbnQtc2l6ZTogNTJweDtcclxufVxyXG5cclxuLndvbWFuX2dldF96YWd7XHJcbiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ2V0X19mb290ZXIge1xyXG4gIHdpZHRoOiAxMTcwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmMmYwO1xyXG4gIG1hcmdpbi10b3A6IDI1MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mb290ZXJfX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzVlNWQ2YztcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyX19pa29uYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZm9vdF9pazIyIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmZvb3RfaWsge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYjRiYmMyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG5cclxuLmZhLWZhY2Vib29rLC5mYS10d2l0dGVyLC5mYS1pbnN0YWdyYW0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5mb290X2lrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkNjY0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbn1cclxuXHJcbi5mb290ZXJfX3Nsb3ZhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxMzBweDtcclxufVxyXG5cclxuXHJcbi5zbG92YV9femFnIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNsb3ZhX19jb250ZW50IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMzNzM3Mzc7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm51bWJlciB7XHJcbiAgY29sb3I6ICMwMGQ2NjQ7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zbG92YV9fY29udGVudDpob3ZlciB7XHJcbiAgY29sb3I6ICMwMGQ2NjQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMGQ2NjQ7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuXHJcbi5ib3JkX2JvdHQge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiNGJiYzI7XHJcbn1cclxuXHJcbi5jb25lYyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuXHJcbi5wcmVsdWRlX18yMDE5e1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGNvbG9yOiAjNWU1ZDZjO1xyXG59XHJcblxyXG4ucHJpdmFjeV9fcG9saWN5IHtcclxuICBjb2xvcjojNzQ4NDk0IDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zdWJzcmlkZXtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDotODBweDtcclxuICBsZWZ0OiA3MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG5cclxuICAubWFpbl9mb257XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnphZ19mb24ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgbGkgYS5sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgLnNhZmFyaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC56YWdfZm9uLC5zdHJlbGEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnRvZ2dsZSB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwZDY2NDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xyXG4gIH1cclxuXHJcbiAgLnRvZ2dsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGQ2NjI7XHJcbiAgfVxyXG5cclxuICAjY2hlY2tib3gtbWVudTpjaGVja2VkICsgbGFiZWwgLnRvY2ggbGkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjdzIGxpbmVhcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICB9XHJcblxyXG4gICNjaGVja2JveC1tZW51OmNoZWNrZWQgKyBsYWJlbCAudG9jaCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzIGxpbmVhcjtcclxuICB9XHJcblxyXG4gIC5tZW51IGxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICB1bCBsaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgfVxyXG5cclxuICAubWVudSBsaSBhIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzM5Mzc0ZDtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgfVxyXG4gIC5tZW51IGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgbGkgYS5sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5tZW51IGxpIGEuY29udGFjdHMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgbGkgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGQ2NjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdHM6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuSG9tZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaCwuY2FydCwuYnRuMXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuemFnX2ZvbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuc2FmYXJpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgfVxyXG5cclxuICAvKiDQvNC+0LHQuNC70YzQvdCw0Y8g0LLQtdGA0YHRgtC60LAg0LTQu9GPIDIg0LHQu9C+0LrQsCAqL1xyXG5cclxuICAub2JqZWN0LC5vYmplY3QyMntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb25fdGV4dHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC56YWdfZm9uIGgxe1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNwb3Nvck9iantcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiDQvNC+0LHQuNC70YzQvdCw0Y8g0LLQtdGA0YHRgtC60LAg0LTQu9GPIDQ0NCDQsdC70L7QutCwICovXHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5vYmtlY3RfX3BsYXlib29rIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLndyYXBwZXJfZ2V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmJvcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICB9XHJcblxyXG4gIC5zYmVyYmFuayB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5zdGFydF9fb2JqIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAudG9jaGtpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc3RhcnRfbWFuYWdlIHtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNiZXJiYW5rIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlcl9fZ3JheSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnN0YXJ0X3phZ3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzM5Mzc0ZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogZnV0dXJhUFQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLlByb2hlY3RzVGVhbXNUYXNrcyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRfX29iamVjdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmdldF9fZGV2dWNoa2F7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kuaWJiLmNvL2tHUmQ0UjQvZGV2dXNoa2ExLWpwZy5wbmdcIik7XHJcbiAgICB3aWR0aDozNTBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6LTUwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudF9fb2JqZWN0X19mb3Rve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuXHJcbiAgfVxyXG4gIC5jb250ZW50X19zZWxlY3R7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgfVxyXG4gIC5Qcm9oZWN0c1RlYW1zVGFza3Mge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY29udGVudF9aYWdvbG92ayB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAucG9ydGZvbGlvX19yYWJvdG5pa2l7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gICAgO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzMlO1xyXG4gIH1cclxuXHJcbiAgLnBvcnRfX2dldF9femFnIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5kb3N0X19nZXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU5cHg7XHJcbiAgfVxyXG5cclxuICAucG9ydDIge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICB9XHJcblxyXG4gIC5kb3N0X19nZXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5waG9uZSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAucGhvbmVfX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNTBweDtcclxuICB9XHJcblxyXG4gIC5pcGhvbmUge1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX3Nsb3ZhIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5udW1iZXJzIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAubWVudSBsaSBhLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX3ByZWx1ZGUxMTF7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICB9XHJcblxyXG4gIC56YWdfZm9uIGgxe1xyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgICBjb2xvcjogIzM5Mzc0ZDtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50X19wcm9qZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6LTI1cHg7XHJcbiAgfVxyXG5cclxuICAuZ2V0X19hYm91dCB7XHJcbiAgICBtYXJnaW4tbGVmdDotMjJweDtcclxuICB9XHJcblxyXG4gIC5nZXRfX2Zvbl9fVGV4dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fc2xvdmEge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5nZXRfX2Zvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2dldF9fc2xvdmEyMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdF9fZ2V0X19zbG92e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnN1YnNyaWRle1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOi02MHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyog0LzQvtCx0LjQu9GM0L3QsNGPINCy0LXRgNGB0YLQutCwINC00LvRjyA1NTUg0LHQu9C+0LrQsCAqL1xyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5mb25fdGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLmhvbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAuYXBwX3N0b3JlMTEge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdG9yX190ZXh0MjIge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNiZXJiYW5rIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgLnN0YXJ0X21hbmFnZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5zdGFydF96YWcge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzM5Mzc0ZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50X19vYmplY3RfX2ZvdG8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDotMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuY29udGVudF90ZXh0X196YWdvbG92b2sge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50X19wcm9qZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLmdsYXZhX19vYmpfX2NlbnRlciwuZ2xhdmFfX29ial9fY2VudGVyMntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuYmxvY2syIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLnBob25le1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNzBweCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnBob25lX190ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAuaXBob25lIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgfVxyXG5cclxuICAuc2FmYXJpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLnBvcnRmb2xpb19fcmFib3RuaWtpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTglO1xyXG5cclxuICB9XHJcblxyXG4gIC56YWdfZm9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMiU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC53b21hbl9femFnIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICB9XHJcblxyXG4gIC5nZXRfaW5wdXQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5mb290ZXJfX3Nsb3ZhIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLm9mZmljZXMge1xyXG4gICAgbWFyZ2luLXRvcDotNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAubnVtYmVycyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQyMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMThweDtcclxuICB9XHJcblxyXG4gIC56YWdfZm9uIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuemFnX2ZvbiBwIHtcclxuICAgIGNvbG9yOiMzNzM3Mzc7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRfWmFnb2xvdmsge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmdsYXZhUG9ydGZvbGlvIHtcclxuICAgIG1hcmdpbi10b3A6IC04MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRfdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzVlNWQ2YztcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICB9XHJcblxyXG4gIC5zbG92YV9femFnIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMzkzNzRkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fZ2V0X19zbG92YTIyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLnN0cmVsYSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudF9fc2VsZWN0IHtcclxuICAgIHdpZHRoOiAzNzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTdweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRfWmFnb2xvdmsgc3BhbiB7XHJcbiAgICBjb2xvcjogIzM5Mzc0ZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAub2ZmaWNlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmdldF9fZm9uX19UZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcblxyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9wcmVsdWRlMTExIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgfVxyXG4gIC5mYSwgLmZhcyB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zdWJzcmlkZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NjBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIC53b21hbl9nZXRfemFnIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuXHJcbiAgfVxyXG5cclxuICAucG9ydF9fdGV4dCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgLnNiZXJiYW5re1xyXG4gICAgd2lkdGg6IDUyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\насир\Desktop\angular\atam-design\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map