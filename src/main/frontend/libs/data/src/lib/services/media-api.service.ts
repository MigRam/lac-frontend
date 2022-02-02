import { Injectable } from '@angular/core';
import { EndpointsService } from './endpoints.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MediaApiService {

  MEDIA_API_ENDPOINT: string = EndpointsService.MEDIA;

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  getMediafile(id: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.MEDIA_API_ENDPOINT}/${id}`);
  }
}
