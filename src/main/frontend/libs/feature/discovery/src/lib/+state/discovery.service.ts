import { HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { AbstractQueryService, ObjectApiService, QueryApiService } from "@frontend/data";
import { Observable } from "rxjs";
import { finalize, first, tap } from "rxjs/operators";
import { DiscoveryState, DiscoveryStore } from './discovery.store';
import { DiscoveryFacets } from './discovery-facets';

const PARAMS = new HttpParams();

@Injectable({ providedIn: 'root' })
export class DiscoveryService extends NgEntityService<DiscoveryState> implements AbstractQueryService {

  ODataHits$: Observable<any>;
  inProgress: boolean;

  selectorCount = PARAMS.set('$count', 'true');
  selectorFacets = new DiscoveryFacets();

  constructor(
    protected store: DiscoveryStore,
    private querySvc: QueryApiService,
    private objectSvc: ObjectApiService,
    private route: ActivatedRoute
  ) {
    super(store);
  }

  query(value): any {

    this.inProgress = true;
    this.ODataHits$ = this.querySvc
      .query(
        PARAMS.set('$search', value)
        .append('autocomplete', 'true')
        .append('highlight', 'true')
        .append('$count', 'true')
        .append('facets', this.selectorFacets.toQuerySelector())
        )
      .pipe(
        finalize(() => this.inProgress = false),
        first(),
        tap(
          data => { this.store.set(data) },
          errors => { this.store.setError(errors) },
          () => { })
      )
  }

  queryAll(): any {
    return this.querySvc.query(PARAMS.set('$search', '*'))
  }

  filter(operator, keyword): any {
    return this.querySvc.query(PARAMS.set('$filter', `${operator} ${keyword}`))
  }

  querySelectorsMap(): any {

  }

  /** */

  filterById(id) {
    return this.querySvc.query(
      PARAMS
        .set('$filter', `id eq ${id}`))
  }

  queryExpandParentOf(id) {
    return this.objectSvc.getObject(id, PARAMS
      .set('$expand', 'parentOf')
    )
  }

  queryParentObjects() {
    return this.objectSvc.getObjects(
      PARAMS
        .set('$pretty', 'true')
    );
  }

  queryByUrlParams() {
    this.route.queryParams.subscribe(params => {
      const queryParam = params.query;
      if (queryParam !== undefined || queryParam !== '') {
        // ajax request
      }
    });
  }

  startMap() {
    return this.querySvc.query(
      PARAMS
        .set('$count', 'true')
        .set('$search', '*')
    )
    //  .subscribe(console.log)
  }


  startExplorePanel() {
    return this.querySvc.query(
      PARAMS
        .set('$top', '0')
        // .set('facets', 'Keywords:100,ObjectLanguage:100,Country:100')
    )
     // .subscribe(data => this.store.update((e) => { console.log(e) }))
  }

  startFacetsPanel() {
    return this.querySvc.query(
      PARAMS
        .set('$top', '0')
        // .set('facets', 'ObjectLanguage,Country,Region,Keywords,ResourceMimeType,MetadataType')
    )
    // .subscribe(data => this.store.update(  data ))
  }

}
