import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AuthenticationQuery, User} from "@frontend/auth";
import {Observable} from "rxjs";


@Component({
  selector: 'frontend-account-panel',
  templateUrl: './account-panel.component.html',
  styleUrls: ['./account-panel.component.css']
})
export class AccountPanelComponent implements OnInit {

  user$: Observable<User>;

  /** Based on the screen size, switch from standard to one column per row */
  cards$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            { title: 'User', cols: 2, rows: 1 },
            /*
          { title: 'Deposit', cols: 2, rows: 1 },
          { title: 'Collection', cols: 1, rows: 1 },
          { title: 'Bundle #1', cols: 1, rows: 1 },
          { title: 'Bundle #2', cols: 1, rows: 1 }
          */
          ];
        }

        return [
          { title: 'User', cols: 2, rows: 1 },
          /*
        { title: 'Deposit', cols: 1, rows: 1 },
        { title: 'Collection', cols: 1, rows: 3 },
        { title: 'Bundle #1', cols: 1, rows: 1 },
        { title: 'Bundle #2', cols: 1, rows: 1 }
        */
        ];
      })
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authQuery: AuthenticationQuery
  ) { }

  ngOnInit(): void {
    this.user$ = this.authQuery.user$;
  }
}
