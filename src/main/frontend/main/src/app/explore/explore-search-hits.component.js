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
var ExploreSearchHitsComponent = (function () {
    function ExploreSearchHitsComponent(exploreService) {
        this.exploreService = exploreService;
    }
    ExploreSearchHitsComponent.prototype.showHit = function (skip) {
        this.exploreService.selectorFilter.skip = skip;
        this.exploreService.selectorFilter.top = 1;
        this.exploreService.query();
        this.exploreService.navigate();
    };
    ExploreSearchHitsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'explore-search-hits',
            templateUrl: 'explore-search-hits.component.html'
        }), 
        __metadata('design:paramtypes', [explore_service_1.ExploreService])
    ], ExploreSearchHitsComponent);
    return ExploreSearchHitsComponent;
}());
exports.ExploreSearchHitsComponent = ExploreSearchHitsComponent;
//# sourceMappingURL=explore-search-hits.component.js.map