"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_string_array_1 = require('./abstract-selector-string-array');
var SelectorOrderby = (function (_super) {
    __extends(SelectorOrderby, _super);
    function SelectorOrderby() {
        _super.call(this, SelectorOrderby.ORDERBY);
    }
    SelectorOrderby.ORDERBY = "$orderby";
    return SelectorOrderby;
}(abstract_selector_string_array_1.AbstractSelectorStringArray));
exports.SelectorOrderby = SelectorOrderby;
//# sourceMappingURL=selector-orderby.js.map