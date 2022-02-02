"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var odata_collection_1 = require('./odata-collection');
var odata_entity_object_1 = require('./odata-entity-object');
var OdataCollectionObject = (function (_super) {
    __extends(OdataCollectionObject, _super);
    function OdataCollectionObject(json) {
        _super.call(this, json);
        this.value = [];
        for (var entity in json.value) {
            this.value.push(new odata_entity_object_1.OdataEntityObject(json.value[entity]));
        }
    }
    return OdataCollectionObject;
}(odata_collection_1.OdataCollection));
exports.OdataCollectionObject = OdataCollectionObject;
//# sourceMappingURL=odata-collection-object.js.map