import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Api } from './api';
import { ApiSelectorObject } from './api-selector-object';
import { ApiService } from './api.service';
import { OdataCollectionObject } from './odata/odata-collection-object';
import { OdataEntityObject } from './odata/odata-entity-object';

@Injectable()
export class ApiObjectService extends ApiService {

  constructor(
    private http: Http
  ) {
    super();
  }

  object(id: string, selector: ApiSelectorObject): Observable<OdataEntityObject> {
    return this.http.get(Api.OBJECT + "/Object(" + id + ")" + selector.toQueryString())
      .map(function(response: Response) { return new OdataEntityObject(response.json()); })
      .catch(this.handleError);
  }

  objects(selector: ApiSelectorObject): Observable<OdataCollectionObject> {
    return this.http.get(Api.OBJECT + "/Objects" + selector.toQueryString())
      .map(function(response: Response) { return new OdataCollectionObject(response.json()); })
      .catch(this.handleError);
  }
}
