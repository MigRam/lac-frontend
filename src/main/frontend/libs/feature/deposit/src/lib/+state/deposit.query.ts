import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { DepositStore, DepositState } from './deposit.store';

@Injectable({ providedIn: 'root' })
export class DepositQuery extends Query<DepositState> {

  depositedState$ = this.select( state => state);
  depositedData$ = this.select(state => state.entities);
  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  constructor(protected store: DepositStore) {
    super(store);
  }

}
