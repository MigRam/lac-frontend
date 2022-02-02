import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ExploreService } from './explore.service';

@Component({
  selector: 'explore-search-field',
  templateUrl: 'explore-search-field.component.html'
})
export class ExploreSearchFieldComponent {

  lastTerm: string;

  constructor(
    private router: Router,
    public exploreService: ExploreService
  ) {}

  onInputBlur(target: any): void {
    if (target && target.value != "") target.blur();
    this.exploreService.navigate();
  }

  onInput(target: any) {
    if (this.lastTerm === this.exploreService.selectorQuery.search) {
      target.blur();
    }
    this.lastTerm = <string>this.exploreService.selectorQuery.search;
    this.exploreService.reset();
    this.exploreService.query();
  }

  onSearch() {
    this.exploreService.reset();
    this.exploreService.query();
    this.exploreService.navigate();
  }
}
