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
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");




var routes = [
    { path: '**', component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  max-width: 100vw;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2Rldi9wZXJzb25hbC1wcm9qZWN0cy9kdWJsaW4tYmlrZXMvbmctZGJpa2VzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

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
        if (!localStorage.getItem('faves'))
            localStorage.setItem('faves', '[]');
        if (!localStorage.getItem('locations'))
            localStorage.setItem('locations', '[]');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/js-marker-clusterer */ "./node_modules/@agm/js-marker-clusterer/index.js");
/* harmony import */ var agm_overlays__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! agm-overlays */ "./node_modules/agm-overlays/index.js");
/* harmony import */ var agm_overlays__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(agm_overlays__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/favourites/favourites.component */ "./src/app/components/favourites/favourites.component.ts");
/* harmony import */ var _components_percentbar_percentbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/percentbar/percentbar.component */ "./src/app/components/percentbar/percentbar.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_custom_marker_custom_marker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/custom-marker/custom-marker.component */ "./src/app/components/custom-marker/custom-marker.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
                _components_info_info_component__WEBPACK_IMPORTED_MODULE_10__["InfoComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_12__["FavouritesComponent"],
                _components_percentbar_percentbar_component__WEBPACK_IMPORTED_MODULE_13__["PercentbarComponent"],
                _components_custom_marker_custom_marker_component__WEBPACK_IMPORTED_MODULE_16__["CustomMarkerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                agm_overlays__WEBPACK_IMPORTED_MODULE_9__["AgmOverlays"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].mapsApiKey
                }),
                _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_8__["AgmJsMarkerClustererModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/custom-marker/custom-marker.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/custom-marker/custom-marker.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  custom-marker works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/custom-marker/custom-marker.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/custom-marker/custom-marker.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLW1hcmtlci9jdXN0b20tbWFya2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/custom-marker/custom-marker.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/custom-marker/custom-marker.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomMarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMarkerComponent", function() { return CustomMarkerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomMarkerComponent = /** @class */ (function () {
    function CustomMarkerComponent() {
    }
    CustomMarkerComponent.prototype.ngOnInit = function () {
    };
    CustomMarkerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-marker',
            template: __webpack_require__(/*! ./custom-marker.component.html */ "./src/app/components/custom-marker/custom-marker.component.html"),
            styles: [__webpack_require__(/*! ./custom-marker.component.scss */ "./src/app/components/custom-marker/custom-marker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomMarkerComponent);
    return CustomMarkerComponent;
}());



/***/ }),

/***/ "./src/app/components/favourites/favourites.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/favourites/favourites.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <section class=\"section\">\n    <div class=\"columns is-centered\">\n        <h3 class=\"is-centered\" *ngIf=\"faves.length < 1\">No favourites saved yet!</h3>\n        <div *ngIf=\"faves.length >= 1\" class=\"column mw\">\n            <h2 class=\"title\">Favourites</h2>\n            <div class=\"table\">\n                <div class=\"thead\">\n                    <div class=\"tr\">\n                        <div class=\"td address\">Address</div>\n                        <div class=\"td\">Status</div>\n                        <div class=\"td\">Card</div>\n                        <div class=\"td\">Bikes</div>\n                        <div class=\"td\">Spaces</div>\n                        <div class=\"td\"></div>\n                    </div>\n                </div>\n                <div class=\"tbody\">\n                <ng-container *ngFor=\"let f of faves; let i = index\">\n                    <div class=\"tr tr-info\">\n                        <div class=\"td text-italics\" (click)=\"sendPanToLocation(f)\">{{ f.address }}</div>\n                        <div class=\"td\">{{ f.status }}</div>\n                        <div class=\"td\"><i class=\"fas fa-thumbs-{{f.banking ? 'up' : 'down'}}\"></i></div>\n                        <div class=\"td\">{{ f.available_bikes }}</div>\n                        <div class=\"td\">{{ f.available_bike_stands }}</div>\n                        <div class=\"td\"><span (click)=\"removeFave(f)\" class=\"remove-fave-btn\"><i class=\"far fa-trash-alt\"></i></span></div>\n                    </div>\n                    <div class=\"tr\">\n                        <span class=\"infobar-row\">\n                            <app-percentbar [h]=\"3\" [bikes]=\"f.available_bikes\" [stands]=\"f.bike_stands\"></app-percentbar>\n                        </span>\n                    </div>\n                </ng-container>\n                </div>\n            </div>\n\n            <!-- <table class=\"table\">\n                <thead>\n                    <tr>\n                        <td>Address</td>\n                        <td>Status</td>\n                        <td>Card</td>\n                        <td>Bikes</td>\n                        <td>Spaces</td>\n                        <td>&nbsp;</td>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngFor=\"let f of faves\">\n                        <tr>\n                            <td (click)=\"sendPanToLocation(f)\" class=\"location-address\">{{ f.address }}</td>\n                            <td>{{ f.status }}</td>\n                            <td><i class=\"fas fa-thumbs-{{f.banking ? 'up' : 'down'}}\"></i></td>\n                            <td>{{ f.available_bikes }}</td>\n                            <td>{{ f.available_bike_stands }}</td>\n                            <td><span (click)=\"removeFave(f)\" class=\"remove-fave-btn\"><i class=\"far fa-trash-alt\"></i></span></td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"6\">\n                                <span class=\"infobar-row\">\n                                    <app-percentbar [h]=\"3\" [bikes]=\"f.available_bikes\" [stands]=\"f.bike_stands\"></app-percentbar>\n                                </span>\n                            </td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n            </table> -->\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/favourites/favourites.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/favourites/favourites.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".remove-fave-btn {\n  padding: 5px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all .2s ease-in-out; }\n  .remove-fave-btn:hover {\n    color: salmon; }\n  .infobar-row {\n  width: 100%;\n  margin-bottom: 20px; }\n  .mw {\n  max-width: 600px; }\n  .fa-thumbs-up {\n  color: lightgreen; }\n  .fa-thumbs-down {\n  color: salmon; }\n  .location-address {\n  cursor: pointer; }\n  .text-italics {\n  font-style: italic; }\n  .table {\n  max-width: 98vw; }\n  .thead {\n  font-weight: bold; }\n  .tr {\n  display: flex;\n  justify-content: space-between; }\n  .tr-info {\n  margin-top: 20px; }\n  .td {\n  width: calc(100%/6); }\n  .td:first-child {\n    cursor: pointer;\n    width: 40%; }\n  @media screen and (max-width: 500px) {\n  .address {\n    display: none; }\n  .location-address {\n    font-style: italic; }\n  .tr {\n    flex-wrap: wrap; }\n  .td:first-child {\n    width: 100%; }\n  .text-italics {\n    text-decoration: underline; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2Rldi9wZXJzb25hbC1wcm9qZWN0cy9kdWJsaW4tYmlrZXMvbmctZGJpa2VzL3NyYy9hcHAvY29tcG9uZW50cy9mYXZvdXJpdGVzL2Zhdm91cml0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiwrQkFBK0IsRUFBQTtFQUpuQztJQU1RLGFBQWEsRUFBQTtFQUlyQjtFQUdJLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxhQUFhLEVBQUE7RUFHakI7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSxrQkFBa0IsRUFBQTtFQUl0QjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QixFQUFBO0VBR2xDO0VBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxtQkFBbUIsRUFBQTtFQUR2QjtJQUdRLGVBQWU7SUFDZixVQUFVLEVBQUE7RUFJbEI7RUFDSTtJQUNJLGFBQWEsRUFBQTtFQUVqQjtJQUNJLGtCQUFrQixFQUFBO0VBRXRCO0lBQ0ksZUFBZSxFQUFBO0VBRW5CO0lBQ0ksV0FBVyxFQUFBO0VBRWY7SUFDSSwwQkFBMEIsRUFBQSxFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmF2b3VyaXRlcy9mYXZvdXJpdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlbW92ZS1mYXZlLWJ0biB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHNhbG1vbjtcbiAgICB9XG59XG5cbi5pbmZvYmFyLXJvdyB7XG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIHRvcDogLTEzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm13IHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4uZmEtdGh1bWJzLXVwIHtcbiAgICBjb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLmZhLXRodW1icy1kb3duIHtcbiAgICBjb2xvcjogc2FsbW9uO1xufVxuXG4ubG9jYXRpb24tYWRkcmVzcyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGV4dC1pdGFsaWNzIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cblxuLnRhYmxlIHtcbiAgICBtYXgtd2lkdGg6IDk4dnc7XG59XG5cbi50aGVhZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50ci1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udGQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUvNik7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLmFkZHJlc3Mge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubG9jYXRpb24tYWRkcmVzcyB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG4gICAgLnRyIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICAudGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnRleHQtaXRhbGljcyB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/favourites/favourites.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/favourites/favourites.component.ts ***!
  \***************************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");



var FavouritesComponent = /** @class */ (function () {
    function FavouritesComponent(storage) {
        this.storage = storage;
        this.favesList = [];
        this.notifyMap = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FavouritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.faves.subscribe(function (faves) {
            _this.favesList = faves;
            if (_this.locationsList)
                _this.faves = _this.locationsList.filter(function (l) { return _this.favesList.indexOf(l.number) >= 0; });
        });
        this.storage.locations.subscribe(function (locations) {
            _this.locationsList = locations;
            _this.faves = locations.filter(function (l) { return _this.favesList.indexOf(l.number) >= 0; });
        });
    };
    FavouritesComponent.prototype.sendPanToLocation = function (location) {
        // console.log(location);
        this.notifyMap.emit(location);
    };
    FavouritesComponent.prototype.removeFave = function (l) {
        if (confirm("Remove from favourites?"))
            this.storage.removeFavourite(l);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FavouritesComponent.prototype, "notifyMap", void 0);
    FavouritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favourites',
            template: __webpack_require__(/*! ./favourites.component.html */ "./src/app/components/favourites/favourites.component.html"),
            styles: [__webpack_require__(/*! ./favourites.component.scss */ "./src/app/components/favourites/favourites.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], FavouritesComponent);
    return FavouritesComponent;
}());



/***/ }),

/***/ "./src/app/components/info/info.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/info/info.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"location\" [ngClass]=\"{'show': location?.number}\" class=\"card info-card\">\n  <div class=\"card-content\">\n    <div class=\"media\">\n      <div class=\"media-content has-text-centered\">\n        <p (click)=\"sendPanToLocation()\" class=\"title is-4\">{{location.address}}</p>\n        <span>\n          <span class=\"location-status\" [ngClass]=\"{'green': location.status === 'OPEN', 'red': location.status !== 'OPEN'}\">{{location.status}}</span>\n          <span class=\"location-status\" [ngClass]=\"{'green': location.banking, 'red': !location.banking}\">{{ location.banking ? 'CARD' : 'CARD' }}</span>\n        </span>\n        <p class=\"subtitle is-6\">\n          <time datetime=\"2016-1-1\">Last updated: {{location.last_update | date: 'h:mm a'}}</time>\n        </p>\n      </div>\n    </div>\n    <a *ngIf=\"!location.fave\" (click)=\"onFaveBtnClick()\" class=\"fave-btn button is-rounded fave-btn is-warning is-notfave\"><i class=\"fas fa-heart\"></i></a>\n    <a *ngIf=\"location.fave\" (click)=\"onFaveRemoveClick()\" class=\"fave-btn button is-rounded fave-btn is-warning\"><i class=\"fas fa-heart\"></i></a>\n    <div class=\"level is-mobile\">\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading\">Bikes</p>\n          <p class=\"title\">{{location.available_bikes}}</p>\n        </div>\n      </div>\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading\">Spaces</p>\n          <p class=\"title\">{{location.available_bike_stands}}</p>\n        </div>\n      </div>\n    </div>\n    <app-percentbar [h]=\"20\" [bikes]=\"location.available_bikes\" [stands]=\"location.bike_stands\"></app-percentbar>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/info/info.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/info/info.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.info-card {\n  position: absolute;\n  bottom: -1000px;\n  transition: all .2s ease-in-out;\n  width: 100%; }\n  div.info-card .card-content {\n    max-width: 400px;\n    margin: 0 auto; }\n  div.info-card.show {\n    bottom: 0px; }\n  .title {\n  margin-bottom: 5px; }\n  .green {\n  background: lightgreen; }\n  .red {\n  background: salmon;\n  text-decoration: line-through; }\n  .location-status {\n  padding: 3px;\n  border-radius: 5px;\n  font-size: 16px;\n  color: #333;\n  margin: 0 5px; }\n  figure {\n  height: 20px;\n  width: 100%;\n  background: salmon; }\n  .fave-btn {\n  position: absolute;\n  right: 10%;\n  top: 20px; }\n  .fave-btn {\n  color: salmon;\n  transition: all .2s ease-in-out; }\n  .fave-btn:hover {\n    color: salmon; }\n  .fave-btn.is-notfave {\n    background: darkgrey;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2Rldi9wZXJzb25hbC1wcm9qZWN0cy9kdWJsaW4tYmlrZXMvbmctZGJpa2VzL3NyYy9hcHAvY29tcG9uZW50cy9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixXQUFXLEVBQUE7RUFKYjtJQU1JLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7RUFQbEI7SUFVSSxXQUFXLEVBQUE7RUFJZjtFQUNFLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0Usc0JBQXNCLEVBQUE7RUFHeEI7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUE7RUFHL0I7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYSxFQUFBO0VBR2Y7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTLEVBQUE7RUFHWDtFQUNFLGFBQWE7RUFDYiwrQkFBK0IsRUFBQTtFQUZqQztJQUlJLGFBQWEsRUFBQTtFQUpqQjtJQU9JLG9CQUFvQjtJQUNwQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5pbmZvLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDEwMCU7XG4gIC5jYXJkLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgJi5zaG93IHtcbiAgICBib3R0b206IDBweDtcbiAgfVxufVxuXG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG59XG5cbi5yZWQge1xuICBiYWNrZ3JvdW5kOiBzYWxtb247XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4ubG9jYXRpb24tc3RhdHVzIHtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbmZpZ3VyZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHNhbG1vbjtcbn1cblxuLmZhdmUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTAlO1xuICB0b3A6IDIwcHg7XG59XG5cbi5mYXZlLWJ0biB7XG4gIGNvbG9yOiBzYWxtb247XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBzYWxtb247XG4gIH1cbiAgJi5pcy1ub3RmYXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JleTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");



var InfoComponent = /** @class */ (function () {
    function InfoComponent(storage) {
        this.storage = storage;
        this.faveLocation = false;
    }
    // TODO: set up the observables here
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.faves.subscribe(function (faves) {
            _this.favesList = faves;
            _this.checkIfFave();
        });
    };
    InfoComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.storage.faves.subscribe(function (faves) {
            _this.favesList = faves;
            _this.checkIfFave();
        });
    };
    InfoComponent.prototype.ngAfterViewInit = function () {
        this.checkIfFave();
    };
    InfoComponent.prototype.onFaveBtnClick = function () {
        this.location.fave = !this.location.fave;
        this.storage.storeFavourite(this.location);
    };
    InfoComponent.prototype.onFaveRemoveClick = function () {
        this.location.fave = !this.location.fave;
        this.storage.removeFavourite(this.location);
    };
    InfoComponent.prototype.checkIfFave = function () {
        if (this.favesList && this.location) {
            this.faveLocation = this.favesList.indexOf(this.location.number) >= 0;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InfoComponent.prototype, "location", void 0);
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/components/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/components/info/info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"coordsLoaded\">\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"16\" [usePanning]=\"true\" (mapClick)=\"mapClick($event)\"\n    (mapReady)=\"mapReady($event)\" (idle)=\"mapIdle($event)\">\n    <agm-marker [latitude]=\"location.coords.latitude\" [longitude]=\"location.coords.longitude\">\n    </agm-marker>\n    <!-- <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\"> -->\n      <!-- <agm-marker *ngFor=\"let loc of locations; let i = index;\" [latitude]=\"loc.position.lat\"\n        [longitude]=\"loc.position.lng\" (markerClick)=\"markerClick($event, loc)\"\n        [label]=\"loc.available_bikes + ' | ' + loc.available_bike_stands\"\n        [iconUrl]=\"loc.available_bikes > 3 ? 'assets/img/icon_green.png' : 'assets/img/icon_red.png'\">\n      </agm-marker> -->\n      <agm-overlay *ngFor=\"let loc of locations; let i = index;\"\n        [latitude]=\"loc.position.lat\"\n        [longitude]=\"loc.position.lng\"\n      >\n          <div [ngStyle]=\"{'background': loc.available_bikes > 3 ? 'lightgreen' : 'salmon' }\" \n          class=\"custom-marker\" (click)=\"markerClick($event, loc)\">\n            <div class=\"marker-info\">\n              <div class=\"bikes\">\n                <span class=\"tiny\"><i class=\"fas fa-bicycle\"></i></span>\n                <span>{{ loc.available_bikes }}</span>\n              </div>\n              <div class=\"spaces\">\n                  <span class=\"tiny\"><i class=\"fas fa-parking\"></i></span>\n                  <span>{{ loc.available_bike_stands }}</span>\n              </div>\n            </div>\n          </div>\n      </agm-overlay>\n    <!-- </agm-marker-cluster> -->\n  </agm-map>\n</div>\n\n<button (click)=\"toggleFaveList()\" class=\"fave-menu-btn button is-primary is-rounded\"> <i class=\"fas fa-list\"></i> </button>\n<app-info [location]=\"selectedLocation\"></app-info>\n<app-favourites (notifyMap)=\"panToLocation($event)\"></app-favourites>"

/***/ }),

/***/ "./src/app/components/map/map.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  margin-top: 52px;\n  height: calc(100vh - 52px); }\n\napp-favourites {\n  z-index: 1000;\n  position: absolute;\n  background: white;\n  width: 90%;\n  right: -100vw;\n  top: 52px;\n  height: calc(100vh - 52px);\n  transition: all .2s ease-in-out; }\n\napp-favourites.open {\n    right: 0; }\n\n@media screen and (max-width: 500px) {\n    app-favourites {\n      display: none; }\n      app-favourites.open {\n        display: block; } }\n\n.fave-menu-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 2000; }\n\n@media screen and (max-width: 500px) {\n  app-favourites {\n    width: 100%; } }\n\n.marker-info > div {\n  display: flex;\n  flex-direction: column; }\n\n.marker-info > div .tiny {\n    font-size: 10px; }\n\n.custom-marker {\n  position: relative;\n  top: -19px;\n  left: -15px;\n  background: salmon;\n  border-radius: 5px;\n  height: 30px;\n  width: 50px;\n  border: 1px solid #666;\n  font-size: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.custom-marker .marker-info {\n    display: flex;\n    justify-content: space-between;\n    padding: 0 3px; }\n\n.custom-marker .marker-info .bikes {\n      width: 50%;\n      text-align: left; }\n\n.custom-marker .marker-info .spaces {\n      width: 50%;\n      text-align: right; }\n\n.custom-marker:after {\n  content: '';\n  position: absolute;\n  bottom: 0px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-top-color: #666;\n  border-bottom: 0;\n  margin-left: -10px;\n  margin-bottom: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2Rldi9wZXJzb25hbC1wcm9qZWN0cy9kdWJsaW4tYmlrZXMvbmctZGJpa2VzL3NyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFVBQVM7RUFDVCxhQUFhO0VBQ2IsU0FBUztFQUNULDBCQUEwQjtFQUMxQiwrQkFBK0IsRUFBQTs7QUFSakM7SUFVSSxRQUFRLEVBQUE7O0FBRVY7SUFaRjtNQWFJLGFBQWEsRUFBQTtNQWJqQjtRQWVNLGNBQWMsRUFBQSxFQUNmOztBQUlMO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUdmO0VBQ0U7SUFDRSxXQUFVLEVBQUEsRUFDWDs7QUFHSDtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFGeEI7SUFJSSxlQUFlLEVBQUE7O0FBS25CO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1osa0JBQWtCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFaekI7SUFjSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGNBQWMsRUFBQTs7QUFoQmxCO01Ba0JNLFVBQVU7TUFDVixnQkFBZ0IsRUFBQTs7QUFuQnRCO01BeUJNLFVBQVU7TUFDVixpQkFBaUIsRUFBQTs7QUFLdkI7RUFDQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDakIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgbWFyZ2luLXRvcDogNTJweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTJweCk7XG59XG5cbmFwcC1mYXZvdXJpdGVzIHtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6OTAlO1xuICByaWdodDogLTEwMHZ3O1xuICB0b3A6IDUycHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUycHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAmLm9wZW4ge1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAmLm9wZW4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG59XG5cbi5mYXZlLW1lbnUtYnRuICB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogMjAwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgYXBwLWZhdm91cml0ZXMge1xuICAgIHdpZHRoOjEwMCU7XG4gIH1cbn1cblxuLm1hcmtlci1pbmZvID5kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAudGlueSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uY3VzdG9tLW1hcmtlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTlweDtcbiAgbGVmdDogLTE1cHg7XG5cdGJhY2tncm91bmQ6IHNhbG1vbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAubWFya2VyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgM3B4O1xuICAgIC5iaWtlcyB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIC8vID5zcGFuOmxhc3QtY2hpbGQge1xuICAgICAgLy8gICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjY2O1xuICAgICAgLy8gfVxuICAgIH1cbiAgICAuc3BhY2VzIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cbn1cblxuLmN1c3RvbS1tYXJrZXI6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDBweDtcblx0bGVmdDogNTAlO1xuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAwO1xuXHRib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci10b3AtY29sb3I6ICM2NjY7XG5cdGJvcmRlci1ib3R0b206IDA7XG5cdG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_bikes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/bikes.service */ "./src/app/services/bikes.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../favourites/favourites.component */ "./src/app/components/favourites/favourites.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");






var MapComponent = /** @class */ (function () {
    function MapComponent(bikes, storage) {
        this.bikes = bikes;
        this.storage = storage;
        this.location = {};
        this.coordsLoaded = false;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bikes.getLocations().subscribe(function (locations) {
            _this.storage.storeLocations(locations);
        });
        this.storage.locations.subscribe(function (l) { return _this.locations = l; });
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (pos) {
                _this.location = pos;
                _this.lat = pos.coords.latitude;
                _this.lng = pos.coords.longitude;
                _this.coordsLoaded = true;
                // console.log('usr location', pos);
            });
        }
        else {
            // console.log('no navigator');
        }
        this.storage.faves.subscribe(function (faves) {
            _this.favesList = faves;
        });
    };
    MapComponent.prototype.panToLocation = function (l) {
        console.log('panToLocation');
        this.markerClick('poop', l);
        this.closeFaveList();
    };
    MapComponent.prototype.formatMarker = function (loc) {
        console.log('formatMarker');
        return loc.available_bikes.toString() + " / " + loc.available_bike_stands.toString();
    };
    MapComponent.prototype.toggleFaveList = function () {
        console.log('toggleFaveList');
        // @ts-ignore
        this.favesEl.nativeElement.classList.toggle('open');
    };
    MapComponent.prototype.closeFaveList = function () {
        console.log('closeFaveList');
        // @ts-ignore
        this.favesEl.nativeElement.classList.remove('open');
    };
    MapComponent.prototype.markerClick = function (e, location) {
        if (e.stopPropagation)
            e.stopPropagation();
        console.log('markerClick', e);
        // @ts-ignore
        this.map.panTo(location.position);
        // @ts-ignore
        this.map.setZoom(17);
        this.selectedLocation = location;
        this.closeFaveList();
    };
    MapComponent.prototype.mapClick = function (e) {
        console.log('mapClick', e);
        // console.log('mapClick', e);
        this.selectedLocation = {};
        this.closeFaveList();
    };
    MapComponent.prototype.mapReady = function (e) {
        console.log('mapReady');
        // console.log('mapReady', e);
        this.map = e;
    };
    MapComponent.prototype.mapIdle = function (e) {
        console.log('mapIdle');
        // console.log('mapIdle', e);
    };
    MapComponent.prototype.overlayClick = function (e, loc) {
        e.stopPropagation();
        console.log('overlayClick', e);
    };
    MapComponent.prototype.percentInset = function (loc) {
        // console.log(loc);
        var percent = ((loc.available_bikes / loc.bike_stands) * 100) / 2;
        return percent.toString();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__["FavouritesComponent"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _favourites_favourites_component__WEBPACK_IMPORTED_MODULE_4__["FavouritesComponent"])
    ], MapComponent.prototype, "favesEl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"])
    ], MapComponent.prototype, "map", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/components/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/components/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_bikes_service__WEBPACK_IMPORTED_MODULE_2__["BikesService"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" routerLink=\"/\">\n      <img src=\"../../../assets/img/dbikes-logo.svg\" alt=\"\">\n      <span> dbikes</span>\n    </a>\n  </div>  \n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleNav = function () {
        this.navBurger.nativeElement.classList.toggle('is-active');
        this.navMenu.nativeElement.classList.toggle('is-active');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navBurger'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavbarComponent.prototype, "navBurger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navMenu'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NavbarComponent.prototype, "navMenu", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/percentbar/percentbar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/percentbar/percentbar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<figure [ngStyle]=\"{'height': ' ' + (h) + 'px'}\">\n  <div style=\"background: lightgreen;\"\n    [ngStyle]=\"{'height': ' ' + (h) + 'px' ,'width': ' '+ (bikes / stands * 100) + '%'}\"></div>\n</figure>"

/***/ }),

