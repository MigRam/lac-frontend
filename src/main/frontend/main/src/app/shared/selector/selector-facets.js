"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_string_array_1 = require('./abstract-selector-string-array');
var SelectorFacets = (function (_super) {
    __extends(SelectorFacets, _super);
    function SelectorFacets() {
        _super.call(this, SelectorFacets.FACETS);
    }
    SelectorFacets.FACETS = "facets";
    return SelectorFacets;
}(abstract_selector_string_array_1.AbstractSelectorStringArray));
exports.SelectorFacets = SelectorFacets;
//# sourceMappingURL=selector-facets.js.map