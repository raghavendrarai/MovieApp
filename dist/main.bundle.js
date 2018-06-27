webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: "\n\t<div class=\"container\">\n\t\t<div class=\"row\"><a [routerLink]=\"['']\"><div class=\"col-md-4\"><h1>Movies</h1></div></a></div>\n\t\t<router-outlet></router-outlet>\n\t\t<div class=\"row footer\"><div class=\"col-md-12\">Movie Application<br/>abcd@example.com</div></div>\n\t</div>\n  ",
            styles: ["\n\ta {\n\t\ttext-decoration:none;\n\t\tcolor:black;\n\t}\n\t.footer{\n\t\tfont-size:0.7em;\n\t\tbackground-color:black;\n\t\tcolor:white;\n\t}\n  "]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movie_list_component__ = __webpack_require__("./src/app/movie.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__movie_detail_component__ = __webpack_require__("./src/app/movie.detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__movie_list_component__["a" /* MovieListComponent */] },
    { path: 'home/:genre', component: __WEBPACK_IMPORTED_MODULE_5__movie_list_component__["a" /* MovieListComponent */] },
    { path: 'search/:id', component: __WEBPACK_IMPORTED_MODULE_6__movie_detail_component__["a" /* MovieDetailComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__movie_list_component__["a" /* MovieListComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true }), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__movie_list_component__["a" /* MovieListComponent */], __WEBPACK_IMPORTED_MODULE_6__movie_detail_component__["a" /* MovieDetailComponent */], __WEBPACK_IMPORTED_MODULE_7__filter_pipe__["a" /* FilterPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, name, genre) {
        if (!items)
            return [];
        if (!name && !genre)
            return items;
        if (!genre)
            return items.filter(function (it) {
                return it.name.toLowerCase().includes(name);
            });
        if (!name)
            return items.filter(function (it) {
                return it.genres.includes(genre);
            });
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(name) && it.genres.includes(genre);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/movie-detail-component.css":
/***/ (function(module, exports) {

module.exports = ".genres{\r\n\ttext-transform: capitalize;\r\n\tborder:1px solid #e2e2e2;\r\n\tborder-radius:10px;\r\n\tmargin: 0 0.3%;\r\n\tpadding: 0 1%;\r\n}\r\n.info{\t\t\r\n\tfont-size: 0.8em;\r\n}\r\n.rating-text{\r\n\tdisplay:inline-block;\r\n}\r\n.rating-fill{\r\n\twidth:50%;\r\n\tborder:1px solid #111;\r\n\tborder-radius:10px;\r\n\tdisplay:inline-block;\r\n\tmargin: 0 2%;\r\n}\r\n.rating-fill > div {\r\n\theight:100%;\r\n\tbackground-color:orange;\r\n\tborder-radius:10px;\r\n}\r\n.description,.info{\r\n\tpadding:0 3%;\r\n}\r\n.description{\r\n\tpadding:3% 3%;\r\n}\r\n.go-back{\t\r\n\tfont-size: 0.8em;\r\n\tcursor:pointer;\r\n}\r\na {\r\n\ttext-decoration:none;\r\n\tcolor:black;\r\n}"

/***/ }),

/***/ "./src/app/movie-detail-component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details cover-container d-flex w-75 h-50 p-3 mx-auto flex-column\">\r\n\t\t<div>\r\n\t\t\t<span class=\"go-back\" (click)=\"goBack()\">Go back</span>\r\n\t\t\t<h1>{{data.name}}</h1>\r\n\t\t\t<a [routerLink]=\"['/home', genre]\" *ngFor = \"let genre of data.genres\"> <span class=\"genres\"> {{genre}} </span></a>\r\n\t\t</div>\r\n\t\t<div class=\"card mb-4 box-shadow\">\r\n\t\t\t<img class=\"card-img-top w-50 mx-auto\" src=\"assets/images/movie-covers/{{ data.img }}\">\t\t\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"row info\">\r\n\t\t\t\t\t<div class=\"col-md-6 row\">\r\n\t\t\t\t\t\t<div class=\"rating-text\">Ratings </div>\r\n\t\t\t\t\t\t<div class=\"rating-fill box-sizing\"><div [ngStyle]=\"{'width': getPercentage(data.rate) + '%'}\"></div></div>\r\n\t\t\t\t\t\t<span> {{data.rate }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6\">Duration : {{data.length }} </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row description\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<div class=\"row\"><h6>Description : </h6></div>\r\n\t\t\t\t\t\t<div class=\"row\">{{ data.description }}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>"

/***/ }),

