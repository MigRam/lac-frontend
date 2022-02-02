import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Odata } from '../entities/odata';
import { EndpointsService } from './endpoints.service';
import { HttpFactoryService } from './http-factory.service';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QueryApiService {

  QUERY_API_ENDPOINT = EndpointsService.QUERY;

  constructor(
    private httpFactorySvc: HttpFactoryService
  ) { }

  query(selectorsToString: HttpParams): Observable<Odata> {
    return this.httpFactorySvc.get(this.QUERY_API_ENDPOINT, selectorsToString)
      .pipe(
        map(response => new Odata(response)),
        catchError(this.httpFactorySvc.apiError)
      )
  }
}
