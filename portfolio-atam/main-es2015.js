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
/* harmony import */ var _port_at_port_at_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./port-at/port-at.component */ "./src/app/port-at/port-at.component.ts");



class AppComponent {
    constructor() {
        this.title = 'portfolio-atam';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-port-at");
    } }, directives: [_port_at_port_at_component__WEBPACK_IMPORTED_MODULE_1__["PortAtComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
/* harmony import */ var _port_at_port_at_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./port-at/port-at.component */ "./src/app/port-at/port-at.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _port_at_port_at_component__WEBPACK_IMPORTED_MODULE_4__["PortAtComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _port_at_port_at_component__WEBPACK_IMPORTED_MODULE_4__["PortAtComponent"]
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

/***/ "./src/app/port-at/port-at.component.ts":
/*!**********************************************!*\
  !*** ./src/app/port-at/port-at.component.ts ***!
  \**********************************************/
/*! exports provided: PortAtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortAtComponent", function() { return PortAtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PortAtComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortAtComponent.ɵfac = function PortAtComponent_Factory(t) { return new (t || PortAtComponent)(); };
PortAtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortAtComponent, selectors: [["app-port-at"]], decls: 253, vars: 0, consts: [[1, "getHeader"], [1, "fotoHeader"], ["id", "getObj"], [1, "menublack"], ["id", "menuOkno", 1, "material-icons"], [1, "container"], [1, "menu", "d-flex"], [1, "logotip", "animate__animated", "animate__animated", "animate__fadeInDownBig"], ["id", "mobileNavigaci", 1, "mobileNav", "animate__animated", "animate__fadeInDownBig"], [1, "getNav"], [1, "mobNavigaci", "wow", "animate__animated", "animate__fadeInDownBig"], [1, "menubtn", "animate__animated", "animate__animated", "animate__fadeInDownBig"], ["id", "NamePassword", 1, "inputNamePassword"], ["id", "x"], [1, "objblock"], [1, "getName"], ["type", "text", "placeholder", "\u0418\u043C\u044F", 1, "getName2"], ["id", "getParol", 1, "parol"], ["type", "text", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "id", "getInput2", 1, "password"], ["id", "vedite"], ["id", "verni"], ["id", "neverni"], [1, "btnVhod"], ["id", "getButton", 1, "btn"], [1, "bordlini"], [1, "getZag"], [1, "getZagolovok"], [1, "zagolovok", "wow", "animate__animated", "animate__fadeInUp"], [1, "tuo", "wow", "animate__animated", "animate__fadeInUp"], [1, "new", "wow", "animate__animated", "animate__fadeInUp"], ["id", "zapisatsy", 1, "getbtn", "wow", "animate__animated", "animate__fadeInUp"], [1, "content"], [1, "row", "row-fix", "justify-content-lg-center"], [1, "col-md-10", "col-12", "wow", "animate__animated", "animate__fadeInRight"], [1, "contentObjText"], [1, "contentZagolovok"], [1, "textContent"], [1, "row", "mt-5"], [1, "col-md-4", "col-12"], [1, "contentGalereya", "ml-3", "wow", "animate__animated", "animate__fadeInLeftBig"], [1, "contentFoto1"], [1, "gitObjContent"], [1, "getConZag"], [1, "contText"], [1, "contentFoto2"], [1, "contentFoto3"], [1, "selector"], [1, "row"], [1, "col-md-7", "col-12"], [1, "selectorFoto"], [1, "col-md-5", "col-12"], [1, "getSelectorText"], [1, "selectorZagolvok"], [1, "selectorText"], [1, "center"], [1, "novosti", "d-flex", "wow", "animate__animated", "animate__fadeInLeftBig"], [1, "material-icons", "ikona"], [1, "getCentetText"], [1, "centerZagolovok"], [1, "centerText"], [1, "ikona"], ["aria-hidden", "true", 1, "fa", "fa-rocket"], ["aria-hidden", "true", 1, "fa", "fa-line-chart"], [1, "novosti", "d-flex", "wow", "animate__animated", "animate__fadeInRightBig"], ["aria-hidden", "true", 1, "fa", "fa-headphones"], ["aria-hidden", "true", 1, "fa", "fa-download"], ["aria-hidden", "true", 1, "fa", "fa-cart-arrow-down"], [1, "important"], [1, "importFoto"], [1, "importantObj", "wow", "animate__animated", "animate__fadeIn"], [1, "importantZag"], [1, "importantText"], [1, "importantBtn"], [1, "getPodval", "wow", "animate__animated", "animate__fadeInLeftBig"], [1, "podvalZagolovok"], [1, "podvalCovichki"], ["aria-hidden", "true", 1, "fa", "fa-quote-left"], [1, "getPodvalText"], [1, "podvalText"], [1, "name"], [1, ""], [1, "fotoalbom"], [1, "row", "no-gutters"], [1, "col-md-4", "col-xl-3", "mycol"], [1, "getGallereya", "animate__animated", "animate__fadeInTopLeft"], [1, "getfoto1"], [1, "getPlus"], [1, "getGallereya", "wow", "animate__animated", "animate__fadeInTopLeft"], [1, "getfoto2"], [1, "getGallereya", "wow", "animate__animated", "animate__fadeInTopRight"], [1, "getfoto3"], [1, "col-md-4", "col-xl-3"], [1, "getfoto4"], [1, "getGallereya", "wow", "animate__animated", "animate__fadeInBottomLeft"], [1, "getfoto5"], [1, "getfoto6"], [1, "getGallereya", "wow", "animate__animated", "animate__fadeInBottomRight"], [1, "getfoto7"], [1, "getfoto8"], ["src", "https://sun9-10.userapi.com/Nvl6ogZTVgnnzzTPHjfgyJHJ1eEfXqwUzuYxJg/dmsxq6mmb6k.jpg", 1, "sponsor", "wow", "animate__animated", "animate__fadeInLeftBig"], [1, "blackFoto"], [1, "blackblockObj"], [1, "row", "black"], [1, "blackZag"], [1, "blackText"], [1, "getFooter"], [1, "col-12"], [1, "footerText"], [1, "col-6"], [1, "inpBtn", "d-flex", "align-items", "center"], [1, "footerIkona"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o", "email"], [1, "inputObj"], ["placeholder", "email...", 1, "poisk"], [1, "footerBtn", "ml-5"], [1, "footer-ikonki"], ["aria-hidden", "true", 1, "fa", "fa-facebook", "ikonaFuter"], ["aria-hidden", "true", 1, "fa", "fa-youtube", "ikonaFuter"], ["aria-hidden", "true", 1, "fa", "fa-whatsapp", "ikonaFuter"], ["aria-hidden", "true", 1, "fa", "fa-twitter", "ikonaFuter"], ["aria-hidden", "true", 1, "fa", "fa-vimeo", "ikonaFuter"], ["aria-hidden", "true", 1, "fa", "fa-google-plus", "ikonaFuter"]], template: function PortAtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "FEATURES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "PAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "EVINTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "GALLERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SHOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ELEMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u041F\u041E\u0414\u041F\u0418\u0421\u0410\u0422\u042C\u0421\u042F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Monstroid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " New HTML Templates Generation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Multiple Themes &");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " a Variety of FeaturesS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Monstroid\u00B2 is a multipurpose template optimized for various niches of business. Besides neutral classic websites you can create restaurant, hotel, sport gym website and much much more. variety of useful features variety of useful features that are included with this template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Bootstrap Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Monstroid\u00B2 is based on Bootstrap Framework, which makes it a nice template for any purpose.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Responsive & Retina Ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Monstroid\u00B2 looks great on any screen resolution and on any device due to its responsiveness..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Customizable Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Use our Template to customize and update your website within seconds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Consistency is the Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Monstroid\u00B2 boasts clean and crispy design, bulletproof layout consistency and intuitive navigation. The template was created by top industry leaders in web design and user experience. Improve your audience engagement and loyalty with simple and user friendly tools offered by our template. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " find_in_page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Built for Speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Built for speed and performance. Get the best results at GTmetrix and Google PageSpeed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Flexible and Multipurpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Monstroid\u00B2 allows to create various websites for complex and scalable projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "SEO Friendly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Valid code and performance optimized framework make SEO easy and hassle-free. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "24/7 Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "24/7 Premium technical support and great documentation are included in this template price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Social Integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "You can easily integrate your Twitter and Facebook accounts with the website using the social widgets. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Advanced UI Kit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Monstroid\u00B2 comes with a powerful and flexible extended toolkit in addition to basic Bootstrap. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Like What We Offer?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Start with this demo now or check out the others to choose what you need.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "VIEW NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Share Your Company Testimonials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "This template has everything I was looking for my business website to have. From easy-to-customize pages to flawlessly working web tools, Monstroid\u00B2 is my number one choice!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "-Nasir Atamazov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Haven\u2019t Found What You Like? Browse Our Other Demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Monstroid\u00B2 has everything to get you covered. Take a look at the child themes available for you. The list of themes covers most popular spheres o f interest including Art & Photography, Business, Education and Design.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "button", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "VIEW NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " Get the latest news delivered daily!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " We will send you breaking news right to your inbox. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "input", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "button", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "SUBSCRIDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "i", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "i", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "i", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "i", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "ATAMAZOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\r\n  margin: 0px;\r\n}\r\nheader[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.fotoHeader[_ngcontent-%COMP%]{background-image: url(\"https://sun9-10.userapi.com/yflAgxPPTJzk-LxwxccdzwYxrJoCQ5zykb1n7Q/LriId9PWQIg.jpg\");\r\n  width: 100%;\r\n  height: 1000px;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n.logotip[_ngcontent-%COMP%]{background-image: url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/logo-inverse-347x65.png\");\r\n  width: 200px;\r\n  height: 33px;\r\n  background-size: cover;\r\n\r\n}\r\n.menu[_ngcontent-%COMP%]{\r\n  align-items: center;\r\n  margin-top: 60px;\r\n}\r\n.nav[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n}\r\n.getNav[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  margin-left: 25px;\r\n  display: flex;\r\n}\r\n.mobNavigaci[_ngcontent-%COMP%]{\r\n  margin-left: 30px;\r\n  font-weight: 600;\r\n  margin-top: 15px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n.mobNavigaci[_ngcontent-%COMP%]:hover{\r\n  color: #2ed3ae;\r\n  transition: 0.4s;\r\n}\r\n.menubtn[_ngcontent-%COMP%]{ color: white;\r\n  border: 1px solid white ;\r\n  padding: 10px 13px;\r\n  border-radius: 5px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  margin-left: 40px;\r\n  box-sizing: border-box;\r\n\r\n\r\n}\r\n.menubtn[_ngcontent-%COMP%]:hover{\r\n  transition: 0.3s;\r\n  background-color: #2ed3ae;\r\n  border-width: 0;\r\n}\r\n.bordlini[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #4c9081 ;\r\n  margin-top: 50px;\r\n}\r\n.zagolovok[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 90px;\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n.getZagolovok[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 50%;\r\n  left:50%;\r\n  z-index: 1;\r\n  transform: translate3d(-50%,-50%,0);\r\n\r\n}\r\n.tuo[_ngcontent-%COMP%]{font-size: 55px;\r\n  color: #4c9081;\r\n  font-weight: 600;\r\n  margin-left: 20px;\r\n  position: absolute;\r\n  top:-5px;\r\n}\r\n.new[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 40px;\r\n}\r\n.getbtn[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 20px;\r\n  border: 1px solid white ;\r\n  padding: 20px 13px;\r\n  border-radius: 5px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  background-color: #2ed3ae;\r\n  box-sizing: border-box;\r\n  border-width: 0;\r\n  width: 200px;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n}\r\n.getbtn[_ngcontent-%COMP%]:hover{\r\n  background-color: black;\r\n  color: white;\r\n  transition: 0.3s;\r\n}\r\n\r\n\r\n.contentZagolovok[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-size: 40px;\r\n  padding-top: 190px;\r\n  box-sizing: border-box;\r\n}\r\n.textContent[_ngcontent-%COMP%]{\r\n  margin-top: 26px;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  color: #888;\r\n}\r\n.contentFoto1[_ngcontent-%COMP%], .contentFoto2[_ngcontent-%COMP%], .contentFoto3[_ngcontent-%COMP%]{\r\n  width: 369px;\r\n  height: 278px;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n\r\n}\r\n.contentFoto1[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/services-1-418x315.jpg\");\r\n}\r\n.contentFoto2[_ngcontent-%COMP%]{background-image:\r\n  url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/services-3-418x315.jpg\");\r\n}\r\n.contentFoto3[_ngcontent-%COMP%]{\r\n\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/services-2-418x315.jpg\");\r\n}\r\n.contentFoto1[_ngcontent-%COMP%]:hover{\r\n  box-shadow:  0 5px 23px 0 rgba(0, 0, 0, 0.15) ;\r\n  transition: 0.4s;\r\n}\r\n.contentFoto2[_ngcontent-%COMP%]:hover{\r\n   box-shadow:  0 5px 23px 0 rgba(0, 0, 0, 0.15) ;\r\n   transition: 0.4s;\r\n }\r\n.contentFoto3[_ngcontent-%COMP%]:hover{\r\n    box-shadow:  0 5px 23px 0 rgba(0, 0, 0, 0.15) ;\r\n    transition: 0.4s;\r\n  }\r\n.gitObjContent[_ngcontent-%COMP%]{\r\n  margin-top: 25px;\r\n  width: 369px;\r\n  text-align: left;\r\n}\r\n.contText[_ngcontent-%COMP%]{\r\n  margin-top:18px ;\r\n  font-size: 18px;\r\n  color: #888;\r\n}\r\n.getConZag[_ngcontent-%COMP%]{\r\n  font-size:24px ;\r\n  color: #151515;\r\n  cursor: pointer;\r\n}\r\n.getConZag[_ngcontent-%COMP%]:hover{\r\n  color: #2ed3ae;\r\n  transition: 0.3s;\r\n}\r\n\r\n\r\n.selector[_ngcontent-%COMP%]{\r\n  background-color: #2ed3ae;\r\n  padding-top: 150px;\r\n  margin-top: 150px;\r\n  padding-bottom: 100px;\r\n}\r\n.selectorFoto[_ngcontent-%COMP%]{\r\n  background-image:\r\n\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/home-commerial-1-652x491.jpg\");\r\n  width: 550px;\r\n  height: 451px;\r\n  background-size: cover;\r\n}\r\n.getSelectorText[_ngcontent-%COMP%]{\r\n  margin-left: 50px;\r\n  color: white;\r\n  margin-top: 50px;\r\n}\r\n.selectorZagolvok[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  font-weight: 200;\r\n}\r\n.selectorText[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n}\r\n\r\n\r\n.center[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n}\r\n.novosti[_ngcontent-%COMP%]{\r\n  width: 350px;\r\n  max-width: 100%;\r\n}\r\n.ikona[_ngcontent-%COMP%]{\r\n  color: #2ed3ae;\r\n}\r\n.getCentetText[_ngcontent-%COMP%]{\r\n  margin-left: 30px;\r\n}\r\n.centerZagolovok[_ngcontent-%COMP%]{\r\n  font-size: 24px ;\r\n  color: #000;\r\n}\r\n.centerText[_ngcontent-%COMP%]{\r\n  color:#888 ;\r\n  margin-top: 20px;\r\n}\r\n\r\n\r\n.importFoto[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://sun9-73.userapi.com/4mVTsb2J1DuXwtVA3-424NxxOdUukJ1oiRdAig/uK0IRGLENXQ.jpg\");\r\n  width: 100%;\r\n  height: 700px ;\r\n  background-size: cover;\r\n  background-position: left;\r\n  overflow: hidden;\r\n}\r\n.importantObj[_ngcontent-%COMP%]{\r\n  margin-top: 150px;\r\n}\r\n.importantZag[_ngcontent-%COMP%]{\r\n  font-size: 60px;\r\n  font-weight: 200;\r\n}\r\n.importantText[_ngcontent-%COMP%]{\r\n  margin-top: 28px;\r\n  color: #888;\r\n}\r\n.importantBtn[_ngcontent-%COMP%]{\r\n  background-color: #2ed3ae;\r\n  color: white;\r\n  border-color: #2ed3ae;\r\n  margin-top: 35px;\r\n  padding: 17px 40px 15px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  border-width: 0;\r\n  border-radius: 4px ;\r\n}\r\n.importantBtn[_ngcontent-%COMP%]:hover{\r\n  background-color: black;\r\n  color: white;\r\n  transition: 0.4s;\r\n}\r\n\r\n\r\n.getPodval[_ngcontent-%COMP%]{\r\n  margin-top: 100px;\r\n  text-align: center;\r\n}\r\n.podvalZagolovok[_ngcontent-%COMP%]{\r\n  font-size: 45px;\r\n  font-weight: 200;\r\n  color: #151515;\r\n}\r\n.podvalText[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  color: #888;\r\n\r\n}\r\n.podvalCovichki[_ngcontent-%COMP%]{\r\n  color: #2ed3ae;\r\n  font-size: 26px ;\r\n  margin-top: 20px;\r\n}\r\n.getPodvalText[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  width: 700px;\r\n  max-width: 100%;\r\n\r\n}\r\n.name[_ngcontent-%COMP%]{\r\n  color: #000;\r\n  margin-top: 15px;\r\n\r\n}\r\n\r\n\r\n.fotoalbom[_ngcontent-%COMP%]{\r\n\r\n  margin-top: 120px;\r\n}\r\n.getfoto1[_ngcontent-%COMP%], .getfoto2[_ngcontent-%COMP%], .getfoto3[_ngcontent-%COMP%], .getfoto4[_ngcontent-%COMP%], .getfoto5[_ngcontent-%COMP%], .getfoto6[_ngcontent-%COMP%], .getfoto7[_ngcontent-%COMP%], .getfoto8[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  min-width: 100%;\r\n  max-height: 100%;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  background-position: center;\r\n  background-size: cover;\r\n  height: 400px;\r\n\r\n}\r\n.getGallereya[_ngcontent-%COMP%]{\r\n  margin-left: 0px;\r\n}\r\n.getfoto1[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-3-1200x906.jpg\");\r\n\r\n}\r\n.getfoto2[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-9-1200x905.jpg\");\r\n}\r\n.getfoto3[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-10-1200x675.jpg\");\r\n}\r\n.getfoto4[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-11-1200x1200.jpg\");\r\n}\r\n.getfoto5[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-14-1200x905.jpg\");\r\n}\r\n.getfoto6[_ngcontent-%COMP%]{background-image:\r\n  url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-6-1200x905.jpg\")\r\n}\r\n.getfoto7[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/image-original-12-1200x797.jpg\");\r\n}\r\n.getfoto8[_ngcontent-%COMP%]{background-image:\r\n  url(\"https://livedemo00.template-help.com/wt_62267_v8/62267-default/images/services-3-418x315.jpg\")\r\n}\r\n.sponsor[_ngcontent-%COMP%]{\r\n  margin-left:-40px;\r\n}\r\n.getfoto1[_ngcontent-%COMP%]:hover::before {\r\n  display:block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n  transition: 0.4s;\r\n}\r\n.getfoto1[_ngcontent-%COMP%]::before{\r\n  transition: 0.4s;\r\n}\r\n.getfoto2[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n\r\n}\r\n.getfoto3[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n\r\n}\r\n.getfoto4[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n}\r\n.getfoto5[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n\r\n}\r\n.getfoto6[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n\r\n}\r\n.getfoto7[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n\r\n}\r\n.getfoto8[_ngcontent-%COMP%]:hover::before {\r\n  display:  block;\r\n  content: \"\";\r\n  background-color: #2ed3ae;\r\n  width: 100%;\r\n  height: 400px;\r\n  opacity: 0.8;\r\n  transition: 0.4s;\r\n}\r\n\r\n\r\n.blackFoto[_ngcontent-%COMP%]{\r\n  background-image:\r\n    url(\"https://sun9-9.userapi.com/izR0IKmeSNt6NfFM26V_UAUr386-zAuniGxwIg/BjEKGYctV1E.jpg\");\r\n  width: 100%;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  height: 600px;\r\n  background-size: cover;\r\n  background-position: left;\r\n  overflow: hidden;\r\n\r\n}\r\n.black[_ngcontent-%COMP%]{\r\n  justify-content: flex-end;\r\n\r\n}\r\n.blackblockObj[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: 10%;\r\n\r\n\r\n}\r\n.blackZag[_ngcontent-%COMP%]{\r\n\r\n  font-size: 40px;\r\n  color: white;\r\n}\r\n.blackText[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  margin-top: 28px;\r\n  color: white;\r\n}\r\n.footerBtn[_ngcontent-%COMP%]{\r\n  background-color: #2ed3ae;\r\n  color: white;\r\n  border-color: #2ed3ae;\r\n  padding: 18px 40px 15px;\r\n  font-size: 20px;\r\n  line-height: 24px;\r\n  border-width: 0;\r\n  border-radius: 4px\r\n}\r\n.getFooter[_ngcontent-%COMP%]{margin-top: 100px;\r\n\r\n}\r\n.inpBtn[_ngcontent-%COMP%]{  background-color:  #f5f5fa;\r\n  margin-top: 50px;\r\n  align-items: center;\r\n  border-radius: 4px;\r\n  padding: 0px 25px;\r\n  width: 350px;\r\n  height: 60px;\r\n  max-width: 100%;\r\n  position:relative;\r\n  left: 55%;\r\n  min-width: 100%;\r\n\r\n}\r\n.poisk[_ngcontent-%COMP%]{\r\n  padding: 6px;\r\n  font-size: 21px;\r\n  font-family: Hind,Arial,sans-serif;\r\n  padding-left: 10px;\r\n  border: none;\r\n  border-width: 0;\r\n  background-color: #f5f5fa;\r\n}\r\n.footerText[_ngcontent-%COMP%]{\r\n  font-size: 24px;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n.email[_ngcontent-%COMP%]{\r\n  color:  #c7c7c7;\r\n  font-size: 21px;\r\n}\r\n.inpBtn[_ngcontent-%COMP%]:hover{\r\n  border: 2px solid #2ed3ae;\r\n  transition: 0.4s;\r\n}\r\n.footer-ikonki[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-top: 25px;\r\n}\r\n.ikonaFuter[_ngcontent-%COMP%] {\r\n  margin-left: 20px;\r\n  color: #2ed3ae;\r\n  font-size: 20px;\r\n\r\n}\r\n.ikonaFuter[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n  transition: 0.5s;\r\n}\r\n.name[_ngcontent-%COMP%]{\r\n  padding-bottom: 100px;\r\n  text-align: center;\r\n  font-size: 40px;\r\n  color: gray;\r\n}\r\n#menuOkno[_ngcontent-%COMP%]{\r\n  display: none\r\n}\r\n\r\n@media only screen and (max-width: 414px) {\r\n\r\n  header[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  .menublack[_ngcontent-%COMP%] {\r\n    background-color: #000;\r\n    height: 60px;\r\n    width: 100%;\r\n    position: relative;\r\n    display: none;\r\n  }\r\n\r\n  .logotip[_ngcontent-%COMP%] {\r\n    width: 160px;\r\n    height: 27px;\r\n    position: fixed;\r\n    z-index: 10;\r\n    top: 13px;\r\n    left: 60px;\r\n\r\n  }\r\n\r\n  #menuOkno[_ngcontent-%COMP%] {\r\n    display: block;\r\n\r\n    color: white;\r\n    font-size: 35px;\r\n    position: fixed;\r\n    top: 12px;\r\n    left: 8px;\r\n\r\n  }\r\n\r\n  .menublack[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 10;\r\n\r\n\r\n  }\r\n\r\n  .bordlini[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .navigaci[_ngcontent-%COMP%], .menubtn[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .zagolovok[_ngcontent-%COMP%] {\r\n    font-size: 54px;\r\n  }\r\n\r\n  .new[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n\r\n  }\r\n\r\n  \r\n  .hidden[_ngcontent-%COMP%] {\r\n    margin-top: -20px;\r\n    width: 280px;\r\n    background-color: white;\r\n    height: 812px;\r\n    position: fixed;\r\n    z-index: 10;\r\n    top: 80px;\r\n    left: -20px;\r\n    transition: 0.5s;\r\n  }\r\n\r\n  .mobileNav[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    width: 0px;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n\r\n  }\r\n\r\n  .getNav[_ngcontent-%COMP%] {\r\n\r\n\r\n    position: fixed;\r\n    z-index: 10;\r\n    margin-left: -40px;\r\n    margin-top: -0px;\r\n\r\n  }\r\n\r\n  .mobNavigaci[_ngcontent-%COMP%]:hover {\r\n    background-color: #2ed3ae;\r\n    transition: 0.5s;\r\n    color: white;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px){\r\n\r\n  .contentFoto1[_ngcontent-%COMP%], .contentFoto2[_ngcontent-%COMP%], .contentFoto3[_ngcontent-%COMP%]{\r\n    width: 350PX;\r\n    margin-left:-15px;\r\n    margin-top: 15px;\r\n  }\r\n  .contentObjText[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n  }\r\n  .getZagolovok[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n  }\r\n  .mobNavigaci[_ngcontent-%COMP%]{\r\n    padding: 10px 40px;\r\n    width: 260px;\r\n    margin-left: 20px;\r\n    font-weight: 600;\r\n    margin-top: 15px;\r\n    color:black;\r\n    cursor: pointer;\r\n\r\n  }\r\n  .getNav[_ngcontent-%COMP%]{\r\n    display: grid;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px){\r\n  .selector[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n    padding-top:50px ;\r\n  }\r\n  .selectorFoto[_ngcontent-%COMP%]{\r\n    width: 340px;\r\n    height: 260px;\r\n    background-size: cover;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media only screen and (max-width: 414px){\r\n  .importantZag[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    font-weight: 200;\r\n  }\r\n  .importFoto[_ngcontent-%COMP%]{\r\n    height: 440px;\r\n  }\r\n  .importantObj[_ngcontent-%COMP%]{\r\n    margin-left:30px;\r\n  }\r\n\r\n\r\n}\r\n\r\n@media only screen and (max-width: 414px){\r\n  .podvalZagolovok[_ngcontent-%COMP%]{\r\n    font-size: 35px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 414px){\r\n  .blackZag[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n\r\n  }\r\n\r\n  .blackText[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n\r\n  }\r\n  .blackFoto[_ngcontent-%COMP%]{\r\n    background-position: center right;\r\n  }\r\n\r\n  .sponsor[_ngcontent-%COMP%]{\r\n    width: 414px;\r\n  }\r\n\r\n}\r\n\r\n\r\n.inputNamePassword[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 700px;\r\n  height: 500px;\r\n  background-color: #002e36;\r\n  padding: 40px 50px;\r\n  box-sizing: border-box;\r\n  margin:   auto;\r\n  z-index: 3;\r\n  margin-top: 100px;\r\n  display: none;\r\n}\r\n.parol[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n\r\n}\r\n.password[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  outline: none;\r\n  padding:15px;\r\n  font-size: 24px;\r\n  border: none;\r\n}\r\n.getName2[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  outline: none;\r\n  padding: 15px;\r\n  font-size: 24px;\r\n  border: none;\r\n\r\n\r\n}\r\n.btnVhod[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n  padding: 15px 50px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  font-size: 24px;\r\n  border-width: 0;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n#getButton[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n#x[_ngcontent-%COMP%]{\r\n  position:absolute;\r\n  right:-26px;\r\n  top:-30px;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n#vedite[_ngcontent-%COMP%], #neverni[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-size: 24px;\r\n  display: none;\r\n  margin-top: 15px;\r\n}\r\n#verni[_ngcontent-%COMP%]{\r\n  color: #3cff00;\r\n  font-size: 24px;\r\n  margin-top: 15px;\r\n  display: none;\r\n}\r\n.objblock[_ngcontent-%COMP%]{\r\n  margin-top: 120px;\r\n\r\n}\r\n#getObj[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: black;\r\n  opacity: 0.6;\r\n  position: absolute;\r\n  top:0px;\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 2;\r\n}\r\n@media only screen and (max-width: 414px) {\r\n\r\n  .poisk[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n  }\r\n\r\n  .inpBtn[_ngcontent-%COMP%] {\r\n    width: 700px;\r\n  }\r\n\r\n  .footerBtn[_ngcontent-%COMP%] {\r\n\r\n    display: none;\r\n  }\r\n  .inputNamePassword[_ngcontent-%COMP%]{\r\n    width: 350px;\r\n    height: 350px;\r\n  }\r\n  .password[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{\r\n    width: 230px;\r\n    padding: 5px;\r\n    font-size: 18px;\r\n  }\r\n  .objblock[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n  }\r\n  #vedite[_ngcontent-%COMP%], #neverni[_ngcontent-%COMP%], #verni[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydC1hdC9wb3J0LWF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQSxZQUFZLDJHQUEyRztFQUNySCxXQUFXO0VBQ1gsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQSxTQUFTLHNIQUFzSDtFQUM3SCxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjs7QUFFeEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUEsVUFBVSxZQUFZO0VBQ3BCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjs7O0FBR3hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLFVBQVU7RUFDVixtQ0FBbUM7O0FBRXJDO0FBRUEsS0FBSyxlQUFlO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUEsMkJBQTJCO0FBRzNCLG9CQUFvQjtBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7OztFQUdFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRTt1R0FDcUc7QUFDdkc7QUFDQSxjQUFjO3FHQUN1RjtBQUNyRztBQUNBOztFQUVFO3VHQUNxRztBQUN2RztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLGdCQUFnQjtBQUNsQjtBQUFDO0dBQ0UsOENBQThDO0dBQzlDLGdCQUFnQjtDQUNsQjtBQUFDO0lBQ0UsOENBQThDO0lBQzlDLGdCQUFnQjtFQUNsQjtBQUNGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFJQSw4QkFBOEI7QUFHOUIscUJBQXFCO0FBRXJCO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRTs7NkdBRTJHO0VBQzNHLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBR0EsK0JBQStCO0FBRy9CLG9CQUFvQjtBQUVwQjtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBLDZCQUE2QjtBQUc3Qix1QkFBdUI7QUFHdkI7RUFDRTs2RkFDMkY7RUFDM0YsV0FBVztFQUNYLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQSxnQ0FBZ0M7QUFHaEMsb0JBQW9CO0FBRXBCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVzs7QUFFYjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTs7QUFFakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7O0FBRWxCO0FBQ0EsNkJBQTZCO0FBRzdCLHVCQUF1QjtBQUd2Qjs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsYUFBYTs7QUFFZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTs4R0FDNEc7O0FBRTlHO0FBQ0E7RUFDRTs4R0FDNEc7QUFDOUc7QUFDQTtFQUNFOytHQUM2RztBQUMvRztBQUNBO0VBQ0U7Z0hBQzhHO0FBQ2hIO0FBQ0E7RUFDRTsrR0FDNkc7QUFDL0c7QUFDQSxVQUFVOztBQUVWO0FBQ0E7RUFDRTsrR0FDNkc7QUFDL0c7QUFDQSxVQUFVOztBQUVWO0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZOztBQUVkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBLGlDQUFpQztBQUdqQyx3QkFBd0I7QUFFeEI7RUFDRTs0RkFDMEY7RUFDMUYsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCOztBQUVsQjtBQUNBO0VBQ0UseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7OztBQUdYO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFJQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZjtBQUNGO0FBSUEsV0FBVyxpQkFBaUI7O0FBRTVCO0FBQ0EsVUFBVSwwQkFBMEI7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsZUFBZTs7QUFFakI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlOztBQUVqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRTtBQUNGO0FBRUEscUJBQXFCO0FBR3JCOztFQUVFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVOztFQUVaOztFQUVBO0lBQ0UsY0FBYzs7SUFFZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUzs7RUFFWDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVzs7O0VBR2I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTs7RUFFakI7O0VBRUEsa0JBQWtCO0VBQ2xCO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7O0VBRXBCOztFQUVBOzs7SUFHRSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0VBRWxCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7QUFDRjtBQUNBOztDQUVDO0FBRUQ7O0VBRUU7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7O0VBRWpCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUVBOztDQUVDO0FBRUQ7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztBQUVGO0FBQ0E7O0NBRUM7QUFFRDs7Q0FFQztBQUNEO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7O0FBR0Y7QUFDQTs7Q0FFQztBQUdEO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTs7O0NBR0M7QUFDRDtFQUNFO0lBQ0UsZUFBZTs7RUFFakI7O0VBRUE7SUFDRSxlQUFlOztFQUVqQjtFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVGO0FBQ0E7OztDQUdDO0FBR0QsNEJBQTRCO0FBQzVCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTs7O0FBR2Q7QUFDQTtFQUNFLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBOztFQUVFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBOztJQUVFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTs7O0lBR0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9ydC1hdC9wb3J0LWF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbmhlYWRlcntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvdG9IZWFkZXJ7YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zdW45LTEwLnVzZXJhcGkuY29tL3lmbEFneFBQVEp6ay1MeHd4Y2NkendZeHJKb0NRNXp5a2IxbjdRL0xyaUlkOVBXUUlnLmpwZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmxvZ290aXB7YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL2xvZ28taW52ZXJzZS0zNDd4NjUucG5nXCIpO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuLm1lbnV7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbi5uYXZ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmdldE5hdiB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tb2JOYXZpZ2FjaXtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubW9iTmF2aWdhY2k6aG92ZXJ7XHJcbiAgY29sb3I6ICMyZWQzYWU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm1lbnVidG57IGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZSA7XHJcbiAgcGFkZGluZzogMTBweCAxM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuXHJcbn1cclxuLm1lbnVidG46aG92ZXJ7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxufVxyXG4uYm9yZGxpbml7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YzkwODEgO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnphZ29sb3Zva3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA5MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5nZXRaYWdvbG92b2t7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OjUwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApO1xyXG5cclxufVxyXG5cclxuLnR1b3tmb250LXNpemU6IDU1cHg7XHJcbiAgY29sb3I6ICM0YzkwODE7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOi01cHg7XHJcbn1cclxuLm5ld3tcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5nZXRidG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZSA7XHJcbiAgcGFkZGluZzogMjBweCAxM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuXHJcbi5nZXRidG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi8q0LfQsNC60L7QvdGH0LjQuyDRgdGC0LjQu9C4INC00LvRjyDQpdCY0JTQkNCgKi9cclxuXHJcblxyXG4vKtCh0KLQmNCb0Jgg0JTQm9CvINCa0J7QndCi0JXQndCiKi9cclxuXHJcblxyXG4uY29udGVudFphZ29sb3Zva3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxOTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi50ZXh0Q29udGVudHtcclxuICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICM4ODg7XHJcbn1cclxuLmNvbnRlbnRGb3RvMVxyXG4sLmNvbnRlbnRGb3RvMlxyXG4sLmNvbnRlbnRGb3RvM3tcclxuICB3aWR0aDogMzY5cHg7XHJcbiAgaGVpZ2h0OiAyNzhweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuLmNvbnRlbnRGb3RvMXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL3NlcnZpY2VzLTEtNDE4eDMxNS5qcGdcIik7XHJcbn1cclxuLmNvbnRlbnRGb3RvMntiYWNrZ3JvdW5kLWltYWdlOlxyXG4gIHVybChcImh0dHBzOi8vbGl2ZWRlbW8wMC50ZW1wbGF0ZS1oZWxwLmNvbS93dF82MjI2N192OC82MjI2Ny1kZWZhdWx0L2ltYWdlcy9zZXJ2aWNlcy0zLTQxOHgzMTUuanBnXCIpO1xyXG59XHJcbi5jb250ZW50Rm90bzN7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICB1cmwoXCJodHRwczovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vd3RfNjIyNjdfdjgvNjIyNjctZGVmYXVsdC9pbWFnZXMvc2VydmljZXMtMi00MTh4MzE1LmpwZ1wiKTtcclxufVxyXG5cclxuLmNvbnRlbnRGb3RvMTpob3ZlcntcclxuICBib3gtc2hhZG93OiAgMCA1cHggMjNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSkgO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn0uY29udGVudEZvdG8yOmhvdmVye1xyXG4gICBib3gtc2hhZG93OiAgMCA1cHggMjNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSkgO1xyXG4gICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gfS5jb250ZW50Rm90bzM6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAgMCA1cHggMjNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSkgO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICB9XHJcbi5naXRPYmpDb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgd2lkdGg6IDM2OXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbnRUZXh0e1xyXG4gIG1hcmdpbi10b3A6MThweCA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjODg4O1xyXG59XHJcbi5nZXRDb25aYWd7XHJcbiAgZm9udC1zaXplOjI0cHggO1xyXG4gIGNvbG9yOiAjMTUxNTE1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZ2V0Q29uWmFnOmhvdmVye1xyXG4gIGNvbG9yOiAjMmVkM2FlO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcblxyXG5cclxuLyrQt9Cw0LrQvtC90YfQuNC7INGB0YLQuNC70Lgg0LTQu9GPINCa0J7QndCi0JXQndCiICovXHJcblxyXG5cclxuLyrQodCi0JjQm9CYINCU0JvQryBTRUxFQ1RPUiovXHJcblxyXG4uc2VsZWN0b3J7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlZDNhZTtcclxuICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uc2VsZWN0b3JGb3Rve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcblxyXG4gICAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL2hvbWUtY29tbWVyaWFsLTEtNjUyeDQ5MS5qcGdcIik7XHJcbiAgd2lkdGg6IDU1MHB4O1xyXG4gIGhlaWdodDogNDUxcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uZ2V0U2VsZWN0b3JUZXh0e1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5zZWxlY3RvclphZ29sdm9re1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcbi5zZWxlY3RvclRleHR7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuXHJcbi8q0LfQsNC60L7QvdGH0LjQuyDRgdGC0LjQu9C4INC00LvRjyBTRUxFQ1RPUiAqL1xyXG5cclxuXHJcbi8q0KHQotCY0JvQmCDQlNCb0K8gIGNlbnRlciovXHJcblxyXG4uY2VudGVye1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5ub3Zvc3Rpe1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmlrb25he1xyXG4gIGNvbG9yOiAjMmVkM2FlO1xyXG59XHJcbi5nZXRDZW50ZXRUZXh0e1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5jZW50ZXJaYWdvbG92b2t7XHJcbiAgZm9udC1zaXplOiAyNHB4IDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4uY2VudGVyVGV4dHtcclxuICBjb2xvcjojODg4IDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi8q0LfQsNC60L7QvdGH0LjQuyDRgdGC0LjQu9C4INC00LvRjyBjZW50ZXIgKi9cclxuXHJcblxyXG4vKtCh0KLQmNCb0Jgg0JTQm9CvICBJTVBPUlRBTlQqL1xyXG5cclxuXHJcbi5pbXBvcnRGb3Rve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICB1cmwoXCJodHRwczovL3N1bjktNzMudXNlcmFwaS5jb20vNG1WVHNiMkoxRHVYd3RWQTMtNDI0Tnh4T2RVdWtKMW9pUmRBaWcvdUswSVJHTEVOWFEuanBnXCIpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzAwcHggO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5pbXBvcnRhbnRPYmp7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuLmltcG9ydGFudFphZ3tcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLmltcG9ydGFudFRleHR7XHJcbiAgbWFyZ2luLXRvcDogMjhweDtcclxuICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuLmltcG9ydGFudEJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItY29sb3I6ICMyZWQzYWU7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBwYWRkaW5nOiAxN3B4IDQwcHggMTVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCA7XHJcbn1cclxuLmltcG9ydGFudEJ0bjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLyrQt9Cw0LrQvtC90YfQuNC7INGB0YLQuNC70Lgg0LTQu9GPIElNUE9SVEFOVCAqL1xyXG5cclxuXHJcbi8q0KHQotCY0JvQmCDQlNCb0K8gIHBvZHZhbCovXHJcblxyXG4uZ2V0UG9kdmFse1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucG9kdmFsWmFnb2xvdm9re1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGNvbG9yOiAjMTUxNTE1O1xyXG59XHJcbi5wb2R2YWxUZXh0e1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgY29sb3I6ICM4ODg7XHJcblxyXG59XHJcbi5wb2R2YWxDb3ZpY2hraXtcclxuICBjb2xvcjogIzJlZDNhZTtcclxuICBmb250LXNpemU6IDI2cHggO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmdldFBvZHZhbFRleHR7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi5uYW1le1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG59XHJcbi8q0LfQsNC60L7QvdGH0LjQuyDRgdGC0LjQu9C4INC00LvRjyBwb2R2YWwgKi9cclxuXHJcblxyXG4vKtCh0KLQmNCb0Jgg0JTQm9CvICBmb3RvYWxib20qL1xyXG5cclxuXHJcbi5mb3RvYWxib217XHJcblxyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG59XHJcbi5nZXRmb3RvMSwuZ2V0Zm90bzIsLmdldGZvdG8zLC5nZXRmb3RvNFxyXG4sLmdldGZvdG81LC5nZXRmb3RvNiwuZ2V0Zm90bzcsLmdldGZvdG84e1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxufVxyXG4uZ2V0R2FsbGVyZXlhe1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLmdldGZvdG8xe1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICB1cmwoXCJodHRwczovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vd3RfNjIyNjdfdjgvNjIyNjctZGVmYXVsdC9pbWFnZXMvaW1hZ2Utb3JpZ2luYWwtMy0xMjAweDkwNi5qcGdcIik7XHJcblxyXG59XHJcbi5nZXRmb3RvMntcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL2ltYWdlLW9yaWdpbmFsLTktMTIwMHg5MDUuanBnXCIpO1xyXG59XHJcbi5nZXRmb3RvM3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL2ltYWdlLW9yaWdpbmFsLTEwLTEyMDB4Njc1LmpwZ1wiKTtcclxufVxyXG4uZ2V0Zm90bzR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIHVybChcImh0dHBzOi8vbGl2ZWRlbW8wMC50ZW1wbGF0ZS1oZWxwLmNvbS93dF82MjI2N192OC82MjI2Ny1kZWZhdWx0L2ltYWdlcy9pbWFnZS1vcmlnaW5hbC0xMS0xMjAweDEyMDAuanBnXCIpO1xyXG59XHJcbi5nZXRmb3RvNXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL2ltYWdlLW9yaWdpbmFsLTE0LTEyMDB4OTA1LmpwZ1wiKTtcclxufVxyXG4uZ2V0Zm90bzZ7YmFja2dyb3VuZC1pbWFnZTpcclxuICB1cmwoXCJodHRwczovL2xpdmVkZW1vMDAudGVtcGxhdGUtaGVscC5jb20vd3RfNjIyNjdfdjgvNjIyNjctZGVmYXVsdC9pbWFnZXMvaW1hZ2Utb3JpZ2luYWwtNi0xMjAweDkwNS5qcGdcIilcclxufVxyXG4uZ2V0Zm90bzd7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIHVybChcImh0dHBzOi8vbGl2ZWRlbW8wMC50ZW1wbGF0ZS1oZWxwLmNvbS93dF82MjI2N192OC82MjI2Ny1kZWZhdWx0L2ltYWdlcy9pbWFnZS1vcmlnaW5hbC0xMi0xMjAweDc5Ny5qcGdcIik7XHJcbn1cclxuLmdldGZvdG84e2JhY2tncm91bmQtaW1hZ2U6XHJcbiAgdXJsKFwiaHR0cHM6Ly9saXZlZGVtbzAwLnRlbXBsYXRlLWhlbHAuY29tL3d0XzYyMjY3X3Y4LzYyMjY3LWRlZmF1bHQvaW1hZ2VzL3NlcnZpY2VzLTMtNDE4eDMxNS5qcGdcIilcclxufVxyXG5cclxuXHJcbi5zcG9uc29ye1xyXG4gIG1hcmdpbi1sZWZ0Oi00MHB4O1xyXG59XHJcblxyXG4uZ2V0Zm90bzE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWQzYWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmdldGZvdG8xOjpiZWZvcmV7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4uZ2V0Zm90bzI6aG92ZXI6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogIGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlZDNhZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuXHJcbn1cclxuLmdldGZvdG8zOmhvdmVyOjpiZWZvcmUge1xyXG4gIGRpc3BsYXk6ICBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWQzYWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcblxyXG59XHJcbi5nZXRmb3RvNDpob3Zlcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiAgYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5nZXRmb3RvNTpob3Zlcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiAgYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG5cclxufVxyXG4uZ2V0Zm90bzY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgZGlzcGxheTogIGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlZDNhZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuXHJcbn1cclxuLmdldGZvdG83OmhvdmVyOjpiZWZvcmUge1xyXG4gIGRpc3BsYXk6ICBibG9jaztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZWQzYWU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcblxyXG59XHJcbi5nZXRmb3RvODpob3Zlcjo6YmVmb3JlIHtcclxuICBkaXNwbGF5OiAgYmxvY2s7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuLyrQt9Cw0LrQvtC90YfQuNC7INGB0YLQuNC70Lgg0LTQu9GPIGZvdG9hbGJvbSogKi9cclxuXHJcblxyXG4vKtCh0KLQmNCb0Jgg0JTQm9CvICBibGFja2Jsb2NrKi9cclxuXHJcbi5ibGFja0ZvdG97XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIHVybChcImh0dHBzOi8vc3VuOS05LnVzZXJhcGkuY29tL2l6UjBJS21lU050Nk5mRk0yNlZfVUFVcjM4Ni16QXVuaUd4d0lnL0JqRUtHWWN0VjFFLmpwZ1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG4uYmxhY2t7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbn1cclxuLmJsYWNrYmxvY2tPYmp7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDEwJTtcclxuXHJcblxyXG59XHJcbi5ibGFja1phZ3tcclxuXHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJsYWNrVGV4dHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMjhweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvb3RlckJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVkM2FlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItY29sb3I6ICMyZWQzYWU7XHJcbiAgcGFkZGluZzogMThweCA0MHB4IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci13aWR0aDogMDtcclxuICBib3JkZXItcmFkaXVzOiA0cHhcclxufVxyXG5cclxuXHJcblxyXG4uZ2V0Rm9vdGVye21hcmdpbi10b3A6IDEwMHB4O1xyXG5cclxufVxyXG4uaW5wQnRueyAgYmFja2dyb3VuZC1jb2xvcjogICNmNWY1ZmE7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBsZWZ0OiA1NSU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4ucG9pc2t7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBmb250LWZhbWlseTogSGluZCxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZmE7XHJcbn1cclxuLmZvb3RlclRleHR7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLmVtYWlse1xyXG4gIGNvbG9yOiAgI2M3YzdjNztcclxuICBmb250LXNpemU6IDIxcHg7XHJcbn1cclxuLmlucEJ0bjpob3ZlcntcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMmVkM2FlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuLmZvb3Rlci1pa29ua2l7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLmlrb25hRnV0ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMmVkM2FlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbn1cclxuLmlrb25hRnV0ZXI6aG92ZXJ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLm5hbWV7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuI21lbnVPa25ve1xyXG4gIGRpc3BsYXk6IG5vbmVcclxufVxyXG5cclxuLyrQkNCU0JDQn9Ci0JjQktCd0JDQryDQktCV0KDQodCi0JrQkCovXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xyXG5cclxuICBoZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG5cclxuICAubWVudWJsYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubG9nb3RpcCB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHRvcDogMTNweDtcclxuICAgIGxlZnQ6IDYwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgI21lbnVPa25vIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIGxlZnQ6IDhweDtcclxuXHJcbiAgfVxyXG5cclxuICAubWVudWJsYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTA7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC5ib3JkbGluaSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5hdmlnYWNpLCAubWVudWJ0biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnphZ29sb3ZvayB7XHJcbiAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgfVxyXG5cclxuICAubmV3IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbiAgfVxyXG5cclxuICAvKiDQnNCe0JHQmNCb0KzQndCe0JUg0JzQldCd0K4qL1xyXG4gIC5oaWRkZW4ge1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogODEycHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHRvcDogODBweDtcclxuICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcblxyXG4gIC5tb2JpbGVOYXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cclxuICB9XHJcblxyXG4gIC5nZXROYXYge1xyXG5cclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0wcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLm1vYk5hdmlnYWNpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWQzYWU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4vKiDQl9CQ0JrQntCd0KfQmNCbINCQ0JTQkNCf0KLQmNCS0J3Qo9CuINCS0JXQoNCh0KLQmtCjINCU0JvQryDQpdCY0JTQkNCgXHJcbiAgICDQn9CV0KDQldCl0J7QltCjINCSINCa0J7QndCi0JXQndCiXHJcbiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KXtcclxuXHJcbiAgLmNvbnRlbnRGb3RvMSwuY29udGVudEZvdG8yLC5jb250ZW50Rm90bzN7XHJcbiAgICB3aWR0aDogMzUwUFg7XHJcbiAgICBtYXJnaW4tbGVmdDotMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5jb250ZW50T2JqVGV4dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICAuZ2V0WmFnb2xvdm9re1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiAgLm1vYk5hdmlnYWNpe1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB9XHJcbiAgLmdldE5hdntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiDQl9CQ0JrQntCd0KfQmNCbINCQ0JTQkNCf0KLQmNCS0J3Qo9CuINCS0JXQoNCh0KLQmtCjINCU0JvQryDQmtCe0J3QotCV0J3QolxyXG4gICAg0J/QldCg0JXQpdCe0JbQoyDQkiBTRUxFQ1RPUlxyXG4qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCl7XHJcbiAgLnNlbGVjdG9ye1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctdG9wOjUwcHggO1xyXG4gIH1cclxuICAuc2VsZWN0b3JGb3Rve1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxufVxyXG4vKiDQl9CQ0JrQntCd0KfQmNCbINCQ0JTQkNCf0KLQmNCS0J3Qo9CuINCS0JXQoNCh0KLQmtCjINCU0JvQryBTRUxFQ1RPUlxyXG4gICAg0J/QldCg0JXQpdCe0JbQoyDQkiAgQ0VOVEVSXHJcbiovXHJcblxyXG4vKiDQl9CQ0JrQntCd0KfQmNCbINCQ0JTQkNCf0KLQmNCS0J3Qo9CuINCS0JXQoNCh0KLQmtCjINCU0JvQryBDRU5URVJcclxuICAgINCf0JXQoNCV0KXQntCW0KMg0JIgIElNUE9SVEFUTlRcclxuKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCl7XHJcbiAgLmltcG9ydGFudFphZ3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgfVxyXG4gIC5pbXBvcnRGb3Rve1xyXG4gICAgaGVpZ2h0OiA0NDBweDtcclxuICB9XHJcbiAgLmltcG9ydGFudE9iantcclxuICAgIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuLyog0JfQkNCa0J7QndCn0JjQmyDQkNCU0JDQn9Ci0JjQktCd0KPQriDQktCV0KDQodCi0JrQoyDQlNCb0K8gSU1QT1JUQVROVFxyXG4gICAg0J/QldCg0JXQpdCe0JbQoyDQkiAgIGdldFBvZHZhbFxyXG4qL1xyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpe1xyXG4gIC5wb2R2YWxaYWdvbG92b2t7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiDQl9CQ0JrQntCd0KfQmNCbINCQ0JTQkNCf0KLQmNCS0J3Qo9CuINCS0JXQoNCh0KLQmtCjINCU0JvQryBnZXRQb2R2YWxcclxuICAgINCf0JXQoNCV0KXQntCW0KMg0JIgICBibGFja2Jsb2NrXHJcblxyXG4qL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KXtcclxuICAuYmxhY2taYWd7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmJsYWNrVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbiAgfVxyXG4gIC5ibGFja0ZvdG97XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAuc3BvbnNvcntcclxuICAgIHdpZHRoOiA0MTRweDtcclxuICB9XHJcblxyXG59XHJcbi8qINCX0JDQmtCe0J3Qp9CY0Jsg0JDQlNCQ0J/QotCY0JLQndCj0K4g0JLQldCg0KHQotCa0KMg0JTQm9CvIGJsYWNrYmxvY2tcclxuICAgINCf0JXQoNCV0KXQntCW0KMg0JIgICBmb290ZXJcclxuXHJcbiovXHJcblxyXG5cclxuLyrQodCi0JjQm9CYINCU0JvQryDQnNCe0JTQkNCb0KzQndCe0JPQniDQntCa0J3QkCovXHJcbi5pbnB1dE5hbWVQYXNzd29yZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmUzNjtcclxuICBwYWRkaW5nOiA0MHB4IDUwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46ICAgYXV0bztcclxuICB6LWluZGV4OiAzO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnBhcm9se1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcblxyXG59XHJcbi5wYXNzd29yZHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOjE1cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmdldE5hbWUye1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcblxyXG59XHJcbi5idG5WaG9ke1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG59XHJcbi5idG57XHJcbiAgcGFkZGluZzogMTVweCA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBib3JkZXItd2lkdGg6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jZ2V0QnV0dG9ue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jeHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICByaWdodDotMjZweDtcclxuICB0b3A6LTMwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI3ZlZGl0ZSwjbmV2ZXJuaXtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuI3Zlcm5pe1xyXG4gIGNvbG9yOiAjM2NmZjAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm9iamJsb2Nre1xyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG5cclxufVxyXG4jZ2V0T2Jqe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowcHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XHJcblxyXG4gIC5wb2lzayB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5wQnRuIHtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJCdG4ge1xyXG5cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbnB1dE5hbWVQYXNzd29yZHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgfVxyXG4gIC5wYXNzd29yZCwubmFtZXtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLm9iamJsb2Nre1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgI3ZlZGl0ZSxcclxuICAjbmV2ZXJuaSxcclxuICAjdmVybml7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortAtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-port-at',
                templateUrl: './port-at.component.html',
                styleUrls: ['./port-at.component.css']
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

module.exports = __webpack_require__(/*! C:\Users\насир\Desktop\angular\portfolio-atam\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map