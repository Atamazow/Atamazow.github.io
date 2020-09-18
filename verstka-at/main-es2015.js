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
/* harmony import */ var _verstka_at_verstka_at_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verstka-at/verstka-at.component */ "./src/app/verstka-at/verstka-at.component.ts");



class AppComponent {
    constructor() {
        this.title = 'verstka-at';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-verstka-at");
    } }, directives: [_verstka_at_verstka_at_component__WEBPACK_IMPORTED_MODULE_1__["VerstkaAtComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
/* harmony import */ var _verstka_at_verstka_at_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verstka-at/verstka-at.component */ "./src/app/verstka-at/verstka-at.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _verstka_at_verstka_at_component__WEBPACK_IMPORTED_MODULE_4__["VerstkaAtComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _verstka_at_verstka_at_component__WEBPACK_IMPORTED_MODULE_4__["VerstkaAtComponent"]
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

/***/ "./src/app/verstka-at/verstka-at.component.ts":
/*!****************************************************!*\
  !*** ./src/app/verstka-at/verstka-at.component.ts ***!
  \****************************************************/
/*! exports provided: VerstkaAtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerstkaAtComponent", function() { return VerstkaAtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VerstkaAtComponent {
    constructor() { }
    ngOnInit() {
    }
}
VerstkaAtComponent.ɵfac = function VerstkaAtComponent_Factory(t) { return new (t || VerstkaAtComponent)(); };
VerstkaAtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerstkaAtComponent, selectors: [["app-verstka-at"]], decls: 377, vars: 0, consts: [["type", "checkbox", "id", "checkbox-menu"], ["for", "checkbox-menu"], [1, "menu", "toch"], ["href", "#", 1, "logo"], ["href", "#"], ["href", "#", 1, "contacts"], [1, "toggle"], [1, "intro", "wrapper"], [1, "intro-img"], [1, "intro-text"], [1, "intro-contacts"], [1, "fas", "fa-phone-alt"], [1, "fas", "fa-map-marker-alt"], [1, "stats", "wrapper"], [1, "stats-texxt"], [1, "stats-num"], [1, "stats-line"], [1, "square"], [1, "stats-square"], [1, "square-text"], [1, "apartments"], [1, "wrapper", "apart"], [1, "cards"], [1, "card"], ["src", "https://images.pexels.com/photos/3255349/pexels-photo-3255349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "alt", ""], [1, "card-container"], [1, "card-infro"], [1, "money"], [1, "info"], [1, "fas", "fa-bed"], [1, "fas", "fa-shower"], ["src", "https://images.pexels.com/photos/3515649/pexels-photo-3515649.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "alt", ""], ["src", "https://images.pexels.com/photos/3380921/pexels-photo-3380921.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "alt", ""], ["src", "https://images.pexels.com/photos/2611488/pexels-photo-2611488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "alt", ""], ["src", "https://images.pexels.com/photos/2777183/pexels-photo-2777183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "alt", ""], ["src", "https://images.pexels.com/photos/3255144/pexels-photo-3255144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "alt", ""], [1, "button-serch"], ["action", ""], ["type", "text", "placeholder", "serch Locations"], ["type", "submit", "value", " search "], [1, "all"], [1, "steps"], [1, "wrapper"], [1, "steps-text"], [1, "steps-text", "mbtext"], [1, "steps-conainer"], ["id", "stepblock1", 1, "stepblock"], [1, "step-num"], [1, "step-info"], ["id", "sterbrd1", 1, "stepinfolast"], ["id", "stepblock2", 1, "stepblock"], ["id", "sterbrd2", 1, "stepinfolast"], ["id", "stepblock3", 1, "stepblock"], ["id", "sterbrd3", 1, "stepinfolast"], [1, "serveces", "wrapper"], [1, "servecis-container"], [1, "services-img"], ["src", "https://images.pexels.com/photos/2536178/pexels-photo-2536178.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "alt", ""], [1, "serv-text"], [1, "agents"], [1, "agent-cards"], [1, "agent-card"], ["src", "https://images.pexels.com/photos/3568788/pexels-photo-3568788.jpeg?auto=compress&cs=tinysrgb&h=381&w=344", "alt", ""], [1, "agent-info"], [1, "agent-block"], [1, "agent-name"], [1, "social"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-whatsapp"], ["src", " https://images.pexels.com/photos/3568790/pexels-photo-3568790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "alt", ""], ["src", " https://images.pexels.com/photos/360535/pexels-photo-360535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "alt", ""], [1, "add", "wrapper"], [1, "add-line"], [1, "line-img"], ["src", "https://images.pexels.com/photos/1906530/pexels-photo-1906530.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "alt", "", 1, "getline-img"], [1, "location", "location-melbourn"], [1, "line-text"], [1, "add-line", "add-line-right"], ["src", " https://images.pexels.com/photos/3888099/pexels-photo-3888099.jpeg?auto=compress&cs=tinysrgb&h=750&w=500", "alt", "", 1, "getline-img"], [1, "location", "location-Urus-Martan"], ["src", " https://images.pexels.com/photos/3058859/pexels-photo-3058859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "alt", "", 1, "getline-img"], [1, "show-more"], [1, "footer-block"], [1, "footer-logo"], [1, "footer-search"], ["type", "text", "placeholder", "Subrcide To our NewsLetter"], [1, "footer-links"], [1, "footer-links-logo"], [1, "footer-link"]], template: function VerstkaAtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Luxastate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Apartament");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "How it Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Join Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Getting Startde");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Find Your New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Modern Apartament ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " (922)473-73-73");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Melbourn,Urus-Martan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Our's Company ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi culpa cum est expedita fuga id impedit libero minima necessitatibus neque nobis officiis perspiciatis, placeat quia ratione repellat, sed soluta tempora voluptas! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi culpa cum est expedita fuga id impedit libero minima necessitatibus neque nobis officiis perspiciatis, placeat quia ratione repellat, sed soluta tempora voluptas! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "101722");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Appartaments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "101722");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Appartaments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "101722");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Appartaments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "101722");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Appartaments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "More than 500+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Appartaments For Rent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Lorem ipsum dolor sit amet, consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "$3,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "2BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "2BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Lorem ipsum dolor sit amet, consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "$3,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "2BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "2BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Lorem ipsum dolor sit amet, consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "$3,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "2BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "2BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Lorem ipsum dolor sit amet, consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "$3,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "2BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "2BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Lorem ipsum dolor sit amet, consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "$3,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "2BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "2BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Lorem ipsum dolor sit amet, consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "$3,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "2BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "2BD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "form", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "View All Apartaments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "How It Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Natus, quis, vero? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Lorem ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi enim explicabo ipsa laudantium qui? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Lorem ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Lorem ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi enim explicabo ipsa laudantium qui? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Lorem ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Lorem ipsum dolor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi enim explicabo ipsa laudantium qui? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Lorem ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "section", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Lorem ipsum dolor sit amet, consectetur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Lorem ipsum dolor sit amet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Renbing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex ipsa laudantium obcaecati possimus recusandae sequi. Consequatur cumque deleniti ducimus natus nobis ullam .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Renbing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex ipsa laudantium obcaecati possimus recusandae sequi. Consequatur cumque deleniti ducimus natus nobis ullam .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Renbing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ex ipsa laudantium obcaecati possimus recusandae sequi. Consequatur cumque deleniti ducimus natus nobis ullam .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "section", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Meet Uor Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Lorem ipsum dolor sit amet, consectetur adipisicing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Cumque dignissimos eaque tempora.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Mr.Atamazow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Mr.Atamazow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Mr.Atamazow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "section", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " Urus-Martan,Grozny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " Super Awesome Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam architecto autem consequatur cumque deserunt exercitationem, laborum maiores, maxime nobis numquam, officia qui quia quos rem repellat suscipi t ut voluptate? Nisi nostrum quia rerum ullam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " Super Awesome Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam architecto autem consequatur cumque deserunt exercitationem, laborum maiores, maxime nobis numquam, officia qui quia quos rem repellat suscipi t ut voluptate? Nisi nostrum quia rerum ullam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " Urus-Martan,Grozny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " Super Awesome Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam architecto autem consequatur cumque deserunt exercitationem, laborum maiores, maxime nobis numquam, officia qui quia quos rem repellat suscipi t ut voluptate? Nisi nostrum .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Show me more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Luxestate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Explore Real Estate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "input", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Luxestate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Luxestate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Hunters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Luxestate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Hunters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Hunters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Luxestate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Hunters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Luxestate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Hunters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Hunters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{\r\n  overflow-x: hidden;\r\n  transition: 0.3s;\r\n\r\n}\r\nnav[_ngcontent-%COMP%]{\r\n  margin: 0 auto;\r\n  max-width: 1140px;\r\n  width: 100%;\r\n}\r\n#checkbox-menu[_ngcontent-%COMP%], .toggle[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.menu[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n  margin: 0;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  list-style-type: none;\r\n}\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: black;\r\n  text-decoration: none;\r\n  align-self: center;\r\n  padding: 10px 15px;\r\n  transition: background .2s linear;\r\n}\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  background-color: #ffcc01;\r\n  border-radius: 3px;\r\n}\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  margin-right: 220px;\r\n}\r\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.contacts[_ngcontent-%COMP%]{\r\n  margin-right: 90px;\r\n}\r\n.header_prelude111[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]{\r\n  margin: 0 auto;\r\n  max-width: 1100px;\r\n  width: 100%;\r\n}\r\n.intro[_ngcontent-%COMP%]{\r\n  margin-top: 25px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.intro-img[_ngcontent-%COMP%]{\r\n  width: 965px;\r\n  height: 640px;\r\n  background-size: cover;\r\n  max-width: 100%;\r\n  background-image: url(\"https://images.pexels.com/photos/3602252/pexels-photo-3602252.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260\");\r\n}\r\n.intro[_ngcontent-%COMP%]   .intro-text[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  font-size: 62px;\r\n  top: 220px;\r\n  margin-left: 50px;\r\n  color: white;\r\n\r\n}\r\n.intro-contacts[_ngcontent-%COMP%]{\r\n  background-color: #ffcc01;\r\n  max-width: 590px;\r\n  position: absolute;\r\n\r\n  top: 635px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 30px 50px;\r\n}\r\n.intro-contacts[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color:white ;\r\n  margin-right: 30px;\r\n}\r\n.intro-contacts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  margin-right: 60px;\r\n}\r\n\r\n.stats[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin-top: 130px;\r\n}\r\n.stats-line[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.stats-texxt[_ngcontent-%COMP%]{\r\n  padding: 40px;\r\n}\r\n.stats-texxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  margin-bottom: 70px;\r\n}\r\n.stats-texxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n  font-size: 13px;\r\n  line-height: 27px;\r\n}\r\n.square[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  height: 200px;\r\n  background-color: #f6f5f4;\r\n  margin: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n.stats-square[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  color: #ffcc01;\r\n  margin-bottom: 13px;\r\n\r\n}\r\n.stats-texxt[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 348px;\r\n  height: 379px;\r\n}\r\n.apartments[_ngcontent-%COMP%]{\r\n  background-color: #f6f5f4;\r\n  padding: 60px 0px;\r\n}\r\n.apart[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  margin-bottom: 85px;\r\n  font-size: 40px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n  max-width:348px;\r\n  background: white;\r\n\r\n}\r\n.card-container[_ngcontent-%COMP%]{\r\n  padding: 25px ;\r\n}\r\n.card-infro[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 25px;\r\n}\r\n.card-infro[_ngcontent-%COMP%]   .money[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  color: #ffcc01;\r\n}\r\n.card-infro[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  margin-right: 8px;\r\n}\r\n.card-infro[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n  margin-right: 18px;\r\n}\r\n.card[_ngcontent-%COMP%]:hover{\r\n  background: #fafaf9;\r\n  box-shadow: 0 0 10px rgba(61, 61, 61, 0.2);\r\n  transition: 0.3s;\r\n}\r\n.cards[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns:repeat(3,1fr);\r\n  grid-template-rows: repeat(2,1fr);\r\n  grid-column-gap: 0px;\r\n  grid-row-gap: 30px;\r\n}\r\n.apart[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{\r\n  margin-top: 50px;\r\n  width: 300px;\r\n  height: 70px;\r\n  border: none;\r\n  background-image: url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/16px-Search_Noun_project_15028.svg.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: 27px;\r\n  outline: none;\r\n  padding-left: 62px;\r\n  font-size: 15px;\r\n  color: #919eb1;\r\n  border-top-left-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n}\r\n.apart[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]{\r\n  width: 115px;\r\n  border: none;\r\n  height: 70px;\r\n  background:#ffcc01;\r\n  font-size: 15px;\r\n  margin-left:-4px;\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n.all[_ngcontent-%COMP%]{\r\n  width: 250px;\r\n  height: 70px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  margin-left: 40px;\r\n  margin-top: 52px;\r\n  font-size: 15px;\r\n  background-color: white;\r\n}\r\n.button-serch[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n.steps[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  margin-top: 55px;\r\n  font-size: 40px;\r\n  margin-bottom: 35px;\r\n}\r\n.steps-text[_ngcontent-%COMP%]{\r\n  line-height: 26px;\r\n  font-size: 13px;\r\n}\r\n.mbtext[_ngcontent-%COMP%]{\r\n  margin-bottom: 70px;\r\n}\r\n.stepblock[_ngcontent-%COMP%]{\r\n  width: 340px;\r\n  height: 370px;\r\n  background: #fff;\r\n  box-shadow: 0 0 2px rgba(0,0,0,0.3);\r\n  overflow: hidden;\r\n}\r\n.stepblock[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%]{\r\n  font-size: 200px;\r\n  position: relative;\r\n  top:-120px;\r\n  left:-30px;\r\n}\r\n.stepblock[_ngcontent-%COMP%]:hover{\r\n  background-color:#ffcc01;\r\n  color: #fff;\r\n  transition: .3s ease;\r\n\r\n}\r\n.steps-conainer[_ngcontent-%COMP%]{\r\n  margin-bottom: 50px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.stepblock[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  margin-left: 14px;\r\n  margin-top: -100px;\r\n  margin-bottom: 20px;\r\n}\r\n.stepblock[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  margin-right: 15px;\r\n}\r\n.stepblock[_ngcontent-%COMP%]   .step-info[_ngcontent-%COMP%]{\r\n  margin-left: 70px;\r\n  line-height: 29px;\r\n}\r\n.stepblock[_ngcontent-%COMP%]   .stepinfolast[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  margin-left: 70px;\r\n  margin-top: 20px;\r\n  border-bottom: 3px solid #000;\r\n}\r\n.services-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.servecis-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin-top: 70px;\r\n}\r\n.services-img[_ngcontent-%COMP%]{\r\n  width: 58%;\r\n}\r\n.serv-text[_ngcontent-%COMP%]{\r\n  width: 42%;\r\n  margin-left: 3%;\r\n}\r\n.serv-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-bottom: 60px;\r\n}\r\n.serv-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  margin-bottom: 20px;\r\n}\r\n.serveces[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  line-height: 30px;\r\n}\r\n.serveces[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  font-size: 25px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.agents[_ngcontent-%COMP%]{\r\n  background-color: #f6f5f4;\r\n}\r\n.agents[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n  margin-bottom: 20px;\r\n\r\n}\r\n.agents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  line-height: 30px;\r\n\r\n}\r\n.agents[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3){\r\n  margin-bottom: 60px;\r\n}\r\n.agent-block[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n}\r\n.social[_ngcontent-%COMP%]{\r\n\r\n}\r\n.social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n  margin-right: 32px ;\r\n  position: relative;\r\n  top: 7px;\r\n\r\n}\r\n.agent-card[_ngcontent-%COMP%]{\r\n  max-width: 344px;\r\n  background-color:white;\r\n\r\n}\r\n.agent-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 344px;\r\n}\r\n.agent-card[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0 0 10px rgba(29, 29, 29, 0.2);\r\n  transition: 0.9s;\r\n}\r\n.agent-info[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  padding-left: 25px;\r\n}\r\n.agent-name[_ngcontent-%COMP%]{\r\n  color: #ffcc01;\r\n}\r\n.agent-cards[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-bottom: 95px;\r\n}\r\n\r\n.add[_ngcontent-%COMP%]{\r\n  padding-bottom: 100px;\r\n  padding-top: 90px;\r\n}\r\n.add-line[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.location[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  padding: 30px 87px 35px 55px ;\r\n  background: #ffcc01;\r\n  display: inline-block;\r\n}\r\n.location[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  margin-right: 30px;\r\n  font-size: 25px;\r\n  position: relative;\r\n  top: 7px;\r\n  color: white;\r\n}\r\n.location-melbourn[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: 100px;\r\n  bottom: 50px;\r\n}\r\n.location-Urus-Martan[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: 230px;\r\n  bottom: 50px;\r\n}\r\n.add-line[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  font-size: 25px;\r\n  margin-top: 75px;\r\n  margin-bottom: 40px;\r\n  margin-left: 130px;\r\n}\r\n.add-line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  line-height: 30px;\r\n  margin-left: 130px;\r\n}\r\n.getline-img[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n}\r\n.add-line-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-left: 0px;\r\n  margin-right: 130px;\r\n}\r\n.add-line[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:last-of-type{\r\n  margin-top: 25px;\r\n}\r\n.show-more[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  background: #1f373d;\r\n  padding: 30px 70px 30px 55px;\r\n  display: inline-block;\r\n  margin-left: 130px;\r\n  color: white;\r\n  margin-top: 60px;\r\n\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]{\r\n  background:#1f373d ;\r\n  color: white;\r\n  padding-top: 50px;\r\n  padding-bottom: 80px;\r\n}\r\n.footer-block[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.footer-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  font-size: 40px;\r\n}\r\n.footer-search[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{\r\n  width: 442px;\r\n  height: 70px;\r\n  color: #919eb1;\r\n  padding-left: 27px;\r\n  font-size: 15px;\r\n  background-image: url(\"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/34px-Arrow_east.svg.png\");\r\n  background-repeat: no-repeat;\r\n  background-position:94%;\r\n  outline: none;\r\n\r\n}\r\nhr[_ngcontent-%COMP%]{\r\n  opacity: 0.3;\r\n  margin-top: 47px;\r\n  margin-bottom: 70px;\r\n}\r\n.footer-links[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-right: 90px;\r\n}\r\n.footer-link[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.footer-links-logo[_ngcontent-%COMP%]{\r\n  font-size: 25px;\r\n  margin-right: 26%;\r\n}\r\n.footer-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  color:#919eb1;\r\n  margin-bottom: 35px;\r\n}\r\n.footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 13px;\r\n  margin-bottom: 20px;\r\n}\r\n.footer-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  opacity: 0.4;\r\n}\r\n@media only screen and (max-width: 1135px){\r\n\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n\r\n    margin-right: 120px;\r\n  }\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.contacts[_ngcontent-%COMP%]{\r\n    margin-right: 40px;\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 765px){\r\n  .intro[_ngcontent-%COMP%]{\r\n    margin-top: 0px;\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n  intro-img[_ngcontent-%COMP%]{\r\n    background-position: bottom 50px right 570px;\r\n  }\r\n  .intro[_ngcontent-%COMP%]   .intro-text[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-size: 35px;\r\n    left: 15px;\r\n    top:95px;\r\n  }\r\n  .intro[_ngcontent-%COMP%]   .intro-contacts[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    top:-50px;\r\n    padding: 20px 10px;\r\n    right: 0;\r\n  }\r\n  .intro[_ngcontent-%COMP%]   .intro-contacts[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n\r\n  }\r\n  .intro[_ngcontent-%COMP%]   .intro-contacts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    margin-right: 0px;\r\n  }\r\n  .toggle[_ngcontent-%COMP%]{\r\n    clear: both;\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 40px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    color: black;\r\n    background-color:#ffcc01;\r\n    transition: all .1s linear;\r\n  }\r\n  .toggle[_ngcontent-%COMP%]:hover{\r\n    background-color:#d3a900;\r\n  }\r\n  #checkbox-menu[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .toch[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: all .7s linear;\r\n  }\r\n  #checkbox-menu[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   .toch[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n  }\r\n  .menu[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 0px;\r\n    transition: height .3s linear;\r\n  }\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-self: center;\r\n    width: 95%;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n\r\n  }\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 95%;\r\n    text-align: center;\r\n    align-self: center;\r\n    align-content: center;\r\n  }\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    margin-right: 0px;\r\n  }\r\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.contacts[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n  }\r\n  .stats[_ngcontent-%COMP%]{\r\n    margin-top: 0px;\r\n    flex-direction: column;\r\n  }\r\n  .stats-texxt[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n  }\r\n  .stats-texxt[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    margin-bottom: 10px;\r\n  }\r\n  .stats-texxt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n    font-size: 13px;\r\n    line-height: 18px ;\r\n  }\r\n  .square[_ngcontent-%COMP%]{\r\n    height: 140px;\r\n  }\r\n  .cards[_ngcontent-%COMP%]{\r\n    grid-template-columns:repeat(1,1fr);\r\n    grid-template-rows: repeat(6,1fr);\r\n    grid-row-gap: 10px;\r\n    justify-items: center ;\r\n  }\r\n  .apart[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    width: 130px;\r\n  }\r\n  .button-serch[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    margin-left: 4%;\r\n  }\r\n  .all[_ngcontent-%COMP%]{\r\n    margin-left: 0px;\r\n    margin-top: 10px;\r\n  }\r\n  .steps-conainer[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .stepblock[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n  }\r\n  .steps-text[_ngcontent-%COMP%], .steps[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n    margin-bottom: 15px;\r\n  }\r\n  .servecis-container[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    flex-direction: column;\r\n  }\r\n  .services-img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .serv-text[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .cards[_ngcontent-%COMP%]{\r\n    grid-template-columns:repeat(1,1fr);\r\n    grid-template-rows: repeat(6,1fr);\r\n    grid-row-gap: 10px;\r\n    justify-items: center ;\r\n  }\r\n  .apart[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    width: 130px;\r\n  }\r\n  .button-serch[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    margin-left: 4%;\r\n  }\r\n  .all[_ngcontent-%COMP%]{\r\n    margin-left: 0px;\r\n    margin-top: 10px;\r\n  }\r\n  .steps-conainer[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .stepblock[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n  }\r\n  .steps-text[_ngcontent-%COMP%], .steps[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n    margin-bottom: 15px;\r\n  }\r\n  .servecis-container[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    flex-direction: column;\r\n  }\r\n  .services-img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .serv-text[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .services-img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .serv-text[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .agent-cards[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .agent-card[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n  }\r\n  .add-line[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n  }\r\n  .location[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    padding: 15px 10px 18px 11px;\r\n  }\r\n  .location-melbourn[_ngcontent-%COMP%]{\r\n    left: 100px;\r\n    bottom: 50px;\r\n  }\r\n  .location-Urus-Martan[_ngcontent-%COMP%]{\r\n    left: 60px;\r\n    bottom: 50px;\r\n  }\r\n  .add-line[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    margin-top: 75px;\r\n    margin-bottom: 40px;\r\n    margin-left: 5%;\r\n  }\r\n  .add-line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-left: 5%;\r\n  }\r\n  .add-line-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n    margin-right: 0px;\r\n  }\r\n  .show-more[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    padding: 25px 50px 26px 35px;\r\n    margin-left: 15%;\r\n    margin-top: 25px;\r\n  }\r\n  .footer-block[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n  }\r\n  .footer-logo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    text-align: center;\r\n  }\r\n  .footer-search[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 50px;\r\n    margin-top: 15px;\r\n  }\r\n  .footer-search[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n  .footer-links[_ngcontent-%COMP%]{\r\n    flex-wrap: wrap;\r\n    margin-left: 5%;\r\n\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyc3RrYS1hdC92ZXJzdGthLWF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCOztBQUVsQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQSxvQkFBb0I7QUFHcEI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrSUFBa0k7QUFDcEk7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZOztBQUVkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsVUFBVTtFQUNWLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtC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QjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7O0VBRWpCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92ZXJzdGthLWF0L3ZlcnN0a2EtYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuYm9keSwgaHRtbHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbn1cclxuXHJcbm5hdntcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDExNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4jY2hlY2tib3gtbWVudSwudG9nZ2xle1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1lbnV7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4ubWVudSBsaSBhe1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBsaW5lYXI7XHJcbn1cclxuLm1lbnUgbGkgYTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4ubWVudSBsaSBhLmxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIyMHB4O1xyXG59XHJcbi5tZW51IGxpIGEuY29udGFjdHN7XHJcbiAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xyXG59XHJcbi5oZWFkZXJfcHJlbHVkZTExMXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi8q0KHQotCY0JvQmCDQlNCb0K8gMiDQo9Cg0J7QmtCQKi9cclxuXHJcblxyXG4ud3JhcHBlcntcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDExMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaW50cm97XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmludHJvLWltZ3tcclxuICB3aWR0aDogOTY1cHg7XHJcbiAgaGVpZ2h0OiA2NDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8zNjAyMjUyL3BleGVscy1waG90by0zNjAyMjUyLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZoPTc1MCZ3PTEyNjBcIik7XHJcbn1cclxuLmludHJvIC5pbnRyby10ZXh0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDYycHg7XHJcbiAgdG9wOiAyMjBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcbi5pbnRyby1jb250YWN0c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzAxO1xyXG4gIG1heC13aWR0aDogNTkwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDYzNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDMwcHggNTBweDtcclxufVxyXG4uaW50cm8tY29udGFjdHMgaSB7XHJcbiAgY29sb3I6d2hpdGUgO1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG4uaW50cm8tY29udGFjdHMgcHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG5cclxuLyrQodCi0JjQm9CYINCU0JvQryAzINCj0KDQntCa0JAqL1xyXG4uc3RhdHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxMzBweDtcclxufVxyXG4uc3RhdHMtbGluZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5zdGF0cy10ZXh4dHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbi5zdGF0cy10ZXh4dCBoMntcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxufVxyXG4uc3RhdHMtdGV4eHQgcHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMjdweDtcclxufVxyXG4uc3F1YXJle1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY1ZjQ7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zdGF0cy1zcXVhcmV7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiAjZmZjYzAxO1xyXG4gIG1hcmdpbi1ib3R0b206IDEzcHg7XHJcblxyXG59XHJcbi5zdGF0cy10ZXh4dHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcblxyXG4vKtCh0KLQmNCb0Jgg0JTQm9CvIDQg0KPQoNCe0JrQkCovXHJcblxyXG4uY2FyZCBpbWd7XHJcbiAgd2lkdGg6IDM0OHB4O1xyXG4gIGhlaWdodDogMzc5cHg7XHJcbn1cclxuLmFwYXJ0bWVudHN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNDtcclxuICBwYWRkaW5nOiA2MHB4IDBweDtcclxufVxyXG4uYXBhcnQgaDJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogODVweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgbWF4LXdpZHRoOjM0OHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxufVxyXG4uY2FyZC1jb250YWluZXJ7XHJcbiAgcGFkZGluZzogMjVweCA7XHJcbn1cclxuLmNhcmQtaW5mcm97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uY2FyZC1pbmZybyAubW9uZXl7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjZmZjYzAxO1xyXG59XHJcbi5jYXJkLWluZnJvIGkge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5jYXJkLWluZnJvIHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG59XHJcbi5jYXJkOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNmYWZhZjk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSg2MSwgNjEsIDYxLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLmNhcmRze1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgzLDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwxZnIpO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xyXG4gIGdyaWQtcm93LWdhcDogMzBweDtcclxufVxyXG4uYXBhcnQgaW5wdXRbdHlwZT10ZXh0XXtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNC80Yy9TZWFyY2hfTm91bl9wcm9qZWN0XzE1MDI4LnN2Zy8xNnB4LVNlYXJjaF9Ob3VuX3Byb2plY3RfMTUwMjguc3ZnLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDI3cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDYycHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjOTE5ZWIxO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFwYXJ0IGlucHV0W3R5cGU9c3VibWl0XXtcclxuICB3aWR0aDogMTE1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogNzBweDtcclxuICBiYWNrZ3JvdW5kOiNmZmNjMDE7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0Oi00cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG59XHJcbi5hbGx7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDUycHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idXR0b24tc2VyY2h7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuXHJcblxyXG4vKtCh0KLQmNCb0Jgg0JTQm9CvIDUg0KPQoNCe0JrQkCovXHJcblxyXG4uc3RlcHMgaDJ7XHJcbiAgbWFyZ2luLXRvcDogNTVweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG4uc3RlcHMtdGV4dHtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLm1idGV4dHtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG59XHJcbi5zdGVwYmxvY2t7XHJcbiAgd2lkdGg6IDM0MHB4O1xyXG4gIGhlaWdodDogMzcwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zdGVwYmxvY2sgLnN0ZXAtbnVte1xyXG4gIGZvbnQtc2l6ZTogMjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDotMTIwcHg7XHJcbiAgbGVmdDotMzBweDtcclxufVxyXG4uc3RlcGJsb2NrOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmY2MwMTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcclxuXHJcbn1cclxuLnN0ZXBzLWNvbmFpbmVye1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnN0ZXBibG9jayBoNHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnN0ZXBibG9jayBoNCBzcGFue1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uc3RlcGJsb2NrIC5zdGVwLWluZm97XHJcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbn1cclxuLnN0ZXBibG9jayAuc3RlcGluZm9sYXN0e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5zZXJ2aWNlcy1pbWcgaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4vKtCh0KLQmNCb0Jgg0JTQm9CvIDYg0KPQoNCe0JrQkCovXHJcblxyXG4uc2VydmVjaXMtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG4uc2VydmljZXMtaW1ne1xyXG4gIHdpZHRoOiA1OCU7XHJcbn1cclxuLnNlcnYtdGV4dHtcclxuICB3aWR0aDogNDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4uc2Vydi10ZXh0IHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuLnNlcnYtdGV4dCBoMntcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2VydmVjZXMgcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5zZXJ2ZWNlcyBoNHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyrQodCi0JjQm9CYINCU0JvQryA3INCj0KDQntCa0JAqL1xyXG5cclxuXHJcbi5hZ2VudHN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjVmNDtcclxufVxyXG4uYWdlbnRzIGgye1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxufVxyXG4uYWdlbnRzIHAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuXHJcbn1cclxuLmFnZW50cyBwOm50aC1jaGlsZCgzKXtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcbi5hZ2VudC1ibG9ja3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbn1cclxuLnNvY2lhbHtcclxuXHJcbn1cclxuLnNvY2lhbCBpe1xyXG4gIG1hcmdpbi1yaWdodDogMzJweCA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogN3B4O1xyXG5cclxufVxyXG4uYWdlbnQtY2FyZHtcclxuICBtYXgtd2lkdGg6IDM0NHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcblxyXG59XHJcbi5hZ2VudC1jYXJkIGltZ3tcclxuICB3aWR0aDogMzQ0cHg7XHJcbn1cclxuLmFnZW50LWNhcmQ6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyOSwgMjksIDI5LCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuOXM7XHJcbn1cclxuLmFnZW50LWluZm97XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uYWdlbnQtbmFtZXtcclxuICBjb2xvcjogI2ZmY2MwMTtcclxufVxyXG4uYWdlbnQtY2FyZHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDk1cHg7XHJcbn1cclxuXHJcbi8q0KHQotCY0JvQmCDQlNCb0K8gOCDQo9Cg0J7QmtCQKi9cclxuXHJcbi5hZGR7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA5MHB4O1xyXG59XHJcbi5hZGQtbGluZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubG9jYXRpb257XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDMwcHggODdweCAzNXB4IDU1cHggO1xyXG4gIGJhY2tncm91bmQ6ICNmZmNjMDE7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5sb2NhdGlvbiBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDdweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmxvY2F0aW9uLW1lbGJvdXJue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxMDBweDtcclxuICBib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1VcnVzLU1hcnRhbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMjMwcHg7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uYWRkLWxpbmUgaDN7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMTMwcHg7XHJcbn1cclxuLmFkZC1saW5lIHB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMzBweDtcclxufVxyXG5cclxuLmdldGxpbmUtaW1ne1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5hZGQtbGluZS1yaWdodCBwIHtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTMwcHg7XHJcbn1cclxuXHJcbi5hZGQtbGluZSBoMzpsYXN0LW9mLXR5cGV7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uc2hvdy1tb3Jle1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kOiAjMWYzNzNkO1xyXG4gIHBhZGRpbmc6IDMwcHggNzBweCAzMHB4IDU1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuXHJcbn1cclxuXHJcblxyXG4vKtCh0KLQmNCb0Jgg0JTQm9CvIDkg0KPQoNCe0JrQkCovXHJcblxyXG5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDojMWYzNzNkIDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuLmZvb3Rlci1ibG9ja3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZvb3Rlci1ibG9jayBoM3tcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLmZvb3Rlci1zZWFyY2ggaW5wdXRbdHlwZT10ZXh0XXtcclxuICB3aWR0aDogNDQycHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGNvbG9yOiAjOTE5ZWIxO1xyXG4gIHBhZGRpbmctbGVmdDogMjdweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi83LzcxL0Fycm93X2Vhc3Quc3ZnLzM0cHgtQXJyb3dfZWFzdC5zdmcucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjo5NCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbn1cclxuaHJ7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIG1hcmdpbi10b3A6IDQ3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxufVxyXG4uZm9vdGVyLWxpbmtze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XHJcbn1cclxuLmZvb3Rlci1saW5re1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uZm9vdGVyLWxpbmtzLWxvZ297XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjYlO1xyXG59XHJcbi5mb290ZXItbGluayBwIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjojOTE5ZWIxO1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcbi5mb290ZXItbGluayBhe1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rIGE6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMzVweCl7XHJcblxyXG4gIC5tZW51IGxpIGEubG9nbyB7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcclxuICB9XHJcbiAgLm1lbnUgbGkgYS5jb250YWN0c3tcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NXB4KXtcclxuICAuaW50cm97XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaW50cm8taW1ne1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIDUwcHggcmlnaHQgNTcwcHg7XHJcbiAgfVxyXG4gIC5pbnRybyAuaW50cm8tdGV4dHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB0b3A6OTVweDtcclxuICB9XHJcbiAgLmludHJvIC5pbnRyby1jb250YWN0c3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDotNTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAuaW50cm8gLmludHJvLWNvbnRhY3RzIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICB9XHJcbiAgLmludHJvIC5pbnRyby1jb250YWN0cyBwe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC50b2dnbGV7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmY2MwMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xyXG4gIH1cclxuICAudG9nZ2xlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDNhOTAwO1xyXG4gIH1cclxuICAjY2hlY2tib3gtbWVudTpjaGVja2VkICsgbGFiZWwgLnRvY2ggbGl7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuN3MgbGluZWFyO1xyXG4gIH1cclxuICAjY2hlY2tib3gtbWVudTpjaGVja2VkICsgbGFiZWwgLnRvY2h7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuICAubWVudXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzIGxpbmVhcjtcclxuICB9XHJcbiAgLm1lbnUgbGl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gIH1cclxuICAubWVudSBsaSBhIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5tZW51IGxpIGEubG9nbyB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm1lbnUgbGkgYS5jb250YWN0c3tcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAuc3RhdHN7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuc3RhdHMtdGV4eHR7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuc3RhdHMtdGV4eHQgaDJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuc3RhdHMtdGV4eHQgcHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4IDtcclxuICB9XHJcbiAgLnNxdWFyZXtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgfVxyXG4gIC5jYXJkc3tcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMSwxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwxZnIpO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyIDtcclxuICB9XHJcbiAgLmFwYXJ0IGlucHV0W3R5cGU9dGV4dF17XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gIH1cclxuICAuYnV0dG9uLXNlcmNoe1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICB9XHJcbiAgLmFsbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuc3RlcHMtY29uYWluZXJ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3RlcGJsb2Nre1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLnN0ZXBzLXRleHQsLnN0ZXBzIGgye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLnNlcnZlY2lzLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuc2VydmljZXMtaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zZXJ2LXRleHR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNhcmRze1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgxLDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LDFmcik7XHJcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXIgO1xyXG4gIH1cclxuICAuYXBhcnQgaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgfVxyXG4gIC5idXR0b24tc2VyY2h7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gIH1cclxuICAuYWxse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5zdGVwcy1jb25haW5lcntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zdGVwYmxvY2t7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAuc3RlcHMtdGV4dCwuc3RlcHMgaDJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAuc2VydmVjaXMtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5zZXJ2aWNlcy1pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnNlcnYtdGV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuc2VydmljZXMtaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zZXJ2LXRleHR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmFnZW50LWNhcmRze1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmFnZW50LWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuYWRkLWxpbmV7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubG9jYXRpb257XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMThweCAxMXB4O1xyXG4gIH1cclxuICAubG9jYXRpb24tbWVsYm91cm57XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLmxvY2F0aW9uLVVydXMtTWFydGFue1xyXG4gICAgbGVmdDogNjBweDtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLmFkZC1saW5lIGgze1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgfVxyXG4gIC5hZGQtbGluZSBwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICB9XHJcbiAgLmFkZC1saW5lLXJpZ2h0IHB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLnNob3ctbW9yZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDI1cHggNTBweCAyNnB4IDM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgLmZvb3Rlci1ibG9ja3tcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5mb290ZXItbG9nbyBoM3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvb3Rlci1zZWFyY2ggaW5wdXRbdHlwZT10ZXh0XXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuZm9vdGVyLXNlYXJjaHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvb3Rlci1saW5rc3tcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerstkaAtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-verstka-at',
                templateUrl: './verstka-at.component.html',
                styleUrls: ['./verstka-at.component.css']
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

module.exports = __webpack_require__(/*! C:\Users\насир\Desktop\angular\verstka-at\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map