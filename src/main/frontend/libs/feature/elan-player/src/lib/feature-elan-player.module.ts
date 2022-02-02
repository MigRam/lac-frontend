import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UiMaterialDesignModule} from "@frontend/ui/material-design";
import {IndexComponent} from './index.component';
import {ElanPlayerRoutingModule} from "./elan-player-routing.module";

@NgModule({
  imports: [CommonModule, RouterModule, UiMaterialDesignModule, ElanPlayerRoutingModule],
  declarations: [IndexComponent]
})
export class FeatureElanPlayerModule {}
