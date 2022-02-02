import { Component } from '@angular/core';

import { Api } from '../shared/api';
import { ExploreService } from './explore.service';

@Component({
  selector: 'explore-search-hit',
  templateUrl: 'explore-search-hit.component.html'
})
export class ExploreSearchHitComponent {

  constructor(
      public exploreService: ExploreService
  ) {}

  thumbnailMediaReadLink(entity: any): string {
    if (!entity || !entity.contentType) return null;
    if(entity.contentType.startsWith("image")) {
      return Api.MEDIA + "/" + entity.id + "/full/full/,126/0/none/default.jpg";
    } else if (entity.contentType.startsWith("video")) {
      return Api.MEDIA + "/" + entity.id + "/10,0/full/,126/0/thumbnail/default.jpg";
    } else if (entity.contentType.startsWith("audio")) {
      return Api.MEDIA + "/" + entity.id + "/10,1/full/126,126/0/waveform/default.png";
    }
    return null;
  }

  isLastHit(): boolean {
    let hit: number = <number>this.exploreService.selectorQuery.skip;
    return hit + 1 >= this.exploreService.odataQuery.odataCount;
  }

  isFirstHit(): boolean {
    let hit: number = <number>this.exploreService.selectorQuery.skip;
    return hit <= 0;
  }

  nextHit() {
    let hit: number = <number>this.exploreService.selectorQuery.skip;
    hit = this.isLastHit() ? hit : (hit + 1);
    this.exploreService.selectorQuery.skip = hit;
    this.exploreService.query();
    this.exploreService.navigate();
  }

  previousHit() {
    let hit: number = <number>this.exploreService.selectorQuery.skip;
    hit = this.isFirstHit() ? hit : (hit - 1);
    this.exploreService.selectorQuery.skip = hit;
    this.exploreService.query();
    this.exploreService.navigate();
  }

  mediaReadLink(entity: any): string {
    return entity.id ? Api.MEDIA + "/" + entity.id : null;
  }

  isAnnotation(entity: any): boolean {
    return entity && entity.fileUri && entity.fileUri.endsWith(".eaf");
  }

  isAudio(entity: any): boolean {
    return entity && entity.contentType && entity.contentType.startsWith("audio");
  }

  isVideo(entity: any): boolean {
    return entity && entity.contentType && entity.contentType.startsWith("video");
  }

  isImage(entity: any): boolean {
    return entity && entity.contentType && entity.contentType.startsWith("image");
  }

  isText(entity: any): boolean {
    return entity && entity.contentType && entity.contentType.startsWith("text");
  }

  isPdf(entity: any): boolean {
    return entity && entity.contentType && entity.contentType.endsWith("pdf");
  }

  isFile(entity: any): boolean {
    return !this.isAudio(entity) && !this.isVideo(entity) && !this.isImage(entity) && !this.isText(entity) &&
        !this.isPdf(entity);
  }

  parentOf(): Array<string> {
    let pp: Array<string> = [];
    for(let p of this.exploreService.odataParentObject.parentOf) {
      pp.push(p.label || "?");
    }
    return pp;
  }

  close() {
    this.exploreService.selectorQuery.skip = 0;
    this.exploreService.selectorQuery.top = 10;
    this.exploreService.query();
    this.exploreService.navigate();
  }
}
