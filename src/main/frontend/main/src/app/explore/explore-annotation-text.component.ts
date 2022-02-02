import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { OdataEntityAnnotationLayer} from "../shared/odata/odata-entity-annotation-layer";
import { OdataEntityCanvas } from "../shared/odata/odata-entity-canvas";

@Component({
  selector: 'explore-annotation-text',
  templateUrl: 'explore-annotation-text.component.html',
  styleUrls: ['explore-annotation.component.css']
})
export class ExploreAnnotationTextComponent implements OnChanges {

  @Input() odataCanvas: OdataEntityCanvas;

  @Input() odataLayers: Array<OdataEntityAnnotationLayer>;

  @Output() onScroll: EventEmitter<any> = new EventEmitter()

  @ViewChild("viewChildLayers") viewChildLayers: ElementRef;

  viewBoxWidth: number;

  offsetWidth: number = 0;

  mainTiers: Array<OdataEntityAnnotationLayer>;

  zoomFactor: number = 1;

  userScroll: boolean = false;

  lastX: number = 0;

  visibleResources: any = {};

  tile: number = 0;

  draw(currentTime: number) {
    this.tile = Math.floor(currentTime / 10000);
    this.viewChildLayers.nativeElement.scrollLeft = currentTime / 10 * this.zoomFactor;
  }

  initViewbox(odataCanvas: OdataEntityCanvas) {
    this.viewBoxWidth = odataCanvas.duration * 100;
  }

  initResources(odataLayers: Array<OdataEntityAnnotationLayer>) {
    for(let layer of odataLayers) {
      this.visibleResources[layer.id] = {};
      for(let annotation of layer.resources) {
        let startTile = Math.floor(annotation.selector.offset / 1000 / 10);
        if (!this.visibleResources[layer.id][startTile]) this.visibleResources[layer.id][startTile] = [];
        this.visibleResources[layer.id][startTile].push(annotation);
        let endTile = Math.floor(annotation.selector.offset + annotation.selector.length / 1000 / 10);
        if (!this.visibleResources[layer.id][endTile]) this.visibleResources[layer.id][endTile] = [];
        this.visibleResources[layer.id][endTile].push(annotation);
      }
    }
  }

  zoom(factor: number): void {
    this.zoomFactor = factor;
    this.viewChildLayers.nativeElement.scrollLeft += ((this.viewBoxWidth * factor) - this.viewBoxWidth);
  }

  emitScroll(event) {
    if (this.userScroll) {
      let scrollLeft = this.viewChildLayers.nativeElement.scrollLeft;
      let currentTime = scrollLeft / 100;
      this.onScroll.emit({
        scrollLeft: scrollLeft,
        currentTime: currentTime
      });
    }
  }

  onMouseDown() {
    this.userScroll = true;
  }

  onMouseUp() {
    this.userScroll = false;
  }

  onDragStart(event) {
    this.userScroll = true;
    this.lastX = event.clientX;
  }

  onDragEnd(event) {
    this.userScroll = false;
    this.lastX = event.clientX;
  }

  onDrag(event) {
    let x = event.clientX;
    let diff = this.lastX - x;
    this.lastX = x;
    if (diff < 10 && diff > -10) {
      this.viewChildLayers.nativeElement.scrollLeft += diff;
      this.emitScroll(null);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    let odataCanvas = changes["odataCanvas"];
    if (odataCanvas && odataCanvas.currentValue && odataCanvas.currentValue.media && odataCanvas.currentValue.media[0].id) {
      this.initViewbox(odataCanvas.currentValue);
    }
    let odataLayers = changes["odataLayers"];
    if (odataLayers && odataLayers.currentValue) {
      this.initResources(odataLayers.currentValue);
    }
  }
}
