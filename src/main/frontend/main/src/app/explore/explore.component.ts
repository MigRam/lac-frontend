import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { ExploreService } from './explore.service';

@Component({
  selector: 'explore',
  template: `
  <explore-media [odata]="exploreService.odataEntityMedia"></explore-media>
  <explore-hits *ngIf="!exploreService.isMedia()"></explore-hits>
  `,
  styles: [`
  :host >>> #result {
    min-height: 2000px;
  }
  
  :host >>> em {
    color: #d9534f !important;
  }
  
  :host >>> .panel-heading {
    cursor: pointer;
  }
  
  :host >>> a:hover {
    cursor: pointer !important;
  }
  
  :host >>> .fullscreen {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    display: block;
  }  
  `],
  providers: [ ExploreService ]
})
export class ExploreComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public exploreService: ExploreService
  ) {}

  private parseParams(): void {
    let search: string = this.route.snapshot.params["search"];
    let filter: string = this.route.snapshot.params["filter"];
    let skip: number = this.route.snapshot.params["skip"];
    let top: number = this.route.snapshot.params["top"];
  
    this.exploreService.selectorQuery.search = (search === undefined || search === "*") ? null : search;
    this.exploreService.selectorQuery.filter = null;
    this.exploreService.selectorQuery.skip = skip === undefined ? 0 : +skip;
    this.exploreService.selectorQuery.top = top === undefined ? 10 : +top;

    console.log(this.exploreService);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (this.exploreService.navigateInternal !== true && event instanceof NavigationEnd) {
        this.parseParams();
        this.exploreService.query();
      }
    });
  }
}
