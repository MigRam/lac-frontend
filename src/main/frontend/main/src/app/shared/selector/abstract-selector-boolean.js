"use strict";
var AbstractSelectorBoolean = (function () {
    function AbstractSelectorBoolean(param) {
        this._param = param;
    }
    Object.defineProperty(AbstractSelectorBoolean.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (typeof value === "string") {
                this._value = (value === "true" || value === "");
            }
            else {
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    AbstractSelectorBoolean.prototype.toString = function () {
        return this._param + "=" + this._value;
    };
    return AbstractSelectorBoolean;
}());
exports.AbstractSelectorBoolean = AbstractSelectorBoolean;
//# sourceMappingURL=abstract-selector-boolean.js.map