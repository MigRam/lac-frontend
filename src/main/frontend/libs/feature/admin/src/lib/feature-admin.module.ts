import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from "./admin-routing.module";
import {UiMaterialDesignModule} from "@frontend/ui/material-design";
import {AdminPanelComponent} from "./admin-panel.component";
import {ApidocComponent} from "./apidoc.component";

@NgModule({
  imports: [CommonModule, AdminRoutingModule, UiMaterialDesignModule],
  declarations: [AdminPanelComponent, ApidocComponent]
})
export class FeatureAdminModule {}
