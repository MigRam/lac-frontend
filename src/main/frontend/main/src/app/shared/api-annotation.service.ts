import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Api } from './api';
import { ApiSelectorAnnotation } from '../shared/api-selector-annotation';
import { ApiService } from './api.service';
import { OdataEntityAnnotationLayer } from '../shared/odata/odata-entity-annotation-layer';
import { OdataEntityManifest } from '../shared/odata/odata-entity-manifest';
import { OdataEntityCanvas } from '../shared/odata/odata-entity-canvas';
import { OdataCollectionAnnotation } from "../shared/odata/odata-collection-annotation";

@Injectable()
export class ApiAnnotationService extends ApiService {

  constructor(
      private http: Http
  ) {
      super();
  }

  manifest(id: string, selector: ApiSelectorAnnotation): Observable<OdataEntityManifest> {
    return this.http.get(Api.ANNOTATION + "/Manifest(" + id + ")" + selector.toQueryString())
      .map(function(response: Response) { return new OdataEntityManifest(response.json()); })
      .catch(this.handleError);
  }

  canvas(id: string, selector: ApiSelectorAnnotation): Observable<OdataEntityCanvas> {
    return this.http.get(Api.ANNOTATION + "/Canvas(" + id + ")" + selector.toQueryString())
      .map(function(response: Response) { return new OdataEntityCanvas(response.json()); })
      .catch(this.handleError);
  }

  layer(id: string, selector: ApiSelectorAnnotation): Observable<OdataEntityAnnotationLayer> {
    return this.http.get(Api.ANNOTATION + "/Layer(" + id + ")" + selector.toQueryString())
      .map(function(response: Response) { return new OdataEntityAnnotationLayer(response.json()); })
      .catch(this.handleError);
  }

  annotations(selector: ApiSelectorAnnotation): Observable<OdataCollectionAnnotation> {
    return this.http.get(Api.ANNOTATION + "/Annotations" + selector.toQueryString())
      .map(function(response: Response) { return new OdataCollectionAnnotation(response.json()); })
      .catch(this.handleError)
  }
}
