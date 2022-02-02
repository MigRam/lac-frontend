import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { AbstractQueryService } from "@frontend/data";
import { merge } from "rxjs";
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

const PARAMS = new HttpParams();

@Component({
  selector: 'ui-search',
  templateUrl: './search.component.html',
  styles: [`
  .mat-form-field {
    margin: 5px;
    width: 60vw;
    padding: 0;
  }

  .mat-input-element {
    width: 40vw;
    padding: 0;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  @Input() msg;
  queryInput: FormControl = new FormControl();

  searchbarStream;

  constructor(
    private router: Router,
    private location: Location,
    public absQueryApiService: AbstractQueryService
  ) {
    this.searchbarStream = absQueryApiService;

    const search$ = this.queryInput.valueChanges
      .pipe(
        debounceTime(100),
        filter(query => query !== ''),
        map((e: string) => e.toLowerCase()),
        tap((query) => {
          this.adjustBrowserUrl(query);
          this.router.navigate(['/'])
        })
      );

    merge(search$)
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(val => {        
        this.queryInput.setValue(val);
        this.absQueryApiService.query(val);
        this.adjustBrowserUrl(val);
      })
  }

  adjustBrowserUrl(queryString) {
    const absoluteUrl = this.location.path().split('?')[0];
    const queryPart = queryString !== '' ? `=${encodeURI(queryString)} ` : '';
    this.location.replaceState(absoluteUrl, queryPart);
  }

  clearSearch() {
    this.queryInput.setValue('');
    this.adjustBrowserUrl('');
  }
}
