"use strict";
var AbstractSelectorString = (function () {
    function AbstractSelectorString(param) {
        this._param = param;
    }
    Object.defineProperty(AbstractSelectorString.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (typeof value === "string") {
                this._value = value;
            }
            else {
                this._value = "" + value;
            }
        },
        enumerable: true,
        configurable: true
    });
    AbstractSelectorString.prototype.toString = function () {
        return this._param + "=" + this._value;
    };
    return AbstractSelectorString;
}());
exports.AbstractSelectorString = AbstractSelectorString;
//# sourceMappingURL=abstract-selector-string.js.map