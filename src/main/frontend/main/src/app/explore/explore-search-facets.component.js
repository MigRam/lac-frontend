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
var explore_service_1 = require('./explore.service');
var ExploreSearchFacetsComponent = (function () {
    function ExploreSearchFacetsComponent(exploreService) {
        this.exploreService = exploreService;
        this._filter = exploreService.facets;
    }
    ExploreSearchFacetsComponent.prototype.name = function (index) {
        return this._filter.name(index);
    };
    Object.defineProperty(ExploreSearchFacetsComponent.prototype, "all", {
        get: function () {
            return this._filter.all;
        },
        enumerable: true,
        configurable: true
    });
    ExploreSearchFacetsComponent.prototype.isShown = function (filterName) {
        return this._filter.isShown(filterName);
    };
    ExploreSearchFacetsComponent.prototype.show = function (filterName) {
        this._filter.show(filterName);
    };
    ExploreSearchFacetsComponent.prototype.hide = function (filterName) {
        this._filter.hide(filterName);
    };
    ExploreSearchFacetsComponent.prototype.toggle = function (filterName) {
        this._filter.toggle(filterName);
    };
    Object.defineProperty(ExploreSearchFacetsComponent.prototype, "filter", {
        get: function () {
            return this._filter.filter;
        },
        enumerable: true,
        configurable: true
    });
    ExploreSearchFacetsComponent.prototype.isChecked = function (filterName, bucket) {
        return this._filter.isChecked(filterName, bucket);
    };
    ExploreSearchFacetsComponent.prototype.has = function (filterName, bucket) {
        if (bucket === void 0) { bucket = undefined; }
        return this._filter.has(filterName, bucket);
    };
    ExploreSearchFacetsComponent.prototype.selectOne = function (filterName, bucket) {
        this._filter.selectOne(filterName, bucket);
        this.exploreService.filter();
    };
    ExploreSearchFacetsComponent.prototype.select = function (filterName, bucket) {
        this._filter.select(filterName, bucket);
        this.exploreService.filter();
    };
    ExploreSearchFacetsComponent.prototype.deselect = function (filterName, bucket) {
        if (filterName === void 0) { filterName = undefined; }
        if (bucket === void 0) { bucket = undefined; }
        this._filter.deselect(filterName, bucket);
        this.exploreService.filter();
    };
    ExploreSearchFacetsComponent.prototype.onSelect = function (checked, filterName, bucket) {
        checked ? this.select(filterName, bucket) : this.deselect(filterName, bucket);
    };
    Object.defineProperty(ExploreSearchFacetsComponent.prototype, "operator", {
        get: function () {
            return this._filter.operator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExploreSearchFacetsComponent.prototype, "active", {
        get: function () {
            return this._filter.active;
        },
        enumerable: true,
        configurable: true
    });
    ExploreSearchFacetsComponent.prototype.isActive = function (filterName) {
        return this._filter.isActive(filterName);
    };
    ExploreSearchFacetsComponent.prototype.onActive = function (filterName) {
        this.isActive(filterName) ? this._filter.setActive(filterName, false) : this._filter.setActive(filterName, true);
    };
    ExploreSearchFacetsComponent.prototype.bucketPage = function (buckets, page) {
        var pageSize = Math.ceil(buckets.length / 3);
        return buckets.slice(page * pageSize, page * pageSize + pageSize);
    };
    ExploreSearchFacetsComponent.prototype.more = function (facetName) {
    };
    ExploreSearchFacetsComponent.prototype.less = function (facetName) {
    };
    ExploreSearchFacetsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'explore-search-facets',
            templateUrl: 'explore-search-facets.component.html'
        }), 
        __metadata('design:paramtypes', [explore_service_1.ExploreService])
    ], ExploreSearchFacetsComponent);
    return ExploreSearchFacetsComponent;
}());
exports.ExploreSearchFacetsComponent = ExploreSearchFacetsComponent;
//# sourceMappingURL=explore-search-facets.component.js.map