import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {depositFilter, VISIBILITY_FILTER} from "./filter.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'frontend-filters',
  template: `    
    <mat-form-field>
      <mat-label>Deposit</mat-label>
      <mat-select [formControl]="control">
        <mat-option *ngFor="let filter of filters;" [value]="filter.value">
          {{filter.label}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit, OnDestroy {

  @Input() active: VISIBILITY_FILTER;
  @Input() filters: depositFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();

  control: FormControl = new FormControl(this.active);

  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(val => {
      this.update.emit(val);
    });
  }

  ngOnDestroy(): void {

  }

}
