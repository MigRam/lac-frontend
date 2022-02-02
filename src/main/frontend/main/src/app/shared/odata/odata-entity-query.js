"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var odata_entity_1 = require('./odata-entity');
var OdataEntityQuery = (function (_super) {
    __extends(OdataEntityQuery, _super);
    function OdataEntityQuery(entity) {
        _super.call(this, entity);
        this.a5Highlight = [];
        this.a5Orderby = [];
        for (var field in entity["@a5.highlight"]) {
            this.a5Highlight.push({ fieldName: field, matched: entity["@a5.highlight"][field] });
        }
        this.a5Orderby = entity["@a5.orderby"];
        this.id = entity.id;
        this.Type = entity.Type;
        this.Title = entity.Title;
        this.Country = entity.Country;
        this.Region = entity.Region;
        this.Description = entity.Description;
        this.Keywords = entity.Keywords;
        this.ProjectDisplayName = entity.ProjectDisplayName;
        this.LegacyBlob = entity.LegacyBlob;
        this.ProjectDescription = entity.ProjectDescription;
        this.ObjectLanguage = entity.ObjectLanguage;
        this.Creator = entity.Creator;
        this.ResourceName = entity.ResourceName;
    }
    return OdataEntityQuery;
}(odata_entity_1.OdataEntity));
exports.OdataEntityQuery = OdataEntityQuery;
//# sourceMappingURL=odata-entity-query.js.map