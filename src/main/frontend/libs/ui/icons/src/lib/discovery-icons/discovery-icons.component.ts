import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faFileAlt, faFileAudio, faFileCode, faFilePdf, faFileVideo, faImage } from '@fortawesome/free-regular-svg-icons';
import { faArchive, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ui-discovery-icons',
  templateUrl: './discovery-icons.component.html',
  styleUrls: ['./discovery-icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoveryIconsComponent {

  private _fileType;

  @Input()
  set fileType(fileType: any) {
    this._fileType = fileType;
  }

  get fileType() {
    return this._fileType;
  }

  @Input() iconSize;
  
  faArchive = faArchive;
  faFile = faFile;
  faVideo = faFileVideo;
  faAudio = faFileAudio;
  faText = faFileAlt;
  faPDF = faFilePdf;
  faImage = faImage;
  faCode = faFileCode;

  constructor() { }

}
