import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EndpointsService} from '@frontend/data';
import {AuthenticationQuery, AuthenticationService} from '../+state';

@Component({
  selector: 'frontend-login',
  templateUrl: './login.component.html',
  styles: [`
  section {
    margin-top: 15px;
  }
  
  .login-full-width  > * {
    width: 100%;
  }
  
  .lac-logo {
    max-height: 3vh;
  }
  `]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  hide = true;
  logo = "lac/assets/images/logo-LAC.png";

  constructor(
    private authQuery: AuthenticationQuery,
    private authSvc: AuthenticationService
  ) {
  }

  ngOnInit() {  }

  submit() {
    if (this.loginForm.valid) {
      this.authSvc.login(this.loginForm.value.email, this.loginForm.value.password).subscribe();
    }
  }

  signin() {
    window.open(EndpointsService.RESETACCOUNT, "_blank");
  }

}
