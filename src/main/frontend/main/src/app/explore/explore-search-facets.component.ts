import { Component, Input } from '@angular/core';

import { ExploreFacets } from './explore-facets';
import { ExploreService } from './explore.service';

@Component({
  selector: 'explore-search-facets',
  templateUrl: 'explore-search-facets.component.html'
})
export class ExploreSearchFacetsComponent {

  private _filter: ExploreFacets;

  constructor(
      public exploreService: ExploreService
  ) {
    this._filter = exploreService.facets;
  }

  name(index: number): string {
    return this._filter.name(index);
  }

  get all(): Array<string> {
    return this._filter.all;
  }

  isShown(filterName: string): boolean {
    return this._filter.isShown(filterName);
  }

  show(filterName: string): void {
    this._filter.show(filterName);
  }

  hide(filterName: string): void {
    this._filter.hide(filterName);
  }

  toggle(filterName: string): void {
    this._filter.toggle(filterName);
  }

  get filter(): Array<Array<string>> {
    return this._filter.filter;
  }

  isChecked(filterName: string, bucket: string): boolean {
    return this._filter.isChecked(filterName, bucket);
  }

  has(filterName: string, bucket: string = undefined): boolean {
    return this._filter.has(filterName, bucket);
  }

  selectOne(filterName: string, bucket: string): void {
    this._filter.selectOne(filterName, bucket);
    this.exploreService.filter();
  }

  select(filterName: string, bucket: string): void {
    this._filter.select(filterName, bucket);
    this.exploreService.filter();
  }

  deselect(filterName: string = undefined, bucket: string = undefined): void {
    this._filter.deselect(filterName, bucket);
    this.exploreService.filter();
  }

  onSelect(checked: boolean, filterName: string, bucket: string): void {
    checked ? this.select(filterName, bucket) : this.deselect(filterName, bucket);
  }

  get operator(): Array<boolean> {
    return this._filter.operator;
  }

  get active(): Array<string> {
    return this._filter.active;
  }

  isActive(filterName: string) {
    return this._filter.isActive(filterName);
  }

  onActive(filterName: string) {
    this.isActive(filterName) ? this._filter.setActive(filterName, false) : this._filter.setActive(filterName, true);
  }

  bucketPage(buckets: Array<any>, page: number): Array<any> {
    let pageSize: number = Math.ceil(buckets.length / 3);
    return buckets.slice(page * pageSize, page * pageSize + pageSize);
  }

  more(facetName: string): void {
  }

  less(facetName: string): void {
  }
}