/***/ "./src/app/movie-list-component.css":
/***/ (function(module, exports) {

module.exports = ".genres{\t\r\n\ttext-transform: capitalize;\r\n}\r\n.genres:after{\r\n\tcontent:',';\r\n}\r\n.genres:last-child:after{\r\n\tcontent:'';\r\n}\r\na {\r\n\ttext-decoration:none;\r\n\tcolor:black;\r\n}\r\n.list-item{\r\n\tposition:relative;\t\t\r\n\ttext-align: center;\r\n}\r\n.tool-tip{\r\n\tposition:absolute;\r\n\twidth:75%;\r\n\tleft:56%;\r\n\ttop:50%;\r\n\t-webkit-transform:translate(-50%,-50%);\r\n\t        transform:translate(-50%,-50%);\r\n\tbackground: rgba(0,0,0,0.5);\r\n\tcolor: white;\r\n\tfont-size:0.8em;\r\n\tpadding:0 1%;\r\n\tdisplay:none;\r\n}\r\n.list-item:hover .tool-tip{\r\n\tdisplay:block;\r\n}\r\nselect {\r\n\ttext-transform: capitalize;\r\n}\r\n.no-data{\r\n\ttext-align:center;\r\n\tmargin:20% 0;\r\n}"

/***/ }),

/***/ "./src/app/movie-list-component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\"></div>\r\n\t\t<div class=\"navbar navbar-default\">\r\n\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t<div class=\"container-fluid navbar-header row\">\r\n\t\t\t\t\t<div class=\"col-md-4 form-group\">Search : <input [(ngModel)] = \"searchName\" placeholder=\"Enter movie name\"/></div>\r\n\t\t\t\t\t<div class=\"col-md-4 form-group\">Select Genre\r\n\t\t\t\t\t\t<select [(ngModel)] = \"searchGenre\" [value]=\"searchGenre\">\r\n\t\t\t\t\t\t\t<option value=\"\">All</option>\r\n\t\t\t\t\t\t\t<option *ngFor = \"let genre of genres\" [value]=\"genre\">{{ genre }}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div *ngFor=\"let movie of movieList | filter : searchName : searchGenre\" class=\"col-md-3 card mb-4 box-shadow list-item\">\r\n\t\t\t\t\t<a [routerLink]=\"['/search', movie.id]\">\r\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"assets/images/movie-covers/{{ movie.img }}\" alt=\"{{movie.key}}\">\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"card-body\">{{ movie.name }}</div>\r\n\t\t\t\t\t\t<div class=\"tool-tip row\">\r\n\t\t\t\t\t\t\t<span class=\"\">Duration : {{movie.length}} </span><br/>\r\n\t\t\t\t\t\t\t<span class=\"\">Rating : {{movie.rate}} </span><br/>\r\n\t\t\t\t\t\t\t<span class=\"\"><span class=\"genres\" *ngFor = \"let genre of movie.genres\"> {{genre}} </span> </span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"no-data col-md-12\" *ngIf=\"(movieList | filter : searchName : searchGenre).length === 0\">No Matching Movies...!</div>\r\n\t\t\t</div>\r\n\t\t</div>"

/***/ }),

/***/ "./src/app/movie.detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_mock_data__ = __webpack_require__("./src/app/movie.mock-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, location) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.route.params.subscribe(function (params) {
            _this.data = __WEBPACK_IMPORTED_MODULE_3__movie_mock_data__["a" /* movies */].filter(function (m) { return m.id == params.id; })[0];
        });
    }
    ;
    MovieDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    MovieDetailComponent.prototype.getPercentage = function (value) {
        return value * 10;
    };
    MovieDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'movie-detail',
            template: __webpack_require__("./src/app/movie-detail-component.html"),
            styles: [__webpack_require__("./src/app/movie-detail-component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());

;


/***/ }),

