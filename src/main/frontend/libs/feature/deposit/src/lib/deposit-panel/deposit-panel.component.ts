import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { map, shareReplay, tap } from 'rxjs/operators';
import { DepositQuery, DepositService } from "../+state";

@Component({
  selector: 'frontend-deposit-panel',
  templateUrl: './deposit-panel.component.html',
  styleUrls: ['./deposit-panel.component.css']
})
export class DepositPanelComponent implements OnInit {

  isHandset$ = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  data$ = this.depositQuery.depositedData$;

  title = new FormControl('', [Validators.required]);
  abstract = new FormControl('');
  link = new FormControl('');

  constructor(
    private breakpointObserver: BreakpointObserver,
    private depositQuery: DepositQuery,
    private depositSvc: DepositService,
    private snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.depositSvc.getDocuments();
  }

  getErrorMessage() {
    return this.title.hasError('required') ? 'Please enter title' : '';
  }

  openBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  save() {

  }

  getMetadata(url) {
    this.depositSvc.getMetadata(url);
  }
}
