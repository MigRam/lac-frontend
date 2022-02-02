"use strict";
var A5SelectorDrill = (function () {
    function A5SelectorDrill(name, join) {
        this.facets = {};
        this.name = name;
        this.join = join;
    }
    A5SelectorDrill.prototype.containsFacet = function (facetName) {
        return this.facets[facetName] !== undefined;
    };
    A5SelectorDrill.prototype.containsBucket = function (facetName, bucket) {
        return this.facets[facetName] && this.facets[facetName].indexOf(bucket) > -1;
    };
    A5SelectorDrill.prototype.contains = function (facetName, bucket) {
        return this.containsBucket(facetName, bucket);
    };
    A5SelectorDrill.prototype.add = function (facetName, bucket) {
        if (this.contains(facetName, bucket)) {

        }
        else {
            if (!this.containsFacet(facetName))
                this.facets[facetName] = [];
            this.facets[facetName].push(bucket);
        }
    };
    A5SelectorDrill.prototype.remove = function (facetName, bucket) {
        if (!this.contains(facetName, bucket))
            return;
        this.facets[facetName].splice(this.facets[facetName].indexOf(bucket), 1);
        if (this.facets[facetName].length === 0)
            delete this.facets[facetName];
    };
    A5SelectorDrill.prototype.removeAll = function (facetName) {
        if (!this.containsFacet(facetName))
            return;
        delete this.facets[facetName];
    };
    A5SelectorDrill.prototype.facetName = function (bucket) {
        var facetName = "";
        for (var n in this.facets) {
            if (this.facets[n].indexOf(bucket) >= 0) {
                facetName = n;
                break;
            }
        }
        return facetName;
    };
    A5SelectorDrill.prototype.toArray = function () {
        var filterArray = [];
        for (var facet in this.facets) {
            for (var b = 0; b < this.facets[facet].length; b++) {
                filterArray.push({ key: facet, value: this.facets[facet][b] });
            }
        }
        return filterArray.length > 0 ? filterArray : null;
    };
    A5SelectorDrill.prototype.toQueryString = function () {
        var ands = [];
        for (var facet in this.facets) {
            var ors = [];
            for (var b = 0; b < this.facets[facet].length; b++) {
                ors.push(facet + " eq \"" + this.facets[facet][b] + "\"");
            }
            ands.push("(" + ors.join(" or ") + ")");
        }
        return ands.length > 0 ? this.name + "=" + ands.join(" and ") : "";
    };
    return A5SelectorDrill;
}());
exports.A5SelectorDrill = A5SelectorDrill;
//# sourceMappingURL=a5-selector-drill.js.map
