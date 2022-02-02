import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'frontend-footer',
  template: `
  <mat-toolbar color="primary">
    <section fxLayout="row" fxLayoutAlign="center center">
      <div *ngFor="let item of supporters">
        <a mat-button [href]="item?.link" [target]="item?.display" matTooltip="{{item?.name}}">
          <img [ngClass]="item.size" [src]="item?.image" />
        </a>
      </div>

      <mat-list dense>
        <mat-list-item>
          <a class="navbar-links" mat-button [routerLink]="['.']" matTooltip="Home">HOME</a>
        </mat-list-item>
        <mat-list-item>
          <a class="navbar-links" mat-button [routerLink]="['/impressum']" matTooltip="Impressum">IMPRESSUM</a>
        </mat-list-item>
        <mat-list-item>
          <a class="navbar-links" mat-button [routerLink]="['/docs']" matTooltip="User Guide">USER GUIDES</a>
        </mat-list-item>
      </mat-list>

      <mat-list dense>
        <mat-list-item>
            <a class="navbar-links" mat-button href="mailto:lac-helpdesk@uni-koeln.de" matTooltip="LAC-Helpdesk">LAC-Helpdesk</a>
        </mat-list-item>
        <mat-list-item>
          <a class="navbar-links" mat-button href="mailto:lac-manager@uni-koeln.de" matTooltip="LAC-Manager">LAC-Manager</a>
        </mat-list-item>
      </mat-list>
  </section>

  <section class="mat-small">
    <i class="material-icons"> copyright </i>
    {{ date | date:'y' }} Copyright - Language Archive Cologne (LAC) -
    <a class="navbar-links" mat-button href="https://www.uni-koeln.de/" target="_blank" matTooltip="University of Cologne">University of Cologne</a>
  </section>
</mat-toolbar>
  `,
  styles: [`
  .mat-toolbar {
    text-align: center;
    display: inline-block;
    height: 22vh;
    padding: 5px;
  }
  
  a:hover {
    color: #232323 !important;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  date: number = Date.now();

  supporters = [
    {
      name: "Universität zu Köln - Institut für Linguistik - Allgemeine Sprachwissenschaft",
      link: "http://ifl.phil-fak.uni-koeln.de",
      display: "_blank",
      image: "lac/assets/images/logo-UZK.png",
      size: "image-is-small"
    },
    {
      name: "Data Center for the Humanities (DCH)",
      link: "http://dch.phil-fak.uni-koeln.de",
      display: "_blank",
      image: "lac/assets/images/logo-DCH.png",
      size: "image-is-big"
    },
    {
      name: "RRZK: Regionales Rechenzentrum der Universität zu Köln",
      link: "https://rrzk.uni-koeln.de",
      display: "_blank",
      image: "lac/assets/images/logo-RRZK.png",
      size: "image-is-small"
    },
    {
      name: "CLARIN - European Research Infrastructure for Language Resources and Technology",
      link: "https://www.clarin.eu",
      display: "_blank",
      image: "lac/assets/images/logo-CLARIN.png",
      size: "image-is-small"
    },
    {
      name: "LAC - Language Archive Cologne",
      link: ".",
      display: "_self",
      image: "lac/assets/images/logo-LAC.png",
      size: "image-is-small"
    }
  ];

  constructor() { }

}
