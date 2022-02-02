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
var explore_service_1 = require('./explore.service');
var ExploreSearchFieldComponent = (function () {
    function ExploreSearchFieldComponent(router, exploreService) {
        this.router = router;
        this.exploreService = exploreService;
    }
    ExploreSearchFieldComponent.prototype.onInputBlur = function (target) {
        if (target && target.value != "")
            target.blur();
        this.exploreService.navigate();
    };
    ExploreSearchFieldComponent.prototype.onInput = function (target) {
        if (this.lastTerm === this.exploreService.selectorSearch.search) {
            target.blur();
        }
        this.lastTerm = this.exploreService.selectorSearch.search;
        this.exploreService.reset();
        this.exploreService.query();
    };
    ExploreSearchFieldComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'explore-search-field',
            templateUrl: 'explore-search-field.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, explore_service_1.ExploreService])
    ], ExploreSearchFieldComponent);
    return ExploreSearchFieldComponent;
}());
exports.ExploreSearchFieldComponent = ExploreSearchFieldComponent;
//# sourceMappingURL=explore-search-field.component.js.map