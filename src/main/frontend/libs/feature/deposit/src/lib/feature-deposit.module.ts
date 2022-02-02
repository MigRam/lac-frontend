import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DepositRoutingModule } from './deposit-routing.module';
import { DepositPanelComponent } from "./deposit-panel/deposit-panel.component";
import { UiMaterialDesignModule } from "@frontend/ui/material-design";
import { ReactiveFormsModule } from "@angular/forms";
import { FiltersComponent } from './filter/filters.component';

@NgModule({
  imports: [
    CommonModule, 
    DepositRoutingModule, 
    UiMaterialDesignModule, 
    ReactiveFormsModule
  ],
  declarations: [DepositPanelComponent, FiltersComponent]
})
export class FeatureDepositModule { }
