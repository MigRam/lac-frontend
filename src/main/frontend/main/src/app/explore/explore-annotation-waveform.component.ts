import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { OdataEntityCanvas } from "../shared/odata/odata-entity-canvas";
import { Api } from "../shared/api";

@Component({
  selector: "explore-annotation-waveform",
  templateUrl: "explore-annotation-waveform.component.html",
  styleUrls: ["explore-annotation.component.css"]
})
export class ExploreAnnotationWaveformComponent implements OnChanges {

  @Input() odataCanvas: OdataEntityCanvas;

  @Input() currentTime: number;

  @ViewChild("viewChildTiles") viewChildTiles: ElementRef;

  tiles: Array<any>;

  lastTile: any;

  tileDuration: number = 10;

  tileDurationLast: number = 10;

  tileWidth: number = 1000;

  tileWidthLast: number = 1000;

  tileHeight: number = 200;

  zoomFactor: number = 1;

  visibleTiles: Array<number>;

  lastVisibleTile: number = 0;

  viewBoxWidth: number;

  viewBoxHeight: number = this.tileHeight * 2;

  constructor() {
    this.tiles = [];
    this.visibleTiles = [0, 1, 2, 3, 4];
  }

  draw(currentTime: number) {
    this.tilesVisible(currentTime);
    this.viewChildTiles.nativeElement.scrollLeft = currentTime / this.tileDuration * this.zoomFactor;
  }

  tilesVisible(currentTime: number) {
    let tileNum = Math.round(currentTime / 1000 / this.tileDuration);
    if (tileNum != this.lastVisibleTile) {
      this.lastVisibleTile = tileNum;
      for(let t = 0; t < this.visibleTiles.length; t++) {
        this.visibleTiles[t] = tileNum + t - 2;
      }
    }
  }

  imageUrl(odataCanvas: OdataEntityCanvas, tileNum: number, filter: string, last: boolean = false): string {
    let identifier = odataCanvas.media[0].id;
    let section = (tileNum * this.tileDuration) + "," + (!last ? this.tileDuration : this.tileDurationLast);
    let region = "full";
    let size = !last ? this.tileWidth + "," + this.tileHeight : this.tileWidthLast + "," + this.tileHeight;
    let rotation = "0";
    let format = "default.png";
    let params = [identifier, section, region, size, rotation, filter, format];
    let url = Api.MEDIA + "/" + params.join("/");
    return url;
  }

  initTiles(odataCanvas: OdataEntityCanvas): void {
    let numImages = Math.ceil(odataCanvas.duration / this.tileDuration);
    this.tileDurationLast = Math.floor(odataCanvas.duration % this.tileDuration);
    this.tileWidthLast = Math.floor(this.tileDurationLast / this.tileDuration * this.tileWidth);
    this.viewBoxWidth = (numImages) * this.tileWidth + this.tileWidthLast;
    for (let num = 0; num < numImages - 1; num++) {
      this.tiles.push({
        num: num,
        spectrumUrl: this.imageUrl(odataCanvas, num, "spectrum"),
        waveformUrl: this.imageUrl(odataCanvas, num, "waveform")
      });
    }
    /*
    this.lastTile = {
      num: numImages,
      spectrumUrl: this.imageUrl(odataCanvas, numImages, "spectrum", true),
      waveformUrl: this.imageUrl(odataCanvas, numImages, "waveform", true)
    };
    */
  }

  zoom(factor: number): void {
    this.zoomFactor = factor;
  }

  isVisible(tile: any): boolean {
    return this.visibleTiles.indexOf(tile.num) >= 0;
  }

  scrollTo(scrollLeft: number): void {
    this.viewChildTiles.nativeElement.scrollLeft = scrollLeft;
  }

  ngOnChanges(changes: SimpleChanges) {
    let odataCanvas = changes["odataCanvas"];
    if (odataCanvas.currentValue && odataCanvas.currentValue.media && odataCanvas.currentValue.media[0].id) {
      this.initTiles(odataCanvas.currentValue);
    }
  }
}
