import {Injectable} from '@angular/core';
import {Query, toBoolean} from '@datorama/akita';
import {AuthenticationState, AuthenticationStore} from './authentication.store';

@Injectable({ providedIn: 'root' })
export class AuthenticationQuery extends Query<AuthenticationState> {

  isLoggedIn$ = this.select(state => toBoolean(state.isAuthenticated));
  user$ = this.select(state => state.user);
  authToken$ = this.select( state =>  state.user['access_token']);
  authTokenType$ = this.select( state => state.user['token_type']);

  constructor(protected store: AuthenticationStore) {
    super(store);
  }
}
