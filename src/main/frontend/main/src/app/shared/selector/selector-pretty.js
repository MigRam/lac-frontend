"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_boolean_1 = require('./abstract-selector-boolean');
var SelectorPretty = (function (_super) {
    __extends(SelectorPretty, _super);
    function SelectorPretty() {
        _super.call(this, SelectorPretty.PRETTY);
    }
    SelectorPretty.PRETTY = "pretty";
    return SelectorPretty;
}(abstract_selector_boolean_1.AbstractSelectorBoolean));
exports.SelectorPretty = SelectorPretty;
//# sourceMappingURL=selector-pretty.js.map