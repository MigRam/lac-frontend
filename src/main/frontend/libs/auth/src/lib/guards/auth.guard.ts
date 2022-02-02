import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationQuery} from "../+state/authentication.query";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authQuery: AuthenticationQuery
  ) { }

  canActivate(): boolean {
    if (this.authQuery['store']['storeValue']['isAuthenticated']) {
      return true;
    }

    this.router.navigateByUrl('/login');
    return false;
  }
}
