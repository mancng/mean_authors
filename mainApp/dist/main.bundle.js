webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#border{\n    padding: 20px;\n    border: 1px solid black;\n    width: 300px;\n}\n\n#cancelBtn{\n    border: 1px solid black;\n    font-size: 9pt;\n    text-decoration: none;\n    border-radius: 5px;\n    padding: 1px 10px;\n    color: black;\n    font-family: sans-serif;\n    margin-right: 5px;\n}\n\ninput[type=submit]{\n    border: 1px solid black;\n    border-radius: 5px;\n    font-family: sans-serif;\n    padding: 1px 10px;\n    font-size: 9pt;\n}\n\n#textField{\n    margin-top: 8px;\n    margin-bottom: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Home</a>\n<h4>Add a new author:</h4>\n<div id=\"border\">\n  <form (submit)=\"addTask()\">\n    <span>Name:</span><br>\n    <input id=\"textField\" type=\"text\" name=\"authorName\" [(ngModel)]=\"authorName\"/><br>\n    <a id=\"cancelBtn\" [routerLink]=\"['/']\">Cancel</a>\n    <input type=\"submit\" value=\"Add Author\"/>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add/add.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AddComponent = /** @class */ (function () {
    function AddComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newAuthor = { name: "" };
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.addTask = function () {
        var _this = this;
        this._httpService.createAuthor({ name: this.authorName })
            .subscribe(function (responseData) {
            if (responseData.errors) {
                console.log('errors', responseData);
            }
            else {
                console.log('success!', responseData);
                _this._router.navigate(['/home']);
            }
        });
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            template: __webpack_require__("../../../../../src/app/add/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var add_component_1 = __webpack_require__("../../../../../src/app/add/add.component.ts");
var edit_component_1 = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'add', component: add_component_1.AddComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'delete/:id', redirectTo: '/home' },
    { path: '', pathMatch: 'full', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Favorite authors</h1>\n\n<router-outlet></router-outlet>\n\n<!-- <a [routerLink]=\"['/add']\">Add an author</a>\n\n<h4>We have quotes by:</h4>\n\n<table>\n  <tr>\n    <th>Author</th>\n    <th>Actions available</th>\n  </tr>\n  <tr *ngFor=\"let x of authors\">\n    <td>{{x.name}}</td>\n    <td><a (click)=\"getSigleAuthor()\" [routerLink]=\"['/edit', x._id]\">Edit</a> | <a (click)=\"deleteAuthor()\">Delete</a></td>\n  </tr>\n</table> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var show_all_component_1 = __webpack_require__("../../../../../src/app/show-all/show-all.component.ts");
var edit_component_1 = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
var add_component_1 = __webpack_require__("../../../../../src/app/add/add.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                show_all_component_1.ShowAllComponent,
                edit_component_1.EditComponent,
                add_component_1.AddComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#border{\n    padding: 20px;\n    border: 1px solid black;\n    width: 300px;\n}\n\n#cancelBtn{\n    border: 1px solid black;\n    font-size: 9pt;\n    text-decoration: none;\n    border-radius: 5px;\n    padding: 1px 10px;\n    color: black;\n    font-family: sans-serif;\n    margin-right: 5px;\n}\n\ninput[type=submit]{\n    border: 1px solid black;\n    border-radius: 5px;\n    font-family: sans-serif;\n    padding: 1px 10px;\n    font-size: 9pt;\n}\n\n#textField{\n    margin-top: 8px;\n    margin-bottom: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Home</a>\n<h4>Edit author:</h4>\n<div id=\"border\">\n  <form (submit)=\"onSubmit()\">\n    <span>Name:</span><br>\n    <input id=\"textField\" type=\"text\" name=\"authorName\" [(ngModel)]=\"authorName\" /><br>\n    <a id=\"cancelBtn\" [routerLink]=\"['/home']\">Cancel</a>\n    <input type=\"submit\" value=\"Edit Author\"/>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var EditComponent = /** @class */ (function () {
    function EditComponent(_route, _httpService, _router) {
        this._route = _route;
        this._httpService = _httpService;
        this._router = _router;
        this.authorToEdit = { _id: "", name: "", createdAt: "", updatedAt: "" };
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this._httpService.getSingleAuthor(params.get('id'))
                .subscribe(function (responseData) {
                _this.authorToEdit = responseData;
                _this.authorName = _this.authorToEdit.name;
                _this.authorId = _this.authorToEdit._id;
            });
        });
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        var toEdit = { name: this.authorName };
        this._httpService.updateSingleAuthor(this.authorId, toEdit)
            .subscribe(function (responseData) {
            console.log(responseData);
            _this._router.navigate(['/home']);
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, http_service_1.HttpService, router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table, th, td {\n    border: 1px solid black;\n    border-collapse: collapse;\n    text-align: center;\n    padding: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/add']\">Add an author</a>\n\n<h4>We have quotes by:</h4>\n\n<table>\n  <tr>\n    <th>Author</th>\n    <th>Actions available</th>\n  </tr>\n  <tr *ngFor=\"let x of authors\">\n    <td>{{x.name}}</td>\n    <td><a [routerLink]=\"['/edit', x._id]\">Edit</a> | \n      <a (click)=\"deleteAuthor(x._id)\">Delete</a></td>\n  </tr>\n</table>\n\n<router-outlet></router-outlet>\n\n\n<!-- <a [routerLink]=\"['/delete', x._id]\">Delete</a> -->\n<!-- <a (click)=\"deleteAuthor(x._id)\">Delete</a> -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var http_service_1 = __webpack_require__("../../../../../src/app/http.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, _httpService) {
        this._route = _route;
        this._httpService = _httpService;
        this.authors = [];
        this.oneAuthor = { name: "" };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAuthorsFromService();
    };
    HomeComponent.prototype.getAuthorsFromService = function () {
        var _this = this;
        var observable = this._httpService.getAuthors();
        observable.subscribe(function (data) {
            _this.authors = data;
        });
    };
    HomeComponent.prototype.deleteAuthor = function (id) {
        var _this = this;
        console.log(id);
        this._httpService.deleteSingleAuthor(id)
            .subscribe(function (responseData) {
            console.log(responseData);
            _this._route.navigate(['/home']);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, http_service_1.HttpService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAuthors = function () {
        return this._http.get('/api/authors');
    };
    HttpService.prototype.getSingleAuthor = function (id) {
        return this._http.get("/api/edit/" + id);
    };
    HttpService.prototype.createAuthor = function (newAuthor) {
        return this._http.post('/api/new', newAuthor);
    };
    HttpService.prototype.updateSingleAuthor = function (id, theAuthor) {
        return this._http.put("/api/edit/" + id, theAuthor);
    };
    HttpService.prototype.deleteSingleAuthor = function (id) {
        return this._http.delete("/api/edit/" + id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "../../../../../src/app/show-all/show-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show-all/show-all.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  show-all works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/show-all/show-all.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ShowAllComponent = /** @class */ (function () {
    function ShowAllComponent() {
    }
    ShowAllComponent.prototype.ngOnInit = function () {
    };
    ShowAllComponent = __decorate([
        core_1.Component({
            selector: 'app-show-all',
            template: __webpack_require__("../../../../../src/app/show-all/show-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/show-all/show-all.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowAllComponent);
    return ShowAllComponent;
}());
exports.ShowAllComponent = ShowAllComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map