/***/ "./src/app/movie.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_mock_data__ = __webpack_require__("./src/app/movie.mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_model__ = __webpack_require__("./src/app/movie.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(route) {
        var _this = this;
        this.route = route;
        this.movieList = __WEBPACK_IMPORTED_MODULE_2__movie_mock_data__["a" /* movies */].sort(function (a, b) {
            var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
        this.genres = Object.keys(__WEBPACK_IMPORTED_MODULE_3__movie_model__["a" /* genreType */]);
        this.route.params.subscribe(function (params) {
            if (!params.genre)
                _this.searchGenre = "";
            else
                _this.searchGenre = params.genre;
        });
    }
    ;
    MovieListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'movie-list',
            template: __webpack_require__("./src/app/movie-list-component.html"),
            styles: [__webpack_require__("./src/app/movie-list-component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/movie.mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return movies; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movie_model__ = __webpack_require__("./src/app/movie.model.ts");

var movies = [
    {
        id: 1,
        key: "deadpool",
        name: "Deadpool",
        description: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy],
        rate: "8.6",
        length: "1hr 48mins",
        img: "deadpool.jpg"
    },
    {
        id: 2,
        key: "we-are-the-millers",
        name: "We're the Millers",
        description: "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime],
        rate: "7.0",
        length: "1hr 50mins",
        img: "we-are-the-millers.jpg"
    },
    {
        id: 3,
        key: "straight-outta-compton",
        name: "Straight Outta Compton",
        description: "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].history],
        rate: "8.0",
        length: "2hr 27mins",
        img: "straight-outta-compton.jpg"
    },
    {
        id: 4,
        key: "gridiron-gang",
        name: "Gridiron Gang",
        description: "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].sport],
        rate: "6.9",
        length: "2hr 5mins",
        img: "gridiron-gang.jpg"
    },
    {
        id: 5,
        key: "american-gangster",
        name: "American Gangster",
        description: "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "7.8",
        length: "2hr 37mins",
        img: "american-gangster.jpg"
    },
    {
        id: 6,
        key: "gangster-squad",
        name: "Gangster Squad",
        description: "It's 1949 Los Angeles, the city is run by gangsters and a malicious mobster, Mickey Cohen. Determined to end the corruption, John O'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "6.8",
        length: "1hr 53mins",
        img: "gangster-squad.jpg"
    },
    {
        id: 7,
        key: "now-you-see-me",
        name: "Now You See Me",
        description: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].mystery, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.3",
        length: "1hr 55mins",
        img: "now-you-see-me.jpg"
    },
    {
        id: 8,
        key: "jurassic-world",
        name: "Jurassic World",
        description: "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].scifi],
        rate: "7.1",
        length: "2hr 4mins",
        img: "jurassic-world.jpg"
    },
    {
        id: 9,
        key: "mission-impossible-rogue-nation",
        name: "Mission: Impossible: Rogue Nation",
        description: "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.5",
        length: "2hr 11mins",
        img: "mission-impossible-rogue-nation.jpg"
    },
    {
        id: 10,
        key: "the-man-from-uncle",
        name: "The Man from U.N.C.L.E.",
        description: "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.3",
        length: "1hr 56mins",
        img: "the-man-from-uncle.jpg"
    },
    {
        id: 10,
        key: "spectre",
        name: "Spectre",
        description: "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "6.9",
        length: "2hr 28mins",
        img: "spectre.jpg"
    },
    {
        id: 11,
        key: "legend",
        name: "Legend",
        description: "The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British history, and their organised crime empire in the East End of London during the 1960s.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "7.0",
        length: "2hr 28mins",
        img: "legend.jpg"
    },
    {
        id: 12,
        key: "southpaw",
        name: "Southpaw",
        description: "Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].sport],
        rate: "7.5",
        length: "2hr 4mins",
        img: "southpaw.jpg"
    },
    {
        id: 13,
        key: "bridge-of-spies",
        name: "Bridge of Spies",
        description: "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].biography, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.7",
        length: "2hr 22mins",
        img: "bridge-of-spies.jpg"
    },
    {
        id: 14,
        key: "ant-man",
        name: "Ant-Man",
        description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].adventure, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].scifi],
        rate: "7.4",
        length: "1hr 57mins",
        img: "ant-man.jpg"
    },
    {
        id: 15,
        key: "fast-and-furious-7",
        name: "Fast & Furious 7",
        description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "7.3",
        length: "2hr 17mins",
        img: "fast-and-furious-7.jpg"
    },
    {
        id: 16,
        key: "tracers",
        name: "Tracers",
        description: "Wanted by the Chinese mafia, a New York City bike messenger escapes into the world of parkour after meeting a beautiful stranger.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "5.6",
        length: "1hr 34mins",
        img: "tracers.jpg"
    },
    {
        id: 17,
        key: "running-scared",
        name: "Running Scared",
        description: "A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "7.4",
        length: "2hr 2mins",
        img: "running-scared.jpg"
    },
    {
        id: 18,
        key: "the-hangover",
        name: "The Hangover",
        description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy],
        rate: "7.8",
        length: "1hr 40mins",
        img: "the-hangover.jpg"
    },
    {
        id: 19,
        key: "project-x",
        name: "Project X",
        description: "3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime],
        rate: "6.7",
        length: "1hr 28mins",
        img: "project-x.jpg"
    },
    {
        id: 20,
        key: "the-dark-knight",
        name: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].drama],
        rate: "9.0",
        length: "2hr 32mins",
        img: "the-dark-knight.jpg"
    },
    {
        id: 21,
        key: "the-tournament",
        name: "The Tournament",
        description: "Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world's deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].thriller],
        rate: "6.1",
        length: "1hr 35mins",
        img: "the-tournament.jpg"
    },
    {
        id: 22,
        key: "the-matrix",
        name: "The Matrix",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].scifi],
        rate: "8.7",
        length: "2hr 16mins",
        img: "the-matrix.jpg"
    },
    {
        id: 23,
        key: "bad-boys",
        name: "Bad Boys",
        description: "Two hip detectives protect a murder witness while investigating a case of stolen heroin.",
        genres: [__WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].action, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].comedy, __WEBPACK_IMPORTED_MODULE_0__movie_model__["a" /* genreType */].crime],
        rate: "6.8",
        length: "1hr 59mins",
        img: "bad-boys.jpg"
    }
];


/***/ }),

/***/ "./src/app/movie.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return genreType; });
/* unused harmony export Movie */
var genreType = {
    action: "action",
    adventure: "adventure",
    biography: "biography",
    comedy: "comedy",
    crime: "crime",
    drama: "drama",
    history: "history",
    mystery: "mystery",
    scifi: "scifi",
    sport: "sport",
    thriller: "thriller"
};
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());

;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map