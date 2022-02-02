import { Component } from '@angular/core';

@Component({
  template: `
  <mat-toolbar>
    <mat-hint>{{documentsLinkDescription | uppercase}}</mat-hint>
    <button type="button" mat-button (click)="drawer.toggle()">
      <mat-icon>menu</mat-icon>
    </button>
  </mat-toolbar>
  <div fxLayout="row" fxLayoutAlign="space-evenly">
    <mat-sidenav-container>
      <mat-sidenav #drawer mode="side" opened>
        <mat-list dense>
          <mat-list-item *ngFor="let item of guides">
            <a matLine [routerLink]="item.path"  matTooltip="item.label" [innerHTML]="item.label"></a>
          </mat-list-item>
        </mat-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet fxFlexOffset="5"></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div>
  `,
  styles: [``]
})
export class GuidesIndexComponent {
  documentsLinkDescription = 'List of all external documents';
  guides: any = [
    { label: 'User Guides', path: '/docs' },
    { label: 'Terms of Use', path: 'terms-of-use' },
    { label: 'Mission Statement', path: 'mission-statement' },
    { label: 'Depositor Agreement', path: 'depositor-agreement' },
    { label: 'Data User Agreement', path: 'data-user-agreement' },
    { label: 'Depositor Guidelines', path: 'depositor-guidelines' },
    { label: 'Submission Guidelines', path: 'submission-guidelines' },
    { label: 'Depositing Policy', path: 'depositing-policy' },
    { label: 'Format Whitelist', path: 'format-whitelist' },
    { label: 'Archive Setup', path: 'archive-setup' },
    { label: 'Privacy Policy', path: 'privacy-policy' }
  ];
}
