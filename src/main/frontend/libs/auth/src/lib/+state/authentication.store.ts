import {Injectable} from '@angular/core';
import {EntityState, Store, StoreConfig} from '@datorama/akita';
import {Authentication, createAuthentication} from './authentication.model';

export interface AuthenticationState extends EntityState<Authentication> {

}

@Injectable({ providedIn: 'root' })
@StoreConfig(
  {
    name: 'authentication',
    cache: { ttl: 3600000 }
  })
export class AuthenticationStore extends Store<AuthenticationState> {

  constructor() {
    super(createAuthentication());
  }

  login(session: AuthenticationState) {
    this.update({ user: session });
    this.update({ isAuthenticated: true });
  }

  logout() {
    this.update(createAuthentication());
  }

}

