import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MapComponent } from '@frontend/ui/leaflet';
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { DiscoveryQuery, DiscoveryService } from '../+state';

@Component({
  selector: 'frontend-discovery',
  templateUrl: './discovery.component.html',
  styles: [`
  .sidenav {
    width: 20em;
    padding: 0 30px;
    margin: 15px auto;
  }
  `]
})
export class DiscoveryComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild('mapContainer', { static: false, read: ViewContainerRef }) mapContainer;
  worldmapFactory: ComponentFactory<MapComponent>;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ODataQueryCollection$ = this.discoveryQueryStore.dataset$;
  ODataQueryFacets$ = this.discoveryQueryStore.facets$;

  exploreHint = 'Explore:: Browse the archive by category (showing top 5)';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private discoveryQueryStore: DiscoveryQuery,
    private discoverySvc: DiscoveryService,
    private resolver: ComponentFactoryResolver
  ) {

    this.worldmapFactory = this.resolver.resolveComponentFactory(MapComponent)

  }

  ngAfterViewInit() {
    const worldmap = this.mapContainer.createComponent(this.worldmapFactory);
    worldmap.instance.mapStyles = "discovery";
    this.ODataQueryCollection$.subscribe(data => {
      return worldmap.instance.clusteringHits(data);
    });
  }

  ngOnInit() {
    this.discoverySvc.startExplorePanel();
    this.discoverySvc.startFacetsPanel();
    this.discoverySvc.startMap();
  }

  ngOnDestroy() {
    this.discoveryQueryStore.clearStore();
  }

}
