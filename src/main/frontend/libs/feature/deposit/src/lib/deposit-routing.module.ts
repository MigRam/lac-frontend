import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositPanelComponent } from "./deposit-panel/deposit-panel.component";

const routes: Routes = [
  { path: '', component: DepositPanelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DepositRoutingModule { }
