"use strict";
(self["webpackChunkweather_project"] = self["webpackChunkweather_project"] || []).push([["main"],{

/***/ 4050:
/*!*********************************************!*\
  !*** ./src/app/Services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherService": () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class WeatherService {
    constructor(_http) {
        this._http = _http;
        this.listCiudades = [
            {
                Name: "Cancún",
                NameValue: "Canc%C3%BAn"
            },
            {
                Name: "Guadalajara",
                NameValue: "guadalajara"
            },
            {
                Name: "Hermosillo",
                NameValue: "hermosillo"
            },
            {
                Name: "Irapuato",
                NameValue: "irapuato"
            },
            {
                Name: "Mazatlán",
                NameValue: "Mazatl%C3%A1n"
            },
            {
                Name: "Mérida",
                NameValue: "M%C3%A9rida"
            },
            {
                Name: "Mexicali",
                NameValue: "mexicali"
            },
            {
                Name: "Monterrey",
                NameValue: "monterrey"
            },
            {
                Name: "Puerto Vallarta",
                NameValue: "puerto%20vallarta"
            },
            {
                Name: "Saltillo",
                NameValue: "saltillo"
            },
            {
                Name: "Tijuana",
                NameValue: "tijuana"
            }
        ];
    }
    getWeatherData(ciudad, lang) {
        return this._http.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ciudad}/next7days?unitGroup=metric&elements=datetime%2Ctempmax%2Ctempmin%2Ctemp%2Chumidity%2Cprecip%2Cprecipprob%2Cwindspeed%2Cconditions%2Cicon&include=days&key=59A7RJPTJUTLR79VAU6QD6YQH&lang=${lang}&contentType=json`);
    }
    getCiudades() {
        return this.listCiudades;
    }
}
WeatherService.ɵfac = function WeatherService_Factory(t) { return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
WeatherService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherService, factory: WeatherService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index/index.component */ 7479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);

// pages



const routes = [
    { path: "", component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'weather-project';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




// Pages module


class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_2__.PagesModule] }); })();


/***/ }),

