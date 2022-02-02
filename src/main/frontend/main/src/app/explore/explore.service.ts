import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/observable/forkJoin';

import { ApiObjectService } from '../shared/api-object.service';
import { ApiQueryService } from '../shared/api-query.service';
import { ApiSelectorObject } from '../shared/api-selector-object';
import { ApiSelectorQuery } from '../shared/api-selector-query';
import { ExploreFacets } from './explore-facets';
import { OdataCollectionObject } from '../shared/odata/odata-collection-object';
import { OdataCollectionQuery } from '../shared/odata/odata-collection-query';
import { OdataEntityObject } from '../shared/odata/odata-entity-object';

@Injectable()
export class ExploreService {

  apiError: string;

  facets: ExploreFacets;

  // odata-collection-query
  odataQuery: OdataCollectionQuery;
  odataParentQuery: OdataCollectionQuery;

  // api-selector-query
  selectorQuery: ApiSelectorQuery;
  selectorParentQuery: ApiSelectorQuery;

  // odata-entity-object
  odataObject: OdataEntityObject;
  odataParentObject: OdataEntityObject;
  odataEntityMedia: OdataEntityObject;

  // api-selector-object
  selectorObject: ApiSelectorObject;
  selectorParentObject: ApiSelectorObject;
  selectorParentObjects: ApiSelectorObject;

  // odata-collection-object
  odataParentObjects: OdataCollectionObject;

  _showMedia: boolean;
  navigateInternal: boolean = false;

  constructor(
    private router: Router,
    private apiObjectService: ApiObjectService, // api-object.service
    private apiQueryService: ApiQueryService    // api-query.service
  ) {
    this.facets = new ExploreFacets(); // explore-facets

    this.selectorQuery = new ApiSelectorQuery();
    this.selectorQuery.autocomplete = true;
    this.selectorQuery.count = true;
    this.selectorQuery.highlight = true;
    this.selectorQuery.facets = this.facets.toSelector(); //explore-facets service

    this.selectorObject = new ApiSelectorObject();
    this.selectorObject.expand = ["parentOf"];

    this.selectorParentObject = new ApiSelectorObject();
    this.selectorParentObject.expand = ["parentOf"];

    this.selectorParentQuery = new ApiSelectorQuery();

    this.selectorParentObjects = new ApiSelectorObject();
  }

  isHit(): boolean {
    return this.selectorQuery.top === 1;
  }

  isHits(): boolean {
    return !this.isHit();
  }

  isMedia(): boolean {
    return this._showMedia;
  }

  showMedia(entity: OdataEntityObject): void {
    this.odataEntityMedia = entity;
    this._showMedia = true;
  }

  hideMedia(): void {
    this.odataEntityMedia = null;
    this._showMedia = false;
  }

  reset(): void {
    this.selectorQuery.skip = 0;
    this.selectorQuery.top = 10;
    this.odataObject = null;
    this.odataParentObject = null;
    this.odataParentQuery = null;
    this.odataParentObjects = null;
  }

  query(): void {
    this.apiQueryService.get(this.selectorQuery).subscribe(
      odata => {
        this.odataQuery = odata;
        console.log(this.odataQuery);

      },
      errors => { 
        this.apiError = errors[0] || "";
        this.apiError += errors[1];
      },
      () => {
        if (!this.odataQuery.value[0]) return;
        let id: string = this.odataQuery.value[0].id[0];
        this.selectorParentObjects.filter = ["parentOf", "eq", id];
        if (this.selectorQuery.top === 1) {
          this.object(id);
          this.parentObjects();
        }
        this.facets.compile(this.odataQuery);
      }
    )
  }

  filter(): void {
    let ands: Array<string> = [];
    for(let i in this.facets.all) {
      let facet = this.facets.all[i];
      let ors: Array<string> = [];
      if (this.facets.has(facet)) {
        let op1: string = this.facets.operator[i] === true ? " eq " : " ne ";
        let op2: string = this.facets.operator[i] === true ? " or " : " and ";
        for(let j of this.facets.filter[i]) {
          ors.push(facet + op1 + "\"" + j + "\"");
        }
        if (ors.length > 0) ands.push("(" + ors.join(op2) + ")");
      }
    }
    this.selectorQuery.drill = null;
    this.selectorQuery.drill = ands.length > 0 ? ands.join(" and ") : null;
    this.reset();
    this.query();
    this.navigate();
  }

  navigate(): void {
    this.navigateInternal = true;
    this.router.navigate(["explore", this.selectorQuery.search || "*", this.selectorQuery.skip,
      this.selectorQuery.top]).then(() => {
        this.navigateInternal = false;
    });
  }

  object(objectId: string): void {
    this.apiObjectService.object(objectId, this.selectorObject).subscribe(
        odata => this.odataObject = odata,
        error => this.apiError = <any>error
    );
  }

  parentObjects(): void {
    this.apiObjectService.objects(this.selectorParentObjects).subscribe(
      odata => this.odataParentObjects = odata,
      error => this.apiError = <any>error,
      () => {
        if (!this.odataParentObjects.value[0]) return;
        let id: string = this.odataParentObjects.value[0].id;
        this.parentObject(id);
        this.parentQuery(id);
      }
    );
  }

  parentObject(objectId: string): void {
    this.apiObjectService.object(objectId, this.selectorParentObject).subscribe(
      odata => this.odataParentObject = odata,
      error => this.apiError = <any>error
    );
  }

  parentQuery(objectId: string): void {
    this.selectorParentQuery.filter = ["id", "eq", objectId];
    this.apiQueryService.get(this.selectorParentQuery).subscribe(
      odata => this.odataParentQuery = odata,
      error => this.apiError = <any>error
    );
  }
}
