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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/forkJoin');
var api_object_service_1 = require('../shared/api-object.service');
var api_query_service_1 = require('../shared/api-query.service');
var api_selector_object_1 = require('../shared/api-selector-object');
var api_selector_query_1 = require('../shared/api-selector-query');
var explore_facets_1 = require('./explore-facets');
var ExploreService = (function () {
    function ExploreService(router, apiObjectService, apiQueryService) {
        var _this = this;
        this.router = router;
        this.apiObjectService = apiObjectService;
        this.apiQueryService = apiQueryService;
        this.navigateInternal = false;
        this.facets = new explore_facets_1.ExploreFacets();
        this.selectorSearch = new api_selector_query_1.ApiSelectorQuery();
        this.selectorSearch.facets = this.facets.toSelector();
        this.selectorFilter = new api_selector_query_1.ApiSelectorQuery();
        this.selectorFilter.autocomplete = true;
        this.selectorFilter.count = true;
        this.selectorFilter.highlight = true;
        this.selectorFilter.facets = this.facets.toSelector();
        this.selectorObject = new api_selector_object_1.ApiSelectorObject();
        this.selectorObject.expand = ["parentOf"];
        this.selectorParentObject = new api_selector_object_1.ApiSelectorObject();
        this.selectorParentObject.expand = ["parentOf"];
        this.selectorParentQuery = new api_selector_query_1.ApiSelectorQuery();
        this.selectorParentObjects = new api_selector_object_1.ApiSelectorObject();
        this.router.events.subscribe(function (event) {
            _this.query();
        });
    }
    ExploreService.prototype.isHit = function () {
        return this.selectorFilter.top === 1;
    };
    ExploreService.prototype.isHits = function () {
        return !this.isHit();
    };
    ExploreService.prototype.isMedia = function () {
        return this._showMedia;
    };
    ExploreService.prototype.showMedia = function (entity) {
        this.odataEntityMedia = entity;
        this._showMedia = true;
    };
    ExploreService.prototype.hideMedia = function () {
        this.odataEntityMedia = null;
        this._showMedia = false;
    };
    ExploreService.prototype.reset = function () {
        this.selectorFilter.skip = 0;
        this.selectorFilter.top = 10;
        this.odataObject = null;
        this.odataParentObject = null;
        this.odataParentQuery = null;
        this.odataParentObjects = null;
    };
    ExploreService.prototype.query = function () {
        var _this = this;
        this.odataObject = null;
        this.odataParentObject = null;
        this.odataParentQuery = null;
        this.odataParentObjects = null;
        Observable_1.Observable.forkJoin(this.apiQueryService.get(this.selectorFilter), this.apiQueryService.get(this.selectorSearch)).subscribe(function (odatas) {
            _this.odataFilter = odatas[0];
            _this.odataSearch = odatas[1];
        }, function (errors) {
            _this.apiError = errors[0] || "";
            _this.apiError += errors[1];
        }, function () {
            if (!_this.odataFilter.value[0])
                return;
            var id = _this.odataFilter.value[0].id[0];
            _this.selectorParentObjects.filter = ["parentOf", "eq", id];
            if (_this.selectorFilter.top === 1) {
                _this.object(id);
                _this.parentObjects();
            }
            _this.facets.compile(_this.odataFilter, _this.odataSearch);
        });
    };
    ExploreService.prototype.filter = function () {
        var ands = [];
        for (var i in this.facets.all) {
            var facet = this.facets.all[i];
            var ors = [];
            if (this.facets.has(facet)) {
                var op1 = this.facets.operator[i] === true ? " eq " : " ne ";
                var op2 = this.facets.operator[i] === true ? " or " : " and ";
                for (var _i = 0, _a = this.facets.filter[i]; _i < _a.length; _i++) {
                    var j = _a[_i];
                    ors.push(facet + op1 + "\"" + j + "\"");
                }
                if (ors.length > 0)
                    ands.push("(" + ors.join(op2) + ")");
            }
        }
        this.selectorFilter.filter = null;
        this.selectorFilter.filter = ands.length > 0 ? ands.join(" and ") : null;
        this.reset();
        this.query();
        this.navigate();
    };
    ExploreService.prototype.navigate = function () {
        var _this = this;
        this.navigateInternal = true;
        this.router.navigate(["explore", this.selectorFilter.search || "*", this.selectorFilter.skip,
            this.selectorFilter.top]).then(function () {
            _this.navigateInternal = false;
        });
    };
    ExploreService.prototype.object = function (objectId) {
        var _this = this;
        this.apiObjectService.object(objectId, this.selectorObject).subscribe(function (odata) { return _this.odataObject = odata; }, function (error) { return _this.apiError = error; });
    };
    ExploreService.prototype.parentObjects = function () {
        var _this = this;
        this.apiObjectService.objects(this.selectorParentObjects).subscribe(function (odata) { return _this.odataParentObjects = odata; }, function (error) { return _this.apiError = error; }, function () {
            if (!_this.odataParentObjects.value[0])
                return;
            var id = _this.odataParentObjects.value[0].id;
            _this.parentObject(id);
            _this.parentQuery(id);
        });
    };
    ExploreService.prototype.parentObject = function (objectId) {
        var _this = this;
        this.apiObjectService.object(objectId, this.selectorParentObject).subscribe(function (odata) { return _this.odataParentObject = odata; }, function (error) { return _this.apiError = error; });
    };
    ExploreService.prototype.parentQuery = function (objectId) {
        var _this = this;
        this.selectorParentQuery.filter = ["id", "eq", objectId];
        this.apiQueryService.get(this.selectorParentQuery).subscribe(function (odata) { return _this.odataParentQuery = odata; }, function (error) { return _this.apiError = error; });
    };
    ExploreService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, api_object_service_1.ApiObjectService, api_query_service_1.ApiQueryService])
    ], ExploreService);
    return ExploreService;
}());
exports.ExploreService = ExploreService;
//# sourceMappingURL=explore.service.js.map