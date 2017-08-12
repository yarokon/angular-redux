webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".partition { \n  float: left; \n  padding: 20px 50px; \n  width: 50%; \n  box-sizing: border-box;\n}\n\n.partition-filled {\n  background: #CDDC39;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-messages></app-messages>\n\n<div class=\"partition\">\n  <app-todo-list></app-todo-list>\n</div>\n<div class=\"partition partition-filled\">\n  <app-todo-dashboard></app-todo-dashboard>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("../../../../../src/app/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasking_todos_module__ = __webpack_require__("../../../../../src/app/tasking/todos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messaging_messaging_module__ = __webpack_require__("../../../../../src/app/messaging/messaging.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule(ngRedux, devTools) {
        var enhancers = Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["isDevMode"])() ? [devTools.enhancer()] : [];
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_4__store__["b" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_4__store__["a" /* INITIAL_STATE */], [], enhancers);
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_5__tasking_todos_module__["a" /* TodosModule */],
            __WEBPACK_IMPORTED_MODULE_6__messaging_messaging_module__["a" /* MessagingModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["DevToolsExtension"]) === "function" && _b || Object])
], AppModule);

var _a, _b;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/messaging/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DECREMENT; });
var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/messaging/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messages {\r\n  background: #607d8b;\r\n  padding: 20px; \r\n  color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messaging/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"messages\">\n  <button (click)=\"decrement()\">Decrement</button>\n  <button (click)=\"increment()\">Increment</button>\n  New Messages: {{ messaging$ | async }}\n</div>"

/***/ }),

/***/ "../../../../../src/app/messaging/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("../../../../../src/app/messaging/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesComponent = (function () {
    function MessagesComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    MessagesComponent.prototype.increment = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["b" /* INCREMENT */] });
    };
    MessagesComponent.prototype.decrement = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* DECREMENT */] });
    };
    return MessagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], MessagesComponent.prototype, "messaging$", void 0);
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/messaging/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messaging/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _b || Object])
], MessagesComponent);

var _a, _b;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/messaging/messaging.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages_component__ = __webpack_require__("../../../../../src/app/messaging/messages/messages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagingModule = (function () {
    function MessagingModule() {
    }
    return MessagingModule;
}());
MessagingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__messages_messages_component__["a" /* MessagesComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__messages_messages_component__["a" /* MessagesComponent */]],
    })
], MessagingModule);

//# sourceMappingURL=messaging.module.js.map

/***/ }),

/***/ "../../../../../src/app/messaging/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MESSAGING_INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return messaging; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/messaging/actions.ts");

var MESSAGING_INITIAL_STATE = 0;
var MessagingActions = (function () {
    function MessagingActions(state, action) {
        this.state = state;
        this.action = action;
    }
    MessagingActions.prototype.increment = function () {
        return this.state + 1;
    };
    MessagingActions.prototype.decrement = function () {
        return this.state > 0 ? this.state - 1 : 0;
    };
    return MessagingActions;
}());
var messaging = function (state, action) {
    if (state === void 0) { state = 0; }
    var actions = new MessagingActions(state, action);
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* INCREMENT */]:
            return actions.increment();
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* DECREMENT */]:
            return actions.decrement();
        default:
            return state;
    }
};
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/app/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasking_store__ = __webpack_require__("../../../../../src/app/tasking/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messaging_store__ = __webpack_require__("../../../../../src/app/messaging/store.ts");



var INITIAL_STATE = {
    tasking: __WEBPACK_IMPORTED_MODULE_1__tasking_store__["a" /* TASKING_INITIAL_STATE */],
    messaging: __WEBPACK_IMPORTED_MODULE_2__messaging_store__["a" /* MESSAGING_INITIAL_STATE */]
};
var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    tasking: __WEBPACK_IMPORTED_MODULE_1__tasking_store__["b" /* tasking */],
    messaging: __WEBPACK_IMPORTED_MODULE_2__messaging_store__["b" /* messaging */]
});
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/app/tasking/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_TODOS; });
var ADD_TODO = 'ADD_TODO';
var TOGGLE_TODO = 'TOGGLE_TODO';
var REMOVE_TODO = 'REMOVE_TODO';
var CLEAR_TODOS = 'CLEAR_TODOS';
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/tasking/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TASKING_INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tasking; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/tasking/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("../../../../redux/es/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var TASKING_INITIAL_STATE = {
    todos: [],
    lastUpdate: null,
};
var incrementId = (function () {
    var id = 0;
    return function () {
        return ++id;
    };
})();
var ToDoActions = (function () {
    function ToDoActions(state, action) {
        this.state = state;
        this.action = action;
    }
    ToDoActions.prototype.addToDo = function () {
        return {
            id: incrementId(),
            title: this.action.title,
            isCompleted: false
        };
    };
    ToDoActions.prototype.toggleToDo = function () {
        if (this.state.id !== this.action.id) {
            return this.state;
        }
        else {
            return __assign({}, this.state, { isCompleted: !this.state.isCompleted });
        }
    };
    return ToDoActions;
}());
var toDo = function (state, action) {
    if (state === void 0) { state = null; }
    var actions = new ToDoActions(state, action);
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADD_TODO */]:
            return actions.addToDo();
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* TOGGLE_TODO */]:
            return actions.toggleToDo();
        default:
            return state;
    }
};
var ToDosActions = (function () {
    function ToDosActions(state, action) {
        this.state = state;
        this.action = action;
    }
    ToDosActions.prototype.addToDo = function () {
        return this.state.concat([
            toDo(undefined, this.action)
        ]);
    };
    ToDosActions.prototype.toggleToDo = function () {
        var _this = this;
        return this.state.map(function (t) { return toDo(t, _this.action); });
    };
    ToDosActions.prototype.removeToDo = function () {
        var _this = this;
        return this.state.filter(function (t) { return t.id !== _this.action.id; });
    };
    ToDosActions.prototype.clearToDos = function () {
        return [];
    };
    return ToDosActions;
}());
var todos = function (state, action) {
    if (state === void 0) { state = []; }
    var actions = new ToDosActions(state, action);
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADD_TODO */]:
            return actions.addToDo();
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* TOGGLE_TODO */]:
            return actions.toggleToDo();
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* REMOVE_TODO */]:
            return actions.removeToDo();
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* CLEAR_TODOS */]:
            return actions.clearToDos();
        default:
            return state;
    }
};
var lastUpdate = function (state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADD_TODO */]:
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* TOGGLE_TODO */]:
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* REMOVE_TODO */]:
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* CLEAR_TODOS */]:
            return new Date();
        default:
            return state;
    }
};
var tasking = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    todos: todos,
    lastUpdate: lastUpdate
});
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/app/tasking/todo-dashboard/todo-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasking/todo-dashboard/todo-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Dashboard</h1>\n<p>\n  Last Update: {{ lastUpdate$ | async | date:'mediumTime' }}\n</p>\n<p>\n  Total items: {{ (todos$ | async)?.length }}\n</p>\n<p>\n  <button (click)=\"clearTodos()\">Delete All</button>\n</p>"

