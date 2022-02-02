import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiscoveryIconsComponent } from './discovery-icons/discovery-icons.component';
import { DiscoveryMediaFileIconsComponent } from './discovery-media-file-icons/discovery-media-file-icons.component';
import { DiscoveryResourceIconsComponent } from './discovery-resource-icons/discovery-resource-icons.component';
import { UiMaterialDesignModule } from '@frontend/ui/material-design';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, UiMaterialDesignModule],
  declarations: [DiscoveryIconsComponent, DiscoveryMediaFileIconsComponent, DiscoveryResourceIconsComponent],
  exports: [DiscoveryIconsComponent, DiscoveryMediaFileIconsComponent, DiscoveryResourceIconsComponent]
})
export class UiIconsModule {}
