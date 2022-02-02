import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpErrorResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { CustomHttpParamEncoder } from './http-encoder';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "content-Disposition": "attachment; metadata=true",
    'Authorization': '' // set auth token
  })
}
@Injectable({
  providedIn: 'root'
})
export class HttpFactoryService {

  constructor(private http: HttpClient) { }

  get(endpoint: string, selectors: any) {
    return this.http.request('GET', endpoint, {
      params: new HttpParams({ fromString: `${selectors}`, encoder: new CustomHttpParamEncoder() }),
      reportProgress: true
    })
  }

  create(endpoint: string, data: any) {
    return this.http.request('POST', endpoint, data);
  }

  update(endpoint: string, data: any) {
    // data.id
    return this.http.request('PATCH', endpoint, data);
  }

  delete(endpoint: string, data: any) {
    // id
    return this.http.request('DELETE', `${endpoint}/${data.id}`);
  }

  apiError(response: HttpErrorResponse) {
    if (response.error instanceof ErrorEvent) {
      console.error(`Client or Network error occurred:, ${response.error.message}`);
    } else {
      console.error(`Backend error occurred: ${response.status}, ` + `body was: ${response.error}`);
    }
    return throwError(response.error || ' ## ERROR: ' + response)
  }

}


/** UPLOAD Template
 *
 * public post(url: string, file: File): Observable<number>{

    var subject = new Subject<number>()
    const req = new HttpRequest('POST', url, file, {
        reportProgress: true,
    });

    this.httpClient.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round(100 * event.loaded / event.total);
            subject.next(percentDone);
          } else if (event instanceof HttpResponse) {
            subject.complete();
          }
    });
    return subject.asObservable();
}
 */
