"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_filter_1 = require('./abstract-selector-filter');
var SelectorDrill = (function (_super) {
    __extends(SelectorDrill, _super);
    function SelectorDrill() {
        _super.call(this, SelectorDrill.DRILL);
    }
    SelectorDrill.DRILL = "drill";
    return SelectorDrill;
}(abstract_selector_filter_1.AbstractSelectorFilter));
exports.SelectorDrill = SelectorDrill;
//# sourceMappingURL=selector-drill.js.map