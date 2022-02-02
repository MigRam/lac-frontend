export class OdataCollection {

  odataContext: string;

  odataCount: number;

  odataNextLink: string;

  a5Selector: any;

  constructor(json: any) {
    this.odataContext = json["@odata.context"];
    this.odataCount = json["@odata.count"];
    this.odataNextLink = json["@odata.nextLink"];
    this.a5Selector = json["@a5.selector"];
  }

  isFirstPage(): boolean {
    return this.a5Selector["$skip"] === 0;
  }

  isLastPage(): boolean {
    return !this.odataNextLink;
  }

  isCurrentPage(page: number): boolean {
    return this.a5Selector["$skip"] === (page) * 10;
  }

  pageCount(): number {
    return Math.ceil(this.odataCount / 10);
  }

  pages(firstPage: number): Array<number> {
    var ps: Array<number> = [];
    var start = firstPage !== undefined ? firstPage - (firstPage % 5) : 0;
    var end = start + 5;
    end = end > (this.pageCount()) ? this.pageCount() : end;
    if (start !== 0 && firstPage >= 5) {
      ps.push(0);
      ps.push(-1);
    }
    for(var i = start; i < end; i++) {
      ps.push(i);
    }
    if (start <= this.pageCount() - 5) {
      ps.push(-1);
      ps.push(this.pageCount() - 1);
    }
    return ps;
  }

  pageSize(): number {
    return 10;
  }
}
