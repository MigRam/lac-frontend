import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Http } from '@angular/http';

@Component({
  selector: "explore-image",
  templateUrl: "explore-image.component.html"
})
export class ExploreImageComponent implements OnChanges {

  @Input() src: string;

  @Input() width: number;

  @Input() height: number;

  imageSrc: string;

  imageAvailable: boolean = false;

  imageError: boolean = false;

  loaded: boolean = false;

  constructor(
    private http: Http
  ) {}

  loadImage(): void {
    if (this.imageAvailable) return;
    let self = this;
    this.http.head(this.src).subscribe(
      response => {
        if (response.status == 200) {
          this.imageSrc = this.src;
          this.imageAvailable = true;
        } else {
          setTimeout(function() { self.loadImage() }, 10000);
        }
      },
      error => {
        this.imageError = true;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.loaded && changes["src"] && changes["src"].currentValue) {
      this.loaded = true;
      this.loadImage();
    }
  }
}
