import { Component } from '@angular/core';

@Component({
  selector: 'lac-root',
  template: `
  <mat-drawer-container class="services-container" autosize>
    <mat-drawer #drawer class="services-sidenav" mode="side" opened>
        <mat-nav-list>
            <a mat-list-item [routerLink]="'/'">Home</a>
            <a mat-list-item [routerLink]="['/form']">JobForm</a>
            <a mat-list-item href="#"></a>
        </mat-nav-list>
    </mat-drawer>

    <div class="services-sidenav-content">
        <mat-toolbar color="primary">
            <button type="button" mat-button (click)="drawer.toggle()">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
            <img alt="lac logo" width="150" [src]="logo" [routerLink]="'/'" />
        </mat-toolbar>

        <router-outlet></router-outlet>
    </div>
  </mat-drawer-container>
  `,
  styles: [`
  .services-container { height: 90% }
  .services-sidenav-content { height: 100% }
  .services-sidenav { }
  `]
})
export class AppComponent {
  title = 'DEMO: AV Services';
  logo = 'lac-av-services/assets/logo-lac.png';
}
