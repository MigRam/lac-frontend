import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card-header>
      <mat-card-title>
        <i class="material-icons">link</i>
        <a class="mat-h4" title="View details of {{ data.getTitle() }}" (click)="navigate(data)"> {{ data.getTitle() }} </a>
      </mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <p class="mat-caption">{{ data.getShortDescription() }}</p>
      <mat-chip *ngFor="let language of data.getLanguages() | slice:0:3" color="isLanguage" selected>
        <small [innerHTML]="language"></small>
      </mat-chip>
      <mat-chip *ngFor="let keyword of data.getKeywords() | slice:0:3" color="isKeyword" selected>
        <small [innerHTML]="keyword"></small>
      </mat-chip>
    </mat-card-content>
  `,
  styles: [``]
})
export class PopupComponent {

  @Input() data;

  constructor(private router: Router) { }

  navigate(item) {
    this.router.navigateByUrl(`/${item.getRoutePrefix()}/${item.getRouteId()}`);
  }

}
