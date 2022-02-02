import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AuthenticationQuery } from "@frontend/auth";
import { EndpointsService } from "@frontend/data";
import { VISIBILITY_FILTER } from "../filter/filter.model";
import { DepositStore, DepositStateEntities } from './deposit.store';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DepositService {

  DEPOSIT_API_ENDPOINT = EndpointsService.DEPOSIT;
  accessToken = this.authQuery['store']['storeValue']['user']['access_token'];

  depositHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.accessToken
  });

  constructor(
    private authQuery: AuthenticationQuery,
    private store: DepositStore,
    private http: HttpClient) {
  }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.store.updateFilter(filter);
  }

  getDocuments() {
    this.http.get(this.DEPOSIT_API_ENDPOINT, {
      headers: this.depositHeader
    })
      .subscribe(data => this.store.update({ entities: new DepositStateEntities(data) }))
  }

  getMetadata(url) {
    this.http.get(url + '/metadata/', {
      params: new HttpParams().set('access_token', `${this.accessToken}`)
    })
    .subscribe(console.log)
  }

  createObject() { }

  createObjectsByReference() { }

  createObjectsFull() { }

  getObjectStatus() { }

  getObjectMetadata() { }

  getObjectFile() { }

  updateObjectMetadata() { }

  updateObjectFileset() { }

  removeObjectFileset() { }

  removeObject() { }

}
