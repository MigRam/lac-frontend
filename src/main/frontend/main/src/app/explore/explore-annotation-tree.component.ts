import {Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import { OdataEntityAnnotationLayer } from "../shared/odata/odata-entity-annotation-layer";

@Component({
  selector: "explore-annotation-tree",
  templateUrl: "explore-annotation-tree.component.html"
})
export class ExploreAnnotationTreeComponent implements OnChanges {

  @Input() odataLayers: Array<OdataEntityAnnotationLayer>;

  list: Array<string>;

  levels: Array<number>;

  initList(layers: Array<OdataEntityAnnotationLayer>) {
    this.list = [];
    for(let layer of layers) {
      this.list.push(layer.id);
    }
  }

  initLevels(layers: Array<OdataEntityAnnotationLayer>) {
    this.levels = new Array(layers.length);
    for (let i of [0, 0]) {
      for(let l = 0; l < layers.length; l++) {
        if (!layers[l].hasParent) {
          this.levels[l] = 0;
        } else {
          let index = this.list.indexOf(layers[l].hasParent);
          let level = this.levels[index] + 1;
          this.levels[l] = level;
        }
      }
    }
  }

  array(length: number): Array<number> {
    return new Array(length);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["odataLayers"].currentValue.length > 0) {
      this.initList(changes["odataLayers"].currentValue);
      this.initLevels(changes["odataLayers"].currentValue);
    }
  }
}
