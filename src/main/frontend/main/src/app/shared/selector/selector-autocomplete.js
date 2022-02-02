"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_selector_boolean_1 = require('./abstract-selector-boolean');
var SelectorAutocomplete = (function (_super) {
    __extends(SelectorAutocomplete, _super);
    function SelectorAutocomplete() {
        _super.call(this, SelectorAutocomplete.AUTOCOMPLETE);
    }
    SelectorAutocomplete.AUTOCOMPLETE = "autocomplete";
    return SelectorAutocomplete;
}(abstract_selector_boolean_1.AbstractSelectorBoolean));
exports.SelectorAutocomplete = SelectorAutocomplete;
//# sourceMappingURL=selector-autocomplete.js.map