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
var api_1 = require('../shared/api');
var explore_service_1 = require('./explore.service');
var ExploreSearchHitComponent = (function () {
    function ExploreSearchHitComponent(exploreService) {
        this.exploreService = exploreService;
    }
    ExploreSearchHitComponent.prototype.thumbnailMediaReadLink = function (entity) {
        if (!entity || !entity.contentType)
            return null;
        if (entity.contentType.startsWith("image")) {
            return api_1.Api.MEDIA + "/" + entity.id + "/full/full/,126/0/none/default.jpg";
        }
        else if (entity.contentType.startsWith("video")) {
            return api_1.Api.MEDIA + "/" + entity.id + "/10,0/full/,126/0/thumbnail/default.jpg";
        }
        else if (entity.contentType.startsWith("audio")) {
            return api_1.Api.MEDIA + "/" + entity.id + "/10,1/full/126,126/0/waveform/default.png";
        }
        return null;
    };
    ExploreSearchHitComponent.prototype.isLastHit = function () {
        var hit = this.exploreService.selectorFilter.skip;
        return hit + 1 >= this.exploreService.odataFilter.odataCount;
    };
    ExploreSearchHitComponent.prototype.isFirstHit = function () {
        var hit = this.exploreService.selectorFilter.skip;
        return hit <= 0;
    };
    ExploreSearchHitComponent.prototype.nextHit = function () {
        var hit = this.exploreService.selectorFilter.skip;
        hit = this.isLastHit() ? hit : (hit + 1);
        this.exploreService.selectorFilter.skip = hit;
        this.exploreService.query();
        this.exploreService.navigate();
    };
    ExploreSearchHitComponent.prototype.previousHit = function () {
        var hit = this.exploreService.selectorFilter.skip;
        hit = this.isFirstHit() ? hit : (hit - 1);
        this.exploreService.selectorFilter.skip = hit;
        this.exploreService.query();
        this.exploreService.navigate();
    };
    ExploreSearchHitComponent.prototype.mediaReadLink = function (entity) {
        return entity.id ? api_1.Api.MEDIA + "/" + entity.id : null;
    };
    ExploreSearchHitComponent.prototype.isAnnotation = function (entity) {
        return entity && entity.fileUri && entity.fileUri.endsWith(".eaf");
    };
    ExploreSearchHitComponent.prototype.isAudio = function (entity) {
        return entity && entity.contentType && entity.contentType.startsWith("audio");
    };
    ExploreSearchHitComponent.prototype.isVideo = function (entity) {
        return entity && entity.contentType && entity.contentType.startsWith("video");
    };
    ExploreSearchHitComponent.prototype.isImage = function (entity) {
        return entity && entity.contentType && entity.contentType.startsWith("image");
    };
    ExploreSearchHitComponent.prototype.isFile = function (entity) {
        return !this.isAudio(entity) && !this.isVideo(entity) && !this.isImage(entity);
    };
    ExploreSearchHitComponent.prototype.parentOf = function () {
        var pp = [];
        for (var _i = 0, _a = this.exploreService.odataParentObject.parentOf; _i < _a.length; _i++) {
            var p = _a[_i];
            pp.push(p.label || "?");
        }
        return pp.sort();
    };
    ExploreSearchHitComponent.prototype.close = function () {
        this.exploreService.selectorFilter.skip = 0;
        this.exploreService.selectorFilter.top = 10;
        this.exploreService.query();
        this.exploreService.navigate();
    };
    ExploreSearchHitComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'explore-search-hit',
            templateUrl: 'explore-search-hit.component.html'
        }), 
        __metadata('design:paramtypes', [explore_service_1.ExploreService])
    ], ExploreSearchHitComponent);
    return ExploreSearchHitComponent;
}());
exports.ExploreSearchHitComponent = ExploreSearchHitComponent;
//# sourceMappingURL=explore-search-hit.component.js.map