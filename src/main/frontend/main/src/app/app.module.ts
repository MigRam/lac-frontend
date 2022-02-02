import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AdminComponent } from './admin/admin.component';
import { Api } from './shared/api';
import { ApiAnnotationService } from './shared/api-annotation.service';
import { ApiObjectService } from './shared/api-object.service';
import { ApiQueryService } from './shared/api-query.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DepositComponent } from './deposit/deposit.component';
import { ExploreAnnotationComponent } from './explore/explore-annotation.component';
import { ExploreAnnotationControlsComponent } from './explore/explore-annotation-controls.component';
import { ExploreAnnotationsComponent } from './explore/explore-annotations.component';
import { ExploreAnnotationTextComponent } from './explore/explore-annotation-text.component';
import { ExploreAnnotationTreeComponent } from './explore/explore-annotation-tree.component';
import { ExploreAnnotationWaveformComponent } from './explore/explore-annotation-waveform.component';
import { ExploreAudioComponent } from './explore/explore-audio.component';
import { ExploreComponent } from './explore/explore.component';
import { ExploreHitsComponent } from './explore/explore-hits.component';
import { ExploreImageComponent } from './explore/explore-image.component';
import { ExploreMediaComponent } from "./explore/explore-media.component";
import { ExploreNavComponent } from "./explore/explore-nav.component";
import { ExploreSearchFacetsComponent } from './explore/explore-search-facets.component';
import { ExploreSearchFieldComponent } from './explore/explore-search-field.component';
import { ExploreSearchHitComponent } from './explore/explore-search-hit.component';
import { ExploreSearchHitsComponent } from './explore/explore-search-hits.component';
import { ExploreService } from './explore/explore.service';
import { IndexComponent } from './index/index.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  declarations: [
        AppComponent,
        AdminComponent,
        DepositComponent,
        ExploreAnnotationComponent,
        ExploreAnnotationsComponent,
        ExploreAnnotationControlsComponent,
        ExploreAnnotationTextComponent,
        ExploreAnnotationTreeComponent,
        ExploreAnnotationWaveformComponent,
        ExploreAudioComponent,
        ExploreComponent,
        ExploreHitsComponent,
        ExploreImageComponent,
        ExploreMediaComponent,
        ExploreNavComponent,
        ExploreSearchFacetsComponent,
        ExploreSearchFieldComponent,
        ExploreSearchHitComponent,
        ExploreSearchHitsComponent,
        IndexComponent
    ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
      Api,
      ApiAnnotationService,
      ApiObjectService,
      ApiQueryService,
      ExploreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
