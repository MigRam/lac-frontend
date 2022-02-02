"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var api_selector_1 = require('./api-selector');
var selector_autocomplete_1 = require('./selector/selector-autocomplete');
var selector_drill_1 = require('./selector/selector-drill');
var selector_facets_1 = require('./selector/selector-facets');
var selector_fields_1 = require('./selector/selector-fields');
var selector_highlight_1 = require('./selector/selector-highlight');
var selector_search_1 = require('./selector/selector-search');
var ApiSelectorQuery = (function (_super) {
    __extends(ApiSelectorQuery, _super);
    function ApiSelectorQuery(_autocomplete, _drill, _facets, _fields, _highlight, _search) {
        if (_autocomplete === void 0) { _autocomplete = null; }
        if (_drill === void 0) { _drill = null; }
        if (_facets === void 0) { _facets = null; }
        if (_fields === void 0) { _fields = null; }
        if (_highlight === void 0) { _highlight = null; }
        if (_search === void 0) { _search = null; }
        _super.call(this);
        this._autocomplete = _autocomplete;
        this._drill = _drill;
        this._facets = _facets;
        this._fields = _fields;
        this._highlight = _highlight;
        this._search = _search;
    }
    Object.defineProperty(ApiSelectorQuery.prototype, "autocomplete", {
        get: function () {
            return this._autocomplete && this._autocomplete.value;
        },
        set: function (autocomplete) {
            if (autocomplete === null || autocomplete === undefined) {
                this._autocomplete = null;
            }
            else {
                if (this._autocomplete === null)
                    this._autocomplete = new selector_autocomplete_1.SelectorAutocomplete();
                this._autocomplete.value = autocomplete;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiSelectorQuery.prototype, "drill", {
        get: function () {
            return this._drill && this._drill.value;
        },
        set: function (drill) {
            if (drill === null || drill === undefined) {
                this._drill = null;
            }
            else {
                if (this._drill === null)
                    this._drill = new selector_drill_1.SelectorDrill();
                this._drill.value = drill;
            }
        },
        enumerable: true,
        configurable: true
    });
    ApiSelectorQuery.prototype.drillString = function () {
        if (this._drill === null)
            return "";
        var str = [];
        var tok = "";
        for (var i = 0; i < this._drill.value.length; i++) {
            tok = this._drill.value[i];
            if (tok.match(/^(eq|ne|gt|ge|lt|le|or|and|not)$/)) {
                str.push(" " + tok + " ");
            }
            else {
                str.push(tok);
            }
        }
        return str.join("");
    };
    Object.defineProperty(ApiSelectorQuery.prototype, "facets", {
        get: function () {
            return this._facets && this._facets.value;
        },
        set: function (facets) {
            if (facets === null || facets === undefined) {
                this._facets = null;
            }
            else {
                if (this._facets === null)
                    this._facets = new selector_facets_1.SelectorFacets();
                this._facets.value = facets;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiSelectorQuery.prototype, "fields", {
        get: function () {
            return this._fields && this._fields.value;
        },
        set: function (fields) {
            if (fields === null || fields === undefined) {
                this._fields = null;
            }
            else {
                if (this._fields === null)
                    this._fields = new selector_fields_1.SelectorFields();
                this._fields.value = fields;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiSelectorQuery.prototype, "highlight", {
        get: function () {
            return this._highlight && this._highlight.value;
        },
        set: function (highlight) {
            if (highlight === null || highlight === undefined) {
                this._highlight = null;
            }
            else {
                if (this._highlight === null)
                    this._highlight = new selector_highlight_1.SelectorHighlight();
                this._highlight.value = highlight;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiSelectorQuery.prototype, "search", {
        get: function () {
            return this._search && this._search.value;
        },
        set: function (search) {
            if (search === null || search === undefined) {
                this._search = null;
            }
            else {
                if (this._search === null)
                    this._search = new selector_search_1.SelectorSearch();
                this._search.value = search;
            }
        },
        enumerable: true,
        configurable: true
    });
    ApiSelectorQuery.prototype.selectors = function () {
        var selectors = _super.prototype.selectors.call(this);
        if (this._autocomplete !== null)
            selectors.push(this._autocomplete.toString());
        if (this._drill !== null)
            selectors.push(this._drill.toString());
        if (this._facets !== null)
            selectors.push(this._facets.toString());
        if (this._fields !== null)
            selectors.push(this._fields.toString());
        if (this._highlight !== null)
            selectors.push(this._highlight.toString());
        if (this._search !== null)
            selectors.push(this._search.toString());
        return selectors;
    };
    ApiSelectorQuery.prototype.toQueryString = function () {
        return ("?" + this.selectors().join("&"));
    };
    return ApiSelectorQuery;
}(api_selector_1.ApiSelector));
exports.ApiSelectorQuery = ApiSelectorQuery;
//# sourceMappingURL=api-selector-query.js.map