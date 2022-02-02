import { Component } from '@angular/core';

import { ExploreService } from './explore.service';

@Component({
  selector: 'explore-hits',
  templateUrl: 'explore-hits.component.html'
})
export class ExploreHitsComponent {

  constructor(
      public exploreService: ExploreService
  ) {}

/*

  pagePrevious() {
    if (this.odataCollectionFilter.isFirstPage()) return;
    this.a5SelectorFilter.skip -= 10;
    this.a5SelectorSearch.skip -= 10;
    this.page();
  }

  pageTo(page: number) {
    if (page < 0) return;
    this.a5SelectorFilter.skip = page * 10;
    this.a5SelectorSearch.skip = page * 10;
    this.page();
  }

  pageNext() {
    if (this.odataCollectionFilter.isLastPage()) return;
    this.a5SelectorFilter.skip += 10;
    this.a5SelectorSearch.skip += 10;
    this.page();
  }

  pageSet(page: number) {
    this.a5SelectorFilter.skip = page * 10;
    this.a5SelectorSearch.skip = page * 10;
  }

  pageCurrent(): number {
    return Math.round(this.a5SelectorFilter.skip / 10);
  }

  page(): void {
    this.apiQueryService.get().subscribe(
        odata => this.odataCollectionFilter = odata,
        error => this.errorMessage = <any>error
    );
    this.apiQueryService.get().subscribe(
        odata => this.odataCollectionSearch = odata,
        error => this.errorMessage = <any>error
    );
  }

  search(target: any): void {
    this.pageSet(0);
    if (target) target.blur();
    var self = this;
    clearTimeout(this.delay);
    this.delay = setTimeout(function() {
      self.apiQueryService.get().subscribe(
          odata => self.odataCollectionFilter = odata,
          error => self.errorMessage = <any>error
      );
      self.apiQueryService.get().subscribe(
          odata => self.odataCollectionSearch = odata,
          error => self.errorMessage = <any>error
      );
    }, 300);
  }

  filter(): void {
    this.pageSet(0);
    this.apiQueryService.get().subscribe(
        odata => this.odataCollectionFilter = odata,
        error => this.errorMessage = <any>error
    );
    this.apiQueryService.get().subscribe(
        odata => this.odataCollectionSearch = odata,
        error => this.errorMessage = <any>error
    );
  }
*/
}
