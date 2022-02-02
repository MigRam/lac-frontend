import { OdataEntityQuery } from './odata-entity-query';

export class Odata {

  ApiContext: string;
  ApiSelectors: string;
  ApiCount: string | number;
  Expandable: string;
  NextLink: string;
  Autocompletes: string;
  Dataset: Array<OdataEntityQuery>;
  Facets: Array<any> = [];

  constructor(json: any) {
    this.ApiContext = json['@odata.context'];
    this.ApiSelectors = json['@a5.selector'];
    this.ApiCount = json['@odata.count'];
    this.Expandable = json['@a5.expandable'];
    this.NextLink = json['@odata.nextLink'];
    this.Autocompletes = json['@a5.autocomplete'];
    this.Dataset = json['value'].map(value => new OdataEntityQuery(value));

    for(let entity in json["@a5.facets"]) {
      let Facet: any = {};
      Facet.category = entity;
      Facet.buckets = json["@a5.facets"][entity]['buckets'];
      Facet.hasMoreBuckets = (json["@a5.facets"][entity]['sum_other_doc_count'] > 0);
      Facet.hasCountError = json["@a5.facets"][entity]['doc_count_error_upper_bound'];
      Facet.sumOtherCount = json["@a5.facets"][entity]['sum_other_doc_count'];
      this.Facets.push(Facet);
    }
  }

  getDataset() {
    return this.Dataset;
  }

  getAutocompletes() {
    return this.Autocompletes ? this.Autocompletes['autocomplete']['buckets'] : null;
  }

  getFacets() {
    return this.Facets;
  }

  isFirstPage(): boolean {
    return this.ApiSelectors["$skip"] === 0;
  }

  isLastPage(): boolean {
    return !this.NextLink;
  }

  isCurrentPage(page: number): boolean {
    return this.ApiSelectors["$skip"] === (page) * 10;
  }

  pageCount(): number {
    return Math.ceil(<number>this.ApiCount / 10);
  }

  pages(firstPage: number): Array<number> {
    let pages: Array<number> = [];
    let start = firstPage !== undefined ? firstPage - (firstPage % 5) : 0;
    let end = start + 5;
    // duplicated
    end = end > (this.pageCount()) ? this.pageCount() : end;

    if (start !== 0 && firstPage >= 5) {
      pages.push(0);
      pages.push(-1);
    }
    for(var i = start; i < end; i++) {
      pages.push(i);
    }
    if (start <= this.pageCount() - 5) {
      pages.push(-1);
      pages.push(this.pageCount() - 1);
    }
    return pages;
  }

  pageSize(): number {
    return 10;
  }

  toString() {
    return this;
  }
}
