"use strict";
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ApiService = (function () {
    function ApiService() {
    }
    ApiService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map