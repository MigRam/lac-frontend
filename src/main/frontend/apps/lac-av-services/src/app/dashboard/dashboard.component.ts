import { HttpClient, HttpParams } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { EndpointsService } from "@frontend/data";
import { Observable } from "rxjs";

@Component({
  selector: 'lac-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [` `]
})
export class DashboardComponent implements OnInit {

  job$: Observable<any>;
  jobs$: Observable<any>;
  PARAMS: HttpParams = new HttpParams();

  SERVICES_ENDPOINT = EndpointsService.SERVICES;

  service = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllJobs();
  }

  getJob(id) {
    this.job$ = this.http.get(`${this.SERVICES_ENDPOINT}/result/show/${id}`);
  }

  getAllJobs() {
    this.http.get(`${this.SERVICES_ENDPOINT}/jobOrder?max=100`, {
      headers: { "content-type": "application/json" }
    }).subscribe(console.log)
  }


}
