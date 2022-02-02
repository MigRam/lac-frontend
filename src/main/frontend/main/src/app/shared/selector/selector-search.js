"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_string_1 = require('./abstract-selector-string');
var SelectorSearch = (function (_super) {
    __extends(SelectorSearch, _super);
    function SelectorSearch() {
        _super.call(this, SelectorSearch.SEARCH);
    }
    SelectorSearch.SEARCH = "$search";
    return SelectorSearch;
}(abstract_selector_string_1.AbstractSelectorString));
exports.SelectorSearch = SelectorSearch;
//# sourceMappingURL=selector-search.js.map