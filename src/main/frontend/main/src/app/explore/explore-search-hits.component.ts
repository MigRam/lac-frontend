import { Component } from '@angular/core';

import { ExploreService } from './explore.service';

@Component({
  selector: 'explore-search-hits',
  template: `
  <div *ngIf="exploreService.odataQuery">
  <div *ngFor="let entity of exploreService.odataQuery.value; let iEntity = index">
    <h4>
      <a (click)="showHit(iEntity)">
        {{entity.Type}}: {{entity.ProjectDisplayName || entity.Title || "?Not Found"}}
        <small *ngIf="(entity.Title != entity.ProjectDisplayName)">
          {{entity.Title || entity.ProjectDisplayName || "?"}}
        </small>
      </a>
    </h4>
    
    <p>
      <span *ngFor="let highlight of entity.a5Highlight">
        <span *ngIf="highlight.fieldName.endsWith('.raw')">
          <button type="button" class="btn btn-xs">
            <span>{{highlight.fieldName.replace(".raw", "")}}:</span>
            <span [innerHTML]="highlight.matched"></span>
          </button>
        </span>
      </span>
    </p>

    <p>
      <span *ngFor="let highlight of entity.a5Highlight">
        <span *ngIf="!highlight.fieldName.endsWith('.raw')">
          <strong><small>{{highlight.fieldName}}: </small></strong>
          <span [innerHTML]="highlight.matched">&nbsp;</span>
        </span>
      </span>
    </p>
    
    <p *ngIf="!exploreService.selectorQuery.search">
      <strong>  {{entity.ProjectDescription || entity.Description}} </strong>
    </p>
    <hr>
  </div>
</div>

  
  `
})
export class ExploreSearchHitsComponent {

  constructor(
      public exploreService: ExploreService
  ) {}

  showHit(skip: number): void {
    this.exploreService.selectorQuery.skip = skip;
    this.exploreService.selectorQuery.top = 1;
    this.exploreService.query();
    this.exploreService.navigate();
  }
}

