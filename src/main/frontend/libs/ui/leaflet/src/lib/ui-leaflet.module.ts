import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LeafletMarkerClusterModule } from "@asymmetrik/ngx-leaflet-markercluster";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiMaterialDesignModule } from '@frontend/ui/material-design';
import { MapComponent, PopupComponent } from './map';

@NgModule({
  imports: [
    CommonModule,
    LeafletModule.forRoot(),
    LeafletMarkerClusterModule.forRoot(),
    UiMaterialDesignModule,
    FontAwesomeModule
  ],
  declarations: [MapComponent, PopupComponent],
  exports: [MapComponent],
  entryComponents: [MapComponent, PopupComponent]
})
export class UiLeafletModule { }
