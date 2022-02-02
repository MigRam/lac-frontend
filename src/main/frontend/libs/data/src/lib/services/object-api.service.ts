import { Injectable } from '@angular/core';
import { HttpFactoryService } from './http-factory.service';
import { EndpointsService } from './endpoints.service';
import { Observable } from 'rxjs';
import { OdataEntityObject } from '../entities/odata-entity-object';
import { map, catchError } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectApiService {

  OBJECT_API_ENDPOINT = EndpointsService.OBJECT;

  constructor(
    private httpFactorySvc: HttpFactoryService
  ) { }

  getObject(id, selectorStringSet: HttpParams): Observable<any> {
    return this.httpFactorySvc.get(`${this.OBJECT_API_ENDPOINT}/Object(${id})`, selectorStringSet)
      .pipe(
        map(response => new OdataEntityObject(response)),
        catchError(this.httpFactorySvc.apiError)
      )
  }

  getObjects(selectorStringSet: HttpParams): Observable<any> {
    return this.httpFactorySvc.get(`${this.OBJECT_API_ENDPOINT}/Objects`, selectorStringSet)
      .pipe(
        map(response => new OdataEntityObject(response)),
        catchError(this.httpFactorySvc.apiError)
      )
  }
}
