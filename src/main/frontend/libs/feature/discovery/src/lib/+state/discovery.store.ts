import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Discovery } from './discovery.model';

export interface DiscoveryState extends EntityState<Discovery> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'discovery', resettable: true })
export class DiscoveryStore extends EntityStore<DiscoveryState> {

  constructor() {
    super();
  }

}

