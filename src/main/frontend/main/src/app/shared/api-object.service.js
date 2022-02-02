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
var odata_collection_object_1 = require('./odata/odata-collection-object');
var odata_entity_object_1 = require('./odata/odata-entity-object');
var ApiObjectService = (function (_super) {
    __extends(ApiObjectService, _super);
    function ApiObjectService(http) {
        _super.call(this);
        this.http = http;
    }
    ApiObjectService.prototype.object = function (id, selector) {
        return this.http.get(api_1.Api.OBJECT + "/Object(" + id + ")" + selector.toQueryString())
            .map(function (response) { return new odata_entity_object_1.OdataEntityObject(response.json()); })
            .catch(this.handleError);
    };
    ApiObjectService.prototype.objects = function (selector) {
        return this.http.get(api_1.Api.OBJECT + "/Objects" + selector.toQueryString())
            .map(function (response) { return new odata_collection_object_1.OdataCollectionObject(response.json()); })
            .catch(this.handleError);
    };
    ApiObjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiObjectService);
    return ApiObjectService;
}(api_service_1.ApiService));
exports.ApiObjectService = ApiObjectService;
//# sourceMappingURL=api-object.service.js.map