import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DiscoveryService } from '../+state';

@Component({
  selector: 'frontend-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {

  collectionData$: Observable<any>;
  collectionBundles$: Observable<any>;

  constructor(
    private router: Router,
    private discoverySvc: DiscoveryService
  ) { }

  ngOnInit() {
    const collectionId = this.router.url.replace('/collection/', 'hdl:');
    this.collectionData$ = this.discoverySvc.filterById(collectionId);
    this.collectionBundles$ = this.discoverySvc.queryExpandParentOf(collectionId);
  }

  viewBundle(bundle) {
    this.router.navigateByUrl(`/bundle/${bundle.getRouteId()}`);
  }

}
