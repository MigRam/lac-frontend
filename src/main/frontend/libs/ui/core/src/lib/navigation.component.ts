import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnInit, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {
  faBook,
  faCloudUploadAlt,
  faHome,
  faInfoCircle,
  faSignInAlt,
  faSignOutAlt,
  faUserCheck,
  faUserCog
} from '@fortawesome/free-solid-svg-icons';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AboutComponent} from './about.component';
import {AuthenticationQuery, AuthenticationService} from "@frontend/auth";

@Component({
  selector: 'frontend-navigation',
  template: `
  <mat-sidenav-container>
    <mat-sidenav #drawer class="sidenav" fixedInViewport [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
      [mode]="(isHandset$ | async) ? 'over' : 'side'" [opened]="(isHandset$ | async) !== false">
      <mat-toolbar>LAC Menu</mat-toolbar>
      <mat-nav-list>
        <a mat-list-item *ngFor="let tab of links" [routerLink]="[tab?.path]" [routerLinkActive]="['active']"
          #rla="routerLinkActive" [routerLinkActiveOptions]="{exact: true}">
          {{ tab?.label }}
        </a>
      </mat-nav-list>
    </mat-sidenav>
    <mat-sidenav-content>
      <mat-toolbar color="primary">
        <a mat-button aria-label="Toggle sidenav" mat-icon-button (click)="drawer.toggle()"
          *ngIf="(isHandset$ | async)">
          <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
        </a>
        <img alt="lac logo" width="75" [src]="logo" [routerLink]="'/'" />
        <div *ngIf="(isHandset$ | async) === false">
          <span class="mat-h4"> {{ title }}</span>
        </div>
        <div class="navbar-right"></div>

        <div *ngIf="(isHandset$ | async) === false">
            <a class="navbar-links" mat-button (click)="openDialog()">
              <fa-icon [icon]="faInfo"></fa-icon>
              About
            </a>
            <ng-container *frontendUserStatus="false">      
              <a class="navbar-links" mat-button *ngFor="let tab of links" [routerLink]="[tab?.path]" [routerLinkActive]="['active']"
                #rla="routerLinkActive" [routerLinkActiveOptions]="{exact: true}">
                <fa-icon [icon]="tab?.icon"></fa-icon>
                {{ tab?.label }}
              </a>
            </ng-container>
        </div>
        
        <ng-container *frontendUserStatus="true">
          <a class="navbar-links" mat-button *ngFor="let tab of authLinks" [routerLink]="[tab?.path]" [routerLinkActive]="['active']"
              #rla="routerLinkActive" [routerLinkActiveOptions]="{exact: true}">
              <fa-icon [icon]="tab?.icon"></fa-icon>
              {{ tab?.label }}
          </a>
          <a class="navbar-links" mat-button (click)="logout()"> 
            <fa-icon [icon]="faSignOut"></fa-icon>
            Logout 
          </a>
          <button mat-button [routerLink]="['/account']" routerLinkActive="router-link-active">
            <fa-icon [icon]="faAccount"></fa-icon>
            {{(name$ | async)?.username}}
          </button>
        </ng-container>
      </mat-toolbar>
      
      <ng-content></ng-content>
      
    </mat-sidenav-content>
</mat-sidenav-container>
  `,
  styles: [`
  a:hover {
    color: #232323 !important;
  }
  `]
})
export class NavigationComponent implements OnInit {

  name$: Observable<string>;

  title = "Language Archive Cologne";
  logo = "lac/assets/images/logo-LAC.png";

  faSignIn = faSignInAlt;
  faSignOut = faSignOutAlt;
  faHome = faHome;
  faBook = faBook;
  faInfo = faInfoCircle;
  faDeposit = faCloudUploadAlt;
  faAdmin = faUserCog;
  faAccount = faUserCheck;

  @Input() links: string | Array<object>;
  @Input() authLinks: string | Array<object>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private matDialog: MatDialog,
    private authQuery: AuthenticationQuery,
    private authSvc: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.name$ = this.authQuery.user$;
  }

  openDialog() {
    this.matDialog.open(AboutComponent)
  }

  logout() {
    this.authSvc.logout();
  }

}
