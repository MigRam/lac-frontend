import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationQuery} from "../+state";
import {Subscription} from "rxjs";

@Directive({
  selector: '[frontendUserStatus]'
})
export class UserStatusDirective implements OnInit, OnDestroy {

  subscription: Subscription;
  @Input() frontendUserStatus: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authQuery: AuthenticationQuery
  ) { }

  ngOnInit(): void {
      this.subscription = this.authQuery.isLoggedIn$.subscribe(
        isLoggedIn => {
          this.viewContainer.clear();
          if (isLoggedIn) {
            if (this.frontendUserStatus) {
              this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
              this.viewContainer.clear();
            }
          } else {
            if (this.frontendUserStatus) {
              this.viewContainer.clear();
            } else {
              this.viewContainer.createEmbeddedView(this.templateRef);
            }
          }
        })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
