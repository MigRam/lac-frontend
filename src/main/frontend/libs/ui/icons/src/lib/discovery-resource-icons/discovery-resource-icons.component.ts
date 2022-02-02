import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { faFileAlt, faFileAudio, faFileCode, faFilePdf, faFileVideo, faImage } from '@fortawesome/free-regular-svg-icons';
import { faArchive, faFile } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'ui-discovery-resource-icons',
  templateUrl: './discovery-resource-icons.component.html',
  styleUrls: ['./discovery-resource-icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoveryResourceIconsComponent implements OnInit {

  @Input() resource;
  @Input() iconSize;

  resources: Array<any>;

  faArchive = faArchive;
  faFile = faFile;
  faVideo = faFileVideo;
  faAudio = faFileAudio;
  faFileAlt = faFileAlt;
  faPDF = faFilePdf;
  faImage = faImage;
  faCode = faFileCode;

  constructor() { }

  ngOnInit() {
    this.countResources(this.resource);
  }

  countResources(resources) {
    this.resources = resources.reduce(
      (b, c) => (
        (b[b.findIndex(d => d.mimetype === c)] || b[b.push({ mimetype: c, count: 0 }) - 1])
          .count++ , b), []
    );
  }


}
