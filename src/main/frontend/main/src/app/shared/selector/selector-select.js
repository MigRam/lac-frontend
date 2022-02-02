"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_string_array_1 = require('./abstract-selector-string-array');
var SelectorSelect = (function (_super) {
    __extends(SelectorSelect, _super);
    function SelectorSelect() {
        _super.call(this, SelectorSelect.SELECT);
    }
    SelectorSelect.SELECT = "$select";
    return SelectorSelect;
}(abstract_selector_string_array_1.AbstractSelectorStringArray));
exports.SelectorSelect = SelectorSelect;
//# sourceMappingURL=selector-select.js.map