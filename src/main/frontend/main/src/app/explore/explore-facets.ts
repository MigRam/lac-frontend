import { OdataCollectionQuery } from '../shared/odata/odata-collection-query';

export class ExploreFacets {

  _index: any = {
    Type: 0,
    Keywords: 1,
    Country: 2,
    ResourceType: 3
  }

  _all: Array<string>               = ["Type", "Keywords", "Country", "ResourceType"];

  _active: Array<boolean>           = [true,   true,       true,      true          ];

  _total: Array<number>             = [30,     30,         30,        30            ];

  _filter: Array<Array<string>>     = [[],     [],         [],        []            ];

  _operator: Array<boolean>         = [false,  false,      false,     false         ];

  _shown: Array<boolean>            = [false,  false,      false,     false         ];

  total: Object = {

    Type: 30,

    Keywords: 30,

    Country: 30,

    ResourceType: 30
  }

  private _compiled: any = {

    Type: {},

    Keywords: {},

    Country: {},

    ResourceType: {}
  }

  private _hasMoreBuckets: Array<string> = [];

  constructor() {

  }

  name(index: number): string {
    return this._all[index];
  }

  get all(): Array<string> {
    return this._all;
  }

  isShown(facetName: string): boolean {
    return this._shown[this._index[facetName]];
  }

  show(facetName: string): void {
    this.hide();
    this._shown[this._index[facetName]] = true;
  }

  hide(facetName: string = undefined): void {
    if (facetName === undefined) {
      for(let i = 0; i < this._shown.length; i++) {
        this._shown[i] = false;
      }
    } else {
      this._shown[this._index[facetName]] = false;
    }
  }

  toggle(facetName: string): void {
    this.isShown(facetName) ? this.hide(facetName) : this.show(facetName);
  }

  isChecked(facetName: string, bucket: string): boolean {
    if (this._filter[this._index[facetName]].length === 0) return true;
    let has = this.has(facetName, bucket);
    let op = this._operator[this._index[facetName]];
    return (op === true && has) || (op === false && !has);
  }

  get filter(): Array<Array<string>> {
    return this._filter;
  }

  has(facetName: string, bucket: string = undefined): boolean {
    if (bucket === undefined) {
      return this._filter[this._index[facetName]].length > 0;
    } else {
      return this._filter[this._index[facetName]].indexOf(bucket) >= 0;
    }
  }

  selectOne(facetName: string, bucket: string): void {
    this.deselectFacet(facetName);
    this._operator[this._index[facetName]] = true;
    this.select(facetName, bucket);
  }

  select(facetName: string, bucket: string): void {
    if (this._operator[this._index[facetName]] === false) {
      let idx = this._filter[this._index[facetName]].indexOf(bucket);
      this._filter[this._index[facetName]].splice(idx, 1);
    } else {
      if (this.has(facetName, bucket)) return;
      this._filter[this._index[facetName]].push(bucket);
    }
  }

  deselect(facetName: string = undefined, bucket: string = undefined): void {
    if (facetName === undefined) {
      this.deselectAll();
    } else if (bucket === undefined) {
      this.deselectFacet(facetName);
    } else {
      this.deselectBucket(facetName, bucket);
    }
  }

  deselectBucket(facetName: string, bucket: string): void {
    if (this._operator[this._index[facetName]] === false) {
      if (this.has(facetName, bucket)) return;
      this._filter[this._index[facetName]].push(bucket);
    } else {
      let idx = this._filter[this._index[facetName]].indexOf(bucket);
      this._filter[this._index[facetName]].splice(idx, 1);
      if (this._filter[this._index[facetName]].length === 0) {
        this._operator[this._index[facetName]] = false;
      }
    }
  }

  deselectFacet(facetName: string): void {
    this._filter[this._index[facetName]] = [];
    this._operator[this._index[facetName]] = false;
  }

  deselectAll(): void {
    for(let i in this._filter) {
      this._filter[i] = [];
      this._operator[i] = false;
    }
  }

  get operator(): Array<boolean> {
    return this._operator;
  }

  get active(): Array<string> {
    let active: Array<string> = [];
    for(let i = 0; i < this._all.length; i++) {
      if (this._active[this._index[this._all[i]]]) active.push(this._all[i]);
    }
    return active;
  }

  setActive(filterName: string, active: boolean): void {
    this._active[this._index[filterName]] = active;
  }

  isActive(facetName: string): boolean {
    return this._active[this._index[facetName]];
  }

  toSelector(): Array<string> {
    let selector: Array<string> = [];
    for(let s in this.total) {
      selector.push(s + ":" + this.total[s]);
    }
    return selector;
  }

  compile(odataQuery: OdataCollectionQuery): void {
    for(let comp in this._compiled) {
      this._compiled[comp] = {};
    }
    this._hasMoreBuckets = [];
    for(let facetSearch of odataQuery.a5Facets) {
      if (facetSearch.hasMoreBuckets === true) {
        this._hasMoreBuckets.push(facetSearch.faceName);
      }
    }
    for(let facetFilter of odataQuery.a5Facets) {
      for(let bucketFilter of facetFilter.buckets) {
        if (this._compiled[facetFilter.faceName][bucketFilter.key]) {
          this._compiled[facetFilter.faceName][bucketFilter.key].filter = bucketFilter.doc_count;
        } else {
          this._compiled[facetFilter.faceName][bucketFilter.key] = { filter: 0, search: bucketFilter.doc_count};
        }
      }
    }
  }

  compiled(): Array<any> {
    let facets: Array<any> = [];
    for(let facet in this._compiled) {
      let buckets: Array<any> = [];
      for(let bucket in this._compiled[facet]) {
        buckets.push({key: bucket, doc_count_filter: this._compiled[facet][bucket].filter, doc_count_search: this._compiled[facet][bucket].search});
      }
      let hasMoreBuckets = (this._hasMoreBuckets.indexOf(facet) >= 0);
      facets.push({faceName: facet, buckets: buckets, hasMoreBuckets: hasMoreBuckets});
    }
    return facets;
  }
}
