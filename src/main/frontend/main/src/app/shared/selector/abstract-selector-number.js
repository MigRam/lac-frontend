"use strict";
var AbstractSelectorNumber = (function () {
    function AbstractSelectorNumber(param) {
        this._param = param;
    }
    Object.defineProperty(AbstractSelectorNumber.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (typeof value === "string") {
                this._value = parseInt(value);
            }
            else {
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    AbstractSelectorNumber.prototype.toString = function () {
        return this._param + "=" + this._value;
    };
    return AbstractSelectorNumber;
}());
exports.AbstractSelectorNumber = AbstractSelectorNumber;
//# sourceMappingURL=abstract-selector-number.js.map