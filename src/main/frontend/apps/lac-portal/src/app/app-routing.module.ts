import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from "@frontend/auth";
import { ImpressumComponent } from "@frontend/ui/core";

const lacRoutes: Routes = [
  { path: '', loadChildren: () => import('@frontend/feature/discovery').then(m => m.FeatureDiscoveryModule) },
  { path: 'login', loadChildren: () => import('@frontend/auth').then(m => m.AuthModule) },
  { path: 'docs', loadChildren: () => import('@frontend/feature/docs').then(m => m.FeatureDocsModule) },
  { path: 'deposit', loadChildren: () => import('@frontend/feature/deposit').then(m => m.FeatureDepositModule), canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('@frontend/feature/admin').then(m => m.FeatureAdminModule), canActivate: [AuthGuard] },
  { path: 'account', loadChildren: () => import('@frontend/feature/account').then(m => m.FeatureAccountModule), canActivate: [AuthGuard] },
  { path: 'elan-player', loadChildren: () => import('@frontend/feature/elan-player').then(m => m.FeatureElanPlayerModule) },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(lacRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
