"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var odata_collection_1 = require('./odata-collection');
var odata_entity_query_1 = require('./odata-entity-query');
var OdataCollectionQuery = (function (_super) {
    __extends(OdataCollectionQuery, _super);
    function OdataCollectionQuery(json) {
        _super.call(this, json);
        this.value = [];
        this.a5Facets = [];
        for (var entity in json.value) {
            this.value.push(new odata_entity_query_1.OdataEntityQuery(json.value[entity]));
        }
        for (var facet in json["@a5.facets"]) {
            var obj = {};
            obj.faceName = facet;
            obj.buckets = json["@a5.facets"][facet].buckets;
            obj.hasMoreBuckets = (json["@a5.facets"][facet].sum_other_doc_count > 0);
            this.a5Facets.push(obj);
        }
        this.a5Autocomplete = json["@a5.autocomplete"] ? json["@a5.autocomplete"].autocomplete.buckets : null;
    }
    return OdataCollectionQuery;
}(odata_collection_1.OdataCollection));
exports.OdataCollectionQuery = OdataCollectionQuery;
//# sourceMappingURL=odata-collection-query.js.map