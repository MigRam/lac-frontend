import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Api } from './api';
import { ApiSelectorQuery } from './api-selector-query';
import { ApiService } from './api.service';
import { OdataCollectionQuery } from './odata/odata-collection-query';

@Injectable()
export class ApiQueryService extends ApiService {

  constructor(
      private http: Http
  ) {
    super();
  }

  get(selector: ApiSelectorQuery): Observable<OdataCollectionQuery> {
    return this.http.get(Api.QUERY + selector.toQueryString())
                    .map(function(response: Response) { return new OdataCollectionQuery(response.json()); })
                    .catch(this.handleError);
  }
}
