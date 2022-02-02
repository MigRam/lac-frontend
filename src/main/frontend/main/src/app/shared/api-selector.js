"use strict";
var selector_count_1 = require('./selector/selector-count');
var selector_filter_1 = require('./selector/selector-filter');
var selector_orderby_1 = require('./selector/selector-orderby');
var selector_pretty_1 = require('./selector/selector-pretty');
var selector_select_1 = require('./selector/selector-select');
var selector_skip_1 = require('./selector/selector-skip');
var selector_top_1 = require('./selector/selector-top');
var ApiSelector = (function () {
    function ApiSelector(_count, _filter, _orderby, _pretty, _select, _skip, _top) {
        if (_count === void 0) { _count = null; }
        if (_filter === void 0) { _filter = null; }
        if (_orderby === void 0) { _orderby = null; }
        if (_pretty === void 0) { _pretty = null; }
        if (_select === void 0) { _select = null; }
        if (_skip === void 0) { _skip = null; }
        if (_top === void 0) { _top = null; }
        this._count = _count;
        this._filter = _filter;
        this._orderby = _orderby;
        this._pretty = _pretty;
        this._select = _select;
        this._skip = _skip;
        this._top = _top;
    }
    Object.defineProperty(ApiSelector.prototype, "count", {
        get: function () {
            return this._count && this._count.value;
        },
        set: function (count) {
            if (count === null || count === undefined) {
                this._count = null;
            }
            else {
                if (this._count === null)
                    this._count = new selector_count_1.SelectorCount();
                this._count.value = count;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiSelector.prototype, "filter", {
        get: function () {
            return this._filter && this._filter.value;
        },
        set: function (filter) {
            if (filter === null || filter === undefined) {
                this._filter = null;
            }
            else {
                if (this._filter === null)
                    this._filter = new selector_filter_1.SelectorFilter();
                this._filter.value = filter;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiSelector.prototype, "orderby", {
        get: function () {
            return this._orderby && this._orderby.value;
        },
        set: function (orderby) {
            if (orderby === null || orderby === undefined) {
                this._orderby = null;
            }
            else {
                if (this._orderby === null)
                    this._orderby = new selector_orderby_1.SelectorOrderby();
                this._orderby.value = orderby;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiSelector.prototype, "pretty", {
        get: function () {
            return this._pretty && this._pretty.value;
        },
        set: function (pretty) {
            if (pretty === null || pretty === undefined) {
                this._pretty = null;
            }
            else {
                if (this._pretty === null)
                    this._pretty = new selector_pretty_1.SelectorPretty();
                this._pretty.value = pretty;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiSelector.prototype, "select", {
        get: function () {
            return this._select && this._select.value;
        },
        set: function (select) {
            if (select === null || select === undefined) {
                this._select = null;
            }
            else {
                if (this._select === null)
                    this._select = new selector_select_1.SelectorSelect();
                this._select.value = select;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiSelector.prototype, "skip", {
        get: function () {
            return this._skip && this._skip.value;
        },
        set: function (skip) {
            if (skip === null || skip === undefined) {
                this._skip = null;
            }
            else {
                if (this._skip === null)
                    this._skip = new selector_skip_1.SelectorSkip();
                this._skip.value = skip;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiSelector.prototype, "top", {
        get: function () {
            return this._top && this._top.value;
        },
        set: function (top) {
            if (top === null || top === undefined) {
                this._top = null;
            }
            else {
                if (this._top === null)
                    this._top = new selector_top_1.SelectorTop();
                this._top.value = top;
            }
        },
        enumerable: true,
        configurable: true
    });
    ApiSelector.prototype.selectors = function () {
        var selectors = [];
        if (this._count !== null)
            selectors.push(this._count.toString());
        if (this._filter !== null)
            selectors.push(this._filter.toString());
        if (this._orderby !== null)
            selectors.push(this._orderby.toString());
        if (this._pretty !== null)
            selectors.push(this._pretty.toString());
        if (this._select !== null)
            selectors.push(this._select.toString());
        if (this._skip !== null)
            selectors.push(this._skip.toString());
        if (this._top !== null)
            selectors.push(this._top.toString());
        return selectors;
    };
    return ApiSelector;
}());
exports.ApiSelector = ApiSelector;
//# sourceMappingURL=api-selector.js.map