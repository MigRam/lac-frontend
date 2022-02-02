"use strict";
var ExploreFacets = (function () {
    function ExploreFacets() {
        this._index = {
            Type: 0,
            Keywords: 1,
            Country: 2,
            ResourceType: 3
        };
        this._all = ["Type", "Keywords", "Country", "ResourceType"];
        this._active = [true, true, true, false];
        this._total = [30, 30, 30, 30];
        this._filter = [[], [], [], []];
        this._operator = [false, false, false, false];
        this._shown = [false, false, false, false];
        this.total = {
            Type: 30,
            Keywords: 30,
            Country: 30,
            ResourceType: 30
        };
        this._compiled = {
            Type: {},
            Keywords: {},
            Country: {},
            ResourceType: {}
        };
        this._hasMoreBuckets = [];
    }
    ExploreFacets.prototype.name = function (index) {
        return this._all[index];
    };
    Object.defineProperty(ExploreFacets.prototype, "all", {
        get: function () {
            return this._all;
        },
        enumerable: true,
        configurable: true
    });
    ExploreFacets.prototype.isShown = function (facetName) {
        return this._shown[this._index[facetName]];
    };
    ExploreFacets.prototype.show = function (facetName) {
        this.hide();
        this._shown[this._index[facetName]] = true;
    };
    ExploreFacets.prototype.hide = function (facetName) {
        if (facetName === void 0) { facetName = undefined; }
        if (facetName === undefined) {
            for (var i = 0; i < this._shown.length; i++) {
                this._shown[i] = false;
            }
        }
        else {
            this._shown[this._index[facetName]] = false;
        }
    };
    ExploreFacets.prototype.toggle = function (facetName) {
        this.isShown(facetName) ? this.hide(facetName) : this.show(facetName);
    };
    ExploreFacets.prototype.isChecked = function (facetName, bucket) {
        if (this._filter[this._index[facetName]].length === 0)
            return true;
        var has = this.has(facetName, bucket);
        var op = this._operator[this._index[facetName]];
        return (op === true && has) || (op === false && !has);
    };
    Object.defineProperty(ExploreFacets.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: true,
        configurable: true
    });
    ExploreFacets.prototype.has = function (facetName, bucket) {
        if (bucket === void 0) { bucket = undefined; }
        if (bucket === undefined) {
            return this._filter[this._index[facetName]].length > 0;
        }
        else {
            return this._filter[this._index[facetName]].indexOf(bucket) >= 0;
        }
    };
    ExploreFacets.prototype.selectOne = function (facetName, bucket) {
        this.deselectFacet(facetName);
        this._operator[this._index[facetName]] = true;
        this.select(facetName, bucket);
    };
    ExploreFacets.prototype.select = function (facetName, bucket) {
        if (this._operator[this._index[facetName]] === false) {
            var idx = this._filter[this._index[facetName]].indexOf(bucket);
            this._filter[this._index[facetName]].splice(idx, 1);
        }
        else {
            if (this.has(facetName, bucket))
                return;
            this._filter[this._index[facetName]].push(bucket);
        }
    };
    ExploreFacets.prototype.deselect = function (facetName, bucket) {
        if (facetName === void 0) { facetName = undefined; }
        if (bucket === void 0) { bucket = undefined; }
        if (facetName === undefined) {
            this.deselectAll();
        }
        else if (bucket === undefined) {
            this.deselectFacet(facetName);
        }
        else {
            this.deselectBucket(facetName, bucket);
        }
    };
    ExploreFacets.prototype.deselectBucket = function (facetName, bucket) {
        if (this._operator[this._index[facetName]] === false) {
            if (this.has(facetName, bucket))
                return;
            this._filter[this._index[facetName]].push(bucket);
        }
        else {
            var idx = this._filter[this._index[facetName]].indexOf(bucket);
            this._filter[this._index[facetName]].splice(idx, 1);
            if (this._filter[this._index[facetName]].length === 0) {
                this._operator[this._index[facetName]] = false;
            }
        }
    };
    ExploreFacets.prototype.deselectFacet = function (facetName) {
        this._filter[this._index[facetName]] = [];
        this._operator[this._index[facetName]] = false;
    };
    ExploreFacets.prototype.deselectAll = function () {
        for (var i in this._filter) {
            this._filter[i] = [];
            this._operator[i] = false;
        }
    };
    Object.defineProperty(ExploreFacets.prototype, "operator", {
        get: function () {
            return this._operator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExploreFacets.prototype, "active", {
        get: function () {
            var active = [];
            for (var i = 0; i < this._all.length; i++) {
                if (this._active[this._index[this._all[i]]])
                    active.push(this._all[i]);
            }
            return active;
        },
        enumerable: true,
        configurable: true
    });
    ExploreFacets.prototype.setActive = function (filterName, active) {
        this._active[this._index[filterName]] = active;
    };
    ExploreFacets.prototype.isActive = function (facetName) {
        return this._active[this._index[facetName]];
    };
    ExploreFacets.prototype.toSelector = function () {
        var selector = [];
        for (var s in this.total) {
            selector.push(s + ":" + this.total[s]);
        }
        return selector;
    };
    ExploreFacets.prototype.compile = function (odataFilter, odataSearch) {
        for (var comp in this._compiled) {
            this._compiled[comp] = {};
        }
        this._hasMoreBuckets = [];
        for (var _i = 0, _a = odataFilter.a5Facets; _i < _a.length; _i++) {
            var facetSearch = _a[_i];
            if (facetSearch.hasMoreBuckets === true) {
                this._hasMoreBuckets.push(facetSearch.faceName);
            }
        }
        for (var _b = 0, _c = odataSearch.a5Facets; _b < _c.length; _b++) {
            var facetSearch = _c[_b];
            for (var _d = 0, _e = facetSearch.buckets; _d < _e.length; _d++) {
                var bucketSearch = _e[_d];
                this._compiled[facetSearch.faceName][bucketSearch.key] = { filter: bucketSearch.doc_count, search: bucketSearch.doc_count };
            }
        }
        for (var _f = 0, _g = odataFilter.a5Facets; _f < _g.length; _f++) {
            var facetFilter = _g[_f];
            for (var _h = 0, _j = facetFilter.buckets; _h < _j.length; _h++) {
                var bucketFilter = _j[_h];
                if (this._compiled[facetFilter.faceName][bucketFilter.key]) {
                    this._compiled[facetFilter.faceName][bucketFilter.key].filter = bucketFilter.doc_count;
                }
                else {
                    this._compiled[facetFilter.faceName][bucketFilter.key] = { filter: 0, search: bucketFilter.doc_count };
                }
            }
        }
    };
    ExploreFacets.prototype.compiled = function () {
        var facets = [];
        for (var facet in this._compiled) {
            var buckets = [];
            for (var bucket in this._compiled[facet]) {
                buckets.push({ key: bucket, doc_count_filter: this._compiled[facet][bucket].filter, doc_count_search: this._compiled[facet][bucket].search });
            }
            var hasMoreBuckets = (this._hasMoreBuckets.indexOf(facet) >= 0);
            facets.push({ faceName: facet, buckets: buckets, hasMoreBuckets: hasMoreBuckets });
        }
        return facets;
    };
    return ExploreFacets;
}());
exports.ExploreFacets = ExploreFacets;
//# sourceMappingURL=explore-facets.js.map