import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { DownloadApiService, MediaApiService } from '@frontend/data';
import { Observable } from 'rxjs';
import { DiscoveryService } from '../+state';

@Component({
  selector: 'frontend-resource',
  templateUrl: './resource.component.html',
  styles: []
})
export class ResourceComponent implements OnInit {

  downloadUrl: any;
  faSave = faSave;
  resourceData$: Observable<any>;

  constructor(
    private router: Router,
    private discoverySvc: DiscoveryService,
    private downloadSvc: DownloadApiService,
    private mediaSvc: MediaApiService
    ) { }

  ngOnInit() {
    const resourceId = this.router.url.replace('/resource/', 'hdl:');
    this.downloadUrl = this.downloadSvc.requestFile(resourceId);
    this.resourceData$ = this.discoverySvc.queryExpandParentOf(resourceId);
  }

  viewParent(id) {
    this.router.navigateByUrl(`/bundle/${id.replace('hdl:', '')}`);
  }

  src(id) {
    return this.mediaSvc.getMediafile(id);
  }

}
