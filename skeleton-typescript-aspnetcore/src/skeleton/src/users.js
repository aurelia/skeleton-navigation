var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var Users = (function () {
        function Users(http) {
            this.http = http;
            this.heading = 'Github Users';
            this.users = [];
            http.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('https://api.github.com/');
            });
        }
        Users.prototype.activate = function () {
            var _this = this;
            return this.http.fetch('users')
                .then(function (response) { return response.json(); })
                .then(function (users) { return _this.users = users; });
        };
        Users = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], Users);
        return Users;
    }());
    exports.Users = Users;
});
//# sourceMappingURL=users.js.map