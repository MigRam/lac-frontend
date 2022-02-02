import { Component } from '@angular/core';
import { faBook, faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'frontend-root',
  template: `
  <frontend-navigation [links]="links" [authLinks]="authLinks">
    <main class="container">
        <router-outlet></router-outlet>
    </main>
  <frontend-footer>
  `
})
export class AppComponent {

  faHome = faHome;
  faBook = faBook;
  faSignIn = faSignInAlt;

  links = [
    { path: "/", label: "Home", icon: this.faHome },
    { path: "/docs", label: "User Guides", icon: this.faBook },
    { path: "/login", label: "Log In", icon: this.faSignIn }
  ];

  authLinks = [
    { path: "/", label: "Home", icon: this.faHome },
    { path: "/docs", label: "User Guides", icon: this.faBook },
    // { path: "/deposit", label: "Deposit", icon: this.faDeposit }
    // { path: "/account", label: "User", icon: this.faAccount },
    // { path: "/admin", label: "Admin", icon: this.faAdmin },
  ];
}
