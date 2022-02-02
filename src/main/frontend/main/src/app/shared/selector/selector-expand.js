"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_string_array_1 = require('./abstract-selector-string-array');
var SelectorExpand = (function (_super) {
    __extends(SelectorExpand, _super);
    function SelectorExpand() {
        _super.call(this, SelectorExpand.EXPAND);
    }
    SelectorExpand.EXPAND = "$expand";
    return SelectorExpand;
}(abstract_selector_string_array_1.AbstractSelectorStringArray));
exports.SelectorExpand = SelectorExpand;
//# sourceMappingURL=selector-expand.js.map