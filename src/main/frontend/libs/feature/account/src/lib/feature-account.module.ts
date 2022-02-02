import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPanelComponent } from "./account-panel/account-panel.component";
import { UiMaterialDesignModule } from "@frontend/ui/material-design";
import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from './account/account.component';
import { AuthModule } from "@frontend/auth";

@NgModule({
  imports: [CommonModule, UiMaterialDesignModule, AccountRoutingModule, AuthModule],
  declarations: [AccountPanelComponent, AccountComponent]
})
export class FeatureAccountModule { }
