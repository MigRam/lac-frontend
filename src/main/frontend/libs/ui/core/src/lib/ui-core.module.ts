import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about.component";
import { NavigationComponent } from "./navigation.component";
import { ImpressumComponent } from "./impressum.component";
import { FooterComponent } from "./footer.component";
import { UiMaterialDesignModule } from "@frontend/ui/material-design";
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AuthModule} from "@frontend/auth";

@NgModule({
  imports: [CommonModule, RouterModule, FontAwesomeModule, AuthModule, UiMaterialDesignModule],
  declarations: [AboutComponent, NavigationComponent, ImpressumComponent, FooterComponent],
  exports: [AboutComponent, NavigationComponent, ImpressumComponent, FooterComponent],
  entryComponents: [AboutComponent]
})
export class UiCoreModule {}
