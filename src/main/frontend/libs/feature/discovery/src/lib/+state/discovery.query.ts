import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DiscoveryState, DiscoveryStore } from './discovery.store';

@Injectable({ providedIn: 'root' })
export class DiscoveryQuery extends QueryEntity<DiscoveryState> {
  /** All Store Entities */
  entities$ = this.select(state => state.entities);

  /** All Store IDS */
  ids$ = this.select(state => state.ids);

  /** Store Odata Collection */
  autocompletes$ = this.select(state => state.Autocompletes);
  dataset$ = this.select(state => state.entities.Dataset);
  selectors$ = this.select(state => state.entities.ApiSelectors);
  counts$ = this.select(state => state.entities.ApiCount);
  page$ = this.select(state => state.entities.NextLink);
  facets$ = this.select(state => state.Facets);

  constructor(protected store: DiscoveryStore) {
    super(store);
  }

  clearStore() {
    this.store.destroy();
  }

}
