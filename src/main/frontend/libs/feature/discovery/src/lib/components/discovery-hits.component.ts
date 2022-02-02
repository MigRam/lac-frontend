import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'frontend-discovery-hits',
  template: `
  <mat-card *ngIf="hit">
    <mat-card-header>
      <span mat-card-avatar>
        <ui-discovery-icons [fileType]="hit.getType()" [iconSize]="'2x'"></ui-discovery-icons>
      </span>
      <mat-card-title>
        <a class="mat-title" [innerHTML]="getTitle()" (click)="navigate(hit)"></a> &nbsp;
        <span class="mat-small" [innerHTML]="getType()"></span> &nbsp;
        <span *ngIf="hit?.isCollection()">
          <ui-discovery-resource-icons [resource]="hit?.getResourceType()" [iconSize]="'2x'" class="set-right">
          </ui-discovery-resource-icons>
        </span>
        <span *ngIf="hit?.isBundle()">
          <ui-discovery-resource-icons [resource]="hit?.getResourceMimeType()" [iconSize]="'2x'" class="set-right">
          </ui-discovery-resource-icons>
        </span>
        <p class="mat-small" *ngIf="hit?.isBundle()">
          <span>Part of Collection: </span>
          <span [innerHTML]="getCollectionName()"></span>
        </p>
      </mat-card-title>

      <mat-card-subtitle>
        <p matLine>
          <span class="mat-small" [innerHTML]="getDescription()"></span>
        </p>
      </mat-card-subtitle>
    </mat-card-header>

    <mat-card-content>
      <mat-expansion-panel #panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            {{ panel.expanded ? 'Detailed information' : 'Show more information' }}
          </mat-panel-title>
        </mat-expansion-panel-header>
        <p class="mat-body-1" matLine [innerHTML]="hit?.Description"></p>
        <mat-chip-list>
          <mat-chip *ngFor="let keyword of hit.getKeywords()" color="isKeyword" selected>
            <span [innerHTML]="keyword"></span>
          </mat-chip>
          <mat-chip *ngFor="let language of hit.getLanguages()" color="isLanguage" selected>
            <span [innerHTML]="language"></span>
          </mat-chip>
          <mat-chip *ngFor="let country of hit.getCountry()" color="isLocation" selected>
            <span [innerHTML]="country"></span>
          </mat-chip>
          <mat-chip *ngFor="let location of hit.getLocation()" color="isLocation" selected>
            <span [innerHTML]="location"></span>
          </mat-chip>
          <mat-chip *ngFor="let region of hit.getRegion()" color="isLocation" selected>
            <span [innerHTML]="region"></span>
          </mat-chip>
        </mat-chip-list>
      </mat-expansion-panel>
    </mat-card-content>

    <mat-card-footer>
    </mat-card-footer>
  </mat-card>
  `,
  styles: [`
  mat-card {
    max-width: 100%;
    margin-top: 5px;
  }
  
  .set-right {
    float: right;
  }  
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoveryHitsComponent implements OnDestroy {

  private _hit: any;

  @Input()
  set hit(hit: any) {
    this._hit = hit;
  }

  get hit(): any {
    return this._hit;
  }

  getHighlights() {
    const { Highlight, ...match } = this._hit;
    return Object.assign(match, Highlight) || '<no results data available>';
  }

  getTitle() {
    return this.getHighlights().Title || this._hit.Title;
  }

  getType() {
    return this.getHighlights().MetadataType || this._hit.MetadataType;
  }

  getDescription() {
    return this.getHighlights().Description;
  }

  getCollectionName() {
    return this.getHighlights().ProjectName;
  }

  constructor(private router: Router) {  }

  navigate(item) {
    this.router.navigateByUrl(`/${item.getRoutePrefix()}/${item.getRouteId()}`);
  }

  ngOnDestroy() {
    
  }
}
