"use strict";
var a5_selector_drill_1 = require('./a5-selector-drill');
var A5Selector = (function () {
    function A5Selector() {
        this.filter = new a5_selector_drill_1.A5SelectorDrill("$filter", "or");
        this.orderby = null;
        this.select = null;
        this.skip = 0;
        this.top = 10;
        this.drill = new a5_selector_drill_1.A5SelectorDrill("drill", "or");
        this.facets = {
            ObjectLanguage: 5,
            Keywords: 5,
            ResourceType: 5,
            Country: 5,
            Creator: 5,
            Region: 5
        };
        this.fields = null;
        this.highlight = true;
        this.pretty = false;
    }
    A5Selector.prototype.toQueryString = function () {
        var tokens = [];
        if (this.count != null)
            tokens.push("$count=" + this.count);
        tokens.push(this.filter.toQueryString());
        if (this.orderby != null)
            tokens.push("$orderby=" + this.orderby);
        if (this.search != null)
            tokens.push("$search=" + (this.search == "" ? "*" : this.search));
        if (this.select != null)
            tokens.push("$select=" + this.select);
        if (this.skip != null)
            tokens.push("$skip=" + this.skip);
        if (this.top != null)
            tokens.push("$top=" + this.top);
        if (this.autocomplete != null)
            tokens.push("autocomplete=" + this.autocomplete);
        tokens.push(this.drill.toQueryString());
        if (this.facets != null) {
            var facetStrings = [];
            for (var facet in this.facets) {
                facetStrings.push(facet + ":" + this.facets[facet]);
            }
            tokens.push("facets=" + facetStrings.join(","));
        }
        if (this.fields != null)
            tokens.push("fields=" + this.fields);
        if (this.highlight != null)
            tokens.push("highlight=" + this.highlight);
        if (this.pretty != null)
            tokens.push("pretty=" + this.pretty);
        return ("?" + tokens.join("&"));
    };
    return A5Selector;
}());
exports.A5Selector = A5Selector;
//# sourceMappingURL=a5-selector.js.map