import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';
import { TimerObservable } from "rxjs/observable/TimerObservable";

import { ApiSelectorAnnotation } from '../shared/api-selector-annotation';
import { ApiSelectorQuery } from "../shared/api-selector-query";
import { ApiAnnotationService } from '../shared/api-annotation.service';
import { ApiQueryService } from '../shared/api-query.service';
import { OdataEntityAnnotationLayer } from "../shared/odata/odata-entity-annotation-layer";
import { OdataEntityManifest } from "../shared/odata/odata-entity-manifest";
import { OdataEntityCanvas } from "../shared/odata/odata-entity-canvas";
import { OdataEntityQuery } from "../shared/odata/odata-entity-query";

@Component({
    selector: 'explore-annotation',
    templateUrl: 'explore-annotation.component.html',
    styleUrls: ['explore-annotation.component.css']
})
export class ExploreAnnotationComponent implements OnInit {

  private error: string;

  manifestId: string;

  private apiSelectorManifest: ApiSelectorAnnotation;

  odataManifest: OdataEntityManifest;

  canvasId: string;

  private apiSelectorCanvas: ApiSelectorAnnotation;

  odataCanvas: OdataEntityCanvas;

  odataLayers: Array<OdataEntityAnnotationLayer> = [];

  odataBundle: OdataEntityQuery;

  private readonly REDRAW_INTERVAL: number = 20;

  private timer: Observable<number>;

  private redrawer: Subscription;

  @ViewChild("viewChildWaveform") viewChildWaveform;

  @ViewChild("viewChildAudio") viewChildAudio;

  @ViewChild("viewChildTree") viewChildTree;

  @ViewChild("viewChildText") viewChildText;

  scrollValue: number = 100;

  constructor(
    private route: ActivatedRoute,
    private apiAnnotationService: ApiAnnotationService,
    private apiQueryService: ApiQueryService
  ) {
    this.apiSelectorManifest = new ApiSelectorAnnotation();
    this.apiSelectorManifest.expand = ["members", "within"];
    this.apiSelectorCanvas = new ApiSelectorAnnotation();
    this.apiSelectorCanvas.expand = ["media"];
    this.timer = TimerObservable.create(0, this.REDRAW_INTERVAL);
  }

  onLoadedMetadata(): void {
  }

  onPlay(): void {
    this.redrawer = this.timer.subscribe(t => this.redraw());
  }

  onPause(): void {
    this.redrawer.unsubscribe();
  }

  onSeeked(): void {
    this.redraw();
  }

  redraw(): void {
    let currentTime = this.viewChildAudio.getCurrentTime();
    this.viewChildWaveform.draw(currentTime);
    this.viewChildText.draw(currentTime);
  }

  private odataManifestAndCanvas(): void {
    Observable.forkJoin(
      this.apiAnnotationService.manifest(this.manifestId, this.apiSelectorManifest),
      this.apiAnnotationService.canvas(this.canvasId, this.apiSelectorCanvas)
    ).subscribe(
      odata => {
          this.odataManifest = odata[0]
          this.odataCanvas = odata[1]
      },
      error => this.error = <any>error,
      () => {
        this.odataQuery()
        this.odataAnnotationLayers()
      }
    );
  }

  private odataQuery(): void {
    if (this.odataManifest.within[0]) {
      let selector = new ApiSelectorQuery();
      selector.filter = ["id", "eq", this.odataManifest.within[0].id];
      this.apiQueryService.get(selector).subscribe(
        odata => this.odataBundle = odata.value[0]
      );
    }
  }

  private odataAnnotationLayers(): void {
    let time = this.route.snapshot.params["time"] || 0;
    let selector = new ApiSelectorAnnotation();
    let observables: Array<Observable<OdataEntityAnnotationLayer>> = [];
    for (let layer of this.odataCanvas.otherContent) {
      observables.push(this.apiAnnotationService.layer(layer, selector));
    }
    Observable.forkJoin(observables).subscribe(
      odatas => {
        this.odataLayers = odatas;
        this.viewChildAudio.setCurrentTime(time);
        this.redraw();
      },
      error =>  this.error = <any>error
    );
  }

  sliderChange(event): void {
    this.scrollValue = Math.round(event.target.value * 100);
    this.viewChildWaveform.zoom(event.target.value);
    this.viewChildText.zoom(event.target.value);
  }

  onScroll(event: any): void {
    this.viewChildWaveform.scrollTo(event.scrollLeft);
    this.viewChildAudio.setCurrentTime(event.currentTime);
  }

  ngOnInit() {
    let prefix = this.route.snapshot.params["prefix"];
    let id = this.route.snapshot.params["id"];
    this.manifestId = prefix + "/" + id;
    this.canvasId = this.manifestId + "/canvas/0";
    this.odataManifestAndCanvas();
  }
}
