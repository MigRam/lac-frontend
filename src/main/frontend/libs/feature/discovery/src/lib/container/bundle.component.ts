import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {faUnlockAlt} from "@fortawesome/free-solid-svg-icons/faUnlockAlt";
import {Observable} from 'rxjs';
import { DiscoveryService } from '../+state';

@Component({
  selector: 'frontend-bundle',
  templateUrl: './bundle.component.html',
  styles: []
})
export class BundleComponent implements OnInit {

  faUnLock = faUnlockAlt;
  bundleData$: Observable<any>;
  bundleFiles$: Observable<any>;

  constructor(
    private router: Router,
    private discoverySvc: DiscoveryService
  ) { }

  ngOnInit() {
    const bundleId = this.router.url.replace('/bundle/', 'hdl:');
    this.bundleData$ = this.discoverySvc.filterById(bundleId);
    this.bundleFiles$ = this.discoverySvc.queryExpandParentOf(bundleId);
  }

  viewCollection(id) {
    this.router.navigateByUrl(`/collection/${id}`);
  }

  viewResource(resource) {
    this.router.navigateByUrl(`/resource/${resource.getRouteId()}`);
  }

}
