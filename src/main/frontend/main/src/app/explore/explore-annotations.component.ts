import { Component } from "@angular/core";

import { Observable } from 'rxjs/Observable';

import { Api } from "../shared/api";
import { ApiAnnotationService } from "../shared/api-annotation.service";
import { ApiSelectorAnnotation } from "../shared/api-selector-annotation";
import { OdataCollectionAnnotation } from "../shared/odata/odata-collection-annotation";
import { OdataEntityAnnotation } from "../shared/odata/odata-entity-annotation";
import { OdataEntityCanvas } from "../shared/odata/odata-entity-canvas";

@Component({
  selector: "explore-annotations",
  templateUrl: "explore-annotations.component.html",
  styleUrls: ["explore-annotations.component.css"]
})
export class ExploreAnnotationsComponent {

  selector: ApiSelectorAnnotation;

  hits: OdataCollectionAnnotation;

  playSegments: Array<boolean>;

  canvases: any;

  canvasesLoaded: boolean = false;

  facets: any;

  constructor(
    private apiAnnotationService: ApiAnnotationService
  ) {
    this.selector = new ApiSelectorAnnotation();
    this.selector.top = 100;
    this.selector.count = true;
    this.selector.orderby = ["target"];
    this.selector.highlight = true;
    this.selector.facets = ["_query.Region", "_query.ObjectLanguage", "_query.Creator"];
    this.playSegments = new Array(this.selector.top).fill(false);
    this.onSearch();
  }

  onSearch() {
    if (!this.selector.search || this.selector.search == "") return;
    this.apiAnnotationService.annotations(this.selector).subscribe(
      odata => {
        this.hits = odata;
        this.playSegments.fill(false);
      },
      error => {
        console.log(error);
      }
    );
  }

  onPlaySegment(i: number) {
    this.playSegments[i] = true;
    this.loadCanvases();
  }

  loadCanvases() {
    if (this.canvases != undefined) return;
    this.canvases = {};
    let canvases = {};
    let observables: Array<Observable<OdataEntityCanvas>> = [];
    let selector = new ApiSelectorAnnotation();
    for(let hit of this.hits.value) {
      if (!canvases[hit.target]) observables.push(this.apiAnnotationService.canvas(hit.target, selector));
      canvases[hit.target] = true;
    }
    Observable.forkJoin(observables).subscribe(
      odatas => {
        for(let odata of odatas) {
          this.canvases[odata.id] = odata;
        }
        this.canvasesLoaded = true;
      },
      error => console.error(error)
    );
  }

  annotationLink(hit: OdataEntityAnnotation): Array<string> {
    let manifest = hit.id.split("/annotation/").slice(0, 1)[0].split("/");
    let offset = hit.selector.offset / 1000;
    return ["/annotation"].concat(manifest).concat([offset.toString()]);
  }

  mediaFragmentLink(hit: OdataEntityAnnotation): string {
    if (!this.canvases[hit.target] || !this.canvases[hit.target].media) return "";
    let media = this.canvases[hit.target].media;
    let link = Api.MEDIA + "/" + media[0] + "/" + hit.selector.offset / 1000 + "," +
      hit.selector.length / 1000 + "/full/full/0/none/default.mp4";
    return link;
  }

  selectFacet(faceName: string, bucketKey: string): void {
    this.facets = {};
    this.facets[faceName] = bucketKey;
    this.selector.drill = [faceName, "eq", "\"" + bucketKey + "\""];
    this.onSearch();
  }

  deselectFacet(faceName: string, bucketKey: string): void {
    this.facets = {};
    this.onSearch();
  }

  facetSelected(faceName: string, bucketKey: string): boolean {
    return this.facets && this.facets[faceName] == bucketKey;
  }
}
