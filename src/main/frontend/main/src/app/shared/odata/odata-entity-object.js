"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var odata_entity_1 = require('./odata-entity');
var OdataEntityObject = (function (_super) {
    __extends(OdataEntityObject, _super);
    function OdataEntityObject(entity) {
        _super.call(this, entity);
        this.odataContext = entity["@odata.context"];
        this.odataId = entity["@odata.id"];
        this.odataReadLink = entity["@odata.readLink"];
        this.odataMediaReadLink = entity["@odata.mediaReadLink"];
        this.odataThumbnailMediaReadLink = entity["Thumbnail@odata.mediaReadLink"];
        this.odataWaveformMediaReadLink = entity["Waveform@odata.mediaReadLink"];
        this.odataSpectrumMediaReadLink = entity["Spectrum@odata.mediaReadLink"];
        this.a5Selector = entity["@a5.selector"];
        this.a5Expandable = entity["@a5.expandable"];
        this.id = entity["id"];
        this.label = entity["label"];
        this.contentType = entity["contentType"];
        this.fileUri = entity["fileUri"];
        this.fileExists = entity["fileExists"];
        this.fileCreated = entity["fileCreated"];
        this.fileUpdated = entity["fileUpdated"];
        this.fileSize = entity["fileSize"];
        this.parentOf = entity["parentOf"];
        this.relatedTo = entity["relatedTo"];
    }
    return OdataEntityObject;
}(odata_entity_1.OdataEntity));
exports.OdataEntityObject = OdataEntityObject;
//# sourceMappingURL=odata-entity-object.js.map