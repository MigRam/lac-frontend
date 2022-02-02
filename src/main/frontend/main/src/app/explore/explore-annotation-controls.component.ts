import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Api } from '../shared/api';
import { OdataEntityCanvas } from "../shared/odata/odata-entity-canvas";

@Component({
    selector: 'explore-annotation-controls',
    templateUrl: 'explore-annotation-controls.component.html'
})
export class ExploreAnnotationControlsComponent {

    @Input() odataCanvas: OdataEntityCanvas;

    @Output() onLoadedMetadata = new EventEmitter();

    @Output() onPlay = new EventEmitter();

    @Output() onPause = new EventEmitter();

    @Output() onSeeked = new EventEmitter();

    @ViewChild("audio") audio: ElementRef;

    constructor(
      private domSanitizer: DomSanitizer
    ) {}

    getCurrentTime(): number {
      return this.audio.nativeElement.currentTime * 1000;
    }

    setCurrentTime(currentTime: number): void {
      this.audio.nativeElement.currentTime = currentTime;
    }

    getDuration(): number {
      return this.audio.nativeElement.duration;
    }

    emitLoadedMetadata() {
      this.onLoadedMetadata.emit();
    }

    emitPlay() {
      this.onPlay.emit();
    }

    emitPause() {
      this.onPause.emit();
    }

    emitSeeked() {
      this.onSeeked.emit();
    }

    mediaSrc(): SafeUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(Api.MEDIA + "/" + this.odataCanvas.media[0]["id"]);
    }
}
