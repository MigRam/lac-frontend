"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_boolean_1 = require('./abstract-selector-boolean');
var SelectorHighlight = (function (_super) {
    __extends(SelectorHighlight, _super);
    function SelectorHighlight() {
        _super.call(this, SelectorHighlight.HIGHLIGHT);
    }
    SelectorHighlight.HIGHLIGHT = "highlight";
    return SelectorHighlight;
}(abstract_selector_boolean_1.AbstractSelectorBoolean));
exports.SelectorHighlight = SelectorHighlight;
//# sourceMappingURL=selector-highlight.js.map