import {Injectable} from '@angular/core';
import {NgEntityServiceConfig} from '@datorama/akita-ng-entity-service';
import {AuthenticationStore} from './authentication.store';
import {EndpointsService} from '@frontend/data';
import {HttpClient} from "@angular/common/http";
import {shareReplay, tap} from "rxjs/operators";
import {User} from './authentication.model';
import {Router} from "@angular/router";
import {cacheable} from "@datorama/akita";
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@NgEntityServiceConfig({
  resourceName: 'login',
  baseUrl: EndpointsService.AUTH
})

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(
    protected store: AuthenticationStore,
    private http: HttpClient,
    private router: Router,
    private snackbar: MatSnackBar) {

  }

  login(username, password) {
    const request$ = this.http.post<User>( EndpointsService.AUTH, {
      username,
      password
    }).pipe(
      tap((user: User) => {
        this.store.login(user);
        this.router.navigateByUrl('/account');
        this.snackbar.open('You are successfully authenticated', user.username, {
          duration: 3000
        });
      }, (error) => { 
        this.snackbar.open('Authenticated failed!', '', {
          duration: 3000
        });
        return throwError(error);
      }),
      shareReplay()
    );

    return cacheable(this.store, request$);
  }

  logout() {
    this.store.logout();
    this.router.navigateByUrl('/');
    this.snackbar.open('You are successfully logged out', '', {
      duration: 3000
    });
  }

}
