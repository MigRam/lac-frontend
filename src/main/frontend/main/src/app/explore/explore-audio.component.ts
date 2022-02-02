import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Http } from '@angular/http';
import {applyRedirects} from "@angular/router/src/apply_redirects";

@Component({
  selector: "explore-audio",
  templateUrl: "explore-audio.component.html"
})
export class ExploreAudioComponent implements OnChanges {

  @Input() src: string;

  audioSrc: string;

  loaded: boolean = false;

  audioAvailable: boolean = false;

  audioError: boolean = false;

  constructor(
    private http: Http
  ) {}

  loadAudio(): void {
    if (this.audioAvailable) return;
    let self = this;
    this.http.head(this.src).subscribe(
      response => {
          if (response.status==302)
          {
            window.location.href=response.url
          }
          if (response.status == 200) {
            console.error(response.statusText)
          this.audioSrc = this.src;
          this.audioAvailable = true;
        } else {
          setTimeout(function() { self.loadAudio() }, 1000);
        }
      },
      error => {
        console.log(error);
        this.audioError = true;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.loaded && changes["src"] && changes["src"].currentValue) {
      this.loaded = true;
      this.loadAudio();
    }
  }
}
