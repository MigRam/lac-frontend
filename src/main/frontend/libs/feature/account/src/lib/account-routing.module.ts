import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccountPanelComponent} from "./account-panel/account-panel.component";
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  {
    path: '', component: AccountPanelComponent, children: [
      { path: '', component: AccountComponent },
      { path: 'deposit', loadChildren: () => import('@frontend/feature/deposit').then(m => m.FeatureDepositModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccountRoutingModule {
}