/***/ 7479:
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _Services_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/weather.service */ 4050);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function IndexComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", city_r2.NameValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r2.Name);
} }
function IndexComponent_div_19_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/icons/", item_r4.icon, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 5, "Index.labelDate"), ": ", item_r4.datetime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Temp max: ", item_r4.tempmax, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Temp min: ", item_r4.tempmin, "");
} }
function IndexComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16)(11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, IndexComponent_div_19_div_21_Template, 10, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.dataWeather.resolvedAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/icons/", ctx_r1.dataWeather.days[0].icon, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.dataWeather.days[0].conditions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.dataWeather.days[0].temp, "\u00B0c");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 11, "Index.labelWind"), ": ", ctx_r1.dataWeather.days[0].windspeed, " km/h");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 13, "Index.labelPrecip"), ": ", ctx_r1.dataWeather.days[0].precipprob, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 15, "Index.labelHumidity"), ": ", ctx_r1.dataWeather.days[0].humidity, " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.dataWeather.days);
} }
class IndexComponent {
    constructor(translate, _servWeather) {
        this.translate = translate;
        this._servWeather = _servWeather;
        this.spanish = true; // Language variable
        this.mapWeather = new Map(); // Dictionary to save data
        translate.addLangs(['es', 'en']); // languages
        translate.setDefaultLang('es'); // Select spanish as main language
        this.cityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            'dropdownCity': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
        });
    }
    ngOnInit() {
        if (localStorage.length == 0) { // initialize the localstorage
            localStorage.mapW = JSON.stringify(Array.from(this.mapWeather.entries()));
        }
        this.mapWeather = new Map(JSON.parse(localStorage.mapW)); // Assign the local storage to the variable
        this.fillCities(); // fill list of cities  
    }
    // Function to fill data
    fillCities() {
        this.listCities = this._servWeather.getCiudades(); // we call the service to bring the list of citys
    }
    fillWeather(city, lang) {
        // console.log(this.mapWeather.get(city+lang).ConsultTime);
        let dateCompar = new Date();
        if (!this.mapWeather.has(city + lang)) { // check if we have the data before making a request to the API
            this._servWeather.getWeatherData(city, lang).subscribe(// we bring the data of the API
            // we bring the data of the API
            data => {
                let date = new Date();
                this.dateCurrrent = date.getTime();
                this.dataWeather = data; // assign the data to a variable
                let consult = {
                    ValueCity: this.dataWeather,
                    ConsultTime: this.dateCurrrent
                };
                this.mapWeather.set(city + lang, consult); // add the data to the Map
                localStorage.mapW = JSON.stringify(Array.from(this.mapWeather.entries())); // save in localStorage
            }, err => {
                console.log(err);
            });
        }
        else if ((this.mapWeather.get(city + lang).ConsultTime + 600000) < dateCompar.getTime()) { // if time past at least 10 minutes you can get a new value
            this._servWeather.getWeatherData(city, lang).subscribe(// we bring the data of the API
            // we bring the data of the API
            data => {
                let date = new Date();
                this.dateCurrrent = date.getTime();
                this.dataWeather = data; // assign the data to a variable
                let consult = {
                    ValueCity: this.dataWeather,
                    ConsultTime: this.dateCurrrent
                };
                this.mapWeather.delete(city + lang); // delete the previous record
                this.mapWeather.set(city + lang, consult); // add the new data to the Map
                localStorage.mapW = JSON.stringify(Array.from(this.mapWeather.entries())); // save in localStorage
            }, err => {
                console.log(err);
            });
        }
        else {
            this.dataWeather = this.mapWeather.get(city + lang).ValueCity; // assign the vaule of the Map to the variable
        }
    }
    bringWeather() {
        let cityValue = this.cityForm.controls["dropdownCity"].value; // Obtain the vaule
        let lang = this.translate.currentLang; // obtain the lang value
        if (lang == undefined || lang == null) {
            lang = "es";
        }
        this.fillWeather(cityValue, lang); // call the function
    }
    // Function to change language
    useLanguage(lg) {
        let cityValue = this.cityForm.controls["dropdownCity"].value; // obtain de select Value
        this.translate.use(lg); // Change the language
        if (lg == 'es') {
            this.spanish = true;
        }
        else {
            this.spanish = false;
        }
        if (cityValue != "" && cityValue != undefined && cityValue != null) {
            this.fillWeather(cityValue, lg);
        }
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService)); };
IndexComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 20, vars: 13, consts: [[1, "header-container"], [1, "languages"], [3, "click"], [1, "main-content"], ["novalidate", "novalidate", 3, "formGroup"], ["for", "dropdownCity"], ["formControlName", "dropdownCity", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "weather-section", 4, "ngIf"], [3, "ngValue"], [1, "weather-section"], [1, "w-s-city"], [1, "w-s-weather"], [1, "img-content"], ["alt", "", 3, "src"], [1, "w-s-temp"], [1, "w-s-others"], [1, "wind"], [1, "precip"], [1, "humidity"], [1, "w-s-next"], ["class", "next-w-i", 4, "ngFor", "ngForOf"], [1, "next-w-i"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_6_listener() { return ctx.useLanguage("es"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00A0|\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexComponent_Template_a_click_9_listener() { return ctx.useLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section")(12, "div", 3)(13, "form", 4)(14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function IndexComponent_Template_select_change_17_listener() { return ctx.bringWeather(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, IndexComponent_option_18_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, IndexComponent_div_19_Template, 22, 17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 9, "Index.h1Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("idiomSelect", ctx.spanish);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("idiomSelect", !ctx.spanish);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.cityForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "Index.labelCity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listCities);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataWeather);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@font-face {\n  font-family: \"Titilllium\";\n  src: url('TitilliumWeb-Regular.ttf');\n}\n\n\n\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  background-color: #A5C7EE;\n}\nheader[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 1248px;\n  padding: 16px;\n}\nheader[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #fff;\n}\n@media screen and (max-width: 900px) {\n  header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n@media screen and (max-width: 600px) {\n  header[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\nheader[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: auto;\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0;\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .header-container[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #C7EEA5;\n  transition: all 250ms ease-in-out;\n}\nsection[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  max-width: 1248px;\n  padding: 16px;\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 30%;\n  padding: 8px;\n  margin-bottom: 16px;\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  border: solid 2px #A5C7EE;\n  border-radius: 16px;\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {\n  border: solid 2px #A5C7EE;\n}\n@media screen and (max-width: 900px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 8px;\n  border: solid 1px #A5C7EE;\n  border-radius: 8px;\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-city[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 8px;\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n@media screen and (max-width: 900px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 128px;\n  }\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%] {\n    height: 128px;\n    margin-bottom: 8px;\n  }\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%]   .w-s-temp[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n@media screen and (max-width: 900px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%]   .w-s-temp[_ngcontent-%COMP%] {\n    font-size: 2.7rem;\n  }\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%]   .w-s-temp[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n@media screen and (max-width: 900px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%]   .w-s-others[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%]   .w-s-others[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    text-align: center;\n  }\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-weather[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-next[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 8px;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-next[_ngcontent-%COMP%]   .next-w-i[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-next[_ngcontent-%COMP%]   .next-w-i[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-next[_ngcontent-%COMP%]   .next-w-i[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n}\n@media screen and (max-width: 900px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-next[_ngcontent-%COMP%]   .next-w-i[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-next[_ngcontent-%COMP%]   .next-w-i[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 12px;\n    text-align: center;\n  }\n}\n@media screen and (max-width: 600px) {\n  section[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .weather-section[_ngcontent-%COMP%]   .w-s-next[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n}\n.idiomSelect[_ngcontent-%COMP%] {\n  color: #C7EEA5 !important;\n  text-decoration: none;\n  transition: all 250ms ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF92YXJzLnNjc3MiLCJpbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBQTtBQUVBLGtCQUFBO0FBTUE7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0FDTEo7QURTQSxnQkFBQTtBQWtCQSx1QkFBQTtBQUVBLGFBQUE7QUE2QkEsaUJBQUE7QUM1REE7RUFDSSxrQkFBQTtFRDZEQSxhQUFBO0VBQ0Esc0JDN0RjO0VEOERkLDJCQzlEc0I7RUQrRHRCLG1CQy9Ea0M7RUFDbEMsV0FBQTtFQUNBLHlCREpVO0FDZWQ7QUFWSTtFQUNJLGtCQUFBO0VEd0RKLGFBQUE7RUFDQSxtQkN4RGtCO0VEeURsQiw4QkN6RHVCO0VEMER2QixtQkMxRHNDO0VBQ2xDLFdBQUE7RUFDQSxpQkRHSztFQ0ZMLGFBQUE7QUFlUjtBQWJRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFlWjtBRE5JO0VDWEk7SUFJUSxpQkFBQTtFQWlCZDtBQUNGO0FEakJJO0VDTEk7SUFPUSxpQkFBQTtFQW1CZDtBQUNGO0FBakJRO0VBQ0ksa0JBQUE7RUR1Q1IsYUFBQTtFQUNBLG1CQ3ZDc0I7RUR3Q3RCLDhCQ3hDMkI7RUR5QzNCLG1CQ3pDMEM7RUFDbEMsWUFBQTtFQUNBLFdBQUE7QUFzQlo7QUFyQlk7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXVCaEI7QUF0QmdCO0VBQ0ksY0RoQ1A7RUNpQ08saUNBQUE7QUF3QnBCO0FBaEJBO0VBQ0ksa0JBQUE7RURtQkEsYUFBQTtFQUNBLHNCQ25CYztFRG9CZCwyQkNwQnNCO0VEcUJ0QixtQkNyQmtDO0VBQ2xDLFdBQUE7QUFzQko7QUFwQkk7RUFDSSxrQkFBQTtFRGNKLGFBQUE7RUFDQSxzQkNka0I7RURlbEIsMkJDZjBCO0VEZ0IxQixtQkNoQnNDO0VBQ2xDLFdBQUE7RUFDQSxpQkR2Q0s7RUN3Q0wsYUFBQTtBQXlCUjtBQXZCUTtFRFFKLGFBQUE7RUFDQSxzQkNSc0I7RURTdEIsMkJDVDhCO0VEVTlCLHVCQ1YwQztFQUNsQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBNEJaO0FBM0JZO0VBQ0ksa0JBQUE7QUE2QmhCO0FEeEVJO0VDMENRO0lBR1EsZUFBQTtFQStCbEI7QUFDRjtBQTdCWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUErQmhCO0FBOUJnQjtFQUNJLHlCQUFBO0FBZ0NwQjtBRGhGSTtFQytCSTtJQXFCUSxVQUFBO0VBZ0NkO0FBQ0Y7QUQzRkk7RUNxQ0k7SUF3QlEsV0FBQTtFQWtDZDtBQUNGO0FBL0JRO0VEcEJKLGFBQUE7RUFDQSxzQkNvQnNCO0VEbkJ0QiwyQkNtQjhCO0VEbEI5QixtQkNrQjBDO0VBQ2xDLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQW9DWjtBQW5DWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFxQ2hCO0FBbkNZO0VEOUJSLGFBQUE7RUFDQSxtQkM4QjBCO0VEN0IxQiw2QkM2QitCO0VENUIvQixtQkM0QjZDO0VBQ2pDLFdBQUE7QUF3Q2hCO0FBdkNnQjtFRGpDWixhQUFBO0VBQ0Esc0JDaUM4QjtFRGhDOUIsMkJDZ0NzQztFRC9CdEMsbUJDK0JrRDtBQTRDdEQ7QURySEk7RUMwRWdCO0lBRVEsZUFBQTtFQTZDMUI7QUFDRjtBRGhJSTtFQ2dGZ0I7SUFLUSxlQUFBO0VBK0MxQjtBQUNGO0FEcklJO0VDd0ZnQjtJQUVRLGFBQUE7RUErQzFCO0FBQ0Y7QUQxSUk7RUM4RVk7SUFnQlEsYUFBQTtJQUNBLGtCQUFBO0VBZ0R0QjtBQUNGO0FBOUNnQjtFQUNJLGVBQUE7QUFnRHBCO0FEN0lJO0VDNEZZO0lBR08saUJBQUE7RUFrRHJCO0FBQ0Y7QUR4Skk7RUNrR1k7SUFNUSxpQkFBQTtFQW9EdEI7QUFDRjtBRHZKSTtFQ3NHZ0I7SUFFUSxlQUFBO0VBbUQxQjtBQUNGO0FEbEtJO0VDNEdnQjtJQUtRLGVBQUE7SUFDQSxrQkFBQTtFQXFEMUI7QUFDRjtBRHhLSTtFQzJFUTtJRDlCUixhQUFBO0lBQ0Esc0JDeUU4QjtJRHhFOUIsMkJDd0VzQztJRHZFdEMsbUJDdUVrRDtFQXdEcEQ7QUFDRjtBQXREWTtFRDdFUixhQUFBO0VBQ0EsbUJDNkUwQjtFRDVFMUIsOEJDNEUrQjtFRDNFL0IsbUJDMkU4QztFQUNsQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUEyRGhCO0FBMURnQjtFQUNJLFdBQUE7QUE0RHBCO0FENUxJO0VDK0hZO0lEbEZaLGFBQUE7SUFDQSxzQkNvRmtDO0lEbkZsQywyQkNtRjBDO0lEbEYxQyxtQkNrRnNEO0VBaUV4RDtBQUNGO0FEcE1JO0VDb0lnQjtJQUVRLFlBQUE7RUFrRTFCO0FBQ0Y7QURuTUk7RUNvSVk7SUFFUSxlQUFBO0VBaUV0QjtBQUNGO0FEOU1JO0VDMElZO0lBS1EsZUFBQTtJQUNBLGtCQUFBO0VBbUV0QjtBQUNGO0FEcE5JO0VDMEhRO0lEN0VSLGFBQUE7SUFDQSxtQkNzRzhCO0lEckc5Qiw2QkNxR21DO0lEcEduQyxtQkNvR2lEO0VBdUVuRDtBQUNGO0FBaEVBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FBbUVKIiwiZmlsZSI6ImluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PSAgVmFyaWFibGVzIGdsb2JhbGVzICA9PT09PT09PT09ICovXHJcblxyXG4vKi0tLS1Db2xvcmVzLS0tLSovXHJcbiRibHVlLWhlYWRlcjogI0E1QzdFRTtcclxuJHdoaXRlLW5vdGk6ICNDN0VFQTU7XHJcblxyXG4vLyBGb250XHJcbi8vIC0tLS0tXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxsaXVtJztcclxuICAgIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udC9UaXRpbGxpdW1XZWItUmVndWxhci50dGYnKTtcclxufVxyXG5cclxuXHJcbi8qIFNpemVzIG1lZGlhICovXHJcbiR3b3JrLXNwYWNlOiAxMjQ4cHg7XHJcbiRtb2JpbGU6IDYwMHB4O1xyXG4kdGFibGV0OiA5MDBweDtcclxuXHJcbkBtaXhpbiBtb2JpbGUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIC0tLS1GdW5jdGlvbnMtLS0tICAqL1xyXG5cclxuLyogUG9zaXRpb24gKi9cclxuJHBvc2l0aW9uLWRlZmF1bHQ6IG51bGwgIWRlZmF1bHQ7XHJcblxyXG5AbWl4aW4gcG9zaXRpb24oJHR5cGUsICR0b3A6ICRwb3NpdGlvbi1kZWZhdWx0LCAkcmlnaHQ6ICRwb3NpdGlvbi1kZWZhdWx0LCAkYm90dG9tOiAkcG9zaXRpb24tZGVmYXVsdCwgJGxlZnQ6ICRwb3NpdGlvbi1kZWZhdWx0KSB7XHJcbiAgICBwb3NpdGlvbjogJHR5cGU7XHJcbiAgICAkYWxsb3dlZF90eXBlczogYWJzb2x1dGUgcmVsYXRpdmUgZml4ZWQ7XHJcbiAgICBAaWYgbm90IGluZGV4KCRhbGxvd2VkX3R5cGVzLCAkdHlwZSkge1xyXG4gICAgICAgIEB3YXJuIFwiVW5rbm93biBwb3NpdGlvbjogI3skdHlwZX0uXCI7XHJcbiAgICB9XHJcbiAgICBAZWFjaCAkZGF0YSBpbiB0b3AgJHRvcCxcclxuICAgIHJpZ2h0ICRyaWdodCxcclxuICAgIGJvdHRvbSAkYm90dG9tLFxyXG4gICAgbGVmdCAkbGVmdCB7XHJcbiAgICAgICAgI3tudGgoJGRhdGEsIDEpfTogbnRoKCRkYXRhLCAyKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGFic29sdXRlKCR0b3A6ICRwb3NpdGlvbi1kZWZhdWx0LCAkcmlnaHQ6ICRwb3NpdGlvbi1kZWZhdWx0LCAkYm90dG9tOiAkcG9zaXRpb24tZGVmYXVsdCwgJGxlZnQ6ICRwb3NpdGlvbi1kZWZhdWx0KSB7XHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwgJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCk7XHJcbn1cclxuXHJcbkBtaXhpbiByZWxhdGl2ZSgkdG9wOiAkcG9zaXRpb24tZGVmYXVsdCwgJHJpZ2h0OiAkcG9zaXRpb24tZGVmYXVsdCwgJGJvdHRvbTogJHBvc2l0aW9uLWRlZmF1bHQsICRsZWZ0OiAkcG9zaXRpb24tZGVmYXVsdCkge1xyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24ocmVsYXRpdmUsICR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpO1xyXG59XHJcblxyXG5AbWl4aW4gZml4ZWQoJHRvcDogJHBvc2l0aW9uLWRlZmF1bHQsICRyaWdodDogJHBvc2l0aW9uLWRlZmF1bHQsICRib3R0b206ICRwb3NpdGlvbi1kZWZhdWx0LCAkbGVmdDogJHBvc2l0aW9uLWRlZmF1bHQpIHtcclxuICAgIEBpbmNsdWRlIHBvc2l0aW9uKGZpeGVkLCAkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KTtcclxufVxyXG5cclxuLyogRGlzcGxheSBmbGV4ICovXHJcbkBtaXhpbiBmbGV4KCRmbGV4LWRpcjogcm93LCAkanVzdGlmeTogZmxleC1zdGFydCwgJGFsaWduOiBmbGV4LXN0YXJ0KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICRmbGV4LWRpcjtcclxuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3ZhcnNcIjtcclxuXHJcbi8vIEhlYWRlciBjbGFzcyBhbmQgaGlzIGNvbnRlbnRcclxuaGVhZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIGNlbnRlcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWhlYWRlcjtcclxuICAgIC5oZWFkZXItY29udGFpbmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgc3BhY2UtYmV0d2VlbiwgY2VudGVyKTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6ICR3b3JrLXNwYWNlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGFibGV0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYW5ndWFnZXMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBzcGFjZS1iZXR3ZWVuLCBjZW50ZXIpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtbm90aTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1haW4gc2VjdGlvbiBhbmQgaGlzIGNvbnRlbnRcclxuc2VjdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBmbGV4LXN0YXJ0LCBjZW50ZXIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLm1haW4tY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIGNlbnRlcik7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAkd29yay1zcGFjZTtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4ICRibHVlLWhlYWRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLXZpc2libGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4ICRibHVlLWhlYWRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndlYXRoZXItc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBmbGV4LXN0YXJ0LCBjZW50ZXIpO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkYmx1ZS1oZWFkZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgLnctcy1jaXR5IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudy1zLXdlYXRoZXJ7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgc3BhY2UtYXJvdW5kLCBjZW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAuaW1nLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIGNlbnRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnctcy10ZW1wIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnctcy1vdGhlcnMge1xyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxleChjb2x1bW4sIGZsZXgtc3RhcnQsIGNlbnRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnctcy1uZXh0IHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBzcGFjZS1iZXR3ZWVuLCBjZW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAubmV4dC13LWkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgoY29sdW1uLCBmbGV4LXN0YXJ0LCBjZW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5leHQtdy1pIGRpdiA+IHAge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBmbGV4KHJvdywgc3BhY2UtZXZlbmx5LCBjZW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDbGFzcyB3aGVuIGNoYW5nZSB0aGUgbGFuZ3VhZ2VcclxuLmlkaW9tU2VsZWN0IHtcclxuICAgIGNvbG9yOiAkd2hpdGUtbm90aSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ 7479);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);


// Component

// Module y Loaders para traducciones





// AoT requires an exported function for factories (Funcion para mandar llamar al archivo del lenguaje)
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient]
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map