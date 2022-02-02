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
var platform_browser_1 = require('@angular/platform-browser');
var api_1 = require('../shared/api');
var explore_service_1 = require('./explore.service');
var odata_entity_object_1 = require("../shared/odata/odata-entity-object");
var ExploreMediaComponent = (function () {
    function ExploreMediaComponent(domSanitizer, exploreService) {
        this.domSanitizer = domSanitizer;
        this.exploreService = exploreService;
        this.display = "";
    }
    ExploreMediaComponent.prototype.close = function () {
        this.exploreService.hideMedia();
    };
    ExploreMediaComponent.prototype.type = function () {
        return this.odata.contentType;
    };
    ExploreMediaComponent.prototype.src = function () {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(api_1.Api.MEDIA + "/" + this.odata.id);
    };
    ExploreMediaComponent.prototype.isAudio = function () {
        return this.odata.contentType && this.odata.contentType.startsWith("audio/");
    };
    ExploreMediaComponent.prototype.isImage = function () {
        return this.odata.contentType && this.odata.contentType.startsWith("image/");
    };
    ExploreMediaComponent.prototype.isPdf = function () {
        return this.odata.contentType && this.odata.contentType.startsWith("application/pdf");
    };
    ExploreMediaComponent.prototype.isVideo = function () {
        return this.odata.contentType && this.odata.contentType.startsWith("video/");
    };
    ExploreMediaComponent.prototype.isText = function () {
        return this.odata.contentType && this.odata.contentType.startsWith("text/");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', odata_entity_object_1.OdataEntityObject)
    ], ExploreMediaComponent.prototype, "odata", void 0);
    ExploreMediaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'explore-media',
            templateUrl: 'explore-media.component.html',
            styleUrls: ['explore-media.component.css']
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer, explore_service_1.ExploreService])
    ], ExploreMediaComponent);
    return ExploreMediaComponent;
}());
exports.ExploreMediaComponent = ExploreMediaComponent;
//# sourceMappingURL=explore-media.component.js.map