import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { faEye, faFileAlt, faFileAudio, faFileCode, faFilePdf, faFileVideo, faImage, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeadphonesAlt, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ui-discovery-media-file-icons',
  templateUrl: './discovery-media-file-icons.component.html',
  styleUrls: ['./discovery-media-file-icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoveryMediaFileIconsComponent {

  private _fileType: any;
  private _faSize: any;
  
  @Input()
  set fileType(fileType) {
    this._fileType = fileType;
  };

  get fileType() {
    return this._fileType;
  }

  @Input()
  set iconSize(size) {
    this._faSize = size;
  };

  get iconSize() {
    return this._faSize;
  }

  faHeadphones = faHeadphonesAlt;
  faPlay = faPlayCircle;
  faEye = faEye;
  faFileAlt = faFileAlt;
  faVideo = faFileVideo;
  faAudio = faFileAudio;
  faText = faFileAlt;
  faPDF = faFilePdf;
  faImage = faImage;
  faCode = faFileCode;
  faFile = faFile;

  constructor() { }


  isVideo() {
    return this._fileType.includes('video');
  }

  isAudio() {
    return this._fileType.includes('audio');
  }

  isPDF() {
    return this._fileType.includes('pdf');
  }

  isText() {
    return this._fileType.startsWith('text');
  }

  isXML() {
    return this._fileType.endsWith('eaf+xml');
  }

  isAnnotation() {
    return this._fileType.includes('eaf');
  }

  isImage() {
    return this._fileType.includes('image');
  }

  isMultipart() {
    return this._fileType.includes('multipart');
  }

  isLandingPage() {
    return this._fileType.includes('LandingPage');
  }

  isMetadata() {
    return this._fileType.includes('Metadata');
  }

}
