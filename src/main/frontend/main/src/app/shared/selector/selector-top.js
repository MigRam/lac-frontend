"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_number_1 = require('./abstract-selector-number');
var SelectorTop = (function (_super) {
    __extends(SelectorTop, _super);
    function SelectorTop() {
        _super.call(this, SelectorTop.TOP);
    }
    SelectorTop.TOP = "$top";
    return SelectorTop;
}(abstract_selector_number_1.AbstractSelectorNumber));
exports.SelectorTop = SelectorTop;
//# sourceMappingURL=selector-top.js.map