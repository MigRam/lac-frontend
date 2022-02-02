import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPanelComponent} from "./admin-panel.component";
import {ApidocComponent} from "./apidoc.component";

const routes: Routes = [
  {path: '', component: AdminPanelComponent, canActivate: []},
  {path: 'ka3-api', component: ApidocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
