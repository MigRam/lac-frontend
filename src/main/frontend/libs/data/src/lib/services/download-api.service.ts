import { Injectable } from '@angular/core';
import { EndpointsService } from './endpoints.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DownloadApiService {

  DOWNLOAD_API_ENDPOINT: string = EndpointsService.DOWNLOAD;

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  requestFile(id: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.DOWNLOAD_API_ENDPOINT}/${id}`);
  }
}
