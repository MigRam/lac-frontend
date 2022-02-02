"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var api_selector_1 = require('./api-selector');
var selector_expand_1 = require('./selector/selector-expand');
var ApiSelectorObject = (function (_super) {
    __extends(ApiSelectorObject, _super);
    function ApiSelectorObject(_expand) {
        if (_expand === void 0) { _expand = null; }
        _super.call(this);
        this._expand = _expand;
    }
    Object.defineProperty(ApiSelectorObject.prototype, "expand", {
        get: function () {
            return this._expand && this._expand.value;
        },
        set: function (expand) {
            if (expand === null || expand === undefined) {
                this._expand = null;
            }
            else {
                if (this._expand === null)
                    this._expand = new selector_expand_1.SelectorExpand();
                this._expand.value = expand;
            }
        },
        enumerable: true,
        configurable: true
    });
    ApiSelectorObject.prototype.selectors = function () {
        var selectors = _super.prototype.selectors.call(this);
        if (this._expand !== null)
            selectors.push(this._expand.toString());
        return selectors;
    };
    ApiSelectorObject.prototype.toQueryString = function () {
        return ("?" + this.selectors().join("&"));
    };
    return ApiSelectorObject;
}(api_selector_1.ApiSelector));
exports.ApiSelectorObject = ApiSelectorObject;
//# sourceMappingURL=api-selector-object.js.map