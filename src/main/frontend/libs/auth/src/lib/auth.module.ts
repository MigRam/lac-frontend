import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { UiMaterialDesignModule } from '@frontend/ui/material-design';
import { LoginComponent } from './login/login.component';
import { UserStatusDirective } from './user-status/user-status.directive';

const authRoutes: Route[] = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiMaterialDesignModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [LoginComponent, UserStatusDirective],
  exports: [LoginComponent, UserStatusDirective],
  providers: []
})
export class AuthModule {}
