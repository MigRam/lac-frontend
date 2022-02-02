import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';

import { Api } from '../shared/api';
import { ExploreService } from './explore.service';
import { OdataEntityObject } from "../shared/odata/odata-entity-object";

@Component({
  selector: 'explore-media',
  templateUrl: 'explore-media.component.html',
  styleUrls: ['explore-media.component.css']
})
export class ExploreMediaComponent {

  @Input() odata: OdataEntityObject;

  display: string = "";

  constructor(
    private domSanitizer: DomSanitizer,
    public exploreService: ExploreService
  ) {
  }

  close() {
    this.exploreService.hideMedia();
  }

  type(): string {
    return this.odata.contentType;
  }

  src(): SafeUrl {
    console.log(this.odata.id);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(Api.MEDIA + "/" + this.odata.id);
  }

  isAudio(): boolean {
    return this.odata.contentType && this.odata.contentType.startsWith("audio/");
  }

  isImage(): boolean {
    return this.odata.contentType && this.odata.contentType.startsWith("image/");
  }

  isPdf(): boolean {
    return this.odata.contentType && this.odata.contentType.startsWith("application/pdf");
  }

  isVideo(): boolean {
    return this.odata.contentType && this.odata.contentType.startsWith("video/");
  }

  isText(): boolean {
    return this.odata.contentType && this.odata.contentType.startsWith("text/");
  }
}
