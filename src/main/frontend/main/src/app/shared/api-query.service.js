"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var api_1 = require('./api');
var api_service_1 = require('./api.service');
var odata_collection_query_1 = require('./odata/odata-collection-query');
var ApiQueryService = (function (_super) {
    __extends(ApiQueryService, _super);
    function ApiQueryService(http) {
        _super.call(this);
        this.http = http;
    }
    ApiQueryService.prototype.get = function (selector) {
        return this.http.get(api_1.Api.QUERY + selector.toQueryString())
            .map(function (response) { return new odata_collection_query_1.OdataCollectionQuery(response.json()); })
            .catch(this.handleError);
    };
    ApiQueryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiQueryService);
    return ApiQueryService;
}(api_service_1.ApiService));
exports.ApiQueryService = ApiQueryService;
//# sourceMappingURL=api-query.service.js.map