"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_filter_1 = require('./abstract-selector-filter');
var SelectorFilter = (function (_super) {
    __extends(SelectorFilter, _super);
    function SelectorFilter() {
        _super.call(this, SelectorFilter.FILTER);
    }
    SelectorFilter.FILTER = "$filter";
    return SelectorFilter;
}(abstract_selector_filter_1.AbstractSelectorFilter));
exports.SelectorFilter = SelectorFilter;
//# sourceMappingURL=selector-filter.js.map