/***/ }),

/***/ "../../../../../src/app/tasking/todo-dashboard/todo-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("../../../../../src/app/tasking/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoDashboardComponent = (function () {
    function TodoDashboardComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    TodoDashboardComponent.prototype.clearTodos = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["b" /* CLEAR_TODOS */] });
    };
    return TodoDashboardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(function (s) { return s.tasking.todos; }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], TodoDashboardComponent.prototype, "todos$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(function (s) { return s.tasking.lastUpdate; }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], TodoDashboardComponent.prototype, "lastUpdate$", void 0);
TodoDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-todo-dashboard',
        template: __webpack_require__("../../../../../src/app/tasking/todo-dashboard/todo-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tasking/todo-dashboard/todo-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _c || Object])
], TodoDashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=todo-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/tasking/todo-list/todo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".completed { \n  text-decoration: line-through;\n}\n\nul {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\nli {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasking/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>ToDo List</h1>\n\n<input type=\"text\" #title (keyup.enter)=\"onEnter(title)\" autofocus=\"\">\n<button (click)=\"addTodo(title)\">Add</button>\n\n<ul>\n  <li *ngFor=\"let todo of todos$ | async\">\n    <span\n      (click)=\"toggleTodo(todo)\"\n      [class.completed]=\"todo.isCompleted\"\n    >{{ todo.title }}</span> \n    <button (click)=\"removeTodo(todo)\">Remove</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/tasking/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("../../../../../src/app/tasking/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoListComponent = (function () {
    function TodoListComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    TodoListComponent.prototype.addTodo = function (input) {
        var title = input.value.trim();
        if (title) {
            this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["a" /* ADD_TODO */], title: title });
            input.value = '';
            input.focus();
        }
    };
    TodoListComponent.prototype.onEnter = function (input) {
        this.addTodo(input);
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        var id = todo.id;
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["d" /* TOGGLE_TODO */], id: id });
    };
    TodoListComponent.prototype.removeTodo = function (todo) {
        var id = todo.id;
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["c" /* REMOVE_TODO */], id: id });
    };
    return TodoListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(function (s) { return s.tasking.todos; }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], TodoListComponent.prototype, "todos$", void 0);
TodoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-todo-list',
        template: __webpack_require__("../../../../../src/app/tasking/todo-list/todo-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tasking/todo-list/todo-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _b || Object])
], TodoListComponent);

var _a, _b;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/tasking/todos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/tasking/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_dashboard_todo_dashboard_component__ = __webpack_require__("../../../../../src/app/tasking/todo-dashboard/todo-dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TodosModule = (function () {
    function TodosModule() {
    }
    return TodosModule;
}());
TodosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgReduxModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__todo_dashboard_todo_dashboard_component__["a" /* TodoDashboardComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__todo_list_todo_list_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__todo_dashboard_todo_dashboard_component__["a" /* TodoDashboardComponent */]
        ]
    })
], TodosModule);

//# sourceMappingURL=todos.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map