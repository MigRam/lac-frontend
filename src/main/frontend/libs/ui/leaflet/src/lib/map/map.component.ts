import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Injector, Input, OnInit, ViewChild } from "@angular/core";
import { LeafletDirective } from '@asymmetrik/ngx-leaflet';
import * as L from "leaflet";
import "leaflet.markercluster";
import { PopupComponent } from './popup.component';

const DEFAULT_TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const DEFAULT_TILE_LAYER_ATTRIBUTION = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

@Component({
  selector: "ui-map",
  template: `
     <section leaflet
           [ngClass]="mapStyles"
           [leafletOptions]="mapOptions"
           [leafletMarkerCluster]="markerClusterGroup"
           [leafletMarkerClusterOptions]="markerClusterOptions"
           (leafletMapReady)="onMapReady($event)"
           (leafletMarkerClusterReady)="onMarkerClusterReady($event)">
      </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {

  @Input() mapData;
  @Input() mapStyles;
  @ViewChild(LeafletDirective, { static: false }) leafletDirective: LeafletDirective;

  map: L.Map;
  mapOptions: L.MapOptions;
  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterOptions: L.MarkerClusterGroupOptions;
  markers: L.Marker;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    this.mapOptions = {
      layers: [L.tileLayer(DEFAULT_TILE_LAYER, { maxZoom: 18, attribution: DEFAULT_TILE_LAYER_ATTRIBUTION })],
      zoom: 1,
      center: L.latLng([0, 0])
    };

    this.markerClusterOptions =  {
      spiderfyOnMaxZoom: false,
      showCoverageOnHover: false,
      removeOutsideVisibleBounds: false,
      maxClusterRadius: 20
    };

    this.markerClusterGroup = L.markerClusterGroup(this.markerClusterOptions);
  }

  zoomFeature(map: L.Map) {
    const zoomButton = L.Control.extend({
      options: { position: "topleft" },
      onAdd: function () {
        const container = L.DomUtil.create("button", "leaflet-bar leaflet-button-control");
        container.setAttribute('title', 'Click to fit world map');
        container.innerHTML = "<i class='material-icons'>map</i>";
        container.style.cursor = "pointer";
        container.style.backgroundColor = "#fff";
        container.onclick = (e) => {
          e.preventDefault();
          map.fitWorld().setView([0, 0], 1);
        };
        return container;
      }
    });
    map.addControl(new zoomButton());
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.initDiscoveryMap(map);
  }

  initDiscoveryMap(map) {
    setTimeout(() => { map.invalidateSize() }, 0);
    map.zoomControl.setPosition('topright');
    map.addLayer(this.markerClusterGroup);
    this.zoomFeature(map);
  }

  onMarkerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;
    group.on("clusterclick", (e: any) => { e.layer.spiderfy() });
  }

  clusteringHits(data) {
    if (data) {
      this.updateClusters();
      this.renderMap(data);
      this.map.setView([0, 0], 1);
    } else {
      this.renderMap(data);
    }
  }

  renderMap(data) {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        this.renderMarkerCluster(data[i]);
      }
    }
  }

  renderMarkerCluster(entry) {
    const factory = this.resolver.resolveComponentFactory(PopupComponent);
    const component = factory.create(this.injector);
    component.instance.data = entry;
    component.changeDetectorRef.detectChanges();

    L.marker([entry['Geolocation'][0].split(",")[0], entry['Geolocation'][0].split(",")[1]])
      .on('click', <LeafletMouseEvent>(e: any) => {
        const zoom = this.map.getZoom();
        if (zoom === 1) {
          this.map.setView(e.latlng, 13);
        }
      })
      .bindPopup(component.location.nativeElement)
      .addTo(this.markerClusterGroup);
  }

  updateClusters() {
    this.markerClusterGroup.clearLayers();
    this.markerClusterGroup.refreshClusters();
  }


}
