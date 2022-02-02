import { NgModule } from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DepositComponent } from './deposit/deposit.component';
import { ExploreAnnotationComponent } from "./explore/explore-annotation.component";
import { ExploreAnnotationsComponent } from "./explore/explore-annotations.component";
import { ExploreComponent } from './explore/explore.component';
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'explore', component: ExploreComponent },
    { path: 'annotation/:prefix/:id', component: ExploreAnnotationComponent },
    { path: 'annotation/:prefix/:id/:time', component: ExploreAnnotationComponent },
    { path: 'explore/annotation/:prefix/:id', component: ExploreAnnotationComponent },
    { path: 'explore/:search', component: ExploreComponent },
    { path: 'explore/:search/:skip', component: ExploreComponent },
    { path: 'explore/:search/:skip/:top', component: ExploreComponent },
    { path: 'annotations', component: ExploreAnnotationsComponent },
    { path: 'upload',component: DepositComponent,resolve:{url: 'externalUrlRedirectResolver'},data: {externalUrl: 'https://grails-dev.rrz.uni-koeln.de/ka3-test/demo/deposit'}},
    { path: 'admin',component: AdminComponent,resolve:{url: 'externalUrlRedirectResolver'},data: {externalUrl: 'https://grails-dev.rrz.uni-koeln.de/ka3-test/'}},
    { path: 'index', component: IndexComponent }
];

export function routeFactory(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    window.location.href = (route.data as any).externalUrl;
}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
        provide: 'externalUrlRedirectResolver',
        useValue: routeFactory
  }
]
})
export class AppRoutingModule {}