/***/ "./src/app/components/percentbar/percentbar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/percentbar/percentbar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "figure {\n  height: 20px;\n  width: 100%;\n  background: salmon; }\n\n.green {\n  background: lightgreen; }\n\n.red {\n  background: salmon; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2Rldi9wZXJzb25hbC1wcm9qZWN0cy9kdWJsaW4tYmlrZXMvbmctZGJpa2VzL3NyYy9hcHAvY29tcG9uZW50cy9wZXJjZW50YmFyL3BlcmNlbnRiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZXJjZW50YmFyL3BlcmNlbnRiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWd1cmUge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBzYWxtb247XG59XG5cbi5ncmVlbiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbiAgfVxuICBcbiAgLnJlZCB7XG4gICAgYmFja2dyb3VuZDogc2FsbW9uO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/percentbar/percentbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/percentbar/percentbar.component.ts ***!
  \***************************************************************/
/*! exports provided: PercentbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentbarComponent", function() { return PercentbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PercentbarComponent = /** @class */ (function () {
    function PercentbarComponent() {
    }
    PercentbarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PercentbarComponent.prototype, "bikes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PercentbarComponent.prototype, "stands", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PercentbarComponent.prototype, "h", void 0);
    PercentbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-percentbar',
            template: __webpack_require__(/*! ./percentbar.component.html */ "./src/app/components/percentbar/percentbar.component.html"),
            styles: [__webpack_require__(/*! ./percentbar.component.scss */ "./src/app/components/percentbar/percentbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PercentbarComponent);
    return PercentbarComponent;
}());



/***/ }),

/***/ "./src/app/services/bikes.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/bikes.service.ts ***!
  \*******************************************/
/*! exports provided: BikesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikesService", function() { return BikesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var BikesService = /** @class */ (function () {
    function BikesService(http) {
        this.http = http;
    }
    BikesService.prototype.getLocations = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].dbikesApiURL);
    };
    BikesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BikesService);
    return BikesService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var StorageService = /** @class */ (function () {
    function StorageService() {
        this.favesSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('faves')) || []);
        this.faves = this.favesSource.asObservable();
        this.locationsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('locations')) || []);
        this.locations = this.locationsSource.asObservable();
    }
    StorageService.prototype.storeLocations = function (locations) {
        var savedFaves = localStorage.getItem('faves');
        var addFave = locations.map(function (l) {
            l.fave = savedFaves.indexOf(l.number) >= 0 ? true : false;
            return l;
        });
        localStorage.setItem('locations', JSON.stringify(addFave));
        this.locationsSource.next(addFave);
    };
    StorageService.prototype.getStoredLocations = function () {
        this.locationsSource.next(JSON.parse(localStorage.getItem('locations')));
    };
    StorageService.prototype.storeFavourite = function (location) {
        if (!localStorage.getItem('faves'))
            localStorage.setItem('faves', '[]');
        var faves = JSON.parse(localStorage.getItem('faves'));
        var locations = JSON.parse(localStorage.getItem('locations'));
        if (faves.indexOf(location.number) < 0) {
            faves.push(location.number);
            localStorage.setItem('faves', JSON.stringify(faves));
            this.storeLocations(locations);
            this.favesSource.next(faves);
        }
    };
    StorageService.prototype.getFavourites = function () {
        this.favesSource.next(JSON.parse(localStorage.getItem('faves')));
    };
    StorageService.prototype.removeFavourite = function (location) {
        var locations = JSON.parse(localStorage.getItem('locations'));
        var faves = JSON.parse(localStorage.getItem('faves'));
        if (faves.indexOf(location.number >= 0)) {
            // console.log(faves, location.number);
            var newFaves = faves.filter(function (n) { return n != location.number; });
            localStorage.setItem('faves', JSON.stringify(newFaves));
            this.storeLocations(locations);
            this.favesSource.next(newFaves);
        }
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
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
    production: false,
    mapsApiKey: 'AIzaSyCpNhCtdttOSDdEYdRxpkF9BXZ9zpP1Rvw',
    dbikesApiURL: 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=ef653629fed566ec812f1444f8bb2b3ddc6e1bbf'
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

module.exports = __webpack_require__(/*! /Users/admin/Desktop/dev/personal-projects/dublin-bikes/ng-dbikes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map