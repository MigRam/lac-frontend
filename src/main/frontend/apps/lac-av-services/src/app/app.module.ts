import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { UiMaterialDesignModule } from '@frontend/ui/material-design';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsFormComponent } from './jobs-form/jobs-form.component';
import { JobsListItemComponent } from './jobs-list-item/jobs-list-item.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';

const lacAVServicesRoutes: Route[] = [
  { path: 'demo/services', component: DashboardComponent },
  { path: 'form', component: JobsFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    JobsListItemComponent,
    JobsFormComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    UiMaterialDesignModule,
    BrowserModule,
    RouterModule.forRoot(lacAVServicesRoutes, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
