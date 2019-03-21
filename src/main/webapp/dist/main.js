(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/home/home.component */ "./src/app/view/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _view_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'home',
        component: _view_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#buttons{\r\n    /* width: 200px;\r\n    height: 100%; */\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 30px;\r\n    background-color: #006699;\r\n    color: cornsilk;\r\n    /* transform: translate(100%,0); */\r\n    /* transition: all 2s; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtvQkFDZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMseUJBQXlCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnV0dG9uc3tcclxuICAgIC8qIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTAwJTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2OTk7XHJcbiAgICBjb2xvcjogY29ybnNpbGs7XHJcbiAgICAvKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLDApOyAqL1xyXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDJzOyAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>this is rootComponent</h1> -->\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.show = function () {
        this.aside.showAside();
    };
    AppComponent.prototype.hide = function () {
        this.aside.hideAside();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('aside'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "aside", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _view_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/home/home.component */ "./src/app/view/home/home.component.ts");
/* harmony import */ var _view_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/header/header.component */ "./src/app/view/header/header.component.ts");
/* harmony import */ var _view_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/footer/footer.component */ "./src/app/view/footer/footer.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _view_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _view_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _view_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/view/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/view/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/view/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center text-muted yp-4\">\n    <section>\n        <a href=\"https://www.baidu.com\" target=\"_blank\" class=\"btn\">\n            <img src=\"../../../assets/image/baidu.png\" width=\"20\" height=\"20\" class=\"d-inline-block align-top\" alt=\"\">\n        </a>\n        <a href=\"https://www.google.com\" target=\"_blank\" class=\"btn\">\n            <img src=\"../../../assets/image/google.png\" width=\"20\" height=\"20\" class=\"d-inline-block align-top\" alt=\"\">\n        </a>\n    </section>\n    Sunziyue@live.com\n</footer>"

/***/ }),

