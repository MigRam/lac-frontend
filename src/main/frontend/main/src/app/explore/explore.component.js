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
var ExploreComponent = (function () {
    function ExploreComponent(route, router, exploreService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.exploreService = exploreService;
        this.router.events.subscribe(function (event) {
            if (_this.exploreService.navigateInternal !== true && event instanceof router_1.NavigationEnd) {
                _this.parseParams();
                _this.exploreService.query();
            }
        });
    }
    ExploreComponent.prototype.parseParams = function () {
        var search = this.route.snapshot.params["search"];
        var filter = this.route.snapshot.params["filter"];
        var skip = this.route.snapshot.params["skip"];
        var top = this.route.snapshot.params["top"];
        this.exploreService.selectorSearch.search = (search === undefined || search === "*") ? null : search;
        this.exploreService.selectorFilter.search = (search === undefined || search === "*") ? null : search;
        this.exploreService.selectorSearch.filter = null;
        this.exploreService.selectorFilter.filter = null;
        this.exploreService.selectorSearch.skip = skip === undefined ? 0 : +skip;
        this.exploreService.selectorFilter.skip = skip == undefined ? 0 : +skip;
        this.exploreService.selectorSearch.top = top === undefined ? 10 : +top;
        this.exploreService.selectorFilter.top = top === undefined ? 10 : +top;
    };
    ExploreComponent.prototype.ngOnInit = function () {
        this.parseParams();
        this.exploreService.query();
    };
    ExploreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'explore',
            templateUrl: 'explore.component.html',
            styleUrls: ['explore.component.css'],
            providers: [explore_service_1.ExploreService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, explore_service_1.ExploreService])
    ], ExploreComponent);
    return ExploreComponent;
}());
exports.ExploreComponent = ExploreComponent;
//# sourceMappingURL=explore.component.js.map