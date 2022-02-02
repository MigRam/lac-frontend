import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-account',
  templateUrl: './account.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
