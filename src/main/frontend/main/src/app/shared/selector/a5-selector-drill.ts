export class A5SelectorDrill {

  name: string;

  join: string;

  facets: any = {};

  constructor(name: string, join: string) {
    this.name = name;
    this.join = join;
  }

  containsFacet(facetName: string): boolean {
    return this.facets[facetName] !== undefined;
  }

  containsBucket(facetName: string, bucket: string): boolean {
    return this.facets[facetName] && this.facets[facetName].indexOf(bucket) > -1;
  }

  contains(facetName: string, bucket: string): boolean {
    return this.containsBucket(facetName, bucket);
  }

  add(facetName: string, bucket: string): void {
    if (this.contains(facetName, bucket)) {
      return;
    } else {
      if (!this.containsFacet(facetName)) this.facets[facetName] = [];
      this.facets[facetName].push(bucket);
    }
  }

  remove(facetName: string, bucket: string): void {
    if (!this.contains(facetName, bucket)) return;
    this.facets[facetName].splice(this.facets[facetName].indexOf(bucket), 1);
    if (this.facets[facetName].length === 0) delete this.facets[facetName];
  }

  removeAll(facetName: string): void {
    if (!this.containsFacet(facetName)) return;
    delete this.facets[facetName];
  }

  facetName(bucket: string): string {
    var facetName: string = "";
    for(var n in this.facets) {
      if (this.facets[n].indexOf(bucket) >= 0) {
        facetName = n;
        break;
      }
    }
    return facetName;
  }

  toArray(): Array<any> {
    var filterArray: Array<any> = [];
    for(var facet in this.facets) {
      for(var b = 0; b < this.facets[facet].length; b++) {
        filterArray.push({key: facet, value: this.facets[facet][b]});
      }
    }
    return filterArray.length > 0 ? filterArray : null;
  }

  toQueryString(): string {
    var ands: Array<string> = [];
    for(var facet in this.facets) {
      var ors: Array<string> = [];
      for(var b = 0; b < this.facets[facet].length; b++) {
        ors.push(facet + " eq \"" + this.facets[facet][b] + "\"");
      }
      ands.push("(" + ors.join(" or ") + ")");
    }
    return ands.length > 0 ? this.name + "=" + ands.join(" and ") : "";
  }
}
