"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_boolean_1 = require('./abstract-selector-boolean');
var SelectorCount = (function (_super) {
    __extends(SelectorCount, _super);
    function SelectorCount() {
        _super.call(this, SelectorCount.COUNT);
    }
    SelectorCount.COUNT = "$count";
    return SelectorCount;
}(abstract_selector_boolean_1.AbstractSelectorBoolean));
exports.SelectorCount = SelectorCount;
//# sourceMappingURL=selector-count.js.map