"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_number_1 = require('./abstract-selector-number');
var SelectorSkip = (function (_super) {
    __extends(SelectorSkip, _super);
    function SelectorSkip() {
        _super.call(this, SelectorSkip.SKIP);
    }
    SelectorSkip.SKIP = "$skip";
    return SelectorSkip;
}(abstract_selector_number_1.AbstractSelectorNumber));
exports.SelectorSkip = SelectorSkip;
//# sourceMappingURL=selector-skip.js.map