"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_string_array_1 = require('./abstract-selector-string-array');
var SelectorFields = (function (_super) {
    __extends(SelectorFields, _super);
    function SelectorFields() {
        _super.call(this, SelectorFields.FIELDS);
    }
    SelectorFields.FIELDS = "fields";
    return SelectorFields;
}(abstract_selector_string_array_1.AbstractSelectorStringArray));
exports.SelectorFields = SelectorFields;
//# sourceMappingURL=selector-fields.js.map