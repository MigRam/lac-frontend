import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
/** modules */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/** services */
import { AbstractQueryService } from '@frontend/data';
import { UiIconsModule } from '@frontend/ui/icons';
import { UiLeafletModule } from '@frontend/ui/leaflet';
import { UiMaterialDesignModule } from '@frontend/ui/material-design';
import { UiMediaModule } from '@frontend/ui/media';
import { UiPipesModule } from '@frontend/ui/pipes';
import { UiSearchbarModule } from '@frontend/ui/searchbar';
/** Store Services */
import { DiscoveryService } from "./+state";
/** components */
import { IndexComponent, DiscoveryComponent, BundleComponent, CollectionComponent, ResourceComponent } from './container';

import {
  DiscoveryFilesTableComponent,
  TableDialogComponent,
  TableDialogHdlComponent,
  TableDialogMediafileComponent,
  DiscoveryHitsComponent,
  DiscoveryFacetsComponent,
  DiscoveryFacetsListComponent,
  CollectionTableComponent
} from './components';

/** Routing */
export const featureDiscoveryRoutes: Route[] = [
  {
    path: '', component: IndexComponent, children: [
      { path: '', component: DiscoveryComponent },
      { path: 'bundle/:prefix/:id', component: BundleComponent },
      { path: 'collection/:prefix/:id', component: CollectionComponent },
      { path: 'resource/:prefix/:id', component: ResourceComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    UiMaterialDesignModule,
    UiSearchbarModule,
    UiLeafletModule,
    UiIconsModule,
    FontAwesomeModule,
    UiMediaModule,
    UiPipesModule,
    RouterModule.forChild(featureDiscoveryRoutes)
  ],
  declarations: [
    IndexComponent,
    BundleComponent,
    CollectionComponent,
    ResourceComponent,
    DiscoveryComponent,
    DiscoveryHitsComponent,
    DiscoveryFilesTableComponent,
    TableDialogComponent,
    TableDialogHdlComponent,
    TableDialogMediafileComponent,
    DiscoveryFacetsComponent,
    DiscoveryFacetsListComponent,
    CollectionTableComponent],
  providers: [{ provide: AbstractQueryService, useClass: DiscoveryService }],
  entryComponents: [
    TableDialogComponent,
    TableDialogHdlComponent
  ]
})
export class FeatureDiscoveryModule {
}