/***/ "./src/app/view/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/view/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/view/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/view/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/view/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/view/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"../../../assets/image/logo.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n        <strong class=\"ml-2 h4\">Account</strong>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Link</a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Dropdown\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav my-2 my-lg-0\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0)\">注册</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0)\">登录</a>\n            </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n            <input (blur)=\"showPlaceholder()\" (focus)=\"hidePlaceholder()\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"{{placeholder}}\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">搜索</button>\n        </form>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/view/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/view/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.placeholder = '请输入搜索内容';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.showPlaceholder = function () {
        this.placeholder = '请输入搜索内容';
    };
    HeaderComponent.prototype.hidePlaceholder = function () {
        this.placeholder = '';
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/view/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/view/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/view/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/view/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/view/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <app-header></app-header>\r\n    <div class=\"jumbotron\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <h1 class=\"display-4 text-center\">{{time}},朋友!</h1>\r\n                <p class=\"lead text-center\">\r\n                    道路千万条, 安全第一条, 行车不规范, 亲人泪两行.\r\n                </p>\r\n                <hr class=\"my-3\">\r\n                <div class=\"card text-center\">\r\n                    <div class=\"card-header\">\r\n                        社区公告\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Special title treatment</h5>\r\n                        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\r\n                        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n                    </div>\r\n                    <div class=\"card-footer text-muted\">\r\n                        2019年3月22日\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div id=\"carouselExampleIndicators\" class=\"carousel slide col-md-7\" data-ride=\"carousel\">\r\n                <ol class=\"carousel-indicators\">\r\n                    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n                    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n                </ol>\r\n                <div class=\"carousel-inner\">\r\n                    <div class=\"carousel-item active\">\r\n                        <a href=\"#\"><img class=\"rounded d-block w-100\" src=\"./assets/image/selectLikeMe.jpg\" alt=\"First slide\"></a>\r\n                        <div class=\"carousel-caption d-none d-md-block\">\r\n                            <h5>标题</h5>\r\n                            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"carousel-item\">\r\n                        <a href=\"#\"><img class=\"rounded d-block w-100\" src=\"./assets/image/sourceCode.jpg\" alt=\"Second slide\"></a>\r\n                        <div class=\"carousel-caption d-none d-md-block\">\r\n                            <h5>标题</h5>\r\n                            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n                <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<main>\r\n    <section class=\"py-5\">\r\n        <h2 class=\"text-center mb-5\">隔壁老王独自衰伤</h2>\r\n        <div class=\"container\">\r\n            <div class=\"mb-5 row\">\r\n                <div class=\"col-md-9\">\r\n                    <h3>勇者斗恶龙建造者</h3>\r\n                    <p>日本知名游戏厂商SE社正式宣布将面向平台推出《勇者斗恶龙：建造者》游戏，风格为方块建筑RPG。初代《勇者斗恶龙 创造者》于NS上推出，本作2018年春发售。《勇者斗恶龙:建造者》和《勇者斗恶龙:建造者2》的NS版，在西方市场由任天堂发行。</p>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <img src=\"./assets/image/dq-builders.jpg\" class=\"w-100\">\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-5 row\">\r\n                <div class=\"col-md-9 order-md-2\">\r\n                    <h3>塞尔达传说之黄昏公主</h3>\r\n                    <p>《塞尔达传说 黄昏公主》（ゼルダの伝说 トワイライトプリンセス，The Legend of Zelda: Twilight Princess）是由任天堂情报开发本部制作、任天堂发行的动作冒险游戏。2006年11月9日首发登陆Wii和NGC，Wii首发作品。双平台合计销量达到885万套以上，是系列目前为止销量最高作。《塞尔达传说：黄昏公主HD》2016年3月10日登陆WiiU平台。</p>\r\n                </div>\r\n                <div class=\"col-md-3 order-md-1\">\r\n                    <img src=\"./assets/image/zdtp.jpg\" class=\"w-100\">\r\n                </div>\r\n            </div>\r\n            <div class=\"mb-5 row\">\r\n                <div class=\"col-md-9\">\r\n                    <h3>讨鬼传2</h3>\r\n                    <p>《讨鬼传2》是由KOEI TECMO公司开发的一款动作游戏，于2016年7月28日发行。在吸收了《讨鬼传》优势内容的基础上，增加了诸多提升游戏爽快度的要素。游戏风格也转变成为开放世界形式，且能无缝进入战斗。</p>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <img src=\"./assets/image/tkd2.jpg\" class=\"w-100\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n    <section class=\"bg-light text-center py-5\">\r\n        <h2 class=\"text-center mb-5\">今后计划</h2>\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th>\r\n                        <a href=\"JavaScript(0)\" data-toggle=\"modal\" data-target=\"#exampleModal\">技术视频</a>\r\n                    </th>\r\n                    <th>游戏视频</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr>\r\n                    <td>Angular</td>\r\n                    <td>地下城与勇士</td>\r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n                <tr>\r\n                    <td>Bootstrap</td>\r\n                    <td>英雄联盟</td>\r\n                </tr>\r\n            </tfoot>\r\n        </table>\r\n    </section>\r\n\r\n    <section class=\"py-5\">\r\n        <h2 class=\"text-center\">我爱NBA</h2>\r\n        <div class=\"container\">\r\n            <ul class=\"nav nav-tabs\">\r\n                <li class=\"nav-item\">\r\n                    <a href=\"#east\" class=\"nav-link active\" data-toggle=\"tab\">东部(East)</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"#west\" class=\"nav-link\" data-toggle=\"tab\">西部(West)</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content py-3\">\r\n                <div id=\"east\" class=\"tab-pane active\">\r\n                    <p>2018年东部冠军是凯尔特人还是骑士？不会是猛龙吧？</p>\r\n                </div>\r\n                <div id=\"west\" class=\"tab-pane\">\r\n                    <p>西部冠军肯定是勇士了，不过火箭今天也很不错。</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section>\r\n        <!-- Modal -->\r\n        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        ...\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n\r\n</main>\r\n<footer>\r\n    <app-footer></app-footer>\r\n</footer>"

/***/ }),

/***/ "./src/app/view/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/view/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.timer();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.timer = function () {
        var hours = new Date().getHours();
        console.log(hours);
        if (hours < 11) {
            this.time = '上午好';
        }
        else if (hours > 13) {
            this.time = '下午好';
        }
        else {
            this.time = '中午好';
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/view/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/view/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Account-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map