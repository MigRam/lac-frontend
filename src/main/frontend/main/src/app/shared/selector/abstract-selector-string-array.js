"use strict";
var AbstractSelectorStringArray = (function () {
    function AbstractSelectorStringArray(param) {
        this._param = param;
    }
    Object.defineProperty(AbstractSelectorStringArray.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (typeof value === "string") {
                this._value = value.split(",");
            }
            else {
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    AbstractSelectorStringArray.prototype.toString = function () {
        return this._param + "=" + this._value.join();
    };
    return AbstractSelectorStringArray;
}());
exports.AbstractSelectorStringArray = AbstractSelectorStringArray;
//# sourceMappingURL=abstract-selector-string-array.js.map