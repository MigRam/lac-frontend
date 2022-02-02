"use strict";
var OdataCollection = (function () {
    function OdataCollection(json) {
        this.odataContext = json["@odata.context"];
        this.odataCount = json["@odata.count"];
        this.odataNextLink = json["@odata.nextLink"];
        this.a5Selector = json["@a5.selector"];
    }
    OdataCollection.prototype.isFirstPage = function () {
        return this.a5Selector["$skip"] === 0;
    };
    OdataCollection.prototype.isLastPage = function () {
        return !this.odataNextLink;
    };
    OdataCollection.prototype.isCurrentPage = function (page) {
        return this.a5Selector["$skip"] === (page) * 10;
    };
    OdataCollection.prototype.pageCount = function () {
        return Math.ceil(this.odataCount / 10);
    };
    OdataCollection.prototype.pages = function (firstPage) {
        var ps = [];
        var start = firstPage !== undefined ? firstPage - (firstPage % 5) : 0;
        var end = start + 5;
        end = end > (this.pageCount()) ? this.pageCount() : end;
        if (start !== 0 && firstPage >= 5) {
            ps.push(0);
            ps.push(-1);
        }
        for (var i = start; i < end; i++) {
            ps.push(i);
        }
        if (start <= this.pageCount() - 5) {
            ps.push(-1);
            ps.push(this.pageCount() - 1);
        }
        return ps;
    };
    OdataCollection.prototype.pageSize = function () {
        return 10;
    };
    return OdataCollection;
}());
exports.OdataCollection = OdataCollection;
//# sourceMappingURL=odata-collection.js.map